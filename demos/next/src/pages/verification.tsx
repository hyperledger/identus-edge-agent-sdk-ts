import React, { useEffect, useState } from "react";

import SDK from "@atala/prism-wallet-sdk";

import { Box } from "../app/Box";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { DBConnect } from "@/components/DBConnect";
import { useMountedApp } from "@/reducers/store";
import { Message } from "@/components/Message";
import { AgentRequire } from "@/components/AgentRequire";
import { PageHeader } from "@/components/PageHeader";

const ListenerKey = SDK.ListenerKey;
function removeDuplicates(messages: SDK.Domain.Message[]) {
    const uniqueMessages = new Map();
    messages.forEach(message => {
        uniqueMessages.set(message.id, message);
    });
    return Array.from(uniqueMessages.values());
}
const Verification: React.FC<{}> = props => {
    const app = useMountedApp();
    const { db, mediatorDID, initAgent } = app;

    const agent = app.agent.instance;

    const [state, setState] = useState<string>(agent && agent.state !== undefined ? agent.state : "loading");
    const [error] = React.useState<any>();

    const [messages, setMessages] = useState(app.messages);

    useEffect(() => {
        setMessages(app.messages)
    }, [app.messages, app.db])

    const [requiredFields, setRequiredFields] = React.useState<string>("emailAddress=test@email.com")
    const [trustIssuers, setTrustIssuers] = React.useState<string>("did:prism:a0209ebd691c5ec20636f206b3e101c726fdc1c22b9b850b4b811ac4a82e28d8")
    const [sendTo, setSendTo] = React.useState<string>("did:peer:2.Ez6LShzJ7Ew7dFka1sfhP5KtXQfCXp8Zj9VU5ay9KxgRoCJ5x.Vz6MkgTWF2hKU4e3cCrTuPwXJV2mUXZrxgBB9tYgAXwFbXeDC");
    const handleMessages = async (
        newMessages: SDK.Domain.Message[]
    ) => {
        setMessages(removeDuplicates([
            ...newMessages,
            ...messages,
        ] as any))
    };

    useEffect(() => {
        setMessages(removeDuplicates([
            ...messages
                .filter(({ id }) => app.messages.find((appMessage) => appMessage.id === id) !== undefined)
                .map(({ id }) => app.messages.find((appMessage) => appMessage.id === id)!),
            ...(app.messages || [])
        ]).filter(({ piuri }) => piuri === "https://didcomm.atalaprism.io/present-proof/3.0/presentation"))
    }, [app.messages, db.connected]);

    useEffect(() => {
        if (!app.agent.instance && db.instance) {
            initAgent({ mediatorDID, pluto: db.instance })
        }
        if (app.agent && app.agent.instance) {
            setState(app.agent.instance.state)
        }
    }, [app.agent, db]);

    useEffect(() => {
        if (agent) {
            agent.addListener(ListenerKey.MESSAGE, handleMessages);
        }
        return () => {
            if (agent) {
                agent.removeListener(ListenerKey.MESSAGE, handleMessages);
            }
        }
    }, [agent])

    const handleInitiate = async () => {
        if (!sendTo) {
            throw new Error("Sent to is required")
        }
        const agent = app.agent.instance!;
        const claims = requiredFields.split(",").reduce<SDK.Domain.Claims>((all, requiredField) => {
            const [varName, varValue] = requiredField.split("=");
            if (typeof varValue === "string") {
                all[varName] = {
                    type: 'string',
                    pattern: varValue
                }
            } else {
                all[varName] = {
                    type: 'string',
                    value: varValue
                }
            }
            return all
        }, {});
        const did = SDK.Domain.DID.fromString(sendTo)
        return app.initiatePresentationRequest({
            agent: agent,
            toDID: did,
            presentationClaims: {
                issuer: trustIssuers.split(",").at(0),
                claims: claims
            }
        })
    }

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <Box>
                    <PageHeader>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Edge Agent
                        </h1>
                    </PageHeader>
                    <DBConnect>
                        <div>
                            <AgentRequire text="In order to start a Verification request the Edge Agent needs to be started first." >
                                <Box>
                                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                        Initiate Verification request
                                    </h1>
                                    <label htmlFor="mediatordid">Required claims by variable=value,</label>
                                    <input
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        type="text"
                                        value={requiredFields}
                                        onChange={(e) => { setRequiredFields(e.target.value) }}
                                    />
                                    <label htmlFor="mediatordid">Issuers by ,</label>
                                    <input
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type="text"
                                        value={trustIssuers}
                                        onChange={(e) => { setTrustIssuers(e.target.value) }}
                                    />
                                    <label htmlFor="mediatordid">Send to ,</label>
                                    <input
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type="text"
                                        value={sendTo}
                                        onChange={(e) => { setSendTo(e.target.value) }}
                                    />
                                    <button
                                        className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        style={{ width: 120 }}
                                        onClick={handleInitiate}>
                                        Initiate
                                    </button>
                                </Box>
                            </AgentRequire>
                            <>
                                {messages.map((message, i) => {
                                    return <Message message={message} key={`responseField${i}`} />
                                })}
                            </>
                        </div>
                        {error instanceof Error && (
                            <pre>
                                Error: {error.message}
                            </pre>
                        )}
                    </DBConnect>
                </Box>
            </div>
            <FooterNavigation />
        </>

    );
};



export default Verification
