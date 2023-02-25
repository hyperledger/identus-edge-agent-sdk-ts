type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace io.iohk.atala.prism.apollo.utils {
    interface NativeTypeInterface<NativeType> {
        nativeValue(): NativeType;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace io.iohk.atala.prism.apollo.derivation {
    class DerivationAxis {
        private constructor();
        get i(): number;
        get hardened(): boolean;
        get number(): number;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            normal(num: number): io.iohk.atala.prism.apollo.derivation.DerivationAxis;
            hardened(num: number): io.iohk.atala.prism.apollo.derivation.DerivationAxis;
        };
    }
}
export namespace io.iohk.atala.prism.apollo.derivation {
    class DerivationPath {
        constructor(axes: any/* kotlin.collections.List<io.iohk.atala.prism.apollo.derivation.DerivationAxis> */);
        get axes(): any/* kotlin.collections.List<io.iohk.atala.prism.apollo.derivation.DerivationAxis> */;
        derive(axis: io.iohk.atala.prism.apollo.derivation.DerivationAxis): io.iohk.atala.prism.apollo.derivation.DerivationPath;
        toString(): string;
        component1(): any/* kotlin.collections.List<io.iohk.atala.prism.apollo.derivation.DerivationAxis> */;
        copy(axes?: any/* kotlin.collections.List<io.iohk.atala.prism.apollo.derivation.DerivationAxis> */): io.iohk.atala.prism.apollo.derivation.DerivationPath;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            empty(): io.iohk.atala.prism.apollo.derivation.DerivationPath;
            fromPath(path: string): io.iohk.atala.prism.apollo.derivation.DerivationPath;
        };
    }
}
export namespace io.iohk.atala.prism.apollo.derivation {
    class MnemonicCode {
        constructor(words: any/* kotlin.collections.List<string> */);
        get words(): any/* kotlin.collections.List<string> */;
        component1(): any/* kotlin.collections.List<string> */;
        copy(words?: any/* kotlin.collections.List<string> */): io.iohk.atala.prism.apollo.derivation.MnemonicCode;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace io.iohk.atala.prism.apollo.derivation {
    abstract class MnemonicException /* extends kotlin.Exception */ {
        protected constructor(message: Nullable<string>, cause: Nullable<Error>);
    }
    class MnemonicLengthException extends io.iohk.atala.prism.apollo.derivation.MnemonicException {
        constructor(message: Nullable<string>, cause?: Nullable<Error>);
    }
    class MnemonicWordException extends io.iohk.atala.prism.apollo.derivation.MnemonicException {
        constructor(message: Nullable<string>, cause?: Nullable<Error>);
    }
    class MnemonicChecksumException extends io.iohk.atala.prism.apollo.derivation.MnemonicException {
        constructor(message: Nullable<string>, cause?: Nullable<Error>);
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    const ECConfig: {
        get PRIVATE_KEY_BYTE_SIZE(): number;
        get SIGNATURE_MAX_BYTE_SIZE(): number;
        get PUBLIC_KEY_BYTE_SIZE(): number;
    };
}
export namespace io.iohk.atala.prism.apollo.utils {
    abstract class ECPrivateKeyException /* extends kotlin.Exception */ {
        protected constructor(message: Nullable<string>, cause: Nullable<Error>);
    }
    class ECPrivateKeyInitializationException extends io.iohk.atala.prism.apollo.utils.ECPrivateKeyException {
        constructor(message: string);
    }
    class ECPrivateKeyDecodingException extends io.iohk.atala.prism.apollo.utils.ECPrivateKeyException {
        constructor(message: string);
    }
    abstract class ECPublicKeyException /* extends kotlin.Exception */ {
        protected constructor(message: Nullable<string>, cause: Nullable<Error>);
    }
    class ECPublicKeyInitializationException extends io.iohk.atala.prism.apollo.utils.ECPublicKeyException {
        constructor(message: string);
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECCoordinate {
        constructor(coordinate: any/* com.ionspin.kotlin.bignum.integer.BigInteger */);
        get coordinate(): any/* com.ionspin.kotlin.bignum.integer.BigInteger */;
        bytes(): Int8Array;
        component1(): any/* com.ionspin.kotlin.bignum.integer.BigInteger */;
        copy(coordinate?: any/* com.ionspin.kotlin.bignum.integer.BigInteger */): io.iohk.atala.prism.apollo.utils.KMMECCoordinate;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECPoint {
        constructor(x: io.iohk.atala.prism.apollo.utils.KMMECCoordinate, y: io.iohk.atala.prism.apollo.utils.KMMECCoordinate);
        get x(): io.iohk.atala.prism.apollo.utils.KMMECCoordinate;
        get y(): io.iohk.atala.prism.apollo.utils.KMMECCoordinate;
        static fromBigIntegersStrings(x: string, y: string): io.iohk.atala.prism.apollo.utils.KMMECPoint;
        static fromBigIntegers(x: any/* com.ionspin.kotlin.bignum.integer.BigInteger */, y: any/* com.ionspin.kotlin.bignum.integer.BigInteger */): io.iohk.atala.prism.apollo.utils.KMMECPoint;
        component1(): io.iohk.atala.prism.apollo.utils.KMMECCoordinate;
        component2(): io.iohk.atala.prism.apollo.utils.KMMECCoordinate;
        copy(x?: io.iohk.atala.prism.apollo.utils.KMMECCoordinate, y?: io.iohk.atala.prism.apollo.utils.KMMECCoordinate): io.iohk.atala.prism.apollo.utils.KMMECPoint;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace io.iohk.atala.prism.apollo.derivation {
    class ExtendedKey {
        private constructor();
        path(): io.iohk.atala.prism.apollo.derivation.DerivationPath;
        publicKey(): io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKey;
        privateKey(): io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PrivateKey;
        keyPair(): io.iohk.atala.prism.apollo.utils.KMMECKeyPair;
        derive(axis: io.iohk.atala.prism.apollo.derivation.DerivationAxis): io.iohk.atala.prism.apollo.derivation.ExtendedKey;
    }
}
export namespace io.iohk.atala.prism.apollo.derivation {
    const KeyDerivation: {
        randomMnemonicCode(): io.iohk.atala.prism.apollo.derivation.MnemonicCode;
        isValidMnemonicWord(word: string): boolean;
        getValidMnemonicWords(): any/* kotlin.collections.List<string> */;
        binarySeed(seed: io.iohk.atala.prism.apollo.derivation.MnemonicCode, passphrase: string): Int8Array;
        derivationRoot(seed: Int8Array): io.iohk.atala.prism.apollo.derivation.ExtendedKey;
        deriveKey(seed: Int8Array, path: io.iohk.atala.prism.apollo.derivation.DerivationPath): io.iohk.atala.prism.apollo.derivation.ExtendedKey;
    };
}
export namespace io.iohk.atala.prism.apollo.utils {
    abstract class JsHashType implements io.iohk.atala.prism.apollo.utils.NativeTypeInterface<string> {
        private constructor();
        static get SHA256(): io.iohk.atala.prism.apollo.utils.JsHashType & {
            get name(): "SHA256";
            get ordinal(): 0;
        };
        static get SHA384(): io.iohk.atala.prism.apollo.utils.JsHashType & {
            get name(): "SHA384";
            get ordinal(): 1;
        };
        static get SHA512(): io.iohk.atala.prism.apollo.utils.JsHashType & {
            get name(): "SHA512";
            get ordinal(): 2;
        };
        nativeValue(): string;
        static values(): Array<io.iohk.atala.prism.apollo.utils.JsHashType>;
        static valueOf(value: string): io.iohk.atala.prism.apollo.utils.JsHashType;
        get name(): "SHA256" | "SHA384" | "SHA512";
        get ordinal(): 0 | 1 | 2;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECKeyPair {
        constructor(privateKey: io.iohk.atala.prism.apollo.utils.KMMECPrivateKey, publicKey: io.iohk.atala.prism.apollo.utils.KMMECPublicKey);
        get privateKey(): io.iohk.atala.prism.apollo.utils.KMMECPrivateKey;
        get publicKey(): io.iohk.atala.prism.apollo.utils.KMMECPublicKey;
        static get Companion(): {
        } & any/* io.iohk.atala.prism.apollo.utils.ECKeyPairGeneration */;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECPrivateKey {
        constructor(nativeValue: BN);
        get nativeValue(): BN;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECPublicKey /* implements io.iohk.atala.prism.apollo.utils.Encodable */ {
        constructor(nativeValue: curve.base.BasePoint);
        get nativeValue(): curve.base.BasePoint;
        static get Companion(): {
            computeCurvePoint(basePoint: curve.base.BasePoint): io.iohk.atala.prism.apollo.utils.KMMECPoint;
        };
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECSecp256k1KeyPair {
        constructor(privateKey: io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PrivateKey, publicKey: io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKey);
        get privateKey(): io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PrivateKey;
        get publicKey(): io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKey;
        static get Companion(): {
        } & any/* io.iohk.atala.prism.apollo.utils.Secp256k1KeyPairGeneration */;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECSecp256k1PrivateKey extends io.iohk.atala.prism.apollo.utils.KMMECPrivateKey /* implements io.iohk.atala.prism.apollo.utils.Encodable */ {
        constructor(nativeValue: BN);
        get d(): any/* com.ionspin.kotlin.bignum.integer.BigInteger */;
        getPublicKey(): io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKey;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        } & any/* io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PrivateKeyCommonStaticInterface */;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMECSecp256k1PublicKey extends io.iohk.atala.prism.apollo.utils.KMMECPublicKey /* implements io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommon */ {
        constructor(nativeValue: curve.base.BasePoint);
        get ecPoint(): io.iohk.atala.prism.apollo.utils.KMMECPoint;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        } & any/* io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface */;
    }
}