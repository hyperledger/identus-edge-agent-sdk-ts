// Generated from ./castor/parser/DIDAbnf.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class DIDAbnfLexer extends Lexer {
	public static readonly SCHEMA = 1;
	public static readonly ALPHA = 2;
	public static readonly DIGIT = 3;
	public static readonly PCT_ENCODED = 4;
	public static readonly PERCENT = 5;
	public static readonly DASH = 6;
	public static readonly PERIOD = 7;
	public static readonly COLON = 8;
	public static readonly UNDERSCORE = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"D", "I", "SCHEMA", "LOWERCASE", "UPPERCASE", "ALPHA", "HEX", "DIGIT", 
		"PCT_ENCODED", "PERCENT", "DASH", "PERIOD", "COLON", "UNDERSCORE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'%'", "'-'", "'.'", 
		"':'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SCHEMA", "ALPHA", "DIGIT", "PCT_ENCODED", "PERCENT", "DASH", 
		"PERIOD", "COLON", "UNDERSCORE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DIDAbnfLexer._LITERAL_NAMES, DIDAbnfLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DIDAbnfLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(DIDAbnfLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "DIDAbnf.g4"; }

	// @Override
	public get ruleNames(): string[] { return DIDAbnfLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return DIDAbnfLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return DIDAbnfLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return DIDAbnfLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vA\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x05" +
		"\x07.\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x02\x02\x02" +
		"\x10\x03\x02\x02\x05\x02\x02\x07\x02\x03\t\x02\x02\v\x02\x02\r\x02\x04" +
		"\x0F\x02\x02\x11\x02\x05\x13\x02\x06\x15\x02\x07\x17\x02\b\x19\x02\t\x1B" +
		"\x02\n\x1D\x02\v\x03\x02\b\x04\x02FFff\x04\x02KKkk\x03\x02c|\x03\x02C" +
		"\\\x05\x022;CHch\x03\x022;\x02<\x02\x07\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05!\x03\x02" +
		"\x02\x02\x07#\x03\x02\x02\x02\t\'\x03\x02\x02\x02\v)\x03\x02\x02\x02\r" +
		"-\x03\x02\x02\x02\x0F/\x03\x02\x02\x02\x111\x03\x02\x02\x02\x133\x03\x02" +
		"\x02\x02\x157\x03\x02\x02\x02\x179\x03\x02\x02\x02\x19;\x03\x02\x02\x02" +
		"\x1B=\x03\x02\x02\x02\x1D?\x03\x02\x02\x02\x1F \t\x02\x02\x02 \x04\x03" +
		"\x02\x02\x02!\"\t\x03\x02\x02\"\x06\x03\x02\x02\x02#$\x05\x03\x02\x02" +
		"$%\x05\x05\x03\x02%&\x05\x03\x02\x02&\b\x03\x02\x02\x02\'(\t\x04\x02\x02" +
		"(\n\x03\x02\x02\x02)*\t\x05\x02\x02*\f\x03\x02\x02\x02+.\x05\t\x05\x02" +
		",.\x05\v\x06\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\x0E\x03\x02\x02" +
		"\x02/0\t\x06\x02\x020\x10\x03\x02\x02\x0212\t\x07\x02\x022\x12\x03\x02" +
		"\x02\x0234\x05\x15\v\x0245\x05\x0F\b\x0256\x05\x0F\b\x026\x14\x03\x02" +
		"\x02\x0278\x07\'\x02\x028\x16\x03\x02\x02\x029:\x07/\x02\x02:\x18\x03" +
		"\x02\x02\x02;<\x070\x02\x02<\x1A\x03\x02\x02\x02=>\x07<\x02\x02>\x1C\x03" +
		"\x02\x02\x02?@\x07a\x02\x02@\x1E\x03\x02\x02\x02\x04\x02-\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DIDAbnfLexer.__ATN) {
			DIDAbnfLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DIDAbnfLexer._serializedATN));
		}

		return DIDAbnfLexer.__ATN;
	}

}

