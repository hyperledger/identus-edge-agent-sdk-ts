import { putUVarInt, putVarInt, uVarInt } from "./VarInt";

export enum Codec {
  x25519 = 0xec,
  ed25519 = 0xed,
}

export enum KeyType {
  agreement,
  authenticate,
}

function getCodecUi8Array(code: number): Codec {
  const encodedArray = putVarInt(code);

  const encodedX25519 = putVarInt(Codec.x25519);
  const encodedED25519 = putVarInt(Codec.ed25519);

  if (
    encodedArray.length === encodedX25519.length &&
    encodedArray.every((item, index) => item === encodedX25519[index])
  ) {
    return Codec.x25519;
  }

  if (
    encodedArray.length === encodedED25519.length &&
    encodedArray.every((item, index) => item === encodedED25519[index])
  ) {
    return Codec.ed25519;
  }

  throw new Error("Wrong Codec");
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
