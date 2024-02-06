import { CastorError, type DID, type KeyCurve } from "../domain";

export namespace PeerDID {
  // Q: why is this a custom shape instead of a Domain.PrivateKey?
  export interface PrivateKey {
    /**
     * Instance of a KeyCurve
     *
     * @type {KeyCurve}
     */
    keyCurve: KeyCurve;
    /**
     * Value as Uint8Array, buffer like
     *
     * @type {Uint8Array}
     */
    value: Uint8Array;
  }
}

export interface PeerDIDEncoded {
  t: string;
  s: {
    uri: string;
    r?: string[];
    a?: string[];
  }
}

export class PeerDID {
  constructor(
    public readonly did: DID,
    public readonly privateKeys: PeerDID.PrivateKey[] = []
  ) {
    const regex = /(([01](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))|(2((\.[AEVID](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))+(\.(S)[0-9a-zA-Z=]*)*)))$/;
    const isValid = did.schema === "did" && did.method === "peer" && regex.test(did.methodId);

    if (isValid === false) {
      throw new CastorError.InvalidPeerDIDError();
    }
  }
}

/**
 * Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones
 */
export class PeerDIDService {
  readonly type: string;
  readonly serviceEndpoint: string;
  readonly routingKeys?: string[];
  readonly accept?: string[];

  constructor(
    type: string,
    serviceEndpoint: string,
    routingKeys?: string[],
    accept?: string[]
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
      t: this.type.replace(
        PeerDIDService.DIDCommMessagingKey,
        PeerDIDService.DIDCommMessagingEncodedKey
      ),
      s: {
        uri: this.serviceEndpoint,
        r: this.routingKeys,
        a: this.accept,
      },
    };
  }

  static decode(encoded: PeerDIDEncoded): PeerDIDService {
    return new PeerDIDService(
      encoded.t === PeerDIDService.DIDCommMessagingEncodedKey ? PeerDIDService.DIDCommMessagingKey : encoded.t,
      encoded.s.uri,
      encoded.s.r,
      encoded.s.a
    );
  }
}
