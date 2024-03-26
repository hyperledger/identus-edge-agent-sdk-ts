import { expect, assert } from "chai";

import Apollo from "../../src/apollo/Apollo";
import { Secp256k1KeyPair } from "../../src/apollo/utils/Secp256k1KeyPair";
import * as ECConfig from "../../src/config/ECConfig";

import { bip39Vectors } from "./derivation/BipVectors";
import { DerivationPath } from "../../src/apollo/utils/derivation/DerivationPath";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { X25519PrivateKey } from "../../src/apollo/utils/X25519PrivateKey";
import { Ed25519PublicKey } from "../../src/apollo/utils/Ed25519PublicKey";
import { X25519PublicKey } from "../../src/apollo/utils/X25519PublicKey";
import { Secp256k1PublicKey } from "../../src/apollo/utils/Secp256k1PublicKey";
import { MnemonicLengthException, MnemonicWordException } from "../../src/domain/models/errors/Mnemonic";
import {
  ApolloError,
  Curve,
  KeyTypes,
  PrivateKey,
  StorableKey,
  MnemonicWordList
} from "../../src/domain/models";
import * as Fixtures from "../fixtures";

describe("Apollo", () => {
  let apollo: Apollo;

  beforeEach(() => {
    apollo = new Apollo();
  });

  it("It should test random mnemonic generation length always matches 24", () => {
    for (let i = 1; i <= 10; i++) {
      expect(apollo.createRandomMnemonics().length).to.equal(24);
    }
  });

  it("Should generate random mnemonics", () => {
    const seenWords: string[] = new Array(24);
    for (let i = 1; i <= 300; i++) {
      seenWords.push(
        ...apollo
          .createRandomMnemonics()
          .filter((newWord) => !seenWords.includes(newWord))
      );
    }
    // with great probability we'll see at least 75% of words after 3600 draws from 2048 possible
    expect(2048 - seenWords.length).to.be.lessThan(512);
  });

  describe("createSeed", () => {
    const list = [
      "tool",
      "knock",
      "nerve",
      "skate",
      "detail",
      "early",
      "limit",
      "energy",
      "foam",
      "garage",
      "resource",
      "boring",
      "traffic",
      "violin",
      "cave",
      "place",
      "accuse",
      "can",
      "bring",
      "bring",
      "cargo",
      "clip",
      "stick",
      "dog",
    ];

    test("Passes with length 24 word list", () => {
      const result = apollo.createSeed(list as any, "");
      expect(result).not.to.be.undefined;
    });

    test("Passes with length 12 word list", () => {
      const mnemonics =
        "legal winner thank year wave sausage worth useful legal winner thank yellow".split(
          " "
        );
      const result = apollo.createSeed(mnemonics as any, "");
      expect(result).not.to.be.undefined;
    });

    for (let i = 0; i < 24; i++) {
      if (i === 12) continue;

      it(`Should fail when mnemonics is wrong length [${i}]`, () => {
        const mnemonics = list.slice(0, i);

        assert.throws(
          () => apollo.createSeed(mnemonics as any, ""),
          MnemonicLengthException
        );
      });
    }

    it("Should test failure when checksum is incorrect", () => {
      const mnemonicCode = Array(24).fill("abandon") as MnemonicWordList;
      assert.throws(
        () => {
          apollo.createSeed(mnemonicCode, "");
        },
        Error,
        "Invalid mnemonic word/s"
      );
    });

    it("Should compute the right binary seed", () => {
      const password = "TREZOR";
      const vectors = JSON.parse(bip39Vectors) as string[][];

      for (const v of vectors) {
        const [, mnemonicPhrase, binarySeedHex] = v;
        const mnemonicCode = mnemonicPhrase.split(" ") as MnemonicWordList;
        const binarySeed = apollo.createSeed(mnemonicCode, password);

        expect(binarySeedHex).to.equal(
          Buffer.from(binarySeed.value).toString("hex")
        );
      }
    });

    it("Should test failure when invalid word is used", () => {
      const mnemonicCode = [
        "hocus",
        "pocus",
        "mnemo",
        "codus",
        ...Array(20).fill("abandon"),
      ] as MnemonicWordList;
      assert.throws(() => {
        apollo.createSeed(mnemonicCode, "");
      }, MnemonicWordException);
    });
  });

  it("Should test secp256k1KeyPair generation", () => {
    const keyPair = Secp256k1KeyPair.generateKeyPair();
    expect(keyPair.privateKey.getEncoded().length).to.equal(
      ECConfig.PRIVATE_KEY_BYTE_SIZE
    );
    expect(
      Buffer.from(keyPair.privateKey.getEncoded()).toString("hex").length
    ).to.equal(ECConfig.PRIVATE_KEY_BYTE_SIZE * 2);

    expect(keyPair.publicKey.getEncoded().length).to.equal(
      ECConfig.PUBLIC_KEY_BYTE_SIZE
    );
    expect(
      Buffer.from(keyPair.publicKey.getEncoded()).toString("hex").length
    ).to.equal(ECConfig.PUBLIC_KEY_BYTE_SIZE * 2);
  });

  it("Should create a private key from encoded", () => {
    const keyPair = Secp256k1KeyPair.generateKeyPair();
    const encodedPrivateKey = keyPair.privateKey.getEncoded();
    const newFromBytes = new Secp256k1PrivateKey(encodedPrivateKey);
    expect(keyPair.privateKey.raw).to.deep.equal(newFromBytes.raw);
  });

  it("Should create and Sign and verify a message using Secp256k1 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;

    const privateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: Buffer.from(seed.value).toString("hex"),
    });

    const signature =
      privateKey.isSignable() && privateKey.sign(Buffer.from(text));

    expect(signature).to.not.be.equal(false);

    if (signature) {
      const publicKey = privateKey.publicKey();
      const verified =
        publicKey.canVerify() && publicKey.verify(text, Buffer.from(signature));
      expect(verified).to.be.equal(true);
    }
  });

  it("Should only verify signed message using the correct SECP256K1 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;

    const privateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: Buffer.from(seed.value).toString("hex"),
    });

    const wrongPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: Buffer.from(apollo.createRandomSeed().seed.value).toString("hex"),
    });

    const signature = privateKey.isSignable() && privateKey.sign(text);

    expect(signature).to.not.be.equal(false);

    if (signature) {
      const publicKey = wrongPrivateKey.publicKey();
      const verified =
        publicKey.canVerify() && publicKey.verify(text, signature);

      expect(verified).to.be.equal(false);
    }
  });

  it("Should create and Sign and verify a message using ED25519 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();

    const privateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
    });

    const signature = privateKey.isSignable() && privateKey.sign(text);
    if (signature) {
      const publicKey = privateKey.publicKey();
      const verified =
        publicKey.canVerify() && publicKey.verify(text, signature);

      expect(verified).to.be.equal(true);
    }
  });

  it("Should only verify signed message using the correct ED25519 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();

    const privateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
    });

    const wrongPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
    });

    const signature = privateKey.isSignable() && privateKey.sign(text);

    expect(signature).to.not.be.equal(false);

    if (signature) {
      const publicKey = wrongPrivateKey.publicKey();
      const verified =
        publicKey.canVerify() && publicKey.verify(text, signature);

      expect(verified).to.be.equal(false);
    }
  });

  it("Should only be derivable if secp256k1 keys is used, others are not derivable.", async () => {
    const apollo = new Apollo();

    expect(
      apollo
        .createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.ED25519,
        })
        .isDerivable()
    ).to.be.equal(false);

    expect(
      apollo
        .createPrivateKey({
          type: KeyTypes.Curve25519,
          curve: Curve.X25519,
        })
        .isDerivable()
    ).to.be.equal(false);

    const seed = apollo.createRandomSeed().seed;
    const privateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: Buffer.from(seed.value).toString("hex"),
    });

    expect(privateKey.isDerivable()).to.be.equal(true);
  });

  it("Should derive secp256k1 privateKey the same way as if we create a new key in Apollo.", async () => {
    const seedHex = "a4dd58542e9959eccb56832a953c0e54b3321036b6165ec2f3c1ef533cd1d6da5fae8010c587535404534c192397483c765505f67e62b26026392f8a0cf8ba51";
    const createKeyArgs = {
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: seedHex,
    };
    const privateKey = apollo.createPrivateKey({ ...createKeyArgs });
    const path = DerivationPath.from(`m/0'/0'/1'`);
    const derived = privateKey.isDerivable() && privateKey.derive(path);

    expect(derived).to.not.equal(false);

    const withDerivationPath = apollo.createPrivateKey({
      ...createKeyArgs,
      derivationPath: path,
    });

    const raw1 = Buffer.from((derived as PrivateKey).getEncoded()).toString("base64url");
    const raw2 = Buffer.from(withDerivationPath.getEncoded()).toString("base64url");
    const raw3 = Buffer.from(privateKey.getEncoded()).toString("base64url");

    expect(raw1).to.equal(raw2);
    expect(raw1).to.not.equal(raw3);
  });

  describe("KeyRestoration", () => {
    const privateIds = [StorableKey.recoveryId("ed25519", "priv"), StorableKey.recoveryId("x25519", "priv"), StorableKey.recoveryId("secp256k1", "priv")];
    const publicIds = [StorableKey.recoveryId("ed25519", "pub"), StorableKey.recoveryId("x25519", "pub"), StorableKey.recoveryId("secp256k1", "pub")];

    /*
    describe("isPrivateKeyData", () => {
      privateIds.forEach(x => {
        test(`${x} matches - returns true`, () => {
          const key: StorableKey = {
            recoveryId: x,
            storableData: new Uint8Array()
          };

          const result = apollo.isPrivateKeyData(key);

          expect(result).to.be.true;
        });
      });

      publicIds.forEach(x => {
        test(`${x} fails - returns false`, () => {
          const key: StorableKey = {
            recoveryId: x,
            storableData: new Uint8Array()
          };

          const result = apollo.isPrivateKeyData(key);

          expect(result).to.be.false;
        });
      });
    });

    describe("isPublicKeyData", () => {
      publicIds.forEach(x => {
        test(`${x} matches - returns true`, () => {
          const key: StorableKey = {
            recoveryId: x,
            storableData: new Uint8Array()
          };

          const result = apollo.isPublicKeyData(key);

          expect(result).to.be.true;
        });
      });

      privateIds.forEach(x => {
        test(`${x} fails - returns false`, () => {
          const key: StorableKey = {
            recoveryId: x,
            storableData: new Uint8Array()
          };

          const result = apollo.isPublicKeyData(key);

          expect(result).to.be.false;
        });
      });
    });
    //*/

    describe("restorePrivateKey", () => {
      test("recoveryId ed25519+priv - matches - returns Ed25519PrivateKey instance", () => {
        const key: StorableKey = {
          recoveryId: StorableKey.recoveryId("ed25519", "priv"),
          raw: Fixtures.Keys.ed25519.privateKey.raw
        };

        const result = apollo.restorePrivateKey(key);

        expect(result).to.be.an.instanceOf(Ed25519PrivateKey);
      });

      test("recoveryId x25519+priv - matches - returns X25519PrivateKey instance", () => {
        const key: StorableKey = {
          recoveryId: StorableKey.recoveryId("x25519", "priv"),
          raw: Fixtures.Keys.x25519.privateKey.raw
        };

        const result = apollo.restorePrivateKey(key);

        expect(result).to.be.an.instanceOf(X25519PrivateKey);
      });

      test("recoveryId secp256k1+priv - matches - returns Secp256k1PrivateKey instance", () => {
        const key: StorableKey = {
          recoveryId: StorableKey.recoveryId("secp256k1", "priv"),
          raw: Fixtures.Keys.secp256K1.privateKey.raw
        };

        const result = apollo.restorePrivateKey(key);

        expect(result).to.be.an.instanceOf(Secp256k1PrivateKey);
      });

      test("recoveryId - unmatched - throws", () => {
        const key = {
          recoveryId: "notValid",
          raw: Fixtures.Keys.ed25519.privateKey.raw
        };

        assert.throws(() => apollo.restorePrivateKey(key as any), ApolloError.KeyRestoratonFailed);
      });
    });

    describe("restorePublicKey", () => {
      test("recoveryId ed25519+pub - matches - returns Ed25519PrivateKey instance", () => {
        const key: StorableKey = {
          recoveryId: StorableKey.recoveryId("ed25519", "pub"),
          raw: Fixtures.Keys.ed25519.publicKey.raw
        };

        const result = apollo.restorePublicKey(key);

        expect(result).to.be.an.instanceOf(Ed25519PublicKey);
      });

      test("recoveryId x25519+pub - matches - returns X25519PublicKey instance", () => {
        const key: StorableKey = {
          recoveryId: StorableKey.recoveryId("x25519", "pub"),
          raw: Fixtures.Keys.x25519.publicKey.raw
        };

        const result = apollo.restorePublicKey(key);

        expect(result).to.be.an.instanceOf(X25519PublicKey);
      });

      test("recoveryId secp256k1+pub - matches - returns Secp256k1PublicKey instance", () => {
        const key: StorableKey = {
          recoveryId: StorableKey.recoveryId("secp256k1", "pub"),
          raw: Fixtures.Keys.secp256K1.publicKey.raw
        };

        const result = apollo.restorePublicKey(key);

        expect(result).to.be.an.instanceOf(Secp256k1PublicKey);
      });

      test("recoveryId - unmatched - throws", () => {
        const key = {
          recoveryId: "notValid",
          raw: Fixtures.Keys.ed25519.publicKey.raw
        };

        assert.throws(() => apollo.restorePublicKey(key as any), ApolloError.KeyRestoratonFailed);
      });
    });
  });
});
