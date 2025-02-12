import { notNil } from "../utils";
import { Plugin } from ".";

export class PluginManager {
  private readonly plugins: Plugin[] = [];

  register(plugin: Plugin) {
    this.plugins.push(plugin);
  }

  getModules() {
    const modules = this.plugins
      .map(x => x.extensions)
      .reduce((acc, x) => Object.assign(acc, x), {});

    return modules;
  }

  findProtocol(type: string, id: string) {
    for (const plugin of this.plugins) {
      const protocol = plugin.tasks.get(id) ?? plugin.tasks.get(`${type}/${id}`);

      if (notNil(protocol)) {
        return protocol;
      }
    }

    throw new Error(`Protocol handler not found for ${id} (${type})`);
  }
}
