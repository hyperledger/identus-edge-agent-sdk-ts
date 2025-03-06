import { base58btc } from "multiformats/bases/base58";
import * as Domain from "../../../domain";
import { expect, notNil } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame } from '@sd-jwt/types';

import { Plugins } from "../../../plugins";
/**
 * Asyncronously sign with a DID
 *
 * @async
 * @param {DID} did
 * @param payload
 * @param header
 * @returns {string}
 */

interface Args<T extends SdJwtVcPayload = SdJwtVcPayload> {
    did: Domain.DID;
    privateKey?: Domain.PrivateKey;
    payload: T;
    header?: Partial<Domain.JWT.Header>;
    disclosureFrame: DisclosureFrame<T>;
}

export class CreateSDJWT<T extends SdJwtVcPayload = SdJwtVcPayload> extends Task<string, Args<T>> {
    async run(ctx: Plugins.Context) {
        const privateKey = await this.getPrivateKey(ctx);
        if (!privateKey.isSignable()) {
            throw new Error("Key is not signable");
        }
        const kid = await this.getSigningKid(ctx, this.args.did, privateKey);
        const jwt = await ctx.SDJWT.sign({
            issuerDID: this.args.did,
            privateKey,
            payload: this.args.payload,
            disclosureFrame: this.args.disclosureFrame,
            kid
        })
        return jwt;
    }

    private async getPrivateKey(ctx: Task.Context) {
        if (notNil(this.args.privateKey)) {
            return this.args.privateKey;
        }

        const keys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);
        const privateKey = expect(
            keys.find(x => x.curve === Domain.Curve.ED25519),
            "key not found"
        );

        return privateKey;
    }

    /**
     * try to match the privateKey with a dids verificationMethod
     * returning the relevant key id
     * 
     * @param did 
     * @param privateKey 
     * @returns {string} kid (key identifier)
     */
    private async getSigningKid(ctx: Task.Context, did: Domain.DID, privateKey: Domain.PrivateKey) {
        const pubKey = privateKey.publicKey();
        const encoded = base58btc.encode(pubKey.to.Buffer());
        const document = await ctx.Castor.resolveDID(did.toString());

        const signingKey = document.verificationMethods.find(key => {
            // TODO improve key identification
            return key.publicKeyMultibase === encoded && key.id.includes("#authentication");
        });

        return signingKey?.id;
    }
}
