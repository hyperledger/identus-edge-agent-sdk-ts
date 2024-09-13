import { describe, it, expect, test } from 'vitest';
import { Curve, KeyTypes, PrivateKey } from "../../../src/domain";
import { Ed25519PrivateKey } from "../../../src/apollo/utils/Ed25519PrivateKey";
import { Ed25519PublicKey } from "../../../src/apollo/utils/Ed25519PublicKey";
import { Ed25519KeyPair } from "../../../src/apollo/utils/Ed25519KeyPair";
import { DerivationPath } from "../../../src/apollo/utils/derivation/DerivationPath";
import Apollo from "../../../src/apollo/Apollo";

import ApolloPKG from "@hyperledger/identus-apollo";
import { PrismDerivationPath } from "../../../src/domain/models/derivation/schemas/PrismDerivation";
import { DeprecatedDerivationPath } from "../../../src/domain/models/derivation/schemas/DeprecatedDerivation";

const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;
const EdHDKey = ApolloSDK.derivation.EdHDKey;

let apollo: Apollo = new Apollo();
describe("Keys", () => {
  describe("Ed25519", () => {
    describe("PrivateKey", () => {
      const seedHex = "a4dd58542e9959eccb56832a953c0e54b3321036b6165ec2f3c1ef533cd1d6da5fae8010c587535404534c192397483c765505f67e62b26026392f8a0cf8ba51";

      const raw = Buffer.from([234, 155, 38, 115, 124, 211, 171, 185, 149, 186, 77, 255, 240, 94, 209, 65, 63, 214, 168, 213, 146, 68, 68, 196, 167, 211, 183, 80, 14, 166, 239, 217]);
      const encoded = Buffer.from([54, 112, 115, 109, 99, 51, 122, 84, 113, 55, 109, 86, 117, 107, 51, 95, 56, 70, 55, 82, 81, 84, 95, 87, 113, 78, 87, 83, 82, 69, 84, 69, 112, 57, 79, 51, 85, 65, 54, 109, 55, 57, 107]);
      const privateKey = new Ed25519PrivateKey(encoded);
      const chainCodeHex = "7e9952eb18d135283fd633180e31b202a5ec87e3e37cc66c6836f18bdf9684b2";

      test("isDerivable", () => {
        expect(privateKey.isDerivable()).to.be.true;
      });

      test("isExportable - implemented", () => {
        expect(privateKey.isExportable()).to.be.true;
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
        const pubKey = privateKey.publicKey();
        expect(pubKey).to.be.an.instanceOf(Ed25519PublicKey);
        expect(pubKey.raw).to.eql(Buffer.from([207, 230, 188, 131, 200, 191, 223, 38, 163, 19, 244, 3, 35, 18, 5, 238, 195, 245, 155, 246, 139, 41, 51, 159, 202, 2, 46, 72, 150, 167, 68, 8]));
        expect(pubKey.getEncoded()).to.eql(Buffer.from([122, 45, 97, 56, 103, 56, 105, 95, 51, 121, 97, 106, 69, 95, 81, 68, 73, 120, 73, 70, 55, 115, 80, 49, 109, 95, 97, 76, 75, 84, 79, 102, 121, 103, 73, 117, 83, 74, 97, 110, 82, 65, 103]));
      });

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

      describe("derive", () => {
        test("keySpecification.chainCode missing - throws", () => {
          expect(() => {
            const derivationPath = DerivationPath.fromPath(0 as any, [DeprecatedDerivationPath, PrismDerivationPath]);
            privateKey.derive(derivationPath.toString());
          }).to.throw;
        });
        test("DerivationPath - m/0'/0'/0'", () => {
          const path = DerivationPath.fromPath(`m/0'/0'/1'`, [DeprecatedDerivationPath, PrismDerivationPath]);
          const createKeyArgs = {
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: seedHex,
          };
          const privateKey = apollo.createPrivateKey(createKeyArgs);
          const derived = privateKey.isDerivable() && privateKey.derive(path.toString());
          expect(derived).to.not.equal(false);

          const withDerivationPath = apollo.createPrivateKey({
            ...createKeyArgs,
            derivationPath: path.toString()
          });

          const raw1 = (derived as PrivateKey).getEncoded().toString();
          const raw2 = withDerivationPath.getEncoded().toString();
          const raw3 = privateKey.getEncoded().toString();
          expect(raw1).to.equal(raw2);
          expect(raw1).to.not.equal(raw3);
        });
        test("DerivationPath - m/1'/0'/1'", () => {
          const path = DerivationPath.fromPath(`m/1'/0'/1'`, [DeprecatedDerivationPath, PrismDerivationPath]);
          const createKeyArgs = {
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: seedHex,
          };
          const privateKey = apollo.createPrivateKey(createKeyArgs);
          const derived = privateKey.isDerivable() && privateKey.derive(path.toString());
          expect(derived).to.not.equal(false);

          const withDerivationPath = apollo.createPrivateKey({
            ...createKeyArgs,
            derivationPath: path.toString()
          });

          const raw1 = (derived as PrivateKey).getEncoded().toString();
          const raw2 = withDerivationPath.getEncoded().toString();
          const raw3 = privateKey.getEncoded().toString();
          expect(raw1).to.equal(raw2);
          expect(raw1).to.not.equal(raw3);
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
            var key = Ed25519PrivateKey.from.Buffer(secret);

            var uint = Uint8Array.from(secret);
            var int = Int8Array.from(secret);

            var keyu = new Ed25519PrivateKey(uint as any);
            var keyi = new Ed25519PrivateKey(int as any);

            expect(key.raw).to.eql(keyu.raw);
            expect(key.raw).to.eql(keyi.raw);

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

      test("isExportable - implemented", () => {
        expect(publicKey.isExportable()).to.be.true;
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
