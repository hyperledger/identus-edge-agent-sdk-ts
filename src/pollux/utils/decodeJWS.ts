import { base64url } from "multiformats/bases/base64";
import { InvalidJWTString } from "../../domain/models/errors/Pollux";


export function decodeJWS(payload: string): string {
    const parts = payload.split(".");
    if (parts.length != 3 || parts.at(1) === undefined) {
        throw new InvalidJWTString();
    }
    const jwtCredentialString = parts.at(1)!;
    const base64Data = base64url.baseDecode(jwtCredentialString);
    const jsonString = Buffer.from(base64Data).toString();
    return jsonString
}
