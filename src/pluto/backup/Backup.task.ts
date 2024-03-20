import { Domain, JWTVerifiableCredentialRecoveryId } from "../..";
import * as Models from "../models";
import { repositoryFactory } from "../repositories";

export class PlutoBackupTask {
  constructor(
    private readonly Repositories: ReturnType<typeof repositoryFactory>
  ) {}

  async run(): Promise<Domain.Pluto.Backup> {
    const credentials = await this.getCredentialBackups();
    const didModels = await this.Repositories.DIDs.getModels();
    const dids = didModels.map(this.mapDid);
    const did_pairs = await this.getDidPairBackups(didModels);
    const keys = await this.getKeyBackups(didModels);
    const link_secret = await this.getLinkSecretBackup();
    const messages = await this.getMessageBackups();

    const json: Domain.Pluto.Backup = {
      credentials,
      dids,
      did_pairs,
      keys,
      link_secret,
      messages,
    };

    return json;
  }

  async getCredentialBackups(): Promise<Domain.Pluto.Backup.Credential[]> {
    const credentialModels = await this.Repositories.Credentials.getModels();
    return credentialModels.map(this.mapCredential);
  }

  async getDidPairBackups(didModels: Models.DID[]): Promise<Domain.Pluto.Backup.DIDPair[]> {
    const pairLinks = await this.Repositories.DIDLinks.getModels({ selector: { role: Models.DIDLink.role.pair } });
    const didTuples = pairLinks.map<Domain.Pluto.Backup.DIDPair>(link => {
      const host = didModels.find(x => x.uuid === link.hostId);
      const target = didModels.find(x => x.uuid === link.targetId);

      return {
        alias: link.alias!,
        holder: host!.uuid,
        recipient: target!.uuid
      };
    });

    return didTuples;
  }

  async getKeyBackups(didModels: Models.DID[]): Promise<Domain.Pluto.Backup.Key[]> {
    const keys = await this.Repositories.Keys.get();
    const didKeyLinks = await this.Repositories.DIDKeyLinks.getModels();

    const backupKeys = keys.reduce<Domain.Pluto.Backup.Key[]>((acc, key) => {
      if (key.isExportable()) {
        // ?? this backup model does not support keys <> dids
        // const keyLinks = didKeyLinks.filter(x => x.keyId === key.uuid);
        // const keyDids = didModels.filter(did => keyLinks.find(x => x.didId === did.uuid));

        const keyLink = didKeyLinks.find(x => x.keyId === key.uuid);
        const did = didModels.find(x => x.uuid === keyLink?.didId);

        const backup: Domain.Pluto.Backup.Key = {
          key: Buffer.from(JSON.stringify(key.to.JWK())).toString("base64url"),
          index: key.index,
          did: did?.uuid,
        };

        return acc.concat(backup);
      }

      return acc;
    }, []);

    return backupKeys;
  }

  async getLinkSecretBackup(): Promise<Domain.Pluto.Backup.LinkSecret> {
    const linksecret = await this.Repositories.LinkSecrets.findOne();

    return !linksecret ? undefined : Buffer.from(linksecret.secret).toString("base64url");
  }

  async getMessageBackups(): Promise<Domain.Pluto.Backup.Message[]> {
    const messageModels = await this.Repositories.Messages.getModels();
    return messageModels.map(x => Buffer.from(x.dataJson).toString("base64url"));
  }

  mapCredential = (model: Models.Credential): Domain.Pluto.Backup.Credential => {
    const data = model.recoveryId === JWTVerifiableCredentialRecoveryId
      ? JSON.parse(model.dataJson).id
      : Buffer.from(model.dataJson).toString("base64url");

    return {
      data,
      recoveryId: model.recoveryId,
    };
  };

  mapDid = (model: Models.DID): Domain.Pluto.Backup.DID => ({
    did: model.uuid,
    alias: model.alias
  });
}
