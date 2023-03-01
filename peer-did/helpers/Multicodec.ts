import { putUVarInt, uVarInt } from "./VarInt";

export enum Codec {
  x25519 = 0xec,
  ed25519 = 0xed,
}

export enum KeyType {
  agreement,
  authenticate,
}

export class MultiCodec {
  static KeyType = KeyType;

  constructor(public value: Uint8Array, keyType?: KeyType) {
    if (typeof keyType !== "undefined") {
      const codec =
        keyType === KeyType.agreement ? Codec.x25519 : Codec.ed25519;

      const buffer = putUVarInt(codec, Array.from(this.value));

      this.value = Uint8Array.from(buffer);
    } else {
      this.value = value;
    }
  }

  decode(defaultCodec?: Codec): [Codec, Uint8Array] {
    const [code, bytes] = uVarInt(Array.from(this.value));
    const bufferWithoutBytes = !defaultCodec
      ? this.value
      : this.value.slice(bytes);
    return [defaultCodec || code, bufferWithoutBytes];
  }
}
