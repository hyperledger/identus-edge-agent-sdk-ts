(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var toByte = kotlin_kotlin.$_$.v1;
  var charSequenceGet = kotlin_kotlin.$_$.k1;
  var Char = kotlin_kotlin.$_$.c2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.o;
  var equals = kotlin_kotlin.$_$.m1;
  var numberToLong = kotlin_kotlin.$_$.t1;
  var Long = kotlin_kotlin.$_$.g2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.r;
  var copyOf = kotlin_kotlin.$_$.b1;
  var toShort = kotlin_kotlin.$_$.x1;
  var toString = kotlin_kotlin.$_$.y1;
  var toLong = kotlin_kotlin.$_$.w1;
  var charArray = kotlin_kotlin.$_$.j1;
  var concatToString = kotlin_kotlin.$_$.z1;
  var concatToString_0 = kotlin_kotlin.$_$.a2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l;
  var toMutableList = kotlin_kotlin.$_$.g1;
  var sort = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var copyToArray = kotlin_kotlin.$_$.c1;
  var mutableListOf = kotlin_kotlin.$_$.e1;
  var binarySearch$default = kotlin_kotlin.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.u1;
  var AbstractList = kotlin_kotlin.$_$.v;
  var RandomAccess = kotlin_kotlin.$_$.w;
  var classMeta = kotlin_kotlin.$_$.l1;
  var ensureNotNull = kotlin_kotlin.$_$.i2;
  var arrayCopy = kotlin_kotlin.$_$.x;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var interfaceMeta = kotlin_kotlin.$_$.o1;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.p;
  var numberToChar = kotlin_kotlin.$_$.s1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.n;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.s;
  var Companion_getInstance = kotlin_kotlin.$_$.t;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.h;
  var fillArrayVal = kotlin_kotlin.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.h2;
  var isArray = kotlin_kotlin.$_$.p1;
  var copyOfRange = kotlin_kotlin.$_$.a1;
  var contentHashCode = kotlin_kotlin.$_$.y;
  var replace$default = kotlin_kotlin.$_$.e;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.q;
  var charArrayOf = kotlin_kotlin.$_$.i1;
  var AssertionError_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var toString_0 = kotlin_kotlin.$_$.b2;
  var copyOfRange_0 = kotlin_kotlin.$_$.z;
  var fill = kotlin_kotlin.$_$.d1;
  var fill$default = kotlin_kotlin.$_$.d;
  var fill$default_0 = kotlin_kotlin.$_$.b;
  var fill$default_1 = kotlin_kotlin.$_$.c;
  var longArrayOf = kotlin_kotlin.$_$.q1;
  var longArray = kotlin_kotlin.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.h1;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.f2;
  var IndexOutOfBoundsException_init_$Init$ = kotlin_kotlin.$_$.m;
  var Exception = kotlin_kotlin.$_$.e2;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i;
  var Comparable = kotlin_kotlin.$_$.d2;
  //endregion
  //region block: pre-declaration
  Options.prototype = Object.create(AbstractList.prototype);
  Options.prototype.constructor = Options;
  function update$default(input, offset, byteCount, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      byteCount = input.length;
    var tmp;
    if ($handler == null) {
      this.update_evdvfb_k$(input, offset, byteCount);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(input, offset, byteCount);
    }
    return tmp;
  }
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  ArrayIndexOutOfBoundsException.prototype = Object.create(IndexOutOfBoundsException.prototype);
  ArrayIndexOutOfBoundsException.prototype.constructor = ArrayIndexOutOfBoundsException;
  SegmentedByteString.prototype = Object.create(ByteString.prototype);
  SegmentedByteString.prototype.constructor = SegmentedByteString;
  //endregion
  function get_BASE64() {
    init_properties__Base64_kt_2m6r7s();
    return BASE64;
  }
  var BASE64;
  function get_BASE64_URL_SAFE() {
    init_properties__Base64_kt_2m6r7s();
    return BASE64_URL_SAFE;
  }
  var BASE64_URL_SAFE;
  function encodeBase64(_this__u8e3s4, map) {
    init_properties__Base64_kt_2m6r7s();
    var length = imul((_this__u8e3s4.length + 2 | 0) / 3 | 0, 4);
    var out = new Int8Array(length);
    var index = 0;
    var end = _this__u8e3s4.length - (_this__u8e3s4.length % 3 | 0) | 0;
    var i = 0;
    while (i < end) {
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      var b0 = _this__u8e3s4[tmp0];
      var tmp1 = i;
      i = tmp1 + 1 | 0;
      var b1 = _this__u8e3s4[tmp1];
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      var b2 = _this__u8e3s4[tmp2];
      var tmp3 = index;
      index = tmp3 + 1 | 0;
      out[tmp3] = map[(b0 & 255) >> 2];
      var tmp4 = index;
      index = tmp4 + 1 | 0;
      out[tmp4] = map[(b0 & 3) << 4 | (b1 & 255) >> 4];
      var tmp5 = index;
      index = tmp5 + 1 | 0;
      out[tmp5] = map[(b1 & 15) << 2 | (b2 & 255) >> 6];
      var tmp6 = index;
      index = tmp6 + 1 | 0;
      out[tmp6] = map[b2 & 63];
    }
    var tmp7_subject = _this__u8e3s4.length - end | 0;
    if (tmp7_subject === 1) {
      var b0_0 = _this__u8e3s4[i];
      var tmp8 = index;
      index = tmp8 + 1 | 0;
      out[tmp8] = map[(b0_0 & 255) >> 2];
      var tmp9 = index;
      index = tmp9 + 1 | 0;
      out[tmp9] = map[(b0_0 & 3) << 4];
      var tmp10 = index;
      index = tmp10 + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 61;
      out[tmp10] = toByte(tmp$ret$0);
      var tmp = index;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 61;
      out[tmp] = toByte(tmp$ret$1);
    } else if (tmp7_subject === 2) {
      var tmp11 = i;
      i = tmp11 + 1 | 0;
      var b0_1 = _this__u8e3s4[tmp11];
      var b1_0 = _this__u8e3s4[i];
      var tmp12 = index;
      index = tmp12 + 1 | 0;
      out[tmp12] = map[(b0_1 & 255) >> 2];
      var tmp13 = index;
      index = tmp13 + 1 | 0;
      out[tmp13] = map[(b0_1 & 3) << 4 | (b1_0 & 255) >> 4];
      var tmp14 = index;
      index = tmp14 + 1 | 0;
      out[tmp14] = map[(b1_0 & 15) << 2];
      var tmp_0 = index;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 61;
      out[tmp_0] = toByte(tmp$ret$2);
    }
    return toUtf8String(out);
  }
  function encodeBase64$default(_this__u8e3s4, map, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      map = get_BASE64();
    return encodeBase64(_this__u8e3s4, map);
  }
  function decodeBase64ToArray(_this__u8e3s4) {
    init_properties__Base64_kt_2m6r7s();
    var limit = _this__u8e3s4.length;
    $l$loop: while (limit > 0) {
      var c = charSequenceGet(_this__u8e3s4, limit - 1 | 0);
      if ((((!equals(new Char(c), new Char(_Char___init__impl__6a9atx(61))) ? !equals(new Char(c), new Char(_Char___init__impl__6a9atx(10))) : false) ? !equals(new Char(c), new Char(_Char___init__impl__6a9atx(13))) : false) ? !equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) : false) ? !equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))) : false) {
        break $l$loop;
      }
      var tmp0 = limit;
      limit = tmp0 - 1 | 0;
    }
    var out = new Int8Array(numberToLong(limit).times_2zfqpc_k$(new Long(6, 0)).div_9s1fi3_k$(new Long(8, 0)).toInt_1tsl84_k$());
    var outCount = 0;
    var inCount = 0;
    var word = 0;
    var inductionVariable = 0;
    var last = limit;
    if (inductionVariable < last)
      $l$loop_0: do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c_0 = charSequenceGet(_this__u8e3s4, pos);
        var bits;
        if (_Char___init__impl__6a9atx(65) <= c_0 ? c_0 <= _Char___init__impl__6a9atx(90) : false) {
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          tmp$ret$0 = Char__toInt_impl_vasixd(c_0);
          bits = tmp$ret$0 - 65 | 0;
        } else if (_Char___init__impl__6a9atx(97) <= c_0 ? c_0 <= _Char___init__impl__6a9atx(122) : false) {
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = Char__toInt_impl_vasixd(c_0);
          bits = tmp$ret$1 - 71 | 0;
        } else if (_Char___init__impl__6a9atx(48) <= c_0 ? c_0 <= _Char___init__impl__6a9atx(57) : false) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = Char__toInt_impl_vasixd(c_0);
          bits = tmp$ret$2 + 4 | 0;
        } else if (equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(45)))) {
          bits = 62;
        } else if (equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(95)))) {
          bits = 63;
        } else if (((equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(32)))) ? true : equals(new Char(c_0), new Char(_Char___init__impl__6a9atx(9)))) {
          continue $l$loop_0;
        } else {
          return null;
        }
        word = word << 6 | bits;
        var tmp2 = inCount;
        inCount = tmp2 + 1 | 0;
        if ((inCount % 4 | 0) === 0) {
          var tmp3 = outCount;
          outCount = tmp3 + 1 | 0;
          out[tmp3] = toByte(word >> 16);
          var tmp4 = outCount;
          outCount = tmp4 + 1 | 0;
          out[tmp4] = toByte(word >> 8);
          var tmp5 = outCount;
          outCount = tmp5 + 1 | 0;
          out[tmp5] = toByte(word);
        }
      }
       while (inductionVariable < last);
    var lastWordChars = inCount % 4 | 0;
    var tmp6_subject = lastWordChars;
    switch (tmp6_subject) {
      case 1:
        return null;
      case 2:
        word = word << 12;
        var tmp7 = outCount;
        outCount = tmp7 + 1 | 0;
        out[tmp7] = toByte(word >> 16);
        ;
        break;
      case 3:
        word = word << 6;
        var tmp8 = outCount;
        outCount = tmp8 + 1 | 0;
        out[tmp8] = toByte(word >> 16);
        var tmp9 = outCount;
        outCount = tmp9 + 1 | 0;
        out[tmp9] = toByte(word >> 8);
        ;
        break;
    }
    if (outCount === out.length)
      return out;
    return copyOf(out, outCount);
  }
  var properties_initialized__Base64_kt_kgmzv8;
  function init_properties__Base64_kt_2m6r7s() {
    if (properties_initialized__Base64_kt_kgmzv8) {
    } else {
      properties_initialized__Base64_kt_kgmzv8 = true;
      BASE64 = Companion_getInstance_6().encodeUtf8_lzqk50_k$('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/').data_1;
      BASE64_URL_SAFE = Companion_getInstance_6().encodeUtf8_lzqk50_k$('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_').data_1;
    }
  }
  function get_DEFAULT__new_UnsafeCursor() {
    init_properties__Util_kt_azk279();
    return DEFAULT__new_UnsafeCursor;
  }
  var DEFAULT__new_UnsafeCursor;
  function get_DEFAULT__ByteString_size() {
    init_properties__Util_kt_azk279();
    return DEFAULT__ByteString_size;
  }
  var DEFAULT__ByteString_size;
  function reverseBytes(_this__u8e3s4) {
    init_properties__Util_kt_azk279();
    var i = _this__u8e3s4 & 65535;
    var reversed = (i & 65280) >>> 8 | 0 | (i & 255) << 8;
    return toShort(reversed);
  }
  function reverseBytes_0(_this__u8e3s4) {
    init_properties__Util_kt_azk279();
    return (_this__u8e3s4 & -16777216) >>> 24 | 0 | ((_this__u8e3s4 & 16711680) >>> 8 | 0) | (_this__u8e3s4 & 65280) << 8 | (_this__u8e3s4 & 255) << 24;
  }
  function reverseBytes_1(_this__u8e3s4) {
    init_properties__Util_kt_azk279();
    return _this__u8e3s4.and_jhajnj_k$(new Long(0, -16777216)).ushr_rr8rvr_k$(56).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(0, 16711680)).ushr_rr8rvr_k$(40)).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(0, 65280)).ushr_rr8rvr_k$(24)).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(0, 255)).ushr_rr8rvr_k$(8)).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(-16777216, 0)).shl_po5ip6_k$(8)).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(16711680, 0)).shl_po5ip6_k$(24)).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(65280, 0)).shl_po5ip6_k$(40)).or_s401rn_k$(_this__u8e3s4.and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(56));
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    init_properties__Util_kt_azk279();
    if ((offset.or_s401rn_k$(byteCount).compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? true : offset.compareTo_n4fqi2_k$(size) > 0) ? true : size.minus_llf5ei_k$(offset).compareTo_n4fqi2_k$(byteCount) < 0) {
      throw new ArrayIndexOutOfBoundsException('size=' + toString(size) + ' offset=' + toString(offset) + ' byteCount=' + toString(byteCount));
    }
  }
  function and(_this__u8e3s4, other) {
    init_properties__Util_kt_azk279();
    return _this__u8e3s4 & other;
  }
  function and_0(_this__u8e3s4, other) {
    init_properties__Util_kt_azk279();
    return toLong(_this__u8e3s4).and_jhajnj_k$(other);
  }
  function and_1(_this__u8e3s4, other) {
    init_properties__Util_kt_azk279();
    return toLong(_this__u8e3s4).and_jhajnj_k$(other);
  }
  function toHexString(_this__u8e3s4) {
    init_properties__Util_kt_azk279();
    var result = charArray(2);
    var tmp = get_HEX_DIGIT_CHARS();
    var tmp$ret$0;
    // Inline function 'okio.shr' call
    tmp$ret$0 = _this__u8e3s4 >> 4;
    result[0] = tmp[tmp$ret$0 & 15];
    var tmp_0 = get_HEX_DIGIT_CHARS();
    var tmp$ret$1;
    // Inline function 'okio.and' call
    tmp$ret$1 = _this__u8e3s4 & 15;
    result[1] = tmp_0[tmp$ret$1];
    return concatToString(result);
  }
  function minOf(a, b) {
    init_properties__Util_kt_azk279();
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(a);
    tmp$ret$0 = tmp0_minOf.compareTo_n4fqi2_k$(b) <= 0 ? tmp0_minOf : b;
    return tmp$ret$0;
  }
  function minOf_0(a, b) {
    init_properties__Util_kt_azk279();
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(b);
    tmp$ret$0 = a.compareTo_n4fqi2_k$(tmp0_minOf) <= 0 ? a : tmp0_minOf;
    return tmp$ret$0;
  }
  function toHexString_0(_this__u8e3s4) {
    init_properties__Util_kt_azk279();
    if (_this__u8e3s4 === 0)
      return '0';
    var result = charArray(8);
    result[0] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 28 & 15];
    result[1] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 24 & 15];
    result[2] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 20 & 15];
    result[3] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 16 & 15];
    result[4] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 12 & 15];
    result[5] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 8 & 15];
    result[6] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 4 & 15];
    result[7] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 & 15];
    var i = 0;
    $l$loop: while (i < result.length) {
      if (!equals(new Char(result[i]), new Char(_Char___init__impl__6a9atx(48))))
        break $l$loop;
      var tmp0 = i;
      i = tmp0 + 1 | 0;
    }
    return concatToString_0(result, i, result.length);
  }
  function resolveDefaultParameter(unsafeCursor) {
    init_properties__Util_kt_azk279();
    if (unsafeCursor === get_DEFAULT__new_UnsafeCursor())
      return new UnsafeCursor();
    return unsafeCursor;
  }
  function shr(_this__u8e3s4, other) {
    init_properties__Util_kt_azk279();
    return _this__u8e3s4 >> other;
  }
  function leftRotate(_this__u8e3s4, bitCount) {
    init_properties__Util_kt_azk279();
    return _this__u8e3s4 << bitCount | (_this__u8e3s4 >>> (32 - bitCount | 0) | 0);
  }
  function rightRotate(_this__u8e3s4, bitCount) {
    init_properties__Util_kt_azk279();
    return _this__u8e3s4.ushr_rr8rvr_k$(bitCount).or_s401rn_k$(_this__u8e3s4.shl_po5ip6_k$(64 - bitCount | 0));
  }
  function xor(_this__u8e3s4, other) {
    init_properties__Util_kt_azk279();
    return toByte(_this__u8e3s4 ^ other);
  }
  function resolveDefaultParameter_0(_this__u8e3s4, position) {
    init_properties__Util_kt_azk279();
    if (position === get_DEFAULT__ByteString_size())
      return _this__u8e3s4.get_size_woubt6_k$();
    return position;
  }
  function arrayRangeEquals(a, aOffset, b, bOffset, byteCount) {
    init_properties__Util_kt_azk279();
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(a[i + aOffset | 0] === b[i + bOffset | 0]))
          return false;
      }
       while (inductionVariable < byteCount);
    return true;
  }
  function resolveDefaultParameter_1(_this__u8e3s4, sizeParam) {
    init_properties__Util_kt_azk279();
    if (sizeParam === get_DEFAULT__ByteString_size())
      return _this__u8e3s4.length;
    return sizeParam;
  }
  var properties_initialized__Util_kt_67kc5b;
  function init_properties__Util_kt_azk279() {
    if (properties_initialized__Util_kt_67kc5b) {
    } else {
      properties_initialized__Util_kt_67kc5b = true;
      DEFAULT__new_UnsafeCursor = new UnsafeCursor();
      DEFAULT__ByteString_size = -1234567890;
    }
  }
  function buffer(_this__u8e3s4) {
    return new RealBufferedSource(_this__u8e3s4);
  }
  function buildTrieRecursive($this, nodeOffset, node, byteStringOffset, byteStrings, fromIndex, toIndex, indexes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex < toIndex;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.require' call
        var tmp1_require = byteStrings.get_fkrdnv_k$(i).get_size_woubt6_k$() >= byteStringOffset;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlin.require.<anonymous>' call
          tmp$ret$1 = 'Failed requirement.';
          var message_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
       while (inductionVariable < toIndex);
    var fromIndex_0 = fromIndex;
    var from = byteStrings.get_fkrdnv_k$(fromIndex_0);
    var to = byteStrings.get_fkrdnv_k$(toIndex - 1 | 0);
    var prefixIndex = -1;
    if (byteStringOffset === from.get_size_woubt6_k$()) {
      prefixIndex = indexes.get_fkrdnv_k$(fromIndex_0);
      var tmp1 = fromIndex_0;
      fromIndex_0 = tmp1 + 1 | 0;
      from = byteStrings.get_fkrdnv_k$(fromIndex_0);
    }
    if (!(from.get_fkrdnv_k$(byteStringOffset) === to.get_fkrdnv_k$(byteStringOffset))) {
      var selectChoiceCount = 1;
      var inductionVariable_0 = fromIndex_0 + 1 | 0;
      if (inductionVariable_0 < toIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (!(byteStrings.get_fkrdnv_k$(i_0 - 1 | 0).get_fkrdnv_k$(byteStringOffset) === byteStrings.get_fkrdnv_k$(i_0).get_fkrdnv_k$(byteStringOffset))) {
            var tmp3 = selectChoiceCount;
            selectChoiceCount = tmp3 + 1 | 0;
          }
        }
         while (inductionVariable_0 < toIndex);
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp2_plus = nodeOffset.plus_u6jwas_k$(_get_intCount__gol563(node, $this));
      tmp$ret$2 = tmp2_plus.plus_u6jwas_k$(new Long(2, 0));
      var tmp3_plus = tmp$ret$2;
      var tmp4_plus = imul(selectChoiceCount, 2);
      tmp$ret$3 = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
      var childNodesOffset = tmp$ret$3;
      node.writeInt_1gh65t_k$(selectChoiceCount);
      node.writeInt_1gh65t_k$(prefixIndex);
      var inductionVariable_1 = fromIndex_0;
      if (inductionVariable_1 < toIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var rangeByte = byteStrings.get_fkrdnv_k$(i_1).get_fkrdnv_k$(byteStringOffset);
          if (i_1 === fromIndex_0 ? true : !(rangeByte === byteStrings.get_fkrdnv_k$(i_1 - 1 | 0).get_fkrdnv_k$(byteStringOffset))) {
            var tmp$ret$4;
            // Inline function 'okio.and' call
            tmp$ret$4 = rangeByte & 255;
            node.writeInt_1gh65t_k$(tmp$ret$4);
          }
        }
         while (inductionVariable_1 < toIndex);
      var childNodes = new Buffer();
      var rangeStart = fromIndex_0;
      while (rangeStart < toIndex) {
        var rangeByte_0 = byteStrings.get_fkrdnv_k$(rangeStart).get_fkrdnv_k$(byteStringOffset);
        var rangeEnd = toIndex;
        var inductionVariable_2 = rangeStart + 1 | 0;
        if (inductionVariable_2 < toIndex)
          $l$loop: do {
            var i_2 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            if (!(rangeByte_0 === byteStrings.get_fkrdnv_k$(i_2).get_fkrdnv_k$(byteStringOffset))) {
              rangeEnd = i_2;
              break $l$loop;
            }
          }
           while (inductionVariable_2 < toIndex);
        if ((rangeStart + 1 | 0) === rangeEnd ? (byteStringOffset + 1 | 0) === byteStrings.get_fkrdnv_k$(rangeStart).get_size_woubt6_k$() : false) {
          node.writeInt_1gh65t_k$(indexes.get_fkrdnv_k$(rangeStart));
        } else {
          node.writeInt_1gh65t_k$(imul(-1, childNodesOffset.plus_u6jwas_k$(_get_intCount__gol563(childNodes, $this)).toInt_1tsl84_k$()));
          buildTrieRecursive($this, childNodesOffset, childNodes, byteStringOffset + 1 | 0, byteStrings, rangeStart, rangeEnd, indexes);
        }
        rangeStart = rangeEnd;
      }
      node.writeAll_rsmo5y_k$(childNodes);
    } else {
      var scanByteCount = 0;
      var inductionVariable_3 = byteStringOffset;
      var tmp$ret$5;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp5_minOf = from.get_size_woubt6_k$();
      var tmp6_minOf = to.get_size_woubt6_k$();
      tmp$ret$5 = Math.min(tmp5_minOf, tmp6_minOf);
      var last = tmp$ret$5;
      if (inductionVariable_3 < last)
        $l$loop_0: do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          if (from.get_fkrdnv_k$(i_3) === to.get_fkrdnv_k$(i_3)) {
            var tmp7 = scanByteCount;
            scanByteCount = tmp7 + 1 | 0;
          } else {
            break $l$loop_0;
          }
        }
         while (inductionVariable_3 < last);
      var tmp$ret$8;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$7;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$6;
      // Inline function 'kotlin.Long.plus' call
      var tmp7_plus = nodeOffset.plus_u6jwas_k$(_get_intCount__gol563(node, $this));
      tmp$ret$6 = tmp7_plus.plus_u6jwas_k$(new Long(2, 0));
      var tmp8_plus = tmp$ret$6;
      var tmp9_plus = scanByteCount;
      tmp$ret$7 = tmp8_plus.plus_u6jwas_k$(toLong(tmp9_plus));
      var tmp10_plus = tmp$ret$7;
      tmp$ret$8 = tmp10_plus.plus_u6jwas_k$(new Long(1, 0));
      var childNodesOffset_0 = tmp$ret$8;
      node.writeInt_1gh65t_k$(-scanByteCount | 0);
      node.writeInt_1gh65t_k$(prefixIndex);
      var inductionVariable_4 = byteStringOffset;
      var last_0 = byteStringOffset + scanByteCount | 0;
      if (inductionVariable_4 < last_0)
        do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var tmp$ret$9;
          // Inline function 'okio.and' call
          var tmp11_and = from.get_fkrdnv_k$(i_4);
          tmp$ret$9 = tmp11_and & 255;
          node.writeInt_1gh65t_k$(tmp$ret$9);
        }
         while (inductionVariable_4 < last_0);
      if ((fromIndex_0 + 1 | 0) === toIndex) {
        // Inline function 'kotlin.check' call
        var tmp12_check = (byteStringOffset + scanByteCount | 0) === byteStrings.get_fkrdnv_k$(fromIndex_0).get_size_woubt6_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp12_check) {
          var tmp$ret$10;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$10 = 'Check failed.';
          var message_1 = tmp$ret$10;
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        node.writeInt_1gh65t_k$(indexes.get_fkrdnv_k$(fromIndex_0));
      } else {
        var childNodes_0 = new Buffer();
        node.writeInt_1gh65t_k$(imul(-1, childNodesOffset_0.plus_u6jwas_k$(_get_intCount__gol563(childNodes_0, $this)).toInt_1tsl84_k$()));
        buildTrieRecursive($this, childNodesOffset_0, childNodes_0, byteStringOffset + scanByteCount | 0, byteStrings, fromIndex_0, toIndex, indexes);
        node.writeAll_rsmo5y_k$(childNodes_0);
      }
    }
  }
  function buildTrieRecursive$default($this, nodeOffset, node, byteStringOffset, byteStrings, fromIndex, toIndex, indexes, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      nodeOffset = new Long(0, 0);
    if (!(($mask0 & 8) === 0))
      byteStringOffset = 0;
    if (!(($mask0 & 32) === 0))
      fromIndex = 0;
    if (!(($mask0 & 64) === 0))
      toIndex = byteStrings.get_size_woubt6_k$();
    return buildTrieRecursive($this, nodeOffset, node, byteStringOffset, byteStrings, fromIndex, toIndex, indexes);
  }
  function _get_intCount__gol563(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = _this__u8e3s4.size_1;
    tmp$ret$0 = tmp0_div.div_9s1fi3_k$(new Long(4, 0));
    return tmp$ret$0;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.of_hri3v1_k$ = function (byteStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = byteStrings.length === 0;
    if (tmp$ret$0) {
      var tmp$ret$3;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = [];
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$4 = new Int32Array([0, -1]);
      return new Options(tmp, tmp$ret$4);
    }
    var list = toMutableList(byteStrings);
    sort(list);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(byteStrings.length);
    var indexedObject = byteStrings;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$5;
      // Inline function 'okio.Companion.of.<anonymous>' call
      tmp$ret$5 = -1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    var tmp0_toTypedArray = tmp$ret$7;
    tmp$ret$8 = copyToArray(tmp0_toTypedArray);
    var indexes = mutableListOf(tmp$ret$8.slice());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject_0 = byteStrings;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'okio.Companion.of.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = tmp1;
      var sortedIndex = binarySearch$default(list, item_0, 0, 0, 6, null);
      indexes.set_meu351_k$(sortedIndex, tmp1__anonymous__uwfjfc);
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = list.get_fkrdnv_k$(0).get_size_woubt6_k$() > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$9;
      // Inline function 'okio.Companion.of.<anonymous>' call
      tmp$ret$9 = 'the empty byte string is not a supported option';
      var message = tmp$ret$9;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var a = 0;
    while (a < list.get_size_woubt6_k$()) {
      var prefix = list.get_fkrdnv_k$(a);
      var b = a + 1 | 0;
      $l$loop: while (b < list.get_size_woubt6_k$()) {
        var byteString = list.get_fkrdnv_k$(b);
        if (!byteString.startsWith_p5xanx_k$(prefix))
          break $l$loop;
        // Inline function 'kotlin.require' call
        var tmp3_require = !(byteString.get_size_woubt6_k$() === prefix.get_size_woubt6_k$());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp3_require) {
          var tmp$ret$10;
          // Inline function 'okio.Companion.of.<anonymous>' call
          tmp$ret$10 = 'duplicate option: ' + byteString;
          var message_0 = tmp$ret$10;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        if (indexes.get_fkrdnv_k$(b) > indexes.get_fkrdnv_k$(a)) {
          list.removeAt_qvpkxi_k$(b);
          indexes.removeAt_qvpkxi_k$(b);
        } else {
          var tmp0 = b;
          b = tmp0 + 1 | 0;
        }
      }
      var tmp1_0 = a;
      a = tmp1_0 + 1 | 0;
    }
    var trieBytes = new Buffer();
    var tmp_0 = new Long(0, 0);
    buildTrieRecursive$default(this, tmp_0, trieBytes, 0, list, 0, 0, indexes, 106, null);
    var trie = new Int32Array(_get_intCount__gol563(trieBytes, this).toInt_1tsl84_k$());
    var i = 0;
    while (!trieBytes.exhausted_p1jt55_k$()) {
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      trie[tmp2] = trieBytes.readInt_hv8cxl_k$();
    }
    var tmp$ret$12;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = byteStrings;
    tmp$ret$12 = tmp$ret$11.slice();
    return new Options(tmp$ret$12, trie);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Options(byteStrings, trie) {
    Companion_getInstance_0();
    AbstractList.call(this);
    this.byteStrings_1 = byteStrings;
    this.trie_1 = trie;
  }
  Options.prototype.get_byteStrings_g0wbnz_k$ = function () {
    return this.byteStrings_1;
  };
  Options.prototype.get_trie_wov52b_k$ = function () {
    return this.trie_1;
  };
  Options.prototype.get_size_woubt6_k$ = function () {
    return this.byteStrings_1.length;
  };
  Options.prototype.get_fkrdnv_k$ = function (index) {
    return this.byteStrings_1[index];
  };
  Options.$metadata$ = classMeta('Options', [RandomAccess], undefined, undefined, undefined, AbstractList.prototype);
  function _get_upstream__8b4500($this) {
    return $this.upstream_1;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_expectedSegment__ufl0ui($this, _set____db54di) {
    $this.expectedSegment_1 = _set____db54di;
  }
  function _get_expectedSegment__uhstm2($this) {
    return $this.expectedSegment_1;
  }
  function _set_expectedPos__7eepj($this, _set____db54di) {
    $this.expectedPos_1 = _set____db54di;
  }
  function _get_expectedPos__u2zrmd($this) {
    return $this.expectedPos_1;
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _set_pos__4wcab5($this, _set____db54di) {
    $this.pos_1 = _set____db54di;
  }
  function _get_pos__e6evgd($this) {
    return $this.pos_1;
  }
  function PeekSource(upstream) {
    this.upstream_1 = upstream;
    this.buffer_1 = this.upstream_1.get_buffer_bmaafd_k$();
    this.expectedSegment_1 = this.buffer_1.head_1;
    var tmp = this;
    var tmp0_safe_receiver = this.buffer_1.head_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pos_1;
    tmp.expectedPos_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.closed_1 = false;
    this.pos_1 = new Long(0, 0);
  }
  PeekSource.prototype.read_nz46cz_k$ = function (sink, byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.PeekSource.read.<anonymous>' call
      tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = !this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'okio.PeekSource.read.<anonymous>' call
      tmp$ret$1 = 'closed';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = this.expectedSegment_1 == null ? true : this.expectedSegment_1 === this.buffer_1.head_1 ? this.expectedPos_1 === ensureNotNull(this.buffer_1.head_1).pos_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$2;
      // Inline function 'okio.PeekSource.read.<anonymous>' call
      tmp$ret$2 = 'Peek source is invalid because upstream source was used';
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tmp$ret$3;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = this.pos_1;
    tmp$ret$3 = tmp3_plus.plus_u6jwas_k$(new Long(1, 0));
    if (!this.upstream_1.request_k7c0qh_k$(tmp$ret$3))
      return new Long(-1, -1);
    if (this.expectedSegment_1 == null ? !(this.buffer_1.head_1 == null) : false) {
      this.expectedSegment_1 = this.buffer_1.head_1;
      this.expectedPos_1 = ensureNotNull(this.buffer_1.head_1).pos_1;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp4_minOf = this.buffer_1.size_1.minus_llf5ei_k$(this.pos_1);
    tmp$ret$4 = byteCount.compareTo_n4fqi2_k$(tmp4_minOf) <= 0 ? byteCount : tmp4_minOf;
    var toCopy = tmp$ret$4;
    this.buffer_1.copyTo_w2d2hb_k$(sink, this.pos_1, toCopy);
    var tmp0_this = this;
    tmp0_this.pos_1 = tmp0_this.pos_1.plus_u6jwas_k$(toCopy);
    return toCopy;
  };
  PeekSource.prototype.timeout_lq9okf_k$ = function () {
    return this.upstream_1.timeout_lq9okf_k$();
  };
  PeekSource.prototype.close_ymq55z_k$ = function () {
    this.closed_1 = true;
  };
  PeekSource.$metadata$ = classMeta('PeekSource', [Source]);
  function Segment_init_$Init$($this) {
    Segment.call($this);
    var tmp = $this;
    Companion_getInstance_1();
    tmp.data_1 = new Int8Array(8192);
    $this.owner_1 = true;
    $this.shared_1 = false;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(Object.create(Segment.prototype));
  }
  function Segment_init_$Init$_0(data, pos, limit, shared, owner, $this) {
    Segment.call($this);
    $this.data_1 = data;
    $this.pos_1 = pos;
    $this.limit_1 = limit;
    $this.shared_1 = shared;
    $this.owner_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shared, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shared, owner, Object.create(Segment.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.SIZE_1 = 8192;
    this.SHARE_MINIMUM_1 = 1024;
  }
  Companion_0.prototype.get_SIZE_wo97pm_k$ = function () {
    return this.SIZE_1;
  };
  Companion_0.prototype.get_SHARE_MINIMUM_wfrtqd_k$ = function () {
    return this.SHARE_MINIMUM_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  Segment.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  Segment.prototype.set_pos_jpsk7t_k$ = function (_set____db54di) {
    this.pos_1 = _set____db54di;
  };
  Segment.prototype.get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  Segment.prototype.set_limit_7w7hym_k$ = function (_set____db54di) {
    this.limit_1 = _set____db54di;
  };
  Segment.prototype.get_limit_iuokuq_k$ = function () {
    return this.limit_1;
  };
  Segment.prototype.set_shared_v5cvk7_k$ = function (_set____db54di) {
    this.shared_1 = _set____db54di;
  };
  Segment.prototype.get_shared_jgtlda_k$ = function () {
    return this.shared_1;
  };
  Segment.prototype.set_owner_ezy6c3_k$ = function (_set____db54di) {
    this.owner_1 = _set____db54di;
  };
  Segment.prototype.get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  Segment.prototype.set_next_b7xx7c_k$ = function (_set____db54di) {
    this.next_1 = _set____db54di;
  };
  Segment.prototype.get_next_wor1vg_k$ = function () {
    return this.next_1;
  };
  Segment.prototype.set_prev_5skmu0_k$ = function (_set____db54di) {
    this.prev_1 = _set____db54di;
  };
  Segment.prototype.get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  Segment.prototype.sharedCopy_timhza_k$ = function () {
    this.shared_1 = true;
    return Segment_init_$Create$_0(this.data_1, this.pos_1, this.limit_1, true, false);
  };
  Segment.prototype.unsharedCopy_5kj8b7_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.data_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return Segment_init_$Create$_0(tmp$ret$1, this.pos_1, this.limit_1, false, true);
  };
  Segment.prototype.pop_2dsh_k$ = function () {
    var result = !(this.next_1 === this) ? this.next_1 : null;
    ensureNotNull(this.prev_1).next_1 = this.next_1;
    ensureNotNull(this.next_1).prev_1 = this.prev_1;
    this.next_1 = null;
    this.prev_1 = null;
    return result;
  };
  Segment.prototype.push_toq0no_k$ = function (segment) {
    segment.prev_1 = this;
    segment.next_1 = this.next_1;
    ensureNotNull(this.next_1).prev_1 = segment;
    this.next_1 = segment;
    return segment;
  };
  Segment.prototype.split_dvaf_k$ = function (byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount > 0 ? byteCount <= (this.limit_1 - this.pos_1 | 0) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.Segment.split.<anonymous>' call
      tmp$ret$0 = 'byteCount out of range';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    Companion_getInstance_1();
    if (byteCount >= 1024) {
      prefix = this.sharedCopy_timhza_k$();
    } else {
      prefix = SegmentPool_getInstance().take_2451j_k$();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.data_1;
      var tmp2_copyInto = prefix.data_1;
      var tmp3_copyInto = this.pos_1;
      var tmp4_copyInto = this.pos_1 + byteCount | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, 0, tmp3_copyInto, tmp4_copyInto);
      tmp$ret$5 = tmp2_copyInto;
    }
    prefix.limit_1 = prefix.pos_1 + byteCount | 0;
    var tmp0_this = this;
    tmp0_this.pos_1 = tmp0_this.pos_1 + byteCount | 0;
    ensureNotNull(this.prev_1).push_toq0no_k$(prefix);
    return prefix;
  };
  Segment.prototype.compact_dbgoby_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(this.prev_1 === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.Segment.compact.<anonymous>' call
      tmp$ret$0 = 'cannot compact';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.prev_1).owner_1)
      return Unit_getInstance();
    var byteCount = this.limit_1 - this.pos_1 | 0;
    Companion_getInstance_1();
    var availableByteCount = (8192 - ensureNotNull(this.prev_1).limit_1 | 0) + (ensureNotNull(this.prev_1).shared_1 ? 0 : ensureNotNull(this.prev_1).pos_1) | 0;
    if (byteCount > availableByteCount)
      return Unit_getInstance();
    this.writeTo_yc0wgs_k$(ensureNotNull(this.prev_1), byteCount);
    this.pop_2dsh_k$();
    SegmentPool_getInstance().recycle_axzlry_k$(this);
  };
  Segment.prototype.writeTo_yc0wgs_k$ = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    var tmp0_check = sink.owner_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.Segment.writeTo.<anonymous>' call
      tmp$ret$0 = 'only owner can write';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = sink.limit_1 + byteCount | 0;
    Companion_getInstance_1();
    if (tmp > 8192) {
      if (sink.shared_1)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp_0 = (sink.limit_1 + byteCount | 0) - sink.pos_1 | 0;
      Companion_getInstance_1();
      if (tmp_0 > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = sink.data_1;
      var tmp2_copyInto = sink.data_1;
      var tmp3_copyInto = sink.pos_1;
      var tmp4_copyInto = sink.limit_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_1, tmp$ret$4, 0, tmp3_copyInto, tmp4_copyInto);
      tmp$ret$5 = tmp2_copyInto;
      var tmp0_this = sink;
      tmp0_this.limit_1 = tmp0_this.limit_1 - sink.pos_1 | 0;
      sink.pos_1 = 0;
    }
    var tmp$ret$10;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.data_1;
    var tmp6_copyInto = sink.data_1;
    var tmp7_copyInto = sink.limit_1;
    var tmp8_copyInto = this.pos_1;
    var tmp9_copyInto = this.pos_1 + byteCount | 0;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = tmp5_copyInto;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = tmp6_copyInto;
    tmp$ret$9 = tmp$ret$8;
    arrayCopy(tmp_2, tmp$ret$9, tmp7_copyInto, tmp8_copyInto, tmp9_copyInto);
    tmp$ret$10 = tmp6_copyInto;
    var tmp1_this = sink;
    tmp1_this.limit_1 = tmp1_this.limit_1 + byteCount | 0;
    var tmp2_this = this;
    tmp2_this.pos_1 = tmp2_this.pos_1 + byteCount | 0;
  };
  function Segment() {
    Companion_getInstance_1();
    this.pos_1 = 0;
    this.limit_1 = 0;
    this.shared_1 = false;
    this.owner_1 = false;
    this.next_1 = null;
    this.prev_1 = null;
  }
  Segment.$metadata$ = classMeta('Segment');
  function Source() {
  }
  Source.$metadata$ = interfaceMeta('Source', [Closeable]);
  function processUtf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    var index = beginIndex;
    while (index < endIndex) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(c);
        yield_0(toByte(tmp$ret$0));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        while (index < endIndex ? Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index), _Char___init__impl__6a9atx(128)) < 0 : false) {
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__get_code__88qj9g = charSequenceGet(_this__u8e3s4, tmp1);
          tmp$ret$1 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
          yield_0(toByte(tmp$ret$1));
        }
      } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = Char__toInt_impl_vasixd(c);
        yield_0(toByte(tmp$ret$2 >> 6 | 192));
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        tmp$ret$3 = Char__toInt_impl_vasixd(c);
        yield_0(toByte(tmp$ret$3 & 63 | 128));
        var tmp2 = index;
        index = tmp2 + 1 | 0;
      } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = Char__toInt_impl_vasixd(c);
        yield_0(toByte(tmp$ret$4 >> 12 | 224));
        var tmp$ret$5;
        // Inline function 'kotlin.code' call
        tmp$ret$5 = Char__toInt_impl_vasixd(c);
        yield_0(toByte(tmp$ret$5 >> 6 & 63 | 128));
        var tmp$ret$6;
        // Inline function 'kotlin.code' call
        tmp$ret$6 = Char__toInt_impl_vasixd(c);
        yield_0(toByte(tmp$ret$6 & 63 | 128));
        var tmp3 = index;
        index = tmp3 + 1 | 0;
      } else {
        var tmp;
        if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 ? true : endIndex <= (index + 1 | 0)) {
          tmp = true;
        } else {
          var containsArg = charSequenceGet(_this__u8e3s4, index + 1 | 0);
          tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
        }
        if (tmp) {
          yield_0(63);
          var tmp4 = index;
          index = tmp4 + 1 | 0;
        } else {
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          tmp$ret$7 = Char__toInt_impl_vasixd(c);
          var tmp_0 = tmp$ret$7 << 10;
          var tmp$ret$8;
          // Inline function 'kotlin.code' call
          var tmp1__get_code__adl84j = charSequenceGet(_this__u8e3s4, index + 1 | 0);
          tmp$ret$8 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
          var codePoint = (tmp_0 + tmp$ret$8 | 0) + -56613888 | 0;
          yield_0(toByte(codePoint >> 18 | 240));
          yield_0(toByte(codePoint >> 12 & 63 | 128));
          yield_0(toByte(codePoint >> 6 & 63 | 128));
          yield_0(toByte(codePoint & 63 | 128));
          index = index + 2 | 0;
        }
      }
    }
  }
  function get_REPLACEMENT_CODE_POINT() {
    return REPLACEMENT_CODE_POINT;
  }
  var REPLACEMENT_CODE_POINT;
  function processUtf8CodePoints(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        yield_0(b0);
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        while (index < endIndex ? _this__u8e3s4[index] >= 0 : false) {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          yield_0(_this__u8e3s4[tmp1]);
        }
      } else {
        var tmp$ret$0;
        // Inline function 'okio.shr' call
        tmp$ret$0 = b0 >> 5;
        if (tmp$ret$0 === -2) {
          var tmp = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var tmp0_process2Utf8Bytes = index;
            if (endIndex <= (tmp0_process2Utf8Bytes + 1 | 0)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp1__anonymous__uwfjfc = 65533;
              yield_0(tmp1__anonymous__uwfjfc);
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp0_process2Utf8Bytes];
            var b1 = _this__u8e3s4[tmp0_process2Utf8Bytes + 1 | 0];
            var tmp$ret$3;
            // Inline function 'okio.isUtf8Continuation' call
            var tmp$ret$2;
            // Inline function 'okio.and' call
            tmp$ret$2 = b1 & 192;
            tmp$ret$3 = tmp$ret$2 === 128;
            if (!tmp$ret$3) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = 65533;
              yield_0(tmp2__anonymous__z9zvc9);
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp3__anonymous__ufb84q = 65533;
              yield_0(tmp3__anonymous__ufb84q);
            } else {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              yield_0(codePoint);
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          var tmp$ret$4;
          // Inline function 'okio.shr' call
          tmp$ret$4 = b0 >> 4;
          if (tmp$ret$4 === -2) {
            var tmp_0 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var tmp5_process3Utf8Bytes = index;
              if (endIndex <= (tmp5_process3Utf8Bytes + 2 | 0)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp6__anonymous__fv9ai5 = 65533;
                yield_0(tmp6__anonymous__fv9ai5);
                var tmp_1;
                if (endIndex <= (tmp5_process3Utf8Bytes + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  var tmp$ret$6;
                  // Inline function 'okio.isUtf8Continuation' call
                  var tmp4_isUtf8Continuation = _this__u8e3s4[tmp5_process3Utf8Bytes + 1 | 0];
                  var tmp$ret$5;
                  // Inline function 'okio.and' call
                  tmp$ret$5 = tmp4_isUtf8Continuation & 192;
                  tmp$ret$6 = tmp$ret$5 === 128;
                  tmp_1 = !tmp$ret$6;
                }
                if (tmp_1) {
                  tmp$ret$7 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$7 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp5_process3Utf8Bytes];
              var b1_0 = _this__u8e3s4[tmp5_process3Utf8Bytes + 1 | 0];
              var tmp$ret$9;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$8;
              // Inline function 'okio.and' call
              tmp$ret$8 = b1_0 & 192;
              tmp$ret$9 = tmp$ret$8 === 128;
              if (!tmp$ret$9) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp7__anonymous__b0knam = 65533;
                yield_0(tmp7__anonymous__b0knam);
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp5_process3Utf8Bytes + 2 | 0];
              var tmp$ret$11;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$10;
              // Inline function 'okio.and' call
              tmp$ret$10 = b2 & 192;
              tmp$ret$11 = tmp$ret$10 === 128;
              if (!tmp$ret$11) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp8__anonymous__65w033 = 65533;
                yield_0(tmp8__anonymous__65w033);
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp9__anonymous__1b7cvk = 65533;
                yield_0(tmp9__anonymous__1b7cvk);
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp10__anonymous__yfiz50 = 65533;
                yield_0(tmp10__anonymous__yfiz50);
              } else {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                yield_0(codePoint_0);
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            var tmp$ret$12;
            // Inline function 'okio.shr' call
            tmp$ret$12 = b0 >> 3;
            if (tmp$ret$12 === -2) {
              var tmp_2 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var tmp13_process4Utf8Bytes = index;
                if (endIndex <= (tmp13_process4Utf8Bytes + 3 | 0)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp14__anonymous__f0seaw = 65533;
                  yield_0(tmp14__anonymous__f0seaw);
                  var tmp_3;
                  if (endIndex <= (tmp13_process4Utf8Bytes + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    var tmp$ret$14;
                    // Inline function 'okio.isUtf8Continuation' call
                    var tmp11_isUtf8Continuation = _this__u8e3s4[tmp13_process4Utf8Bytes + 1 | 0];
                    var tmp$ret$13;
                    // Inline function 'okio.and' call
                    tmp$ret$13 = tmp11_isUtf8Continuation & 192;
                    tmp$ret$14 = tmp$ret$13 === 128;
                    tmp_3 = !tmp$ret$14;
                  }
                  if (tmp_3) {
                    tmp$ret$15 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp13_process4Utf8Bytes + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      var tmp$ret$17;
                      // Inline function 'okio.isUtf8Continuation' call
                      var tmp12_isUtf8Continuation = _this__u8e3s4[tmp13_process4Utf8Bytes + 2 | 0];
                      var tmp$ret$16;
                      // Inline function 'okio.and' call
                      tmp$ret$16 = tmp12_isUtf8Continuation & 192;
                      tmp$ret$17 = tmp$ret$16 === 128;
                      tmp_4 = !tmp$ret$17;
                    }
                    if (tmp_4) {
                      tmp$ret$15 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$15 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp13_process4Utf8Bytes];
                var b1_1 = _this__u8e3s4[tmp13_process4Utf8Bytes + 1 | 0];
                var tmp$ret$19;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$18;
                // Inline function 'okio.and' call
                tmp$ret$18 = b1_1 & 192;
                tmp$ret$19 = tmp$ret$18 === 128;
                if (!tmp$ret$19) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp15__anonymous__a63r3d = 65533;
                  yield_0(tmp15__anonymous__a63r3d);
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp13_process4Utf8Bytes + 2 | 0];
                var tmp$ret$21;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$20;
                // Inline function 'okio.and' call
                tmp$ret$20 = b2_0 & 192;
                tmp$ret$21 = tmp$ret$20 === 128;
                if (!tmp$ret$21) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp16__anonymous__5bf3vu = 65533;
                  yield_0(tmp16__anonymous__5bf3vu);
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp13_process4Utf8Bytes + 3 | 0];
                var tmp$ret$23;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$22;
                // Inline function 'okio.and' call
                tmp$ret$22 = b3 & 192;
                tmp$ret$23 = tmp$ret$22 === 128;
                if (!tmp$ret$23) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp17__anonymous__gqgob = 65533;
                  yield_0(tmp17__anonymous__gqgob);
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp18__anonymous__4dy6j8 = 65533;
                  yield_0(tmp18__anonymous__4dy6j8);
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp19__anonymous__98mtqr = 65533;
                  yield_0(tmp19__anonymous__98mtqr);
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp20__anonymous__q2j3lv = 65533;
                  yield_0(tmp20__anonymous__q2j3lv);
                } else {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  yield_0(codePoint_1);
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              yield_0(65533);
              var tmp2 = index;
              index = tmp2 + 1 | 0;
            }
          }
        }
      }
    }
  }
  function isIsoControl(codePoint) {
    return (0 <= codePoint ? codePoint <= 31 : false) ? true : 127 <= codePoint ? codePoint <= 159 : false;
  }
  function get_REPLACEMENT_BYTE() {
    return REPLACEMENT_BYTE;
  }
  var REPLACEMENT_BYTE;
  function process2Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    if (endIndex <= (beginIndex + 1 | 0)) {
      yield_0(65533);
      return 1;
    }
    var b0 = _this__u8e3s4[beginIndex];
    var b1 = _this__u8e3s4[beginIndex + 1 | 0];
    var tmp$ret$1;
    // Inline function 'okio.isUtf8Continuation' call
    var tmp$ret$0;
    // Inline function 'okio.and' call
    tmp$ret$0 = b1 & 192;
    tmp$ret$1 = tmp$ret$0 === 128;
    if (!tmp$ret$1) {
      yield_0(65533);
      return 1;
    }
    var codePoint = 3968 ^ b1 ^ b0 << 6;
    if (codePoint < 128) {
      yield_0(65533);
    } else {
      yield_0(codePoint);
    }
    return 2;
  }
  function process3Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    if (endIndex <= (beginIndex + 2 | 0)) {
      yield_0(65533);
      var tmp;
      if (endIndex <= (beginIndex + 1 | 0)) {
        tmp = true;
      } else {
        var tmp$ret$1;
        // Inline function 'okio.isUtf8Continuation' call
        var tmp0_isUtf8Continuation = _this__u8e3s4[beginIndex + 1 | 0];
        var tmp$ret$0;
        // Inline function 'okio.and' call
        tmp$ret$0 = tmp0_isUtf8Continuation & 192;
        tmp$ret$1 = tmp$ret$0 === 128;
        tmp = !tmp$ret$1;
      }
      if (tmp) {
        return 1;
      } else {
        return 2;
      }
    }
    var b0 = _this__u8e3s4[beginIndex];
    var b1 = _this__u8e3s4[beginIndex + 1 | 0];
    var tmp$ret$3;
    // Inline function 'okio.isUtf8Continuation' call
    var tmp$ret$2;
    // Inline function 'okio.and' call
    tmp$ret$2 = b1 & 192;
    tmp$ret$3 = tmp$ret$2 === 128;
    if (!tmp$ret$3) {
      yield_0(65533);
      return 1;
    }
    var b2 = _this__u8e3s4[beginIndex + 2 | 0];
    var tmp$ret$5;
    // Inline function 'okio.isUtf8Continuation' call
    var tmp$ret$4;
    // Inline function 'okio.and' call
    tmp$ret$4 = b2 & 192;
    tmp$ret$5 = tmp$ret$4 === 128;
    if (!tmp$ret$5) {
      yield_0(65533);
      return 2;
    }
    var codePoint = -123008 ^ b2 ^ b1 << 6 ^ b0 << 12;
    if (codePoint < 2048) {
      yield_0(65533);
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      yield_0(65533);
    } else {
      yield_0(codePoint);
    }
    return 3;
  }
  function process4Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    if (endIndex <= (beginIndex + 3 | 0)) {
      yield_0(65533);
      var tmp;
      if (endIndex <= (beginIndex + 1 | 0)) {
        tmp = true;
      } else {
        var tmp$ret$1;
        // Inline function 'okio.isUtf8Continuation' call
        var tmp0_isUtf8Continuation = _this__u8e3s4[beginIndex + 1 | 0];
        var tmp$ret$0;
        // Inline function 'okio.and' call
        tmp$ret$0 = tmp0_isUtf8Continuation & 192;
        tmp$ret$1 = tmp$ret$0 === 128;
        tmp = !tmp$ret$1;
      }
      if (tmp) {
        return 1;
      } else {
        var tmp_0;
        if (endIndex <= (beginIndex + 2 | 0)) {
          tmp_0 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'okio.isUtf8Continuation' call
          var tmp1_isUtf8Continuation = _this__u8e3s4[beginIndex + 2 | 0];
          var tmp$ret$2;
          // Inline function 'okio.and' call
          tmp$ret$2 = tmp1_isUtf8Continuation & 192;
          tmp$ret$3 = tmp$ret$2 === 128;
          tmp_0 = !tmp$ret$3;
        }
        if (tmp_0) {
          return 2;
        } else {
          return 3;
        }
      }
    }
    var b0 = _this__u8e3s4[beginIndex];
    var b1 = _this__u8e3s4[beginIndex + 1 | 0];
    var tmp$ret$5;
    // Inline function 'okio.isUtf8Continuation' call
    var tmp$ret$4;
    // Inline function 'okio.and' call
    tmp$ret$4 = b1 & 192;
    tmp$ret$5 = tmp$ret$4 === 128;
    if (!tmp$ret$5) {
      yield_0(65533);
      return 1;
    }
    var b2 = _this__u8e3s4[beginIndex + 2 | 0];
    var tmp$ret$7;
    // Inline function 'okio.isUtf8Continuation' call
    var tmp$ret$6;
    // Inline function 'okio.and' call
    tmp$ret$6 = b2 & 192;
    tmp$ret$7 = tmp$ret$6 === 128;
    if (!tmp$ret$7) {
      yield_0(65533);
      return 2;
    }
    var b3 = _this__u8e3s4[beginIndex + 3 | 0];
    var tmp$ret$9;
    // Inline function 'okio.isUtf8Continuation' call
    var tmp$ret$8;
    // Inline function 'okio.and' call
    tmp$ret$8 = b3 & 192;
    tmp$ret$9 = tmp$ret$8 === 128;
    if (!tmp$ret$9) {
      yield_0(65533);
      return 3;
    }
    var codePoint = 3678080 ^ b3 ^ b2 << 6 ^ b1 << 12 ^ b0 << 18;
    if (codePoint > 1114111) {
      yield_0(65533);
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      yield_0(65533);
    } else if (codePoint < 65536) {
      yield_0(65533);
    } else {
      yield_0(codePoint);
    }
    return 4;
  }
  function isUtf8Continuation(byte) {
    var tmp$ret$0;
    // Inline function 'okio.and' call
    tmp$ret$0 = byte & 192;
    return tmp$ret$0 === 128;
  }
  function get_MASK_2BYTES() {
    return MASK_2BYTES;
  }
  var MASK_2BYTES;
  function get_MASK_3BYTES() {
    return MASK_3BYTES;
  }
  var MASK_3BYTES;
  function get_MASK_4BYTES() {
    return MASK_4BYTES;
  }
  var MASK_4BYTES;
  function processUtf16Chars(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        yield_0(new Char(numberToChar(b0)));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        while (index < endIndex ? _this__u8e3s4[index] >= 0 : false) {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          yield_0(new Char(numberToChar(_this__u8e3s4[tmp1])));
        }
      } else {
        var tmp$ret$0;
        // Inline function 'okio.shr' call
        tmp$ret$0 = b0 >> 5;
        if (tmp$ret$0 === -2) {
          var tmp = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var tmp0_process2Utf8Bytes = index;
            if (endIndex <= (tmp0_process2Utf8Bytes + 1 | 0)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp1__anonymous__uwfjfc = 65533;
              yield_0(new Char(numberToChar(tmp1__anonymous__uwfjfc)));
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp0_process2Utf8Bytes];
            var b1 = _this__u8e3s4[tmp0_process2Utf8Bytes + 1 | 0];
            var tmp$ret$3;
            // Inline function 'okio.isUtf8Continuation' call
            var tmp$ret$2;
            // Inline function 'okio.and' call
            tmp$ret$2 = b1 & 192;
            tmp$ret$3 = tmp$ret$2 === 128;
            if (!tmp$ret$3) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = 65533;
              yield_0(new Char(numberToChar(tmp2__anonymous__z9zvc9)));
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp3__anonymous__ufb84q = 65533;
              yield_0(new Char(numberToChar(tmp3__anonymous__ufb84q)));
            } else {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              yield_0(new Char(numberToChar(codePoint)));
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          var tmp$ret$4;
          // Inline function 'okio.shr' call
          tmp$ret$4 = b0 >> 4;
          if (tmp$ret$4 === -2) {
            var tmp_0 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var tmp4_process3Utf8Bytes = index;
              if (endIndex <= (tmp4_process3Utf8Bytes + 2 | 0)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp5__anonymous__kpxxpo = 65533;
                yield_0(new Char(numberToChar(tmp5__anonymous__kpxxpo)));
                var tmp_1;
                if (endIndex <= (tmp4_process3Utf8Bytes + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  var tmp$ret$6;
                  // Inline function 'okio.isUtf8Continuation' call
                  var tmp0_isUtf8Continuation = _this__u8e3s4[tmp4_process3Utf8Bytes + 1 | 0];
                  var tmp$ret$5;
                  // Inline function 'okio.and' call
                  tmp$ret$5 = tmp0_isUtf8Continuation & 192;
                  tmp$ret$6 = tmp$ret$5 === 128;
                  tmp_1 = !tmp$ret$6;
                }
                if (tmp_1) {
                  tmp$ret$7 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$7 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp4_process3Utf8Bytes];
              var b1_0 = _this__u8e3s4[tmp4_process3Utf8Bytes + 1 | 0];
              var tmp$ret$9;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$8;
              // Inline function 'okio.and' call
              tmp$ret$8 = b1_0 & 192;
              tmp$ret$9 = tmp$ret$8 === 128;
              if (!tmp$ret$9) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp6__anonymous__fv9ai5 = 65533;
                yield_0(new Char(numberToChar(tmp6__anonymous__fv9ai5)));
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp4_process3Utf8Bytes + 2 | 0];
              var tmp$ret$11;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$10;
              // Inline function 'okio.and' call
              tmp$ret$10 = b2 & 192;
              tmp$ret$11 = tmp$ret$10 === 128;
              if (!tmp$ret$11) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp7__anonymous__b0knam = 65533;
                yield_0(new Char(numberToChar(tmp7__anonymous__b0knam)));
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp8__anonymous__65w033 = 65533;
                yield_0(new Char(numberToChar(tmp8__anonymous__65w033)));
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp9__anonymous__1b7cvk = 65533;
                yield_0(new Char(numberToChar(tmp9__anonymous__1b7cvk)));
              } else {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                yield_0(new Char(numberToChar(codePoint_0)));
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            var tmp$ret$12;
            // Inline function 'okio.shr' call
            tmp$ret$12 = b0 >> 3;
            if (tmp$ret$12 === -2) {
              var tmp_2 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var tmp10_process4Utf8Bytes = index;
                if (endIndex <= (tmp10_process4Utf8Bytes + 3 | 0)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp11__anonymous__tkubxh = 65533;
                  if (!(tmp11__anonymous__tkubxh === 65533)) {
                    yield_0(new Char(numberToChar((tmp11__anonymous__tkubxh >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp11__anonymous__tkubxh & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  var tmp_3;
                  if (endIndex <= (tmp10_process4Utf8Bytes + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    var tmp$ret$14;
                    // Inline function 'okio.isUtf8Continuation' call
                    var tmp0_isUtf8Continuation_0 = _this__u8e3s4[tmp10_process4Utf8Bytes + 1 | 0];
                    var tmp$ret$13;
                    // Inline function 'okio.and' call
                    tmp$ret$13 = tmp0_isUtf8Continuation_0 & 192;
                    tmp$ret$14 = tmp$ret$13 === 128;
                    tmp_3 = !tmp$ret$14;
                  }
                  if (tmp_3) {
                    tmp$ret$15 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp10_process4Utf8Bytes + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      var tmp$ret$17;
                      // Inline function 'okio.isUtf8Continuation' call
                      var tmp1_isUtf8Continuation = _this__u8e3s4[tmp10_process4Utf8Bytes + 2 | 0];
                      var tmp$ret$16;
                      // Inline function 'okio.and' call
                      tmp$ret$16 = tmp1_isUtf8Continuation & 192;
                      tmp$ret$17 = tmp$ret$16 === 128;
                      tmp_4 = !tmp$ret$17;
                    }
                    if (tmp_4) {
                      tmp$ret$15 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$15 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp10_process4Utf8Bytes];
                var b1_1 = _this__u8e3s4[tmp10_process4Utf8Bytes + 1 | 0];
                var tmp$ret$19;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$18;
                // Inline function 'okio.and' call
                tmp$ret$18 = b1_1 & 192;
                tmp$ret$19 = tmp$ret$18 === 128;
                if (!tmp$ret$19) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp12__anonymous__oq5opy = 65533;
                  if (!(tmp12__anonymous__oq5opy === 65533)) {
                    yield_0(new Char(numberToChar((tmp12__anonymous__oq5opy >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp12__anonymous__oq5opy & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp10_process4Utf8Bytes + 2 | 0];
                var tmp$ret$21;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$20;
                // Inline function 'okio.and' call
                tmp$ret$20 = b2_0 & 192;
                tmp$ret$21 = tmp$ret$20 === 128;
                if (!tmp$ret$21) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp13__anonymous__jvh1if = 65533;
                  if (!(tmp13__anonymous__jvh1if === 65533)) {
                    yield_0(new Char(numberToChar((tmp13__anonymous__jvh1if >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp13__anonymous__jvh1if & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp10_process4Utf8Bytes + 3 | 0];
                var tmp$ret$23;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$22;
                // Inline function 'okio.and' call
                tmp$ret$22 = b3 & 192;
                tmp$ret$23 = tmp$ret$22 === 128;
                if (!tmp$ret$23) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp14__anonymous__f0seaw = 65533;
                  if (!(tmp14__anonymous__f0seaw === 65533)) {
                    yield_0(new Char(numberToChar((tmp14__anonymous__f0seaw >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp14__anonymous__f0seaw & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp15__anonymous__a63r3d = 65533;
                  if (!(tmp15__anonymous__a63r3d === 65533)) {
                    yield_0(new Char(numberToChar((tmp15__anonymous__a63r3d >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp15__anonymous__a63r3d & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp16__anonymous__5bf3vu = 65533;
                  if (!(tmp16__anonymous__5bf3vu === 65533)) {
                    yield_0(new Char(numberToChar((tmp16__anonymous__5bf3vu >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp16__anonymous__5bf3vu & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp17__anonymous__gqgob = 65533;
                  if (!(tmp17__anonymous__gqgob === 65533)) {
                    yield_0(new Char(numberToChar((tmp17__anonymous__gqgob >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((tmp17__anonymous__gqgob & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                } else {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(codePoint_1 === 65533)) {
                    yield_0(new Char(numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((codePoint_1 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              yield_0(new Char(_Char___init__impl__6a9atx(65533)));
              var tmp2 = index;
              index = tmp2 + 1 | 0;
            }
          }
        }
      }
    }
  }
  function get_HIGH_SURROGATE_HEADER() {
    return HIGH_SURROGATE_HEADER;
  }
  var HIGH_SURROGATE_HEADER;
  function get_LOG_SURROGATE_HEADER() {
    return LOG_SURROGATE_HEADER;
  }
  var LOG_SURROGATE_HEADER;
  function get_REPLACEMENT_CHARACTER() {
    return REPLACEMENT_CHARACTER;
  }
  var REPLACEMENT_CHARACTER;
  function get_HEX_DIGIT_BYTES() {
    init_properties__Buffer_kt_t3kap3();
    return HEX_DIGIT_BYTES;
  }
  var HEX_DIGIT_BYTES;
  function commonCopyTo(_this__u8e3s4, out, offset, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    var offset_0 = offset;
    var byteCount_0 = byteCount;
    checkOffsetAndCount(_this__u8e3s4.size_1, offset_0, byteCount_0);
    if (byteCount_0.equals(new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_this = out;
    tmp0_this.size_1 = tmp0_this.size_1.plus_u6jwas_k$(byteCount_0);
    var s = _this__u8e3s4.head_1;
    while (offset_0.compareTo_n4fqi2_k$(toLong(ensureNotNull(s).limit_1 - s.pos_1 | 0)) >= 0) {
      offset_0 = offset_0.minus_llf5ei_k$(toLong(s.limit_1 - s.pos_1 | 0));
      s = s.next_1;
    }
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).sharedCopy_timhza_k$();
      var tmp1_this = copy;
      tmp1_this.pos_1 = tmp1_this.pos_1 + offset_0.toInt_1tsl84_k$() | 0;
      var tmp = copy;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = copy.pos_1 + byteCount_0.toInt_1tsl84_k$() | 0;
      var tmp1_minOf = copy.limit_1;
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      tmp.limit_1 = tmp$ret$0;
      if (out.head_1 == null) {
        copy.prev_1 = copy;
        copy.next_1 = copy.prev_1;
        out.head_1 = copy.next_1;
      } else {
        ensureNotNull(ensureNotNull(out.head_1).prev_1).push_toq0no_k$(copy);
      }
      byteCount_0 = byteCount_0.minus_llf5ei_k$(toLong(copy.limit_1 - copy.pos_1 | 0));
      offset_0 = new Long(0, 0);
      s = s.next_1;
    }
    return _this__u8e3s4;
  }
  function commonGet(_this__u8e3s4, pos) {
    init_properties__Buffer_kt_t3kap3();
    checkOffsetAndCount(_this__u8e3s4.size_1, pos, new Long(1, 0));
    var tmp$ret$0;
    // Inline function 'okio.internal.seek' call
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return ensureNotNull(null).data_1[numberToLong(null.pos_1).plus_u6jwas_k$(pos).minus_llf5ei_k$(new Long(-1, -1)).toInt_1tsl84_k$()];
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    if (_this__u8e3s4.size_1.minus_llf5ei_k$(pos).compareTo_n4fqi2_k$(pos) < 0) {
      var offset = _this__u8e3s4.size_1;
      while (offset.compareTo_n4fqi2_k$(pos) > 0) {
        s = ensureNotNull(s.prev_1);
        offset = offset.minus_llf5ei_k$(toLong(s.limit_1 - s.pos_1 | 0));
      }
      var tmp2__anonymous__z9zvc9 = s;
      var tmp3__anonymous__ufb84q = offset;
      return ensureNotNull(tmp2__anonymous__z9zvc9).data_1[numberToLong(tmp2__anonymous__z9zvc9.pos_1).plus_u6jwas_k$(pos).minus_llf5ei_k$(tmp3__anonymous__ufb84q).toInt_1tsl84_k$()];
    } else {
      var offset_0 = new Long(0, 0);
      $l$loop: while (true) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = offset_0;
        var tmp1_plus = s.limit_1 - s.pos_1 | 0;
        tmp$ret$1 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
        var nextOffset = tmp$ret$1;
        if (nextOffset.compareTo_n4fqi2_k$(pos) > 0)
          break $l$loop;
        s = ensureNotNull(s.next_1);
        offset_0 = nextOffset;
      }
      var tmp4__anonymous__pkmkx7 = s;
      var tmp5__anonymous__kpxxpo = offset_0;
      return ensureNotNull(tmp4__anonymous__pkmkx7).data_1[numberToLong(tmp4__anonymous__pkmkx7.pos_1).plus_u6jwas_k$(pos).minus_llf5ei_k$(tmp5__anonymous__kpxxpo).toInt_1tsl84_k$()];
    }
  }
  function commonCompleteSegmentByteCount(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    var result = _this__u8e3s4.size_1;
    if (result.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(ensureNotNull(_this__u8e3s4.head_1).prev_1);
    var tmp;
    var tmp_0 = tail.limit_1;
    Companion_getInstance_1();
    if (tmp_0 < 8192) {
      tmp = tail.owner_1;
    } else {
      tmp = false;
    }
    if (tmp) {
      result = result.minus_llf5ei_k$(toLong(tail.limit_1 - tail.pos_1 | 0));
    }
    return result;
  }
  function commonReadByte(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var segment = ensureNotNull(_this__u8e3s4.head_1);
    var pos = segment.pos_1;
    var limit = segment.limit_1;
    var data = segment.data_1;
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var b = data[tmp0];
    var tmp1_this = _this__u8e3s4;
    tmp1_this.size_1 = tmp1_this.size_1.minus_llf5ei_k$(new Long(1, 0));
    if (pos === limit) {
      _this__u8e3s4.head_1 = segment.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(segment);
    } else {
      segment.pos_1 = pos;
    }
    return b;
  }
  function commonReadShort(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(new Long(2, 0)) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var segment = ensureNotNull(_this__u8e3s4.head_1);
    var pos = segment.pos_1;
    var limit = segment.limit_1;
    if ((limit - pos | 0) < 2) {
      var tmp$ret$0;
      // Inline function 'okio.and' call
      var tmp0_and = _this__u8e3s4.readByte_ectjk2_k$();
      tmp$ret$0 = tmp0_and & 255;
      var tmp = tmp$ret$0 << 8;
      var tmp$ret$1;
      // Inline function 'okio.and' call
      var tmp1_and = _this__u8e3s4.readByte_ectjk2_k$();
      tmp$ret$1 = tmp1_and & 255;
      var s = tmp | tmp$ret$1;
      return toShort(s);
    }
    var data = segment.data_1;
    var tmp$ret$2;
    // Inline function 'okio.and' call
    var tmp1 = pos;
    pos = tmp1 + 1 | 0;
    var tmp2_and = data[tmp1];
    tmp$ret$2 = tmp2_and & 255;
    var tmp_0 = tmp$ret$2 << 8;
    var tmp$ret$3;
    // Inline function 'okio.and' call
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var tmp3_and = data[tmp0];
    tmp$ret$3 = tmp3_and & 255;
    var s_0 = tmp_0 | tmp$ret$3;
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(new Long(2, 0));
    if (pos === limit) {
      _this__u8e3s4.head_1 = segment.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(segment);
    } else {
      segment.pos_1 = pos;
    }
    return toShort(s_0);
  }
  function commonReadInt(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(new Long(4, 0)) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var segment = ensureNotNull(_this__u8e3s4.head_1);
    var pos = segment.pos_1;
    var limit = segment.limit_1;
    if (toLong(limit - pos | 0).compareTo_n4fqi2_k$(new Long(4, 0)) < 0) {
      var tmp$ret$0;
      // Inline function 'okio.and' call
      var tmp0_and = _this__u8e3s4.readByte_ectjk2_k$();
      tmp$ret$0 = tmp0_and & 255;
      var tmp = tmp$ret$0 << 24;
      var tmp$ret$1;
      // Inline function 'okio.and' call
      var tmp1_and = _this__u8e3s4.readByte_ectjk2_k$();
      tmp$ret$1 = tmp1_and & 255;
      var tmp_0 = tmp | tmp$ret$1 << 16;
      var tmp$ret$2;
      // Inline function 'okio.and' call
      var tmp2_and = _this__u8e3s4.readByte_ectjk2_k$();
      tmp$ret$2 = tmp2_and & 255;
      var tmp_1 = tmp_0 | tmp$ret$2 << 8;
      var tmp$ret$3;
      // Inline function 'okio.and' call
      var tmp3_and = _this__u8e3s4.readByte_ectjk2_k$();
      tmp$ret$3 = tmp3_and & 255;
      return tmp_1 | tmp$ret$3;
    }
    var data = segment.data_1;
    var tmp$ret$4;
    // Inline function 'okio.and' call
    var tmp3 = pos;
    pos = tmp3 + 1 | 0;
    var tmp4_and = data[tmp3];
    tmp$ret$4 = tmp4_and & 255;
    var tmp_2 = tmp$ret$4 << 24;
    var tmp$ret$5;
    // Inline function 'okio.and' call
    var tmp2 = pos;
    pos = tmp2 + 1 | 0;
    var tmp5_and = data[tmp2];
    tmp$ret$5 = tmp5_and & 255;
    var tmp_3 = tmp_2 | tmp$ret$5 << 16;
    var tmp$ret$6;
    // Inline function 'okio.and' call
    var tmp1 = pos;
    pos = tmp1 + 1 | 0;
    var tmp6_and = data[tmp1];
    tmp$ret$6 = tmp6_and & 255;
    var tmp_4 = tmp_3 | tmp$ret$6 << 8;
    var tmp$ret$7;
    // Inline function 'okio.and' call
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var tmp7_and = data[tmp0];
    tmp$ret$7 = tmp7_and & 255;
    var i = tmp_4 | tmp$ret$7;
    var tmp4_this = _this__u8e3s4;
    tmp4_this.size_1 = tmp4_this.size_1.minus_llf5ei_k$(new Long(4, 0));
    if (pos === limit) {
      _this__u8e3s4.head_1 = segment.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(segment);
    } else {
      segment.pos_1 = pos;
    }
    return i;
  }
  function commonReadLong(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(new Long(8, 0)) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var segment = ensureNotNull(_this__u8e3s4.head_1);
    var pos = segment.pos_1;
    var limit = segment.limit_1;
    if (toLong(limit - pos | 0).compareTo_n4fqi2_k$(new Long(8, 0)) < 0) {
      var tmp$ret$0;
      // Inline function 'okio.and' call
      var tmp0_and = _this__u8e3s4.readInt_hv8cxl_k$();
      tmp$ret$0 = toLong(tmp0_and).and_jhajnj_k$(new Long(-1, 0));
      var tmp = tmp$ret$0.shl_po5ip6_k$(32);
      var tmp$ret$1;
      // Inline function 'okio.and' call
      var tmp1_and = _this__u8e3s4.readInt_hv8cxl_k$();
      tmp$ret$1 = toLong(tmp1_and).and_jhajnj_k$(new Long(-1, 0));
      return tmp.or_s401rn_k$(tmp$ret$1);
    }
    var data = segment.data_1;
    var tmp$ret$2;
    // Inline function 'okio.and' call
    var tmp7 = pos;
    pos = tmp7 + 1 | 0;
    var tmp2_and = data[tmp7];
    tmp$ret$2 = toLong(tmp2_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_0 = tmp$ret$2.shl_po5ip6_k$(56);
    var tmp$ret$3;
    // Inline function 'okio.and' call
    var tmp6 = pos;
    pos = tmp6 + 1 | 0;
    var tmp3_and = data[tmp6];
    tmp$ret$3 = toLong(tmp3_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_1 = tmp_0.or_s401rn_k$(tmp$ret$3.shl_po5ip6_k$(48));
    var tmp$ret$4;
    // Inline function 'okio.and' call
    var tmp5 = pos;
    pos = tmp5 + 1 | 0;
    var tmp4_and = data[tmp5];
    tmp$ret$4 = toLong(tmp4_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_2 = tmp_1.or_s401rn_k$(tmp$ret$4.shl_po5ip6_k$(40));
    var tmp$ret$5;
    // Inline function 'okio.and' call
    var tmp4 = pos;
    pos = tmp4 + 1 | 0;
    var tmp5_and = data[tmp4];
    tmp$ret$5 = toLong(tmp5_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_3 = tmp_2.or_s401rn_k$(tmp$ret$5.shl_po5ip6_k$(32));
    var tmp$ret$6;
    // Inline function 'okio.and' call
    var tmp3 = pos;
    pos = tmp3 + 1 | 0;
    var tmp6_and = data[tmp3];
    tmp$ret$6 = toLong(tmp6_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_4 = tmp_3.or_s401rn_k$(tmp$ret$6.shl_po5ip6_k$(24));
    var tmp$ret$7;
    // Inline function 'okio.and' call
    var tmp2 = pos;
    pos = tmp2 + 1 | 0;
    var tmp7_and = data[tmp2];
    tmp$ret$7 = toLong(tmp7_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_5 = tmp_4.or_s401rn_k$(tmp$ret$7.shl_po5ip6_k$(16));
    var tmp$ret$8;
    // Inline function 'okio.and' call
    var tmp1 = pos;
    pos = tmp1 + 1 | 0;
    var tmp8_and = data[tmp1];
    tmp$ret$8 = toLong(tmp8_and).and_jhajnj_k$(new Long(255, 0));
    var tmp_6 = tmp_5.or_s401rn_k$(tmp$ret$8.shl_po5ip6_k$(8));
    var tmp$ret$9;
    // Inline function 'okio.and' call
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var tmp9_and = data[tmp0];
    tmp$ret$9 = toLong(tmp9_and).and_jhajnj_k$(new Long(255, 0));
    var v = tmp_6.or_s401rn_k$(tmp$ret$9);
    var tmp8_this = _this__u8e3s4;
    tmp8_this.size_1 = tmp8_this.size_1.minus_llf5ei_k$(new Long(8, 0));
    if (pos === limit) {
      _this__u8e3s4.head_1 = segment.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(segment);
    } else {
      segment.pos_1 = pos;
    }
    return v;
  }
  function commonReadDecimalLong(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var value = new Long(0, 0);
    var seen = 0;
    var negative = false;
    var done = false;
    var overflowDigit = new Long(-7, -1);
    do {
      var segment = ensureNotNull(_this__u8e3s4.head_1);
      var data = segment.data_1;
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      $l$loop: while (pos < limit) {
        var b = data[pos];
        var tmp;
        var tmp_0 = b;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        if (tmp_0 >= toByte(tmp$ret$0)) {
          var tmp_1 = b;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 57;
          tmp = tmp_1 <= toByte(tmp$ret$1);
        } else {
          tmp = false;
        }
        if (tmp) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 48;
          var digit = toByte(tmp$ret$2) - b;
          if (value.compareTo_n4fqi2_k$(new Long(858993460, -214748365)) < 0 ? true : value.equals(new Long(858993460, -214748365)) ? toLong(digit).compareTo_n4fqi2_k$(overflowDigit) < 0 : false) {
            var buffer = (new Buffer()).writeDecimalLong_mc98i0_k$(value).writeByte_fjn38a_k$(b);
            if (!negative) {
              buffer.readByte_ectjk2_k$();
            }
            throw NumberFormatException_init_$Create$('Number too large: ' + buffer.readUtf8_echivt_k$());
          }
          value = value.times_2zfqpc_k$(new Long(10, 0));
          value = value.plus_u6jwas_k$(toLong(digit));
        } else {
          var tmp_2;
          var tmp_3 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 45;
          if (tmp_3 === toByte(tmp$ret$3)) {
            tmp_2 = seen === 0;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            negative = true;
            var tmp$ret$4;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = overflowDigit;
            tmp$ret$4 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
            overflowDigit = tmp$ret$4;
          } else {
            done = true;
            break $l$loop;
          }
        }
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var tmp1 = seen;
        seen = tmp1 + 1 | 0;
      }
      if (pos === limit) {
        _this__u8e3s4.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
    }
     while (!done ? !(_this__u8e3s4.head_1 == null) : false);
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(toLong(seen));
    var minimumSeen = negative ? 2 : 1;
    if (seen < minimumSeen) {
      if (_this__u8e3s4.size_1.equals(new Long(0, 0))) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var expected = negative ? 'Expected a digit' : "Expected a digit or '-'";
      throw NumberFormatException_init_$Create$(expected + ' but was 0x' + toHexString(_this__u8e3s4.get_ec5on4_k$(new Long(0, 0))));
    }
    return negative ? value : value.unaryMinus_6uz0qp_k$();
  }
  function commonReadHexadecimalUnsignedLong(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var value = new Long(0, 0);
    var seen = 0;
    var done = false;
    do {
      var segment = ensureNotNull(_this__u8e3s4.head_1);
      var data = segment.data_1;
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      $l$loop: while (pos < limit) {
        var digit;
        var b = data[pos];
        var tmp;
        var tmp_0 = b;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        if (tmp_0 >= toByte(tmp$ret$0)) {
          var tmp_1 = b;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 57;
          tmp = tmp_1 <= toByte(tmp$ret$1);
        } else {
          tmp = false;
        }
        if (tmp) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 48;
          digit = b - toByte(tmp$ret$2);
        } else {
          var tmp_2;
          var tmp_3 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 97;
          if (tmp_3 >= toByte(tmp$ret$3)) {
            var tmp_4 = b;
            var tmp$ret$4;
            // Inline function 'kotlin.code' call
            tmp$ret$4 = 102;
            tmp_2 = tmp_4 <= toByte(tmp$ret$4);
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            var tmp$ret$5;
            // Inline function 'kotlin.code' call
            tmp$ret$5 = 97;
            digit = b - toByte(tmp$ret$5) + 10 | 0;
          } else {
            var tmp_5;
            var tmp_6 = b;
            var tmp$ret$6;
            // Inline function 'kotlin.code' call
            tmp$ret$6 = 65;
            if (tmp_6 >= toByte(tmp$ret$6)) {
              var tmp_7 = b;
              var tmp$ret$7;
              // Inline function 'kotlin.code' call
              tmp$ret$7 = 70;
              tmp_5 = tmp_7 <= toByte(tmp$ret$7);
            } else {
              tmp_5 = false;
            }
            if (tmp_5) {
              var tmp$ret$8;
              // Inline function 'kotlin.code' call
              tmp$ret$8 = 65;
              digit = b - toByte(tmp$ret$8) + 10 | 0;
            } else {
              if (seen === 0) {
                throw NumberFormatException_init_$Create$('Expected leading [0-9a-fA-F] character but was 0x' + toHexString(b));
              }
              done = true;
              break $l$loop;
            }
          }
        }
        if (!value.and_jhajnj_k$(new Long(0, -268435456)).equals(new Long(0, 0))) {
          var buffer = (new Buffer()).writeHexadecimalUnsignedLong_v789p5_k$(value).writeByte_fjn38a_k$(b);
          throw NumberFormatException_init_$Create$('Number too large: ' + buffer.readUtf8_echivt_k$());
        }
        value = value.shl_po5ip6_k$(4);
        value = value.or_s401rn_k$(toLong(digit));
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var tmp1 = seen;
        seen = tmp1 + 1 | 0;
      }
      if (pos === limit) {
        _this__u8e3s4.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
    }
     while (!done ? !(_this__u8e3s4.head_1 == null) : false);
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(toLong(seen));
    return value;
  }
  function commonReadByteString(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    return _this__u8e3s4.readByteString_h2nnh5_k$(_this__u8e3s4.size_1);
  }
  function commonReadByteString_0(_this__u8e3s4, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? byteCount.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
      tmp$ret$0 = 'byteCount: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    if (byteCount.compareTo_n4fqi2_k$(new Long(4096, 0)) >= 0) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = _this__u8e3s4.snapshot_80qwxv_k$(byteCount.toInt_1tsl84_k$());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
      _this__u8e3s4.skip_vl0dd4_k$(byteCount);
      tmp$ret$1 = tmp1_also;
      return tmp$ret$1;
    } else {
      return new ByteString(_this__u8e3s4.readByteArray_a7crqd_k$(byteCount));
    }
  }
  function commonReadFully(_this__u8e3s4, sink, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      sink.write_x0zrut_k$(_this__u8e3s4, _this__u8e3s4.size_1);
      throw EOFException_init_$Create$(null, 1, null);
    }
    sink.write_x0zrut_k$(_this__u8e3s4, byteCount);
  }
  function commonReadAll(_this__u8e3s4, sink) {
    init_properties__Buffer_kt_t3kap3();
    var byteCount = _this__u8e3s4.size_1;
    if (byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      sink.write_x0zrut_k$(_this__u8e3s4, byteCount);
    }
    return byteCount;
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? byteCount.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadUtf8.<anonymous>' call
      tmp$ret$0 = 'byteCount: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    if (byteCount.equals(new Long(0, 0)))
      return '';
    var s = ensureNotNull(_this__u8e3s4.head_1);
    if (numberToLong(s.pos_1).plus_u6jwas_k$(byteCount).compareTo_n4fqi2_k$(toLong(s.limit_1)) > 0) {
      var tmp = _this__u8e3s4.readByteArray_a7crqd_k$(byteCount);
      return commonToUtf8String$default(tmp, 0, 0, 3, null);
    }
    var result = commonToUtf8String(s.data_1, s.pos_1, s.pos_1 + byteCount.toInt_1tsl84_k$() | 0);
    var tmp0_this = s;
    tmp0_this.pos_1 = tmp0_this.pos_1 + byteCount.toInt_1tsl84_k$() | 0;
    var tmp1_this = _this__u8e3s4;
    tmp1_this.size_1 = tmp1_this.size_1.minus_llf5ei_k$(byteCount);
    if (s.pos_1 === s.limit_1) {
      _this__u8e3s4.head_1 = s.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(s);
    }
    return result;
  }
  function commonReadUtf8Line(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 10;
    var newline = _this__u8e3s4.indexOf_q1ozk1_k$(toByte(tmp$ret$0));
    return !newline.equals(new Long(-1, -1)) ? readUtf8Line(_this__u8e3s4, newline) : !_this__u8e3s4.size_1.equals(new Long(0, 0)) ? _this__u8e3s4.readUtf8_y4u7qn_k$(_this__u8e3s4.size_1) : null;
  }
  function commonReadUtf8LineStrict(_this__u8e3s4, limit) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp0_require = limit.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
      tmp$ret$0 = 'limit < 0: ' + toString(limit);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    Companion_getInstance();
    if (limit.equals(new Long(-1, 2147483647))) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = limit.plus_u6jwas_k$(new Long(1, 0));
    }
    var scanLength = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 10;
    var newline = _this__u8e3s4.indexOf_b1qwk3_k$(toByte(tmp$ret$1), new Long(0, 0), scanLength);
    if (!newline.equals(new Long(-1, -1)))
      return readUtf8Line(_this__u8e3s4, newline);
    var tmp_0;
    var tmp_1;
    if (scanLength.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
      var tmp$ret$2;
      // Inline function 'kotlin.Long.minus' call
      tmp$ret$2 = scanLength.minus_llf5ei_k$(new Long(1, 0));
      var tmp_2 = _this__u8e3s4.get_ec5on4_k$(tmp$ret$2);
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 13;
      tmp_1 = tmp_2 === toByte(tmp$ret$3);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_3 = _this__u8e3s4.get_ec5on4_k$(scanLength);
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 10;
      tmp_0 = tmp_3 === toByte(tmp$ret$4);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      return readUtf8Line(_this__u8e3s4, scanLength);
    }
    var data = new Buffer();
    var tmp_4 = new Long(0, 0);
    var tmp$ret$6;
    // Inline function 'okio.minOf' call
    var tmp1_minOf = _this__u8e3s4.size_1;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = new Long(32, 0);
    tmp$ret$5 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    tmp$ret$6 = tmp$ret$5;
    _this__u8e3s4.copyTo_w2d2hb_k$(data, tmp_4, tmp$ret$6);
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp2_minOf = _this__u8e3s4.size_1;
    tmp$ret$7 = tmp2_minOf.compareTo_n4fqi2_k$(limit) <= 0 ? tmp2_minOf : limit;
    throw new EOFException('\\n not found: limit=' + toString(tmp$ret$7) + ' content=' + data.readByteString_nzt46n_k$().hex_27mj_k$() + '\u2026');
  }
  function commonReadUtf8CodePoint(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var b0 = _this__u8e3s4.get_ec5on4_k$(new Long(0, 0));
    var codePoint;
    var byteCount;
    var min;
    var tmp$ret$0;
    // Inline function 'okio.and' call
    tmp$ret$0 = b0 & 128;
    if (tmp$ret$0 === 0) {
      var tmp$ret$1;
      // Inline function 'okio.and' call
      tmp$ret$1 = b0 & 127;
      codePoint = tmp$ret$1;
      byteCount = 1;
      min = 0;
    } else {
      var tmp$ret$2;
      // Inline function 'okio.and' call
      tmp$ret$2 = b0 & 224;
      if (tmp$ret$2 === 192) {
        var tmp$ret$3;
        // Inline function 'okio.and' call
        tmp$ret$3 = b0 & 31;
        codePoint = tmp$ret$3;
        byteCount = 2;
        min = 128;
      } else {
        var tmp$ret$4;
        // Inline function 'okio.and' call
        tmp$ret$4 = b0 & 240;
        if (tmp$ret$4 === 224) {
          var tmp$ret$5;
          // Inline function 'okio.and' call
          tmp$ret$5 = b0 & 15;
          codePoint = tmp$ret$5;
          byteCount = 3;
          min = 2048;
        } else {
          var tmp$ret$6;
          // Inline function 'okio.and' call
          tmp$ret$6 = b0 & 248;
          if (tmp$ret$6 === 240) {
            var tmp$ret$7;
            // Inline function 'okio.and' call
            tmp$ret$7 = b0 & 7;
            codePoint = tmp$ret$7;
            byteCount = 4;
            min = 65536;
          } else {
            _this__u8e3s4.skip_vl0dd4_k$(new Long(1, 0));
            return get_REPLACEMENT_CODE_POINT();
          }
        }
      }
    }
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(toLong(byteCount)) < 0) {
      throw new EOFException('size < ' + byteCount + ': ' + toString(_this__u8e3s4.size_1) + ' (to read code point prefixed 0x' + toHexString(b0) + ')');
    }
    var inductionVariable = 1;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _this__u8e3s4.get_ec5on4_k$(toLong(i));
        var tmp$ret$8;
        // Inline function 'okio.and' call
        tmp$ret$8 = b & 192;
        if (tmp$ret$8 === 128) {
          codePoint = codePoint << 6;
          var tmp = codePoint;
          var tmp$ret$9;
          // Inline function 'okio.and' call
          tmp$ret$9 = b & 63;
          codePoint = tmp | tmp$ret$9;
        } else {
          _this__u8e3s4.skip_vl0dd4_k$(toLong(i));
          return get_REPLACEMENT_CODE_POINT();
        }
      }
       while (inductionVariable < byteCount);
    _this__u8e3s4.skip_vl0dd4_k$(toLong(byteCount));
    var tmp_0;
    if (codePoint > 1114111) {
      tmp_0 = get_REPLACEMENT_CODE_POINT();
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      tmp_0 = get_REPLACEMENT_CODE_POINT();
    } else if (codePoint < min) {
      tmp_0 = get_REPLACEMENT_CODE_POINT();
    } else {
      tmp_0 = codePoint;
    }
    return tmp_0;
  }
  function commonSelect(_this__u8e3s4, options) {
    init_properties__Buffer_kt_t3kap3();
    var index = selectPrefix$default(_this__u8e3s4, options, false, 2, null);
    if (index === -1)
      return -1;
    var selectedSize = options.byteStrings_1[index].get_size_woubt6_k$();
    _this__u8e3s4.skip_vl0dd4_k$(toLong(selectedSize));
    return index;
  }
  function commonReadByteArray(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    return _this__u8e3s4.readByteArray_a7crqd_k$(_this__u8e3s4.size_1);
  }
  function commonReadByteArray_0(_this__u8e3s4, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? byteCount.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadByteArray.<anonymous>' call
      tmp$ret$0 = 'byteCount: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var result = new Int8Array(byteCount.toInt_1tsl84_k$());
    _this__u8e3s4.readFully_rpc466_k$(result);
    return result;
  }
  function commonRead(_this__u8e3s4, sink) {
    init_properties__Buffer_kt_t3kap3();
    return _this__u8e3s4.read_43uq31_k$(sink, 0, sink.length);
  }
  function commonReadFully_0(_this__u8e3s4, sink) {
    init_properties__Buffer_kt_t3kap3();
    var offset = 0;
    while (offset < sink.length) {
      var read = _this__u8e3s4.read_43uq31_k$(sink, offset, sink.length - offset | 0);
      if (read === -1) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      offset = offset + read | 0;
    }
  }
  function commonRead_0(_this__u8e3s4, sink, offset, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = s.limit_1 - s.pos_1 | 0;
    tmp$ret$0 = Math.min(byteCount, tmp0_minOf);
    var toCopy = tmp$ret$0;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = s.data_1;
    var tmp2_copyInto = s.pos_1;
    var tmp3_copyInto = s.pos_1 + toCopy | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1_copyInto;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = sink;
    tmp$ret$4 = tmp$ret$3;
    arrayCopy(tmp_0, tmp$ret$4, offset, tmp2_copyInto, tmp3_copyInto);
    tmp$ret$5 = sink;
    var tmp1_this = s;
    tmp1_this.pos_1 = tmp1_this.pos_1 + toCopy | 0;
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(toLong(toCopy));
    if (s.pos_1 === s.limit_1) {
      _this__u8e3s4.head_1 = s.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(s);
    }
    return toCopy;
  }
  function commonClear(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    return _this__u8e3s4.skip_vl0dd4_k$(_this__u8e3s4.size_1);
  }
  function commonSkip(_this__u8e3s4, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    var byteCount_0 = byteCount;
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = _this__u8e3s4.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$(null, 1, null);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp$ret$1;
      // Inline function 'okio.minOf' call
      var tmp0_minOf = byteCount_0;
      var tmp1_minOf = head.limit_1 - head.pos_1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf_0 = toLong(tmp1_minOf);
      tmp$ret$0 = tmp0_minOf.compareTo_n4fqi2_k$(tmp0_minOf_0) <= 0 ? tmp0_minOf : tmp0_minOf_0;
      tmp$ret$1 = tmp$ret$0;
      var toSkip = tmp$ret$1.toInt_1tsl84_k$();
      var tmp1_this = _this__u8e3s4;
      tmp1_this.size_1 = tmp1_this.size_1.minus_llf5ei_k$(toLong(toSkip));
      byteCount_0 = byteCount_0.minus_llf5ei_k$(toLong(toSkip));
      var tmp2_this = head;
      tmp2_this.pos_1 = tmp2_this.pos_1 + toSkip | 0;
      if (head.pos_1 === head.limit_1) {
        _this__u8e3s4.head_1 = head.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(head);
      }
    }
  }
  function commonWrite(_this__u8e3s4, byteString, offset, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    byteString.write_yix3zv_k$(_this__u8e3s4, offset, byteCount);
    return _this__u8e3s4;
  }
  function commonWritableSegment(_this__u8e3s4, minimumCapacity) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp;
    if (minimumCapacity >= 1) {
      Companion_getInstance_1();
      tmp = minimumCapacity <= 8192;
    } else {
      tmp = false;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWritableSegment.<anonymous>' call
      tmp$ret$0 = 'unexpected capacity';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.head_1 == null) {
      var result = SegmentPool_getInstance().take_2451j_k$();
      _this__u8e3s4.head_1 = result;
      result.prev_1 = result;
      result.next_1 = result;
      return result;
    }
    var tail = ensureNotNull(_this__u8e3s4.head_1).prev_1;
    var tmp_0;
    var tmp_1 = ensureNotNull(tail).limit_1 + minimumCapacity | 0;
    Companion_getInstance_1();
    if (tmp_1 > 8192) {
      tmp_0 = true;
    } else {
      tmp_0 = !tail.owner_1;
    }
    if (tmp_0) {
      tail = tail.push_toq0no_k$(SegmentPool_getInstance().take_2451j_k$());
    }
    return tail;
  }
  function commonWriteUtf8(_this__u8e3s4, string, beginIndex, endIndex) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp0_require = beginIndex >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$0 = 'beginIndex < 0: ' + beginIndex;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = endIndex >= beginIndex;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$1 = 'endIndex < beginIndex: ' + endIndex + ' < ' + beginIndex;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = endIndex <= string.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$2 = 'endIndex > string.length: ' + endIndex + ' > ' + string.length;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var i = beginIndex;
    while (i < endIndex) {
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      var tmp3__get_code__enalup = charSequenceGet(string, i);
      tmp$ret$3 = Char__toInt_impl_vasixd(tmp3__get_code__enalup);
      var c = tmp$ret$3;
      if (c < 128) {
        var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(1);
        var data = tail.data_1;
        var segmentOffset = tail.limit_1 - i | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        Companion_getInstance_1();
        var tmp4_minOf = 8192 - segmentOffset | 0;
        tmp$ret$4 = Math.min(endIndex, tmp4_minOf);
        var runLimit = tmp$ret$4;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        data[segmentOffset + tmp0 | 0] = toByte(c);
        $l$loop: while (i < runLimit) {
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          var tmp5__get_code__iwzzkv = charSequenceGet(string, i);
          tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
          c = tmp$ret$5;
          if (c >= 128)
            break $l$loop;
          var tmp1 = i;
          i = tmp1 + 1 | 0;
          data[segmentOffset + tmp1 | 0] = toByte(c);
        }
        var runSize = (i + segmentOffset | 0) - tail.limit_1 | 0;
        var tmp2_this = tail;
        tmp2_this.limit_1 = tmp2_this.limit_1 + runSize | 0;
        var tmp3_this = _this__u8e3s4;
        tmp3_this.size_1 = tmp3_this.size_1.plus_u6jwas_k$(toLong(runSize));
      } else if (c < 2048) {
        var tail_0 = _this__u8e3s4.writableSegment_g5a3pu_k$(2);
        tail_0.data_1[tail_0.limit_1] = toByte(c >> 6 | 192);
        tail_0.data_1[tail_0.limit_1 + 1 | 0] = toByte(c & 63 | 128);
        var tmp4_this = tail_0;
        tmp4_this.limit_1 = tmp4_this.limit_1 + 2 | 0;
        var tmp5_this = _this__u8e3s4;
        tmp5_this.size_1 = tmp5_this.size_1.plus_u6jwas_k$(new Long(2, 0));
        var tmp6 = i;
        i = tmp6 + 1 | 0;
      } else if (c < 55296 ? true : c > 57343) {
        var tail_1 = _this__u8e3s4.writableSegment_g5a3pu_k$(3);
        tail_1.data_1[tail_1.limit_1] = toByte(c >> 12 | 224);
        tail_1.data_1[tail_1.limit_1 + 1 | 0] = toByte(c >> 6 & 63 | 128);
        tail_1.data_1[tail_1.limit_1 + 2 | 0] = toByte(c & 63 | 128);
        var tmp7_this = tail_1;
        tmp7_this.limit_1 = tmp7_this.limit_1 + 3 | 0;
        var tmp8_this = _this__u8e3s4;
        tmp8_this.size_1 = tmp8_this.size_1.plus_u6jwas_k$(new Long(3, 0));
        var tmp9 = i;
        i = tmp9 + 1 | 0;
      } else {
        var tmp;
        if ((i + 1 | 0) < endIndex) {
          var tmp$ret$6;
          // Inline function 'kotlin.code' call
          var tmp6__get_code__l1uofy = charSequenceGet(string, i + 1 | 0);
          tmp$ret$6 = Char__toInt_impl_vasixd(tmp6__get_code__l1uofy);
          tmp = tmp$ret$6;
        } else {
          tmp = 0;
        }
        var low = tmp;
        if (c > 56319 ? true : !(56320 <= low ? low <= 57343 : false)) {
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          tmp$ret$7 = 63;
          _this__u8e3s4.writeByte_fjn38a_k$(tmp$ret$7);
          var tmp10 = i;
          i = tmp10 + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          var tail_2 = _this__u8e3s4.writableSegment_g5a3pu_k$(4);
          tail_2.data_1[tail_2.limit_1] = toByte(codePoint >> 18 | 240);
          tail_2.data_1[tail_2.limit_1 + 1 | 0] = toByte(codePoint >> 12 & 63 | 128);
          tail_2.data_1[tail_2.limit_1 + 2 | 0] = toByte(codePoint >> 6 & 63 | 128);
          tail_2.data_1[tail_2.limit_1 + 3 | 0] = toByte(codePoint & 63 | 128);
          var tmp11_this = tail_2;
          tmp11_this.limit_1 = tmp11_this.limit_1 + 4 | 0;
          var tmp12_this = _this__u8e3s4;
          tmp12_this.size_1 = tmp12_this.size_1.plus_u6jwas_k$(new Long(4, 0));
          i = i + 2 | 0;
        }
      }
    }
    return _this__u8e3s4;
  }
  function commonWriteUtf8CodePoint(_this__u8e3s4, codePoint) {
    init_properties__Buffer_kt_t3kap3();
    if (codePoint < 128) {
      _this__u8e3s4.writeByte_fjn38a_k$(codePoint);
    } else if (codePoint < 2048) {
      var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(2);
      tail.data_1[tail.limit_1] = toByte(codePoint >> 6 | 192);
      tail.data_1[tail.limit_1 + 1 | 0] = toByte(codePoint & 63 | 128);
      var tmp0_this = tail;
      tmp0_this.limit_1 = tmp0_this.limit_1 + 2 | 0;
      var tmp1_this = _this__u8e3s4;
      tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(new Long(2, 0));
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 63;
      _this__u8e3s4.writeByte_fjn38a_k$(tmp$ret$0);
    } else if (codePoint < 65536) {
      var tail_0 = _this__u8e3s4.writableSegment_g5a3pu_k$(3);
      tail_0.data_1[tail_0.limit_1] = toByte(codePoint >> 12 | 224);
      tail_0.data_1[tail_0.limit_1 + 1 | 0] = toByte(codePoint >> 6 & 63 | 128);
      tail_0.data_1[tail_0.limit_1 + 2 | 0] = toByte(codePoint & 63 | 128);
      var tmp2_this = tail_0;
      tmp2_this.limit_1 = tmp2_this.limit_1 + 3 | 0;
      var tmp3_this = _this__u8e3s4;
      tmp3_this.size_1 = tmp3_this.size_1.plus_u6jwas_k$(new Long(3, 0));
    } else if (codePoint <= 1114111) {
      var tail_1 = _this__u8e3s4.writableSegment_g5a3pu_k$(4);
      tail_1.data_1[tail_1.limit_1] = toByte(codePoint >> 18 | 240);
      tail_1.data_1[tail_1.limit_1 + 1 | 0] = toByte(codePoint >> 12 & 63 | 128);
      tail_1.data_1[tail_1.limit_1 + 2 | 0] = toByte(codePoint >> 6 & 63 | 128);
      tail_1.data_1[tail_1.limit_1 + 3 | 0] = toByte(codePoint & 63 | 128);
      var tmp4_this = tail_1;
      tmp4_this.limit_1 = tmp4_this.limit_1 + 4 | 0;
      var tmp5_this = _this__u8e3s4;
      tmp5_this.size_1 = tmp5_this.size_1.plus_u6jwas_k$(new Long(4, 0));
    } else {
      throw IllegalArgumentException_init_$Create$('Unexpected code point: 0x' + toHexString_0(codePoint));
    }
    return _this__u8e3s4;
  }
  function commonWrite_0(_this__u8e3s4, source) {
    init_properties__Buffer_kt_t3kap3();
    return _this__u8e3s4.write_v9wlwc_k$(source, 0, source.length);
  }
  function commonWrite_1(_this__u8e3s4, source, offset, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    var offset_0 = offset;
    checkOffsetAndCount(toLong(source.length), toLong(offset_0), toLong(byteCount));
    var limit = offset_0 + byteCount | 0;
    while (offset_0 < limit) {
      var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(1);
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = limit - offset_0 | 0;
      Companion_getInstance_1();
      var tmp1_minOf = 8192 - tail.limit_1 | 0;
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      var toCopy = tmp$ret$0;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = tail.data_1;
      var tmp3_copyInto = tail.limit_1;
      var tmp4_copyInto = offset_0;
      var tmp5_copyInto = offset_0 + toCopy | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = source;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, tmp3_copyInto, tmp4_copyInto, tmp5_copyInto);
      tmp$ret$5 = tmp2_copyInto;
      offset_0 = offset_0 + toCopy | 0;
      var tmp0_this = tail;
      tmp0_this.limit_1 = tmp0_this.limit_1 + toCopy | 0;
    }
    var tmp1_this = _this__u8e3s4;
    tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(toLong(byteCount));
    return _this__u8e3s4;
  }
  function commonWriteAll(_this__u8e3s4, source) {
    init_properties__Buffer_kt_t3kap3();
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      Companion_getInstance_1();
      var readCount = source.read_nz46cz_k$(_this__u8e3s4, toLong(8192));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.plus_u6jwas_k$(readCount);
    }
    return totalBytesRead;
  }
  function commonWrite_2(_this__u8e3s4, source, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    var byteCount_0 = byteCount;
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var read = source.read_nz46cz_k$(_this__u8e3s4, byteCount_0);
      if (read.equals(new Long(-1, -1))) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      byteCount_0 = byteCount_0.minus_llf5ei_k$(read);
    }
    return _this__u8e3s4;
  }
  function commonWriteByte(_this__u8e3s4, b) {
    init_properties__Buffer_kt_t3kap3();
    var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(1);
    var tmp0_this = tail;
    var tmp1 = tmp0_this.limit_1;
    tmp0_this.limit_1 = tmp1 + 1 | 0;
    tail.data_1[tmp1] = toByte(b);
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.plus_u6jwas_k$(new Long(1, 0));
    return _this__u8e3s4;
  }
  function commonWriteShort(_this__u8e3s4, s) {
    init_properties__Buffer_kt_t3kap3();
    var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(2);
    var data = tail.data_1;
    var limit = tail.limit_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = toByte((s >>> 8 | 0) & 255);
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = toByte(s & 255);
    tail.limit_1 = limit;
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.plus_u6jwas_k$(new Long(2, 0));
    return _this__u8e3s4;
  }
  function commonWriteInt(_this__u8e3s4, i) {
    init_properties__Buffer_kt_t3kap3();
    var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(4);
    var data = tail.data_1;
    var limit = tail.limit_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = toByte((i >>> 24 | 0) & 255);
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = toByte((i >>> 16 | 0) & 255);
    var tmp2 = limit;
    limit = tmp2 + 1 | 0;
    data[tmp2] = toByte((i >>> 8 | 0) & 255);
    var tmp3 = limit;
    limit = tmp3 + 1 | 0;
    data[tmp3] = toByte(i & 255);
    tail.limit_1 = limit;
    var tmp4_this = _this__u8e3s4;
    tmp4_this.size_1 = tmp4_this.size_1.plus_u6jwas_k$(new Long(4, 0));
    return _this__u8e3s4;
  }
  function commonWriteLong(_this__u8e3s4, v) {
    init_properties__Buffer_kt_t3kap3();
    var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(8);
    var data = tail.data_1;
    var limit = tail.limit_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = v.ushr_rr8rvr_k$(56).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = v.ushr_rr8rvr_k$(48).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp2 = limit;
    limit = tmp2 + 1 | 0;
    data[tmp2] = v.ushr_rr8rvr_k$(40).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp3 = limit;
    limit = tmp3 + 1 | 0;
    data[tmp3] = v.ushr_rr8rvr_k$(32).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp4 = limit;
    limit = tmp4 + 1 | 0;
    data[tmp4] = v.ushr_rr8rvr_k$(24).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp5 = limit;
    limit = tmp5 + 1 | 0;
    data[tmp5] = v.ushr_rr8rvr_k$(16).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp6 = limit;
    limit = tmp6 + 1 | 0;
    data[tmp6] = v.ushr_rr8rvr_k$(8).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp7 = limit;
    limit = tmp7 + 1 | 0;
    data[tmp7] = v.and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    tail.limit_1 = limit;
    var tmp8_this = _this__u8e3s4;
    tmp8_this.size_1 = tmp8_this.size_1.plus_u6jwas_k$(new Long(8, 0));
    return _this__u8e3s4;
  }
  function commonWriteDecimalLong(_this__u8e3s4, v) {
    init_properties__Buffer_kt_t3kap3();
    var v_0 = v;
    if (v_0.equals(new Long(0, 0))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      return _this__u8e3s4.writeByte_fjn38a_k$(tmp$ret$0);
    }
    var negative = false;
    if (v_0.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      v_0 = v_0.unaryMinus_6uz0qp_k$();
      if (v_0.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
        return _this__u8e3s4.writeUtf8_688wup_k$('-9223372036854775808');
      }
      negative = true;
    }
    var width = v_0.compareTo_n4fqi2_k$(new Long(100000000, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(10000, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(100, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(10, 0)) < 0 ? 1 : 2 : v_0.compareTo_n4fqi2_k$(new Long(1000, 0)) < 0 ? 3 : 4 : v_0.compareTo_n4fqi2_k$(new Long(1000000, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(100000, 0)) < 0 ? 5 : 6 : v_0.compareTo_n4fqi2_k$(new Long(10000000, 0)) < 0 ? 7 : 8 : v_0.compareTo_n4fqi2_k$(new Long(-727379968, 232)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1410065408, 2)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1000000000, 0)) < 0 ? 9 : 10 : v_0.compareTo_n4fqi2_k$(new Long(1215752192, 23)) < 0 ? 11 : 12 : v_0.compareTo_n4fqi2_k$(new Long(-1530494976, 232830)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1316134912, 2328)) < 0 ? 13 : v_0.compareTo_n4fqi2_k$(new Long(276447232, 23283)) < 0 ? 14 : 15 : v_0.compareTo_n4fqi2_k$(new Long(1569325056, 23283064)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1874919424, 2328306)) < 0 ? 16 : 17 : v_0.compareTo_n4fqi2_k$(new Long(-1486618624, 232830643)) < 0 ? 18 : 19;
    if (negative) {
      width = width + 1 | 0;
    }
    var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(width);
    var data = tail.data_1;
    var pos = tail.limit_1 + width | 0;
    while (!v_0.equals(new Long(0, 0))) {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp0_rem = v_0;
      tmp$ret$1 = tmp0_rem.rem_9rbcjo_k$(new Long(10, 0));
      var digit = tmp$ret$1.toInt_1tsl84_k$();
      pos = pos - 1 | 0;
      data[pos] = get_HEX_DIGIT_BYTES()[digit];
      var tmp$ret$2;
      // Inline function 'kotlin.Long.div' call
      var tmp1_div = v_0;
      tmp$ret$2 = tmp1_div.div_9s1fi3_k$(new Long(10, 0));
      v_0 = tmp$ret$2;
    }
    if (negative) {
      pos = pos - 1 | 0;
      var tmp = pos;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 45;
      data[tmp] = toByte(tmp$ret$3);
    }
    var tmp0_this = tail;
    tmp0_this.limit_1 = tmp0_this.limit_1 + width | 0;
    var tmp1_this = _this__u8e3s4;
    tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(toLong(width));
    return _this__u8e3s4;
  }
  function commonWriteHexadecimalUnsignedLong(_this__u8e3s4, v) {
    init_properties__Buffer_kt_t3kap3();
    var v_0 = v;
    if (v_0.equals(new Long(0, 0))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      return _this__u8e3s4.writeByte_fjn38a_k$(tmp$ret$0);
    }
    var x = v_0;
    x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(1));
    x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(2));
    x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(4));
    x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(8));
    x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(16));
    x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(32));
    x = x.minus_llf5ei_k$(x.ushr_rr8rvr_k$(1).and_jhajnj_k$(new Long(1431655765, 1431655765)));
    x = x.ushr_rr8rvr_k$(2).and_jhajnj_k$(new Long(858993459, 858993459)).plus_u6jwas_k$(x.and_jhajnj_k$(new Long(858993459, 858993459)));
    x = x.ushr_rr8rvr_k$(4).plus_u6jwas_k$(x).and_jhajnj_k$(new Long(252645135, 252645135));
    x = x.plus_u6jwas_k$(x.ushr_rr8rvr_k$(8));
    x = x.plus_u6jwas_k$(x.ushr_rr8rvr_k$(16));
    x = x.and_jhajnj_k$(new Long(63, 0)).plus_u6jwas_k$(x.ushr_rr8rvr_k$(32).and_jhajnj_k$(new Long(63, 0)));
    var tmp$ret$2;
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = x;
    tmp$ret$1 = tmp0_plus.plus_u6jwas_k$(new Long(3, 0));
    var tmp1_div = tmp$ret$1;
    tmp$ret$2 = tmp1_div.div_9s1fi3_k$(new Long(4, 0));
    var width = tmp$ret$2.toInt_1tsl84_k$();
    var tail = _this__u8e3s4.writableSegment_g5a3pu_k$(width);
    var data = tail.data_1;
    var pos = (tail.limit_1 + width | 0) - 1 | 0;
    var start = tail.limit_1;
    while (pos >= start) {
      data[pos] = get_HEX_DIGIT_BYTES()[v_0.and_jhajnj_k$(new Long(15, 0)).toInt_1tsl84_k$()];
      v_0 = v_0.ushr_rr8rvr_k$(4);
      var tmp0 = pos;
      pos = tmp0 - 1 | 0;
    }
    var tmp1_this = tail;
    tmp1_this.limit_1 = tmp1_this.limit_1 + width | 0;
    var tmp2_this = _this__u8e3s4;
    tmp2_this.size_1 = tmp2_this.size_1.plus_u6jwas_k$(toLong(width));
    return _this__u8e3s4;
  }
  function commonWrite_3(_this__u8e3s4, source, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    var byteCount_0 = byteCount;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(source === _this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      tmp$ret$0 = 'source == this';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.size_1, new Long(0, 0), byteCount_0);
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      if (byteCount_0.compareTo_n4fqi2_k$(toLong(ensureNotNull(source.head_1).limit_1 - ensureNotNull(source.head_1).pos_1 | 0)) < 0) {
        var tail = !(_this__u8e3s4.head_1 == null) ? ensureNotNull(_this__u8e3s4.head_1).prev_1 : null;
        var tmp;
        if (!(tail == null) ? tail.owner_1 : false) {
          var tmp$ret$2;
          // Inline function 'kotlin.Long.minus' call
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          var tmp1_plus = byteCount_0;
          var tmp2_plus = tail.limit_1;
          tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
          var tmp3_minus = tmp$ret$1;
          var tmp4_minus = tail.shared_1 ? 0 : tail.pos_1;
          tmp$ret$2 = tmp3_minus.minus_llf5ei_k$(toLong(tmp4_minus));
          var tmp_0 = tmp$ret$2;
          Companion_getInstance_1();
          tmp = tmp_0.compareTo_n4fqi2_k$(toLong(8192)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.head_1).writeTo_yc0wgs_k$(tail, byteCount_0.toInt_1tsl84_k$());
          var tmp0_this = source;
          tmp0_this.size_1 = tmp0_this.size_1.minus_llf5ei_k$(byteCount_0);
          var tmp1_this = _this__u8e3s4;
          tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(byteCount_0);
          return Unit_getInstance();
        } else {
          source.head_1 = ensureNotNull(source.head_1).split_dvaf_k$(byteCount_0.toInt_1tsl84_k$());
        }
      }
      var segmentToMove = source.head_1;
      var movedByteCount = toLong(ensureNotNull(segmentToMove).limit_1 - segmentToMove.pos_1 | 0);
      source.head_1 = segmentToMove.pop_2dsh_k$();
      if (_this__u8e3s4.head_1 == null) {
        _this__u8e3s4.head_1 = segmentToMove;
        segmentToMove.prev_1 = segmentToMove;
        segmentToMove.next_1 = segmentToMove.prev_1;
      } else {
        var tail_0 = ensureNotNull(_this__u8e3s4.head_1).prev_1;
        tail_0 = ensureNotNull(tail_0).push_toq0no_k$(segmentToMove);
        tail_0.compact_dbgoby_k$();
      }
      var tmp2_this = source;
      tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(movedByteCount);
      var tmp3_this = _this__u8e3s4;
      tmp3_this.size_1 = tmp3_this.size_1.plus_u6jwas_k$(movedByteCount);
      byteCount_0 = byteCount_0.minus_llf5ei_k$(movedByteCount);
    }
  }
  function commonRead_1(_this__u8e3s4, sink, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    var byteCount_0 = byteCount;
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonRead.<anonymous>' call
      tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount_0);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.size_1.equals(new Long(0, 0)))
      return new Long(-1, -1);
    if (byteCount_0.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) > 0)
      byteCount_0 = _this__u8e3s4.size_1;
    sink.write_x0zrut_k$(_this__u8e3s4, byteCount_0);
    return byteCount_0;
  }
  function commonIndexOf(_this__u8e3s4, b, fromIndex, toIndex) {
    init_properties__Buffer_kt_t3kap3();
    var fromIndex_0 = fromIndex;
    var toIndex_0 = toIndex;
    // Inline function 'kotlin.require' call
    var tmp0_require = (new Long(0, 0)).compareTo_n4fqi2_k$(fromIndex_0) <= 0 ? fromIndex_0.compareTo_n4fqi2_k$(toIndex_0) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
      tmp$ret$0 = 'size=' + toString(_this__u8e3s4.size_1) + ' fromIndex=' + toString(fromIndex_0) + ' toIndex=' + toString(toIndex_0);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (toIndex_0.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) > 0)
      toIndex_0 = _this__u8e3s4.size_1;
    if (fromIndex_0.equals(toIndex_0))
      return new Long(-1, -1);
    var tmp$ret$2;
    // Inline function 'okio.internal.seek' call
    var tmp3_seek = fromIndex_0;
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_elvis_lhs_0 = null;
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        return new Long(-1, -1);
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      var s = tmp_0;
      var offset = new Long(-1, -1);
      while (offset.compareTo_n4fqi2_k$(toIndex_0) < 0) {
        var data = s.data_1;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = toLong(s.limit_1);
        var tmp1_minOf = numberToLong(s.pos_1).plus_u6jwas_k$(toIndex_0).minus_llf5ei_k$(offset);
        tmp$ret$1 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
        var limit = tmp$ret$1.toInt_1tsl84_k$();
        var pos = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
        while (pos < limit) {
          if (data[pos] === b) {
            return numberToLong(pos - s.pos_1 | 0).plus_u6jwas_k$(offset);
          }
          var tmp1 = pos;
          pos = tmp1 + 1 | 0;
        }
        offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
        fromIndex_0 = offset;
        s = ensureNotNull(s.next_1);
      }
      return new Long(-1, -1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s_0 = tmp;
    if (_this__u8e3s4.size_1.minus_llf5ei_k$(tmp3_seek).compareTo_n4fqi2_k$(tmp3_seek) < 0) {
      var offset_0 = _this__u8e3s4.size_1;
      while (offset_0.compareTo_n4fqi2_k$(tmp3_seek) > 0) {
        s_0 = ensureNotNull(s_0.prev_1);
        offset_0 = offset_0.minus_llf5ei_k$(toLong(s_0.limit_1 - s_0.pos_1 | 0));
      }
      var tmp4__anonymous__pkmkx7 = s_0;
      var tmp5__anonymous__kpxxpo = offset_0;
      var tmp0_elvis_lhs_1 = tmp4__anonymous__pkmkx7;
      var tmp_1;
      if (tmp0_elvis_lhs_1 == null) {
        return new Long(-1, -1);
      } else {
        tmp_1 = tmp0_elvis_lhs_1;
      }
      var s_1 = tmp_1;
      var offset_1 = tmp5__anonymous__kpxxpo;
      while (offset_1.compareTo_n4fqi2_k$(toIndex_0) < 0) {
        var data_0 = s_1.data_1;
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf_0 = toLong(s_1.limit_1);
        var tmp1_minOf_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(toIndex_0).minus_llf5ei_k$(offset_1);
        tmp$ret$3 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp1_minOf_0) <= 0 ? tmp0_minOf_0 : tmp1_minOf_0;
        var limit_0 = tmp$ret$3.toInt_1tsl84_k$();
        var pos_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
        while (pos_0 < limit_0) {
          if (data_0[pos_0] === b) {
            return numberToLong(pos_0 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
          }
          var tmp1_0 = pos_0;
          pos_0 = tmp1_0 + 1 | 0;
        }
        offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
        fromIndex_0 = offset_1;
        s_1 = ensureNotNull(s_1.next_1);
      }
      return new Long(-1, -1);
    } else {
      var offset_2 = new Long(0, 0);
      $l$loop: while (true) {
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        var tmp1_plus = offset_2;
        var tmp2_plus = s_0.limit_1 - s_0.pos_1 | 0;
        tmp$ret$4 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
        var nextOffset = tmp$ret$4;
        if (nextOffset.compareTo_n4fqi2_k$(tmp3_seek) > 0)
          break $l$loop;
        s_0 = ensureNotNull(s_0.next_1);
        offset_2 = nextOffset;
      }
      var tmp6__anonymous__fv9ai5 = s_0;
      var tmp7__anonymous__b0knam = offset_2;
      var tmp0_elvis_lhs_2 = tmp6__anonymous__fv9ai5;
      var tmp_2;
      if (tmp0_elvis_lhs_2 == null) {
        return new Long(-1, -1);
      } else {
        tmp_2 = tmp0_elvis_lhs_2;
      }
      var s_2 = tmp_2;
      var offset_3 = tmp7__anonymous__b0knam;
      while (offset_3.compareTo_n4fqi2_k$(toIndex_0) < 0) {
        var data_1 = s_2.data_1;
        var tmp$ret$5;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf_1 = toLong(s_2.limit_1);
        var tmp1_minOf_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(toIndex_0).minus_llf5ei_k$(offset_3);
        tmp$ret$5 = tmp0_minOf_1.compareTo_n4fqi2_k$(tmp1_minOf_1) <= 0 ? tmp0_minOf_1 : tmp1_minOf_1;
        var limit_1 = tmp$ret$5.toInt_1tsl84_k$();
        var pos_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
        while (pos_1 < limit_1) {
          if (data_1[pos_1] === b) {
            return numberToLong(pos_1 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
          }
          var tmp1_1 = pos_1;
          pos_1 = tmp1_1 + 1 | 0;
        }
        offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
        fromIndex_0 = offset_3;
        s_2 = ensureNotNull(s_2.next_1);
      }
      return new Long(-1, -1);
    }
  }
  function commonIndexOf_0(_this__u8e3s4, bytes, fromIndex) {
    init_properties__Buffer_kt_t3kap3();
    var fromIndex_0 = fromIndex;
    // Inline function 'kotlin.require' call
    var tmp0_require = bytes.get_size_woubt6_k$() > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
      tmp$ret$0 = 'bytes is empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = fromIndex_0.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
      tmp$ret$1 = 'fromIndex < 0: ' + toString(fromIndex_0);
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$5;
    // Inline function 'okio.internal.seek' call
    var tmp4_seek = fromIndex_0;
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_elvis_lhs_0 = null;
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        return new Long(-1, -1);
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      var s = tmp_0;
      var offset = new Long(-1, -1);
      var targetByteArray = bytes.internalArray_tr176k_k$();
      var b0 = targetByteArray[0];
      var bytesSize = bytes.get_size_woubt6_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = _this__u8e3s4.size_1;
      tmp$ret$2 = tmp0_minus.minus_llf5ei_k$(toLong(bytesSize));
      var resultLimit = tmp$ret$2.plus_u6jwas_k$(new Long(1, 0));
      while (offset.compareTo_n4fqi2_k$(resultLimit) < 0) {
        var data = s.data_1;
        var tmp$ret$4;
        // Inline function 'okio.minOf' call
        var tmp1_minOf = s.limit_1;
        var tmp2_minOf = numberToLong(s.pos_1).plus_u6jwas_k$(resultLimit).minus_llf5ei_k$(offset);
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = toLong(tmp1_minOf);
        tmp$ret$3 = tmp0_minOf.compareTo_n4fqi2_k$(tmp2_minOf) <= 0 ? tmp0_minOf : tmp2_minOf;
        tmp$ret$4 = tmp$ret$3;
        var segmentLimit = tmp$ret$4.toInt_1tsl84_k$();
        var inductionVariable = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
        if (inductionVariable < segmentLimit)
          do {
            var pos = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (data[pos] === b0 ? rangeEquals(s, pos + 1 | 0, targetByteArray, 1, bytesSize) : false) {
              return numberToLong(pos - s.pos_1 | 0).plus_u6jwas_k$(offset);
            }
          }
           while (inductionVariable < segmentLimit);
        offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
        fromIndex_0 = offset;
        s = ensureNotNull(s.next_1);
      }
      return new Long(-1, -1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s_0 = tmp;
    if (_this__u8e3s4.size_1.minus_llf5ei_k$(tmp4_seek).compareTo_n4fqi2_k$(tmp4_seek) < 0) {
      var offset_0 = _this__u8e3s4.size_1;
      while (offset_0.compareTo_n4fqi2_k$(tmp4_seek) > 0) {
        s_0 = ensureNotNull(s_0.prev_1);
        offset_0 = offset_0.minus_llf5ei_k$(toLong(s_0.limit_1 - s_0.pos_1 | 0));
      }
      var tmp5__anonymous__kpxxpo = s_0;
      var tmp6__anonymous__fv9ai5 = offset_0;
      var tmp0_elvis_lhs_1 = tmp5__anonymous__kpxxpo;
      var tmp_1;
      if (tmp0_elvis_lhs_1 == null) {
        return new Long(-1, -1);
      } else {
        tmp_1 = tmp0_elvis_lhs_1;
      }
      var s_1 = tmp_1;
      var offset_1 = tmp6__anonymous__fv9ai5;
      var targetByteArray_0 = bytes.internalArray_tr176k_k$();
      var b0_0 = targetByteArray_0[0];
      var bytesSize_0 = bytes.get_size_woubt6_k$();
      var tmp$ret$6;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus_0 = _this__u8e3s4.size_1;
      tmp$ret$6 = tmp0_minus_0.minus_llf5ei_k$(toLong(bytesSize_0));
      var resultLimit_0 = tmp$ret$6.plus_u6jwas_k$(new Long(1, 0));
      while (offset_1.compareTo_n4fqi2_k$(resultLimit_0) < 0) {
        var data_0 = s_1.data_1;
        var tmp$ret$8;
        // Inline function 'okio.minOf' call
        var tmp1_minOf_0 = s_1.limit_1;
        var tmp2_minOf_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(resultLimit_0).minus_llf5ei_k$(offset_1);
        var tmp$ret$7;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf_0 = toLong(tmp1_minOf_0);
        tmp$ret$7 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp2_minOf_0) <= 0 ? tmp0_minOf_0 : tmp2_minOf_0;
        tmp$ret$8 = tmp$ret$7;
        var segmentLimit_0 = tmp$ret$8.toInt_1tsl84_k$();
        var inductionVariable_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
        if (inductionVariable_0 < segmentLimit_0)
          do {
            var pos_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (data_0[pos_0] === b0_0 ? rangeEquals(s_1, pos_0 + 1 | 0, targetByteArray_0, 1, bytesSize_0) : false) {
              return numberToLong(pos_0 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
            }
          }
           while (inductionVariable_0 < segmentLimit_0);
        offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
        fromIndex_0 = offset_1;
        s_1 = ensureNotNull(s_1.next_1);
      }
      return new Long(-1, -1);
    } else {
      var offset_2 = new Long(0, 0);
      $l$loop: while (true) {
        var tmp$ret$9;
        // Inline function 'kotlin.Long.plus' call
        var tmp2_plus = offset_2;
        var tmp3_plus = s_0.limit_1 - s_0.pos_1 | 0;
        tmp$ret$9 = tmp2_plus.plus_u6jwas_k$(toLong(tmp3_plus));
        var nextOffset = tmp$ret$9;
        if (nextOffset.compareTo_n4fqi2_k$(tmp4_seek) > 0)
          break $l$loop;
        s_0 = ensureNotNull(s_0.next_1);
        offset_2 = nextOffset;
      }
      var tmp7__anonymous__b0knam = s_0;
      var tmp8__anonymous__65w033 = offset_2;
      var tmp0_elvis_lhs_2 = tmp7__anonymous__b0knam;
      var tmp_2;
      if (tmp0_elvis_lhs_2 == null) {
        return new Long(-1, -1);
      } else {
        tmp_2 = tmp0_elvis_lhs_2;
      }
      var s_2 = tmp_2;
      var offset_3 = tmp8__anonymous__65w033;
      var targetByteArray_1 = bytes.internalArray_tr176k_k$();
      var b0_1 = targetByteArray_1[0];
      var bytesSize_1 = bytes.get_size_woubt6_k$();
      var tmp$ret$10;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus_1 = _this__u8e3s4.size_1;
      tmp$ret$10 = tmp0_minus_1.minus_llf5ei_k$(toLong(bytesSize_1));
      var resultLimit_1 = tmp$ret$10.plus_u6jwas_k$(new Long(1, 0));
      while (offset_3.compareTo_n4fqi2_k$(resultLimit_1) < 0) {
        var data_1 = s_2.data_1;
        var tmp$ret$12;
        // Inline function 'okio.minOf' call
        var tmp1_minOf_1 = s_2.limit_1;
        var tmp2_minOf_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(resultLimit_1).minus_llf5ei_k$(offset_3);
        var tmp$ret$11;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf_1 = toLong(tmp1_minOf_1);
        tmp$ret$11 = tmp0_minOf_1.compareTo_n4fqi2_k$(tmp2_minOf_1) <= 0 ? tmp0_minOf_1 : tmp2_minOf_1;
        tmp$ret$12 = tmp$ret$11;
        var segmentLimit_1 = tmp$ret$12.toInt_1tsl84_k$();
        var inductionVariable_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
        if (inductionVariable_1 < segmentLimit_1)
          do {
            var pos_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (data_1[pos_1] === b0_1 ? rangeEquals(s_2, pos_1 + 1 | 0, targetByteArray_1, 1, bytesSize_1) : false) {
              return numberToLong(pos_1 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
            }
          }
           while (inductionVariable_1 < segmentLimit_1);
        offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
        fromIndex_0 = offset_3;
        s_2 = ensureNotNull(s_2.next_1);
      }
      return new Long(-1, -1);
    }
  }
  function commonIndexOfElement(_this__u8e3s4, targetBytes, fromIndex) {
    init_properties__Buffer_kt_t3kap3();
    var fromIndex_0 = fromIndex;
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex_0.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
      tmp$ret$0 = 'fromIndex < 0: ' + toString(fromIndex_0);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    // Inline function 'okio.internal.seek' call
    var tmp3_seek = fromIndex_0;
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_elvis_lhs_0 = null;
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        return new Long(-1, -1);
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      var s = tmp_0;
      var offset = new Long(-1, -1);
      if (targetBytes.get_size_woubt6_k$() === 2) {
        var b0 = targetBytes.get_fkrdnv_k$(0);
        var b1 = targetBytes.get_fkrdnv_k$(1);
        while (offset.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
          var data = s.data_1;
          var pos = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
          var limit = s.limit_1;
          while (pos < limit) {
            var b = data[pos];
            if (b === b0 ? true : b === b1) {
              return numberToLong(pos - s.pos_1 | 0).plus_u6jwas_k$(offset);
            }
            var tmp1 = pos;
            pos = tmp1 + 1 | 0;
          }
          offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
          fromIndex_0 = offset;
          s = ensureNotNull(s.next_1);
        }
      } else {
        var targetByteArray = targetBytes.internalArray_tr176k_k$();
        while (offset.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
          var data_0 = s.data_1;
          var pos_0 = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
          var limit_0 = s.limit_1;
          while (pos_0 < limit_0) {
            var b_0 = data_0[pos_0];
            var indexedObject = targetByteArray;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var t = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (b_0 === t)
                return numberToLong(pos_0 - s.pos_1 | 0).plus_u6jwas_k$(offset);
            }
            var tmp3 = pos_0;
            pos_0 = tmp3 + 1 | 0;
          }
          offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
          fromIndex_0 = offset;
          s = ensureNotNull(s.next_1);
        }
      }
      return new Long(-1, -1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s_0 = tmp;
    if (_this__u8e3s4.size_1.minus_llf5ei_k$(tmp3_seek).compareTo_n4fqi2_k$(tmp3_seek) < 0) {
      var offset_0 = _this__u8e3s4.size_1;
      while (offset_0.compareTo_n4fqi2_k$(tmp3_seek) > 0) {
        s_0 = ensureNotNull(s_0.prev_1);
        offset_0 = offset_0.minus_llf5ei_k$(toLong(s_0.limit_1 - s_0.pos_1 | 0));
      }
      var tmp4__anonymous__pkmkx7 = s_0;
      var tmp5__anonymous__kpxxpo = offset_0;
      var tmp0_elvis_lhs_1 = tmp4__anonymous__pkmkx7;
      var tmp_1;
      if (tmp0_elvis_lhs_1 == null) {
        return new Long(-1, -1);
      } else {
        tmp_1 = tmp0_elvis_lhs_1;
      }
      var s_1 = tmp_1;
      var offset_1 = tmp5__anonymous__kpxxpo;
      if (targetBytes.get_size_woubt6_k$() === 2) {
        var b0_0 = targetBytes.get_fkrdnv_k$(0);
        var b1_0 = targetBytes.get_fkrdnv_k$(1);
        while (offset_1.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
          var data_1 = s_1.data_1;
          var pos_1 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
          var limit_1 = s_1.limit_1;
          while (pos_1 < limit_1) {
            var b_1 = data_1[pos_1];
            if (b_1 === b0_0 ? true : b_1 === b1_0) {
              return numberToLong(pos_1 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
            }
            var tmp1_0 = pos_1;
            pos_1 = tmp1_0 + 1 | 0;
          }
          offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
          fromIndex_0 = offset_1;
          s_1 = ensureNotNull(s_1.next_1);
        }
      } else {
        var targetByteArray_0 = targetBytes.internalArray_tr176k_k$();
        while (offset_1.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
          var data_2 = s_1.data_1;
          var pos_2 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
          var limit_2 = s_1.limit_1;
          while (pos_2 < limit_2) {
            var b_2 = data_2[pos_2];
            var indexedObject_0 = targetByteArray_0;
            var inductionVariable_0 = 0;
            var last_0 = indexedObject_0.length;
            while (inductionVariable_0 < last_0) {
              var t_0 = indexedObject_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (b_2 === t_0)
                return numberToLong(pos_2 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
            }
            var tmp3_0 = pos_2;
            pos_2 = tmp3_0 + 1 | 0;
          }
          offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
          fromIndex_0 = offset_1;
          s_1 = ensureNotNull(s_1.next_1);
        }
      }
      return new Long(-1, -1);
    } else {
      var offset_2 = new Long(0, 0);
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'kotlin.Long.plus' call
        var tmp1_plus = offset_2;
        var tmp2_plus = s_0.limit_1 - s_0.pos_1 | 0;
        tmp$ret$2 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
        var nextOffset = tmp$ret$2;
        if (nextOffset.compareTo_n4fqi2_k$(tmp3_seek) > 0)
          break $l$loop;
        s_0 = ensureNotNull(s_0.next_1);
        offset_2 = nextOffset;
      }
      var tmp6__anonymous__fv9ai5 = s_0;
      var tmp7__anonymous__b0knam = offset_2;
      var tmp0_elvis_lhs_2 = tmp6__anonymous__fv9ai5;
      var tmp_2;
      if (tmp0_elvis_lhs_2 == null) {
        return new Long(-1, -1);
      } else {
        tmp_2 = tmp0_elvis_lhs_2;
      }
      var s_2 = tmp_2;
      var offset_3 = tmp7__anonymous__b0knam;
      if (targetBytes.get_size_woubt6_k$() === 2) {
        var b0_1 = targetBytes.get_fkrdnv_k$(0);
        var b1_1 = targetBytes.get_fkrdnv_k$(1);
        while (offset_3.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
          var data_3 = s_2.data_1;
          var pos_3 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
          var limit_3 = s_2.limit_1;
          while (pos_3 < limit_3) {
            var b_3 = data_3[pos_3];
            if (b_3 === b0_1 ? true : b_3 === b1_1) {
              return numberToLong(pos_3 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
            }
            var tmp1_1 = pos_3;
            pos_3 = tmp1_1 + 1 | 0;
          }
          offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.next_1);
        }
      } else {
        var targetByteArray_1 = targetBytes.internalArray_tr176k_k$();
        while (offset_3.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
          var data_4 = s_2.data_1;
          var pos_4 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
          var limit_4 = s_2.limit_1;
          while (pos_4 < limit_4) {
            var b_4 = data_4[pos_4];
            var indexedObject_1 = targetByteArray_1;
            var inductionVariable_1 = 0;
            var last_1 = indexedObject_1.length;
            while (inductionVariable_1 < last_1) {
              var t_1 = indexedObject_1[inductionVariable_1];
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (b_4 === t_1)
                return numberToLong(pos_4 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
            }
            var tmp3_1 = pos_4;
            pos_4 = tmp3_1 + 1 | 0;
          }
          offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.next_1);
        }
      }
      return new Long(-1, -1);
    }
  }
  function commonRangeEquals(_this__u8e3s4, offset, bytes, bytesOffset, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    if ((((offset.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? true : bytesOffset < 0) ? true : byteCount < 0) ? true : _this__u8e3s4.size_1.minus_llf5ei_k$(offset).compareTo_n4fqi2_k$(toLong(byteCount)) < 0) ? true : (bytes.get_size_woubt6_k$() - bytesOffset | 0) < byteCount) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$0 = offset.plus_u6jwas_k$(toLong(i));
        if (!(_this__u8e3s4.get_ec5on4_k$(tmp$ret$0) === bytes.get_fkrdnv_k$(bytesOffset + i | 0))) {
          return false;
        }
      }
       while (inductionVariable < byteCount);
    return true;
  }
  function commonEquals(_this__u8e3s4, other) {
    init_properties__Buffer_kt_t3kap3();
    if (_this__u8e3s4 === other)
      return true;
    if (!(other instanceof Buffer))
      return false;
    if (!_this__u8e3s4.size_1.equals(other.size_1))
      return false;
    if (_this__u8e3s4.size_1.equals(new Long(0, 0)))
      return true;
    var sa = ensureNotNull(_this__u8e3s4.head_1);
    var sb = ensureNotNull(other.head_1);
    var posA = sa.pos_1;
    var posB = sb.pos_1;
    var pos = new Long(0, 0);
    var count;
    while (pos.compareTo_n4fqi2_k$(_this__u8e3s4.size_1) < 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = sa.limit_1 - posA | 0;
      var tmp1_minOf = sb.limit_1 - posB | 0;
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      count = toLong(tmp$ret$0);
      var inductionVariable = new Long(0, 0);
      var last = count;
      if (inductionVariable.compareTo_n4fqi2_k$(last) < 0)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
          var tmp = sa.data_1;
          var tmp1 = posA;
          posA = tmp1 + 1 | 0;
          var tmp_0 = tmp[tmp1];
          var tmp_1 = sb.data_1;
          var tmp2 = posB;
          posB = tmp2 + 1 | 0;
          if (!(tmp_0 === tmp_1[tmp2]))
            return false;
        }
         while (inductionVariable.compareTo_n4fqi2_k$(last) < 0);
      if (posA === sa.limit_1) {
        sa = ensureNotNull(sa.next_1);
        posA = sa.pos_1;
      }
      if (posB === sb.limit_1) {
        sb = ensureNotNull(sb.next_1);
        posB = sb.pos_1;
      }
      pos = pos.plus_u6jwas_k$(count);
    }
    return true;
  }
  function commonHashCode(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var result = 1;
    do {
      var pos = s.pos_1;
      var limit = s.limit_1;
      while (pos < limit) {
        result = imul(31, result) + s.data_1[pos] | 0;
        var tmp1 = pos;
        pos = tmp1 + 1 | 0;
      }
      s = ensureNotNull(s.next_1);
    }
     while (!(s === _this__u8e3s4.head_1));
    return result;
  }
  function commonCopy(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    var result = new Buffer();
    if (_this__u8e3s4.size_1.equals(new Long(0, 0)))
      return result;
    var head = ensureNotNull(_this__u8e3s4.head_1);
    var headCopy = head.sharedCopy_timhza_k$();
    result.head_1 = headCopy;
    headCopy.prev_1 = result.head_1;
    headCopy.next_1 = headCopy.prev_1;
    var s = head.next_1;
    while (!(s === head)) {
      ensureNotNull(headCopy.prev_1).push_toq0no_k$(ensureNotNull(s).sharedCopy_timhza_k$());
      s = s.next_1;
    }
    result.size_1 = _this__u8e3s4.size_1;
    return result;
  }
  function commonSnapshot(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.check' call
    var tmp0_check = _this__u8e3s4.size_1.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSnapshot.<anonymous>' call
      tmp$ret$0 = 'size > Int.MAX_VALUE: ' + toString(_this__u8e3s4.size_1);
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.snapshot_80qwxv_k$(_this__u8e3s4.size_1.toInt_1tsl84_k$());
  }
  function commonSnapshot_0(_this__u8e3s4, byteCount) {
    init_properties__Buffer_kt_t3kap3();
    if (byteCount === 0)
      return Companion_getInstance_6().EMPTY_1;
    checkOffsetAndCount(_this__u8e3s4.size_1, new Long(0, 0), toLong(byteCount));
    var offset = 0;
    var segmentCount = 0;
    var s = _this__u8e3s4.head_1;
    while (offset < byteCount) {
      if (ensureNotNull(s).limit_1 === s.pos_1) {
        throw AssertionError_init_$Create$('s.limit == s.pos');
      }
      offset = offset + (s.limit_1 - s.pos_1 | 0) | 0;
      var tmp0 = segmentCount;
      segmentCount = tmp0 + 1 | 0;
      s = s.next_1;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = segmentCount;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var segments = tmp$ret$0;
    var directory = new Int32Array(imul(segmentCount, 2));
    offset = 0;
    segmentCount = 0;
    s = _this__u8e3s4.head_1;
    while (offset < byteCount) {
      segments[segmentCount] = ensureNotNull(s).data_1;
      offset = offset + (s.limit_1 - s.pos_1 | 0) | 0;
      var tmp = segmentCount;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = offset;
      tmp$ret$1 = Math.min(tmp1_minOf, byteCount);
      directory[tmp] = tmp$ret$1;
      directory[segmentCount + segments.length | 0] = s.pos_1;
      s.shared_1 = true;
      var tmp1 = segmentCount;
      segmentCount = tmp1 + 1 | 0;
      s = s.next_1;
    }
    return new SegmentedByteString(isArray(segments) ? segments : THROW_CCE(), directory);
  }
  function commonReadUnsafe(_this__u8e3s4, unsafeCursor) {
    init_properties__Buffer_kt_t3kap3();
    var unsafeCursor_0 = resolveDefaultParameter(unsafeCursor);
    // Inline function 'kotlin.check' call
    var tmp0_check = unsafeCursor_0.buffer_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadUnsafe.<anonymous>' call
      tmp$ret$0 = 'already attached to a buffer';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    unsafeCursor_0.buffer_1 = _this__u8e3s4;
    unsafeCursor_0.readWrite_1 = false;
    return unsafeCursor_0;
  }
  function commonReadAndWriteUnsafe(_this__u8e3s4, unsafeCursor) {
    init_properties__Buffer_kt_t3kap3();
    var unsafeCursor_0 = resolveDefaultParameter(unsafeCursor);
    // Inline function 'kotlin.check' call
    var tmp0_check = unsafeCursor_0.buffer_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadAndWriteUnsafe.<anonymous>' call
      tmp$ret$0 = 'already attached to a buffer';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    unsafeCursor_0.buffer_1 = _this__u8e3s4;
    unsafeCursor_0.readWrite_1 = true;
    return unsafeCursor_0;
  }
  function commonNext(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.offset_1.equals(ensureNotNull(_this__u8e3s4.buffer_1).size_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonNext.<anonymous>' call
      tmp$ret$0 = 'no more bytes';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (_this__u8e3s4.offset_1.equals(new Long(-1, -1))) {
      tmp = _this__u8e3s4.seek_2x71gi_k$(new Long(0, 0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = _this__u8e3s4.offset_1;
      var tmp2_plus = _this__u8e3s4.end_1 - _this__u8e3s4.start_1 | 0;
      tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
      tmp = _this__u8e3s4.seek_2x71gi_k$(tmp$ret$1);
    }
    return tmp;
  }
  function commonSeek(_this__u8e3s4, offset) {
    init_properties__Buffer_kt_t3kap3();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_checkNotNull = _this__u8e3s4.buffer_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonSeek.<anonymous>' call
        tmp$ret$0 = 'not attached to a buffer';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    var buffer = tmp$ret$1;
    if (offset.compareTo_n4fqi2_k$(new Long(-1, -1)) < 0 ? true : offset.compareTo_n4fqi2_k$(buffer.size_1) > 0) {
      throw new ArrayIndexOutOfBoundsException('offset=' + toString(offset) + ' > size=' + toString(buffer.size_1));
    }
    if (offset.equals(new Long(-1, -1)) ? true : offset.equals(buffer.size_1)) {
      _this__u8e3s4.segment_1 = null;
      _this__u8e3s4.offset_1 = offset;
      _this__u8e3s4.data_1 = null;
      _this__u8e3s4.start_1 = -1;
      _this__u8e3s4.end_1 = -1;
      return -1;
    }
    var min = new Long(0, 0);
    var max = buffer.size_1;
    var head = buffer.head_1;
    var tail = buffer.head_1;
    if (!(_this__u8e3s4.segment_1 == null)) {
      var tmp$ret$2;
      // Inline function 'kotlin.Long.minus' call
      var tmp1_minus = _this__u8e3s4.offset_1;
      var tmp2_minus = _this__u8e3s4.start_1 - ensureNotNull(_this__u8e3s4.segment_1).pos_1 | 0;
      tmp$ret$2 = tmp1_minus.minus_llf5ei_k$(toLong(tmp2_minus));
      var segmentOffset = tmp$ret$2;
      if (segmentOffset.compareTo_n4fqi2_k$(offset) > 0) {
        max = segmentOffset;
        tail = _this__u8e3s4.segment_1;
      } else {
        min = segmentOffset;
        head = _this__u8e3s4.segment_1;
      }
    }
    var next;
    var nextOffset;
    if (max.minus_llf5ei_k$(offset).compareTo_n4fqi2_k$(offset.minus_llf5ei_k$(min)) > 0) {
      next = head;
      nextOffset = min;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        var tmp3_plus = nextOffset;
        var tmp4_plus = ensureNotNull(next).limit_1 - next.pos_1 | 0;
        tmp$ret$3 = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
        if (!(offset.compareTo_n4fqi2_k$(tmp$ret$3) >= 0)) {
          break $l$loop;
        }
        nextOffset = nextOffset.plus_u6jwas_k$(toLong(next.limit_1 - next.pos_1 | 0));
        next = next.next_1;
      }
    } else {
      next = tail;
      nextOffset = max;
      while (nextOffset.compareTo_n4fqi2_k$(offset) > 0) {
        next = ensureNotNull(next).prev_1;
        nextOffset = nextOffset.minus_llf5ei_k$(toLong(ensureNotNull(next).limit_1 - next.pos_1 | 0));
      }
    }
    if (_this__u8e3s4.readWrite_1 ? ensureNotNull(next).shared_1 : false) {
      var unsharedNext = next.unsharedCopy_5kj8b7_k$();
      if (buffer.head_1 === next) {
        buffer.head_1 = unsharedNext;
      }
      next = next.push_toq0no_k$(unsharedNext);
      ensureNotNull(next.prev_1).pop_2dsh_k$();
    }
    _this__u8e3s4.segment_1 = next;
    _this__u8e3s4.offset_1 = offset;
    _this__u8e3s4.data_1 = ensureNotNull(next).data_1;
    _this__u8e3s4.start_1 = next.pos_1 + offset.minus_llf5ei_k$(nextOffset).toInt_1tsl84_k$() | 0;
    _this__u8e3s4.end_1 = next.limit_1;
    return _this__u8e3s4.end_1 - _this__u8e3s4.start_1 | 0;
  }
  function commonResizeBuffer(_this__u8e3s4, newSize) {
    init_properties__Buffer_kt_t3kap3();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_checkNotNull = _this__u8e3s4.buffer_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonResizeBuffer.<anonymous>' call
        tmp$ret$0 = 'not attached to a buffer';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    var buffer = tmp$ret$1;
    // Inline function 'kotlin.check' call
    var tmp1_check = _this__u8e3s4.readWrite_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonResizeBuffer.<anonymous>' call
      tmp$ret$2 = 'resizeBuffer() only permitted for read/write buffers';
      var message_0 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var oldSize = buffer.size_1;
    if (newSize.compareTo_n4fqi2_k$(oldSize) <= 0) {
      // Inline function 'kotlin.require' call
      var tmp2_require = newSize.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_require) {
        var tmp$ret$3;
        // Inline function 'okio.internal.commonResizeBuffer.<anonymous>' call
        tmp$ret$3 = 'newSize < 0: ' + toString(newSize);
        var message_1 = tmp$ret$3;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      var bytesToSubtract = oldSize.minus_llf5ei_k$(newSize);
      $l$loop: while (bytesToSubtract.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tail = ensureNotNull(buffer.head_1).prev_1;
        var tailSize = ensureNotNull(tail).limit_1 - tail.pos_1 | 0;
        if (toLong(tailSize).compareTo_n4fqi2_k$(bytesToSubtract) <= 0) {
          buffer.head_1 = tail.pop_2dsh_k$();
          SegmentPool_getInstance().recycle_axzlry_k$(tail);
          bytesToSubtract = bytesToSubtract.minus_llf5ei_k$(toLong(tailSize));
        } else {
          var tmp0_this = tail;
          tmp0_this.limit_1 = tmp0_this.limit_1 - bytesToSubtract.toInt_1tsl84_k$() | 0;
          break $l$loop;
        }
      }
      _this__u8e3s4.segment_1 = null;
      _this__u8e3s4.offset_1 = newSize;
      _this__u8e3s4.data_1 = null;
      _this__u8e3s4.start_1 = -1;
      _this__u8e3s4.end_1 = -1;
    } else if (newSize.compareTo_n4fqi2_k$(oldSize) > 0) {
      var needsToSeek = true;
      var bytesToAdd = newSize.minus_llf5ei_k$(oldSize);
      while (bytesToAdd.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tail_0 = buffer.writableSegment_g5a3pu_k$(1);
        var tmp$ret$5;
        // Inline function 'okio.minOf' call
        var tmp3_minOf = bytesToAdd;
        Companion_getInstance_1();
        var tmp4_minOf = 8192 - tail_0.limit_1 | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = toLong(tmp4_minOf);
        tmp$ret$4 = tmp3_minOf.compareTo_n4fqi2_k$(tmp0_minOf) <= 0 ? tmp3_minOf : tmp0_minOf;
        tmp$ret$5 = tmp$ret$4;
        var segmentBytesToAdd = tmp$ret$5.toInt_1tsl84_k$();
        var tmp1_this = tail_0;
        tmp1_this.limit_1 = tmp1_this.limit_1 + segmentBytesToAdd | 0;
        bytesToAdd = bytesToAdd.minus_llf5ei_k$(toLong(segmentBytesToAdd));
        if (needsToSeek) {
          _this__u8e3s4.segment_1 = tail_0;
          _this__u8e3s4.offset_1 = oldSize;
          _this__u8e3s4.data_1 = tail_0.data_1;
          _this__u8e3s4.start_1 = tail_0.limit_1 - segmentBytesToAdd | 0;
          _this__u8e3s4.end_1 = tail_0.limit_1;
          needsToSeek = false;
        }
      }
    }
    buffer.size_1 = newSize;
    return oldSize;
  }
  function commonExpandBuffer(_this__u8e3s4, minByteCount) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.require' call
    var tmp0_require = minByteCount > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
      tmp$ret$0 = 'minByteCount <= 0: ' + minByteCount;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    Companion_getInstance_1();
    var tmp1_require = minByteCount <= 8192;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
      tmp$ret$1 = 'minByteCount > Segment.SIZE: ' + minByteCount;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp2_checkNotNull = _this__u8e3s4.buffer_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp2_checkNotNull == null) {
        var tmp$ret$2;
        // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
        tmp$ret$2 = 'not attached to a buffer';
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      } else {
        tmp$ret$3 = tmp2_checkNotNull;
        break $l$block;
      }
    }
    var buffer = tmp$ret$3;
    // Inline function 'kotlin.check' call
    var tmp3_check = _this__u8e3s4.readWrite_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
      tmp$ret$4 = 'expandBuffer() only permitted for read/write buffers';
      var message_2 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    var oldSize = buffer.size_1;
    var tail = buffer.writableSegment_g5a3pu_k$(minByteCount);
    Companion_getInstance_1();
    var result = 8192 - tail.limit_1 | 0;
    var tmp = tail;
    Companion_getInstance_1();
    tmp.limit_1 = 8192;
    var tmp_0 = buffer;
    var tmp$ret$5;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$5 = oldSize.plus_u6jwas_k$(toLong(result));
    tmp_0.size_1 = tmp$ret$5;
    _this__u8e3s4.segment_1 = tail;
    _this__u8e3s4.offset_1 = oldSize;
    _this__u8e3s4.data_1 = tail.data_1;
    var tmp_1 = _this__u8e3s4;
    Companion_getInstance_1();
    tmp_1.start_1 = 8192 - result | 0;
    var tmp_2 = _this__u8e3s4;
    Companion_getInstance_1();
    tmp_2.end_1 = 8192;
    return toLong(result);
  }
  function commonClose(_this__u8e3s4) {
    init_properties__Buffer_kt_t3kap3();
    // Inline function 'kotlin.check' call
    var tmp0_check = !(_this__u8e3s4.buffer_1 == null);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonClose.<anonymous>' call
      tmp$ret$0 = 'not attached to a buffer';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    _this__u8e3s4.buffer_1 = null;
    _this__u8e3s4.segment_1 = null;
    _this__u8e3s4.offset_1 = new Long(-1, -1);
    _this__u8e3s4.data_1 = null;
    _this__u8e3s4.start_1 = -1;
    _this__u8e3s4.end_1 = -1;
  }
  function seek(_this__u8e3s4, fromIndex, lambda) {
    init_properties__Buffer_kt_t3kap3();
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return lambda(null, new Long(-1, -1));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    if (_this__u8e3s4.size_1.minus_llf5ei_k$(fromIndex).compareTo_n4fqi2_k$(fromIndex) < 0) {
      var offset = _this__u8e3s4.size_1;
      while (offset.compareTo_n4fqi2_k$(fromIndex) > 0) {
        s = ensureNotNull(s.prev_1);
        offset = offset.minus_llf5ei_k$(toLong(s.limit_1 - s.pos_1 | 0));
      }
      return lambda(s, offset);
    } else {
      var offset_0 = new Long(0, 0);
      $l$loop: while (true) {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = offset_0;
        var tmp1_plus = s.limit_1 - s.pos_1 | 0;
        tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
        var nextOffset = tmp$ret$0;
        if (nextOffset.compareTo_n4fqi2_k$(fromIndex) > 0)
          break $l$loop;
        s = ensureNotNull(s.next_1);
        offset_0 = nextOffset;
      }
      return lambda(s, offset_0);
    }
  }
  function get_OVERFLOW_DIGIT_START() {
    return OVERFLOW_DIGIT_START;
  }
  var OVERFLOW_DIGIT_START;
  function get_OVERFLOW_ZONE() {
    return OVERFLOW_ZONE;
  }
  var OVERFLOW_ZONE;
  function get_SEGMENTING_THRESHOLD() {
    return SEGMENTING_THRESHOLD;
  }
  var SEGMENTING_THRESHOLD;
  function readUtf8Line(_this__u8e3s4, newline) {
    init_properties__Buffer_kt_t3kap3();
    var tmp;
    var tmp_0;
    if (newline.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      tmp$ret$0 = newline.minus_llf5ei_k$(new Long(1, 0));
      var tmp_1 = _this__u8e3s4.get_ec5on4_k$(tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 13;
      tmp_0 = tmp_1 === toByte(tmp$ret$1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var result = _this__u8e3s4.readUtf8_y4u7qn_k$(newline.minus_llf5ei_k$(new Long(1, 0)));
      _this__u8e3s4.skip_vl0dd4_k$(new Long(2, 0));
      tmp = result;
    } else {
      var result_0 = _this__u8e3s4.readUtf8_y4u7qn_k$(newline);
      _this__u8e3s4.skip_vl0dd4_k$(new Long(1, 0));
      tmp = result_0;
    }
    return tmp;
  }
  function selectPrefix(_this__u8e3s4, options, selectTruncated) {
    init_properties__Buffer_kt_t3kap3();
    var tmp0_elvis_lhs = _this__u8e3s4.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return selectTruncated ? -2 : -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var s = head;
    var data = head.data_1;
    var pos = head.pos_1;
    var limit = head.limit_1;
    var trie = options.trie_1;
    var triePos = 0;
    var prefixIndex = -1;
    navigateTrie: while (true) {
      var tmp1 = triePos;
      triePos = tmp1 + 1 | 0;
      var scanOrSelect = trie[tmp1];
      var tmp2 = triePos;
      triePos = tmp2 + 1 | 0;
      var possiblePrefixIndex = trie[tmp2];
      if (!(possiblePrefixIndex === -1)) {
        prefixIndex = possiblePrefixIndex;
      }
      var nextStep;
      if (s == null) {
        break navigateTrie;
      } else if (scanOrSelect < 0) {
        var scanByteCount = imul(-1, scanOrSelect);
        var trieLimit = triePos + scanByteCount | 0;
        $l$loop: while (true) {
          var tmp$ret$0;
          // Inline function 'okio.and' call
          var tmp_0 = data;
          var tmp3 = pos;
          pos = tmp3 + 1 | 0;
          var tmp0_and = tmp_0[tmp3];
          tmp$ret$0 = tmp0_and & 255;
          var byte = tmp$ret$0;
          var tmp4 = triePos;
          triePos = tmp4 + 1 | 0;
          if (!(byte === trie[tmp4]))
            return prefixIndex;
          var scanComplete = triePos === trieLimit;
          if (pos === limit) {
            s = ensureNotNull(ensureNotNull(s).next_1);
            pos = s.pos_1;
            data = s.data_1;
            limit = s.limit_1;
            if (s === head) {
              if (!scanComplete)
                break navigateTrie;
              s = null;
            }
          }
          if (scanComplete) {
            nextStep = trie[triePos];
            break $l$loop;
          }
        }
      } else {
        var selectChoiceCount = scanOrSelect;
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp_1 = data;
        var tmp5 = pos;
        pos = tmp5 + 1 | 0;
        var tmp1_and = tmp_1[tmp5];
        tmp$ret$1 = tmp1_and & 255;
        var byte_0 = tmp$ret$1;
        var selectLimit = triePos + selectChoiceCount | 0;
        $l$loop_0: while (true) {
          if (triePos === selectLimit)
            return prefixIndex;
          if (byte_0 === trie[triePos]) {
            nextStep = trie[triePos + selectChoiceCount | 0];
            break $l$loop_0;
          }
          var tmp6 = triePos;
          triePos = tmp6 + 1 | 0;
        }
        if (pos === limit) {
          s = ensureNotNull(s.next_1);
          pos = s.pos_1;
          data = s.data_1;
          limit = s.limit_1;
          if (s === head) {
            s = null;
          }
        }
      }
      if (nextStep >= 0)
        return nextStep;
      triePos = -nextStep | 0;
    }
    if (selectTruncated)
      return -2;
    return prefixIndex;
  }
  function selectPrefix$default(_this__u8e3s4, options, selectTruncated, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      selectTruncated = false;
    return selectPrefix(_this__u8e3s4, options, selectTruncated);
  }
  function rangeEquals(segment, segmentPos, bytes, bytesOffset, bytesLimit) {
    init_properties__Buffer_kt_t3kap3();
    var segment_0 = segment;
    var segmentPos_0 = segmentPos;
    var segmentLimit = segment_0.limit_1;
    var data = segment_0.data_1;
    var i = bytesOffset;
    while (i < bytesLimit) {
      if (segmentPos_0 === segmentLimit) {
        segment_0 = ensureNotNull(segment_0.next_1);
        data = segment_0.data_1;
        segmentPos_0 = segment_0.pos_1;
        segmentLimit = segment_0.limit_1;
      }
      if (!(data[segmentPos_0] === bytes[i])) {
        return false;
      }
      var tmp0 = segmentPos_0;
      segmentPos_0 = tmp0 + 1 | 0;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    return true;
  }
  var properties_initialized__Buffer_kt_iuq071;
  function init_properties__Buffer_kt_t3kap3() {
    if (properties_initialized__Buffer_kt_iuq071) {
    } else {
      properties_initialized__Buffer_kt_iuq071 = true;
      HEX_DIGIT_BYTES = asUtf8ToByteArray('0123456789abcdef');
    }
  }
  function get_HEX_DIGIT_CHARS() {
    init_properties__ByteString_kt_zd4rxu();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function commonUtf8(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var result = _this__u8e3s4.utf8__1;
    if (result == null) {
      result = toUtf8String(_this__u8e3s4.internalArray_tr176k_k$());
      _this__u8e3s4.set_utf8_ds4bj_k$(result);
    }
    return result;
  }
  function commonBase64(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    return encodeBase64$default(_this__u8e3s4.data_1, null, 1, null);
  }
  function commonBase64Url(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    return encodeBase64(_this__u8e3s4.data_1, get_BASE64_URL_SAFE());
  }
  function commonHex(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var result = charArray(imul(_this__u8e3s4.data_1.length, 2));
    var c = 0;
    var indexedObject = _this__u8e3s4.data_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1 = c;
      c = tmp1 + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      var tmp$ret$0;
      // Inline function 'okio.shr' call
      tmp$ret$0 = b >> 4;
      result[tmp1] = tmp[tmp$ret$0 & 15];
      var tmp2 = c;
      c = tmp2 + 1 | 0;
      var tmp_0 = get_HEX_DIGIT_CHARS();
      var tmp$ret$1;
      // Inline function 'okio.and' call
      tmp$ret$1 = b & 15;
      result[tmp2] = tmp_0[tmp$ret$1];
    }
    return concatToString(result);
  }
  function commonToAsciiLowercase(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var i = 0;
    $l$loop: while (i < _this__u8e3s4.data_1.length) {
      var c = _this__u8e3s4.data_1[i];
      var tmp;
      var tmp_0 = c;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 65;
      if (tmp_0 < toByte(tmp$ret$0)) {
        tmp = true;
      } else {
        var tmp_1 = c;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 90;
        tmp = tmp_1 > toByte(tmp$ret$1);
      }
      if (tmp) {
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        continue $l$loop;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = _this__u8e3s4.data_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_copyOf;
      tmp$ret$3 = tmp$ret$2.slice();
      var lowercase = tmp$ret$3;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
      lowercase[tmp1] = toByte(c - -32 | 0);
      $l$loop_0: while (i < lowercase.length) {
        c = lowercase[i];
        var tmp_2;
        var tmp_3 = c;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 65;
        if (tmp_3 < toByte(tmp$ret$4)) {
          tmp_2 = true;
        } else {
          var tmp_4 = c;
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 90;
          tmp_2 = tmp_4 > toByte(tmp$ret$5);
        }
        if (tmp_2) {
          var tmp2 = i;
          i = tmp2 + 1 | 0;
          continue $l$loop_0;
        }
        lowercase[i] = toByte(c - -32 | 0);
        var tmp3 = i;
        i = tmp3 + 1 | 0;
      }
      return new ByteString(lowercase);
    }
    return _this__u8e3s4;
  }
  function commonToAsciiUppercase(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var i = 0;
    $l$loop: while (i < _this__u8e3s4.data_1.length) {
      var c = _this__u8e3s4.data_1[i];
      var tmp;
      var tmp_0 = c;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 97;
      if (tmp_0 < toByte(tmp$ret$0)) {
        tmp = true;
      } else {
        var tmp_1 = c;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 122;
        tmp = tmp_1 > toByte(tmp$ret$1);
      }
      if (tmp) {
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        continue $l$loop;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = _this__u8e3s4.data_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_copyOf;
      tmp$ret$3 = tmp$ret$2.slice();
      var lowercase = tmp$ret$3;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
      lowercase[tmp1] = toByte(c - 32 | 0);
      $l$loop_0: while (i < lowercase.length) {
        c = lowercase[i];
        var tmp_2;
        var tmp_3 = c;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 97;
        if (tmp_3 < toByte(tmp$ret$4)) {
          tmp_2 = true;
        } else {
          var tmp_4 = c;
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 122;
          tmp_2 = tmp_4 > toByte(tmp$ret$5);
        }
        if (tmp_2) {
          var tmp2 = i;
          i = tmp2 + 1 | 0;
          continue $l$loop_0;
        }
        lowercase[i] = toByte(c - 32 | 0);
        var tmp3 = i;
        i = tmp3 + 1 | 0;
      }
      return new ByteString(lowercase);
    }
    return _this__u8e3s4;
  }
  function commonSubstring(_this__u8e3s4, beginIndex, endIndex) {
    init_properties__ByteString_kt_zd4rxu();
    var endIndex_0 = resolveDefaultParameter_0(_this__u8e3s4, endIndex);
    // Inline function 'kotlin.require' call
    var tmp0_require = beginIndex >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSubstring.<anonymous>' call
      tmp$ret$0 = 'beginIndex < 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = endIndex_0 <= _this__u8e3s4.data_1.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonSubstring.<anonymous>' call
      tmp$ret$1 = 'endIndex > length(' + _this__u8e3s4.data_1.length + ')';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var subLen = endIndex_0 - beginIndex | 0;
    // Inline function 'kotlin.require' call
    var tmp2_require = subLen >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonSubstring.<anonymous>' call
      tmp$ret$2 = 'endIndex < beginIndex';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (beginIndex === 0 ? endIndex_0 === _this__u8e3s4.data_1.length : false) {
      return _this__u8e3s4;
    }
    return new ByteString(copyOfRange(_this__u8e3s4.data_1, beginIndex, endIndex_0));
  }
  function commonGetByte(_this__u8e3s4, pos) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.data_1[pos];
  }
  function commonGetSize(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.data_1.length;
  }
  function commonToByteArray(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = _this__u8e3s4.data_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  }
  function commonInternalArray(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.data_1;
  }
  function commonWrite_4(_this__u8e3s4, buffer, offset, byteCount) {
    init_properties__ByteString_kt_zd4rxu();
    buffer.write_v9wlwc_k$(_this__u8e3s4.data_1, offset, byteCount);
  }
  function commonRangeEquals_0(_this__u8e3s4, offset, other, otherOffset, byteCount) {
    init_properties__ByteString_kt_zd4rxu();
    return other.rangeEquals_agw6hu_k$(otherOffset, _this__u8e3s4.data_1, offset, byteCount);
  }
  function commonRangeEquals_1(_this__u8e3s4, offset, other, otherOffset, byteCount) {
    init_properties__ByteString_kt_zd4rxu();
    return (((offset >= 0 ? offset <= (_this__u8e3s4.data_1.length - byteCount | 0) : false) ? otherOffset >= 0 : false) ? otherOffset <= (other.length - byteCount | 0) : false) ? arrayRangeEquals(_this__u8e3s4.data_1, offset, other, otherOffset, byteCount) : false;
  }
  function commonCopyInto(_this__u8e3s4, offset, target, targetOffset, byteCount) {
    init_properties__ByteString_kt_zd4rxu();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = _this__u8e3s4.data_1;
    var tmp1_copyInto = offset + byteCount | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = target;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, targetOffset, offset, tmp1_copyInto);
    tmp$ret$4 = target;
  }
  function commonStartsWith(_this__u8e3s4, prefix) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.rangeEquals_gaazw5_k$(0, prefix, 0, prefix.get_size_woubt6_k$());
  }
  function commonStartsWith_0(_this__u8e3s4, prefix) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.rangeEquals_agw6hu_k$(0, prefix, 0, prefix.length);
  }
  function commonEndsWith(_this__u8e3s4, suffix) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.rangeEquals_gaazw5_k$(_this__u8e3s4.get_size_woubt6_k$() - suffix.get_size_woubt6_k$() | 0, suffix, 0, suffix.get_size_woubt6_k$());
  }
  function commonEndsWith_0(_this__u8e3s4, suffix) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.rangeEquals_agw6hu_k$(_this__u8e3s4.get_size_woubt6_k$() - suffix.length | 0, suffix, 0, suffix.length);
  }
  function commonIndexOf_1(_this__u8e3s4, other, fromIndex) {
    init_properties__ByteString_kt_zd4rxu();
    var limit = _this__u8e3s4.data_1.length - other.length | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$0 = Math.max(fromIndex, 0);
    var inductionVariable = tmp$ret$0;
    if (inductionVariable <= limit)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (arrayRangeEquals(_this__u8e3s4.data_1, i, other, 0, other.length)) {
          return i;
        }
      }
       while (!(i === limit));
    return -1;
  }
  function commonLastIndexOf(_this__u8e3s4, other, fromIndex) {
    init_properties__ByteString_kt_zd4rxu();
    return _this__u8e3s4.lastIndexOf_ttj3xt_k$(other.internalArray_tr176k_k$(), fromIndex);
  }
  function commonLastIndexOf_0(_this__u8e3s4, other, fromIndex) {
    init_properties__ByteString_kt_zd4rxu();
    var fromIndex_0 = resolveDefaultParameter_0(_this__u8e3s4, fromIndex);
    var limit = _this__u8e3s4.data_1.length - other.length | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = Math.min(fromIndex_0, limit);
    var inductionVariable = tmp$ret$0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (arrayRangeEquals(_this__u8e3s4.data_1, i, other, 0, other.length)) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    return -1;
  }
  function commonEquals_0(_this__u8e3s4, other) {
    init_properties__ByteString_kt_zd4rxu();
    var tmp;
    if (other === _this__u8e3s4) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = other.get_size_woubt6_k$() === _this__u8e3s4.data_1.length ? other.rangeEquals_agw6hu_k$(0, _this__u8e3s4.data_1, 0, _this__u8e3s4.data_1.length) : false;
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function commonHashCode_0(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var result = _this__u8e3s4.hashCode_2;
    if (!(result === 0))
      return result;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = contentHashCode(_this__u8e3s4.data_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'okio.internal.commonHashCode.<anonymous>' call
    _this__u8e3s4.set_hashCode_gxsuy0_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function commonCompareTo(_this__u8e3s4, other) {
    init_properties__ByteString_kt_zd4rxu();
    var sizeA = _this__u8e3s4.get_size_woubt6_k$();
    var sizeB = other.get_size_woubt6_k$();
    var i = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    tmp$ret$0 = Math.min(sizeA, sizeB);
    var size = tmp$ret$0;
    $l$loop: while (i < size) {
      var tmp$ret$1;
      // Inline function 'okio.and' call
      var tmp0_and = _this__u8e3s4.get_fkrdnv_k$(i);
      tmp$ret$1 = tmp0_and & 255;
      var byteA = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'okio.and' call
      var tmp1_and = other.get_fkrdnv_k$(i);
      tmp$ret$2 = tmp1_and & 255;
      var byteB = tmp$ret$2;
      if (byteA === byteB) {
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        continue $l$loop;
      }
      return byteA < byteB ? -1 : 1;
    }
    if (sizeA === sizeB)
      return 0;
    return sizeA < sizeB ? -1 : 1;
  }
  function commonToString(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = _this__u8e3s4.data_1;
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    if (tmp$ret$0)
      return '[size=0]';
    var i = codePointIndexToCharIndex$accessor$13225fg(_this__u8e3s4.data_1, 64);
    if (i === -1) {
      var tmp;
      if (_this__u8e3s4.data_1.length <= 64) {
        tmp = '[hex=' + _this__u8e3s4.hex_27mj_k$() + ']';
      } else {
        var tmp_0 = _this__u8e3s4.data_1.length;
        var tmp$ret$4;
        $l$block: {
          // Inline function 'okio.internal.commonSubstring' call
          var endIndex = resolveDefaultParameter_0(_this__u8e3s4, 64);
          // Inline function 'kotlin.require' call
          var tmp0_require = true;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$1;
            // Inline function 'okio.internal.commonSubstring.<anonymous>' call
            tmp$ret$1 = 'beginIndex < 0';
            var message = tmp$ret$1;
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          var tmp1_require = endIndex <= _this__u8e3s4.data_1.length;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp1_require) {
            var tmp$ret$2;
            // Inline function 'okio.internal.commonSubstring.<anonymous>' call
            tmp$ret$2 = 'endIndex > length(' + _this__u8e3s4.data_1.length + ')';
            var message_0 = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          var subLen = endIndex - 0 | 0;
          // Inline function 'kotlin.require' call
          var tmp2_require = subLen >= 0;
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp2_require) {
            var tmp$ret$3;
            // Inline function 'okio.internal.commonSubstring.<anonymous>' call
            tmp$ret$3 = 'endIndex < beginIndex';
            var message_1 = tmp$ret$3;
            throw IllegalArgumentException_init_$Create$(toString(message_1));
          }
          if (endIndex === _this__u8e3s4.data_1.length) {
            tmp$ret$4 = _this__u8e3s4;
            break $l$block;
          }
          tmp$ret$4 = new ByteString(copyOfRange(_this__u8e3s4.data_1, 0, endIndex));
        }
        tmp = '[size=' + tmp_0 + ' hex=' + tmp$ret$4.hex_27mj_k$() + '\u2026]';
      }
      return tmp;
    }
    var text = _this__u8e3s4.utf8_255yp_k$();
    var tmp$ret$6;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = text;
    tmp$ret$6 = tmp$ret$5.substring(0, i);
    var tmp_1 = tmp$ret$6;
    var tmp_2 = replace$default(tmp_1, '\\', '\\\\', false, 4, null);
    var tmp_3 = replace$default(tmp_2, '\n', '\\n', false, 4, null);
    var safeText = replace$default(tmp_3, '\r', '\\r', false, 4, null);
    var tmp_4;
    if (i < text.length) {
      tmp_4 = '[size=' + _this__u8e3s4.data_1.length + ' text=' + safeText + '\u2026]';
    } else {
      tmp_4 = '[text=' + safeText + ']';
    }
    return tmp_4;
  }
  function commonOf(data) {
    init_properties__ByteString_kt_zd4rxu();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = data;
    tmp$ret$1 = tmp$ret$0.slice();
    return new ByteString(tmp$ret$1);
  }
  function commonToByteString(_this__u8e3s4, offset, byteCount) {
    init_properties__ByteString_kt_zd4rxu();
    var byteCount_0 = resolveDefaultParameter_1(_this__u8e3s4, byteCount);
    checkOffsetAndCount(toLong(_this__u8e3s4.length), toLong(offset), toLong(byteCount_0));
    return new ByteString(copyOfRange(_this__u8e3s4, offset, offset + byteCount_0 | 0));
  }
  function commonEncodeUtf8(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var byteString = new ByteString(asUtf8ToByteArray(_this__u8e3s4));
    byteString.set_utf8_ds4bj_k$(_this__u8e3s4);
    return byteString;
  }
  function commonDecodeBase64(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    var decoded = decodeBase64ToArray(_this__u8e3s4);
    return !(decoded == null) ? new ByteString(decoded) : null;
  }
  function commonDecodeHex(_this__u8e3s4) {
    init_properties__ByteString_kt_zd4rxu();
    // Inline function 'kotlin.require' call
    var tmp0_require = (_this__u8e3s4.length % 2 | 0) === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonDecodeHex.<anonymous>' call
      tmp$ret$0 = 'Unexpected hex string: ' + _this__u8e3s4;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var result = new Int8Array(_this__u8e3s4.length / 2 | 0);
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var d1 = decodeHexDigit$accessor$13225fg_0(charSequenceGet(_this__u8e3s4, imul(i, 2))) << 4;
        var d2 = decodeHexDigit$accessor$13225fg_0(charSequenceGet(_this__u8e3s4, imul(i, 2) + 1 | 0));
        result[i] = toByte(d1 + d2 | 0);
      }
       while (inductionVariable <= last);
    return new ByteString(result);
  }
  function codePointIndexToCharIndex(s, codePointCount) {
    init_properties__ByteString_kt_zd4rxu();
    var charCount = 0;
    var j = 0;
    // Inline function 'okio.processUtf8CodePoints' call
    var tmp0_processUtf8CodePoints = s.length;
    var index = 0;
    while (index < tmp0_processUtf8CodePoints) {
      var b0 = s[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
        var tmp1__anonymous__uwfjfc = b0;
        var tmp0 = j;
        j = tmp0 + 1 | 0;
        if (tmp0 === codePointCount) {
          return charCount;
        }
        var tmp;
        var tmp_0;
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 10;
        if (!(tmp1__anonymous__uwfjfc === tmp$ret$0)) {
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 13;
          tmp_1 = !(tmp1__anonymous__uwfjfc === tmp$ret$1);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp$ret$2;
          // Inline function 'okio.isIsoControl' call
          tmp$ret$2 = (0 <= tmp1__anonymous__uwfjfc ? tmp1__anonymous__uwfjfc <= 31 : false) ? true : 127 <= tmp1__anonymous__uwfjfc ? tmp1__anonymous__uwfjfc <= 159 : false;
          tmp_0 = tmp$ret$2;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = true;
        } else {
          tmp = tmp1__anonymous__uwfjfc === get_REPLACEMENT_CODE_POINT();
        }
        if (tmp) {
          return -1;
        }
        charCount = charCount + (tmp1__anonymous__uwfjfc < 65536 ? 1 : 2) | 0;
        var tmp0_0 = index;
        index = tmp0_0 + 1 | 0;
        while (index < tmp0_processUtf8CodePoints ? s[index] >= 0 : false) {
          // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp2__anonymous__z9zvc9 = s[tmp1];
          var tmp0_1 = j;
          j = tmp0_1 + 1 | 0;
          if (tmp0_1 === codePointCount) {
            return charCount;
          }
          var tmp_2;
          var tmp_3;
          var tmp_4;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 10;
          if (!(tmp2__anonymous__z9zvc9 === tmp$ret$3)) {
            var tmp$ret$4;
            // Inline function 'kotlin.code' call
            tmp$ret$4 = 13;
            tmp_4 = !(tmp2__anonymous__z9zvc9 === tmp$ret$4);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            var tmp$ret$5;
            // Inline function 'okio.isIsoControl' call
            tmp$ret$5 = (0 <= tmp2__anonymous__z9zvc9 ? tmp2__anonymous__z9zvc9 <= 31 : false) ? true : 127 <= tmp2__anonymous__z9zvc9 ? tmp2__anonymous__z9zvc9 <= 159 : false;
            tmp_3 = tmp$ret$5;
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp_2 = true;
          } else {
            tmp_2 = tmp2__anonymous__z9zvc9 === get_REPLACEMENT_CODE_POINT();
          }
          if (tmp_2) {
            return -1;
          }
          charCount = charCount + (tmp2__anonymous__z9zvc9 < 65536 ? 1 : 2) | 0;
        }
      } else {
        var tmp$ret$6;
        // Inline function 'okio.shr' call
        tmp$ret$6 = b0 >> 5;
        if (tmp$ret$6 === -2) {
          var tmp_5 = index;
          var tmp$ret$10;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var tmp0_process2Utf8Bytes = index;
            if (tmp0_processUtf8CodePoints <= (tmp0_process2Utf8Bytes + 1 | 0)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp1__anonymous__uwfjfc_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_2 = j;
              j = tmp0_2 + 1 | 0;
              if (tmp0_2 === codePointCount) {
                return charCount;
              }
              var tmp_6;
              var tmp_7;
              var tmp_8;
              var tmp$ret$7;
              // Inline function 'kotlin.code' call
              tmp$ret$7 = 10;
              if (!(tmp1__anonymous__uwfjfc_0 === tmp$ret$7)) {
                var tmp$ret$8;
                // Inline function 'kotlin.code' call
                tmp$ret$8 = 13;
                tmp_8 = !(tmp1__anonymous__uwfjfc_0 === tmp$ret$8);
              } else {
                tmp_8 = false;
              }
              if (tmp_8) {
                var tmp$ret$9;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$9 = (0 <= tmp1__anonymous__uwfjfc_0 ? tmp1__anonymous__uwfjfc_0 <= 31 : false) ? true : 127 <= tmp1__anonymous__uwfjfc_0 ? tmp1__anonymous__uwfjfc_0 <= 159 : false;
                tmp_7 = tmp$ret$9;
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp_6 = true;
              } else {
                tmp_6 = tmp1__anonymous__uwfjfc_0 === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_6) {
                return -1;
              }
              charCount = charCount + (tmp1__anonymous__uwfjfc_0 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var b0_0 = s[tmp0_process2Utf8Bytes];
            var b1 = s[tmp0_process2Utf8Bytes + 1 | 0];
            var tmp$ret$12;
            // Inline function 'okio.isUtf8Continuation' call
            var tmp$ret$11;
            // Inline function 'okio.and' call
            tmp$ret$11 = b1 & 192;
            tmp$ret$12 = tmp$ret$11 === 128;
            if (!tmp$ret$12) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp2__anonymous__z9zvc9_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_3 = j;
              j = tmp0_3 + 1 | 0;
              if (tmp0_3 === codePointCount) {
                return charCount;
              }
              var tmp_9;
              var tmp_10;
              var tmp_11;
              var tmp$ret$13;
              // Inline function 'kotlin.code' call
              tmp$ret$13 = 10;
              if (!(tmp2__anonymous__z9zvc9_0 === tmp$ret$13)) {
                var tmp$ret$14;
                // Inline function 'kotlin.code' call
                tmp$ret$14 = 13;
                tmp_11 = !(tmp2__anonymous__z9zvc9_0 === tmp$ret$14);
              } else {
                tmp_11 = false;
              }
              if (tmp_11) {
                var tmp$ret$15;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$15 = (0 <= tmp2__anonymous__z9zvc9_0 ? tmp2__anonymous__z9zvc9_0 <= 31 : false) ? true : 127 <= tmp2__anonymous__z9zvc9_0 ? tmp2__anonymous__z9zvc9_0 <= 159 : false;
                tmp_10 = tmp$ret$15;
              } else {
                tmp_10 = false;
              }
              if (tmp_10) {
                tmp_9 = true;
              } else {
                tmp_9 = tmp2__anonymous__z9zvc9_0 === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_9) {
                return -1;
              }
              charCount = charCount + (tmp2__anonymous__z9zvc9_0 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var codePoint = get_MASK_2BYTES() ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              var tmp3__anonymous__ufb84q = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_4 = j;
              j = tmp0_4 + 1 | 0;
              if (tmp0_4 === codePointCount) {
                return charCount;
              }
              var tmp_12;
              var tmp_13;
              var tmp_14;
              var tmp$ret$16;
              // Inline function 'kotlin.code' call
              tmp$ret$16 = 10;
              if (!(tmp3__anonymous__ufb84q === tmp$ret$16)) {
                var tmp$ret$17;
                // Inline function 'kotlin.code' call
                tmp$ret$17 = 13;
                tmp_14 = !(tmp3__anonymous__ufb84q === tmp$ret$17);
              } else {
                tmp_14 = false;
              }
              if (tmp_14) {
                var tmp$ret$18;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$18 = (0 <= tmp3__anonymous__ufb84q ? tmp3__anonymous__ufb84q <= 31 : false) ? true : 127 <= tmp3__anonymous__ufb84q ? tmp3__anonymous__ufb84q <= 159 : false;
                tmp_13 = tmp$ret$18;
              } else {
                tmp_13 = false;
              }
              if (tmp_13) {
                tmp_12 = true;
              } else {
                tmp_12 = tmp3__anonymous__ufb84q === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_12) {
                return -1;
              }
              charCount = charCount + (tmp3__anonymous__ufb84q < 65536 ? 1 : 2) | 0;
            } else {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_5 = j;
              j = tmp0_5 + 1 | 0;
              if (tmp0_5 === codePointCount) {
                return charCount;
              }
              var tmp_15;
              var tmp_16;
              var tmp_17;
              var tmp$ret$19;
              // Inline function 'kotlin.code' call
              tmp$ret$19 = 10;
              if (!(codePoint === tmp$ret$19)) {
                var tmp$ret$20;
                // Inline function 'kotlin.code' call
                tmp$ret$20 = 13;
                tmp_17 = !(codePoint === tmp$ret$20);
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                var tmp$ret$21;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$21 = (0 <= codePoint ? codePoint <= 31 : false) ? true : 127 <= codePoint ? codePoint <= 159 : false;
                tmp_16 = tmp$ret$21;
              } else {
                tmp_16 = false;
              }
              if (tmp_16) {
                tmp_15 = true;
              } else {
                tmp_15 = codePoint === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_15) {
                return -1;
              }
              charCount = charCount + (codePoint < 65536 ? 1 : 2) | 0;
            }
            tmp$ret$10 = 2;
          }
          index = tmp_5 + tmp$ret$10 | 0;
        } else {
          var tmp$ret$22;
          // Inline function 'okio.shr' call
          tmp$ret$22 = b0 >> 4;
          if (tmp$ret$22 === -2) {
            var tmp_18 = index;
            var tmp$ret$28;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var tmp5_process3Utf8Bytes = index;
              if (tmp0_processUtf8CodePoints <= (tmp5_process3Utf8Bytes + 2 | 0)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp6__anonymous__fv9ai5 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_6 = j;
                j = tmp0_6 + 1 | 0;
                if (tmp0_6 === codePointCount) {
                  return charCount;
                }
                var tmp_19;
                var tmp_20;
                var tmp_21;
                var tmp$ret$23;
                // Inline function 'kotlin.code' call
                tmp$ret$23 = 10;
                if (!(tmp6__anonymous__fv9ai5 === tmp$ret$23)) {
                  var tmp$ret$24;
                  // Inline function 'kotlin.code' call
                  tmp$ret$24 = 13;
                  tmp_21 = !(tmp6__anonymous__fv9ai5 === tmp$ret$24);
                } else {
                  tmp_21 = false;
                }
                if (tmp_21) {
                  var tmp$ret$25;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$25 = (0 <= tmp6__anonymous__fv9ai5 ? tmp6__anonymous__fv9ai5 <= 31 : false) ? true : 127 <= tmp6__anonymous__fv9ai5 ? tmp6__anonymous__fv9ai5 <= 159 : false;
                  tmp_20 = tmp$ret$25;
                } else {
                  tmp_20 = false;
                }
                if (tmp_20) {
                  tmp_19 = true;
                } else {
                  tmp_19 = tmp6__anonymous__fv9ai5 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_19) {
                  return -1;
                }
                charCount = charCount + (tmp6__anonymous__fv9ai5 < 65536 ? 1 : 2) | 0;
                var tmp_22;
                if (tmp0_processUtf8CodePoints <= (tmp5_process3Utf8Bytes + 1 | 0)) {
                  tmp_22 = true;
                } else {
                  var tmp$ret$27;
                  // Inline function 'okio.isUtf8Continuation' call
                  var tmp4_isUtf8Continuation = s[tmp5_process3Utf8Bytes + 1 | 0];
                  var tmp$ret$26;
                  // Inline function 'okio.and' call
                  tmp$ret$26 = tmp4_isUtf8Continuation & 192;
                  tmp$ret$27 = tmp$ret$26 === 128;
                  tmp_22 = !tmp$ret$27;
                }
                if (tmp_22) {
                  tmp$ret$28 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$28 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = s[tmp5_process3Utf8Bytes];
              var b1_0 = s[tmp5_process3Utf8Bytes + 1 | 0];
              var tmp$ret$30;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$29;
              // Inline function 'okio.and' call
              tmp$ret$29 = b1_0 & 192;
              tmp$ret$30 = tmp$ret$29 === 128;
              if (!tmp$ret$30) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp7__anonymous__b0knam = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_7 = j;
                j = tmp0_7 + 1 | 0;
                if (tmp0_7 === codePointCount) {
                  return charCount;
                }
                var tmp_23;
                var tmp_24;
                var tmp_25;
                var tmp$ret$31;
                // Inline function 'kotlin.code' call
                tmp$ret$31 = 10;
                if (!(tmp7__anonymous__b0knam === tmp$ret$31)) {
                  var tmp$ret$32;
                  // Inline function 'kotlin.code' call
                  tmp$ret$32 = 13;
                  tmp_25 = !(tmp7__anonymous__b0knam === tmp$ret$32);
                } else {
                  tmp_25 = false;
                }
                if (tmp_25) {
                  var tmp$ret$33;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$33 = (0 <= tmp7__anonymous__b0knam ? tmp7__anonymous__b0knam <= 31 : false) ? true : 127 <= tmp7__anonymous__b0knam ? tmp7__anonymous__b0knam <= 159 : false;
                  tmp_24 = tmp$ret$33;
                } else {
                  tmp_24 = false;
                }
                if (tmp_24) {
                  tmp_23 = true;
                } else {
                  tmp_23 = tmp7__anonymous__b0knam === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_23) {
                  return -1;
                }
                charCount = charCount + (tmp7__anonymous__b0knam < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 1;
                break $l$block_4;
              }
              var b2 = s[tmp5_process3Utf8Bytes + 2 | 0];
              var tmp$ret$35;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$34;
              // Inline function 'okio.and' call
              tmp$ret$34 = b2 & 192;
              tmp$ret$35 = tmp$ret$34 === 128;
              if (!tmp$ret$35) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp8__anonymous__65w033 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_8 = j;
                j = tmp0_8 + 1 | 0;
                if (tmp0_8 === codePointCount) {
                  return charCount;
                }
                var tmp_26;
                var tmp_27;
                var tmp_28;
                var tmp$ret$36;
                // Inline function 'kotlin.code' call
                tmp$ret$36 = 10;
                if (!(tmp8__anonymous__65w033 === tmp$ret$36)) {
                  var tmp$ret$37;
                  // Inline function 'kotlin.code' call
                  tmp$ret$37 = 13;
                  tmp_28 = !(tmp8__anonymous__65w033 === tmp$ret$37);
                } else {
                  tmp_28 = false;
                }
                if (tmp_28) {
                  var tmp$ret$38;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$38 = (0 <= tmp8__anonymous__65w033 ? tmp8__anonymous__65w033 <= 31 : false) ? true : 127 <= tmp8__anonymous__65w033 ? tmp8__anonymous__65w033 <= 159 : false;
                  tmp_27 = tmp$ret$38;
                } else {
                  tmp_27 = false;
                }
                if (tmp_27) {
                  tmp_26 = true;
                } else {
                  tmp_26 = tmp8__anonymous__65w033 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_26) {
                  return -1;
                }
                charCount = charCount + (tmp8__anonymous__65w033 < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 2;
                break $l$block_4;
              }
              var codePoint_0 = get_MASK_3BYTES() ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp9__anonymous__1b7cvk = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_9 = j;
                j = tmp0_9 + 1 | 0;
                if (tmp0_9 === codePointCount) {
                  return charCount;
                }
                var tmp_29;
                var tmp_30;
                var tmp_31;
                var tmp$ret$39;
                // Inline function 'kotlin.code' call
                tmp$ret$39 = 10;
                if (!(tmp9__anonymous__1b7cvk === tmp$ret$39)) {
                  var tmp$ret$40;
                  // Inline function 'kotlin.code' call
                  tmp$ret$40 = 13;
                  tmp_31 = !(tmp9__anonymous__1b7cvk === tmp$ret$40);
                } else {
                  tmp_31 = false;
                }
                if (tmp_31) {
                  var tmp$ret$41;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$41 = (0 <= tmp9__anonymous__1b7cvk ? tmp9__anonymous__1b7cvk <= 31 : false) ? true : 127 <= tmp9__anonymous__1b7cvk ? tmp9__anonymous__1b7cvk <= 159 : false;
                  tmp_30 = tmp$ret$41;
                } else {
                  tmp_30 = false;
                }
                if (tmp_30) {
                  tmp_29 = true;
                } else {
                  tmp_29 = tmp9__anonymous__1b7cvk === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_29) {
                  return -1;
                }
                charCount = charCount + (tmp9__anonymous__1b7cvk < 65536 ? 1 : 2) | 0;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                var tmp10__anonymous__yfiz50 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_10 = j;
                j = tmp0_10 + 1 | 0;
                if (tmp0_10 === codePointCount) {
                  return charCount;
                }
                var tmp_32;
                var tmp_33;
                var tmp_34;
                var tmp$ret$42;
                // Inline function 'kotlin.code' call
                tmp$ret$42 = 10;
                if (!(tmp10__anonymous__yfiz50 === tmp$ret$42)) {
                  var tmp$ret$43;
                  // Inline function 'kotlin.code' call
                  tmp$ret$43 = 13;
                  tmp_34 = !(tmp10__anonymous__yfiz50 === tmp$ret$43);
                } else {
                  tmp_34 = false;
                }
                if (tmp_34) {
                  var tmp$ret$44;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$44 = (0 <= tmp10__anonymous__yfiz50 ? tmp10__anonymous__yfiz50 <= 31 : false) ? true : 127 <= tmp10__anonymous__yfiz50 ? tmp10__anonymous__yfiz50 <= 159 : false;
                  tmp_33 = tmp$ret$44;
                } else {
                  tmp_33 = false;
                }
                if (tmp_33) {
                  tmp_32 = true;
                } else {
                  tmp_32 = tmp10__anonymous__yfiz50 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_32) {
                  return -1;
                }
                charCount = charCount + (tmp10__anonymous__yfiz50 < 65536 ? 1 : 2) | 0;
              } else {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_11 = j;
                j = tmp0_11 + 1 | 0;
                if (tmp0_11 === codePointCount) {
                  return charCount;
                }
                var tmp_35;
                var tmp_36;
                var tmp_37;
                var tmp$ret$45;
                // Inline function 'kotlin.code' call
                tmp$ret$45 = 10;
                if (!(codePoint_0 === tmp$ret$45)) {
                  var tmp$ret$46;
                  // Inline function 'kotlin.code' call
                  tmp$ret$46 = 13;
                  tmp_37 = !(codePoint_0 === tmp$ret$46);
                } else {
                  tmp_37 = false;
                }
                if (tmp_37) {
                  var tmp$ret$47;
                  // Inline function 'okio.isIsoControl' call
                  tmp$ret$47 = (0 <= codePoint_0 ? codePoint_0 <= 31 : false) ? true : 127 <= codePoint_0 ? codePoint_0 <= 159 : false;
                  tmp_36 = tmp$ret$47;
                } else {
                  tmp_36 = false;
                }
                if (tmp_36) {
                  tmp_35 = true;
                } else {
                  tmp_35 = codePoint_0 === get_REPLACEMENT_CODE_POINT();
                }
                if (tmp_35) {
                  return -1;
                }
                charCount = charCount + (codePoint_0 < 65536 ? 1 : 2) | 0;
              }
              tmp$ret$28 = 3;
            }
            index = tmp_18 + tmp$ret$28 | 0;
          } else {
            var tmp$ret$48;
            // Inline function 'okio.shr' call
            tmp$ret$48 = b0 >> 3;
            if (tmp$ret$48 === -2) {
              var tmp_38 = index;
              var tmp$ret$54;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var tmp13_process4Utf8Bytes = index;
                if (tmp0_processUtf8CodePoints <= (tmp13_process4Utf8Bytes + 3 | 0)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp14__anonymous__f0seaw = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_12 = j;
                  j = tmp0_12 + 1 | 0;
                  if (tmp0_12 === codePointCount) {
                    return charCount;
                  }
                  var tmp_39;
                  var tmp_40;
                  var tmp_41;
                  var tmp$ret$49;
                  // Inline function 'kotlin.code' call
                  tmp$ret$49 = 10;
                  if (!(tmp14__anonymous__f0seaw === tmp$ret$49)) {
                    var tmp$ret$50;
                    // Inline function 'kotlin.code' call
                    tmp$ret$50 = 13;
                    tmp_41 = !(tmp14__anonymous__f0seaw === tmp$ret$50);
                  } else {
                    tmp_41 = false;
                  }
                  if (tmp_41) {
                    var tmp$ret$51;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$51 = (0 <= tmp14__anonymous__f0seaw ? tmp14__anonymous__f0seaw <= 31 : false) ? true : 127 <= tmp14__anonymous__f0seaw ? tmp14__anonymous__f0seaw <= 159 : false;
                    tmp_40 = tmp$ret$51;
                  } else {
                    tmp_40 = false;
                  }
                  if (tmp_40) {
                    tmp_39 = true;
                  } else {
                    tmp_39 = tmp14__anonymous__f0seaw === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_39) {
                    return -1;
                  }
                  charCount = charCount + (tmp14__anonymous__f0seaw < 65536 ? 1 : 2) | 0;
                  var tmp_42;
                  if (tmp0_processUtf8CodePoints <= (tmp13_process4Utf8Bytes + 1 | 0)) {
                    tmp_42 = true;
                  } else {
                    var tmp$ret$53;
                    // Inline function 'okio.isUtf8Continuation' call
                    var tmp11_isUtf8Continuation = s[tmp13_process4Utf8Bytes + 1 | 0];
                    var tmp$ret$52;
                    // Inline function 'okio.and' call
                    tmp$ret$52 = tmp11_isUtf8Continuation & 192;
                    tmp$ret$53 = tmp$ret$52 === 128;
                    tmp_42 = !tmp$ret$53;
                  }
                  if (tmp_42) {
                    tmp$ret$54 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_43;
                    if (tmp0_processUtf8CodePoints <= (tmp13_process4Utf8Bytes + 2 | 0)) {
                      tmp_43 = true;
                    } else {
                      var tmp$ret$56;
                      // Inline function 'okio.isUtf8Continuation' call
                      var tmp12_isUtf8Continuation = s[tmp13_process4Utf8Bytes + 2 | 0];
                      var tmp$ret$55;
                      // Inline function 'okio.and' call
                      tmp$ret$55 = tmp12_isUtf8Continuation & 192;
                      tmp$ret$56 = tmp$ret$55 === 128;
                      tmp_43 = !tmp$ret$56;
                    }
                    if (tmp_43) {
                      tmp$ret$54 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$54 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = s[tmp13_process4Utf8Bytes];
                var b1_1 = s[tmp13_process4Utf8Bytes + 1 | 0];
                var tmp$ret$58;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$57;
                // Inline function 'okio.and' call
                tmp$ret$57 = b1_1 & 192;
                tmp$ret$58 = tmp$ret$57 === 128;
                if (!tmp$ret$58) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp15__anonymous__a63r3d = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_13 = j;
                  j = tmp0_13 + 1 | 0;
                  if (tmp0_13 === codePointCount) {
                    return charCount;
                  }
                  var tmp_44;
                  var tmp_45;
                  var tmp_46;
                  var tmp$ret$59;
                  // Inline function 'kotlin.code' call
                  tmp$ret$59 = 10;
                  if (!(tmp15__anonymous__a63r3d === tmp$ret$59)) {
                    var tmp$ret$60;
                    // Inline function 'kotlin.code' call
                    tmp$ret$60 = 13;
                    tmp_46 = !(tmp15__anonymous__a63r3d === tmp$ret$60);
                  } else {
                    tmp_46 = false;
                  }
                  if (tmp_46) {
                    var tmp$ret$61;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$61 = (0 <= tmp15__anonymous__a63r3d ? tmp15__anonymous__a63r3d <= 31 : false) ? true : 127 <= tmp15__anonymous__a63r3d ? tmp15__anonymous__a63r3d <= 159 : false;
                    tmp_45 = tmp$ret$61;
                  } else {
                    tmp_45 = false;
                  }
                  if (tmp_45) {
                    tmp_44 = true;
                  } else {
                    tmp_44 = tmp15__anonymous__a63r3d === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_44) {
                    return -1;
                  }
                  charCount = charCount + (tmp15__anonymous__a63r3d < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 1;
                  break $l$block_10;
                }
                var b2_0 = s[tmp13_process4Utf8Bytes + 2 | 0];
                var tmp$ret$63;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$62;
                // Inline function 'okio.and' call
                tmp$ret$62 = b2_0 & 192;
                tmp$ret$63 = tmp$ret$62 === 128;
                if (!tmp$ret$63) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp16__anonymous__5bf3vu = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_14 = j;
                  j = tmp0_14 + 1 | 0;
                  if (tmp0_14 === codePointCount) {
                    return charCount;
                  }
                  var tmp_47;
                  var tmp_48;
                  var tmp_49;
                  var tmp$ret$64;
                  // Inline function 'kotlin.code' call
                  tmp$ret$64 = 10;
                  if (!(tmp16__anonymous__5bf3vu === tmp$ret$64)) {
                    var tmp$ret$65;
                    // Inline function 'kotlin.code' call
                    tmp$ret$65 = 13;
                    tmp_49 = !(tmp16__anonymous__5bf3vu === tmp$ret$65);
                  } else {
                    tmp_49 = false;
                  }
                  if (tmp_49) {
                    var tmp$ret$66;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$66 = (0 <= tmp16__anonymous__5bf3vu ? tmp16__anonymous__5bf3vu <= 31 : false) ? true : 127 <= tmp16__anonymous__5bf3vu ? tmp16__anonymous__5bf3vu <= 159 : false;
                    tmp_48 = tmp$ret$66;
                  } else {
                    tmp_48 = false;
                  }
                  if (tmp_48) {
                    tmp_47 = true;
                  } else {
                    tmp_47 = tmp16__anonymous__5bf3vu === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_47) {
                    return -1;
                  }
                  charCount = charCount + (tmp16__anonymous__5bf3vu < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 2;
                  break $l$block_10;
                }
                var b3 = s[tmp13_process4Utf8Bytes + 3 | 0];
                var tmp$ret$68;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$67;
                // Inline function 'okio.and' call
                tmp$ret$67 = b3 & 192;
                tmp$ret$68 = tmp$ret$67 === 128;
                if (!tmp$ret$68) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp17__anonymous__gqgob = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_15 = j;
                  j = tmp0_15 + 1 | 0;
                  if (tmp0_15 === codePointCount) {
                    return charCount;
                  }
                  var tmp_50;
                  var tmp_51;
                  var tmp_52;
                  var tmp$ret$69;
                  // Inline function 'kotlin.code' call
                  tmp$ret$69 = 10;
                  if (!(tmp17__anonymous__gqgob === tmp$ret$69)) {
                    var tmp$ret$70;
                    // Inline function 'kotlin.code' call
                    tmp$ret$70 = 13;
                    tmp_52 = !(tmp17__anonymous__gqgob === tmp$ret$70);
                  } else {
                    tmp_52 = false;
                  }
                  if (tmp_52) {
                    var tmp$ret$71;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$71 = (0 <= tmp17__anonymous__gqgob ? tmp17__anonymous__gqgob <= 31 : false) ? true : 127 <= tmp17__anonymous__gqgob ? tmp17__anonymous__gqgob <= 159 : false;
                    tmp_51 = tmp$ret$71;
                  } else {
                    tmp_51 = false;
                  }
                  if (tmp_51) {
                    tmp_50 = true;
                  } else {
                    tmp_50 = tmp17__anonymous__gqgob === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_50) {
                    return -1;
                  }
                  charCount = charCount + (tmp17__anonymous__gqgob < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = get_MASK_4BYTES() ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp18__anonymous__4dy6j8 = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_16 = j;
                  j = tmp0_16 + 1 | 0;
                  if (tmp0_16 === codePointCount) {
                    return charCount;
                  }
                  var tmp_53;
                  var tmp_54;
                  var tmp_55;
                  var tmp$ret$72;
                  // Inline function 'kotlin.code' call
                  tmp$ret$72 = 10;
                  if (!(tmp18__anonymous__4dy6j8 === tmp$ret$72)) {
                    var tmp$ret$73;
                    // Inline function 'kotlin.code' call
                    tmp$ret$73 = 13;
                    tmp_55 = !(tmp18__anonymous__4dy6j8 === tmp$ret$73);
                  } else {
                    tmp_55 = false;
                  }
                  if (tmp_55) {
                    var tmp$ret$74;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$74 = (0 <= tmp18__anonymous__4dy6j8 ? tmp18__anonymous__4dy6j8 <= 31 : false) ? true : 127 <= tmp18__anonymous__4dy6j8 ? tmp18__anonymous__4dy6j8 <= 159 : false;
                    tmp_54 = tmp$ret$74;
                  } else {
                    tmp_54 = false;
                  }
                  if (tmp_54) {
                    tmp_53 = true;
                  } else {
                    tmp_53 = tmp18__anonymous__4dy6j8 === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_53) {
                    return -1;
                  }
                  charCount = charCount + (tmp18__anonymous__4dy6j8 < 65536 ? 1 : 2) | 0;
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp19__anonymous__98mtqr = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_17 = j;
                  j = tmp0_17 + 1 | 0;
                  if (tmp0_17 === codePointCount) {
                    return charCount;
                  }
                  var tmp_56;
                  var tmp_57;
                  var tmp_58;
                  var tmp$ret$75;
                  // Inline function 'kotlin.code' call
                  tmp$ret$75 = 10;
                  if (!(tmp19__anonymous__98mtqr === tmp$ret$75)) {
                    var tmp$ret$76;
                    // Inline function 'kotlin.code' call
                    tmp$ret$76 = 13;
                    tmp_58 = !(tmp19__anonymous__98mtqr === tmp$ret$76);
                  } else {
                    tmp_58 = false;
                  }
                  if (tmp_58) {
                    var tmp$ret$77;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$77 = (0 <= tmp19__anonymous__98mtqr ? tmp19__anonymous__98mtqr <= 31 : false) ? true : 127 <= tmp19__anonymous__98mtqr ? tmp19__anonymous__98mtqr <= 159 : false;
                    tmp_57 = tmp$ret$77;
                  } else {
                    tmp_57 = false;
                  }
                  if (tmp_57) {
                    tmp_56 = true;
                  } else {
                    tmp_56 = tmp19__anonymous__98mtqr === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_56) {
                    return -1;
                  }
                  charCount = charCount + (tmp19__anonymous__98mtqr < 65536 ? 1 : 2) | 0;
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  var tmp20__anonymous__q2j3lv = get_REPLACEMENT_CODE_POINT();
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_18 = j;
                  j = tmp0_18 + 1 | 0;
                  if (tmp0_18 === codePointCount) {
                    return charCount;
                  }
                  var tmp_59;
                  var tmp_60;
                  var tmp_61;
                  var tmp$ret$78;
                  // Inline function 'kotlin.code' call
                  tmp$ret$78 = 10;
                  if (!(tmp20__anonymous__q2j3lv === tmp$ret$78)) {
                    var tmp$ret$79;
                    // Inline function 'kotlin.code' call
                    tmp$ret$79 = 13;
                    tmp_61 = !(tmp20__anonymous__q2j3lv === tmp$ret$79);
                  } else {
                    tmp_61 = false;
                  }
                  if (tmp_61) {
                    var tmp$ret$80;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$80 = (0 <= tmp20__anonymous__q2j3lv ? tmp20__anonymous__q2j3lv <= 31 : false) ? true : 127 <= tmp20__anonymous__q2j3lv ? tmp20__anonymous__q2j3lv <= 159 : false;
                    tmp_60 = tmp$ret$80;
                  } else {
                    tmp_60 = false;
                  }
                  if (tmp_60) {
                    tmp_59 = true;
                  } else {
                    tmp_59 = tmp20__anonymous__q2j3lv === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_59) {
                    return -1;
                  }
                  charCount = charCount + (tmp20__anonymous__q2j3lv < 65536 ? 1 : 2) | 0;
                } else {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_19 = j;
                  j = tmp0_19 + 1 | 0;
                  if (tmp0_19 === codePointCount) {
                    return charCount;
                  }
                  var tmp_62;
                  var tmp_63;
                  var tmp_64;
                  var tmp$ret$81;
                  // Inline function 'kotlin.code' call
                  tmp$ret$81 = 10;
                  if (!(codePoint_1 === tmp$ret$81)) {
                    var tmp$ret$82;
                    // Inline function 'kotlin.code' call
                    tmp$ret$82 = 13;
                    tmp_64 = !(codePoint_1 === tmp$ret$82);
                  } else {
                    tmp_64 = false;
                  }
                  if (tmp_64) {
                    var tmp$ret$83;
                    // Inline function 'okio.isIsoControl' call
                    tmp$ret$83 = (0 <= codePoint_1 ? codePoint_1 <= 31 : false) ? true : 127 <= codePoint_1 ? codePoint_1 <= 159 : false;
                    tmp_63 = tmp$ret$83;
                  } else {
                    tmp_63 = false;
                  }
                  if (tmp_63) {
                    tmp_62 = true;
                  } else {
                    tmp_62 = codePoint_1 === get_REPLACEMENT_CODE_POINT();
                  }
                  if (tmp_62) {
                    return -1;
                  }
                  charCount = charCount + (codePoint_1 < 65536 ? 1 : 2) | 0;
                }
                tmp$ret$54 = 4;
              }
              index = tmp_38 + tmp$ret$54 | 0;
            } else {
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp3__anonymous__ufb84q_0 = get_REPLACEMENT_CODE_POINT();
              var tmp0_20 = j;
              j = tmp0_20 + 1 | 0;
              if (tmp0_20 === codePointCount) {
                return charCount;
              }
              var tmp_65;
              var tmp_66;
              var tmp_67;
              var tmp$ret$84;
              // Inline function 'kotlin.code' call
              tmp$ret$84 = 10;
              if (!(tmp3__anonymous__ufb84q_0 === tmp$ret$84)) {
                var tmp$ret$85;
                // Inline function 'kotlin.code' call
                tmp$ret$85 = 13;
                tmp_67 = !(tmp3__anonymous__ufb84q_0 === tmp$ret$85);
              } else {
                tmp_67 = false;
              }
              if (tmp_67) {
                var tmp$ret$86;
                // Inline function 'okio.isIsoControl' call
                tmp$ret$86 = (0 <= tmp3__anonymous__ufb84q_0 ? tmp3__anonymous__ufb84q_0 <= 31 : false) ? true : 127 <= tmp3__anonymous__ufb84q_0 ? tmp3__anonymous__ufb84q_0 <= 159 : false;
                tmp_66 = tmp$ret$86;
              } else {
                tmp_66 = false;
              }
              if (tmp_66) {
                tmp_65 = true;
              } else {
                tmp_65 = tmp3__anonymous__ufb84q_0 === get_REPLACEMENT_CODE_POINT();
              }
              if (tmp_65) {
                return -1;
              }
              charCount = charCount + (tmp3__anonymous__ufb84q_0 < 65536 ? 1 : 2) | 0;
              var tmp2 = index;
              index = tmp2 + 1 | 0;
            }
          }
        }
      }
    }
    return charCount;
  }
  function decodeHexDigit(c) {
    init_properties__ByteString_kt_zd4rxu();
    var tmp0_subject = c;
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(48));
    } else if (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(97)) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65)) + 10 | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Unexpected hex digit: ' + new Char(c));
    }
    return tmp;
  }
  function codePointIndexToCharIndex$accessor$13225fg(s, codePointCount) {
    init_properties__ByteString_kt_zd4rxu();
    return codePointIndexToCharIndex(s, codePointCount);
  }
  function decodeHexDigit$accessor$13225fg(c) {
    init_properties__ByteString_kt_zd4rxu();
    return decodeHexDigit(c);
  }
  function decodeHexDigit$accessor$13225fg_0(c) {
    init_properties__ByteString_kt_zd4rxu();
    return decodeHexDigit(c);
  }
  var properties_initialized__ByteString_kt_74hdzq;
  function init_properties__ByteString_kt_zd4rxu() {
    if (properties_initialized__ByteString_kt_74hdzq) {
    } else {
      properties_initialized__ByteString_kt_74hdzq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
      HEX_DIGIT_CHARS = tmp$ret$0;
    }
  }
  function get_SLASH() {
    init_properties__Path_kt_76xum();
    return SLASH;
  }
  var SLASH;
  function get_BACKSLASH() {
    init_properties__Path_kt_76xum();
    return BACKSLASH;
  }
  var BACKSLASH;
  function get_ANY_SLASH() {
    init_properties__Path_kt_76xum();
    return ANY_SLASH;
  }
  var ANY_SLASH;
  function get_DOT() {
    init_properties__Path_kt_76xum();
    return DOT;
  }
  var DOT;
  function get_DOT_DOT() {
    init_properties__Path_kt_76xum();
    return DOT_DOT;
  }
  var DOT_DOT;
  var properties_initialized__Path_kt_hebc76;
  function init_properties__Path_kt_76xum() {
    if (properties_initialized__Path_kt_hebc76) {
    } else {
      properties_initialized__Path_kt_hebc76 = true;
      SLASH = Companion_getInstance_6().encodeUtf8_lzqk50_k$('/');
      BACKSLASH = Companion_getInstance_6().encodeUtf8_lzqk50_k$('\\');
      ANY_SLASH = Companion_getInstance_6().encodeUtf8_lzqk50_k$('/\\');
      DOT = Companion_getInstance_6().encodeUtf8_lzqk50_k$('.');
      DOT_DOT = Companion_getInstance_6().encodeUtf8_lzqk50_k$('..');
    }
  }
  function commonRead_2(_this__u8e3s4, sink, byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonRead.<anonymous>' call
      tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonRead.<anonymous>' call
      tmp$ret$1 = 'closed';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (_this__u8e3s4.buffer_1.size_1.equals(new Long(0, 0))) {
      Companion_getInstance_1();
      var read = _this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192));
      if (read.equals(new Long(-1, -1)))
        return new Long(-1, -1);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp2_minOf = _this__u8e3s4.buffer_1.size_1;
    tmp$ret$2 = byteCount.compareTo_n4fqi2_k$(tmp2_minOf) <= 0 ? byteCount : tmp2_minOf;
    var toRead = tmp$ret$2;
    return _this__u8e3s4.buffer_1.read_nz46cz_k$(sink, toRead);
  }
  function commonExhausted(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonExhausted.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (_this__u8e3s4.buffer_1.exhausted_p1jt55_k$()) {
      Companion_getInstance_1();
      tmp = _this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1));
    } else {
      tmp = false;
    }
    return tmp;
  }
  function commonRequire(_this__u8e3s4, byteCount) {
    if (!_this__u8e3s4.request_k7c0qh_k$(byteCount)) {
      throw EOFException_init_$Create$(null, 1, null);
    }
  }
  function commonRequest(_this__u8e3s4, byteCount) {
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonRequest.<anonymous>' call
      tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonRequest.<anonymous>' call
      tmp$ret$1 = 'closed';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    while (_this__u8e3s4.buffer_1.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      Companion_getInstance_1();
      if (_this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1)))
        return false;
    }
    return true;
  }
  function commonReadByte_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(1, 0));
    return _this__u8e3s4.buffer_1.readByte_ectjk2_k$();
  }
  function commonReadByteString_1(_this__u8e3s4) {
    _this__u8e3s4.buffer_1.writeAll_rsmo5y_k$(_this__u8e3s4.source_1);
    return _this__u8e3s4.buffer_1.readByteString_nzt46n_k$();
  }
  function commonReadByteString_2(_this__u8e3s4, byteCount) {
    _this__u8e3s4.require_btziny_k$(byteCount);
    return _this__u8e3s4.buffer_1.readByteString_h2nnh5_k$(byteCount);
  }
  function commonSelect_0(_this__u8e3s4, options) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSelect.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (true) {
      var index = selectPrefix(_this__u8e3s4.buffer_1, options, true);
      var tmp0_subject = index;
      switch (tmp0_subject) {
        case -1:
          return -1;
        case -2:
          Companion_getInstance_1();
          if (_this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1)))
            return -1;
          break;
        default:
          var selectedSize = options.byteStrings_1[index].get_size_woubt6_k$();
          _this__u8e3s4.buffer_1.skip_vl0dd4_k$(toLong(selectedSize));
          return index;
      }
    }
  }
  function commonReadByteArray_1(_this__u8e3s4) {
    _this__u8e3s4.buffer_1.writeAll_rsmo5y_k$(_this__u8e3s4.source_1);
    return _this__u8e3s4.buffer_1.readByteArray_52wnjv_k$();
  }
  function commonReadByteArray_2(_this__u8e3s4, byteCount) {
    _this__u8e3s4.require_btziny_k$(byteCount);
    return _this__u8e3s4.buffer_1.readByteArray_a7crqd_k$(byteCount);
  }
  function commonReadFully_1(_this__u8e3s4, sink) {
    try {
      _this__u8e3s4.require_btziny_k$(toLong(sink.length));
    } catch ($p) {
      if ($p instanceof EOFException) {
        var offset = 0;
        while (_this__u8e3s4.buffer_1.size_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
          var read = _this__u8e3s4.buffer_1.read_43uq31_k$(sink, offset, _this__u8e3s4.buffer_1.size_1.toInt_1tsl84_k$());
          if (read === -1)
            throw AssertionError_init_$Create$_0();
          offset = offset + read | 0;
        }
        throw $p;
      } else {
        throw $p;
      }
    }
    _this__u8e3s4.buffer_1.readFully_rpc466_k$(sink);
  }
  function commonRead_3(_this__u8e3s4, sink, offset, byteCount) {
    checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
    if (_this__u8e3s4.buffer_1.size_1.equals(new Long(0, 0))) {
      Companion_getInstance_1();
      var read = _this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192));
      if (read.equals(new Long(-1, -1)))
        return -1;
    }
    var tmp$ret$1;
    // Inline function 'okio.minOf' call
    var tmp0_minOf = _this__u8e3s4.buffer_1.size_1;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf_0 = toLong(byteCount);
    tmp$ret$0 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp0_minOf) <= 0 ? tmp0_minOf_0 : tmp0_minOf;
    tmp$ret$1 = tmp$ret$0;
    var toRead = tmp$ret$1.toInt_1tsl84_k$();
    return _this__u8e3s4.buffer_1.read_43uq31_k$(sink, offset, toRead);
  }
  function commonReadFully_2(_this__u8e3s4, sink, byteCount) {
    try {
      _this__u8e3s4.require_btziny_k$(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        sink.writeAll_rsmo5y_k$(_this__u8e3s4.buffer_1);
        throw $p;
      } else {
        throw $p;
      }
    }
    _this__u8e3s4.buffer_1.readFully_an47ne_k$(sink, byteCount);
  }
  function commonReadAll_0(_this__u8e3s4, sink) {
    var totalBytesWritten = new Long(0, 0);
    $l$loop: while (true) {
      Companion_getInstance_1();
      if (!!_this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1))) {
        break $l$loop;
      }
      var emitByteCount = _this__u8e3s4.buffer_1.completeSegmentByteCount_8y8ucz_k$();
      if (emitByteCount.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.plus_u6jwas_k$(emitByteCount);
        sink.write_x0zrut_k$(_this__u8e3s4.buffer_1, emitByteCount);
      }
    }
    if (_this__u8e3s4.buffer_1.size_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.plus_u6jwas_k$(_this__u8e3s4.buffer_1.size_1);
      sink.write_x0zrut_k$(_this__u8e3s4.buffer_1, _this__u8e3s4.buffer_1.size_1);
    }
    return totalBytesWritten;
  }
  function commonReadUtf8_0(_this__u8e3s4) {
    _this__u8e3s4.buffer_1.writeAll_rsmo5y_k$(_this__u8e3s4.source_1);
    return _this__u8e3s4.buffer_1.readUtf8_echivt_k$();
  }
  function commonReadUtf8_1(_this__u8e3s4, byteCount) {
    _this__u8e3s4.require_btziny_k$(byteCount);
    return _this__u8e3s4.buffer_1.readUtf8_y4u7qn_k$(byteCount);
  }
  function commonReadUtf8Line_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 10;
    var newline = _this__u8e3s4.indexOf_q1ozk1_k$(toByte(tmp$ret$0));
    var tmp;
    if (newline.equals(new Long(-1, -1))) {
      var tmp_0;
      if (!_this__u8e3s4.buffer_1.size_1.equals(new Long(0, 0))) {
        tmp_0 = _this__u8e3s4.readUtf8_y4u7qn_k$(_this__u8e3s4.buffer_1.size_1);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      tmp = readUtf8Line(_this__u8e3s4.buffer_1, newline);
    }
    return tmp;
  }
  function commonReadUtf8LineStrict_0(_this__u8e3s4, limit) {
    // Inline function 'kotlin.require' call
    var tmp0_require = limit.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
      tmp$ret$0 = 'limit < 0: ' + toString(limit);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    Companion_getInstance();
    if (limit.equals(new Long(-1, 2147483647))) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$1 = limit.plus_u6jwas_k$(new Long(1, 0));
      tmp = tmp$ret$1;
    }
    var scanLength = tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.code' call
    tmp$ret$2 = 10;
    var newline = _this__u8e3s4.indexOf_b1qwk3_k$(toByte(tmp$ret$2), new Long(0, 0), scanLength);
    if (!newline.equals(new Long(-1, -1)))
      return readUtf8Line(_this__u8e3s4.buffer_1, newline);
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    Companion_getInstance();
    if (scanLength.compareTo_n4fqi2_k$(new Long(-1, 2147483647)) < 0) {
      tmp_3 = _this__u8e3s4.request_k7c0qh_k$(scanLength);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      var tmp$ret$3;
      // Inline function 'kotlin.Long.minus' call
      tmp$ret$3 = scanLength.minus_llf5ei_k$(new Long(1, 0));
      var tmp_4 = _this__u8e3s4.buffer_1.get_ec5on4_k$(tmp$ret$3);
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 13;
      tmp_2 = tmp_4 === toByte(tmp$ret$4);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      var tmp$ret$5;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$5 = scanLength.plus_u6jwas_k$(new Long(1, 0));
      tmp_1 = _this__u8e3s4.request_k7c0qh_k$(tmp$ret$5);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_5 = _this__u8e3s4.buffer_1.get_ec5on4_k$(scanLength);
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 10;
      tmp_0 = tmp_5 === toByte(tmp$ret$6);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      return readUtf8Line(_this__u8e3s4.buffer_1, scanLength);
    }
    var data = new Buffer();
    var tmp_6 = new Long(0, 0);
    var tmp$ret$8;
    // Inline function 'okio.minOf' call
    var tmp1_minOf = _this__u8e3s4.buffer_1.size_1;
    var tmp$ret$7;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = new Long(32, 0);
    tmp$ret$7 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    tmp$ret$8 = tmp$ret$7;
    _this__u8e3s4.buffer_1.copyTo_w2d2hb_k$(data, tmp_6, tmp$ret$8);
    var tmp$ret$9;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp2_minOf = _this__u8e3s4.buffer_1.size_1;
    tmp$ret$9 = tmp2_minOf.compareTo_n4fqi2_k$(limit) <= 0 ? tmp2_minOf : limit;
    throw new EOFException('\\n not found: limit=' + toString(tmp$ret$9) + ' content=' + data.readByteString_nzt46n_k$().hex_27mj_k$() + '\u2026');
  }
  function commonReadUtf8CodePoint_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(1, 0));
    var b0 = _this__u8e3s4.buffer_1.get_ec5on4_k$(new Long(0, 0));
    if ((b0 & 224) === 192) {
      _this__u8e3s4.require_btziny_k$(new Long(2, 0));
    } else if ((b0 & 240) === 224) {
      _this__u8e3s4.require_btziny_k$(new Long(3, 0));
    } else if ((b0 & 248) === 240) {
      _this__u8e3s4.require_btziny_k$(new Long(4, 0));
    }
    return _this__u8e3s4.buffer_1.readUtf8CodePoint_brmg90_k$();
  }
  function commonReadShort_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(2, 0));
    return _this__u8e3s4.buffer_1.readShort_ilpyey_k$();
  }
  function commonReadShortLe(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(2, 0));
    return _this__u8e3s4.buffer_1.readShortLe_lyi6qn_k$();
  }
  function commonReadInt_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(4, 0));
    return _this__u8e3s4.buffer_1.readInt_hv8cxl_k$();
  }
  function commonReadIntLe(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(4, 0));
    return _this__u8e3s4.buffer_1.readIntLe_ir3zn2_k$();
  }
  function commonReadLong_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(8, 0));
    return _this__u8e3s4.buffer_1.readLong_ecnd8u_k$();
  }
  function commonReadLongLe(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(8, 0));
    return _this__u8e3s4.buffer_1.readLongLe_bnxvp1_k$();
  }
  function commonReadDecimalLong_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(1, 0));
    var pos = new Long(0, 0);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = pos;
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      if (!_this__u8e3s4.request_k7c0qh_k$(tmp$ret$0)) {
        break $l$loop_0;
      }
      var b = _this__u8e3s4.buffer_1.get_ec5on4_k$(pos);
      var tmp;
      var tmp_0;
      var tmp_1 = b;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      if (tmp_1 < toByte(tmp$ret$1)) {
        tmp_0 = true;
      } else {
        var tmp_2 = b;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = 57;
        tmp_0 = tmp_2 > toByte(tmp$ret$2);
      }
      if (tmp_0) {
        var tmp_3;
        if (!pos.equals(new Long(0, 0))) {
          tmp_3 = true;
        } else {
          var tmp_4 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 45;
          tmp_3 = !(tmp_4 === toByte(tmp$ret$3));
        }
        tmp = tmp_3;
      } else {
        tmp = false;
      }
      if (tmp) {
        if (pos.equals(new Long(0, 0))) {
          var tmp$ret$4;
          // Inline function 'kotlin.text.toString' call
          tmp$ret$4 = toString_0(b, 16);
          throw NumberFormatException_init_$Create$("Expected a digit or '-' but was 0x" + tmp$ret$4);
        }
        break $l$loop_0;
      }
      var tmp0 = pos;
      pos = tmp0.inc_28ke_k$();
    }
    return _this__u8e3s4.buffer_1.readDecimalLong_uefo5l_k$();
  }
  function commonReadHexadecimalUnsignedLong_0(_this__u8e3s4) {
    _this__u8e3s4.require_btziny_k$(new Long(1, 0));
    var pos = 0;
    $l$loop: while (_this__u8e3s4.request_k7c0qh_k$(toLong(pos + 1 | 0))) {
      var b = _this__u8e3s4.buffer_1.get_ec5on4_k$(toLong(pos));
      var tmp;
      var tmp_0;
      var tmp_1;
      var tmp_2 = b;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      if (tmp_2 < toByte(tmp$ret$0)) {
        tmp_1 = true;
      } else {
        var tmp_3 = b;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 57;
        tmp_1 = tmp_3 > toByte(tmp$ret$1);
      }
      if (tmp_1) {
        var tmp_4;
        var tmp_5 = b;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = 97;
        if (tmp_5 < toByte(tmp$ret$2)) {
          tmp_4 = true;
        } else {
          var tmp_6 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 102;
          tmp_4 = tmp_6 > toByte(tmp$ret$3);
        }
        tmp_0 = tmp_4;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_7;
        var tmp_8 = b;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 65;
        if (tmp_8 < toByte(tmp$ret$4)) {
          tmp_7 = true;
        } else {
          var tmp_9 = b;
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 70;
          tmp_7 = tmp_9 > toByte(tmp$ret$5);
        }
        tmp = tmp_7;
      } else {
        tmp = false;
      }
      if (tmp) {
        if (pos === 0) {
          var tmp$ret$6;
          // Inline function 'kotlin.text.toString' call
          tmp$ret$6 = toString_0(b, 16);
          throw NumberFormatException_init_$Create$('Expected leading [0-9a-fA-F] character but was 0x' + tmp$ret$6);
        }
        break $l$loop;
      }
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
    }
    return _this__u8e3s4.buffer_1.readHexadecimalUnsignedLong_gqibbu_k$();
  }
  function commonSkip_0(_this__u8e3s4, byteCount) {
    var byteCount_0 = byteCount;
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSkip.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp;
      if (_this__u8e3s4.buffer_1.size_1.equals(new Long(0, 0))) {
        Companion_getInstance_1();
        tmp = _this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1));
      } else {
        tmp = false;
      }
      if (tmp) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = byteCount_0;
      var tmp2_minOf = _this__u8e3s4.buffer_1.size_1;
      tmp$ret$1 = tmp1_minOf.compareTo_n4fqi2_k$(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
      var toSkip = tmp$ret$1;
      _this__u8e3s4.buffer_1.skip_vl0dd4_k$(toSkip);
      byteCount_0 = byteCount_0.minus_llf5ei_k$(toSkip);
    }
  }
  function commonIndexOf_2(_this__u8e3s4, b, fromIndex, toIndex) {
    var fromIndex_0 = fromIndex;
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = (new Long(0, 0)).compareTo_n4fqi2_k$(fromIndex_0) <= 0 ? fromIndex_0.compareTo_n4fqi2_k$(toIndex) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
      tmp$ret$1 = 'fromIndex=' + toString(fromIndex_0) + ' toIndex=' + toString(toIndex);
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (fromIndex_0.compareTo_n4fqi2_k$(toIndex) < 0) {
      var result = _this__u8e3s4.buffer_1.indexOf_b1qwk3_k$(b, fromIndex_0, toIndex);
      if (!result.equals(new Long(-1, -1)))
        return result;
      var lastBufferSize = _this__u8e3s4.buffer_1.size_1;
      var tmp;
      if (lastBufferSize.compareTo_n4fqi2_k$(toIndex) >= 0) {
        tmp = true;
      } else {
        Companion_getInstance_1();
        tmp = _this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1));
      }
      if (tmp)
        return new Long(-1, -1);
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp2_maxOf = fromIndex_0;
      tmp$ret$2 = tmp2_maxOf.compareTo_n4fqi2_k$(lastBufferSize) >= 0 ? tmp2_maxOf : lastBufferSize;
      fromIndex_0 = tmp$ret$2;
    }
    return new Long(-1, -1);
  }
  function commonIndexOf_3(_this__u8e3s4, bytes, fromIndex) {
    var fromIndex_0 = fromIndex;
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (true) {
      var result = _this__u8e3s4.buffer_1.indexOf_t2mh2x_k$(bytes, fromIndex_0);
      if (!result.equals(new Long(-1, -1)))
        return result;
      var lastBufferSize = _this__u8e3s4.buffer_1.size_1;
      Companion_getInstance_1();
      if (_this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1)))
        return new Long(-1, -1);
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp3_maxOf = fromIndex_0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp1_minus = bytes.get_size_woubt6_k$();
      tmp$ret$1 = lastBufferSize.minus_llf5ei_k$(toLong(tmp1_minus));
      var tmp2_plus = tmp$ret$1;
      tmp$ret$2 = tmp2_plus.plus_u6jwas_k$(new Long(1, 0));
      var tmp4_maxOf = tmp$ret$2;
      tmp$ret$3 = tmp3_maxOf.compareTo_n4fqi2_k$(tmp4_maxOf) >= 0 ? tmp3_maxOf : tmp4_maxOf;
      fromIndex_0 = tmp$ret$3;
    }
  }
  function commonIndexOfElement_0(_this__u8e3s4, targetBytes, fromIndex) {
    var fromIndex_0 = fromIndex;
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (true) {
      var result = _this__u8e3s4.buffer_1.indexOfElement_ea8pul_k$(targetBytes, fromIndex_0);
      if (!result.equals(new Long(-1, -1)))
        return result;
      var lastBufferSize = _this__u8e3s4.buffer_1.size_1;
      Companion_getInstance_1();
      if (_this__u8e3s4.source_1.read_nz46cz_k$(_this__u8e3s4.buffer_1, toLong(8192)).equals(new Long(-1, -1)))
        return new Long(-1, -1);
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp1_maxOf = fromIndex_0;
      tmp$ret$1 = tmp1_maxOf.compareTo_n4fqi2_k$(lastBufferSize) >= 0 ? tmp1_maxOf : lastBufferSize;
      fromIndex_0 = tmp$ret$1;
    }
  }
  function commonRangeEquals_2(_this__u8e3s4, offset, bytes, bytesOffset, byteCount) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_this__u8e3s4.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (((offset.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? true : bytesOffset < 0) ? true : byteCount < 0) ? true : (bytes.get_size_woubt6_k$() - bytesOffset | 0) < byteCount) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$1 = offset.plus_u6jwas_k$(toLong(i));
        var bufferOffset = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$2 = bufferOffset.plus_u6jwas_k$(new Long(1, 0));
        if (!_this__u8e3s4.request_k7c0qh_k$(tmp$ret$2))
          return false;
        if (!(_this__u8e3s4.buffer_1.get_ec5on4_k$(bufferOffset) === bytes.get_fkrdnv_k$(bytesOffset + i | 0)))
          return false;
      }
       while (inductionVariable < byteCount);
    return true;
  }
  function commonPeek(_this__u8e3s4) {
    return buffer(new PeekSource(_this__u8e3s4));
  }
  function commonClose_0(_this__u8e3s4) {
    if (_this__u8e3s4.closed_1)
      return Unit_getInstance();
    _this__u8e3s4.closed_1 = true;
    _this__u8e3s4.source_1.close_ymq55z_k$();
    _this__u8e3s4.buffer_1.clear_j9y8zo_k$();
  }
  function commonTimeout(_this__u8e3s4) {
    return _this__u8e3s4.source_1.timeout_lq9okf_k$();
  }
  function commonToString_0(_this__u8e3s4) {
    return 'buffer(' + _this__u8e3s4.source_1 + ')';
  }
  function commonSubstring_0(_this__u8e3s4, beginIndex, endIndex) {
    var endIndex_0 = resolveDefaultParameter_0(_this__u8e3s4, endIndex);
    // Inline function 'kotlin.require' call
    var tmp0_require = beginIndex >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSubstring.<anonymous>' call
      tmp$ret$0 = 'beginIndex=' + beginIndex + ' < 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = endIndex_0 <= _this__u8e3s4.get_size_woubt6_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonSubstring.<anonymous>' call
      tmp$ret$1 = 'endIndex=' + endIndex_0 + ' > length(' + _this__u8e3s4.get_size_woubt6_k$() + ')';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var subLen = endIndex_0 - beginIndex | 0;
    // Inline function 'kotlin.require' call
    var tmp2_require = subLen >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonSubstring.<anonymous>' call
      tmp$ret$2 = 'endIndex=' + endIndex_0 + ' < beginIndex=' + beginIndex;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (beginIndex === 0 ? endIndex_0 === _this__u8e3s4.get_size_woubt6_k$() : false)
      return _this__u8e3s4;
    else if (beginIndex === endIndex_0)
      return Companion_getInstance_6().EMPTY_1;
    var beginSegment = segment(_this__u8e3s4, beginIndex);
    var endSegment = segment(_this__u8e3s4, endIndex_0 - 1 | 0);
    var newSegments = copyOfRange_0(_this__u8e3s4.segments_1, beginSegment, endSegment + 1 | 0);
    var newDirectory = new Int32Array(imul(newSegments.length, 2));
    var index = 0;
    var inductionVariable = beginSegment;
    if (inductionVariable <= endSegment)
      do {
        var s = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = index;
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp3_minOf = _this__u8e3s4.directory_1[s] - beginIndex | 0;
        tmp$ret$3 = Math.min(tmp3_minOf, subLen);
        newDirectory[tmp] = tmp$ret$3;
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newDirectory[tmp1 + newSegments.length | 0] = _this__u8e3s4.directory_1[s + _this__u8e3s4.segments_1.length | 0];
      }
       while (!(s === endSegment));
    var segmentOffset = beginSegment === 0 ? 0 : _this__u8e3s4.directory_1[beginSegment - 1 | 0];
    var tmp2_array = newDirectory;
    var tmp3_index0 = newSegments.length;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + (beginIndex - segmentOffset | 0) | 0;
    return new SegmentedByteString(newSegments, newDirectory);
  }
  function commonInternalGet(_this__u8e3s4, pos) {
    checkOffsetAndCount(toLong(_this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length - 1 | 0]), toLong(pos), new Long(1, 0));
    var segment_0 = segment(_this__u8e3s4, pos);
    var segmentOffset = segment_0 === 0 ? 0 : _this__u8e3s4.directory_1[segment_0 - 1 | 0];
    var segmentPos = _this__u8e3s4.directory_1[segment_0 + _this__u8e3s4.segments_1.length | 0];
    return _this__u8e3s4.segments_1[segment_0][(pos - segmentOffset | 0) + segmentPos | 0];
  }
  function commonGetSize_0(_this__u8e3s4) {
    return _this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length - 1 | 0];
  }
  function commonToByteArray_0(_this__u8e3s4) {
    var result = new Int8Array(_this__u8e3s4.get_size_woubt6_k$());
    var resultPos = 0;
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = _this__u8e3s4.segments_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = _this__u8e3s4.directory_1[segmentCount + s | 0];
      var nextSegmentOffset = _this__u8e3s4.directory_1[s];
      // Inline function 'okio.internal.commonToByteArray.<anonymous>' call
      var tmp0__anonymous__q1qw7t = _this__u8e3s4.segments_1[s];
      var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = resultPos;
      var tmp1_copyInto = segmentPos + tmp1__anonymous__uwfjfc | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = result;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, tmp0_copyInto, segmentPos, tmp1_copyInto);
      tmp$ret$4 = result;
      resultPos = resultPos + tmp1__anonymous__uwfjfc | 0;
      pos = nextSegmentOffset;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    return result;
  }
  function commonWrite_5(_this__u8e3s4, buffer, offset, byteCount) {
    // Inline function 'okio.internal.forEachSegment' call
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(_this__u8e3s4, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : _this__u8e3s4.directory_1[s - 1 | 0];
      var segmentSize = _this__u8e3s4.directory_1[s] - segmentOffset | 0;
      var segmentPos = _this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = _this__u8e3s4.segments_1[s];
      var segment_0 = Segment_init_$Create$_0(tmp2__anonymous__z9zvc9, offset_0, offset_0 + byteCount_0 | 0, true, false);
      if (buffer.head_1 == null) {
        segment_0.prev_1 = segment_0;
        segment_0.next_1 = segment_0.prev_1;
        buffer.head_1 = segment_0.next_1;
      } else {
        ensureNotNull(ensureNotNull(buffer.head_1).prev_1).push_toq0no_k$(segment_0);
      }
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    var tmp0_this = buffer;
    var tmp = tmp0_this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = tmp0_this.size_1;
    tmp$ret$1 = tmp3_plus.plus_u6jwas_k$(toLong(byteCount));
    tmp.size_1 = tmp$ret$1;
  }
  function commonRangeEquals_3(_this__u8e3s4, offset, other, otherOffset, byteCount) {
    if (offset < 0 ? true : offset > (_this__u8e3s4.get_size_woubt6_k$() - byteCount | 0))
      return false;
    var otherOffset_0 = otherOffset;
    // Inline function 'okio.internal.forEachSegment' call
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(_this__u8e3s4, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : _this__u8e3s4.directory_1[s - 1 | 0];
      var segmentSize = _this__u8e3s4.directory_1[s] - segmentOffset | 0;
      var segmentPos = _this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = _this__u8e3s4.segments_1[s];
      if (!other.rangeEquals_agw6hu_k$(otherOffset_0, tmp2__anonymous__z9zvc9, offset_0, byteCount_0))
        return false;
      otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    return true;
  }
  function commonRangeEquals_4(_this__u8e3s4, offset, other, otherOffset, byteCount) {
    if (((offset < 0 ? true : offset > (_this__u8e3s4.get_size_woubt6_k$() - byteCount | 0)) ? true : otherOffset < 0) ? true : otherOffset > (other.length - byteCount | 0)) {
      return false;
    }
    var otherOffset_0 = otherOffset;
    // Inline function 'okio.internal.forEachSegment' call
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(_this__u8e3s4, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : _this__u8e3s4.directory_1[s - 1 | 0];
      var segmentSize = _this__u8e3s4.directory_1[s] - segmentOffset | 0;
      var segmentPos = _this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = _this__u8e3s4.segments_1[s];
      if (!arrayRangeEquals(tmp2__anonymous__z9zvc9, offset_0, other, otherOffset_0, byteCount_0))
        return false;
      otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    return true;
  }
  function commonCopyInto_0(_this__u8e3s4, offset, target, targetOffset, byteCount) {
    checkOffsetAndCount(toLong(_this__u8e3s4.get_size_woubt6_k$()), toLong(offset), toLong(byteCount));
    checkOffsetAndCount(toLong(target.length), toLong(targetOffset), toLong(byteCount));
    var targetOffset_0 = targetOffset;
    // Inline function 'okio.internal.forEachSegment' call
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(_this__u8e3s4, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : _this__u8e3s4.directory_1[s - 1 | 0];
      var segmentSize = _this__u8e3s4.directory_1[s] - segmentOffset | 0;
      var segmentPos = _this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonCopyInto.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = _this__u8e3s4.segments_1[s];
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = targetOffset_0;
      var tmp1_copyInto = offset_0 + byteCount_0 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp2__anonymous__z9zvc9;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = target;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, tmp0_copyInto, offset_0, tmp1_copyInto);
      tmp$ret$5 = target;
      targetOffset_0 = targetOffset_0 + byteCount_0 | 0;
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
  }
  function forEachSegment(_this__u8e3s4, action) {
    var segmentCount = _this__u8e3s4.segments_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = _this__u8e3s4.directory_1[segmentCount + s | 0];
      var nextSegmentOffset = _this__u8e3s4.directory_1[s];
      action(_this__u8e3s4.segments_1[s], segmentPos, nextSegmentOffset - pos | 0);
      pos = nextSegmentOffset;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
  }
  function commonEquals_1(_this__u8e3s4, other) {
    var tmp;
    if (other === _this__u8e3s4) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = other.get_size_woubt6_k$() === _this__u8e3s4.get_size_woubt6_k$() ? _this__u8e3s4.rangeEquals_gaazw5_k$(0, other, 0, _this__u8e3s4.get_size_woubt6_k$()) : false;
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function commonHashCode_1(_this__u8e3s4) {
    var result = _this__u8e3s4.hashCode_2;
    if (!(result === 0))
      return result;
    result = 1;
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = _this__u8e3s4.segments_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = _this__u8e3s4.directory_1[segmentCount + s | 0];
      var nextSegmentOffset = _this__u8e3s4.directory_1[s];
      // Inline function 'okio.internal.commonHashCode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = _this__u8e3s4.segments_1[s];
      var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
      var i = segmentPos;
      var limit = segmentPos + tmp1__anonymous__uwfjfc | 0;
      while (i < limit) {
        result = imul(31, result) + tmp0__anonymous__q1qw7t[i] | 0;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
      pos = nextSegmentOffset;
      var tmp0_0 = s;
      s = tmp0_0 + 1 | 0;
    }
    _this__u8e3s4.set_hashCode_gxsuy0_k$(result);
    return result;
  }
  function segment(_this__u8e3s4, pos) {
    var i = binarySearch(_this__u8e3s4.directory_1, pos + 1 | 0, 0, _this__u8e3s4.segments_1.length);
    return i >= 0 ? i : ~i;
  }
  function forEachSegment_0(_this__u8e3s4, beginIndex, endIndex, action) {
    var s = segment(_this__u8e3s4, beginIndex);
    var pos = beginIndex;
    while (pos < endIndex) {
      var segmentOffset = s === 0 ? 0 : _this__u8e3s4.directory_1[s - 1 | 0];
      var segmentSize = _this__u8e3s4.directory_1[s] - segmentOffset | 0;
      var segmentPos = _this__u8e3s4.directory_1[_this__u8e3s4.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(endIndex, tmp0_minOf);
      var byteCount = tmp$ret$0 - pos | 0;
      var offset = segmentPos + (pos - segmentOffset | 0) | 0;
      action(_this__u8e3s4.segments_1[s], offset, byteCount);
      pos = pos + byteCount | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
  }
  function binarySearch(_this__u8e3s4, value, fromIndex, toIndex) {
    var left = fromIndex;
    var right = toIndex - 1 | 0;
    while (left <= right) {
      var mid = (left + right | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value)
        left = mid + 1 | 0;
      else if (midVal > value)
        right = mid - 1 | 0;
      else
        return mid;
    }
    return (-left | 0) - 1 | 0;
  }
  function commonAsUtf8ToByteArray(_this__u8e3s4) {
    var bytes = new Int8Array(imul(4, _this__u8e3s4.length));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b0 = charSequenceGet(_this__u8e3s4, index);
        if (Char__compareTo_impl_ypi4mb(b0, _Char___init__impl__6a9atx(128)) >= 0) {
          var size = index;
          // Inline function 'okio.processUtf8Bytes' call
          var tmp0_processUtf8Bytes = _this__u8e3s4.length;
          var index_0 = index;
          while (index_0 < tmp0_processUtf8Bytes) {
            var c = charSequenceGet(_this__u8e3s4, index_0);
            if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$0;
              // Inline function 'kotlin.code' call
              tmp$ret$0 = Char__toInt_impl_vasixd(c);
              var tmp1__anonymous__uwfjfc = toByte(tmp$ret$0);
              var tmp0 = size;
              size = tmp0 + 1 | 0;
              bytes[tmp0] = tmp1__anonymous__uwfjfc;
              var tmp0_0 = index_0;
              index_0 = tmp0_0 + 1 | 0;
              while (index_0 < tmp0_processUtf8Bytes ? Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index_0), _Char___init__impl__6a9atx(128)) < 0 : false) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp$ret$1;
                // Inline function 'kotlin.code' call
                var tmp1 = index_0;
                index_0 = tmp1 + 1 | 0;
                var tmp0__get_code__88qj9g = charSequenceGet(_this__u8e3s4, tmp1);
                tmp$ret$1 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
                var tmp2__anonymous__z9zvc9 = toByte(tmp$ret$1);
                var tmp0_1 = size;
                size = tmp0_1 + 1 | 0;
                bytes[tmp0_1] = tmp2__anonymous__z9zvc9;
              }
            } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$2;
              // Inline function 'kotlin.code' call
              tmp$ret$2 = Char__toInt_impl_vasixd(c);
              var tmp3__anonymous__ufb84q = toByte(tmp$ret$2 >> 6 | 192);
              var tmp0_2 = size;
              size = tmp0_2 + 1 | 0;
              bytes[tmp0_2] = tmp3__anonymous__ufb84q;
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$3;
              // Inline function 'kotlin.code' call
              tmp$ret$3 = Char__toInt_impl_vasixd(c);
              var tmp4__anonymous__pkmkx7 = toByte(tmp$ret$3 & 63 | 128);
              var tmp0_3 = size;
              size = tmp0_3 + 1 | 0;
              bytes[tmp0_3] = tmp4__anonymous__pkmkx7;
              var tmp2 = index_0;
              index_0 = tmp2 + 1 | 0;
            } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$4;
              // Inline function 'kotlin.code' call
              tmp$ret$4 = Char__toInt_impl_vasixd(c);
              var tmp5__anonymous__kpxxpo = toByte(tmp$ret$4 >> 12 | 224);
              var tmp0_4 = size;
              size = tmp0_4 + 1 | 0;
              bytes[tmp0_4] = tmp5__anonymous__kpxxpo;
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$5;
              // Inline function 'kotlin.code' call
              tmp$ret$5 = Char__toInt_impl_vasixd(c);
              var tmp6__anonymous__fv9ai5 = toByte(tmp$ret$5 >> 6 & 63 | 128);
              var tmp0_5 = size;
              size = tmp0_5 + 1 | 0;
              bytes[tmp0_5] = tmp6__anonymous__fv9ai5;
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var tmp$ret$6;
              // Inline function 'kotlin.code' call
              tmp$ret$6 = Char__toInt_impl_vasixd(c);
              var tmp7__anonymous__b0knam = toByte(tmp$ret$6 & 63 | 128);
              var tmp0_6 = size;
              size = tmp0_6 + 1 | 0;
              bytes[tmp0_6] = tmp7__anonymous__b0knam;
              var tmp3 = index_0;
              index_0 = tmp3 + 1 | 0;
            } else {
              var tmp;
              if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 ? true : tmp0_processUtf8Bytes <= (index_0 + 1 | 0)) {
                tmp = true;
              } else {
                var containsArg = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
              }
              if (tmp) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp8__anonymous__65w033 = get_REPLACEMENT_BYTE();
                var tmp0_7 = size;
                size = tmp0_7 + 1 | 0;
                bytes[tmp0_7] = tmp8__anonymous__65w033;
                var tmp4 = index_0;
                index_0 = tmp4 + 1 | 0;
              } else {
                var tmp$ret$7;
                // Inline function 'kotlin.code' call
                tmp$ret$7 = Char__toInt_impl_vasixd(c);
                var tmp_0 = tmp$ret$7 << 10;
                var tmp$ret$8;
                // Inline function 'kotlin.code' call
                var tmp1__get_code__adl84j = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                tmp$ret$8 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
                var codePoint = (tmp_0 + tmp$ret$8 | 0) + -56613888 | 0;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp9__anonymous__1b7cvk = toByte(codePoint >> 18 | 240);
                var tmp0_8 = size;
                size = tmp0_8 + 1 | 0;
                bytes[tmp0_8] = tmp9__anonymous__1b7cvk;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp10__anonymous__yfiz50 = toByte(codePoint >> 12 & 63 | 128);
                var tmp0_9 = size;
                size = tmp0_9 + 1 | 0;
                bytes[tmp0_9] = tmp10__anonymous__yfiz50;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp11__anonymous__tkubxh = toByte(codePoint >> 6 & 63 | 128);
                var tmp0_10 = size;
                size = tmp0_10 + 1 | 0;
                bytes[tmp0_10] = tmp11__anonymous__tkubxh;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp12__anonymous__oq5opy = toByte(codePoint & 63 | 128);
                var tmp0_11 = size;
                size = tmp0_11 + 1 | 0;
                bytes[tmp0_11] = tmp12__anonymous__oq5opy;
                index_0 = index_0 + 2 | 0;
              }
            }
          }
          return copyOf(bytes, size);
        }
        var tmp$ret$9;
        // Inline function 'kotlin.code' call
        tmp$ret$9 = Char__toInt_impl_vasixd(b0);
        bytes[index] = toByte(tmp$ret$9);
      }
       while (inductionVariable < last);
    return copyOf(bytes, _this__u8e3s4.length);
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    if ((beginIndex < 0 ? true : endIndex > _this__u8e3s4.length) ? true : beginIndex > endIndex) {
      throw new ArrayIndexOutOfBoundsException('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'okio.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
        var tmp0__anonymous__q1qw7t = numberToChar(b0);
        var tmp0 = length;
        length = tmp0 + 1 | 0;
        chars[tmp0] = tmp0__anonymous__q1qw7t;
        var tmp0_0 = index;
        index = tmp0_0 + 1 | 0;
        while (index < endIndex ? _this__u8e3s4[index] >= 0 : false) {
          // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1__anonymous__uwfjfc = numberToChar(_this__u8e3s4[tmp1]);
          var tmp0_1 = length;
          length = tmp0_1 + 1 | 0;
          chars[tmp0_1] = tmp1__anonymous__uwfjfc;
        }
      } else {
        var tmp$ret$0;
        // Inline function 'okio.shr' call
        tmp$ret$0 = b0 >> 5;
        if (tmp$ret$0 === -2) {
          var tmp = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var tmp0_process2Utf8Bytes = index;
            if (endIndex <= (tmp0_process2Utf8Bytes + 1 | 0)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp1__anonymous__uwfjfc_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = numberToChar(tmp1__anonymous__uwfjfc_0);
              var tmp0_2 = length;
              length = tmp0_2 + 1 | 0;
              chars[tmp0_2] = tmp2__anonymous__z9zvc9;
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp0_process2Utf8Bytes];
            var b1 = _this__u8e3s4[tmp0_process2Utf8Bytes + 1 | 0];
            var tmp$ret$3;
            // Inline function 'okio.isUtf8Continuation' call
            var tmp$ret$2;
            // Inline function 'okio.and' call
            tmp$ret$2 = b1 & 192;
            tmp$ret$3 = tmp$ret$2 === 128;
            if (!tmp$ret$3) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp2__anonymous__z9zvc9_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp3__anonymous__ufb84q = numberToChar(tmp2__anonymous__z9zvc9_0);
              var tmp0_3 = length;
              length = tmp0_3 + 1 | 0;
              chars[tmp0_3] = tmp3__anonymous__ufb84q;
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = get_MASK_2BYTES() ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              var tmp3__anonymous__ufb84q_0 = get_REPLACEMENT_CODE_POINT();
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp4__anonymous__pkmkx7 = numberToChar(tmp3__anonymous__ufb84q_0);
              var tmp0_4 = length;
              length = tmp0_4 + 1 | 0;
              chars[tmp0_4] = tmp4__anonymous__pkmkx7;
            } else {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp5__anonymous__kpxxpo = numberToChar(codePoint);
              var tmp0_5 = length;
              length = tmp0_5 + 1 | 0;
              chars[tmp0_5] = tmp5__anonymous__kpxxpo;
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          var tmp$ret$4;
          // Inline function 'okio.shr' call
          tmp$ret$4 = b0 >> 4;
          if (tmp$ret$4 === -2) {
            var tmp_0 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var tmp4_process3Utf8Bytes = index;
              if (endIndex <= (tmp4_process3Utf8Bytes + 2 | 0)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp5__anonymous__kpxxpo_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp6__anonymous__fv9ai5 = numberToChar(tmp5__anonymous__kpxxpo_0);
                var tmp0_6 = length;
                length = tmp0_6 + 1 | 0;
                chars[tmp0_6] = tmp6__anonymous__fv9ai5;
                var tmp_1;
                if (endIndex <= (tmp4_process3Utf8Bytes + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  var tmp$ret$6;
                  // Inline function 'okio.isUtf8Continuation' call
                  var tmp0_isUtf8Continuation = _this__u8e3s4[tmp4_process3Utf8Bytes + 1 | 0];
                  var tmp$ret$5;
                  // Inline function 'okio.and' call
                  tmp$ret$5 = tmp0_isUtf8Continuation & 192;
                  tmp$ret$6 = tmp$ret$5 === 128;
                  tmp_1 = !tmp$ret$6;
                }
                if (tmp_1) {
                  tmp$ret$7 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$7 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp4_process3Utf8Bytes];
              var b1_0 = _this__u8e3s4[tmp4_process3Utf8Bytes + 1 | 0];
              var tmp$ret$9;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$8;
              // Inline function 'okio.and' call
              tmp$ret$8 = b1_0 & 192;
              tmp$ret$9 = tmp$ret$8 === 128;
              if (!tmp$ret$9) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp6__anonymous__fv9ai5_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp7__anonymous__b0knam = numberToChar(tmp6__anonymous__fv9ai5_0);
                var tmp0_7 = length;
                length = tmp0_7 + 1 | 0;
                chars[tmp0_7] = tmp7__anonymous__b0knam;
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp4_process3Utf8Bytes + 2 | 0];
              var tmp$ret$11;
              // Inline function 'okio.isUtf8Continuation' call
              var tmp$ret$10;
              // Inline function 'okio.and' call
              tmp$ret$10 = b2 & 192;
              tmp$ret$11 = tmp$ret$10 === 128;
              if (!tmp$ret$11) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp7__anonymous__b0knam_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp8__anonymous__65w033 = numberToChar(tmp7__anonymous__b0knam_0);
                var tmp0_8 = length;
                length = tmp0_8 + 1 | 0;
                chars[tmp0_8] = tmp8__anonymous__65w033;
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = get_MASK_3BYTES() ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp8__anonymous__65w033_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp9__anonymous__1b7cvk = numberToChar(tmp8__anonymous__65w033_0);
                var tmp0_9 = length;
                length = tmp0_9 + 1 | 0;
                chars[tmp0_9] = tmp9__anonymous__1b7cvk;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                var tmp9__anonymous__1b7cvk_0 = get_REPLACEMENT_CODE_POINT();
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp10__anonymous__yfiz50 = numberToChar(tmp9__anonymous__1b7cvk_0);
                var tmp0_10 = length;
                length = tmp0_10 + 1 | 0;
                chars[tmp0_10] = tmp10__anonymous__yfiz50;
              } else {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp11__anonymous__tkubxh = numberToChar(codePoint_0);
                var tmp0_11 = length;
                length = tmp0_11 + 1 | 0;
                chars[tmp0_11] = tmp11__anonymous__tkubxh;
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            var tmp$ret$12;
            // Inline function 'okio.shr' call
            tmp$ret$12 = b0 >> 3;
            if (tmp$ret$12 === -2) {
              var tmp_2 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var tmp10_process4Utf8Bytes = index;
                if (endIndex <= (tmp10_process4Utf8Bytes + 3 | 0)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp11__anonymous__tkubxh_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp11__anonymous__tkubxh_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp12__anonymous__oq5opy = numberToChar((tmp11__anonymous__tkubxh_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_12 = length;
                    length = tmp0_12 + 1 | 0;
                    chars[tmp0_12] = tmp12__anonymous__oq5opy;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp13__anonymous__jvh1if = numberToChar((tmp11__anonymous__tkubxh_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_13 = length;
                    length = tmp0_13 + 1 | 0;
                    chars[tmp0_13] = tmp13__anonymous__jvh1if;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp14__anonymous__f0seaw = get_REPLACEMENT_CHARACTER();
                    var tmp0_14 = length;
                    length = tmp0_14 + 1 | 0;
                    chars[tmp0_14] = tmp14__anonymous__f0seaw;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp10_process4Utf8Bytes + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    var tmp$ret$14;
                    // Inline function 'okio.isUtf8Continuation' call
                    var tmp0_isUtf8Continuation_0 = _this__u8e3s4[tmp10_process4Utf8Bytes + 1 | 0];
                    var tmp$ret$13;
                    // Inline function 'okio.and' call
                    tmp$ret$13 = tmp0_isUtf8Continuation_0 & 192;
                    tmp$ret$14 = tmp$ret$13 === 128;
                    tmp_3 = !tmp$ret$14;
                  }
                  if (tmp_3) {
                    tmp$ret$15 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp10_process4Utf8Bytes + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      var tmp$ret$17;
                      // Inline function 'okio.isUtf8Continuation' call
                      var tmp1_isUtf8Continuation = _this__u8e3s4[tmp10_process4Utf8Bytes + 2 | 0];
                      var tmp$ret$16;
                      // Inline function 'okio.and' call
                      tmp$ret$16 = tmp1_isUtf8Continuation & 192;
                      tmp$ret$17 = tmp$ret$16 === 128;
                      tmp_4 = !tmp$ret$17;
                    }
                    if (tmp_4) {
                      tmp$ret$15 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$15 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp10_process4Utf8Bytes];
                var b1_1 = _this__u8e3s4[tmp10_process4Utf8Bytes + 1 | 0];
                var tmp$ret$19;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$18;
                // Inline function 'okio.and' call
                tmp$ret$18 = b1_1 & 192;
                tmp$ret$19 = tmp$ret$18 === 128;
                if (!tmp$ret$19) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp12__anonymous__oq5opy_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp12__anonymous__oq5opy_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp15__anonymous__a63r3d = numberToChar((tmp12__anonymous__oq5opy_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_15 = length;
                    length = tmp0_15 + 1 | 0;
                    chars[tmp0_15] = tmp15__anonymous__a63r3d;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp16__anonymous__5bf3vu = numberToChar((tmp12__anonymous__oq5opy_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_16 = length;
                    length = tmp0_16 + 1 | 0;
                    chars[tmp0_16] = tmp16__anonymous__5bf3vu;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp17__anonymous__gqgob = get_REPLACEMENT_CHARACTER();
                    var tmp0_17 = length;
                    length = tmp0_17 + 1 | 0;
                    chars[tmp0_17] = tmp17__anonymous__gqgob;
                  }
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp10_process4Utf8Bytes + 2 | 0];
                var tmp$ret$21;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$20;
                // Inline function 'okio.and' call
                tmp$ret$20 = b2_0 & 192;
                tmp$ret$21 = tmp$ret$20 === 128;
                if (!tmp$ret$21) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp13__anonymous__jvh1if_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp13__anonymous__jvh1if_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp18__anonymous__4dy6j8 = numberToChar((tmp13__anonymous__jvh1if_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_18 = length;
                    length = tmp0_18 + 1 | 0;
                    chars[tmp0_18] = tmp18__anonymous__4dy6j8;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp19__anonymous__98mtqr = numberToChar((tmp13__anonymous__jvh1if_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_19 = length;
                    length = tmp0_19 + 1 | 0;
                    chars[tmp0_19] = tmp19__anonymous__98mtqr;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp20__anonymous__q2j3lv = get_REPLACEMENT_CHARACTER();
                    var tmp0_20 = length;
                    length = tmp0_20 + 1 | 0;
                    chars[tmp0_20] = tmp20__anonymous__q2j3lv;
                  }
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp10_process4Utf8Bytes + 3 | 0];
                var tmp$ret$23;
                // Inline function 'okio.isUtf8Continuation' call
                var tmp$ret$22;
                // Inline function 'okio.and' call
                tmp$ret$22 = b3 & 192;
                tmp$ret$23 = tmp$ret$22 === 128;
                if (!tmp$ret$23) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp14__anonymous__f0seaw_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp14__anonymous__f0seaw_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp21__anonymous__l7ugec = numberToChar((tmp14__anonymous__f0seaw_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_21 = length;
                    length = tmp0_21 + 1 | 0;
                    chars[tmp0_21] = tmp21__anonymous__l7ugec;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp22__anonymous__gd5t6t = numberToChar((tmp14__anonymous__f0seaw_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_22 = length;
                    length = tmp0_22 + 1 | 0;
                    chars[tmp0_22] = tmp22__anonymous__gd5t6t;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp23__anonymous__bih5za = get_REPLACEMENT_CHARACTER();
                    var tmp0_23 = length;
                    length = tmp0_23 + 1 | 0;
                    chars[tmp0_23] = tmp23__anonymous__bih5za;
                  }
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = get_MASK_4BYTES() ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp15__anonymous__a63r3d_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp15__anonymous__a63r3d_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp24__anonymous__6nsirr = numberToChar((tmp15__anonymous__a63r3d_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_24 = length;
                    length = tmp0_24 + 1 | 0;
                    chars[tmp0_24] = tmp24__anonymous__6nsirr;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp25__anonymous__1t3vk8 = numberToChar((tmp15__anonymous__a63r3d_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_25 = length;
                    length = tmp0_25 + 1 | 0;
                    chars[tmp0_25] = tmp25__anonymous__1t3vk8;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp26__anonymous__31krnb = get_REPLACEMENT_CHARACTER();
                    var tmp0_26 = length;
                    length = tmp0_26 + 1 | 0;
                    chars[tmp0_26] = tmp26__anonymous__31krnb;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp16__anonymous__5bf3vu_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp16__anonymous__5bf3vu_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp27__anonymous__7w9euu = numberToChar((tmp16__anonymous__5bf3vu_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_27 = length;
                    length = tmp0_27 + 1 | 0;
                    chars[tmp0_27] = tmp27__anonymous__7w9euu;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp28__anonymous__cqy22d = numberToChar((tmp16__anonymous__5bf3vu_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_28 = length;
                    length = tmp0_28 + 1 | 0;
                    chars[tmp0_28] = tmp28__anonymous__cqy22d;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp29__anonymous__hlmp9w = get_REPLACEMENT_CHARACTER();
                    var tmp0_29 = length;
                    length = tmp0_29 + 1 | 0;
                    chars[tmp0_29] = tmp29__anonymous__hlmp9w;
                  }
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  var tmp17__anonymous__gqgob_0 = get_REPLACEMENT_CODE_POINT();
                  if (!(tmp17__anonymous__gqgob_0 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp30__anonymous__hpj82q = numberToChar((tmp17__anonymous__gqgob_0 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_30 = length;
                    length = tmp0_30 + 1 | 0;
                    chars[tmp0_30] = tmp30__anonymous__hpj82q;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp31__anonymous__cuukv7 = numberToChar((tmp17__anonymous__gqgob_0 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_31 = length;
                    length = tmp0_31 + 1 | 0;
                    chars[tmp0_31] = tmp31__anonymous__cuukv7;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp32__anonymous__805xno = get_REPLACEMENT_CHARACTER();
                    var tmp0_32 = length;
                    length = tmp0_32 + 1 | 0;
                    chars[tmp0_32] = tmp32__anonymous__805xno;
                  }
                } else {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(codePoint_1 === get_REPLACEMENT_CODE_POINT())) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp33__anonymous__35hag5 = numberToChar((codePoint_1 >>> 10 | 0) + get_HIGH_SURROGATE_HEADER() | 0);
                    var tmp0_33 = length;
                    length = tmp0_33 + 1 | 0;
                    chars[tmp0_33] = tmp33__anonymous__35hag5;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp34__anonymous__1p7cre = numberToChar((codePoint_1 & 1023) + get_LOG_SURROGATE_HEADER() | 0);
                    var tmp0_34 = length;
                    length = tmp0_34 + 1 | 0;
                    chars[tmp0_34] = tmp34__anonymous__1p7cre;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp35__anonymous__6jvzyx = get_REPLACEMENT_CHARACTER();
                    var tmp0_35 = length;
                    length = tmp0_35 + 1 | 0;
                    chars[tmp0_35] = tmp35__anonymous__6jvzyx;
                  }
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp36__anonymous__bekn6g = get_REPLACEMENT_CHARACTER();
              var tmp0_36 = length;
              length = tmp0_36 + 1 | 0;
              chars[tmp0_36] = tmp36__anonymous__bekn6g;
              var tmp2 = index;
              index = tmp2 + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString_0(chars, 0, length);
  }
  function commonToUtf8String$default(_this__u8e3s4, beginIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      beginIndex = 0;
    if (!(($mask0 & 2) === 0))
      endIndex = _this__u8e3s4.length;
    return commonToUtf8String(_this__u8e3s4, beginIndex, endIndex);
  }
  function HashFunction() {
  }
  HashFunction.$metadata$ = interfaceMeta('HashFunction');
  function _get_IPAD__cq3ym9($this) {
    return $this.IPAD_1;
  }
  function _get_OPAD__cteq6f($this) {
    return $this.OPAD_1;
  }
  function create($this, key, hashFunction, blockLength) {
    var keySize = key.get_size_woubt6_k$();
    var tmp;
    if (keySize === 0) {
      throw IllegalArgumentException_init_$Create$('Empty key');
    } else if (keySize === blockLength) {
      tmp = key.data_1;
    } else if (keySize < blockLength) {
      tmp = copyOf(key.data_1, blockLength);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'okio.internal.Companion.create.<anonymous>' call
      hashFunction.update$default_f50u98_k$(key.data_1, 0, 0, 6, null);
      tmp$ret$0 = hashFunction;
      tmp = copyOf(tmp$ret$0.digest_m0ziv0_k$(), blockLength);
    }
    var paddedKey = tmp;
    var tmp_0 = 0;
    var tmp_1 = blockLength;
    var tmp_2 = new Int8Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'okio.internal.Companion.create.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'okio.xor' call
      var tmp0_xor = paddedKey[tmp_3];
      Companion_getInstance_2();
      var tmp1_xor = 54;
      tmp$ret$1 = toByte(tmp0_xor ^ tmp1_xor);
      tmp$ret$2 = tmp$ret$1;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    var innerKey = tmp_2;
    var tmp_4 = 0;
    var tmp_5 = blockLength;
    var tmp_6 = new Int8Array(tmp_5);
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      var tmp$ret$4;
      // Inline function 'okio.internal.Companion.create.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'okio.xor' call
      var tmp2_xor = paddedKey[tmp_7];
      Companion_getInstance_2();
      var tmp3_xor = 92;
      tmp$ret$3 = toByte(tmp2_xor ^ tmp3_xor);
      tmp$ret$4 = tmp$ret$3;
      tmp_6[tmp_7] = tmp$ret$4;
      tmp_4 = tmp_4 + 1 | 0;
    }
    var outerKey = tmp_6;
    hashFunction.update$default_f50u98_k$(innerKey, 0, 0, 6, null);
    return new Hmac(hashFunction, outerKey);
  }
  function _get_hashFunction__m3tqmd($this) {
    return $this.hashFunction_1;
  }
  function _get_outerKey__fte6xl($this) {
    return $this.outerKey_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.IPAD_1 = 54;
    this.OPAD_1 = 92;
  }
  Companion_1.prototype.sha1_6wtj0r_k$ = function (key) {
    return create(this, key, new Sha1(), 64);
  };
  Companion_1.prototype.sha256_gmub0z_k$ = function (key) {
    return create(this, key, new Sha256(), 64);
  };
  Companion_1.prototype.sha512_b2fr0w_k$ = function (key) {
    return create(this, key, new Sha512(), 128);
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Hmac(hashFunction, outerKey) {
    Companion_getInstance_2();
    this.hashFunction_1 = hashFunction;
    this.outerKey_1 = outerKey;
  }
  Hmac.prototype.update_evdvfb_k$ = function (input, offset, byteCount) {
    this.hashFunction_1.update_evdvfb_k$(input, offset, byteCount);
  };
  Hmac.prototype.digest_m0ziv0_k$ = function () {
    var digest = this.hashFunction_1.digest_m0ziv0_k$();
    this.hashFunction_1.update$default_f50u98_k$(this.outerKey_1, 0, 0, 6, null);
    this.hashFunction_1.update$default_f50u98_k$(digest, 0, 0, 6, null);
    return this.hashFunction_1.digest_m0ziv0_k$();
  };
  Hmac.$metadata$ = classMeta('Hmac', [HashFunction]);
  function _get_s__7mlovy($this) {
    return $this.s_1;
  }
  function _get_k__7mlop2($this) {
    return $this.k_1;
  }
  function _set_messageLength__vx4ezs($this, _set____db54di) {
    $this.messageLength_1 = _set____db54di;
  }
  function _get_messageLength__nw84h0($this) {
    return $this.messageLength_1;
  }
  function _get_unprocessed__1lqkro($this) {
    return $this.unprocessed_1;
  }
  function _set_unprocessedLimit__o7naz3($this, _set____db54di) {
    $this.unprocessedLimit_1 = _set____db54di;
  }
  function _get_unprocessedLimit__4vgy3p($this) {
    return $this.unprocessedLimit_1;
  }
  function _get_words__9f9arc($this) {
    return $this.words_1;
  }
  function _set_h0__dl8q41($this, _set____db54di) {
    $this.h0__1 = _set____db54di;
  }
  function _get_h0__ndc14z($this) {
    return $this.h0__1;
  }
  function _set_h1__dl8q36($this, _set____db54di) {
    $this.h1__1 = _set____db54di;
  }
  function _get_h1__ndc15u($this) {
    return $this.h1__1;
  }
  function _set_h2__dl8q2b($this, _set____db54di) {
    $this.h2__1 = _set____db54di;
  }
  function _get_h2__ndc16p($this) {
    return $this.h2__1;
  }
  function _set_h3__dl8q1g($this, _set____db54di) {
    $this.h3__1 = _set____db54di;
  }
  function _get_h3__ndc17k($this) {
    return $this.h3__1;
  }
  function processChunk($this, input, pos) {
    var words = $this.words_1;
    var pos_0 = pos;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var w = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp4 = pos_0;
        pos_0 = tmp4 + 1 | 0;
        var tmp = input[tmp4] & 255;
        var tmp3 = pos_0;
        pos_0 = tmp3 + 1 | 0;
        var tmp_0 = tmp | (input[tmp3] & 255) << 8;
        var tmp2 = pos_0;
        pos_0 = tmp2 + 1 | 0;
        var tmp_1 = tmp_0 | (input[tmp2] & 255) << 16;
        var tmp1 = pos_0;
        pos_0 = tmp1 + 1 | 0;
        words[w] = tmp_1 | (input[tmp1] & 255) << 24;
      }
       while (inductionVariable < 16);
    hash($this, words);
  }
  function hash($this, words) {
    var localK = Companion_getInstance_3().k_1;
    var localS = Companion_getInstance_3().s_1;
    var a = $this.h0__1;
    var b = $this.h1__1;
    var c = $this.h2__1;
    var d = $this.h3__1;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var g = i;
        var f = (((b & c | ~b & d) + a | 0) + localK[i] | 0) + words[g] | 0;
        a = d;
        d = c;
        c = b;
        var tmp = b;
        var tmp$ret$0;
        // Inline function 'okio.leftRotate' call
        var tmp0_leftRotate = localS[i];
        tmp$ret$0 = f << tmp0_leftRotate | (f >>> (32 - tmp0_leftRotate | 0) | 0);
        b = tmp + tmp$ret$0 | 0;
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 32)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var g_0 = (imul(5, i_0) + 1 | 0) % 16 | 0;
        var f_0 = (((d & b | ~d & c) + a | 0) + localK[i_0] | 0) + words[g_0] | 0;
        a = d;
        d = c;
        c = b;
        var tmp_0 = b;
        var tmp$ret$1;
        // Inline function 'okio.leftRotate' call
        var tmp1_leftRotate = localS[i_0];
        tmp$ret$1 = f_0 << tmp1_leftRotate | (f_0 >>> (32 - tmp1_leftRotate | 0) | 0);
        b = tmp_0 + tmp$ret$1 | 0;
      }
       while (inductionVariable_0 < 32);
    var inductionVariable_1 = 32;
    if (inductionVariable_1 < 48)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var g_1 = (imul(3, i_1) + 5 | 0) % 16 | 0;
        var f_1 = (((b ^ c ^ d) + a | 0) + localK[i_1] | 0) + words[g_1] | 0;
        a = d;
        d = c;
        c = b;
        var tmp_1 = b;
        var tmp$ret$2;
        // Inline function 'okio.leftRotate' call
        var tmp2_leftRotate = localS[i_1];
        tmp$ret$2 = f_1 << tmp2_leftRotate | (f_1 >>> (32 - tmp2_leftRotate | 0) | 0);
        b = tmp_1 + tmp$ret$2 | 0;
      }
       while (inductionVariable_1 < 48);
    var inductionVariable_2 = 48;
    if (inductionVariable_2 < 64)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var g_2 = imul(7, i_2) % 16 | 0;
        var f_2 = (((c ^ (b | ~d)) + a | 0) + localK[i_2] | 0) + words[g_2] | 0;
        a = d;
        d = c;
        c = b;
        var tmp_2 = b;
        var tmp$ret$3;
        // Inline function 'okio.leftRotate' call
        var tmp3_leftRotate = localS[i_2];
        tmp$ret$3 = f_2 << tmp3_leftRotate | (f_2 >>> (32 - tmp3_leftRotate | 0) | 0);
        b = tmp_2 + tmp$ret$3 | 0;
      }
       while (inductionVariable_2 < 64);
    var tmp4_this = $this;
    tmp4_this.h0__1 = tmp4_this.h0__1 + a | 0;
    var tmp5_this = $this;
    tmp5_this.h1__1 = tmp5_this.h1__1 + b | 0;
    var tmp6_this = $this;
    tmp6_this.h2__1 = tmp6_this.h2__1 + c | 0;
    var tmp7_this = $this;
    tmp7_this.h3__1 = tmp7_this.h3__1 + d | 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
    tmp.s_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$1 = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551]);
    tmp_0.k_1 = tmp$ret$1;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Md5() {
    Companion_getInstance_3();
    this.messageLength_1 = new Long(0, 0);
    this.unprocessed_1 = new Int8Array(64);
    this.unprocessedLimit_1 = 0;
    this.words_1 = new Int32Array(16);
    this.h0__1 = 1732584193;
    this.h1__1 = -271733879;
    this.h2__1 = -1732584194;
    this.h3__1 = 271733878;
  }
  Md5.prototype.update_evdvfb_k$ = function (input, offset, byteCount) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = tmp0_this.messageLength_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(byteCount));
    tmp.messageLength_1 = tmp$ret$0;
    var pos = offset;
    var limit = pos + byteCount | 0;
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    if (unprocessedLimit > 0) {
      if ((unprocessedLimit + byteCount | 0) < 64) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = pos;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = input;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = unprocessed;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, unprocessedLimit, tmp1_copyInto, limit);
        tmp$ret$5 = unprocessed;
        this.unprocessedLimit_1 = unprocessedLimit + byteCount | 0;
        return Unit_getInstance();
      }
      var consumeByteCount = 64 - unprocessedLimit | 0;
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = pos;
      var tmp3_copyInto = pos + consumeByteCount | 0;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = input;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = unprocessed;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, unprocessedLimit, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$10 = unprocessed;
      processChunk(this, unprocessed, 0);
      this.unprocessedLimit_1 = 0;
      pos = pos + consumeByteCount | 0;
    }
    while (pos < limit) {
      var nextPos = pos + 64 | 0;
      if (nextPos > limit) {
        var tmp$ret$15;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = pos;
        var tmp$ret$12;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$11;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$11 = input;
        tmp$ret$12 = tmp$ret$11;
        var tmp_2 = tmp$ret$12;
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = unprocessed;
        tmp$ret$14 = tmp$ret$13;
        arrayCopy(tmp_2, tmp$ret$14, 0, tmp4_copyInto, limit);
        tmp$ret$15 = unprocessed;
        this.unprocessedLimit_1 = limit - pos | 0;
        return Unit_getInstance();
      }
      processChunk(this, input, pos);
      pos = nextPos;
    }
  };
  Md5.prototype.digest_m0ziv0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.messageLength_1;
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(8, 0));
    var messageLengthBits = tmp$ret$0;
    var tmp0_this = this;
    var tmp1 = tmp0_this.unprocessedLimit_1;
    tmp0_this.unprocessedLimit_1 = tmp1 + 1 | 0;
    this.unprocessed_1[tmp1] = -128;
    if (this.unprocessedLimit_1 > 56) {
      fill(this.unprocessed_1, 0, this.unprocessedLimit_1, 64);
      processChunk(this, this.unprocessed_1, 0);
      fill(this.unprocessed_1, 0, 0, this.unprocessedLimit_1);
    } else {
      fill(this.unprocessed_1, 0, this.unprocessedLimit_1, 56);
    }
    this.unprocessed_1[56] = messageLengthBits.toByte_edm0nx_k$();
    this.unprocessed_1[57] = messageLengthBits.ushr_rr8rvr_k$(8).toByte_edm0nx_k$();
    this.unprocessed_1[58] = messageLengthBits.ushr_rr8rvr_k$(16).toByte_edm0nx_k$();
    this.unprocessed_1[59] = messageLengthBits.ushr_rr8rvr_k$(24).toByte_edm0nx_k$();
    this.unprocessed_1[60] = messageLengthBits.ushr_rr8rvr_k$(32).toByte_edm0nx_k$();
    this.unprocessed_1[61] = messageLengthBits.ushr_rr8rvr_k$(40).toByte_edm0nx_k$();
    this.unprocessed_1[62] = messageLengthBits.ushr_rr8rvr_k$(48).toByte_edm0nx_k$();
    this.unprocessed_1[63] = messageLengthBits.ushr_rr8rvr_k$(56).toByte_edm0nx_k$();
    processChunk(this, this.unprocessed_1, 0);
    var a = this.h0__1;
    var b = this.h1__1;
    var c = this.h2__1;
    var d = this.h3__1;
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp1_byteArrayOf = new Int8Array([toByte(a), toByte(a >> 8), toByte(a >> 16), toByte(a >> 24), toByte(b), toByte(b >> 8), toByte(b >> 16), toByte(b >> 24), toByte(c), toByte(c >> 8), toByte(c >> 16), toByte(c >> 24), toByte(d), toByte(d >> 8), toByte(d >> 16), toByte(d >> 24)]);
    tmp$ret$1 = tmp1_byteArrayOf;
    return tmp$ret$1;
  };
  Md5.$metadata$ = classMeta('Md5', [HashFunction]);
  function _set_messageLength__vx4ezs_0($this, _set____db54di) {
    $this.messageLength_1 = _set____db54di;
  }
  function _get_messageLength__nw84h0_0($this) {
    return $this.messageLength_1;
  }
  function _get_unprocessed__1lqkro_0($this) {
    return $this.unprocessed_1;
  }
  function _set_unprocessedLimit__o7naz3_0($this, _set____db54di) {
    $this.unprocessedLimit_1 = _set____db54di;
  }
  function _get_unprocessedLimit__4vgy3p_0($this) {
    return $this.unprocessedLimit_1;
  }
  function _get_words__9f9arc_0($this) {
    return $this.words_1;
  }
  function _set_h0__dl8q41_0($this, _set____db54di) {
    $this.h0__1 = _set____db54di;
  }
  function _get_h0__ndc14z_0($this) {
    return $this.h0__1;
  }
  function _set_h1__dl8q36_0($this, _set____db54di) {
    $this.h1__1 = _set____db54di;
  }
  function _get_h1__ndc15u_0($this) {
    return $this.h1__1;
  }
  function _set_h2__dl8q2b_0($this, _set____db54di) {
    $this.h2__1 = _set____db54di;
  }
  function _get_h2__ndc16p_0($this) {
    return $this.h2__1;
  }
  function _set_h3__dl8q1g_0($this, _set____db54di) {
    $this.h3__1 = _set____db54di;
  }
  function _get_h3__ndc17k_0($this) {
    return $this.h3__1;
  }
  function _set_h4__dl8q0l($this, _set____db54di) {
    $this.h4__1 = _set____db54di;
  }
  function _get_h4__ndc18f($this) {
    return $this.h4__1;
  }
  function processChunk_0($this, input, pos) {
    var words = $this.words_1;
    var pos_0 = pos;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var w = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp4 = pos_0;
        pos_0 = tmp4 + 1 | 0;
        var tmp = (input[tmp4] & 255) << 24;
        var tmp3 = pos_0;
        pos_0 = tmp3 + 1 | 0;
        var tmp_0 = tmp | (input[tmp3] & 255) << 16;
        var tmp2 = pos_0;
        pos_0 = tmp2 + 1 | 0;
        var tmp_1 = tmp_0 | (input[tmp2] & 255) << 8;
        var tmp1 = pos_0;
        pos_0 = tmp1 + 1 | 0;
        words[w] = tmp_1 | input[tmp1] & 255;
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 80)
      do {
        var w_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$0;
        // Inline function 'okio.leftRotate' call
        var tmp0_leftRotate = words[w_0 - 3 | 0] ^ words[w_0 - 8 | 0] ^ words[w_0 - 14 | 0] ^ words[w_0 - 16 | 0];
        tmp$ret$0 = tmp0_leftRotate << 1 | (tmp0_leftRotate >>> 31 | 0);
        words[w_0] = tmp$ret$0;
      }
       while (inductionVariable_0 < 80);
    var a = $this.h0__1;
    var b = $this.h1__1;
    var c = $this.h2__1;
    var d = $this.h3__1;
    var e = $this.h4__1;
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < 80)
      do {
        var i = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp_2;
        if (i < 20) {
          var f = d ^ b & (c ^ d);
          var k = 1518500249;
          var tmp$ret$1;
          // Inline function 'okio.leftRotate' call
          var tmp1_leftRotate = a;
          tmp$ret$1 = tmp1_leftRotate << 5 | (tmp1_leftRotate >>> 27 | 0);
          tmp_2 = (((tmp$ret$1 + f | 0) + e | 0) + k | 0) + words[i] | 0;
        } else if (i < 40) {
          var f_0 = b ^ c ^ d;
          var k_0 = 1859775393;
          var tmp$ret$2;
          // Inline function 'okio.leftRotate' call
          var tmp2_leftRotate = a;
          tmp$ret$2 = tmp2_leftRotate << 5 | (tmp2_leftRotate >>> 27 | 0);
          tmp_2 = (((tmp$ret$2 + f_0 | 0) + e | 0) + k_0 | 0) + words[i] | 0;
        } else if (i < 60) {
          var f_1 = b & c | b & d | c & d;
          var k_1 = -1894007588;
          var tmp$ret$3;
          // Inline function 'okio.leftRotate' call
          var tmp3_leftRotate = a;
          tmp$ret$3 = tmp3_leftRotate << 5 | (tmp3_leftRotate >>> 27 | 0);
          tmp_2 = (((tmp$ret$3 + f_1 | 0) + e | 0) + k_1 | 0) + words[i] | 0;
        } else {
          var f_2 = b ^ c ^ d;
          var k_2 = -899497514;
          var tmp$ret$4;
          // Inline function 'okio.leftRotate' call
          var tmp4_leftRotate = a;
          tmp$ret$4 = tmp4_leftRotate << 5 | (tmp4_leftRotate >>> 27 | 0);
          tmp_2 = (((tmp$ret$4 + f_2 | 0) + e | 0) + k_2 | 0) + words[i] | 0;
        }
        var a2 = tmp_2;
        e = d;
        d = c;
        var tmp$ret$5;
        // Inline function 'okio.leftRotate' call
        var tmp5_leftRotate = b;
        tmp$ret$5 = tmp5_leftRotate << 30 | (tmp5_leftRotate >>> 2 | 0);
        c = tmp$ret$5;
        b = a;
        a = a2;
      }
       while (inductionVariable_1 < 80);
    var tmp7_this = $this;
    tmp7_this.h0__1 = tmp7_this.h0__1 + a | 0;
    var tmp8_this = $this;
    tmp8_this.h1__1 = tmp8_this.h1__1 + b | 0;
    var tmp9_this = $this;
    tmp9_this.h2__1 = tmp9_this.h2__1 + c | 0;
    var tmp10_this = $this;
    tmp10_this.h3__1 = tmp10_this.h3__1 + d | 0;
    var tmp11_this = $this;
    tmp11_this.h4__1 = tmp11_this.h4__1 + e | 0;
  }
  function reset($this) {
    $this.messageLength_1 = new Long(0, 0);
    fill$default($this.unprocessed_1, 0, 0, 0, 6, null);
    $this.unprocessedLimit_1 = 0;
    fill$default_0($this.words_1, 0, 0, 0, 6, null);
    $this.h0__1 = 1732584193;
    $this.h1__1 = -271733879;
    $this.h2__1 = -1732584194;
    $this.h3__1 = 271733878;
    $this.h4__1 = -1009589776;
  }
  function Sha1() {
    this.messageLength_1 = new Long(0, 0);
    this.unprocessed_1 = new Int8Array(64);
    this.unprocessedLimit_1 = 0;
    this.words_1 = new Int32Array(80);
    this.h0__1 = 1732584193;
    this.h1__1 = -271733879;
    this.h2__1 = -1732584194;
    this.h3__1 = 271733878;
    this.h4__1 = -1009589776;
  }
  Sha1.prototype.update_evdvfb_k$ = function (input, offset, byteCount) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = tmp0_this.messageLength_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(byteCount));
    tmp.messageLength_1 = tmp$ret$0;
    var pos = offset;
    var limit = pos + byteCount | 0;
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    if (unprocessedLimit > 0) {
      if ((unprocessedLimit + byteCount | 0) < 64) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = pos;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = input;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = unprocessed;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, unprocessedLimit, tmp1_copyInto, limit);
        tmp$ret$5 = unprocessed;
        this.unprocessedLimit_1 = unprocessedLimit + byteCount | 0;
        return Unit_getInstance();
      }
      var consumeByteCount = 64 - unprocessedLimit | 0;
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = pos;
      var tmp3_copyInto = pos + consumeByteCount | 0;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = input;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = unprocessed;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, unprocessedLimit, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$10 = unprocessed;
      processChunk_0(this, unprocessed, 0);
      this.unprocessedLimit_1 = 0;
      pos = pos + consumeByteCount | 0;
    }
    while (pos < limit) {
      var nextPos = pos + 64 | 0;
      if (nextPos > limit) {
        var tmp$ret$15;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = pos;
        var tmp$ret$12;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$11;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$11 = input;
        tmp$ret$12 = tmp$ret$11;
        var tmp_2 = tmp$ret$12;
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = unprocessed;
        tmp$ret$14 = tmp$ret$13;
        arrayCopy(tmp_2, tmp$ret$14, 0, tmp4_copyInto, limit);
        tmp$ret$15 = unprocessed;
        this.unprocessedLimit_1 = limit - pos | 0;
        return Unit_getInstance();
      }
      processChunk_0(this, input, pos);
      pos = nextPos;
    }
  };
  Sha1.prototype.digest_m0ziv0_k$ = function () {
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.messageLength_1;
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(8, 0));
    var messageLengthBits = tmp$ret$0;
    var tmp0 = unprocessedLimit;
    unprocessedLimit = tmp0 + 1 | 0;
    unprocessed[tmp0] = -128;
    if (unprocessedLimit > 56) {
      fill(unprocessed, 0, unprocessedLimit, 64);
      processChunk_0(this, unprocessed, 0);
      fill(unprocessed, 0, 0, unprocessedLimit);
    } else {
      fill(unprocessed, 0, unprocessedLimit, 56);
    }
    unprocessed[56] = messageLengthBits.ushr_rr8rvr_k$(56).toByte_edm0nx_k$();
    unprocessed[57] = messageLengthBits.ushr_rr8rvr_k$(48).toByte_edm0nx_k$();
    unprocessed[58] = messageLengthBits.ushr_rr8rvr_k$(40).toByte_edm0nx_k$();
    unprocessed[59] = messageLengthBits.ushr_rr8rvr_k$(32).toByte_edm0nx_k$();
    unprocessed[60] = messageLengthBits.ushr_rr8rvr_k$(24).toByte_edm0nx_k$();
    unprocessed[61] = messageLengthBits.ushr_rr8rvr_k$(16).toByte_edm0nx_k$();
    unprocessed[62] = messageLengthBits.ushr_rr8rvr_k$(8).toByte_edm0nx_k$();
    unprocessed[63] = messageLengthBits.toByte_edm0nx_k$();
    processChunk_0(this, unprocessed, 0);
    var a = this.h0__1;
    var b = this.h1__1;
    var c = this.h2__1;
    var d = this.h3__1;
    var e = this.h4__1;
    reset(this);
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp1_byteArrayOf = new Int8Array([toByte(a >> 24), toByte(a >> 16), toByte(a >> 8), toByte(a), toByte(b >> 24), toByte(b >> 16), toByte(b >> 8), toByte(b), toByte(c >> 24), toByte(c >> 16), toByte(c >> 8), toByte(c), toByte(d >> 24), toByte(d >> 16), toByte(d >> 8), toByte(d), toByte(e >> 24), toByte(e >> 16), toByte(e >> 8), toByte(e)]);
    tmp$ret$1 = tmp1_byteArrayOf;
    return tmp$ret$1;
  };
  Sha1.$metadata$ = classMeta('Sha1', [HashFunction]);
  function _get_k__7mlop2_0($this) {
    return $this.k_1;
  }
  function _set_messageLength__vx4ezs_1($this, _set____db54di) {
    $this.messageLength_1 = _set____db54di;
  }
  function _get_messageLength__nw84h0_1($this) {
    return $this.messageLength_1;
  }
  function _get_unprocessed__1lqkro_1($this) {
    return $this.unprocessed_1;
  }
  function _set_unprocessedLimit__o7naz3_1($this, _set____db54di) {
    $this.unprocessedLimit_1 = _set____db54di;
  }
  function _get_unprocessedLimit__4vgy3p_1($this) {
    return $this.unprocessedLimit_1;
  }
  function _get_words__9f9arc_1($this) {
    return $this.words_1;
  }
  function _set_h0__dl8q41_1($this, _set____db54di) {
    $this.h0__1 = _set____db54di;
  }
  function _get_h0__ndc14z_1($this) {
    return $this.h0__1;
  }
  function _set_h1__dl8q36_1($this, _set____db54di) {
    $this.h1__1 = _set____db54di;
  }
  function _get_h1__ndc15u_1($this) {
    return $this.h1__1;
  }
  function _set_h2__dl8q2b_1($this, _set____db54di) {
    $this.h2__1 = _set____db54di;
  }
  function _get_h2__ndc16p_1($this) {
    return $this.h2__1;
  }
  function _set_h3__dl8q1g_1($this, _set____db54di) {
    $this.h3__1 = _set____db54di;
  }
  function _get_h3__ndc17k_1($this) {
    return $this.h3__1;
  }
  function _set_h4__dl8q0l_0($this, _set____db54di) {
    $this.h4__1 = _set____db54di;
  }
  function _get_h4__ndc18f_0($this) {
    return $this.h4__1;
  }
  function _set_h5__dl8pzq($this, _set____db54di) {
    $this.h5__1 = _set____db54di;
  }
  function _get_h5__ndc19a($this) {
    return $this.h5__1;
  }
  function _set_h6__dl8pyv($this, _set____db54di) {
    $this.h6__1 = _set____db54di;
  }
  function _get_h6__ndc1a5($this) {
    return $this.h6__1;
  }
  function _set_h7__dl8py0($this, _set____db54di) {
    $this.h7__1 = _set____db54di;
  }
  function _get_h7__ndc1b0($this) {
    return $this.h7__1;
  }
  function processChunk_1($this, input, pos) {
    var words = $this.words_1;
    var pos_0 = pos;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var w = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'okio.and' call
        var tmp4 = pos_0;
        pos_0 = tmp4 + 1 | 0;
        var tmp0_and = input[tmp4];
        tmp$ret$0 = tmp0_and & 255;
        var tmp = tmp$ret$0 << 24;
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp3 = pos_0;
        pos_0 = tmp3 + 1 | 0;
        var tmp1_and = input[tmp3];
        tmp$ret$1 = tmp1_and & 255;
        var tmp_0 = tmp | tmp$ret$1 << 16;
        var tmp$ret$2;
        // Inline function 'okio.and' call
        var tmp2 = pos_0;
        pos_0 = tmp2 + 1 | 0;
        var tmp2_and = input[tmp2];
        tmp$ret$2 = tmp2_and & 255;
        var tmp_1 = tmp_0 | tmp$ret$2 << 8;
        var tmp$ret$3;
        // Inline function 'okio.and' call
        var tmp1 = pos_0;
        pos_0 = tmp1 + 1 | 0;
        var tmp3_and = input[tmp1];
        tmp$ret$3 = tmp3_and & 255;
        words[w] = tmp_1 | tmp$ret$3;
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 64)
      do {
        var w_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var w15 = words[w_0 - 15 | 0];
        var s0 = (w15 >>> 7 | 0 | w15 << 25) ^ (w15 >>> 18 | 0 | w15 << 14) ^ (w15 >>> 3 | 0);
        var w2 = words[w_0 - 2 | 0];
        var s1 = (w2 >>> 17 | 0 | w2 << 15) ^ (w2 >>> 19 | 0 | w2 << 13) ^ (w2 >>> 10 | 0);
        var w16 = words[w_0 - 16 | 0];
        var w7 = words[w_0 - 7 | 0];
        words[w_0] = ((w16 + s0 | 0) + w7 | 0) + s1 | 0;
      }
       while (inductionVariable_0 < 64);
    hash_0($this, words);
  }
  function hash_0($this, words) {
    var localK = Companion_getInstance_4().k_1;
    var a = $this.h0__1;
    var b = $this.h1__1;
    var c = $this.h2__1;
    var d = $this.h3__1;
    var e = $this.h4__1;
    var f = $this.h5__1;
    var g = $this.h6__1;
    var h = $this.h7__1;
    var inductionVariable = 0;
    if (inductionVariable < 64)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var s0 = (a >>> 2 | 0 | a << 30) ^ (a >>> 13 | 0 | a << 19) ^ (a >>> 22 | 0 | a << 10);
        var s1 = (e >>> 6 | 0 | e << 26) ^ (e >>> 11 | 0 | e << 21) ^ (e >>> 25 | 0 | e << 7);
        var ch = e & f ^ ~e & g;
        var maj = a & b ^ a & c ^ b & c;
        var t1 = (((h + s1 | 0) + ch | 0) + localK[i] | 0) + words[i] | 0;
        var t2 = s0 + maj | 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
       while (inductionVariable < 64);
    var tmp1_this = $this;
    tmp1_this.h0__1 = tmp1_this.h0__1 + a | 0;
    var tmp2_this = $this;
    tmp2_this.h1__1 = tmp2_this.h1__1 + b | 0;
    var tmp3_this = $this;
    tmp3_this.h2__1 = tmp3_this.h2__1 + c | 0;
    var tmp4_this = $this;
    tmp4_this.h3__1 = tmp4_this.h3__1 + d | 0;
    var tmp5_this = $this;
    tmp5_this.h4__1 = tmp5_this.h4__1 + e | 0;
    var tmp6_this = $this;
    tmp6_this.h5__1 = tmp6_this.h5__1 + f | 0;
    var tmp7_this = $this;
    tmp7_this.h6__1 = tmp7_this.h6__1 + g | 0;
    var tmp8_this = $this;
    tmp8_this.h7__1 = tmp8_this.h7__1 + h | 0;
  }
  function reset_0($this) {
    $this.messageLength_1 = new Long(0, 0);
    fill$default($this.unprocessed_1, 0, 0, 0, 6, null);
    $this.unprocessedLimit_1 = 0;
    fill$default_0($this.words_1, 0, 0, 0, 6, null);
    $this.h0__1 = 1779033703;
    $this.h1__1 = -1150833019;
    $this.h2__1 = 1013904242;
    $this.h3__1 = -1521486534;
    $this.h4__1 = 1359893119;
    $this.h5__1 = -1694144372;
    $this.h6__1 = 528734635;
    $this.h7__1 = 1541459225;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
    tmp.k_1 = tmp$ret$0;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Sha256() {
    Companion_getInstance_4();
    this.messageLength_1 = new Long(0, 0);
    this.unprocessed_1 = new Int8Array(64);
    this.unprocessedLimit_1 = 0;
    this.words_1 = new Int32Array(64);
    this.h0__1 = 1779033703;
    this.h1__1 = -1150833019;
    this.h2__1 = 1013904242;
    this.h3__1 = -1521486534;
    this.h4__1 = 1359893119;
    this.h5__1 = -1694144372;
    this.h6__1 = 528734635;
    this.h7__1 = 1541459225;
  }
  Sha256.prototype.update_evdvfb_k$ = function (input, offset, byteCount) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = tmp0_this.messageLength_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(byteCount));
    tmp.messageLength_1 = tmp$ret$0;
    var pos = offset;
    var limit = pos + byteCount | 0;
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    if (unprocessedLimit > 0) {
      if ((unprocessedLimit + byteCount | 0) < 64) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = pos;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = input;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = unprocessed;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, unprocessedLimit, tmp1_copyInto, limit);
        tmp$ret$5 = unprocessed;
        this.unprocessedLimit_1 = unprocessedLimit + byteCount | 0;
        return Unit_getInstance();
      }
      var consumeByteCount = 64 - unprocessedLimit | 0;
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = pos;
      var tmp3_copyInto = pos + consumeByteCount | 0;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = input;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = unprocessed;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, unprocessedLimit, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$10 = unprocessed;
      processChunk_1(this, unprocessed, 0);
      this.unprocessedLimit_1 = 0;
      pos = pos + consumeByteCount | 0;
    }
    while (pos < limit) {
      var nextPos = pos + 64 | 0;
      if (nextPos > limit) {
        var tmp$ret$15;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = pos;
        var tmp$ret$12;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$11;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$11 = input;
        tmp$ret$12 = tmp$ret$11;
        var tmp_2 = tmp$ret$12;
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = unprocessed;
        tmp$ret$14 = tmp$ret$13;
        arrayCopy(tmp_2, tmp$ret$14, 0, tmp4_copyInto, limit);
        tmp$ret$15 = unprocessed;
        this.unprocessedLimit_1 = limit - pos | 0;
        return Unit_getInstance();
      }
      processChunk_1(this, input, pos);
      pos = nextPos;
    }
  };
  Sha256.prototype.digest_m0ziv0_k$ = function () {
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.messageLength_1;
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(8, 0));
    var messageLengthBits = tmp$ret$0;
    var tmp0 = unprocessedLimit;
    unprocessedLimit = tmp0 + 1 | 0;
    unprocessed[tmp0] = -128;
    if (unprocessedLimit > 56) {
      fill(unprocessed, 0, unprocessedLimit, 64);
      processChunk_1(this, unprocessed, 0);
      fill(unprocessed, 0, 0, unprocessedLimit);
    } else {
      fill(unprocessed, 0, unprocessedLimit, 56);
    }
    unprocessed[56] = messageLengthBits.ushr_rr8rvr_k$(56).toByte_edm0nx_k$();
    unprocessed[57] = messageLengthBits.ushr_rr8rvr_k$(48).toByte_edm0nx_k$();
    unprocessed[58] = messageLengthBits.ushr_rr8rvr_k$(40).toByte_edm0nx_k$();
    unprocessed[59] = messageLengthBits.ushr_rr8rvr_k$(32).toByte_edm0nx_k$();
    unprocessed[60] = messageLengthBits.ushr_rr8rvr_k$(24).toByte_edm0nx_k$();
    unprocessed[61] = messageLengthBits.ushr_rr8rvr_k$(16).toByte_edm0nx_k$();
    unprocessed[62] = messageLengthBits.ushr_rr8rvr_k$(8).toByte_edm0nx_k$();
    unprocessed[63] = messageLengthBits.toByte_edm0nx_k$();
    processChunk_1(this, unprocessed, 0);
    var a = this.h0__1;
    var b = this.h1__1;
    var c = this.h2__1;
    var d = this.h3__1;
    var e = this.h4__1;
    var f = this.h5__1;
    var g = this.h6__1;
    var h = this.h7__1;
    reset_0(this);
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp1_byteArrayOf = new Int8Array([toByte(a >> 24), toByte(a >> 16), toByte(a >> 8), toByte(a), toByte(b >> 24), toByte(b >> 16), toByte(b >> 8), toByte(b), toByte(c >> 24), toByte(c >> 16), toByte(c >> 8), toByte(c), toByte(d >> 24), toByte(d >> 16), toByte(d >> 8), toByte(d), toByte(e >> 24), toByte(e >> 16), toByte(e >> 8), toByte(e), toByte(f >> 24), toByte(f >> 16), toByte(f >> 8), toByte(f), toByte(g >> 24), toByte(g >> 16), toByte(g >> 8), toByte(g), toByte(h >> 24), toByte(h >> 16), toByte(h >> 8), toByte(h)]);
    tmp$ret$1 = tmp1_byteArrayOf;
    return tmp$ret$1;
  };
  Sha256.$metadata$ = classMeta('Sha256', [HashFunction]);
  function _get_k__7mlop2_1($this) {
    return $this.k_1;
  }
  function _set_messageLength__vx4ezs_2($this, _set____db54di) {
    $this.messageLength_1 = _set____db54di;
  }
  function _get_messageLength__nw84h0_2($this) {
    return $this.messageLength_1;
  }
  function _get_unprocessed__1lqkro_2($this) {
    return $this.unprocessed_1;
  }
  function _set_unprocessedLimit__o7naz3_2($this, _set____db54di) {
    $this.unprocessedLimit_1 = _set____db54di;
  }
  function _get_unprocessedLimit__4vgy3p_2($this) {
    return $this.unprocessedLimit_1;
  }
  function _get_words__9f9arc_2($this) {
    return $this.words_1;
  }
  function _set_h0__dl8q41_2($this, _set____db54di) {
    $this.h0__1 = _set____db54di;
  }
  function _get_h0__ndc14z_2($this) {
    return $this.h0__1;
  }
  function _set_h1__dl8q36_2($this, _set____db54di) {
    $this.h1__1 = _set____db54di;
  }
  function _get_h1__ndc15u_2($this) {
    return $this.h1__1;
  }
  function _set_h2__dl8q2b_2($this, _set____db54di) {
    $this.h2__1 = _set____db54di;
  }
  function _get_h2__ndc16p_2($this) {
    return $this.h2__1;
  }
  function _set_h3__dl8q1g_2($this, _set____db54di) {
    $this.h3__1 = _set____db54di;
  }
  function _get_h3__ndc17k_2($this) {
    return $this.h3__1;
  }
  function _set_h4__dl8q0l_1($this, _set____db54di) {
    $this.h4__1 = _set____db54di;
  }
  function _get_h4__ndc18f_1($this) {
    return $this.h4__1;
  }
  function _set_h5__dl8pzq_0($this, _set____db54di) {
    $this.h5__1 = _set____db54di;
  }
  function _get_h5__ndc19a_0($this) {
    return $this.h5__1;
  }
  function _set_h6__dl8pyv_0($this, _set____db54di) {
    $this.h6__1 = _set____db54di;
  }
  function _get_h6__ndc1a5_0($this) {
    return $this.h6__1;
  }
  function _set_h7__dl8py0_0($this, _set____db54di) {
    $this.h7__1 = _set____db54di;
  }
  function _get_h7__ndc1b0_0($this) {
    return $this.h7__1;
  }
  function processChunk_2($this, input, pos) {
    var words = $this.words_1;
    var pos_0 = pos;
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var w = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp8 = pos_0;
        pos_0 = tmp8 + 1 | 0;
        var tmp = toLong(input[tmp8]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(56);
        var tmp7 = pos_0;
        pos_0 = tmp7 + 1 | 0;
        var tmp_0 = tmp.or_s401rn_k$(toLong(input[tmp7]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(48));
        var tmp6 = pos_0;
        pos_0 = tmp6 + 1 | 0;
        var tmp_1 = tmp_0.or_s401rn_k$(toLong(input[tmp6]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(40));
        var tmp5 = pos_0;
        pos_0 = tmp5 + 1 | 0;
        var tmp_2 = tmp_1.or_s401rn_k$(toLong(input[tmp5]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(32));
        var tmp4 = pos_0;
        pos_0 = tmp4 + 1 | 0;
        var tmp_3 = tmp_2.or_s401rn_k$(toLong(input[tmp4]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(24));
        var tmp3 = pos_0;
        pos_0 = tmp3 + 1 | 0;
        var tmp_4 = tmp_3.or_s401rn_k$(toLong(input[tmp3]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(16));
        var tmp2 = pos_0;
        pos_0 = tmp2 + 1 | 0;
        var tmp_5 = tmp_4.or_s401rn_k$(toLong(input[tmp2]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(8));
        var tmp1 = pos_0;
        pos_0 = tmp1 + 1 | 0;
        words[w] = tmp_5.or_s401rn_k$(toLong(input[tmp1]).and_jhajnj_k$(new Long(255, 0)));
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 80)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var w15 = words[i - 15 | 0];
        var tmp$ret$0;
        // Inline function 'okio.rightRotate' call
        tmp$ret$0 = w15.ushr_rr8rvr_k$(1).or_s401rn_k$(w15.shl_po5ip6_k$(63));
        var tmp_6 = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'okio.rightRotate' call
        tmp$ret$1 = w15.ushr_rr8rvr_k$(8).or_s401rn_k$(w15.shl_po5ip6_k$(56));
        var s0 = tmp_6.xor_jjua9n_k$(tmp$ret$1).xor_jjua9n_k$(w15.ushr_rr8rvr_k$(7));
        var w2 = words[i - 2 | 0];
        var tmp$ret$2;
        // Inline function 'okio.rightRotate' call
        tmp$ret$2 = w2.ushr_rr8rvr_k$(19).or_s401rn_k$(w2.shl_po5ip6_k$(45));
        var tmp_7 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'okio.rightRotate' call
        tmp$ret$3 = w2.ushr_rr8rvr_k$(61).or_s401rn_k$(w2.shl_po5ip6_k$(3));
        var s1 = tmp_7.xor_jjua9n_k$(tmp$ret$3).xor_jjua9n_k$(w2.ushr_rr8rvr_k$(6));
        var w16 = words[i - 16 | 0];
        var w7 = words[i - 7 | 0];
        words[i] = w16.plus_u6jwas_k$(s0).plus_u6jwas_k$(w7).plus_u6jwas_k$(s1);
      }
       while (inductionVariable_0 < 80);
    hash_1($this, words);
  }
  function hash_1($this, words) {
    var localK = Companion_getInstance_5().k_1;
    var a = $this.h0__1;
    var b = $this.h1__1;
    var c = $this.h2__1;
    var d = $this.h3__1;
    var e = $this.h4__1;
    var f = $this.h5__1;
    var g = $this.h6__1;
    var h = $this.h7__1;
    var inductionVariable = 0;
    if (inductionVariable < 80)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'okio.rightRotate' call
        var tmp0_rightRotate = a;
        tmp$ret$0 = tmp0_rightRotate.ushr_rr8rvr_k$(28).or_s401rn_k$(tmp0_rightRotate.shl_po5ip6_k$(36));
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'okio.rightRotate' call
        var tmp1_rightRotate = a;
        tmp$ret$1 = tmp1_rightRotate.ushr_rr8rvr_k$(34).or_s401rn_k$(tmp1_rightRotate.shl_po5ip6_k$(30));
        var tmp_0 = tmp.xor_jjua9n_k$(tmp$ret$1);
        var tmp$ret$2;
        // Inline function 'okio.rightRotate' call
        var tmp2_rightRotate = a;
        tmp$ret$2 = tmp2_rightRotate.ushr_rr8rvr_k$(39).or_s401rn_k$(tmp2_rightRotate.shl_po5ip6_k$(25));
        var s0 = tmp_0.xor_jjua9n_k$(tmp$ret$2);
        var tmp$ret$3;
        // Inline function 'okio.rightRotate' call
        var tmp3_rightRotate = e;
        tmp$ret$3 = tmp3_rightRotate.ushr_rr8rvr_k$(14).or_s401rn_k$(tmp3_rightRotate.shl_po5ip6_k$(50));
        var tmp_1 = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'okio.rightRotate' call
        var tmp4_rightRotate = e;
        tmp$ret$4 = tmp4_rightRotate.ushr_rr8rvr_k$(18).or_s401rn_k$(tmp4_rightRotate.shl_po5ip6_k$(46));
        var tmp_2 = tmp_1.xor_jjua9n_k$(tmp$ret$4);
        var tmp$ret$5;
        // Inline function 'okio.rightRotate' call
        var tmp5_rightRotate = e;
        tmp$ret$5 = tmp5_rightRotate.ushr_rr8rvr_k$(41).or_s401rn_k$(tmp5_rightRotate.shl_po5ip6_k$(23));
        var s1 = tmp_2.xor_jjua9n_k$(tmp$ret$5);
        var ch = e.and_jhajnj_k$(f).xor_jjua9n_k$(e.inv_28kx_k$().and_jhajnj_k$(g));
        var maj = a.and_jhajnj_k$(b).xor_jjua9n_k$(a.and_jhajnj_k$(c)).xor_jjua9n_k$(b.and_jhajnj_k$(c));
        var t1 = h.plus_u6jwas_k$(s1).plus_u6jwas_k$(ch).plus_u6jwas_k$(localK[i]).plus_u6jwas_k$(words[i]);
        var t2 = s0.plus_u6jwas_k$(maj);
        h = g;
        g = f;
        f = e;
        e = d.plus_u6jwas_k$(t1);
        d = c;
        c = b;
        b = a;
        a = t1.plus_u6jwas_k$(t2);
      }
       while (inductionVariable < 80);
    var tmp1_this = $this;
    tmp1_this.h0__1 = tmp1_this.h0__1.plus_u6jwas_k$(a);
    var tmp2_this = $this;
    tmp2_this.h1__1 = tmp2_this.h1__1.plus_u6jwas_k$(b);
    var tmp3_this = $this;
    tmp3_this.h2__1 = tmp3_this.h2__1.plus_u6jwas_k$(c);
    var tmp4_this = $this;
    tmp4_this.h3__1 = tmp4_this.h3__1.plus_u6jwas_k$(d);
    var tmp5_this = $this;
    tmp5_this.h4__1 = tmp5_this.h4__1.plus_u6jwas_k$(e);
    var tmp6_this = $this;
    tmp6_this.h5__1 = tmp6_this.h5__1.plus_u6jwas_k$(f);
    var tmp7_this = $this;
    tmp7_this.h6__1 = tmp7_this.h6__1.plus_u6jwas_k$(g);
    var tmp8_this = $this;
    tmp8_this.h7__1 = tmp8_this.h7__1.plus_u6jwas_k$(h);
  }
  function reset_1($this) {
    $this.messageLength_1 = new Long(0, 0);
    fill$default($this.unprocessed_1, 0, 0, 0, 6, null);
    $this.unprocessedLimit_1 = 0;
    var tmp = new Long(0, 0);
    fill$default_1($this.words_1, tmp, 0, 0, 6, null);
    $this.h0__1 = new Long(-205731576, 1779033703);
    $this.h1__1 = new Long(-2067093701, -1150833019);
    $this.h2__1 = new Long(-23791573, 1013904242);
    $this.h3__1 = new Long(1595750129, -1521486534);
    $this.h4__1 = new Long(-1377402159, 1359893119);
    $this.h5__1 = new Long(725511199, -1694144372);
    $this.h6__1 = new Long(-79577749, 528734635);
    $this.h7__1 = new Long(327033209, 1541459225);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.k_1 = tmp$ret$0;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Sha512() {
    Companion_getInstance_5();
    this.messageLength_1 = new Long(0, 0);
    this.unprocessed_1 = new Int8Array(128);
    this.unprocessedLimit_1 = 0;
    this.words_1 = longArray(80);
    this.h0__1 = new Long(-205731576, 1779033703);
    this.h1__1 = new Long(-2067093701, -1150833019);
    this.h2__1 = new Long(-23791573, 1013904242);
    this.h3__1 = new Long(1595750129, -1521486534);
    this.h4__1 = new Long(-1377402159, 1359893119);
    this.h5__1 = new Long(725511199, -1694144372);
    this.h6__1 = new Long(-79577749, 528734635);
    this.h7__1 = new Long(327033209, 1541459225);
  }
  Sha512.prototype.update_evdvfb_k$ = function (input, offset, byteCount) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = tmp0_this.messageLength_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(byteCount));
    tmp.messageLength_1 = tmp$ret$0;
    var pos = offset;
    var limit = pos + byteCount | 0;
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    if (unprocessedLimit > 0) {
      if ((unprocessedLimit + byteCount | 0) < 128) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = pos;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = input;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = unprocessed;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, unprocessedLimit, tmp1_copyInto, limit);
        tmp$ret$5 = unprocessed;
        this.unprocessedLimit_1 = unprocessedLimit + byteCount | 0;
        return Unit_getInstance();
      }
      var consumeByteCount = 128 - unprocessedLimit | 0;
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = pos;
      var tmp3_copyInto = pos + consumeByteCount | 0;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = input;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = unprocessed;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, unprocessedLimit, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$10 = unprocessed;
      processChunk_2(this, unprocessed, 0);
      this.unprocessedLimit_1 = 0;
      pos = pos + consumeByteCount | 0;
    }
    while (pos < limit) {
      var nextPos = pos + 128 | 0;
      if (nextPos > limit) {
        var tmp$ret$15;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = pos;
        var tmp$ret$12;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$11;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$11 = input;
        tmp$ret$12 = tmp$ret$11;
        var tmp_2 = tmp$ret$12;
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = unprocessed;
        tmp$ret$14 = tmp$ret$13;
        arrayCopy(tmp_2, tmp$ret$14, 0, tmp4_copyInto, limit);
        tmp$ret$15 = unprocessed;
        this.unprocessedLimit_1 = limit - pos | 0;
        return Unit_getInstance();
      }
      processChunk_2(this, input, pos);
      pos = nextPos;
    }
  };
  Sha512.prototype.digest_m0ziv0_k$ = function () {
    var unprocessed = this.unprocessed_1;
    var unprocessedLimit = this.unprocessedLimit_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.messageLength_1;
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(8, 0));
    var messageLengthBits = tmp$ret$0;
    var tmp0 = unprocessedLimit;
    unprocessedLimit = tmp0 + 1 | 0;
    unprocessed[tmp0] = -128;
    if (unprocessedLimit > 112) {
      fill(unprocessed, 0, unprocessedLimit, 128);
      processChunk_2(this, unprocessed, 0);
      fill(unprocessed, 0, 0, unprocessedLimit);
    } else {
      fill(unprocessed, 0, unprocessedLimit, 120);
    }
    unprocessed[120] = messageLengthBits.ushr_rr8rvr_k$(56).toByte_edm0nx_k$();
    unprocessed[121] = messageLengthBits.ushr_rr8rvr_k$(48).toByte_edm0nx_k$();
    unprocessed[122] = messageLengthBits.ushr_rr8rvr_k$(40).toByte_edm0nx_k$();
    unprocessed[123] = messageLengthBits.ushr_rr8rvr_k$(32).toByte_edm0nx_k$();
    unprocessed[124] = messageLengthBits.ushr_rr8rvr_k$(24).toByte_edm0nx_k$();
    unprocessed[125] = messageLengthBits.ushr_rr8rvr_k$(16).toByte_edm0nx_k$();
    unprocessed[126] = messageLengthBits.ushr_rr8rvr_k$(8).toByte_edm0nx_k$();
    unprocessed[127] = messageLengthBits.toByte_edm0nx_k$();
    processChunk_2(this, unprocessed, 0);
    var a = this.h0__1;
    var b = this.h1__1;
    var c = this.h2__1;
    var d = this.h3__1;
    var e = this.h4__1;
    var f = this.h5__1;
    var g = this.h6__1;
    var h = this.h7__1;
    reset_1(this);
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp1_byteArrayOf = new Int8Array([a.shr_wjue3g_k$(56).toByte_edm0nx_k$(), a.shr_wjue3g_k$(48).toByte_edm0nx_k$(), a.shr_wjue3g_k$(40).toByte_edm0nx_k$(), a.shr_wjue3g_k$(32).toByte_edm0nx_k$(), a.shr_wjue3g_k$(24).toByte_edm0nx_k$(), a.shr_wjue3g_k$(16).toByte_edm0nx_k$(), a.shr_wjue3g_k$(8).toByte_edm0nx_k$(), a.toByte_edm0nx_k$(), b.shr_wjue3g_k$(56).toByte_edm0nx_k$(), b.shr_wjue3g_k$(48).toByte_edm0nx_k$(), b.shr_wjue3g_k$(40).toByte_edm0nx_k$(), b.shr_wjue3g_k$(32).toByte_edm0nx_k$(), b.shr_wjue3g_k$(24).toByte_edm0nx_k$(), b.shr_wjue3g_k$(16).toByte_edm0nx_k$(), b.shr_wjue3g_k$(8).toByte_edm0nx_k$(), b.toByte_edm0nx_k$(), c.shr_wjue3g_k$(56).toByte_edm0nx_k$(), c.shr_wjue3g_k$(48).toByte_edm0nx_k$(), c.shr_wjue3g_k$(40).toByte_edm0nx_k$(), c.shr_wjue3g_k$(32).toByte_edm0nx_k$(), c.shr_wjue3g_k$(24).toByte_edm0nx_k$(), c.shr_wjue3g_k$(16).toByte_edm0nx_k$(), c.shr_wjue3g_k$(8).toByte_edm0nx_k$(), c.toByte_edm0nx_k$(), d.shr_wjue3g_k$(56).toByte_edm0nx_k$(), d.shr_wjue3g_k$(48).toByte_edm0nx_k$(), d.shr_wjue3g_k$(40).toByte_edm0nx_k$(), d.shr_wjue3g_k$(32).toByte_edm0nx_k$(), d.shr_wjue3g_k$(24).toByte_edm0nx_k$(), d.shr_wjue3g_k$(16).toByte_edm0nx_k$(), d.shr_wjue3g_k$(8).toByte_edm0nx_k$(), d.toByte_edm0nx_k$(), e.shr_wjue3g_k$(56).toByte_edm0nx_k$(), e.shr_wjue3g_k$(48).toByte_edm0nx_k$(), e.shr_wjue3g_k$(40).toByte_edm0nx_k$(), e.shr_wjue3g_k$(32).toByte_edm0nx_k$(), e.shr_wjue3g_k$(24).toByte_edm0nx_k$(), e.shr_wjue3g_k$(16).toByte_edm0nx_k$(), e.shr_wjue3g_k$(8).toByte_edm0nx_k$(), e.toByte_edm0nx_k$(), f.shr_wjue3g_k$(56).toByte_edm0nx_k$(), f.shr_wjue3g_k$(48).toByte_edm0nx_k$(), f.shr_wjue3g_k$(40).toByte_edm0nx_k$(), f.shr_wjue3g_k$(32).toByte_edm0nx_k$(), f.shr_wjue3g_k$(24).toByte_edm0nx_k$(), f.shr_wjue3g_k$(16).toByte_edm0nx_k$(), f.shr_wjue3g_k$(8).toByte_edm0nx_k$(), f.toByte_edm0nx_k$(), g.shr_wjue3g_k$(56).toByte_edm0nx_k$(), g.shr_wjue3g_k$(48).toByte_edm0nx_k$(), g.shr_wjue3g_k$(40).toByte_edm0nx_k$(), g.shr_wjue3g_k$(32).toByte_edm0nx_k$(), g.shr_wjue3g_k$(24).toByte_edm0nx_k$(), g.shr_wjue3g_k$(16).toByte_edm0nx_k$(), g.shr_wjue3g_k$(8).toByte_edm0nx_k$(), g.toByte_edm0nx_k$(), h.shr_wjue3g_k$(56).toByte_edm0nx_k$(), h.shr_wjue3g_k$(48).toByte_edm0nx_k$(), h.shr_wjue3g_k$(40).toByte_edm0nx_k$(), h.shr_wjue3g_k$(32).toByte_edm0nx_k$(), h.shr_wjue3g_k$(24).toByte_edm0nx_k$(), h.shr_wjue3g_k$(16).toByte_edm0nx_k$(), h.shr_wjue3g_k$(8).toByte_edm0nx_k$(), h.toByte_edm0nx_k$()]);
    tmp$ret$1 = tmp1_byteArrayOf;
    return tmp$ret$1;
  };
  Sha512.$metadata$ = classMeta('Sha512', [HashFunction]);
  function asUtf8ToByteArray(_this__u8e3s4) {
    return commonAsUtf8ToByteArray(_this__u8e3s4);
  }
  function EOFException_init_$Init$(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    EOFException.call($this, message);
    return $this;
  }
  function EOFException_init_$Create$(message, $mask0, $marker) {
    var tmp = EOFException_init_$Init$(message, $mask0, $marker, Object.create(EOFException.prototype));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  EOFException.$metadata$ = classMeta('EOFException', undefined, undefined, undefined, undefined, IOException.prototype);
  function ArrayIndexOutOfBoundsException(message) {
    IndexOutOfBoundsException_init_$Init$(message, this);
    captureStack(this, ArrayIndexOutOfBoundsException);
  }
  ArrayIndexOutOfBoundsException.$metadata$ = classMeta('ArrayIndexOutOfBoundsException', undefined, undefined, undefined, undefined, IndexOutOfBoundsException.prototype);
  function Closeable() {
  }
  Closeable.$metadata$ = interfaceMeta('Closeable');
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException_init_$Create$(message) {
    var tmp = IOException_init_$Init$(message, Object.create(IOException.prototype));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException_init_$Init$_0(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    IOException_init_$Init$(message, $this);
    return $this;
  }
  function IOException_init_$Create$_0(message, $mask0, $marker) {
    var tmp = IOException_init_$Init$_0(message, $mask0, $marker, Object.create(IOException.prototype));
    captureStack(tmp, IOException_init_$Create$_0);
    return tmp;
  }
  function IOException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, IOException);
  }
  IOException.$metadata$ = classMeta('IOException', undefined, undefined, undefined, undefined, Exception.prototype);
  function toUtf8String(_this__u8e3s4) {
    return commonToUtf8String$default(_this__u8e3s4, 0, 0, 3, null);
  }
  function digest($this, hash) {
    forEachSegment_1($this, Buffer$digest$lambda(hash));
    return new ByteString(hash.digest_m0ziv0_k$());
  }
  function forEachSegment_1($this, action) {
    var tmp0_safe_receiver = $this.head_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var segment = tmp0_safe_receiver;
      do {
        var tmp0_safe_receiver_0 = segment;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          tmp$ret$0 = action(tmp0_safe_receiver_0);
        }
        var tmp1_safe_receiver = segment;
        segment = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.next_1;
      }
       while (!(segment === tmp0_safe_receiver));
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function UnsafeCursor() {
    this.buffer_1 = null;
    this.readWrite_1 = false;
    this.segment_1 = null;
    this.offset_1 = new Long(-1, -1);
    this.data_1 = null;
    this.start_1 = -1;
    this.end_1 = -1;
  }
  UnsafeCursor.prototype.set_buffer_6v4w6c_k$ = function (_set____db54di) {
    this.buffer_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_buffer_bmaafd_k$ = function () {
    return this.buffer_1;
  };
  UnsafeCursor.prototype.set_readWrite_4hqjmr_k$ = function (_set____db54di) {
    this.readWrite_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_readWrite_a0tpds_k$ = function () {
    return this.readWrite_1;
  };
  UnsafeCursor.prototype.set_segment_6rz05a_k$ = function (_set____db54di) {
    this.segment_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_segment_xwnoei_k$ = function () {
    return this.segment_1;
  };
  UnsafeCursor.prototype.set_offset_84vdlj_k$ = function (_set____db54di) {
    this.offset_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  UnsafeCursor.prototype.set_data_slzgvm_k$ = function (_set____db54di) {
    this.data_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  UnsafeCursor.prototype.set_start_4tyugl_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  UnsafeCursor.prototype.set_end_1n4q6m_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  UnsafeCursor.prototype.get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  UnsafeCursor.prototype.next_20eer_k$ = function () {
    var tmp$ret$2;
    // Inline function 'okio.internal.commonNext' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.offset_1.equals(ensureNotNull(this.buffer_1).size_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonNext.<anonymous>' call
      tmp$ret$0 = 'no more bytes';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (this.offset_1.equals(new Long(-1, -1))) {
      tmp = this.seek_2x71gi_k$(new Long(0, 0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = this.offset_1;
      var tmp2_plus = this.end_1 - this.start_1 | 0;
      tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
      tmp = this.seek_2x71gi_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  };
  UnsafeCursor.prototype.seek_2x71gi_k$ = function (offset) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonSeek' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var tmp0_checkNotNull = this.buffer_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_checkNotNull == null) {
          var tmp$ret$0;
          // Inline function 'okio.internal.commonSeek.<anonymous>' call
          tmp$ret$0 = 'not attached to a buffer';
          var message = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_checkNotNull;
          break $l$block;
        }
      }
      var buffer = tmp$ret$1;
      if (offset.compareTo_n4fqi2_k$(new Long(-1, -1)) < 0 ? true : offset.compareTo_n4fqi2_k$(buffer.size_1) > 0) {
        throw new ArrayIndexOutOfBoundsException('offset=' + toString(offset) + ' > size=' + toString(buffer.size_1));
      }
      if (offset.equals(new Long(-1, -1)) ? true : offset.equals(buffer.size_1)) {
        this.segment_1 = null;
        this.offset_1 = offset;
        this.data_1 = null;
        this.start_1 = -1;
        this.end_1 = -1;
        tmp$ret$2 = -1;
        break $l$block_0;
      }
      var min = new Long(0, 0);
      var max = buffer.size_1;
      var head = buffer.head_1;
      var tail = buffer.head_1;
      if (!(this.segment_1 == null)) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.minus' call
        var tmp1_minus = this.offset_1;
        var tmp2_minus = this.start_1 - ensureNotNull(this.segment_1).pos_1 | 0;
        tmp$ret$3 = tmp1_minus.minus_llf5ei_k$(toLong(tmp2_minus));
        var segmentOffset = tmp$ret$3;
        if (segmentOffset.compareTo_n4fqi2_k$(offset) > 0) {
          max = segmentOffset;
          tail = this.segment_1;
        } else {
          min = segmentOffset;
          head = this.segment_1;
        }
      }
      var next;
      var nextOffset;
      if (max.minus_llf5ei_k$(offset).compareTo_n4fqi2_k$(offset.minus_llf5ei_k$(min)) > 0) {
        next = head;
        nextOffset = min;
        $l$loop: while (true) {
          var tmp$ret$4;
          // Inline function 'kotlin.Long.plus' call
          var tmp3_plus = nextOffset;
          var tmp4_plus = ensureNotNull(next).limit_1 - next.pos_1 | 0;
          tmp$ret$4 = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
          if (!(offset.compareTo_n4fqi2_k$(tmp$ret$4) >= 0)) {
            break $l$loop;
          }
          nextOffset = nextOffset.plus_u6jwas_k$(toLong(next.limit_1 - next.pos_1 | 0));
          next = next.next_1;
        }
      } else {
        next = tail;
        nextOffset = max;
        while (nextOffset.compareTo_n4fqi2_k$(offset) > 0) {
          next = ensureNotNull(next).prev_1;
          nextOffset = nextOffset.minus_llf5ei_k$(toLong(ensureNotNull(next).limit_1 - next.pos_1 | 0));
        }
      }
      if (this.readWrite_1 ? ensureNotNull(next).shared_1 : false) {
        var unsharedNext = next.unsharedCopy_5kj8b7_k$();
        if (buffer.head_1 === next) {
          buffer.head_1 = unsharedNext;
        }
        next = next.push_toq0no_k$(unsharedNext);
        ensureNotNull(next.prev_1).pop_2dsh_k$();
      }
      this.segment_1 = next;
      this.offset_1 = offset;
      this.data_1 = ensureNotNull(next).data_1;
      this.start_1 = next.pos_1 + offset.minus_llf5ei_k$(nextOffset).toInt_1tsl84_k$() | 0;
      this.end_1 = next.limit_1;
      tmp$ret$2 = this.end_1 - this.start_1 | 0;
    }
    return tmp$ret$2;
  };
  UnsafeCursor.prototype.resizeBuffer_qumh4y_k$ = function (newSize) {
    var tmp$ret$6;
    // Inline function 'okio.internal.commonResizeBuffer' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_checkNotNull = this.buffer_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonResizeBuffer.<anonymous>' call
        tmp$ret$0 = 'not attached to a buffer';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    var buffer = tmp$ret$1;
    // Inline function 'kotlin.check' call
    var tmp1_check = this.readWrite_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonResizeBuffer.<anonymous>' call
      tmp$ret$2 = 'resizeBuffer() only permitted for read/write buffers';
      var message_0 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var oldSize = buffer.size_1;
    if (newSize.compareTo_n4fqi2_k$(oldSize) <= 0) {
      // Inline function 'kotlin.require' call
      var tmp2_require = newSize.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_require) {
        var tmp$ret$3;
        // Inline function 'okio.internal.commonResizeBuffer.<anonymous>' call
        tmp$ret$3 = 'newSize < 0: ' + toString(newSize);
        var message_1 = tmp$ret$3;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      var bytesToSubtract = oldSize.minus_llf5ei_k$(newSize);
      $l$loop: while (bytesToSubtract.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tail = ensureNotNull(buffer.head_1).prev_1;
        var tailSize = ensureNotNull(tail).limit_1 - tail.pos_1 | 0;
        if (toLong(tailSize).compareTo_n4fqi2_k$(bytesToSubtract) <= 0) {
          buffer.head_1 = tail.pop_2dsh_k$();
          SegmentPool_getInstance().recycle_axzlry_k$(tail);
          bytesToSubtract = bytesToSubtract.minus_llf5ei_k$(toLong(tailSize));
        } else {
          var tmp0_this = tail;
          tmp0_this.limit_1 = tmp0_this.limit_1 - bytesToSubtract.toInt_1tsl84_k$() | 0;
          break $l$loop;
        }
      }
      this.segment_1 = null;
      this.offset_1 = newSize;
      this.data_1 = null;
      this.start_1 = -1;
      this.end_1 = -1;
    } else if (newSize.compareTo_n4fqi2_k$(oldSize) > 0) {
      var needsToSeek = true;
      var bytesToAdd = newSize.minus_llf5ei_k$(oldSize);
      while (bytesToAdd.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tail_0 = buffer.writableSegment_g5a3pu_k$(1);
        var tmp$ret$5;
        // Inline function 'okio.minOf' call
        var tmp3_minOf = bytesToAdd;
        Companion_getInstance_1();
        var tmp4_minOf = 8192 - tail_0.limit_1 | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = toLong(tmp4_minOf);
        tmp$ret$4 = tmp3_minOf.compareTo_n4fqi2_k$(tmp0_minOf) <= 0 ? tmp3_minOf : tmp0_minOf;
        tmp$ret$5 = tmp$ret$4;
        var segmentBytesToAdd = tmp$ret$5.toInt_1tsl84_k$();
        var tmp1_this = tail_0;
        tmp1_this.limit_1 = tmp1_this.limit_1 + segmentBytesToAdd | 0;
        bytesToAdd = bytesToAdd.minus_llf5ei_k$(toLong(segmentBytesToAdd));
        if (needsToSeek) {
          this.segment_1 = tail_0;
          this.offset_1 = oldSize;
          this.data_1 = tail_0.data_1;
          this.start_1 = tail_0.limit_1 - segmentBytesToAdd | 0;
          this.end_1 = tail_0.limit_1;
          needsToSeek = false;
        }
      }
    }
    buffer.size_1 = newSize;
    tmp$ret$6 = oldSize;
    return tmp$ret$6;
  };
  UnsafeCursor.prototype.expandBuffer_j0mym1_k$ = function (minByteCount) {
    var tmp$ret$6;
    // Inline function 'okio.internal.commonExpandBuffer' call
    // Inline function 'kotlin.require' call
    var tmp0_require = minByteCount > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
      tmp$ret$0 = 'minByteCount <= 0: ' + minByteCount;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    Companion_getInstance_1();
    var tmp1_require = minByteCount <= 8192;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
      tmp$ret$1 = 'minByteCount > Segment.SIZE: ' + minByteCount;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp2_checkNotNull = this.buffer_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp2_checkNotNull == null) {
        var tmp$ret$2;
        // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
        tmp$ret$2 = 'not attached to a buffer';
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      } else {
        tmp$ret$3 = tmp2_checkNotNull;
        break $l$block;
      }
    }
    var buffer = tmp$ret$3;
    // Inline function 'kotlin.check' call
    var tmp3_check = this.readWrite_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'okio.internal.commonExpandBuffer.<anonymous>' call
      tmp$ret$4 = 'expandBuffer() only permitted for read/write buffers';
      var message_2 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    var oldSize = buffer.size_1;
    var tail = buffer.writableSegment_g5a3pu_k$(minByteCount);
    Companion_getInstance_1();
    var result = 8192 - tail.limit_1 | 0;
    var tmp = tail;
    Companion_getInstance_1();
    tmp.limit_1 = 8192;
    var tmp_0 = buffer;
    var tmp$ret$5;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$5 = oldSize.plus_u6jwas_k$(toLong(result));
    tmp_0.size_1 = tmp$ret$5;
    this.segment_1 = tail;
    this.offset_1 = oldSize;
    this.data_1 = tail.data_1;
    var tmp_1 = this;
    Companion_getInstance_1();
    tmp_1.start_1 = 8192 - result | 0;
    var tmp_2 = this;
    Companion_getInstance_1();
    tmp_2.end_1 = 8192;
    tmp$ret$6 = toLong(result);
    return tmp$ret$6;
  };
  UnsafeCursor.prototype.close_ymq55z_k$ = function () {
    // Inline function 'okio.internal.commonClose' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !(this.buffer_1 == null);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonClose.<anonymous>' call
      tmp$ret$0 = 'not attached to a buffer';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.buffer_1 = null;
    this.segment_1 = null;
    this.offset_1 = new Long(-1, -1);
    this.data_1 = null;
    this.start_1 = -1;
    this.end_1 = -1;
  };
  UnsafeCursor.$metadata$ = classMeta('UnsafeCursor');
  function Buffer$digest$lambda($hash) {
    return function (segment) {
      $hash.update_evdvfb_k$(segment.data_1, segment.pos_1, segment.limit_1 - segment.pos_1 | 0);
      return Unit_getInstance();
    };
  }
  function Buffer() {
    this.head_1 = null;
    this.size_1 = new Long(0, 0);
  }
  Buffer.prototype.set_head_czl4zp_k$ = function (_set____db54di) {
    this.head_1 = _set____db54di;
  };
  Buffer.prototype.get_head_won7e1_k$ = function () {
    return this.head_1;
  };
  Buffer.prototype.set_size_ac2go9_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  Buffer.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  Buffer.prototype.get_buffer_bmaafd_k$ = function () {
    return this;
  };
  Buffer.prototype.emitCompleteSegments_5yum7g_k$ = function () {
    return this;
  };
  Buffer.prototype.emit_1ut3n_k$ = function () {
    return this;
  };
  Buffer.prototype.exhausted_p1jt55_k$ = function () {
    return this.size_1.equals(new Long(0, 0));
  };
  Buffer.prototype.require_btziny_k$ = function (byteCount) {
    if (this.size_1.compareTo_n4fqi2_k$(byteCount) < 0)
      throw new EOFException(null);
  };
  Buffer.prototype.request_k7c0qh_k$ = function (byteCount) {
    return this.size_1.compareTo_n4fqi2_k$(byteCount) >= 0;
  };
  Buffer.prototype.peek_21nx7_k$ = function () {
    return buffer(new PeekSource(this));
  };
  Buffer.prototype.copyTo_w2d2hb_k$ = function (out, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCopyTo' call
      var offset_0 = offset;
      var byteCount_0 = byteCount;
      checkOffsetAndCount(this.size_1, offset_0, byteCount_0);
      if (byteCount_0.equals(new Long(0, 0))) {
        tmp$ret$0 = this;
        break $l$block;
      }
      var tmp0_this = out;
      tmp0_this.size_1 = tmp0_this.size_1.plus_u6jwas_k$(byteCount_0);
      var s = this.head_1;
      while (offset_0.compareTo_n4fqi2_k$(toLong(ensureNotNull(s).limit_1 - s.pos_1 | 0)) >= 0) {
        offset_0 = offset_0.minus_llf5ei_k$(toLong(s.limit_1 - s.pos_1 | 0));
        s = s.next_1;
      }
      while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var copy = ensureNotNull(s).sharedCopy_timhza_k$();
        var tmp1_this = copy;
        tmp1_this.pos_1 = tmp1_this.pos_1 + offset_0.toInt_1tsl84_k$() | 0;
        var tmp = copy;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = copy.pos_1 + byteCount_0.toInt_1tsl84_k$() | 0;
        var tmp1_minOf = copy.limit_1;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        tmp.limit_1 = tmp$ret$1;
        if (out.head_1 == null) {
          copy.prev_1 = copy;
          copy.next_1 = copy.prev_1;
          out.head_1 = copy.next_1;
        } else {
          ensureNotNull(ensureNotNull(out.head_1).prev_1).push_toq0no_k$(copy);
        }
        byteCount_0 = byteCount_0.minus_llf5ei_k$(toLong(copy.limit_1 - copy.pos_1 | 0));
        offset_0 = new Long(0, 0);
        s = s.next_1;
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.copyTo$default_mc9jzo_k$ = function (out, offset, byteCount, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = new Long(0, 0);
    return this.copyTo_w2d2hb_k$(out, offset, byteCount);
  };
  Buffer.prototype.copyTo_1berd3_k$ = function (out, offset) {
    return this.copyTo_w2d2hb_k$(out, offset, this.size_1.minus_llf5ei_k$(offset));
  };
  Buffer.prototype.copyTo$default_rm6jxa_k$ = function (out, offset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = new Long(0, 0);
    return this.copyTo_1berd3_k$(out, offset);
  };
  Buffer.prototype.get_ec5on4_k$ = function (pos) {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'okio.internal.commonGet' call
      checkOffsetAndCount(this.size_1, pos, new Long(1, 0));
      var tmp$ret$1;
      // Inline function 'okio.internal.seek' call
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = ensureNotNull(null).data_1[numberToLong(null.pos_1).plus_u6jwas_k$(pos).minus_llf5ei_k$(new Long(-1, -1)).toInt_1tsl84_k$()];
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      if (this.size_1.minus_llf5ei_k$(pos).compareTo_n4fqi2_k$(pos) < 0) {
        var offset = this.size_1;
        while (offset.compareTo_n4fqi2_k$(pos) > 0) {
          s = ensureNotNull(s.prev_1);
          offset = offset.minus_llf5ei_k$(toLong(s.limit_1 - s.pos_1 | 0));
        }
        var tmp2__anonymous__z9zvc9 = s;
        var tmp3__anonymous__ufb84q = offset;
        tmp$ret$0 = ensureNotNull(tmp2__anonymous__z9zvc9).data_1[numberToLong(tmp2__anonymous__z9zvc9.pos_1).plus_u6jwas_k$(pos).minus_llf5ei_k$(tmp3__anonymous__ufb84q).toInt_1tsl84_k$()];
        break $l$block_1;
      } else {
        var offset_0 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$2;
          // Inline function 'kotlin.Long.plus' call
          var tmp0_plus = offset_0;
          var tmp1_plus = s.limit_1 - s.pos_1 | 0;
          tmp$ret$2 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
          var nextOffset = tmp$ret$2;
          if (nextOffset.compareTo_n4fqi2_k$(pos) > 0)
            break $l$loop;
          s = ensureNotNull(s.next_1);
          offset_0 = nextOffset;
        }
        var tmp4__anonymous__pkmkx7 = s;
        var tmp5__anonymous__kpxxpo = offset_0;
        tmp$ret$0 = ensureNotNull(tmp4__anonymous__pkmkx7).data_1[numberToLong(tmp4__anonymous__pkmkx7.pos_1).plus_u6jwas_k$(pos).minus_llf5ei_k$(tmp5__anonymous__kpxxpo).toInt_1tsl84_k$()];
        break $l$block_1;
      }
    }
    return tmp$ret$0;
  };
  Buffer.prototype.completeSegmentByteCount_8y8ucz_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCompleteSegmentByteCount' call
      var result = this.size_1;
      if (result.equals(new Long(0, 0))) {
        tmp$ret$0 = new Long(0, 0);
        break $l$block;
      }
      var tail = ensureNotNull(ensureNotNull(this.head_1).prev_1);
      var tmp;
      var tmp_0 = tail.limit_1;
      Companion_getInstance_1();
      if (tmp_0 < 8192) {
        tmp = tail.owner_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        result = result.minus_llf5ei_k$(toLong(tail.limit_1 - tail.pos_1 | 0));
      }
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.readByte_ectjk2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByte' call
    if (this.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var segment = ensureNotNull(this.head_1);
    var pos = segment.pos_1;
    var limit = segment.limit_1;
    var data = segment.data_1;
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var b = data[tmp0];
    var tmp1_this = this;
    tmp1_this.size_1 = tmp1_this.size_1.minus_llf5ei_k$(new Long(1, 0));
    if (pos === limit) {
      this.head_1 = segment.pop_2dsh_k$();
      SegmentPool_getInstance().recycle_axzlry_k$(segment);
    } else {
      segment.pos_1 = pos;
    }
    tmp$ret$0 = b;
    return tmp$ret$0;
  };
  Buffer.prototype.readShort_ilpyey_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonReadShort' call
      if (this.size_1.compareTo_n4fqi2_k$(new Long(2, 0)) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var segment = ensureNotNull(this.head_1);
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      if ((limit - pos | 0) < 2) {
        var tmp$ret$0;
        // Inline function 'okio.and' call
        var tmp0_and = this.readByte_ectjk2_k$();
        tmp$ret$0 = tmp0_and & 255;
        var tmp = tmp$ret$0 << 8;
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp1_and = this.readByte_ectjk2_k$();
        tmp$ret$1 = tmp1_and & 255;
        var s = tmp | tmp$ret$1;
        tmp$ret$2 = toShort(s);
        break $l$block;
      }
      var data = segment.data_1;
      var tmp$ret$3;
      // Inline function 'okio.and' call
      var tmp1 = pos;
      pos = tmp1 + 1 | 0;
      var tmp2_and = data[tmp1];
      tmp$ret$3 = tmp2_and & 255;
      var tmp_0 = tmp$ret$3 << 8;
      var tmp$ret$4;
      // Inline function 'okio.and' call
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
      var tmp3_and = data[tmp0];
      tmp$ret$4 = tmp3_and & 255;
      var s_0 = tmp_0 | tmp$ret$4;
      var tmp2_this = this;
      tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(new Long(2, 0));
      if (pos === limit) {
        this.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
      tmp$ret$2 = toShort(s_0);
    }
    return tmp$ret$2;
  };
  Buffer.prototype.readInt_hv8cxl_k$ = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'okio.internal.commonReadInt' call
      if (this.size_1.compareTo_n4fqi2_k$(new Long(4, 0)) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var segment = ensureNotNull(this.head_1);
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      if (toLong(limit - pos | 0).compareTo_n4fqi2_k$(new Long(4, 0)) < 0) {
        var tmp$ret$0;
        // Inline function 'okio.and' call
        var tmp0_and = this.readByte_ectjk2_k$();
        tmp$ret$0 = tmp0_and & 255;
        var tmp = tmp$ret$0 << 24;
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp1_and = this.readByte_ectjk2_k$();
        tmp$ret$1 = tmp1_and & 255;
        var tmp_0 = tmp | tmp$ret$1 << 16;
        var tmp$ret$2;
        // Inline function 'okio.and' call
        var tmp2_and = this.readByte_ectjk2_k$();
        tmp$ret$2 = tmp2_and & 255;
        var tmp_1 = tmp_0 | tmp$ret$2 << 8;
        var tmp$ret$3;
        // Inline function 'okio.and' call
        var tmp3_and = this.readByte_ectjk2_k$();
        tmp$ret$3 = tmp3_and & 255;
        tmp$ret$4 = tmp_1 | tmp$ret$3;
        break $l$block;
      }
      var data = segment.data_1;
      var tmp$ret$5;
      // Inline function 'okio.and' call
      var tmp3 = pos;
      pos = tmp3 + 1 | 0;
      var tmp4_and = data[tmp3];
      tmp$ret$5 = tmp4_and & 255;
      var tmp_2 = tmp$ret$5 << 24;
      var tmp$ret$6;
      // Inline function 'okio.and' call
      var tmp2 = pos;
      pos = tmp2 + 1 | 0;
      var tmp5_and = data[tmp2];
      tmp$ret$6 = tmp5_and & 255;
      var tmp_3 = tmp_2 | tmp$ret$6 << 16;
      var tmp$ret$7;
      // Inline function 'okio.and' call
      var tmp1 = pos;
      pos = tmp1 + 1 | 0;
      var tmp6_and = data[tmp1];
      tmp$ret$7 = tmp6_and & 255;
      var tmp_4 = tmp_3 | tmp$ret$7 << 8;
      var tmp$ret$8;
      // Inline function 'okio.and' call
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
      var tmp7_and = data[tmp0];
      tmp$ret$8 = tmp7_and & 255;
      var i = tmp_4 | tmp$ret$8;
      var tmp4_this = this;
      tmp4_this.size_1 = tmp4_this.size_1.minus_llf5ei_k$(new Long(4, 0));
      if (pos === limit) {
        this.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
      tmp$ret$4 = i;
    }
    return tmp$ret$4;
  };
  Buffer.prototype.readLong_ecnd8u_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonReadLong' call
      if (this.size_1.compareTo_n4fqi2_k$(new Long(8, 0)) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var segment = ensureNotNull(this.head_1);
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      if (toLong(limit - pos | 0).compareTo_n4fqi2_k$(new Long(8, 0)) < 0) {
        var tmp$ret$0;
        // Inline function 'okio.and' call
        var tmp0_and = this.readInt_hv8cxl_k$();
        tmp$ret$0 = toLong(tmp0_and).and_jhajnj_k$(new Long(-1, 0));
        var tmp = tmp$ret$0.shl_po5ip6_k$(32);
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp1_and = this.readInt_hv8cxl_k$();
        tmp$ret$1 = toLong(tmp1_and).and_jhajnj_k$(new Long(-1, 0));
        tmp$ret$2 = tmp.or_s401rn_k$(tmp$ret$1);
        break $l$block;
      }
      var data = segment.data_1;
      var tmp$ret$3;
      // Inline function 'okio.and' call
      var tmp7 = pos;
      pos = tmp7 + 1 | 0;
      var tmp2_and = data[tmp7];
      tmp$ret$3 = toLong(tmp2_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_0 = tmp$ret$3.shl_po5ip6_k$(56);
      var tmp$ret$4;
      // Inline function 'okio.and' call
      var tmp6 = pos;
      pos = tmp6 + 1 | 0;
      var tmp3_and = data[tmp6];
      tmp$ret$4 = toLong(tmp3_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_1 = tmp_0.or_s401rn_k$(tmp$ret$4.shl_po5ip6_k$(48));
      var tmp$ret$5;
      // Inline function 'okio.and' call
      var tmp5 = pos;
      pos = tmp5 + 1 | 0;
      var tmp4_and = data[tmp5];
      tmp$ret$5 = toLong(tmp4_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_2 = tmp_1.or_s401rn_k$(tmp$ret$5.shl_po5ip6_k$(40));
      var tmp$ret$6;
      // Inline function 'okio.and' call
      var tmp4 = pos;
      pos = tmp4 + 1 | 0;
      var tmp5_and = data[tmp4];
      tmp$ret$6 = toLong(tmp5_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_3 = tmp_2.or_s401rn_k$(tmp$ret$6.shl_po5ip6_k$(32));
      var tmp$ret$7;
      // Inline function 'okio.and' call
      var tmp3 = pos;
      pos = tmp3 + 1 | 0;
      var tmp6_and = data[tmp3];
      tmp$ret$7 = toLong(tmp6_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_4 = tmp_3.or_s401rn_k$(tmp$ret$7.shl_po5ip6_k$(24));
      var tmp$ret$8;
      // Inline function 'okio.and' call
      var tmp2 = pos;
      pos = tmp2 + 1 | 0;
      var tmp7_and = data[tmp2];
      tmp$ret$8 = toLong(tmp7_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_5 = tmp_4.or_s401rn_k$(tmp$ret$8.shl_po5ip6_k$(16));
      var tmp$ret$9;
      // Inline function 'okio.and' call
      var tmp1 = pos;
      pos = tmp1 + 1 | 0;
      var tmp8_and = data[tmp1];
      tmp$ret$9 = toLong(tmp8_and).and_jhajnj_k$(new Long(255, 0));
      var tmp_6 = tmp_5.or_s401rn_k$(tmp$ret$9.shl_po5ip6_k$(8));
      var tmp$ret$10;
      // Inline function 'okio.and' call
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
      var tmp9_and = data[tmp0];
      tmp$ret$10 = toLong(tmp9_and).and_jhajnj_k$(new Long(255, 0));
      var v = tmp_6.or_s401rn_k$(tmp$ret$10);
      var tmp8_this = this;
      tmp8_this.size_1 = tmp8_this.size_1.minus_llf5ei_k$(new Long(8, 0));
      if (pos === limit) {
        this.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
      tmp$ret$2 = v;
    }
    return tmp$ret$2;
  };
  Buffer.prototype.readShortLe_lyi6qn_k$ = function () {
    return reverseBytes(this.readShort_ilpyey_k$());
  };
  Buffer.prototype.readIntLe_ir3zn2_k$ = function () {
    return reverseBytes_0(this.readInt_hv8cxl_k$());
  };
  Buffer.prototype.readLongLe_bnxvp1_k$ = function () {
    return reverseBytes_1(this.readLong_ecnd8u_k$());
  };
  Buffer.prototype.readDecimalLong_uefo5l_k$ = function () {
    var tmp$ret$5;
    // Inline function 'okio.internal.commonReadDecimalLong' call
    if (this.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var value = new Long(0, 0);
    var seen = 0;
    var negative = false;
    var done = false;
    var overflowDigit = get_OVERFLOW_DIGIT_START();
    do {
      var segment = ensureNotNull(this.head_1);
      var data = segment.data_1;
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      $l$loop: while (pos < limit) {
        var b = data[pos];
        var tmp;
        var tmp_0 = b;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        if (tmp_0 >= toByte(tmp$ret$0)) {
          var tmp_1 = b;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 57;
          tmp = tmp_1 <= toByte(tmp$ret$1);
        } else {
          tmp = false;
        }
        if (tmp) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 48;
          var digit = toByte(tmp$ret$2) - b;
          if (value.compareTo_n4fqi2_k$(get_OVERFLOW_ZONE()) < 0 ? true : value.equals(get_OVERFLOW_ZONE()) ? toLong(digit).compareTo_n4fqi2_k$(overflowDigit) < 0 : false) {
            var buffer = (new Buffer()).writeDecimalLong_mc98i0_k$(value).writeByte_fjn38a_k$(b);
            if (!negative) {
              buffer.readByte_ectjk2_k$();
            }
            throw NumberFormatException_init_$Create$('Number too large: ' + buffer.readUtf8_echivt_k$());
          }
          value = value.times_2zfqpc_k$(new Long(10, 0));
          value = value.plus_u6jwas_k$(toLong(digit));
        } else {
          var tmp_2;
          var tmp_3 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 45;
          if (tmp_3 === toByte(tmp$ret$3)) {
            tmp_2 = seen === 0;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            negative = true;
            var tmp$ret$4;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = overflowDigit;
            tmp$ret$4 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
            overflowDigit = tmp$ret$4;
          } else {
            done = true;
            break $l$loop;
          }
        }
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var tmp1 = seen;
        seen = tmp1 + 1 | 0;
      }
      if (pos === limit) {
        this.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
    }
     while (!done ? !(this.head_1 == null) : false);
    var tmp2_this = this;
    tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(toLong(seen));
    var minimumSeen = negative ? 2 : 1;
    if (seen < minimumSeen) {
      if (this.size_1.equals(new Long(0, 0))) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var expected = negative ? 'Expected a digit' : "Expected a digit or '-'";
      throw NumberFormatException_init_$Create$(expected + ' but was 0x' + toHexString(this.get_ec5on4_k$(new Long(0, 0))));
    }
    tmp$ret$5 = negative ? value : value.unaryMinus_6uz0qp_k$();
    return tmp$ret$5;
  };
  Buffer.prototype.readHexadecimalUnsignedLong_gqibbu_k$ = function () {
    var tmp$ret$9;
    // Inline function 'okio.internal.commonReadHexadecimalUnsignedLong' call
    if (this.size_1.equals(new Long(0, 0))) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var value = new Long(0, 0);
    var seen = 0;
    var done = false;
    do {
      var segment = ensureNotNull(this.head_1);
      var data = segment.data_1;
      var pos = segment.pos_1;
      var limit = segment.limit_1;
      $l$loop: while (pos < limit) {
        var digit;
        var b = data[pos];
        var tmp;
        var tmp_0 = b;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        if (tmp_0 >= toByte(tmp$ret$0)) {
          var tmp_1 = b;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 57;
          tmp = tmp_1 <= toByte(tmp$ret$1);
        } else {
          tmp = false;
        }
        if (tmp) {
          var tmp$ret$2;
          // Inline function 'kotlin.code' call
          tmp$ret$2 = 48;
          digit = b - toByte(tmp$ret$2);
        } else {
          var tmp_2;
          var tmp_3 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 97;
          if (tmp_3 >= toByte(tmp$ret$3)) {
            var tmp_4 = b;
            var tmp$ret$4;
            // Inline function 'kotlin.code' call
            tmp$ret$4 = 102;
            tmp_2 = tmp_4 <= toByte(tmp$ret$4);
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            var tmp$ret$5;
            // Inline function 'kotlin.code' call
            tmp$ret$5 = 97;
            digit = b - toByte(tmp$ret$5) + 10 | 0;
          } else {
            var tmp_5;
            var tmp_6 = b;
            var tmp$ret$6;
            // Inline function 'kotlin.code' call
            tmp$ret$6 = 65;
            if (tmp_6 >= toByte(tmp$ret$6)) {
              var tmp_7 = b;
              var tmp$ret$7;
              // Inline function 'kotlin.code' call
              tmp$ret$7 = 70;
              tmp_5 = tmp_7 <= toByte(tmp$ret$7);
            } else {
              tmp_5 = false;
            }
            if (tmp_5) {
              var tmp$ret$8;
              // Inline function 'kotlin.code' call
              tmp$ret$8 = 65;
              digit = b - toByte(tmp$ret$8) + 10 | 0;
            } else {
              if (seen === 0) {
                throw NumberFormatException_init_$Create$('Expected leading [0-9a-fA-F] character but was 0x' + toHexString(b));
              }
              done = true;
              break $l$loop;
            }
          }
        }
        if (!value.and_jhajnj_k$(new Long(0, -268435456)).equals(new Long(0, 0))) {
          var buffer = (new Buffer()).writeHexadecimalUnsignedLong_v789p5_k$(value).writeByte_fjn38a_k$(b);
          throw NumberFormatException_init_$Create$('Number too large: ' + buffer.readUtf8_echivt_k$());
        }
        value = value.shl_po5ip6_k$(4);
        value = value.or_s401rn_k$(toLong(digit));
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var tmp1 = seen;
        seen = tmp1 + 1 | 0;
      }
      if (pos === limit) {
        this.head_1 = segment.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(segment);
      } else {
        segment.pos_1 = pos;
      }
    }
     while (!done ? !(this.head_1 == null) : false);
    var tmp2_this = this;
    tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(toLong(seen));
    tmp$ret$9 = value;
    return tmp$ret$9;
  };
  Buffer.prototype.readByteString_nzt46n_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteString' call
    tmp$ret$0 = this.readByteString_h2nnh5_k$(this.size_1);
    return tmp$ret$0;
  };
  Buffer.prototype.readByteString_h2nnh5_k$ = function (byteCount) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadByteString' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? byteCount.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
        tmp$ret$0 = 'byteCount: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      if (byteCount.compareTo_n4fqi2_k$(toLong(get_SEGMENTING_THRESHOLD())) >= 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = this.snapshot_80qwxv_k$(byteCount.toInt_1tsl84_k$());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
        this.skip_vl0dd4_k$(byteCount);
        tmp$ret$1 = tmp1_also;
        tmp$ret$2 = tmp$ret$1;
        break $l$block_0;
      } else {
        tmp$ret$2 = new ByteString(this.readByteArray_a7crqd_k$(byteCount));
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  Buffer.prototype.readFully_an47ne_k$ = function (sink, byteCount) {
    if (this.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      sink.write_x0zrut_k$(this, this.size_1);
      throw EOFException_init_$Create$(null, 1, null);
    }
    return sink.write_x0zrut_k$(this, byteCount);
  };
  Buffer.prototype.readAll_r4k3cl_k$ = function (sink) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadAll' call
    var byteCount = this.size_1;
    if (byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      sink.write_x0zrut_k$(this, byteCount);
    }
    tmp$ret$0 = byteCount;
    return tmp$ret$0;
  };
  Buffer.prototype.readUtf8_echivt_k$ = function () {
    return this.readUtf8_y4u7qn_k$(this.size_1);
  };
  Buffer.prototype.readUtf8_y4u7qn_k$ = function (byteCount) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? byteCount.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadUtf8.<anonymous>' call
        tmp$ret$0 = 'byteCount: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      if (byteCount.equals(new Long(0, 0))) {
        tmp$ret$1 = '';
        break $l$block_0;
      }
      var s = ensureNotNull(this.head_1);
      if (numberToLong(s.pos_1).plus_u6jwas_k$(byteCount).compareTo_n4fqi2_k$(toLong(s.limit_1)) > 0) {
        var tmp = this.readByteArray_a7crqd_k$(byteCount);
        tmp$ret$1 = commonToUtf8String$default(tmp, 0, 0, 3, null);
        break $l$block_0;
      }
      var result = commonToUtf8String(s.data_1, s.pos_1, s.pos_1 + byteCount.toInt_1tsl84_k$() | 0);
      var tmp0_this = s;
      tmp0_this.pos_1 = tmp0_this.pos_1 + byteCount.toInt_1tsl84_k$() | 0;
      var tmp1_this = this;
      tmp1_this.size_1 = tmp1_this.size_1.minus_llf5ei_k$(byteCount);
      if (s.pos_1 === s.limit_1) {
        this.head_1 = s.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(s);
      }
      tmp$ret$1 = result;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.readUtf8Line_e2s5l1_k$ = function () {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonReadUtf8Line' call
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 10;
    var newline = this.indexOf_q1ozk1_k$(toByte(tmp$ret$0));
    tmp$ret$1 = !newline.equals(new Long(-1, -1)) ? readUtf8Line(this, newline) : !this.size_1.equals(new Long(0, 0)) ? this.readUtf8_y4u7qn_k$(this.size_1) : null;
    return tmp$ret$1;
  };
  Buffer.prototype.readUtf8LineStrict_40ilic_k$ = function () {
    Companion_getInstance();
    return this.readUtf8LineStrict_qhncaa_k$(new Long(-1, 2147483647));
  };
  Buffer.prototype.readUtf8LineStrict_qhncaa_k$ = function (limit) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8LineStrict' call
      // Inline function 'kotlin.require' call
      var tmp0_require = limit.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
        tmp$ret$0 = 'limit < 0: ' + toString(limit);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp;
      Companion_getInstance();
      if (limit.equals(new Long(-1, 2147483647))) {
        Companion_getInstance();
        tmp = new Long(-1, 2147483647);
      } else {
        tmp = limit.plus_u6jwas_k$(new Long(1, 0));
      }
      var scanLength = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 10;
      var newline = this.indexOf_b1qwk3_k$(toByte(tmp$ret$1), new Long(0, 0), scanLength);
      if (!newline.equals(new Long(-1, -1))) {
        tmp$ret$2 = readUtf8Line(this, newline);
        break $l$block_0;
      }
      var tmp_0;
      var tmp_1;
      if (scanLength.compareTo_n4fqi2_k$(this.size_1) < 0) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$3 = scanLength.minus_llf5ei_k$(new Long(1, 0));
        var tmp_2 = this.get_ec5on4_k$(tmp$ret$3);
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 13;
        tmp_1 = tmp_2 === toByte(tmp$ret$4);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_3 = this.get_ec5on4_k$(scanLength);
        var tmp$ret$5;
        // Inline function 'kotlin.code' call
        tmp$ret$5 = 10;
        tmp_0 = tmp_3 === toByte(tmp$ret$5);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = readUtf8Line(this, scanLength);
        break $l$block_0;
      }
      var data = new Buffer();
      var tmp_4 = new Long(0, 0);
      var tmp$ret$7;
      // Inline function 'okio.minOf' call
      var tmp1_minOf = this.size_1;
      var tmp$ret$6;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = new Long(32, 0);
      tmp$ret$6 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
      tmp$ret$7 = tmp$ret$6;
      this.copyTo_w2d2hb_k$(data, tmp_4, tmp$ret$7);
      var tmp$ret$8;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = this.size_1;
      tmp$ret$8 = tmp2_minOf.compareTo_n4fqi2_k$(limit) <= 0 ? tmp2_minOf : limit;
      throw new EOFException('\\n not found: limit=' + toString(tmp$ret$8) + ' content=' + data.readByteString_nzt46n_k$().hex_27mj_k$() + '\u2026');
    }
    return tmp$ret$2;
  };
  Buffer.prototype.readUtf8CodePoint_brmg90_k$ = function () {
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8CodePoint' call
      if (this.size_1.equals(new Long(0, 0))) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var b0 = this.get_ec5on4_k$(new Long(0, 0));
      var codePoint;
      var byteCount;
      var min;
      var tmp$ret$0;
      // Inline function 'okio.and' call
      tmp$ret$0 = b0 & 128;
      if (tmp$ret$0 === 0) {
        var tmp$ret$1;
        // Inline function 'okio.and' call
        tmp$ret$1 = b0 & 127;
        codePoint = tmp$ret$1;
        byteCount = 1;
        min = 0;
      } else {
        var tmp$ret$2;
        // Inline function 'okio.and' call
        tmp$ret$2 = b0 & 224;
        if (tmp$ret$2 === 192) {
          var tmp$ret$3;
          // Inline function 'okio.and' call
          tmp$ret$3 = b0 & 31;
          codePoint = tmp$ret$3;
          byteCount = 2;
          min = 128;
        } else {
          var tmp$ret$4;
          // Inline function 'okio.and' call
          tmp$ret$4 = b0 & 240;
          if (tmp$ret$4 === 224) {
            var tmp$ret$5;
            // Inline function 'okio.and' call
            tmp$ret$5 = b0 & 15;
            codePoint = tmp$ret$5;
            byteCount = 3;
            min = 2048;
          } else {
            var tmp$ret$6;
            // Inline function 'okio.and' call
            tmp$ret$6 = b0 & 248;
            if (tmp$ret$6 === 240) {
              var tmp$ret$7;
              // Inline function 'okio.and' call
              tmp$ret$7 = b0 & 7;
              codePoint = tmp$ret$7;
              byteCount = 4;
              min = 65536;
            } else {
              this.skip_vl0dd4_k$(new Long(1, 0));
              tmp$ret$8 = get_REPLACEMENT_CODE_POINT();
              break $l$block_0;
            }
          }
        }
      }
      if (this.size_1.compareTo_n4fqi2_k$(toLong(byteCount)) < 0) {
        throw new EOFException('size < ' + byteCount + ': ' + toString(this.size_1) + ' (to read code point prefixed 0x' + toHexString(b0) + ')');
      }
      var inductionVariable = 1;
      if (inductionVariable < byteCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var b = this.get_ec5on4_k$(toLong(i));
          var tmp$ret$9;
          // Inline function 'okio.and' call
          tmp$ret$9 = b & 192;
          if (tmp$ret$9 === 128) {
            codePoint = codePoint << 6;
            var tmp = codePoint;
            var tmp$ret$10;
            // Inline function 'okio.and' call
            tmp$ret$10 = b & 63;
            codePoint = tmp | tmp$ret$10;
          } else {
            this.skip_vl0dd4_k$(toLong(i));
            tmp$ret$8 = get_REPLACEMENT_CODE_POINT();
            break $l$block_0;
          }
        }
         while (inductionVariable < byteCount);
      this.skip_vl0dd4_k$(toLong(byteCount));
      var tmp_0;
      if (codePoint > 1114111) {
        tmp_0 = get_REPLACEMENT_CODE_POINT();
      } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
        tmp_0 = get_REPLACEMENT_CODE_POINT();
      } else if (codePoint < min) {
        tmp_0 = get_REPLACEMENT_CODE_POINT();
      } else {
        tmp_0 = codePoint;
      }
      tmp$ret$8 = tmp_0;
    }
    return tmp$ret$8;
  };
  Buffer.prototype.select_rfub5h_k$ = function (options) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonSelect' call
      var index = selectPrefix$default(this, options, false, 2, null);
      if (index === -1) {
        tmp$ret$0 = -1;
        break $l$block;
      }
      var selectedSize = options.byteStrings_1[index].get_size_woubt6_k$();
      this.skip_vl0dd4_k$(toLong(selectedSize));
      tmp$ret$0 = index;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.readByteArray_52wnjv_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteArray' call
    tmp$ret$0 = this.readByteArray_a7crqd_k$(this.size_1);
    return tmp$ret$0;
  };
  Buffer.prototype.readByteArray_a7crqd_k$ = function (byteCount) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonReadByteArray' call
    // Inline function 'kotlin.require' call
    var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? byteCount.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonReadByteArray.<anonymous>' call
      tmp$ret$0 = 'byteCount: ' + toString(byteCount);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    var result = new Int8Array(byteCount.toInt_1tsl84_k$());
    this.readFully_rpc466_k$(result);
    tmp$ret$1 = result;
    return tmp$ret$1;
  };
  Buffer.prototype.read_9mr02b_k$ = function (sink) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonRead' call
    tmp$ret$0 = this.read_43uq31_k$(sink, 0, sink.length);
    return tmp$ret$0;
  };
  Buffer.prototype.readFully_rpc466_k$ = function (sink) {
    var offset = 0;
    while (offset < sink.length) {
      var read = this.read_43uq31_k$(sink, offset, sink.length - offset | 0);
      if (read === -1) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      offset = offset + read | 0;
    }
    return Unit_getInstance();
  };
  Buffer.prototype.read_43uq31_k$ = function (sink, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = -1;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = s.limit_1 - s.pos_1 | 0;
      tmp$ret$1 = Math.min(byteCount, tmp0_minOf);
      var toCopy = tmp$ret$1;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = s.data_1;
      var tmp2_copyInto = s.pos_1;
      var tmp3_copyInto = s.pos_1 + toCopy | 0;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      var tmp_0 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = sink;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp_0, tmp$ret$5, offset, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$6 = sink;
      var tmp1_this = s;
      tmp1_this.pos_1 = tmp1_this.pos_1 + toCopy | 0;
      var tmp2_this = this;
      tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(toLong(toCopy));
      if (s.pos_1 === s.limit_1) {
        this.head_1 = s.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(s);
      }
      tmp$ret$0 = toCopy;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.clear_j9y8zo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonClear' call
    this.skip_vl0dd4_k$(this.size_1);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  Buffer.prototype.skip_vl0dd4_k$ = function (byteCount) {
    var byteCount_0 = byteCount;
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$(null, 1, null);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp$ret$1;
      // Inline function 'okio.minOf' call
      var tmp0_minOf = byteCount_0;
      var tmp1_minOf = head.limit_1 - head.pos_1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf_0 = toLong(tmp1_minOf);
      tmp$ret$0 = tmp0_minOf.compareTo_n4fqi2_k$(tmp0_minOf_0) <= 0 ? tmp0_minOf : tmp0_minOf_0;
      tmp$ret$1 = tmp$ret$0;
      var toSkip = tmp$ret$1.toInt_1tsl84_k$();
      var tmp1_this = this;
      tmp1_this.size_1 = tmp1_this.size_1.minus_llf5ei_k$(toLong(toSkip));
      byteCount_0 = byteCount_0.minus_llf5ei_k$(toLong(toSkip));
      var tmp2_this = head;
      tmp2_this.pos_1 = tmp2_this.pos_1 + toSkip | 0;
      if (head.pos_1 === head.limit_1) {
        this.head_1 = head.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_axzlry_k$(head);
      }
    }
    return Unit_getInstance();
  };
  Buffer.prototype.write_cdq4rf_k$ = function (byteString) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWrite' call
    var tmp0_commonWrite = byteString.get_size_woubt6_k$();
    byteString.write_yix3zv_k$(this, 0, tmp0_commonWrite);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.write_ljfx17_k$ = function (byteString, offset, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWrite' call
    byteString.write_yix3zv_k$(this, offset, byteCount);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.writableSegment_g5a3pu_k$ = function (minimumCapacity) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonWritableSegment' call
      // Inline function 'kotlin.require' call
      var tmp;
      if (minimumCapacity >= 1) {
        Companion_getInstance_1();
        tmp = minimumCapacity <= 8192;
      } else {
        tmp = false;
      }
      var tmp0_require = tmp;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonWritableSegment.<anonymous>' call
        tmp$ret$0 = 'unexpected capacity';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.head_1 == null) {
        var result = SegmentPool_getInstance().take_2451j_k$();
        this.head_1 = result;
        result.prev_1 = result;
        result.next_1 = result;
        tmp$ret$1 = result;
        break $l$block;
      }
      var tail = ensureNotNull(this.head_1).prev_1;
      var tmp_0;
      var tmp_1 = ensureNotNull(tail).limit_1 + minimumCapacity | 0;
      Companion_getInstance_1();
      if (tmp_1 > 8192) {
        tmp_0 = true;
      } else {
        tmp_0 = !tail.owner_1;
      }
      if (tmp_0) {
        tail = tail.push_toq0no_k$(SegmentPool_getInstance().take_2451j_k$());
      }
      tmp$ret$1 = tail;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.writeUtf8_688wup_k$ = function (string) {
    return this.writeUtf8_jl4gy7_k$(string, 0, string.length);
  };
  Buffer.prototype.writeUtf8_jl4gy7_k$ = function (string, beginIndex, endIndex) {
    var tmp$ret$8;
    // Inline function 'okio.internal.commonWriteUtf8' call
    // Inline function 'kotlin.require' call
    var tmp0_require = beginIndex >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$0 = 'beginIndex < 0: ' + beginIndex;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = endIndex >= beginIndex;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$1 = 'endIndex < beginIndex: ' + endIndex + ' < ' + beginIndex;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = endIndex <= string.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      tmp$ret$2 = 'endIndex > string.length: ' + endIndex + ' > ' + string.length;
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var i = beginIndex;
    while (i < endIndex) {
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      var tmp3__get_code__enalup = charSequenceGet(string, i);
      tmp$ret$3 = Char__toInt_impl_vasixd(tmp3__get_code__enalup);
      var c = tmp$ret$3;
      if (c < 128) {
        var tail = this.writableSegment_g5a3pu_k$(1);
        var data = tail.data_1;
        var segmentOffset = tail.limit_1 - i | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        Companion_getInstance_1();
        var tmp4_minOf = 8192 - segmentOffset | 0;
        tmp$ret$4 = Math.min(endIndex, tmp4_minOf);
        var runLimit = tmp$ret$4;
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        data[segmentOffset + tmp0 | 0] = toByte(c);
        $l$loop: while (i < runLimit) {
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          var tmp5__get_code__iwzzkv = charSequenceGet(string, i);
          tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
          c = tmp$ret$5;
          if (c >= 128)
            break $l$loop;
          var tmp1 = i;
          i = tmp1 + 1 | 0;
          data[segmentOffset + tmp1 | 0] = toByte(c);
        }
        var runSize = (i + segmentOffset | 0) - tail.limit_1 | 0;
        var tmp2_this = tail;
        tmp2_this.limit_1 = tmp2_this.limit_1 + runSize | 0;
        var tmp3_this = this;
        tmp3_this.size_1 = tmp3_this.size_1.plus_u6jwas_k$(toLong(runSize));
      } else if (c < 2048) {
        var tail_0 = this.writableSegment_g5a3pu_k$(2);
        tail_0.data_1[tail_0.limit_1] = toByte(c >> 6 | 192);
        tail_0.data_1[tail_0.limit_1 + 1 | 0] = toByte(c & 63 | 128);
        var tmp4_this = tail_0;
        tmp4_this.limit_1 = tmp4_this.limit_1 + 2 | 0;
        var tmp5_this = this;
        tmp5_this.size_1 = tmp5_this.size_1.plus_u6jwas_k$(new Long(2, 0));
        var tmp6 = i;
        i = tmp6 + 1 | 0;
      } else if (c < 55296 ? true : c > 57343) {
        var tail_1 = this.writableSegment_g5a3pu_k$(3);
        tail_1.data_1[tail_1.limit_1] = toByte(c >> 12 | 224);
        tail_1.data_1[tail_1.limit_1 + 1 | 0] = toByte(c >> 6 & 63 | 128);
        tail_1.data_1[tail_1.limit_1 + 2 | 0] = toByte(c & 63 | 128);
        var tmp7_this = tail_1;
        tmp7_this.limit_1 = tmp7_this.limit_1 + 3 | 0;
        var tmp8_this = this;
        tmp8_this.size_1 = tmp8_this.size_1.plus_u6jwas_k$(new Long(3, 0));
        var tmp9 = i;
        i = tmp9 + 1 | 0;
      } else {
        var tmp;
        if ((i + 1 | 0) < endIndex) {
          var tmp$ret$6;
          // Inline function 'kotlin.code' call
          var tmp6__get_code__l1uofy = charSequenceGet(string, i + 1 | 0);
          tmp$ret$6 = Char__toInt_impl_vasixd(tmp6__get_code__l1uofy);
          tmp = tmp$ret$6;
        } else {
          tmp = 0;
        }
        var low = tmp;
        if (c > 56319 ? true : !(56320 <= low ? low <= 57343 : false)) {
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          tmp$ret$7 = 63;
          this.writeByte_fjn38a_k$(tmp$ret$7);
          var tmp10 = i;
          i = tmp10 + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          var tail_2 = this.writableSegment_g5a3pu_k$(4);
          tail_2.data_1[tail_2.limit_1] = toByte(codePoint >> 18 | 240);
          tail_2.data_1[tail_2.limit_1 + 1 | 0] = toByte(codePoint >> 12 & 63 | 128);
          tail_2.data_1[tail_2.limit_1 + 2 | 0] = toByte(codePoint >> 6 & 63 | 128);
          tail_2.data_1[tail_2.limit_1 + 3 | 0] = toByte(codePoint & 63 | 128);
          var tmp11_this = tail_2;
          tmp11_this.limit_1 = tmp11_this.limit_1 + 4 | 0;
          var tmp12_this = this;
          tmp12_this.size_1 = tmp12_this.size_1.plus_u6jwas_k$(new Long(4, 0));
          i = i + 2 | 0;
        }
      }
    }
    tmp$ret$8 = this;
    return tmp$ret$8;
  };
  Buffer.prototype.writeUtf8CodePoint_czrlgy_k$ = function (codePoint) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonWriteUtf8CodePoint' call
    if (codePoint < 128) {
      this.writeByte_fjn38a_k$(codePoint);
    } else if (codePoint < 2048) {
      var tail = this.writableSegment_g5a3pu_k$(2);
      tail.data_1[tail.limit_1] = toByte(codePoint >> 6 | 192);
      tail.data_1[tail.limit_1 + 1 | 0] = toByte(codePoint & 63 | 128);
      var tmp0_this = tail;
      tmp0_this.limit_1 = tmp0_this.limit_1 + 2 | 0;
      var tmp1_this = this;
      tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(new Long(2, 0));
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 63;
      this.writeByte_fjn38a_k$(tmp$ret$0);
    } else if (codePoint < 65536) {
      var tail_0 = this.writableSegment_g5a3pu_k$(3);
      tail_0.data_1[tail_0.limit_1] = toByte(codePoint >> 12 | 224);
      tail_0.data_1[tail_0.limit_1 + 1 | 0] = toByte(codePoint >> 6 & 63 | 128);
      tail_0.data_1[tail_0.limit_1 + 2 | 0] = toByte(codePoint & 63 | 128);
      var tmp2_this = tail_0;
      tmp2_this.limit_1 = tmp2_this.limit_1 + 3 | 0;
      var tmp3_this = this;
      tmp3_this.size_1 = tmp3_this.size_1.plus_u6jwas_k$(new Long(3, 0));
    } else if (codePoint <= 1114111) {
      var tail_1 = this.writableSegment_g5a3pu_k$(4);
      tail_1.data_1[tail_1.limit_1] = toByte(codePoint >> 18 | 240);
      tail_1.data_1[tail_1.limit_1 + 1 | 0] = toByte(codePoint >> 12 & 63 | 128);
      tail_1.data_1[tail_1.limit_1 + 2 | 0] = toByte(codePoint >> 6 & 63 | 128);
      tail_1.data_1[tail_1.limit_1 + 3 | 0] = toByte(codePoint & 63 | 128);
      var tmp4_this = tail_1;
      tmp4_this.limit_1 = tmp4_this.limit_1 + 4 | 0;
      var tmp5_this = this;
      tmp5_this.size_1 = tmp5_this.size_1.plus_u6jwas_k$(new Long(4, 0));
    } else {
      throw IllegalArgumentException_init_$Create$('Unexpected code point: 0x' + toHexString_0(codePoint));
    }
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  Buffer.prototype.write_3dsjb8_k$ = function (source) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWrite' call
    tmp$ret$0 = this.write_v9wlwc_k$(source, 0, source.length);
    return tmp$ret$0;
  };
  Buffer.prototype.write_v9wlwc_k$ = function (source, offset, byteCount) {
    var tmp$ret$6;
    // Inline function 'okio.internal.commonWrite' call
    var offset_0 = offset;
    checkOffsetAndCount(toLong(source.length), toLong(offset_0), toLong(byteCount));
    var limit = offset_0 + byteCount | 0;
    while (offset_0 < limit) {
      var tail = this.writableSegment_g5a3pu_k$(1);
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = limit - offset_0 | 0;
      Companion_getInstance_1();
      var tmp1_minOf = 8192 - tail.limit_1 | 0;
      tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
      var toCopy = tmp$ret$0;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = tail.data_1;
      var tmp3_copyInto = tail.limit_1;
      var tmp4_copyInto = offset_0;
      var tmp5_copyInto = offset_0 + toCopy | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = source;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp2_copyInto;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, tmp3_copyInto, tmp4_copyInto, tmp5_copyInto);
      tmp$ret$5 = tmp2_copyInto;
      offset_0 = offset_0 + toCopy | 0;
      var tmp0_this = tail;
      tmp0_this.limit_1 = tmp0_this.limit_1 + toCopy | 0;
    }
    var tmp1_this = this;
    tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(toLong(byteCount));
    tmp$ret$6 = this;
    return tmp$ret$6;
  };
  Buffer.prototype.writeAll_rsmo5y_k$ = function (source) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteAll' call
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      Companion_getInstance_1();
      var readCount = source.read_nz46cz_k$(this, toLong(8192));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.plus_u6jwas_k$(readCount);
    }
    tmp$ret$0 = totalBytesRead;
    return tmp$ret$0;
  };
  Buffer.prototype.write_9a9x81_k$ = function (source, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWrite' call
    var byteCount_0 = byteCount;
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var read = source.read_nz46cz_k$(this, byteCount_0);
      if (read.equals(new Long(-1, -1))) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      byteCount_0 = byteCount_0.minus_llf5ei_k$(read);
    }
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.writeByte_fjn38a_k$ = function (b) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteByte' call
    var tail = this.writableSegment_g5a3pu_k$(1);
    var tmp0_this = tail;
    var tmp1 = tmp0_this.limit_1;
    tmp0_this.limit_1 = tmp1 + 1 | 0;
    tail.data_1[tmp1] = toByte(b);
    var tmp2_this = this;
    tmp2_this.size_1 = tmp2_this.size_1.plus_u6jwas_k$(new Long(1, 0));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.writeShort_k2gy6c_k$ = function (s) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteShort' call
    var tail = this.writableSegment_g5a3pu_k$(2);
    var data = tail.data_1;
    var limit = tail.limit_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = toByte((s >>> 8 | 0) & 255);
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = toByte(s & 255);
    tail.limit_1 = limit;
    var tmp2_this = this;
    tmp2_this.size_1 = tmp2_this.size_1.plus_u6jwas_k$(new Long(2, 0));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.writeShortLe_567ylx_k$ = function (s) {
    return this.writeShort_k2gy6c_k$(reverseBytes(toShort(s)));
  };
  Buffer.prototype.writeInt_1gh65t_k$ = function (i) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteInt' call
    var tail = this.writableSegment_g5a3pu_k$(4);
    var data = tail.data_1;
    var limit = tail.limit_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = toByte((i >>> 24 | 0) & 255);
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = toByte((i >>> 16 | 0) & 255);
    var tmp2 = limit;
    limit = tmp2 + 1 | 0;
    data[tmp2] = toByte((i >>> 8 | 0) & 255);
    var tmp3 = limit;
    limit = tmp3 + 1 | 0;
    data[tmp3] = toByte(i & 255);
    tail.limit_1 = limit;
    var tmp4_this = this;
    tmp4_this.size_1 = tmp4_this.size_1.plus_u6jwas_k$(new Long(4, 0));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.writeIntLe_9i312w_k$ = function (i) {
    return this.writeInt_1gh65t_k$(reverseBytes_0(i));
  };
  Buffer.prototype.writeLong_ogycij_k$ = function (v) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonWriteLong' call
    var tail = this.writableSegment_g5a3pu_k$(8);
    var data = tail.data_1;
    var limit = tail.limit_1;
    var tmp0 = limit;
    limit = tmp0 + 1 | 0;
    data[tmp0] = v.ushr_rr8rvr_k$(56).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp1 = limit;
    limit = tmp1 + 1 | 0;
    data[tmp1] = v.ushr_rr8rvr_k$(48).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp2 = limit;
    limit = tmp2 + 1 | 0;
    data[tmp2] = v.ushr_rr8rvr_k$(40).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp3 = limit;
    limit = tmp3 + 1 | 0;
    data[tmp3] = v.ushr_rr8rvr_k$(32).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp4 = limit;
    limit = tmp4 + 1 | 0;
    data[tmp4] = v.ushr_rr8rvr_k$(24).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp5 = limit;
    limit = tmp5 + 1 | 0;
    data[tmp5] = v.ushr_rr8rvr_k$(16).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp6 = limit;
    limit = tmp6 + 1 | 0;
    data[tmp6] = v.ushr_rr8rvr_k$(8).and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    var tmp7 = limit;
    limit = tmp7 + 1 | 0;
    data[tmp7] = v.and_jhajnj_k$(new Long(255, 0)).toByte_edm0nx_k$();
    tail.limit_1 = limit;
    var tmp8_this = this;
    tmp8_this.size_1 = tmp8_this.size_1.plus_u6jwas_k$(new Long(8, 0));
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  Buffer.prototype.writeLongLe_mltb42_k$ = function (v) {
    return this.writeLong_ogycij_k$(reverseBytes_1(v));
  };
  Buffer.prototype.writeDecimalLong_mc98i0_k$ = function (v) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonWriteDecimalLong' call
      var v_0 = v;
      if (v_0.equals(new Long(0, 0))) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        tmp$ret$1 = this.writeByte_fjn38a_k$(tmp$ret$0);
        break $l$block_0;
      }
      var negative = false;
      if (v_0.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
        v_0 = v_0.unaryMinus_6uz0qp_k$();
        if (v_0.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
          tmp$ret$1 = this.writeUtf8_688wup_k$('-9223372036854775808');
          break $l$block_0;
        }
        negative = true;
      }
      var width = v_0.compareTo_n4fqi2_k$(new Long(100000000, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(10000, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(100, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(10, 0)) < 0 ? 1 : 2 : v_0.compareTo_n4fqi2_k$(new Long(1000, 0)) < 0 ? 3 : 4 : v_0.compareTo_n4fqi2_k$(new Long(1000000, 0)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(100000, 0)) < 0 ? 5 : 6 : v_0.compareTo_n4fqi2_k$(new Long(10000000, 0)) < 0 ? 7 : 8 : v_0.compareTo_n4fqi2_k$(new Long(-727379968, 232)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1410065408, 2)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1000000000, 0)) < 0 ? 9 : 10 : v_0.compareTo_n4fqi2_k$(new Long(1215752192, 23)) < 0 ? 11 : 12 : v_0.compareTo_n4fqi2_k$(new Long(-1530494976, 232830)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1316134912, 2328)) < 0 ? 13 : v_0.compareTo_n4fqi2_k$(new Long(276447232, 23283)) < 0 ? 14 : 15 : v_0.compareTo_n4fqi2_k$(new Long(1569325056, 23283064)) < 0 ? v_0.compareTo_n4fqi2_k$(new Long(1874919424, 2328306)) < 0 ? 16 : 17 : v_0.compareTo_n4fqi2_k$(new Long(-1486618624, 232830643)) < 0 ? 18 : 19;
      if (negative) {
        width = width + 1 | 0;
      }
      var tail = this.writableSegment_g5a3pu_k$(width);
      var data = tail.data_1;
      var pos = tail.limit_1 + width | 0;
      while (!v_0.equals(new Long(0, 0))) {
        var tmp$ret$2;
        // Inline function 'kotlin.Long.rem' call
        var tmp0_rem = v_0;
        tmp$ret$2 = tmp0_rem.rem_9rbcjo_k$(new Long(10, 0));
        var digit = tmp$ret$2.toInt_1tsl84_k$();
        pos = pos - 1 | 0;
        data[pos] = get_HEX_DIGIT_BYTES()[digit];
        var tmp$ret$3;
        // Inline function 'kotlin.Long.div' call
        var tmp1_div = v_0;
        tmp$ret$3 = tmp1_div.div_9s1fi3_k$(new Long(10, 0));
        v_0 = tmp$ret$3;
      }
      if (negative) {
        pos = pos - 1 | 0;
        var tmp = pos;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 45;
        data[tmp] = toByte(tmp$ret$4);
      }
      var tmp0_this = tail;
      tmp0_this.limit_1 = tmp0_this.limit_1 + width | 0;
      var tmp1_this = this;
      tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(toLong(width));
      tmp$ret$1 = this;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.writeHexadecimalUnsignedLong_v789p5_k$ = function (v) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonWriteHexadecimalUnsignedLong' call
      var v_0 = v;
      if (v_0.equals(new Long(0, 0))) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 48;
        tmp$ret$1 = this.writeByte_fjn38a_k$(tmp$ret$0);
        break $l$block;
      }
      var x = v_0;
      x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(1));
      x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(2));
      x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(4));
      x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(8));
      x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(16));
      x = x.or_s401rn_k$(x.ushr_rr8rvr_k$(32));
      x = x.minus_llf5ei_k$(x.ushr_rr8rvr_k$(1).and_jhajnj_k$(new Long(1431655765, 1431655765)));
      x = x.ushr_rr8rvr_k$(2).and_jhajnj_k$(new Long(858993459, 858993459)).plus_u6jwas_k$(x.and_jhajnj_k$(new Long(858993459, 858993459)));
      x = x.ushr_rr8rvr_k$(4).plus_u6jwas_k$(x).and_jhajnj_k$(new Long(252645135, 252645135));
      x = x.plus_u6jwas_k$(x.ushr_rr8rvr_k$(8));
      x = x.plus_u6jwas_k$(x.ushr_rr8rvr_k$(16));
      x = x.and_jhajnj_k$(new Long(63, 0)).plus_u6jwas_k$(x.ushr_rr8rvr_k$(32).and_jhajnj_k$(new Long(63, 0)));
      var tmp$ret$3;
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = x;
      tmp$ret$2 = tmp0_plus.plus_u6jwas_k$(new Long(3, 0));
      var tmp1_div = tmp$ret$2;
      tmp$ret$3 = tmp1_div.div_9s1fi3_k$(new Long(4, 0));
      var width = tmp$ret$3.toInt_1tsl84_k$();
      var tail = this.writableSegment_g5a3pu_k$(width);
      var data = tail.data_1;
      var pos = (tail.limit_1 + width | 0) - 1 | 0;
      var start = tail.limit_1;
      while (pos >= start) {
        data[pos] = get_HEX_DIGIT_BYTES()[v_0.and_jhajnj_k$(new Long(15, 0)).toInt_1tsl84_k$()];
        v_0 = v_0.ushr_rr8rvr_k$(4);
        var tmp0 = pos;
        pos = tmp0 - 1 | 0;
      }
      var tmp1_this = tail;
      tmp1_this.limit_1 = tmp1_this.limit_1 + width | 0;
      var tmp2_this = this;
      tmp2_this.size_1 = tmp2_this.size_1.plus_u6jwas_k$(toLong(width));
      tmp$ret$1 = this;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.write_x0zrut_k$ = function (source, byteCount) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'okio.internal.commonWrite' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      var tmp0_require = !(source === this);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonWrite.<anonymous>' call
        tmp$ret$0 = 'source == this';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      checkOffsetAndCount(source.size_1, new Long(0, 0), byteCount_0);
      while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        if (byteCount_0.compareTo_n4fqi2_k$(toLong(ensureNotNull(source.head_1).limit_1 - ensureNotNull(source.head_1).pos_1 | 0)) < 0) {
          var tail = !(this.head_1 == null) ? ensureNotNull(this.head_1).prev_1 : null;
          var tmp;
          if (!(tail == null) ? tail.owner_1 : false) {
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$1;
            // Inline function 'kotlin.Long.plus' call
            var tmp1_plus = byteCount_0;
            var tmp2_plus = tail.limit_1;
            tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
            var tmp3_minus = tmp$ret$1;
            var tmp4_minus = tail.shared_1 ? 0 : tail.pos_1;
            tmp$ret$2 = tmp3_minus.minus_llf5ei_k$(toLong(tmp4_minus));
            var tmp_0 = tmp$ret$2;
            Companion_getInstance_1();
            tmp = tmp_0.compareTo_n4fqi2_k$(toLong(8192)) <= 0;
          } else {
            tmp = false;
          }
          if (tmp) {
            ensureNotNull(source.head_1).writeTo_yc0wgs_k$(tail, byteCount_0.toInt_1tsl84_k$());
            var tmp0_this = source;
            tmp0_this.size_1 = tmp0_this.size_1.minus_llf5ei_k$(byteCount_0);
            var tmp1_this = this;
            tmp1_this.size_1 = tmp1_this.size_1.plus_u6jwas_k$(byteCount_0);
            tmp$ret$3 = Unit_getInstance();
            break $l$block;
          } else {
            source.head_1 = ensureNotNull(source.head_1).split_dvaf_k$(byteCount_0.toInt_1tsl84_k$());
          }
        }
        var segmentToMove = source.head_1;
        var movedByteCount = toLong(ensureNotNull(segmentToMove).limit_1 - segmentToMove.pos_1 | 0);
        source.head_1 = segmentToMove.pop_2dsh_k$();
        if (this.head_1 == null) {
          this.head_1 = segmentToMove;
          segmentToMove.prev_1 = segmentToMove;
          segmentToMove.next_1 = segmentToMove.prev_1;
        } else {
          var tail_0 = ensureNotNull(this.head_1).prev_1;
          tail_0 = ensureNotNull(tail_0).push_toq0no_k$(segmentToMove);
          tail_0.compact_dbgoby_k$();
        }
        var tmp2_this = source;
        tmp2_this.size_1 = tmp2_this.size_1.minus_llf5ei_k$(movedByteCount);
        var tmp3_this = this;
        tmp3_this.size_1 = tmp3_this.size_1.plus_u6jwas_k$(movedByteCount);
        byteCount_0 = byteCount_0.minus_llf5ei_k$(movedByteCount);
      }
    }
    return tmp$ret$3;
  };
  Buffer.prototype.read_nz46cz_k$ = function (sink, byteCount) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount_0);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.size_1.equals(new Long(0, 0))) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block;
      }
      if (byteCount_0.compareTo_n4fqi2_k$(this.size_1) > 0)
        byteCount_0 = this.size_1;
      sink.write_x0zrut_k$(this, byteCount_0);
      tmp$ret$1 = byteCount_0;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.indexOf_q1ozk1_k$ = function (b) {
    var tmp = new Long(0, 0);
    Companion_getInstance();
    return this.indexOf_b1qwk3_k$(b, tmp, new Long(-1, 2147483647));
  };
  Buffer.prototype.indexOf_hkbew9_k$ = function (b, fromIndex) {
    Companion_getInstance();
    return this.indexOf_b1qwk3_k$(b, fromIndex, new Long(-1, 2147483647));
  };
  Buffer.prototype.indexOf_b1qwk3_k$ = function (b, fromIndex, toIndex) {
    var tmp$ret$1;
    $l$block_8: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      var toIndex_0 = toIndex;
      // Inline function 'kotlin.require' call
      var tmp0_require = (new Long(0, 0)).compareTo_n4fqi2_k$(fromIndex_0) <= 0 ? fromIndex_0.compareTo_n4fqi2_k$(toIndex_0) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'size=' + toString(this.size_1) + ' fromIndex=' + toString(fromIndex_0) + ' toIndex=' + toString(toIndex_0);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (toIndex_0.compareTo_n4fqi2_k$(this.size_1) > 0)
        toIndex_0 = this.size_1;
      if (fromIndex_0.equals(toIndex_0)) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      }
      var tmp$ret$3;
      // Inline function 'okio.internal.seek' call
      var tmp3_seek = fromIndex_0;
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0_elvis_lhs_0 = null;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var s = tmp_0;
        var offset = new Long(-1, -1);
        while (offset.compareTo_n4fqi2_k$(toIndex_0) < 0) {
          var data = s.data_1;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = toLong(s.limit_1);
          var tmp1_minOf = numberToLong(s.pos_1).plus_u6jwas_k$(toIndex_0).minus_llf5ei_k$(offset);
          tmp$ret$2 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
          var limit = tmp$ret$2.toInt_1tsl84_k$();
          var pos = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
          while (pos < limit) {
            if (data[pos] === b) {
              tmp$ret$1 = numberToLong(pos - s.pos_1 | 0).plus_u6jwas_k$(offset);
              break $l$block_8;
            }
            var tmp1 = pos;
            pos = tmp1 + 1 | 0;
          }
          offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
          fromIndex_0 = offset;
          s = ensureNotNull(s.next_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.size_1.minus_llf5ei_k$(tmp3_seek).compareTo_n4fqi2_k$(tmp3_seek) < 0) {
        var offset_0 = this.size_1;
        while (offset_0.compareTo_n4fqi2_k$(tmp3_seek) > 0) {
          s_0 = ensureNotNull(s_0.prev_1);
          offset_0 = offset_0.minus_llf5ei_k$(toLong(s_0.limit_1 - s_0.pos_1 | 0));
        }
        var tmp4__anonymous__pkmkx7 = s_0;
        var tmp5__anonymous__kpxxpo = offset_0;
        var tmp0_elvis_lhs_1 = tmp4__anonymous__pkmkx7;
        var tmp_1;
        if (tmp0_elvis_lhs_1 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_1 = tmp0_elvis_lhs_1;
        }
        var s_1 = tmp_1;
        var offset_1 = tmp5__anonymous__kpxxpo;
        while (offset_1.compareTo_n4fqi2_k$(toIndex_0) < 0) {
          var data_0 = s_1.data_1;
          var tmp$ret$4;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_0 = toLong(s_1.limit_1);
          var tmp1_minOf_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(toIndex_0).minus_llf5ei_k$(offset_1);
          tmp$ret$4 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp1_minOf_0) <= 0 ? tmp0_minOf_0 : tmp1_minOf_0;
          var limit_0 = tmp$ret$4.toInt_1tsl84_k$();
          var pos_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
          while (pos_0 < limit_0) {
            if (data_0[pos_0] === b) {
              tmp$ret$1 = numberToLong(pos_0 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
              break $l$block_8;
            }
            var tmp1_0 = pos_0;
            pos_0 = tmp1_0 + 1 | 0;
          }
          offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
          fromIndex_0 = offset_1;
          s_1 = ensureNotNull(s_1.next_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$5;
          // Inline function 'kotlin.Long.plus' call
          var tmp1_plus = offset_2;
          var tmp2_plus = s_0.limit_1 - s_0.pos_1 | 0;
          tmp$ret$5 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
          var nextOffset = tmp$ret$5;
          if (nextOffset.compareTo_n4fqi2_k$(tmp3_seek) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.next_1);
          offset_2 = nextOffset;
        }
        var tmp6__anonymous__fv9ai5 = s_0;
        var tmp7__anonymous__b0knam = offset_2;
        var tmp0_elvis_lhs_2 = tmp6__anonymous__fv9ai5;
        var tmp_2;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_2 = tmp0_elvis_lhs_2;
        }
        var s_2 = tmp_2;
        var offset_3 = tmp7__anonymous__b0knam;
        while (offset_3.compareTo_n4fqi2_k$(toIndex_0) < 0) {
          var data_1 = s_2.data_1;
          var tmp$ret$6;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_1 = toLong(s_2.limit_1);
          var tmp1_minOf_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(toIndex_0).minus_llf5ei_k$(offset_3);
          tmp$ret$6 = tmp0_minOf_1.compareTo_n4fqi2_k$(tmp1_minOf_1) <= 0 ? tmp0_minOf_1 : tmp1_minOf_1;
          var limit_1 = tmp$ret$6.toInt_1tsl84_k$();
          var pos_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
          while (pos_1 < limit_1) {
            if (data_1[pos_1] === b) {
              tmp$ret$1 = numberToLong(pos_1 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
              break $l$block_8;
            }
            var tmp1_1 = pos_1;
            pos_1 = tmp1_1 + 1 | 0;
          }
          offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.next_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      }
    }
    return tmp$ret$1;
  };
  Buffer.prototype.indexOf_mitgi7_k$ = function (bytes) {
    return this.indexOf_t2mh2x_k$(bytes, new Long(0, 0));
  };
  Buffer.prototype.indexOf_t2mh2x_k$ = function (bytes, fromIndex) {
    var tmp$ret$2;
    $l$block_7: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.require' call
      var tmp0_require = bytes.get_size_woubt6_k$() > 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'bytes is empty';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = fromIndex_0.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$1 = 'fromIndex < 0: ' + toString(fromIndex_0);
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp$ret$6;
      // Inline function 'okio.internal.seek' call
      var tmp4_seek = fromIndex_0;
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0_elvis_lhs_0 = null;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_7;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var s = tmp_0;
        var offset = new Long(-1, -1);
        var targetByteArray = bytes.internalArray_tr176k_k$();
        var b0 = targetByteArray[0];
        var bytesSize = bytes.get_size_woubt6_k$();
        var tmp$ret$3;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus = this.size_1;
        tmp$ret$3 = tmp0_minus.minus_llf5ei_k$(toLong(bytesSize));
        var resultLimit = tmp$ret$3.plus_u6jwas_k$(new Long(1, 0));
        while (offset.compareTo_n4fqi2_k$(resultLimit) < 0) {
          var data = s.data_1;
          var tmp$ret$5;
          // Inline function 'okio.minOf' call
          var tmp1_minOf = s.limit_1;
          var tmp2_minOf = numberToLong(s.pos_1).plus_u6jwas_k$(resultLimit).minus_llf5ei_k$(offset);
          var tmp$ret$4;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = toLong(tmp1_minOf);
          tmp$ret$4 = tmp0_minOf.compareTo_n4fqi2_k$(tmp2_minOf) <= 0 ? tmp0_minOf : tmp2_minOf;
          tmp$ret$5 = tmp$ret$4;
          var segmentLimit = tmp$ret$5.toInt_1tsl84_k$();
          var inductionVariable = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
          if (inductionVariable < segmentLimit)
            do {
              var pos = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              if (data[pos] === b0 ? rangeEquals(s, pos + 1 | 0, targetByteArray, 1, bytesSize) : false) {
                tmp$ret$2 = numberToLong(pos - s.pos_1 | 0).plus_u6jwas_k$(offset);
                break $l$block_7;
              }
            }
             while (inductionVariable < segmentLimit);
          offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
          fromIndex_0 = offset;
          s = ensureNotNull(s.next_1);
        }
        tmp$ret$2 = new Long(-1, -1);
        break $l$block_7;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.size_1.minus_llf5ei_k$(tmp4_seek).compareTo_n4fqi2_k$(tmp4_seek) < 0) {
        var offset_0 = this.size_1;
        while (offset_0.compareTo_n4fqi2_k$(tmp4_seek) > 0) {
          s_0 = ensureNotNull(s_0.prev_1);
          offset_0 = offset_0.minus_llf5ei_k$(toLong(s_0.limit_1 - s_0.pos_1 | 0));
        }
        var tmp5__anonymous__kpxxpo = s_0;
        var tmp6__anonymous__fv9ai5 = offset_0;
        var tmp0_elvis_lhs_1 = tmp5__anonymous__kpxxpo;
        var tmp_1;
        if (tmp0_elvis_lhs_1 == null) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_7;
        } else {
          tmp_1 = tmp0_elvis_lhs_1;
        }
        var s_1 = tmp_1;
        var offset_1 = tmp6__anonymous__fv9ai5;
        var targetByteArray_0 = bytes.internalArray_tr176k_k$();
        var b0_0 = targetByteArray_0[0];
        var bytesSize_0 = bytes.get_size_woubt6_k$();
        var tmp$ret$7;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus_0 = this.size_1;
        tmp$ret$7 = tmp0_minus_0.minus_llf5ei_k$(toLong(bytesSize_0));
        var resultLimit_0 = tmp$ret$7.plus_u6jwas_k$(new Long(1, 0));
        while (offset_1.compareTo_n4fqi2_k$(resultLimit_0) < 0) {
          var data_0 = s_1.data_1;
          var tmp$ret$9;
          // Inline function 'okio.minOf' call
          var tmp1_minOf_0 = s_1.limit_1;
          var tmp2_minOf_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(resultLimit_0).minus_llf5ei_k$(offset_1);
          var tmp$ret$8;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_0 = toLong(tmp1_minOf_0);
          tmp$ret$8 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp2_minOf_0) <= 0 ? tmp0_minOf_0 : tmp2_minOf_0;
          tmp$ret$9 = tmp$ret$8;
          var segmentLimit_0 = tmp$ret$9.toInt_1tsl84_k$();
          var inductionVariable_0 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
          if (inductionVariable_0 < segmentLimit_0)
            do {
              var pos_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (data_0[pos_0] === b0_0 ? rangeEquals(s_1, pos_0 + 1 | 0, targetByteArray_0, 1, bytesSize_0) : false) {
                tmp$ret$2 = numberToLong(pos_0 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
                break $l$block_7;
              }
            }
             while (inductionVariable_0 < segmentLimit_0);
          offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
          fromIndex_0 = offset_1;
          s_1 = ensureNotNull(s_1.next_1);
        }
        tmp$ret$2 = new Long(-1, -1);
        break $l$block_7;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$10;
          // Inline function 'kotlin.Long.plus' call
          var tmp2_plus = offset_2;
          var tmp3_plus = s_0.limit_1 - s_0.pos_1 | 0;
          tmp$ret$10 = tmp2_plus.plus_u6jwas_k$(toLong(tmp3_plus));
          var nextOffset = tmp$ret$10;
          if (nextOffset.compareTo_n4fqi2_k$(tmp4_seek) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.next_1);
          offset_2 = nextOffset;
        }
        var tmp7__anonymous__b0knam = s_0;
        var tmp8__anonymous__65w033 = offset_2;
        var tmp0_elvis_lhs_2 = tmp7__anonymous__b0knam;
        var tmp_2;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_7;
        } else {
          tmp_2 = tmp0_elvis_lhs_2;
        }
        var s_2 = tmp_2;
        var offset_3 = tmp8__anonymous__65w033;
        var targetByteArray_1 = bytes.internalArray_tr176k_k$();
        var b0_1 = targetByteArray_1[0];
        var bytesSize_1 = bytes.get_size_woubt6_k$();
        var tmp$ret$11;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus_1 = this.size_1;
        tmp$ret$11 = tmp0_minus_1.minus_llf5ei_k$(toLong(bytesSize_1));
        var resultLimit_1 = tmp$ret$11.plus_u6jwas_k$(new Long(1, 0));
        while (offset_3.compareTo_n4fqi2_k$(resultLimit_1) < 0) {
          var data_1 = s_2.data_1;
          var tmp$ret$13;
          // Inline function 'okio.minOf' call
          var tmp1_minOf_1 = s_2.limit_1;
          var tmp2_minOf_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(resultLimit_1).minus_llf5ei_k$(offset_3);
          var tmp$ret$12;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf_1 = toLong(tmp1_minOf_1);
          tmp$ret$12 = tmp0_minOf_1.compareTo_n4fqi2_k$(tmp2_minOf_1) <= 0 ? tmp0_minOf_1 : tmp2_minOf_1;
          tmp$ret$13 = tmp$ret$12;
          var segmentLimit_1 = tmp$ret$13.toInt_1tsl84_k$();
          var inductionVariable_1 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
          if (inductionVariable_1 < segmentLimit_1)
            do {
              var pos_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (data_1[pos_1] === b0_1 ? rangeEquals(s_2, pos_1 + 1 | 0, targetByteArray_1, 1, bytesSize_1) : false) {
                tmp$ret$2 = numberToLong(pos_1 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
                break $l$block_7;
              }
            }
             while (inductionVariable_1 < segmentLimit_1);
          offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.next_1);
        }
        tmp$ret$2 = new Long(-1, -1);
        break $l$block_7;
      }
    }
    return tmp$ret$2;
  };
  Buffer.prototype.indexOfElement_aqjz7r_k$ = function (targetBytes) {
    return this.indexOfElement_ea8pul_k$(targetBytes, new Long(0, 0));
  };
  Buffer.prototype.indexOfElement_ea8pul_k$ = function (targetBytes, fromIndex) {
    var tmp$ret$1;
    $l$block_10: {
      // Inline function 'okio.internal.commonIndexOfElement' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.require' call
      var tmp0_require = fromIndex_0.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
        tmp$ret$0 = 'fromIndex < 0: ' + toString(fromIndex_0);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp$ret$2;
      // Inline function 'okio.internal.seek' call
      var tmp3_seek = fromIndex_0;
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0_elvis_lhs_0 = null;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var s = tmp_0;
        var offset = new Long(-1, -1);
        if (targetBytes.get_size_woubt6_k$() === 2) {
          var b0 = targetBytes.get_fkrdnv_k$(0);
          var b1 = targetBytes.get_fkrdnv_k$(1);
          while (offset.compareTo_n4fqi2_k$(this.size_1) < 0) {
            var data = s.data_1;
            var pos = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
            var limit = s.limit_1;
            while (pos < limit) {
              var b = data[pos];
              if (b === b0 ? true : b === b1) {
                tmp$ret$1 = numberToLong(pos - s.pos_1 | 0).plus_u6jwas_k$(offset);
                break $l$block_10;
              }
              var tmp1 = pos;
              pos = tmp1 + 1 | 0;
            }
            offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
            fromIndex_0 = offset;
            s = ensureNotNull(s.next_1);
          }
        } else {
          var targetByteArray = targetBytes.internalArray_tr176k_k$();
          while (offset.compareTo_n4fqi2_k$(this.size_1) < 0) {
            var data_0 = s.data_1;
            var pos_0 = numberToLong(s.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset).toInt_1tsl84_k$();
            var limit_0 = s.limit_1;
            while (pos_0 < limit_0) {
              var b_0 = data_0[pos_0];
              var indexedObject = targetByteArray;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var t = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (b_0 === t) {
                  tmp$ret$1 = numberToLong(pos_0 - s.pos_1 | 0).plus_u6jwas_k$(offset);
                  break $l$block_10;
                }
              }
              var tmp3 = pos_0;
              pos_0 = tmp3 + 1 | 0;
            }
            offset = offset.plus_u6jwas_k$(toLong(s.limit_1 - s.pos_1 | 0));
            fromIndex_0 = offset;
            s = ensureNotNull(s.next_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.size_1.minus_llf5ei_k$(tmp3_seek).compareTo_n4fqi2_k$(tmp3_seek) < 0) {
        var offset_0 = this.size_1;
        while (offset_0.compareTo_n4fqi2_k$(tmp3_seek) > 0) {
          s_0 = ensureNotNull(s_0.prev_1);
          offset_0 = offset_0.minus_llf5ei_k$(toLong(s_0.limit_1 - s_0.pos_1 | 0));
        }
        var tmp4__anonymous__pkmkx7 = s_0;
        var tmp5__anonymous__kpxxpo = offset_0;
        var tmp0_elvis_lhs_1 = tmp4__anonymous__pkmkx7;
        var tmp_1;
        if (tmp0_elvis_lhs_1 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_1 = tmp0_elvis_lhs_1;
        }
        var s_1 = tmp_1;
        var offset_1 = tmp5__anonymous__kpxxpo;
        if (targetBytes.get_size_woubt6_k$() === 2) {
          var b0_0 = targetBytes.get_fkrdnv_k$(0);
          var b1_0 = targetBytes.get_fkrdnv_k$(1);
          while (offset_1.compareTo_n4fqi2_k$(this.size_1) < 0) {
            var data_1 = s_1.data_1;
            var pos_1 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
            var limit_1 = s_1.limit_1;
            while (pos_1 < limit_1) {
              var b_1 = data_1[pos_1];
              if (b_1 === b0_0 ? true : b_1 === b1_0) {
                tmp$ret$1 = numberToLong(pos_1 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
                break $l$block_10;
              }
              var tmp1_0 = pos_1;
              pos_1 = tmp1_0 + 1 | 0;
            }
            offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
            fromIndex_0 = offset_1;
            s_1 = ensureNotNull(s_1.next_1);
          }
        } else {
          var targetByteArray_0 = targetBytes.internalArray_tr176k_k$();
          while (offset_1.compareTo_n4fqi2_k$(this.size_1) < 0) {
            var data_2 = s_1.data_1;
            var pos_2 = numberToLong(s_1.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_1).toInt_1tsl84_k$();
            var limit_2 = s_1.limit_1;
            while (pos_2 < limit_2) {
              var b_2 = data_2[pos_2];
              var indexedObject_0 = targetByteArray_0;
              var inductionVariable_0 = 0;
              var last_0 = indexedObject_0.length;
              while (inductionVariable_0 < last_0) {
                var t_0 = indexedObject_0[inductionVariable_0];
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                if (b_2 === t_0) {
                  tmp$ret$1 = numberToLong(pos_2 - s_1.pos_1 | 0).plus_u6jwas_k$(offset_1);
                  break $l$block_10;
                }
              }
              var tmp3_0 = pos_2;
              pos_2 = tmp3_0 + 1 | 0;
            }
            offset_1 = offset_1.plus_u6jwas_k$(toLong(s_1.limit_1 - s_1.pos_1 | 0));
            fromIndex_0 = offset_1;
            s_1 = ensureNotNull(s_1.next_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp$ret$3;
          // Inline function 'kotlin.Long.plus' call
          var tmp1_plus = offset_2;
          var tmp2_plus = s_0.limit_1 - s_0.pos_1 | 0;
          tmp$ret$3 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
          var nextOffset = tmp$ret$3;
          if (nextOffset.compareTo_n4fqi2_k$(tmp3_seek) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.next_1);
          offset_2 = nextOffset;
        }
        var tmp6__anonymous__fv9ai5 = s_0;
        var tmp7__anonymous__b0knam = offset_2;
        var tmp0_elvis_lhs_2 = tmp6__anonymous__fv9ai5;
        var tmp_2;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_2 = tmp0_elvis_lhs_2;
        }
        var s_2 = tmp_2;
        var offset_3 = tmp7__anonymous__b0knam;
        if (targetBytes.get_size_woubt6_k$() === 2) {
          var b0_1 = targetBytes.get_fkrdnv_k$(0);
          var b1_1 = targetBytes.get_fkrdnv_k$(1);
          while (offset_3.compareTo_n4fqi2_k$(this.size_1) < 0) {
            var data_3 = s_2.data_1;
            var pos_3 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
            var limit_3 = s_2.limit_1;
            while (pos_3 < limit_3) {
              var b_3 = data_3[pos_3];
              if (b_3 === b0_1 ? true : b_3 === b1_1) {
                tmp$ret$1 = numberToLong(pos_3 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
                break $l$block_10;
              }
              var tmp1_1 = pos_3;
              pos_3 = tmp1_1 + 1 | 0;
            }
            offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
            fromIndex_0 = offset_3;
            s_2 = ensureNotNull(s_2.next_1);
          }
        } else {
          var targetByteArray_1 = targetBytes.internalArray_tr176k_k$();
          while (offset_3.compareTo_n4fqi2_k$(this.size_1) < 0) {
            var data_4 = s_2.data_1;
            var pos_4 = numberToLong(s_2.pos_1).plus_u6jwas_k$(fromIndex_0).minus_llf5ei_k$(offset_3).toInt_1tsl84_k$();
            var limit_4 = s_2.limit_1;
            while (pos_4 < limit_4) {
              var b_4 = data_4[pos_4];
              var indexedObject_1 = targetByteArray_1;
              var inductionVariable_1 = 0;
              var last_1 = indexedObject_1.length;
              while (inductionVariable_1 < last_1) {
                var t_1 = indexedObject_1[inductionVariable_1];
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                if (b_4 === t_1) {
                  tmp$ret$1 = numberToLong(pos_4 - s_2.pos_1 | 0).plus_u6jwas_k$(offset_3);
                  break $l$block_10;
                }
              }
              var tmp3_1 = pos_4;
              pos_4 = tmp3_1 + 1 | 0;
            }
            offset_3 = offset_3.plus_u6jwas_k$(toLong(s_2.limit_1 - s_2.pos_1 | 0));
            fromIndex_0 = offset_3;
            s_2 = ensureNotNull(s_2.next_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      }
    }
    return tmp$ret$1;
  };
  Buffer.prototype.rangeEquals_xn2170_k$ = function (offset, bytes) {
    return this.rangeEquals_2lbf2s_k$(offset, bytes, 0, bytes.get_size_woubt6_k$());
  };
  Buffer.prototype.rangeEquals_2lbf2s_k$ = function (offset, bytes, bytesOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if ((((offset.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? true : bytesOffset < 0) ? true : byteCount < 0) ? true : this.size_1.minus_llf5ei_k$(offset).compareTo_n4fqi2_k$(toLong(byteCount)) < 0) ? true : (bytes.get_size_woubt6_k$() - bytesOffset | 0) < byteCount) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var inductionVariable = 0;
      if (inductionVariable < byteCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          tmp$ret$1 = offset.plus_u6jwas_k$(toLong(i));
          if (!(this.get_ec5on4_k$(tmp$ret$1) === bytes.get_fkrdnv_k$(bytesOffset + i | 0))) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable < byteCount);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.flush_sgqoqb_k$ = function () {
    return Unit_getInstance();
  };
  Buffer.prototype.close_ymq55z_k$ = function () {
    return Unit_getInstance();
  };
  Buffer.prototype.timeout_lq9okf_k$ = function () {
    return Companion_getInstance_7().NONE_1;
  };
  Buffer.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'okio.internal.commonEquals' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (!(other instanceof Buffer)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (!this.size_1.equals(other.size_1)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (this.size_1.equals(new Long(0, 0))) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      var sa = ensureNotNull(this.head_1);
      var sb = ensureNotNull(other.head_1);
      var posA = sa.pos_1;
      var posB = sb.pos_1;
      var pos = new Long(0, 0);
      var count;
      while (pos.compareTo_n4fqi2_k$(this.size_1) < 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = sa.limit_1 - posA | 0;
        var tmp1_minOf = sb.limit_1 - posB | 0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        count = toLong(tmp$ret$1);
        var inductionVariable = new Long(0, 0);
        var last = count;
        if (inductionVariable.compareTo_n4fqi2_k$(last) < 0)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
            var tmp = sa.data_1;
            var tmp1 = posA;
            posA = tmp1 + 1 | 0;
            var tmp_0 = tmp[tmp1];
            var tmp_1 = sb.data_1;
            var tmp2 = posB;
            posB = tmp2 + 1 | 0;
            if (!(tmp_0 === tmp_1[tmp2])) {
              tmp$ret$0 = false;
              break $l$block_3;
            }
          }
           while (inductionVariable.compareTo_n4fqi2_k$(last) < 0);
        if (posA === sa.limit_1) {
          sa = ensureNotNull(sa.next_1);
          posA = sa.pos_1;
        }
        if (posB === sb.limit_1) {
          sb = ensureNotNull(sb.next_1);
          posB = sb.pos_1;
        }
        pos = pos.plus_u6jwas_k$(count);
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = 0;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      var result = 1;
      do {
        var pos = s.pos_1;
        var limit = s.limit_1;
        while (pos < limit) {
          result = imul(31, result) + s.data_1[pos] | 0;
          var tmp1 = pos;
          pos = tmp1 + 1 | 0;
        }
        s = ensureNotNull(s.next_1);
      }
       while (!(s === this.head_1));
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.toString = function () {
    return this.snapshot_4plubo_k$().toString();
  };
  Buffer.prototype.copy_1tks5_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCopy' call
      var result = new Buffer();
      if (this.size_1.equals(new Long(0, 0))) {
        tmp$ret$0 = result;
        break $l$block;
      }
      var head = ensureNotNull(this.head_1);
      var headCopy = head.sharedCopy_timhza_k$();
      result.head_1 = headCopy;
      headCopy.prev_1 = result.head_1;
      headCopy.next_1 = headCopy.prev_1;
      var s = head.next_1;
      while (!(s === head)) {
        ensureNotNull(headCopy.prev_1).push_toq0no_k$(ensureNotNull(s).sharedCopy_timhza_k$());
        s = s.next_1;
      }
      result.size_1 = this.size_1;
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.snapshot_4plubo_k$ = function () {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonSnapshot' call
    // Inline function 'kotlin.check' call
    var tmp0_check = this.size_1.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSnapshot.<anonymous>' call
      tmp$ret$0 = 'size > Int.MAX_VALUE: ' + toString(this.size_1);
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = this.snapshot_80qwxv_k$(this.size_1.toInt_1tsl84_k$());
    return tmp$ret$1;
  };
  Buffer.prototype.snapshot_80qwxv_k$ = function (byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonSnapshot' call
      if (byteCount === 0) {
        tmp$ret$0 = Companion_getInstance_6().EMPTY_1;
        break $l$block;
      }
      checkOffsetAndCount(this.size_1, new Long(0, 0), toLong(byteCount));
      var offset = 0;
      var segmentCount = 0;
      var s = this.head_1;
      while (offset < byteCount) {
        if (ensureNotNull(s).limit_1 === s.pos_1) {
          throw AssertionError_init_$Create$('s.limit == s.pos');
        }
        offset = offset + (s.limit_1 - s.pos_1 | 0) | 0;
        var tmp0 = segmentCount;
        segmentCount = tmp0 + 1 | 0;
        s = s.next_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = segmentCount;
      tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var segments = tmp$ret$1;
      var directory = new Int32Array(imul(segmentCount, 2));
      offset = 0;
      segmentCount = 0;
      s = this.head_1;
      while (offset < byteCount) {
        segments[segmentCount] = ensureNotNull(s).data_1;
        offset = offset + (s.limit_1 - s.pos_1 | 0) | 0;
        var tmp = segmentCount;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = offset;
        tmp$ret$2 = Math.min(tmp1_minOf, byteCount);
        directory[tmp] = tmp$ret$2;
        directory[segmentCount + segments.length | 0] = s.pos_1;
        s.shared_1 = true;
        var tmp1 = segmentCount;
        segmentCount = tmp1 + 1 | 0;
        s = s.next_1;
      }
      tmp$ret$0 = new SegmentedByteString(isArray(segments) ? segments : THROW_CCE(), directory);
    }
    return tmp$ret$0;
  };
  Buffer.prototype.md5_2b9a_k$ = function () {
    return digest(this, new Md5());
  };
  Buffer.prototype.sha1_23myt_k$ = function () {
    return digest(this, new Sha1());
  };
  Buffer.prototype.sha256_exzwt5_k$ = function () {
    return digest(this, new Sha256());
  };
  Buffer.prototype.sha512_exzuom_k$ = function () {
    return digest(this, new Sha512());
  };
  Buffer.prototype.hmacSha1_39bmjy_k$ = function (key) {
    return digest(this, Companion_getInstance_2().sha1_6wtj0r_k$(key));
  };
  Buffer.prototype.hmacSha256_bn3g50_k$ = function (key) {
    return digest(this, Companion_getInstance_2().sha256_gmub0z_k$(key));
  };
  Buffer.prototype.hmacSha512_h7i053_k$ = function (key) {
    return digest(this, Companion_getInstance_2().sha512_b2fr0w_k$(key));
  };
  Buffer.prototype.readUnsafe_t4wwhx_k$ = function (unsafeCursor) {
    return commonReadUnsafe(this, unsafeCursor);
  };
  Buffer.prototype.readUnsafe$default_twvsu3_k$ = function (unsafeCursor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unsafeCursor = get_DEFAULT__new_UnsafeCursor();
    return this.readUnsafe_t4wwhx_k$(unsafeCursor);
  };
  Buffer.prototype.readAndWriteUnsafe_yj1drh_k$ = function (unsafeCursor) {
    return commonReadAndWriteUnsafe(this, unsafeCursor);
  };
  Buffer.prototype.readAndWriteUnsafe$default_uim1f1_k$ = function (unsafeCursor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unsafeCursor = get_DEFAULT__new_UnsafeCursor();
    return this.readAndWriteUnsafe_yj1drh_k$(unsafeCursor);
  };
  Buffer.$metadata$ = classMeta('Buffer', [BufferedSource, BufferedSink]);
  function BufferedSink() {
  }
  BufferedSink.$metadata$ = interfaceMeta('BufferedSink', [Sink]);
  function BufferedSource() {
  }
  BufferedSource.$metadata$ = interfaceMeta('BufferedSource', [Source]);
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$0 = new Int8Array([]);
    tmp.EMPTY_1 = new ByteString(tmp$ret$0);
  }
  Companion_5.prototype.get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  Companion_5.prototype.of_or7dx0_k$ = function (data) {
    var tmp$ret$2;
    // Inline function 'okio.internal.commonOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = data;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp$ret$2 = new ByteString(tmp$ret$1);
    return tmp$ret$2;
  };
  Companion_5.prototype.toByteString_6ei3gf_k$ = function (_this__u8e3s4, offset, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonToByteString' call
    var byteCount_0 = resolveDefaultParameter_1(_this__u8e3s4, byteCount);
    checkOffsetAndCount(toLong(_this__u8e3s4.length), toLong(offset), toLong(byteCount_0));
    tmp$ret$0 = new ByteString(copyOfRange(_this__u8e3s4, offset, offset + byteCount_0 | 0));
    return tmp$ret$0;
  };
  Companion_5.prototype.toByteString$default_ezoxky_k$ = function (_this__u8e3s4, offset, byteCount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = 0;
    if (!(($mask0 & 2) === 0))
      byteCount = get_DEFAULT__ByteString_size();
    return this.toByteString_6ei3gf_k$(_this__u8e3s4, offset, byteCount);
  };
  Companion_5.prototype.encodeUtf8_lzqk50_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEncodeUtf8' call
    var byteString = new ByteString(asUtf8ToByteArray(_this__u8e3s4));
    byteString.set_utf8_ds4bj_k$(_this__u8e3s4);
    tmp$ret$0 = byteString;
    return tmp$ret$0;
  };
  Companion_5.prototype.decodeBase64_z1dyne_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonDecodeBase64' call
    var decoded = decodeBase64ToArray(_this__u8e3s4);
    tmp$ret$0 = !(decoded == null) ? new ByteString(decoded) : null;
    return tmp$ret$0;
  };
  Companion_5.prototype.decodeHex_bpi9sq_k$ = function (_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonDecodeHex' call
    // Inline function 'kotlin.require' call
    var tmp0_require = (_this__u8e3s4.length % 2 | 0) === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonDecodeHex.<anonymous>' call
      tmp$ret$0 = 'Unexpected hex string: ' + _this__u8e3s4;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var result = new Int8Array(_this__u8e3s4.length / 2 | 0);
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var d1 = decodeHexDigit$accessor$13225fg(charSequenceGet(_this__u8e3s4, imul(i, 2))) << 4;
        var d2 = decodeHexDigit$accessor$13225fg(charSequenceGet(_this__u8e3s4, imul(i, 2) + 1 | 0));
        result[i] = toByte(d1 + d2 | 0);
      }
       while (inductionVariable <= last);
    tmp$ret$1 = new ByteString(result);
    return tmp$ret$1;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ByteString(data) {
    Companion_getInstance_6();
    this.data_1 = data;
    this.hashCode_2 = 0;
    this.utf8__1 = null;
  }
  ByteString.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  ByteString.prototype.set_hashCode_gxsuy0_k$ = function (value) {
  };
  ByteString.prototype.get_hashCode_td036k_k$ = function () {
    return this.hashCode_2;
  };
  ByteString.prototype.set_utf8_ds4bj_k$ = function (value) {
  };
  ByteString.prototype.get_utf8_wovtfe_k$ = function () {
    return this.utf8__1;
  };
  ByteString.prototype.utf8_255yp_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonUtf8' call
    var result = this.utf8__1;
    if (result == null) {
      result = toUtf8String(this.internalArray_tr176k_k$());
      this.set_utf8_ds4bj_k$(result);
    }
    tmp$ret$0 = result;
    return tmp$ret$0;
  };
  ByteString.prototype.base64_n39i29_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonBase64' call
    tmp$ret$0 = encodeBase64$default(this.data_1, null, 1, null);
    return tmp$ret$0;
  };
  ByteString.prototype.base64Url_up517k_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonBase64Url' call
    tmp$ret$0 = encodeBase64(this.data_1, get_BASE64_URL_SAFE());
    return tmp$ret$0;
  };
  ByteString.prototype.hex_27mj_k$ = function () {
    var tmp$ret$2;
    // Inline function 'okio.internal.commonHex' call
    var result = charArray(imul(this.data_1.length, 2));
    var c = 0;
    var indexedObject = this.data_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1 = c;
      c = tmp1 + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      var tmp$ret$0;
      // Inline function 'okio.shr' call
      tmp$ret$0 = b >> 4;
      result[tmp1] = tmp[tmp$ret$0 & 15];
      var tmp2 = c;
      c = tmp2 + 1 | 0;
      var tmp_0 = get_HEX_DIGIT_CHARS();
      var tmp$ret$1;
      // Inline function 'okio.and' call
      tmp$ret$1 = b & 15;
      result[tmp2] = tmp_0[tmp$ret$1];
    }
    tmp$ret$2 = concatToString(result);
    return tmp$ret$2;
  };
  ByteString.prototype.md5_2b9a_k$ = function () {
    return this.digest_gka6e2_k$(new Md5());
  };
  ByteString.prototype.sha1_23myt_k$ = function () {
    return this.digest_gka6e2_k$(new Sha1());
  };
  ByteString.prototype.sha256_exzwt5_k$ = function () {
    return this.digest_gka6e2_k$(new Sha256());
  };
  ByteString.prototype.sha512_exzuom_k$ = function () {
    return this.digest_gka6e2_k$(new Sha512());
  };
  ByteString.prototype.hmacSha1_39bmjy_k$ = function (key) {
    return this.digest_gka6e2_k$(Companion_getInstance_2().sha1_6wtj0r_k$(key));
  };
  ByteString.prototype.hmacSha256_bn3g50_k$ = function (key) {
    return this.digest_gka6e2_k$(Companion_getInstance_2().sha256_gmub0z_k$(key));
  };
  ByteString.prototype.hmacSha512_h7i053_k$ = function (key) {
    return this.digest_gka6e2_k$(Companion_getInstance_2().sha512_b2fr0w_k$(key));
  };
  ByteString.prototype.digest_gka6e2_k$ = function (hashFunction) {
    hashFunction.update_evdvfb_k$(this.data_1, 0, this.get_size_woubt6_k$());
    var digestBytes = hashFunction.digest_m0ziv0_k$();
    return new ByteString(digestBytes);
  };
  ByteString.prototype.toAsciiLowercase_hzcfjv_k$ = function () {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'okio.internal.commonToAsciiLowercase' call
      var i = 0;
      $l$loop: while (i < this.data_1.length) {
        var c = this.data_1[i];
        var tmp;
        var tmp_0 = c;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 65;
        if (tmp_0 < toByte(tmp$ret$0)) {
          tmp = true;
        } else {
          var tmp_1 = c;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 90;
          tmp = tmp_1 > toByte(tmp$ret$1);
        }
        if (tmp) {
          var tmp0 = i;
          i = tmp0 + 1 | 0;
          continue $l$loop;
        }
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp0_copyOf = this.data_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_copyOf;
        tmp$ret$3 = tmp$ret$2.slice();
        var lowercase = tmp$ret$3;
        var tmp1 = i;
        i = tmp1 + 1 | 0;
        lowercase[tmp1] = toByte(c - -32 | 0);
        $l$loop_0: while (i < lowercase.length) {
          c = lowercase[i];
          var tmp_2;
          var tmp_3 = c;
          var tmp$ret$4;
          // Inline function 'kotlin.code' call
          tmp$ret$4 = 65;
          if (tmp_3 < toByte(tmp$ret$4)) {
            tmp_2 = true;
          } else {
            var tmp_4 = c;
            var tmp$ret$5;
            // Inline function 'kotlin.code' call
            tmp$ret$5 = 90;
            tmp_2 = tmp_4 > toByte(tmp$ret$5);
          }
          if (tmp_2) {
            var tmp2 = i;
            i = tmp2 + 1 | 0;
            continue $l$loop_0;
          }
          lowercase[i] = toByte(c - -32 | 0);
          var tmp3 = i;
          i = tmp3 + 1 | 0;
        }
        tmp$ret$6 = new ByteString(lowercase);
        break $l$block;
      }
      tmp$ret$6 = this;
    }
    return tmp$ret$6;
  };
  ByteString.prototype.toAsciiUppercase_u6qzto_k$ = function () {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'okio.internal.commonToAsciiUppercase' call
      var i = 0;
      $l$loop: while (i < this.data_1.length) {
        var c = this.data_1[i];
        var tmp;
        var tmp_0 = c;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 97;
        if (tmp_0 < toByte(tmp$ret$0)) {
          tmp = true;
        } else {
          var tmp_1 = c;
          var tmp$ret$1;
          // Inline function 'kotlin.code' call
          tmp$ret$1 = 122;
          tmp = tmp_1 > toByte(tmp$ret$1);
        }
        if (tmp) {
          var tmp0 = i;
          i = tmp0 + 1 | 0;
          continue $l$loop;
        }
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp0_copyOf = this.data_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_copyOf;
        tmp$ret$3 = tmp$ret$2.slice();
        var lowercase = tmp$ret$3;
        var tmp1 = i;
        i = tmp1 + 1 | 0;
        lowercase[tmp1] = toByte(c - 32 | 0);
        $l$loop_0: while (i < lowercase.length) {
          c = lowercase[i];
          var tmp_2;
          var tmp_3 = c;
          var tmp$ret$4;
          // Inline function 'kotlin.code' call
          tmp$ret$4 = 97;
          if (tmp_3 < toByte(tmp$ret$4)) {
            tmp_2 = true;
          } else {
            var tmp_4 = c;
            var tmp$ret$5;
            // Inline function 'kotlin.code' call
            tmp$ret$5 = 122;
            tmp_2 = tmp_4 > toByte(tmp$ret$5);
          }
          if (tmp_2) {
            var tmp2 = i;
            i = tmp2 + 1 | 0;
            continue $l$loop_0;
          }
          lowercase[i] = toByte(c - 32 | 0);
          var tmp3 = i;
          i = tmp3 + 1 | 0;
        }
        tmp$ret$6 = new ByteString(lowercase);
        break $l$block;
      }
      tmp$ret$6 = this;
    }
    return tmp$ret$6;
  };
  ByteString.prototype.substring_8we4nj_k$ = function (beginIndex, endIndex) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'okio.internal.commonSubstring' call
      var endIndex_0 = resolveDefaultParameter_0(this, endIndex);
      // Inline function 'kotlin.require' call
      var tmp0_require = beginIndex >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        tmp$ret$0 = 'beginIndex < 0';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = endIndex_0 <= this.data_1.length;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        tmp$ret$1 = 'endIndex > length(' + this.data_1.length + ')';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var subLen = endIndex_0 - beginIndex | 0;
      // Inline function 'kotlin.require' call
      var tmp2_require = subLen >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_require) {
        var tmp$ret$2;
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        tmp$ret$2 = 'endIndex < beginIndex';
        var message_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      if (beginIndex === 0 ? endIndex_0 === this.data_1.length : false) {
        tmp$ret$3 = this;
        break $l$block;
      }
      tmp$ret$3 = new ByteString(copyOfRange(this.data_1, beginIndex, endIndex_0));
    }
    return tmp$ret$3;
  };
  ByteString.prototype.substring$default_yw3vn8_k$ = function (beginIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      beginIndex = 0;
    if (!(($mask0 & 2) === 0))
      endIndex = get_DEFAULT__ByteString_size();
    return $handler == null ? this.substring_8we4nj_k$(beginIndex, endIndex) : $handler(beginIndex, endIndex);
  };
  ByteString.prototype.internalGet_hkm39k_k$ = function (pos) {
    if (pos >= this.get_size_woubt6_k$() ? true : pos < 0)
      throw new ArrayIndexOutOfBoundsException('size=' + this.get_size_woubt6_k$() + ' pos=' + pos);
    var tmp$ret$0;
    // Inline function 'okio.internal.commonGetByte' call
    tmp$ret$0 = this.data_1[pos];
    return tmp$ret$0;
  };
  ByteString.prototype.get_fkrdnv_k$ = function (index) {
    return this.internalGet_hkm39k_k$(index);
  };
  ByteString.prototype.get_size_woubt6_k$ = function () {
    return this.getSize_18qr2h_k$();
  };
  ByteString.prototype.getSize_18qr2h_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonGetSize' call
    tmp$ret$0 = this.data_1.length;
    return tmp$ret$0;
  };
  ByteString.prototype.toByteArray_qczt2u_k$ = function () {
    var tmp$ret$2;
    // Inline function 'okio.internal.commonToByteArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.data_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  ByteString.prototype.internalArray_tr176k_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonInternalArray' call
    tmp$ret$0 = this.data_1;
    return tmp$ret$0;
  };
  ByteString.prototype.write_yix3zv_k$ = function (buffer, offset, byteCount) {
    return commonWrite_4(this, buffer, offset, byteCount);
  };
  ByteString.prototype.rangeEquals_gaazw5_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonRangeEquals' call
    tmp$ret$0 = other.rangeEquals_agw6hu_k$(otherOffset, this.data_1, offset, byteCount);
    return tmp$ret$0;
  };
  ByteString.prototype.rangeEquals_agw6hu_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonRangeEquals' call
    tmp$ret$0 = (((offset >= 0 ? offset <= (this.data_1.length - byteCount | 0) : false) ? otherOffset >= 0 : false) ? otherOffset <= (other.length - byteCount | 0) : false) ? arrayRangeEquals(this.data_1, offset, other, otherOffset, byteCount) : false;
    return tmp$ret$0;
  };
  ByteString.prototype.copyInto_32c3ae_k$ = function (offset, target, targetOffset, byteCount) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.data_1;
    var tmp1_copyInto = offset + byteCount | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = target;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, targetOffset, offset, tmp1_copyInto);
    tmp$ret$4 = target;
    return Unit_getInstance();
  };
  ByteString.prototype.copyInto$default_xjrq1v_k$ = function (offset, target, targetOffset, byteCount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      targetOffset = 0;
    var tmp;
    if ($handler == null) {
      this.copyInto_32c3ae_k$(offset, target, targetOffset, byteCount);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(offset, target, targetOffset, byteCount);
    }
    return tmp;
  };
  ByteString.prototype.startsWith_p5xanx_k$ = function (prefix) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonStartsWith' call
    tmp$ret$0 = this.rangeEquals_gaazw5_k$(0, prefix, 0, prefix.get_size_woubt6_k$());
    return tmp$ret$0;
  };
  ByteString.prototype.startsWith_ut5xws_k$ = function (prefix) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonStartsWith' call
    tmp$ret$0 = this.rangeEquals_agw6hu_k$(0, prefix, 0, prefix.length);
    return tmp$ret$0;
  };
  ByteString.prototype.endsWith_996e4_k$ = function (suffix) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEndsWith' call
    tmp$ret$0 = this.rangeEquals_gaazw5_k$(this.get_size_woubt6_k$() - suffix.get_size_woubt6_k$() | 0, suffix, 0, suffix.get_size_woubt6_k$());
    return tmp$ret$0;
  };
  ByteString.prototype.endsWith_o2tuw5_k$ = function (suffix) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEndsWith' call
    tmp$ret$0 = this.rangeEquals_agw6hu_k$(this.get_size_woubt6_k$() - suffix.length | 0, suffix, 0, suffix.length);
    return tmp$ret$0;
  };
  ByteString.prototype.indexOf_x0l2oi_k$ = function (other, fromIndex) {
    return this.indexOf_6vxhk7_k$(other.internalArray_tr176k_k$(), fromIndex);
  };
  ByteString.prototype.indexOf$default_r4luq5_k$ = function (other, fromIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    return this.indexOf_x0l2oi_k$(other, fromIndex);
  };
  ByteString.prototype.indexOf_6vxhk7_k$ = function (other, fromIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonIndexOf' call
      var limit = this.data_1.length - other.length | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      tmp$ret$0 = Math.max(fromIndex, 0);
      var inductionVariable = tmp$ret$0;
      if (inductionVariable <= limit)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (arrayRangeEquals(this.data_1, i, other, 0, other.length)) {
            tmp$ret$1 = i;
            break $l$block;
          }
        }
         while (!(i === limit));
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  };
  ByteString.prototype.indexOf$default_unh9ry_k$ = function (other, fromIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    return $handler == null ? this.indexOf_6vxhk7_k$(other, fromIndex) : $handler(other, fromIndex);
  };
  ByteString.prototype.lastIndexOf_aucc20_k$ = function (other, fromIndex) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonLastIndexOf' call
    tmp$ret$0 = this.lastIndexOf_ttj3xt_k$(other.internalArray_tr176k_k$(), fromIndex);
    return tmp$ret$0;
  };
  ByteString.prototype.lastIndexOf$default_u515wp_k$ = function (other, fromIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = get_DEFAULT__ByteString_size();
    return this.lastIndexOf_aucc20_k$(other, fromIndex);
  };
  ByteString.prototype.lastIndexOf_ttj3xt_k$ = function (other, fromIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonLastIndexOf' call
      var fromIndex_0 = resolveDefaultParameter_0(this, fromIndex);
      var limit = this.data_1.length - other.length | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$0 = Math.min(fromIndex_0, limit);
      var inductionVariable = tmp$ret$0;
      if (0 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (arrayRangeEquals(this.data_1, i, other, 0, other.length)) {
            tmp$ret$1 = i;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  };
  ByteString.prototype.lastIndexOf$default_v4h3hw_k$ = function (other, fromIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = get_DEFAULT__ByteString_size();
    return $handler == null ? this.lastIndexOf_ttj3xt_k$(other, fromIndex) : $handler(other, fromIndex);
  };
  ByteString.prototype.equals = function (other) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = other.get_size_woubt6_k$() === this.data_1.length ? other.rangeEquals_agw6hu_k$(0, this.data_1, 0, this.data_1.length) : false;
      } else {
        tmp = false;
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  ByteString.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.hashCode_2;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = contentHashCode(this.data_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'okio.internal.commonHashCode.<anonymous>' call
      this.set_hashCode_gxsuy0_k$(tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp$ret$0 = tmp$ret$1;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.compareTo_46c94q_k$ = function (other) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonCompareTo' call
      var sizeA = this.get_size_woubt6_k$();
      var sizeB = other.get_size_woubt6_k$();
      var i = 0;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$0 = Math.min(sizeA, sizeB);
      var size = tmp$ret$0;
      $l$loop: while (i < size) {
        var tmp$ret$1;
        // Inline function 'okio.and' call
        var tmp0_and = this.get_fkrdnv_k$(i);
        tmp$ret$1 = tmp0_and & 255;
        var byteA = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'okio.and' call
        var tmp1_and = other.get_fkrdnv_k$(i);
        tmp$ret$2 = tmp1_and & 255;
        var byteB = tmp$ret$2;
        if (byteA === byteB) {
          var tmp0 = i;
          i = tmp0 + 1 | 0;
          continue $l$loop;
        }
        tmp$ret$3 = byteA < byteB ? -1 : 1;
        break $l$block_0;
      }
      if (sizeA === sizeB) {
        tmp$ret$3 = 0;
        break $l$block_0;
      }
      tmp$ret$3 = sizeA < sizeB ? -1 : 1;
    }
    return tmp$ret$3;
  };
  ByteString.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_46c94q_k$(other instanceof ByteString ? other : THROW_CCE());
  };
  ByteString.prototype.toString = function () {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonToString' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      var tmp0_isEmpty = this.data_1;
      tmp$ret$0 = tmp0_isEmpty.length === 0;
      if (tmp$ret$0) {
        tmp$ret$1 = '[size=0]';
        break $l$block_1;
      }
      var i = codePointIndexToCharIndex$accessor$13225fg(this.data_1, 64);
      if (i === -1) {
        var tmp;
        if (this.data_1.length <= 64) {
          tmp = '[hex=' + this.hex_27mj_k$() + ']';
        } else {
          var tmp_0 = this.data_1.length;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'okio.internal.commonSubstring' call
            var endIndex = resolveDefaultParameter_0(this, 64);
            // Inline function 'kotlin.require' call
            var tmp0_require = true;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_require) {
              var tmp$ret$2;
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              tmp$ret$2 = 'beginIndex < 0';
              var message = tmp$ret$2;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            // Inline function 'kotlin.require' call
            var tmp1_require = endIndex <= this.data_1.length;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp1_require) {
              var tmp$ret$3;
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              tmp$ret$3 = 'endIndex > length(' + this.data_1.length + ')';
              var message_0 = tmp$ret$3;
              throw IllegalArgumentException_init_$Create$(toString(message_0));
            }
            var subLen = endIndex - 0 | 0;
            // Inline function 'kotlin.require' call
            var tmp2_require = subLen >= 0;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp2_require) {
              var tmp$ret$4;
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              tmp$ret$4 = 'endIndex < beginIndex';
              var message_1 = tmp$ret$4;
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
            if (endIndex === this.data_1.length) {
              tmp$ret$5 = this;
              break $l$block_0;
            }
            tmp$ret$5 = new ByteString(copyOfRange(this.data_1, 0, endIndex));
          }
          tmp = '[size=' + tmp_0 + ' hex=' + tmp$ret$5.hex_27mj_k$() + '\u2026]';
        }
        tmp$ret$1 = tmp;
        break $l$block_1;
      }
      var text = this.utf8_255yp_k$();
      var tmp$ret$7;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = text;
      tmp$ret$7 = tmp$ret$6.substring(0, i);
      var tmp_1 = tmp$ret$7;
      var tmp_2 = replace$default(tmp_1, '\\', '\\\\', false, 4, null);
      var tmp_3 = replace$default(tmp_2, '\n', '\\n', false, 4, null);
      var safeText = replace$default(tmp_3, '\r', '\\r', false, 4, null);
      var tmp_4;
      if (i < text.length) {
        tmp_4 = '[size=' + this.data_1.length + ' text=' + safeText + '\u2026]';
      } else {
        tmp_4 = '[text=' + safeText + ']';
      }
      tmp$ret$1 = tmp_4;
    }
    return tmp$ret$1;
  };
  ByteString.$metadata$ = classMeta('ByteString', [Comparable]);
  function RealBufferedSource(source) {
    this.source_1 = source;
    this.closed_1 = false;
    this.buffer_1 = new Buffer();
  }
  RealBufferedSource.prototype.get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  RealBufferedSource.prototype.set_closed_7uamg0_k$ = function (_set____db54di) {
    this.closed_1 = _set____db54di;
  };
  RealBufferedSource.prototype.get_closed_byjrzp_k$ = function () {
    return this.closed_1;
  };
  RealBufferedSource.prototype.get_buffer_bmaafd_k$ = function () {
    return this.buffer_1;
  };
  RealBufferedSource.prototype.read_nz46cz_k$ = function (sink, byteCount) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp1_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        tmp$ret$1 = 'closed';
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (this.buffer_1.size_1.equals(new Long(0, 0))) {
        Companion_getInstance_1();
        var read = this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192));
        if (read.equals(new Long(-1, -1))) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block;
        }
      }
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = this.buffer_1.size_1;
      tmp$ret$3 = byteCount.compareTo_n4fqi2_k$(tmp2_minOf) <= 0 ? byteCount : tmp2_minOf;
      var toRead = tmp$ret$3;
      tmp$ret$2 = this.buffer_1.read_nz46cz_k$(sink, toRead);
    }
    return tmp$ret$2;
  };
  RealBufferedSource.prototype.exhausted_p1jt55_k$ = function () {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonExhausted' call
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonExhausted.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (this.buffer_1.exhausted_p1jt55_k$()) {
      Companion_getInstance_1();
      tmp = this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1));
    } else {
      tmp = false;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.require_btziny_k$ = function (byteCount) {
    var tmp;
    if (!this.request_k7c0qh_k$(byteCount)) {
      throw EOFException_init_$Create$(null, 1, null);
    }
    return tmp;
  };
  RealBufferedSource.prototype.request_k7c0qh_k$ = function (byteCount) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonRequest' call
      // Inline function 'kotlin.require' call
      var tmp0_require = byteCount.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        tmp$ret$0 = 'byteCount < 0: ' + toString(byteCount);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      var tmp1_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        tmp$ret$1 = 'closed';
        var message_0 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      while (this.buffer_1.size_1.compareTo_n4fqi2_k$(byteCount) < 0) {
        Companion_getInstance_1();
        if (this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1))) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    return tmp$ret$2;
  };
  RealBufferedSource.prototype.readByte_ectjk2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByte' call
    this.require_btziny_k$(new Long(1, 0));
    tmp$ret$0 = this.buffer_1.readByte_ectjk2_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readByteString_nzt46n_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteString' call
    this.buffer_1.writeAll_rsmo5y_k$(this.source_1);
    tmp$ret$0 = this.buffer_1.readByteString_nzt46n_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readByteString_h2nnh5_k$ = function (byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteString' call
    this.require_btziny_k$(byteCount);
    tmp$ret$0 = this.buffer_1.readByteString_h2nnh5_k$(byteCount);
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.select_rfub5h_k$ = function (options) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonSelect' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonSelect.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      while (true) {
        var index = selectPrefix(this.buffer_1, options, true);
        var tmp0_subject = index;
        switch (tmp0_subject) {
          case -1:
            tmp$ret$1 = -1;
            break $l$block_1;
          case -2:
            Companion_getInstance_1();
            if (this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1))) {
              tmp$ret$1 = -1;
              break $l$block_1;
            }

            break;
          default:
            var selectedSize = options.byteStrings_1[index].get_size_woubt6_k$();
            this.buffer_1.skip_vl0dd4_k$(toLong(selectedSize));
            tmp$ret$1 = index;
            break $l$block_1;
        }
      }
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.readByteArray_52wnjv_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteArray' call
    this.buffer_1.writeAll_rsmo5y_k$(this.source_1);
    tmp$ret$0 = this.buffer_1.readByteArray_52wnjv_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readByteArray_a7crqd_k$ = function (byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadByteArray' call
    this.require_btziny_k$(byteCount);
    tmp$ret$0 = this.buffer_1.readByteArray_a7crqd_k$(byteCount);
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.read_9mr02b_k$ = function (sink) {
    return this.read_43uq31_k$(sink, 0, sink.length);
  };
  RealBufferedSource.prototype.readFully_rpc466_k$ = function (sink) {
    try {
      this.require_btziny_k$(toLong(sink.length));
    } catch ($p) {
      if ($p instanceof EOFException) {
        var offset = 0;
        while (this.buffer_1.size_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
          var read = this.buffer_1.read_43uq31_k$(sink, offset, this.buffer_1.size_1.toInt_1tsl84_k$());
          if (read === -1)
            throw AssertionError_init_$Create$_0();
          offset = offset + read | 0;
        }
        throw $p;
      } else {
        throw $p;
      }
    }
    return this.buffer_1.readFully_rpc466_k$(sink);
  };
  RealBufferedSource.prototype.read_43uq31_k$ = function (sink, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
      if (this.buffer_1.size_1.equals(new Long(0, 0))) {
        Companion_getInstance_1();
        var read = this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192));
        if (read.equals(new Long(-1, -1))) {
          tmp$ret$0 = -1;
          break $l$block;
        }
      }
      var tmp$ret$2;
      // Inline function 'okio.minOf' call
      var tmp0_minOf = this.buffer_1.size_1;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf_0 = toLong(byteCount);
      tmp$ret$1 = tmp0_minOf_0.compareTo_n4fqi2_k$(tmp0_minOf) <= 0 ? tmp0_minOf_0 : tmp0_minOf;
      tmp$ret$2 = tmp$ret$1;
      var toRead = tmp$ret$2.toInt_1tsl84_k$();
      tmp$ret$0 = this.buffer_1.read_43uq31_k$(sink, offset, toRead);
    }
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readFully_an47ne_k$ = function (sink, byteCount) {
    try {
      this.require_btziny_k$(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        sink.writeAll_rsmo5y_k$(this.buffer_1);
        throw $p;
      } else {
        throw $p;
      }
    }
    return this.buffer_1.readFully_an47ne_k$(sink, byteCount);
  };
  RealBufferedSource.prototype.readAll_r4k3cl_k$ = function (sink) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadAll' call
    var totalBytesWritten = new Long(0, 0);
    $l$loop: while (true) {
      Companion_getInstance_1();
      if (!!this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1))) {
        break $l$loop;
      }
      var emitByteCount = this.buffer_1.completeSegmentByteCount_8y8ucz_k$();
      if (emitByteCount.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.plus_u6jwas_k$(emitByteCount);
        sink.write_x0zrut_k$(this.buffer_1, emitByteCount);
      }
    }
    if (this.buffer_1.size_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.plus_u6jwas_k$(this.buffer_1.size_1);
      sink.write_x0zrut_k$(this.buffer_1, this.buffer_1.size_1);
    }
    tmp$ret$0 = totalBytesWritten;
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readUtf8_echivt_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadUtf8' call
    this.buffer_1.writeAll_rsmo5y_k$(this.source_1);
    tmp$ret$0 = this.buffer_1.readUtf8_echivt_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readUtf8_y4u7qn_k$ = function (byteCount) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadUtf8' call
    this.require_btziny_k$(byteCount);
    tmp$ret$0 = this.buffer_1.readUtf8_y4u7qn_k$(byteCount);
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readUtf8Line_e2s5l1_k$ = function () {
    var tmp$ret$1;
    // Inline function 'okio.internal.commonReadUtf8Line' call
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = 10;
    var newline = this.indexOf_q1ozk1_k$(toByte(tmp$ret$0));
    var tmp;
    if (newline.equals(new Long(-1, -1))) {
      var tmp_0;
      if (!this.buffer_1.size_1.equals(new Long(0, 0))) {
        tmp_0 = this.readUtf8_y4u7qn_k$(this.buffer_1.size_1);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      tmp = readUtf8Line(this.buffer_1, newline);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.readUtf8LineStrict_40ilic_k$ = function () {
    Companion_getInstance();
    return this.readUtf8LineStrict_qhncaa_k$(new Long(-1, 2147483647));
  };
  RealBufferedSource.prototype.readUtf8LineStrict_qhncaa_k$ = function (limit) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8LineStrict' call
      // Inline function 'kotlin.require' call
      var tmp0_require = limit.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
        tmp$ret$0 = 'limit < 0: ' + toString(limit);
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp;
      Companion_getInstance();
      if (limit.equals(new Long(-1, 2147483647))) {
        Companion_getInstance();
        tmp = new Long(-1, 2147483647);
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$1 = limit.plus_u6jwas_k$(new Long(1, 0));
        tmp = tmp$ret$1;
      }
      var scanLength = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 10;
      var newline = this.indexOf_b1qwk3_k$(toByte(tmp$ret$2), new Long(0, 0), scanLength);
      if (!newline.equals(new Long(-1, -1))) {
        tmp$ret$3 = readUtf8Line(this.buffer_1, newline);
        break $l$block_0;
      }
      var tmp_0;
      var tmp_1;
      var tmp_2;
      var tmp_3;
      Companion_getInstance();
      if (scanLength.compareTo_n4fqi2_k$(new Long(-1, 2147483647)) < 0) {
        tmp_3 = this.request_k7c0qh_k$(scanLength);
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        var tmp$ret$4;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$4 = scanLength.minus_llf5ei_k$(new Long(1, 0));
        var tmp_4 = this.buffer_1.get_ec5on4_k$(tmp$ret$4);
        var tmp$ret$5;
        // Inline function 'kotlin.code' call
        tmp$ret$5 = 13;
        tmp_2 = tmp_4 === toByte(tmp$ret$5);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        var tmp$ret$6;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$6 = scanLength.plus_u6jwas_k$(new Long(1, 0));
        tmp_1 = this.request_k7c0qh_k$(tmp$ret$6);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_5 = this.buffer_1.get_ec5on4_k$(scanLength);
        var tmp$ret$7;
        // Inline function 'kotlin.code' call
        tmp$ret$7 = 10;
        tmp_0 = tmp_5 === toByte(tmp$ret$7);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = readUtf8Line(this.buffer_1, scanLength);
        break $l$block_0;
      }
      var data = new Buffer();
      var tmp_6 = new Long(0, 0);
      var tmp$ret$9;
      // Inline function 'okio.minOf' call
      var tmp1_minOf = this.buffer_1.size_1;
      var tmp$ret$8;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = new Long(32, 0);
      tmp$ret$8 = tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
      tmp$ret$9 = tmp$ret$8;
      this.buffer_1.copyTo_w2d2hb_k$(data, tmp_6, tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = this.buffer_1.size_1;
      tmp$ret$10 = tmp2_minOf.compareTo_n4fqi2_k$(limit) <= 0 ? tmp2_minOf : limit;
      throw new EOFException('\\n not found: limit=' + toString(tmp$ret$10) + ' content=' + data.readByteString_nzt46n_k$().hex_27mj_k$() + '\u2026');
    }
    return tmp$ret$3;
  };
  RealBufferedSource.prototype.readUtf8CodePoint_brmg90_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadUtf8CodePoint' call
    this.require_btziny_k$(new Long(1, 0));
    var b0 = this.buffer_1.get_ec5on4_k$(new Long(0, 0));
    if ((b0 & 224) === 192) {
      this.require_btziny_k$(new Long(2, 0));
    } else if ((b0 & 240) === 224) {
      this.require_btziny_k$(new Long(3, 0));
    } else if ((b0 & 248) === 240) {
      this.require_btziny_k$(new Long(4, 0));
    }
    tmp$ret$0 = this.buffer_1.readUtf8CodePoint_brmg90_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readShort_ilpyey_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadShort' call
    this.require_btziny_k$(new Long(2, 0));
    tmp$ret$0 = this.buffer_1.readShort_ilpyey_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readShortLe_lyi6qn_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadShortLe' call
    this.require_btziny_k$(new Long(2, 0));
    tmp$ret$0 = this.buffer_1.readShortLe_lyi6qn_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readInt_hv8cxl_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadInt' call
    this.require_btziny_k$(new Long(4, 0));
    tmp$ret$0 = this.buffer_1.readInt_hv8cxl_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readIntLe_ir3zn2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadIntLe' call
    this.require_btziny_k$(new Long(4, 0));
    tmp$ret$0 = this.buffer_1.readIntLe_ir3zn2_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readLong_ecnd8u_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadLong' call
    this.require_btziny_k$(new Long(8, 0));
    tmp$ret$0 = this.buffer_1.readLong_ecnd8u_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readLongLe_bnxvp1_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonReadLongLe' call
    this.require_btziny_k$(new Long(8, 0));
    tmp$ret$0 = this.buffer_1.readLongLe_bnxvp1_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.readDecimalLong_uefo5l_k$ = function () {
    var tmp$ret$5;
    // Inline function 'okio.internal.commonReadDecimalLong' call
    this.require_btziny_k$(new Long(1, 0));
    var pos = new Long(0, 0);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = pos;
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      if (!this.request_k7c0qh_k$(tmp$ret$0)) {
        break $l$loop_0;
      }
      var b = this.buffer_1.get_ec5on4_k$(pos);
      var tmp;
      var tmp_0;
      var tmp_1 = b;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      if (tmp_1 < toByte(tmp$ret$1)) {
        tmp_0 = true;
      } else {
        var tmp_2 = b;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = 57;
        tmp_0 = tmp_2 > toByte(tmp$ret$2);
      }
      if (tmp_0) {
        var tmp_3;
        if (!pos.equals(new Long(0, 0))) {
          tmp_3 = true;
        } else {
          var tmp_4 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 45;
          tmp_3 = !(tmp_4 === toByte(tmp$ret$3));
        }
        tmp = tmp_3;
      } else {
        tmp = false;
      }
      if (tmp) {
        if (pos.equals(new Long(0, 0))) {
          var tmp$ret$4;
          // Inline function 'kotlin.text.toString' call
          tmp$ret$4 = toString_0(b, 16);
          throw NumberFormatException_init_$Create$("Expected a digit or '-' but was 0x" + tmp$ret$4);
        }
        break $l$loop_0;
      }
      var tmp0 = pos;
      pos = tmp0.inc_28ke_k$();
    }
    tmp$ret$5 = this.buffer_1.readDecimalLong_uefo5l_k$();
    return tmp$ret$5;
  };
  RealBufferedSource.prototype.readHexadecimalUnsignedLong_gqibbu_k$ = function () {
    var tmp$ret$7;
    // Inline function 'okio.internal.commonReadHexadecimalUnsignedLong' call
    this.require_btziny_k$(new Long(1, 0));
    var pos = 0;
    $l$loop: while (this.request_k7c0qh_k$(toLong(pos + 1 | 0))) {
      var b = this.buffer_1.get_ec5on4_k$(toLong(pos));
      var tmp;
      var tmp_0;
      var tmp_1;
      var tmp_2 = b;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      if (tmp_2 < toByte(tmp$ret$0)) {
        tmp_1 = true;
      } else {
        var tmp_3 = b;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = 57;
        tmp_1 = tmp_3 > toByte(tmp$ret$1);
      }
      if (tmp_1) {
        var tmp_4;
        var tmp_5 = b;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        tmp$ret$2 = 97;
        if (tmp_5 < toByte(tmp$ret$2)) {
          tmp_4 = true;
        } else {
          var tmp_6 = b;
          var tmp$ret$3;
          // Inline function 'kotlin.code' call
          tmp$ret$3 = 102;
          tmp_4 = tmp_6 > toByte(tmp$ret$3);
        }
        tmp_0 = tmp_4;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_7;
        var tmp_8 = b;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        tmp$ret$4 = 65;
        if (tmp_8 < toByte(tmp$ret$4)) {
          tmp_7 = true;
        } else {
          var tmp_9 = b;
          var tmp$ret$5;
          // Inline function 'kotlin.code' call
          tmp$ret$5 = 70;
          tmp_7 = tmp_9 > toByte(tmp$ret$5);
        }
        tmp = tmp_7;
      } else {
        tmp = false;
      }
      if (tmp) {
        if (pos === 0) {
          var tmp$ret$6;
          // Inline function 'kotlin.text.toString' call
          tmp$ret$6 = toString_0(b, 16);
          throw NumberFormatException_init_$Create$('Expected leading [0-9a-fA-F] character but was 0x' + tmp$ret$6);
        }
        break $l$loop;
      }
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
    }
    tmp$ret$7 = this.buffer_1.readHexadecimalUnsignedLong_gqibbu_k$();
    return tmp$ret$7;
  };
  RealBufferedSource.prototype.skip_vl0dd4_k$ = function (byteCount) {
    var byteCount_0 = byteCount;
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.closed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'okio.internal.commonSkip.<anonymous>' call
      tmp$ret$0 = 'closed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (byteCount_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp;
      if (this.buffer_1.size_1.equals(new Long(0, 0))) {
        Companion_getInstance_1();
        tmp = this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1));
      } else {
        tmp = false;
      }
      if (tmp) {
        throw EOFException_init_$Create$(null, 1, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = byteCount_0;
      var tmp2_minOf = this.buffer_1.size_1;
      tmp$ret$1 = tmp1_minOf.compareTo_n4fqi2_k$(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
      var toSkip = tmp$ret$1;
      this.buffer_1.skip_vl0dd4_k$(toSkip);
      byteCount_0 = byteCount_0.minus_llf5ei_k$(toSkip);
    }
    return Unit_getInstance();
  };
  RealBufferedSource.prototype.indexOf_q1ozk1_k$ = function (b) {
    var tmp = new Long(0, 0);
    Companion_getInstance();
    return this.indexOf_b1qwk3_k$(b, tmp, new Long(-1, 2147483647));
  };
  RealBufferedSource.prototype.indexOf_hkbew9_k$ = function (b, fromIndex) {
    Companion_getInstance();
    return this.indexOf_b1qwk3_k$(b, fromIndex, new Long(-1, 2147483647));
  };
  RealBufferedSource.prototype.indexOf_b1qwk3_k$ = function (b, fromIndex, toIndex) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = (new Long(0, 0)).compareTo_n4fqi2_k$(fromIndex_0) <= 0 ? fromIndex_0.compareTo_n4fqi2_k$(toIndex) <= 0 : false;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$1 = 'fromIndex=' + toString(fromIndex_0) + ' toIndex=' + toString(toIndex);
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      while (fromIndex_0.compareTo_n4fqi2_k$(toIndex) < 0) {
        var result = this.buffer_1.indexOf_b1qwk3_k$(b, fromIndex_0, toIndex);
        if (!result.equals(new Long(-1, -1))) {
          tmp$ret$2 = result;
          break $l$block_0;
        }
        var lastBufferSize = this.buffer_1.size_1;
        var tmp;
        if (lastBufferSize.compareTo_n4fqi2_k$(toIndex) >= 0) {
          tmp = true;
        } else {
          Companion_getInstance_1();
          tmp = this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1));
        }
        if (tmp) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_0;
        }
        var tmp$ret$3;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp2_maxOf = fromIndex_0;
        tmp$ret$3 = tmp2_maxOf.compareTo_n4fqi2_k$(lastBufferSize) >= 0 ? tmp2_maxOf : lastBufferSize;
        fromIndex_0 = tmp$ret$3;
      }
      tmp$ret$2 = new Long(-1, -1);
    }
    return tmp$ret$2;
  };
  RealBufferedSource.prototype.indexOf_mitgi7_k$ = function (bytes) {
    return this.indexOf_t2mh2x_k$(bytes, new Long(0, 0));
  };
  RealBufferedSource.prototype.indexOf_t2mh2x_k$ = function (bytes, fromIndex) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      while (true) {
        var result = this.buffer_1.indexOf_t2mh2x_k$(bytes, fromIndex_0);
        if (!result.equals(new Long(-1, -1))) {
          tmp$ret$1 = result;
          break $l$block_0;
        }
        var lastBufferSize = this.buffer_1.size_1;
        Companion_getInstance_1();
        if (this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1))) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_0;
        }
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp3_maxOf = fromIndex_0;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        var tmp1_minus = bytes.get_size_woubt6_k$();
        tmp$ret$2 = lastBufferSize.minus_llf5ei_k$(toLong(tmp1_minus));
        var tmp2_plus = tmp$ret$2;
        tmp$ret$3 = tmp2_plus.plus_u6jwas_k$(new Long(1, 0));
        var tmp4_maxOf = tmp$ret$3;
        tmp$ret$4 = tmp3_maxOf.compareTo_n4fqi2_k$(tmp4_maxOf) >= 0 ? tmp3_maxOf : tmp4_maxOf;
        fromIndex_0 = tmp$ret$4;
      }
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.indexOfElement_aqjz7r_k$ = function (targetBytes) {
    return this.indexOfElement_ea8pul_k$(targetBytes, new Long(0, 0));
  };
  RealBufferedSource.prototype.indexOfElement_ea8pul_k$ = function (targetBytes, fromIndex) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonIndexOfElement' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      while (true) {
        var result = this.buffer_1.indexOfElement_ea8pul_k$(targetBytes, fromIndex_0);
        if (!result.equals(new Long(-1, -1))) {
          tmp$ret$1 = result;
          break $l$block_0;
        }
        var lastBufferSize = this.buffer_1.size_1;
        Companion_getInstance_1();
        if (this.source_1.read_nz46cz_k$(this.buffer_1, toLong(8192)).equals(new Long(-1, -1))) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp1_maxOf = fromIndex_0;
        tmp$ret$2 = tmp1_maxOf.compareTo_n4fqi2_k$(lastBufferSize) >= 0 ? tmp1_maxOf : lastBufferSize;
        fromIndex_0 = tmp$ret$2;
      }
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.rangeEquals_xn2170_k$ = function (offset, bytes) {
    return this.rangeEquals_2lbf2s_k$(offset, bytes, 0, bytes.get_size_woubt6_k$());
  };
  RealBufferedSource.prototype.rangeEquals_2lbf2s_k$ = function (offset, bytes, bytesOffset, byteCount) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonRangeEquals' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !this.closed_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        tmp$ret$0 = 'closed';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (((offset.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? true : bytesOffset < 0) ? true : byteCount < 0) ? true : (bytes.get_size_woubt6_k$() - bytesOffset | 0) < byteCount) {
        tmp$ret$1 = false;
        break $l$block_1;
      }
      var inductionVariable = 0;
      if (inductionVariable < byteCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.Long.plus' call
          tmp$ret$2 = offset.plus_u6jwas_k$(toLong(i));
          var bufferOffset = tmp$ret$2;
          var tmp$ret$3;
          // Inline function 'kotlin.Long.plus' call
          tmp$ret$3 = bufferOffset.plus_u6jwas_k$(new Long(1, 0));
          if (!this.request_k7c0qh_k$(tmp$ret$3)) {
            tmp$ret$1 = false;
            break $l$block_1;
          }
          if (!(this.buffer_1.get_ec5on4_k$(bufferOffset) === bytes.get_fkrdnv_k$(bytesOffset + i | 0))) {
            tmp$ret$1 = false;
            break $l$block_1;
          }
        }
         while (inductionVariable < byteCount);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  };
  RealBufferedSource.prototype.peek_21nx7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonPeek' call
    tmp$ret$0 = buffer(new PeekSource(this));
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.close_ymq55z_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonClose' call
      if (this.closed_1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      this.closed_1 = true;
      this.source_1.close_ymq55z_k$();
      this.buffer_1.clear_j9y8zo_k$();
    }
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.timeout_lq9okf_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonTimeout' call
    tmp$ret$0 = this.source_1.timeout_lq9okf_k$();
    return tmp$ret$0;
  };
  RealBufferedSource.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonToString' call
    tmp$ret$0 = 'buffer(' + this.source_1 + ')';
    return tmp$ret$0;
  };
  RealBufferedSource.$metadata$ = classMeta('RealBufferedSource', [BufferedSource]);
  function SegmentPool() {
    SegmentPool_instance = this;
    this.MAX_SIZE_1 = 0;
    this.byteCount_1 = 0;
  }
  SegmentPool.prototype.get_MAX_SIZE_bmfi1n_k$ = function () {
    return this.MAX_SIZE_1;
  };
  SegmentPool.prototype.get_byteCount_pu5ghu_k$ = function () {
    return this.byteCount_1;
  };
  SegmentPool.prototype.take_2451j_k$ = function () {
    return Segment_init_$Create$();
  };
  SegmentPool.prototype.recycle_axzlry_k$ = function (segment) {
  };
  SegmentPool.$metadata$ = objectMeta('SegmentPool');
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    if (SegmentPool_instance == null)
      new SegmentPool();
    return SegmentPool_instance;
  }
  function toByteString($this) {
    return new ByteString($this.toByteArray_qczt2u_k$());
  }
  function SegmentedByteString(segments, directory) {
    ByteString.call(this, Companion_getInstance_6().EMPTY_1.data_1);
    this.segments_1 = segments;
    this.directory_1 = directory;
  }
  SegmentedByteString.prototype.get_segments_ecat1z_k$ = function () {
    return this.segments_1;
  };
  SegmentedByteString.prototype.get_directory_7ekq4c_k$ = function () {
    return this.directory_1;
  };
  SegmentedByteString.prototype.base64_n39i29_k$ = function () {
    return toByteString(this).base64_n39i29_k$();
  };
  SegmentedByteString.prototype.hex_27mj_k$ = function () {
    return toByteString(this).hex_27mj_k$();
  };
  SegmentedByteString.prototype.toAsciiLowercase_hzcfjv_k$ = function () {
    return toByteString(this).toAsciiLowercase_hzcfjv_k$();
  };
  SegmentedByteString.prototype.toAsciiUppercase_u6qzto_k$ = function () {
    return toByteString(this).toAsciiUppercase_u6qzto_k$();
  };
  SegmentedByteString.prototype.base64Url_up517k_k$ = function () {
    return toByteString(this).base64Url_up517k_k$();
  };
  SegmentedByteString.prototype.substring_8we4nj_k$ = function (beginIndex, endIndex) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonSubstring' call
      var endIndex_0 = resolveDefaultParameter_0(this, endIndex);
      // Inline function 'kotlin.require' call
      var tmp0_require = beginIndex >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        tmp$ret$0 = 'beginIndex=' + beginIndex + ' < 0';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = endIndex_0 <= this.get_size_woubt6_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        tmp$ret$1 = 'endIndex=' + endIndex_0 + ' > length(' + this.get_size_woubt6_k$() + ')';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var subLen = endIndex_0 - beginIndex | 0;
      // Inline function 'kotlin.require' call
      var tmp2_require = subLen >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_require) {
        var tmp$ret$2;
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        tmp$ret$2 = 'endIndex=' + endIndex_0 + ' < beginIndex=' + beginIndex;
        var message_1 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      if (beginIndex === 0 ? endIndex_0 === this.get_size_woubt6_k$() : false) {
        tmp$ret$3 = this;
        break $l$block_0;
      } else if (beginIndex === endIndex_0) {
        tmp$ret$3 = Companion_getInstance_6().EMPTY_1;
        break $l$block_0;
      }
      var beginSegment = segment(this, beginIndex);
      var endSegment = segment(this, endIndex_0 - 1 | 0);
      var newSegments = copyOfRange_0(this.segments_1, beginSegment, endSegment + 1 | 0);
      var newDirectory = new Int32Array(imul(newSegments.length, 2));
      var index = 0;
      var inductionVariable = beginSegment;
      if (inductionVariable <= endSegment)
        do {
          var s = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = index;
          var tmp$ret$4;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp3_minOf = this.directory_1[s] - beginIndex | 0;
          tmp$ret$4 = Math.min(tmp3_minOf, subLen);
          newDirectory[tmp] = tmp$ret$4;
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          newDirectory[tmp1 + newSegments.length | 0] = this.directory_1[s + this.segments_1.length | 0];
        }
         while (!(s === endSegment));
      var segmentOffset = beginSegment === 0 ? 0 : this.directory_1[beginSegment - 1 | 0];
      var tmp2_array = newDirectory;
      var tmp3_index0 = newSegments.length;
      tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + (beginIndex - segmentOffset | 0) | 0;
      tmp$ret$3 = new SegmentedByteString(newSegments, newDirectory);
    }
    return tmp$ret$3;
  };
  SegmentedByteString.prototype.internalGet_hkm39k_k$ = function (pos) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonInternalGet' call
    checkOffsetAndCount(toLong(this.directory_1[this.segments_1.length - 1 | 0]), toLong(pos), new Long(1, 0));
    var segment_0 = segment(this, pos);
    var segmentOffset = segment_0 === 0 ? 0 : this.directory_1[segment_0 - 1 | 0];
    var segmentPos = this.directory_1[segment_0 + this.segments_1.length | 0];
    tmp$ret$0 = this.segments_1[segment_0][(pos - segmentOffset | 0) + segmentPos | 0];
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.getSize_18qr2h_k$ = function () {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonGetSize' call
    tmp$ret$0 = this.directory_1[this.segments_1.length - 1 | 0];
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.toByteArray_qczt2u_k$ = function () {
    var tmp$ret$5;
    // Inline function 'okio.internal.commonToByteArray' call
    var result = new Int8Array(this.get_size_woubt6_k$());
    var resultPos = 0;
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = this.segments_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = this.directory_1[segmentCount + s | 0];
      var nextSegmentOffset = this.directory_1[s];
      // Inline function 'okio.internal.commonToByteArray.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.segments_1[s];
      var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = resultPos;
      var tmp1_copyInto = segmentPos + tmp1__anonymous__uwfjfc | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = result;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, tmp0_copyInto, segmentPos, tmp1_copyInto);
      tmp$ret$4 = result;
      resultPos = resultPos + tmp1__anonymous__uwfjfc | 0;
      pos = nextSegmentOffset;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  SegmentedByteString.prototype.write_yix3zv_k$ = function (buffer, offset, byteCount) {
    // Inline function 'okio.internal.forEachSegment' call
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(this, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : this.directory_1[s - 1 | 0];
      var segmentSize = this.directory_1[s] - segmentOffset | 0;
      var segmentPos = this.directory_1[this.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.segments_1[s];
      var segment_0 = Segment_init_$Create$_0(tmp2__anonymous__z9zvc9, offset_0, offset_0 + byteCount_0 | 0, true, false);
      if (buffer.head_1 == null) {
        segment_0.prev_1 = segment_0;
        segment_0.next_1 = segment_0.prev_1;
        buffer.head_1 = segment_0.next_1;
      } else {
        ensureNotNull(ensureNotNull(buffer.head_1).prev_1).push_toq0no_k$(segment_0);
      }
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    var tmp0_this = buffer;
    var tmp = tmp0_this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = tmp0_this.size_1;
    tmp$ret$1 = tmp3_plus.plus_u6jwas_k$(toLong(byteCount));
    tmp.size_1 = tmp$ret$1;
    return Unit_getInstance();
  };
  SegmentedByteString.prototype.rangeEquals_gaazw5_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset < 0 ? true : offset > (this.get_size_woubt6_k$() - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var tmp1_forEachSegment = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < tmp1_forEachSegment) {
        var segmentOffset = s === 0 ? 0 : this.directory_1[s - 1 | 0];
        var segmentSize = this.directory_1[s] - segmentOffset | 0;
        var segmentPos = this.directory_1[this.segments_1.length + s | 0];
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = segmentOffset + segmentSize | 0;
        tmp$ret$1 = Math.min(tmp1_forEachSegment, tmp0_minOf);
        var byteCount_0 = tmp$ret$1 - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = this.segments_1[s];
        if (!other.rangeEquals_agw6hu_k$(otherOffset_0, tmp2__anonymous__z9zvc9, offset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        var tmp0 = s;
        s = tmp0 + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.rangeEquals_agw6hu_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (((offset < 0 ? true : offset > (this.get_size_woubt6_k$() - byteCount | 0)) ? true : otherOffset < 0) ? true : otherOffset > (other.length - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var tmp1_forEachSegment = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < tmp1_forEachSegment) {
        var segmentOffset = s === 0 ? 0 : this.directory_1[s - 1 | 0];
        var segmentSize = this.directory_1[s] - segmentOffset | 0;
        var segmentPos = this.directory_1[this.segments_1.length + s | 0];
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = segmentOffset + segmentSize | 0;
        tmp$ret$1 = Math.min(tmp1_forEachSegment, tmp0_minOf);
        var byteCount_0 = tmp$ret$1 - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = this.segments_1[s];
        if (!arrayRangeEquals(tmp2__anonymous__z9zvc9, offset_0, other, otherOffset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        var tmp0 = s;
        s = tmp0 + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.copyInto_32c3ae_k$ = function (offset, target, targetOffset, byteCount) {
    checkOffsetAndCount(toLong(this.get_size_woubt6_k$()), toLong(offset), toLong(byteCount));
    checkOffsetAndCount(toLong(target.length), toLong(targetOffset), toLong(byteCount));
    var targetOffset_0 = targetOffset;
    var tmp1_forEachSegment = offset + byteCount | 0;
    var s = segment(this, offset);
    var pos = offset;
    while (pos < tmp1_forEachSegment) {
      var segmentOffset = s === 0 ? 0 : this.directory_1[s - 1 | 0];
      var segmentSize = this.directory_1[s] - segmentOffset | 0;
      var segmentPos = this.directory_1[this.segments_1.length + s | 0];
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp0_minOf = segmentOffset + segmentSize | 0;
      tmp$ret$0 = Math.min(tmp1_forEachSegment, tmp0_minOf);
      var byteCount_0 = tmp$ret$0 - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonCopyInto.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.segments_1[s];
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = targetOffset_0;
      var tmp1_copyInto = offset_0 + byteCount_0 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp2__anonymous__z9zvc9;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = target;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp, tmp$ret$4, tmp0_copyInto, offset_0, tmp1_copyInto);
      tmp$ret$5 = target;
      targetOffset_0 = targetOffset_0 + byteCount_0 | 0;
      pos = pos + byteCount_0 | 0;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    return Unit_getInstance();
  };
  SegmentedByteString.prototype.indexOf_6vxhk7_k$ = function (other, fromIndex) {
    return toByteString(this).indexOf_6vxhk7_k$(other, fromIndex);
  };
  SegmentedByteString.prototype.lastIndexOf_ttj3xt_k$ = function (other, fromIndex) {
    return toByteString(this).lastIndexOf_ttj3xt_k$(other, fromIndex);
  };
  SegmentedByteString.prototype.digest_gka6e2_k$ = function (hashFunction) {
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = this.segments_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = this.directory_1[segmentCount + s | 0];
      var nextSegmentOffset = this.directory_1[s];
      // Inline function 'okio.SegmentedByteString.digest.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.segments_1[s];
      var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
      hashFunction.update_evdvfb_k$(tmp0__anonymous__q1qw7t, segmentPos, tmp1__anonymous__uwfjfc);
      pos = nextSegmentOffset;
      var tmp0 = s;
      s = tmp0 + 1 | 0;
    }
    var digestBytes = hashFunction.digest_m0ziv0_k$();
    return new ByteString(digestBytes);
  };
  SegmentedByteString.prototype.internalArray_tr176k_k$ = function () {
    return this.toByteArray_qczt2u_k$();
  };
  SegmentedByteString.prototype.equals = function (other) {
    var tmp$ret$0;
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = other.get_size_woubt6_k$() === this.get_size_woubt6_k$() ? this.rangeEquals_gaazw5_k$(0, other, 0, this.get_size_woubt6_k$()) : false;
      } else {
        tmp = false;
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.hashCode_2;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      result = 1;
      // Inline function 'okio.internal.forEachSegment' call
      var segmentCount = this.segments_1.length;
      var s = 0;
      var pos = 0;
      while (s < segmentCount) {
        var segmentPos = this.directory_1[segmentCount + s | 0];
        var nextSegmentOffset = this.directory_1[s];
        // Inline function 'okio.internal.commonHashCode.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.segments_1[s];
        var tmp1__anonymous__uwfjfc = nextSegmentOffset - pos | 0;
        var i = segmentPos;
        var limit = segmentPos + tmp1__anonymous__uwfjfc | 0;
        while (i < limit) {
          result = imul(31, result) + tmp0__anonymous__q1qw7t[i] | 0;
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
        pos = nextSegmentOffset;
        var tmp0_0 = s;
        s = tmp0_0 + 1 | 0;
      }
      this.set_hashCode_gxsuy0_k$(result);
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.toString = function () {
    return toByteString(this).toString();
  };
  SegmentedByteString.$metadata$ = classMeta('SegmentedByteString', undefined, undefined, undefined, undefined, ByteString.prototype);
  function Sink() {
  }
  Sink.$metadata$ = interfaceMeta('Sink', [Closeable]);
  function Companion_6() {
    Companion_instance_6 = this;
    this.NONE_1 = new Timeout();
  }
  Companion_6.prototype.get_NONE_wo64xt_k$ = function () {
    return this.NONE_1;
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Timeout() {
    Companion_getInstance_7();
  }
  Timeout.$metadata$ = classMeta('Timeout');
  //region block: post-declaration
  Hmac.prototype.update$default_f50u98_k$ = update$default;
  Md5.prototype.update$default_f50u98_k$ = update$default;
  Sha1.prototype.update$default_f50u98_k$ = update$default;
  Sha256.prototype.update$default_f50u98_k$ = update$default;
  Sha512.prototype.update$default_f50u98_k$ = update$default;
  //endregion
  //region block: init
  REPLACEMENT_CODE_POINT = 65533;
  REPLACEMENT_BYTE = 63;
  MASK_2BYTES = 3968;
  MASK_3BYTES = -123008;
  MASK_4BYTES = 3678080;
  HIGH_SURROGATE_HEADER = 55232;
  LOG_SURROGATE_HEADER = 56320;
  REPLACEMENT_CHARACTER = _Char___init__impl__6a9atx(65533);
  OVERFLOW_DIGIT_START = new Long(-7, -1);
  OVERFLOW_ZONE = new Long(858993460, -214748365);
  SEGMENTING_THRESHOLD = 4096;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=okio-parent-okio-js-ir.js.map
