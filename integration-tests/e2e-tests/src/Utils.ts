import { appendFile, writeFileSync } from "fs"
import crypto from "crypto"
import { Buffer } from 'buffer';

export class Utils {
  static async asyncFilter<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => Promise<boolean>) {
    const results = await Promise.all(arr.map(predicate))
    return arr.filter((_v, index) => results[index])
  }

  static prepareNotes() {
    writeFileSync("notes", "### End-to-end notes:\n\n")
  }

  static appendToNotes(message: string) {
    console.info("Adding to notes:", message)
    appendFile("notes", message + "\n", (err) => {
      if (err) console.error(err)
    })
  }

  static async repeat(times: number, callback: () => Promise<void>) {
    for (let i = 0; i < times; i++) {
      await callback()
    }
  }

  static async retry<T>(times: number, callback: () => Promise<T>) {
    let retry = 0
    let delegateError = null
    while (retry < times) {
      try {
        return await callback()
      } catch (err) {
        Utils.appendToNotes(`Failure: ${err.message}. Trying to run again.`)
        delegateError = err
      }
      retry++
    }
    const error = Error(`${delegateError.message} afer retrying [${times}] times`)
    error.stack = delegateError.stack
    throw error
  }

  static generateNonce(length: number): string {
    let result = ""
    while (result.length < length) {
      const byte = crypto.randomBytes(1)[0]
      if (byte >= 250) {
        continue
      }
      const randomDigit = byte % 10
      result += randomDigit.toString()
    }
    return result
  }

  static decodeBase64URL(encodedString: string): string {
    const buffer = Buffer.from(encodedString, "base64url")
    return buffer.toString("utf8");
  }
}
