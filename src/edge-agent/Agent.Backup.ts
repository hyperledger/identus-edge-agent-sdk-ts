import Pako from "pako";
import * as Domain from "../domain";
import Agent from "./Agent";
import { Version } from "../domain/backup";
import { isObject, validateSafe } from "../utils";


/**
 * define Agent requirements for Backup
 */
type BackupAgent = Pick<Agent, "apollo" | "pluto" | "pollux" | "seed">;
type BackupExclude = "messages" | "mediators" | "link_secret";

type MasterKey = Domain.PrivateKey & Domain.ExportableKey.Common & Domain.ExportableKey.JWK & Domain.ExportableKey.PEM

export type BackupOptions = {
  version?: Version
  key?: MasterKey
  compress?: boolean
  excludes?: BackupExclude[]
}

export class AgentBackup {
  constructor(
    public readonly Agent: BackupAgent
  ) {}

  /**
 * Creates a JWE (JSON Web Encryption) containing the backup data stored in Pluto.
 * The data can optionally be encrypted using a custom master key, compressed, 
 * and filtered to exclude specified fields.
 * 
 * @param {BackupOptions} [options] - Optional settings for the backup.
 * @param {Version} [options.version] - Specifies the version of the backup data.
 * @param {MasterKey} [options.key] - Custom master key used for encrypting the backup.
 * @param {boolean} [options.compress] - If true, compresses the JWE using DEFLATE.
 * @param {BackupExclude[]} [options.excludes] - Keys to exclude from the backup data 
 * (e.g., "messages", "mediators", "link_secret"). Arrays are cleared, and strings are set to empty strings.
 * 
 * @returns {Promise<string>} - A promise that resolves to the JWE string.
 * 
 * @see restore - Method to restore data from a JWE string.
 */
  async createJWE(options?: BackupOptions): Promise<string> {
    await this.Agent.pollux.start();
    
    let backup = await this.Agent.pluto.backup(options?.version);
    if (options?.excludes && Array.isArray(options.excludes)) {
      backup = this.applyExclusions(backup, options.excludes);
    }
    const backupStr = options?.compress ? this.compress(JSON.stringify(backup)) : JSON.stringify(backup);
    const masterSk = options?.key ?? await this.masterSk();
    const jwk = masterSk.to.JWK();
    
    return this.Agent.pollux.jwe.JWE.encrypt(
      backupStr,
      JSON.stringify(jwk),
      'backup',
    );
  }

  /**
   * Decodes a JWE (JSON Web Encryption) string and restores the backup data to the store.
   * If the JWE is compressed (Base64-encoded), it will attempt to decompress it first.
   * 
   * @param {string} jwe - The JWE string containing the encrypted backup data.
   * @param {BackupOptions} [options] - Optional settings for the backup.
   * @param {Version} [options.version] - Specifies the version of the restore data.
   * @param {MasterKey} [options.key] - Custom master key used for decrypting the backup.
   * @param {boolean} [options.compress] - If true, compresses the JWE using INFLATE.
   * 
   * @returns {Promise<void>} - A promise that resolves when the data is successfully restored.
   * 
   * @see createJWE - Method to create a JWE from the stored backup data.
   */
  async restore(jwe: string, options?: BackupOptions) {
    await this.Agent.pollux.start();
    const masterSk = options?.key ?? await this.masterSk();

    const jwk = masterSk.to.JWK();
    const decoded = this.Agent.pollux.jwe.JWE.decrypt(
      jwe,
      'backup',
      JSON.stringify(jwk),
    );
    let jsonStr: string;
    if (options?.compress) {
      jsonStr = this.decompress(new TextDecoder().decode(decoded));
    } else {
      jsonStr = Buffer.from(decoded).toString();
    }    
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
          break;
      }
    }
    throw new Domain.AgentError.BackupVersionError();
  }

  /**
 * Compresses a JSON object into a Base64-encoded string using DEFLATE.
 * 
 * - Uses `level: 9` for maximum compression and `strategy: Z_FILTERED` 
 *   (optimized for repetitive patterns, common in JSON data).
 * - Converts the JSON to a string, compresses it, and encodes it in Base64.
 * 
 * @param {unknown} json - The JSON object to compress.
 * @returns {string} - The Base64-encoded compressed string.
 */
  private compress(json: unknown): string {
    // Strategy 1 is 
    return Buffer.from(Pako.deflate(JSON.stringify(json), {level: 9, strategy: 1})).toString('base64');
  }

  /**
 * Decompresses a Base64-encoded string into its original JSON representation.
 * 
 * - Decodes the Base64 string to a binary buffer.
 * - Uses DEFLATE to decompress the data and converts it back to a JSON string.
 * - Parses and returns the JSON object.
 * 
 * @param {string} data - The Base64-encoded compressed string.
 * @returns {string} - The decompressed JSON string.
 */
  private decompress(data: string): string {
    const compressedData = Buffer.from(data, 'base64');
    return JSON.parse(Pako.inflate(compressedData, {to: 'string'}));
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
  /**
 * Modifies the backup object by applying exclusions.
 * Sets excluded array values to empty arrays and string values to empty strings.
 *
 * @param {Domain.Backup.Schema} backup - The backup object to be modified.
 * @param {BackupExclude[]} excludes - An array of keys to exclude from the backup.
 * @returns {Domain.Backup.Schema} The modified backup object.
 */
  private applyExclusions(backup: Domain.Backup.Schema, excludes: BackupExclude[]): Domain.Backup.Schema {
    const tmp = {...backup};
    for (const exclude of excludes) {
      switch (exclude) {
        case "messages":
        case "mediators":
          tmp[exclude] = [];
          break;
        case "link_secret":
          tmp[exclude] = undefined;
          break;
      }
    }
    return tmp;
  }
}
