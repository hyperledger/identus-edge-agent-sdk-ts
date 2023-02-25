// Generated from ./castor/parser/DIDAbnf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DIDAbnfListener } from "./DIDAbnfListener";

export class DIDAbnfParser extends Parser {
	public static readonly SCHEMA = 1;
	public static readonly ALPHA = 2;
	public static readonly DIGIT = 3;
	public static readonly PCT_ENCODED = 4;
	public static readonly PERCENT = 5;
	public static readonly DASH = 6;
	public static readonly PERIOD = 7;
	public static readonly COLON = 8;
	public static readonly UNDERSCORE = 9;
	public static readonly RULE_did = 0;
	public static readonly RULE_method_name = 1;
	public static readonly RULE_method_specific_id = 2;
	public static readonly RULE_idchar = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"did", "method_name", "method_specific_id", "idchar",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'%'", "'-'", "'.'", 
		"':'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SCHEMA", "ALPHA", "DIGIT", "PCT_ENCODED", "PERCENT", "DASH", 
		"PERIOD", "COLON", "UNDERSCORE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DIDAbnfParser._LITERAL_NAMES, DIDAbnfParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DIDAbnfParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DIDAbnf.g4"; }

	// @Override
	public get ruleNames(): string[] { return DIDAbnfParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DIDAbnfParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DIDAbnfParser._ATN, this);
	}
	// @RuleVersion(0)
	public did(): DidContext {
		let _localctx: DidContext = new DidContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DIDAbnfParser.RULE_did);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.match(DIDAbnfParser.SCHEMA);
			this.state = 9;
			this.match(DIDAbnfParser.COLON);
			this.state = 10;
			this.method_name();
			this.state = 11;
			this.match(DIDAbnfParser.COLON);
			this.state = 12;
			this.method_specific_id();
			this.state = 13;
			this.match(DIDAbnfParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method_name(): Method_nameContext {
		let _localctx: Method_nameContext = new Method_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DIDAbnfParser.RULE_method_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIDAbnfParser.ALPHA || _la === DIDAbnfParser.DIGIT) {
				{
				{
				this.state = 15;
				_la = this._input.LA(1);
				if (!(_la === DIDAbnfParser.ALPHA || _la === DIDAbnfParser.DIGIT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method_specific_id(): Method_specific_idContext {
		let _localctx: Method_specific_idContext = new Method_specific_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DIDAbnfParser.RULE_method_specific_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIDAbnfParser.ALPHA) | (1 << DIDAbnfParser.DIGIT) | (1 << DIDAbnfParser.PCT_ENCODED) | (1 << DIDAbnfParser.DASH) | (1 << DIDAbnfParser.PERIOD) | (1 << DIDAbnfParser.UNDERSCORE))) !== 0)) {
				{
				{
				this.state = 21;
				this.idchar();
				}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIDAbnfParser.COLON) {
				{
				this.state = 27;
				this.match(DIDAbnfParser.COLON);
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 28;
					this.idchar();
					}
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIDAbnfParser.ALPHA) | (1 << DIDAbnfParser.DIGIT) | (1 << DIDAbnfParser.PCT_ENCODED) | (1 << DIDAbnfParser.DASH) | (1 << DIDAbnfParser.PERIOD) | (1 << DIDAbnfParser.UNDERSCORE))) !== 0));
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idchar(): IdcharContext {
		let _localctx: IdcharContext = new IdcharContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DIDAbnfParser.RULE_idchar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIDAbnfParser.ALPHA) | (1 << DIDAbnfParser.DIGIT) | (1 << DIDAbnfParser.PCT_ENCODED) | (1 << DIDAbnfParser.DASH) | (1 << DIDAbnfParser.PERIOD) | (1 << DIDAbnfParser.UNDERSCORE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v(\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03\x13\n\x03\f\x03\x0E\x03" +
		"\x16\v\x03\x03\x04\x07\x04\x19\n\x04\f\x04\x0E\x04\x1C\v\x04\x03\x04\x03" +
		"\x04\x06\x04 \n\x04\r\x04\x0E\x04!\x05\x04$\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x04\x03\x02\x04" +
		"\x05\x05\x02\x04\x06\b\t\v\v\x02\'\x02\n\x03\x02\x02\x02\x04\x14\x03\x02" +
		"\x02\x02\x06\x1A\x03\x02\x02\x02\b%\x03\x02\x02\x02\n\v\x07\x03\x02\x02" +
		"\v\f\x07\n\x02\x02\f\r\x05\x04\x03\x02\r\x0E\x07\n\x02\x02\x0E\x0F\x05" +
		"\x06\x04\x02\x0F\x10\x07\x02\x02\x03\x10\x03\x03\x02\x02\x02\x11\x13\t" +
		"\x02\x02\x02\x12\x11\x03\x02\x02\x02\x13\x16\x03\x02\x02\x02\x14\x12\x03" +
		"\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x05\x03\x02\x02\x02\x16\x14\x03" +
		"\x02\x02\x02\x17\x19\x05\b\x05\x02\x18\x17\x03\x02\x02\x02\x19\x1C\x03" +
		"\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B#\x03" +
		"\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1D\x1F\x07\n\x02\x02\x1E \x05\b" +
		"\x05\x02\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02" +
		"!\"\x03\x02\x02\x02\"$\x03\x02\x02\x02#\x1D\x03\x02\x02\x02#$\x03\x02" +
		"\x02\x02$\x07\x03\x02\x02\x02%&\t\x03\x02\x02&\t\x03\x02\x02\x02\x06\x14" +
		"\x1A!#";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DIDAbnfParser.__ATN) {
			DIDAbnfParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DIDAbnfParser._serializedATN));
		}

		return DIDAbnfParser.__ATN;
	}

}

