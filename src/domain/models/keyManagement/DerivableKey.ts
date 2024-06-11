import { PrivateKey } from "./PrivateKey";

export abstract class DerivableKey {
  abstract derive(derivationPath: string): PrivateKey;
}
