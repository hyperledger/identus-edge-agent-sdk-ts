import { DID } from "./DID";
import { KeyPair } from "./KeyPair";

type Claim = Record<string, any>;

export abstract class Credential {
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

export enum VerifiableCredentialProperties {
  iss = "iss",
  vc = "vc",
  jti = "jti",
  nbf = "nbf",
  sub = "sub",
  exp = "exp",
  aud = "aud",
  type = "type",
}
export interface CredentialRequestOptions {
  keyPair?: KeyPair;
  did?: DID;
  [name: string]: any;
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
    // TODO - doesn't this conflict with `claims` in the constructor?
    const sub = this.getProperty(VerifiableCredentialProperties.sub);
    const claims = sub === undefined ? [] : [sub].map(
      (claim) => claim.toString()
    );

    const credentialData = Buffer.from(
      JSON.stringify(Object.fromEntries(this.properties))
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

  static fromStorable(storable: StorableCredential): VerifiableCredential {
    // TODO - should issuer and subject be required on Storable?
    const credential = new VerifiableCredential(storable.issuer!, storable.subject!);
    const propertyObj = Buffer.from(storable.credentialData, "hex").toJSON();

    for (let key in Object.keys(VerifiableCredentialProperties)) {
      const value = propertyObj[key];
      if (value !== undefined) {
        credential.properties.set(key as VerifiableCredentialProperties, value)
      }
    }

    credential.properties.set(VerifiableCredentialProperties.jti, storable.id);
    credential.properties.set(VerifiableCredentialProperties.iss, storable.issuer);
    credential.properties.set(VerifiableCredentialProperties.sub, storable.subject);
    // credential.properties.set(VerifiableCredentialProperties.vc, storable.);
    // credential.properties.set(VerifiableCredentialProperties.nbf, storable.);
    credential.properties.set(VerifiableCredentialProperties.exp, storable.validUntil);
    // credential.properties.set(VerifiableCredentialProperties.aud, storable.);

    return credential;
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
