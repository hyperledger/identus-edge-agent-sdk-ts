import { Secret, SecretsResolver } from "didcomm";
import * as Domain from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";
import Pluto from "../../pluto/Pluto";
import { base64url } from "multiformats/bases/base64";
import { DID, VerificationMethod, VerificationMethods } from "../../domain";
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
        return secretDID.did.toString() === xDID.did.toString();
      });
    });
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
      const did = await this.castor.resolveDID(found.did);

      const [publicKeyJWK] = did.coreProperties.reduce((all, property) => {
        if (property instanceof VerificationMethods) {
          const matchingValue: VerificationMethod | undefined =
            property.values.find((verificationMethod) => {
              return verificationMethod.id === secret_id;
            });

          if (matchingValue && matchingValue.publicKeyJwk) {
            return [...all, matchingValue.publicKeyJwk];
          }
        }
        return all;
      }, [] as Domain.PublicKeyJWK[]);

      if (publicKeyJWK) {
        const secret = this.mapToSecret(found, publicKeyJWK);
        debugger;
        return secret;
      }
    }

    return null;
  }

  //TODO: Get rid of this ANY for peerDID pluto should return correct type
  //TODO: DATA DOES NOT NEED TO EXIST THERE IN JWK
  private mapToSecret(peerDid: any, publicKeyJWK: Domain.PublicKeyJWK): Secret {
    const privateKey = {
      keyCurve: {
        curve: peerDid.curve,
      },
      value: Buffer.from(peerDid.privateKey),
    };
    const seed: Domain.Seed = { value: new Uint8Array() };
    const keyPair = this.apollo.createKeyPairFromPrivateKey(seed, privateKey);
    const ecnumbasis = this.castor.getEcnumbasis(peerDid.did, keyPair);
    const id = `${peerDid.did.toString()}#${ecnumbasis}`;

    const secret: Secret = {
      id,
      type: "JsonWebKey2020",
      privateKeyJwk: {
        crv: peerDid.curve,
        kty: "OKP",
        d: peerDid.privateKey,
        x: (publicKeyJWK.x as any).data,
      },
    };
    return secret;
  }
}
