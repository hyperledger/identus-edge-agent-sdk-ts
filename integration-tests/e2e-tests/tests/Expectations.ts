import { Expectation } from "@serenity-js/core"

export class Expectations {
    static propertyValueToBe = (propertyValue: (actual: any) => string, expected: string) => {
        return Expectation.define(
            `propertyValueEqualTo`, 'contain a specified attribute value equal to',
            (actual: any, expected: string) => {
                return propertyValue(actual) == expected
            }
        )(expected)
    }
    
    static equalsTo = Expectation.define(
        'isEqualTo', 'is equal to',
        (actual: number, expected: number) =>
            actual === expected,
    )
    
}
