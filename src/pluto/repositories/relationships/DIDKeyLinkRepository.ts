import type * as Models from "../../models";
import type { Pluto } from "../../Pluto";
import { LinkRepository } from "../builders/LinkRepository";

export class DIDKeyLinkRepository extends LinkRepository<Models.DIDKeyLink> {
  constructor(store: Pluto.Store) {
    super(store, "didkeyLink");
  }
}
