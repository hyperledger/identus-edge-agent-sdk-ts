import { sha256 } from 'multiformats/hashes/sha2';
import { base58btc } from 'multiformats/bases/base58';

import { validateInputDocument } from './valid';
import { contextualizeDocument } from './utils';

const MULTICODEC_JSON = new Uint8Array([0x80, 0x04]);
const MULTICODEC_SHA2_256 = new Uint8Array([0x12, 0x20]);
const MULTIBASE_BASE58_BTC = 'z';

const LONG_PATTERN = /^did:peer:4zQm([0-9A-Za-z]{44}):z([0-9A-Za-z]{6,})$/;
const SHORT_PATTERN = /^did:peer:4zQm([0-9A-Za-z]{44})$/;

function encodeDoc(document: Record<string, any>): string {
    const jsonBytes = Buffer.from(JSON.stringify(document, null, 0))
    const bytes = new Uint8Array([...MULTICODEC_JSON, ...jsonBytes]);
    const encoded = base58btc.encode(bytes);
    return encoded;
}

async function hashEncodedDoc(encodedDoc: string): Promise<string> {
    const uint8Array = Uint8Array.from(
        Buffer.from(encodedDoc)
    );
    const hash = await sha256.encode(uint8Array);
    const bytes = new Uint8Array([
        ...MULTICODEC_SHA2_256,
        ...hash
    ]);
    const encodedHash = base58btc.encode(
        bytes
    );
    return encodedHash;
}

function decodeDoc(encodedDoc: string): Record<string, any> {
    if (!encodedDoc.startsWith(MULTIBASE_BASE58_BTC)) {
        throw new Error(`Unsupported encoding: ${encodedDoc[0]}`);
    }
    const encodedBytes = base58btc.baseDecode(encodedDoc.slice(1));
    if (
        encodedBytes[0] !== MULTICODEC_JSON[0] ||
        encodedBytes[1] !== MULTICODEC_JSON[1]
    ) {
        throw new Error(
            `Unsupported multicodec: ${encodedBytes.slice(0, 2)}...`
        );
    }
    const jsonBytes = encodedBytes.slice(2);
    const jsonString = Buffer.from(jsonBytes).toString();
    return JSON.parse(jsonString);
}

export async function encode(
    document: Record<string, any>,
    validate = true
): Promise<string> {
    if (validate) {
        document = validateInputDocument(document);
    }
    const encodedDoc = encodeDoc(document);
    const hashed = await hashEncodedDoc(encodedDoc);
    const serialised = `did:peer:4${hashed}:${encodedDoc}`;
    return serialised;
}

export async function encodeShort(
    document: Record<string, any>
): Promise<string> {
    const encodedDoc = encodeDoc(document);
    const hashed = await hashEncodedDoc(encodedDoc);
    return `did:peer:4${hashed}`;
}

export async function decode(did: string): Promise<Record<string, any>> {
    if (!did.startsWith('did:peer:4')) {
        throw new Error(`Invalid did:peer:4: ${did}`);
    }
    const matchesShort = did.match(SHORT_PATTERN);
    if (matchesShort) {
        throw new Error("Cannot decode document from short form did:peer:4");
    }
    const matches = did.match(LONG_PATTERN);
    if (!matches) {
        throw new Error(`Invalid did:peer:4: ${did}`);
    }
    const hashed = matches[1];
    const encodedDoc = matches[2];
    const recomputedHash = await hashEncodedDoc(`z${encodedDoc}`);
    if (recomputedHash !== `zQm${hashed}`) {
        throw new Error(`Hash is invalid for did: ${did}`);
    }
    return decodeDoc(`z${encodedDoc}`);
}

export async function longToShort(did: string): Promise<string> {
    const matches = did.match(LONG_PATTERN);
    if (!matches) {
        throw new Error(`DID is not a long form did:peer:4: ${did}`);
    }
    return `did:peer:4z${matches[1]}`;
}

export async function resolve(did: string): Promise<Record<string, any>> {
    const document = await decode(did);
    const contextualized = await contextualizeDocument(did, document);
    const shortDid = await longToShort(did);
    if (!contextualized.alsoKnownAs) {
        contextualized.alsoKnownAs = [];
    }
    contextualized.alsoKnownAs.push(shortDid);
    return contextualized;
}

export async function resolveShort(did: string): Promise<Record<string, any>> {
    const longDid = did;
    const document = await decode(longDid);
    const shortDid = await longToShort(longDid);
    const contextualized = await contextualizeDocument(shortDid, document);
    if (!contextualized.alsoKnownAs) {
        contextualized.alsoKnownAs = [];
    }
    contextualized.alsoKnownAs.push(longDid);
    return contextualized;
}

export async function resolveShortFromDoc(
    document: Record<string, any>,
    did?: string
): Promise<Record<string, any>> {
    const longDid = await encode(document, false);
    const computedShortDid = await longToShort(longDid);
    if (did && did !== computedShortDid) {
        throw new Error('Document does not match DID');
    }
    return resolveShort(longDid);
}