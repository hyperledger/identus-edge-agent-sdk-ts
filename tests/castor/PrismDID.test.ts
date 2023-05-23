import { expect } from "chai";
import { base58btc } from "multiformats/bases/base58";
import { Curve, VerificationMethods } from "../../src/domain";
import Apollo from "../../src/apollo/Apollo";
import Castor from "../../src/castor/Castor";
import { ECConfig } from "../../src/config/ECConfig";

describe("PRISMDID CreateTest", () => {
  it("Should correctly create a prismDID from an existing HexKey", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const didExample =
      "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw";
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

    const resolvedPublicKeyMultibase =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      verificationMethod?.values.at(0)?.publicKeyMultibase!;

    const resolvedPublicKeyBuffer = Buffer.from(
      base58btc.decode(resolvedPublicKeyMultibase)
    );

    expect(resolvedPublicKeyBuffer).to.deep.equal(masterPublicKey.value);
    expect(resolveCreated.id.toString()).to.be.equal(resolvedDID.id.toString());
  });

  it("Create a PrismDID and verify a signature", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const keyPair = apollo.createKeyPairFromKeyCurve(
      {
        curve: Curve.SECP256K1,
      },
      apollo.createRandomSeed().seed
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
  it("Should resolve prismDID key correctly", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const did =
      "did:prism:2c6e089b137b566e97bf8e1c234755f9f8690194c3bc52c6431ff4bb960394b1:CtADCs0DElsKBmF1dGgtMRAEQk8KCXNlY3AyNTZrMRIgvMs2bdoiICUhwR4BGk2hip8QWzG0YUfKaOa1xDyxMNUaIHm3gJ0eaeiqadY0NFlXOcAidM1SUyupvouHKsaCr0IaEmAKC2Fzc2VydGlvbi0xEAJCTwoJc2VjcDI1NmsxEiCr03dJu2xHHYCOBKNK4JNwh3ypp2JX6-Cr8tXiI17KnBogK9A6g0btjurK8n1R2ZeACOFmZkzPs2wDUy01UtqLH4sSXAoHbWFzdGVyMBABQk8KCXNlY3AyNTZrMRIgA1ltJZ4-5OmDYoiP2ZiKg-MMDR3BfDdw-oHYCvpGZEQaIAh1R73E0DW_wi4Ng5xxkDQ77ocpSz_iiEGE9svSPxtaGjoKE2h0dHBzOi8vZm9vLmJhci5jb20SDUxpbmtlZERvbWFpbnMaFGh0dHBzOi8vZm9vLmJhci5jb20vGjgKEmh0dHBzOi8vdXBkYXRlLmNvbRINTGlua2VkRG9tYWlucxoTaHR0cHM6Ly91cGRhdGUuY29tLxo4ChJodHRwczovL3JlbW92ZS5jb20SDUxpbmtlZERvbWFpbnMaE2h0dHBzOi8vcmVtb3ZlLmNvbS8";
    const resolved = await castor.resolveDID(did);

    const verificationMethod = resolved.coreProperties.find(
      (prop): prop is VerificationMethods => prop instanceof VerificationMethods
    );

    const resolvedPublicKeyBase64 =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      verificationMethod?.values.at(0)?.publicKeyMultibase!;

    const resolvedPublicKeyBuffer = Buffer.from(
      base58btc.decode(resolvedPublicKeyBase64)
    );

    resolvedPublicKeyBuffer.length;
    expect(resolvedPublicKeyBuffer.length).to.be.equal(
      ECConfig.PUBLIC_KEY_BYTE_SIZE
    );
  });
});
