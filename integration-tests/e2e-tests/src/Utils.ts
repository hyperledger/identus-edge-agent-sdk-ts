import {appendFile, writeFileSync} from "fs"

export class Utils {
  static prepareNotes() {
    writeFileSync("notes", "### End-to-end notes:\n\n")
  }

  static appendToNotes(message: string) {
    console.info("Adding to notes:", message)
    appendFile("notes", message + "\n", (err) => {
      if(err) console.error(err)
    })
  }

  static async repeat(times: number, callback: () => Promise<void>) {
    for (let i = 0; i < times; i++) {
      await callback()
    }
  }

  static async retry<T>(message: string, times: number, callback: () => Promise<T>) {
    let retry = 0
    while (retry < times) {
      try {
        return await callback()
      } catch (err) {
        Utils.appendToNotes(`Failure: ${message}. Trying to run again.`)
      }
      retry++
    }
    throw Error(`Failed retrying [${times}] times: ${message}`)
  }
}
