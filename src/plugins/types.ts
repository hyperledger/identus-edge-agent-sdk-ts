import * as Utils from "../utils/tasks";
import { Payload } from "../domain/protocols/Payload";
import { JWT, SDJWT } from "../pollux/utils/jwt";

export namespace Plugins {
  export abstract class Task<T = unknown> extends Utils.Task<Payload, T> {}

  export interface InternalModules {
    JWT: JWT;
    SDJWT: SDJWT;
  }

  export type Context<T = Record<string, never>> = Utils.Task.Context<T & InternalModules>;
}
