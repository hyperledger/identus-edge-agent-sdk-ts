import { AfterAll, Before, BeforeAll } from "@cucumber/cucumber"
import { Actor, actorCalled, Cast, engage, TakeNotes } from "@serenity-js/core"
import { CallAnApi } from "@serenity-js/rest"
import { Utils } from "../Utils"
import { agentList, WalletSdk } from "../abilities/WalletSdk"
import { axiosInstance, CloudAgentConfiguration } from "../configuration/CloudAgentConfiguration"

BeforeAll(async () => {
  Utils.prepareNotes()
  await CloudAgentConfiguration.prepare()
})

Before(async () => {
  await Actors.createAndEngageActors()
})

AfterAll(async () => {
  if (agentList.size > 0) {
    console.warn("Found dangling agents in the end of execution. Explicitly removing them, please check lifecycle.")
    console.warn([...agentList.keys()])
    new Map(agentList).forEach((v) => {
      v.discard()
    })
  }
})

class Actors implements Cast {
  actors = new Map<string, Actor>()

  static async createAndEngageActors() {
    const actors = new Actors()

    const cloudAgent = actorCalled("Cloud Agent").whoCan(
      CallAnApi.using(axiosInstance),
      TakeNotes.usingAnEmptyNotepad()
    )

    const edgeAgent = actorCalled("Edge Agent").whoCan(
      TakeNotes.usingAnEmptyNotepad(),
      await WalletSdk.withANewInstance()
    )

    const verifierEdgeAgent = actorCalled("Verifier Edge Agent").whoCan(
      TakeNotes.usingAnEmptyNotepad(),
      await WalletSdk.withANewInstance()
    )

    actors.add(cloudAgent)
    actors.add(edgeAgent)
    actors.add(verifierEdgeAgent)
    engage(actors)
  }

  add(actor: Actor) {
    this.actors.set(actor.name, actor)
  }

  prepare(actor: Actor): Actor {
    if (!this.actors.has(actor.name)) {
      return actor
    }
    return this.actors.get(actor.name)!
  }
}
