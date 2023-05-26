/* tslint:disable */
/* eslint-disable */

/**
 * Represents DID Document (https://www.w3.org/TR/did-core/)
 */
type DIDDoc = {
    /**
     * DID for the given DID Doc
     */
    id: string,

    /**
     * DID URLs of verification methods used for key agreement.
     * See https://www.w3.org/TR/did-core/#verification-methods.
     */
    keyAgreement: Array<string>,

    /**
     * Returns DID URLs of verification methods used for authentication.
     * See https://www.w3.org/TR/did-core/#authentication
     */
    authentication: Array<string>,

    /**
     * All local verification methods including embedded to
     * key agreement and authentication sections.
     * See https://www.w3.org/TR/did-core/#verification-methods.
     */
    verificationMethod: Array<VerificationMethod>,

    /**
     * All services (https://www.w3.org/TR/did-core/#services)
     */
    service: Array<Service>,
}



/**
 * Represents verification method record in DID Document
 * (https://www.w3.org/TR/did-core/#verification-methods).
 */
type VerificationMethod = {
    id: string,
    type: VerificationMethodType,
    controller: string,
    publicKeyJwk?: any,
    publicKeyMultibase?: string,
    publicKeyBase58?: string,
}



type VerificationMethodType = "JsonWebKey2020" | "X25519KeyAgreementKey2019" 
    | "Ed25519VerificationKey2018" | "EcdsaSecp256k1VerificationKey2019" | string



/**
 * Represents service record in DID Document (https://www.w3.org/TR/did-core/#services).
 */
type Service = {
    id: string,
    type: string,
    serviceEndpoint: ServiceKind,
}



/**
 * Represents additional service properties defined for specific Service type.
 */
type ServiceKind = DIDCommMessagingService | any



/**
 * Properties for DIDCommMessagingService
 * (https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint).
 */
type DIDCommMessagingService = {
    uri: string,
    accept?: Array<string>,
    routing_keys: Array<string>,
}



interface Message {
    /**
     * Produces `DIDComm Encrypted Message`
     * https://identity.foundation/didcomm-messaging/spec/#didcomm-encrypted-message.
     *
     * A DIDComm encrypted message is an encrypted JWM (JSON Web Messages) and
     * hides its content from all but authorized recipients, discloses (optionally) and proves
     * the sender to exactly and only those recipients, and provides integrity guarantees.
     * It is important in privacy-preserving routing. It is what normally moves over network
     * transports in DIDComm applications, and is the safest format for storing DIDComm data at rest.
     *
     * Encryption is done as following:
     *  - Encryption is done via the keys from the `keyAgreement` verification relationship in the DID Doc
     *  - if `to` is a DID, then multiplex encryption is done for all keys from the
     *    receiver's `keyAgreement` verification relationship
     *    which are compatible the sender's key.
     *  - if `to` is a key ID, then encryption is done for the receiver's `keyAgreement`
     *    verification method identified by the given key ID.
     *  - if `from` is a DID, then sender `keyAgreement` will be negotiated based on recipient preference and
     *    sender-recipient crypto compatibility.
     *  - if `from` is a key ID, then the sender's `keyAgreement` verification method
     *    identified by the given key ID is used.
     *  - if `from` is None, then anonymous encryption is done and there will be no sender authentication property.
     *
     * It's possible to add non-repudiation by providing `sign_by` parameter.
     *
     * @param `to` recipient DID or key ID the sender uses encryption.
     * @param `from` a sender DID or key ID. If set message will be repudiable authenticated or anonymous otherwise.
     *    Must match `from` header in Plaintext if the header is set.
     * @param `sign_by` if `Some` message will be additionally signed to provide additional non-repudiable authentication
     *    by provided DID/Key. Signed messages are only necessary when the origin of plaintext must be provable
     *    to third parties, or when the sender can’t be proven to the recipient by authenticated encryption because
     *    the recipient is not known in advance (e.g., in a broadcast scenario).
     *    Adding a signature when one is not needed can degrade rather than enhance security because
     *    it relinquishes the sender’s ability to speak off the record.
     * @param `did_resolver` instance of `DIDResolver` to resolve DIDs.
     * @param `secrets_resolver` instance of SecretsResolver` to resolve sender DID keys secrets.
     * @param `options` allow fine configuration of packing process.
     *
     * @returns Tuple `[encrypted_message, metadata]`.
     * - `encrypted_message` A DIDComm encrypted message as a JSON string.
     * - `metadata` additional metadata about this `pack` execution like used keys identifiers,
     *   used messaging service.
     * 
     * @throws DIDCommDIDNotResolved
     * @throws DIDCommDIDUrlNotFound
     * @throws DIDCommMalformed
     * @throws DIDCommIoError
     * @throws DIDCommInvalidState
     * @throws DIDCommNoCompatibleCrypto
     * @throws DIDCommUnsupported
     * @throws DIDCommIllegalArgument
     */
    pack_encrypted(
        to: string, 
        from: string | null,
        sign_by: string | null, 
        did_resolver: DIDResolver,
        secrets_resolver: SecretsResolver,
        options: PackEncryptedOptions,
    ): Promise<[string, PackEncryptedMetadata]>;
}



