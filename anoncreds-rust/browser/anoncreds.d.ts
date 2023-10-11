/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function anoncredsSetDefaultLogger(): number;
/**
* @param {string} name
* @param {string} version
* @param {string} issuer_id
* @param {any[]} attribute_names
* @returns {any}
*/
export function anoncredsCreateSchema(name: string, version: string, issuer_id: string, attribute_names: any[]): any;
/**
* @param {string} schema_id
* @param {any} schema
* @param {string} tag
* @param {string} issuer_id
* @param {string} signature_type
* @param {boolean} support_revocation
* @returns {any[]}
*/
export function anoncredsCreateCredentialDefinition(schema_id: string, schema: any, tag: string, issuer_id: string, signature_type: string, support_revocation: boolean): any[];
/**
* @param {string} schema_id
* @param {any} schema
* @param {string} tag
* @param {string} issuer_id
* @returns {any[]}
*/
export function anoncredsCreateCredentialDefinitionCustom(schema_id: string, schema: any, tag: string, issuer_id: string): any[];
/**
* @param {any} json
* @returns {boolean}
*/
export function anoncredsValidateCredentialDefinitionFromJson(json: any): boolean;
/**
* @returns {string}
*/
export function proverCreateLinkSecret(): string;
/**
* @param {any} cred_offer
* @param {any} cred_def
* @param {string} link_secret
* @param {string} link_secret_id
* @returns {any[]}
*/
export function proverCreateCredentialRequest(cred_offer: any, cred_def: any, link_secret: string, link_secret_id: string): any[];
/**
* @param {any} cred_def
* @param {any} credential
* @param {any} cred_req_meta
* @param {string} link_secret
* @returns {any}
*/
export function proverProcessCredential(cred_def: any, credential: any, cred_req_meta: any, link_secret: string): any;
/**
* @param {any} presentation_request
* @param {any} schema_dict
* @param {any} cred_def_dict
* @param {any} credential
* @param {string} link_secret
* @returns {any}
*/
export function proverCreatePresentation(presentation_request: any, schema_dict: any, cred_def_dict: any, credential: any, link_secret: string): any;
/**
* @returns {any}
*/
export function issuerCreateSchema(): any;
/**
* @param {any} jsSchema
* @returns {any[]}
*/
export function issuerCreateCredentialOffer(jsSchema: any): any[];
/**
* @param {any} jsCredOffer
* @param {any} jsCredDef
* @param {any} jsCredDefPriv
* @param {any} jsCredRequest
* @returns {any}
*/
export function issuerCreateCredential(jsCredOffer: any, jsCredDef: any, jsCredDefPriv: any, jsCredRequest: any): any;
/**
*/
export enum ErrorCode {
  Success = 0,
  Input = 1,
  IOError = 2,
  InvalidState = 3,
  Unexpected = 4,
  CredentialRevoked = 5,
  InvalidUserRevocId = 6,
  ProofRejected = 7,
  RevocationRegistryFull = 8,
}
/**
*/
export class BlindedCredentialSecrets {
  free(): void;
}
/**
*/
export class BlindedCredentialSecretsCorrectnessProof {
  free(): void;
}
/**
*/
export class Bls {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} message
* @param {SignKey} sign_key
* @returns {Signature}
*/
  static sign(message: Uint8Array, sign_key: SignKey): Signature;
/**
* @param {Uint8Array} message
* @param {Signature} signature
* @param {VerKey} ver_key
* @param {Generator} generator
* @returns {boolean}
*/
  static verify(message: Uint8Array, signature: Signature, ver_key: VerKey, generator: Generator): boolean;
/**
* @param {ProofOfPossession} pop
* @param {VerKey} ver_key
* @param {Generator} generator
* @returns {boolean}
*/
  static verifyProofOfPosession(pop: ProofOfPossession, ver_key: VerKey, generator: Generator): boolean;
