import express from "express";
import http from "http";
import {
  Schema,
  Credential,
  CredentialDefinition,
  CredentialOffer,
  CredentialRequest,
  LinkSecret,
  JsonObject
} from "@hyperledger/anoncreds-nodejs";

import * as SDK from "@input-output-hk/atala-prism-wallet-sdk";
import { randomUUID } from "crypto";

let credentialOffer: CredentialOffer;
let credentialRequest: JsonObject;

const didDB: {did: SDK.Domain.DID, privateKeys: SDK.Domain.PrivateKey[]}[] = [];
const DID = SDK.Domain.DID;
const OfferCredential = SDK.OfferCredential;
const ProtocolType = SDK.ProtocolType;
const apollo = new SDK.Apollo();
const api = new SDK.ApiImpl();
const castor = new SDK.Castor(apollo);
const pluto = {
  getAllPeerDIDs: async () => didDB
};
const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto as any);
const mercury = new SDK.Mercury(castor, didcomm, api);

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.raw({ type: "application/didcomm-encrypted+json" }));

const linkSecret = LinkSecret.create();
const linkSecretName = "Atala";

const agreementKeyCurve = {
  keyCurve: {
    curve: SDK.Domain.Curve.X25519,
  },
};
const authenticationKeyCurve = {
  keyCurve: {
    curve: SDK.Domain.Curve.ED25519,
  },
};
const KeyAgreementKeyPair: SDK.Domain.KeyPair = {
  ...agreementKeyCurve,
  privateKey: {
    ...agreementKeyCurve,
    value: Buffer.from("COd9Xhr-amD7fuswWId2706JBUY_tmjp9eiNEieJeEE"),
  },
  publicKey: {
    ...agreementKeyCurve,
    value: Buffer.from("rI3CjEk-yaFi5bQTavOmV25EJHQnDQJeIi4OV6p_f2U"),
  },
};

const authenticationKeyPair: SDK.Domain.KeyPair = {
  ...authenticationKeyCurve,
  privateKey: {
    ...authenticationKeyCurve,
    value: Buffer.from("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs"),
  },
  publicKey: {
    ...authenticationKeyCurve,
    value: Buffer.from("dm5f2GdR5BaHpRxB8bTElvE_0gIC2p404Msx9swJ914"),
  },
};

const services: SDK.Domain.Service[] = [
  new SDK.Domain.Service(
    "didcomm",
    ["DIDCommMessaging"],
    new SDK.Domain.ServiceEndpoint(
      "http://localhost:3000/",
      [],
      ["did:example:somemediator#somekey"]
    )
  ),
];

const keyPairs = [KeyAgreementKeyPair, authenticationKeyPair];
export const issuerDID = await castor.createPeerDID(keyPairs, services)

didDB.push({
  did: issuerDID,
  privateKeys:keyPairs.map((keyPair) => keyPair.privateKey)
})

export const credentialSchemaId = `${issuerDID.toString()}/schemas/email`;
export const credentialDefinitionId = `${issuerDID.toString()}/definitions/email`;

const credentialSchemaJson = {
  name: "credential schema name",
  version: "1.0",
  issuerId: issuerDID.toString(),
  attributeNames: ["email", "age"],
};
const credentialSchema = Schema.create(credentialSchemaJson);
const credentialDefinition = CredentialDefinition.create({
  schemaId: credentialSchemaId,
  schema: credentialSchema,
  supportRevocation: false,
  tag: "atala",
  signatureType: "CL",
  issuerId: issuerDID.toString(),
});
/*
1. Endpoint to send the CredentialOffer to a specific DID through didcomm protocol
2. Endpoint to send a CredentialIssued to a specific DID through didcomm protocol

3. Build extra messages to receive the generated data from the users
    3.1 Receive a CredentialRequest
    3.2 Receive the Presentation Proof

*/
app.post(
  "/", async (request: express.Request, response: express.Response) => {
    const decrypted = await mercury.unpackMessage(Buffer.from(request.body).toString());
    console.log(decrypted);
    return response.json({success: true})
  })
/**
 *
 */
app.post(
  "/createIssuedCredential", 
  async (request: express.Request, response: express.Response) => {

    const { to } = request.body;
    const issuedCredential = Credential.create({
      credentialDefinition: credentialDefinition.credentialDefinition,
      credentialDefinitionPrivate: credentialDefinition.credentialDefinitionPrivate,
      credentialOffer: credentialOffer,
      credentialRequest: credentialRequest.credentialRequest as any,
      attributeRawValues: {
       email: 'test-email@atala.com',
       age: "22"
      }
    })
    const credentialMap = new Map();
    credentialMap.set("anoncreds", issuedCredential.toJson());
    const credentialIssueDIDComm = SDK.IssueCredential.build(issuerDID, DID.fromString(to), randomUUID(),  credentialMap)
    await mercury.sendMessage(credentialIssueDIDComm.makeMessage());
    return response.json({success: true})
  }
)
app.post(
  "/createOffer",
  async (request: express.Request, response: express.Response) => {
    const { to } = request.body;
    credentialOffer = CredentialOffer.create({
      schemaId: credentialSchemaId,
      credentialDefinitionId: credentialDefinitionId,
      keyCorrectnessProof: credentialDefinition?.keyCorrectnessProof!,
    });

    /** Hack for next step */
     credentialRequest = CredentialRequest.create({
      entropy: credentialOffer.toJson().nonce as string,
      credentialDefinition: credentialDefinition?.credentialDefinition!,
      linkSecret: linkSecret,
      linkSecretId: linkSecretName,
      credentialOffer: credentialOffer,
    });

    const credentialMap = new Map();
    credentialMap.set("anoncreds", credentialOffer.toJson());

    const credentialOfferDIDComm = OfferCredential.build(
      {
        type: ProtocolType.DidcommCredentialPreview,
        attributes: [
          {
            name: "email",
            value: "atala@atala.com",
            mimeType: "text/plain",
          },
          {
            name: "age",
            value: ">=22",
            mimeType: "text/plain",
          },
        ],
      },
      issuerDID,
      DID.fromString(to),
      randomUUID(),
      credentialMap
    );

    const credentialOfferMessage = credentialOfferDIDComm.makeMessage();
    await mercury.sendMessage(credentialOfferMessage);
    return response.json({success: true})
  }
);

http.createServer(app).listen(port);

console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