/**
 *  Allow fine configuration of packing process.
 */
type PackEncryptedOptions = {
    /**
     * If `true` and message is authenticated than information about sender will be protected from mediators, but
     * additional re-encryption will be required. For anonymous messages this property will be ignored.
     * Default false.
     */
    protect_sender?: boolean,

    /**
     * Whether the encrypted messages need to be wrapped into `Forward` messages to be sent to Mediators
     * as defined by the `Forward` protocol.
     * Default true.
     */
    forward?: boolean,

    /**
     * if forward is enabled these optional headers can be passed to the wrapping `Forward` messages.
     * If forward is disabled this property will be ignored.
     */
    forward_headers?: Array<[string, string]>,

    /**
     * Identifier (DID URL) of messaging service (https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint).
     * If DID contains multiple messaging services it allows specify what service to use.
     * If not present first service will be used.
     */
    messaging_service?: string,

    /**
     *  Algorithm used for authenticated encryption.
     * Default "A256cbcHs512Ecdh1puA256kw"
     */
    enc_alg_auth?: "A256cbcHs512Ecdh1puA256kw",

    /**
     * Algorithm used for anonymous encryption.
     * Default "Xc20pEcdhEsA256kw"
     */
    enc_alg_anon?: "A256cbcHs512EcdhEsA256kw" | "Xc20pEcdhEsA256kw" | "A256gcmEcdhEsA256kw",
}



/**
 * Additional metadata about this `encrypt` method execution like used keys identifiers,
 * used messaging service.
 */
type PackEncryptedMetadata = {
    /**
     * Information about messaging service used for message preparation.
     * Practically `service_endpoint` field can be used to transport the message.
     */
    messaging_service?: MessagingServiceMetadata,

    /** 
     * Identifier (DID URL) of sender key used for message encryption.
     */
    from_kid?: string,

    /**
     * Identifier (DID URL) of sender key used for message sign.
     */
    sign_by_kid?: string,

    /**
     * Identifiers (DID URLs) of recipient keys used for message encryption.
     */
    to_kids: Array<string>,
}



/**
 * Information about messaging service used for message preparation.
 * Practically `service_endpoint` field can be used to transport the message.
 */
type MessagingServiceMetadata = {
    /**
     * Identifier (DID URL) of used messaging service.
     */
    id: string,

    /**
     * Service endpoint of used messaging service.
     */
    service_endpoint: string,
}



