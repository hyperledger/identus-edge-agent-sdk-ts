import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

addRxPlugin(RxDBDevModePlugin);

import { AnyAction, ThunkDispatch, createAsyncThunk } from "@reduxjs/toolkit";
import SDK from "@atala/prism-wallet-sdk";
import { Database } from "@pluto-encrypted/database";
import { sha512 } from '@noble/hashes/sha512'
import { RootState, reduxActions } from "@/reducers/app";
import { DBNAME } from "@/utils/types";
import IndexDB from '@pluto-encrypted/indexdb'
import {
    getDefaultCollections,
    DIDCollection,
    DIDPairCollection,
    MediatorCollection,
    PrivateKeyColletion,
    CredentialCollection,
    CredentialRequestMetadataCollection,
    LinkSecretColletion,
    MessageColletion
} from "@pluto-encrypted/schemas";

const Agent = SDK.Agent;
const BasicMessage = SDK.BasicMessage;
const OfferCredential = SDK.OfferCredential;
const ListenerKey = SDK.ListenerKey;
const IssueCredential = SDK.IssueCredential;
const RequestPresentation = SDK.RequestPresentation;


export const acceptPresentationRequest = createAsyncThunk<
    any,
    {
        agent: SDK.Agent,
        message: SDK.Domain.Message,
        credential: SDK.Domain.Credential
    }
>("acceptPresentationRequest", async (options, api) => {
    try {
        const { agent, message, credential } = options;
        const requestPresentation = RequestPresentation.fromMessage(message);
        try {
            const presentation = await agent.createPresentationForRequestProof(requestPresentation, credential);
            await agent.sendMessage(presentation.makeMessage());
        } catch (err) {
            console.log("continue after err", err);
        }
        return api.fulfillWithValue(null);
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const rejectPresentationRequest = createAsyncThunk<
    any,
    {
        message: SDK.Domain.Message,
        pluto: SDK.Domain.Pluto
    }
>("rejectPresentationRequest", async (options, api) => {
    try {
        const { message, pluto } = options;
        const requestPresentation = RequestPresentation.fromMessage(message);
        const storedMessage = await pluto.getCollection("messages").findOne({
            selector: {
                id: {
                    $eq: message.id
                }
            }
        }).exec();
        await storedMessage?.remove()
        return api.fulfillWithValue(requestPresentation);
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const rejectCredentialOffer = createAsyncThunk<
    any,
    {
        message: SDK.Domain.Message,
        pluto: SDK.Domain.Pluto
    }
>("rejectCredentialOffer", async (options, api) => {
    try {
        const { message, pluto } = options;
        const credentialOffer = OfferCredential.fromMessage(message);
        const storedMessage = await pluto.getCollection("messages").findOne({
            selector: {
                id: {
                    $eq: message.id
                }
            }
        }).exec();
        await storedMessage?.remove()
        return api.fulfillWithValue(credentialOffer);
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const acceptCredentialOffer = createAsyncThunk<
    any,
    {
        agent: SDK.Agent,
        message: SDK.Domain.Message
    }
>("acceptCredentialOffer", async (options, api) => {
    try {
        const { agent, message } = options;
        const credentialOffer = OfferCredential.fromMessage(message);
        const requestCredential = await agent.prepareRequestCredentialWithIssuer(credentialOffer);
        try {
            const requestMessage = requestCredential.makeMessage()
            await agent.sendMessage(requestMessage);
        } catch (err) {
            console.log("continue after err", err);
        }
        return api.fulfillWithValue(null);
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})


async function handleMessages(
    options: {
        dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
        agent: SDK.Agent,
    },
    newMessages: SDK.Domain.Message[]
) {
    const { agent, dispatch } = options;
    const issuedCredentials = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/3.0/issue-credential");
    if (issuedCredentials.length) {
        for (const issuedCredential of issuedCredentials) {
            const issueCredential = IssueCredential.fromMessage(issuedCredential);
            await agent.processIssuedCredentialMessage(issueCredential);
        }
    }
    dispatch(
        reduxActions.messageSuccess(
            newMessages
        )
    )
}

export const stopAgent = createAsyncThunk<
    { agent: SDK.Agent },
    { agent: SDK.Agent }
>("stopAgent", async (options, api) => {
    try {
        const { agent } = options
        agent.removeListener(ListenerKey.MESSAGE, handleMessages.bind({}, { dispatch: api.dispatch, agent }));
        await agent.stop()
        return api.fulfillWithValue({ agent })
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})


export const startAgent = createAsyncThunk<
    { agent: SDK.Agent },
    { agent: SDK.Agent }
>("startAgent", async (options, api) => {
    try {
        const { agent } = options;
        agent.addListener(ListenerKey.MESSAGE, handleMessages.bind({}, { dispatch: api.dispatch, agent }));
        await agent.start()

        const mediator = agent.currentMediatorDID;
        if (!mediator) {
            throw new Error("Mediator not available");
        }

        const secondaryDID = await agent.createNewPeerDID(
            [],
            true
        );

        const testMessage = new BasicMessage(
            { content: "Test Message" },
            secondaryDID,
            secondaryDID
        ).makeMessage();

        try {
            await agent.sendMessage(testMessage);
        } catch (err) {
            console.log("Safe to ignore, mediator returns null on successfully receiving the message, unpack fails.");
        }

        return api.fulfillWithValue({ agent })
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const initAgent = createAsyncThunk<
    { agent: SDK.Agent },
    {
        mediatorDID: SDK.Domain.DID,
        pluto: SDK.Domain.Pluto
    }
>("initAgent", async (options, api) => {
    try {
        const { mediatorDID, pluto } = options;
        const agent = await Agent.initialize({ mediatorDID, pluto });
        return api.fulfillWithValue({ agent })
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const connectDatabase = createAsyncThunk<
    {
        db: SDK.Domain.Pluto
    },
    {
        encryptionKey: Uint8Array,
    },
    { state: { app: RootState } }
>("connectDatabase", async (options, api) => {
    try {
        const hashedPassword = sha512(options.encryptionKey)
        const db = await Database.createEncrypted<{
            dids: DIDCollection;
            didpairs: DIDPairCollection;
            mediators: MediatorCollection;
            privatekeys: PrivateKeyColletion;
            credentials: CredentialCollection;
            credentialrequestmetadatas: CredentialRequestMetadataCollection;
            linksecrets: LinkSecretColletion;
            messages: MessageColletion;
        }>(
            {
                name: DBNAME,
                encryptionKey: hashedPassword,
                storage: IndexDB,
                collections: getDefaultCollections()
            }
        );
        const messages = await db.getAllMessages()
        const connections = await db.getAllDidPairs()
        const credentials = await db.getAllCredentials();
        api.dispatch(
            reduxActions.dbPreload(
                { messages, connections, credentials }
            )
        );
        return api.fulfillWithValue({ db });
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
});