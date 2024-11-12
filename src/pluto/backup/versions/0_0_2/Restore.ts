import * as Domain from "../../../../domain";
import { Ed25519PrivateKey } from "../../../../apollo/utils/Ed25519PrivateKey";
import { Secp256k1PrivateKey } from "../../../../apollo/utils/Secp256k1PrivateKey";
import { X25519PrivateKey } from "../../../../apollo/utils/X25519PrivateKey";
import { AnonCredsCredential } from "../../../../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential } from "../../../../pollux/models/JWTVerifiableCredential";
import { notEmptyString, notNil, validate } from "../../../../utils";
import { IRestoreTask } from "../interfaces";
import { base64url } from "multiformats/bases/base64";

export class RestoreTask implements IRestoreTask {
  constructor(
    private readonly Pluto: Domain.Pluto,
    private readonly backup: Domain.Backup.v0_0_2,
  ) { }

  async run(): Promise<void> {
    validate(this.backup, Domain.Backup.v0_0_2);
    await this.restoreCredentials();
    await this.restoreDids();
    await this.restoreDidPairs();
    await this.restoreKeys();
  }

  async restoreCredentials() {
    const credentials = this.backup.credentials.map<Domain.Credential>(item => {
      const decoded = Buffer.from(base64url.baseDecode(item.data)).toString()
      if (item.recovery_id === "jwt") {
        return JWTCredential.fromJWS(decoded);
      }
      if (item.recovery_id === "anoncred") {
        return AnonCredsCredential.fromJson(decoded);
      }
      throw new Domain.PlutoError.RestoreCredentialInvalidError();
    });

    await Promise.all(credentials.map(x => this.Pluto.storeCredential(x)));
  }

  async restoreDids() {
    await Promise.all(
      this.backup.dids.map(x => this.Pluto.storeDID(Domain.DID.from(x.did), [], x.alias))
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
    return Promise.all(this.backup.keys.map(item => {

      const jwk = JSON.parse(Buffer.from(base64url.baseDecode(item.key)).toString());
      const key = this.jwkToDomain(jwk);
      if (notNil(item.index)) {
        key.keySpecification.set(Domain.KeyProperties.index, item.index.toString());
      }
      if (notEmptyString(item.did)) {
        return this.Pluto.storeDID(Domain.DID.from(item.did), key);
      } else {
        return this.Pluto.storePrivateKey(key);
      }
    })
    )
  }

  private jwkToDomain(jwk: Domain.JWK): Domain.PrivateKey {
    if ((jwk.kty === "OKP" || jwk.kty === "EC") && notEmptyString(jwk.d)) {
      switch (jwk.crv) {
        case Domain.Curve.SECP256K1.toLowerCase():
          return Secp256k1PrivateKey.from.String(jwk.d, "base64url");

        case Domain.Curve.ED25519:
          return Ed25519PrivateKey.from.String(jwk.d, "base64url");

        case Domain.Curve.X25519:
          return X25519PrivateKey.from.String(jwk.d, "base64url");
      }

      throw new Domain.PlutoError.RestoreKeyInvalidError();
    }

    throw new Domain.PlutoError.RestoreJWKInvalidError();
  }
}
