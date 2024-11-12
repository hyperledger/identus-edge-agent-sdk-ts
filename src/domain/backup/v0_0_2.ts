/**
 * Schema definition for Backup V0.0.2
 */
import * as TB from "@sinclair/typebox";

const credential = TB.Object({
  recovery_id: TB.String(),
  data: TB.String(),
});

const did = TB.Object({
  did: TB.String(),
  alias: TB.Optional(TB.String()),
});

const didpair = TB.Object({
  holder: TB.String(),
  recipient: TB.String(),
  alias: TB.String(),
});

const key = TB.Object({
  recovery_id: TB.String(),
  key: TB.String(),
  did: TB.Optional(TB.String()),
  index: TB.Optional(TB.Number()),
});


export const Schema = TB.Object({
  version: TB.Optional(TB.Literal("0.0.2")),
  credentials: TB.Array(credential),
  dids: TB.Array(did),
  did_pairs: TB.Array(didpair),
  keys: TB.Array(key),
});

export type Schema = TB.Static<typeof Schema>;

export namespace Schema {
  export type Credential = TB.Static<typeof credential>;
  export type DID = TB.Static<typeof did>;
  export type DIDPair = TB.Static<typeof didpair>;
  export type Key = TB.Static<typeof key>;
}
