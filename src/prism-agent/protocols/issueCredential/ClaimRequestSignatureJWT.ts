interface VerifiablePresentation {
  context: Set<string>;
  type: Set<string>;
}

export class ClaimsRequestSignatureJWT {
  constructor(
    private iss: string,
    private aud: string,
    private nonce: string,
    private vp: VerifiablePresentation
  ) {}
}
