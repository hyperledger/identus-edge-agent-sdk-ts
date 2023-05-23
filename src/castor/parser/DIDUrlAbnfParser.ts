// Generated from ./castor/parser/DIDUrlAbnf.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { DIDUrlAbnfListener } from "./DIDUrlAbnfListener";

export class DIDUrlAbnfParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly SCHEMA = 5;
	public static readonly ALPHA = 6;
	public static readonly DIGIT = 7;
	public static readonly PCT_ENCODED = 8;
	public static readonly PERCENT = 9;
	public static readonly DASH = 10;
	public static readonly PERIOD = 11;
	public static readonly COLON = 12;
	public static readonly UNDERSCORE = 13;
	public static readonly HEX = 14;
	public static readonly STRING = 15;
	public static readonly SLASH = 16;
	public static readonly RULE_did_url = 0;
	public static readonly RULE_did = 1;
	public static readonly RULE_method_name = 2;
	public static readonly RULE_method_specific_id = 3;
	public static readonly RULE_path = 4;
	public static readonly RULE_query = 5;
	public static readonly RULE_frag = 6;
	public static readonly RULE_search = 7;
	public static readonly RULE_searchparameter = 8;
	public static readonly RULE_string = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"did_url", "did", "method_name", "method_specific_id", "path", "query", 
		"frag", "search", "searchparameter", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#'", "'?'", "'&'", "'='", undefined, undefined, undefined, 
		undefined, "'%'", "'-'", "'.'", "':'", "'_'", undefined, undefined, "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "SCHEMA", "ALPHA", 
		"DIGIT", "PCT_ENCODED", "PERCENT", "DASH", "PERIOD", "COLON", "UNDERSCORE", 
		"HEX", "STRING", "SLASH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DIDUrlAbnfParser._LITERAL_NAMES, DIDUrlAbnfParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DIDUrlAbnfParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DIDUrlAbnf.g4"; }

	// @Override
	public get ruleNames(): string[] { return DIDUrlAbnfParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DIDUrlAbnfParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DIDUrlAbnfParser._ATN, this);
	}
	// @RuleVersion(0)
	public did_url(): Did_urlContext {
		let _localctx: Did_urlContext = new Did_urlContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DIDUrlAbnfParser.RULE_did_url);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.did();
			this.state = 22;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 21;
				this.path();
				}
				break;
			}
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIDUrlAbnfParser.T__1) {
				{
				this.state = 24;
				this.query();
				}
			}

			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIDUrlAbnfParser.T__0) {
				{
				this.state = 27;
				this.match(DIDUrlAbnfParser.T__0);
				}
			}

			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIDUrlAbnfParser.DIGIT || _la === DIDUrlAbnfParser.STRING) {
				{
				this.state = 30;
				this.frag();
				}
			}

			this.state = 33;
			this.match(DIDUrlAbnfParser.EOF);
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
	public did(): DidContext {
		let _localctx: DidContext = new DidContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DIDUrlAbnfParser.RULE_did);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(DIDUrlAbnfParser.SCHEMA);
			this.state = 36;
			this.match(DIDUrlAbnfParser.COLON);
			this.state = 37;
			this.method_name();
			this.state = 38;
			this.match(DIDUrlAbnfParser.COLON);
			this.state = 39;
			this.method_specific_id();
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
		this.enterRule(_localctx, 4, DIDUrlAbnfParser.RULE_method_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.string();
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
		this.enterRule(_localctx, 6, DIDUrlAbnfParser.RULE_method_specific_id);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 43;
					this.string();
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIDUrlAbnfParser.COLON) {
						{
						this.state = 44;
						this.match(DIDUrlAbnfParser.COLON);
						}
					}

					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 52;
			this.string();
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
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DIDUrlAbnfParser.RULE_path);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIDUrlAbnfParser.SLASH) {
						{
						this.state = 54;
						this.match(DIDUrlAbnfParser.SLASH);
						}
					}

					this.state = 57;
					this.string();
					}
					}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIDUrlAbnfParser.SLASH) {
				{
				this.state = 63;
				this.match(DIDUrlAbnfParser.SLASH);
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DIDUrlAbnfParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(DIDUrlAbnfParser.T__1);
			this.state = 67;
			this.search();
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
	public frag(): FragContext {
		let _localctx: FragContext = new FragContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DIDUrlAbnfParser.RULE_frag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 69;
				this.string();
				}
				break;

			case 2:
				{
				this.state = 70;
				this.match(DIDUrlAbnfParser.DIGIT);
				}
				break;
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
	public search(): SearchContext {
		let _localctx: SearchContext = new SearchContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DIDUrlAbnfParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.searchparameter();
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIDUrlAbnfParser.T__2) {
				{
				{
				this.state = 74;
				this.match(DIDUrlAbnfParser.T__2);
				this.state = 75;
				this.searchparameter();
				}
				}
				this.state = 80;
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
	public searchparameter(): SearchparameterContext {
		let _localctx: SearchparameterContext = new SearchparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DIDUrlAbnfParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.string();
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIDUrlAbnfParser.T__3) {
				{
				this.state = 82;
				this.match(DIDUrlAbnfParser.T__3);
				this.state = 86;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 83;
					this.string();
					}
					break;

				case 2:
					{
					this.state = 84;
					this.match(DIDUrlAbnfParser.DIGIT);
					}
					break;

				case 3:
					{
					this.state = 85;
					this.match(DIDUrlAbnfParser.HEX);
					}
					break;
				}
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DIDUrlAbnfParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if (!(_la === DIDUrlAbnfParser.DIGIT || _la === DIDUrlAbnfParser.STRING)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12_\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x05\x02" +
		"\x19\n\x02\x03\x02\x05\x02\x1C\n\x02\x03\x02\x05\x02\x1F\n\x02\x03\x02" +
		"\x05\x02\"\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x050\n\x05\x07\x052\n\x05" +
		"\f\x05\x0E\x055\v\x05\x03\x05\x03\x05\x03\x06\x05\x06:\n\x06\x03\x06\x07" +
		"\x06=\n\x06\f\x06\x0E\x06@\v\x06\x03\x06\x05\x06C\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x05\bJ\n\b\x03\t\x03\t\x03\t\x07\tO\n\t\f\t\x0E\t" +
		"R\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nY\n\n\x05\n[\n\n\x03\v\x03\v" +
		"\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x02\x03\x04\x02\t\t\x11\x11\x02b\x02\x16\x03" +
		"\x02\x02\x02\x04%\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b3\x03\x02\x02" +
		"\x02\n>\x03\x02\x02\x02\fD\x03\x02\x02\x02\x0EI\x03\x02\x02\x02\x10K\x03" +
		"\x02\x02\x02\x12S\x03\x02\x02\x02\x14\\\x03\x02\x02\x02\x16\x18\x05\x04" +
		"\x03\x02\x17\x19\x05\n\x06\x02\x18\x17\x03\x02\x02\x02\x18\x19\x03\x02" +
		"\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x1C\x05\f\x07\x02\x1B\x1A\x03\x02" +
		"\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1F\x07\x03" +
		"\x02\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F!\x03\x02" +
		"\x02\x02 \"\x05\x0E\b\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03" +
		"\x02\x02\x02#$\x07\x02\x02\x03$\x03\x03\x02\x02\x02%&\x07\x07\x02\x02" +
		"&\'\x07\x0E\x02\x02\'(\x05\x06\x04\x02()\x07\x0E\x02\x02)*\x05\b\x05\x02" +
		"*\x05\x03\x02\x02\x02+,\x05\x14\v\x02,\x07\x03\x02\x02\x02-/\x05\x14\v" +
		"\x02.0\x07\x0E\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02" +
		"\x021-\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02" +
		"\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x05\x14\v\x027\t\x03\x02\x02" +
		"\x028:\x07\x12\x02\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02" +
		"\x02;=\x05\x14\v\x02<9\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02AC\x07\x12\x02" +
		"\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02C\v\x03\x02\x02\x02DE\x07\x04" +
		"\x02\x02EF\x05\x10\t\x02F\r\x03\x02\x02\x02GJ\x05\x14\v\x02HJ\x07\t\x02" +
		"\x02IG\x03\x02\x02\x02IH\x03\x02\x02\x02J\x0F\x03\x02\x02\x02KP\x05\x12" +
		"\n\x02LM\x07\x05\x02\x02MO\x05\x12\n\x02NL\x03\x02\x02\x02OR\x03\x02\x02" +
		"\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02Q\x11\x03\x02\x02\x02RP\x03\x02" +
		"\x02\x02SZ\x05\x14\v\x02TX\x07\x06\x02\x02UY\x05\x14\v\x02VY\x07\t\x02" +
		"\x02WY\x07\x10\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02XW\x03\x02\x02" +
		"\x02Y[\x03\x02\x02\x02ZT\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x13\x03\x02" +
		"\x02\x02\\]\t\x02\x02\x02]\x15\x03\x02\x02\x02\x0F\x18\x1B\x1E!/39>BI" +
		"PXZ";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DIDUrlAbnfParser.__ATN) {
			DIDUrlAbnfParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DIDUrlAbnfParser._serializedATN));
		}

		return DIDUrlAbnfParser.__ATN;
	}

}

