import React, { useEffect, useState } from "react";

import SDK from "@hyperledger/identus-edge-agent-sdk";

import { Box } from "../app/Box";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { DBConnect } from "@/components/DBConnect";
import { useMountedApp } from "@/reducers/store";
import { Message } from "@/components/Message";
import { AgentRequire } from "@/components/AgentRequire";
import { PageHeader } from "@/components/PageHeader";
import { ExtendedMessage } from "@/reducers/app";
import { ConnectionSelect } from "@/components/ConnectionSelect";

const ListenerKey = SDK.ListenerKey;
function removeDuplicates(messages: ExtendedMessage[]): ExtendedMessage[] {
    const uniqueMessages = new Map();
    messages.forEach(message => {
        uniqueMessages.set(message.id, message);
    });
    return Array.from(uniqueMessages.values());
}

const VerificationRequestAnoncreds: React.FC<{ onHandleInitiate: <T extends SDK.Domain.CredentialType = SDK.Domain.CredentialType.JWT>(claims: SDK.Domain.PresentationClaims<T>, type: T) => void }> = props => {
    const [requiredFields, setRequiredFields] = React.useState<string>("emailAddress")
    const [newField, setNewField] = React.useState<string>("age");
    const [newComparator, setNewComparator] = React.useState<string>(">=");
    const [newValue, setNewValue] = React.useState<number>(18);

    const [predicates, setPredicates] = React.useState<SDK.Domain.AnoncredsInputFieldFilter[]>([]);

    return <AgentRequire text="In order to start a Verification request the Edge Agent needs to be started first." >
        <p>Predicates</p>
        <div className="flex">
            <div className="w-1/3">
                Field
            </div>
            <div className="w-1/3">
                Match
            </div>
            <div className="w-1/3">
                Value
            </div>
        </div>
        <div className="flex">
            <div className="w-1/3 ">
                <input
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="newpredicate"
                    type="text"
                    value={newField}
                    onChange={(e) => { setNewField(e.target.value) }}
                />
            </div>
            <div className="w-1/3 pl-4">
                <input
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="newmatch"
                    type="text"
                    value={newComparator}
                    onChange={(e) => { setNewComparator(e.target.value) }}
                />
            </div>
            <div className="w-1/3 pl-4">
                <div className="flex">
                    <div className="w-2/3 ">
                        <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="newvalue"
                            type="text"
                            value={newValue}
                            onChange={(e) => { setNewValue(parseInt(e.target.value)) }}
                        />
                    </div>
                    <div className="w-1/3 ">
                        <button
                            onClick={() => {

                                const predicateField = newComparator === ">" ? "$gt" :
                                    newComparator === ">=" ? "$gte" :
                                        newComparator === "<" ? "$lt" :
                                            newComparator === "<=" ? '$lte' : undefined;

                                if (predicateField) {
                                    setPredicates([
                                        ...predicates.filter(({ name }) => newField !== name),
                                        {
                                            type: "string",
                                            name: newField,
                                            [predicateField]: newValue

                                        }
                                    ])
                                }

                            }}
                            className="ml-4 flex items-center justify-center w-10 h-10 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                            +
                        </button>
                    </div>
                </div>
            </div>

        </div>
        {
            predicates.map((predicate, i) =>
                <p className="my-2 text-md font-normal text-gray-500 whitespace-normal max-w-full dark:text-gray-400 flex justify-between items-center" key={`predicate${i}`}>
                    Predicate {predicate.name} should be
                    {predicate.$gt ? ' > ' + predicate.$gt :
                        predicate.$gte ? ' >= ' + predicate.$gte :
                            predicate.$lt ? ' < ' + predicate.$lt :
                                predicate.$lte ? ' <= ' + predicate.$lte : 'err'}
                    <button
                        onClick={() => {
                            setPredicates(predicates.filter(({ name }) => name !== predicate.name))
                        }}

                        className="ml-4 flex w-5 h-5 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                        &nbsp;
                    </button>
                </p>)
        }
        <label htmlFor="mediatordid">Attributes<span style={{ fontSize: 11 }}>(split by ,)</span></label>
        <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={requiredFields}
            onChange={(e) => { setRequiredFields(e.target.value) }}
        />
        <button
            className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            style={{ width: 120 }}
            onClick={() => {
                props.onHandleInitiate<SDK.Domain.CredentialType.AnonCreds>({
                    predicates: predicates.reduce((_, predicate) => ({ ..._, [predicate.name]: predicate }), {}),
                    attributes: requiredFields.split(",").reduce((_, attribute) => ({ ..._, [attribute]: { name: attribute } }), {})
                }, SDK.Domain.CredentialType.AnonCreds)
            }}>
            Initiate
        </button>
    </AgentRequire>
}

