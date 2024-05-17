import { CompactEncrypt, compactDecrypt, importJWK } from "jose";
import * as Domain from "../domain";
import Agent from "./Agent";
import { isObject, validateSafe } from "../utils";

export class AgentBackup {
  constructor(
    public readonly Agent: Agent
  ) {}

  /**
   * create JWE of data stored in Pluto
   * 
   * @returns {string}
   * @see restore
   */
  async createJWE(): Promise<string> {
    const masterJwk = await this.masterKeyJwk();
    const jwkKey = await importJWK(masterJwk);
    const backup = await this.Agent.pluto.backup();
    const data = Buffer.from(JSON.stringify(backup));
    const encrypter = new CompactEncrypt(data)
      .setProtectedHeader({
        alg: "ECDH-ES+A256KW",
        enc: "A256CBC-HS512",
      });

    const jwe = await encrypter.encrypt(jwkKey);
    return jwe;
  }

  /**
   * decode JWE and save data to store
   * 
   * @param jwe 
   * @see backup
   */
  async restore(jwe: string) {
    const masterJwk = await this.masterKeyJwk();
    const jwkKey = await importJWK(masterJwk);
    const decrypted = await compactDecrypt(jwe, jwkKey);
    const jsonStr = Buffer.from(decrypted.plaintext).toString();
    const json = JSON.parse(jsonStr);
    const backup = this.parseBackupJson(json);

    await this.Agent.pluto.restore(backup);
  }

  private parseBackupJson(json: unknown): Domain.Backup.Schema {
    if (isObject(json)) {
      const version = json.version ?? Domain.Backup.defaultVersion;
      switch (version) {
        case "0.0.1":
          if (validateSafe(json, Domain.Backup.v0_0_1)) {
            return json;
          }
      }
    }

    throw new Domain.AgentError.BackupVersionError();
  }

  /**
   * create a JWK for the MasterKey (X25519)
   * @returns JWK
   */
  private async masterKeyJwk() {
    const masterKey = this.Agent.apollo.createPrivateKey({
      [Domain.KeyProperties.type]: Domain.KeyTypes.Curve25519,
      [Domain.KeyProperties.curve]: Domain.Curve.X25519,
      [Domain.KeyProperties.seed]: Buffer.from(this.Agent.seed.value).toString("hex"),
    });

    if (!masterKey.isExportable()) {
      throw new Domain.AgentError.KeyNotExportableError();
    }

    return masterKey.to.JWK();
  }
}
