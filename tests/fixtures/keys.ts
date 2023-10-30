import { Ed25519KeyPair } from "../../src/apollo/utils/Ed25519KeyPair";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { Secp256k1KeyPair } from "../../src/apollo/utils/Secp256k1KeyPair";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { X25519KeyPair } from "../../src/apollo/utils/X25519KeyPair";
import { X25519PrivateKey } from "../../src/apollo/utils/X25519PrivateKey";

export const expectedDIDSecp256K1 =
  "did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw";

const secpPrivateKey = new Secp256k1PrivateKey(
  new Uint8Array([
    45, 182, 188, 189, 107, 229, 136, 180, 199, 177, 110, 84, 98, 140, 121, 84,
    107, 105, 179, 139, 14, 174, 177, 63, 173, 141, 7, 118, 161, 192, 192, 221,
  ])
);
export const secp256K1 = new Secp256k1KeyPair(
  secpPrivateKey,
  secpPrivateKey.publicKey()
);

const ed25519PrivateKey = new Ed25519PrivateKey(
  Buffer.from("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs", "base64url")
);
export const ed25519 = new Ed25519KeyPair(
  ed25519PrivateKey,
  ed25519PrivateKey.publicKey()
);

const x25519PrivateKey = new X25519PrivateKey(
  Buffer.from("eHbEtI71XIBIsuQK7XdjZ_ZPnLZb3y4paWoqSoS7BnI", "base64url")
);
export const x25519 = new X25519KeyPair(
  x25519PrivateKey,
  x25519PrivateKey.publicKey()
);
