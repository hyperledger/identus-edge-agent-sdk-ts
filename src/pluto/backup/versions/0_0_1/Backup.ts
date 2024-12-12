import * as Domain from "../../../../domain";
import * as Models from "../../../models";
import { JWTVerifiableCredentialRecoveryId } from "../../../../pollux/models/JWTVerifiableCredential";
import { repositoryFactory } from "../../../repositories/builders/factory";
import { IBackupTask } from "../interfaces";
import { SDJWTVerifiableCredentialRecoveryId } from "../../../../pollux/models/SDJWTVerifiableCredential";
import { base64url } from "multiformats/bases/base64";

export class BackupTask implements IBackupTask {
  constructor(
    private readonly Pluto: Domain.Pluto,
    private readonly Repositories: ReturnType<typeof repositoryFactory>
  ) {}

  async run(): Promise<Domain.Backup.Schema> {
    const credentials = await this.getCredentialBackups();
    const didModels = await this.Repositories.DIDs.getModels();
    const dids = didModels.map(this.mapDid);
    const did_pairs = await this.getDidPairBackups();
    const keys = await this.getKeyBackups(didModels);
    const link_secret = await this.getLinkSecretBackup();
    const messages = await this.getMessageBackups();
    const mediators = await this.getMediatorBackups();

    const json: Domain.Backup.v0_0_1 = {
      version: "0.0.1",
      credentials,
      dids,
      did_pairs,
      keys,
      link_secret,
      messages,
      mediators
    };

    return json;
  }

  async getCredentialBackups(): Promise<Domain.Backup.v0_0_1.Credential[]> {
    const credentialModels = await this.Repositories.Credentials.getModels();
    return credentialModels.map(this.mapCredential);
  }

  async getDidPairBackups(): Promise<Domain.Backup.v0_0_1.DIDPair[]> {
    const pairLinks = await this.Repositories.DIDLinks.getModels({ selector: { role: Models.DIDLink.role.pair } });
    const didTuples = pairLinks.map<Domain.Backup.v0_0_1.DIDPair>(link => ({
      alias: link.alias ?? "",
      holder: link.hostId,
      recipient: link.targetId
    }));

    return didTuples;
  }

  async getKeyBackups(didModels: Models.DID[]): Promise<Domain.Backup.v0_0_1.Key[]> {
    const keys = await this.Repositories.Keys.get();
    const didKeyLinks = await this.Repositories.DIDKeyLinks.getModels();

    const backupKeys = keys.reduce<Domain.Backup.v0_0_1.Key[]>((acc, key) => {
      if (key.isExportable() && key.isStorable()) {
        const keyLink = didKeyLinks.find(x => x.keyId === key.uuid);
        const did = didModels.find(x => x.uuid === keyLink?.didId);
        const jwk = key.to.JWK();

        const backup: Domain.Backup.v0_0_1.Key = {
          recovery_id: key.recoveryId,
          key: base64url.baseEncode(Buffer.from(JSON.stringify(jwk))),
          index: key.index,
          did: did?.uuid,
        };
        return acc.concat(backup);
      }

      return acc;
    }, []);

    return backupKeys;
  }

  async getLinkSecretBackup(): Promise<Domain.Backup.v0_0_1.LinkSecret> {
    const linksecret = await this.Repositories.LinkSecrets.findOne();

    return linksecret?.secret ?? undefined;
  }

  async getMediatorBackups(): Promise<Domain.Backup.v0_0_1.Mediator[]> {
    const mediators = await this.Pluto.getAllMediators();
    const mapped = mediators.map<Domain.Backup.v0_0_1.Mediator>(x => ({
      holder_did: x.hostDID.toString(),
      mediator_did: x.mediatorDID.toString(),
      routing_did: x.routingDID.toString(),
    }));

    return mapped;
  }

  async getMessageBackups(): Promise<Domain.Backup.v0_0_1.Message[]> {
    const messageModels = await this.Repositories.Messages.getModels();
    return messageModels.map(x => base64url.baseEncode(Buffer.from(x.dataJson)));
  }

  private mapCredential = (model: Models.Credential): Domain.Backup.v0_0_1.Credential => {
    const isJWT = model.recoveryId === JWTVerifiableCredentialRecoveryId;
    const isSDJWT = model.recoveryId === SDJWTVerifiableCredentialRecoveryId;
    const recoveryId = isJWT ? "jwt" : isSDJWT ? "sdjwt" : "anoncred";
    const data = isJWT || isSDJWT ? JSON.parse(model.dataJson).id : model.dataJson;

    return {
      recovery_id: recoveryId,
      data: base64url.baseEncode(Buffer.from(data)),
    };
  };

  private mapDid = (model: Models.DID): Domain.Backup.v0_0_1.DID => ({
    did: model.uuid,
    alias: model.alias
  });
}
