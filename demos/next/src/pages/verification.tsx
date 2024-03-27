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

const Verification: React.FC<{}> = props => {
    const app = useMountedApp();
    const { db, mediatorDID, initAgent, startAgent, stopAgent } = app;

    const agent = app.agent.instance;

    const [state, setState] = useState<string>(agent && agent.state !== undefined ? agent.state : "loading");
    const [error] = React.useState<any>();

    const [messages, setMessages] = useState(app.messages);

    useEffect(() => {
        setMessages(app.messages)
    }, [app.messages, app.db])

    const [requiredFields, setRequiredFields] = React.useState<string>("emailAddress")
    const [trustIssuers, setTrustIssuers] = React.useState<string>("did:prism:64dab5c8e887c705e3079f61373929eecfc4f570952adaef7a04192b50cb3138")

    const handleMessages = async (
        newMessages: SDK.Domain.Message[]
    ) => {
        setMessages([
            ...newMessages,
            ...messages,
        ] as any)
    };

    useEffect(() => {
        setMessages([
            ...messages
                .filter(({ id }) => app.messages.find((appMessage) => appMessage.id === id) !== undefined)
                .map(({ id }) => app.messages.find((appMessage) => appMessage.id === id)!),
            ...(app.messages || [])
        ].filter(({ piuri }) => piuri === "https://didcomm.atalaprism.io/present-proof/3.0/presentation"))
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
        const agent = app.agent.instance!;
        agent.createNewPeerDID(
            [],
            true
        ).then((did) => {
            return app.initiatePresentationRequest({
                agent: agent,
                toDID: did,
                trustIssuers: trustIssuers.split(","),
                requiredFields: requiredFields.split(",")
            })
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
                                    <label htmlFor="mediatordid">Required fields by ,</label>
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
                                    <button
                                        className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        style={{ width: 120 }}
                                        onClick={handleInitiate}>
                                        Initiate
                                    </button>
                                </Box>
                            </AgentRequire>
                            <>
                                {messages.reverse().map((message, i) => {
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
