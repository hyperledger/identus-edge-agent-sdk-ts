import { expect } from "chai";
import { Ed25519PrivateKey } from "../../../src/apollo/utils/Ed25519PrivateKey";
import { Curve, KeyTypes } from "../../../src/domain";
import { Ed25519PublicKey } from "../../../src/apollo/utils/Ed25519PublicKey";
import { Ed25519KeyPair } from "../../../src/apollo/utils/Ed25519KeyPair";

describe("Keys", () => {
  describe("Ed25519", () => {
    describe("PrivateKey", () => {
      const raw = Buffer.from([84, 78, 220, 96, 252, 203, 132, 165, 234, 236, 224, 213, 105, 113, 109, 207, 193, 178, 122, 122, 221, 34, 147, 123, 189, 241, 143, 235, 27, 127, 70, 5]);
      const encoded = Buffer.from([86, 69, 55, 99, 89, 80, 122, 76, 104, 75, 88, 113, 55, 79, 68, 86, 97, 88, 70, 116, 122, 56, 71, 121, 101, 110, 114, 100, 73, 112, 78, 55, 118, 102, 71, 80, 54, 120, 116, 95, 82, 103, 85]);
      const privateKey = new Ed25519PrivateKey(encoded);

      // implementations
      test("isDerivable - not implemented", () => {
        expect(privateKey.isDerivable()).to.be.false;
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
      test("curve - returns Curve.ED25519 enum", () => {
        expect(privateKey.curve).to.equal(Curve.ED25519);
      });

      test("getEncoded - returns Uint8Array equal to base64 encoded buffer value", () => {
        expect(privateKey.getEncoded()).to.eql(encoded);
      });

      test("publicKey - returns Ed25519PublicKey instance", () => {
        expect(privateKey.publicKey()).to.be.an.instanceOf(Ed25519PublicKey);
      });

      // TODO - Bug - types are wrong - ignored non-null assertion
      test("index", () => {
        expect(privateKey.index).to.be.undefined;
      });

      test("value - returns Uint8Array value", () => {
        expect(privateKey.value).to.eql(raw);
      });

      test("raw - returns Uint8Array value", () => {
        expect(privateKey.raw).to.eql(raw);
      });

      test("size - returns correct raw length of 32", () => {
        expect(privateKey.size).to.equal(32);
        expect(privateKey.size).to.equal(raw.length);
      });

      test("type - returns KeyTypes.EC enum", () => {
        expect(privateKey.type).to.equal(KeyTypes.EC);
      });

      test("sign", () => {
        const result = privateKey.sign(Buffer.from("test string"));
        expect(result).to.be.an.instanceOf(Buffer);
      });

      describe("isCurve", () => {
        test("Curve.Ed25519 enum - should return true", () => {
          expect(privateKey.isCurve(Curve.ED25519)).to.be.true;
        });

        test("Curve.Ed25519 string - should return true", () => {
          expect(privateKey.isCurve("Ed25519")).to.be.true;
        });

        test("Curve.SECP256K1 string - should return false", () => {
          expect(privateKey.isCurve(Curve.SECP256K1)).to.be.false;
        });

        test("Curve.X25519 string - should return false", () => {
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
          const result = Ed25519PrivateKey.from.Buffer(privateKey.to.Buffer());

          expect(result).to.be.instanceOf(Ed25519PrivateKey);
          expect(result.canVerify()).to.eql(privateKey.canVerify());
          expect(result.curve).to.eql(privateKey.curve);
          expect(result.getEncoded()).to.eql(privateKey.getEncoded());
          expect(result.index).to.eql(privateKey.index);
          expect(result.keySpecification).to.eql(privateKey.keySpecification);
          expect(result.raw).to.eql(privateKey.raw);
        });

        test("Hex", () => {
          const result = Ed25519PrivateKey.from.Hex(privateKey.to.Hex());

          expect(result).to.be.instanceOf(Ed25519PrivateKey);
          expect(result).to.be.instanceOf(Ed25519PrivateKey);
          expect(result.canVerify()).to.eql(privateKey.canVerify());
          expect(result.curve).to.eql(privateKey.curve);
          expect(result.getEncoded()).to.eql(privateKey.getEncoded());
          expect(result.index).to.eql(privateKey.index);
          expect(result.keySpecification).to.eql(privateKey.keySpecification);
          expect(result.raw).to.eql(privateKey.raw);
        });

        test("String", () => {
          const result = Ed25519PrivateKey.from.String("01011010011101010100011000100010");
          expect(result).to.be.instanceOf(Ed25519PrivateKey);
        });
      });

      describe("Buffer > raw value conversion", () => {
        // ints [0, 01, 127, 128, 255] as hex
        const hexes = [
          '0000000000000000000000000000000000000000000000000000000000000000',
          '0000000000000000000000000000000000000000000000000000000000000001',
          '000000000000000000000000000000000000000000000000000000000000007F',
          '0000000000000000000000000000000000000000000000000000000000000080',
          '00000000000000000000000000000000000000000000000000000000000000FF',
        ];

        const testFactory = (hex: string) => {
          test(`${hex} `, () => {
            var secret = Buffer.from(hex, "hex");
            var key = Ed25519PrivateKey.from.Buffer(secret);

            var uint = Uint8Array.from(secret);
            var int = Int8Array.from(secret);

            var keyu = new Ed25519PrivateKey(uint as any);
            var keyi = new Ed25519PrivateKey(int as any);

            var msg = Buffer.from([0xB, 0xE, 0xE, 0xF]);
            var sig = key.sign(msg);
            var verified = key.publicKey().verify(msg, sig);
            var verifiedu = keyu.publicKey().verify(msg, sig);
            var verifiedi = keyi.publicKey().verify(msg, sig);

            expect(verified).to.be.true;
            expect(verifiedu).to.be.true;
            expect(verifiedi).to.be.true;
          });
        };

        hexes.forEach(testFactory);
      });
    });


    describe("PublicKey", () => {
      const raw = Buffer.from([224, 219, 208, 109, 8, 7, 168, 255, 112, 66, 92, 173, 169, 180, 96, 30, 200, 16, 160, 231, 220, 80, 79, 54, 53, 12, 130, 110, 184, 198, 96, 198]);
      const encoded = Buffer.from([52, 78, 118, 81, 98, 81, 103, 72, 113, 80, 57, 119, 81, 108, 121, 116, 113, 98, 82, 103, 72, 115, 103, 81, 111, 79, 102, 99, 85, 69, 56, 50, 78, 81, 121, 67, 98, 114, 106, 71, 89, 77, 89]);
      const publicKey = new Ed25519PublicKey(encoded);

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
      test("curve - returns Curve.ED25519 enum", () => {
        expect(publicKey.curve).to.equal(Curve.ED25519);
      });

      test("getEncoded - returns Uint8Array equal to base64 encoded buffer value", () => {
        expect(publicKey.getEncoded()).to.eql(encoded);
      });

      test("raw - returns Uint8Array value", () => {
        expect(publicKey.raw).to.eql(raw);
      });

      test("value - returns Uint8Array value", () => {
        expect(publicKey.value).to.eql(raw);
      });

      describe("isCurve", () => {
        test("Curve.Ed25519 enum - should return true", () => {
          expect(publicKey.isCurve(Curve.ED25519)).to.be.true;
        });

        test("Curve.Ed25519 string - should return true", () => {
          expect(publicKey.isCurve("Ed25519")).to.be.true;
        });

        test("Curve.SECP256K1 string - should return false", () => {
          expect(publicKey.isCurve(Curve.SECP256K1)).to.be.false;
        });

        test("Curve.X25519 string - should return false", () => {
          expect(publicKey.isCurve(Curve.X25519)).to.be.false;
        });

        test("arbitrary string - should return false", () => {
          expect(publicKey.isCurve("qwerty")).to.be.false;
        });
      });

      describe("verify", () => {
        const keyPair1 = Ed25519KeyPair.generateKeyPair();
        const message1 = Buffer.from("0001");
        const signature1 = keyPair1.privateKey.sign(message1);
        const keyPair2 = Ed25519KeyPair.generateKeyPair();
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
        const keyPair = Ed25519KeyPair.generateKeyPair();

        expect(keyPair.curve).to.equal(Curve.ED25519);
        expect(keyPair.privateKey).to.be.an.instanceOf(Ed25519PrivateKey);
        expect(keyPair.publicKey).to.be.an.instanceOf(Ed25519PublicKey);
      });

      describe("Integration", () => {
        test("Generate - sign - verify", () => {
          const keyPair = Ed25519KeyPair.generateKeyPair();
          const message = Buffer.from("qwerty");
          const signature = keyPair.privateKey.sign(message);
          const verified = keyPair.publicKey.verify(message, signature);

          expect(verified).to.be.true;
        });
      });
    });
  });
});