/**
* @param {MultiSignature} multi_sig
* @param {Uint8Array} message
* @param {any[]} ver_keys
* @param {Generator} gen
* @returns {boolean}
*/
  static verifyMultiSignature(multi_sig: MultiSignature, message: Uint8Array, ver_keys: any[], gen: Generator): boolean;
}
/**
* Convenience class for javascript. This provides a name-value pair structure
* instead of a tuple. The compiler complains about unused fields
* so allow(unused) is in place for now
*/
export class CredentialDefinition {
  free(): void;
}
/**
*/
export class CredentialKeyCorrectnessProof {
  free(): void;
}
/**
*/
export class CredentialPrimaryPublicKey {
  free(): void;
}
/**
*/
export class CredentialPrivateKey {
  free(): void;
}
/**
*/
export class CredentialPublicKey {
  free(): void;
/**
* @returns {CredentialPrimaryPublicKey}
*/
  getPrimaryKey(): CredentialPrimaryPublicKey;
/**
* @returns {any}
*/
  getRevocationKey(): any;
}
/**
*/
export class CredentialRevocationPublicKey {
  free(): void;
}
/**
*/
export class CredentialSchema {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} attribute
*/
  addAttr(attribute: string): void;
}
/**
*/
export class CredentialSecretsBlindingFactors {
  free(): void;
}
/**
*/
export class CredentialSignature {
  free(): void;
/**
* @returns {number | undefined}
*/
  extractIndex(): number | undefined;
}
/**
*/
export class CredentialValues {
  free(): void;
/**
*/
  constructor();
/**
* @param {MasterSecret} value
*/
  addMasterSecret(value: MasterSecret): void;
/**
* @param {string} attr
* @param {string} value
*/
  addKnown(attr: string, value: string): void;
/**
* @param {string} attr
* @param {string} value
*/
  addHidden(attr: string, value: string): void;
/**
* @param {string} attr
* @param {string} value
* @param {string} blinding_factor
*/
  addCommitment(attr: string, value: string, blinding_factor: string): void;
}
/**
*/
export class EcdhSecp256k1Sha256 {
  free(): void;
/**
*/
  constructor();
/**
* @returns {KeyPair}
*/
  keypair(): KeyPair;
/**
* @param {Uint8Array} seed
* @returns {KeyPair}
*/
  keypair_from_seed(seed: Uint8Array): KeyPair;
/**
* @param {WasmPrivateKey} sk
* @returns {WasmPublicKey}
*/
  getPublicKey(sk: WasmPrivateKey): WasmPublicKey;
/**
* @param {WasmPrivateKey} sk
* @param {WasmPublicKey} pk
* @returns {WasmSessionKey}
*/
  computeSharedSecret(sk: WasmPrivateKey, pk: WasmPublicKey): WasmSessionKey;
}
/**
*/
export class EcdsaSecp256k1Sha256 {
  free(): void;
/**
*/
  constructor();
/**
* @returns {KeyPair}
*/
  keypair(): KeyPair;
/**
* @param {Uint8Array} seed
* @returns {KeyPair}
*/
  keypairFromSeed(seed: Uint8Array): KeyPair;
/**
* @param {WasmPrivateKey} sk
* @returns {WasmPublicKey}
*/
  getPublicKey(sk: WasmPrivateKey): WasmPublicKey;
/**
* @param {Uint8Array} message
* @param {WasmPrivateKey} sk
* @returns {Uint8Array}
*/
  sign(message: Uint8Array, sk: WasmPrivateKey): Uint8Array;
/**
* @param {Uint8Array} message
* @param {Uint8Array} signature
* @param {WasmPublicKey} pk
* @returns {boolean}
*/
  verify(message: Uint8Array, signature: Uint8Array, pk: WasmPublicKey): boolean;
/**
* @param {Uint8Array} signature
*/
  normalizeS(signature: Uint8Array): void;
/**
* @param {WasmPublicKey} pk
* @returns {WasmPublicKey}
*/
  publicKeyCompressed(pk: WasmPublicKey): WasmPublicKey;
/**
* @param {WasmPublicKey} pk
* @returns {WasmPublicKey}
*/
  publicKeyUnCompressed(pk: WasmPublicKey): WasmPublicKey;
/**
* @param {Uint8Array} bytes
* @returns {WasmPublicKey}
*/
  parseToPublicKey(bytes: Uint8Array): WasmPublicKey;
}
/**
*/
export class Ed25519Sha512 {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} seed
* @returns {Ed25519Sha512}
*/
  static fromSeed(seed: Uint8Array): Ed25519Sha512;
