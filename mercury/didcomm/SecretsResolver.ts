import * as DIDComm from 'didcomm';
import * as Domain from "../../domain";
import Apollo from 'apollo/Apollo';
import Castor from 'castor/Castor';
import Pluto from 'pluto/Pluto';

export class DIDCommSecretsResolver implements DIDComm.SecretsResolver {
  constructor(
    private readonly apollo: Apollo,
    private readonly castor: Castor,
    private readonly pluto: Pluto,
  ) { }

  async get_secret(secret_id: string): Promise<DIDComm.Secret | null> {
    const peerDids = this.pluto.getAllPeerDIDs();
    const secrets = peerDids.flatMap(x => this.mapToSecret(x));
    const secret = secrets.find(x => x.id === secret_id);

    return secret ?? null;
  }

  async find_secrets(secret_ids: string[]): Promise<string[]> {
    const peerDids = this.pluto.getAllPeerDIDs();
    const secrets = peerDids.flatMap(x => this.mapToSecret(x));
    const filtered = secrets.filter(x => secret_ids.includes(x.id));
    const mapped = filtered.map(x => x.id);

    return mapped;
  }

  private mapToSecret(peerDid: Domain.PeerDID): DIDComm.Secret[] {
    return peerDid.privateKeys.map(privateKey => {
      const seed: Domain.Seed = { value: new Uint8Array() };
      const keyPair = this.apollo.createKeyPairFromPrivateKey(seed, privateKey);
      const ecnumbasis = "";
      // const ecnumbasis = this.castor.getEcnumbasis(peerDid.did, keyPair);
      const id = `${peerDid.did.toString()}#${ecnumbasis}`;

      const secret: DIDComm.Secret = {
        id,
        type: "JsonWebKey2020",
        secret_material: {
          format: "JWK",
          value: ""
          // value: this.apollo.getPrivateJWKJson(id, keyPair)
        }
      };

      return secret;
    });
  }
}