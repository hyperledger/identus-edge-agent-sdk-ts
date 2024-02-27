
import React, { useEffect } from "react";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { DBConnect } from "@/components/DBConnect";
import { OOB } from "@/components/OOB";

export default function App() {

    const app = useMountedApp();
    const [connections, setConnections] = React.useState<any>([]);

    useEffect(() => {
        setConnections(app.connections)
    }, [app.connections])

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Connections
                </h1>
                <DBConnect>
                    <Box>
                        {
                            connections.length <= 0 ?
                                <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                                    No connections.
                                </p>

                                :
                                null
                        }
                        <OOB agent={app.agent} pluto={app.db.instance} />
                        {
                            connections.map((connection, i) => {
                                return <p key={`connection${i}`} className="my-5 overflow-x-auto h-auto text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                                    {connection.name} with {connection.receiver.toString()}
                                </p>
                            })
                        }
                    </Box>
                </DBConnect>
            </div>
            <FooterNavigation />
        </>
    );
}