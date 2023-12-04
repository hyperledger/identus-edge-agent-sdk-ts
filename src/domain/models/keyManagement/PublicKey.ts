import { Key } from "./Key";

export abstract class PublicKey extends Key {
  get value() {
    return this.raw;
  }
}
