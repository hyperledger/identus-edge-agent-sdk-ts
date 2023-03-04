import * as ecc from "tiny-secp256k1";
import { BIP32Factory } from "bip32";

import { DerivationAxis } from "./DerivationAxis";
import { DerivationPath } from "./DerivationPath";
import { ExtendedKey } from "./ExtendedKey";

export class KeyDerivation {
  static deriveKey(seed: Uint8Array, path: DerivationPath) {
    const bip32 = BIP32Factory(ecc).fromSeed(Buffer.from(seed));
    return path.axes.reduce(
      (key: ExtendedKey, axis: DerivationAxis) => key.derive(axis),
      new ExtendedKey(bip32, DerivationPath.empty())
    );
  }
}
