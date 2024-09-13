import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';

import { Pluto } from "../../src/pluto/Pluto";
import InMemoryStore from "../fixtures/inmemory";
import * as Fixtures from "../fixtures";
import * as Domain from "../../src/domain";
import { AnonCredsCredential, Apollo, JWTCredential, Store } from "../../src";
import { randomUUID } from "crypto";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    const apollo = new Apollo();
    const store = new Store({
      name: "randomdb" + randomUUID(),
      storage: InMemoryStore,
      password: 'random12434',
      ignoreDuplicate: true
    });
    instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("Credentials", () => {
    describe("JWT", () => {
      test("uuid set on Domain instance - same after store", async () => {

        const sut = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded)
        const uuid = sut.uuid;
        expect(uuid).to.be.a.string;

        await instance.storeCredential(sut);
        expect(sut.uuid).to.be.a.string;
        expect(sut.uuid).to.eql(uuid);
      });

      test("Retrieved should match Stored", async () => {
        const credentialIn = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded)

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
        expect(jwtCred.audience).to.eql(credentialIn.audience);
        expect(jwtCred.context).to.eql(credentialIn.context);
        expect(jwtCred.credentialSchema).to.eql(credentialIn.credentialSchema);
        expect(jwtCred.credentialStatus).to.eql(credentialIn.credentialStatus);
        expect(jwtCred.credentialSubject).to.eql(credentialIn.credentialSubject);
        expect(jwtCred.credentialType).to.eql(credentialIn.credentialType);
        expect(jwtCred.evidence).to.eql(credentialIn.evidence);
        expect(jwtCred.expirationDate?.toString()).to.eql(credentialIn.expirationDate?.toString());
        expect(jwtCred.expirationDate).to.eql(credentialIn.expirationDate);
        expect(jwtCred.issuer).to.eql(credentialIn.issuer);
        expect(jwtCred.issuanceDate).to.eql(credentialIn.issuanceDate);
        expect(jwtCred.id).to.eql(credentialIn.id);
        expect(jwtCred.issuanceDate.toString()).to.eql(credentialIn.issuanceDate.toString());
        expect(jwtCred.refreshService).to.eql(credentialIn.refreshService);
        expect(jwtCred.subject).to.eql(credentialIn.subject);
        expect(jwtCred.termsOfUse).to.eql(credentialIn.termsOfUse);
        expect(jwtCred.type).to.eql(credentialIn.type);
        expect(jwtCred.vc).to.deep.eq(credentialIn.vc);
      });
    });

    describe("Anoncreds", () => {
      test("uuid set on Domain instance - same after store", async () => {
        const sut = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
        const uuid = sut.uuid;
        expect(uuid).to.be.a.string;

        await instance.storeCredential(sut);
        expect(sut.uuid).to.be.a.string;
        expect(sut.uuid).to.eql(uuid);
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
