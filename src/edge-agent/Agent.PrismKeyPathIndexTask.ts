import type * as Domain from "../domain";

/**
 * Task to find the latest Prism DID KeyPathIndex
 * 
 * Use the latest index from persisted PrismDIDs
 * or zero if none found
 * 
 * @returns number
 */
export class PrismKeyPathIndexTask {
  constructor(private readonly pluto: Domain.Pluto) { }

  async run(): Promise<number> {
    const prismDIDs = await this.pluto.getAllPrismDIDs();
    if (prismDIDs.length <= 0) {
      return 0
    }
    const indexes = prismDIDs.map(x => x.privateKey.index ?? 0);
    const keyPathIndex = Math.max(0, ...indexes);

    return keyPathIndex + 1;
  }
}
