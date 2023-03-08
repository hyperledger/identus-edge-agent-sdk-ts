const Message = {
  createTable: `CREATE TABLE IF NOT EXISTS Message (
    id TEXT NOT NULL UNIQUE,
    createdTime TEXT NOT NULL ,
    dataJson TEXT NOT NULL,
    \`from\` TEXT NOT NULL ,
    thid TEXT,
    \`to\` TEXT NOT NULL ,
    type TEXT,
    isReceived INTEGER  DEFAULT 0,
    PRIMARY KEY (id)
);

`,

  insert: `
    INSERT INTO Message(id, createdTime, dataJson, \`from\`, thid, \`to\`, type, isReceived)
VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `,

  fetchAllMessages: `
    SELECT *
FROM Message;
    `,

  fetchAllMessagesFromTo: `
    SELECT *
FROM Message
WHERE \`from\` = :from
AND \`to\` = :to;
    `,

  fetchAllSentMessages: `
    SELECT *
FROM Message
WHERE isReceived = 0;
    `,

  fetchAllReceivedMessages: `
    SELECT *
FROM Message
WHERE isReceived = 1;
    `,

  fetchAllMessagesSentTo: `
    SELECT *
FROM Message
WHERE \`to\` = ?;
    `,

  fetchAllMessagesReceivedFrom: `
    SELECT *
FROM Message
WHERE \`from\` = ?;
    `,

  fetchAllMessagesOfType: `
    SELECT *
FROM Message
WHERE type = :type
AND (:relatedWithDID IS NULL OR :relatedWithDID IN (\`from\`, \`to\`));
    `,

  fetchMessageById: `
    SELECT *
FROM Message
WHERE id = ?;
    `,

};

export type MessageQueriesTypes =
    | "createTable"
    | "insert"
    | "fetchAllMessages"
    | "fetchAllMessagesFromTo"
    | "fetchAllSentMessages"
    | "fetchAllReceivedMessages"
    | "fetchAllMessagesSentTo"
    | "fetchAllMessagesReceivedFrom"
    | "fetchAllMessagesOfType"
    | "fetchMessageById"
export default Message;
