import { DID, DIDUrl } from "../../domain";
import { InvalidDIDString } from "../../domain/models/errors/Castor";

export function parse(didString: string): DIDUrl {
  const regex =
    /^did:(?<method>[a-z0-9]+(:[a-z0-9]+)*):(?<idstring>[^#?/]*)(?<path>[^#?]*)?(?<query>\?[^#]*)?(?<fragment>#.*)?$/gi;
  const match = regex.exec(didString);
  if (!match || !match.groups) {
    throw new InvalidDIDString("Invalid did string");
  }
  const { method, idstring, fragment = "", query = "", path } = match.groups;
  let attributes = new Map();
  if (query) {
    attributes = query
      .slice(1)
      .split("&")
      .map((queryAttribute) => queryAttribute.split("="))
      .reduce((all, [varName, varValue]) => {
        all.set(varName, varValue);
        return all;
      }, new Map());
  }

  const did = DID.fromString(`did:${method}:${idstring}`);
  const paths = path ? path.split("/").filter((p) => p) : [];
  return new DIDUrl(did, paths, attributes, fragment.slice(1));
}
