

import { hashSync, hash } from "../../../domain/utils/hash";
import { randomBytes } from "../../../domain/utils/randomBytes";


export const defaultHashConfig = {
    hasher: hash,
    hasherSync: hashSync,
    hasherAlg: 'SHA256'
}

export const defaultSaltGen = {
    // Justified ignore as its not used but required by the JWT libraries to instantiate
    // istanbul ignore next
    saltGenerator(length: number): string {
        if (length <= 0) {
            return '';
        }
        const array = randomBytes(new Uint8Array(length / 2));
        const salt = Array.from(array, (byte) =>
            byte.toString(16).padStart(2, '0'),
        ).join('');
        return salt;
    }
}