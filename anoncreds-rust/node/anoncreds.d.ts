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
