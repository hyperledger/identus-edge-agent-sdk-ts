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