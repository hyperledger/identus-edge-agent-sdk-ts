import { BaseSchema, DerivationPathBase, AxesArray } from "..";
import { ApolloError } from "../../Errors";
import { DerivationAxis } from "../DerivationAxis";


interface DeprecatedDerivationSchema extends BaseSchema {
    keyType: number
    didIndex: number
    keyIndex: number
}
export const DeprecatedDerivationPathSchema = "deprecated";
export class DeprecatedDerivationPath extends DerivationPathBase<DeprecatedDerivationSchema> {

    schema = DeprecatedDerivationPathSchema

    constructor(paths: number[]) {
        if (paths.length !== 3) {
            throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema")
        }
        const [keyType, didIndex, keyIndex] = paths;
        if (typeof keyType === 'undefined' ||
            typeof didIndex === 'undefined' ||
            typeof keyIndex === 'undefined'
        ) {
            throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema")
        }
        super({ keyType, didIndex, keyIndex })
    }

    get index(): number {
        return this.keyIndex.number
    }

    get keyType() {
        return DerivationAxis.hardened(this.variables.keyType)
    }

    get didIndex() {
        return DerivationAxis.hardened(this.variables.didIndex)
    }

    get keyIndex() {
        return DerivationAxis.hardened(this.variables.keyIndex)
    }


    toString(): string {
        return this.axes.toString()
    }

    get axes() {
        return AxesArray.from([
            this.keyType,
            this.didIndex,
            this.keyIndex
        ])
    }
}