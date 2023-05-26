import { HDKey } from "@scure/bip32";

import { DerivationAxis } from "./DerivationAxis";
import { DerivationPath } from "./DerivationPath";
import { ExtendedKey } from "./ExtendedKey";

export class KeyDerivation {
  static deriveKey(seed: Uint8Array, path: DerivationPath) {
    const bip32Instance = HDKey.fromMasterSeed(Buffer.from(seed));
    return path.axes.reduce(
      (key: ExtendedKey, axis: DerivationAxis) => key.derive(axis),
      new ExtendedKey(bip32Instance, DerivationPath.empty())
    );
  }
}
