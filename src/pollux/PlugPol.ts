import * as Domain from "../domain";
import { JsonObj, notNil } from "../utils";
import * as Utils from "../utils/tasks";
import { Payload } from "../domain/protocols/Payload";
import { Plugin } from "../plugins";

export namespace Pollux {
  export abstract class Task<T = unknown> extends Utils.Task<Payload, T> {}

  export type Context = Utils.Task.Context;
}

// ? should be renamed to PluginManager / ModuleManager
export class PlugPol implements Domain.Pollux {
  private readonly plugins: Plugin[] = [];

  constructor(
    private readonly dependencies: Utils.Task.Context.Base
  ) {}

  async start() {}

  register(plugin: Plugin) {
    this.plugins.push(plugin);
  }

  async handle(
    protocolType: string,
    protocolId: string,
    payload: JsonObj,
  ): Promise<Payload> {
    const protocolCtor = this.findProtocol(protocolType, protocolId);
    // ? move to re-using current context...
    const ctx = Utils.Task.Context.make(this.dependencies);
    const extensions = this.plugins
      .map(x => x.extensions)
      .reduce((acc, x) => Object.assign(acc, x), {});

    ctx.extend(extensions);

    const task = new protocolCtor(payload);
    const result = await ctx.run(task);
    return result;
  }

  private findProtocol(type: string, id: string) {
    for (const plugin of this.plugins) {
      const protocol = plugin.tasks.get(id) ?? plugin.tasks.get(`${type}/${id}`);

      if (notNil(protocol)) {
        return protocol;
      }
    }

    throw new Error(`Protocol handler not found for ${id} (${type})`);
  }
}
