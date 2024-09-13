import { describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../src/domain";

describe("Message", () => {
  describe("fromJson", () => {
    test("extraHeaders an array - should be handled", () => {
      const dataJson = "{\"id\":\"f8fe3752-710a-4d76-8d9b-87d7d045c85e\",\"body\":\"{\\\"formats\\\":[],\\\"credential_preview\\\":{\\\"body\\\":{\\\"attributes\\\":[{\\\"media_type\\\":null,\\\"name\\\":\\\"familyName\\\",\\\"value\\\":\\\"JWT\\\"},{\\\"media_type\\\":null,\\\"name\\\":\\\"emailAddress\\\",\\\"value\\\":\\\"jwt@wonderland.com\\\"}]},\\\"schema_id\\\":null,\\\"type\\\":\\\"https://didcomm.org/issue-credential/3.0/credential-credential\\\"},\\\"comment\\\":null}\",\"piuri\":\"https://didcomm.org/issue-credential/3.0/offer-credential\",\"from\":\"did:peer:2.Ez6LSt5DDbtTZ9DHYHRUbYNQa2q2BEQgVEVW5UkB871QfrYtj.Vz6Mkush75wNeizgvYtT7KeJTzQ318SwBfDoyoreuKEgPnGb4.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ\",\"to\":\"did:peer:2.Ez6LSmYjY5cnHJED3RzbBkoQuG5Kwt9tC7Xr25YBxTfCahNoL.Vz6Mkt5B5TwwcUhqSTVMXU3WpzpxRMqzXGyU91yCidvvoPoMV.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5emFYUXRjSEpwYzIwdGJXVmthV0YwYjNJdVlYUmhiR0Z3Y21semJTNXBieUlzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJhIjpbXSwidCI6ImRtIn0\",\"thid\":\"e0670d7d-933f-4408-9dfb-340cd6230584\",\"createdTime\":1717516472885,\"expiresTime\":171751647288586400,\"attachments\":[{\"data\":{\"data\":\"{\\\"data\\\":{\\\"options\\\":{\\\"challenge\\\":\\\"fedac0c2-3250-4fb1-bfcb-b5e904058e1f\\\",\\\"domain\\\":\\\"domain\\\"},\\\"presentation_definition\\\":{\\\"format\\\":{\\\"jwt\\\":{\\\"alg\\\":[\\\"ES256K\\\"],\\\"proof_type\\\":[]},\\\"ldp\\\":null},\\\"id\\\":\\\"b8945a8a-c8e3-44af-9506-4a49c0096b31\\\",\\\"input_descriptors\\\":[],\\\"name\\\":null,\\\"purpose\\\":null}}}\"},\"id\":\"321905d1-5f01-42b0-b0ba-39b09645eeaa\",\"format\":\"prism/jwt\"}],\"ack\":[],\"direction\":1,\"extraHeaders\":[]}";
      const result = Message.fromJson(dataJson);

      expect(result).to.be.an.instanceOf(Message);
      expect(result.extraHeaders).to.be.an("object");
    });
  });
});
