
export interface StorableKey {
  recoveryId: string;
  raw: Uint8Array;
  index?: number;
}

export namespace StorableKey {
  namespace RecoveryId {
    export type algorithm = "secp256k1" | "x25519" | "ed25519";
    export type suffix = privacy;
    export type privacy = "pub" | "priv";
  }

  /**
   * Factory for RecoveryId.
   * Nomenclature:
   *   - algorithm first
   *   - arbitrary suffixes for customisation
   *   - separated by "+"
   * 
   * @param algorithm 
   * @param suffix 
   * @returns {string}
   */
  export const recoveryId = (algorithm: RecoveryId.algorithm, ...suffix: RecoveryId.suffix[]) => `${[algorithm, ...suffix].join("+")}`;
}