export class Did_urlContext extends ParserRuleContext {
	public did(): DidContext {
		return this.getRuleContext(0, DidContext);
	}
	public EOF(): TerminalNode { return this.getToken(DIDUrlAbnfParser.EOF, 0); }
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public frag(): FragContext | undefined {
		return this.tryGetRuleContext(0, FragContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_did_url; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterDid_url) {
			listener.enterDid_url(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitDid_url) {
			listener.exitDid_url(this);
		}
	}
}


export class DidContext extends ParserRuleContext {
	public SCHEMA(): TerminalNode { return this.getToken(DIDUrlAbnfParser.SCHEMA, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIDUrlAbnfParser.COLON);
		} else {
			return this.getToken(DIDUrlAbnfParser.COLON, i);
		}
	}
	public method_name(): Method_nameContext {
		return this.getRuleContext(0, Method_nameContext);
	}
	public method_specific_id(): Method_specific_idContext {
		return this.getRuleContext(0, Method_specific_idContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_did; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterDid) {
			listener.enterDid(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitDid) {
			listener.exitDid(this);
		}
	}
}


export class Method_nameContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_method_name; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterMethod_name) {
			listener.enterMethod_name(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitMethod_name) {
			listener.exitMethod_name(this);
		}
	}
}


export class Method_specific_idContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIDUrlAbnfParser.COLON);
		} else {
			return this.getToken(DIDUrlAbnfParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_method_specific_id; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterMethod_specific_id) {
			listener.enterMethod_specific_id(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitMethod_specific_id) {
			listener.exitMethod_specific_id(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIDUrlAbnfParser.SLASH);
		} else {
			return this.getToken(DIDUrlAbnfParser.SLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_path; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public search(): SearchContext {
		return this.getRuleContext(0, SearchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_query; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(DIDUrlAbnfParser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_frag; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterFrag) {
			listener.enterFrag(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitFrag) {
			listener.exitFrag(this);
		}
	}
}


export class SearchContext extends ParserRuleContext {
	public searchparameter(): SearchparameterContext[];
	public searchparameter(i: number): SearchparameterContext;
	public searchparameter(i?: number): SearchparameterContext | SearchparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SearchparameterContext);
		} else {
			return this.getRuleContext(i, SearchparameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_search; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterSearch) {
			listener.enterSearch(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitSearch) {
			listener.exitSearch(this);
		}
	}
}


export class SearchparameterContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(DIDUrlAbnfParser.DIGIT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(DIDUrlAbnfParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_searchparameter; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterSearchparameter) {
			listener.enterSearchparameter(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitSearchparameter) {
			listener.exitSearchparameter(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(DIDUrlAbnfParser.STRING, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(DIDUrlAbnfParser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIDUrlAbnfParser.RULE_string; }
	// @Override
	public enterRule(listener: DIDUrlAbnfListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: DIDUrlAbnfListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


