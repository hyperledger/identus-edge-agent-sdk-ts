import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { base58btc } from "multiformats/bases/base58";
import { Curve, getProtosUsage, getUsageId, JWT_ALG, KeyTypes, PublicKey, Usage, VerificationMethods } from "../../src/domain";
import Apollo from "../../src/apollo/Apollo";
import Castor from "../../src/castor/Castor";
import * as ECConfig from "../../src/apollo/utils/ec/ECConfig";
import { Secp256k1PublicKey } from "../../src/apollo/utils/Secp256k1PublicKey";
import * as Fixtures from "../fixtures";
import * as Protos from "../../src/domain/models/protos/node_models";
import { PrismDIDPublicKey } from "../../src/apollo/utils/PrismDIDPublicKey";

chai.use(chaiAsPromised);
const expect = chai.expect;

const apollo = new Apollo();
const castor = new Castor(apollo);

describe("PRISMDID", () => {
  describe("PrismDidPublicKey", () => {

    it("Should create getProtosUsageCorrectly", () => {
      expect(getProtosUsage("any" as any)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.UNKNOWN_KEY)
      expect(getProtosUsage(Usage.MASTER_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.MASTER_KEY)
      expect(getProtosUsage(Usage.ISSUING_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.ISSUING_KEY)
      expect(getProtosUsage(Usage.KEY_AGREEMENT_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.KEY_AGREEMENT_KEY)
      expect(getProtosUsage(Usage.AUTHENTICATION_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.AUTHENTICATION_KEY)
      expect(getProtosUsage(Usage.REVOCATION_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.REVOCATION_KEY)
      expect(getProtosUsage(Usage.CAPABILITY_INVOCATION_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.CAPABILITY_INVOCATION_KEY)
      expect(getProtosUsage(Usage.CAPABILITY_DELEGATION_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.CAPABILITY_DELEGATION_KEY)
      expect(getProtosUsage(Usage.UNKNOWN_KEY)).to.eq(Protos.io.iohk.atala.prism.protos.KeyUsage.UNKNOWN_KEY)
    })

    it("Should create from and to valid key protos", () => {
      const unsupportedRaw = new Array(32).fill(1);
      const unsupportedCurve = "secp256r1";
      const otherTypePK: PublicKey = {
        value: unsupportedRaw,
        type: KeyTypes.unknown,
        keySpecification: new Map(),
        size: 0,
        raw: unsupportedRaw,
        curve: unsupportedCurve,
        alg: JWT_ALG.unknown,
        getEncoded() {
          return unsupportedRaw
        }
      } as any
      const keys = [
        Fixtures.Keys.secp256K1.publicKey,
        Fixtures.Keys.ed25519.publicKey,
        Fixtures.Keys.x25519.publicKey,
      ];
      keys.forEach((key) => {
        const masterPk = new PrismDIDPublicKey(
          getUsageId(Usage.MASTER_KEY),
          Usage.MASTER_KEY,
          key
        );
        const masterPkProto = masterPk.toProto()
        const recoveredPk = PrismDIDPublicKey.fromProto(masterPkProto)
        expect(masterPk.keyData.raw).to.deep.eq(recoveredPk.keyData.raw)
        expect(masterPk.usage).to.eq(recoveredPk.usage)
        expect(masterPk.id).to.eq(recoveredPk.id)
      })

      const masterPk = new PrismDIDPublicKey(
        getUsageId(Usage.MASTER_KEY),
        Usage.MASTER_KEY,
        otherTypePK
      );
      const masterPkProto = masterPk.toProto()

      expect(() => PrismDIDPublicKey.fromProto(masterPkProto)).to.throw(`Invalid key curve: ${unsupportedCurve}. Valid options are: X25519,Ed25519,Secp256k1`)

    })
  })
  describe("createPrismDID", () => {
    it("Should create a prismDID from a PublicKey (SECP256K1)", async () => {
      const result = await castor.createPrismDID(Fixtures.Keys.secp256K1.publicKey, []);
      await castor.resolveDID(result.toString())
      expect(result).not.to.be.null;
      expect(result.toString()).to.equal(Fixtures.Keys.expectedDIDSecp256K1);
    });

    it("Should create a prismDID from a KeyPair (SECP256K1)", async () => {
      const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, []);
      await castor.resolveDID(result.toString())
      expect(result).not.to.be.null;
      expect(result.toString()).to.equal(Fixtures.Keys.expectedDIDSecp256K1);
    });

    it("Should create a prismDID from a KeyPair (Ed25519)", async () => {
      const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.ed25519]);
      await castor.resolveDID(result.toString())
      expect(result).not.to.be.null;
      expect(result.toString()).to.equal(Fixtures.Keys.expectedDIDEd25519);
    });

    it("Should create a prismDID from a KeyPair (X25519)", async () => {
      const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.x25519]);
      await castor.resolveDID(result.toString())
      expect(result.toString()).to.equal(Fixtures.Keys.expectedDIDX25519);
    });
  });

  describe("Integration Tests", () => {
    it("Should correctly create a prismDID from an existing HexKey", async () => {


      const didExample =
        "did:prism:733e594871d7700d35e6116011a08fc11e88ff9d366d8b5571ffc1aa18d249ea:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpxJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIDS5zeYUkLCSAJLI6aLXRTPRxstCLPUEI6TgBrAVCHkwGiDk-ffklrHIFW7pKkT8i-YksXi-XXi5h31czUMaVClcpw";
      const resolvedDID = await castor.resolveDID(didExample);

      const pubHex =
        "0434b9cde61490b0920092c8e9a2d74533d1c6cb422cf50423a4e006b015087930e4f9f7e496b1c8156ee92a44fc8be624b178be5d78b9877d5ccd431a54295ca7";

      const masterPublicKey = new Secp256k1PublicKey(Buffer.from(pubHex, "hex"));

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

      expect(resolvedPublicKeyBuffer).to.deep.equal(masterPublicKey.raw);
      expect(resolveCreated.id.toString()).to.be.equal(resolvedDID.id.toString());
    });

    it("Create a PrismDID and verify a signature", async () => {

      const privateKey = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(apollo.createRandomSeed().seed.value).toString("hex"),
      });
      const publicKey = privateKey.publicKey();

      const did = await castor.createPrismDID(publicKey, []);
      const text = "The quick brown fox jumps over the lazy dog";
      const signature =
        privateKey.isSignable() && privateKey.sign(Buffer.from(text));

      expect(signature).to.not.be.equal(false);

      if (signature) {
        const result = await castor.verifySignature(
          did,
          Buffer.from(text),
          Buffer.from(signature)
        );
        expect(result).to.be.equal(true);
      }
    });

    it("Create a ED25519 PrismDID and verify a signature", async () => {

      const issuerSeed = apollo.createRandomSeed().seed;

      const sk = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.ED25519,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });
      const masterSk = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });

      const did = await castor.createPrismDID(masterSk.publicKey(), [], [sk.publicKey()]);
      const text = "The quick brown fox jumps over the lazy dog";
      const signature =
        sk.isSignable() && sk.sign(Buffer.from(text));

      expect(signature).to.not.be.equal(false);

      if (signature) {
        const result = await castor.verifySignature(
          did,
          Buffer.from(text),
          Buffer.from(signature)
        );
        expect(result).to.be.equal(true);
      }
    });

    it("Should resolve prismDID key correctly", async () => {

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
});
