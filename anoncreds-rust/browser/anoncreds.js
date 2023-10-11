let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedBigInt64Memory0 = null;

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
* @returns {number}
*/
export function anoncredsSetDefaultLogger() {
    const ret = wasm.anoncredsSetDefaultLogger();
    return ret >>> 0;
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4);
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
* @param {string} name
* @param {string} version
* @param {string} issuer_id
* @param {any[]} attribute_names
* @returns {any}
*/
export function anoncredsCreateSchema(name, version, issuer_id, attribute_names) {
    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(version, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm0(issuer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArrayJsValueToWasm0(attribute_names, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.anoncredsCreateSchema(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
}

function getArrayJsValueFromWasm0(ptr, len) {
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}
/**
* @param {string} schema_id
* @param {any} schema
* @param {string} tag
* @param {string} issuer_id
* @param {string} signature_type
* @param {boolean} support_revocation
* @returns {any[]}
*/
export function anoncredsCreateCredentialDefinition(schema_id, schema, tag, issuer_id, signature_type, support_revocation) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(schema_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(issuer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(signature_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        wasm.anoncredsCreateCredentialDefinition(retptr, ptr0, len0, addHeapObject(schema), ptr1, len1, ptr2, len2, ptr3, len3, support_revocation);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v4 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v4;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {string} schema_id
* @param {any} schema
* @param {string} tag
* @param {string} issuer_id
* @returns {any[]}
*/
export function anoncredsCreateCredentialDefinitionCustom(schema_id, schema, tag, issuer_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(schema_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(issuer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.anoncredsCreateCredentialDefinitionCustom(retptr, ptr0, len0, addHeapObject(schema), ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v3 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v3;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {any} json
* @returns {boolean}
*/
export function anoncredsValidateCredentialDefinitionFromJson(json) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.anoncredsValidateCredentialDefinitionFromJson(retptr, addHeapObject(json));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 !== 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @returns {string}
*/
export function proverCreateLinkSecret() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.proverCreateLinkSecret(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {any} cred_offer
* @param {any} cred_def
* @param {string} link_secret
* @param {string} link_secret_id
* @returns {any[]}
*/
export function proverCreateCredentialRequest(cred_offer, cred_def, link_secret, link_secret_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(link_secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(link_secret_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.proverCreateCredentialRequest(retptr, addHeapObject(cred_offer), addHeapObject(cred_def), ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {any} cred_def
* @param {any} credential
* @param {any} cred_req_meta
* @param {string} link_secret
* @returns {any}
*/
export function proverProcessCredential(cred_def, credential, cred_req_meta, link_secret) {
    const ptr0 = passStringToWasm0(link_secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.proverProcessCredential(addHeapObject(cred_def), addHeapObject(credential), addHeapObject(cred_req_meta), ptr0, len0);
    return takeObject(ret);
}

/**
* @param {any} presentation_request
* @param {any} schema_dict
* @param {any} cred_def_dict
* @param {any} credential
* @param {string} link_secret
* @returns {any}
*/
export function proverCreatePresentation(presentation_request, schema_dict, cred_def_dict, credential, link_secret) {
    const ptr0 = passStringToWasm0(link_secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.proverCreatePresentation(addHeapObject(presentation_request), addHeapObject(schema_dict), addHeapObject(cred_def_dict), addHeapObject(credential), ptr0, len0);
    return takeObject(ret);
}

/**
* @returns {any}
*/
export function issuerCreateSchema() {
    const ret = wasm.issuerCreateSchema();
    return takeObject(ret);
}

/**
* @param {any} jsSchema
* @returns {any[]}
*/
export function issuerCreateCredentialOffer(jsSchema) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.issuerCreateCredentialOffer(retptr, addHeapObject(jsSchema));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {any} jsCredOffer
* @param {any} jsCredDef
* @param {any} jsCredDefPriv
* @param {any} jsCredRequest
* @returns {any}
*/
export function issuerCreateCredential(jsCredOffer, jsCredDef, jsCredDefPriv, jsCredRequest) {
    const ret = wasm.issuerCreateCredential(addHeapObject(jsCredOffer), addHeapObject(jsCredDef), addHeapObject(jsCredDefPriv), addHeapObject(jsCredRequest));
    return takeObject(ret);
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let stack_pointer = 128;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
*/
export const ErrorCode = Object.freeze({ Success:0,"0":"Success",Input:1,"1":"Input",IOError:2,"2":"IOError",InvalidState:3,"3":"InvalidState",Unexpected:4,"4":"Unexpected",CredentialRevoked:5,"5":"CredentialRevoked",InvalidUserRevocId:6,"6":"InvalidUserRevocId",ProofRejected:7,"7":"ProofRejected",RevocationRegistryFull:8,"8":"RevocationRegistryFull", });
/**
*/
export class BlindedCredentialSecrets {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_blindedcredentialsecrets_free(ptr);
    }
}
/**
*/
export class BlindedCredentialSecretsCorrectnessProof {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_blindedcredentialsecretscorrectnessproof_free(ptr);
    }
}
/**
*/
export class Bls {

    static __wrap(ptr) {
        const obj = Object.create(Bls.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_bls_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.bls_new();
        return Bls.__wrap(ret);
    }
    /**
    * @param {Uint8Array} message
    * @param {SignKey} sign_key
    * @returns {Signature}
    */
    static sign(message, sign_key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            _assertClass(sign_key, SignKey);
            wasm.bls_sign(retptr, ptr0, len0, sign_key.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Signature.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} message
    * @param {Signature} signature
    * @param {VerKey} ver_key
    * @param {Generator} generator
    * @returns {boolean}
    */
    static verify(message, signature, ver_key, generator) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            _assertClass(signature, Signature);
            _assertClass(ver_key, VerKey);
            _assertClass(generator, Generator);
            wasm.bls_verify(retptr, ptr0, len0, signature.ptr, ver_key.ptr, generator.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return r0 !== 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {ProofOfPossession} pop
    * @param {VerKey} ver_key
    * @param {Generator} generator
    * @returns {boolean}
    */
    static verifyProofOfPosession(pop, ver_key, generator) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(pop, ProofOfPossession);
            _assertClass(ver_key, VerKey);
            _assertClass(generator, Generator);
            wasm.bls_verifyProofOfPosession(retptr, pop.ptr, ver_key.ptr, generator.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return r0 !== 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {MultiSignature} multi_sig
    * @param {Uint8Array} message
    * @param {any[]} ver_keys
    * @param {Generator} gen
    * @returns {boolean}
    */
    static verifyMultiSignature(multi_sig, message, ver_keys, gen) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(multi_sig, MultiSignature);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArrayJsValueToWasm0(ver_keys, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            _assertClass(gen, Generator);
            wasm.bls_verifyMultiSignature(retptr, multi_sig.ptr, ptr0, len0, ptr1, len1, gen.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return r0 !== 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
* Convenience class for javascript. This provides a name-value pair structure
* instead of a tuple. The compiler complains about unused fields
* so allow(unused) is in place for now
*/
export class CredentialDefinition {

    static __wrap(ptr) {
        const obj = Object.create(CredentialDefinition.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialdefinition_free(ptr);
    }
}
/**
*/
export class CredentialKeyCorrectnessProof {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialkeycorrectnessproof_free(ptr);
    }
}
/**
*/
export class CredentialPrimaryPublicKey {

    static __wrap(ptr) {
        const obj = Object.create(CredentialPrimaryPublicKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialprimarypublickey_free(ptr);
    }
}
/**
*/
export class CredentialPrivateKey {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialprivatekey_free(ptr);
    }
}
/**
*/
export class CredentialPublicKey {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialpublickey_free(ptr);
    }
    /**
    * @returns {CredentialPrimaryPublicKey}
    */
    getPrimaryKey() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.credentialpublickey_getPrimaryKey(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return CredentialPrimaryPublicKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {any}
    */
    getRevocationKey() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.credentialpublickey_getRevocationKey(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class CredentialRevocationPublicKey {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialrevocationpublickey_free(ptr);
    }
}
/**
*/
export class CredentialSchema {

    static __wrap(ptr) {
        const obj = Object.create(CredentialSchema.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialschema_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.credentialschema_new();
        return CredentialSchema.__wrap(ret);
    }
    /**
    * @param {string} attribute
    */
    addAttr(attribute) {
        const ptr0 = passStringToWasm0(attribute, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.credentialschema_addAttr(this.ptr, ptr0, len0);
    }
}
/**
*/
export class CredentialSecretsBlindingFactors {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialsecretsblindingfactors_free(ptr);
    }
}
/**
*/
export class CredentialSignature {

    static __wrap(ptr) {
        const obj = Object.create(CredentialSignature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialsignature_free(ptr);
    }
    /**
    * @returns {number | undefined}
    */
    extractIndex() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.credentialsignature_extractIndex(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class CredentialValues {

    static __wrap(ptr) {
        const obj = Object.create(CredentialValues.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_credentialvalues_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.credentialschema_new();
        return CredentialValues.__wrap(ret);
    }
    /**
    * @param {MasterSecret} value
    */
    addMasterSecret(value) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(value, MasterSecret);
            wasm.credentialvalues_addMasterSecret(retptr, this.ptr, value.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} attr
    * @param {string} value
    */
    addKnown(attr, value) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(attr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.credentialvalues_addKnown(retptr, this.ptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} attr
    * @param {string} value
    */
    addHidden(attr, value) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(attr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.credentialvalues_addHidden(retptr, this.ptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} attr
    * @param {string} value
    * @param {string} blinding_factor
    */
    addCommitment(attr, value, blinding_factor) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(attr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ptr2 = passStringToWasm0(blinding_factor, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len2 = WASM_VECTOR_LEN;
            wasm.credentialvalues_addCommitment(retptr, this.ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class EcdhSecp256k1Sha256 {

    static __wrap(ptr) {
        const obj = Object.create(EcdhSecp256k1Sha256.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ecdhsecp256k1sha256_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.ecdsasecp256k1sha256_new();
        return EcdhSecp256k1Sha256.__wrap(ret);
    }
    /**
    * @returns {KeyPair}
    */
    keypair() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.ecdhsecp256k1sha256_keypair(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return KeyPair.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} seed
    * @returns {KeyPair}
    */
    keypair_from_seed(seed) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ecdhsecp256k1sha256_keypair_from_seed(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return KeyPair.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmPrivateKey} sk
    * @returns {WasmPublicKey}
    */
    getPublicKey(sk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sk, WasmPrivateKey);
            wasm.ecdhsecp256k1sha256_getPublicKey(retptr, this.ptr, sk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmPublicKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmPrivateKey} sk
    * @param {WasmPublicKey} pk
    * @returns {WasmSessionKey}
    */
    computeSharedSecret(sk, pk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sk, WasmPrivateKey);
            _assertClass(pk, WasmPublicKey);
            wasm.ecdhsecp256k1sha256_computeSharedSecret(retptr, this.ptr, sk.ptr, pk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmSessionKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class EcdsaSecp256k1Sha256 {

    static __wrap(ptr) {
        const obj = Object.create(EcdsaSecp256k1Sha256.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ecdsasecp256k1sha256_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.ecdsasecp256k1sha256_new();
        return EcdsaSecp256k1Sha256.__wrap(ret);
    }
    /**
    * @returns {KeyPair}
    */
    keypair() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.ecdsasecp256k1sha256_keypair(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return KeyPair.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} seed
    * @returns {KeyPair}
    */
    keypairFromSeed(seed) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ecdsasecp256k1sha256_keypairFromSeed(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return KeyPair.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmPrivateKey} sk
    * @returns {WasmPublicKey}
    */
    getPublicKey(sk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sk, WasmPrivateKey);
            wasm.ecdsasecp256k1sha256_getPublicKey(retptr, this.ptr, sk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmPublicKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} message
    * @param {WasmPrivateKey} sk
    * @returns {Uint8Array}
    */
    sign(message, sk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            _assertClass(sk, WasmPrivateKey);
            wasm.ecdsasecp256k1sha256_sign(retptr, this.ptr, ptr0, len0, sk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} message
    * @param {Uint8Array} signature
    * @param {WasmPublicKey} pk
    * @returns {boolean}
    */
    verify(message, signature, pk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            _assertClass(pk, WasmPublicKey);
            wasm.ecdsasecp256k1sha256_verify(retptr, this.ptr, ptr0, len0, ptr1, len1, pk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return r0 !== 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} signature
    */
    normalizeS(signature) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            var ptr0 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.ecdsasecp256k1sha256_normalizeS(retptr, this.ptr, ptr0, len0, addHeapObject(signature));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmPublicKey} pk
    * @returns {WasmPublicKey}
    */
    publicKeyCompressed(pk) {
        _assertClass(pk, WasmPublicKey);
        const ret = wasm.ecdsasecp256k1sha256_publicKeyCompressed(this.ptr, pk.ptr);
        return WasmPublicKey.__wrap(ret);
    }
    /**
    * @param {WasmPublicKey} pk
    * @returns {WasmPublicKey}
    */
    publicKeyUnCompressed(pk) {
        _assertClass(pk, WasmPublicKey);
        const ret = wasm.ecdsasecp256k1sha256_publicKeyUnCompressed(this.ptr, pk.ptr);
        return WasmPublicKey.__wrap(ret);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {WasmPublicKey}
    */
    parseToPublicKey(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ecdsasecp256k1sha256_parseToPublicKey(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmPublicKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Ed25519Sha512 {

    static __wrap(ptr) {
        const obj = Object.create(Ed25519Sha512.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ed25519sha512_free(ptr);
    }
    /**
    */
    constructor() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.ed25519sha512_new(retptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Ed25519Sha512.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} seed
    * @returns {Ed25519Sha512}
    */
    static fromSeed(seed) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ed25519sha512_fromSeed(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Ed25519Sha512.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} sk
    * @returns {Ed25519Sha512}
    */
    static fromPrivateKey(sk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(sk, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ed25519sha512_fromPrivateKey(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Ed25519Sha512.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    getPulicKey() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.ed25519sha512_getPulicKey(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} message
    * @returns {Uint8Array}
    */
    sign(message) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ed25519sha512_sign(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} message
    * @param {Uint8Array} signature
    * @param {Uint8Array} pk
    * @returns {boolean}
    */
    static verify(message, signature, pk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            const ptr2 = passArray8ToWasm0(pk, wasm.__wbindgen_malloc);
            const len2 = WASM_VECTOR_LEN;
            wasm.ed25519sha512_verify(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return r0 !== 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Generator {

    static __wrap(ptr) {
        const obj = Object.create(Generator.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_generator_free(ptr);
    }
    /**
    */
    constructor() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.generator_new(retptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Generator.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    toBytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.generator_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Generator}
    */
    static fromBytes(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.generator_fromBytes(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Generator.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class IssuedCredential {

    static __wrap(ptr) {
        const obj = Object.create(IssuedCredential.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_issuedcredential_free(ptr);
    }
}
/**
* Convenience class for javascript. This provides a name-value pair structure
* instead of a tuple. The compiler complains about unused fields
* so allow(unused) is in place for now
*/
export class IssuedCredentialWithRevocation {

    static __wrap(ptr) {
        const obj = Object.create(IssuedCredentialWithRevocation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_issuedcredentialwithrevocation_free(ptr);
    }
}
/**
*/
export class Issuer {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_issuer_free(ptr);
    }
    /**
    * @param {CredentialSchema} credential_schema
    * @param {NonCredentialSchema} non_credential_schema
    * @param {boolean} support_revocation
    * @returns {CredentialDefinition}
    */
    static newCredentialDefinition(credential_schema, non_credential_schema, support_revocation) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(credential_schema, CredentialSchema);
            var ptr0 = credential_schema.__destroy_into_raw();
            _assertClass(non_credential_schema, NonCredentialSchema);
            var ptr1 = non_credential_schema.__destroy_into_raw();
            wasm.issuer_newCredentialDefinition(retptr, ptr0, ptr1, support_revocation);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return CredentialDefinition.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} prover_id
    * @param {BlindedCredentialSecrets} blinded_credential_secrets
    * @param {BlindedCredentialSecretsCorrectnessProof} blinded_credential_secrets_correctness_proof
    * @param {Nonce} credential_nonce
    * @param {Nonce} credential_issuance_nonce
    * @param {CredentialValues} credential_values
    * @param {CredentialPublicKey} credential_pub_key
    * @param {CredentialPrivateKey} credential_priv_key
    * @returns {IssuedCredential}
    */
    static signCredential(prover_id, blinded_credential_secrets, blinded_credential_secrets_correctness_proof, credential_nonce, credential_issuance_nonce, credential_values, credential_pub_key, credential_priv_key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(prover_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            _assertClass(blinded_credential_secrets, BlindedCredentialSecrets);
            _assertClass(blinded_credential_secrets_correctness_proof, BlindedCredentialSecretsCorrectnessProof);
            _assertClass(credential_nonce, Nonce);
            _assertClass(credential_issuance_nonce, Nonce);
            _assertClass(credential_values, CredentialValues);
            var ptr1 = credential_values.__destroy_into_raw();
            _assertClass(credential_pub_key, CredentialPublicKey);
            _assertClass(credential_priv_key, CredentialPrivateKey);
            wasm.issuer_signCredential(retptr, ptr0, len0, blinded_credential_secrets.ptr, blinded_credential_secrets_correctness_proof.ptr, credential_nonce.ptr, credential_issuance_nonce.ptr, ptr1, credential_pub_key.ptr, credential_priv_key.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return IssuedCredential.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} prover_id
    * @param {BlindedCredentialSecrets} blinded_credential_secrets
    * @param {BlindedCredentialSecretsCorrectnessProof} blinded_credential_secrets_correctness_proof
    * @param {Nonce} credential_nonce
    * @param {Nonce} credential_issuance_nonce
    * @param {CredentialValues} credential_values
    * @param {CredentialPublicKey} credential_pub_key
    * @param {CredentialPrivateKey} credential_priv_key
    * @param {number} rev_idx
    * @param {number} max_cred_num
    * @param {boolean} issuance_by_default
    * @param {RevocationRegistry} rev_reg
    * @param {RevocationPrivateKey} rev_key_priv
    * @param {SimpleTailsAccessor} rev_tails_accessor
    * @returns {IssuedCredentialWithRevocation}
    */
    static signCredentialWithRevocation(prover_id, blinded_credential_secrets, blinded_credential_secrets_correctness_proof, credential_nonce, credential_issuance_nonce, credential_values, credential_pub_key, credential_priv_key, rev_idx, max_cred_num, issuance_by_default, rev_reg, rev_key_priv, rev_tails_accessor) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(prover_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            _assertClass(blinded_credential_secrets, BlindedCredentialSecrets);
            _assertClass(blinded_credential_secrets_correctness_proof, BlindedCredentialSecretsCorrectnessProof);
            _assertClass(credential_nonce, Nonce);
            _assertClass(credential_issuance_nonce, Nonce);
            _assertClass(credential_values, CredentialValues);
            var ptr1 = credential_values.__destroy_into_raw();
            _assertClass(credential_pub_key, CredentialPublicKey);
            _assertClass(credential_priv_key, CredentialPrivateKey);
            _assertClass(rev_reg, RevocationRegistry);
            _assertClass(rev_key_priv, RevocationPrivateKey);
            _assertClass(rev_tails_accessor, SimpleTailsAccessor);
            wasm.issuer_signCredentialWithRevocation(retptr, ptr0, len0, blinded_credential_secrets.ptr, blinded_credential_secrets_correctness_proof.ptr, credential_nonce.ptr, credential_issuance_nonce.ptr, ptr1, credential_pub_key.ptr, credential_priv_key.ptr, rev_idx, max_cred_num, issuance_by_default, rev_reg.ptr, rev_key_priv.ptr, rev_tails_accessor.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return IssuedCredentialWithRevocation.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class KeyPair {

    static __wrap(ptr) {
        const obj = Object.create(KeyPair.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_keypair_free(ptr);
    }
}
/**
*/
export class MasterSecret {

    static __wrap(ptr) {
        const obj = Object.create(MasterSecret.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_mastersecret_free(ptr);
    }
    /**
    */
    constructor() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.mastersecret_new(retptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return MasterSecret.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class MultiSignature {

    static __wrap(ptr) {
        const obj = Object.create(MultiSignature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_multisignature_free(ptr);
    }
    /**
    * @param {any[]} signatures
    */
    constructor(signatures) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArrayJsValueToWasm0(signatures, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.multisignature_new(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return MultiSignature.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {MultiSignature}
    */
    static fromBytes(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.multisignature_fromBytes(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return MultiSignature.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    toBytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.multisignature_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class NonCredentialSchema {

    static __wrap(ptr) {
        const obj = Object.create(NonCredentialSchema.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_noncredentialschema_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.credentialschema_new();
        return NonCredentialSchema.__wrap(ret);
    }
    /**
    * @param {string} attribute
    */
    addAttr(attribute) {
        const ptr0 = passStringToWasm0(attribute, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.credentialschema_addAttr(this.ptr, ptr0, len0);
    }
}
/**
*/
export class Nonce {

    static __wrap(ptr) {
        const obj = Object.create(Nonce.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_nonce_free(ptr);
    }
    /**
    */
    constructor() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.nonce_new(retptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Nonce.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Proof {

    static __wrap(ptr) {
        const obj = Object.create(Proof.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_proof_free(ptr);
    }
}
/**
*/
export class ProofBuilder {

    static __wrap(ptr) {
        const obj = Object.create(ProofBuilder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_proofbuilder_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.proofbuilder_new();
        return ProofBuilder.__wrap(ret);
    }
    /**
    * @param {string} attribute
    */
    addCommonAttribute(attribute) {
        const ptr0 = passStringToWasm0(attribute, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.proofbuilder_addCommonAttribute(this.ptr, ptr0, len0);
    }
    /**
    * @param {SubProofRequest} sub_proof_request
    * @param {CredentialSchema} credential_schema
    * @param {NonCredentialSchema} non_credential_schema
    * @param {CredentialSignature} credential_signature
    * @param {CredentialValues} credential_values
    * @param {CredentialPublicKey} credential_pub_key
    * @param {any} rev_reg
    * @param {any} witness
    */
    addSubProofRequest(sub_proof_request, credential_schema, non_credential_schema, credential_signature, credential_values, credential_pub_key, rev_reg, witness) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sub_proof_request, SubProofRequest);
            var ptr0 = sub_proof_request.__destroy_into_raw();
            _assertClass(credential_schema, CredentialSchema);
            var ptr1 = credential_schema.__destroy_into_raw();
            _assertClass(non_credential_schema, NonCredentialSchema);
            var ptr2 = non_credential_schema.__destroy_into_raw();
            _assertClass(credential_signature, CredentialSignature);
            _assertClass(credential_values, CredentialValues);
            var ptr3 = credential_values.__destroy_into_raw();
            _assertClass(credential_pub_key, CredentialPublicKey);
            wasm.proofbuilder_addSubProofRequest(retptr, this.ptr, ptr0, ptr1, ptr2, credential_signature.ptr, ptr3, credential_pub_key.ptr, addBorrowedObject(rev_reg), addBorrowedObject(witness));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Nonce} nonce
    * @returns {Proof}
    */
    finalize(nonce) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(nonce, Nonce);
            wasm.proofbuilder_finalize(retptr, this.ptr, nonce.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Proof.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class ProofOfPossession {

    static __wrap(ptr) {
        const obj = Object.create(ProofOfPossession.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_proofofpossession_free(ptr);
    }
    /**
    * @param {VerKey} ver_key
    * @param {SignKey} sign_key
    */
    constructor(ver_key, sign_key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(ver_key, VerKey);
            _assertClass(sign_key, SignKey);
            wasm.proofofpossession_new(retptr, ver_key.ptr, sign_key.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return ProofOfPossession.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {ProofOfPossession}
    */
    static fromBytes(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.multisignature_fromBytes(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return ProofOfPossession.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    toBytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.multisignature_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class ProofVerifier {

    static __wrap(ptr) {
        const obj = Object.create(ProofVerifier.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_proofverifier_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.proofverifier_new();
        return ProofVerifier.__wrap(ret);
    }
    /**
    * @param {SubProofRequest} sub_proof_request
    * @param {CredentialSchema} credential_schema
    * @param {NonCredentialSchema} non_credential_schema
    * @param {CredentialPublicKey} credential_pub_key
    * @param {any} rev_key_pub
    * @param {any} rev_reg
    */
    addSubProofRequest(sub_proof_request, credential_schema, non_credential_schema, credential_pub_key, rev_key_pub, rev_reg) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sub_proof_request, SubProofRequest);
            var ptr0 = sub_proof_request.__destroy_into_raw();
            _assertClass(credential_schema, CredentialSchema);
            var ptr1 = credential_schema.__destroy_into_raw();
            _assertClass(non_credential_schema, NonCredentialSchema);
            var ptr2 = non_credential_schema.__destroy_into_raw();
            _assertClass(credential_pub_key, CredentialPublicKey);
            wasm.proofverifier_addSubProofRequest(retptr, this.ptr, ptr0, ptr1, ptr2, credential_pub_key.ptr, addBorrowedObject(rev_key_pub), addBorrowedObject(rev_reg));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Proof} proof
    * @param {Nonce} nonce
    * @returns {boolean}
    */
    verify(proof, nonce) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(proof, Proof);
            _assertClass(nonce, Nonce);
            wasm.proofverifier_verify(retptr, this.ptr, proof.ptr, nonce.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return r0 !== 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Prover {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_prover_free(ptr);
    }
    /**
    * @param {CredentialPublicKey} credential_pub_key
    * @param {CredentialKeyCorrectnessProof} credential_key_correctness_proof
    * @param {CredentialValues} credential_values
    * @param {Nonce} credential_nonce
    * @returns {ProverBlindedCredentialSecrets}
    */
    static blindedCredentialSecrets(credential_pub_key, credential_key_correctness_proof, credential_values, credential_nonce) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(credential_pub_key, CredentialPublicKey);
            _assertClass(credential_key_correctness_proof, CredentialKeyCorrectnessProof);
            _assertClass(credential_values, CredentialValues);
            var ptr0 = credential_values.__destroy_into_raw();
            _assertClass(credential_nonce, Nonce);
            wasm.prover_blindedCredentialSecrets(retptr, credential_pub_key.ptr, credential_key_correctness_proof.ptr, ptr0, credential_nonce.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return ProverBlindedCredentialSecrets.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {IssuedCredential} issued_credential
    * @param {CredentialValues} credential_values
    * @param {CredentialSecretsBlindingFactors} credential_secrets_blinding_factors
    * @param {CredentialPublicKey} credential_pub_key
    * @param {Nonce} nonce
    * @param {any} rev_key_pub
    * @param {any} rev_reg
    * @param {any} witness
    * @returns {CredentialSignature}
    */
    static processCredentialSignature(issued_credential, credential_values, credential_secrets_blinding_factors, credential_pub_key, nonce, rev_key_pub, rev_reg, witness) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(issued_credential, IssuedCredential);
            _assertClass(credential_values, CredentialValues);
            var ptr0 = credential_values.__destroy_into_raw();
            _assertClass(credential_secrets_blinding_factors, CredentialSecretsBlindingFactors);
            _assertClass(credential_pub_key, CredentialPublicKey);
            _assertClass(nonce, Nonce);
            wasm.prover_processCredentialSignature(retptr, issued_credential.ptr, ptr0, credential_secrets_blinding_factors.ptr, credential_pub_key.ptr, nonce.ptr, addBorrowedObject(rev_key_pub), addBorrowedObject(rev_reg), addBorrowedObject(witness));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return CredentialSignature.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
* Convenience class for javascript. This provides a name-value pair structure
* instead of a tuple. The compiler complains about unused fields
* so allow(unused) is in place for now
*/
export class ProverBlindedCredentialSecrets {

    static __wrap(ptr) {
        const obj = Object.create(ProverBlindedCredentialSecrets.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_proverblindedcredentialsecrets_free(ptr);
    }
}
/**
*/
export class RevocationPrivateKey {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revocationprivatekey_free(ptr);
    }
}
/**
*/
export class RevocationPublicKey {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revocationpublickey_free(ptr);
    }
}
/**
*/
export class RevocationRegistry {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revocationregistry_free(ptr);
    }
}
/**
*/
export class RevocationRegistryDelta {

    static __wrap(ptr) {
        const obj = Object.create(RevocationRegistryDelta.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revocationregistrydelta_free(ptr);
    }
    /**
    * @param {any} rev_reg_from
    * @param {RevocationRegistry} rev_reg_to
    * @param {any} issued
    * @param {any} revoked
    * @returns {RevocationRegistryDelta}
    */
    static fromParts(rev_reg_from, rev_reg_to, issued, revoked) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(rev_reg_to, RevocationRegistry);
            wasm.revocationregistrydelta_fromParts(retptr, addBorrowedObject(rev_reg_from), rev_reg_to.ptr, addBorrowedObject(issued), addBorrowedObject(revoked));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return RevocationRegistryDelta.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RevocationRegistryDelta} other_delta
    */
    merge(other_delta) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(other_delta, RevocationRegistryDelta);
            wasm.revocationregistrydelta_merge(retptr, this.ptr, other_delta.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class RevocationTailsGenerator {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revocationtailsgenerator_free(ptr);
    }
    /**
    * @returns {number}
    */
    count() {
        const ret = wasm.revocationtailsgenerator_count(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {any}
    */
    next() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.revocationtailsgenerator_next(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return takeObject(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class SignKey {

    static __wrap(ptr) {
        const obj = Object.create(SignKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_signkey_free(ptr);
    }
    /**
    */
    constructor() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.signkey_new(retptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SignKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} seed
    * @returns {SignKey}
    */
    static fromSeed(seed) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.signkey_fromSeed(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SignKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {SignKey}
    */
    static fromBytes(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.signkey_fromBytes(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SignKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    toBytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.signkey_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class Signature {

    static __wrap(ptr) {
        const obj = Object.create(Signature.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_signature_free(ptr);
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {Signature}
    */
    static fromBytes(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.multisignature_fromBytes(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Signature.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    toBytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.multisignature_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class SignatureCorrectnessProof {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_signaturecorrectnessproof_free(ptr);
    }
}
/**
*/
export class SimpleTailsAccessor {

    static __wrap(ptr) {
        const obj = Object.create(SimpleTailsAccessor.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_simpletailsaccessor_free(ptr);
    }
    /**
    * @param {RevocationTailsGenerator} rev_tails_generator
    */
    constructor(rev_tails_generator) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(rev_tails_generator, RevocationTailsGenerator);
            wasm.simpletailsaccessor_new(retptr, rev_tails_generator.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SimpleTailsAccessor.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} tail_id
    * @param {Function} accessor
    */
    accessTail(tail_id, accessor) {
        try {
            wasm.simpletailsaccessor_accessTail(this.ptr, tail_id, addBorrowedObject(accessor));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
export class SubProofRequest {

    static __wrap(ptr) {
        const obj = Object.create(SubProofRequest.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_subproofrequest_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.subproofrequest_new();
        return SubProofRequest.__wrap(ret);
    }
    /**
    * @param {string} attribute
    */
    addRevealedAttribute(attribute) {
        const ptr0 = passStringToWasm0(attribute, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.credentialschema_addAttr(this.ptr, ptr0, len0);
    }
    /**
    * @param {string} attribute
    * @param {string} p_type
    * @param {number} value
    */
    addPredicate(attribute, p_type, value) {
        const ptr0 = passStringToWasm0(attribute, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(p_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.subproofrequest_addPredicate(this.ptr, ptr0, len0, ptr1, len1, value);
    }
}
/**
*/
export class Tail {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_tail_free(ptr);
    }
}
/**
*/
export class UrsaEncryptor {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ursaencryptor_free(ptr);
    }
    /**
    * @param {string} cipher
    * @returns {WasmCipherKey}
    */
    static new(cipher) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(cipher, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.ursaencryptor_new(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmCipherKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {string} cipher
    * @param {string} key
    * @returns {WasmCipherKey}
    */
    static withKey(cipher, key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(cipher, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            wasm.ursaencryptor_withKey(retptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmCipherKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmCipherKey} cipher_key
    * @param {Uint8Array} aad
    * @param {Uint8Array} input
    * @returns {Uint8Array}
    */
    encrypt(cipher_key, aad, input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(cipher_key, WasmCipherKey);
            var ptr0 = cipher_key.__destroy_into_raw();
            const ptr1 = passArray8ToWasm0(aad, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            const ptr2 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
            const len2 = WASM_VECTOR_LEN;
            wasm.ursaencryptor_encrypt(retptr, this.ptr, ptr0, ptr1, len1, ptr2, len2);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v3 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v3;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmCipherKey} cipher_key
    * @param {Uint8Array} aad
    * @param {Uint8Array} input
    * @returns {Uint8Array}
    */
    decrypt(cipher_key, aad, input) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(cipher_key, WasmCipherKey);
            var ptr0 = cipher_key.__destroy_into_raw();
            const ptr1 = passArray8ToWasm0(aad, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            const ptr2 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
            const len2 = WASM_VECTOR_LEN;
            wasm.ursaencryptor_decrypt(retptr, this.ptr, ptr0, ptr1, len1, ptr2, len2);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v3 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v3;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class VerKey {

    static __wrap(ptr) {
        const obj = Object.create(VerKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_verkey_free(ptr);
    }
    /**
    * @param {Generator} generator
    * @param {SignKey} sign_key
    */
    constructor(generator, sign_key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(generator, Generator);
            var ptr0 = generator.__destroy_into_raw();
            _assertClass(sign_key, SignKey);
            var ptr1 = sign_key.__destroy_into_raw();
            wasm.verkey_new(retptr, ptr0, ptr1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return VerKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {VerKey}
    */
    static fromBytes(bytes) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.verkey_fromBytes(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return VerKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Uint8Array}
    */
    toBytes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.verkey_toBytes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            var r3 = getInt32Memory0()[retptr / 4 + 3];
            if (r3) {
                throw takeObject(r2);
            }
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class WasmCipherKey {

    static __wrap(ptr) {
        const obj = Object.create(WasmCipherKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmcipherkey_free(ptr);
    }
}
/**
*/
export class WasmPrivateKey {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmprivatekey_free(ptr);
    }
}
/**
*/
export class WasmPublicKey {

    static __wrap(ptr) {
        const obj = Object.create(WasmPublicKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmpublickey_free(ptr);
    }
    /**
    * @param {Uint8Array} key
    */
    constructor(key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.wasmpublickey_new(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmPublicKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class WasmSessionKey {

    static __wrap(ptr) {
        const obj = Object.create(WasmSessionKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmsessionkey_free(ptr);
    }
}
/**
*/
export class Witness {

    static __wrap(ptr) {
        const obj = Object.create(Witness.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_witness_free(ptr);
    }
    /**
    * @param {number} rev_idx
    * @param {number} max_cred_num
    * @param {boolean} issuance_by_default
    * @param {RevocationRegistryDelta} rev_reg_delta
    * @param {SimpleTailsAccessor} rev_tails_accessor
    */
    constructor(rev_idx, max_cred_num, issuance_by_default, rev_reg_delta, rev_tails_accessor) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(rev_reg_delta, RevocationRegistryDelta);
            _assertClass(rev_tails_accessor, SimpleTailsAccessor);
            wasm.witness_new(retptr, rev_idx, max_cred_num, issuance_by_default, rev_reg_delta.ptr, rev_tails_accessor.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return Witness.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} rev_idx
    * @param {number} max_cred_num
    * @param {RevocationRegistryDelta} rev_reg_delta
    * @param {SimpleTailsAccessor} rev_tails_accessor
    */
    update(rev_idx, max_cred_num, rev_reg_delta, rev_tails_accessor) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(rev_reg_delta, RevocationRegistryDelta);
            _assertClass(rev_tails_accessor, SimpleTailsAccessor);
            wasm.witness_update(retptr, this.ptr, rev_idx, max_cred_num, rev_reg_delta.ptr, rev_tails_accessor.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class X25519Sha256 {

    static __wrap(ptr) {
        const obj = Object.create(X25519Sha256.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_x25519sha256_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.ecdsasecp256k1sha256_new();
        return X25519Sha256.__wrap(ret);
    }
    /**
    * @returns {KeyPair}
    */
    keypair() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.x25519sha256_keypair(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return KeyPair.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} seed
    * @returns {KeyPair}
    */
    keypair_from_seed(seed) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.x25519sha256_keypair_from_seed(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return KeyPair.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmPrivateKey} sk
    * @returns {WasmPublicKey}
    */
    getPublicKey(sk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sk, WasmPrivateKey);
            wasm.x25519sha256_getPublicKey(retptr, this.ptr, sk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmPublicKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {WasmPrivateKey} sk
    * @param {WasmPublicKey} pk
    * @returns {WasmSessionKey}
    */
    computeSharedSecret(sk, pk) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(sk, WasmPrivateKey);
            _assertClass(pk, WasmPublicKey);
            wasm.x25519sha256_computeSharedSecret(retptr, this.ptr, sk.ptr, pk.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return WasmSessionKey.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_is_bigint = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'bigint';
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_i64 = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        const ret = getObject(arg0) === getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getwithrefkey_15c62c2b8546208d = function(arg0, arg1) {
        const ret = getObject(arg0)[getObject(arg1)];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_20cbc34131e76824 = function(arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbg_debug_7960d327fd96f71a = function(arg0, arg1, arg2, arg3) {
        console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
    };
    imports.wbg.__wbg_error_fe807da27c4a4ced = function(arg0) {
        console.error(getObject(arg0));
    };
    imports.wbg.__wbg_error_fd84ca2a8a977774 = function(arg0, arg1, arg2, arg3) {
        console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
    };
    imports.wbg.__wbg_info_5566be377f5b52ae = function(arg0, arg1, arg2, arg3) {
        console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
    };
    imports.wbg.__wbg_log_7b690f184ae4519b = function(arg0, arg1, arg2, arg3) {
        console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
    };
    imports.wbg.__wbg_warn_48cbddced45e5414 = function(arg0, arg1, arg2, arg3) {
        console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
    };
    imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
        const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_json_serialize = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = JSON.stringify(obj === undefined ? null : obj);
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbindgen_copy_to_typed_array = function(arg0, arg1, arg2) {
        new Uint8Array(getObject(arg2).buffer, getObject(arg2).byteOffset, getObject(arg2).byteLength).set(getArrayU8FromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_getRandomValues_3774744e221a22ad = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_randomFillSync_e950366c42764a07 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).randomFillSync(takeObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_crypto_70a96de3b6b73dac = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_process_dd1577445152112e = function(arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_versions_58036bec3add9e6f = function(arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_node_6a9d28205ed5b0d8 = function(arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_adbc770ec9eca9c7 = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_f05d779769764e82 = function() { return handleError(function () {
        const ret = module.require;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_self_7eede1f4488bf346 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_crypto_c909fb428dcbddb6 = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_511eefefbfc70ae4 = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function() {
        const ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_900d5c3984fe7703 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_307049345d0bd88c = function(arg0) {
        const ret = getObject(arg0).getRandomValues;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_cd175915511f705e = function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    };
    imports.wbg.__wbg_randomFillSync_85b3f4c52c56c313 = function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_get_27fe3dac1c4d0224 = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_e498fbc24f9c1d4f = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_new_b525de17f44a8943 = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_f841cc6f2098f4b5 = function() {
        const ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_b7d530c04fd8b217 = function(arg0) {
        const ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_next_88560ec06a094dea = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_done_1ebec03bbd919843 = function(arg0) {
        const ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_6ac8da5cc5b3efda = function(arg0) {
        const ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_iterator_55f114446221aa5a = function() {
        const ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_get_baf4855f9a986186 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_call_95d1ea488d03e4e8 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_new_f9876326328f45ed = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_17224bc548dd1d7b = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbg_isArray_39d28997bf6b96b4 = function(arg0) {
        const ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_call_9495de66fdbe016b = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_set_388c4c6422704173 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_isSafeInteger_8c4789029e885159 = function(arg0) {
        const ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_entries_4e1315b774245952 = function(arg0) {
        const ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_cf65c07de34b9a08 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_e7c1f827057f6584 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_a09ec664e14b1b81 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_c85a9259e621f3db = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_537b7341ce90bb31 = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_17499e8aa4003ebd = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_27a2afe8ab42b09f = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_newwithlength_b56c882b57805732 = function(arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_subarray_7526649b91a252a6 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
        const ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
        try {
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
        const v = getObject(arg1);
        const ret = typeof(v) === 'bigint' ? v : undefined;
        getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedBigInt64Memory0 = null;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('anoncreds_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
