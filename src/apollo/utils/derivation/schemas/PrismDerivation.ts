import { ApolloError } from "../../../../domain"
import { BaseSchema, DerivationPathBase, AxesArray } from "../core"
import { DerivationAxis } from "../DerivationAxis"
import * as Protos from "../../../../domain/models/protos/node_models";

interface PrismDerivationSchema extends BaseSchema {
    walletPurpose: number
    didMethod: number
    didIndex: number
    keyPurpose: number
    keyIndex: number
}

export const PRISM_IDENTIFIER = 0x1D;

export const PRISM_WALLET_PURPOSE = PRISM_IDENTIFIER;
export const PRISM_DID_METHOD = PRISM_IDENTIFIER;
export const AUTHENTICATION_KEY = Protos.io.iohk.atala.prism.protos.KeyUsage.AUTHENTICATION_KEY;
export const MASTER_KEY = Protos.io.iohk.atala.prism.protos.KeyUsage.MASTER_KEY;
export const ISSUING_KEY = Protos.io.iohk.atala.prism.protos.KeyUsage.ISSUING_KEY;

export const PrismDerivationPathSchema = "prism";
export class PrismDerivationPath extends DerivationPathBase<PrismDerivationSchema> {
    schema = PrismDerivationPathSchema

    constructor(paths: number[]) {
        if (paths.length !== 5) {
            throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema")
        }
        const [walletPurpose, didMethod, didIndex, keyPurpose, keyIndex] = paths;
        if (typeof walletPurpose === 'undefined' ||
            typeof didMethod === 'undefined' ||
            typeof didIndex === 'undefined' ||
            typeof keyPurpose === 'undefined' ||
            typeof keyIndex === 'undefined'
        ) {
            throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema")
        }
        super({ walletPurpose, didMethod, didIndex, keyPurpose, keyIndex })
    }

    get index(): number {
        return this.keyIndex.number
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

    static init(keyIndex: number = 0, didIndex: number = 0, keyPurpose: number = AUTHENTICATION_KEY): PrismDerivationPath {
        return new PrismDerivationPath([
            PRISM_WALLET_PURPOSE,
            PRISM_DID_METHOD,
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
