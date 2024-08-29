import { HttpMethod } from "../../../domain";
import { JsonObj } from "../../../utils";

export class CredentialRequest {
  public readonly url: URL;

  constructor(
    endpoint: string | URL,
    public readonly accessToken: string,
    public readonly params: JsonObj,
    public readonly headers: Headers = new Headers(),
    public readonly method: HttpMethod = "POST",
  ) {
    this.url = new URL(endpoint);

    this.headers.set('authorization', `Bearer ${accessToken}`);
    this.headers.set('content-type', 'application/json');
  }
}
