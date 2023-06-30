import { DID } from "./DID";
import { KeyPair } from "./KeyPair";

type Claim = Record<string, any>;

export abstract class Credential {
  abstract recoveryId: string;

  // in Swift
  abstract id: string;

  abstract issuer: string;
  abstract subject: string;
  abstract claims: Claim[];
  abstract properties: Map<string, any>;

  abstract toStorable(): StorableCredential;

  getProperty(name: string) {
    return this.properties.get(name);
  }

  presentation(): unknown {
    throw new Error("Credential is not Provable");
  }
}

export interface StorableCredential {
  id: string;
  recoveryId: string;
  credentialData: string;
  issuer?: string;
  subject?: string;
  credentialCreated?: string;
  credentialUpdated?: string;
  credentialSchema?: string;
  validUntil?: string;
  revoked?: boolean;
  availableClaims?: string[];
}

export interface CredentialRequestOptions {
  keyPair?: KeyPair;
  did?: DID;
  [name: string]: any;
}

export interface ProvableCredential {
  presentation(): unknown;
}
