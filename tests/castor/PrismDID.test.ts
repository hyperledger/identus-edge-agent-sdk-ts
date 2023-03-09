import { expect } from "chai";
import { base64 } from "multiformats/bases/base64";
import {
  Curve,
  DID,
  KeyPair,
  VerificationMethod,
  VerificationMethods,
} from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";

describe("PRISMDID CreateTest", () => {
  it("Should correctly create a prismDID from an existing HexKey", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const didExample =
      "did:prism:cc0a75d1d1c36b0242c2250d71683be2e197aa84b7dc17568d69ad98eab16680:CmYKZBJiCg1tYXN0ZXIoaW5kZXgpEAFCTwoJU2VjcDI1NmsxEiA0uc3mFJCwkgCSyOmi10Uz0cbLQiz1BCOk4AawFQh5MBog5Pn35JaxyBVu6SpE_IvmJLF4vl14uYd9XM1DGlQpXKc";
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

    const verificationMethod = resolveCreated.coreProperties.find(
      (prop): prop is VerificationMethods => prop instanceof VerificationMethods
    );

    const resolvedPublicKeyBase64 =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      verificationMethod?.values[0]?.publicKeyMultibase!;

    const resolvedPublicKeyBuffer = Buffer.from(
      base64.baseDecode(resolvedPublicKeyBase64)
    );

    expect(resolvedPublicKeyBuffer).to.deep.equal(masterPublicKey.value);
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
    const did = await castor.createPrismDID(keyPair.publicKey, []);
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
