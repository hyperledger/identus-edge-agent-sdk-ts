import { Key } from "./Key";

export abstract class PrivateKey extends Key {
  abstract publicKey(): PublicKey;
}

export abstract class PublicKey extends Key {}
