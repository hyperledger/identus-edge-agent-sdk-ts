
import { useMountedApp } from "@/reducers/store";
import SDK from "@atala/prism-wallet-sdk";
import React, { useCallback, useEffect } from "react";
import { AgentRequire } from "./AgentRequire";

const ListenerKey = SDK.ListenerKey;

export const OOB: React.FC<{ agent: SDK.Agent, pluto: SDK.Domain.Pluto; }> = props => {
    const app = useMountedApp();
    const agent = app.agent.instance;

    const CONNECTION_EVENT = ListenerKey.CONNECTION;
    const [connections, setConnections] = React.useState<Array<any>>([]);
    const [oob, setOOB] = React.useState<string>();

    const handleConnections = useCallback((event: any) => {
        setConnections([...connections, event]);
    }, []);

    useEffect(() => {
        if (agent) {
            agent.addListener(CONNECTION_EVENT, handleConnections);
        }
        return () => {
            if (agent) {
                agent.removeListener(CONNECTION_EVENT, handleConnections);
            }
        }
    }, [agent])

    const handleOnChange = (e: any) => {
        setOOB(e.target.value);
    };

    async function handleParseOOB() {
        if (!oob) {
            return;
        }
        if (!agent) {
            throw new Error("Start the agent first")
        }
        const parsed = await agent.parseOOBInvitation(new URL(oob));
        await agent.acceptInvitation(parsed);
    }

    const connection = connections.at(0);

    return <>
        <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900  dark:text-white">
            Establish OOB Connection
        </h1>
        <AgentRequire text="Agent required You cannot process an OOB invitation while the agent is not running.">
            <p>
                <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste out of band connection QRCode here" type="text" value={oob ?? ""} onChange={handleOnChange} />
            </p>
            <button className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={handleParseOOB}>Create connection</button>

        </AgentRequire>
        {!!connection && (
            <>
                <p>Stored OOB Connection at <b>{connection.name}</b></p>
            </>
        )}
    </>;
};
