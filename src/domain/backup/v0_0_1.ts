/**
 * Schema definition for Backup V0.0.1
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

const mediator = TB.Object({
  holder_did: TB.String(),
  mediator_did: TB.String(),
  routing_did: TB.String(),
});

const message = TB.String();

const linksecret = TB.Optional(TB.String());

export const Schema = TB.Object({
  version: TB.Optional(TB.Literal("0.0.1")),
  credentials: TB.Array(credential),
  dids: TB.Array(did),
  did_pairs: TB.Array(didpair),
  keys: TB.Array(key),
  mediators: TB.Array(mediator),
  messages: TB.Array(message),
  link_secret: linksecret,
});

export type Schema = TB.Static<typeof Schema>;

export namespace Schema {
  export type Credential = TB.Static<typeof credential>;
  export type DID = TB.Static<typeof did>;
  export type DIDPair = TB.Static<typeof didpair>;
  export type Key = TB.Static<typeof key>;
  export type Mediator = TB.Static<typeof mediator>;
  export type Message = TB.Static<typeof message>;
  export type LinkSecret = TB.Static<typeof linksecret> | undefined;
}
