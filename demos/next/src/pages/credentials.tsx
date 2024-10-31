
import React from "react";

import '../app/index.css'
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { DBConnect } from "@/components/DBConnect";
import { PageHeader } from "@/components/PageHeader";


import { Credential } from "@/components/Credential";


export default function App() {

    const app = useMountedApp();

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <PageHeader>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Credentials
                    </h1>
                </PageHeader>
                <DBConnect>
                    <Box>
                        {
                            app.credentials.length <= 0 ?
                                <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                                    No credentials.
                                </p>
                                :
                                app.credentials.map((credential, i) => {
                                    return <>
                                        <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                                            Credential ({credential.credentialType})
                                        </p>
                                        <Credential credential={credential} key={`credential${credential.id}${i}`} />
                                    </>
                                })
                        }
                    </Box>
                </DBConnect>
            </div>
        </>
    );
}