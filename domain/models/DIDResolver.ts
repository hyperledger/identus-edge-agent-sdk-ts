import { DIDDocument } from "./DIDDocument";

export abstract class DIDResolver {
  abstract method: string;
  abstract resolve(didString: string): Promise<DIDDocument>;
}
