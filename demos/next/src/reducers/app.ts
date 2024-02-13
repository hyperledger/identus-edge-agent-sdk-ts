import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import SDK from "@atala/prism-wallet-sdk";
import { v4 as uuidv4 } from "uuid";
import { DBPreload, Message } from "@/actions/types";
import { acceptCredentialOffer, acceptPresentationRequest, connectDatabase, initAgent, rejectCredentialOffer, startAgent, stopAgent } from "../actions";

const defaultMediatorDID = "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19";

class TraceableError extends Error {

    constructor(...params) {
        super(...params)
    }

    public id = uuidv4();
    static fromError(err: Error) {
        return new TraceableError(err.message);
    }
}

export enum DBStatus {
    "disconnected" = "disconnected",
    "connected" = "connected"
}

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
    agent: {
        instance: null,
        hasStarted: false,
        isStarting: false,
    }
}

type ExtendedMessage = SDK.Domain.Message & { isAnswering: boolean; hasAnswered: boolean, error: TraceableError | null }

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
    credentials: SDK.Domain.Credentials[],
    mediatorDID: SDK.Domain.DID,
    agent: {
        instance: SDK.Agent | null,
        isStarting: boolean,
        hasStarted: boolean
    }
};


const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        [DBPreload.complete]: (
            state,
            action: PayloadAction<{
                messages: SDK.Domain.Message[],
                connections: SDK.Domain.DIRPair[],
                credentials: SDK.Domain.Credentials[]
            }>
        ) => {
            state.messages = action.payload.messages;
            state.connections = action.payload.connections;
            state.credentials = action.payload.credentials;
        },
        [Message.success]: (
            state,
            action: PayloadAction<SDK.Domain.Message[]>
        ) => {
            state.messages = [
                ...action.payload,
                ...state.messages.map((oldMessage) => {
                    if (action.payload.find((m) => m.thid === oldMessage.thid)) {
                        return {
                            ...oldMessage,
                            isAnswering: false,
                            hasAnswered: true
                        }
                    }
                    return oldMessage
                }),

            ];
        },
    },
    extraReducers: (builder) => {

        builder.addCase(stopAgent.fulfilled, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = false;
        });

        builder.addCase(stopAgent.rejected, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = false;
            state.errors.push(TraceableError.fromError(action.payload as Error));
        });

        builder.addCase(startAgent.pending, (state, action) => {
            state.agent.isStarting = true;
            state.agent.hasStarted = false;
        });

        builder.addCase(startAgent.fulfilled, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = true;
            state.agent.instance = action.payload.agent
        });

        builder.addCase(startAgent.rejected, (state, action) => {
            state.agent.isStarting = false;
            state.agent.hasStarted = false;
            state.errors.push(TraceableError.fromError(action.payload as Error));
        });

        builder.addCase(initAgent.pending, (state, action) => {
            state.agent.instance = null;
        });

        builder.addCase(initAgent.rejected, (state, action) => {
            state.agent.instance = null;
            state.errors.push(TraceableError.fromError(action.payload as Error));
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
            state.errors.push(TraceableError.fromError(action.payload as Error));
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

        builder.addCase(acceptPresentationRequest.pending, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.map((currentMessage) => {
                if (currentMessage.id === message.id) {
                    return {
                        ...currentMessage,
                        isAnswering: true,
                        hasAnswered: false,
                        error: null
                    }
                }
                return currentMessage
            })
        })

        builder.addCase(acceptPresentationRequest.rejected, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.map((currentMessage) => {
                if (currentMessage.id === message.id) {
                    return {
                        ...currentMessage,
                        isAnswering: false,
                        hasAnswered: false,
                        error: TraceableError.fromError(action.payload as Error)
                    }
                }
                return currentMessage
            })
        })

        builder.addCase(acceptPresentationRequest.fulfilled, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.map((currentMessage) => {
                if (currentMessage.id === message.id) {
                    return {
                        ...currentMessage,
                        isAnswering: false,
                        hasAnswered: true,
                        error: null
                    }
                }
                return currentMessage
            })
        })

        builder.addCase(acceptCredentialOffer.pending, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.map((currentMessage) => {
                if (currentMessage.id === message.id) {
                    return {
                        ...currentMessage,
                        isAnswering: true,
                        hasAnswered: false,
                        error: null
                    }
                }
                return currentMessage
            })
        })

        builder.addCase(acceptCredentialOffer.rejected, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.map((currentMessage) => {
                if (currentMessage.id === message.id) {
                    return {
                        ...currentMessage,
                        isAnswering: false,
                        hasAnswered: false,
                        error: TraceableError.fromError(action.payload as Error)
                    }
                }
                return currentMessage
            })
        })

        builder.addCase(rejectCredentialOffer.rejected, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.map((currentMessage) => {
                if (currentMessage.id === message.id) {
                    return {
                        ...currentMessage,
                        isAnswering: false,
                        hasAnswered: false,
                        error: TraceableError.fromError(action.payload as Error)
                    }
                }
                return currentMessage
            })
        })

        builder.addCase(rejectCredentialOffer.fulfilled, (state, action) => {
            const message = action.meta.arg.message;
            state.messages = state.messages.filter((currentMessage) => currentMessage.id !== message.id)
        })
    }
});

export default appSlice.reducer;
export const reduxActions = appSlice.actions;
