import BN from "bn.js";
import { expect, assert } from "chai";

import { Secp256k1KeyPair } from "../../src/apollo/utils/Secp256k1KeyPair";

import Apollo from "../../src/apollo/Apollo";
import { ECConfig } from "../../src/config/ECConfig";
import { Curve } from "../../src/domain/models";
import { MnemonicWordList } from "../../src/domain/models/WordList";
import { bip39Vectors } from "./derivation/BipVectors";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { ApolloError } from "../../src/domain/models/Errors";
import { X25519KeyPair } from "../../src/apollo/utils/X25519KeyPair";
import { base64url } from "multiformats/bases/base64";

let apollo: Apollo;

describe("Apollo Tests", () => {
  beforeEach(() => {
    apollo = new Apollo();
  });

  test.only("buffers", () => {
    const xkp = new X25519KeyPair();

    // const keyPair = xkp.ec.generateKeyPair();
    // const secretKey = keyPair.secretKey;
    const secretKey = Uint8Array.from([
      112, 247, 59, 89, 247, 5, 105, 190,
      63, 83, 136, 157, 153, 129, 109, 240,
      127, 117, 63, 181, 35, 234, 31, 92,
      33, 67, 156, 223, 200, 166, 12, 118
    ]);

    console.log({
      secret: secretKey,
      secretBuf: Buffer.from(secretKey),
      secretBufStr: Buffer.from(secretKey).toString(),
      secretBuf2: secretKey.buffer,
      base64: base64url.baseEncode(Buffer.from(secretKey)),
      base64Buf: Buffer.from(base64url.baseEncode(Buffer.from(secretKey))),
      b64Str: Buffer.from(base64url.baseEncode(Buffer.from(secretKey))).toString()
    })

    expect(true).to.be.true;
  })

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
      const [, mnemonicPhrase, binarySeedHex] = v;
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
    const mnemonicCode = [] as unknown as MnemonicWordList;
    mnemonicCode.push("abandon");

    assert.throws(
      () => {
        apollo.createSeed(mnemonicCode, "");
      },
      Error,
      "Word list size must be multiple of three words"
    );
  });

  it("Should test secp256k1KeyPair generation", () => {
    const keyPair = Secp256k1KeyPair.generateSecp256k1KeyPair();
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
    const keyPair = Secp256k1KeyPair.generateSecp256k1KeyPair();
    const encodedPrivateKey = keyPair.privateKey.getEncoded();
    const d = new BN(encodedPrivateKey);

    const newFromBytes =
      Secp256k1PrivateKey.secp256k1FromBytes(encodedPrivateKey);
    const newFromBigInteger = Secp256k1PrivateKey.secp256k1FromBigInteger(d);

    expect(keyPair.privateKey.nativeValue.toArray()).to.deep.equal(
      newFromBytes.nativeValue.toArray()
    );
    expect(keyPair.privateKey.nativeValue.toArray()).to.deep.equal(
      newFromBigInteger.nativeValue.toArray()
    );
  });

  it("Should create and Sign and verify a message using Secp256k1 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.SECP256K1,
      },
      seed
    );
    const signature = apollo.signByteArrayMessage(keyPair.privateKey, text);
    const verified = apollo.verifySignature(
      keyPair.publicKey,
      text,
      signature.value
    );
    expect(verified).to.be.equal(true);
  });

  it("Should create a secp256k1 publicKey from a privateKey", async () => {
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.SECP256K1,
      },
      seed
    );

    const keyPairFromPrivate = apollo.createKeyPairFromPrivateKey(
      keyPair.privateKey
    );

    expect(Buffer.from(keyPair.publicKey.value).toString("hex")).to.equal(
      Buffer.from(keyPairFromPrivate.publicKey.value).toString("hex")
    );
  });

  it("Should create a ED25519 publicKey from a privateKey", async () => {
    const apollo = new Apollo();
    const keyPair = apollo.createKeyPairFromKeyCurve({
      curve: Curve.ED25519,
    });

    const keyPairFromPrivate = apollo.createKeyPairFromPrivateKey(
      keyPair.privateKey
    );

    expect(Buffer.from(keyPair.publicKey.value).toString("hex")).to.equal(
      Buffer.from(keyPairFromPrivate.publicKey.value).toString("hex")
    );
  });

  it("Should create a x25519 publicKey from a privateKey", async () => {
    const apollo = new Apollo();
    const keyPair = apollo.createKeyPairFromKeyCurve({
      curve: Curve.X25519,
    });

    const keyPairFromPrivate = apollo.createKeyPairFromPrivateKey(
      keyPair.privateKey
    );

    expect(Buffer.from(keyPair.publicKey.value).toString("hex")).to.equal(
      Buffer.from(keyPairFromPrivate.publicKey.value).toString("hex")
    );
  });

  it("Should only verify signed message using the correct SECP256K1 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.SECP256K1,
      },
      seed
    );
    const wrongKeyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.SECP256K1,
      },
      apollo.createRandomSeed().seed
    );
    const signature = apollo.signByteArrayMessage(keyPair.privateKey, text);
    const verified = apollo.verifySignature(
      wrongKeyPair.publicKey,
      text,
      signature.value
    );
    expect(verified).to.be.equal(false);
  });

  it("Should create and Sign and verify a message using ED25519 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.ED25519,
      },
      seed
    );
    const signature = apollo.signByteArrayMessage(keyPair.privateKey, text);
    const verified = apollo.verifySignature(
      keyPair.publicKey,
      text,
      signature.value
    );
    expect(verified).to.be.equal(true);
  });

  it("Should only verify signed message using the correct ED25519 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.ED25519,
      },
      seed
    );
    const wrongKeyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.ED25519,
      },
      apollo.createRandomSeed().seed
    );
    const signature = apollo.signByteArrayMessage(keyPair.privateKey, text);
    const verified = apollo.verifySignature(
      wrongKeyPair.publicKey,
      text,
      signature.value
    );
    expect(verified).to.be.equal(false);
  });

  it("Throws error when sign and verify is attempted with X25519 KeyPair", async () => {
    const text = Buffer.from("AtalaPrism Wallet SDK");
    const apollo = new Apollo();
    const seed = apollo.createRandomSeed().seed;
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.X25519,
      },
      seed
    );

    expect(() =>
      apollo.signByteArrayMessage(keyPair.privateKey, text)
    ).to.throw(ApolloError.InvalidKeyCurve);

    expect(() =>
      apollo.verifySignature(keyPair.publicKey, text, new Uint8Array())
    ).to.throw(ApolloError.InvalidKeyCurve);
  });
});
