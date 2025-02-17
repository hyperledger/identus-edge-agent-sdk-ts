import { vi, describe, expect, test, beforeEach } from 'vitest';
import { AnoncredsLoader } from '../../../src/plugins/internal/anoncreds/module/AnoncredsLoader';
import * as Fixtures from "../../fixtures";

describe("Plugins - Anoncreds", () => {
  let anoncreds: AnoncredsLoader;

  beforeEach(() => {
    anoncreds = new AnoncredsLoader();
  });

  describe("Anoncreds", () => {
    beforeEach(async () => {
      await (anoncreds as any).load();
    });

    test("createLinkSecret", async () => {
      const result = await anoncreds.createLinksecret();
      expect(result).to.be.a("string");
    });

    test("createCredentialRequest", async () => {
      const result = await anoncreds.createCredentialRequest(
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

    test("createPresentation", async () => {
      const result = await anoncreds.createPresentation(
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

    test("processCredential", async () => {
      const result = await anoncreds.processCredential(
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
        .to.deep.equal(Fixtures.Credentials.Anoncreds.credentialIssued.values.age);

      expect(result.values)
        .to.have.property("name")
        .to.deep.equal(Fixtures.Credentials.Anoncreds.credentialIssued.values.name);

    });
  });
});
