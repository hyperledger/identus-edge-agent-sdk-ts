import { useMountedApp } from "@/reducers/store";
import React from "react";
import { useEffect } from "react";

export function PageHeader({ children }) {
    const app = useMountedApp();
    const { db, mediatorDID, initAgent } = app;

    const agent = app.agent.instance;
    const handleStart = async () => {
        if (agent) {
            app.startAgent({ agent })
        }
    };

    const handleStop = async () => {
        if (agent) {
            app.stopAgent({ agent })
        }
    };

    useEffect(() => {
        if (!app.agent.instance && db.instance) {
            initAgent({ mediatorDID, pluto: db.instance })
        }
    }, [app.agent, db]);

    const canStart =
        (app.db.connected && !app.agent.instance?.state) ||
        app.agent.instance?.state === "stopped";

    const [isClicked, setIsClicked] = React.useState(false);

    return <>

        <div className="flex justify-left">
            <div className="mx-2 my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white">

                {children}
            </div>

            <div className="mx-2 mt-10 items-center justify-center px-5 py-3 text-center text-white">
                <p className="text-base font-medium ">
                    <b>Status:</b>&nbsp; {app.agent.instance?.state ?? 'stopped'}
                </p>
                {app.agent.instance?.state === "running" && app.agent.selfDID &&
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(app.agent.selfDID!.toString()).then(() => {
                                setIsClicked(true);
                                setTimeout(() => setIsClicked(false), 300);
                            })
                        }}
                        className={`text-sm text-blue-500 font-xs transition-transform duration-300 ${isClicked ? 'scale-110' : ''}`}
                    >
                        copy did
                    </button>}
            </div>



            {canStart && (
                <div className="mx-2 my-5 inline-flex px-5 py-3 items-center justify-center ">
                    <button className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={handleStart}>Start</button>
                </div>
            )}

            {app.agent.instance?.state === "running" && (
                <div className="mx-2 my-5 inline-flex px-5 py-3 items-center justify-center ">
                    <button className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={handleStop}>Stop</button>
                </div>
            )}
        </div>



    </>
}