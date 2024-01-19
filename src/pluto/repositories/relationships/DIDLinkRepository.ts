import type * as Models from "../../models";
import type { Pluto } from "../../Pluto";
import { BaseRepository } from "../builders/BaseRepository";

export class DIDLinkRepository extends BaseRepository<Models.DIDLink> {
  constructor(store: Pluto.Store) {
    super(store, "didLink");
  }
}
