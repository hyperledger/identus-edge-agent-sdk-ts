export class PeerDIDHepers {
  static withAgreementFromTypePeerDID(
    v: VerificationMethodTypePeerDID
  ): v is VerificationMethodTypePeerDIDWithAgreement {
    return (
      (v as VerificationMethodTypePeerDIDWithAgreement).agreement !== undefined
    );
  }

  static withAuthenticationFromTypePeerDID(
    v: VerificationMethodTypePeerDID
  ): v is VerificationMethodTypePeerDIDWithAuthentication {
    return (
      (v as VerificationMethodTypePeerDIDWithAuthentication).authentication !==
      undefined
    );
  }

  static withAgreement(
    v: VerificationMaterialPeerDID
  ): v is VerificationMaterialPeerDIDWithAgreement {
    return PeerDIDHepers.withAgreementFromTypePeerDID(v.keyType);
  }

  static withAuthentication(
    v: VerificationMaterialPeerDID
  ): v is VerificationMaterialPeerDIDWithAuthentication {
    return PeerDIDHepers.withAuthenticationFromTypePeerDID(v.keyType);
  }
}