export class DidContext extends ParserRuleContext {
	public SCHEMA(): TerminalNode { return this.getToken(DIDAbnfParser.SCHEMA, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIDAbnfParser.COLON);
		} else {
			return this.getToken(DIDAbnfParser.COLON, i);
		}
	}
	public method_name(): Method_nameContext {
		return this.getRuleContext(0, Method_nameContext);
	}
	public method_specific_id(): Method_specific_idContext {
		return this.getRuleContext(0, Method_specific_idContext);
	}
	public EOF(): TerminalNode { return this.getToken(DIDAbnfParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDAbnfParser.RULE_did; }
	// @Override
	public enterRule(listener: DIDAbnfListener): void {
		if (listener.enterDid) {
			listener.enterDid(this);
		}
	}
	// @Override
	public exitRule(listener: DIDAbnfListener): void {
		if (listener.exitDid) {
			listener.exitDid(this);
		}
	}
}


export class Method_nameContext extends ParserRuleContext {
	public ALPHA(): TerminalNode[];
	public ALPHA(i: number): TerminalNode;
	public ALPHA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIDAbnfParser.ALPHA);
		} else {
			return this.getToken(DIDAbnfParser.ALPHA, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIDAbnfParser.DIGIT);
		} else {
			return this.getToken(DIDAbnfParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDAbnfParser.RULE_method_name; }
	// @Override
	public enterRule(listener: DIDAbnfListener): void {
		if (listener.enterMethod_name) {
			listener.enterMethod_name(this);
		}
	}
	// @Override
	public exitRule(listener: DIDAbnfListener): void {
		if (listener.exitMethod_name) {
			listener.exitMethod_name(this);
		}
	}
}


export class Method_specific_idContext extends ParserRuleContext {
	public idchar(): IdcharContext[];
	public idchar(i: number): IdcharContext;
	public idchar(i?: number): IdcharContext | IdcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdcharContext);
		} else {
			return this.getRuleContext(i, IdcharContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDAbnfParser.RULE_method_specific_id; }
	// @Override
	public enterRule(listener: DIDAbnfListener): void {
		if (listener.enterMethod_specific_id) {
			listener.enterMethod_specific_id(this);
		}
	}
	// @Override
	public exitRule(listener: DIDAbnfListener): void {
		if (listener.exitMethod_specific_id) {
			listener.exitMethod_specific_id(this);
		}
	}
}


export class IdcharContext extends ParserRuleContext {
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.ALPHA, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.DIGIT, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.PERIOD, 0); }
	public DASH(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.DASH, 0); }
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.UNDERSCORE, 0); }
	public PCT_ENCODED(): TerminalNode | undefined { return this.tryGetToken(DIDAbnfParser.PCT_ENCODED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDAbnfParser.RULE_idchar; }
	// @Override
	public enterRule(listener: DIDAbnfListener): void {
		if (listener.enterIdchar) {
			listener.enterIdchar(this);
		}
	}
	// @Override
	public exitRule(listener: DIDAbnfListener): void {
		if (listener.exitIdchar) {
			listener.exitIdchar(this);
		}
	}
}


