import { appendFile } from "fs";

export class Utils {
    static appendToNotes(message: string) {
        console.info("Adding to notes:", message)
        appendFile("notes", message + "\n", (err) => {
            if(err) console.error(err)
        })
    }
}
