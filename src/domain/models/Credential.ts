import { CredentialType, LinkSecret } from ".";
import { Pluto } from "../buildingBlocks/Pluto";
import { DID } from "./DID";
import { KeyPair } from "./KeyPair";

type Claim = Record<string, any>;

export abstract class Credential implements Pluto.Storable {
  abstract credentialType: CredentialType;
  abstract recoveryId: string;
  abstract id: string;
  abstract issuer: string;
  abstract subject: string;
  abstract claims: Claim[];
  abstract properties: Map<string, any>;

  public readonly uuid = Pluto.makeUUID();

  getProperty(name: string) {
    return this.properties.get(name);
  }

  isProvable(): this is ProvableCredential {
    return "presentation" in this;
  }

  isStorable(): this is StorableCredential {
    return "toStorable" in this;
  }

  isRevoked() {
    const revoked = this.properties.get("revoked");
    return revoked === true
  }
}

export interface ProvableCredential {
  presentation(): unknown;
  verifiableCredential(): unknown
}

export interface StorableCredential {
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
  linkSecret?: LinkSecret;
  [name: string]: any;
}

export interface CredentialIssueOptions {
  type: CredentialType;
  linkSecret?: string;
  credentialMetadata?: Record<string, any>;
  [name: string]: any;
}
