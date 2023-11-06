
export abstract class StorableKey {
  abstract recoveryId: StorableKey.RecoveryId;
  abstract storableData: Uint8Array;
  // abstract index?: number;
}

export namespace StorableKey {
  export type RecoveryId = `${RecoveryId.algo}+${RecoveryId.suffix}`;

  export namespace RecoveryId {
    export type algo = "secp256k1" | "x25519" | "ed25519";
    export type suffix = "pub" | "priv";
  }
}
