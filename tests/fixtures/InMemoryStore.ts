import { Pluto } from "../../src/pluto/Pluto";

/**
 * WARNING: Do not  use this Pluto Store implementation, its for test purposes only.
 * Persistence is inMemory and totally unprotected.
 */
export class InMemoryStore implements Pluto.Store {
  private store = new Map<string, any[]>();

  async query<T>(table: string, selector: Partial<T>[]): Promise<T[]> {
    const items = this.get(table);

    const filtered = items.filter(item => {
      if (selector.length === 0) return true;

      const match = selector.some(query => this.match(query, item));
      return match;
    });

    return filtered;
  }

  async insert(table: string, model: any): Promise<string | { uuid: string; }> {
    const items = this.get(table);
    const uuid = (items.length + 1).toString();
    items.push({ ...model, uuid });

    return uuid;
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
