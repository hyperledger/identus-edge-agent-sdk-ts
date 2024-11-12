import { Schema as v0_0_1 } from "./v0_0_1";
import { Schema as v0_0_2 } from "./v0_0_2";

/**
 * All supported backup schemas
 */
export type Schema = v0_0_1 | v0_0_2;
export type Version = "0.0.1" | "0.0.2";

export const defaultVersion = "0.0.1";

export const versions: Version[] = [
  "0.0.1",
  "0.0.2",
];

export { v0_0_1, v0_0_2 };
