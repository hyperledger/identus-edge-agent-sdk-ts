import { HttpMethod } from "../../../domain";

export class TokenRequest {
  public readonly url: URL;

  constructor(
    endpoint: string | URL,
    public readonly grantType: "authorization_code",
    public readonly body: URLSearchParams,
    public readonly headers: Headers = new Headers(),
    public readonly method: HttpMethod = "POST",
  ) {
    this.url = new URL(endpoint);

    this.body.set("grant_type", this.grantType);

    this.headers.set("accept", "application/json");
    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  }
}
