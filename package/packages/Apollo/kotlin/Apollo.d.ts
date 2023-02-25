type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace io.iohk.atala.prism.apollo.utils {
    interface NativeTypeInterface<NativeType> {
        nativeValue(): NativeType;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace io.iohk.atala.prism.apollo {
    class MerkleRoot {
        constructor(hash: Int8Array);
        get hash(): Int8Array;
        component1(): Int8Array;
        copy(hash?: Int8Array): io.iohk.atala.prism.apollo.MerkleRoot;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class MerkleInclusionProof {
        constructor(hash: Int8Array, index: number, siblings: any/* kotlin.collections.List<Int8Array> */);
        get hash(): Int8Array;
        get index(): number;
        get siblings(): any/* kotlin.collections.List<Int8Array> */;
        derivedRoot(): io.iohk.atala.prism.apollo.MerkleRoot;
        toJson(): any/* kotlinx.serialization.json.JsonObject */;
        encode(): string;
        component1(): Int8Array;
        component2(): number;
        component3(): any/* kotlin.collections.List<Int8Array> */;
        copy(hash?: Int8Array, index?: number, siblings?: any/* kotlin.collections.List<Int8Array> */): io.iohk.atala.prism.apollo.MerkleInclusionProof;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            decode(encodedMerkleInclusionProof: string): io.iohk.atala.prism.apollo.MerkleInclusionProof;
            decodeJson(encodedMerkleInclusionProof: any/* kotlinx.serialization.json.JsonObject */): any/* io.iohk.atala.prism.apollo.utils.Validated<io.iohk.atala.prism.apollo.MerkleInclusionProof, string> */;
        };
    }
    function generateProofs(hashes: any/* kotlin.collections.List<Int8Array> */): any/* io.iohk.atala.prism.apollo.MerkleProofs */;
    function verifyProof(root: io.iohk.atala.prism.apollo.MerkleRoot, proof: io.iohk.atala.prism.apollo.MerkleInclusionProof): boolean;
}
export namespace io.iohk.atala.prism.apollo {
    const MerkleInclusionProofCompanion: {
        decode(encoded: string): io.iohk.atala.prism.apollo.MerkleInclusionProof;
    };
}