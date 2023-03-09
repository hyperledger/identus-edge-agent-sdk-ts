const DIDPair = {
  createTable: `CREATE TABLE IF NOT EXISTS DIDPair (
    id TEXT NOT NULL UNIQUE, -- ID will be hostDID and receiverDID concatenated
    name TEXT,
    hostDID TEXT NOT NULL,
    receiverDID TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (hostDID) REFERENCES DID(did),
    FOREIGN KEY (receiverDID) REFERENCES DID(did)
);

`,

  insert: `
    INSERT INTO DIDPair(id, name, hostDID, receiverDID)
VALUES (?, ?, ?, ?);
    `,

  fetchAllDIDPairs: `
    SELECT *
FROM DIDPair;
    `,

  fetchDIDPairByDID: `
    SELECT *
FROM DIDPair
WHERE DIDPair.hostDID = ?;
    `,

  fetchDIDPairByName: `
    SELECT *
FROM DIDPair
WHERE DIDPair.name = ?;
    `,

};
export type DIDPairQueriesTypes =
    "createTable"
    | "insert"
    | "fetchAllDIDPairs"
    | "fetchDIDPairByDID"
    | "fetchDIDPairByName";

export default DIDPair;
