type algo = "secp256k1" | "x25519" | "ed25519";
type scope = "pub" | "priv";

export type RestorationIdentifier = `${algo}+${scope}`;

export abstract class StorableKey {
  abstract restorationIdentifier: RestorationIdentifier;
  abstract storableData: Uint8Array;
  // abstract index?: number;
}