interface Message {
    /**
     * Produces `DIDComm Plaintext Messages`
     * https://identity.foundation/didcomm-messaging/spec/#didcomm-plaintext-messages.
     * 
     * A DIDComm message in its plaintext form, not packaged into any protective envelope,
     * is known as a DIDComm plaintext message. Plaintext messages lack confidentiality and integrity
     * guarantees, and are repudiable. They are therefore not normally transported across security boundaries.
     * However, this may be a helpful format to inspect in debuggers, since it exposes underlying semantics,
     * and it is the format used in this spec to give examples of headers and other internals.
     * Depending on ambient security, plaintext may or may not be an appropriate format for DIDComm data at rest.
     * 
     * @param `did_resolver` instance of `DIDResolver` to resolve DIDs.
     * 
     * @returns a DIDComm plaintext message s JSON string
     * 
     * @throws DIDCommDIDNotResolved
     * @throws DIDCommDIDUrlNotFound
     * @throws DIDCommIoError
     * @throws DIDCommInvalidState
     * @throws DIDCommIllegalArgument
     */
    pack_plaintext(did_resolver: DIDResolver): Promise<string>;
}



interface Message {
    /**
     * @returns message representation as plain object
     */
    as_value(): IMessage;
}



type IMessage = {
    /**
     * Message id. Must be unique to the sender.
     */
    id: string,

    /**
     * Must be "application/didcomm-plain+json"
     */
    typ: string,

    /**
     * Message type attribute value MUST be a valid Message Type URI,
     * that when resolved gives human readable information about the message.
     * The attribute’s value also informs the content of the message,
     * or example the presence of other attributes and how they should be processed.
     */
    type: string,

    /**
     * Message body.
     */
    body: any,

    /**
     * Sender identifier. The from attribute MUST be a string that is a valid DID
     * or DID URL (without the fragment component) which identifies the sender of the message.
     */
    from?: string,

    /**
     * Identifier(s) for recipients. MUST be an array of strings where each element
     * is a valid DID or DID URL (without the fragment component) that identifies a member
     * of the message’s intended audience.
     */
    to?: Array<string>,

    /**
     * Uniquely identifies the thread that the message belongs to.
     * If not included the id property of the message MUST be treated as the value of the `thid`.
     */
    thid?: string,

    /**
     * If the message is a child of a thread the `pthid`
     * will uniquely identify which thread is the parent.
     */
    pthid?: string,

    /**
     * Custom message headers.
     */
    [extra_header: string]: any

    /**
     * The attribute is used for the sender
     * to express when they created the message, expressed in
     * UTC Epoch Seconds (seconds since 1970-01-01T00:00:00Z UTC).
     * This attribute is informative to the recipient, and may be relied on by protocols.
     */
    created_time?: number,

    /**
     * The expires_time attribute is used for the sender to express when they consider
     * the message to be expired, expressed in UTC Epoch Seconds (seconds since 1970-01-01T00:00:00Z UTC).
     * This attribute signals when the message is considered no longer valid by the sender.
     * When omitted, the message is considered to have no expiration by the sender.
     */
    expires_time?: number,

    /**
     * from_prior is a compactly serialized signed JWT containing FromPrior value
     */
   from_prior?: string,

    /**
     * Message attachments
     */
    attachments?: Array<Attachment>,
};



type Attachment = {
    /**
     * A JSON object that gives access to the actual content of the attachment.
     * Can be based on base64, json or external links.
     */
    data: AttachmentData,

    /**
     * Identifies attached content within the scope of a given message.
     * Recommended on appended attachment descriptors. Possible but generally unused
     * on embedded attachment descriptors. Never required if no references to the attachment
     * exist; if omitted, then there is no way to refer to the attachment later in the thread,
     * in error messages, and so forth. Because id is used to compose URIs, it is recommended
     * that this name be brief and avoid spaces and other characters that require URI escaping.
     */
    id?: string,

    /**
     * A human-readable description of the content.
     */
    description?: string,

    /**
     * A hint about the name that might be used if this attachment is persisted as a file.
     * It is not required, and need not be unique. If this field is present and mime-type is not,
     * the extension on the filename may be used to infer a MIME type.
     */
    filename?: string,

    /**
     * Describes the MIME type of the attached content.
     */
    media_type?: string,

    /**
     * Describes the format of the attachment if the mime_type is not sufficient.
     */
    format?: string,

    /**
     * A hint about when the content in this attachment was last modified
     * in UTC Epoch Seconds (seconds since 1970-01-01T00:00:00Z UTC).
     */
    lastmod_time?: number,

    /**
     * Mostly relevant when content is included by reference instead of by value.
     * Lets the receiver guess how expensive it will be, in time, bandwidth, and storage,
     * to fully fetch the attachment.
     */
    byte_count?: number,
}



