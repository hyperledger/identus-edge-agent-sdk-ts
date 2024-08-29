import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

addRxPlugin(RxDBDevModePlugin);

import { createAsyncThunk } from "@reduxjs/toolkit";
import SDK from "@hyperledger/identus-edge-agent-sdk";
import { sha512 } from '@noble/hashes/sha512'
import { RootState } from "@/reducers/app";
import IndexDB from '@pluto-encrypted/indexdb'


export const fetchOffer = createAsyncThunk<
    { offer: any },
    { issuerBaseUrl?: string, issuerId: string, issuerDid: string, credentialConfigurationId: string }
>("fetchOffer", async (options, api) => {
    try {
        const {
            issuerDid,
            issuerId,
            issuerBaseUrl = 'http://localhost:8090/',
            credentialConfigurationId
        } = options;
        const baseUrl = issuerBaseUrl.replace(/\/$/, "");
        const offer_response = await fetch(`${baseUrl}/oid4vci/issuers/${issuerId}/credential-offers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "credentialConfigurationId": credentialConfigurationId,
                "issuingDID": issuerDid,
                "claims": {
                    "name": "Alice",
                    "age": 42
                }
            })
        });
        const offer_json = await offer_response.json();
        return api.fulfillWithValue({ offer: offer_json.credentialOffer })
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const stopAgent = createAsyncThunk<
    { agent: SDK.OIDCAgent },
    { agent: SDK.OIDCAgent }
>("stopAgent", async (options, api) => {
    try {
        const { agent } = options
        await agent.stop()
        return api.fulfillWithValue({ agent })
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const startAgent = createAsyncThunk<
    { agent: SDK.OIDCAgent },
    { agent: SDK.OIDCAgent }
>("startAgent", async (options, api) => {
    try {
        const { agent } = options;
        await agent.start()
        return api.fulfillWithValue({ agent })
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
})

export const initAgent = createAsyncThunk<
    { agent: SDK.OIDCAgent },
    {
        pluto: SDK.Domain.Pluto,
        defaultSeed: SDK.Domain.Seed
    }
>("initAgent", async (options, api) => {
    try {
        const { pluto, defaultSeed } = options;
        const apollo = new SDK.Apollo();
        const agent = await SDK.OIDCAgent.initialize({ pluto, seed: defaultSeed, apollo });
        return api.fulfillWithValue({
            agent,
        })
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
        const apollo = new SDK.Apollo();
        const store = new SDK.Store({
            name: "test",
            storage: IndexDB,
            password: Buffer.from(hashedPassword).toString("hex")
        });
        const db = new SDK.Pluto(store, apollo);
        await db.start();
        return api.fulfillWithValue({ db });
    } catch (err) {
        return api.rejectWithValue(err as Error);
    }
});
