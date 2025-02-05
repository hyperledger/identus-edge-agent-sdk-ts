import type { Secret, SecretsResolver } from "didcomm-wasm";
import * as Domain from "../../domain";
import * as DIDURLParser from "../../castor/parser/DIDUrlParser";
import { PeerDID } from "../../peer-did/PeerDID";

export class DIDCommSecretsResolver implements SecretsResolver {
  constructor(
    private readonly apollo: Domain.Apollo,
    private readonly castor: Domain.Castor,
    private readonly pluto: Domain.Pluto
  ) { }

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
        if (property instanceof Domain.VerificationMethods) {
          const matchingValue: Domain.VerificationMethod | undefined =
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

  private mapToSecret(
    peerDid: PeerDID,
    publicKeyJWK: Domain.PublicKeyJWK
  ): Secret {
    const privateKeyBuffer = peerDid.privateKeys.find(
      (key) => key.keyCurve.curve === Domain.Curve.X25519
    );
    if (!privateKeyBuffer) {
      throw new Error(`Invalid PrivateKey Curve ${Domain.Curve.X25519}`);
    }
    const privateKey = this.apollo.createPrivateKey({
      type: Domain.KeyTypes.Curve25519,
      curve: Domain.Curve.X25519,
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
        crv: Domain.Curve.X25519,
        kty: "OKP",
        d: Buffer.from(privateKey.getEncoded()).toString(),
        x: publicKeyJWK.x,
      },
    };

    return secret;
  }
}
