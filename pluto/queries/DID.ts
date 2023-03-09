const DID = {
  createTable: `CREATE TABLE IF NOT EXISTS DID (
    did TEXT NOT NULL UNIQUE,
    method TEXT NOT NULL ,
    methodId TEXT NOT NULL ,
    schema TEXT NOT NULL ,
    alias TEXT,
    PRIMARY KEY (did)
);

`,

  insert: `
    INSERT INTO DID(did, method, methodId, schema, alias)
VALUES (?, ?, ?, ?, ?);
    `,

  fetchAllPrismDID: `
    SELECT DID.*, PrivateKey.keyPathIndex
FROM DID
JOIN PrivateKey ON DID.did = PrivateKey.didId
WHERE method = 'prism';
    `,

  fetchDIDInfoByDID: `
    SELECT DID.*, PrivateKey.keyPathIndex
FROM DID
JOIN PrivateKey ON DID.did = PrivateKey.didId
WHERE did = ?;
    `,

  fetchDIDInfoByAlias: `
    SELECT DID.*, PrivateKey.keyPathIndex
FROM DID
JOIN PrivateKey ON DID.did = PrivateKey.didId
WHERE alias = ?;
    `,

  fetchAllPeerDID: `
    SELECT DID.did, DID.alias, PrivateKey.*
FROM DID
JOIN PrivateKey ON DID.did = PrivateKey.didId
WHERE DID.method = 'peer';
    `,

  fetchDIDByMethodId: `
    SELECT DID.did
FROM DID
WHERE methodId = ?;
    `,

};

export type DIDQueriesTypes =
    "createTable"
    | "insert"
    | "fetchAllPrismDID"
    | "fetchDIDInfoByDID"
    | "fetchDIDInfoByAlias"
    | "fetchAllPeerDID"
    | "fetchDIDByMethodId"

export default DID;
