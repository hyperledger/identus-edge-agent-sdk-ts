import { base64url } from "multiformats/bases/base64";
import { InvalidJWTString } from "../../domain/models/errors/Pollux";
import { JWTObject } from "../../domain";


export function decodeJWS(jws: string): JWTObject {
    const parts = jws.split(".");
    if (parts.length != 3 || parts.at(1) === undefined) {
        throw new InvalidJWTString();
    }
    const headersEnc = parts[0];
    const headers = base64url.baseDecode(headersEnc);
    const payloadEnc = parts[1];
    const payload = base64url.baseDecode(payloadEnc);
    return {
        header: JSON.parse(Buffer.from(headers).toString()),
        payload: JSON.parse(Buffer.from(payload).toString()),
        signature: parts[2],
        data: `${parts[0]}.${parts[1]}`,
    }
}