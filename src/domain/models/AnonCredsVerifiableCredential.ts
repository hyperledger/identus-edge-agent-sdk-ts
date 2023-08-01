import { Credential, StorableCredential } from "./Credential";
import { CredentialType } from "./VerifiableCredential";

export enum AnonCredsCredentialProperties {
  iss = "iss",
  jti = "jti",
  sub = "sub",
  vc = "vc",
  meta = "metadata",
  exp = "exp",
}

export const AnonCredsRecoveryId = "anonCreds+credential";

export class AnonCredsCredential
  extends Credential
  implements StorableCredential
{
  public credentialType = CredentialType.AnonCreds;
  public recoveryId = AnonCredsRecoveryId;
  public properties = new Map<AnonCredsCredentialProperties, any>();

  constructor(
    verifiableCredential: Record<string, any>,
    metadata: Record<string, any>
  ) {
    super();

    this.properties.set(AnonCredsCredentialProperties.vc, verifiableCredential);
    this.properties.set(AnonCredsCredentialProperties.meta, metadata);
  }

  get id() {
    return this.getProperty(AnonCredsCredentialProperties.jti);
  }

  get claims() {
    //TODO: SOLVE THIS DURING THE PRESENTATION PHASE
    return [];
  }

  get subject() {
    return this.properties.get(AnonCredsCredentialProperties.sub);
  }

  get issuer() {
    return this.properties.get(AnonCredsCredentialProperties.iss);
  }

  toStorable() {
    const credentialData = JSON.stringify(Object.fromEntries(this.properties));
    const { id, recoveryId, issuer, subject, claims } = this;
    return {
      id,
      recoveryId,
      credentialData: credentialData,
      issuer,
      subject,
      validUntil: this.getProperty(AnonCredsCredentialProperties.exp),
      availableClaims: claims,
    };
  }
}
