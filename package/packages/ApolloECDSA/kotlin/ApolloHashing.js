(function (_, io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.z8;
  var Unit_getInstance = kotlin_kotlin.$_$.h3;
  var objectMeta = kotlin_kotlin.$_$.t6;
  var classMeta = kotlin_kotlin.$_$.d6;
  var Long = kotlin_kotlin.$_$.e8;
  var longArrayOf = kotlin_kotlin.$_$.n6;
  var longArray = kotlin_kotlin.$_$.o6;
  var joinToString$default = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.v7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e1;
  var padStart = kotlin_kotlin.$_$.l7;
  var interfaceMeta = kotlin_kotlin.$_$.i6;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var isInterface = kotlin_kotlin.$_$.k6;
  var arrayCopy = kotlin_kotlin.$_$.m3;
  var toLong = kotlin_kotlin.$_$.v6;
  var toByte = kotlin_kotlin.$_$.u6;
  var rotateLeft = kotlin_kotlin.$_$.x8;
  var rotateLeft_0 = kotlin_kotlin.$_$.w8;
  var rotateRight = kotlin_kotlin.$_$.y8;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var NotImplementedError = kotlin_kotlin.$_$.f8;
  var isObject = kotlin_kotlin.$_$.m6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var numberToByte = kotlin_kotlin.$_$.p6;
  var toByteArray = kotlin_kotlin.$_$.u4;
  //endregion
  //region block: pre-declaration
  MDHelper.prototype = Object.create(HashingBase.prototype);
  MDHelper.prototype.constructor = MDHelper;
  function createHmac(key, outputLength) {
    return new HMAC(isInterface(this, Digest) ? this : THROW_CCE(), key, outputLength);
  }
  function createHmac$default(key, outputLength, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      outputLength = null;
    return $handler == null ? this.createHmac_eea1ku_k$(key, outputLength) : $handler(key, outputLength);
  }
  function hmac(key, input, outputLength) {
    return this.createHmac_eea1ku_k$(key, outputLength).digest_g3p5dr_k$(input);
  }
  function hmac$default(key, input, outputLength, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      outputLength = null;
    return $handler == null ? this.hmac_pnxnkr_k$(key, input, outputLength) : $handler(key, input, outputLength);
  }
  SHA256.prototype = Object.create(MDHelper.prototype);
  SHA256.prototype.constructor = SHA256;
  SHA384.prototype = Object.create(MDHelper.prototype);
  SHA384.prototype.constructor = SHA384;
  SHA512.prototype = Object.create(MDHelper.prototype);
  SHA512.prototype.constructor = SHA512;
  HMAC.prototype = Object.create(HashingBase.prototype);
  HMAC.prototype.constructor = HMAC;
  //endregion
  function _get_K__7mlnxi($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp($this) {
    var tmp = $this.currentVal_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentVal');
    }
  }
  function _set_w__db55pq($this, _set____db54di) {
    $this.w_1 = _set____db54di;
  }
  function _get_w__7mloze($this) {
    var tmp = $this.w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('w');
    }
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SHA256() {
    Companion_getInstance();
    MDHelper_init_$Init$(false, 8, 0, 4, null, this);
  }
  SHA256.prototype.get_digestLength_64702b_k$ = function () {
    return 32;
  };
  SHA256.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  SHA256.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = new Int32Array(8);
    this.w_1 = new Int32Array(64);
    this.engineReset_tikogs_k$();
  };
  SHA256.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp(this)[0] = 1779033703;
    _get_currentVal__l92btp(this)[1] = -1150833019;
    _get_currentVal__l92btp(this)[2] = 1013904242;
    _get_currentVal__l92btp(this)[3] = -1521486534;
    _get_currentVal__l92btp(this)[4] = 1359893119;
    _get_currentVal__l92btp(this)[5] = -1694144372;
    _get_currentVal__l92btp(this)[6] = 528734635;
    _get_currentVal__l92btp(this)[7] = 1541459225;
  };
  SHA256.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBEInt_34z9tk_k$(_get_currentVal__l92btp(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 4 | 0;
    }
  };
  SHA256.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp(this)[0];
    var b = _get_currentVal__l92btp(this)[1];
    var c = _get_currentVal__l92btp(this)[2];
    var d = _get_currentVal__l92btp(this)[3];
    var e = _get_currentVal__l92btp(this)[4];
    var f = _get_currentVal__l92btp(this)[5];
    var g = _get_currentVal__l92btp(this)[6];
    var h = _get_currentVal__l92btp(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze(this)[i] = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, imul(4, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 63)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze(this)[i_0] = (((MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze(this)[i_0 - 2 | 0], 15) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze(this)[i_0 - 2 | 0], 13) ^ (_get_w__7mloze(this)[i_0 - 2 | 0] >>> 10 | 0)) + _get_w__7mloze(this)[i_0 - 7 | 0] | 0) + (MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze(this)[i_0 - 15 | 0], 25) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze(this)[i_0 - 15 | 0], 14) ^ (_get_w__7mloze(this)[i_0 - 15 | 0] >>> 3 | 0)) | 0) + _get_w__7mloze(this)[i_0 - 16 | 0] | 0;
      }
       while (inductionVariable_0 <= 63);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 63)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var t1 = (((h + (MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 26) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 21) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 7)) | 0) + (f & e ^ g & ~e) | 0) + Companion_getInstance().K_1[i_1] | 0) + _get_w__7mloze(this)[i_1] | 0;
        var t2 = (MathHelper_getInstance().circularLeftInt_ykbdyh_k$(a, 30) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(a, 19) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(a, 10)) + (a & b ^ a & c ^ b & c) | 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
       while (inductionVariable_1 <= 63);
    var tmp3_array = _get_currentVal__l92btp(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0] + a | 0;
    var tmp5_array = _get_currentVal__l92btp(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0] + b | 0;
    var tmp7_array = _get_currentVal__l92btp(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0] + c | 0;
    var tmp9_array = _get_currentVal__l92btp(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0] + d | 0;
    var tmp11_array = _get_currentVal__l92btp(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0] + e | 0;
    var tmp13_array = _get_currentVal__l92btp(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0] + f | 0;
    var tmp15_array = _get_currentVal__l92btp(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0] + g | 0;
    var tmp17_array = _get_currentVal__l92btp(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0] + h | 0;
  };
  SHA256.prototype.toString = function () {
    return 'SHA-256';
  };
  SHA256.$metadata$ = classMeta('SHA256', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _get_K__7mlnxi_0($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh_0($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_0($this) {
    var tmp = $this.currentVal_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentVal');
    }
  }
  function _set_w__db55pq_0($this, _set____db54di) {
    $this.w_1 = _set____db54di;
  }
  function _get_w__7mloze_0($this) {
    var tmp = $this.w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('w');
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SHA384() {
    Companion_getInstance_0();
    MDHelper_init_$Init$(false, 16, 0, 4, null, this);
  }
  SHA384.prototype.get_digestLength_64702b_k$ = function () {
    return 48;
  };
  SHA384.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  SHA384.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = longArray(8);
    this.w_1 = longArray(80);
    this.engineReset_tikogs_k$();
  };
  SHA384.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp_0(this)[0] = new Long(-1056596264, -876896931);
    _get_currentVal__l92btp_0(this)[1] = new Long(914150663, 1654270250);
    _get_currentVal__l92btp_0(this)[2] = new Long(812702999, -1856437926);
    _get_currentVal__l92btp_0(this)[3] = new Long(-150054599, 355462360);
    _get_currentVal__l92btp_0(this)[4] = new Long(-4191439, 1731405415);
    _get_currentVal__l92btp_0(this)[5] = new Long(1750603025, -1900787065);
    _get_currentVal__l92btp_0(this)[6] = new Long(1694076839, -619958771);
    _get_currentVal__l92btp_0(this)[7] = new Long(-1090891868, 1203062813);
  };
  SHA384.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBELong_4kx4k4_k$(_get_currentVal__l92btp_0(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 8 | 0;
    }
  };
  SHA384.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_0(this)[0];
    var b = _get_currentVal__l92btp_0(this)[1];
    var c = _get_currentVal__l92btp_0(this)[2];
    var d = _get_currentVal__l92btp_0(this)[3];
    var e = _get_currentVal__l92btp_0(this)[4];
    var f = _get_currentVal__l92btp_0(this)[5];
    var g = _get_currentVal__l92btp_0(this)[6];
    var h = _get_currentVal__l92btp_0(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze_0(this)[i] = MathHelper_getInstance().decodeBELong_acxpw5_k$(data, imul(8, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 79)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze_0(this)[i_0] = MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_0(this)[i_0 - 2 | 0], 45).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_0(this)[i_0 - 2 | 0], 3)).xor_jjua9n_k$(_get_w__7mloze_0(this)[i_0 - 2 | 0].ushr_rr8rvr_k$(6)).plus_u6jwas_k$(_get_w__7mloze_0(this)[i_0 - 7 | 0]).plus_u6jwas_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_0(this)[i_0 - 15 | 0], 63).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_0(this)[i_0 - 15 | 0], 56)).xor_jjua9n_k$(_get_w__7mloze_0(this)[i_0 - 15 | 0].ushr_rr8rvr_k$(7))).plus_u6jwas_k$(_get_w__7mloze_0(this)[i_0 - 16 | 0]);
      }
       while (inductionVariable_0 <= 79);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 79)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var t1 = MathHelper_getInstance().circularLeftLong_httfqt_k$(e, 50);
        t1 = t1.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(e, 46));
        t1 = t1.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(e, 23));
        t1 = t1.plus_u6jwas_k$(h);
        t1 = t1.plus_u6jwas_k$(f.and_jhajnj_k$(e).xor_jjua9n_k$(g.and_jhajnj_k$(e.inv_28kx_k$())));
        t1 = t1.plus_u6jwas_k$(Companion_getInstance_0().K_1[i_1]);
        t1 = t1.plus_u6jwas_k$(_get_w__7mloze_0(this)[i_1]);
        var t2 = MathHelper_getInstance().circularLeftLong_httfqt_k$(a, 36);
        t2 = t2.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(a, 30));
        t2 = t2.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(a, 25));
        t2 = t2.plus_u6jwas_k$(a.and_jhajnj_k$(b).xor_jjua9n_k$(a.and_jhajnj_k$(c)).xor_jjua9n_k$(b.and_jhajnj_k$(c)));
        h = g;
        g = f;
        f = e;
        e = d.plus_u6jwas_k$(t1);
        d = c;
        c = b;
        b = a;
        a = t1.plus_u6jwas_k$(t2);
      }
       while (inductionVariable_1 <= 79);
    var tmp3_array = _get_currentVal__l92btp_0(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0].plus_u6jwas_k$(a);
    var tmp5_array = _get_currentVal__l92btp_0(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0].plus_u6jwas_k$(b);
    var tmp7_array = _get_currentVal__l92btp_0(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0].plus_u6jwas_k$(c);
    var tmp9_array = _get_currentVal__l92btp_0(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0].plus_u6jwas_k$(d);
    var tmp11_array = _get_currentVal__l92btp_0(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0].plus_u6jwas_k$(e);
    var tmp13_array = _get_currentVal__l92btp_0(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0].plus_u6jwas_k$(f);
    var tmp15_array = _get_currentVal__l92btp_0(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0].plus_u6jwas_k$(g);
    var tmp17_array = _get_currentVal__l92btp_0(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0].plus_u6jwas_k$(h);
  };
  SHA384.prototype.toString = function () {
    return 'SHA-384';
  };
  SHA384.$metadata$ = classMeta('SHA384', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _get_K__7mlnxi_1($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh_1($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_1($this) {
    var tmp = $this.currentVal_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentVal');
    }
  }
  function _set_w__db55pq_1($this, _set____db54di) {
    $this.w_1 = _set____db54di;
  }
  function _get_w__7mloze_1($this) {
    var tmp = $this.w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('w');
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SHA512() {
    Companion_getInstance_1();
    MDHelper_init_$Init$(false, 16, 0, 4, null, this);
  }
  SHA512.prototype.get_digestLength_64702b_k$ = function () {
    return 64;
  };
  SHA512.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  SHA512.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = longArray(8);
    this.w_1 = longArray(80);
    this.engineReset_tikogs_k$();
  };
  SHA512.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp_1(this)[0] = new Long(-205731576, 1779033703);
    _get_currentVal__l92btp_1(this)[1] = new Long(-2067093701, -1150833019);
    _get_currentVal__l92btp_1(this)[2] = new Long(-23791573, 1013904242);
    _get_currentVal__l92btp_1(this)[3] = new Long(1595750129, -1521486534);
    _get_currentVal__l92btp_1(this)[4] = new Long(-1377402159, 1359893119);
    _get_currentVal__l92btp_1(this)[5] = new Long(725511199, -1694144372);
    _get_currentVal__l92btp_1(this)[6] = new Long(-79577749, 528734635);
    _get_currentVal__l92btp_1(this)[7] = new Long(327033209, 1541459225);
  };
  SHA512.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBELong_4kx4k4_k$(_get_currentVal__l92btp_1(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 8 | 0;
    }
  };
  SHA512.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_1(this)[0];
    var b = _get_currentVal__l92btp_1(this)[1];
    var c = _get_currentVal__l92btp_1(this)[2];
    var d = _get_currentVal__l92btp_1(this)[3];
    var e = _get_currentVal__l92btp_1(this)[4];
    var f = _get_currentVal__l92btp_1(this)[5];
    var g = _get_currentVal__l92btp_1(this)[6];
    var h = _get_currentVal__l92btp_1(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze_1(this)[i] = MathHelper_getInstance().decodeBELong_acxpw5_k$(data, imul(8, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 79)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze_1(this)[i_0] = MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_1(this)[i_0 - 2 | 0], 45).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_1(this)[i_0 - 2 | 0], 3)).xor_jjua9n_k$(_get_w__7mloze_1(this)[i_0 - 2 | 0].ushr_rr8rvr_k$(6)).plus_u6jwas_k$(_get_w__7mloze_1(this)[i_0 - 7 | 0]).plus_u6jwas_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_1(this)[i_0 - 15 | 0], 63).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_1(this)[i_0 - 15 | 0], 56)).xor_jjua9n_k$(_get_w__7mloze_1(this)[i_0 - 15 | 0].ushr_rr8rvr_k$(7))).plus_u6jwas_k$(_get_w__7mloze_1(this)[i_0 - 16 | 0]);
      }
       while (inductionVariable_0 <= 79);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 79)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var t1 = MathHelper_getInstance().circularLeftLong_httfqt_k$(e, 50);
        t1 = t1.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(e, 46));
        t1 = t1.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(e, 23));
        t1 = t1.plus_u6jwas_k$(h);
        t1 = t1.plus_u6jwas_k$(f.and_jhajnj_k$(e).xor_jjua9n_k$(g.and_jhajnj_k$(e.inv_28kx_k$())));
        t1 = t1.plus_u6jwas_k$(Companion_getInstance_1().K_1[i_1]);
        t1 = t1.plus_u6jwas_k$(_get_w__7mloze_1(this)[i_1]);
        var t2 = MathHelper_getInstance().circularLeftLong_httfqt_k$(a, 36);
        t2 = t2.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(a, 30));
        t2 = t2.xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(a, 25));
        t2 = t2.plus_u6jwas_k$(a.and_jhajnj_k$(b).xor_jjua9n_k$(a.and_jhajnj_k$(c)).xor_jjua9n_k$(b.and_jhajnj_k$(c)));
        h = g;
        g = f;
        f = e;
        e = d.plus_u6jwas_k$(t1);
        d = c;
        c = b;
        b = a;
        a = t1.plus_u6jwas_k$(t2);
      }
       while (inductionVariable_1 <= 79);
    var tmp3_array = _get_currentVal__l92btp_1(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0].plus_u6jwas_k$(a);
    var tmp5_array = _get_currentVal__l92btp_1(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0].plus_u6jwas_k$(b);
    var tmp7_array = _get_currentVal__l92btp_1(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0].plus_u6jwas_k$(c);
    var tmp9_array = _get_currentVal__l92btp_1(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0].plus_u6jwas_k$(d);
    var tmp11_array = _get_currentVal__l92btp_1(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0].plus_u6jwas_k$(e);
    var tmp13_array = _get_currentVal__l92btp_1(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0].plus_u6jwas_k$(f);
    var tmp15_array = _get_currentVal__l92btp_1(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0].plus_u6jwas_k$(g);
    var tmp17_array = _get_currentVal__l92btp_1(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0].plus_u6jwas_k$(h);
  };
  SHA512.prototype.toString = function () {
    return 'SHA-512';
  };
  SHA512.$metadata$ = classMeta('SHA512', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function toHexString(_this__u8e3s4) {
    return joinToString$default(_this__u8e3s4, '', null, null, 0, null, toHexString$lambda, 30, null);
  }
  function toHexString$lambda(it) {
    return padStart(toString(255 & it, 16), 2, _Char___init__impl__6a9atx(48));
  }
  function Digest() {
  }
  Digest.$metadata$ = interfaceMeta('Digest');
  function HMACInterface() {
  }
  HMACInterface.$metadata$ = interfaceMeta('HMACInterface');
  function _set_digestLen__1jxgp8($this, _set____db54di) {
    $this.digestLen_1 = _set____db54di;
  }
  function _get_digestLen__rqwzpc($this) {
    return $this.digestLen_1;
  }
  function _get_blockLen__w3ktj1($this) {
    return $this.blockLen_1;
  }
  function _set_inputLen__5htyus($this, _set____db54di) {
    $this.inputLen_1 = _set____db54di;
  }
  function _get_inputLen__iaqabk($this) {
    return $this.inputLen_1;
  }
  function _set_outputBuf__z2zzh($this, _set____db54di) {
    $this.outputBuf_1 = _set____db54di;
  }
  function _get_outputBuf__sbrgf3($this) {
    return $this.outputBuf_1;
  }
  function _set_blockCount__95eysr($this, _set____db54di) {
    $this.blockCount_1 = _set____db54di;
  }
  function adjustDigestLen($this) {
    if ($this.digestLen_1 === 0) {
      $this.digestLen_1 = $this.get_digestLength_64702b_k$();
      $this.outputBuf_1 = new Int8Array($this.digestLen_1);
    }
  }
  function HashingBase() {
    this.doInit_ec9a0a_k$();
    this.digestLen_1 = this.get_digestLength_64702b_k$();
    this.blockLen_1 = this.get_blockLength_ozdqi2_k$();
    this.blockBuffer_1 = new Int8Array(this.blockLen_1);
    this.outputBuf_1 = new Int8Array(this.digestLen_1);
    this.inputLen_1 = 0;
    this.blockCount_1 = new Long(0, 0);
  }
  HashingBase.prototype.get_blockCount_o8tu3_k$ = function () {
    return this.blockCount_1;
  };
  HashingBase.prototype.get_blockBuffer_khl32c_k$ = function () {
    return this.blockBuffer_1;
  };
  HashingBase.prototype.digest_m0ziv0_k$ = function () {
    adjustDigestLen(this);
    var result = new Int8Array(this.digestLen_1);
    this.digest_7stlcx_k$(result, 0, this.digestLen_1);
    return result;
  };
  HashingBase.prototype.digest_g3p5dr_k$ = function (input) {
    this.update_evdvfb_k$(input, 0, input.length);
    return this.digest_m0ziv0_k$();
  };
  HashingBase.prototype.digest_7stlcx_k$ = function (output, offset, length) {
    adjustDigestLen(this);
    var tmp;
    if (length >= this.digestLen_1) {
      this.doPadding_i7rt9p_k$(output, offset);
      this.reset_5tn5dq_k$();
      tmp = this.digestLen_1;
    } else {
      this.doPadding_i7rt9p_k$(this.outputBuf_1, 0);
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.outputBuf_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyInto;
      tmp$ret$1 = tmp$ret$0;
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = output;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp_0, tmp$ret$3, offset, 0, length);
      tmp$ret$4 = output;
      this.reset_5tn5dq_k$();
      tmp = length;
    }
    return tmp;
  };
  HashingBase.prototype.reset_5tn5dq_k$ = function () {
    this.engineReset_tikogs_k$();
    this.inputLen_1 = 0;
    this.blockCount_1 = new Long(0, 0);
  };
  HashingBase.prototype.update_2c9aky_k$ = function (input) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.inputLen_1;
    tmp0_this.inputLen_1 = tmp1 + 1 | 0;
    this.blockBuffer_1[tmp1] = input;
    if (this.inputLen_1 === this.blockLen_1) {
      this.processBlock_6l7x9o_k$(this.blockBuffer_1);
      var tmp2_this = this;
      var tmp3 = tmp2_this.blockCount_1;
      tmp2_this.blockCount_1 = tmp3.inc_28ke_k$();
      this.inputLen_1 = 0;
    }
  };
  HashingBase.prototype.update_48pyh5_k$ = function (input) {
    this.update_evdvfb_k$(input, 0, input.length);
  };
  HashingBase.prototype.update_evdvfb_k$ = function (input, offset, length) {
    var offset1 = offset;
    var len = length;
    while (len > 0) {
      var copyLen = this.blockLen_1 - this.inputLen_1 | 0;
      if (copyLen > len) {
        copyLen = len;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.blockBuffer_1;
      var tmp1_copyInto = this.inputLen_1;
      var tmp2_copyInto = offset1;
      var tmp3_copyInto = offset1 + copyLen | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = input;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$4 = tmp0_copyInto;
      offset1 = offset1 + copyLen | 0;
      var tmp0_this = this;
      tmp0_this.inputLen_1 = tmp0_this.inputLen_1 + copyLen | 0;
      len = len - copyLen | 0;
      if (this.inputLen_1 === this.blockLen_1) {
        this.processBlock_6l7x9o_k$(this.blockBuffer_1);
        var tmp1_this = this;
        var tmp2 = tmp1_this.blockCount_1;
        tmp1_this.blockCount_1 = tmp2.inc_28ke_k$();
        this.inputLen_1 = 0;
      }
    }
  };
  HashingBase.prototype.flush_1m2gp0_k$ = function () {
    return this.inputLen_1;
  };
  HashingBase.$metadata$ = classMeta('HashingBase', [Digest]);
  function MDHelper_init_$Init$(littleEndian, lenlen, fbyte, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      fbyte = -128;
    MDHelper.call($this, littleEndian, lenlen, fbyte);
    return $this;
  }
  function MDHelper_init_$Create$(littleEndian, lenlen, fbyte, $mask0, $marker) {
    return MDHelper_init_$Init$(littleEndian, lenlen, fbyte, $mask0, $marker, Object.create(MDHelper.prototype));
  }
  function _get_littleEndian__u5uq7u($this) {
    return $this.littleEndian_1;
  }
  function _get_fbyte__ho1eql($this) {
    return $this.fbyte_1;
  }
  function _get_countBuf__o6dw9l($this) {
    return $this.countBuf_1;
  }
  function MDHelper(littleEndian, lenlen, fbyte) {
    HashingBase.call(this);
    this.littleEndian_1 = littleEndian;
    this.fbyte_1 = fbyte;
    this.countBuf_1 = new Int8Array(lenlen);
  }
  MDHelper.prototype.makeMDPadding_p11qth_k$ = function () {
    var dataLen = this.flush_1m2gp0_k$();
    var blen = this.get_blockLength_ozdqi2_k$();
    var currentLength = this.blockCount_1.times_2zfqpc_k$(toLong(blen));
    currentLength = currentLength.plus_u6jwas_k$(toLong(dataLen)).times_2zfqpc_k$(new Long(8, 0));
    var lenlen = this.countBuf_1.length;
    if (this.littleEndian_1) {
      MathHelper_getInstance().encodeLEInt_jts7ji_k$(currentLength.toInt_1tsl84_k$(), this.countBuf_1, 0);
      MathHelper_getInstance().encodeLEInt_jts7ji_k$(currentLength.ushr_rr8rvr_k$(32).toInt_1tsl84_k$(), this.countBuf_1, 4);
    } else {
      MathHelper_getInstance().encodeBEInt_34z9tk_k$(currentLength.ushr_rr8rvr_k$(32).toInt_1tsl84_k$(), this.countBuf_1, lenlen - 8 | 0);
      MathHelper_getInstance().encodeBEInt_34z9tk_k$(currentLength.toInt_1tsl84_k$(), this.countBuf_1, lenlen - 4 | 0);
    }
    var endLen = ((dataLen + lenlen | 0) + blen | 0) & ~(blen - 1 | 0);
    this.update_2c9aky_k$(this.fbyte_1);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = ((endLen - lenlen | 0) - dataLen | 0) - 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.iohk.atala.prism.apollo.hashing.internal.MDHelper.makeMDPadding.<anonymous>' call
        this.update_2c9aky_k$(0);
      }
       while (inductionVariable < tmp0_repeat);
    this.update_48pyh5_k$(this.countBuf_1);
  };
  MDHelper.$metadata$ = classMeta('MDHelper', undefined, undefined, undefined, undefined, HashingBase.prototype);
  function MathHelper() {
    MathHelper_instance = this;
  }
  MathHelper.prototype.encodeBEInt_34z9tk_k$ = function (value, buf, off) {
    buf[off + 0 | 0] = toByte(value >>> 24 | 0);
    buf[off + 1 | 0] = toByte(value >>> 16 | 0);
    buf[off + 2 | 0] = toByte(value >>> 8 | 0);
    buf[off + 3 | 0] = toByte(value);
  };
  MathHelper.prototype.decodeBEInt_qqshlw_k$ = function (buf, off) {
    return (buf[off] & 255) << 24 | (buf[off + 1 | 0] & 255) << 16 | (buf[off + 2 | 0] & 255) << 8 | buf[off + 3 | 0] & 255;
  };
  MathHelper.prototype.encodeLEInt_jts7ji_k$ = function (value, buf, off) {
    buf[off + 0 | 0] = toByte(value);
    buf[off + 1 | 0] = toByte(value >>> 8 | 0);
    buf[off + 2 | 0] = toByte(value >>> 16 | 0);
    buf[off + 3 | 0] = toByte(value >>> 24 | 0);
  };
  MathHelper.prototype.circularLeftInt_ykbdyh_k$ = function (x, n) {
    return rotateLeft(x, n);
  };
  MathHelper.prototype.encodeBELong_4kx4k4_k$ = function (value, buf, off) {
    buf[off + 0 | 0] = value.ushr_rr8rvr_k$(56).toByte_edm0nx_k$();
    buf[off + 1 | 0] = value.ushr_rr8rvr_k$(48).toByte_edm0nx_k$();
    buf[off + 2 | 0] = value.ushr_rr8rvr_k$(40).toByte_edm0nx_k$();
    buf[off + 3 | 0] = value.ushr_rr8rvr_k$(32).toByte_edm0nx_k$();
    buf[off + 4 | 0] = value.ushr_rr8rvr_k$(24).toByte_edm0nx_k$();
    buf[off + 5 | 0] = value.ushr_rr8rvr_k$(16).toByte_edm0nx_k$();
    buf[off + 6 | 0] = value.ushr_rr8rvr_k$(8).toByte_edm0nx_k$();
    buf[off + 7 | 0] = value.toByte_edm0nx_k$();
  };
  MathHelper.prototype.decodeBELong_acxpw5_k$ = function (buf, off) {
    return toLong(buf[off]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(56).or_s401rn_k$(toLong(buf[off + 1 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(48)).or_s401rn_k$(toLong(buf[off + 2 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(40)).or_s401rn_k$(toLong(buf[off + 3 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(32)).or_s401rn_k$(toLong(buf[off + 4 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(24)).or_s401rn_k$(toLong(buf[off + 5 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(16)).or_s401rn_k$(toLong(buf[off + 6 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(8)).or_s401rn_k$(toLong(buf[off + 7 | 0]).and_jhajnj_k$(new Long(255, 0)));
  };
  MathHelper.prototype.circularLeftLong_httfqt_k$ = function (x, n) {
    return rotateLeft_0(x, n);
  };
  MathHelper.prototype.decodeLEInt_wq9yqi_k$ = function (buf, off) {
    return (buf[off + 3 | 0] & 255) << 24 | (buf[off + 2 | 0] & 255) << 16 | (buf[off + 1 | 0] & 255) << 8 | buf[off] & 255;
  };
  MathHelper.prototype.encodeLELong_jfxdem_k$ = function (value, dst, off) {
    dst[off + 0 | 0] = value.toByte_edm0nx_k$();
    dst[off + 1 | 0] = toByte(value.toInt_1tsl84_k$() >>> 8 | 0);
    dst[off + 2 | 0] = toByte(value.toInt_1tsl84_k$() >>> 16 | 0);
    dst[off + 3 | 0] = toByte(value.toInt_1tsl84_k$() >>> 24 | 0);
    dst[off + 4 | 0] = value.ushr_rr8rvr_k$(32).toByte_edm0nx_k$();
    dst[off + 5 | 0] = value.ushr_rr8rvr_k$(40).toByte_edm0nx_k$();
    dst[off + 6 | 0] = value.ushr_rr8rvr_k$(48).toByte_edm0nx_k$();
    dst[off + 7 | 0] = value.ushr_rr8rvr_k$(56).toByte_edm0nx_k$();
  };
  MathHelper.prototype.decodeLELong_h6cp29_k$ = function (buf, off) {
    return toLong(buf[off + 0 | 0]).and_jhajnj_k$(new Long(255, 0)).or_s401rn_k$(toLong(buf[off + 1 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(8)).or_s401rn_k$(toLong(buf[off + 2 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(16)).or_s401rn_k$(toLong(buf[off + 3 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(24)).or_s401rn_k$(toLong(buf[off + 4 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(32)).or_s401rn_k$(toLong(buf[off + 5 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(40)).or_s401rn_k$(toLong(buf[off + 6 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(48)).or_s401rn_k$(toLong(buf[off + 7 | 0]).and_jhajnj_k$(new Long(255, 0)).shl_po5ip6_k$(56));
  };
  MathHelper.prototype.circularRightInt_1gijou_k$ = function (x, n) {
    return rotateRight(x, n);
  };
  MathHelper.prototype.circularRightLong_8bf1eq_k$ = function (x, n) {
    var tmp$ret$0;
    // Inline function 'kotlin.rotateRight' call
    tmp$ret$0 = rotateLeft_0(x, -n | 0);
    return tmp$ret$0;
  };
  MathHelper.$metadata$ = objectMeta('MathHelper');
  var MathHelper_instance;
  function MathHelper_getInstance() {
    if (MathHelper_instance == null)
      new MathHelper();
    return MathHelper_instance;
  }
  function HMAC_init_$Init$(dig, key, outputLength, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      outputLength = null;
    HMAC.call($this, dig, key, outputLength);
    return $this;
  }
  function HMAC_init_$Create$(dig, key, outputLength, $mask0, $marker) {
    return HMAC_init_$Init$(dig, key, outputLength, $mask0, $marker, Object.create(HMAC.prototype));
  }
  function _set_dig__4w4hqb($this, _set____db54di) {
    $this.dig_1 = _set____db54di;
  }
  function _get_dig__e672vj($this) {
    return $this.dig_1;
  }
  function _set_outputLength__gi1cds($this, _set____db54di) {
    $this.outputLength_1 = _set____db54di;
  }
  function _get_outputLength__w1s2xw($this) {
    return $this.outputLength_1;
  }
  function _set_dataToHash__ay0fb8($this, _set____db54di) {
    $this.dataToHash_1 = _set____db54di;
  }
  function _get_dataToHash__4485u0($this) {
    return $this.dataToHash_1;
  }
  function HMAC(dig, key, outputLength) {
    HashingBase.call(this);
    this.dig_1 = dig;
    this.key_1 = key;
    var tmp = this;
    var tmp0_elvis_lhs = outputLength;
    tmp.outputLength_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$0 = new Int8Array([]);
    tmp_0.dataToHash_1 = tmp$ret$0;
  }
  HMAC.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  HMAC.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  HMAC.prototype.get_digestLength_64702b_k$ = function () {
    return this.outputLength_1 < 0 ? this.dig_1.get_digestLength_64702b_k$() : this.outputLength_1;
  };
  HMAC.prototype.toString = function () {
    return 'HMAC/' + this.dig_1;
  };
  HMAC.prototype.engineReset_tikogs_k$ = function () {
    return Unit_getInstance();
  };
  HMAC.prototype.processBlock_6l7x9o_k$ = function (data) {
    return Unit_getInstance();
  };
  HMAC.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    return Unit_getInstance();
  };
  HMAC.prototype.doInit_ec9a0a_k$ = function () {
    return Unit_getInstance();
  };
  HMAC.prototype.update_48pyh5_k$ = function (input) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.plus' call
    var tmp0_plus = tmp0_this.dataToHash_1;
    tmp$ret$0 = primitiveArrayConcat([tmp0_plus, input]);
    tmp.dataToHash_1 = tmp$ret$0;
  };
  HMAC.prototype.digest_m0ziv0_k$ = function () {
    var localKey = this.key_1;
    var localData = this.dataToHash_1;
    var tmp0_subject = this.dig_1.toString();
    switch (tmp0_subject) {
      case 'MD2':
        throw new NotImplementedError('Not implemented');
      case 'MD4':
        throw new NotImplementedError('Not implemented');
      case 'MD5':
        throw new NotImplementedError('Not implemented');
      case 'SHA-0':
        throw new NotImplementedError('Not implemented');
      case 'SHA-1':
        throw new NotImplementedError('Not implemented');
      case 'SHA-512/224':
        throw new NotImplementedError('Not implemented');
      case 'SHA-512/256':
        throw new NotImplementedError('Not implemented');
      case 'SHA3-224':
        throw new NotImplementedError('Not implemented');
      case 'SHA3-256':
        throw new NotImplementedError('Not implemented');
      case 'SHA3-384':
        throw new NotImplementedError('Not implemented');
      case 'SHA3-512':
        throw new NotImplementedError('Not implemented');
      default:
        var tmp1_subject = this.dig_1.toString();
        switch (tmp1_subject) {
          case 'SHA-224':
            var tmp = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.hmac;
            var tmp_0 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.sha224;
            var hmac = tmp(isObject(tmp_0) ? tmp_0 : THROW_CCE(), localKey);
            var tmp$ret$2;
            // Inline function 'kotlin.collections.map' call
            var tmp0_map = hmac.update(localData).digest();
            var tmp$ret$1;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
            var indexedObject = tmp0_map;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var item = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              // Inline function 'io.iohk.atala.prism.apollo.hashing.internal.HMAC.digest.<anonymous>' call
              tmp$ret$0 = numberToByte(item);
              tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
            tmp$ret$2 = tmp$ret$1;

            return toByteArray(tmp$ret$2);
          case 'SHA-256':
            var tmp_1 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.hmac;
            var tmp_2 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.sha256;
            var hmac_0 = tmp_1(isObject(tmp_2) ? tmp_2 : THROW_CCE(), localKey);
            var tmp$ret$5;
            // Inline function 'kotlin.collections.map' call
            var tmp1_map = hmac_0.update(localData).digest();
            var tmp$ret$4;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp0_mapTo_0 = ArrayList_init_$Create$(tmp1_map.length);
            var indexedObject_0 = tmp1_map;
            var inductionVariable_0 = 0;
            var last_0 = indexedObject_0.length;
            while (inductionVariable_0 < last_0) {
              var item_0 = indexedObject_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var tmp$ret$3;
              // Inline function 'io.iohk.atala.prism.apollo.hashing.internal.HMAC.digest.<anonymous>' call
              tmp$ret$3 = numberToByte(item_0);
              tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
            }
            tmp$ret$4 = tmp0_mapTo_0;
            tmp$ret$5 = tmp$ret$4;

            return toByteArray(tmp$ret$5);
          case 'SHA-384':
            var tmp_3 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.hmac;
            var tmp_4 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.sha384;
            var hmac_1 = tmp_3(isObject(tmp_4) ? tmp_4 : THROW_CCE(), localKey);
            var tmp$ret$8;
            // Inline function 'kotlin.collections.map' call
            var tmp2_map = hmac_1.update(localData).digest();
            var tmp$ret$7;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp0_mapTo_1 = ArrayList_init_$Create$(tmp2_map.length);
            var indexedObject_1 = tmp2_map;
            var inductionVariable_1 = 0;
            var last_1 = indexedObject_1.length;
            while (inductionVariable_1 < last_1) {
              var item_1 = indexedObject_1[inductionVariable_1];
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp$ret$6;
              // Inline function 'io.iohk.atala.prism.apollo.hashing.internal.HMAC.digest.<anonymous>' call
              tmp$ret$6 = numberToByte(item_1);
              tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
            }
            tmp$ret$7 = tmp0_mapTo_1;
            tmp$ret$8 = tmp$ret$7;

            return toByteArray(tmp$ret$8);
          case 'SHA-512':
            var tmp_5 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.hmac;
            var tmp_6 = io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1.sha512;
            var hmac_2 = tmp_5(isObject(tmp_6) ? tmp_6 : THROW_CCE(), localKey);
            var tmp$ret$11;
            // Inline function 'kotlin.collections.map' call
            var tmp3_map = hmac_2.update(localData).digest();
            var tmp$ret$10;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp0_mapTo_2 = ArrayList_init_$Create$(tmp3_map.length);
            var indexedObject_2 = tmp3_map;
            var inductionVariable_2 = 0;
            var last_2 = indexedObject_2.length;
            while (inductionVariable_2 < last_2) {
              var item_2 = indexedObject_2[inductionVariable_2];
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var tmp$ret$9;
              // Inline function 'io.iohk.atala.prism.apollo.hashing.internal.HMAC.digest.<anonymous>' call
              tmp$ret$9 = numberToByte(item_2);
              tmp0_mapTo_2.add_1j60pz_k$(tmp$ret$9);
            }
            tmp$ret$10 = tmp0_mapTo_2;
            tmp$ret$11 = tmp$ret$10;

            return toByteArray(tmp$ret$11);
          default:
            throw new NotImplementedError('Not implemented');
        }

        break;
    }
  };
  HMAC.prototype.digest_g3p5dr_k$ = function (input) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.plus' call
    var tmp0_plus = tmp0_this.dataToHash_1;
    tmp$ret$0 = primitiveArrayConcat([tmp0_plus, input]);
    tmp.dataToHash_1 = tmp$ret$0;
    return this.digest_m0ziv0_k$();
  };
  HMAC.$metadata$ = classMeta('HMAC', undefined, undefined, undefined, undefined, HashingBase.prototype);
  //region block: post-declaration
  SHA256.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA256.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA256.prototype.hmac_pnxnkr_k$ = hmac;
  SHA256.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA384.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA384.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA384.prototype.hmac_pnxnkr_k$ = hmac;
  SHA384.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA512.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA512.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA512.prototype.hmac_pnxnkr_k$ = hmac;
  SHA512.prototype.hmac$default_f281s0_k$ = hmac$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toHexString;
  _.$_$.b = SHA256;
  _.$_$.c = SHA384;
  _.$_$.d = SHA512;
  //endregion
  return _;
}(module.exports, require('hash.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloHashing.js.map
