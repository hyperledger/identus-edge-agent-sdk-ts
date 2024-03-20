import { Nil } from "./types";

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
 * empty depends on typeof value
 * - array: length = 0
 * - string: length = 0
 * - other: null | undefined
 */
export const isEmpty = (value: unknown) => {
  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }

  return isNil(value);
};


/**
 * isObject
 * Typeguard - check a value is an object in the specific sense not the JS sense
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
