'use client'
import { uuid } from "@stablelib/uuid";

import { BASE_URL } from "@/config";
import { Store } from "@/reducers/app";

export default {
    title: 'Step 2: Configuring the Cloud Agent for SDJWT',
    description:
        'Configure your cloud agent by making the following API calls.',
    content: [
        () => (<div className="py-2 text-gray-600 transition duration-200">
            <p className="text-1xl font-semibold mb-4 text-blue-700">Creating the workshop index.mjs</p>
            <p>Create an <i>index.mjs</i> in the workshop directory inside ./demos/next-sdjwt-workshop and add the following content.</p>
        </div>),
        {
            language: 'typescript',
            code: `/// <reference types="@hyperledger/identus-edge-agent-sdk" />
import SDK from "@hyperledger/identus-edge-agent-sdk";
(async () => {
    //Workshop code goes inside
})()`,
        },
        () => (<div className="py-2 text-gray-600 transition duration-200">
            <p>Copy the following api calls into your <i>index.mjs</i> file we just created.</p>
        </div>),
        {
            title: 'Register a prism did with ed25519 keys',
            description: 'We are first going to register the Issuer\'s prism did and then publish it.',
            method: 'POST',
            endpoint: () => `${BASE_URL}/did-registrar/dids`,
            requestBody: () => ({
                "documentTemplate": {
                    "publicKeys": [
                        {
                            "id": "auth1",
                            "purpose": "authentication",
                            "curve": "Ed25519"
                        },
                        {
                            "id": "issue1",
                            "purpose": "assertionMethod",
                            "curve": "Ed25519"
                        }
                    ],
                    "services": []
                }
            }),
            curlCommand: (url, method, body) => `const registerPrismDid = await fetch("${url}", {
    method: "${method}",
    headers: { "Content-Type": "application/json" },
    body: ${body ? JSON.stringify(body) : 'undefined'}
});
const prismDidResponse = await registerPrismDid.json();
console.log('Prism DID created:', { longFormDid: prismDidResponse.longFormDid });`,
        },
        {
            title: 'Publish the prism did',
            description: 'Publishes the prism did onchain (for this demo inMemory) but writing the did documents on chain requires an Identus node connected to testnet',
            method: 'POST',
            endpoint: (store: Store) => `${BASE_URL}/did-registrar/dids/${store.longFormDid}/publications`,
            requestBody: () => null,
            curlCommand: (url, method, body) => `const publishPrismDid = await fetch("${url}", {
    method: "${method}",
    headers: { "Content-Type": "application/json" }
});
const publishResponse = await publishPrismDid.json();
console.log('DID Published:', { operation: publishResponse.scheduledOperation });`,
        },
        {
            title: 'Create a SDJWT Credential schema',
            description: 'Creates a SDJWT Credential schema which will define the claims this credentials will have',
            method: 'POST',
            endpoint: (store: Store) => `${BASE_URL}/schema-registry/schemas`,
            requestBody: (store) => {
                const publishedDid = store?.scheduledOperation?.didRef;
                return {
                    "name": "medical-prescription-schema" + uuid(),
                    "version": "2.0.0",
                    "description": "Medical Prescription Schema",
                    "type": "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json",
                    "author": publishedDid,
                    "tags": [
                        "driving",
                        "license"
                    ],
                    "schema": {
                        "$id": "https://example.com/medical-prescription-1.0.0",
                        "$schema": "https://json-schema.org/draft/2020-12/schema",
                        "description": "Medical Prescription ",
                        "type": "object",
                        "properties": {
                            "patientId": {
                                "type": "string",
                            },
                            "patientName": {
                                "type": "string"
                            },
                            "patientFamilyName": {
                                "type": "string"
                            },
                            "prescriptionId": {
                                "type": "string"
                            },
                            "dateOfIssuance": {
                                "type": "string",
                                "format": "date-time"
                            }
                        },
                        "required": [
                            "patientId",
                            "patientName",
                            "patientFamilyName",
                            "prescriptionId",
                            "dateOfIssuance"
                        ],
                        "additionalProperties": false
                    }
                }
            },
            curlCommand: (url, method, body) => `const createCredentialSchema = await fetch("${url}", {
    method: "${method}",
    headers: { "Content-Type": "application/json" },
    body: ${body ? JSON.stringify(body) : 'undefined'}
});
const schemaResponse = await createCredentialSchema.json();
console.log('Schema Created:', { schemaId: schemaResponse.id });`,
        },
    ],
}