type AttachmentData = Base64AttachmentData | JsonAttachmentData | LinksAttachmentData



type Base64AttachmentData = {
    /**
     * Base64-encoded data, when representing arbitrary content inline.
     */
    base64: string,

    /**
     * A JSON Web Signature over the content of the attachment.
     */
    jws?: string,
}



type JsonAttachmentData = {
    /**
     * Directly embedded JSON data.
     */
    json: any,

    /**
     * A JSON Web Signature over the content of the attachment.
     */
    jws?: string,
}



type LinksAttachmentData = {
    /**
     * A list of one or more locations at which the content may be fetched.
     */
    links: Array<string>,

    /**
     * The hash of the content encoded in multi-hash format. Used as an integrity check for the attachment.
     */
    hash: string,

    /**
     * A JSON Web Signature over the content of the attachment.
     */
    jws?: string,
}



/**
 * Represents secret.
 */
type Secret = {
    /**
     * A key ID identifying a secret (private key).
     */
    id: string,

    /**
     * Must have the same semantics as type ('type' field) of the corresponding method in DID Doc containing a public key.
     */
    type: SecretType,

    /**
     * Possible value of the secret (private key)
     */
    privateKeyJwk?: any,
    privateKeyMultibase?: string,
    privateKeyBase58?: string,
}



/**
 * Must have the same semantics as type ('type' field) of the corresponding method in DID Doc containing a public key.
 */
type SecretType =
    "JsonWebKey2020" | "X25519KeyAgreementKey2019" 
    | "Ed25519VerificationKey2018" | "EcdsaSecp256k1VerificationKey2019" | string



/**
 * Interface for secrets resolver.
 * Resolves secrets such as private keys to be used for signing and encryption.
 */
interface SecretsResolver {
    /**
     * Finds secret (usually private key) identified by the given key ID.
     *
     * @param `secret_id` the ID (in form of DID URL) identifying a secret
     *
     * @returns A secret (usually private key) or None of there is no secret for the given ID
     * 
     * @throws DIDCommIoError - IO error in resolving process
     * @throws DIDCommInvalidState - Code error or unexpected state was detected
     * 
     * ```
     * let e = Error("Unble perform io operation");
     * e.name = "DIDCommIoError"
     * throw e
     * ```
     */
    get_secret(secret_id: string): Promise<Secret | null>;

    /**
     * Find all secrets that have one of the given IDs.
     * Return secrets only for key IDs for which a secret is present.
     *
     * @param `secret_ids` the IDs find secrets for
     *
     * @returns possible empty list of all secrets that have one of the given IDs.
     * 
     * @throws DIDCommIoError - IO error in resolving process
     * @throws DIDCommInvalidState - Code error or unexpected state was detected
     * 
     * Note to throw compatible error use code like this
     * 
     * ```
     * let e = Error("Unble perform io operation");
     * e.name = "DIDCommIoError"
     * throw e
     * ```
     */
    find_secrets(secret_ids: Array<string>): Promise<Array<string>>;
}



