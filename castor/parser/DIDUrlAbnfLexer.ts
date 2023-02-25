// Generated from ./castor/parser/DIDUrlAbnf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class DIDUrlAbnfLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "D", "I", "SCHEMA", "LOWERCASE", "UPPERCASE", 
		"ALPHA", "DIGIT", "PCT_ENCODED", "PERCENT", "DASH", "PERIOD", "COLON", 
		"UNDERSCORE", "HEX", "STRING", "SLASH",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DIDUrlAbnfLexer._LITERAL_NAMES, DIDUrlAbnfLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DIDUrlAbnfLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(DIDUrlAbnfLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "DIDUrlAbnf.g4"; }

	// @Override
	public get ruleNames(): string[] { return DIDUrlAbnfLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return DIDUrlAbnfLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return DIDUrlAbnfLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return DIDUrlAbnfLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12g\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\vB\n\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x06\x13" +
		"W\n\x13\r\x13\x0E\x13X\x03\x14\x03\x14\x05\x14]\n\x14\x03\x14\x03\x14" +
		"\x07\x14a\n\x14\f\x14\x0E\x14d\v\x14\x03\x15\x03\x15\x02\x02\x02\x16\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02" +
		"\x07\x11\x02\x02\x13\x02\x02\x15\x02\b\x17\x02\t\x19\x02\n\x1B\x02\v\x1D" +
		"\x02\f\x1F\x02\r!\x02\x0E#\x02\x0F%\x02\x10\'\x02\x11)\x02\x12\x03\x02" +
		"\n\x04\x02FFff\x04\x02KKkk\x03\x02c|\x03\x02C\\\x03\x022;\x05\x022;CH" +
		"ch\x06\x022;C\\c|\x80\x80\x07\x02--/02;C\\c|\x02g\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
		"\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02" +
		"\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x03+" +
		"\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x07/\x03\x02\x02\x02\t1\x03\x02" +
		"\x02\x02\v3\x03\x02\x02\x02\r5\x03\x02\x02\x02\x0F7\x03\x02\x02\x02\x11" +
		";\x03\x02\x02\x02\x13=\x03\x02\x02\x02\x15A\x03\x02\x02\x02\x17C\x03\x02" +
		"\x02\x02\x19E\x03\x02\x02\x02\x1BI\x03\x02\x02\x02\x1DK\x03\x02\x02\x02" +
		"\x1FM\x03\x02\x02\x02!O\x03\x02\x02\x02#Q\x03\x02\x02\x02%V\x03\x02\x02" +
		"\x02\'\\\x03\x02\x02\x02)e\x03\x02\x02\x02+,\x07%\x02\x02,\x04\x03\x02" +
		"\x02\x02-.\x07A\x02\x02.\x06\x03\x02\x02\x02/0\x07(\x02\x020\b\x03\x02" +
		"\x02\x0212\x07?\x02\x022\n\x03\x02\x02\x0234\t\x02\x02\x024\f\x03\x02" +
		"\x02\x0256\t\x03\x02\x026\x0E\x03\x02\x02\x0278\x05\v\x06\x0289\x05\r" +
		"\x07\x029:\x05\v\x06\x02:\x10\x03\x02\x02\x02;<\t\x04\x02\x02<\x12\x03" +
		"\x02\x02\x02=>\t\x05\x02\x02>\x14\x03\x02\x02\x02?B\x05\x11\t\x02@B\x05" +
		"\x13\n\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02B\x16\x03\x02\x02\x02CD" +
		"\t\x06\x02\x02D\x18\x03\x02\x02\x02EF\x05\x1B\x0E\x02FG\x05%\x13\x02G" +
		"H\x05%\x13\x02H\x1A\x03\x02\x02\x02IJ\x07\'\x02\x02J\x1C\x03\x02\x02\x02" +
		"KL\x07/\x02\x02L\x1E\x03\x02\x02\x02MN\x070\x02\x02N \x03\x02\x02\x02" +
		"OP\x07<\x02\x02P\"\x03\x02\x02\x02QR\x07a\x02\x02R$\x03\x02\x02\x02ST" +
		"\x07\'\x02\x02TU\t\x07\x02\x02UW\t\x07\x02\x02VS\x03\x02\x02\x02WX\x03" +
		"\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y&\x03\x02\x02\x02Z]\t" +
		"\b\x02\x02[]\x05%\x13\x02\\Z\x03\x02\x02\x02\\[\x03\x02\x02\x02]b\x03" +
		"\x02\x02\x02^a\t\t\x02\x02_a\x05%\x13\x02`^\x03\x02\x02\x02`_\x03\x02" +
		"\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02c(\x03\x02" +
		"\x02\x02db\x03\x02\x02\x02ef\x071\x02\x02f*\x03\x02\x02\x02\b\x02AX\\" +
		"`b\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DIDUrlAbnfLexer.__ATN) {
			DIDUrlAbnfLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DIDUrlAbnfLexer._serializedATN));
		}

		return DIDUrlAbnfLexer.__ATN;
	}

}

