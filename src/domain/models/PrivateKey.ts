import { KeyCurve } from "./KeyCurve";

/**
 * Instance of a PrivateKey
 * @interface PrivateKey
 * @typedef {PrivateKey}
 */
export interface PrivateKey {
  /**
   * Instance of a KeyCurve
   *
   * @type {KeyCurve}
   */
  keyCurve: KeyCurve;
  /**
   * Value as Uint8Array, buffer like
   *
   * @type {Uint8Array}
   */
  value: Uint8Array;
}
