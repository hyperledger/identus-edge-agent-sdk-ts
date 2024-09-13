
import React, { useState } from "react";
import SDK from "@hyperledger/identus-edge-agent-sdk";

import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { DBConnect } from "@/components/DBConnect";
import { PageHeader } from "@/components/PageHeader";
import { AgentRequire } from "@/components/AgentRequire";

function protect(credential: SDK.Domain.Credential) {
    const newClaims: any[] = []
    credential.claims.forEach((claim) => {
        const newClaim = {}
        Object.keys(claim).forEach((key) => {
            newClaim[key] = "******"
        })
        newClaims.push(newClaim)
    })
    return newClaims
}

function Credential(props) {
    const { credential } = props;
    const app = useMountedApp();
    const [claims, setClaims] = useState(protect(credential));

    function revealAttributes(credential: SDK.Domain.Credential, claimIndex: number, field: string) {
        app.agent.instance?.pluto.getLinkSecret()
            .then((linkSecret) => {
                app.agent.instance?.revealCredentialFields(
                    credential,
                    [field],
                    linkSecret!.secret
                ).then((revealedFields) => {
                    const revealed = claims.map((claim, index) => {
                        if (claimIndex === index) {
                            return {
                                ...claim,
                                [field]: revealedFields[field]
                            }
                        }
                        return claim
                    })
                    setClaims(revealed)
                })
            })
    }

    return <div className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-4 text-1xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Credential type {credential.credentialType}
        </h1>
        <p className="mt-5 text-md font-normal text-gray-500 whitespace-normal max-w-full dark:text-gray-400"
            style={{
                textOverflow: 'ellipsis',
                overflow: "hidden"
            }}>
            Issuer {credential.issuer}
        </p>
        <p className="mt-5 text-md font-normal text-gray-500 whitespace-normal max-w-full dark:text-gray-400">
            Claims:
        </p>
        {claims.map((claim, claimIndex) =>
            Object.keys(claim)
                .filter((field) => field !== "id")
                .map((field, i) => (
                    <p
                        key={`field${i}`}
                        className="text-md font-normal text-gray-500 dark:text-gray-400"
                    >
                        {field}
                        <AgentRequire text="Revealing attributes requires agent running">
                            {claim[field] === "******" ? (
                                <button
                                    onClick={() => {
                                        revealAttributes(credential, claimIndex, field);
                                    }}
                                    className="m-3 px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Reveal
                                </button>
                            ) : (
                                <>: {claim[field]}</>
                            )}
                        </AgentRequire>
                    </p>
                ))
        )}
    </div>

}

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
                                    return <Credential credential={credential} key={`credential${credential.id}${i}`} />
                                })
                        }
                    </Box>
                </DBConnect>
            </div>
            <FooterNavigation />
        </>
    );
}