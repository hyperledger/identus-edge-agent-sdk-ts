import * as pkg from "anoncreds";
import pkgWasm from "anoncreds/anoncreds_bg.wasm";

/**
 * @class AnoncredsLoader
 * handle loading and access of anoncreds library
 * Singleton to prevent recompilation of wasm
 */
export class AnoncredsLoader {
  private static instance: AnoncredsLoader;
  private loaded = false;

  private constructor() {
    this.load();
  }

  static getInstance() {
    if (AnoncredsLoader.instance === undefined) {
      AnoncredsLoader.instance = new AnoncredsLoader();
    }

    return AnoncredsLoader.instance;
  }

  async load() {
    if (!this.loaded) {
      await pkg.default((pkgWasm as any)());
      this.loaded = true;
    }
  }

  get wasm() {
    if (this.loaded === false) {
      throw new Error();
    }

    return pkg;
  }

  async getSchema() {
    const schema = await this.wasm.issuerCreateSchema();
    console.log({ schema });

    return schema;
  }
}

(window as any).anoncreds = AnoncredsLoader.getInstance();
