import jweWasm from "jwe-wasm/jwe_rust_bg.wasm";
import * as Domain from "../domain";
import Agent from "./Agent";
import { isNil, isObject, validateSafe } from "../utils";

/**
 * define Agent requirements for Backup
 */
type BackupAgent = Pick<Agent, "apollo" | "pluto" | "seed">;

export class AgentBackup {
  private _jwe: typeof import("jwe-wasm") | undefined;

  constructor(
    public readonly Agent: BackupAgent
  ) {}

  /**
   * create JWE of data stored in Pluto
   * 
   * @returns {string}
   * @see restore
   */
  async createJWE(): Promise<string> {
    const backup = await this.Agent.pluto.backup();
    const masterSk = await this.masterSk();
    const jwk = masterSk.to.JWK();
    const JWE = await this.getJWE();
    const encrypted = JWE.encrypt(
      JSON.stringify(backup),
      JSON.stringify(jwk),
      'backup'
    );
    return encrypted;
  }

  /**
   * decode JWE and save data to store
   * 
   * @param jwe 
   * @see backup
   */
  async restore(jwe: string) {
    const masterSk = await this.masterSk();
    const jwk = masterSk.to.JWK();
    const JWE = await this.getJWE();
    const decoded = JWE.decrypt(
      jwe,
      'backup',
      JSON.stringify(jwk)
    );
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

  private async getJWE() {
    if (isNil(this._jwe)) {
      const module = await import("jwe-wasm");
      const wasmInstance = module.initSync({ module: jweWasm });
      await module.default(wasmInstance);
      this._jwe = module;
    }

    return this._jwe.JWE;
  }
}
