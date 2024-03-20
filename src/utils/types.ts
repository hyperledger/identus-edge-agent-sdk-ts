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
