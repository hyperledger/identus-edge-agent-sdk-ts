(function (_, kotlin_com_ionspin_kotlin_bignum, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var BigInteger_init_$Create$ = kotlin_com_ionspin_kotlin_bignum.$_$.b;
  var charSequenceGet = kotlin_kotlin.$_$.f4;
  var indexOf$default = kotlin_kotlin.$_$.g;
  var Char = kotlin_kotlin.$_$.q5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q;
  var toLong = kotlin_kotlin.$_$.w4;
  var BigInteger_init_$Create$_0 = kotlin_com_ionspin_kotlin_bignum.$_$.c;
  var Companion_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.d;
  var Sign_POSITIVE_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.a;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var compareTo = kotlin_kotlin.$_$.i4;
  var equals = kotlin_kotlin.$_$.j4;
  var Unit_getInstance = kotlin_kotlin.$_$.r2;
  var arrayCopy = kotlin_kotlin.$_$.v2;
  var objectMeta = kotlin_kotlin.$_$.u4;
  var interfaceMeta = kotlin_kotlin.$_$.l4;
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
  function Base58() {
    Base58_instance = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance();
    tmp.base_1 = tmp_0.parseString$default_thoqxr_k$('58', 0, 2, null);
  }
  Base58.prototype.encode_rzx63_k$ = function (input, encoding) {
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
  Base58.prototype.encode$default_nlab4l_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = BTC_getInstance();
    return this.encode_rzx63_k$(input, encoding);
  };
  Base58.prototype.decode_h7ov3f_k$ = function (input, encoding) {
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
  Base58.prototype.decode$default_s9babp_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = BTC_getInstance();
    return this.decode_h7ov3f_k$(input, encoding);
  };
  Base58.$metadata$ = objectMeta('Base58');
  var Base58_instance;
  function Base58_getInstance() {
    if (Base58_instance == null)
      new Base58();
    return Base58_instance;
  }
  function get_base58FlickrEncoded(_this__u8e3s4) {
    return Base58_getInstance().encode_rzx63_k$(_this__u8e3s4, Flickr_getInstance());
  }
  function get_base58BtcEncoded(_this__u8e3s4) {
    var tmp = Base58_getInstance();
    return tmp.encode$default_nlab4l_k$(_this__u8e3s4, null, 2, null);
  }
  function BTC() {
    BTC_instance = this;
    this.alphabet_1 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  }
  BTC.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  BTC.$metadata$ = objectMeta('BTC', [Encoding]);
  var BTC_instance;
  function BTC_getInstance() {
    if (BTC_instance == null)
      new BTC();
    return BTC_instance;
  }
  function Flickr() {
    Flickr_instance = this;
    this.alphabet_1 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  }
  Flickr.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  Flickr.$metadata$ = objectMeta('Flickr', [Encoding]);
  var Flickr_instance;
  function Flickr_getInstance() {
    if (Flickr_instance == null)
      new Flickr();
    return Flickr_instance;
  }
  function Encoding() {
  }
  Encoding.$metadata$ = interfaceMeta('Encoding');
  function get_base58FlickrDecodedBytes(_this__u8e3s4) {
    return Base58_getInstance().decode_h7ov3f_k$(_this__u8e3s4, Flickr_getInstance());
  }
  function get_base58BtcDecodedBytes(_this__u8e3s4) {
    var tmp = Base58_getInstance();
    return tmp.decode$default_s9babp_k$(_this__u8e3s4, null, 2, null);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_base58BtcDecodedBytes;
  _.$_$.b = get_base58BtcEncoded;
  _.$_$.c = get_base58FlickrDecodedBytes;
  _.$_$.d = get_base58FlickrEncoded;
  //endregion
  return _;
}(module.exports, require('./KotlinBigInteger-bignum-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloBase58.js.map
