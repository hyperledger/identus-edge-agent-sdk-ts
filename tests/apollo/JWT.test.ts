import { expect } from "chai";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { X25519PrivateKey } from "../../src/apollo/utils/X25519PrivateKey";
import { DID } from "../../src/domain";
import { JWT } from "../../src/apollo/utils/jwt/JWT";


describe("Apollo - JWT", () => {
  describe("sign", () => {
    [
      Ed25519PrivateKey,
      X25519PrivateKey,
      Secp256k1PrivateKey
    ].forEach(keyClass => {
      test(`${keyClass.name} - can sign with raw key (Uint8Array)`, async function () {
        const prismDid = DID.fromString("did:prism:dadsa:1231321dhsauda23847");
        const privateKey = keyClass.from.Hex("5ee38f66d07fc5a7f3968b33564bbd3b00eaddd481365838a9d6d3ad2fb82f41");

        const sut = new JWT({} as any);

        const result = await sut.sign(prismDid, privateKey.raw, { testing: 123 });
        expect(result).to.be.a.string;
      });

      test(`${keyClass.name} - can sign with PrivateKey`, async function () {
        const prismDid = DID.fromString("did:prism:dadsa:1231321dhsauda23847");
        const privateKey = keyClass.from.Hex("5ee38f66d07fc5a7f3968b33564bbd3b00eaddd481365838a9d6d3ad2fb82f41");

        const sut = new JWT({} as any);

        const result = await sut.sign(prismDid, privateKey, { testing: 123 });
        expect(result).to.be.a.string;
      });
    });
  });
});