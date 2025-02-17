import { Task } from "../utils";
import { asArray } from "../utils/guards";
import { Arrayable, Ctor } from "../utils/types";

/**
 * Provide interface to augment the SDK.
 * 
 * Currently able to:
 * - register protocol handlers
 * - extend the running context
 */
export class Plugin {
  private readonly _extensions = new Map<string, any>();
  public readonly tasks = new Map<string, Ctor<Task<any>>>();

  get extensions() {
    return Object.fromEntries(this._extensions.entries());
  }

  // extend Context with 
  addModule(key: string, module: any): this {
    this._extensions.set(key, module);
    return this;
  }

  // addMessageHandler() {}

  // addRevocationMethod() {}

  // register a protocol
  register(pids: Arrayable<string>, task: Ctor<Task<any>>): this {
    const pidsArr = asArray(pids);
    pidsArr.forEach(key => this.tasks.set(key, task));
    return this;
  }
}
