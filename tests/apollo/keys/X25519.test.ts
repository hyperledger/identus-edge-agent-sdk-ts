import { describe, it, expect, test } from 'vitest';

import { Curve, KeyTypes } from "../../../src/domain";
import { X25519PrivateKey } from "../../../src/apollo/utils/X25519PrivateKey";
import { X25519PublicKey } from "../../../src/apollo/utils/X25519PublicKey";
import { X25519KeyPair } from "../../../src/apollo/utils/X25519KeyPair";

describe("Keys", () => {
  describe("X25519", () => {
    describe("PrivateKey", () => {
      const raw = Buffer.from([51, 115, 246, 68, 98, 108, 130, 79, 66, 173, 201, 51, 112, 98, 163, 196, 188, 34, 100, 148, 28, 98, 236, 251, 234, 41, 3, 175, 80, 1, 64, 152]);
      const encoded = Buffer.from([77, 51, 80, 50, 82, 71, 74, 115, 103, 107, 57, 67, 114, 99, 107, 122, 99, 71, 75, 106, 120, 76, 119, 105, 90, 74, 81, 99, 89, 117, 122, 55, 54, 105, 107, 68, 114, 49, 65, 66, 81, 74, 103]);
      const privateKey = new X25519PrivateKey(encoded);

      // implementations
      test("isDerivable - not implemented", () => {
        let p = privateKey.publicKey();
        expect(privateKey.isDerivable()).to.be.false;
      });

      test("isExportable - implemented", () => {
        expect(privateKey.isExportable()).to.be.true;
      });

      test("isSignable - not implemented", () => {
        expect(privateKey.isSignable()).to.be.false;
      });

      test("canVerify - not implemented", () => {
        expect(privateKey.canVerify()).to.be.false;
      });

      // members
      test("curve - returns Curve.X25519 enum", () => {
        expect(privateKey.curve).to.equal(Curve.X25519);
      });

      test("getEncoded - returns Uint8Array equal to constructor value", () => {
        expect(privateKey.getEncoded()).to.eql(encoded);
      });

      test("publicKey - returns X25519PublicKey instance", () => {
        const pubKey = privateKey.publicKey();

        expect(pubKey).to.be.an.instanceOf(X25519PublicKey);
        expect(pubKey.raw).to.eql(Buffer.from([212, 97, 242, 116, 254, 39, 85, 254, 32, 125, 72, 58, 203, 231, 151, 68, 217, 36, 15, 137, 108, 58, 150, 193, 48, 67, 203, 34, 115, 180, 148, 27]));
        expect(pubKey.getEncoded()).to.eql(Buffer.from([49, 71, 72, 121, 100, 80, 52, 110, 86, 102, 52, 103, 102, 85, 103, 54, 121, 45, 101, 88, 82, 78, 107, 107, 68, 52, 108, 115, 79, 112, 98, 66, 77, 69, 80, 76, 73, 110, 79, 48, 108, 66, 115]));
      });

      test("index", () => {
        expect(privateKey.index).to.be.undefined;
      });

      test("value - returns constructor value", () => {
        expect(privateKey.value).to.eql(raw);
      });

      test("raw - returns constructor value", () => {
        expect(privateKey.raw).to.eql(raw);
      });

      test("size - returns length of constructor value", () => {
        expect(privateKey.size).to.equal(raw.length);
      });

      test("type - returns KeyTypes.EC enum", () => {
        expect(privateKey.type).to.equal(KeyTypes.EC);
      });

      describe("isCurve", () => {
        test("Curve.X25519 enum - should return true", () => {
          expect(privateKey.isCurve(Curve.X25519)).to.be.true;
        });

        test("Curve.X25519 string - should return true", () => {
          expect(privateKey.isCurve("X25519")).to.be.true;
        });

        test("Curve.SECP256K1 string - should return false", () => {
          expect(privateKey.isCurve(Curve.SECP256K1)).to.be.false;
        });

        test("Curve.Ed25519 string - should return false", () => {
          expect(privateKey.isCurve(Curve.ED25519)).to.be.false;
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
          const result = X25519PrivateKey.from.Buffer(privateKey.to.Buffer());

          expect(result).to.be.instanceOf(X25519PrivateKey);
          expect(result).to.be.instanceOf(X25519PrivateKey);
          expect(result.canVerify()).to.eql(privateKey.canVerify());
          expect(result.curve).to.eql(privateKey.curve);
          expect(result.getEncoded()).to.eql(privateKey.getEncoded());
          expect(result.index).to.eql(privateKey.index);
          expect(result.keySpecification).to.eql(privateKey.keySpecification);
          expect(result.raw).to.eql(privateKey.raw);
        });

        test("Hex", () => {
          const result = X25519PrivateKey.from.Hex(privateKey.to.Hex());

          expect(result).to.be.instanceOf(X25519PrivateKey);
          expect(result).to.be.instanceOf(X25519PrivateKey);
          expect(result.canVerify()).to.eql(privateKey.canVerify());
          expect(result.curve).to.eql(privateKey.curve);
          expect(result.getEncoded()).to.eql(privateKey.getEncoded());
          expect(result.index).to.eql(privateKey.index);
          expect(result.keySpecification).to.eql(privateKey.keySpecification);
          expect(result.raw).to.eql(privateKey.raw);
        });

        test("String", () => {
          const result = X25519PrivateKey.from.String("11111010011101010100011000100010");
          expect(result).to.be.instanceOf(X25519PrivateKey);
        });
      });

      describe("Signed / Unsigned int arrays > raw value conversion", () => {
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
            var key = X25519PrivateKey.from.Buffer(secret);

            var uint = Uint8Array.from(secret);
            var int = Int8Array.from(secret);

            var keyu = new X25519PrivateKey(uint as any);
            var keyi = new X25519PrivateKey(int as any);

            expect(key.raw).to.eql(keyu.raw);
            expect(key.raw).to.eql(keyi.raw);
          });
        };

        hexes.forEach(testFactory);
      });
    });

    describe("PublicKey", () => {
      const raw = Buffer.from([212, 97, 242, 116, 254, 39, 85, 254, 32, 125, 72, 58, 203, 231, 151, 68, 217, 36, 15, 137, 108, 58, 150, 193, 48, 67, 203, 34, 115, 180, 148, 27]);
      const encoded = Buffer.from([49, 71, 72, 121, 100, 80, 52, 110, 86, 102, 52, 103, 102, 85, 103, 54, 121, 45, 101, 88, 82, 78, 107, 107, 68, 52, 108, 115, 79, 112, 98, 66, 77, 69, 80, 76, 73, 110, 79, 48, 108, 66, 115]);
      const publicKey = new X25519PublicKey(encoded);

      // implementations
      test("isDerivable - not implemented", () => {
        expect(publicKey.isDerivable()).to.be.false;
      });

      test("isExportable - implemented", () => {
        expect(publicKey.isExportable()).to.be.true;
      });

      test("isSignable - not implemented", () => {
        expect(publicKey.isSignable()).to.be.false;
      });

      test("canVerify - not implemented", () => {
        expect(publicKey.canVerify()).to.be.false;
      });

      // members
      test("curve - returns Curve.X25519 enum", () => {
        expect(publicKey.curve).to.equal(Curve.X25519);
      });

      test("getEncoded - returns Uint8Array equal to constructor value", () => {
        expect(publicKey.getEncoded()).to.eql(encoded);
      });

      test("value - returns constructor value", () => {
        expect(publicKey.value).to.eql(raw);
      });

      describe("isCurve", () => {
        test("Curve.X25519 enum - should return true", () => {
          expect(publicKey.isCurve(Curve.X25519)).to.be.true;
        });

        test("Curve.X25519 string - should return true", () => {
          expect(publicKey.isCurve("X25519")).to.be.true;
        });

        test("Curve.SECP256K1 enum - should return false", () => {
          expect(publicKey.isCurve(Curve.SECP256K1)).to.be.false;
        });

        test("Curve.ED25519 enum - should return false", () => {
          expect(publicKey.isCurve(Curve.ED25519)).to.be.false;
        });

        test("arbitrary string - should return false", () => {
          expect(publicKey.isCurve("qwerty")).to.be.false;
        });
      });
    });

    describe("KeyPair", () => {
      test("generateKeyPair", () => {
        const keyPair = X25519KeyPair.generateKeyPair();

        expect(keyPair.curve).to.equal(Curve.X25519);
        expect(keyPair.privateKey).to.be.an.instanceOf(X25519PrivateKey);
        expect(keyPair.publicKey).to.be.an.instanceOf(X25519PublicKey);
      });
    });
  });
});
