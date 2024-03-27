import SDK from "@atala/prism-wallet-sdk";
import React, { useEffect, useState } from "react";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { DBConnect } from "@/components/DBConnect";
import { Message } from "@/components/Message";
import { PageHeader } from "@/components/PageHeader";




export default function App() {
    const app = useMountedApp();

    const [messages, setMessages] = useState(app.messages);

    useEffect(() => {
        setMessages(app.messages)
    }, [app.messages, app.db])

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <PageHeader>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Messages
                    </h1>
                </PageHeader>
                <DBConnect>
                    <Box>
                        {
                            messages.length <= 0 ?
                                <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">You still have no messages, start the agent and as soon as they will arrive they will appear here.</p>

                                :
                                null
                        }
                        {messages.map((message, i) => {
                            return <Message message={message} key={`responseField${i}`} />
                        })}
                    </Box>
                </DBConnect>
            </div>
            <FooterNavigation />
        </>
    );
}