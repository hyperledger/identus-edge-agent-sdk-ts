import * as Domain from "../domain";
import { expect } from "./guards";
import { JsonObj } from "./types";

/**
 * 
 * args constructor parameter is mandatory if Args type given
 * args constructor parameter is optional if no Args type given
 */
export abstract class Task<T, Args = unknown> {
  protected readonly args: Args;

  /**
   * 
   * @param {Args} args
   */
  constructor(...args: (unknown extends Args ? [] : [Args]));
  constructor(args?: Args) {
    this.args = args ?? {} as Args;
  }

  abstract run(ctx: Task.Context<any>): Promise<T>;

  // return loggable information
  log(): unknown {
    return this.args;
  }
}

export namespace Task {

  // ================================
  // === Context ===
  // ================================

  /**
   * Context is provided to running tasks
   * it optimistically provides access to Components
   */
  export type Context<T = JsonObj> = ContextProxy & Required<Context.Base> & T;

  export namespace Context {
    export type Options = Config & Base;

    export interface Config {
      logger?: ILogger;
      logLevel?: LogLevel;
    }

    // base components
    export interface Base {
      Api?: Domain.Api;
      Apollo?: Domain.Apollo;
      Castor?: Domain.Castor;
      Mercury?: Domain.Mercury;
      Pluto?: Domain.Pluto;
      Seed?: Domain.Seed;
    }

    export const make = <T extends Partial<Options>>(modules: T): Context<T> => {
      const instance = new ContextProxy(modules);
      return instance as Context<T>;
    };
  }

  /**
   * Context using proxy so we can extend arbitrarily
   */
  class ContextProxy {
    public readonly logger: ILogger;
    private readonly modules: JsonObj = {};
    private readonly _proxy: any;

    constructor(private readonly opts: JsonObj) {
      this.logger = opts.logger ?? new ConsoleLogger(opts.logLevel);

      const get = (target: any, prop: string) => {
        // return target.opts[prop] ?? target.modules[prop] ?? undefined;
        const ref = target[prop] ?? target.opts[prop] ?? target.modules[prop] ?? undefined;
        // ?? tmp work around context propagation
        return ref instanceof Runner
          ? ref.withContext(this._proxy)
          : ref;
      };

      this._proxy = new Proxy(this, { get });
      return this._proxy;
    }

    async run<T>(task: Task<T, any>): Promise<T> {
      const taskName = task.constructor.name;

      try {
        this.logger.debug(`Run: ${taskName}`, task.log());
        return await task.run(this);
      }
      catch (err) {
        this.logger.debug(`Fail: ${taskName}`, err);
        throw err;
      }
    }

    // TODO improve with logging and error checking
    extend(deps: JsonObj): this {
      Object.entries(deps).forEach(([key, value]) => {
        this.modules[key] = value;
      });

      return this;
    }
  }

  export abstract class Runner {
    private context?: Context;

    // ? tmp work around context propagation
    abstract clone(): Runner;

    withContext(ctx: Context) {
      const clone = this.clone();
      clone.context = ctx;
      return clone;
    }

    protected runTask<T>(task: Task<T>): Promise<T> {
      const ctx = expect(this.context, `${this.constructor.name}: no Context available`);
      return ctx.run(task);
    }
  }


  // ================================
  // === Logger ===
  // ================================

  interface ILogger {
    /**
     * very verbose information for debugging purposes
     */
    debug(message: string, ...params: any[]): void;
    /**
     * verbose information about normal operation
     */
    info(message: string, ...params: any[]): void;
    /**
     * expected information that might warrant require attention
     */
    warn(message: string, ...params: any[]): void;
    /**
     * unexpected or critical information
     */
    error(message: string, ...params: any[]): void;
  }

  type LogLevel = "debug" | "info" | "warn" | "error" | "none";

  class ConsoleLogger implements ILogger {
    private level: number;

    constructor(logLevel?: LogLevel) {
      this.level = this.getLogLevel(logLevel ?? "error");
    }

    getLogLevel(level: LogLevel): number {
      switch (level) {
        case "none": return 1;
        case "debug": return 2;
        case "info": return 3;
        case "warn": return 4;
        case "error": return 5;
      }
    }

    debug(message: string, ...params: any[]) {
      this.log("debug", message, ...params);
    }

    info(message: string, ...params: any[]) {
      this.log("info", message, ...params);
    }

    warn(message: string, ...params: any[]) {
      this.log("warn", message, ...params);
    }

    error(message: string, ...params: any[]) {
      this.log("error", message, ...params);
    }

    private log(level: LogLevel, message: string, ...params: any[]) {
      const logLevel = this.getLogLevel(level);

      if (logLevel >= this.level) {
        const item = {
          level,
          // identifier: this.identifier ?? "",
          time: Date.now(),
          message,
          // params
        };

        if (params.length > 0) {
          Object.assign(item, { params });
        }

        const output = JSON.stringify(item, null, 2);
        // const output = JSON.stringify(item);
        console.log(output);
      }
    }
  }
}
