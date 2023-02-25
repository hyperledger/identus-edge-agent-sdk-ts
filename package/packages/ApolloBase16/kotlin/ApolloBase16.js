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
  function Base16() {
    Base16_instance = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance();
    tmp.base_1 = tmp_0.parseString$default_thoqxr_k$('16', 0, 2, null);
  }
  Base16.prototype.encode_hgshd9_k$ = function (input, encoding) {
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
  Base16.prototype.encode$default_hl6jdf_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.encode_hgshd9_k$(input, encoding);
  };
  Base16.prototype.decode_xwhfal_k$ = function (input, encoding) {
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
  Base16.prototype.decode$default_y9f22v_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.decode_xwhfal_k$(input, encoding);
  };
  Base16.$metadata$ = objectMeta('Base16');
  var Base16_instance;
  function Base16_getInstance() {
    if (Base16_instance == null)
      new Base16();
    return Base16_instance;
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
  function get_base16Encoded(_this__u8e3s4) {
    var tmp = Base16_getInstance();
    return tmp.encode$default_hl6jdf_k$(_this__u8e3s4, null, 2, null);
  }
  function get_base16Decoded(_this__u8e3s4) {
    return get_base16Encoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function get_base16UpperEncoded(_this__u8e3s4) {
    return Base16_getInstance().encode_hgshd9_k$(_this__u8e3s4, Upper_getInstance());
  }
  function get_base16UpperDecoded(_this__u8e3s4) {
    return get_base16UpperDecoded_0(concatToString(asCharArray(_this__u8e3s4)));
  }
  function Standard() {
    Standard_instance = this;
    this.alphabet_1 = '0123456789abcdef';
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
  function Upper() {
    Upper_instance = this;
    this.alphabet_1 = '0123456789ABCDEF';
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
  function Encoding() {
  }
  Encoding.$metadata$ = interfaceMeta('Encoding');
  function get_base16Encoded_0(_this__u8e3s4) {
    var tmp = Base16_getInstance();
    var tmp_0 = encodeToByteArray(_this__u8e3s4);
    return tmp.encode$default_hl6jdf_k$(tmp_0, null, 2, null);
  }
  function get_base16DecodedBytes(_this__u8e3s4) {
    var tmp = Base16_getInstance();
    return tmp.decode$default_y9f22v_k$(_this__u8e3s4, null, 2, null);
  }
  function get_base16Decoded_0(_this__u8e3s4) {
    return decodeToString(get_base16DecodedBytes(_this__u8e3s4));
  }
  function get_base16UpperEncoded_0(_this__u8e3s4) {
    return Base16_getInstance().encode_hgshd9_k$(encodeToByteArray(_this__u8e3s4), Upper_getInstance());
  }
  function get_base16UpperDecodedBytes(_this__u8e3s4) {
    return Base16_getInstance().decode_xwhfal_k$(_this__u8e3s4, Upper_getInstance());
  }
  function get_base16UpperDecoded_0(_this__u8e3s4) {
    return decodeToString(get_base16UpperDecodedBytes(_this__u8e3s4));
  }
  return _;
}(module.exports, require('./KotlinBigInteger-bignum-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloBase16.js.map
