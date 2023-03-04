import { expect } from "chai";

import { Curve, DID, KeyPair } from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";

describe("PRISMDID CreateTest", () => {
  it("Should correctly create a prismDID from an existing HexKey", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const didExample =
      "did:prism:f87379b319e20d14135c8a25c9ada6a0cd01e93469107135c4958d0725559e13:CkUKQxJBCg1tYXN0ZXIoaW5kZXgpEAFKLgoJU2VjcDI1NmsxEiEDNLnN5hSQsJIAksjpotdFM9HGy0Is9QQjpOAGsBUIeTA";
    const resolvedDID = await castor.resolveDID(didExample);

    const pubHex =
      "0434b9cde61490b0920092c8e9a2d74533d1c6cb422cf50423a4e006b015087930e4f9f7e496b1c8156ee92a44fc8be624b178be5d78b9877d5ccd431a54295ca7";

    const masterPublicKey = apollo.compressedPublicKeyFromPublicKey({
      keyCurve: {
        curve: Curve.SECP256K1,
      },
      value: Buffer.from(pubHex, "hex"),
    }).uncompressed;
    const createdDID = await castor.createPrismDID(masterPublicKey, []);
    const resolveCreated = await castor.resolveDID(createdDID.toString());

    expect(resolveCreated.id.toString()).to.be.equal(resolvedDID.id.toString());
  });

  it("Create a PrismDID and verify a signature", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const keyPair = apollo.createKeyPairFromKeyCurve(
      apollo.createRandomSeed().seed,
      {
        curve: Curve.SECP256K1,
      }
    );
    const masterPublicKey = apollo.compressedPublicKeyFromPublicKey(
      keyPair.publicKey
    ).uncompressed;
    const did = await castor.createPrismDID(masterPublicKey, []);
    const text = "The quick brown fox jumps over the lazy dog";
    const signature = apollo.signStringMessage(keyPair.privateKey, text);
    const result = await castor.verifySignature(
      did,
      Buffer.from(text),
      Buffer.from(signature.value)
    );
    expect(result).to.be.equal(true);
  });
});