/**
* @param {Uint8Array} sk
* @returns {Ed25519Sha512}
*/
  static fromPrivateKey(sk: Uint8Array): Ed25519Sha512;
/**
* @returns {Uint8Array}
*/
  getPulicKey(): Uint8Array;
/**
* @param {Uint8Array} message
* @returns {Uint8Array}
*/
  sign(message: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} message
* @param {Uint8Array} signature
* @param {Uint8Array} pk
* @returns {boolean}
*/
  static verify(message: Uint8Array, signature: Uint8Array, pk: Uint8Array): boolean;
}
/**
*/
export class Generator {
  free(): void;
/**
*/
  constructor();
/**
* @returns {Uint8Array}
*/
  toBytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Generator}
*/
  static fromBytes(bytes: Uint8Array): Generator;
}
/**
*/
export class IssuedCredential {
  free(): void;
}
/**
* Convenience class for javascript. This provides a name-value pair structure
* instead of a tuple. The compiler complains about unused fields
* so allow(unused) is in place for now
*/
export class IssuedCredentialWithRevocation {
  free(): void;
}
/**
*/
export class Issuer {
  free(): void;
/**
* @param {CredentialSchema} credential_schema
* @param {NonCredentialSchema} non_credential_schema
* @param {boolean} support_revocation
* @returns {CredentialDefinition}
*/
  static newCredentialDefinition(credential_schema: CredentialSchema, non_credential_schema: NonCredentialSchema, support_revocation: boolean): CredentialDefinition;
/**
* @param {string} prover_id
* @param {BlindedCredentialSecrets} blinded_credential_secrets
* @param {BlindedCredentialSecretsCorrectnessProof} blinded_credential_secrets_correctness_proof
* @param {Nonce} credential_nonce
* @param {Nonce} credential_issuance_nonce
* @param {CredentialValues} credential_values
* @param {CredentialPublicKey} credential_pub_key
* @param {CredentialPrivateKey} credential_priv_key
* @returns {IssuedCredential}
*/
  static signCredential(prover_id: string, blinded_credential_secrets: BlindedCredentialSecrets, blinded_credential_secrets_correctness_proof: BlindedCredentialSecretsCorrectnessProof, credential_nonce: Nonce, credential_issuance_nonce: Nonce, credential_values: CredentialValues, credential_pub_key: CredentialPublicKey, credential_priv_key: CredentialPrivateKey): IssuedCredential;
/**
* @param {string} prover_id
* @param {BlindedCredentialSecrets} blinded_credential_secrets
* @param {BlindedCredentialSecretsCorrectnessProof} blinded_credential_secrets_correctness_proof
* @param {Nonce} credential_nonce
* @param {Nonce} credential_issuance_nonce
* @param {CredentialValues} credential_values
* @param {CredentialPublicKey} credential_pub_key
* @param {CredentialPrivateKey} credential_priv_key
* @param {number} rev_idx
* @param {number} max_cred_num
* @param {boolean} issuance_by_default
* @param {RevocationRegistry} rev_reg
* @param {RevocationPrivateKey} rev_key_priv
* @param {SimpleTailsAccessor} rev_tails_accessor
* @returns {IssuedCredentialWithRevocation}
*/
  static signCredentialWithRevocation(prover_id: string, blinded_credential_secrets: BlindedCredentialSecrets, blinded_credential_secrets_correctness_proof: BlindedCredentialSecretsCorrectnessProof, credential_nonce: Nonce, credential_issuance_nonce: Nonce, credential_values: CredentialValues, credential_pub_key: CredentialPublicKey, credential_priv_key: CredentialPrivateKey, rev_idx: number, max_cred_num: number, issuance_by_default: boolean, rev_reg: RevocationRegistry, rev_key_priv: RevocationPrivateKey, rev_tails_accessor: SimpleTailsAccessor): IssuedCredentialWithRevocation;
}
/**
*/
export class KeyPair {
  free(): void;
}
/**
*/
export class MasterSecret {
  free(): void;
/**
*/
  constructor();
}
/**
*/
export class MultiSignature {
  free(): void;
/**
* @param {any[]} signatures
*/
  constructor(signatures: any[]);
/**
* @param {Uint8Array} bytes
* @returns {MultiSignature}
*/
  static fromBytes(bytes: Uint8Array): MultiSignature;
/**
* @returns {Uint8Array}
*/
  toBytes(): Uint8Array;
}
/**
*/
export class NonCredentialSchema {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} attribute
*/
  addAttr(attribute: string): void;
}
/**
*/
export class Nonce {
  free(): void;
/**
*/
  constructor();
}
/**
*/
export class Proof {
  free(): void;
}
/**
*/
export class ProofBuilder {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} attribute
*/
  addCommonAttribute(attribute: string): void;
