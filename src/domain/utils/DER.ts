/**
 * Fix around normalising DER signatures into their raw representation
 * @param derSignature Buffer
 * @returns Buffer
 */
export function normaliseDER(derSignature: Buffer): Buffer {
    // Ensure the DER signature starts with the correct sequence header
    if (derSignature[0] !== 0x30) {
        return derSignature;
    }
    // Get the length of the sequence
    let seqLength = derSignature[1];
    let offset = 2;
    if (seqLength & 0x80) {
        const lengthBytes = seqLength & 0x7f;
        seqLength = 0;
        for (let i = 0; i < lengthBytes; i++) {
            seqLength = (seqLength << 8) | derSignature[offset++];
        }
    }

    if (derSignature[offset++] !== 0x02) {
        throw new Error('Invalid DER signature: expected integer for r');
    }

    const rLength = derSignature[offset++];
    let r = derSignature.slice(offset, offset + rLength);
    offset += rLength;

    // Extract s value
    if (derSignature[offset++] !== 0x02) {
        throw new Error('Invalid DER signature: expected integer for s');
    }
    const sLength = derSignature[offset++];
    let s = derSignature.slice(offset, offset + sLength);

    // Normalize r and s to 32 bytes
    if (r.length > 32) {
        r = r.slice(-32); // truncate if r is longer than 32 bytes
    } else if (r.length < 32) {
        const paddedR = Buffer.alloc(32);
        r.copy(paddedR, 32 - r.length);
        r = paddedR; // left pad with zeros if r is shorter than 32 bytes
    }

    if (s.length > 32) {
        s = s.slice(-32); // truncate if s is longer than 32 bytes
    } else if (s.length < 32) {
        const paddedS = Buffer.alloc(32);
        s.copy(paddedS, 32 - s.length);
        s = paddedS; // left pad with zeros if s is shorter than 32 bytes
    }

    // Concatenate r and s to form the raw signature
    return Buffer.concat([r, s]);
}

/**
 * Converts a raw signature to DER format
 * @param rawSignature Buffer
 * @returns Buffer
 */
export function rawToDER(rawSignature: Buffer): Buffer {
    if (rawSignature.length !== 64) {
        return rawSignature;
    }

    let r = rawSignature.slice(0, 32);
    let s = rawSignature.slice(32, 64);

    r = removeLeadingZeros(r);
    s = removeLeadingZeros(s);

    // Ensure the integers are positive by prepending a zero byte if necessary
    if (r[0] & 0x80) {
        r = Buffer.concat([Buffer.from([0x00]), r]);
    }
    if (s[0] & 0x80) {
        s = Buffer.concat([Buffer.from([0x00]), s]);
    }

    const rLen = r.length;
    const sLen = s.length;

    const derSignature = Buffer.concat([
        Buffer.from([0x30, rLen + sLen + 4]), // Sequence tag and length
        Buffer.from([0x02, rLen]), // Integer tag and length for r
        r,
        Buffer.from([0x02, sLen]), // Integer tag and length for s
        s
    ]);

    return derSignature;
}

/**
 * Remove leading zeros from a buffer
 * @param buffer Buffer
 * @returns Buffer
 */
function removeLeadingZeros(buffer: Buffer): Buffer {
    const arr = Array.from(buffer)
    let i = 0;
    while (i < arr.length - 1 && arr[i] === 0) {
        i++;
    }
    return Buffer.from(arr.slice(i));
}
