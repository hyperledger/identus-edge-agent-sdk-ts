import { expect } from "chai";
import { Pluto } from "../../src/pluto/Pluto";
import { InMemoryStore } from "../fixtures/InMemoryStore";
import * as Fixtures from "../fixtures";
import * as Domain from "../../src/domain";
import { AnonCredsCredential, Apollo, JWTCredential } from "../../src";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    const apollo = new Apollo();
    const store = new InMemoryStore();
    instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("Credentials", () => {
    describe("JWT", () => {
      test("uuid set on store", async () => {
        const credential = new JWTCredential("did:peer:2.issuer", {}, "jwtString", 1680615608435, "did:peer:2.sub", 1680615608435, ["aud-json"], "jwtString");
        expect(credential.uuid).to.be.undefined;

        await instance.storeCredential(credential);
        expect(credential.uuid).to.be.a.string;
      });

      test("Retrieved should match Stored", async () => {
        const credentialIn = new JWTCredential(
          Fixtures.Credentials.JWT.credentialPayload.iss,
          Fixtures.Credentials.JWT.credentialPayload.vc,
          Fixtures.Credentials.JWT.credentialPayloadEncoded,
          Fixtures.Credentials.JWT.credentialPayload.nbf,
          Fixtures.Credentials.JWT.credentialPayload.sub,
          Fixtures.Credentials.JWT.credentialPayload.exp,
          // Fixtures.Credentials.JWT.credentialPayload.aud,
          ["aud"],
          Fixtures.Credentials.JWT.credentialPayloadEncoded
        );

        await instance.storeCredential(credentialIn);
        const data = await instance.getAllCredentials();

        const credentialOut = data[0];
        expect(data).not.empty;
        expect(credentialOut).to.be.instanceOf(JWTCredential);
        expect(credentialOut.claims).to.eql(credentialIn.claims);
        expect(credentialOut.id).to.eql(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        expect(credentialOut.id).to.eql(credentialIn.id);
        expect(credentialOut.issuer).to.eql(credentialIn.issuer);
        expect(credentialOut.recoveryId).to.eql(credentialIn.recoveryId);
        expect(credentialOut.subject).to.eql(credentialIn.subject);

        const jwtCred = credentialOut as JWTCredential;
        expect(jwtCred.aud).to.eql(credentialIn.aud);
        expect(jwtCred.context).to.eql(credentialIn.context);
        expect(jwtCred.credentialSchema).to.eql(credentialIn.credentialSchema);
        expect(jwtCred.credentialStatus).to.eql(credentialIn.credentialStatus);
        expect(jwtCred.credentialSubject).to.eql(credentialIn.credentialSubject);
        expect(jwtCred.credentialType).to.eql(credentialIn.credentialType);
        expect(jwtCred.evidence).to.eql(credentialIn.evidence);
        expect(jwtCred.exp).to.eql(credentialIn.exp);
        expect(jwtCred.expirationDate).to.eql(credentialIn.expirationDate);
        expect(jwtCred.iss).to.eql(credentialIn.iss);
        expect(jwtCred.issuanceDate).to.eql(credentialIn.issuanceDate);
        expect(jwtCred.jti).to.eql(credentialIn.jti);
        expect(jwtCred.nbf).to.eql(credentialIn.nbf);
        expect(jwtCred.originalJWTString).to.eql(credentialIn.originalJWTString);
        expect(jwtCred.refreshService).to.eql(credentialIn.refreshService);
        expect(jwtCred.sub).to.eql(credentialIn.sub);
        expect(jwtCred.termsOfUse).to.eql(credentialIn.termsOfUse);
        expect(jwtCred.type).to.eql(credentialIn.type);
        expect(jwtCred.vc).to.deep.eq(credentialIn.vc);
        expect(jwtCred.verifiableCredential).to.deep.eq(credentialIn.verifiableCredential);
      });
    });

    describe("Anoncreds", () => {
      test("uuid set on store", async () => {
        const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

        expect(credential.uuid).to.be.undefined;

        await instance.storeCredential(credential);

        expect(credential.uuid).to.be.a.string;
      });

      test("Retrieved should match Stored", async () => {
        const credentialIn = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

        await instance.storeCredential(credentialIn);
        const data = await instance.getAllCredentials();

        const credentialOut = data[0];
        expect(data).not.empty;
        expect(credentialOut).to.be.instanceOf(AnonCredsCredential);
        expect(credentialOut.claims).to.deep.eq(credentialIn.claims);
        expect(credentialOut.id).to.eq(credentialIn.id);
        expect(credentialOut.issuer).to.eq(credentialIn.issuer);
        expect(credentialOut.recoveryId).to.eq(credentialIn.recoveryId);
        expect(credentialOut.subject).to.eq(credentialIn.subject);

        const acCred = credentialOut as AnonCredsCredential;
        expect(acCred.credentialDefinitionId).to.eq(credentialIn.credentialDefinitionId);
        expect(acCred.credentialType).to.eq(credentialIn.credentialType);
        expect(acCred.schemaId).to.eq(credentialIn.schemaId);
      });
    });
  });
});
