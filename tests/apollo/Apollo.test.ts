import { expect, assert } from "chai";
import Apollo from "../../apollo/Apollo";
import { ECConfig } from "../../config/ECConfig";
import { Curve, KeyPair } from "../../domain/models";
import { MnemonicWordList } from "../../domain/models/WordList";
import { bip39Vectors } from "./derivation/BipVectors";

let apollo: Apollo;
let keyPair: KeyPair;

describe("Apollo Tests", () => {
  const testData = new Uint8Array([
    -107, 101, 68, 118, 27, 74, 29, 50, -32, 72, 47, -127, -49, 3, -8, -55, -63,
    -66, 46, 125,
  ]);

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

  it("Should compute the right binary seed", () => {
    const password = "TREZOR";
    const vectors = JSON.parse(bip39Vectors) as string[][];

    for (const v of vectors) {
      const [_, mnemonicPhrase, binarySeedHex, __] = v;
      const mnemonicCode = mnemonicPhrase.split(" ") as MnemonicWordList;
      const binarySeed = apollo.createSeed(mnemonicCode, password);
      expect(binarySeedHex).to.equal(
        Buffer.from(binarySeed.value).toString("hex")
      );
    }
  });

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

  it("Should test failure when invalid word is used", () => {
    const mnemonicCode = [
      "hocus",
      "pocus",
      "mnemo",
      "codus",
      ...Array(20).fill("abandon"),
    ] as MnemonicWordList;
    assert.throws(
      () => {
        apollo.createSeed(mnemonicCode, "");
      },
      Error,
      "Invalid mnemonic word/s"
    );
  });

  it("Should test failure when wrong mnemonic length is used", () => {
    const mnemonicCode = new Array() as MnemonicWordList;
    mnemonicCode.push("abandon");

    assert.throws(
      () => {
        apollo.createSeed(mnemonicCode, "");
      },
      Error,
      "Word list size must be multiple of three words"
    );

    describe("Tests with keyPair", () => {
      beforeEach(() => {
        keyPair = apollo.createKeyPairFromKeyCurve(
          apollo.createRandomSeed().seed,
          {
            curve: Curve.SECP256K1,
          }
        );
      });

      it("Should test secp256k1 keypair generation", () => {
        expect(Buffer.from(keyPair.publicKey.value, "hex").length).to.equal(
          ECConfig.PUBLIC_KEY_BYTE_SIZE
        );
        expect(Buffer.from(keyPair.privateKey.value, "hex").length).to.equal(
          ECConfig.PRIVATE_KEY_BYTE_SIZE
        );
      });

      it("Should sign and verify a message", () => {
        const text = "The quick brown fox jumps over the lazy dog";
        const signature = apollo.signStringMessage(keyPair.privateKey, text);
        expect(
          signature.value.length <= ECConfig.SIGNATURE_MAX_BYTE_SIZE
        ).to.equal(true);
        expect(
          apollo.verifySignature(
            keyPair.publicKey,
            Buffer.from(text),
            signature
          )
        ).to.equal(true);
      });
    });
  });
});
