import { DerivationPath } from "../apollo/utils/derivation/DerivationPath";
import { DeprecatedDerivationPathSchema } from "../apollo/utils/derivation/schemas/DeprecatedDerivation";
import type * as Domain from "../domain";
import { ApolloError, KeyProperties } from "../domain";

/**
 * Task to find the latest Prism DID KeyPathIndex
 * 
 * Use the latest index from persisted PrismDIDs
 * or zero if none found
 * 
 * @returns number
 */
export class PrismKeyPathIndexTask {
  constructor(private readonly pluto: Domain.Pluto) { }

  async run(
    walletPurpose: number,
    didMethod: number,
    didIndex: number,
    keyPurpose: number,
    keyIndex?: number
  ): Promise<number> {
    const prismDIDs = await this.pluto.getAllPrismDIDs();
    if (prismDIDs.length <= 0) {
      return 0
    }

    const matchingDIDs = prismDIDs
      .filter((did) => {
        if (did.privateKey.derivationSchema !== DeprecatedDerivationPathSchema) {
          return false;
        }
        const derivationPathStr = did.privateKey.keySpecification.get(
          KeyProperties.derivationPath
        )
        if (!derivationPathStr) {
          return false;
        }
        const derivationPath = DerivationPath.fromPath(
          Buffer.from(derivationPathStr, 'hex').toString()
        )
        if (
          derivationPath.schema === DeprecatedDerivationPathSchema ||
          walletPurpose !== derivationPath.at(0) ||
          didMethod !== derivationPath.at(1) ||
          didIndex !== derivationPath.at(2) ||
          keyPurpose !== derivationPath.at(3)
        ) {
          return false;
        }
        if (typeof keyIndex !== 'undefined' && keyIndex === derivationPath.at(4)) {
          throw new ApolloError.InvalidDerivationPath(`Index ${keyIndex} has already been derived`)
        }
        return true
      })
    const indexes = matchingDIDs.map(x => x.privateKey.index ?? 0);
    const maxKey = Math.max(0, ...indexes);
    const keyPathIndex = maxKey;
    return typeof keyIndex !== 'undefined' && keyIndex > keyPathIndex ? keyIndex : keyPathIndex + 1
  }
}
