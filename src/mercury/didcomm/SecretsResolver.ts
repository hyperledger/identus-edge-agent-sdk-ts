import type { Secret, SecretsResolver } from "didcomm-node";
import * as Domain from "../../domain";
import {
  Curve,
  KeyTypes,
  VerificationMethod,
  VerificationMethods,
} from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";
import { Pluto } from "../../domain";
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
    const privateKeyBuffer = peerDid.privateKeys.find(
      (key) => key.keyCurve.curve === Curve.X25519
    );
    if (!privateKeyBuffer) {
      throw new Error(`Invalid PrivateKey Curve ${Curve.X25519}`);
    }
    const privateKey = this.apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
      raw: privateKeyBuffer.value,
    });
    const ecnumbasis = this.castor.getEcnumbasis(
      peerDid.did,
      privateKey.publicKey()
    );
    const id = `${peerDid.did.toString()}#${ecnumbasis}`;
    const secret: Secret = {
      id,
      type: "JsonWebKey2020",
      privateKeyJwk: {
        crv: Curve.X25519,
        kty: "OKP",
        d: privateKey.getEncoded().toString(),
        x: (publicKeyJWK.x as any).data,
      },
    };

    return secret;
  }
}
