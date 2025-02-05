import { DID } from "./DID";
import { CastorError } from "./Errors";
import { Curve } from "./keyManagement";

export class ServiceEndpoint {
  constructor(
    public uri: string,
    public accept: Array<string> = [],
    public routingKeys: Array<string> = []
  ) {}
}

export class VerificationMethod {
  constructor(
    public id: string,
    public controller: string,
    public type: string,
    public publicKeyJwk?: PublicKeyJWK,
    public publicKeyMultibase?: string
  ) {}

  static getCurveByType(type: string): Curve {
    switch (type) {
      case Curve.X25519:
        return Curve.X25519;
      case Curve.ED25519:
        return Curve.ED25519;
      case Curve.SECP256K1:
        return Curve.SECP256K1;
      default:
        throw new CastorError.InvalidKeyError();
    }
  }
}

export class Service {
  constructor(
    public id: string,
    public type: Array<string>,
    public serviceEndpoint: ServiceEndpoint
  ) {}

  get isDIDCommMessaging(): boolean {
    return this.type.includes("DIDCommMessaging");
  }
}

export class AlsoKnownAs {
  constructor(public values: Array<string>) {}
}

export class Controller {
  constructor(public values: Array<DID>) {}
}

export class VerificationMethods {
  constructor(public values: Array<VerificationMethod>) {}
}

export class Services {
  constructor(public values: Array<Service>) {}
}

export class Authentication {
  constructor(
    public urls: Array<string>,
    public verificationMethods: Array<VerificationMethod>
  ) {}
}

export class AssertionMethod {
  constructor(
    public urls: Array<string>,
    public verificationMethods: Array<VerificationMethod>
  ) {}
}

export class KeyAgreement {
  constructor(
    public urls: Array<string>,
    public verificationMethods: Array<VerificationMethod>
  ) {}
}

export class CapabilityInvocation {
  constructor(
    public urls: Array<string>,
    public verificationMethods: Array<VerificationMethod>
  ) {}
}

export class CapabilityDelegation {
  constructor(
    public urls: Array<string>,
    public verificationMethods: Array<VerificationMethod>
  ) {}
}

export type DIDDocumentCoreProperty =
  | Service
  | AlsoKnownAs
  | Controller
  | VerificationMethods
  | Services
  | Authentication
  | AssertionMethod
  | KeyAgreement
  | CapabilityInvocation
  | CapabilityDelegation;

export class DIDDocument {
  constructor(
    public id: DID,
    public coreProperties: Array<DIDDocumentCoreProperty>
  ) {}

  get services(): Service[] {
    return this.coreProperties.reduce((serviceArray, coreProperty) => {
      if (coreProperty instanceof Services) {
        return [...serviceArray, ...coreProperty.values];
      }
      return serviceArray;
    }, [] as Service[]);
  }

  get verificationMethods(): VerificationMethod[] {
    return this.coreProperties.reduce((serviceArray, coreProperty) => {
      if (coreProperty instanceof VerificationMethods) {
        return [...serviceArray, ...coreProperty.values];
      }
      return serviceArray;
    }, [] as VerificationMethod[]);
  }
}

export interface PublicKeyJWK {
  crv: string;
  x: string;
  kid: string;
  kty: "OKP";
}
