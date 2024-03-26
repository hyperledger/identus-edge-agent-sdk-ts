import { randomUUID } from "crypto";
import { Apollo, Pluto, Store } from "../../../src";
import InMemoryStore from "./index";

export const mockPluto = (args?: { apollo: Apollo; }) => {
  const apollo = args?.apollo ?? new Apollo();

  const store = new Store({
    name: 'test' + randomUUID(),
    storage: InMemoryStore,
    password: Buffer.from("demoapp").toString("hex")
  });

  return new Pluto(store, apollo);
};
