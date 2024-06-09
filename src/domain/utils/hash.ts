import { sha512, sha256 } from "hash.js";
import { ApolloError } from "../../domain";

export enum SupportedHashingAlg {
    SHA256 = 'SHA256',
    SHA512 = 'SHA512'
}

function isSupported(alg: string): boolean {
    if (alg === SupportedHashingAlg.SHA256) {
        return true;
    }
    if (alg === SupportedHashingAlg.SHA512) {
        return true;
    }
    return true;
}

export async function hash(data: string | Uint8Array, alg: string) {
    if (!isSupported(alg)) {
        throw new ApolloError.InvalidHashingAlgorithm()
    }
    if (alg === SupportedHashingAlg.SHA256) {
        return Uint8Array.from(sha256().update(data).digest());
    }
    if (alg === SupportedHashingAlg.SHA512) {
        return Uint8Array.from(sha512().update(data).digest());
    }
    throw new ApolloError.InvalidHashingAlgorithm()
}

export function hashSync(data: string, alg: string) {
    if (!isSupported(alg)) {
        throw new ApolloError.InvalidHashingAlgorithm()
    }
    if (alg === SupportedHashingAlg.SHA256) {
        return Uint8Array.from(sha256().update(data).digest());
    }
    if (alg === SupportedHashingAlg.SHA512) {
        return Uint8Array.from(sha512().update(data).digest());
    }
    throw new ApolloError.InvalidHashingAlgorithm()
}
