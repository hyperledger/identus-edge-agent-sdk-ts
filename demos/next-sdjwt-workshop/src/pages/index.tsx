'use client'
import React, { useEffect, useState } from "react";
import { sha512 } from '@noble/hashes/sha512'
import SDK from "@hyperledger/identus-edge-agent-sdk";
import IndexDB from '@pluto-encrypted/indexdb'

import '../app/index.css';
import { uuid } from "@stablelib/uuid";
import { useMountedApp } from "@/reducers/store";
import { Message } from "@/components/Message";
import { reduxActions, Step, Store, } from "@/reducers/app";
import dynamic from "next/dynamic";
import { ApiCallComponent } from "@/components/ApiCallComponent";
import { InteractiveComponent } from "@/components/InteractiveComponent";

const CodeComponent = dynamic(() => import('@/components/CodeEditor').then((e) => e.CodeComponent), {
    ssr: false,
});

const BASE_URL = "http://localhost:8000/cloud-agent"

class ShortFormDIDResolverSample implements SDK.Domain.DIDResolver {
    method: string = "prism"

    async resolve(didString: string): Promise<SDK.Domain.DIDDocument> {
        const url = "http://localhost:8000/cloud-agent/dids/" + didString;
        const response = await fetch(url, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-gpc": "1"
            },
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const didDocument = data.didDocument;

        const servicesProperty = new SDK.Domain.Services(
            didDocument.service
        )
        const verificationMethodsProperty = new SDK.Domain.VerificationMethods(
            didDocument.verificationMethod
        )
        const coreProperties: SDK.Domain.DIDDocumentCoreProperty[] = [];
        const authenticate: SDK.Domain.Authentication[] = [];
        const assertion: SDK.Domain.AssertionMethod[] = [];

        for (const verificationMethod of didDocument.verificationMethod) {
            const isAssertion = didDocument.assertionMethod.find((method) => method === verificationMethod.id)
            if (isAssertion) {
                assertion.push(new SDK.Domain.AssertionMethod([isAssertion], [verificationMethod]))
            }
            const isAuthentication = didDocument.authentication.find((method) => method === verificationMethod.id)
            if (isAuthentication) {
                authenticate.push(new SDK.Domain.Authentication([isAuthentication], [verificationMethod]));
            }
        }

        coreProperties.push(...authenticate);
        coreProperties.push(servicesProperty);
        coreProperties.push(verificationMethodsProperty);

        const resolved = new SDK.Domain.DIDDocument(
            SDK.Domain.DID.fromString(didString),
            coreProperties
        );

        return resolved;
    }
}

