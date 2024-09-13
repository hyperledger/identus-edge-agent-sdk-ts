/**
 * Constructor for T
 */
export interface Ctor<T = any> {
  new(...args: any[]): T;
}

/**
 * no value shorthand
 */
export type Nil = undefined | null;

/**
 * T is either an Array or a single item
 * 
 * meant for use with function parameters to pass one or many items
 * @see asArray
 */
export type Arrayable<T> = T | T[];

/**
 * Construct a Type with a set of string Keys of type T | undefined
 * To be used in place of Record for arbitrary data structs
 * where the key does not definitely result in a T
 */
export type JsonObj<T = any> = Record<string, T | undefined>;
