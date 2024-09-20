// OIDC Agent Error
class OAE extends Error {}

export class InvalidOffer extends OAE {}
export class InvalidRequest extends OAE {}
export class InvalidCredentialConfigurationIds extends OAE {}
export class InvalidTokenResponseStatus extends OAE {}

// "window unavailable - url must be provided"
export class RequiredCallbackUrl extends OAE {}

export class MissingClientId extends OAE {}
export class MissingRedirectUri extends OAE {}
export class MissingScope extends OAE {}
export class MissingAuthorizationServerUri extends OAE {}
