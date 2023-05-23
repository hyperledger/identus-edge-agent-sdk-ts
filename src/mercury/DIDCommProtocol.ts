import * as Domain from "../domain";

export interface DIDCommProtocol {
  packEncrypted(
    message: Domain.Message,
    to: Domain.DID,
    from?: Domain.DID
  ): Promise<string>;

  // packPlaintext: (msg: DIDComm.Message) => string;
  // packSigned(msg: Message, signBy: String, cb: OnPackSignedResult )  -> ErrorCode
  // packFromPrior(msg: FromPrior, issuerKid: String?, cb: OnFromPriorPackResult )  -> ErrorCode

  unpack(message: string): Promise<Domain.Message>;

  // unpackFromPrior(fromPriorJwt: String, cb: OnFromPriorUnpackResult )  -> ErrorCode
  // wrapInForward(msg: String, headers: [String: String], to: String, routingKeys: [String], encAlgAnon: AnonCryptAlg, cb: OnWrapInForwardResult )  -> ErrorCode
}
