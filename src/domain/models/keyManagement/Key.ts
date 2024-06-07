import { DerivableKey } from "./DerivableKey";
import { ApolloError } from "../Errors";
import { KeyProperties } from "../KeyProperties";
import { SignableKey } from "./SignableKey";
import { StorableKey } from "./StorableKey";
import { VerifiableKey } from "./VerifiableKey";
import { KeyCurve } from "../KeyCurve";
import { Curve } from "./Curve";
import { KeyTypes } from "./KeyTypes";
import { ExportableKey } from "./exportable";

export function getKeyCurveByNameAndIndex(
  name: string,
  index?: number
): KeyCurve {
  switch (name) {
    case Curve.X25519:
      return { curve: Curve.X25519 };
    case Curve.ED25519:
      return { curve: Curve.ED25519 };
    case Curve.SECP256K1:
      return { curve: Curve.SECP256K1, index };
    default:
      throw new ApolloError.InvalidKeyCurve(name, Object.keys(Curve));
  }
}

export abstract class Key {
  abstract type: KeyTypes;
  abstract keySpecification: Map<KeyProperties | string, string>;
  abstract size: number;
  abstract raw: Uint8Array;
  abstract to: ExportableKey.Common["to"];

  abstract getEncoded(): Uint8Array;

  get curve() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.getProperty(KeyProperties.curve)!;
  }

  isDerivable(): this is DerivableKey {
    return "derive" in this;
  }

  isExportable(): this is ExportableKey {
    return "JWK" in this.to && "PEM" in this.to;
  }

  isSignable(): this is SignableKey {
    return "sign" in this;
  }

  isStorable(): this is StorableKey {
    return "recoveryId" in this;
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
