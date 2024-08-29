import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import SDK from "@hyperledger/identus-edge-agent-sdk";
import { v4 as uuidv4 } from "uuid";
import { DBPreload, Message, Credential, Mediator } from "@/actions/types";
import { connectDatabase, fetchOffer, initAgent, startAgent, stopAgent } from "../actions";

const defaultMediatorDID = "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19";

class TraceableError extends Error {

    constructor(...params) {
        super(...params)
    }

    public id = uuidv4();
    static fromError(err: SerializedError) {
        return new TraceableError(err.message);
    }
}

export enum DBStatus {
    "disconnected" = "disconnected",
    "connected" = "connected"
}

const defaultSeed = new SDK.Apollo().createSeed([
    "repeat",
    "spider",
    "frozen",
    "drama",
    "april",
    "step",
    "engage",
    "pitch",
    "purity",
    "arrest",
    "orchard",
    "grocery",
    "green",
    "chapter",
    "know",
    "disease",
    "attend",
    "notable",
    "usage",
    "add",
    "trash",
    "dry",
    "refuse",
    "jewel"

])

export const initialState: RootState = {
    errors: [],
    db: {
        instance: null,
        connected: false,
        isConnecting: false,
        hasConnected: false,
    },
    messages: [],
    connections: [],
    credentials: [],
    mediatorDID: SDK.Domain.DID.fromString(defaultMediatorDID),
    defaultSeed: defaultSeed,
    agent: {
        instance: null,
        hasStarted: false,
        isStarting: false,
        isSendingMessage: false,
        hasSentMessage: false,
        selfDID: null,
        isFetchingOffer: false,
        hasFetchedOffer: false,
        offer: null
    }
}

export type ExtendedMessage = SDK.Domain.Message & { isAnswering: boolean; hasAnswered: boolean, error: TraceableError | null }

export type RootState = {
    errors: TraceableError[];
    db: {
        instance: SDK.Domain.Pluto | null,
        connected: boolean
        isConnecting: boolean,
        hasConnected: boolean
    },
    messages: ExtendedMessage[],
    connections: SDK.Domain.DIDPair[],
    credentials: SDK.Domain.Credential[],
    mediatorDID: SDK.Domain.DID,
    defaultSeed: SDK.Domain.Seed,
    agent: {
        instance: SDK.OIDCAgent | null,
        selfDID: SDK.Domain.DID | null,
        isStarting: boolean,
        hasStarted: boolean,
        isSendingMessage: boolean,
        hasSentMessage: boolean,
        isFetchingOffer: boolean,
        hasFetchedOffer: boolean,
        offer: any | null
    }
};

function removeDuplicates(messages: SDK.Domain.Message[] | SDK.Domain.Credential[]) {
    const uniqueMessages = new Map();
    messages.forEach(message => {
        uniqueMessages.set(message.id, message);
    });
    return Array.from(uniqueMessages.values());
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(fetchOffer.pending, (state, action) => {
            state.agent.hasFetchedOffer = false;
            state.agent.isFetchingOffer = true;
            state.agent.offer = null;
        })

        builder.addCase(fetchOffer.fulfilled, (state, action) => {
            state.agent.hasFetchedOffer = true;
            state.agent.isFetchingOffer = false;
            state.agent.offer = action.payload.offer;
        })

        builder.addCase(fetchOffer.rejected, (state, action) => {
            state.agent.hasFetchedOffer = false;
            state.agent.isFetchingOffer = false;
            state.agent.offer = null;
            state.errors.push(TraceableError.fromError(action.error))
        })

        builder.addCase(stopAgent.fulfilled, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = false;
        });

        builder.addCase(stopAgent.rejected, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = false;
            state.errors.push(TraceableError.fromError(action.error));
        });

        builder.addCase(startAgent.pending, (state, action) => {
            state.agent.isStarting = true;
            state.agent.hasStarted = false;
        });

        builder.addCase(startAgent.fulfilled, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = true;
            state.agent.instance = action.payload.agent;
        });

        builder.addCase(startAgent.rejected, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = false;
            state.errors.push(TraceableError.fromError(action.error));
        });

        builder.addCase(initAgent.pending, (state, action) => {
            state.agent.instance = null;
        });

        builder.addCase(initAgent.rejected, (state, action) => {
            state.agent.instance = null;
            state.errors.push(TraceableError.fromError(action.error));
        });

        builder.addCase(initAgent.fulfilled, (state, action) => {
            state.agent.instance = action.payload.agent;
        });

        builder.addCase(connectDatabase.fulfilled, (state, action) => {
            state.db.hasConnected = true;
            state.db.isConnecting = false;
            state.db.instance = action.payload.db;
            state.db.connected = true;
        });

        builder.addCase(connectDatabase.rejected, (state, action) => {
            state.errors.push(TraceableError.fromError(action.error));
            state.db.hasConnected = false;
            state.db.isConnecting = false;
            state.db.instance = null;
            state.db.connected = false;
        });

        builder.addCase(connectDatabase.pending, (state) => {
            state.db.hasConnected = false;
            state.db.isConnecting = true;
            state.db.instance = null;
            state.db.connected = false;
        });
    }
});

export default appSlice.reducer;
export const reduxActions = appSlice.actions;
