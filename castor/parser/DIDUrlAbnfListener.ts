// Generated from ./castor/parser/DIDUrlAbnf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Did_urlContext } from "./DIDUrlAbnfParser";
import { DidContext } from "./DIDUrlAbnfParser";
import { Method_nameContext } from "./DIDUrlAbnfParser";
import { Method_specific_idContext } from "./DIDUrlAbnfParser";
import { PathContext } from "./DIDUrlAbnfParser";
import { QueryContext } from "./DIDUrlAbnfParser";
import { FragContext } from "./DIDUrlAbnfParser";
import { SearchContext } from "./DIDUrlAbnfParser";
import { SearchparameterContext } from "./DIDUrlAbnfParser";
import { StringContext } from "./DIDUrlAbnfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DIDUrlAbnfParser`.
 */
export interface DIDUrlAbnfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.did_url`.
	 * @param ctx the parse tree
	 */
	enterDid_url?: (ctx: Did_urlContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.did_url`.
	 * @param ctx the parse tree
	 */
	exitDid_url?: (ctx: Did_urlContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.did`.
	 * @param ctx the parse tree
	 */
	enterDid?: (ctx: DidContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.did`.
	 * @param ctx the parse tree
	 */
	exitDid?: (ctx: DidContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.method_name`.
	 * @param ctx the parse tree
	 */
	enterMethod_name?: (ctx: Method_nameContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.method_name`.
	 * @param ctx the parse tree
	 */
	exitMethod_name?: (ctx: Method_nameContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.method_specific_id`.
	 * @param ctx the parse tree
	 */
	enterMethod_specific_id?: (ctx: Method_specific_idContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.method_specific_id`.
	 * @param ctx the parse tree
	 */
	exitMethod_specific_id?: (ctx: Method_specific_idContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.frag`.
	 * @param ctx the parse tree
	 */
	enterFrag?: (ctx: FragContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.frag`.
	 * @param ctx the parse tree
	 */
	exitFrag?: (ctx: FragContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.search`.
	 * @param ctx the parse tree
	 */
	enterSearch?: (ctx: SearchContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.search`.
	 * @param ctx the parse tree
	 */
	exitSearch?: (ctx: SearchContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.searchparameter`.
	 * @param ctx the parse tree
	 */
	enterSearchparameter?: (ctx: SearchparameterContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.searchparameter`.
	 * @param ctx the parse tree
	 */
	exitSearchparameter?: (ctx: SearchparameterContext) => void;

	/**
	 * Enter a parse tree produced by `DIDUrlAbnfParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `DIDUrlAbnfParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

