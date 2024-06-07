import { AnonCredsCredential, JWTCredential, Secp256k1PrivateKey } from "../../src";
import { Backup, DID, LinkSecret, Mediator, Message, Pluto } from "../../src/domain";
import { credentialPayloadEncoded } from "./credentials/jwt";
import { credential as anonCredential } from "./credentials/anoncreds";
import { peerDID4, peerDID5 } from "./dids";

export const credentialJWT = JWTCredential.fromJWS(credentialPayloadEncoded);
export const credentialAnoncreds = new AnonCredsCredential(anonCredential);
export const hostDID = peerDID5;
export const targetDID = peerDID4;
export const pairAlias = "test-1";
export const mediator: Mediator = {
  hostDID,
  mediatorDID: targetDID,
  routingDID: hostDID,
};
export const secpPrivateKey = Secp256k1PrivateKey.from.String("LLW8vWvliLTHsW5UYox5VGtps4sOrrE_rY0HdqHAwN0", "base64");
export const peerDIDKeys = [secpPrivateKey];
export const linkSecret = new LinkSecret("bGluazEyMw");
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

export const backupJson: Backup.Schema = {
  credentials: [
    {
      recovery_id: 'jwt',
      data: Buffer.from(credentialPayloadEncoded).toString("base64url"),
    },
    {
      recovery_id: "anoncred",
      data: Buffer.from(credentialAnoncreds.toStorable().credentialData).toString("base64url"),
    }
  ],
  dids: [
    { did: hostDID.toString(), alias: undefined },
    { did: targetDID.toString(), alias: undefined }
  ],
  did_pairs: [
    {
      alias: pairAlias,
      holder: hostDID.toString(),
      recipient: targetDID.toString()
    }
  ],
  keys: [
    {
      recovery_id: secpPrivateKey.recoveryId,
      key: 'eyJrdHkiOiJFQyIsImNydiI6InNlY3AyNTZrMSIsIngiOiJrVXFTZTM2SXFFaElueXhzd2tCR21hYjlLRFBXRURFdFlEU0RQTGhSLUlnIiwieSI6IkRKOWxoTDZwVW1FQlJYM3RubzdUQUVBMmJuR0hKRVpjQUd6YkNRZ0NXSnciLCJkIjoiTExXOHZXdmxpTFRIc1c1VVlveDVWR3RwczRzT3JyRV9yWTBIZHFIQXdOMCJ9',
      index: undefined,
      did: hostDID.toString()
    }
  ],
  mediators: [
    {
      holder_did: mediator.hostDID.toString(),
      mediator_did: mediator.mediatorDID.toString(),
      routing_did: mediator.routingDID.toString(),
    }
  ],
  messages: [
    "eyJpZCI6IjMwZmIyNTU1LWM5YjgtNDExZC1hOTY2LTg0ZmMwOGJiMWVmZCIsImJvZHkiOiJ7J2NvbnRlbnQnOidUZXN0IE1lc3NhZ2UnfSIsInBpdXJpIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9iYXNpY21lc3NhZ2UvMi4wL21lc3NhZ2UiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2J5dUU5NVdBSlloUWFwSFJWdVJtNktMR2JiNzlmNVVYaWFZVEFZcFViWmdkLlZ6Nk1razRTWXpMRHRaSm51Uk4yVko0a25aY3VKVTRvNUNiOVVVRGh2QXRhVVpDeDcuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbVJwWkRwd1pXVnlPakl1UlhvMlRGTm5hSGRUUlRRek4zZHVSRVV4Y0hReldEWm9Wa1JWVVhwVGFuTkllbWx1Y0ZneldFWjJUV3BTUVcwM2VTNVdlalpOYTJob01XVTFRMFZaV1hFMlNrSlZZMVJhTmtOd01uSmhia05YVW5KMk4xbGhlRE5NWlRST05UbFNObVJrTGxObGVVb3dTV3B2YVZwSE1HbE1RMHA2U1dwd04wbHVWbmxoVTBrMlNXMW9NR1JJUW5wUGFUaDJZekpzTUV4WVFubGhXRTUwVEZjeGJGcEhiR2hrUnpsNVRHMUdNRmxYZUdoalNFcHdZekl3ZFdGWE9HbE1RMHBvU1dwd1lrbHRVbkJhUjA1MllsY3dkbVJxU1dsWVdERTVMbE5sZVVvd1NXcHZhVnBITUdsTVEwcDZTV3B3TjBsdVZubGhVMGsyU1c1a2VtTjZiM1pNTTA1d1pFTXhkMk50YkhwaVV6RjBXbGRTY0ZsWVVuWmphVFZvWkVkR2MxbFlRbmxoV0U1MFRHMXNka3d6WkhwSmFYZHBXVk5KTmxkNVNtdGhWMUpxWWpJeGRFd3pXWGxKYkRFNVpsRWlMQ0p5SWpwYlhTd2lZU0k2VzExOWZRIiwidG8iOiJkaWQ6cGVlcjowOTg3NjU0MzIxZmVkY2JhIiwiY3JlYXRlZFRpbWUiOjE3MDk2MzM5NzM0MzgsImV4cGlyZXNUaW1lIjoxNzA5NjMzOTczNDM4ODY0MDAsImF0dGFjaG1lbnRzIjpbXSwiYWNrIjpbXSwiZGlyZWN0aW9uIjoxLCJleHRyYUhlYWRlcnMiOnt9fQ"
  ],
  link_secret: linkSecret.secret,
};
