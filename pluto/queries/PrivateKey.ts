const PrivateKey = {
  createTable: `CREATE TABLE PrivateKey (
    id TEXT NOT NULL UNIQUE,
    curve TEXT NOT NULL,
    privateKey TEXT NOT NULL,
    keyPathIndex INTEGER  DEFAULT 0,
    didId TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (didId) REFERENCES DID(did)
);

`,

  insert: `
    INSERT INTO PrivateKey(id, curve, privateKey, keyPathIndex, didId)
VALUES (?, ?, ?, ?, ?);
    `,

  fetchPrivateKeyByDID: `
    SELECT * FROM PrivateKey
WHERE didId = ?;
    `,

  fetchPrivateKeyByID: `
    SELECT * FROM PrivateKey
WHERE id = ?;
    `,

  fetchKeyPathIndexByDID: `
    SELECT keyPathIndex FROM PrivateKey
WHERE didId = ?;
    `,

  fetchLastkeyPathIndex: `
    SELECT keyPathIndex FROM PrivateKey
WHERE didId IN (SELECT did FROM DID WHERE method = 'prism')
ORDER BY keyPathIndex DESC
LIMIT 1;
    `,

};

export type PrivateKeyQueriesTypes =
    "createTable"
    | "insert"
    | "fetchPrivateKeyByDID"
    | "fetchPrivateKeyByID"
    | "fetchKeyPathIndexByDID"
    | "fetchLastkeyPathIndex"

export default PrivateKey;