export namespace FromPrior {
    /**
     * Unpacks a plaintext value from a signed `from_prior` JWT.
     * https://identity.foundation/didcomm-messaging/spec/#did-rotation
     * 
     * @param from_prior_jwt signed `from_prior` JWT
     * @param did_resolver instance of `DIDResolver` to resolve DIDs
     * 
     * @returns promise resolving to a tuple of the plaintext `from_prior` value and the identifier
     * of the issuer key used to sign `from_prior`
     * 
     * @throws DIDCommMalformed Signed `from_prior` JWT is malformed.
     * @throws DIDCommDIDNotResolved Issuer DID not found.
     * @throws DIDCommDIDUrlNotFound Issuer authentication verification method is not found.
     * @throws DIDCommUnsupported Used crypto or method is unsupported.
     */
    function unpack(
        from_prior: string,
        did_resolver: DIDResolver,
    ): Promise<[FromPrior, string]>;
}



interface ParsedForward {
    as_value(): IParsedForward;
}



type IParsedForward = {
    msg: Message,
    next: string,
    forwarded_msg: any
}



export namespace Message {
    /**
     * Resolves recipient DID DOC Service and Builds Forward envelops if needed.
     * 
     * Wraps the given packed DIDComm message in Forward messages for every routing key.
     * 
     * @param msg the message to be wrapped in Forward messages
     * @param headers optional headers for Forward message
     * @param to recipient's DID (DID URL)
     * @param routing_keys list of routing keys
     * @param enc_alg_anon The encryption algorithm to be used for anonymous encryption (anon_crypt)
     * @param did_resolver instance of `DIDResolver` to resolve DIDs.
     * 
     * @returns a top-level packed Forward message as JSON string
     * 
     * @throws DIDCommDIDNotResolved
     * @throws DIDCommDIDUrlNotFound
     * @throws DIDCommIoError
     * @throws DIDCommInvalidState
     * @throws DIDCommIllegalArgument
     */
    function wrap_in_forward(
        msg: string,
        headers: Record<string, string>,
        to: string,
        routing_keys: Array<string>, 
        enc_alg_anon: string,
        did_resolver: DIDResolver,
    ): Promise<string>;
}



interface Message {
    /**
     * Tries to parse the Message to a Forward message
     * 
     * @returns a parsed message or null
     */
    try_parse_forward(): ParsedForward;
}



interface FromPrior {
    /**
     * @returns FromPrior representation as plain object
     */
    as_value(): IFromPrior;
}



type IFromPrior = {
    /**
     * new DID after rotation
     */
    iss: string,

    /**
     * prior DID
     */
    sub: string,

    /**
     * Datetime of the DID rotation
     */
    iat?: number,
}



/**
 * Represents DID Doc resolver (https://www.w3.org/TR/did-core/#did-resolution).
 */
interface DIDResolver {
    /**
     * Resolves a DID document by the given DID.
     *
     * @param `did` a DID to be resolved.
     *
     * @returns An instance of resolved DID DOC or null if DID is not found.
     * 
     * @throws DIDCommMalformed - Resolved DID Doc looks malformed
     * @throws DIDCommIoError - IO error in resolving process
     * @throws DIDCommInvalidState - Code error or unexpected state was detected
     * 
     * Note to throw compatible error use code like this
     * 
     * ```
     * let e = Error("Unble perform io operation");
     * e.name = "DIDCommIoError"
     * throw e
     * ```
     */
    resolve(did: string): Promise<DIDDoc | null>;
}



interface FromPrior {
    /**
     * Packs a plaintext `from_prior` value into a signed JWT.
     * https://identity.foundation/didcomm-messaging/spec/#did-rotation
     * 
     * @param issuer_kid (optional) identifier of the issuer key being used to sign `from_prior` JWT value
     * @param did_resolver instance of `DIDResolver` to resolve DIDs
     * @param secrets_resolver instance of `SecretsResolver` to resolve issuer DID keys secrets
     * 
     * @returns promise resolving to a tuple of the signed `from_prior` JWT and the identifier of the issuer key
     * actually used to sign `from_prior`
     * 
     * @throws DIDCommMalformed `from_prior` plaintext value has invalid format.
     * @throws DIDCommIllegalArgument `issuer_kid` is invalid or does not consist with `from_prior` plaintext value.
     * @throws DIDCommDIDNotResolved Issuer DID not found.
     * @throws DIDCommDIDUrlNotFound Issuer authentication verification method is not found.
     * @throws DIDCommSecretNotFound Issuer secret is not found.
     * @throws DIDCommUnsupported Used crypto or method is unsupported.
     * @throws DIDCommInvalidState Indicates a library error.
      */
    pack(
        issuer_kid: string | null,
        did_resolver: DIDResolver,
        secrets_resolver: SecretsResolver,
    ): Promise<[string, string]>;
}



