export interface Schema {
  version: number;
  primaryKey: string;
  type: "object";
  properties: Record<string, Property>;
  encrypted: string[];
  required: string[];
}

interface Property {
  type: string;
  maxLength?: number;
}

type StringKeys<T> = Exclude<Extract<keyof T, string>, "uuid">;
type KeysOf<T, X> = { [K in keyof T]-?: X extends T[K] ? K : never; }[StringKeys<T>];
type KeysFor<T, P extends PropertyTypes> = P extends "number"
  ? KeysOf<T, number>
  : P extends "string"
  ? KeysOf<T, string>
  : P extends "boolean"
  ? KeysOf<T, boolean>
  : never;

type PropertyTypes = "boolean" | "number" | "string";

interface SchemaGenerator<T> {
  addProperty<P extends PropertyTypes>(type: P, key: KeysFor<T, P>, opts?: any): void;
  addProperty(type: PropertyTypes, key: string, opts?: any): void;
  setEncrypted(...keys: StringKeys<T>[]): void;
  setRequired(...keys: StringKeys<T>[]): void;
  setVersion(version: number): void;
}

/**
 * helper for creating Schemas
 * handle repetitive and improve type safety
 * 
 * @param generator 
 * @returns 
 */
export const schemaFactory = <T>(generator: (schema: SchemaGenerator<T>) => void) => {
  const schema: Schema = {
    version: 0,
    type: 'object',
    primaryKey: 'uuid',
    properties: {
      uuid: {
        type: "string",
        maxLength: 60
      }
    },
    encrypted: [],
    required: ["uuid"],
  };

  generator({
    addProperty: (type: any, key: string, opts = {}) => { schema.properties[key] = { type, ...opts }; },
    setEncrypted: (...keys) => { schema.encrypted.push(...keys); },
    setRequired: (...keys) => { schema.required.push(...keys); },
    setVersion: (version) => { schema.version = version; }
  });

  return schema;
};
