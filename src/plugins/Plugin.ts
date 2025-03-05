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
  public readonly modules = new Map<string, any>();
  public readonly tasks = new Map<string, Ctor<Task<any>>>();

  // extend Context with 
  addModule(key: string, module: any): this {
    this.modules.set(key, module);
    return this;
  }

  // addRevocationMethod() {}

  // register a protocol
  register(pids: Arrayable<string>, task: Ctor<Task<any>>): this {
    asArray(pids).forEach(pid => this.tasks.set(pid, task));
    return this;
  }
}
