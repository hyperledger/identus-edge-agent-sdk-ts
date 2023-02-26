import { DIDDocument } from "./DIDDocument";

export abstract class DIDResolver {
  static method: string;
  static resolve: (didString: String) => Promise<DIDDocument>;
}
