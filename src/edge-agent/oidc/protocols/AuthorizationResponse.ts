
export class AuthorizationResponse {
  public readonly url: URL;
  public readonly code: string;

  constructor(
    callbackUrl: string | URL,
    code: string,
  ) {
    this.url = new URL(callbackUrl);
    this.code = code;
  }

  get params() {
    return this.url.searchParams;
  }


  get issuer() {
    return this.params.get("iss");
  }

  get state() {
    return this.params.get("state");
  }

}
