(function (_, kotlin_com_ionspin_kotlin_bignum, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var BigInteger_init_$Create$ = kotlin_com_ionspin_kotlin_bignum.$_$.b;
  var charSequenceGet = kotlin_kotlin.$_$.e4;
  var indexOf$default = kotlin_kotlin.$_$.f;
  var Char = kotlin_kotlin.$_$.q5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o;
  var toLong = kotlin_kotlin.$_$.w4;
  var BigInteger_init_$Create$_0 = kotlin_com_ionspin_kotlin_bignum.$_$.c;
  var Companion_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.d;
  var Sign_POSITIVE_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.a;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l;
  var compareTo = kotlin_kotlin.$_$.h4;
  var equals = kotlin_kotlin.$_$.i4;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var arrayCopy = kotlin_kotlin.$_$.t2;
  var objectMeta = kotlin_kotlin.$_$.u4;
  var charArray = kotlin_kotlin.$_$.d4;
  var numberToChar = kotlin_kotlin.$_$.q4;
  var concatToString = kotlin_kotlin.$_$.f5;
  var interfaceMeta = kotlin_kotlin.$_$.k4;
  var encodeToByteArray = kotlin_kotlin.$_$.i5;
  var decodeToString = kotlin_kotlin.$_$.h5;
  //endregion
  //region block: pre-declaration
  //endregion
  function _get_base__d46q3e($this) {
    return $this.base_1;
  }
  function decodeToBigInteger($this, alphabet, base, input) {
    var bi = BigInteger_init_$Create$(0);
    var inductionVariable = input.length - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = charSequenceGet(input, i);
        var alphaIndex = indexOf$default(alphabet, tmp, 0, false, 6, null);
        if (alphaIndex === -1) {
          throw IllegalStateException_init_$Create$('Illegal character ' + new Char(charSequenceGet(input, i)) + ' at ' + i);
        }
        bi = bi.add_fi1w1k_k$(BigInteger_init_$Create$_0(toLong(alphaIndex)).multiply_rae76d_k$(base.pow_urdtnb_k$((input.length - 1 | 0) - i | 0)));
      }
       while (0 <= inductionVariable);
    return bi;
  }
  function Base32() {
    Base32_instance = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance();
    tmp.base_1 = tmp_0.parseString$default_thoqxr_k$('32', 0, 2, null);
  }
  Base32.prototype.encode_74lmop_k$ = function (input, encoding) {
    var bi = Companion_getInstance().fromByteArray_9bkqas_k$(input, Sign_POSITIVE_getInstance());
    var sb = StringBuilder_init_$Create$();
    while (bi.compareTo_m610zm_k$(this.base_1) >= 0) {
      var mod = bi.mod_1rrww9_k$(this.base_1);
      var tmp = encoding.get_alphabet_1i7d0_k$();
      sb.insert_5hk2j8_k$(0, charSequenceGet(tmp, mod.intValue$default_s02x47_k$(false, 1, null)));
      bi = bi.subtract_71fz8b_k$(mod).divide_2s2g0w_k$(this.base_1);
    }
    var tmp_0 = encoding.get_alphabet_1i7d0_k$();
    var tmp_1 = bi;
    sb.insert_5hk2j8_k$(0, charSequenceGet(tmp_0, tmp_1.intValue$default_s02x47_k$(false, 1, null)));
    var indexedObject = input;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (compareTo(b, 0) === 0) {
        sb.insert_5hk2j8_k$(0, charSequenceGet(encoding.get_alphabet_1i7d0_k$(), 0));
      } else {
        break $l$loop;
      }
    }
    return sb.toString();
  };
  Base32.prototype.encode$default_6tl7rt_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.encode_74lmop_k$(input, encoding);
  };
  Base32.prototype.decode_9b3b8n_k$ = function (input, encoding) {
    var bytes = decodeToBigInteger(this, encoding.get_alphabet_1i7d0_k$(), this.base_1, input).toByteArray_qczt2u_k$();
    var stripSignByte = (bytes.length > 1 ? compareTo(bytes[0], 0) === 0 : false) ? bytes[1] < 0 : false;
    var leadingZeros = 0;
    var i = 0;
    while (equals(new Char(charSequenceGet(input, i)), new Char(charSequenceGet(encoding.get_alphabet_1i7d0_k$(), 0)))) {
      var tmp0 = leadingZeros;
      leadingZeros = tmp0 + 1 | 0;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    var tmp = new Int8Array((bytes.length - (stripSignByte ? 1 : 0) | 0) + leadingZeros | 0);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = stripSignByte ? 1 : 0;
    var tmp1_copyInto = tmp.length - leadingZeros | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = bytes;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp_0, tmp$ret$3, 0, tmp0_copyInto, tmp1_copyInto);
    tmp$ret$4 = tmp;
    return tmp;
  };
  Base32.prototype.decode$default_q03oan_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.decode_9b3b8n_k$(input, encoding);
  };
  Base32.$metadata$ = objectMeta('Base32');
  var Base32_instance;
  function Base32_getInstance() {
    if (Base32_instance == null)
      new Base32();
    return Base32_instance;
  }
  function asCharArray(_this__u8e3s4) {
    var chars = charArray(_this__u8e3s4.length);
    var inductionVariable = 0;
    var last = chars.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        chars[i] = numberToChar(_this__u8e3s4[i]);
      }
       while (inductionVariable <= last);
    return chars;
  }
  function get_base32Encoded(_this__u8e3s4) {
    var tmp = Base32_getInstance();
    return tmp.encode$default_6tl7rt_k$(_this__u8e3s4, null, 2, null);
  }
  function get_base32Decoded(_this__u8e3s4) {
    return get_base32Encoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32PadEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, StandardPad_getInstance());
  }
  function get_base32PadDecoded(_this__u8e3s4) {
    return get_base32PadEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32UpperEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, Upper_getInstance());
  }
  function get_base32UpperDecoded(_this__u8e3s4) {
    return get_base32UpperEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32UpperPadEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, UpperPad_getInstance());
  }
  function get_base32UpperPadDecoded(_this__u8e3s4) {
    return get_base32UpperPadEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32HexEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, Hex_getInstance());
  }
  function get_base32HexDecoded(_this__u8e3s4) {
    return get_base32HexEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32HexPadEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, HexPad_getInstance());
  }
  function get_base32HexPadDecoded(_this__u8e3s4) {
    return get_base32HexPadEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32HexUpperEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, HexUpper_getInstance());
  }
  function get_base32HexUpperDecoded(_this__u8e3s4) {
    return get_base32HexUpperEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base32HexUpperPadEncoded(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(_this__u8e3s4, HexUpperPad_getInstance());
  }
  function get_base32HexUpperPadDecoded(_this__u8e3s4) {
    return get_base32HexUpperPadEncoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function Standard() {
    Standard_instance = this;
    this.alphabet_1 = 'abcdefghijklmnopqrstuvwxyz234567';
  }
  Standard.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  Standard.$metadata$ = objectMeta('Standard', [Encoding]);
  var Standard_instance;
  function Standard_getInstance() {
    if (Standard_instance == null)
      new Standard();
    return Standard_instance;
  }
  function StandardPad() {
    StandardPad_instance = this;
    this.alphabet_1 = 'abcdefghijklmnopqrstuvwxyz234567=';
  }
  StandardPad.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  StandardPad.$metadata$ = objectMeta('StandardPad', [Encoding]);
  var StandardPad_instance;
  function StandardPad_getInstance() {
    if (StandardPad_instance == null)
      new StandardPad();
    return StandardPad_instance;
  }
  function Upper() {
    Upper_instance = this;
    this.alphabet_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  }
  Upper.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  Upper.$metadata$ = objectMeta('Upper', [Encoding]);
  var Upper_instance;
  function Upper_getInstance() {
    if (Upper_instance == null)
      new Upper();
    return Upper_instance;
  }
  function UpperPad() {
    UpperPad_instance = this;
    this.alphabet_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=';
  }
  UpperPad.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  UpperPad.$metadata$ = objectMeta('UpperPad', [Encoding]);
  var UpperPad_instance;
  function UpperPad_getInstance() {
    if (UpperPad_instance == null)
      new UpperPad();
    return UpperPad_instance;
  }
  function Hex() {
    Hex_instance = this;
    this.alphabet_1 = '0123456789abcdefghijklmnopqrstuvw';
  }
  Hex.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  Hex.$metadata$ = objectMeta('Hex', [Encoding]);
  var Hex_instance;
  function Hex_getInstance() {
    if (Hex_instance == null)
      new Hex();
    return Hex_instance;
  }
  function HexPad() {
    HexPad_instance = this;
    this.alphabet_1 = '0123456789abcdefghijklmnopqrstuvw=';
  }
  HexPad.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  HexPad.$metadata$ = objectMeta('HexPad', [Encoding]);
  var HexPad_instance;
  function HexPad_getInstance() {
    if (HexPad_instance == null)
      new HexPad();
    return HexPad_instance;
  }
  function HexUpper() {
    HexUpper_instance = this;
    this.alphabet_1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVW';
  }
  HexUpper.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  HexUpper.$metadata$ = objectMeta('HexUpper', [Encoding]);
  var HexUpper_instance;
  function HexUpper_getInstance() {
    if (HexUpper_instance == null)
      new HexUpper();
    return HexUpper_instance;
  }
  function HexUpperPad() {
    HexUpperPad_instance = this;
    this.alphabet_1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVW=';
  }
  HexUpperPad.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  HexUpperPad.$metadata$ = objectMeta('HexUpperPad', [Encoding]);
  var HexUpperPad_instance;
  function HexUpperPad_getInstance() {
    if (HexUpperPad_instance == null)
      new HexUpperPad();
    return HexUpperPad_instance;
  }
  function Encoding() {
  }
  Encoding.$metadata$ = interfaceMeta('Encoding');
  function get_base32Encoded_0(_this__u8e3s4) {
    var tmp = Base32_getInstance();
    var tmp_0 = encodeToByteArray(_this__u8e3s4);
    return tmp.encode$default_6tl7rt_k$(tmp_0, null, 2, null);
  }
  function get_base32DecodedBytes(_this__u8e3s4) {
    var tmp = Base32_getInstance();
    return tmp.decode$default_q03oan_k$(_this__u8e3s4, null, 2, null);
  }
  function get_base32Decoded_0(_this__u8e3s4) {
    return decodeToString(get_base32DecodedBytes(_this__u8e3s4));
  }
  function get_base32PadEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), StandardPad_getInstance());
  }
  function get_base32PadDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, StandardPad_getInstance());
  }
  function get_base32PadDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32PadDecodedBytes(_this__u8e3s4));
  }
  function get_base32UpperEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), Upper_getInstance());
  }
  function get_base32UpperDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, Upper_getInstance());
  }
  function get_base32UpperDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32UpperDecodedBytes(_this__u8e3s4));
  }
  function get_base32UpperPadEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), UpperPad_getInstance());
  }
  function get_base32UpperPadDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, UpperPad_getInstance());
  }
  function get_base32UpperPadDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32UpperPadDecodedBytes(_this__u8e3s4));
  }
  function get_base32HexEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), Hex_getInstance());
  }
  function get_base32HexDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, Hex_getInstance());
  }
  function get_base32HexDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32HexDecodedBytes(_this__u8e3s4));
  }
  function get_base32HexPadEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), HexPad_getInstance());
  }
  function get_base32HexPadDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, HexPad_getInstance());
  }
  function get_base32HexPadDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32HexPadDecodedBytes(_this__u8e3s4));
  }
  function get_base32HexUpperEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), HexUpper_getInstance());
  }
  function get_base32HexUpperDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, HexUpper_getInstance());
  }
  function get_base32HexUpperDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32HexUpperDecodedBytes(_this__u8e3s4));
  }
  function get_base32HexUpperPadEncoded_0(_this__u8e3s4) {
    return Base32_getInstance().encode_74lmop_k$(encodeToByteArray(_this__u8e3s4), HexUpperPad_getInstance());
  }
  function get_base32HexUpperPadDecodedBytes(_this__u8e3s4) {
    return Base32_getInstance().decode_9b3b8n_k$(_this__u8e3s4, HexUpperPad_getInstance());
  }
  function get_base32HexUpperPadDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base32HexUpperPadDecodedBytes(_this__u8e3s4));
  }
  return _;
}(module.exports, require('./KotlinBigInteger-bignum-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloBase32.js.map
