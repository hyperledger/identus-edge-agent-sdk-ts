import { Static, TObject } from "@sinclair/typebox";
import { Value } from '@sinclair/typebox/value';
import { ValidationError } from "../domain/models/errors/Common";

/**
 * validateSafe
 * Typeguard - check a value matches a schema
 * 
 * @param json 
 * @param schema 
 * @returns {boolean}
 */
export const validateSafe = <T extends TObject>(json: unknown, schema: T): json is Static<T> => {
  const pass = Value.Check(schema, json);
  return pass;
};

/**
 * validate
 * Type assertion - assert a value matches a schema
 * 
 * @param json 
 * @param schema 
 * @throws Error - list of issues
 */
export function validate<T extends TObject>(json: unknown, schema: T): asserts json is Static<T> {
  if (!validateSafe(json, schema)) {
    const errors = [...Value.Errors(schema, json)].map(x => `${x.path} - ${x.message}`);
    throw new ValidationError(errors);
  }
}
