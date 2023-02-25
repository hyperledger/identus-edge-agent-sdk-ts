type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace io.iohk.atala.prism.apollo.utils {
    interface NativeTypeInterface<NativeType> {
        nativeValue(): NativeType;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}