import { CredentialType } from ".";
import { Pluto } from "../buildingBlocks/Pluto";
import { Anoncreds } from "./Anoncreds";
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

  getProperty(name: string) {
    return this.properties.get(name);
  }

  isProvable(): this is ProvableCredential {
    return "presentation" in this;
  }

  isStorable(): this is StorableCredential {
    return "toStorable" in this;
  }
}

export interface ProvableCredential {
  presentation(): unknown;
}

export interface StorableCredential extends Pluto.Storable {
  toStorable(): {
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
  };
}

export interface CredentialRequestOptions {
  keyPair?: KeyPair;
  did?: DID;
  linkSecret?: string;
  linkSecretName?: string;
  [name: string]: any;
}

export interface CredentialIssueOptions {
  type: CredentialType;
  linkSecret?: string;
  credentialMetadata?: Anoncreds.CredentialRequestMeta;
  [name: string]: any;
}