/**
* @param {SubProofRequest} sub_proof_request
* @param {CredentialSchema} credential_schema
* @param {NonCredentialSchema} non_credential_schema
* @param {CredentialSignature} credential_signature
* @param {CredentialValues} credential_values
* @param {CredentialPublicKey} credential_pub_key
* @param {any} rev_reg
* @param {any} witness
*/
  addSubProofRequest(sub_proof_request: SubProofRequest, credential_schema: CredentialSchema, non_credential_schema: NonCredentialSchema, credential_signature: CredentialSignature, credential_values: CredentialValues, credential_pub_key: CredentialPublicKey, rev_reg: any, witness: any): void;
/**
* @param {Nonce} nonce
* @returns {Proof}
*/
  finalize(nonce: Nonce): Proof;
}
/**
*/
export class ProofOfPossession {
  free(): void;
/**
* @param {VerKey} ver_key
* @param {SignKey} sign_key
*/
  constructor(ver_key: VerKey, sign_key: SignKey);
/**
* @param {Uint8Array} bytes
* @returns {ProofOfPossession}
*/
  static fromBytes(bytes: Uint8Array): ProofOfPossession;
/**
* @returns {Uint8Array}
*/
  toBytes(): Uint8Array;
}
/**
*/
export class ProofVerifier {
  free(): void;
/**
*/
  constructor();
/**
* @param {SubProofRequest} sub_proof_request
* @param {CredentialSchema} credential_schema
* @param {NonCredentialSchema} non_credential_schema
* @param {CredentialPublicKey} credential_pub_key
* @param {any} rev_key_pub
* @param {any} rev_reg
*/
  addSubProofRequest(sub_proof_request: SubProofRequest, credential_schema: CredentialSchema, non_credential_schema: NonCredentialSchema, credential_pub_key: CredentialPublicKey, rev_key_pub: any, rev_reg: any): void;
/**
* @param {Proof} proof
* @param {Nonce} nonce
* @returns {boolean}
*/
  verify(proof: Proof, nonce: Nonce): boolean;
}
/**
*/
export class Prover {
  free(): void;
/**
* @param {CredentialPublicKey} credential_pub_key
* @param {CredentialKeyCorrectnessProof} credential_key_correctness_proof
* @param {CredentialValues} credential_values
* @param {Nonce} credential_nonce
* @returns {ProverBlindedCredentialSecrets}
*/
  static blindedCredentialSecrets(credential_pub_key: CredentialPublicKey, credential_key_correctness_proof: CredentialKeyCorrectnessProof, credential_values: CredentialValues, credential_nonce: Nonce): ProverBlindedCredentialSecrets;
/**
* @param {IssuedCredential} issued_credential
* @param {CredentialValues} credential_values
* @param {CredentialSecretsBlindingFactors} credential_secrets_blinding_factors
* @param {CredentialPublicKey} credential_pub_key
* @param {Nonce} nonce
* @param {any} rev_key_pub
* @param {any} rev_reg
* @param {any} witness
* @returns {CredentialSignature}
*/
  static processCredentialSignature(issued_credential: IssuedCredential, credential_values: CredentialValues, credential_secrets_blinding_factors: CredentialSecretsBlindingFactors, credential_pub_key: CredentialPublicKey, nonce: Nonce, rev_key_pub: any, rev_reg: any, witness: any): CredentialSignature;
}
/**
* Convenience class for javascript. This provides a name-value pair structure
* instead of a tuple. The compiler complains about unused fields
* so allow(unused) is in place for now
*/
export class ProverBlindedCredentialSecrets {
  free(): void;
}
/**
*/
export class RevocationPrivateKey {
  free(): void;
}
/**
*/
export class RevocationPublicKey {
  free(): void;
}
/**
*/
export class RevocationRegistry {
  free(): void;
}
/**
*/
export class RevocationRegistryDelta {
  free(): void;
/**
* @param {any} rev_reg_from
* @param {RevocationRegistry} rev_reg_to
* @param {any} issued
* @param {any} revoked
* @returns {RevocationRegistryDelta}
*/
  static fromParts(rev_reg_from: any, rev_reg_to: RevocationRegistry, issued: any, revoked: any): RevocationRegistryDelta;
/**
* @param {RevocationRegistryDelta} other_delta
*/
  merge(other_delta: RevocationRegistryDelta): void;
}
/**
*/
export class RevocationTailsGenerator {
  free(): void;
/**
* @returns {number}
*/
  count(): number;
/**
* @returns {any}
*/
  next(): any;
}
/**
*/
export class SignKey {
  free(): void;
/**
*/
  constructor();
/**
* @param {Uint8Array} seed
* @returns {SignKey}
*/
  static fromSeed(seed: Uint8Array): SignKey;
/**
* @param {Uint8Array} bytes
* @returns {SignKey}
*/
  static fromBytes(bytes: Uint8Array): SignKey;
/**
* @returns {Uint8Array}
*/
  toBytes(): Uint8Array;
}
/**
*/
export class Signature {
  free(): void;
/**
* @param {Uint8Array} bytes
* @returns {Signature}
*/
  static fromBytes(bytes: Uint8Array): Signature;
/**
* @returns {Uint8Array}
*/
  toBytes(): Uint8Array;
}
/**
*/
export class SignatureCorrectnessProof {
  free(): void;
}
/**
*/
export class SimpleTailsAccessor {
  free(): void;
/**
* @param {RevocationTailsGenerator} rev_tails_generator
*/
  constructor(rev_tails_generator: RevocationTailsGenerator);
/**
* @param {number} tail_id
* @param {Function} accessor
*/
  accessTail(tail_id: number, accessor: Function): void;
}
/**
*/
export class SubProofRequest {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} attribute
*/
  addRevealedAttribute(attribute: string): void;
