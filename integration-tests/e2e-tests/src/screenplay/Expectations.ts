import { Expectation } from "@serenity-js/core"
import _ from "lodash"

export class Expectations {
  static propertyValueToBe<T>(jsonPath: string, expected: string) {
    return Expectation.define(
      "propertyValueEqualTo", `contain path property [${jsonPath}] value equal to`,
      (actual: T, expected: string) => {
        return _.get(actual, jsonPath) == expected
      }
    )(expected)
  }

  static propertyIsMetFor<T>(jsonPath: string, matcher: (property: string) => Promise<boolean>) {
    return Expectation.define(
      "propertyValueEqualTo", `contain path property [${jsonPath}] to`,
      async (actual: T) => {
        return await matcher(_.get(actual, jsonPath))
      }
    )()
  }


  static equalsTo = Expectation.define(
    "isEqualTo", "is equal to",
    (actual: number, expected: number) =>
      actual === expected,
  )

}
