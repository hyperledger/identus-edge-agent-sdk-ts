const VerifiableCredential = {
  createTable: `CREATE TABLE VerifiableCredential (
    id TEXT NOT NULL UNIQUE, -- ID will be a hash of the values of a credential in a specific order
    credentialType TEXT,
    expirationDate TEXT,
    issuanceDate TEXT,
    verifiableCredentialJson TEXT NOT NULL,
    issuerDIDId TEXT,
    PRIMARY KEY (id)
);

`,

  insert: `
    INSERT INTO VerifiableCredential(id, credentialType, expirationDate, issuanceDate, verifiableCredentialJson, issuerDIDId)
VALUES (?, ?, ?, ?, ?, ?);
    `,

  fetchAllCredentials: `
    SELECT *
FROM VerifiableCredential;
    `,

};

export type VerifiableCredentialQueriesTypes = "createTable" | "insert" | "fetchAllCredentials"
export default VerifiableCredential;
