import * as Guards from "../../src/utils/guards";

describe('Guards', () => {
  describe('isArray', () => {
    it.each([
      [undefined, false],
      [null, false],
      [true, false],
      [false, false],
      ['string', false],
      [123, false],
      [{}, false],
      [[], true],
      [[1, 2], true],
    ])('value %p should return %p', (value, expected) => expect(Guards.isArray(value)).toBe(expected));
  });

  describe('asArray', () => {
    it.each([
      [undefined, []],
      [null, []],
      [true, [true]],
      [false, [false]],
      ['string', ['string']],
      [123, [123]],
      [{}, [{}]],
      [[], []],
      [
        [1, 2],
        [1, 2],
      ],
    ])('value %p should return %p', (value, expected) => expect(Guards.asArray(value)).toEqual(expected));
  });

  describe('isObject', () => {
    it.each([
      [undefined, false],
      [null, false],
      [true, false],
      [false, false],
      [{}, true],
      [[], false],
      [[2], false],
      [NaN, false],
      [123, false],
      [123.13, false],
      [Number(7), false],
      ['', false],
      ['string', false],
      ['4', false],
      ['9.8', false],
      [() => {}, false],
      [Symbol(3), false],
    ])('value %p should return %p', (value, expected) => expect(Guards.isObject(value)).toEqual(expected));
  });

  describe('isString', () => {
    it.each([
      [undefined, false],
      [null, false],
      [true, false],
      [false, false],
      [{}, false],
      [[], false],
      [[2], false],
      [NaN, false],
      [123, false],
      [123.13, false],
      [Number(7), false],
      ['', true],
      ['string', true],
      ['4', true],
      ['9.8', true],
    ])('value %p should return %p', (value, expected) => expect(Guards.isString(value)).toEqual(expected));
  });

  describe('notEmptyString', () => {
    it.each([
      [undefined, false],
      [null, false],
      [true, false],
      [false, false],
      [{}, false],
      [[], false],
      [[2], false],
      [NaN, false],
      [123, false],
      [123.13, false],
      [Number(7), false],
      ['', false],
      ['string', true],
      ['4', true],
      ['9.8', true],
    ])('value %p should return %p', (value, expected) => expect(Guards.notEmptyString(value)).toEqual(expected));
  });

  describe('isNil', () => {
    it.each([
      [undefined, true],
      [null, true],
      [true, false],
      [false, false],
      [{}, false],
      [[], false],
      [[2], false],
      [NaN, false],
      [123, false],
      [123.13, false],
      [Number(7), false],
      ['', false],
      ['string', false],
      ['4', false],
      ['9.8', false],
    ])('value %p should return %p', (value, expected) => expect(Guards.isNil(value)).toEqual(expected));
  });

  describe('notNil', () => {
    it.each([
      [undefined, false],
      [null, false],
      [true, true],
      [false, true],
      [{}, true],
      [[], true],
      [[2], true],
      [NaN, true],
      [123, true],
      [123.13, true],
      [Number(7), true],
      ['', true],
      ['string', true],
      ['4', true],
      ['9.8', true],
    ])('value %p should return %p', (value, expected) => expect(Guards.notNil(value)).toEqual(expected));
  });

  describe('isEmpty', () => {
    it.each([
      [undefined, true],
      [null, true],
      [true, false],
      [false, false],
      [{}, false],
      [[], true],
      [[2], false],
      [NaN, false],
      [123, false],
      [123.13, false],
      [Number(7), false],
      ['', true],
      ['string', false],
      ['4', false],
      ['9.8', false],
    ])('value %p should return %p', (value, expected) => expect(Guards.isEmpty(value)).toEqual(expected));
  });
});
