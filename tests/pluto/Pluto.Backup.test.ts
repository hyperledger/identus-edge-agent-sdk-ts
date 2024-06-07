import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const expect = chai.expect;

import * as Domain from "../../src/domain";
import * as Fixtures from "../fixtures";
import { mockPluto } from "../fixtures/inmemory/factory";
import { AnonCredsCredential, JWTCredential } from "../../src";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    instance = mockPluto();
    await instance.start();
  });

  describe("Backup", () => {
    test("default - no values", async () => {
      const result = await instance.backup();

      expect(result).not.to.be.null;
      expect(result).to.have.property("credentials").to.be.an("array").to.have.length(0);
      expect(result).to.have.property("dids").to.be.an("array").to.have.length(0);
      expect(result).to.have.property("did_pairs").to.be.an("array").to.have.length(0);
      expect(result).to.have.property("keys").to.be.an("array").to.have.length(0);
      expect(result).to.have.property("messages").to.be.an("array").to.have.length(0);
      expect(result).to.have.property("link_secret").to.be.undefined;
    });

    test("credential - JWT", async () => {
      await instance.storeCredential(Fixtures.Backup.credentialJWT);
      // await instance.storeCredential(Fixtures.Backup.credentialAnoncreds);

      const result = await instance.backup();

      expect(result.credentials).to.be.an("array").to.have.length(1);
      expect(result.credentials[0]).to.have.property("recovery_id", "jwt");
      const expectedData = Buffer.from(Fixtures.Backup.credentialJWT.id).toString("base64url");
      expect(result.credentials[0]).to.have.property("data", expectedData);
    });

    test("dids + did_pairs", async () => {
      await instance.storeDIDPair(Fixtures.Backup.hostDID, Fixtures.Backup.targetDID, Fixtures.Backup.pairAlias);

      const result = await instance.backup();

      expect(result.dids).to.be.an("array").to.have.length(2);
      expect(result.dids).to.include.deep.members([
        { did: Fixtures.Backup.hostDID.toString(), alias: undefined },
        { did: Fixtures.Backup.targetDID.toString(), alias: undefined },
      ]);

      expect(result.did_pairs).to.be.an("array").to.have.length(1);
      expect(result.did_pairs).to.include.deep.members([
        {
          alias: Fixtures.Backup.pairAlias,
          holder: Fixtures.Backup.hostDID.toString(),
          recipient: Fixtures.Backup.targetDID.toString(),
        },
      ]);
    });

    test("keys", async () => {
      // await instance.storePrivateKey()
      await instance.storeDID(Fixtures.Backup.hostDID, Fixtures.Backup.peerDIDKeys);

      const result = await instance.backup();

      expect(result.keys).to.be.an("array").to.have.length(1);

      const expectedKey = Buffer.from(JSON.stringify(Fixtures.Backup.peerDIDKeys[0].to.JWK())).toString("base64url");
      expect(result.keys[0]).to.have.property("key", expectedKey);
      expect(result.keys[0]).to.have.property("index", Fixtures.Backup.peerDIDKeys[0].index);
      expect(result.keys[0]).to.have.property("did", Fixtures.Backup.hostDID.toString());
    });

    test("link_secret", async () => {
      await instance.storeLinkSecret(Fixtures.Backup.linkSecret);

      const result = await instance.backup();

      expect(result.link_secret).to.be.a("string");
      expect(result.link_secret).to.eql(Fixtures.Backup.linkSecret.secret);
    });

    test("mediators", async () => {
      await instance.storeMediator(Fixtures.Backup.mediator);
      const result = await instance.backup();

      expect(result.mediators).to.be.an("array").to.have.length(1);
    });

    test("messages", async () => {
      await instance.storeMessage(Fixtures.Backup.message);
      const result = await instance.backup();

      expect(result.messages).to.be.an("array").to.have.length(1);
    });
  });

  describe("Restore", () => {
    test("credentials - JWT", async () => {
      await instance.restore({
        credentials: [
          {
            recovery_id: 'jwt',
            data: Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded).toString("base64url"),
          },
        ],
        dids: [],
        did_pairs: [],
        keys: [],
        mediators: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await instance.getAllCredentials();
      expect(result).to.be.an("array").to.have.length(1);
      const sut = result[0] as JWTCredential;
      expect(sut.audience).to.eq(Fixtures.Backup.credentialJWT.audience);
      expect(sut.claims).to.deep.eq(Fixtures.Backup.credentialJWT.claims);
      expect(sut.context).to.deep.eq(Fixtures.Backup.credentialJWT.context);
      expect(sut.credentialSchema).to.deep.eq(Fixtures.Backup.credentialJWT.credentialSchema);
      expect(sut.credentialStatus).to.deep.eq(Fixtures.Backup.credentialJWT.credentialStatus);
      expect(sut.credentialSubject).to.deep.eq(Fixtures.Backup.credentialJWT.credentialSubject);
      expect(sut.credentialType).to.eq(Fixtures.Backup.credentialJWT.credentialType);
      expect(sut.evidence).to.deep.eq(Fixtures.Backup.credentialJWT.evidence);
      expect(sut.expirationDate).to.eq(Fixtures.Backup.credentialJWT.expirationDate);
      expect(sut.id).to.eq(Fixtures.Backup.credentialJWT.id);
      expect(sut.issuanceDate).to.eq(Fixtures.Backup.credentialJWT.issuanceDate);
      expect(sut.issuer).to.eq(Fixtures.Backup.credentialJWT.issuer);
      expect(sut.properties).to.deep.eq(Fixtures.Backup.credentialJWT.properties);
      expect(sut.recoveryId).to.eq(Fixtures.Backup.credentialJWT.recoveryId);
      expect(sut.refreshService).to.eq(Fixtures.Backup.credentialJWT.refreshService);
      expect(sut.subject).to.eq(Fixtures.Backup.credentialJWT.subject);
      expect(sut.termsOfUse).to.deep.eq(Fixtures.Backup.credentialJWT.termsOfUse);
      expect(sut.type).to.deep.eq(Fixtures.Backup.credentialJWT.type);
    });

    test("credentials - Anoncreds", async () => {
      await instance.restore({
        credentials: [
          {
            recovery_id: "anoncred",
            data: Buffer.from(Fixtures.Backup.credentialAnoncreds.toStorable().credentialData).toString("base64url")
          },
        ],
        dids: [],
        did_pairs: [],
        keys: [],
        mediators: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await instance.getAllCredentials();
      expect(result).to.be.an("array").to.have.length(1);
      const sut = result[0] as AnonCredsCredential;
      expect(sut.claims).to.deep.eq(Fixtures.Backup.credentialAnoncreds.claims);
      expect(sut.credentialDefinitionId).to.eq(Fixtures.Backup.credentialAnoncreds.credentialDefinitionId);
      expect(sut.credentialType).to.eq(Fixtures.Backup.credentialAnoncreds.credentialType);
      expect(sut.id).to.eq(Fixtures.Backup.credentialAnoncreds.id);
      expect(sut.issuer).to.eq(Fixtures.Backup.credentialAnoncreds.issuer);
      expect(sut.properties).to.deep.eq(Fixtures.Backup.credentialAnoncreds.properties);
      expect(sut.recoveryId).to.eq(Fixtures.Backup.credentialAnoncreds.recoveryId);
      expect(sut.schemaId).to.eq(Fixtures.Backup.credentialAnoncreds.schemaId);
      expect(sut.subject).to.eq(Fixtures.Backup.credentialAnoncreds.subject);
    });

    test("dids", async () => {
      await instance.restore({
        credentials: [],
        dids: [
          { did: Fixtures.Backup.hostDID.toString() },
        ],
        did_pairs: [],
        keys: [],
        mediators: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await (instance as any).Repositories.DIDs.get();

      expect(result).to.be.an("array").to.have.length(1);
      expect(result[0].toString()).to.eq(Fixtures.Backup.hostDID.toString());
    });

    test("did_pairs", async () => {
      const name = "test-did-pairs";
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [
          {
            alias: name,
            holder: Fixtures.Backup.hostDID.toString(),
            recipient: Fixtures.Backup.targetDID.toString(),
          }
        ],
        keys: [],
        mediators: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await instance.getAllDidPairs();

      expect(result).to.be.an("array").to.have.length(1);
      expect(result[0].host.toString()).to.eq(Fixtures.Backup.hostDID.toString());
      expect(result[0].receiver.toString()).to.eq(Fixtures.Backup.targetDID.toString());
      expect(result[0].name).to.eq(name);
    });

    test("keys", async () => {
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [],
        keys: [
          {
            recovery_id: Fixtures.Backup.secpPrivateKey.recoveryId,
            key: Buffer.from(JSON.stringify(Fixtures.Backup.secpPrivateKey.to.JWK())).toString("base64url"),
          }
        ],
        mediators: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await (instance as any).Repositories.Keys.get();

      expect(result).to.be.an("array").to.have.length(1);
      expect(result[0].curve).to.eq(Fixtures.Backup.secpPrivateKey.curve);
      expect(result[0].index).to.eq(Fixtures.Backup.secpPrivateKey.index);
      expect(result[0].keySpecification).to.deep.eq(Fixtures.Backup.secpPrivateKey.keySpecification);
      expect(result[0].raw).to.deep.eq(Fixtures.Backup.secpPrivateKey.raw);
      expect(result[0].recoveryId).to.eq(Fixtures.Backup.secpPrivateKey.recoveryId);
      expect(result[0].size).to.eq(Fixtures.Backup.secpPrivateKey.size);
      expect(result[0].type).to.eq(Fixtures.Backup.secpPrivateKey.type);
    });

    test("messages", async () => {
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [],
        keys: [],
        mediators: [],
        messages: [
          "eyJpZCI6IjMwZmIyNTU1LWM5YjgtNDExZC1hOTY2LTg0ZmMwOGJiMWVmZCIsImJvZHkiOiJ7J2NvbnRlbnQnOidUZXN0IE1lc3NhZ2UnfSIsInBpdXJpIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9iYXNpY21lc3NhZ2UvMi4wL21lc3NhZ2UiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2J5dUU5NVdBSlloUWFwSFJWdVJtNktMR2JiNzlmNVVYaWFZVEFZcFViWmdkLlZ6Nk1razRTWXpMRHRaSm51Uk4yVko0a25aY3VKVTRvNUNiOVVVRGh2QXRhVVpDeDcuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbVJwWkRwd1pXVnlPakl1UlhvMlRGTm5hSGRUUlRRek4zZHVSRVV4Y0hReldEWm9Wa1JWVVhwVGFuTkllbWx1Y0ZneldFWjJUV3BTUVcwM2VTNVdlalpOYTJob01XVTFRMFZaV1hFMlNrSlZZMVJhTmtOd01uSmhia05YVW5KMk4xbGhlRE5NWlRST05UbFNObVJrTGxObGVVb3dTV3B2YVZwSE1HbE1RMHA2U1dwd04wbHVWbmxoVTBrMlNXMW9NR1JJUW5wUGFUaDJZekpzTUV4WVFubGhXRTUwVEZjeGJGcEhiR2hrUnpsNVRHMUdNRmxYZUdoalNFcHdZekl3ZFdGWE9HbE1RMHBvU1dwd1lrbHRVbkJhUjA1MllsY3dkbVJxU1dsWVdERTVMbE5sZVVvd1NXcHZhVnBITUdsTVEwcDZTV3B3TjBsdVZubGhVMGsyU1c1a2VtTjZiM1pNTTA1d1pFTXhkMk50YkhwaVV6RjBXbGRTY0ZsWVVuWmphVFZvWkVkR2MxbFlRbmxoV0U1MFRHMXNka3d6WkhwSmFYZHBXVk5KTmxkNVNtdGhWMUpxWWpJeGRFd3pXWGxKYkRFNVpsRWlMQ0p5SWpwYlhTd2lZU0k2VzExOWZRIiwidG8iOiJkaWQ6cGVlcjoyLkV6NkxTbVlqWTVjbkhKRUQzUnpiQmtvUXVHNUt3dDl0QzdYcjI1WUJ4VGZDYWhOb0wuVno2TWt0NUI1VHd3Y1VocVNUVk1YVTNXcHpweFJNcXpYR3lVOTF5Q2lkdnZvUG9NVi5TZXlKeUlqcGJYU3dpY3lJNkltUnBaRHB3WldWeU9qSXVSWG8yVEZObmFIZFRSVFF6TjNkdVJFVXhjSFF6V0Rab1ZrUlZVWHBUYW5OSWVtbHVjRmd6V0VaMlRXcFNRVzAzZVM1V2VqWk5hMmhvTVdVMVEwVlpXWEUyU2tKVlkxUmFOa053TW5KaGJrTlhVbkoyTjFsaGVETk1aVFJPTlRsU05tUmtMbE5sZVVvd1NXcHZhVnBITUdsTVEwcDZTV3B2YVdGSVVqQmpTRTAyVEhrNWVtRllVWFJqU0Vwd1l6SXdkR0pYVm10aFYwWXdZak5KZFZsWVVtaGlSMFozWTIxc2VtSlROWEJpZVVselNXNUphVTlzZEdSTVEwcG9TV3B3WWtsdFVuQmFSMDUyWWxjd2RtUnFTV2xZV0RBaUxDSmhJanBiWFN3aWRDSTZJbVJ0SW4wIiwiY3JlYXRlZFRpbWUiOjE3MDk2MzM5NzM0MzgsImV4cGlyZXNUaW1lIjoxNzA5NjMzOTczNDM4ODY0MDAsImF0dGFjaG1lbnRzIjpbXSwiYWNrIjpbXSwiZGlyZWN0aW9uIjoxLCJleHRyYUhlYWRlcnMiOnt9fQ"
        ],
        link_secret: undefined,
      });

      const result = await instance.getAllMessages();

      expect(result).to.be.an("array").to.have.length(1);
      const msg = result.at(0)!;
      expect(msg.ack).to.deep.eq(Fixtures.Backup.message.ack);
      expect(msg.attachments).to.deep.eq(Fixtures.Backup.message.attachments);
      expect(msg.body).to.deep.eq(Fixtures.Backup.message.body);
      expect(msg.createdTime).to.eq(Fixtures.Backup.message.createdTime);
      expect(msg.direction).to.eq(Fixtures.Backup.message.direction);
      expect(msg.expiresTimePlus).to.eq(Fixtures.Backup.message.expiresTimePlus);
      expect(msg.extraHeaders).to.deep.eq(Fixtures.Backup.message.extraHeaders);
      expect(msg.from?.toString()).to.eq(Fixtures.Backup.message.from?.toString());
      expect(msg.fromPrior).to.eq(Fixtures.Backup.message.fromPrior);
      expect(msg.id).to.eq(Fixtures.Backup.message.id);
      expect(msg.piuri).to.eq(Fixtures.Backup.message.piuri);
      expect(msg.pthid).to.eq(Fixtures.Backup.message.pthid);
      expect(msg.thid).to.eq(Fixtures.Backup.message.thid);
      expect(msg.to?.toString()).to.eq(Fixtures.Backup.message.to?.toString());
    });

    test("link_secret", async () => {
      const secret = "test123";
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [],
        keys: [],
        mediators: [],
        messages: [],
        link_secret: secret,
      });

      const result = await instance.getLinkSecret();

      expect(result).to.be.instanceOf(Domain.LinkSecret);
      expect(result?.secret).to.eq(secret);
    });

    describe("Store not empty - throws", () => {
      it("Credentials", async () => {
        await instance.storeCredential(Fixtures.Backup.credentialJWT);
        expect(instance.restore(Fixtures.Backup.backupJson)).eventually.rejected;
      });

      it("DIDs", async () => {
        await instance.storeDIDPair(Fixtures.Backup.hostDID, Fixtures.Backup.targetDID, Fixtures.Backup.pairAlias);
        expect(instance.restore(Fixtures.Backup.backupJson)).eventually.rejected;
      });

      it("Keys", async () => {
        await instance.storeDID(Fixtures.Backup.hostDID, Fixtures.Backup.peerDIDKeys);
        expect(instance.restore(Fixtures.Backup.backupJson)).eventually.rejected;
      });

      it("LinkSecret", async () => {
        await instance.storeLinkSecret(Fixtures.Backup.linkSecret);
        expect(instance.restore(Fixtures.Backup.backupJson)).eventually.rejected;
      });

      it("Messages", async () => {
        await instance.storeMessage(Fixtures.Backup.message);
        expect(instance.restore(Fixtures.Backup.backupJson)).eventually.rejected;
      });
    });
  });

  describe("Round trip", () => {
    test("Restore -> Backup", async () => {
      await instance.restore(Fixtures.Backup.backupJson);

      const backup = await instance.backup();

      expect(backup.credentials).to.have.length(Fixtures.Backup.backupJson.credentials.length);
      expect(backup.credentials).to.have.deep.members(Fixtures.Backup.backupJson.credentials);

      expect(backup.dids).to.have.length(Fixtures.Backup.backupJson.dids.length);
      expect(backup.dids).to.have.deep.members(Fixtures.Backup.backupJson.dids);

      expect(backup.did_pairs).to.have.length(Fixtures.Backup.backupJson.did_pairs.length);
      expect(backup.did_pairs).to.have.deep.members(Fixtures.Backup.backupJson.did_pairs);

      expect(backup.keys).to.have.length(Fixtures.Backup.backupJson.keys.length);
      expect(backup.keys).to.have.deep.members(Fixtures.Backup.backupJson.keys);

      expect(backup.messages).to.have.length(Fixtures.Backup.backupJson.messages.length);
      expect(backup.messages).to.have.deep.members(Fixtures.Backup.backupJson.messages);

      expect(backup.link_secret).to.eq(Fixtures.Backup.backupJson.link_secret);
    });

    test("Backup -> Restore", async () => {
      await instance.storeCredential(Fixtures.Backup.credentialJWT);
      await instance.storeCredential(Fixtures.Backup.credentialAnoncreds);
      await instance.storeDIDPair(Fixtures.Backup.hostDID, Fixtures.Backup.targetDID, Fixtures.Backup.pairAlias);
      await instance.storeDID(Fixtures.Backup.hostDID, Fixtures.Backup.peerDIDKeys);
      await instance.storeLinkSecret(Fixtures.Backup.linkSecret);
      await instance.storeMessage(Fixtures.Backup.message);
      await instance.storeMediator(Fixtures.Backup.mediator);

      const backup = await instance.backup();

      expect(backup).not.to.be.null;

      const sut = mockPluto();
      await sut.start();
      await sut.restore(backup);

      const credentials = await sut.getAllCredentials();
      const dids = await sut.getAllPeerDIDs();
      const didPairs = await sut.getAllDidPairs();
      const keys = await sut.getDIDPrivateKeysByDID(Fixtures.Backup.hostDID);
      const mediators = await sut.getAllMediators();
      const messages = await sut.getAllMessages();
      const linksecret = await sut.getLinkSecret();

      expect(dids).not.to.be.null;

      expect(credentials).to.have.length(2);
      // expect(credentials.map(x => (x as any).toStorable())).to.have.deep.members([Fixtures.Backup.credentialAnoncreds.toStorable(), Fixtures.Backup.credentialJWT.toStorable()]);

      expect(dids).to.have.length(2);

      expect(didPairs).to.have.length(1);
      expect(keys).to.have.length(1);
      expect(mediators).to.have.length(1);
      expect(messages).to.have.length(1);

    });
  });
});
