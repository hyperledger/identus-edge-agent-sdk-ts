import { randomUUID } from "crypto";
import SDK from "@atala/prism-wallet-sdk";
import InMemoryStore from "./index";


export const mockPluto = (args?: { apollo: SDK.Apollo; }) => {
  const apollo = args?.apollo ?? new SDK.Apollo();

  const store = new SDK.Store({
    name: 'test' + randomUUID(),
    storage: InMemoryStore,
    password: Buffer.from("demoapp").toString("hex")
  });

  return new SDK.Pluto(store, apollo);
};