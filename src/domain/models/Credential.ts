import { CredentialType } from "./VerifiableCredential";

abstract class Credential {
  abstract credentialType: CredentialType;
  abstract issuerId: string;
  abstract subjectId: string;

  abstract credentialCreated?: string;
  abstract credentialUpdated?: string;
  abstract validUntil?: string;

  abstract revoked?: boolean;

  abstract claims: Map<string, string>;
  abstract properties: Map<CredentialProperties | string, any>;
}

abstract class StorableCredential {
  abstract id: string;
  abstract recoveryId: string;
  abstract credentialData: Uint8Array;
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
*/

/**
 * The generic properties that all the credentials have
 */
enum CredentialProperties {
  field = "field",
}

enum JWTVerifiableCredentialProperties {
  iss = "iss",
  jti = "jti",
  nbf = "nbf",
  aud = "aud",
  sub = "sub",
}

class JWTVerifiablePayload extends StorableCredential implements Credential {
  constructor(
    public id: string = "TODO: Generated uuid v4",
    public recoveryId: string = "TODO: Generated uuid v4, how is this generated, defined by user?",
    public credentialType: CredentialType,
    public issuerId: string,
    public subjectId: string,
    public claims: Map<string, string>,
    public properties: Map<
      CredentialProperties | JWTVerifiableCredentialProperties | string,
      any
    >,
    public credentialCreated?: string | undefined,
    public credentialUpdated?: string | undefined,
    public validUntil?: string | undefined,
    public revoked?: boolean | undefined
  ) {
    super();
  }

  get credentialData() {
    return Buffer.from(JSON.stringify(this));
  }

  static fromBuffer(dbEntry: any): JWTVerifiablePayload {
    const credentialData = dbEntry.credentialData;

    const properties: Map<
      CredentialProperties | JWTVerifiableCredentialProperties | string,
      any
    > = new Map();

    const decodedObject = JSON.parse(Buffer.from(credentialData).toString());

    if (decodedObject[JWTVerifiableCredentialProperties.aud]) {
      properties.set(
        JWTVerifiableCredentialProperties.aud,
        decodedObject[JWTVerifiableCredentialProperties.aud]
      );
    }

    if (decodedObject[JWTVerifiableCredentialProperties.iss]) {
      properties.set(
        JWTVerifiableCredentialProperties.iss,
        decodedObject[JWTVerifiableCredentialProperties.iss]
      );
    }

    return new JWTVerifiablePayload(
      "",
      "",
      CredentialType.JWT,
      "",
      "",
      new Map(),
      properties
    );
  }
}
