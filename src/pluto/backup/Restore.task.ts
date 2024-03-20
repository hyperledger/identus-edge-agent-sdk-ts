import { AnonCredsCredential, AnonCredsRecoveryId, Domain, Ed25519PrivateKey, JWTCredential, JWTVerifiableCredentialRecoveryId, Secp256k1PrivateKey, X25519PrivateKey } from "../..";
import { JWK } from "../../domain";

export class PlutoRestoreTask {
  constructor(
    private readonly Pluto: Domain.Pluto,
    private readonly backup: Domain.Pluto.Backup,
  ) {}

  async run(): Promise<void> {
    await this.restoreCredentials();
    await this.restoreDids();
    await this.restoreDidPairs();
    await this.restoreKeys();
    await this.restoreLinkSecret();
    await this.restoreMessages();
  }

  async restoreCredentials() {
    const credentials = this.backup.credentials.map<Domain.Credential>(item => {
      if (item.recoveryId === JWTVerifiableCredentialRecoveryId) {
        return JWTCredential.fromJWT(item.data);
      }

      if (item.recoveryId === AnonCredsRecoveryId) {
        const jsonStr = Buffer.from(item.data, "base64url").toString();
        const json = JSON.parse(jsonStr);
        return new AnonCredsCredential(json);
      }

      throw new Error();
      // ?? handle not matched
    });

    await Promise.all(credentials.map(x => this.Pluto.storeCredential(x)));
  }

  async restoreDids() {
    await Promise.all(
      this.backup.dids.map(x => this.Pluto.storeDID(Domain.DID.from(x.did), x.alias))
    );
  }

  async restoreDidPairs() {
    await Promise.all(
      this.backup.did_pairs.map(item => {
        const host = Domain.DID.from(item.holder);
        const target = Domain.DID.from(item.recipient);

        return this.Pluto.storeDIDPair(host, target, item.alias);
      })
    );
  }

  async restoreKeys() {
    this.backup.keys.forEach(item => {
      const jwk: JWK = JSON.parse(Buffer.from(item.key, "base64url").toString());
      const key = this.jwkToDomain(jwk, item.index);

      if (item.did) {
        this.Pluto.storeDID(Domain.DID.from(item.did), undefined, key);
      }
      else {
        this.Pluto.storePrivateKey(key);
      }
    });
  }

  private jwkToDomain(jwk: JWK, index?: number): Domain.PrivateKey {
    if (jwk.kty === "OKP") {
      // TODO jwk.crv should be lowercase
      if (jwk.crv === Domain.Curve.SECP256K1) {
        const key = Secp256k1PrivateKey.from.String(jwk.d!, "base64url");

        if (index) {
          key.keySpecification.set(Domain.KeyProperties.index, index?.toString());
        }

        return key;
      }

      if (jwk.crv === Domain.Curve.ED25519) {
        return Ed25519PrivateKey.from.String(jwk.d!, "base64url");
      }

      if (jwk.crv === Domain.Curve.X25519) {
        return X25519PrivateKey.from.String(jwk.d!, "base64url");
      }
    }

    // TODO improve
    throw new Error("key not handled");
  }

  async restoreLinkSecret() {
    if (this.backup.link_secret) {
      const secret = Buffer.from(this.backup.link_secret, "base64url").toString();
      const linkSecret = new Domain.LinkSecret(secret);
      await this.Pluto.storeLinkSecret(linkSecret);
    }
  }

  async restoreMessages() {
    const msgs = this.backup.messages.map<Domain.Message>(item => {
      const data = Buffer.from(item, "base64url").toString();
      const msg = Domain.Message.fromJson(data);
      return msg;
    });

    await this.Pluto.storeMessages(msgs);
  }
}
