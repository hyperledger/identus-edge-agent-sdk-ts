import { base58btc } from "multiformats/bases/base58";
import { base64url } from "multiformats/bases/base64";
import * as Domain from "../../../domain";
import { asJsonObj, expect, notNil } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import { SDJWT } from "./SDJWT";
import { DIDCommContext } from "../../../edge-agent/didcomm/Context";
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

interface Args<T extends Domain.SDJWT.Payload = Domain.SDJWT.Payload> {
    did: Domain.DID;
    privateKey?: Domain.PrivateKey;
    payload: T;
    header?: Partial<Domain.SDJWT.Header>;
    disclosureFrame: Domain.SDJWT.DisclosureFrame<T>;
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
    async getSigningKid(ctx: Task.Context, did: Domain.DID, privateKey: Domain.PrivateKey) {
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