interface Message {
    /** 
     * Produces `DIDComm Signed Message`
     * https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message.
     *
     * Signed messages are not necessary to provide message integrity (tamper evidence),
     * or to prove the sender to the recipient. Both of these guarantees automatically occur
     * with the authenticated encryption in DIDComm encrypted messages. Signed messages are only
     * necessary when the origin of plaintext must be provable to third parties,
     * or when the sender can’t be proven to the recipient by authenticated encryption because
     * the recipient is not known in advance (e.g., in a broadcast scenario).
     * We therefore expect signed messages to be used in a few cases, but not as a matter of course.
     *
     * @param `sign_by` a DID or key ID the sender uses for signing
     * @param `did_resolver` instance of `DIDResolver` to resolve DIDs.
     * @param `secrets_resolver` instance of SecretsResolver` to resolve sender DID keys secrets
     *
     * @returns Tuple (signed_message, metadata)
     * - `signed_message` a DIDComm signed message as JSON string
     * - `metadata` additional metadata about this `encrypt` execution like used keys identifiers and algorithms.
     *
     * @throws DIDCommDIDNotResolved
     * @throws DIDCommDIDUrlNotFound
     * @throws DIDCommMalformed
     * @throws DIDCommIoError
     * @throws DIDCommInvalidState
     * @throws DIDCommNoCompatibleCrypto
     * @throws DIDCommUnsupported
     * @throws DIDCommIllegalArgument
     */
    pack_signed(
        sign_by: string,
        did_resolver: DIDResolver,
        secrets_resolver: SecretsResolver,
    ): Promise<[string, PackSignedMetadata]>;
}



/**
 * Additional metadata about this `pack` method execution like used key identifiers.
 */
type PackSignedMetadata = {
    /**
     * Identifier (DID URL) of sign key.
     */
    sign_by_kid: String,
}



export namespace Message {
    /** 
     * Unpacks the packed message by doing decryption and verifying the signatures.
     * This method supports all DID Comm message types (encrypted, signed, plaintext).
     *
     * If unpack options expect a particular property (for example that a message is encrypted)
     * and the packed message doesn't meet the criteria (it's not encrypted), then a MessageUntrusted
     * error will be returned.
     *
     * @param `packed_msg` the message as JSON string to be unpacked
     * @param `did_resolver` instance of `DIDResolver` to resolve DIDs
     * @param `secrets_resolver` instance of SecretsResolver` to resolve sender DID keys secrets
     * @param `options` allow fine configuration of unpacking process and imposing additional restrictions
     * to message to be trusted.
     *
     * @returns Tuple `[message, metadata]`.
     * - `message` plain message instance
     * - `metadata` additional metadata about this `unpack` execution like used keys identifiers,
     *   trust context, algorithms and etc.
     *
     * @throws DIDCommDIDNotResolved
     * @throws DIDCommDIDUrlNotFound
     * @throws DIDCommMalformed
     * @throws DIDCommIoError
     * @throws DIDCommInvalidState
     * @throws DIDCommNoCompatibleCrypto
     * @throws DIDCommUnsupported
     * @throws DIDCommIllegalArgument
     */
    function unpack(
        msg: string,
        did_resolver: DIDResolver,
        secrets_resolver: SecretsResolver,
        options: UnpackOptions,
    ): Promise<[Message, UnpackMetadata]>;
}



/**
 *  Allows fine customization of unpacking process
 */
