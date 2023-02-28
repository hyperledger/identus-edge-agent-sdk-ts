import { DID } from "../domain/models/DID";
import { CastorError } from "../domain/models/Errors";

export interface PeerDIDEncoded {
  t: string;
  s: string;
  r: string[];
  a: string[];
}

export class PeerDIDService {
  readonly type: string;
  readonly serviceEndpoint: string;
  readonly routingKeys: string[];
  readonly accept: string[];

  constructor(
    type: string,
    serviceEndpoint: string,
    routingKeys: string[],
    accept: string[]
  ) {
    this.type = type;
    this.serviceEndpoint = serviceEndpoint;
    this.routingKeys = routingKeys;
    this.accept = accept;
  }

  static readonly DIDCommMessagingKey = "DIDCommMessaging";
  static readonly DIDCommMessagingEncodedKey = "dm";

  static readonly CodingKeys = {
    type: "t",
    serviceEndpoint: "s",
    routingKeys: "r",
    accept: "a",
  };

  encode(): PeerDIDEncoded {
    return {
      r: this.routingKeys,
      s: this.serviceEndpoint,
      a: this.accept,
      t: this.type.replace(
        PeerDIDService.DIDCommMessagingKey,
        PeerDIDService.DIDCommMessagingEncodedKey
      ),
    };
  }

  static decode(encoded: PeerDIDEncoded): PeerDIDService {
    return new PeerDIDService(
      encoded.t === PeerDIDService.DIDCommMessagingEncodedKey
        ? PeerDIDService.DIDCommMessagingKey
        : encoded.t,
      encoded.s,
      encoded.r,
      encoded.a
    );
  }
}

export class PeerDID {
  readonly did: DID;

  constructor(did: DID) {
    const regex =
      /(([01](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))|(2((\.[AEVID](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))+(\.(S)[0-9a-zA-Z=]*)?)))$/;
    if (
      !(
        did.schema === "did" &&
        did.method === "peer" &&
        regex.test(did.methodId)
      )
    ) {
      throw new CastorError.InvalidPeerDIDError();
    }
    this.did = did;
  }
}
