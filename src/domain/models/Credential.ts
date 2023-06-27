import { OfferCredential } from "../../prism-agent/protocols/issueCredential/OfferCredential";
import { RequestCredential } from "../../prism-agent/protocols/issueCredential/RequestCredential";

interface Claim {
  [name: string]: any;
}

export abstract class Credential {
  abstract issuer: string;
  abstract subject: string;
  abstract claims: Claim[];
  abstract properties: Map<string, any>;

  abstract toStorable(): StorableCredential;

  abstract prepareRequestCredentialFromOffer(
    offer: OfferCredential
  ): Promise<RequestCredential>;

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

export enum VerifiableCredentialProperties {
  iss = "iss",
  vc = "vc",
  jti = "jti",
  nbf = "nbf",
  sub = "sub",
  exp = "exp",
  aud = "aud",
}

export class VerifiableCredential extends Credential {
  public static recoveryId = "";

  constructor(
    public issuer: string,
    public subject: string,
    public claims: Claim[] = [],
    public properties: Map<VerifiableCredentialProperties, any> = new Map()
  ) {
    super();
  }

  toStorable(): StorableCredential {
    const claims = [this.getProperty(VerifiableCredentialProperties.sub)].map(
      (claim) => claim.toString()
    );

    const credentialData = Buffer.from(
      JSON.stringify(this.properties)
    ).toString("hex");

    return {
      id: this.getProperty(VerifiableCredentialProperties.jti),
      recoveryId: VerifiableCredential.recoveryId,
      credentialData: credentialData,
      issuer: this.getProperty(VerifiableCredentialProperties.iss),
      subject: this.getProperty(VerifiableCredentialProperties.sub),
      validUntil: this.getProperty(VerifiableCredentialProperties.exp),
      availableClaims: claims,
    };
  }
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
