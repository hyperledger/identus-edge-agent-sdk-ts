import { DID } from "./DID";
import { KeyPair } from "./KeyPair";

type Claim = Record<string, any>;

export abstract class Credential {
  abstract recoveryId: string;
  abstract issuer: string;
  abstract subject: string;
  abstract claims: Claim[];
  abstract properties: Map<string, any>;

  abstract toStorable(): StorableCredential;

  getProperty(name: string) {
    return this.properties.get(name);
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

/*
CREATE TABLE Credential (
    id TEXT NOT NULL UNIQUE ,
    recoveryId TEXT NOT NULL,
    credentialSchema TEXT NOT NULL,
    credentialData BLOB NOT NULL,
    issuerId TEXT,
    subjectId TEXT,
    credentialCreated TEXT,
    credentialUpdated TEXT,
    validUntil TEXT,
    revoked INTEGER AS Int DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE AvailableClaims (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    credentialId TEXT NOT NULL,
    claim TEXT NOT NULL,
    FOREIGN KEY (credentialId) REFERENCES Credential(id)
);
CREATE TABLE LinkSecret (
    id TEXT NOT NULL UNIQUE
);
*/
