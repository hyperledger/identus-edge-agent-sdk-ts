import { fromSeed } from "bip32";
import { EdDSA } from "../ec/EdDSA";

import { DerivationAxis } from "./DerivationAxis";
import { DerivationPath } from "./DerivationPath";
import { ExtendedKey } from "./ExtendedKey";

export class KeyDerivation {
  static deriveKey(seed: Uint8Array, path: DerivationPath) {
    const bip32Instance = fromSeed(Buffer.from(seed));
    return path.axes.reduce(
      (key: ExtendedKey, axis: DerivationAxis) => key.derive(axis),
      new ExtendedKey(bip32Instance, DerivationPath.empty())
    );
  }
  static deriveEd25519Key(seed: Uint8Array, path: DerivationPath) {
    const xprv = EdDSA.ed25519FromSeed(Buffer.from(seed));
    return path.axes.reduce(
      (key: EdDSA, axis: DerivationAxis) => key.derive(axis),
      new EdDSA(xprv, DerivationPath.empty())
    );
  }
  static deriveX25519Key(seed: Uint8Array, path: DerivationPath) {
    const xprv = EdDSA.x25519FromSeed(Buffer.from(seed));
    return path.axes.reduce(
      (key: EdDSA, axis: DerivationAxis) => key.derive(axis),
      new EdDSA(xprv, DerivationPath.empty())
    );
  }
}
