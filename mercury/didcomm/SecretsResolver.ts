import { Secret, SecretsResolver } from "didcomm";
import * as Domain from "../../domain";
import { Curve, VerificationMethod, VerificationMethods } from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";
import Pluto from "../../pluto/Pluto";
import * as DIDURLParser from "../../castor/parser/DIDUrlParser";

export class DIDCommSecretsResolver implements SecretsResolver {
  constructor(
    private readonly apollo: Apollo,
    private readonly castor: Castor,
    private readonly pluto: Pluto
  ) {}

  async find_secrets(secret_ids: string[]): Promise<string[]> {
    const peerDids = await this.pluto.getAllPeerDIDs();

    return secret_ids.filter((secretId) => {
      const secretDID = DIDURLParser.parse(secretId);
      return peerDids.find((peerDIDSecret: any) => {
        return secretDID.did.toString() === peerDIDSecret.did.toString();
      });
    });
  }

  async get_secret(secret_id: string): Promise<Secret | null> {
    const peerDids = await this.pluto.getAllPeerDIDs();

    const secretDID = DIDURLParser.parse(secret_id);
    const found = peerDids.find((peerDIDSecret: any) => {
      return secretDID.did.toString() === peerDIDSecret.did.toString();
    });
    if (found) {
      const did = await this.castor.resolveDID(found.did.toString());

      const [publicKeyJWK] = did.coreProperties.reduce((all, property) => {
        if (property instanceof VerificationMethods) {
          const matchingValue: VerificationMethod | undefined =
            property.values.find(
              (verificationMethod) => verificationMethod.id === secret_id
            );

          if (matchingValue && matchingValue.publicKeyJwk) {
            return [...all, matchingValue.publicKeyJwk];
          }
        }
        return all;
      }, [] as Domain.PublicKeyJWK[]);

      if (publicKeyJWK) {
        const secret = this.mapToSecret(found, publicKeyJWK);
        return secret;
      }
    }
    return null;
  }

  //TODO: Get rid of this ANY for peerDID pluto should return correct type
  //TODO: DATA DOES NOT NEED TO EXIST THERE IN JWK
  private mapToSecret(
    peerDid: Domain.PeerDID,
    publicKeyJWK: Domain.PublicKeyJWK
  ): Secret {
    const privateKey = peerDid.privateKeys.find(
      (key) => key.keyCurve.curve === Curve.X25519
    );
    if (!privateKey) {
      throw new Error(`Invalid PrivateKey Curve ${Curve.X25519}`);
    }
    const seed: Domain.Seed = { value: new Uint8Array() };
    const keyPair = this.apollo.createKeyPairFromPrivateKey(privateKey, seed);
    const ecnumbasis = this.castor.getEcnumbasis(peerDid.did, keyPair);
    const id = `${peerDid.did.toString()}#${ecnumbasis}`;
    const secret: Secret = {
      id,
      type: "JsonWebKey2020",
      privateKeyJwk: {
        crv: privateKey.keyCurve.curve,
        kty: "OKP",
        d: privateKey.value,
        x: (publicKeyJWK.x as any).data,
      },
    };
    return secret;
  }
}
