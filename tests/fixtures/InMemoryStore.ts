import { MangoQuery } from "rxdb";
import { Pluto } from "../../src/pluto/Pluto";

/**
 * WARNING: Do not  use this Pluto Store implementation, its for test purposes only.
 * Persistence is inMemory and totally unprotected.
 * Functionality isn't 100% covered - only handling what is necessary
 */
export class InMemoryStore implements Pluto.Store {
  private store = new Map<string, any[]>();

  async query<T>(table: string, query?: MangoQuery<T>): Promise<T[]> {
    const items = this.get(table);
    const selector = { ...query?.selector ?? {} };

    const filtered = items.filter(item => {
      if (Object.keys(selector).length === 0) return true;

      const { $or, $and, ...props } = selector;
      const matchProps = this.match(props, item);
      const matchOr = ($or ?? []).reduce((acc, x) => acc || this.match(x, item), false);
      return matchOr || matchProps;
    });

    return filtered;
  }

  async insert(table: string, model: any): Promise<void> {
    const items = this.get(table);
    items.push(model);
  }

  private get(key: string) {
    const current = this.store.get(key);

    if (!current) {
      this.store.set(key, []);
    }

    return this.store.get(key)!;
  }

  private match(query: Record<string, any>, item: any) {
    const keys = Object.keys(query);
    const match = keys.every(key => item[key] == query[key]);
    return match;
  }
}
