import { Expectation } from "@serenity-js/core"
import _ from "lodash"

export class Expectations {
  static propertyValueToBe = <T>(jsonPath: string, expected: string) => {
    return Expectation.define(
      "propertyValueEqualTo", `contain path property [${jsonPath}] value equal to`,
      (actual: T, expected: string) => {
        return _.get(actual, jsonPath) == expected
      }
    )(expected)
  }

  static equalsTo = Expectation.define(
    "isEqualTo", "is equal to",
    (actual: number, expected: number) =>
      actual === expected,
  )

}
