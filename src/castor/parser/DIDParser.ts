import { DID } from "../../domain";

import { InvalidDIDString } from "../../domain/models/errors/Castor";

export function parse(didString: string): DID {
  const regex = /^did:(?<method>[a-z0-9]+(:[a-z0-9]+)*):(?<idstring>[^#?]*)$/g;
  const match = regex.exec(didString);

  if (!match) {
    throw new InvalidDIDString("Invalid did string");
  }
  const [, methodName, methodId] = match;
  if (!methodId) {
    throw new InvalidDIDString("Invalid methodId");
  }
  if (!methodName) {
    throw new InvalidDIDString("Invalid methodName");
  }
  return new DID("did", methodName.toString(), methodId.toString());
}
