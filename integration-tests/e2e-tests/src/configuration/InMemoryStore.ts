import SDK from "@atala/prism-wallet-sdk"

import { MangoQuery } from "rxdb"

/**
 * WARNING: Do not  use this Pluto Store implementation, its for test purposes only.
 * Persistence is inMemory and totally unprotected.
 * Functionality isn't 100% covered - only handling what is necessary
 */
export class InMemoryStore implements SDK.Pluto.Store {

  private store = new Map<string, any[]>()

  async query<T>(table: string, query?: MangoQuery<T>): Promise<T[]> {
    const items = this.get(table)
    const selector = { ...query?.selector ?? {} }

    const filtered = items.filter(item => {
      if (Object.keys(selector).length === 0) return true

      const { $or, $and, ...props } = selector
      const matchProps = this.match(props, item)
      const matchOr = ($or ?? []).reduce((acc, x) => acc || this.match(x, item), false)
      const matchAnd = $and?.length > 0 ? ($and ?? []).reduce((acc, x) => acc && this.match(x, item), true) : false
      return matchOr || matchAnd || matchProps
    })

    return filtered
  }

  async insert(table: string, model: any): Promise<void> {
    const items = this.get(table)
    items.push(model)
  }

  private get(key: string) {
    const current = this.store.get(key)

    if (!current) {
      this.store.set(key, [])
    }

    return this.store.get(key)!
  }

  private match(query: Record<string, any>, item: any) {
    const keys = Object.keys(query)
    if (keys.length <= 0) {
      return false
    }
    const match = keys.every(key => item[key] == query[key])
    return match
  }


  update<T extends SDK.Domain.Pluto.Storable>(table: string, model: T): Promise<void> {
    throw new Error("Method not implemented.")
  }

  delete(table: string, uuid: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
}
