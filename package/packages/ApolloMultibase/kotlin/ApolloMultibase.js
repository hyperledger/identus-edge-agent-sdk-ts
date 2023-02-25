(function (_, kotlin_kotlin, kotlin_io_iohk_atala_prism_base16, kotlin_io_iohk_atala_prism_base32, kotlin_io_iohk_atala_prism_base58, kotlin_io_iohk_atala_prism_base64) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var Unit_getInstance = kotlin_kotlin.$_$.r2;
  var Char = kotlin_kotlin.$_$.q5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q;
  var objectMeta = kotlin_kotlin.$_$.u4;
  var THROW_ISE = kotlin_kotlin.$_$.x5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u;
  var Enum = kotlin_kotlin.$_$.s5;
  var classMeta = kotlin_kotlin.$_$.h4;
  var encodeToByteArray = kotlin_kotlin.$_$.h5;
  var get_base16Encoded = kotlin_io_iohk_atala_prism_base16.$_$.b;
  var get_base16UpperEncoded = kotlin_io_iohk_atala_prism_base16.$_$.d;
  var get_base32Encoded = kotlin_io_iohk_atala_prism_base32.$_$.b;
  var get_base32UpperEncoded = kotlin_io_iohk_atala_prism_base32.$_$.n;
  var get_base32PadEncoded = kotlin_io_iohk_atala_prism_base32.$_$.l;
  var get_base32UpperPadEncoded = kotlin_io_iohk_atala_prism_base32.$_$.p;
  var get_base32HexEncoded = kotlin_io_iohk_atala_prism_base32.$_$.d;
  var get_base32HexUpperEncoded = kotlin_io_iohk_atala_prism_base32.$_$.h;
  var get_base32HexPadEncoded = kotlin_io_iohk_atala_prism_base32.$_$.f;
  var get_base32HexUpperPadEncoded = kotlin_io_iohk_atala_prism_base32.$_$.j;
  var get_base58FlickrEncoded = kotlin_io_iohk_atala_prism_base58.$_$.d;
  var get_base58BtcEncoded = kotlin_io_iohk_atala_prism_base58.$_$.b;
  var get_base64Encoded = kotlin_io_iohk_atala_prism_base64.$_$.b;
  var get_base64UrlEncoded = kotlin_io_iohk_atala_prism_base64.$_$.f;
  var get_base64PadEncoded = kotlin_io_iohk_atala_prism_base64.$_$.d;
  var get_base64UrlPadEncoded = kotlin_io_iohk_atala_prism_base64.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h6;
  var charSequenceGet = kotlin_kotlin.$_$.f4;
  var get_base16DecodedBytes = kotlin_io_iohk_atala_prism_base16.$_$.a;
  var get_base16UpperDecodedBytes = kotlin_io_iohk_atala_prism_base16.$_$.c;
  var get_base32DecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.a;
  var get_base32UpperDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.m;
  var get_base32PadDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.k;
  var get_base32UpperPadDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.o;
  var get_base32HexDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.c;
  var get_base32HexUpperDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.g;
  var get_base32HexPadDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.e;
  var get_base32HexUpperPadDecodedBytes = kotlin_io_iohk_atala_prism_base32.$_$.i;
  var get_base58FlickrDecodedBytes = kotlin_io_iohk_atala_prism_base58.$_$.c;
  var get_base58BtcDecodedBytes = kotlin_io_iohk_atala_prism_base58.$_$.a;
  var get_base64DecodedBytes = kotlin_io_iohk_atala_prism_base64.$_$.a;
  var get_base64UrlDecodedBytes = kotlin_io_iohk_atala_prism_base64.$_$.e;
  var get_base64PadDecodedBytes = kotlin_io_iohk_atala_prism_base64.$_$.c;
  var get_base64UrlPadDecodedBytes = kotlin_io_iohk_atala_prism_base64.$_$.g;
  //endregion
  //region block: pre-declaration
  Base.prototype = Object.create(Enum.prototype);
  Base.prototype.constructor = Base;
  //endregion
  function _get_baseMap__6opfom($this) {
    return $this.baseMap_1;
  }
  var Base_BASE16_instance;
  var Base_BASE16_UPPER_instance;
  var Base_BASE32_instance;
  var Base_BASE32_UPPER_instance;
  var Base_BASE32_PAD_instance;
  var Base_BASE32_UPPER_PAD_instance;
  var Base_BASE32_HEX_instance;
  var Base_BASE32_HEX_UPPER_instance;
  var Base_BASE32_HEX_PAD_instance;
  var Base_BASE32_HEX_UPPER_PAD_instance;
  var Base_BASE58_FLICKR_instance;
  var Base_BASE58_BTC_instance;
  var Base_BASE64_instance;
  var Base_BASE64_URL_instance;
  var Base_BASE64_PAD_instance;
  var Base_BASE64_URL_PAD_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.baseMap_1 = tmp$ret$0;
    var indexedObject = values();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var base = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.baseMap_1;
      var tmp1_set = base.prefix_1;
      tmp0_set.put_3mhbri_k$(new Char(tmp1_set), base);
    }
  }
  Companion.prototype.lookup_ld3oqm_k$ = function (prefix) {
    var tmp0_elvis_lhs = this.baseMap_1.get_1mhr4y_k$(new Char(prefix));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Unknown Multibase type: ' + new Char(prefix));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    Base_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Base_BASE16_getInstance(), Base_BASE16_UPPER_getInstance(), Base_BASE32_getInstance(), Base_BASE32_UPPER_getInstance(), Base_BASE32_PAD_getInstance(), Base_BASE32_UPPER_PAD_getInstance(), Base_BASE32_HEX_getInstance(), Base_BASE32_HEX_UPPER_getInstance(), Base_BASE32_HEX_PAD_getInstance(), Base_BASE32_HEX_UPPER_PAD_getInstance(), Base_BASE58_FLICKR_getInstance(), Base_BASE58_BTC_getInstance(), Base_BASE64_getInstance(), Base_BASE64_URL_getInstance(), Base_BASE64_PAD_getInstance(), Base_BASE64_URL_PAD_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'BASE16':
        return Base_BASE16_getInstance();
      case 'BASE16_UPPER':
        return Base_BASE16_UPPER_getInstance();
      case 'BASE32':
        return Base_BASE32_getInstance();
      case 'BASE32_UPPER':
        return Base_BASE32_UPPER_getInstance();
      case 'BASE32_PAD':
        return Base_BASE32_PAD_getInstance();
      case 'BASE32_UPPER_PAD':
        return Base_BASE32_UPPER_PAD_getInstance();
      case 'BASE32_HEX':
        return Base_BASE32_HEX_getInstance();
      case 'BASE32_HEX_UPPER':
        return Base_BASE32_HEX_UPPER_getInstance();
      case 'BASE32_HEX_PAD':
        return Base_BASE32_HEX_PAD_getInstance();
      case 'BASE32_HEX_UPPER_PAD':
        return Base_BASE32_HEX_UPPER_PAD_getInstance();
      case 'BASE58_FLICKR':
        return Base_BASE58_FLICKR_getInstance();
      case 'BASE58_BTC':
        return Base_BASE58_BTC_getInstance();
      case 'BASE64':
        return Base_BASE64_getInstance();
      case 'BASE64_URL':
        return Base_BASE64_URL_getInstance();
      case 'BASE64_PAD':
        return Base_BASE64_PAD_getInstance();
      case 'BASE64_URL_PAD':
        return Base_BASE64_URL_PAD_getInstance();
      default:
        Base_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Base_entriesInitialized;
  function Base_initEntries() {
    if (Base_entriesInitialized)
      return Unit_getInstance();
    Base_entriesInitialized = true;
    Base_BASE16_instance = new Base('BASE16', 0, _Char___init__impl__6a9atx(102));
    Base_BASE16_UPPER_instance = new Base('BASE16_UPPER', 1, _Char___init__impl__6a9atx(70));
    Base_BASE32_instance = new Base('BASE32', 2, _Char___init__impl__6a9atx(98));
    Base_BASE32_UPPER_instance = new Base('BASE32_UPPER', 3, _Char___init__impl__6a9atx(66));
    Base_BASE32_PAD_instance = new Base('BASE32_PAD', 4, _Char___init__impl__6a9atx(99));
    Base_BASE32_UPPER_PAD_instance = new Base('BASE32_UPPER_PAD', 5, _Char___init__impl__6a9atx(67));
    Base_BASE32_HEX_instance = new Base('BASE32_HEX', 6, _Char___init__impl__6a9atx(118));
    Base_BASE32_HEX_UPPER_instance = new Base('BASE32_HEX_UPPER', 7, _Char___init__impl__6a9atx(86));
    Base_BASE32_HEX_PAD_instance = new Base('BASE32_HEX_PAD', 8, _Char___init__impl__6a9atx(116));
    Base_BASE32_HEX_UPPER_PAD_instance = new Base('BASE32_HEX_UPPER_PAD', 9, _Char___init__impl__6a9atx(84));
    Base_BASE58_FLICKR_instance = new Base('BASE58_FLICKR', 10, _Char___init__impl__6a9atx(90));
    Base_BASE58_BTC_instance = new Base('BASE58_BTC', 11, _Char___init__impl__6a9atx(122));
    Base_BASE64_instance = new Base('BASE64', 12, _Char___init__impl__6a9atx(109));
    Base_BASE64_URL_instance = new Base('BASE64_URL', 13, _Char___init__impl__6a9atx(117));
    Base_BASE64_PAD_instance = new Base('BASE64_PAD', 14, _Char___init__impl__6a9atx(77));
    Base_BASE64_URL_PAD_instance = new Base('BASE64_URL_PAD', 15, _Char___init__impl__6a9atx(85));
    Companion_getInstance();
  }
  function Base(name, ordinal, prefix) {
    Enum.call(this, name, ordinal);
    this.prefix_1 = prefix;
  }
  Base.prototype.get_prefix_vg87j0_k$ = function () {
    return this.prefix_1;
  };
  Base.$metadata$ = classMeta('Base', undefined, undefined, undefined, undefined, Enum.prototype);
  function Base_BASE16_getInstance() {
    Base_initEntries();
    return Base_BASE16_instance;
  }
  function Base_BASE16_UPPER_getInstance() {
    Base_initEntries();
    return Base_BASE16_UPPER_instance;
  }
  function Base_BASE32_getInstance() {
    Base_initEntries();
    return Base_BASE32_instance;
  }
  function Base_BASE32_UPPER_getInstance() {
    Base_initEntries();
    return Base_BASE32_UPPER_instance;
  }
  function Base_BASE32_PAD_getInstance() {
    Base_initEntries();
    return Base_BASE32_PAD_instance;
  }
  function Base_BASE32_UPPER_PAD_getInstance() {
    Base_initEntries();
    return Base_BASE32_UPPER_PAD_instance;
  }
  function Base_BASE32_HEX_getInstance() {
    Base_initEntries();
    return Base_BASE32_HEX_instance;
  }
  function Base_BASE32_HEX_UPPER_getInstance() {
    Base_initEntries();
    return Base_BASE32_HEX_UPPER_instance;
  }
  function Base_BASE32_HEX_PAD_getInstance() {
    Base_initEntries();
    return Base_BASE32_HEX_PAD_instance;
  }
  function Base_BASE32_HEX_UPPER_PAD_getInstance() {
    Base_initEntries();
    return Base_BASE32_HEX_UPPER_PAD_instance;
  }
  function Base_BASE58_FLICKR_getInstance() {
    Base_initEntries();
    return Base_BASE58_FLICKR_instance;
  }
  function Base_BASE58_BTC_getInstance() {
    Base_initEntries();
    return Base_BASE58_BTC_instance;
  }
  function Base_BASE64_getInstance() {
    Base_initEntries();
    return Base_BASE64_instance;
  }
  function Base_BASE64_URL_getInstance() {
    Base_initEntries();
    return Base_BASE64_URL_instance;
  }
  function Base_BASE64_PAD_getInstance() {
    Base_initEntries();
    return Base_BASE64_PAD_instance;
  }
  function Base_BASE64_URL_PAD_getInstance() {
    Base_initEntries();
    return Base_BASE64_URL_PAD_instance;
  }
  function MultiBase() {
    MultiBase_instance = this;
  }
  MultiBase.prototype.encode_i2wc9h_k$ = function (base, data) {
    return this.encode_m5b1ar_k$(base, encodeToByteArray(data));
  };
  MultiBase.prototype.encode_m5b1ar_k$ = function (base, data) {
    var tmp0_subject = base;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = '' + new Char(base.prefix_1) + get_base16Encoded(data);
        break;
      case 1:
        tmp = '' + new Char(base.prefix_1) + get_base16UpperEncoded(data);
        break;
      case 2:
        tmp = '' + new Char(base.prefix_1) + get_base32Encoded(data);
        break;
      case 3:
        tmp = '' + new Char(base.prefix_1) + get_base32UpperEncoded(data);
        break;
      case 4:
        tmp = '' + new Char(base.prefix_1) + get_base32PadEncoded(data);
        break;
      case 5:
        tmp = '' + new Char(base.prefix_1) + get_base32UpperPadEncoded(data);
        break;
      case 6:
        tmp = '' + new Char(base.prefix_1) + get_base32HexEncoded(data);
        break;
      case 7:
        tmp = '' + new Char(base.prefix_1) + get_base32HexUpperEncoded(data);
        break;
      case 8:
        tmp = '' + new Char(base.prefix_1) + get_base32HexPadEncoded(data);
        break;
      case 9:
        tmp = '' + new Char(base.prefix_1) + get_base32HexUpperPadEncoded(data);
        break;
      case 10:
        tmp = '' + new Char(base.prefix_1) + get_base58FlickrEncoded(data);
        break;
      case 11:
        tmp = '' + new Char(base.prefix_1) + get_base58BtcEncoded(data);
        break;
      case 12:
        tmp = '' + new Char(base.prefix_1) + get_base64Encoded(data);
        break;
      case 13:
        tmp = '' + new Char(base.prefix_1) + get_base64UrlEncoded(data);
        break;
      case 14:
        tmp = '' + new Char(base.prefix_1) + get_base64PadEncoded(data);
        break;
      case 15:
        tmp = '' + new Char(base.prefix_1) + get_base64UrlPadEncoded(data);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  MultiBase.prototype.decode_5vkj71_k$ = function (data) {
    var prefix = charSequenceGet(data, 0);
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = data;
    tmp$ret$1 = tmp$ret$0.substring(1);
    var rest = tmp$ret$1;
    var tmp0_subject = Companion_getInstance().lookup_ld3oqm_k$(prefix);
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_base16DecodedBytes(rest);
        break;
      case 1:
        tmp = get_base16UpperDecodedBytes(rest);
        break;
      case 2:
        tmp = get_base32DecodedBytes(rest);
        break;
      case 3:
        tmp = get_base32UpperDecodedBytes(rest);
        break;
      case 4:
        tmp = get_base32PadDecodedBytes(rest);
        break;
      case 5:
        tmp = get_base32UpperPadDecodedBytes(rest);
        break;
      case 6:
        tmp = get_base32HexDecodedBytes(rest);
        break;
      case 7:
        tmp = get_base32HexUpperDecodedBytes(rest);
        break;
      case 8:
        tmp = get_base32HexPadDecodedBytes(rest);
        break;
      case 9:
        tmp = get_base32HexUpperPadDecodedBytes(rest);
        break;
      case 10:
        tmp = get_base58FlickrDecodedBytes(rest);
        break;
      case 11:
        tmp = get_base58BtcDecodedBytes(rest);
        break;
      case 12:
        tmp = get_base64DecodedBytes(rest);
        break;
      case 13:
        tmp = get_base64UrlDecodedBytes(rest);
        break;
      case 14:
        tmp = get_base64PadDecodedBytes(rest);
        break;
      case 15:
        tmp = get_base64UrlPadDecodedBytes(rest);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  MultiBase.$metadata$ = objectMeta('MultiBase');
  var MultiBase_instance;
  function MultiBase_getInstance() {
    if (MultiBase_instance == null)
      new MultiBase();
    return MultiBase_instance;
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ApolloBase16.js'), require('./ApolloBase32.js'), require('./ApolloBase58.js'), require('./ApolloBase64.js')));

//# sourceMappingURL=ApolloMultibase.js.map