/**
* @param {string} attribute
* @param {string} p_type
* @param {number} value
*/
  addPredicate(attribute: string, p_type: string, value: number): void;
}
/**
*/
export class Tail {
  free(): void;
}
/**
*/
export class UrsaEncryptor {
  free(): void;
/**
* @param {string} cipher
* @returns {WasmCipherKey}
*/
  static new(cipher: string): WasmCipherKey;
/**
* @param {string} cipher
* @param {string} key
* @returns {WasmCipherKey}
*/
  static withKey(cipher: string, key: string): WasmCipherKey;
/**
* @param {WasmCipherKey} cipher_key
* @param {Uint8Array} aad
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
  encrypt(cipher_key: WasmCipherKey, aad: Uint8Array, input: Uint8Array): Uint8Array;
/**
* @param {WasmCipherKey} cipher_key
* @param {Uint8Array} aad
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
  decrypt(cipher_key: WasmCipherKey, aad: Uint8Array, input: Uint8Array): Uint8Array;
}
/**
*/
export class VerKey {
  free(): void;
/**
* @param {Generator} generator
* @param {SignKey} sign_key
*/
  constructor(generator: Generator, sign_key: SignKey);
/**
* @param {Uint8Array} bytes
* @returns {VerKey}
*/
  static fromBytes(bytes: Uint8Array): VerKey;
/**
* @returns {Uint8Array}
*/
  toBytes(): Uint8Array;
}
/**
*/
export class WasmCipherKey {
  free(): void;
}
/**
*/
export class WasmPrivateKey {
  free(): void;
}
/**
*/
export class WasmPublicKey {
  free(): void;
/**
* @param {Uint8Array} key
*/
  constructor(key: Uint8Array);
}
/**
*/
export class WasmSessionKey {
  free(): void;
}
/**
*/
export class Witness {
  free(): void;
/**
* @param {number} rev_idx
* @param {number} max_cred_num
* @param {boolean} issuance_by_default
* @param {RevocationRegistryDelta} rev_reg_delta
* @param {SimpleTailsAccessor} rev_tails_accessor
*/
  constructor(rev_idx: number, max_cred_num: number, issuance_by_default: boolean, rev_reg_delta: RevocationRegistryDelta, rev_tails_accessor: SimpleTailsAccessor);
/**
* @param {number} rev_idx
* @param {number} max_cred_num
* @param {RevocationRegistryDelta} rev_reg_delta
* @param {SimpleTailsAccessor} rev_tails_accessor
*/
  update(rev_idx: number, max_cred_num: number, rev_reg_delta: RevocationRegistryDelta, rev_tails_accessor: SimpleTailsAccessor): void;
}
/**
*/
export class X25519Sha256 {
  free(): void;
/**
*/
  constructor();
/**
* @returns {KeyPair}
*/
  keypair(): KeyPair;
/**
* @param {Uint8Array} seed
* @returns {KeyPair}
*/
  keypair_from_seed(seed: Uint8Array): KeyPair;
/**
* @param {WasmPrivateKey} sk
* @returns {WasmPublicKey}
*/
  getPublicKey(sk: WasmPrivateKey): WasmPublicKey;
/**
* @param {WasmPrivateKey} sk
* @param {WasmPublicKey} pk
* @returns {WasmSessionKey}
*/
  computeSharedSecret(sk: WasmPrivateKey, pk: WasmPublicKey): WasmSessionKey;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly anoncredsSetDefaultLogger: () => number;
  readonly anoncredsCreateSchema: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly anoncredsCreateCredentialDefinition: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
  readonly anoncredsCreateCredentialDefinitionCustom: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly anoncredsValidateCredentialDefinitionFromJson: (a: number, b: number) => void;
  readonly proverCreateLinkSecret: (a: number) => void;
  readonly proverCreateCredentialRequest: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly proverProcessCredential: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly proverCreatePresentation: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly issuerCreateSchema: () => number;
  readonly issuerCreateCredentialOffer: (a: number, b: number) => void;
  readonly issuerCreateCredential: (a: number, b: number, c: number, d: number) => number;
  readonly generator_new: (a: number) => void;
  readonly generator_toBytes: (a: number, b: number) => void;
  readonly generator_fromBytes: (a: number, b: number, c: number) => void;
  readonly __wbg_signkey_free: (a: number) => void;
  readonly signkey_new: (a: number) => void;
  readonly signkey_fromSeed: (a: number, b: number, c: number) => void;
  readonly signkey_fromBytes: (a: number, b: number, c: number) => void;
  readonly signkey_toBytes: (a: number, b: number) => void;
  readonly verkey_new: (a: number, b: number, c: number) => void;
  readonly verkey_fromBytes: (a: number, b: number, c: number) => void;
  readonly verkey_toBytes: (a: number, b: number) => void;
  readonly proofofpossession_new: (a: number, b: number, c: number) => void;
  readonly __wbg_multisignature_free: (a: number) => void;
  readonly multisignature_new: (a: number, b: number, c: number) => void;
  readonly multisignature_fromBytes: (a: number, b: number, c: number) => void;
  readonly multisignature_toBytes: (a: number, b: number) => void;
  readonly __wbg_bls_free: (a: number) => void;
  readonly bls_new: () => number;
  readonly bls_sign: (a: number, b: number, c: number, d: number) => void;
  readonly bls_verify: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly bls_verifyProofOfPosession: (a: number, b: number, c: number, d: number) => void;
  readonly bls_verifyMultiSignature: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly __wbg_credentialschema_free: (a: number) => void;
  readonly credentialschema_new: () => number;
  readonly credentialschema_addAttr: (a: number, b: number, c: number) => void;
  readonly __wbg_credentialvalues_free: (a: number) => void;
  readonly credentialvalues_addMasterSecret: (a: number, b: number, c: number) => void;
  readonly credentialvalues_addKnown: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly credentialvalues_addHidden: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly credentialvalues_addCommitment: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly __wbg_credentialprimarypublickey_free: (a: number) => void;
  readonly __wbg_credentialpublickey_free: (a: number) => void;
  readonly credentialpublickey_getPrimaryKey: (a: number, b: number) => void;
  readonly credentialpublickey_getRevocationKey: (a: number, b: number) => void;
  readonly __wbg_credentialrevocationpublickey_free: (a: number) => void;
  readonly __wbg_credentialprivatekey_free: (a: number) => void;
  readonly __wbg_credentialkeycorrectnessproof_free: (a: number) => void;
  readonly __wbg_credentialdefinition_free: (a: number) => void;
  readonly __wbg_mastersecret_free: (a: number) => void;
  readonly mastersecret_new: (a: number) => void;
  readonly nonce_new: (a: number) => void;
  readonly __wbg_blindedcredentialsecrets_free: (a: number) => void;
  readonly __wbg_credentialsecretsblindingfactors_free: (a: number) => void;
  readonly __wbg_blindedcredentialsecretscorrectnessproof_free: (a: number) => void;
  readonly __wbg_proverblindedcredentialsecrets_free: (a: number) => void;
  readonly __wbg_credentialsignature_free: (a: number) => void;
  readonly credentialsignature_extractIndex: (a: number, b: number) => void;
  readonly __wbg_signaturecorrectnessproof_free: (a: number) => void;
  readonly __wbg_issuedcredential_free: (a: number) => void;
  readonly __wbg_issuedcredentialwithrevocation_free: (a: number) => void;
  readonly __wbg_revocationpublickey_free: (a: number) => void;
  readonly __wbg_revocationprivatekey_free: (a: number) => void;
  readonly __wbg_revocationregistry_free: (a: number) => void;
  readonly __wbg_revocationregistrydelta_free: (a: number) => void;
  readonly revocationregistrydelta_fromParts: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly revocationregistrydelta_merge: (a: number, b: number, c: number) => void;
  readonly __wbg_revocationtailsgenerator_free: (a: number) => void;
  readonly revocationtailsgenerator_count: (a: number) => number;
  readonly revocationtailsgenerator_next: (a: number, b: number) => void;
  readonly __wbg_simpletailsaccessor_free: (a: number) => void;
  readonly simpletailsaccessor_new: (a: number, b: number) => void;
  readonly simpletailsaccessor_accessTail: (a: number, b: number, c: number) => void;
  readonly witness_new: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly witness_update: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_proof_free: (a: number) => void;
  readonly __wbg_subproofrequest_free: (a: number) => void;
  readonly subproofrequest_new: () => number;
  readonly subproofrequest_addPredicate: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_proofbuilder_free: (a: number) => void;
  readonly proofbuilder_new: () => number;
  readonly proofbuilder_addCommonAttribute: (a: number, b: number, c: number) => void;
  readonly proofbuilder_addSubProofRequest: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
  readonly proofbuilder_finalize: (a: number, b: number, c: number) => void;
  readonly __wbg_proofverifier_free: (a: number) => void;
  readonly proofverifier_new: () => number;
  readonly proofverifier_addSubProofRequest: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly proofverifier_verify: (a: number, b: number, c: number, d: number) => void;
  readonly issuer_newCredentialDefinition: (a: number, b: number, c: number, d: number) => void;
  readonly issuer_signCredential: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
  readonly issuer_signCredentialWithRevocation: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number) => void;
  readonly prover_blindedCredentialSecrets: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly prover_processCredentialSignature: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly __wbg_ed25519sha512_free: (a: number) => void;
  readonly ed25519sha512_new: (a: number) => void;
  readonly ed25519sha512_fromSeed: (a: number, b: number, c: number) => void;
  readonly ed25519sha512_fromPrivateKey: (a: number, b: number, c: number) => void;
  readonly ed25519sha512_getPulicKey: (a: number, b: number) => void;
  readonly ed25519sha512_sign: (a: number, b: number, c: number, d: number) => void;
  readonly ed25519sha512_verify: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly __wbg_wasmcipherkey_free: (a: number) => void;
  readonly ursaencryptor_new: (a: number, b: number, c: number) => void;
  readonly ursaencryptor_withKey: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly ursaencryptor_encrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly ursaencryptor_decrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly ecdsasecp256k1sha256_keypair: (a: number, b: number) => void;
  readonly ecdsasecp256k1sha256_keypairFromSeed: (a: number, b: number, c: number, d: number) => void;
  readonly ecdsasecp256k1sha256_getPublicKey: (a: number, b: number, c: number) => void;
  readonly ecdsasecp256k1sha256_sign: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly ecdsasecp256k1sha256_verify: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly ecdsasecp256k1sha256_normalizeS: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly ecdsasecp256k1sha256_publicKeyCompressed: (a: number, b: number) => number;
  readonly ecdsasecp256k1sha256_publicKeyUnCompressed: (a: number, b: number) => number;
  readonly ecdsasecp256k1sha256_parseToPublicKey: (a: number, b: number, c: number, d: number) => void;
  readonly ecdhsecp256k1sha256_keypair: (a: number, b: number) => void;
  readonly ecdhsecp256k1sha256_keypair_from_seed: (a: number, b: number, c: number, d: number) => void;
  readonly ecdhsecp256k1sha256_getPublicKey: (a: number, b: number, c: number) => void;
  readonly ecdhsecp256k1sha256_computeSharedSecret: (a: number, b: number, c: number, d: number) => void;
  readonly x25519sha256_keypair: (a: number, b: number) => void;
  readonly x25519sha256_keypair_from_seed: (a: number, b: number, c: number, d: number) => void;
  readonly x25519sha256_getPublicKey: (a: number, b: number, c: number) => void;
  readonly x25519sha256_computeSharedSecret: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_wasmprivatekey_free: (a: number) => void;
  readonly wasmpublickey_new: (a: number, b: number, c: number) => void;
  readonly __wbg_nonce_free: (a: number) => void;
  readonly signature_toBytes: (a: number, b: number) => void;
  readonly proofofpossession_toBytes: (a: number, b: number) => void;
  readonly __wbg_keypair_free: (a: number) => void;
  readonly __wbg_noncredentialschema_free: (a: number) => void;
  readonly ecdsasecp256k1sha256_new: () => number;
  readonly ecdhsecp256k1sha256_new: () => number;
  readonly x25519sha256_new: () => number;
  readonly __wbg_issuer_free: (a: number) => void;
  readonly __wbg_prover_free: (a: number) => void;
  readonly __wbg_ursaencryptor_free: (a: number) => void;
  readonly __wbg_ecdsasecp256k1sha256_free: (a: number) => void;
  readonly __wbg_ecdhsecp256k1sha256_free: (a: number) => void;
  readonly __wbg_x25519sha256_free: (a: number) => void;
  readonly noncredentialschema_new: () => number;
  readonly credentialvalues_new: () => number;
  readonly __wbg_tail_free: (a: number) => void;
  readonly __wbg_witness_free: (a: number) => void;
  readonly noncredentialschema_addAttr: (a: number, b: number, c: number) => void;
  readonly subproofrequest_addRevealedAttribute: (a: number, b: number, c: number) => void;
  readonly __wbg_verkey_free: (a: number) => void;
  readonly __wbg_signature_free: (a: number) => void;
  readonly __wbg_proofofpossession_free: (a: number) => void;
  readonly __wbg_generator_free: (a: number) => void;
  readonly __wbg_wasmpublickey_free: (a: number) => void;
  readonly __wbg_wasmsessionkey_free: (a: number) => void;
  readonly signature_fromBytes: (a: number, b: number, c: number) => void;
  readonly proofofpossession_fromBytes: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
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
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
