import React, { useEffect, useState } from "react";
import cookieCutter from 'cookie-cutter'

import { DBConnect } from "./DBConnect";
import { useRouter } from "next/router";
import { AgentRequire } from "./AgentRequire";
import { useMountedApp } from "@/reducers/store";
import SDK from '@hyperledger/identus-edge-agent-sdk'
type OIDCPROPS = {
    redirectUrl: string,
    issuerId: string,
    issuerBaseUrl?: string,
    issuerDid: string,
    clientId: string,
    credentialConfigurationId: string,
    children?: any
}
export function OIDC({ clientId }: OIDCPROPS) {
    const router = useRouter();
    const app = useMountedApp();
    const [url, setRedirectUrl] = useState<string>();
    const [credential, setCredential] = useState<SDK.Domain.Credential>();

    useEffect(() => {
        /**
         * Extract the current url queryParameters
         * Extract credential_offer and decode the queryString value
         */
        if (router.isReady) {
            const { credential_offer, session_state } = router.query;
            if (!app.agent.hasStarted) return
            if (session_state) {
                const decoded = JSON.parse(cookieCutter.get('oidvci-offer'));
                app.agent.instance?.resolveCredentialOffer(
                    decoded,
                    clientId,
                    "http://localhost:3000"
                ).then((authRequest) => {
                    app.agent.instance?.resolveCredentialRequest(
                        decoded,
                        authRequest,
                        { callbackUrl: window.location.toString() }

                    ).then((cred) => {
                        router.push('/', undefined, { shallow: true });
                        setCredential(cred)
                    })
                });
            } else if (credential_offer) {
                try {
                    // Decode the credential_offer value
                    const decoded = JSON.parse(decodeURIComponent(credential_offer as string));
                    cookieCutter.set('oidvci-offer', JSON.stringify(decoded));
                    app.agent.instance?.resolveCredentialOffer(
                        decoded,
                        clientId,
                        "http://localhost:3000"
                    ).then((authRequest) => {
                        const loginUrl = authRequest.url.href;
                        setRedirectUrl(loginUrl)
                        setTimeout(() => {
                            router.push(loginUrl)
                        }, 5000)
                    })


                } catch (error) {
                    console.error('Error decoding credential_offer:', error);
                }
            }

        }
    }, [router.isReady, router.query, app.agent]);
    return <>
        <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert">
            <DBConnect>
                <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
                    <AgentRequire text="Start the agent and follow the instructions for OID VCI">
                        {
                            credential ? <>
                                Your JWT Credential:  {credential.id.slice(0, 70)}

                            </> : <>
                                {
                                    !url && <>
                                        <div className="mb-6 text-center">
                                            <p className="text-lg text-gray-600 mb-4">
                                                By connecting with the issuer, you'll be using OpenID for Verifiable Credential Issuance (OID4VCI).
                                            </p>
                                            <p className="text-md text-gray-500">
                                                This secure protocol ensures your credentials are issued safely and efficiently.
                                            </p>
                                        </div>

                                    </>
                                }
                                {
                                    url && <>

                                        <div className="mb-6 text-center">
                                            <p className="text-lg text-gray-600 mb-4">
                                                Redirecting you to the issuance portal, 5seconds.
                                            </p>
                                        </div>
                                    </>
                                }
                                <div className="flex justify-center">
                                    <button onClick={() => {
                                        router.push(`/issuer`);
                                    }} className="flex items-center justify-center px-6 py-3 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full shadow-md transition duration-300 ease-in-out">
                                        <img
                                            src="/logo.png"
                                            alt="Identus logo"
                                            width="200"
                                        />
                                    </button>
                                </div>
                                {
                                    !url && <>
                                        <div className="mt-6 text-center">
                                            <p className="text-sm text-gray-500">
                                                Click the button above to initiate the secure connection process.
                                            </p>
                                        </div>
                                    </>
                                }
                            </>
                        }

                    </AgentRequire>
                </div>
            </DBConnect>
        </div>
    </>
}