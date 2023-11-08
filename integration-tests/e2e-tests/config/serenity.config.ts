import { BeforeAll, defineParameterType, setDefaultTimeout } from "@cucumber/cucumber"
import { actorCalled, actorInTheSpotlight, configure } from "@serenity-js/core"

setDefaultTimeout(5 * 60 * 1000)

BeforeAll(async function () {
  // Configure Serenity/JS
  configure({
    crew: [
      "@serenity-js/console-reporter",
      "@serenity-js/serenity-bdd",
      [
        "@serenity-js/core:ArtifactArchiver",
        { outputDirectory: "target/site/serenity" },
      ],
    ]
  })
})

defineParameterType({
  // regexp: /[A-Z][a-z]+/,
  regexp: /.*/,
  transformer(name: string) {
    return actorCalled(name)
  },
  name: "actor",
})

defineParameterType({
  regexp: /he|she|they|his|her|their/,
  transformer() {
    return actorInTheSpotlight()
  },
  name: "pronoun",
})
