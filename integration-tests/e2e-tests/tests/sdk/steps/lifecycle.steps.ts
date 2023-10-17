import { After, Before, BeforeAll } from "@cucumber/cucumber"
import { Actor, Cast, TakeNotes, actorCalled, engage } from "@serenity-js/core"
import { CallAnApi } from "@serenity-js/rest"
import { EnvironmentVariables } from "../environment.variables"
import { SdkAgentWorkflow } from "../src/SdkAgentWorkflow"
import { PrismAgentWorkflow } from "../src/PrismAgentWorkflow"
import axios from "axios"
import { Utils } from "../../Utils"

import nodeCrypto from "crypto";

Object.defineProperty(globalThis, "crypto", {
  value: {
    getRandomValues: (arr:any) => nodeCrypto.getRandomValues(arr),
  },
});


export let axiosInstance = axios.create({
  baseURL: EnvironmentVariables.agentUrl,
  timeout: 10000,
  headers: {
    Accept: 'application/json,application/xml',
    APIKEY: EnvironmentVariables.apiKey
  }
})

BeforeAll(async() => {
  Utils.clearNotes()
  await PrismAgentWorkflow.prepare()
})

Before(async() => {
  await SdkAgentWorkflow.createAgent()
  Actors.createAndEngageActors()
})

After(async() => {
  await SdkAgentWorkflow.stop()
})

class Actors implements Cast {
  actors = new Map<string, Actor>()

  add(actor: Actor) {
    this.actors.set(actor.name, actor)
  }

  prepare(actor: Actor): Actor {
    if (!this.actors.has(actor.name)) {
      throw new Error(`Unable to find actor ${actor.name}`)
    }
    return this.actors.get(actor.name)!
  }

  static createAndEngageActors() {
    let actors = new Actors()

    let prismAgent = actorCalled("Cloud Agent").whoCan(
      CallAnApi.using(axiosInstance),
      TakeNotes.usingAnEmptyNotepad()
    )

    let edgeAgent = actorCalled("Edge Agent").whoCan(
      TakeNotes.usingAnEmptyNotepad()
    )

    actors.add(prismAgent)
    actors.add(edgeAgent)

    engage(actors)
  }
}
