import * as Domain from "../domain";
import Agent from "./Agent";
import { isObject, validateSafe } from "../utils";

export class AgentBackup {
  constructor(
    public readonly Agent: Agent
  ) { }

  /**
   * create JWE of data stored in Pluto
   * 
   * @returns {string}
   * @see restore
   */
  async createJWE(): Promise<string> {
    await this.Agent.pollux.start();
    const backup = await this.Agent.pluto.backup();
    const masterSk = await this.masterSk();
    const jwk = masterSk.to.JWK();
    const jwe = this.Agent.pollux.jwe.JWE.encrypt(
      JSON.stringify(backup),
      JSON.stringify(jwk),
      'backup'
    )
    return jwe;
  }

  /**
   * decode JWE and save data to store
   * 
   * @param jwe 
   * @see backup
   */
  async restore(jwe: string) {
    await this.Agent.pollux.start();
    const masterSk = await this.masterSk();
    const jwk = masterSk.to.JWK();
    const decoded = this.Agent.pollux.jwe.JWE.decrypt(
      jwe,
      'backup',
      JSON.stringify(jwk)
    )
    const jsonStr = Buffer.from(decoded).toString();
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
  private async masterSk() {
    const masterKey = this.Agent.apollo.createPrivateKey({
      [Domain.KeyProperties.type]: Domain.KeyTypes.Curve25519,
      [Domain.KeyProperties.curve]: Domain.Curve.X25519,
      [Domain.KeyProperties.seed]: Buffer.from(this.Agent.seed.value).toString("hex"),
      [Domain.KeyProperties.derivationPath]: "m/0'/0'/0'"
    });
    if (!masterKey.isExportable()) {
      throw new Domain.AgentError.KeyNotExportableError();
    }
    return masterKey;
  }
}

'{"kty":"OKP","crv":"X25519","x":"4NIOyyno4KLogqRb_TTF6qo6ExLYCSxwawzJ7XHBfCw","d":"UJrqA2njEcXAboC-AqFnw89xZPL-y8-Y3-f9ny3FD2s"}'