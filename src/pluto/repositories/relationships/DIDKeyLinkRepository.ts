import type * as Models from "../../models";
import type { Pluto } from "../../Pluto";
import { BaseRepository } from "../builders/BaseRepository";

export class DIDKeyLinkRepository extends BaseRepository<Models.DIDKeyLink> {
  constructor(store: Pluto.Store) {
    super(store, "didkeyLink");
  }
}
