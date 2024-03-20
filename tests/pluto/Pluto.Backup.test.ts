import { expect } from "chai";
import * as Domain from "../../src/domain";
import { JWTVerifiableCredentialRecoveryId } from "../../src";
import * as Fixtures from "../fixtures";
import { mockPluto } from "../fixtures/inmemory/factory";

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

    test("credentials", async () => {
      await instance.storeCredential(Fixtures.Backup.credentialJWT);
      // await instance.storeCredential(Fixtures.Backup.credentialAnoncreds);

      const result = await instance.backup();

      expect(result.credentials).to.be.an("array").to.have.length(1);
      expect(result.credentials[0]).to.have.property("recoveryId", JWTVerifiableCredentialRecoveryId);
      expect(result.credentials[0]).to.have.property("data", Fixtures.Backup.credentialJWT.id);
    });

    test("dids + did_pairs", async () => {
      await instance.storeDIDPair(Fixtures.Backup.hostDID, Fixtures.Backup.targetDID, Fixtures.Backup.pairAlias);

      const result = await instance.backup();

      expect(result.dids).to.be.an("array").to.have.length(2);
      expect(result.dids[0]).to.have.property("did", Fixtures.Backup.targetDID.toString());
      expect(result.dids[0]).to.have.property("alias", undefined);
      expect(result.dids[1]).to.have.property("did", Fixtures.Backup.hostDID.toString());
      expect(result.dids[1]).to.have.property("alias", undefined);

      expect(result.did_pairs).to.be.an("array").to.have.length(1);
      expect(result.did_pairs[0]).to.have.property("alias", Fixtures.Backup.pairAlias);
      expect(result.did_pairs[0]).to.have.property("holder", Fixtures.Backup.hostDID.toString());
      expect(result.did_pairs[0]).to.have.property("recipient", Fixtures.Backup.targetDID.toString());
    });

    test("keys", async () => {
      // await instance.storePrivateKey()
      await instance.storeDID(Fixtures.Backup.hostDID, undefined, Fixtures.Backup.peerDIDKeys);

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
      expect(result.link_secret).to.eql(Buffer.from(Fixtures.Backup.linkSecret.secret).toString("base64url"));
    });

    test("messages", async () => {
      await instance.storeMessage(Fixtures.Backup.message);

      const result = await instance.backup();

      expect(result.messages).to.be.an("array").to.have.length(1);
      // expect(result.messages[0]).to.eql()
    });
  });

  describe("Restore", () => {
    const example = {
      credentials: [
        {
          recoveryId: 'jwt+credential',
          data: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        }
      ],
      dids: [
        {
          did: 'did:peer:2.Ez6LSbyuE95WAJYhQapHRVuRm6KLGbb79f5UXiaYTAYpUbZgd.Vz6Mkk4SYzLDtZJnuRN2VJ4knZcuJU4o5Cb9UUDhvAtaUZCx7.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ',
          alias: undefined
        },
        { did: 'did:peer:0987654321fedcba', alias: undefined }
      ],
      did_pairs: [
        {
          alias: 'test-1',
          holder: 'did:peer:2.Ez6LSbyuE95WAJYhQapHRVuRm6KLGbb79f5UXiaYTAYpUbZgd.Vz6Mkk4SYzLDtZJnuRN2VJ4knZcuJU4o5Cb9UUDhvAtaUZCx7.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ',
          recipient: 'did:peer:0987654321fedcba'
        }
      ],
      keys: [
        {
          key: 'eyJrdHkiOiJFQyIsImNydiI6InNlY3AyNTZrMSIsImQiOiJMTFc4dld2bGlMVEhzVzVVWW94NVZHdHBzNHNPcnJFX3JZMEhkcUhBd04wIiwieCI6ImtVcVNlMzZJcUVoSW55eHN3a0JHbWFiOUtEUFdFREV0WURTRFBMaFItSWciLCJ5IjoiREo5bGhMNnBVbUVCUlgzdG5vN1RBRUEyYm5HSEpFWmNBR3piQ1FnQ1dKdyJ9',
          index: undefined,
          did: 'did:peer:2.Ez6LSbyuE95WAJYhQapHRVuRm6KLGbb79f5UXiaYTAYpUbZgd.Vz6Mkk4SYzLDtZJnuRN2VJ4knZcuJU4o5Cb9UUDhvAtaUZCx7.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ'
        }
      ],
      messages: [
        'eyJpZCI6IjMwZmIyNTU1LWM5YjgtNDExZC1hOTY2LTg0ZmMwOGJiMWVmZCIsImJvZHkiOiJ7J2NvbnRlbnQnOidUZXN0IE1lc3NhZ2UnfSIsInBpdXJpIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9iYXNpY21lc3NhZ2UvMi4wL21lc3NhZ2UiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2J5dUU5NVdBSlloUWFwSFJWdVJtNktMR2JiNzlmNVVYaWFZVEFZcFViWmdkLlZ6Nk1razRTWXpMRHRaSm51Uk4yVko0a25aY3VKVTRvNUNiOVVVRGh2QXRhVVpDeDcuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbVJwWkRwd1pXVnlPakl1UlhvMlRGTm5hSGRUUlRRek4zZHVSRVV4Y0hReldEWm9Wa1JWVVhwVGFuTkllbWx1Y0ZneldFWjJUV3BTUVcwM2VTNVdlalpOYTJob01XVTFRMFZaV1hFMlNrSlZZMVJhTmtOd01uSmhia05YVW5KMk4xbGhlRE5NWlRST05UbFNObVJrTGxObGVVb3dTV3B2YVZwSE1HbE1RMHA2U1dwd04wbHVWbmxoVTBrMlNXMW9NR1JJUW5wUGFUaDJZekpzTUV4WVFubGhXRTUwVEZjeGJGcEhiR2hrUnpsNVRHMUdNRmxYZUdoalNFcHdZekl3ZFdGWE9HbE1RMHBvU1dwd1lrbHRVbkJhUjA1MllsY3dkbVJxU1dsWVdERTVMbE5sZVVvd1NXcHZhVnBITUdsTVEwcDZTV3B3TjBsdVZubGhVMGsyU1c1a2VtTjZiM1pNTTA1d1pFTXhkMk50YkhwaVV6RjBXbGRTY0ZsWVVuWmphVFZvWkVkR2MxbFlRbmxoV0U1MFRHMXNka3d6WkhwSmFYZHBXVk5KTmxkNVNtdGhWMUpxWWpJeGRFd3pXWGxKYkRFNVpsRWlMQ0p5SWpwYlhTd2lZU0k2VzExOWZRIiwidG8iOiJkaWQ6cGVlcjowOTg3NjU0MzIxZmVkY2JhIiwiY3JlYXRlZFRpbWUiOjE3MDk2MzM5NzM0MzgsImV4cGlyZXNUaW1lIjoxNzA5NjMzOTczNDM4ODY0MDAsImF0dGFjaG1lbnRzIjpbXSwiYWNrIjpbXSwiZGlyZWN0aW9uIjoxLCJleHRyYUhlYWRlcnMiOltdfQ'
      ],
      link_secret: 'bGluazEyMw',
    };


    test("credentials", async () => {
      await instance.restore({
        credentials: [
          {
            recoveryId: 'jwt+credential',
            data: Fixtures.Credentials.JWT.credentialPayloadEncoded,
          }
        ],
        dids: [],
        did_pairs: [],
        keys: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await instance.getAllCredentials();

      expect(result).to.be.an("array").to.have.length(1);
    });

    test("dids", async () => {
      await instance.restore({
        credentials: [],
        dids: [
          { did: Fixtures.Backup.hostDID.toString() },
        ],
        did_pairs: [],
        keys: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await (instance as any).Repositories.DIDs.get();

      expect(result).to.be.an("array").to.have.length(1);
    });

    test("did_pairs", async () => {
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [
          {
            alias: "test-one",
            holder: Fixtures.Backup.hostDID.toString(),
            recipient: Fixtures.Backup.targetDID.toString(),
          }
        ],
        keys: [],
        messages: [],
        link_secret: undefined,
      });

      const result = await instance.getAllDidPairs();

      expect(result).to.be.an("array").to.have.length(1);
    });

    test("keys", async () => {
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [],
        keys: [
          {
            key: Buffer.from(JSON.stringify(Fixtures.Backup.secpPrivateKey.to.JWK())).toString("base64url"),
          }
        ],
        messages: [],
        link_secret: undefined,
      });

      const result = await (instance as any).Repositories.Keys.get();

      expect(result).to.be.an("array").to.have.length(1);
    });

    test("messages", async () => {
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [],
        keys: [],
        messages: [
          'eyJpZCI6IjMwZmIyNTU1LWM5YjgtNDExZC1hOTY2LTg0ZmMwOGJiMWVmZCIsImJvZHkiOiJ7J2NvbnRlbnQnOidUZXN0IE1lc3NhZ2UnfSIsInBpdXJpIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9iYXNpY21lc3NhZ2UvMi4wL21lc3NhZ2UiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2J5dUU5NVdBSlloUWFwSFJWdVJtNktMR2JiNzlmNVVYaWFZVEFZcFViWmdkLlZ6Nk1razRTWXpMRHRaSm51Uk4yVko0a25aY3VKVTRvNUNiOVVVRGh2QXRhVVpDeDcuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbVJwWkRwd1pXVnlPakl1UlhvMlRGTm5hSGRUUlRRek4zZHVSRVV4Y0hReldEWm9Wa1JWVVhwVGFuTkllbWx1Y0ZneldFWjJUV3BTUVcwM2VTNVdlalpOYTJob01XVTFRMFZaV1hFMlNrSlZZMVJhTmtOd01uSmhia05YVW5KMk4xbGhlRE5NWlRST05UbFNObVJrTGxObGVVb3dTV3B2YVZwSE1HbE1RMHA2U1dwd04wbHVWbmxoVTBrMlNXMW9NR1JJUW5wUGFUaDJZekpzTUV4WVFubGhXRTUwVEZjeGJGcEhiR2hrUnpsNVRHMUdNRmxYZUdoalNFcHdZekl3ZFdGWE9HbE1RMHBvU1dwd1lrbHRVbkJhUjA1MllsY3dkbVJxU1dsWVdERTVMbE5sZVVvd1NXcHZhVnBITUdsTVEwcDZTV3B3TjBsdVZubGhVMGsyU1c1a2VtTjZiM1pNTTA1d1pFTXhkMk50YkhwaVV6RjBXbGRTY0ZsWVVuWmphVFZvWkVkR2MxbFlRbmxoV0U1MFRHMXNka3d6WkhwSmFYZHBXVk5KTmxkNVNtdGhWMUpxWWpJeGRFd3pXWGxKYkRFNVpsRWlMQ0p5SWpwYlhTd2lZU0k2VzExOWZRIiwidG8iOiJkaWQ6cGVlcjowOTg3NjU0MzIxZmVkY2JhIiwiY3JlYXRlZFRpbWUiOjE3MDk2MzM5NzM0MzgsImV4cGlyZXNUaW1lIjoxNzA5NjMzOTczNDM4ODY0MDAsImF0dGFjaG1lbnRzIjpbXSwiYWNrIjpbXSwiZGlyZWN0aW9uIjoxLCJleHRyYUhlYWRlcnMiOltdfQ'
        ],
        link_secret: undefined,
      });

      const result = await instance.getAllMessages();

      expect(result).to.be.an("array").to.have.length(1);
    });

    test("link_secret", async () => {
      await instance.restore({
        credentials: [],
        dids: [],
        did_pairs: [],
        keys: [],
        messages: [],
        link_secret: "bGluazEyMw",
      });

      const result = await instance.getLinkSecret();

      expect(result).to.be.instanceOf(Domain.LinkSecret);
    });


  });
});
