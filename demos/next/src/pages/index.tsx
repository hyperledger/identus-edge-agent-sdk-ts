import IndexDB from "@pluto-encrypted/indexdb";
import React, { useEffect, useState } from "react";

import SDK from "@atala/prism-wallet-sdk";

import { Box } from "../app/Box";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { DBConnect } from "@/components/DBConnect";
import { useMountedApp } from "@/reducers/store";
import { Message } from "@/components/Message";

const ListenerKey = SDK.ListenerKey;
const apollo = new SDK.Apollo();
const store = new SDK.Store({
  name: "test",
  storage: IndexDB,
  password: Buffer.from("demoapp").toString("hex")
});

const Agent: React.FC<{}> = props => {
  const app = useMountedApp();
  const { db, mediatorDID, initAgent, startAgent, stopAgent } = app;

  const agent = app.agent.instance;

  const [state, setState] = useState<string>(agent && agent.state !== undefined ? agent.state : "loading");
  const [error] = React.useState<any>();

  const [messages, setNewMessage] = React.useState<SDK.Domain.Message[]>([]);

  const handleMessages = async (
    newMessages: SDK.Domain.Message[]
  ) => {
    setNewMessage([
      ...newMessages,
      ...messages,
    ])
  };

  useEffect(() => {
    setNewMessage([
      ...messages
        .filter(({ id }) => app.messages.find((appMessage) => appMessage.id === id) !== undefined)
        .map(({ id }) => app.messages.find((appMessage) => appMessage.id === id)!)
    ])
  }, [app.messages]);

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

  const handleStart = async () => {
    if (agent) {
      startAgent({ agent })

    }
  };

  const handleStop = async () => {
    if (agent) {
      stopAgent({ agent })
    }
  };

  return (
    <>
      <div className="mx-10 mt-5 mb-30">
        <DBConnect>
          <Box>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Edge Agent
            </h1>
            <p>
              <b>Status:</b>&nbsp; {state}
            </p>
            <div>
              {state === "stopped" && (
                <>
                  <button className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={handleStart}>Start</button>
                </>
              )}

              {state === "running" && (
                <>
                  <button className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={handleStop}>Stop</button>

                  {messages.reverse().map((message, i) => {
                    return <Message message={message} key={`responseField${i}`} />
                  })}
                </>
              )}
            </div>

            {error instanceof Error && (
              <pre>
                Error: {error.message}
              </pre>
            )}
          </Box>
        </DBConnect>
      </div>
      <FooterNavigation />
    </>

  );
};



export default Agent
