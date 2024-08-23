import { base64url } from 'multiformats/bases/base64';
import { gzip, ungzip } from 'pako';

export class Bitstring {
    public bits: Uint8Array;
    public length: number;
    private leftToRightIndexing: boolean;

    constructor(options: {
        length?: number;
        buffer?: Uint8Array;
        leftToRightIndexing?: boolean;
        littleEndianBits?: boolean;
    } = {}) {
        const { length, buffer, leftToRightIndexing, littleEndianBits } = options;

        if (length && buffer) {
            throw new Error('Only one of "length" or "buffer" must be given.');
        }

        if (littleEndianBits !== undefined) {
            if (leftToRightIndexing !== undefined) {
                throw new Error(
                    'Using both "littleEndianBits" and "leftToRightIndexing" is not allowed.'
                );
            }
            this.leftToRightIndexing = littleEndianBits;
        } else {
            this.leftToRightIndexing = leftToRightIndexing ?? true;
        }

        if (length) {
            this.bits = new Uint8Array(Math.ceil(length / 8));
            this.length = length;
        } else if (buffer) {
            this.bits = new Uint8Array(buffer.buffer);
            this.length = buffer.length * 8;
        } else {
            throw new Error('Either "length" or "buffer" must be provided.');
        }
    }

    set(position: number, on: boolean): void {
        const { index, bit } = this.parsePosition(position);
        if (on) {
            this.bits[index] |= bit;
        } else {
            this.bits[index] &= 0xFF ^ bit;
        }
    }

    get(position: number): boolean {
        const { index, bit } = this.parsePosition(position);
        return !!(this.bits[index] & bit);
    }

    async encodeBits(): Promise<string> {
        return base64url.baseEncode(gzip(this.bits));
    }

    static async decodeBits(encoded: string): Promise<Uint8Array> {
        return ungzip(base64url.baseDecode(encoded));
    }

    async compressBits(): Promise<Uint8Array> {
        return gzip(this.bits);
    }

    static async uncompressBits(compressed: Uint8Array): Promise<Uint8Array> {
        return ungzip(compressed);
    }

    private parsePosition(position: number): { index: number; bit: number } {
        if (position < 0 || position >= this.length) {
            throw new Error(
                `Position "${position}" is out of range "0-${this.length - 1}".`
            );
        }

        const index = Math.floor(position / 8);
        const rem = position % 8;
        const shift = this.leftToRightIndexing ? 7 - rem : rem;
        const bit = 1 << shift;

        return { index, bit };
    }
}