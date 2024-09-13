import { expect } from 'chai';
import { Bitstring } from '../../src/pollux/utils/Bitstring';

describe('Bitstring', () => {
  describe('constructor', () => {
    it('should create a Bitstring with all indexes false for [0, 0]', () => {
      const buffer = new Uint8Array([0, 0]);
      const bitstring = new Bitstring({ buffer });
      for (let i = 0; i < 16; i++) {
        expect(bitstring.get(i)).to.be.false;
      }
    });

    it('should create a Bitstring with indexes 0, 14, 15 true for [128,3]', () => {
      const buffer = Uint8Array.from([128, 3]);
      const bitstring = new Bitstring({ buffer });
      const validIndexes = [0, 14, 15];

      for (let i = 0; i < 16; i++) {
        const bitstringIndex = bitstring.get(i);
        if (validIndexes.includes(i)) {
          expect(bitstringIndex).to.be.true;
        } else {
          expect(bitstringIndex).to.be.false;
        }
      }
    });

    it('should create a Bitstring with indexes 6 true for [2,0]', () => {
      const buffer = Uint8Array.from([2, 0]);
      const bitstring = new Bitstring({ buffer });
      const validIndexes = [6];

      for (let i = 0; i < 16; i++) {
        const bitstringIndex = bitstring.get(i);
        if (validIndexes.includes(i)) {
          expect(bitstringIndex).to.be.true;
        } else {
          expect(bitstringIndex).to.be.false;
        }
      }
    });

    it('should set a bit to true on default instance', async () => {
      const buffer = Uint8Array.from([0b00000000]);
      const bitstring = new Bitstring({ buffer });
      bitstring.set(4, true);
      expect(bitstring.get(0)).to.equal(false);
      expect(bitstring.get(1)).to.equal(false);
      expect(bitstring.get(2)).to.equal(false);
      expect(bitstring.get(3)).to.equal(false);
      expect(bitstring.get(4)).to.equal(true);
      expect(bitstring.get(5)).to.equal(false);
      expect(bitstring.get(6)).to.equal(false);
      expect(bitstring.get(7)).to.equal(false);
      expect(bitstring.bits).to.have.length(1);
      expect(bitstring.length).to.equal(8);
      // left-to-right bit order
      expect(bitstring.bits[0]).to.equal(0b00001000);
    });

  });


});
