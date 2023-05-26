# DIDCOMM Rust package compatibility
While we are using rollup to bundle our SDK we have found that integrating the didcomm rust package in browsers will rollup was not trivial at all.
We took the decision of manually adding a copy of the didcomm package which we also generate on the fly.

Current commit: 81096f760011c81da30cacc92e2d813c06702cb5 Version: 0.4.1

## How to generate the wasm files
Download the [url](https://github.com/sicpa-dlab/didcomm-rust) repository and create the browser variant as follows:

```
wasm-pack build --target=web
```

After that just copy the contents inside pkg to /didcomm-browser folder in the current project.

## How to use it in the SDK
```
import type * as DIDCommLibTypes from "../../../didcomm-rust/didcomm-browser/didcomm_js";
export async function getDidcommLibInstance(): Promise<typeof DIDCommLibTypes> {
    const DIDCommLib = await import(
        "../../../didcomm-rust/didcomm-browser/didcomm_js.js"
    );
    const wasmInit = DIDCommLib.default;
    const { default: wasm } = await import(
        "../../../didcomm-rust/didcomm-browser/didcomm_js_bg.wasm"
    );
    // @ts-ignore
    await wasmInit(await wasm());
    return DIDCommLib;
}
public static async getDIDComm() {
    if (!this.didcomm) {
        if (typeof window !== "undefined")
        this.didcomm = await getDidcommLibInstance();
        else this.didcomm = await import("didcomm-node");
    }
    return this.didcomm;
}
```

## How to use didcomm inside your webpack application
It is required for you to copy the wasm file "didcomm-rust/didcomm-browser/didcomm_js_bg.wasm"
inside the public folder that your react application has, usually "./public".
It is important also to keep the filename as it comes, without changing anything to it.