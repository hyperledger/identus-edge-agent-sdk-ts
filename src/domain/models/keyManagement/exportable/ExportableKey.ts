import { Key } from "../Key";
import { JWK as _JWK } from "./JWK";
import { PEM as _PEM } from "./PEM";
import { PrivateKey } from "../PrivateKey";
import { PublicKey } from "../PublicKey";
import { base64url } from "multiformats/bases/base64";

/**
 * ExportableKey defines the formats a crypographic key can be converted to
 * Default is all
 */
export type ExportableKey = ExportableKey.All;

/**
 * Factory options to customise export / import functions
 */
interface Options {
  pemLabel: string;
}

/**
 * Declaration merge to contain key conversion functions
 */
export namespace ExportableKey {
  export type All = Common & JWK & PEM;

  export interface Common {
    to: {
      Buffer: () => Buffer;
      String: (encoding?: BufferEncoding) => string;
    };
  }

  export interface JWK {
    to: {
      JWK: (base?: _JWK.Base) => _JWK;
    };
  }

  export interface PEM {
    to: {
      PEM: () => string;
    };
  }

  /**
   * factory to create Key property with desired functions
   * which allow converting the Key raw into different formats
   * 
   * @param key
   * @param opts
   * @returns object with exportable functions
   */
  export const factory = (key: PublicKey | PrivateKey, opts: Options) => ({
    Buffer: () => toBuffer(key),
    // deprecate Hex, use String instead
    Hex: () => toString(key, "hex"),
    JWK: (base?: _JWK.Base) => _JWK.fromKey(key, base),
    PEM: () => _PEM.fromKey(key, opts.pemLabel),
    String: (encoding?: BufferEncoding) => toString(key, encoding)
  });

  const toBuffer = (key: Key): Buffer => Buffer.from(key.raw);

  const toString = (key: Key, encoding?: BufferEncoding) => {
    return encoding === "base64url"
      ? base64url.baseEncode(key.raw)
      : toBuffer(key).toString(encoding);
  };
}

export namespace ImportableKey {
  /**
   * factory to create Key property with desired functions
   * allows creation of a given Key through different data types
   * 
   * @param ctor - the Key Class
   * @param opts
   * @returns object with importable functions
   */
  export const factory = <T extends Key>(ctor: { new(bytes: any): T; }, opts: Options) => ({
    Buffer: (value: Buffer) => new ctor(value),
    // deprecate Hex, use String instead
    Hex: (value: string) => new ctor(Buffer.from(value, "hex")),
    PEM: (value: string) => new ctor(_PEM.toRaw(value, opts.pemLabel)),
    String: (value: string, encoding?: BufferEncoding) => {
      const arg = encoding === 'base64url'
        ? Buffer.from(base64url.baseDecode(value))
        : Buffer.from(value, encoding);

      return new ctor(arg);
    },
  });
}
