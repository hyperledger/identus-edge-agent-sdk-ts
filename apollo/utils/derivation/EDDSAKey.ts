import { DerivationAxis } from "./DerivationAxis";
import { ExtendedKey } from "./ExtendedKey";

export class EDDSAKey {
  public derive(axis: DerivationAxis): EDDSAKey {
    throw new Error();
  }
}