const Sample: React.FC<{}> = props => {
    const app = useMountedApp()

    const agent = app.agent.instance;
    const credentials = app.credentials;

    const [messages, setMessages] = useState<SDK.Domain.Message[]>([])
    const [store, setStore] = useState<any>({})
    const password = "123456";
    const mediatorDID = 'did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19'

    async function loadAgent() {
        const hashedPassword = sha512(password)
        const apollo = new SDK.Apollo();
        const store = new SDK.Store({
            name: "testing",
            storage: IndexDB,
            password: Buffer.from(hashedPassword).toString("hex")
        });
        const pluto = new SDK.Pluto(store, apollo);
        const defaultSeed = new SDK.Apollo().createSeed([
            "repeat",
            "spider",
            "frozen",
            "drama",
            "april",
            "step",
            "engage",
            "pitch",
            "purity",
            "arrest",
            "orchard",
            "grocery",
            "green",
            "chapter",
            "know",
            "disease",
            "attend",
            "notable",
            "usage",
            "add",
            "trash",
            "dry",
            "refuse",
            "jewel"
        ])
        const extraResolvers = [
            ShortFormDIDResolverSample
        ];
        const castor = new SDK.Castor(apollo, extraResolvers)
        const agent = await SDK.Agent.initialize({
            apollo,
            castor,
            mediatorDID,
            pluto,
            seed: defaultSeed
        });
        return agent
    }

    useEffect(() => {
        async function messageEvent(newMessages) {
            if (agent) {
                app.dispatch(
                    reduxActions.messageSuccess(
                        newMessages
                    )
                )
                const issuedCredentials = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/3.0/issue-credential");
                if (issuedCredentials.length) {
                    for (const issuedCredential of issuedCredentials) {
                        const issueCredential = SDK.IssueCredential.fromMessage(issuedCredential);
                        const credential = await agent.processIssuedCredentialMessage(issueCredential);
                        app.dispatch(
                            reduxActions.credentialSuccess(
                                credential
                            )
                        )
                    }
                }
                setMessages([
                    ...messages,
                    ...newMessages.filter((m) => m instanceof SDK.Domain.Message)
                ])
            }
        }
        if (agent) {
            agent.addListener(SDK.ListenerKey.MESSAGE, messageEvent)
        }
        return () => {
            if (agent) {
                agent.removeListener(SDK.ListenerKey.MESSAGE, messageEvent)
            }
        }
    }, [agent, messages])


    const [currentStep, setCurrentStep] = useState(0);
    const [nextBusy, setNextBusy] = useState<boolean>(false);

    const steps: Step[] = [
        {
            title: 'Step 1: Configure and deploy the services',
            description:
                'Set up your environment by running the following commands in your terminal. ',
            content: [
                () => (<div className="py-2 text-gray-600 transition duration-200">
                    <p className="text-xl font-semibold text-blue-700">Cloud Agent</p>
                    <p>First,clonse the repository and <i>cd</i> into it:</p>

                </div>
                ),
                {
                    language: 'bash',
                    code: `git clone https://github.com/hyperledger/identus-cloud-agent
cd identus-cloud-agent
`,
                },
                () => (<div className="text-gray-600 transition duration-200">
                    <p>Create a new file named <i>./identus-cloud-agent/infrastructure/local/.env-verifier</i> to define the Verifier Agent environment variable configuration with the following content:</p>
                </div>
                ),
                {
                    language: 'bash',
                    code: `API_KEY_ENABLED=false
AGENT_VERSION=1.40.0
PRISM_NODE_VERSION=2.4.1
PORT=9000
NETWORK=identus
VAULT_DEV_ROOT_TOKEN_ID=root
PG_PORT=5433`,
                },
                () => (<div className="text-gray-600 transition duration-200">
                    <p>Next, run the following command to run docker compose with some configuration parameters:</p>
                </div>),
                {
                    language: 'bash',
                    code: ` ./infrastructure/local/run.sh -n issuer -b -e ./infrastructure/local/.env-issuer -p 8000 -d "$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}'))"`,
                },
                () => (<div className="py-2 text-gray-600 transition duration-200">
                    <p className="text-xl font-semibold text-blue-700">Mediator</p>
                    <p>Running the mediator is also very simple just running the docker compose command:</p>

                </div>
                ),
                {
                    language: 'bash',
                    code: `git clone https://github.com/hyperledger/identus-mediator
MEDIATOR_VERSION=1.0.0 SERVICE_ENDPOINTS="http://$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}')):8080;ws://$(ipconfig getifaddr $(route get default | grep interface | awk '{print $2}')):8080/ws" docker compose up`,
                },
            ],
        },
        {
            title: 'Step 2: Configuring the Cloud Agent for SDJWT',
            description:
                'Configure your cloud agent by making the following API calls.',
            content: [
                {
                    title: 'Register a prism did with ed25519 keys',
                    description: 'We are first going to register the Issuer\'s prism did and then publish it',
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
                    curlCommand: (url, method, body) => `curl -X ${method} ${url} -H "Content-Type: application/json" ${body ? '-d \'' + JSON.stringify(body) + '\'' : ''}`,
                },
                {
                    title: 'Publish the prism did',
                    description: 'Publishes the prism did onchain (for this demo inMemory) but writing the did documents on chain requires an Identus node connected to testnet',
                    method: 'POST',
                    endpoint: (store: Store) => `${BASE_URL}/did-registrar/dids/${store.longFormDid}/publications`,
                    requestBody: () => null,
                    curlCommand: (url, method, body) => `curl -X ${method} ${url} -H "Content-Type: application/json" ${body ? '-d \'' + JSON.stringify(body) + '\'' : ''}`,
                },
                {
                    title: 'Create a SDJWT Credential schema',
                    description: 'Creates a SDJWT Credential schema which will define the claims this credentials will have',
                    method: 'POST',
                    endpoint: (store: Store) => `${BASE_URL}/schema-registry/schemas`,
                    requestBody: (store) => {
                        const publishedDid = store?.scheduledOperation?.didRef;
                        return {
                            "name": "driving-schema" + uuid(),
                            "version": "2.0.0",
                            "description": "Driving LicenseSchema",
                            "type": "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json",
                            "author": publishedDid,
                            "tags": [
                                "driving",
                                "license"
                            ],
                            "schema": {
                                "$id": "https://example.com/driving-license-1.0.0",
                                "$schema": "https://json-schema.org/draft/2020-12/schema",
                                "description": "Driving License",
                                "type": "object",
                                "properties": {
                                    "emailAddress": {
                                        "type": "string",
                                        "format": "email"
                                    },
                                    "givenName": {
                                        "type": "string"
                                    },
                                    "familyName": {
                                        "type": "string"
                                    },
                                    "dateOfIssuance": {
                                        "type": "string",
                                        "format": "date-time"
                                    },
                                    "drivingLicenseID": {
                                        "type": "string"
                                    },
                                    "drivingClass": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                    "emailAddress",
                                    "familyName",
                                    "dateOfIssuance",
                                    "drivingLicenseID",
                                    "drivingClass"
                                ],
                                "additionalProperties": false
                            }
                        }
                    },
                    curlCommand: (url, method, body) => `curl -X ${method} ${url} -H "Content-Type: application/json" ${body ? '-d \'' + JSON.stringify(body) + '\'' : ''}`,
                },
            ],
        },
        {
            title: "Step 3: Edge Agent",
            description: "In this section we will configure our Edge Agent with a prism did resolver for SDJWT which will be resolving the DID using the Cloud Agent instance, this in production would be replaced by a custom resolver using universal resolver API or a custom solution.",
            content: [
                () => (<div className="py-2 text-gray-600 transition duration-200">
                    <p className="text-1xl font-semibold mb-4 text-blue-700">Information around prism:dids</p>
                    <p>A prism did has 2 forms, short and long form:</p>
                    <ul className="mt-5">
                        <li className="mt-2">
                            1. <span className="font-bold">Long Form</span>: This variation of the prism did, includes the public keys inside the DID, this does not require any external resolver as only thing that is needed is to decode the DID. Similar to what did:key does.
                            <div className="mt-2">
                                <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-x-auto">
                                    <code>did:prism:de34002e071ab2cdded0c04c2e0ed63e06ef16590a8a5343fae2fd65ea561857:CvsBCvgBEjYKBWF1dGgxEARKKwoHRWQyNTUxORIg2oggHKGPTkUB29bc8OH6OMGLxVWiGCQdWmImDE32oIASNwoGaXNzdWUxEAJKKwoHRWQyNTUxORIgxNycViFcMalrCcgpQYECX_aPn-_m4WordzHXry5O8k4SOwoHbWFzdGVyMBABSi4KCXNlY3AyNTZrMRIhA5fH_hHFuWj0kpfW0C4wB9rIrhPAMqY-QjyilFZr5KqxGkgKDmFnZW50LWJhc2UtdXJsEhBMaW5rZWRSZXNvdXJjZVYxGiRodHRwOi8vMTkyLjE2OC4xLjQ0OjgwMDAvY2xvdWQtYWdlbnQ</code>
                                </pre>
                            </div>

                        </li>
                        <li className="mt-2">
                            2. <span className="font-bold">Short form</span>: The same did can be shown also with its default form, as we can see the prism did is shorter as it does not include keys and that's the main reason why we would need an extra resolver
                            <div className="mt-2">
                                <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-x-auto">
                                    <code>did:prism:de34002e071ab2cdded0c04c2e0ed63e06ef16590a8a5343fae2fd65ea561857</code>
                                </pre>
                            </div>
                        </li>
                    </ul>
                    <p className="mt-5 text-1xl font-semibold mb-4 text-blue-700">Integrating a custom prism did resolver</p>
                    <p className="mt-5">A SDJWT credential will be issued by a prism did in its short form and that requires a did resolver. For the purpose of this demonstration, we will not be using a prism node or write anything onchain.</p>
                    <p className="mt-5">For this reason, we will need to build a custom short form resolver, in production would be replaced by the universal resolver API.</p>
                </div>),
                {
                    language: 'typescript',
                    code: `import SDK from "@hyperledger/identus-edge-agent-sdk";

class ShortFormDIDResolverSample implements SDK.Domain.DIDResolver {
    method: string = "prism"
    async resolve(didString: string): Promise<SDK.Domain.DIDDocument> {
        const url = "http://localhost:8000/cloud-agent/dids/" + didString;
        const response = await fetch(url, {
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        })
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const didDocument = data.didDocument;

        const servicesProperty = new SDK.Domain.Services(
            didDocument.service
        )
        const verificationMethodsProperty = new SDK.Domain.VerificationMethods(
            didDocument.verificationMethod
        )
        const coreProperties: SDK.Domain.DIDDocumentCoreProperty[] = [];
        const authenticate: SDK.Domain.Authentication[] = [];
        const assertion: SDK.Domain.AssertionMethod[] = [];

        for (const verificationMethod of didDocument.verificationMethod) {
            const isAssertion = didDocument.assertionMethod.find((method) => method === verificationMethod.id)
            if (isAssertion) {
                assertion.push(new SDK.Domain.AssertionMethod([isAssertion], [verificationMethod]))
            }
            const isAuthentication = didDocument.authentication.find((method) => method === verificationMethod.id)
            if (isAuthentication) {
                authenticate.push(new SDK.Domain.Authentication([isAuthentication], [verificationMethod]));
            }
        }

        coreProperties.push(...authenticate);
        coreProperties.push(servicesProperty);
        coreProperties.push(verificationMethodsProperty);

        const resolved = new SDK.Domain.DIDDocument(
            SDK.Domain.DID.fromString(didString),
            coreProperties
        );

        return resolved;
    }
}`,
                },
                () => (<div className="py-2 text-gray-600 transition duration-200">
                    <p className="mt-5 text-1xl font-semibold mb-4 text-blue-700">Configuring and starting the Agent</p>

                    <p>In order to create, configure and start the agent we must integrate a compatible storage module.</p>
                    <p>Also for this SDJWT example we are going to require including the ShortForm resolver that we created in the previous step.</p>
                </div>),
                {
                    language: 'typescript',
                    code: `import SDK from "@hyperledger/identus-edge-agent-sdk";
import { sha512 } from '@noble/hashes/sha512'
import IndexDB from '@pluto-encrypted/indexdb'
const hashedPassword = sha512(options.encryptionKey)
const apollo = new SDK.Apollo();
const store = new SDK.Store({
    name: "test",
    storage: IndexDB,
    password: Buffer.from(hashedPassword).toString("hex")
});
const mediatorDID = "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19" //The mediator's peer DID
const defaultSeed = apollo.createRandomSeed().seed // Random or custom seed u want to create
const extraResolvers = [
    ShortFormDIDResolverSample
];
const castor = new SDK.Castor(apollo, extraResolvers)
const agent = await Agent.initialize({
    apollo,
    castor,
    mediatorDID,
    pluto: new SDK.Pluto(store, apollo),
    seed: defaultSeed
});
`,
                },
                () => (<div className="py-2 text-gray-600 transition duration-200">
                    <p>We also require to subscribe to the message event in order to receive and process the DIDComm messages for Issuance and Presentation flows.</p>
                </div>),
                {
                    language: 'typescript',
                    code: `agent.addListener(ListenerKey.MESSAGE, (messages: SDK.Domain.Credential | SDK.Domain.DIDPair | SDK.MessageEventArg) => {
//Your custom logic here
});`,
                },
                () => (<div className="py-2 text-gray-600 transition duration-200">
                    <p>Finally, starting the agent would be as simple as: </p>
                </div>),
                {
                    language: 'typescript',
                    code: `await agent.start()`,
                },
            ],
            onNext: async () => {
                setNextBusy(true)
                const agent = await loadAgent()
                await agent.start();
                const peerDID = await agent.createNewPeerDID([], true)
                app.dispatch(
                    reduxActions.updateAgent({
                        agent,
                        selfDID: peerDID,
                        pluto: agent.pluto
                    })
                )
                setNextBusy(false)
            }
        },
        {
            title: 'Step 4: Connectionless Issuance flow with SDJWT',
            description:
                `In this section we will be requesting a Credential Offer from the Cloud Agent.A Connectionless Credential Offer is an Out of Band Invitation with a Credential Offer Attachment.
This should be a URI with a single query parameter \`_oob\`, which is an encoded JSON.`,
            content: [
                () => store.invitation?.invitationUrl && <div className="mt-4">
                    <p className="mt-5 text-1xl font-semibold mb-4 text-blue-700">API Calls</p>
                </div>,
                {
                    title: 'Obtain a Connectionless Credential Offer from an Issuer',
                    description: `We will be using the data from previous api calls, concretely the Issuer's short form did ${store?.scheduledOperation?.didRef ?? 'error'}`,
                    method: 'POST',
                    endpoint: () => `${BASE_URL}/issue-credentials/credential-offers/invitation`,
                    requestBody: () => ({
                        "goalCode": "issue-vc",
                        "goal": "To issue a Faber College Graduate credential",
                        "issuingDID": store?.scheduledOperation?.didRef,
                        "validityPeriod": 3600,
                        "automaticIssuance": true,
                        "credentialFormat": "SDJWT",
                        "claims": {
                            "emailAddress": "alice@wonderland.com",
                            "givenName": "Alice",
                            "familyName": "Wonderland",
                            "dateOfIssuance": "2020-11-13T20:20:39+00:00",
                            "drivingLicenseID": "12345",
                            "drivingClass": 3
                        }
                    }),
                    curlCommand: (url, method, body) => `curl -X ${method} ${url} -H "Content-Type: application/json" ${body ? '-d \'' + JSON.stringify(body) + '\'' : ''}`,
                },
                () => store.invitation?.invitationUrl && (
                    <div className="mt-4">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Your OOB Code:
                        </p>
                        <CodeComponent content={{ language: 'typescript', code: store.invitation?.invitationUrl }} />
                    </div>
                ),
                () => {
                    if (!store.invitation?.invitationUrl || !agent) {
                        return null
                    }
                    return <div className="mt-4">
                        <p className="mt-5 text-1xl font-semibold mb-4 text-blue-700">UI: Accept OOB Offers</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            In order to process the out of band Offer, you must run the following code:
                        </p>
                        <CodeComponent content={{
                            language: 'typescript',
                            code: `const parsed = await agent.parseOOBInvitation(new URL("${store.invitation?.invitationUrl}"));
await agent.acceptInvitation(parsed, 'SampleCredentialOfferOOB');
                        ` }} />
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Once the OOB invitation is processed a Credential Offer Message will be emitted and we will receive a call in the event listener we defined earlier:
                        </p>
                        <button
                            className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            onClick={async () => {
                                const parsed = await agent.parseOOBInvitation(new URL(store.invitation?.invitationUrl));
                                await agent.acceptInvitation(parsed);
                            }}>
                            Accept OOB Credential Offer
                        </button>
                        {
                            messages.filter((m) => {
                                return m.piuri === SDK.ProtocolType.DidcommIssueCredential || m.piuri === SDK.ProtocolType.DidcommOfferCredential
                            }).map((message, i) => {
                                return <Message key={message.id} message={message} />
                            })
                        }
                    </div>
                },
            ],
            onNext: async (store) => {
                setStore({
                    ...store,
                    invitation: undefined
                })
            }
        },
        {
            title: 'Step 5: Connectionless Presentation flow with SDJWT',
            description:
                `In this section we will be requesting a Presentation Request from the Cloud Agent. A Connectionless Presentation Request is an Out of Band Invitation with a Presentation Request Attachment.
This should be a URI with a single query parameter \`_oob\`, which is an encoded JSON.`,
            content: [
                () => store.invitation?.invitationUrl && <div className="mt-4">
                    <p className="mt-5 text-1xl font-semibold mb-4 text-blue-700">API Calls</p>
                </div>,
                {
                    title: 'Obtain a Connectionless Presentation request from an Issuer',
                    description: `We will be using the data from previous api calls, concretely the Issuer's short form did ${store?.scheduledOperation?.didRef ?? 'error'}`,
                    method: 'POST',
                    endpoint: () => `${BASE_URL}/present-proof/presentations/invitation`,
                    requestBody: () => ({
                        "goalCode": "present-vp",
                        "goal": "Request proof of vaccination information",
                        "proofs": [

                        ],
                        "claims": {

                        },
                        "credentialFormat": "SDJWT",
                        "options": {
                            "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",
                            "domain": "https://prism-verifier.com"
                        }
                    }
                    ),
                    curlCommand: (url, method, body) => `curl -X ${method} ${url} -H "Content-Type: application/json" ${body ? '-d \'' + JSON.stringify(body) + '\'' : ''}`,
                },
                () => store.invitation?.invitationUrl && (
                    <div className="mt-4">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Your OOB Code:
                        </p>
                        <CodeComponent content={{ language: 'typescript', code: store.invitation?.invitationUrl }} />
                    </div>
                ),
                () => {
                    if (!store.invitation?.invitationUrl || !agent) {
                        return null
                    }
                    return <div className="mt-4">
                        <p className="mt-5 text-1xl font-semibold mb-4 text-blue-700">UI: Accept OOB Presentations</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            In order to process the out of band Presentation Request, you must run the following code:
                        </p>
                        <CodeComponent content={{
                            language: 'typescript',
                            code: `const parsed = await agent.parseOOBInvitation(new URL("${store.invitation?.invitationUrl}"));
await agent.acceptInvitation(parsed, 'SampleCredentialOfferOOB');
                        ` }} />
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Once the OOB invitation is processed a Presentation Request Message will be emitted and we will receive a call in the event listener we defined earlier:
                        </p>
                        <button
                            className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            onClick={async () => {
                                const parsed = await agent.parseOOBInvitation(new URL(store.invitation?.invitationUrl));
                                await agent.acceptInvitation(parsed);
                            }}>
                            Accept OOB Presentation Request
                        </button>
                        {
                            messages.filter((m) => {
                                return m.piuri === SDK.ProtocolType.DidcommRequestPresentation
                            }).map((message, i) => {
                                return <Message key={message.id} message={message} />
                            })
                        }
                    </div>
                },
                {
                    title: 'Verify the Presentation submission',
                    description: 'This will confirm if the SDJWT Presentation submission is valid',
                    method: 'GET',
                    endpoint: (store: Store) => `${BASE_URL}/present-proof/presentations/${store.presentationId}`,
                    requestBody: (store) => {
                        return null
                    },
                    curlCommand: (url, method, body) => `curl -X ${method} ${url} -H "Content-Type: application/json" ${body ? '-d \'' + JSON.stringify(body) + '\'' : ''}`,
                },
            ],

        },
    ];


    async function handleNext() {
        if (step.onNext) {
            await step.onNext(store)
        }
        setCurrentStep((prev) => prev + 1)
    }

    const step = steps[currentStep];

    return (
        <div className="w-full p-8 font-sans bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Hyperledger Identus Workshop
            </h1>
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                    {step.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    {step.description}
                </p>
                {
                    step.content.map((content, i) => <div key={`step${currentStep}Content${i}`}>
                        {
                            "language" in content && <CodeComponent content={content} />
                        }
                        {
                            "curlCommand" in content && <ApiCallComponent store={store} content={content} onResponse={(response) => setStore({
                                ...store,
                                ...response
                            })} />
                        }
                        {
                            typeof content === "function" && <InteractiveComponent content={content} />
                        }
                    </div>)
                }

                {/* Navigation Buttons */}
                <div className="flex justify-end mt-10">

                    <button
                        className={`px-4 py-2 ${nextBusy ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-500'} text-white rounded-lg  transition duration-200 disabled:opacity-50`}
                        onClick={handleNext}
                        disabled={
                            currentStep === steps.length - 1 ||
                            nextBusy ||
                            (currentStep === 1 && !store.guid) ||
                            (currentStep === 3 && credentials.length <= 0)
                        }
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sample;
