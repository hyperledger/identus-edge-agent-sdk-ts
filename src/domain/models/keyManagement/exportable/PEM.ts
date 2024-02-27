import { Key } from "../Key";

export namespace PEM {
  const syntax = {
    dashes: "-----",
    header: "BEGIN",
    footer: "END",
  };

  /**
   * create a Uint8Array from a PEM
   * 
   * @param pem
   * @param {string} label - expected header / footer label
   * @returns 
   */
  export const toRaw = (pem: string, label: string): Buffer => {
    const lines = pem.split("\n");
    const firstLine = lines.at(0);
    const lastLine = lines.at(-1);

    const beginMarker = `${syntax.dashes}${syntax.header} ${label}${syntax.dashes}`;
    const endMarker = `${syntax.dashes}${syntax.footer} ${label}${syntax.dashes}`;

    if (firstLine === beginMarker && lastLine === endMarker) {
      const base64 = lines.slice(1, -1).join();

      return Buffer.from(base64, "base64");
    }

    throw new Error("invalid pem");
  };

  /**
   * create a PEM from a Key
   * 
   * @param {Key} key - Cryptographic key
   * @param {string} label - PEM header / footer label
   * @returns {string}
   */
  export const fromKey = (key: Key, label: string): string => {
    const base64Data = Buffer.from(key.raw).toString("base64");

    return `-----BEGIN ${label}-----\n${base64Data}\n-----END ${label}-----`;
  };

}
