(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_io_iohk_atala_prism_hashing, kotlin_io_iohk_atala_prism_secure_random, kotlin_io_iohk_atala_prism_utils) {
  'use strict';
  //region block: imports
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.w3;
  var Long = kotlin_kotlin.$_$.da;
  var charSequenceGet = kotlin_kotlin.$_$.l7;
  var NumberFormatException_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var Char = kotlin_kotlin.$_$.y9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var equals = kotlin_kotlin.$_$.p7;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.t1;
  var toLong = kotlin_kotlin.$_$.p8;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var digitToIntOrNull = kotlin_kotlin.$_$.f9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.j2;
  var toString = kotlin_kotlin.$_$.s9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.n7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.o1;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.n1;
  var Default_getInstance = kotlin_kotlin.$_$.s3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.v2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.w2;
  var toString_0 = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var NotImplementedError = kotlin_kotlin.$_$.ea;
  var MD5 = kotlin_io_iohk_atala_prism_hashing.$_$.a;
  var toByte = kotlin_kotlin.$_$.o8;
  var SecureRandom_init_$Create$ = kotlin_io_iohk_atala_prism_secure_random.$_$.a;
  var SHA1 = kotlin_io_iohk_atala_prism_hashing.$_$.b;
  var copyOfRange = kotlin_kotlin.$_$.t4;
  var indexOf$default = kotlin_kotlin.$_$.i;
  var toCharArray = kotlin_kotlin.$_$.n9;
  var objectMeta = kotlin_kotlin.$_$.n8;
  var numberToLong = kotlin_kotlin.$_$.m8;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t;
  var classMeta = kotlin_kotlin.$_$.o7;
  var Error_0 = kotlin_kotlin.$_$.ba;
  var Error_init_$Init$ = kotlin_kotlin.$_$.v;
  var captureStack = kotlin_kotlin.$_$.i7;
  //endregion
  //region block: pre-declaration
  UnsupportedOperationException.prototype = Object.create(Error_0.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  //endregion
  function get_MIN_RADIX(_this__u8e3s4) {
    return 2;
  }
  function get_MAX_RADIX(_this__u8e3s4) {
    return 36;
  }
  function parseLong(_this__u8e3s4, s, beginIndex, endIndex, radix) {
    if ((beginIndex < 0 ? true : beginIndex > endIndex) ? true : endIndex > s.length) {
      throw IndexOutOfBoundsException_init_$Create$();
    }
    if (radix < get_MIN_RADIX(Companion_getInstance())) {
      throw NumberFormatException_init_$Create$('radix ' + radix + ' less than Character.MIN_RADIX');
    }
    if (radix > get_MAX_RADIX(Companion_getInstance())) {
      throw NumberFormatException_init_$Create$('radix ' + radix + ' greater than Character.MAX_RADIX');
    }
    var negative = false;
    var i = beginIndex;
    Companion_getInstance_0();
    var limit = (new Long(-1, 2147483647)).unaryMinus_6uz0qp_k$();
    if (i < endIndex) {
      var firstChar = charSequenceGet(s, i);
      if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
        if (equals(new Char(firstChar), new Char(_Char___init__impl__6a9atx(45)))) {
          negative = true;
          Companion_getInstance_0();
          limit = new Long(0, -2147483648);
        } else if (!equals(new Char(firstChar), new Char(_Char___init__impl__6a9atx(43)))) {
          throw forCharSequence(NumberFormatException_init_$Create$_0(), s, beginIndex, endIndex, i);
        }
        var tmp0 = i;
        i = tmp0 + 1 | 0;
      }
      if (i >= endIndex) {
        throw forCharSequence(NumberFormatException_init_$Create$_0(), s, beginIndex, endIndex, i);
      }
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = limit;
      tmp$ret$0 = tmp0_div.div_9s1fi3_k$(toLong(radix));
      var multmin = tmp$ret$0;
      var result = new Long(0, 0);
      while (i < endIndex) {
        var tmp1_elvis_lhs = digitToIntOrNull(charSequenceGet(s, i), radix);
        var digit = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
        if (digit < 0 ? true : result.compareTo_n4fqi2_k$(multmin) < 0) {
          throw forCharSequence(NumberFormatException_init_$Create$_0(), s, beginIndex, endIndex, i);
        }
        result = result.times_2zfqpc_k$(toLong(radix));
        var tmp = result;
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        var tmp1_plus = limit;
        tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(digit));
        if (tmp.compareTo_n4fqi2_k$(tmp$ret$1) < 0) {
          throw forCharSequence(NumberFormatException_init_$Create$_0(), s, beginIndex, endIndex, i);
        }
        var tmp2 = i;
        i = tmp2 + 1 | 0;
        result = result.minus_llf5ei_k$(toLong(digit));
      }
      return negative ? result : result.unaryMinus_6uz0qp_k$();
    } else {
      throw NumberFormatException_init_$Create$('');
    }
  }
  function toHexString(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_this__u8e3s4.toInt_1tsl84_k$());
    return toString(tmp$ret$0, 16);
  }
  function forCharSequence(_this__u8e3s4, s, beginIndex, endIndex, errorIndex) {
    return NumberFormatException_init_$Create$('Error at index ' + (errorIndex - beginIndex | 0) + ' in: "' + charSequenceSubSequence(s, beginIndex, endIndex) + '"');
  }
  function validHex($this, c) {
    return ((_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) ? true : _Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) ? true : _Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false;
  }
  function randomUUID1$generateMostSigBits() {
    var start = Companion_getInstance_1().parse_4mmrzm_k$('1582-10-15T00:00:00Z');
    var rightNow = System_getInstance().now_2cba_k$();
    var duration = start.minus_q82skq_k$(rightNow);
    var seconds = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanos = _Duration___get_inWholeNanoseconds__impl__r5x4mr(duration);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$0 = seconds.times_2zfqpc_k$(new Long(10000000, 0));
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.times' call
    tmp$ret$1 = nanos.times_2zfqpc_k$(new Long(100, 0));
    var timeForUuidIn100Nanos = tmp.plus_u6jwas_k$(tmp$ret$1);
    var least12SignificantBitOfTime = timeForUuidIn100Nanos.and_jhajnj_k$(new Long(65535, 0)).shr_wjue3g_k$(4);
    var version = new Long(4096, 0);
    return timeForUuidIn100Nanos.and_jhajnj_k$(new Long(-65536, -1)).plus_u6jwas_k$(version).plus_u6jwas_k$(least12SignificantBitOfTime);
  }
  function randomUUID1$generateLeastSigBits() {
    var random63BitLong = Default_getInstance().nextLong_njwv0v_k$().and_jhajnj_k$(new Long(-1, 1073741823));
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, -2147483648)));
    var variant3BitFlag = tmp$ret$0;
    return random63BitLong.plus_u6jwas_k$(variant3BitFlag);
  }
  function _set_mostSigBits__emsru7($this, _set____db54di) {
    $this.mostSigBits_1 = _set____db54di;
  }
  function _set_leastSigBits__ekecon($this, _set____db54di) {
    $this.leastSigBits_1 = _set____db54di;
  }
  function _get_numberGenerator__8ezvi1($this) {
    return $this.numberGenerator_1;
  }
  function UUID_init_$Init$(data, $this) {
    UUID.call($this);
    var msb = new Long(0, 0);
    var lsb = new Long(0, 0);
    // Inline function 'kotlin.require' call
    var tmp0_require = data.length === 16;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.uuid.UUID.<init>.<anonymous>' call
      tmp$ret$0 = 'data must be 16 bytes in length';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var inductionVariable = 0;
    if (inductionVariable <= 7)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        msb = msb.shl_po5ip6_k$(8).or_s401rn_k$(toLong(data[i] & 255));
      }
       while (inductionVariable <= 7);
    var inductionVariable_0 = 8;
    if (inductionVariable_0 <= 15)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        lsb = lsb.shl_po5ip6_k$(8).or_s401rn_k$(toLong(data[i_0] & 255));
      }
       while (inductionVariable_0 <= 15);
    $this.mostSigBits_1 = msb;
    $this.leastSigBits_1 = lsb;
    return $this;
  }
  function UUID_init_$Create$(data) {
    return UUID_init_$Init$(data, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_0(mostSigBits, leastSigBits, $this) {
    UUID.call($this);
    $this.mostSigBits_1 = mostSigBits;
    $this.leastSigBits_1 = leastSigBits;
    return $this;
  }
  function UUID_init_$Create$_0(mostSigBits, leastSigBits) {
    return UUID_init_$Init$_0(mostSigBits, leastSigBits, Object.create(UUID.prototype));
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.randomUUID1_bqkaa5_k$ = function () {
    var mostSigBits = randomUUID1$generateMostSigBits();
    var leastSigBits = randomUUID1$generateLeastSigBits();
    return UUID_init_$Create$_0(mostSigBits, leastSigBits);
  };
  Companion.prototype.randomUUID2_bqkaa4_k$ = function () {
    throw new NotImplementedError("RFC 4122 does not specify the exact generation details, therefore it won't be implemented");
  };
  Companion.prototype.randomUUID3_6gilwu_k$ = function (name) {
    var hash = new MD5();
    var md5Bytes = hash.digest_g3p5dr_k$(name);
    md5Bytes[6] = toByte(md5Bytes[6] & 15);
    md5Bytes[6] = toByte(md5Bytes[6] | 48);
    md5Bytes[8] = toByte(md5Bytes[8] & 63);
    md5Bytes[8] = toByte(md5Bytes[8] | 128);
    return UUID_init_$Create$(md5Bytes);
  };
  Companion.prototype.randomUUID4_bqkaa2_k$ = function () {
    var randomBytes = SecureRandom_init_$Create$(null, 1, null).nextBytes_oxmcdz_k$(16);
    randomBytes[6] = toByte(randomBytes[6] & 15);
    randomBytes[6] = toByte(randomBytes[6] | 64);
    randomBytes[8] = toByte(randomBytes[8] & 63);
    randomBytes[8] = toByte(randomBytes[8] | 128);
    return UUID_init_$Create$(randomBytes);
  };
  Companion.prototype.randomUUID5_qiqtzo_k$ = function (name) {
    var hash = new SHA1();
    var sha1Bytes = copyOfRange(hash.digest_g3p5dr_k$(name), 0, 16);
    sha1Bytes[6] = toByte(sha1Bytes[6] & 15);
    sha1Bytes[6] = toByte(sha1Bytes[6] | 80);
    sha1Bytes[8] = toByte(sha1Bytes[8] & 63);
    sha1Bytes[8] = toByte(sha1Bytes[8] | 128);
    return UUID_init_$Create$(sha1Bytes);
  };
  Companion.prototype.fromString_2a1yvu_k$ = function (name) {
    var len = name.length;
    if (len > 36) {
      throw IllegalArgumentException_init_$Create$('UUID string too large');
    }
    var tmp = _Char___init__impl__6a9atx(45);
    var dash1 = indexOf$default(name, tmp, 0, false, 4, null);
    var tmp_0 = _Char___init__impl__6a9atx(45);
    var tmp_1 = dash1 + 1 | 0;
    var dash2 = indexOf$default(name, tmp_0, tmp_1, false, 4, null);
    var tmp_2 = _Char___init__impl__6a9atx(45);
    var tmp_3 = dash2 + 1 | 0;
    var dash3 = indexOf$default(name, tmp_2, tmp_3, false, 4, null);
    var tmp_4 = _Char___init__impl__6a9atx(45);
    var tmp_5 = dash3 + 1 | 0;
    var dash4 = indexOf$default(name, tmp_4, tmp_5, false, 4, null);
    var tmp_6 = _Char___init__impl__6a9atx(45);
    var tmp_7 = dash4 + 1 | 0;
    var dash5 = indexOf$default(name, tmp_6, tmp_7, false, 4, null);
    if (dash4 < 0 ? true : dash5 >= 0) {
      throw IllegalArgumentException_init_$Create$('Invalid UUID string: ' + name);
    }
    var mostSigBits = parseLong(Companion_getInstance_0(), name, 0, dash1, 16).and_jhajnj_k$(new Long(-1, 0));
    mostSigBits = mostSigBits.shl_po5ip6_k$(16);
    mostSigBits = mostSigBits.or_s401rn_k$(parseLong(Companion_getInstance_0(), name, dash1 + 1 | 0, dash2, 16).and_jhajnj_k$(new Long(65535, 0)));
    mostSigBits = mostSigBits.shl_po5ip6_k$(16);
    mostSigBits = mostSigBits.or_s401rn_k$(parseLong(Companion_getInstance_0(), name, dash2 + 1 | 0, dash3, 16).and_jhajnj_k$(new Long(65535, 0)));
    var leastSigBits = parseLong(Companion_getInstance_0(), name, dash3 + 1 | 0, dash4, 16).and_jhajnj_k$(new Long(65535, 0));
    leastSigBits = leastSigBits.shl_po5ip6_k$(48);
    leastSigBits = leastSigBits.or_s401rn_k$(parseLong(Companion_getInstance_0(), name, dash4 + 1 | 0, len, 16).and_jhajnj_k$(new Long(-1, 65535)));
    return UUID_init_$Create$_0(mostSigBits, leastSigBits);
  };
  Companion.prototype.isValidUUID_g6jppp_k$ = function (id) {
    return !(id == null) ? this.isValidUUID_qwhvc9_k$(toCharArray(id)) : false;
  };
  Companion.prototype.isValidUUID_qwhvc9_k$ = function (ch) {
    return ((((((((((((((((((((((((((((((((((((!(ch == null) ? ch.length === 36 : false) ? validHex(this, ch[0]) : false) ? validHex(this, ch[1]) : false) ? validHex(this, ch[2]) : false) ? validHex(this, ch[3]) : false) ? validHex(this, ch[4]) : false) ? validHex(this, ch[5]) : false) ? validHex(this, ch[6]) : false) ? validHex(this, ch[7]) : false) ? equals(new Char(ch[8]), new Char(_Char___init__impl__6a9atx(45))) : false) ? validHex(this, ch[9]) : false) ? validHex(this, ch[10]) : false) ? validHex(this, ch[11]) : false) ? validHex(this, ch[12]) : false) ? equals(new Char(ch[13]), new Char(_Char___init__impl__6a9atx(45))) : false) ? validHex(this, ch[14]) : false) ? validHex(this, ch[15]) : false) ? validHex(this, ch[16]) : false) ? validHex(this, ch[17]) : false) ? equals(new Char(ch[18]), new Char(_Char___init__impl__6a9atx(45))) : false) ? validHex(this, ch[19]) : false) ? validHex(this, ch[20]) : false) ? validHex(this, ch[21]) : false) ? validHex(this, ch[22]) : false) ? equals(new Char(ch[23]), new Char(_Char___init__impl__6a9atx(45))) : false) ? validHex(this, ch[24]) : false) ? validHex(this, ch[25]) : false) ? validHex(this, ch[26]) : false) ? validHex(this, ch[27]) : false) ? validHex(this, ch[28]) : false) ? validHex(this, ch[29]) : false) ? validHex(this, ch[30]) : false) ? validHex(this, ch[31]) : false) ? validHex(this, ch[32]) : false) ? validHex(this, ch[33]) : false) ? validHex(this, ch[34]) : false) ? validHex(this, ch[35]) : false;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  UUID.prototype.get_mostSigBits_4cnua3_k$ = function () {
    return this.mostSigBits_1;
  };
  UUID.prototype.get_leastSigBits_bl5uzb_k$ = function () {
    return this.leastSigBits_1;
  };
  UUID.prototype.version_5tc6hk_k$ = function () {
    return this.mostSigBits_1.shr_wjue3g_k$(12).and_jhajnj_k$(new Long(15, 0)).toInt_1tsl84_k$();
  };
  UUID.prototype.variant_3wz539_k$ = function () {
    return this.leastSigBits_1.ushr_rr8rvr_k$(numberToLong(64).minus_llf5ei_k$(this.leastSigBits_1.ushr_rr8rvr_k$(62)).toInt_1tsl84_k$()).and_jhajnj_k$(this.leastSigBits_1.shr_wjue3g_k$(63)).toInt_1tsl84_k$();
  };
  UUID.prototype.timestamp_wtjpy_k$ = function () {
    if (!(this.version_5tc6hk_k$() === 1)) {
      throw UnsupportedOperationException_init_$Create$('Not a time-based UUID');
    }
    return this.mostSigBits_1.and_jhajnj_k$(new Long(4095, 0)).shl_po5ip6_k$(48).or_s401rn_k$(this.mostSigBits_1.shr_wjue3g_k$(16).and_jhajnj_k$(new Long(65535, 0)).shl_po5ip6_k$(32)).or_s401rn_k$(this.mostSigBits_1.ushr_rr8rvr_k$(32));
  };
  UUID.prototype.clockSequence_daq49d_k$ = function () {
    if (!(this.version_5tc6hk_k$() === 1)) {
      throw UnsupportedOperationException_init_$Create$('Not a time-based UUID');
    }
    return this.leastSigBits_1.and_jhajnj_k$(new Long(0, 1073676288)).ushr_rr8rvr_k$(48).toInt_1tsl84_k$();
  };
  UUID.prototype.node_20lc2_k$ = function () {
    if (!(this.version_5tc6hk_k$() === 1)) {
      throw UnsupportedOperationException_init_$Create$('Not a time-based UUID');
    }
    return this.leastSigBits_1.and_jhajnj_k$(new Long(-1, 65535));
  };
  UUID.prototype.toString = function () {
    var builder = StringBuilder_init_$Create$();
    var msbStr = toHexString(this.mostSigBits_1);
    if (msbStr.length < 16) {
      var diff = 16 - msbStr.length | 0;
      var inductionVariable = 0;
      if (inductionVariable < diff)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(48));
        }
         while (inductionVariable < diff);
    }
    builder.append_ssq29y_k$(msbStr);
    builder.insert_5hk2j8_k$(8, _Char___init__impl__6a9atx(45));
    builder.insert_5hk2j8_k$(13, _Char___init__impl__6a9atx(45));
    builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    var lsbStr = toHexString(this.leastSigBits_1);
    if (lsbStr.length < 16) {
      var diff_0 = 16 - lsbStr.length | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < diff_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          builder.append_t8oh9e_k$(_Char___init__impl__6a9atx(48));
        }
         while (inductionVariable_0 < diff_0);
    }
    builder.append_ssq29y_k$(lsbStr);
    builder.insert_5hk2j8_k$(23, _Char___init__impl__6a9atx(45));
    return builder.toString();
  };
  function UUID() {
    Companion_getInstance_2();
    this.numberGenerator_1 = Default_getInstance();
  }
  UUID.$metadata$ = classMeta('UUID');
  function UnsupportedOperationException() {
    Error_init_$Init$(this);
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = classMeta('UnsupportedOperationException', undefined, undefined, undefined, undefined, Error_0.prototype);
  //region block: exports
  kotlin_io_iohk_atala_prism_utils.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'), require('./ApolloHashing.js'), require('./ApolloSecureRandom.js'), require('./ApolloUtils.js')));

//# sourceMappingURL=ApolloUUID.js.map
