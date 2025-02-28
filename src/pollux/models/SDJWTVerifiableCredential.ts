import { uuid } from "@stablelib/uuid";
import { SDJwt, Jwt } from "@sd-jwt/core";
import { Disclosure } from '@sd-jwt/utils';
import {
    Pluto,
    StorableCredential,
    Credential,
    CredentialType,
    ProvableCredential,
    W3CVerifiablePresentation,
    PolluxError,
    JWT
} from "../../domain";
import { defaultHashConfig } from "../utils/jwt/SDJWT";


export const SDJWTVerifiableCredentialRecoveryId = "sd+jwt+credential";


export enum SDJWT_VP_PROPS {
    vct = "vct",
    revoked = "revoked",
    _sd_alg = "_sd_alg",
    _sd = "_sd",
    disclosures = "disclosures"
}


export class SDJWTCredential extends Credential implements ProvableCredential, StorableCredential, Pluto.Storable {
    credentialType: CredentialType = CredentialType.SDJWT
    public recoveryId = SDJWTVerifiableCredentialRecoveryId;

    get id() {
        return this.properties.get(JWT.Claims.jti);
    }

    get issuer() {
        return this.claims.at(0)?.iss ?? this.properties.get(JWT.Claims.iss);
    }

    get subject() {
        const sub = this.claims.at(0)?.sub ?? this.properties.get(JWT.Claims.sub);
        return sub instanceof Disclosure ? sub.value : sub;
    }

    public uuid: string = uuid();
    public properties: Map<JWT.Claims | SDJWT_VP_PROPS, any> = new Map();
    public claims: Record<string, any>[] = [];
    public core: SDJwt;

    constructor(
        object: SDJwt,
        claims: Record<string, any>[],
        revoked?: boolean
    ) {
        super()

        const { jwt } = object;

        this.claims = claims;
        this.core = object;

        if (!jwt || !jwt.payload) {
            throw new PolluxError.InvalidJWTString("Cannot decode SDJWT properly")
        }

        const payload = jwt.payload;
        if (typeof payload[SDJWT_VP_PROPS.revoked] === "boolean") {
            this.properties.set(
                SDJWT_VP_PROPS.revoked,
                payload[SDJWT_VP_PROPS.revoked]
            );
        } else if (typeof revoked === 'boolean') {
            this.properties.set(
                SDJWT_VP_PROPS.revoked,
                revoked
            );
        } else {
            this.properties.set(
                SDJWT_VP_PROPS.revoked,
                false
            );
        }

        if (payload.iss) {
            this.properties.set(JWT.Claims.iss, payload.iss);
        }

        if (payload.sub) {
            this.properties.set(JWT.Claims.sub, payload.sub);
        }

        this.properties.set(JWT.Claims.jti, jwt.encodeJwt());

        if (payload.nbf) {
            this.properties.set(JWT.Claims.nbf, payload.nbf);
        }

        if (payload.exp) {
            this.properties.set(JWT.Claims.exp, payload.exp);
        }

        if (payload.aud) {
            this.properties.set(JWT.Claims.aud, payload.aud);
        }

        if (payload.vct) {
            this.properties.set(SDJWT_VP_PROPS.vct, payload.vct);
        }

        if (payload._sd) {
            this.properties.set(
                SDJWT_VP_PROPS._sd,
                payload._sd
            );
        }

        if (payload._sd_alg) {
            this.properties.set(
                SDJWT_VP_PROPS._sd_alg,
                payload._sd_alg
            );
        }

        this.properties.set(
            SDJWT_VP_PROPS.disclosures,
            object.disclosures
        );
    }

    verifiableCredential(): unknown {
        throw new Error("Method not implemented.");
    }

    presentation(): W3CVerifiablePresentation {
        return {
            "@context": [
                "https://www.w3.org/2018/presentations/v1"
            ],
            type: [
                "VerifiablePresentation"
            ],
            verifiableCredential: [
                this.id
            ],
        };
    }

    get revoked(): boolean | undefined {
        return this.properties.get(SDJWT_VP_PROPS.revoked);
    }

    toStorable(): { id: string; recoveryId: string; credentialData: string; issuer?: string | undefined; subject?: string | undefined; credentialCreated?: string | undefined; credentialUpdated?: string | undefined; credentialSchema?: string | undefined; validUntil?: string | undefined; revoked?: boolean | undefined; availableClaims?: string[] | undefined; } {
        const id = this.id;
        const data = { id, ...Object.fromEntries(this.properties) };
        const claims = this.claims.map((claim) => typeof claim !== 'string' ? JSON.stringify(claim) : claim)
        return {
            id,
            recoveryId: this.recoveryId,
            credentialData: JSON.stringify(data),
            issuer: this.issuer,
            subject: this.properties.get(JWT.Claims.sub),
            validUntil: this.getProperty(JWT.Claims.exp),
            availableClaims: claims,
            revoked: this.revoked
        };
    }

    static fromJWS<E extends Record<string, any> = Record<string, any>>(
        jws: string,
        revoked = false,
    ): SDJWTCredential {
        const jwt = new Jwt(Jwt.decodeJWT(jws));
        const disclosures = jws.split("~").slice(1).filter((k) => k);
        const computed = disclosures.map((disclosure) => Disclosure.fromEncodeSync<E>(disclosure, {
            alg: defaultHashConfig.hasherAlg,
            hasher: defaultHashConfig.hasher,
        }));
        const loaded = new SDJwt(
            {
                jwt: jwt,
                disclosures: computed
            }
        );
        const claims: Record<string, Disclosure<E>> = {};
        for (const disclosure of computed) {
            if (disclosure.key) {
                claims[disclosure.key] = disclosure;
            }
        }
        return new SDJWTCredential(loaded, [claims], revoked);
    }
}
