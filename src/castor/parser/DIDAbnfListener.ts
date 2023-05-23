// Generated from ./castor/parser/DIDAbnf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DidContext } from "./DIDAbnfParser";
import { Method_nameContext } from "./DIDAbnfParser";
import { Method_specific_idContext } from "./DIDAbnfParser";
import { IdcharContext } from "./DIDAbnfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DIDAbnfParser`.
 */
export interface DIDAbnfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DIDAbnfParser.did`.
	 * @param ctx the parse tree
	 */
	enterDid?: (ctx: DidContext) => void;
	/**
	 * Exit a parse tree produced by `DIDAbnfParser.did`.
	 * @param ctx the parse tree
	 */
	exitDid?: (ctx: DidContext) => void;

	/**
	 * Enter a parse tree produced by `DIDAbnfParser.method_name`.
	 * @param ctx the parse tree
	 */
	enterMethod_name?: (ctx: Method_nameContext) => void;
	/**
	 * Exit a parse tree produced by `DIDAbnfParser.method_name`.
	 * @param ctx the parse tree
	 */
	exitMethod_name?: (ctx: Method_nameContext) => void;

	/**
	 * Enter a parse tree produced by `DIDAbnfParser.method_specific_id`.
	 * @param ctx the parse tree
	 */
	enterMethod_specific_id?: (ctx: Method_specific_idContext) => void;
	/**
	 * Exit a parse tree produced by `DIDAbnfParser.method_specific_id`.
	 * @param ctx the parse tree
	 */
	exitMethod_specific_id?: (ctx: Method_specific_idContext) => void;

	/**
	 * Enter a parse tree produced by `DIDAbnfParser.idchar`.
	 * @param ctx the parse tree
	 */
	enterIdchar?: (ctx: IdcharContext) => void;
	/**
	 * Exit a parse tree produced by `DIDAbnfParser.idchar`.
	 * @param ctx the parse tree
	 */
	exitIdchar?: (ctx: IdcharContext) => void;
}

