import SDK from "@hyperledger/identus-edge-agent-sdk";
import React, { useEffect, useState } from "react";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { DBConnect } from "@/components/DBConnect";
import { Message } from "@/components/Message";
import { PageHeader } from "@/components/PageHeader";
import { AgentRequire } from "@/components/AgentRequire";
import { ConnectionSelect } from "@/components/ConnectionSelect";




export default function App() {
    const app = useMountedApp();

    const [messages, setMessages] = useState(app.messages);
    const [basicMessage, setBasicMessage] = useState<string>('Hello')
    const [destinationPeerDID, setDestinationPeerDID] = useState<string>();

    useEffect(() => {
        setMessages(app.messages)
    }, [app.messages, app.db])

    function handleSendBasicMessage() {
        if (!basicMessage || basicMessage === "") {
            throw new Error("Basic Message is required")
        }

        if (!destinationPeerDID || destinationPeerDID === "") {
            throw new Error("Destination peer did invalid")
        }
        const agent = app.agent.instance!;
        const toDID = SDK.Domain.DID.fromString(destinationPeerDID);
        agent.createNewPeerDID([], true).then((fromDID) => {
            const message = new SDK.BasicMessage(
                {
                    content: basicMessage
                },
                fromDID,
                toDID
            );
            return app.sendMessage({ agent, message: message.makeMessage() })
        });
    }

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <PageHeader>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Messages
                    </h1>
                </PageHeader>
                <DBConnect>
                    <AgentRequire>
                        <Box>
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                Send basic message
                            </h1>
                            <label htmlFor="mediatordid">Message</label>
                            <input
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                type="text"
                                value={basicMessage}
                                onChange={(e) => { setBasicMessage(e.target.value) }}
                            />
                            <ConnectionSelect
                                label="Destination PeerDID"
                                onSelectDID={(didPair) => {
                                    setDestinationPeerDID(didPair)
                                }}
                            />
                            <button
                                className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                style={{ width: 120 }}
                                onClick={handleSendBasicMessage}>
                                Send
                            </button>
                        </Box>
                    </AgentRequire>
                    <Box>
                        {
                            messages.length <= 0 ?
                                <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">You still have no messages, start the agent and as soon as they will arrive they will appear here.</p>

                                :
                                null
                        }
                        {messages.map((message, i) => {
                            return <Message message={message} key={`responseField${message.id}_${i}`} />
                        })}
                    </Box>
                </DBConnect>
            </div>
        </>
    );
}