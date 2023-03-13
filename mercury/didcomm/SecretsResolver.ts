import { Secret, SecretsResolver } from "didcomm";
import * as Domain from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";
import Pluto from "../../pluto/Pluto";
import { base64 } from "multiformats/bases/base64";
import { DID } from "../../domain";
import * as DIDURLParser from "../../castor/parser/DIDUrlParser";

export class DIDCommSecretsResolver implements SecretsResolver {
  constructor(
    private readonly apollo: Apollo,
    private readonly castor: Castor,
    private readonly pluto: Pluto
  ) {}

  async find_secrets(secret_ids: string[]): Promise<string[]> {
    const peerDids = this.pluto.getAllPeerDIDs();

    return secret_ids.filter((secretId) => {
      const secretDID = DIDURLParser.parse(secretId);

      return peerDids.find((peerDIDSecret: any) => {
        const xDID = DIDURLParser.parse(peerDIDSecret.did);
        debugger;
        return secretDID.did.toString() === xDID.did.toString();
      });
    });

    // const secrets = peerDids.flatMap((x) => this.mapToSecret(x));
    // const filtered = secrets.filter((x) => {
    //   const xDID = DIDURLParser.parse(x.id);
    //   const secretMatch = secret_ids.find((did) => {
    //     const parsed = DIDURLParser.parse(did);

    //     return xDID.did.toString() === parsed.did.toString();
    //   });
    //   return secretMatch;
    // });
    // const mapped = filtered.map((x) => x.id);
    // return mapped;
  }

  async get_secret(secret_id: string): Promise<Secret | null> {
    const peerDids = this.pluto.getAllPeerDIDs();
    const secretDID = DIDURLParser.parse(secret_id);

    //TODO: URGENT TO CHANGE TYPES IN PLUTO
    const found = peerDids.find((peerDIDSecret: any) => {
      const xDID = DIDURLParser.parse(peerDIDSecret.did);

      return secretDID.did.toString() === xDID.did.toString();
    }) as any;

    if (found) {
      const privateKey = {
        keyCurve: {
          curve: found.curve,
        },
        value: Buffer.from(found.privateKey),
      };
      debugger;
      const seed: Domain.Seed = { value: new Uint8Array() };
      const keyPair = this.apollo.createKeyPairFromPrivateKey(seed, privateKey);
      const ecnumbasis = this.castor.getEcnumbasis(found.did, keyPair);
      const id = `${found.did.toString()}#${ecnumbasis}`;
      const secret: Secret = {
        id,
        type: "JsonWebKey2020",
        privateKeyJwk: {
          format: "JWK",
          value: this.apollo.getPrivateJWKJson(id, keyPair),
        },
      };
      debugger;
      return secret;
    }

    return null;
  }

  //TODO: Get rid of this ANY for peerDID pluto should return correct type
  private mapToSecret(peerDid: any): Secret {
    const privateKey = {
      keyCurve: {
        curve: peerDid.curve,
      },
      value: base64.baseDecode(peerDid.privateKey),
    };
    const seed: Domain.Seed = { value: new Uint8Array() };
    const keyPair = this.apollo.createKeyPairFromPrivateKey(seed, privateKey);
    const ecnumbasis = this.castor.getEcnumbasis(peerDid.did, keyPair);
    const id = `${peerDid.did.toString()}#${ecnumbasis}`;

    const secret: Secret = {
      id,
      type: "JsonWebKey2020",
      privateKeyJwk: {
        format: "JWK",
        value: this.apollo.getPrivateJWKJson(id, keyPair),
      },
    };

    return secret;
  }
}
