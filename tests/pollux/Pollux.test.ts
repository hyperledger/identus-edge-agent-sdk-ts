import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import { expect, assert } from "chai";

import { AttachmentDescriptor, AttachmentFormats, Claims, Credential, CredentialRequestOptions, CredentialType, Curve, DID, JWT_ALG, JWTCredentialPayload, JWTPresentationPayload, JWTVerifiableCredentialProperties, KeyTypes, LinkSecret, Message, PolluxError, PresentationClaims, PresentationOptions, PrivateKey, W3CVerifiableCredentialContext, W3CVerifiableCredentialType } from "../../src/domain";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";
import Castor from "../../src/castor/Castor";
import Apollo from "../../src/apollo/Apollo";

import { InvalidJWTString } from "../../src/domain/models/errors/Pollux";
import Pollux from "../../src/pollux/Pollux";
import { AnonCredsCredential, AnonCredsRecoveryId } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import { PresentationRequest } from "../../src/pollux/models/PresentationRequest";
import * as Fixtures from "../fixtures";
import { JWTCore } from "../../src/pollux/utils/jwt/JWTCore";
import { JWTInstanceType } from "../../src/pollux/utils/jwt/types";
import { SDJWT } from "../../src/pollux/utils/SDJWT";
import { JWT } from "../../src/pollux/utils/JWT";
import { SDJWTCredential } from "../../src/pollux/models/SDJWTVerifiableCredential";
import axios from "axios";

chai.use(SinonChai);
chai.use(chaiAsPromised);
let sandbox: sinon.SinonSandbox;




jest.mock("../../src/pollux/utils/JWT", () => ({
  JWT: jest.fn(() => ({
    sign: jest.fn(() => "JWT.sign.result"),
    verify: jest.fn(() => true)
  }))
}));

const jwtParts = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
  "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
];
const jwtString = jwtParts.join(".");

type JWTVerificationTestCase = {
  challenge?: string,
  apollo: Apollo,
  castor: Castor,
  jwt: JWTCore<JWTInstanceType.JWT>,
  pollux: Pollux,
  issuer: DID,
  holder: DID,
  holderPrv: PrivateKey,
  issuerPrv: PrivateKey,
  subject: Record<string, any>,
  claims: Claims
}


type AnoncredsVerificationTestCase = {
  challenge?: string,
  apollo: Apollo,
  castor: Castor,
  pollux: Pollux,
  claims: PresentationClaims<CredentialType.AnonCreds>,
  credential: Credential
}


async function createAnoncredsVerificationTestCase(options: AnoncredsVerificationTestCase) {
  const {
    pollux,
    claims,
    credential
  } = options;
  const presentationDefinition = await pollux.createPresentationDefinitionRequest(
    CredentialType.AnonCreds,
    claims,
    new PresentationOptions({}, CredentialType.AnonCreds)
  );
  const presentationSubmissionJSON = await pollux.createPresentationSubmission<CredentialType.AnonCreds>(
    presentationDefinition,
    credential,
    Fixtures.Credentials.Anoncreds.linkSecret
  );
  return {
    presentationDefinition,
    presentationSubmissionJSON,
  }
}

async function createJWTVerificationTestCase(options: JWTVerificationTestCase) {
  const {
    pollux,
    issuer,
    holder,
    issuerPrv,
    holderPrv,
    jwt,
    subject,
    claims,
    challenge = 'sign this'
  } = options;

  const currentDate = new Date();
  const nextMonthDate = new Date(currentDate);
  nextMonthDate.setMonth(currentDate.getMonth() + 1);
  const issuanceDate = currentDate.getTime()
  const expirationDate = nextMonthDate.getTime();

  const payload: JWTCredentialPayload = {
    iss: issuer.toString(),
    nbf: issuanceDate,
    exp: expirationDate,
    sub: holder.toString(),
    vc: {
      "@context": [W3CVerifiableCredentialContext.credential],
      type: [W3CVerifiableCredentialType.credential],
      issuer: issuer.toString(),
      issuanceDate: new Date(issuanceDate).toISOString(),
      credentialSubject: subject,
    }
  }

  const signedJWT = await jwt.sign({
    issuerDID: issuer,
    privateKey: issuerPrv,
    payload
  })

  const jwtCredential = JWTCredential.fromJWS(signedJWT);
  const presentationDefinition = await pollux.createPresentationDefinitionRequest(
    CredentialType.JWT,
    {
      issuer: issuer.toString(),
      claims: claims
    },
    new PresentationOptions({
      challenge
    })
  );

  const disclosed = await pollux.revealCredentialFields(jwtCredential, ['course'])

  expect(disclosed).to.not.be.undefined;
  expect(Object.keys(disclosed).length).to.gte(1)

  const presentationSubmissionJSON = await pollux.createPresentationSubmission(
    presentationDefinition,
    jwtCredential,
    holderPrv
  );

  return {
    presentationDefinition,
    presentationSubmissionJSON,
    issuedJWS: signedJWT
  }
}