type UnpackOptions = {
    /**
     * Whether the plaintext must be decryptable by all keys resolved by the secrets resolver.
     * False by default.
     */
    expect_decrypt_by_all_keys?: boolean,

    /**
     * If `true` and the packed message is a `Forward`
     * wrapping a plaintext packed for the given recipient, then both Forward and packed plaintext are unpacked automatically,
     * and the unpacked plaintext will be returned instead of unpacked Forward.
     * False by default.
     */
    unwrap_re_wrapping_forward?: boolean,
}



/**
 * Additional metadata about this `unpack` method execution like trust predicates
 * and used keys identifiers.
 */
type UnpackMetadata = {
    /**
     * Whether the plaintext has been encrypted.
     */
    encrypted: boolean,

    /**
     * Whether the plaintext has been authenticated.
     */
    authenticated: boolean,

    /**
     * Whether the plaintext has been signed.
     */
    non_repudiation: boolean,

    /**
     * Whether the sender ID was hidden or protected.
     */
    anonymous_sender: boolean,

    /**
     * Whether the plaintext was re-wrapped in a forward message by a mediator.
     */
    re_wrapped_in_forward: boolean,

    /**
     * Key ID of the sender used for authentication encryption
     * if the plaintext has been authenticated and encrypted.
     */
    encrypted_from_kid?: string,

    /**
     * Target key IDS for encryption if the plaintext has been encrypted.
     */
    encrypted_to_kids?: Array<string>,

    /**
     * Key ID used for signature if the plaintext has been signed.
     */
    sign_from: string,

    /**
     * Key ID used for from_prior header signature if from_prior header is present
     */
    from_prior_issuer_kid?: string,

    /**
     * Algorithm used for authenticated encryption.
     * Default "A256cbcHs512Ecdh1puA256kw"
     */
    enc_alg_auth?: "A256cbcHs512Ecdh1puA256kw",
 
    /**
     * Algorithm used for anonymous encryption.
     * Default "Xc20pEcdhEsA256kw"
     */
    enc_alg_anon?: "A256cbcHs512EcdhEsA256kw" | "Xc20pEcdhEsA256kw" | "A256gcmEcdhEsA256kw",

    /**
     * Algorithm used for message signing.
     */
    sign_alg?: "EdDSA" | "ES256" | "ES256K",

    /**
     * If the plaintext has been signed, the JWS is returned for non-repudiation purposes.
     */
    signed_message?: string,

    /**
     * If plaintext contains from_prior header, its unpacked value is returned
     */
    from_prior?: IFromPrior,
}


/**
* Allows building of `from_prior` message header according
* to DIDComm DID Rotation procedure
* https://identity.foundation/didcomm-messaging/spec/#did-rotation.
*/
export class FromPrior {
  free(): void;
/**
* Instantiates FromPrior from plain object
* @param {IFromPrior} value
*/
  constructor(value: IFromPrior);
}
/**
* Wrapper for plain message. Provides helpers for message building and packing/unpacking.
*/
export class Message {
  free(): void;
/**
* Instantiates message from plain object
* @param {IMessage} value
*/
  constructor(value: IMessage);
}
/**
*/
export class ParsedForward {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly message_pack_encrypted: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly message_pack_plaintext: (a: number, b: number) => number;
  readonly __wbg_message_free: (a: number) => void;
  readonly message_new: (a: number, b: number) => void;
  readonly message_as_value: (a: number, b: number) => void;
  readonly fromprior_unpack: (a: number, b: number, c: number) => number;
  readonly __wbg_parsedforward_free: (a: number) => void;
  readonly parsedforward_as_value: (a: number, b: number) => void;
  readonly message_wrap_in_forward: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly message_try_parse_forward: (a: number, b: number) => void;
  readonly __wbg_fromprior_free: (a: number) => void;
  readonly fromprior_new: (a: number, b: number) => void;
  readonly fromprior_as_value: (a: number, b: number) => void;
  readonly fromprior_pack: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly message_pack_signed: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly message_unpack: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf04b872c7ff83b0f: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h00bb741d7291de1b: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
