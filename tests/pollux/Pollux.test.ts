import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import { expect } from "chai";

import { AttachmentDescriptor, CredentialRequestOptions, CredentialType, Curve, DID, LinkSecret, Message } from "../../src/domain";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";
import Castor from "../../src/castor/Castor";
import { Apollo } from "../../src/domain/buildingBlocks/Apollo";
import { InvalidJWTString } from "../../src/domain/models/errors/Pollux";
import Pollux from "../../src/pollux/Pollux";
import { base64 } from "multiformats/bases/base64";
import { AnonCredsCredential, AnonCredsRecoveryId } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import { PresentationRequest } from "../../src/pollux/models/PresentationRequest";
import * as Fixtures from "../fixtures";

chai.use(SinonChai);
chai.use(chaiAsPromised);
let sandbox: sinon.SinonSandbox;

jest.mock("../../src/apollo/utils/jwt/JWT", () => ({
  JWT: jest.fn(() => ({ sign: jest.fn(() => "JWT.sign.result") }))
}));

const jwtParts = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
  "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
];
const jwtString = jwtParts.join(".");

describe("Pollux", () => {
  let pollux: Pollux;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    const apollo = {} as Apollo;
    const castor = new Castor(apollo);
    pollux = new Pollux(castor);
    await pollux.start();
  });

  afterEach(async () => {
    sandbox.restore();
  });

  describe("extractCredentialFormatFromMessage", () => {
    const jwtFormats = ["prism/jwt"];
    const anoncredsFormats = [
      "anoncreds/credential@v1.0",
      "anoncreds/credential-offer@v1.0",
    ];
    const unknownFormats = [
      CredentialType.W3C,
      CredentialType.Unknown,
      undefined,
      "notValid"
    ];

    const testFn = (format: any, expected: CredentialType) => {
      it(`attachments[0].format is ${format} - returns CredentialType.${expected}`, () => {
        const msg = new Message("", undefined, "piuri");
        msg.attachments.push(
          new AttachmentDescriptor({} as any, undefined, undefined, undefined, format)
        );

        const result = pollux.extractCredentialFormatFromMessage(msg);

        expect(result).to.eql(expected);
      });
    };

    describe("JWT", () => {
      jwtFormats.forEach(x => testFn(x, CredentialType.JWT));
    });

    describe("Anoncreds", () => {
      anoncredsFormats.forEach(x => testFn(x, CredentialType.AnonCreds));
    });

    describe("Unknown", () => {
      unknownFormats.forEach(x => testFn(x, CredentialType.Unknown));
    });

    describe("Multiple Attachments", () => {
      const testMultipleFn = (format: any, expected: CredentialType) => {
        it(`matches first item: ${format} - returns CredentialType.${expected}`, () => {
          const msg = new Message("", undefined, "piuri");
          msg.attachments.push(
            new AttachmentDescriptor({} as any, undefined, undefined, undefined, format),
            new AttachmentDescriptor({} as any, undefined, undefined, undefined, "secondFormat"),
          );

          const result = pollux.extractCredentialFormatFromMessage(msg);

          expect(result).to.eql(expected);
        });
      };

      jwtFormats.forEach(x => testMultipleFn(x, CredentialType.JWT));
      anoncredsFormats.forEach(x => testMultipleFn(x, CredentialType.AnonCreds));
      unknownFormats.forEach(x => testMultipleFn(x, CredentialType.Unknown));
    });
  });

  describe("parseCredential", () => {
    describe("AnonCreds", () => {
      const encodeToBuffer = (cred: object) => {
        const json = JSON.stringify(cred);
        return Buffer.from(json);
      };

      describe("Invalid encoded string", () => {
        [
          "",
          `tooFew`,
          `too.many.parts`
        ].forEach(
          (value) => {
            it(`should error when too few parts [${value.split(".").length}]`, () => {
              expect(
                pollux.parseCredential(Buffer.from(value), { type: CredentialType.AnonCreds })
              ).to.eventually.be.rejected;
            });
          }
        );
      });

      describe("Options", () => {
        it(`missing linkSecret - throws`, async () => {
          sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves({});
          sandbox.stub(pollux, "anoncreds").get(() => ({
            processCredential: sandbox.stub().returns({})
          }));

          const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
          const encoded = encodeToBuffer(payload);

          expect(
            pollux.parseCredential(encoded, {
              type: CredentialType.AnonCreds,
              // linkSecret: "linkSecret",
              credentialMetadata: {} as any
            })
          ).to.eventually.be.rejected;
        });

        it(`missing credentialMetadata - throws`, async () => {
          sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves({});
          sandbox.stub(pollux, "anoncreds").get(() => ({
            processCredential: sandbox.stub().returns({})
          }));

          const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
          const encoded = encodeToBuffer(payload);

          expect(
            pollux.parseCredential(encoded, {
              type: CredentialType.AnonCreds,
              linkSecret: "linkSecret",
              // credentialMetadata: {} as any
            })
          ).to.eventually.be.rejected;
        });

      });

      it(`should call fetchCredentialDefinition with encoded payload cred_def_id`, async () => {
        const stubFetchCredentialDefinition = sandbox.stub(pollux as any, "fetchCredentialDefinition")
          .resolves({});

        sandbox.stub(pollux, "anoncreds").get(() => ({
          processCredential: sandbox.stub().returns({})
        }));

        const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
        const encoded = encodeToBuffer(payload);

        await pollux.parseCredential(encoded, {
          type: CredentialType.AnonCreds,
          linkSecret: "linkSecret",
          credentialMetadata: {} as any
        });

        expect(stubFetchCredentialDefinition).to.have.been.calledOnceWith(payload.cred_def_id);
      });

      it(`should call processCredential with credentialDefinition, credentialIssued, credentialMetadata, linkSecret`, async () => {
        const fetchCredentialDefinitionResult = { mock: "fetchCredentialDefinitionResult" };
        sandbox.stub(pollux as any, "fetchCredentialDefinition")
          .resolves(fetchCredentialDefinitionResult);

        const stubProcessCredential = sandbox.stub().returns({});

        sandbox.stub(pollux, "anoncreds").get(() => ({
          processCredential: stubProcessCredential
        }));

        const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
        const encoded = encodeToBuffer(payload);
        const credentialMetadata = { mock: "credentialMetadata" } as any;
        const linkSecret = "linkSecret";

        await pollux.parseCredential(Buffer.from(encoded), {
          type: CredentialType.AnonCreds,
          linkSecret,
          credentialMetadata
        });

        expect(stubProcessCredential).to.have.been.calledOnceWith(fetchCredentialDefinitionResult, payload, credentialMetadata, linkSecret);
      });

      describe("Valid Credential", () => {
        it(`should return AnonCredsCredential`, async () => {
          const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
          const encoded = encodeToBuffer(payload);

          sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves({});
          sandbox.stub(pollux, "anoncreds").get(() => ({
            processCredential: sandbox.stub().returns(payload)
          }));

          const result = await pollux.parseCredential(Buffer.from(encoded), {
            type: CredentialType.AnonCreds,
            linkSecret: "linkSecret",
            credentialMetadata: {} as any
          });

          expect(result).to.not.be.undefined;
          expect(result).to.be.instanceOf(AnonCredsCredential);
          const anonCredsCredential = result as AnonCredsCredential;

          // expect(anonCredsCredential.id).to.equal(encoded); // undefined

          expect(anonCredsCredential.claims).to.be.an("array");
          // expect(anonCredsCredential.claims).to.contain(...) // TODO

          expect(anonCredsCredential.credentialType).to.equal(CredentialType.AnonCreds);
          // expect(anonCredsCredential.issuer).to.equal() // TODO

          expect(anonCredsCredential.recoveryId).to.equal(AnonCredsRecoveryId);
          // expect(anonCredsCredential.subject).to.equal(...); // TODO

          expect(anonCredsCredential.isProvable()).to.be.false; // TODO is this correct?
          expect(anonCredsCredential.isStorable()).to.be.true;
        });
      });
    });

    describe("JWT", () => {
      describe("Invalid encoded JWT string", () => {
        [
          "",
          `${jwtParts[0]}`,
          `${jwtParts[0]}.${jwtParts[1]}`
        ].forEach(
          (value) => {
            it(`should error when too few parts [${value.split(".").length}]`, () => {
              expect(
                pollux.parseCredential(Buffer.from(value), { type: CredentialType.JWT })
              ).to.eventually.be.rejectedWith(InvalidJWTString);
            });
          }
        );

        [
          `${jwtString}.${jwtParts[0]}`,
          `${jwtString}.${jwtParts[0]}.${jwtParts[1]}`,
        ].forEach((value) => {
          it(`should error when too many parts [${value.split(".").length
            }]`, () => {
              expect(
                pollux.parseCredential(Buffer.from(value), { type: CredentialType.JWT })
              ).to.eventually.be.rejectedWith(InvalidJWTString);
            });
        });

        it("should error when not encoded JSON", () => {
          const encoded = Buffer.from("a").toString("base64");
          const value = `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;

          expect(
            pollux.parseCredential(Buffer.from(value), { type: CredentialType.JWT })
          ).to.eventually.be.rejected;
        });
      });

      const encodeJWTCredential = (cred: object): string => {
        const json = JSON.stringify(cred);
        const encoded = Buffer.from(json).toString("base64");
        return `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;
      };

      describe("Valid Credential", () => {
        it(`should return JWTVerifiableCredential`, async () => {
          const credential = Fixtures.Credentials.JWT.credential;
          const jwtPayload = Fixtures.Credentials.JWT.credentialPayload;
          const encoded = encodeJWTCredential(jwtPayload);
          const result = await pollux.parseCredential(Buffer.from(encoded), {
            type: CredentialType.JWT,
          });

          expect(result).to.not.be.undefined;
          expect(result).to.be.instanceOf(JWTCredential);

          const jwtCred = result as JWTCredential;

          expect(jwtCred.id).to.equal(encoded);
          // expect(jwtCred.aud).to.be.deep.equal(jwtPayload.aud);
          expect(jwtCred.context).to.be.deep.equal(credential.context);
          expect(jwtCred.credentialSubject).to.be.deep.equal(
            credential.credentialSubject
          );
          expect(jwtCred.credentialType).to.be.equal(credential.credentialType);

          expect(jwtCred.expirationDate).to.be.equal(
            new Date(jwtPayload.exp).toISOString()
          );
          expect(jwtCred.issuanceDate).to.be.equal(
            new Date(jwtPayload.nbf).toISOString()
          );

          expect(jwtCred.type).to.be.deep.equal(credential.type);

          expect(jwtCred.issuer.toString()).to.be.equal(jwtPayload.iss);
          expect(jwtCred.evidence).to.be.deep.equal(credential.evidence);
          expect(jwtCred.refreshService).to.deep.equal(
            credential.refreshService
          );
          expect(jwtCred.termsOfUse).to.deep.equal(credential.termsOfUse);

          expect(jwtCred.credentialSchema).to.be.deep.equal(
            credential.credentialSchema
          );
          expect(jwtCred.credentialStatus).to.be.deep.equal(
            credential.credentialStatus
          );
        });
      });

      it("should parse JWT dates (NumericDate) correctly", async () => {
        const nbf = Fixtures.Credentials.JWT.credentialPayload.nbf;
        const exp = Fixtures.Credentials.JWT.credentialPayload.exp;

        const result = await pollux.parseCredential(
          Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded),
          {
            type: CredentialType.JWT,
          }
        ) as JWTCredential;

        const issuanceDate = new Date(nbf).toISOString();
        const expirationDate = new Date(exp).toISOString();

        expect(result.issuanceDate).to.equal(issuanceDate);
        expect(result.expirationDate).to.equal(expirationDate);
      });
    });
  });

  describe("processCredentialRequest", () => {
    describe("processJWTCredential", () => {
      it("options not provided - throws", () => {
        const body = { formats: [{ format: CredentialType.JWT }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");

        const result = pollux.processJWTCredential(msg);

        expect(result).to.eventually.be.rejected;
      });

      it("options missing did - throws", () => {
        const body = { formats: [{ format: CredentialType.JWT }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");
        const options = {};

        const result = pollux.processJWTCredential(msg, options);

        expect(result).to.eventually.be.rejected;
      });

      it("options missing keyPair - throws", () => {
        const body = { formats: [{ format: CredentialType.JWT }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");
        const options = { did: new DID("did", "peer", "test") };

        const result = pollux.processJWTCredential(msg, options);

        expect(result).to.eventually.be.rejected;
      });

      it("options correct - returns JWT.sign result", () => {
        const body = { formats: [{ format: CredentialType.JWT }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");
        const options: CredentialRequestOptions = {
          did: new DID("did", "peer", "test"),
          keyPair: { privateKey: {} } as any
        };

        const result = pollux.processJWTCredential(msg, options);

        expect(result).to.eventually.eql("JWT.sign.result");
      });
    });

    describe("processAnonCredsCredential", () => {
      // it("options not provided - throws", () => {
      //   const body = { formats: [{ format: CredentialType.AnonCreds }] };
      //   const msg = new Message(JSON.stringify(body), undefined, "piuri");

      //   const result = pollux.processAnonCredsCredential(msg);

      //   expect(result).to.eventually.be.rejected;
      // });

      it("options missing linkSecret - throws", () => {
        const body = { formats: [{ format: CredentialType.AnonCreds }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");
        const options = {};

        const result = pollux.processAnonCredsCredential(msg, options);

        expect(result).to.eventually.be.rejected;
      });

      it("options missing linkSecretName - throws", () => {
        const body = { formats: [{ format: CredentialType.AnonCreds }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");
        const linkSecret = new LinkSecret("3");
        const options: CredentialRequestOptions = { linkSecret };

        const result = pollux.processAnonCredsCredential(msg, options);

        expect(result).to.eventually.be.rejected;
      });

      describe("extractAttachment", () => {
        it("no message attachments - throws", () => {
          const body = { formats: [{ format: CredentialType.AnonCreds }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

        it("attach_id undefined on body.formats[0] - throws", () => {
          const attach_id = "123";
          const body = { formats: [{ format: CredentialType.AnonCreds }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          msg.attachments.push({
            id: attach_id,
            data: { base64: "" }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

        it("attach_id on body.formats[0] doesn't match msg.attachments[].id - throws", () => {
          const attach_id = "123";
          const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          msg.attachments.push({
            id: "not_attach_id",
            data: { base64: "" }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

      });

      describe("isAnonCredsBody", () => {
        it("anonCredsBody missing cred_def_id - throws", () => {
          const anonCredsBody = {};
          const attach_id = "13";
          const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          const b64Data = base64.baseEncode(Buffer.from(JSON.stringify(anonCredsBody)));
          msg.attachments.push({
            id: attach_id,
            data: { base64: b64Data }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

        it("anonCredsBody missing schema_id - throws", () => {
          const anonCredsBody = {
            cred_def_id: "cred_def_id"
          };
          const attach_id = "13";
          const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          const b64Data = base64.baseEncode(Buffer.from(JSON.stringify(anonCredsBody)));
          msg.attachments.push({
            id: attach_id,
            data: { base64: b64Data }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

        it("anonCredsBody missing nonce - throws", () => {
          const anonCredsBody = {
            cred_def_id: "cred_def_id",
            schema_id: "schema_id"
          };
          const attach_id = "13";
          const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          const b64Data = base64.baseEncode(Buffer.from(JSON.stringify(anonCredsBody)));
          msg.attachments.push({
            id: attach_id,
            data: { base64: b64Data }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

        it("anonCredsBody missing key_correctness_proof - throws", () => {
          const anonCredsBody = {
            cred_def_id: "cred_def_id",
            schema_id: "schema_id",
            nonce: "nonce",
          };
          const attach_id = "13";
          const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          const b64Data = base64.baseEncode(Buffer.from(JSON.stringify(anonCredsBody)));
          msg.attachments.push({
            id: attach_id,
            data: { base64: b64Data }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });

        it("anonCredsBody missing method_name - throws", () => {
          const anonCredsBody = {
            cred_def_id: "cred_def_id",
            schema_id: "schema_id",
            nonce: "nonce",
            key_correctness_proof: {
              c: "c",
              xr_cap: [["first", "second"]],
              xz_cap: "xz_cap",
            }
          };
          const attach_id = "13";
          const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
          const msg = new Message(JSON.stringify(body), undefined, "piuri");
          const b64Data = base64.baseEncode(Buffer.from(JSON.stringify(anonCredsBody)));
          msg.attachments.push({
            id: attach_id,
            data: { base64: b64Data }
          });
          const linkSecret = new LinkSecret("123", "linkSecretName");
          const options: CredentialRequestOptions = { linkSecret };

          const result = pollux.processAnonCredsCredential(msg, options);

          expect(result).to.eventually.be.rejected;
        });
      });

      it("returns JSON.stringify CredentialRequest", async () => {
        const createCredentialRequestResult = { a: 1 };
        const stubCreateCredentialRequest = sandbox.stub().returns([createCredentialRequestResult, {}]);

        sandbox.stub(pollux, "anoncreds").get(() => ({
          createCredentialRequest: stubCreateCredentialRequest
        }));

        const credDef = { b: 2 };
        const stubFetchCredentialDefinition = sandbox.stub(pollux as any, "fetchCredentialDefinition")
          .resolves(credDef);

        const anonCredsBody = {
          cred_def_id: "cred_def_id",
          schema_id: "schema_id",
          nonce: "nonce",
          key_correctness_proof: {
            c: "c",
            xr_cap: [["first", "second"]],
            xz_cap: "xz_cap",
          },
          method_name: "method_name"
        };
        const attach_id = "13";
        const body = { formats: [{ format: CredentialType.AnonCreds, attach_id }] };
        const msg = new Message(JSON.stringify(body), undefined, "piuri");
        const b64Data = base64.baseEncode(Buffer.from(JSON.stringify(anonCredsBody)));
        msg.attachments.push({
          id: attach_id,
          data: { base64: b64Data }
        });
        const linkSecret = new LinkSecret("123", "linkSecretName");
        const options: CredentialRequestOptions = { linkSecret };

        const result = await pollux.processAnonCredsCredential(msg, options);

        expect(result).to.be.an("array").to.have.length(2);
        expect(result[0]).to.equal(createCredentialRequestResult);
        expect(stubFetchCredentialDefinition).to.have.been.calledOnceWith(anonCredsBody.cred_def_id);
        expect(stubCreateCredentialRequest).to.have.been.calledOnceWith(anonCredsBody, credDef, options.linkSecret?.secret);
      });
    });
  });

  describe("createPresentationProof", () => {
    describe("Anoncreds", () => {
      beforeEach(async () => {
        await (pollux.anoncreds as any).load();
      });

      test("ok", async () => {
        sandbox.stub(pollux as any, "fetchSchema").resolves(Fixtures.Credentials.Anoncreds.schema);
        sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

        const pr = new PresentationRequest(CredentialType.AnonCreds, Fixtures.Credentials.Anoncreds.presentationRequest);
        const cred = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

        const result = await pollux.createPresentationProof(pr, cred, { linkSecret: Fixtures.Credentials.Anoncreds.linkSecret });

        expect(result).not.to.be.null;
      });
    });

    describe("JWT", () => {
      test("ok", async () => {

        const pr = new PresentationRequest(CredentialType.JWT, Fixtures.Credentials.JWT.presentationRequest);
        const cred = JWTCredential.fromJWT({ sub: "did:test:123" }, "");
        const did = Fixtures.DIDs[0];
        const privateKey = Fixtures.Keys.ed25519.privateKey;

        const result = await pollux.createPresentationProof(pr, cred, {
          did,
          privateKey
        });

        expect(result).not.to.be.null;
      });
    });
  });

  describe("Anoncreds", () => {
    beforeEach(async () => {
      await (pollux.anoncreds as any).load();
    });

    test("createLinkSecret", async () => {
      const result = pollux.anoncreds.createLinksecret();
      expect(result).to.be.a("string");
    });

    test("createCredentialRequest", () => {
      const result = pollux.anoncreds.createCredentialRequest(
        Fixtures.Credentials.Anoncreds.credentialOffer,
        Fixtures.Credentials.Anoncreds.credentialDefinition,
        Fixtures.Credentials.Anoncreds.linkSecret.secret,
        Fixtures.Credentials.Anoncreds.linkSecret.name,
      );

      expect(result).to.be.an("array").to.have.length(2);
      // CredentialRequest
      const credReq = result[0];
      expect(credReq).to.have.property("cred_def_id").to.be.a("string");
      expect(credReq).to.have.property("entropy").to.be.a("string");
      expect(credReq).to.have.property("nonce").to.be.a("string");
      expect(credReq).to.have.property("blinded_ms");
      expect(credReq.blinded_ms).to.have.property("u");
      expect(credReq.blinded_ms).to.have.property("hidden_attributes");
      expect(credReq.blinded_ms).to.have.property("committed_attributes");
      expect(credReq).to.have.property("blinded_ms_correctness_proof");
      expect(credReq.blinded_ms_correctness_proof).to.have.property("c");
      expect(credReq.blinded_ms_correctness_proof).to.have.property("v_dash_cap");
      expect(credReq.blinded_ms_correctness_proof).to.have.property("m_caps");
      expect(credReq.blinded_ms_correctness_proof).to.have.property("r_caps");

      // CredentialRequestMeta
      const credReqMeta = result[1];
      expect(credReqMeta).to.have.property("link_secret_blinding_data");
      expect(credReqMeta.link_secret_blinding_data)
        .to.have.property("v_prime")
        .to.be.a("string");
      expect(credReqMeta)
        .to.have.property("link_secret_name")
        .to.be.a("string");
      expect(credReqMeta).to.have.property("nonce").to.be.a("string");
    });

    test("createPresentation", () => {
      const result = pollux.anoncreds.createPresentation(
        Fixtures.Credentials.Anoncreds.presentationRequest,
        Fixtures.Credentials.Anoncreds.schemas,
        Fixtures.Credentials.Anoncreds.credDefs,
        Fixtures.Credentials.Anoncreds.credential,
        Fixtures.Credentials.Anoncreds.linkSecret.secret
      );

      expect(result).to.be.an("object");
      expect(result).to.have.property("proof");
      expect(result.proof)
        .to.have.property("proofs")
        .to.be.an("array")
        .to.have.length(1);

      result.proof.proofs.forEach((proof) => {
        expect(proof).to.have.property("primary_proof");
        expect(proof.primary_proof).to.have.property("eq_proof");
        expect(proof.primary_proof.eq_proof).to.have.property("revealed_attrs");
        expect(proof.primary_proof.eq_proof.revealed_attrs)
          .to.have.property("name")
          .to.be.a("string");
        expect(proof.primary_proof.eq_proof)
          .to.have.property("a_prime")
          .to.be.a("string");
        expect(proof.primary_proof.eq_proof)
          .to.have.property("e")
          .to.be.a("string");
        expect(proof.primary_proof.eq_proof)
          .to.have.property("m")
          .to.be.an("object");
        expect(proof.primary_proof.eq_proof.m)
          .to.have.property("age")
          .to.be.an("string");
        expect(proof.primary_proof.eq_proof.m)
          .to.have.property("master_secret")
          .to.be.an("string");
        expect(proof.primary_proof.eq_proof)
          .to.have.property("m2")
          .to.be.a("string");
        expect(proof.primary_proof.eq_proof)
          .to.have.property("v")
          .to.be.a("string");

        expect(proof.primary_proof)
          .to.have.property("ge_proofs")
          .to.be.an("array")
          .to.have.length(1);

        proof.primary_proof.ge_proofs.forEach((geProof) => {
          expect(geProof).to.have.property("mj").to.be.a("string");
          expect(geProof).to.have.property("alpha").to.be.a("string");
          expect(geProof).to.have.property("r").to.be.an("object");
          expect(geProof).to.have.property("t").to.be.an("object");
          expect(geProof).to.have.property("u").to.be.an("object");
          expect(geProof).to.have.property("predicate").to.be.an("object");
          expect(geProof.predicate).to.have.property(
            "attr_name",
            Fixtures.Credentials.Anoncreds.presentationRequest.requested_predicates.predicate1_referent.name
          );
          expect(geProof.predicate).to.have.property("p_type", "GE");
          expect(geProof.predicate).to.have.property(
            "value",
            Fixtures.Credentials.Anoncreds.presentationRequest.requested_predicates.predicate1_referent.p_value
          );
        });
      });

      expect(result.proof).to.have.property("aggregated_proof");
      expect(result.proof.aggregated_proof)
        .to.have.property("c_hash")
        .to.be.a("string");
      expect(result.proof.aggregated_proof)
        .to.have.property("c_list")
        .to.be.an("array");

      expect(result).to.have.property("requested_proof");
      expect(result.requested_proof).to.have.property("predicates");
      expect(result.requested_proof).to.have.property("revealed_attrs");
      expect(result.requested_proof).to.have.property("self_attested_attrs");
      expect(result.requested_proof).to.have.property("unrevealed_attrs");

      expect(result)
        .to.have.property("identifiers")
        .to.be.an("array")
        .to.have.length(1);

      result.identifiers.forEach((identifier) => {
        expect(identifier).to.have.property("schema_id", Fixtures.Credentials.Anoncreds.schemaId);
        expect(identifier).to.have.property("cred_def_id", Fixtures.Credentials.Anoncreds.credDefId);
      });
    });

    test("processCredential", () => {
      const result = pollux.anoncreds.processCredential(
        Fixtures.Credentials.Anoncreds.credentialDefinition,
        Fixtures.Credentials.Anoncreds.credentialIssued,
        Fixtures.Credentials.Anoncreds.credentialRequestMeta,
        Fixtures.Credentials.Anoncreds.linkSecret.secret
      );

      expect(result).to.have.property("schema_id", Fixtures.Credentials.Anoncreds.schemaId);
      expect(result).to.have.property("cred_def_id", Fixtures.Credentials.Anoncreds.credDefId);
      expect(result).to.have.property("signature");
      expect(result).to.have.property("signature_correctness_proof");

      Fixtures.Credentials.Anoncreds.credentialIssued.values.forEach((value) => {
        expect(result.values)
          .to.have.property(value[0])
          .to.deep.equal(value[1]);
      });
    });
  });
});
