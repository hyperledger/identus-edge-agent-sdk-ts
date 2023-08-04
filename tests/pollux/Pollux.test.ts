import { expect } from "chai";
import { CredentialType, JWTCredential } from "../../src/domain";
import Castor from "../../src/castor/Castor";
import { Apollo } from "../../src/domain/buildingBlocks/Apollo";
import { InvalidJWTString } from "../../src/domain/models/errors/Pollux";
import Pollux from "../../src/pollux/Pollux";
import * as Fixtures from "./fixtures";
import {
  cloudAgentCredentialJwt,
  cloudAgentCredentialPayload,
} from "./test-vectors";

const jwtParts = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
  "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
];
const jwtString = jwtParts.join(".");

describe("Pollux", () => {
  let pollux: Pollux;

  beforeEach(async () => {
    const apollo = {} as Apollo;
    const castor = new Castor(apollo);
    pollux = new Pollux(castor);
    await pollux.start();
  });

  describe("parseVerifiableCredential", () => {
    describe("Invalid JWT string", () => {
      ["", `${jwtParts[0]}`, `${jwtParts[0]}.${jwtParts[1]}`].forEach(
        (value) => {
          it(`should error when too few parts [${
            value.split(".").length
          }]`, () => {
            expect(() =>
              pollux.parseCredential(Buffer.from(value), {
                type: CredentialType.JWT,
              })
            ).throws(InvalidJWTString);
          });
        }
      );

      [
        `${jwtString}.${jwtParts[0]}`,
        `${jwtString}.${jwtParts[0]}.${jwtParts[1]}`,
      ].forEach((value) => {
        it(`should error when too many parts [${
          value.split(".").length
        }]`, () => {
          expect(() =>
            pollux.parseCredential(Buffer.from(value), {
              type: CredentialType.JWT,
            })
          ).throws(InvalidJWTString);
        });
      });

      it("should error when not encoded JSON", () => {
        const encoded = Buffer.from("a").toString("base64");
        const value = `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;

        expect(() =>
          pollux.parseCredential(Buffer.from(value), {
            type: CredentialType.JWT,
          })
        ).throws();
      });
    });

    const encodeCredential = (cred: object): string => {
      const json = JSON.stringify(cred);
      const encoded = Buffer.from(json).toString("base64");
      return `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;
    };

    describe("Valid Credential", () => {
      it(`should return JWTVerifiableCredential`, () => {
        const jwtPayload = Fixtures.createJWTPayload(
          "jwtid",
          "proof",
          CredentialType.JWT
        );
        const credential = jwtPayload.vc;
        const encoded = encodeCredential(jwtPayload);
        const result = pollux.parseCredential(Buffer.from(encoded), {
          type: CredentialType.JWT,
        });

        expect(result).to.be.instanceOf(JWTCredential);

        if (result instanceof JWTCredential) {
          expect(result).to.not.be.undefined;
          expect(result.id).to.equal(encoded);

          expect(result.aud).to.be.deep.equal(jwtPayload.aud);
          expect(result.context).to.be.deep.equal(credential.context);
          expect(result.credentialSubject).to.be.deep.equal(
            credential.credentialSubject
          );
          expect(result.credentialType).to.be.equal(credential.credentialType);

          expect(result.expirationDate).to.be.equal(
            new Date(jwtPayload.exp).toISOString()
          );
          expect(result.issuanceDate).to.be.equal(
            new Date(jwtPayload.nbf).toISOString()
          );

          expect(result.type).to.be.deep.equal(credential.type);

          expect(result.issuer.toString()).to.be.equal(jwtPayload.iss);
          expect(result.evidence).to.be.deep.equal(credential.evidence);
          expect(result.refreshService).to.deep.equal(
            credential.refreshService
          );
          expect(result.termsOfUse).to.deep.equal(credential.termsOfUse);

          expect(result.credentialSchema).to.be.deep.equal(
            credential.credentialSchema
          );
          expect(result.credentialStatus).to.be.deep.equal(
            credential.credentialStatus
          );
        }
      });
    });
  });

  describe("anoncreds", () => {
    beforeEach(async () => {
      await (pollux.anoncreds as any).load();
    });

    test("createLinkSecret", async () => {
      const result = pollux.anoncreds.createLinksecret();
      expect(result).to.be.a("string");
    });

    test("createCredentialRequest", () => {
      const result = pollux.anoncreds.createCredentialRequest(
        Fixtures.credOffer,
        Fixtures.credDef,
        Fixtures.linkSecret,
        "link-secret-id"
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
      expect(credReq.blinded_ms_correctness_proof).to.have.property(
        "v_dash_cap"
      );
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
        Fixtures.presRequest,
        Fixtures.schemas,
        Fixtures.credDefs,
        Fixtures.credential,
        Fixtures.linkSecret
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
            Fixtures.presRequest.requested_predicates.predicate1_referent.name
          );
          expect(geProof.predicate).to.have.property("p_type", "GE");
          expect(geProof.predicate).to.have.property(
            "value",
            Fixtures.presRequest.requested_predicates.predicate1_referent
              .p_value
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
        expect(identifier).to.have.property("schema_id", Fixtures.schemaId);
        expect(identifier).to.have.property("cred_def_id", Fixtures.credDefId);
      });
    });

    test("processCredential", () => {
      const result = pollux.anoncreds.processCredential(
        Fixtures.credDef,
        Fixtures.credentialIssued,
        Fixtures.credRequestMeta,
        Fixtures.linkSecret
      );

      expect(result).to.have.property("schema_id", Fixtures.schemaId);
      expect(result).to.have.property("cred_def_id", Fixtures.credDefId);
      expect(result).to.have.property("signature");
      expect(result).to.have.property("signature_correctness_proof");

      Fixtures.credentialIssued.values.forEach((value) => {
        expect(result.values)
          .to.have.property(value[0])
          .to.deep.equal(value[1]);
      });
    });
  });
  it("should parse JWT dates (NumericDate) correctly", () => {
    const nbf = cloudAgentCredentialPayload.nbf;
    const exp = cloudAgentCredentialPayload.exp;
    const result = pollux.parseCredential(
      Buffer.from(cloudAgentCredentialJwt),
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
