import { IDIDDocumentVerificationMethod } from "@aviarytech/did-peer/interfaces";

type PeerDIDKeyType = "encryptionKeys" | "signingKeys";

export type PeerDIDKeys = {
  [K in PeerDIDKeyType]: IDIDDocumentVerificationMethod[];
};

export enum VerificationMethodTypeAgreement {
  JSON_WEB_KEY_2020 = "JsonWebKey2020",
  X25519_KEY_AGREEMENT_KEY_2019 = "X25519KeyAgreementKey2019",
  X25519_KEY_AGREEMENT_KEY_2020 = "X25519KeyAgreementKey2020",
}

export enum VerificationMethodTypeAuthentication {
  JSON_WEB_KEY_2020 = "JsonWebKey2020",
  ED25519_VERIFICATION_KEY_2018 = "Ed25519VerificationKey2018",
  ED25519_VERIFICATION_KEY_2020 = "Ed25519VerificationKey2020",
}

export enum VerificationMaterialFormatPeerDID {
  JWK,
  BASE58,
  MULTIBASE,
}
