import { JWTCredential, Secp256k1PrivateKey } from "../../src";
import { DID, LinkSecret, Message } from "../../src/domain";

export const credentialJWT = new JWTCredential("did:peer:2.issuer", {}, "jwtString", 1680615608435, "did:peer:2.sub", 1680615608435, ["aud-json"], "jwtString");
export const hostDID = DID.from("did:peer:2.Ez6LSbyuE95WAJYhQapHRVuRm6KLGbb79f5UXiaYTAYpUbZgd.Vz6Mkk4SYzLDtZJnuRN2VJ4knZcuJU4o5Cb9UUDhvAtaUZCx7.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ");
export const targetDID = DID.from("did:peer:0987654321fedcba");
export const pairAlias = "test-1";
export const secpPrivateKey = Secp256k1PrivateKey.from.String("LLW8vWvliLTHsW5UYox5VGtps4sOrrE_rY0HdqHAwN0", "base64");
export const peerDIDKeys = [secpPrivateKey];
export const linkSecret = new LinkSecret("link123");
export const message = Message.fromJson(`{
  "body": "{'content':'Test Message'}",
  "id": "30fb2555-c9b8-411d-a966-84fc08bb1efd",
  "piuri": "https://didcomm.org/basicmessage/2.0/message",
  "from": "${hostDID.toString()}",
  "to": "${targetDID.toString()}",
  "attachments": [],
  "extraHeaders": [],
  "createdTime": "1709633973438",
  "expiresTimePlus": "170963397343886400",
  "ack": [],
  "direction": 1,
  "uuid": "622fbec6-6f6d-4e64-a206-55dbb3928c3f"
}`);
