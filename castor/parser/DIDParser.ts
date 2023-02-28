import { DID } from "../../domain";
import { DIDAbnfLexer } from "./DIDAbnfLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import {
  DIDAbnfParser,
  DidContext,
  Method_nameContext,
  Method_specific_idContext,
} from "./DIDAbnfParser";
import { DIDAbnfListener } from "./DIDAbnfListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { InvalidDIDString } from "../../domain/models/errors/Castor";
import { ErrorStrategy } from "./ErrorStrategy";

class DIDListener implements DIDAbnfListener {
  public scheme?: string;
  public methodName?: string;
  public methodId?: string;

  exitMethod_specific_id(ctx: Method_specific_idContext) {
    this.methodId = ctx.text;
  }
  exitMethod_name(ctx: Method_nameContext) {
    this.methodName = ctx.text;
  }
  exitDid(ctx: DidContext) {
    this.scheme = ctx.SCHEMA()?.text;
  }
}

export function parse(didString: string): DID {
  const lexer = new DIDAbnfLexer(CharStreams.fromString(didString));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new DIDAbnfParser(tokenStream);
  const listener = new DIDListener();

  parser.errorHandler = new ErrorStrategy();

  const context = parser.did();

  ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, context);
  if (!listener.scheme) {
    throw new InvalidDIDString("Invalid DID string, missing scheme");
  }
  if (!listener.methodName) {
    throw new InvalidDIDString("Invalid DID string, missing method name");
  }
  if (!listener.methodId) {
    throw new InvalidDIDString("Invalid DID string, missing method ID");
  }

  return new DID(listener.scheme, listener.methodName, listener.methodId);
}
