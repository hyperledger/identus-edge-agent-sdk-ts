import { DerivationPath } from "../../apollo/utils/derivation/DerivationPath";
import { PrivateKey } from "./KeyManagement";

export abstract class DerivableKey {
  abstract derive(derivationPath: DerivationPath): PrivateKey;
}
