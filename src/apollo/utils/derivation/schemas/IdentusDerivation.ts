import { ApolloError, Usage } from "../../../../domain"
import { BaseSchema, DerivationPathBase, AxesArray } from "../core"
import { DerivationAxis } from "../DerivationAxis"

interface IdentusDerivationSchema extends BaseSchema {
    walletPurpose: number
    didMethod: number
    didIndex: number
    keyPurpose: number
    keyIndex: number
}


export const IDENTUS_WALLET_PURPOSE = 29//0x1D;
export const IDENTUS_DID_METHOD = 29;
export const AUTHENTICATION_KEY = 4;
export const MASTER_KEY = 1;
export const ISSUING_KEY = 2;



export class IdentusDerivationPath extends DerivationPathBase<IdentusDerivationSchema> {
    constructor(paths: number[]) {
        if (paths.length !== 5) {
            throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema")
        }
        const [walletPurpose, didMethod, didIndex, keyPurpose, keyIndex] = paths;
        if (typeof walletPurpose === 'undefined' ||
            typeof didMethod === 'undefined' ||
            typeof didIndex === 'undefined' ||
            typeof keyPurpose === 'undefined' ||
            typeof didIndex === 'undefined'
        ) {
            throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema")
        }
        super({ walletPurpose, didMethod, didIndex, keyPurpose, keyIndex })
    }

    get walletPurpose() {
        return DerivationAxis.hardened(this.variables.walletPurpose)
    }

    get didMethod() {
        return DerivationAxis.hardened(this.variables.didMethod)
    }

    get didIndex() {
        return DerivationAxis.hardened(this.variables.didIndex)
    }

    get keyPurpose() {
        return DerivationAxis.hardened(this.variables.keyPurpose)
    }

    get keyIndex() {
        return DerivationAxis.hardened(this.variables.keyIndex)
    }

    static init(didIndex: number, keyPurpose: number = AUTHENTICATION_KEY, keyIndex: number = 0): IdentusDerivationPath {
        return new IdentusDerivationPath([
            IDENTUS_WALLET_PURPOSE,
            IDENTUS_DID_METHOD,
            didIndex,
            keyPurpose,
            keyIndex
        ])
    }

    toString(): string {
        return this.axes.toString()
    }

    get axes() {
        return AxesArray.from([
            this.walletPurpose,
            this.didMethod,
            this.didIndex,
            this.keyPurpose,
            this.keyIndex
        ])
    }
}
