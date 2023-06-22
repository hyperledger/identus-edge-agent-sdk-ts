import { DerivableKey } from "./DerivableKey";
import { Curve } from "./KeyCurve";
import { KeyProperties } from "./KeyProperties";
import { SignableKey } from "./SignableKey";
import { StorableKey } from "./StorableKey";
import { VerifiableKey } from "./VerifiableKey";

export type KeyTypes = "EC" | "eddsa";

export abstract class Key {
  abstract type: KeyTypes;
  abstract keySpecification: Map<KeyProperties | string, string>;
  abstract size: number;
  abstract raw: Uint8Array;

  abstract getEncoded(): Uint8Array;

  isExportable(): this is StorableKey {
    return "export" in this;
  }

  isSignable(): this is SignableKey {
    return "sign" in this;
  }

  isDerivable(): this is DerivableKey {
    return "derive" in this;
  }

  canVerify(): this is VerifiableKey {
    return "verify" in this;
  }

  getProperty(name: string) {
    return this.keySpecification.get(name);
  }

  isCurve<T>(curve: string): this is T {
    const keyCurve = this.keySpecification.get(KeyProperties.curve);
    return keyCurve === curve;
  }
}
