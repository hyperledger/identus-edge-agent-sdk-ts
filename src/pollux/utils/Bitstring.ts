
export class Bitstring {
    bits: Uint8Array;
    length: number;
    leftToRightIndexing: boolean;

    constructor({
        buffer,
        leftToRightIndexing
    }: {
        buffer: Uint8Array;
        leftToRightIndexing?: boolean;
    }) {
        if (!buffer) {
            throw new Error('Only one of "length" or "buffer" must be given.');
        }
        this.bits = new Uint8Array(buffer.buffer);
        this.length = buffer.length * 8;
        this.leftToRightIndexing = leftToRightIndexing ?? false;
    }

    set(position: number, on: boolean): void {
        const { length, leftToRightIndexing } = this;
        const { index, bit } = _parsePosition(position, length, leftToRightIndexing);
        if (on) {
            this.bits[index] |= bit;
        } else {
            this.bits[index] &= 0xff ^ bit;
        }
    }

    get(position: number): boolean {
        const { length, leftToRightIndexing } = this;
        const { index, bit } = _parsePosition(position, length, leftToRightIndexing);
        return !!(this.bits[index] & bit);
    }


}

function _parsePosition(
    position: number,
    length: number,
    leftToRightIndexing: boolean
): { index: number; bit: number } {
    if (position >= length) {
        throw new Error(
            `Position "${position}" is out of range "0-${length - 1}".`
        );
    }
    const index = Math.floor(position / 8);
    const rem = position % 8;
    const shift = leftToRightIndexing ? 7 - rem : rem;
    const bit = 1 << shift;
    return { index, bit };
}
