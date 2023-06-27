import { CredentialType } from "./VerifiableCredential";

interface Claim {
  [name: string]: any;
}

abstract class Credential {
  abstract issuer: string;
  abstract subject: string;
  abstract claims: Claim[];
  abstract properties: Map<string, any>;
}

interface StorableCredential {
  id: string;
  recoveryId: string;
  credentialData: Uint8Array;
  issuer?: string;
  subject?: string;
  credentialCreated?: Date;
  credentialUpdated?: Date;
  credentialSchema?: string;
  validUntil?: Date;
  revoqued?: boolean;
  availableClaims?: string[];
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
