import { DID, DIDUrl } from "../../domain";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { InvalidDIDString } from "../../domain/models/errors/Castor";
import { DIDUrlAbnfListener } from "./DIDUrlAbnfListener";
import { URLSearchParams } from "url";

import {
  FragContext,
  PathContext,
  Method_nameContext,
  DidContext,
  Method_specific_idContext,
  DIDUrlAbnfParser,
  SearchContext,
} from "./DIDUrlAbnfParser";
import { ErrorStrategy } from "./ErrorStrategy";
import { DIDUrlAbnfLexer } from "./DIDUrlAbnfLexer";

class DIDUrlListener implements DIDUrlAbnfListener {
  public scheme?: string;
  public methodName?: string;
  public methodId?: string;
  public path: Array<string> = new Array();
  public query: Map<string, string> = new Map();
  public fragment?: string;

  exitPath(ctx: PathContext) {
    this.path = ctx.children?.map((t) => t.text).filter((t) => t != "/") || [];
  }
  exitFrag(ctx: FragContext) {
    this.fragment = ctx.text;
  }
  exitMethod_name(ctx: Method_nameContext) {
    this.methodName = ctx.text;
  }
  exitMethod_specific_id(ctx: Method_specific_idContext) {
    this.methodId = ctx.text;
  }
  exitDid(ctx: DidContext) {
    this.scheme = ctx.SCHEMA()?.text;
  }
  exitSearch(ctx: SearchContext) {
    const params = new URLSearchParams(ctx.text);
    for (const [key, value] of params.entries()) {
      this.query.set(key, value);
    }
  }
}

export function parse(didString: string): DIDUrl {
  const lexer = new DIDUrlAbnfLexer(CharStreams.fromString(didString));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new DIDUrlAbnfParser(tokenStream);
  const listener = new DIDUrlListener();
  const context = parser.did_url();

  parser.errorHandler = new ErrorStrategy();

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
  const did = new DID(listener.scheme, listener.methodName, listener.methodId);
  return new DIDUrl(
    did,
    listener.path || [],
    listener.query,
    listener.fragment
  );
}
