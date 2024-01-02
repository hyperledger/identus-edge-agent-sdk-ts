import { expect } from "chai";
import { BN } from "bn.js";
import { Curve, KeyProperties, KeyTypes } from "../../../src/domain";
import { Secp256k1PrivateKey } from "../../../src/apollo/utils/Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "../../../src/apollo/utils/Secp256k1PublicKey";
import { Secp256k1KeyPair } from "../../../src/apollo/utils/Secp256k1KeyPair";
import { ECPublicKeyInitialization } from "../../../src/domain/models/errors/Apollo";
import { DerivationPath } from "../../../src/apollo/utils/derivation/DerivationPath";

describe("Keys", () => {
  describe("Secp256k1", () => {
    describe("PrivateKey", () => {
      test("invalid key size - throws", () => {
        const raw = new Uint8Array([36]);
        expect(() => new Secp256k1PrivateKey(raw)).throws(ECPublicKeyInitialization);
      });

      // const raw = new Uint8Array([224, 246, 25, 33, 67, 211, 16, 98, 135, 227, 73, 111, 174, 27, 187, 111, 175, 145, 13, 188, 225, 22, 46, 168, 201, 237, 194, 40, 47, 227, 118, 36]);
      const raw = Buffer.from([55, 242, 69, 130, 246, 26, 69, 236, 145, 95, 6, 172, 179, 62, 69, 30, 13, 247, 3, 130, 58, 117, 204, 243, 117, 122, 227, 116, 113, 164, 178, 104]);
      const privateKey = new Secp256k1PrivateKey(raw);

      // implementations
      test("isDerivable - implemented", () => {
        expect(privateKey.isDerivable()).to.be.true;
      });

      test("isExportable - not implemented", () => {
        expect(privateKey.isExportable()).to.be.false;
      });

      test("isSignable - implemented", () => {
        expect(privateKey.isSignable()).to.be.true;
      });

      test("canVerify - not implemented", () => {
        expect(privateKey.canVerify()).to.be.false;
      });

      // members
      test("curve - returns Curve.SECP256K1 enum", () => {
        expect(privateKey.curve).to.equal(Curve.SECP256K1);
      });

      test("getEncoded - returns Uint8Array equal to constructor value", () => {
        const a = privateKey.getEncoded();

        expect(a).to.eql(raw);
      });

      test("publicKey - returns a Secp256k1PublicKey instance", () => {
        expect(privateKey.publicKey()).to.be.an.instanceOf(Secp256k1PublicKey);
      });

      test("value - returns constructor value", () => {
        expect(privateKey.value).to.equal(raw);
      });

      test("raw - returns constructor value", () => {
        expect(privateKey.raw).to.equal(raw);
      });

      test("size - returns length of constructor value", () => {
        expect(privateKey.size).to.equal(raw.length);
      });

      test("type - returns KeyTypes.EC enum", () => {
        expect(privateKey.type).to.equal(KeyTypes.EC);
      });

      test("sign - returns a Buffer", () => {
        const result = privateKey.sign(Buffer.from("test string"));

        expect(result).to.be.an.instanceOf(Buffer);
      });

      describe("index", () => {
        test("instantiated through constructor - index not set", () => {
          expect(privateKey.index).to.be.undefined;
        });

        test("instantiated through `derive` - index set", () => {
          const path = DerivationPath.fromPath(`m/0'/0'/0'`);
          const tmp = new Secp256k1PrivateKey(privateKey.raw);
          const seed = "223fa7bd4bde29fb0eada057770d3f70c32421bca9846fcaec58d6a36bc21a77ef49ac1c3b45163b2450e5679b55ef8a11006607ae78830bce425c02778b5210";
          tmp.keySpecification.set(KeyProperties.seed, seed);
          const derived = tmp.derive(path);

          expect(derived.index).to.equal(0);
        });
      });

      describe("isCurve", () => {
        test("Curve.SECP256K1 enum - should return true", () => {
          expect(privateKey.isCurve(Curve.SECP256K1)).to.be.true;
        });

        test("Secp256k1 string - should return true", () => {
          expect(privateKey.isCurve("Secp256k1")).to.be.true;
        });

        test("Curve.Ed25519 enum - should return false", () => {
          expect(privateKey.isCurve(Curve.ED25519)).to.be.false;
        });

        test("Curve.X25519 enum - should return false", () => {
          expect(privateKey.isCurve(Curve.X25519)).to.be.false;
        });

        test("arbitrary string - should return false", () => {
          expect(privateKey.isCurve("qwerty")).to.be.false;
        });
      });

      describe("to", () => {
        test("Buffer", () => {
          expect(privateKey.to.Buffer()).to.be.an.instanceOf(Buffer);
        });

        test("Hex", () => {
          expect(privateKey.to.Hex()).to.be.a.string;
        });
      });

      // validation?
      describe("from", () => {
        test("Buffer", () => {
          const result = Secp256k1PrivateKey.from.Buffer(Buffer.from([224, 246, 25, 33, 67, 211, 16, 98, 135, 227, 73, 111, 174, 27, 187, 111, 175, 145, 13, 188, 225, 22, 46, 168, 201, 237, 194, 40, 47, 227, 118, 36]));

          expect(result).to.be.instanceOf(Secp256k1PrivateKey);
        });

        test("Hex", () => {
          const result = Secp256k1PrivateKey.from.Hex("e0f6192143d3106287e3496fae1bbb6faf910dbce1162ea8c9edc2282fe37624");
          expect(result).to.be.instanceOf(Secp256k1PrivateKey);
        });

        test("String", () => {
          const result = Secp256k1PrivateKey.from.String("01011101011101011101011101011100");
          expect(result).to.be.instanceOf(Secp256k1PrivateKey);
        });
      });
    });


    describe("PublicKey", () => {
      test("invalid raw length - throws", () => {
        const raw = new Uint8Array([4]);
        expect(() => new Secp256k1PublicKey(raw)).throws(ECPublicKeyInitialization);
      });

      const raw = new Uint8Array([4, 49, 167, 173, 103, 15, 188, 85, 154, 102, 229, 108, 189, 122, 78, 227, 245, 99, 79, 55, 81, 220, 201, 4, 16, 89, 24, 121, 177, 48, 51, 1, 184, 41, 196, 54, 243, 176, 147, 60, 249, 136, 0, 13, 183, 1, 111, 60, 2, 85, 245, 209, 131, 187, 123, 221, 142, 111, 153, 145, 21, 106, 13, 19, 244]);
      const publicKey = new Secp256k1PublicKey(raw);

      // implementations
      test("isDerivable - not implemented", () => {
        expect(publicKey.isDerivable()).to.be.false;
      });

      test("isExportable - not implemented", () => {
        expect(publicKey.isExportable()).to.be.false;
      });

      test("isSignable - not implemented", () => {
        expect(publicKey.isSignable()).to.be.false;
      });

      test("canVerify - implemented", () => {
        expect(publicKey.canVerify()).to.be.true;
      });

      // members
      test("curve - returns Curve.SECP256k1 enum", () => {
        expect(publicKey.curve).to.equal(Curve.SECP256K1);
      });

      test("getEncoded - returns Uint8Array equal to constructor value", () => {
        expect(publicKey.getEncoded()).to.eql(raw);
      });

      test("value - returns constructor value", () => {
        expect(publicKey.value).to.equal(raw);
      });

      describe("isCurve", () => {
        test("Curve.SECP256K1 enum - should return true", () => {
          expect(publicKey.isCurve(Curve.SECP256K1)).to.be.true;
        });

        test("Curve.SECP256K1 string - should return true", () => {
          expect(publicKey.isCurve("Secp256k1")).to.be.true;
        });

        test("Curve.ED25519 enum - should return false", () => {
          expect(publicKey.isCurve(Curve.ED25519)).to.be.false;
        });

        test("Curve.X25519 enum - should return false", () => {
          expect(publicKey.isCurve(Curve.X25519)).to.be.false;
        });

        test("arbitrary string - should return false", () => {
          expect(publicKey.isCurve("qwerty")).to.be.false;
        });
      });

      describe("verify", () => {
        const keyPair1 = Secp256k1KeyPair.generateKeyPair();
        const message1 = Buffer.from("0001");
        const signature1 = keyPair1.privateKey.sign(message1);
        const keyPair2 = Secp256k1KeyPair.generateKeyPair();
        const message2 = Buffer.from("00022");
        const signature2 = keyPair2.privateKey.sign(message2);

        test("matching PublicKey, Message and Signature - should pass", () => {
          expect(keyPair1.publicKey.verify(message1, signature1)).to.be.true;
        });

        test("matching PublicKey and Message - unrelated Signature - should fail", () => {
          expect(keyPair1.publicKey.verify(message1, signature2)).to.be.false;
        });

        test("matching PublicKey and Signature - unrelated Message - should fail", () => {
          expect(keyPair1.publicKey.verify(message2, signature1)).to.be.false;
        });

        test("matching Message and Signature - unrelated PublicKey - should fail", () => {
          expect(keyPair2.publicKey.verify(message1, signature1)).to.be.false;
        });
      });
    });

    describe("KeyPair", () => {
      test("generateKeyPair", () => {
        const keyPair = Secp256k1KeyPair.generateKeyPair();

        expect(keyPair.curve).to.equal(Curve.SECP256K1);
        expect(keyPair.privateKey).to.be.an.instanceOf(Secp256k1PrivateKey);
        expect(keyPair.publicKey).to.be.an.instanceOf(Secp256k1PublicKey);
      });

      describe("Integration", () => {
        test("Generate - sign - verify", () => {
          const keyPair = Secp256k1KeyPair.generateKeyPair();
          const message = Buffer.from("qwerty");
          const signature = keyPair.privateKey.sign(message);
          const verified = keyPair.publicKey.verify(message, signature);

          expect(verified).to.be.true;
        });
      });
    });
  });
});
