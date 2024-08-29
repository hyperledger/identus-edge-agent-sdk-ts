import { Task } from "../../utils/tasks";

/**
 * Task to find the latest Prism DID KeyPathIndex
 * 
 * Use the latest index from persisted PrismDIDs
 * or zero if none found
 * 
 * @returns number
 */

interface Args {
  index?: number;
}

export class PrismKeyPathIndexTask extends Task<number, Args> {
  async run(ctx: Task.Context) {
    const { index } = this.args;
    const prismDIDs = await ctx.Pluto.getAllPrismDIDs();

    if (prismDIDs.length <= 0) {
      return 0;
    }

    const indexes = prismDIDs.map(x => x.privateKey.index ?? 0);
    const maxKey = Math.max(0, ...indexes);
    const keyPathIndex = maxKey;
    return typeof index !== 'undefined' && index > keyPathIndex ? index : keyPathIndex + 1;
  }
}
