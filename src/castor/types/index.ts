import {
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
} from "../../peer-did/types";

export type PeerDIDKeys = {
  signingKeys: VerificationMaterialAuthentication[];
  encryptionKeys: VerificationMaterialAgreement[];
};

export enum VerificationKeyType {
  Ed25519VerificationKey2018 = "Ed25519VerificationKey2018",
  Ed25519VerificationKey2020 = "Ed25519VerificationKey2020",
  X25519KeyAgreementKey2019 = "X25519KeyAgreementKey2019",
  X25519KeyAgreementKey2020 = "X25519KeyAgreementKey2020",
  EcdsaSecp256k1VerificationKey2019 = "EcdsaSecp256k1VerificationKey2019",
}
