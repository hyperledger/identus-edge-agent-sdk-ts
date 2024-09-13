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

  abstract run(ctx?: Task.Context): Promise<T>;

  // return loggable information
  log(): unknown {
    return this.args;
  }
}

export namespace Task {

  // ================================
  // === Context ===
  // ================================

  export namespace Context {
    export type Options = Config & Deps;

    export interface Config {
      logger?: ILogger;
      logLevel?: LogLevel;
    }

    // dependencies
    export interface Deps {
      Api?: Domain.Api;
      Apollo?: Domain.Apollo;
      Castor?: Domain.Castor;
      Mercury?: Domain.Mercury;
      Pollux?: Domain.Pollux;
      Pluto?: Domain.Pluto;
      Seed?: Domain.Seed;
    }
  }

  /**
   * 
   */
  export class Context<T extends JsonObj = JsonObj> {
    private readonly logger: ILogger;

    constructor(
      private readonly opts: Context.Options & T
    ) {
      this.logger = opts.logger ?? new ConsoleLogger(opts.logLevel);
    }

    get Api(): Domain.Api { return this.getProp("Api"); }
    get Apollo(): Domain.Apollo { return this.getProp("Apollo"); }
    get Castor(): Domain.Castor { return this.getProp("Castor"); }
    get Mercury(): Domain.Mercury { return this.getProp("Mercury"); }
    get Pollux(): Domain.Pollux { return this.getProp("Pollux"); }
    get Pluto(): Domain.Pluto { return this.getProp("Pluto"); }
    get Seed(): Domain.Seed { return this.getProp("Seed"); }

    protected getProp<K extends keyof (Context.Deps & T)>(key: K) {
      const prop = expect(this.opts[key], `Context missing prop: ${key.toString()}`);
      return prop;
    }

    async run<T>(task: Task<T, any>): Promise<T> {
      const taskName = task.constructor.name;

      try {
        this.logger.debug(`${taskName}: Run`, task.log());
        return await task.run(this);
      }
      catch (err) {
        this.logger.warn(`Fail: ${taskName}`, task.log(), err);
        throw err;
      }
    }

  }

  // ================================
  // === Logger ===
  // ================================

  interface ILogger {
    debug(message: string, ...params: any[]): void;
    info(message: string, ...params: any[]): void;
    warn(message: string, ...params: any[]): void;
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
