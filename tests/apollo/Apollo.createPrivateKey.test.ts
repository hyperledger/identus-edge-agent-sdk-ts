import { describe, it, assert, expect, test, beforeEach, afterEach } from 'vitest';


import Apollo from "../../src/apollo/Apollo";
import { ApolloError, Curve, KeyProperties, KeyTypes } from "../../src/domain/models";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { DerivationPath } from "../../src/apollo/utils/derivation/DerivationPath";
import * as Fixtures from "../fixtures";
import { DeprecatedDerivationPath } from "../../src/domain/models/derivation/schemas/DeprecatedDerivation";
import { PrismDerivationPath } from "../../src/domain/models/derivation/schemas/PrismDerivation";

describe("Apollo", () => {
  let apollo: Apollo;

  beforeEach(() => {
    apollo = new Apollo();
  });

  describe("createPrivateKey", () => {
    const seedHex = "947877896c61a5c64f266adbebbc69a2a01f1a2cfbf72c08a11c693d0429ccded34bdc0c28b5be910a5095b97e7bc6e3e209527ce8e75f9964d25cd6f6ad63e0";

    describe("Secp256k1", () => {
      it("default - creates a new key", () => {
        const result = apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: seedHex,
        });

        expect(result).to.be.an.instanceOf(Secp256k1PrivateKey);
        expect(result.raw).to.eql(Uint8Array.from([232, 19, 52, 112, 248, 184, 7, 231, 180, 5, 168, 209, 33, 77, 26, 108, 130, 201, 137, 168, 15, 197, 29, 152, 88, 235, 87, 76, 73, 255, 159, 229]));
        expect(result.type).to.eq(KeyTypes.EC);
        expect(result.curve).to.eq(Curve.SECP256K1);

        expect(result.getProperty(KeyProperties.curve)).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.chainCode)).to.eq("7e9952eb18d135283fd633180e31b202a5ec87e3e37cc66c6836f18bdf9684b2");

        // no derivationPath provided, defaults to `m/29'/29'/0'/4'/0'` hexed
        expect(result.getProperty(KeyProperties.derivationPath)).to.eq("6d2f3239272f3239272f30272f34272f3027");

        // no index provided, defaults to 0
        expect(result.getProperty(KeyProperties.index)).to.eq("0");
      });

      it("KeyProperties.type - missing - throws", () => {
        const sut = () => apollo.createPrivateKey({
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: seedHex,
        });

        expect(sut).to.throw(ApolloError.InvalidKeyType);
      });

      it("KeyProperties.curve - missing - throws", () => {
        const sut = () => apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.seed]: seedHex,
        });

        expect(sut).to.throw(ApolloError.InvalidKeyCurve);
      });

      it("KeyProperties.seed - missing - throws", () => {
        const sut = () => apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
        });

        // ?? improve to more specific ApolloError similar to InvalidKeyType and InvalidKeyCurve
        expect(sut).to.throw(ApolloError.MissingKeyParameters);
      });

      it("KeyProperties.seed - invalid (non hex) - throws", () => {
        const sut = () => apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: "notAHexSeed",
        });

        // ?? improve to specific ApolloError (currently IllegalArgumentException)
        expect(sut).to.throw();
      });


      it("KeyProperties.derivationPath - invalid - throws", () => {
        const sut = () => apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: seedHex,
          [KeyProperties.derivationPath]: "invalid"
        });

        // ?? improve code to throw specific ApolloError (currently standard Error with message)
        expect(sut).to.throw();
      });

      Fixtures.Keys.Derivations.forEach(fixture => {
        test('key.derive is equal to apollo.createPrivateKey with derivationPath', function () {
          const master = apollo.createPrivateKey({
            [KeyProperties.type]: KeyTypes.EC,
            [KeyProperties.curve]: Curve.SECP256K1,
            [KeyProperties.seed]: fixture.seed,
          });

          const derivationPath = DerivationPath.fromPath(fixture.path.toString(), [DeprecatedDerivationPath, PrismDerivationPath])
          const child = master.isDerivable()
            ? master.derive(derivationPath.toString())
            : null;

          const derived = apollo.createPrivateKey({
            [KeyProperties.type]: KeyTypes.EC,
            [KeyProperties.curve]: Curve.SECP256K1,
            [KeyProperties.seed]: fixture.seed,
            [KeyProperties.derivationPath]: fixture.path
          });

          assert.equal(master.to.String("hex"), fixture.raw);
          assert.equal(child?.to.String("hex"), fixture.derived);
          assert.equal(derived.to.String("hex"), fixture.derived);
        });
      });

      it("KeyProperties.derivationPath - `m/0'/0'/0'` - returns key", () => {
        const result = apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: seedHex,
          [KeyProperties.derivationPath]: `m/0'/0'/0'`
        });

        expect(result).to.be.an.instanceOf(Secp256k1PrivateKey);
        expect(result.raw).to.eql(Uint8Array.from([48, 82, 38, 112, 243, 185, 72, 236, 243, 178, 189, 199, 153, 90, 179, 73, 176, 178, 227, 149, 217, 24, 191, 123, 45, 65, 144, 242, 89, 29, 253, 162]));
        expect(result.type).to.eq(KeyTypes.EC);
        expect(result.curve).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.curve)).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.chainCode)).to.eq("99f91ece40d2b5ff6896e96fd1e626dd17bc7f21d09538795021318009a1013c");
        expect(result.getProperty(KeyProperties.derivationPath)).to.eq("6d2f30272f30272f3027");
        expect(result.getProperty(KeyProperties.index)).to.eq("0");
      });

      it("KeyProperties.derivationPath - `m/1'/0'/0'` - returns key", () => {
        const result = apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: seedHex,
          [KeyProperties.derivationPath]: `m/1'/0'/0'`
        });

        expect(result).to.be.an.instanceOf(Secp256k1PrivateKey);
        expect(result.raw).to.eql(Uint8Array.from([76, 199, 11, 14, 245, 150, 196, 75, 166, 18, 237, 102, 248, 151, 5, 102, 136, 236, 82, 7, 203, 175, 156, 107, 13, 197, 175, 90, 127, 155, 202, 55]));
        expect(result.type).to.eq(KeyTypes.EC);
        expect(result.curve).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.curve)).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.chainCode)).to.eq("fee48c5a862316d1ea59b77258850f64de2a316796db043a4ebca1616c1c0d24");
        expect(result.getProperty(KeyProperties.derivationPath)).to.eq("6d2f31272f30272f3027");
        expect(result.getProperty(KeyProperties.index)).to.eq("0");
      });

      it("KeyProperties.derivationPath - `m/2'/0'/0'` - returns key", () => {
        const derivationPath = DerivationPath.fromPath(`m/2'/0'/0'`, [DeprecatedDerivationPath, PrismDerivationPath]);

        const result = apollo.createPrivateKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.seed]: seedHex,
          [KeyProperties.derivationPath]: derivationPath.toString()
        });

        expect(result).to.be.an.instanceOf(Secp256k1PrivateKey);
        expect(result.raw).to.eql(Uint8Array.from([190, 150, 87, 185, 32, 22, 148, 107, 164, 112, 97, 31, 218, 74, 115, 41, 249, 24, 178, 59, 13, 116, 112, 115, 233, 84, 190, 204, 176, 11, 151, 64]));
        expect(result.type).to.eq(KeyTypes.EC);
        expect(result.curve).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.curve)).to.eq(Curve.SECP256K1);
        expect(result.getProperty(KeyProperties.chainCode)).to.eq("6bfbb6d7bee48110dd0dd1437caa9e88dba86e4bc28585e8e8ab052c96414a48");
        expect(result.getProperty(KeyProperties.derivationPath)).to.eq("6d2f32272f30272f3027");
        expect(result.getProperty(KeyProperties.index)).to.eq(`${derivationPath.index}`);
      });

      // ? what behaviour do we expect in these cases
      // ? should index even be considered > remove from KeyProperties parameter
      // derivationPath and index
      // index and no derivationPath

      // TODO keyData tests
    });


    // ed25519 private key returned
    // with keyData
    // without keyData
  });
});
