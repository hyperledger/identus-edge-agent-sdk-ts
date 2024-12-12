import { Task } from "../utils";
import { asArray } from "../utils/guards";
import { Arrayable, Ctor, JsonObj, Normalize } from "../utils/types";

/**
 * Provide interface to augment the SDK.
 * 
 * Currently able to:
 * - register protocol handlers
 * - extend the executable context
 */
export class Plugin<T extends JsonObj = {}> {
  private readonly _extensions = new Map<string, any>();
  public readonly tasks = new Map<string, Ctor<Task<any>>>();

  get extensions() {
    return Object.fromEntries(this._extensions.entries());
  }


  // addMessageHandler() {}

  // addRevocationMethod() {}


  // extend Context
  extend<K extends string, E>(key: K, extension: E): Plugin<Normalize<T & { [P in K]: E }>> {
    this._extensions.set(key, extension);
    return this;
  }

  // register a protocol
  register(pids: Arrayable<string>, task: Ctor<Task<any>>) {
    const pidsArr = asArray(pids);
    pidsArr.forEach(key => this.tasks.set(key, task));
  }
}

export namespace Plugin {
  // flatten intersection to appear as single interface
  export type ExtractExtension<T> = T extends Plugin<infer X> ? X : {};
}
