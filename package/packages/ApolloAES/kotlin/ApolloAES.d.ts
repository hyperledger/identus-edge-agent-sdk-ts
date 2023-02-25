type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace io.iohk.atala.prism.apollo.utils {
    interface NativeTypeInterface<NativeType> {
        nativeValue(): NativeType;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    class KMMSymmetricKey /* implements io.iohk.atala.prism.apollo.utils.SymmetricKeyBase64Export */ {
        constructor(nativeValue: Int8Array);
        get nativeValue(): Int8Array;
        static get Companion(): {
        } & any/* io.iohk.atala.prism.apollo.utils.SymmetricKeyBase64Import */ & any/* io.iohk.atala.prism.apollo.utils.IVBase64Import */ & any/* io.iohk.atala.prism.apollo.utils.IVBase64Export */ & any/* io.iohk.atala.prism.apollo.utils.IVGeneration */;
    }
}
export namespace io.iohk.atala.prism.apollo.utils {
    abstract class SymmetricKeyType {
        private constructor();
        static get AES(): io.iohk.atala.prism.apollo.utils.SymmetricKeyType & {
            get name(): "AES";
            get ordinal(): 0;
        };
        static values(): Array<io.iohk.atala.prism.apollo.utils.SymmetricKeyType>;
        static valueOf(value: string): io.iohk.atala.prism.apollo.utils.SymmetricKeyType;
        get name(): "AES";
        get ordinal(): 0;
    }
}
export namespace io.iohk.atala.prism.apollo.aes {
    function keySize(_this_: io.iohk.atala.prism.apollo.aes.KAESAlgorithm): number;
}
export namespace io.iohk.atala.prism.apollo.aes {
    abstract class KAESAlgorithm implements io.iohk.atala.prism.apollo.utils.NativeTypeInterface<string> {
        private constructor();
        static get AES_128(): io.iohk.atala.prism.apollo.aes.KAESAlgorithm & {
            get name(): "AES_128";
            get ordinal(): 0;
        };
        static get AES_192(): io.iohk.atala.prism.apollo.aes.KAESAlgorithm & {
            get name(): "AES_192";
            get ordinal(): 1;
        };
        static get AES_256(): io.iohk.atala.prism.apollo.aes.KAESAlgorithm & {
            get name(): "AES_256";
            get ordinal(): 2;
        };
        nativeValue(): string;
        static values(): Array<io.iohk.atala.prism.apollo.aes.KAESAlgorithm>;
        static valueOf(value: string): io.iohk.atala.prism.apollo.aes.KAESAlgorithm;
        get name(): "AES_128" | "AES_192" | "AES_256";
        get ordinal(): 0 | 1 | 2;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace io.iohk.atala.prism.apollo.aes {
    abstract class KAESBlockMode implements io.iohk.atala.prism.apollo.utils.NativeTypeInterface<string> {
        private constructor();
        static get ECB(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "ECB";
            get ordinal(): 0;
        };
        static get CBC(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "CBC";
            get ordinal(): 1;
        };
        static get CFB(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "CFB";
            get ordinal(): 2;
        };
        static get CFB8(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "CFB8";
            get ordinal(): 3;
        };
        static get CTR(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "CTR";
            get ordinal(): 4;
        };
        static get GCM(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "GCM";
            get ordinal(): 5;
        };
        static get OFB(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "OFB";
            get ordinal(): 6;
        };
        static get RC4(): io.iohk.atala.prism.apollo.aes.KAESBlockMode & {
            get name(): "RC4";
            get ordinal(): 7;
        };
        nativeValue(): string;
        static values(): Array<io.iohk.atala.prism.apollo.aes.KAESBlockMode>;
        static valueOf(value: string): io.iohk.atala.prism.apollo.aes.KAESBlockMode;
        get name(): "ECB" | "CBC" | "CFB" | "CFB8" | "CTR" | "GCM" | "OFB" | "RC4";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace io.iohk.atala.prism.apollo.aes {
    abstract class KAESPadding implements io.iohk.atala.prism.apollo.utils.NativeTypeInterface<string> {
        private constructor();
        static get NO_PADDING(): io.iohk.atala.prism.apollo.aes.KAESPadding & {
            get name(): "NO_PADDING";
            get ordinal(): 0;
        };
        static get PKCS5PADDING(): io.iohk.atala.prism.apollo.aes.KAESPadding & {
            get name(): "PKCS5PADDING";
            get ordinal(): 1;
        };
        static get PKCS7PADDING(): io.iohk.atala.prism.apollo.aes.KAESPadding & {
            get name(): "PKCS7PADDING";
            get ordinal(): 2;
        };
        nativeValue(): string;
        static values(): Array<io.iohk.atala.prism.apollo.aes.KAESPadding>;
        static valueOf(value: string): io.iohk.atala.prism.apollo.aes.KAESPadding;
        get name(): "NO_PADDING" | "PKCS5PADDING" | "PKCS7PADDING";
        get ordinal(): 0 | 1 | 2;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}