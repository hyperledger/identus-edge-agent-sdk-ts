import { DerivableKey } from "./DerivableKey";
import { ApolloError, CastorError } from "../Errors";
import { KeyProperties } from "../KeyProperties";
import { SignableKey } from "./SignableKey";
import { StorableKey } from "./StorableKey";
import { VerifiableKey } from "./VerifiableKey";
import { KeyCurve } from "./KeyCurve";
import { Curve } from "./Curve";
import { KeyTypes } from "./KeyTypes";
import { ExportableKey } from "./exportable";
import { JWT_ALG } from "../VerifiableCredential";

export enum KeyUsage {
  UNKNOWN_KEY = 0,
  MASTER_KEY = 1,
  ISSUING_KEY = 2,
  KEY_AGREEMENT_KEY = 3,
  AUTHENTICATION_KEY = 4,
  REVOCATION_KEY = 5,
  CAPABILITY_INVOCATION_KEY = 6,
  CAPABILITY_DELEGATION_KEY = 7
}

export function getProtosUsage(
  usage: Usage
): KeyUsage {
  switch (usage) {
    case Usage.UNKNOWN_KEY:
      return KeyUsage.UNKNOWN_KEY;
    case Usage.MASTER_KEY:
      return KeyUsage.MASTER_KEY;
    case Usage.ISSUING_KEY:
      return KeyUsage.ISSUING_KEY;
    case Usage.KEY_AGREEMENT_KEY:
      return KeyUsage.KEY_AGREEMENT_KEY;
    case Usage.AUTHENTICATION_KEY:
      return KeyUsage.AUTHENTICATION_KEY;
    case Usage.REVOCATION_KEY:
      return KeyUsage.REVOCATION_KEY;
    case Usage.CAPABILITY_INVOCATION_KEY:
      return KeyUsage
        .CAPABILITY_INVOCATION_KEY;
    case Usage.CAPABILITY_DELEGATION_KEY:
      return KeyUsage
        .CAPABILITY_DELEGATION_KEY;
    default:
      return KeyUsage.UNKNOWN_KEY;
  }
}

/**
 * Return usage from a verification method id
 * 
 * @param id: string - verification method id string
 * @returns {Usage}
 */
export function getUsageFromId(id: string): {
  usage: Usage,
  index: number
} {
  const regex = /#([a-zA-Z]+)-(\d+)/;
  const [_, methodId, methodIndex] = id.match(regex) || [];
  if (methodId === undefined || methodIndex === undefined) {
    throw new CastorError.MethodIdIsDoesNotSatisfyRegex("Verification method id does not contain fragment")
  }
  const index = parseInt(methodIndex);
  if (methodId === "master") {
    return {
      usage: Usage.MASTER_KEY,
      index
    };
  }
  if (methodId === "issuing") {
    return {
      usage: Usage.ISSUING_KEY,
      index
    };
  }
  if (methodId === "agreement") {
    return {
      usage: Usage.KEY_AGREEMENT_KEY,
      index
    };
  }
  if (methodId === "authentication") {
    return {
      usage: Usage.AUTHENTICATION_KEY,
      index
    };
  }
  if (methodId === "revocation") {
    return {
      usage: Usage.REVOCATION_KEY,
      index
    };
  }
  if (methodId === "delegation") {
    return {
      usage: Usage.CAPABILITY_DELEGATION_KEY,
      index
    };
  }
  if (methodId === "invocation") {
    return {
      usage: Usage.CAPABILITY_INVOCATION_KEY,
      index
    };
  }
  return {
    usage: Usage.UNKNOWN_KEY,
    index
  };
}

/**
 * create an identifier for keys within a DID Document
 * should be unique within the Document
 * 
 * @param keyUsage - maps to a prefix word
 * @param index - occurrence of this keyUsage
 * @returns {string}
 */
export function getUsageId(keyUsage: Usage, index = 0): string {
  switch (keyUsage) {
    case Usage.MASTER_KEY:
      return `master-${index}`;
    case Usage.ISSUING_KEY:
      return `issuing-${index}`;
    case Usage.KEY_AGREEMENT_KEY:
      return `agreement-${index}`;
    case Usage.AUTHENTICATION_KEY:
      return `authentication-${index}`;
    case Usage.REVOCATION_KEY:
      return `revocation-${index}`;
    case Usage.CAPABILITY_DELEGATION_KEY:
      return `delegation-${index}`;
    case Usage.CAPABILITY_INVOCATION_KEY:
      return `invocation-${index}`;
    default:
      return `unknown-${index}`;
  }
}

export function getUsage(
  protosUsage: KeyUsage
): Usage {
  let usage: Usage;
  switch (protosUsage) {
    case 0:
      usage = Usage.UNKNOWN_KEY;
      break;
    case 1:
      usage = Usage.MASTER_KEY;
      break;
    case 2:
      usage = Usage.ISSUING_KEY;
      break;
    case 3:
      usage = Usage.KEY_AGREEMENT_KEY;
      break;
    case 4:
      usage = Usage.AUTHENTICATION_KEY;
      break;
    case 5:
      usage = Usage.REVOCATION_KEY;
      break;
    case 6:
      usage = Usage.CAPABILITY_INVOCATION_KEY;
      break;
    case 7:
      usage = Usage.CAPABILITY_DELEGATION_KEY;
      break;
    default:
      usage = Usage.UNKNOWN_KEY;
      break;
  }
  return usage;
}

export enum Usage {
  MASTER_KEY = "masterKey",
  ISSUING_KEY = "issuingKey",
  AUTHENTICATION_KEY = "authenticationKey",
  REVOCATION_KEY = "revocationKey",
  CAPABILITY_DELEGATION_KEY = "capabilityDelegationKey",
  CAPABILITY_INVOCATION_KEY = "capabilityInvocationKey",
  KEY_AGREEMENT_KEY = "keyAgreementKey",
  UNKNOWN_KEY = "unknownKey",
}
export function curveToAlg(curve: string) {
  if (curve === Curve.SECP256K1) {
    return JWT_ALG.ES256K;
  }
  if (curve === Curve.ED25519 || curve === Curve.X25519) {
    return JWT_ALG.EdDSA;
  }
  return JWT_ALG.unknown;
}
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
      throw new ApolloError.InvalidKeyCurve(name);
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

  get alg(): JWT_ALG {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const curve = this.getProperty(KeyProperties.curve)!;
    return curveToAlg(curve);
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
    return keyCurve === curve || keyCurve?.toLocaleLowerCase() === curve.toLowerCase();
  }
}
