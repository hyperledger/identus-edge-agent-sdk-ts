import { Parser, RecognitionException, Token } from "antlr4ts";
import { DefaultErrorStrategy } from "antlr4ts/DefaultErrorStrategy";
import { InvalidDIDString } from "../../domain/models/errors/Castor";

export class ErrorStrategy extends DefaultErrorStrategy {
  recover(recognizer: Parser, e: RecognitionException): void {
    let context = recognizer.context;
    while (context != null) {
      context.exception = e;
      context = context.parent!;
    }
    throw new InvalidDIDString(
      `Invalid Did char found at [line ${recognizer.currentToken?.line}, col ${recognizer.currentToken?.charPositionInLine}] "${recognizer.currentToken?.text}"`
    );
  }
  recoverInline(recognizer: Parser): Token {
    var context = recognizer.context;
    while (context != null) {
      context = context.parent!;
    }
    throw new InvalidDIDString(
      `Invalid Did char found at [line ${recognizer.currentToken?.line}, col ${recognizer.currentToken?.charPositionInLine}] "${recognizer.currentToken?.text}"`
    );
  }
}
