import { ExpectError } from "../domain/models/errors/Common";
import { Ctor, JsonObj, Nil } from "./types";

/**
 * isNullish
 * Typeguard - check a value is undefined or null
 */
export const isNil = (value: unknown): value is Nil => value === null || value === undefined;

/**
 * notNil
 * Typeguard - check a value is neither undefined or null
 * @see isNil
 */
export const notNil = <T>(value: T | Nil): value is T => !isNil(value);

/**
 * isEmpty
 * Logic - check a given value is considered empty
 * empty depends on typeof value:
 * - null
 * - undefined
 * - array: length = 0
 * - string: length = 0
 * @see isNil
 * @see isString
 * @see isArray
 */
export const isEmpty = (value: unknown): value is Nil => {
  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }

  return isNil(value);
};


/**
 * isObject
 * Typeguard - check a value is an object in the conceptual sense not the JS sense
 * excluding JS overlap with:
 *   null
 *   Arrays
 *   Functions
 */
export const isObject = <T>(value: T): value is Exclude<T & Record<string, any>, Nil | any[] | ((...args: any) => any)> =>
  typeof value === 'object' && notNil(value) && !isArray(value);

/**
 * isString
 * TypeGuard to check a value is a string
 */
export const isString = (value: unknown): value is string => typeof value === 'string';

/**
 * notEmptyString
 * Typeguard + Logic - check a value is a string with contents
 */
export const notEmptyString = (value: unknown): value is string => isString(value) && !isEmpty(value);

/**
 * isArray
 * Typeguard - check a value is an Array
 */
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

/**
 * notEmptyArray
 * Typeguard + Logic - check a value is an Array with contents
 */
// export const notEmptyArray = (value: unknown): value is unknown[] => isArray(value) && !isEmpty(value);

/**
 * asArray
 * convert a value to an array
 * @param items - the value to be converted
 *   - nullish returns empty array
 *   - single item returns array with item
 *   - array returns array
 * @param guard? - optional Typeguard to filter items ensuring item types
 */
export function asArray<T>(items: T | T[] | Nil): T[];
export function asArray<T, U extends T>(items: T | T[] | Nil, guard: (item: unknown) => item is U): U[];
export function asArray<T>(items: T | T[] | Nil, guard?: (item: unknown) => item is T): T[] {
  if (isNil(items)) {
    return [];
  }

  const unGuarded = items instanceof Array ? items : [items];

  return isNil(guard) ? unGuarded : unGuarded.filter(guard);
}

export const asJsonObj = (value: unknown): JsonObj => {
  if (isString(value)) {
    return JSON.parse(value);
  }

  if (isObject(value)) {
    return value;
  }

  return {};
};

/**
 * expect
 * assert a value is notNil and return the value typed as such
 * panic otherwise
 * 
 * @param value - the value to check
 * @param error? - custom error
 */
export function expect<T>(value: T, error?: string | Ctor<Error> | Error): Exclude<T, Nil> {
  if (isNil(value)) {
    if (error instanceof Error)
      throw error;

    if (typeof error === "function")
      throw new error();

    throw new ExpectError(error);
  }

  return value as Exclude<T, Nil>;
}
