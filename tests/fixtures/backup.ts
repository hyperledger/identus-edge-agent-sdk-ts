import { base64url } from "multiformats/bases/base64";

import { AnonCredsCredential, JWTCredential, Secp256k1PrivateKey } from "../../src";
import { Backup, DID, LinkSecret, Mediator, Message } from "../../src/domain";
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
  "body": {"content":"Test Message"},
  "id": "30fb2555-c9b8-411d-a966-84fc08bb1efd",
  "piuri": "https://didcomm.org/basicmessage/2.0/message",
  "from": "${hostDID.toString()}",
  "to": "${targetDID.toString()}",
  "attachments": [],
  "extraHeaders": [],
  "createdTime": "1709633973438",
  "expiresTimePlus": "170963397343886400",
  "ack": [],
  "direction": 1
}`);

export const backupJson: Backup.Schema = {
  credentials: [
    {
      recovery_id: 'jwt',
      data: Buffer.from(base64url.baseEncode(Buffer.from(credentialPayloadEncoded))).toString(),
    },
    {
      recovery_id: "anoncred",
      data: Buffer.from(base64url.baseEncode(Buffer.from(credentialAnoncreds.toStorable().credentialData))).toString(),
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
    "eyJpZCI6IjMwZmIyNTU1LWM5YjgtNDExZC1hOTY2LTg0ZmMwOGJiMWVmZCIsImJvZHkiOnsiY29udGVudCI6IlRlc3QgTWVzc2FnZSJ9LCJwaXVyaSI6Imh0dHBzOi8vZGlkY29tbS5vcmcvYmFzaWNtZXNzYWdlLzIuMC9tZXNzYWdlIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNieXVFOTVXQUpZaFFhcEhSVnVSbTZLTEdiYjc5ZjVVWGlhWVRBWXBVYlpnZC5WejZNa2s0U1l6TER0WkpudVJOMlZKNGtuWmN1SlU0bzVDYjlVVURodkF0YVVaQ3g3LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1ScFpEcHdaV1Z5T2pJdVJYbzJURk5uYUhkVFJUUXpOM2R1UkVVeGNIUXpXRFpvVmtSVlVYcFRhbk5JZW1sdWNGZ3pXRVoyVFdwU1FXMDNlUzVXZWpaTmEyaG9NV1UxUTBWWldYRTJTa0pWWTFSYU5rTndNbkpoYmtOWFVuSjJOMWxoZUROTVpUUk9OVGxTTm1Sa0xsTmxlVW93U1dwdmFWcEhNR2xNUTBwNlNXcHdOMGx1Vm5saFUwazJTVzFvTUdSSVFucFBhVGgyWXpKc01FeFlRbmxoV0U1MFRGY3hiRnBIYkdoa1J6bDVURzFHTUZsWGVHaGpTRXB3WXpJd2RXRlhPR2xNUTBwb1NXcHdZa2x0VW5CYVIwNTJZbGN3ZG1ScVNXbFlXREU1TGxObGVVb3dTV3B2YVZwSE1HbE1RMHA2U1dwd04wbHVWbmxoVTBrMlNXNWtlbU42YjNaTU0wNXdaRU14ZDJOdGJIcGlVekYwV2xkU2NGbFlVblpqYVRWb1pFZEdjMWxZUW5saFdFNTBURzFzZGt3elpIcEphWGRwV1ZOSk5sZDVTbXRoVjFKcVlqSXhkRXd6V1hsSmJERTVabEVpTENKeUlqcGJYU3dpWVNJNlcxMTlmUSIsInRvIjoiZGlkOnBlZXI6Mi5FejZMU21Zalk1Y25ISkVEM1J6YkJrb1F1RzVLd3Q5dEM3WHIyNVlCeFRmQ2FoTm9MLlZ6Nk1rdDVCNVR3d2NVaHFTVFZNWFUzV3B6cHhSTXF6WEd5VTkxeUNpZHZ2b1BvTVYuU2V5SnlJanBiWFN3aWN5STZJbVJwWkRwd1pXVnlPakl1UlhvMlRGTm5hSGRUUlRRek4zZHVSRVV4Y0hReldEWm9Wa1JWVVhwVGFuTkllbWx1Y0ZneldFWjJUV3BTUVcwM2VTNVdlalpOYTJob01XVTFRMFZaV1hFMlNrSlZZMVJhTmtOd01uSmhia05YVW5KMk4xbGhlRE5NWlRST05UbFNObVJrTGxObGVVb3dTV3B2YVZwSE1HbE1RMHA2U1dwdmFXRklVakJqU0UwMlRIazVlbUZZVVhSalNFcHdZekl3ZEdKWFZtdGhWMFl3WWpOSmRWbFlVbWhpUjBaM1kyMXNlbUpUTlhCaWVVbHpTVzVKYVU5c2RHUk1RMHBvU1dwd1lrbHRVbkJhUjA1MllsY3dkbVJxU1dsWVdEQWlMQ0poSWpwYlhTd2lkQ0k2SW1SdEluMCIsImNyZWF0ZWRUaW1lIjoxNzA5NjMzOTczNDM4LCJleHBpcmVzVGltZSI6MTcwOTYzNDA1OTgzOCwiYXR0YWNobWVudHMiOltdLCJhY2siOltdLCJkaXJlY3Rpb24iOjEsImV4dHJhSGVhZGVycyI6e319"
  ],
  link_secret: linkSecret.secret,
};