const VerificationRequestJWT: React.FC<{
    onHandleInitiate: <T extends SDK.Domain.CredentialType = SDK.Domain.CredentialType.JWT>(
        claims: SDK.Domain.PresentationClaims<T>,
        type: T
    ) => void,
    type: SDK.Domain.CredentialType
}> = props => {
    const [presentationClaims, setPresentationClaims] = useState<SDK.Domain.PresentationClaims>();
    const [requiredFields, setRequiredFields] = React.useState<string>("emailAddress=test@email.com")
    const [trustIssuers, setTrustIssuers] = React.useState<string>("did:prism:a0209ebd691c5ec20636f206b3e101c726fdc1c22b9b850b4b811ac4a82e28d8")
    return <AgentRequire text="In order to start a Verification request the Edge Agent needs to be started first." >
        <label htmlFor="requiredJWTClaims">Required claims<span style={{ fontSize: 11 }}>(variable=value split by ,)</span></label>
        <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="requiredJWTClaims"
            type="text"
            value={requiredFields}
            onChange={(e) => { setRequiredFields(e.target.value) }}
        />
        <label htmlFor="issuedByJWT">Issuer</label>
        <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="issuedByJWT"
            type="text"
            value={trustIssuers}
            onChange={(e) => { setTrustIssuers(e.target.value) }}
        />
        <button
            className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            style={{ width: 120 }}
            onClick={() => {
                props.onHandleInitiate({
                    issuer: trustIssuers.split(",").at(0),
                    claims: requiredFields.split(",").reduce<SDK.Domain.Claims>((all, requiredField) => {
                        const [varName, varValue] = requiredField.split("=");
                        if (typeof varValue === "string") {
                            all[varName] = {
                                type: 'string',
                                pattern: varValue
                            }
                        } else {
                            all[varName] = {
                                type: 'string',
                                value: varValue
                            }
                        }
                        return all
                    }, {})
                }, props.type)
            }}>
            Initiate
        </button>

    </AgentRequire>
}

const VerificationRequest: React.FC<{}> = props => {
    const app = useMountedApp();
    const agent = app.agent.instance;
    const [type, setType] = React.useState<string>(SDK.Domain.CredentialType.JWT);
    const [sendTo, setSendTo] = React.useState<string>("did:peer:2.Ez6LSsxGzBz9zQJWK7e3UaU7boL3wmKAdSbHuWc2KTTC4Ss4q.Vz6Mkt9bqXCEAN8JhFeeAbTkSBQz4yZCVmV1dgjaiyXt4pMQc.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ");

    function onHandleInitiate<T extends SDK.Domain.CredentialType = SDK.Domain.CredentialType.JWT>(
        claims: SDK.Domain.PresentationClaims<T>,
        type: T
    ) {
        if (!agent) {
            throw new Error("Start agent first")
        }
        const did = SDK.Domain.DID.fromString(sendTo);
        return app.initiatePresentationRequest({
            agent: agent,
            toDID: did,
            presentationClaims: claims,
            type
        })
    }

    return <div>
        <h3 className="mb-4 text-4xs font-extrabold tracking-tight leading-none text-gray-900  dark:text-white text-center">
            Initiate Verification request
        </h3>
        <label
            htmlFor="verificationType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Type
        </label>
        <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            id="verificationType"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={SDK.Domain.CredentialType.JWT}>JWT</option>
            <option value={SDK.Domain.CredentialType.SDJWT}>SD+JWT</option>
            <option value={SDK.Domain.CredentialType.AnonCreds}>Anoncreds</option>
        </select>

        <ConnectionSelect
            label="To"
            onSelect={(connection) => {
                setSendTo(connection.receiver.toString())
            }}
        />

        {
            (type === SDK.Domain.CredentialType.JWT || type === SDK.Domain.CredentialType.SDJWT) &&
            <VerificationRequestJWT onHandleInitiate={onHandleInitiate} type={type} />
        }
        {
            type === SDK.Domain.CredentialType.AnonCreds &&
            <VerificationRequestAnoncreds onHandleInitiate={onHandleInitiate} />
        }
    </div>
}

function onlyReceived(messages: ExtendedMessage[]): ExtendedMessage[] {
    return messages.filter((message) => message.direction !== 0)
}

const Verification: React.FC<{}> = props => {
    const app = useMountedApp();
    const { db, mediatorDID, initAgent } = app;
    const agent = app.agent.instance;
    const [error] = React.useState<any>();

    const [messages, setMessages] = useState(
        onlyReceived(app.messages)
    );

    useEffect(() => {
        setMessages(onlyReceived(app.messages))
    }, [app.messages, app.db])

    const handleMessages = async (
        newMessages: ExtendedMessage[]
    ) => {
        setMessages(
            removeDuplicates(onlyReceived([
                ...newMessages,
                ...messages,
            ]))
        )
    };

    useEffect(() => {
        const withoutDuplicates = removeDuplicates(onlyReceived([
            ...messages
                .filter(({ id }) => app.messages.find((appMessage) => appMessage.id === id) !== undefined)
                .map(({ id }) => app.messages.find((appMessage) => appMessage.id === id)!),
            ...(app.messages || [])
        ]))
            .filter(({ piuri }) => piuri === "https://didcomm.atalaprism.io/present-proof/3.0/presentation")

        setMessages(withoutDuplicates)

    }, [app.messages, db.connected]);

    useEffect(() => {
        if (!app.agent.instance && db.instance) {
            initAgent({ mediatorDID, pluto: db.instance, defaultSeed: app.defaultSeed })
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

    return (
        <>
            <div className="mx-10 mt-5 mb-30">

                <PageHeader>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Edge Agent
                    </h1>
                </PageHeader>
                <DBConnect>
                    <Box>
                        <div className="flex">
                            <div className="w-1/3 p-4 ">
                                <VerificationRequest />
                            </div>
                            <div className="w-2/3 p-4">
                                {messages.map((message, i) => {
                                    return <Message message={message} key={`verification_message_${message.id}_${i}`} />
                                })}
                            </div>
                        </div>


                        {error instanceof Error && (
                            <pre>
                                Error: {error.message}
                            </pre>
                        )}
                    </Box>
                </DBConnect>
            </div >
        </>

    );
};



export default Verification
