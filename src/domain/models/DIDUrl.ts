import { DID } from "./DID";

export class DIDUrl {
  did: DID;
  path: string[];
  parameters: Map<string, string>;
  fragment: string;

  constructor(
    did: DID,
    path: string[] = [],
    parameters: Map<string, string> = new Map(),
    fragment = ""
  ) {
    this.did = did;
    this.path = path;
    this.parameters = parameters;
    this.fragment = fragment;
  }

  string(): string {
    return `${this.did}${this.fragmentString()}`;
  }

  pathString(): string {
    return `/${this.path.join("/")}`;
  }

  queryString(): string {
    return `?${Array.from(this.parameters.entries())
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
  }

  fragmentString(): string {
    return `#${this.fragment}`;
  }
}