describe("Pollux", () => {
  let apollo: Apollo;
  let pollux: Pollux;
  let castor: Castor;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    apollo = new Apollo();
    castor = new Castor(apollo);
    pollux = new Pollux(apollo, castor);
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

        const result = msg.credentialFormat;

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

          const result = msg.credentialFormat;

          expect(result).to.eql(expected);
        });
      };

      jwtFormats.forEach(x => testMultipleFn(x, CredentialType.JWT));
      anoncredsFormats.forEach(x => testMultipleFn(x, CredentialType.AnonCreds));
      unknownFormats.forEach(x => testMultipleFn(x, CredentialType.Unknown));
    });
  });

  describe("parseCredential", () => {
    it("Should throw an error if the credential unknown type is parsed", async () => {
      expect(
        pollux.parseCredential(Buffer.from(JSON.stringify({ claims: { name: 'any' } })), { type: CredentialType.Unknown })
      ).to.eventually.be.rejected;
    })
    it("Should throw an error if the credential unknown type is undefined", async () => {
      expect(
        pollux.parseCredential(Buffer.from(JSON.stringify({ claims: { name: 'any' } })))
      ).to.eventually.be.rejected;
    })
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


      describe("Valid Credential", () => {

        it(`should return JWTVerifiableCredential`, async () => {
          const credential = Fixtures.Credentials.JWT.credential;
          const jwtPayload = Fixtures.Credentials.JWT.credentialPayload;
          const result = await pollux.parseCredential(Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded), {
            type: CredentialType.JWT,
          });

          expect(result).to.not.be.undefined;
          expect(result).to.be.instanceOf(JWTCredential);

          const jwtCred = result as JWTCredential;

          expect(jwtCred.id).to.equal(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          // expect(jwtCred.aud).to.be.deep.equal(jwtPayload.aud);
          expect(jwtCred['context']).to.be.deep.equal(credential['@context']);
          expect(jwtCred.credentialSubject).to.be.deep.equal(
            credential.credentialSubject
          );
          expect(jwtCred.expirationDate).to.be.equal(
            new Date(jwtPayload[JWTVerifiableCredentialProperties.exp] * 1000).toISOString()
          );
          expect(jwtCred.issuanceDate).to.be.equal(
            new Date(jwtPayload[JWTVerifiableCredentialProperties.nbf] * 1000).toISOString()
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

        const issuanceDate = new Date(nbf * 1000).toISOString();
        const expirationDate = new Date(exp * 1000).toISOString();

        expect(result.issuanceDate).to.equal(issuanceDate);
        expect(result.expirationDate).to.equal(expirationDate);
      });

      it("should be able to recover JTI from a toStorable", async () => {
        const result = await pollux.parseCredential(
          Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded),
          {
            type: CredentialType.JWT,
          }
        ) as JWTCredential;

        const storable = result.toStorable();

        expect(storable).to.be.an("object");
        expect(storable).to.have.property("id");
        expect(storable.id).to.equal(Fixtures.Credentials.JWT.credentialPayloadEncoded);
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

        const pr = new PresentationRequest(AttachmentFormats.AnonCreds, Fixtures.Credentials.Anoncreds.presentationRequest);
        const cred = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

        const result = await pollux.createPresentationProof(pr, cred, { linkSecret: Fixtures.Credentials.Anoncreds.linkSecret });

        expect(result).not.to.be.null;
      });
    });

    describe("JWT", () => {
      test("ok", async () => {

        const pr = new PresentationRequest(AttachmentFormats.JWT, Fixtures.Credentials.JWT.presentationRequest);
        const cred = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const did = Fixtures.DIDs.peerDID1;
        const privateKey = Fixtures.Keys.secp256K1.privateKey;

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
            Fixtures.Credentials.Anoncreds.presentationRequest.requested_predicates.age1.name
          );
          expect(geProof.predicate).to.have.property("p_type", "GE");
          expect(geProof.predicate).to.have.property(
            "value",
            Fixtures.Credentials.Anoncreds.presentationRequest.requested_predicates.age1.p_value
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

      expect(result.values)
        .to.have.property("age")
        .to.deep.equal(Fixtures.Credentials.Anoncreds.credentialIssued.values.age)

      expect(result.values)
        .to.have.property("name")
        .to.deep.equal(Fixtures.Credentials.Anoncreds.credentialIssued.values.name)

    });
  });

  describe("JWT SDK Verification", () => {
    let apollo: Apollo;
    let castor: Castor;
    let jwt: JWTCore<JWTInstanceType.JWT>;
    let pollux: Pollux;

    beforeEach(async () => {
      jest.restoreAllMocks();

      const Pollux = jest.requireActual("../../src/pollux/Pollux").default;
      const Castor = jest.requireActual("../../src/castor/Castor").default;
      const Apollo = jest.requireActual("../../src/apollo/Apollo").default;
      const JWT = jest.requireActual("../../src/pollux/utils/JWT").JWT;

      apollo = new Apollo();
      castor = new Castor(apollo);
      jwt = new JWT(apollo, castor)
      pollux = new Pollux(
        apollo,
        castor,
        undefined,
        jwt
      )

      await pollux.start()

    })


    describe("JWT", () => {
      test("secp256k1 ok", async () => {

        const pr = new PresentationRequest(AttachmentFormats.JWT, Fixtures.Credentials.JWT.presentationRequest);
        const cred = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const did = Fixtures.DIDs.peerDID1;
        const privateKey = Fixtures.Keys.secp256K1.privateKey;

        const result = await pollux.createPresentationProof(pr, cred, {
          did,
          privateKey
        });

        expect(result).not.to.be.null;
      });
    });

    describe("SDJWT", () => {
      test("X25519 not ok", async () => {

        const sdjwt = new SDJWT(apollo, castor);
        const claims = {
          firstname: 'John',
          lastname: 'Doe',
          ssn: '123-45-6789',
          id: '1234',
        };

        const issuerSeed = apollo.createRandomSeed().seed;
        const sk = apollo.createPrivateKey({
          type: KeyTypes.Curve25519,
          curve: Curve.X25519,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });
        const masterSk = apollo.createPrivateKey({
          type: KeyTypes.Curve25519,
          curve: Curve.X25519,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });
        const issuerDID = await castor.createPrismDID(
          masterSk.publicKey(),
          [],
          [
            sk.publicKey()
          ]
        )

        const payload = {
          issuerDID: issuerDID,
          payload: {
            iss: issuerDID.toString(),
            iat: new Date().getTime(),
            vct: 'http://example.com',
            ...claims
          },
          disclosureFrame: {},
          privateKey: sk
        }
        expect(sdjwt.sign<typeof claims>(payload)).to.eventually.be.rejectedWith("Cannot sign with this key")


      })

      test("Ed25519 ok", async () => {

        const sdjwt = new SDJWT(apollo, castor);
        const claims = {
          firstname: 'John',
          lastname: 'Doe',
          ssn: '123-45-6789',
          id: '1234',
        };

        const issuerSeed = apollo.createRandomSeed().seed;
        const sk = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.ED25519,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });
        const masterSk = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.ED25519,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });
        const issuerDID = await castor.createPrismDID(
          masterSk.publicKey(),
          [],
          [
            sk.publicKey()
          ]
        )
        const credential = await sdjwt.sign<typeof claims>({
          issuerDID: issuerDID,
          payload: {
            iss: issuerDID.toString(),
            iat: new Date().getTime(),
            vct: 'http://example.com',
            ...claims
          },
          disclosureFrame: {},
          privateKey: sk
        });

        const [header, payload, signature] = credential.replace("~", "").split(".");
        const [onlySignature, ...disclosures] = signature.split(",");

        const parseCredential = await pollux.parseCredential(
          Buffer.from(JSON.stringify({
            protected: header,
            payload: payload,
            signature: onlySignature,
            disclosures: disclosures
          })),
          {
            type: CredentialType.SDJWT
          }
        )

        const isCorrectCredential = parseCredential instanceof SDJWTCredential
        expect(isCorrectCredential).to.eq(true)

        const presentation = await sdjwt.createPresentationFor<typeof claims>(
          {
            jws: credential,
            frame: { firstname: true, id: true },
            privateKey: sk
          }
        )

        const verified = await sdjwt.verify({
          issuerDID: issuerDID,
          jws: presentation,
          requiredClaimKeys: ['firstname', 'id']
        });

        expect(verified).to.equal(true)

      })


      test("Secp256k1 ok", async () => {

        const sdjwt = new SDJWT(apollo, castor);
        const claims = {
          firstname: 'John',
          lastname: 'Doe',
          ssn: '123-45-6789',
          id: '1234',
        };

        const issuerSeed = apollo.createRandomSeed().seed;
        const sk = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });
        const issuerDID = await castor.createPrismDID(
          sk.publicKey(),
          []
        )
        const credential = await sdjwt.sign<typeof claims>({
          issuerDID: issuerDID,
          payload: {
            iss: issuerDID.toString(),
            iat: new Date().getTime(),
            vct: 'http://example.com',
            ...claims
          },
          disclosureFrame: {},
          privateKey: sk
        });

        const presentation = await sdjwt.createPresentationFor<typeof claims>(
          {
            jws: credential,
            frame: { firstname: true, id: true },
            privateKey: sk
          }
        )
        const verified = await sdjwt.verify({
          issuerDID: issuerDID,
          jws: presentation,
          requiredClaimKeys: ['firstname', 'id']
        });

        expect(verified).to.equal(true)

        const pr = new PresentationRequest(
          AttachmentFormats.SDJWT, Fixtures.Credentials.SDJWT.presentationRequest
        );
        const [header, payload, signature] = credential.replace("~", "").split(".");
        const [onlySignature, ...disclosures] = signature.split(",");
        const parseCredential = await pollux.parseCredential(
          Buffer.from(JSON.stringify({
            protected: header,
            payload: payload,
            signature: onlySignature,
            disclosures: disclosures
          })),
          {
            type: CredentialType.SDJWT
          }
        )
        const result = await pollux.createPresentationProof(pr, parseCredential, {
          did: issuerDID,
          privateKey: sk
        });
        expect(result).not.to.be.null;
      })


    })

    it("Should throw an error a non signable key is used", async () => {
      const issuer = DID.fromString("did:issuer:123")
      const payload: JWTCredentialPayload = {
        iss: issuer.toString(),
        sub: undefined as any,
        nbf: false as any,
        exp: 2134564321,
        vc: {} as any
      }
      expect(jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.x25519.privateKey,
        payload: payload,
      })).to.eventually.be.rejectedWith("Key is not signable")
    })

    it("Should throw an error when nbf is not number in jwt credential", async () => {
      const issuer = DID.fromString("did:issuer:123")
      const payload: JWTCredentialPayload = {
        iss: issuer.toString(),
        sub: undefined as any,
        nbf: false as any,
        exp: 2134564321,
        vc: {} as any
      }
      const jwtString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: payload,
      })

      assert.throws(
        () => {
          const a = JWTCredential.fromJWS(jwtString)
          JWTCredential.fromJWS(jwtString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid nbf in credential payload should be number"
      );
    })

    it("Should throw an error when nbf is not number in jwt credential, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTCredentialPayload> = {
        iss: issuer.toString(),
        sub: undefined as any,
        nbf: false as any,
        vc: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid nbf in credential payload should be number"
      );

      const validPayload = {
        iss: issuer.toString(),
        sub: undefined as any,
        vc: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })

    it("Should throw an error when exp is not number in jwt credential, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTCredentialPayload> = {
        iss: issuer.toString(),
        sub: undefined as any,
        exp: false as any,
        vc: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid exp in credential payload should be number"
      );

      const validPayload = {
        iss: issuer.toString(),
        sub: undefined as any,
        vc: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })


    it("Should throw an error when sub is not string in jwt credential, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTCredentialPayload> = {
        iss: issuer.toString(),
        sub: false as any,
        vc: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid sub in credential payload should be string"
      );

      const validPayload = {
        iss: issuer.toString(),
        vc: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    });

    it("should throw an error when calling verifiableCredential on a presentation", async () => {
      const issuer = DID.fromString("did:issuer:123");
      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        vp: {} as any
      }
      const invalidJWTPresentationString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })
      const credential = JWTCredential.fromJWS(invalidJWTPresentationString)
      assert.throws(
        () => {
          credential.verifiableCredential()
        },
        PolluxError.InvalidCredentialError,
        "Invalid payload is not VC"
      );

      const validCredential = JWTCredential.fromJWS(
        Fixtures.Credentials.JWT.credentialPayloadEncoded
      )

      validCredential.verifiableCredential()
    })

    it("should throw an error when calling subject on a presentation", async () => {
      const issuer = DID.fromString("did:issuer:123");
      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        vp: {} as any
      }
      const invalidJWTPresentationString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })
      const credential = JWTCredential.fromJWS(invalidJWTPresentationString)
      assert.throws(
        () => {
          credential.subject
        },
        PolluxError.InvalidCredentialError,
        "Subject is only available in a VC"
      );
    })

    it("should throw an error when calling presentation on a presentation", async () => {
      const issuer = DID.fromString("did:issuer:123");
      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        vp: {} as any
      }
      const invalidJWTPresentationString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })
      const credential = JWTCredential.fromJWS(invalidJWTPresentationString)
      assert.throws(
        () => {
          credential.presentation()
        },
        PolluxError.InvalidCredentialError,
        "Invalid payload is not VC"
      );
    })

    it("Should throw an error when aud is not string in jwt presentation, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        aud: false as any,
        vp: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid aud in presentation payload should be string"
      );

      const validPayload = {
        iss: issuer.toString(),
        vp: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })

    it("Should throw an error when exp is not string in jwt presentation, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        exp: false as any,
        vp: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid exp in presentation payload should be number"
      );

      const validPayload = {
        iss: issuer.toString(),
        vp: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })

    it("Should throw an error when nbf is not string in jwt presentation, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        nbf: false as any,
        vp: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid nbf in presentation payload should be number"
      );

      const validPayload = {
        iss: issuer.toString(),
        vp: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })

    it("Should throw an error when vp is not object in jwt presentation", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        vp: false as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid vp in presentation payload should be an object"
      );

    })


    it("Should throw an error when nonce is not string in jwt presentation, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTPresentationPayload> = {
        iss: issuer.toString(),
        nonce: false as any,
        vp: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid nonce in presentation payload should be string"
      );

      const validPayload = {
        iss: issuer.toString(),
        vp: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })

    it("Should throw an error when aud is not string in jwt credential, not specifying is okey", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTCredentialPayload> = {
        iss: issuer.toString(),
        aud: false as any,
        vc: {} as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid aud in credential payload should be string"
      );

      const validPayload = {
        iss: issuer.toString(),
        vc: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })

    it("Should throw an error when vc is not object in jwt credential", async () => {
      const issuer = DID.fromString("did:issuer:123");

      const invalidPayload: Partial<JWTCredentialPayload> = {
        iss: issuer.toString(),
        vc: false as any
      }
      const invalidJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: invalidPayload,
      })

      assert.throws(
        () => {
          JWTCredential.fromJWS(invalidJWTString)
        },
        PolluxError.InvalidCredentialError,
        "Invalid vc in credential payload should be an object"
      );

      const validPayload = {
        iss: issuer.toString(),
        vc: {} as any
      }

      const validJWTString = await jwt.sign({
        issuerDID: issuer,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: validPayload,
      })

      JWTCredential.fromJWS(validJWTString)

    })



    it("Should be able to create a presentationDefinitionRequest for a JWT Credential", async () => {

      const presentationDefinitionRequest = await pollux.createPresentationDefinitionRequest(
        CredentialType.JWT,
        {
          issuer: "did:prism:12345",
          claims: {
            name: {
              type: 'string',
              pattern: 'identus'
            }
          }
        },
        new PresentationOptions({
          challenge: 'sign this'
        })
      );

      const { presentation_definition } = presentationDefinitionRequest;

      expect(presentation_definition).haveOwnProperty("id");
      expect(presentation_definition).haveOwnProperty("format");
      expect(presentation_definition).haveOwnProperty("input_descriptors");


      expect(presentation_definition.format).haveOwnProperty("jwt");
      expect(Array.isArray(presentation_definition.input_descriptors)).to.eq(true)
      expect(presentation_definition.input_descriptors.length).to.eq(1)
      expect(presentation_definition.input_descriptors.at(0)).haveOwnProperty('constraints');
      expect(presentation_definition.input_descriptors.at(0)?.constraints.fields.length).to.eq(2);
      expect(presentation_definition.input_descriptors.at(0)?.constraints.fields[0].path.at(0)).to.eq('$.vc.credentialSubject.name')
      expect(presentation_definition.input_descriptors.at(0)?.constraints.fields[1].path.at(0)).to.eq('$.vc.issuer')

    });

    it("Should create and verify an Secp256k1 prism did JWS", async () => {
      const issuerDID = await castor.createPrismDID(
        Fixtures.Keys.secp256K1.privateKey.publicKey(),
        []
      )
      const payload: JWTCredentialPayload = {
        iss: issuerDID.toString(),
        sub: issuerDID.toString(),
        nbf: 23456543222,
        exp: 2134564321,
        vc: {} as any
      }

      const signed = await jwt.sign({
        issuerDID: issuerDID,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: payload,
      })

      const decoded = await jwt.decode(signed);
      expect(decoded).to.haveOwnProperty("header");

      expect(decoded.header).to.deep.equal({ alg: JWT_ALG.ES256K, typ: "JWT" })

      const verified = await jwt.verify({
        issuerDID: issuerDID,
        jws: signed
      })

      expect(verified).to.equal(true)
    })

    it("Should create and verify an Ed25519 prism did JWS", async () => {
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
      const issuerDID = await castor.createPrismDID(
        masterSk.publicKey(),
        [],
        [
          sk.publicKey()
        ]
      )
      const payload: JWTCredentialPayload = {
        iss: issuerDID.toString(),
        sub: issuerDID.toString(),
        nbf: 23456543222,
        exp: 2134564321,
        vc: {} as any
      }
      const signed = await jwt.sign({
        issuerDID: issuerDID,
        privateKey: sk,
        payload: payload,
      })
      const decoded = await jwt.decode(signed);
      expect(decoded).to.haveOwnProperty("header");
      expect(decoded.header).to.deep.equal({ alg: JWT_ALG.EdDSA, typ: "JWT" })
      const verified = await jwt.verify({
        issuerDID: issuerDID,
        holderDID: issuerDID,
        jws: signed
      })
      expect(verified).to.equal(true)
    })

    it("Should create and fail verifying an Secp256k1 prism did JWS with wrong issuer", async () => {
      const issuerSeed = apollo.createRandomSeed().seed;
      const sk = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });
      const issuerDID = await castor.createPrismDID(
        sk.publicKey(),
        []
      )
      const payload: JWTCredentialPayload = {
        iss: issuerDID.toString(),
        sub: issuerDID.toString(),
        nbf: 23456543222,
        exp: 2134564321,
        vc: {} as any
      }
      const signed = await jwt.sign({
        issuerDID: issuerDID,
        privateKey: sk,
        payload: payload,
      })
      const verified = await jwt.verify({
        issuerDID: DID.fromString("did:test:12345"),
        jws: signed
      })
      expect(verified).to.equal(false)
    })

    it("Should create and fail verifying an Secp256k1 prism did JWS with wrong issuer", async () => {
      const issuerDID = await castor.createPrismDID(
        Fixtures.Keys.secp256K1.privateKey.publicKey(),
        []
      )
      const payload: JWTCredentialPayload = {
        iss: issuerDID.toString(),
        sub: "did:test:12345",
        nbf: 23456543222,
        exp: 2134564321,
        vc: {} as any
      }

      const signed = await jwt.sign({
        issuerDID: issuerDID,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        payload: payload,
      })

      const verified = await jwt.verify({
        issuerDID: issuerDID,
        holderDID: DID.fromString("did:test:123457"),
        jws: signed
      })

      expect(verified).to.equal(false)

    })

    // it("Should Verify false when the presentation contains a credential that has been issued by an issuer with keys that don't match", async () => {

    //   const issuerSeed = apollo.createRandomSeed().seed;
    //   const holderSeed = apollo.createRandomSeed().seed;
    //   const wrongIssuerSeed = apollo.createRandomSeed().seed;

    //   const issuerPrv = apollo.createPrivateKey({
    //     type: KeyTypes.EC,
    //     curve: Curve.SECP256K1,
    //     seed: Buffer.from(issuerSeed.value).toString("hex"),
    //   });

    //   const wrongIssuerPrv = apollo.createPrivateKey({
    //     type: KeyTypes.EC,
    //     curve: Curve.SECP256K1,
    //     seed: Buffer.from(wrongIssuerSeed.value).toString("hex"),
    //   });

    //   const holderPrv = apollo.createPrivateKey({
    //     type: KeyTypes.EC,
    //     curve: Curve.SECP256K1,
    //     seed: Buffer.from(holderSeed.value).toString("hex"),
    //   });

    //   const issuerDID = await castor.createPrismDID(
    //     issuerPrv.publicKey()
    //   )

    //   const holderDID = await castor.createPrismDID(
    //     holderPrv.publicKey()
    //   )

    //   const {
    //     presentationDefinition,
    //     presentationSubmissionJSON,
    //     issuedJWS
    //   } = await createJWTVerificationTestCase({
    //     apollo,
    //     castor,
    //     jwt,
    //     pollux,
    //     issuer: issuerDID,
    //     holder: holderDID,
    //     holderPrv: holderPrv,
    //     issuerPrv: wrongIssuerPrv,
    //     subject: {
    //       course: 'Identus Training course Certification 2024'
    //     },
    //     claims: {
    //       course: {
    //         type: 'string',
    //         pattern: 'Identus Training course Certification 2024'
    //       }
    //     }
    //   });

    //   expect(pollux.verifyPresentationSubmission(presentationSubmissionJSON, {
    //     presentationDefinitionRequest: presentationDefinition
    //   })).to.eventually.be.rejectedWith(
    //     `Verification failed for credential (${issuedJWS.slice(0, 10)}...): reason -> Invalid Presentation Credential JWS Signature`
    //   );


    // })

    it("Should reject creating a PresentationDefinitionRequest is no AnoncredsPresentationOptions instance is sent", async () => {
      expect(
        pollux.createPresentationDefinitionRequest(
          CredentialType.AnonCreds,
          {
            attributes: {
              name: {
                name: 'name',
                restrictions: {
                  cred_def_id: "2345"
                }
              }
            },
            predicates: {},
          },
          {} as any
        )
      ).to.eventually.be.rejectedWith(
        "Required field options is undefined, should be AnoncredsPresentationOptions"
      );
    });

    it("Should create a PresentationDefinitionRequest for anoncreds Credential with no disclosed fields", async () => {
      const presentation = await pollux.createPresentationDefinitionRequest(
        CredentialType.AnonCreds,
        {
          predicates: {
            age: {
              name: "age",
              $gte: 18,
              type: "number"
            }
          },
        },
        new PresentationOptions({}, CredentialType.AnonCreds)
      );

      expect(presentation).to.haveOwnProperty("name");
      expect(presentation).to.haveOwnProperty("nonce");
      expect(presentation).to.haveOwnProperty("version");

      expect(presentation).to.haveOwnProperty("requested_attributes");
      expect(presentation).to.haveOwnProperty("requested_predicates");

      expect(presentation.name).to.equal("anoncreds_presentation_request");
      expect(presentation.version).to.equal("0.1");

      expect(presentation.requested_predicates).to.haveOwnProperty("age");

      expect(presentation.requested_predicates.age).to.haveOwnProperty("name");
      expect(presentation.requested_predicates.age).to.haveOwnProperty("p_type");
      expect(presentation.requested_predicates.age).to.haveOwnProperty("p_value");

      expect(presentation.requested_predicates.age.name).to.equal("age");
      expect(presentation.requested_predicates.age.p_type).to.equal(">=");
      expect(presentation.requested_predicates.age.p_value).to.equal(18);
    })

    it("Should Verify false when the presentation is signed with holder keys that don't match", async () => {
      const issuerSeed = apollo.createRandomSeed().seed;
      const holderSeed = apollo.createRandomSeed().seed;
      const wrongHolder = apollo.createRandomSeed().seed;

      const issuerPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });

      const wrongHolderPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(wrongHolder.value).toString("hex"),
      });

      const holderPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(holderSeed.value).toString("hex"),
      });

      const issuerDID = await castor.createPrismDID(
        issuerPrv.publicKey()
      )

      const holderDID = await castor.createPrismDID(
        holderPrv.publicKey()
      )

      const challenge = 'sign this';

      const {
        presentationDefinition,
        presentationSubmissionJSON,
        issuedJWS
      } = await createJWTVerificationTestCase({
        apollo,
        castor,
        jwt,
        pollux,
        challenge,
        issuer: issuerDID,
        holder: holderDID,
        holderPrv: wrongHolderPrv,
        issuerPrv: issuerPrv,
        subject: {
          course: 'Identus Training course Certification 2024'
        },
        claims: {
          course: {
            type: 'string',
            pattern: 'Identus Training course Certification 2024'
          }
        }
      });

      expect(pollux.verifyPresentationSubmission(presentationSubmissionJSON, {
        presentationDefinitionRequest: presentationDefinition
      })).to.eventually.be.rejectedWith(
        `Verification failed for credential (${issuedJWS.slice(0, 10)}...): reason -> Invalid Holder Presentation JWS Signature`
      );
    })

    it("Should Verify false when the Credential Subject does not match", async () => {
      const issuerSeed = apollo.createRandomSeed().seed;
      const holderSeed = apollo.createRandomSeed().seed;

      const issuerPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });

      const holderPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(holderSeed.value).toString("hex"),
      });


      const issuerDID = await castor.createPrismDID(
        issuerPrv.publicKey()
      )

      const holderDID = await castor.createPrismDID(
        holderPrv.publicKey()
      )

      const {
        presentationDefinition,
        presentationSubmissionJSON,
        issuedJWS
      } = await createJWTVerificationTestCase({
        apollo,
        castor,
        jwt,
        pollux,
        issuer: issuerDID,
        holder: holderDID,
        holderPrv: holderPrv,
        issuerPrv: issuerPrv,
        subject: {
          course: 'Identus Training course Certification 2023'
        },
        claims: {
          course: {
            type: 'string',
            pattern: 'Identus Training course Certification 2024'
          }
        }
      });

      expect(pollux.verifyPresentationSubmission(presentationSubmissionJSON, {
        presentationDefinitionRequest: presentationDefinition
      })).to.eventually.be.rejectedWith(
        `Verification failed for credential (${issuedJWS.slice(0, 10)}...): reason -> Invalid Claim: Expected the $.credentialSubject.course field to be "Identus Training course Certification 2024" but got "Identus Training course Certification 2023"`
      );
    })

    it("Should throw an error if presentationSubmission is not an object", async () => {
      expect(pollux.verifyPresentationSubmission(null as any, {
        presentationDefinitionRequest: null as any
      })).to.eventually.be.rejectedWith(
        `Verification format is invalid: reason -> Invalid Submission, only JWT or Anoncreds are supported`
      );
    })

    it("Should throw an error if the actual presentationSubmission is not an object", async () => {
      expect(pollux.verifyPresentationSubmission({ presentation_submission: null, verifiablePresentation: null } as any, {
        presentationDefinitionRequest: null as any
      })).to.eventually.be.rejectedWith(
        `Verification format is invalid: reason -> Invalid Submission, only JWT or Anoncreds are supported`
      );
    })

    it("Should throw an error if the actual presentationSubmission options presentationDefinitionRequest is not an undefined", async () => {
      expect(pollux.verifyPresentationSubmission(
        { presentation_submission: {}, verifiablePresentation: [] } as any,
        {
          presentationDefinitionRequest: undefined
        } as any
      )).to.eventually.be.rejectedWith(
        `VerifyPresentationSubmission options are invalid`
      );
    })

    it("Should Verify false when the Credential subject does not provide required field", async () => {
      const issuerSeed = apollo.createRandomSeed().seed;
      const holderSeed = apollo.createRandomSeed().seed;

      const issuerPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });

      const holderPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(holderSeed.value).toString("hex"),
      });


      const issuerDID = await castor.createPrismDID(
        issuerPrv.publicKey()
      )

      const holderDID = await castor.createPrismDID(
        holderPrv.publicKey()
      )

      const {
        presentationDefinition,
        presentationSubmissionJSON,
        issuedJWS
      } = await createJWTVerificationTestCase({
        apollo,
        castor,
        jwt,
        pollux,
        issuer: issuerDID,
        holder: holderDID,
        holderPrv: holderPrv,
        issuerPrv: issuerPrv,
        subject: {
          course2: 'Identus Training course Certification 2024'
        },
        claims: {
          course: {
            type: 'string',
            pattern: 'Identus Training course Certification 2024'
          }
        }
      });

      expect(pollux.verifyPresentationSubmission(presentationSubmissionJSON, {
        presentationDefinitionRequest: presentationDefinition
      })).to.eventually.be.rejectedWith(
        `Verification failed for credential (${issuedJWS.slice(0, 10)}...): reason -> Invalid Claim: Expected one of the paths $.vc.credentialSubject.course, $.credentialSubject.course to exist.`
      );
    })

    it("Should Verify true when the presentation and the credential are completely valid", async () => {
      const issuerSeed = apollo.createRandomSeed().seed;
      const holderSeed = apollo.createRandomSeed().seed;

      const issuerPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });

      const holderPrv = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(holderSeed.value).toString("hex"),
      });

      const issuerDID = await castor.createPrismDID(
        issuerPrv.publicKey()
      )

      const holderDID = await castor.createPrismDID(
        holderPrv.publicKey()
      )

      const {
        presentationDefinition,
        presentationSubmissionJSON,
      } = await createJWTVerificationTestCase({
        apollo,
        castor,
        jwt,
        pollux,
        //Play with this data in order to build tests
        issuer: issuerDID,
        holder: holderDID,
        holderPrv: holderPrv,
        issuerPrv: issuerPrv,
        subject: {
          course: 'Identus Training course Certification 2024'
        },
        claims: {
          course: {
            type: 'string',
            pattern: 'Identus Training course Certification 2024'
          }
        }
      });
      expect(pollux.verifyPresentationSubmission(presentationSubmissionJSON, {
        presentationDefinitionRequest: presentationDefinition
      })).to.eventually.equal(true)
    })

    it("Should Reject Creating a Presentation with a Credential that doesn't have the requested field 'email'", async () => {
      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

      sandbox.stub(pollux as any, "fetchSchema").resolves(Fixtures.Credentials.Anoncreds.schema);
      sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

      const issuerDID = DID.fromString('did:web:xyz')


      expect(createAnoncredsVerificationTestCase({
        apollo,
        castor,
        pollux,
        credential,
        claims: {
          predicates: {
            age1: {
              name: "age",
              type: 'string',
              $gte: 5
            }
          },
          attributes: {
            name1: {
              name: "name",
              restrictions: {
                cred_def_id: `${issuerDID.toString()}/resource/definition`,
              },
            },
            email1: {
              name: "email",
              restrictions: {
                cred_def_id: `${issuerDID.toString()}/resource/definition`,
              },
            },
          }
        }
      })).to.eventually.be.rejectedWith(
        'AnoncredsError Credential value not found for attribute "email"'
      );

    })

    it("Should Reject Creating a Presentation with a Credential that doesn't have predicates", async () => {
      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

      sandbox.stub(pollux as any, "fetchSchema").resolves(Fixtures.Credentials.Anoncreds.schema);
      sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);


      expect(createAnoncredsVerificationTestCase({
        apollo,
        castor,
        pollux,
        credential,
        claims: {
          predicates: {

          },
          attributes: {

          }
        }
      })).to.eventually.be.rejectedWith(
        'AnoncredsError No credential mapping or self-attested attributes presented'
      );

    })
  })

  it("Should Reject Creating a Presentation with a Credential that doesn't have valid predicates", async () => {
    const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

    sandbox.stub(pollux as any, "fetchSchema").resolves(Fixtures.Credentials.Anoncreds.schema);
    sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

    const issuerDID = DID.fromString('did:web:xyz')


    expect(createAnoncredsVerificationTestCase({
      apollo,
      castor,
      pollux,
      credential,
      claims: {
        predicates: {
          age1: {
            name: "age",
            type: 'string',
            $gte: 50
          }
        },
        attributes: {
          name1: {
            name: "name",
            restrictions: {
              cred_def_id: `${issuerDID.toString()}/resource/definition`,
            },
          },
        }
      }
    })).to.eventually.be.rejectedWith(
      'AnoncredsError Error: Invalid structure\nCaused by: Predicate is not satisfied\n'
    );

  })

  it("Should Verify to true when an Anoncreds Presentation submission with all valid attributes and predicates are used", async () => {
    const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
    const wrong = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);

    sandbox.stub(pollux as any, "fetchSchema").resolves(Fixtures.Credentials.Anoncreds.schema);
    sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

    const issuerDID = DID.fromString('did:web:xyz')

    const disclosed = await pollux.revealCredentialFields(credential, ['name'], Fixtures.Credentials.Anoncreds.linkSecret.secret)
    expect(disclosed).to.not.be.undefined;
    expect(disclosed).to.haveOwnProperty("name");
    expect(disclosed.name).to.eq("test");

    expect(pollux.revealCredentialFields(credential, ['name'])).to.eventually.be.rejected


    const {
      presentationDefinition,
      presentationSubmissionJSON,
    } = await createAnoncredsVerificationTestCase({
      apollo,
      castor,
      pollux,
      credential,
      claims: {
        predicates: {
          age1: {
            name: "age",
            type: 'string',
            $gte: 18
          }
        },
        attributes: {
          name1: {
            name: "name",
            restrictions: {
              cred_def_id: `${issuerDID.toString()}/resource/definition`,
            },
          },
        }
      }
    })

    expect(pollux.verifyPresentationSubmission(presentationSubmissionJSON, {
      presentationDefinitionRequest: presentationDefinition
    })).to.eventually.equal(true)
  })

  it("Should Verify to false when an Anoncreds Presentation submission with invalid attributes and predicates are used", async () => {
    sandbox.stub(pollux as any, "fetchSchema").resolves(Fixtures.Credentials.Anoncreds.schema);
    sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);
    const issuerDID = DID.fromString('did:web:xyz');
    const presentationDefinition = await pollux.createPresentationDefinitionRequest(
      CredentialType.AnonCreds,
      {
        predicates: {
          age1: {
            name: "age",
            type: 'string',
            $gte: 2
          }
        },
        attributes: {
          name1: {
            name: "name",
            restrictions: {
              cred_def_id: `${issuerDID.toString()}/resource/definition`,
            },
          },
        }
      },
      new PresentationOptions({}, CredentialType.AnonCreds)
    );
    expect(pollux.verifyPresentationSubmission(Fixtures.Credentials.Anoncreds.underAgeSubmission, {
      presentationDefinitionRequest: presentationDefinition
    })).to.eventually.equal(false)
  })

  it("Should Reject Creating an Anoncreds Presentation Submission using an invalid LinkSecret", async () => {
    const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
    expect(pollux.createPresentationSubmission<CredentialType.AnonCreds>(
      Fixtures.Credentials.Anoncreds.presentationRequest,
      credential,
      null as any
    )).to.eventually.be.rejectedWith(
      'Required a valid link secret for a Anoncreds Presentation submission'
    );

  })

  it("Should Reject Creating an Anoncreds Presentation Submission using an invalid LinkSecret", async () => {
    const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
    expect(pollux.createPresentationSubmission<CredentialType.AnonCreds>(
      null as any,
      credential,
      Fixtures.Credentials.Anoncreds.linkSecret
    )).to.eventually.be.rejectedWith(
      'Serialization Error: invalid type: unit value, expected struct PresentationRequestPayload'
    );

  })

  it("Should Reject Creating an Anoncreds Presentation Submission using an presentationDefinition", async () => {
    const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
    expect(pollux.createPresentationSubmission<CredentialType.AnonCreds>(
      null as any,
      credential,
      Fixtures.Credentials.Anoncreds.linkSecret
    )).to.eventually.be.rejectedWith(
      'Serialization Error: invalid type: unit value, expected struct PresentationRequestPayload'
    );

  })

  it("Should Reject Creating an Anoncreds Presentation Submission using a wrong JWT Credential", async () => {
    const credential = new JWTCredential(Fixtures.Credentials.JWT.credentialPayload)
    expect(pollux.createPresentationSubmission<CredentialType.AnonCreds>(
      Fixtures.Credentials.Anoncreds.presentationRequest,
      credential,
      Fixtures.Credentials.Anoncreds.linkSecret
    )).to.eventually.be.rejectedWith(
      'Required a valid Anoncreds Credential for Anoncreds Presentation submission'
    );

  })



  it("Should correctly determine that a Credential is revoked when calling the credentialStatus [EcdsaSecp256k1Signature2019] list endpoints", async () => {
    const revocableJWTCredential = `eyJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6cHJpc206YmM5ZGFhZWFmMGFkNjczZjVkNTViM2I2NjEyYTE2NTNiYzcyYWMxNjU5Y2VmYTgxYzZlZWY0NWMxZjcyMTYzOTpDcmtCQ3JZQkVqb0tCbUYxZEdndE1SQUVTaTRLQ1hObFkzQXlOVFpyTVJJaEFqRDNnM3ctcHNnRXZQcUJxUDJmVjhPQXAwQ0l3WjVYU3FhMU9OWU1HOGRQRWpzS0IybHpjM1ZsTFRFUUFrb3VDZ2x6WldOd01qVTJhekVTSVFQRGNPbm9BV25YODBhZnA2aVVEZUl6ZUViMXMySFVPUEo5TEpRRTd1RzdYeEk3Q2dkdFlYTjBaWEl3RUFGS0xnb0pjMlZqY0RJMU5tc3hFaUVDc3luYTRsbkw3anhfSnctTXUtUjd3UUppSnhCNGpnMWUwODN1Q252amNhSSIsInN1YiI6ImRpZDpwcmlzbTozZjBiNDQ5NjI3NmI3NGEzMTU3ZmRiOTEwODU5MDExYjhjZWQwNjU1ZGYyNWU3ZjgwNTAyZjE0OGU2NmM1NGU4OkN0OEJDdHdCRW5RS0gyRjFkR2hsYm5ScFkyRjBhVzl1WVhWMGFHVnVkR2xqWVhScGIyNUxaWGtRQkVKUENnbHpaV053TWpVMmF6RVNJS0ZpZjRlcnNMOFF2SFF2VmxXUEFNaHFPNmwzbXZSbUp5ZlRFRTYzZzI2MEdpRG9PNS1KRzR3Z1JkZk1LcXlqZnp2ek9sSXRsNDNsdDQ0Z21TMWxtaFpKZUJKa0NnOXRZWE4wWlhKdFlYTjBaWEpMWlhrUUFVSlBDZ2x6WldOd01qVTJhekVTSUtGaWY0ZXJzTDhRdkhRdlZsV1BBTWhxTzZsM212Um1KeWZURUU2M2cyNjBHaURvTzUtSkc0d2dSZGZNS3F5amZ6dnpPbEl0bDQzbHQ0NGdtUzFsbWhaSmVBIiwibmJmIjoxNzE1MDA2OTY4LCJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJlbWFpbEFkZHJlc3MiOiJjb3Jwb3JhdGVAZG9tYWluLmNvbSIsImRyaXZpbmdDbGFzcyI6MSwiZHJpdmluZ0xpY2Vuc2VJRCI6IkVTLTEyMzQ1Njc4OTAiLCJpZCI6ImRpZDpwcmlzbTozZjBiNDQ5NjI3NmI3NGEzMTU3ZmRiOTEwODU5MDExYjhjZWQwNjU1ZGYyNWU3ZjgwNTAyZjE0OGU2NmM1NGU4OkN0OEJDdHdCRW5RS0gyRjFkR2hsYm5ScFkyRjBhVzl1WVhWMGFHVnVkR2xqWVhScGIyNUxaWGtRQkVKUENnbHpaV053TWpVMmF6RVNJS0ZpZjRlcnNMOFF2SFF2VmxXUEFNaHFPNmwzbXZSbUp5ZlRFRTYzZzI2MEdpRG9PNS1KRzR3Z1JkZk1LcXlqZnp2ek9sSXRsNDNsdDQ0Z21TMWxtaFpKZUJKa0NnOXRZWE4wWlhKdFlYTjBaWEpMWlhrUUFVSlBDZ2x6WldOd01qVTJhekVTSUtGaWY0ZXJzTDhRdkhRdlZsV1BBTWhxTzZsM212Um1KeWZURUU2M2cyNjBHaURvTzUtSkc0d2dSZGZNS3F5amZ6dnpPbEl0bDQzbHQ0NGdtUzFsbWhaSmVBIiwiZGF0ZU9mSXNzdWFuY2UiOiIyMDIzLTAxLTAxVDAyOjAyOjAyWiJ9LCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sIkBjb250ZXh0IjpbImh0dHBzOlwvXC93d3cudzMub3JnXC8yMDE4XC9jcmVkZW50aWFsc1wvdjEiXSwiY3JlZGVudGlhbFN0YXR1cyI6eyJzdGF0dXNQdXJwb3NlIjoiUmV2b2NhdGlvbiIsInN0YXR1c0xpc3RJbmRleCI6MSwiaWQiOiJodHRwOlwvXC8xOTIuMTY4LjE1NC4yMDU6ODAwMFwvcHJpc20tYWdlbnRcL2NyZWRlbnRpYWwtc3RhdHVzXC8xYzE1Yjk2My1kYzRkLTQ3NjUtYjc1Mi01M2EzZmQxZjE4MzMjMSIsInR5cGUiOiJTdGF0dXNMaXN0MjAyMUVudHJ5Iiwic3RhdHVzTGlzdENyZWRlbnRpYWwiOiJodHRwOlwvXC8xOTIuMTY4LjE1NC4yMDU6ODAwMFwvcHJpc20tYWdlbnRcL2NyZWRlbnRpYWwtc3RhdHVzXC8xYzE1Yjk2My1kYzRkLTQ3NjUtYjc1Mi01M2EzZmQxZjE4MzMifX19.NxuJoiEgSnGs7suM5cxDq3tZ6ZYVDAscnKBuAXghW0KD9MhSr1vBUo9F6y0YkjhHBY4Y_gTGnIMBwgLYjcNVKw`;

    sandbox.stub(pollux as any, "fetchRevocationRegistry").resolves(
      {
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3YxIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwia2V5X29wcyI6WyJ2ZXJpZnkiXSwia3R5IjoiRUMiLCJ4IjoiVFlCZ21sM1RpUWRSX1lRRDFoSXVOTzhiUnluU0otcmxQcWFVd3JXa3EtRT0iLCJ5IjoiVjBnVFlBM0xhbFd3Q3hPZHlqb2ZoR2JkYVFEd3EwQXdCblNodFJLXzNYZz0ifX0=",
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }
    );

    const credential = JWTCredential.fromJWS(revocableJWTCredential)
    const revoked = await pollux.isCredentialRevoked(credential)
    expect(revoked).to.eq(true)
    debugger;

  })


});
