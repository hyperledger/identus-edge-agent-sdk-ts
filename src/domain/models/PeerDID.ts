import type { DID, KeyCurve } from ".";

export class PeerDID {
  constructor(
    public readonly did: DID,
    public readonly privateKeys: Array<{
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
    }>
  ) {}
}
