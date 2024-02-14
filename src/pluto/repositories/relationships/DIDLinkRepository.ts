import type * as Models from "../../models";
import type { Pluto } from "../../Pluto";
import { LinkRepository } from "../builders/LinkRepository";

export class DIDLinkRepository extends LinkRepository<Models.DIDLink> {
  constructor(store: Pluto.Store) {
    super(store, "didLink");
  }
}
