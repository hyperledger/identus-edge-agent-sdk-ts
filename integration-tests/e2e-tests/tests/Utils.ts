import { appendFileSync, writeFileSync } from "fs";

export class Utils {
    static appendToNotes(message: string) {
        console.info("Adding to notes:", message)
        appendFileSync("notes", message + "\n")
    }

    static clearNotes() {
        console.info("Clearing notes")
        writeFileSync("notes", "### End-to-end notes:\n\n")
    }
}
