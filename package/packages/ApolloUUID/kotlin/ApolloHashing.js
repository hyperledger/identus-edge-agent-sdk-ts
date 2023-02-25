(function (_, io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.bb;
  var objectMeta = kotlin_kotlin.$_$.n8;
  var classMeta = kotlin_kotlin.$_$.o7;
  var interfaceMeta = kotlin_kotlin.$_$.u7;
  var THROW_CCE = kotlin_kotlin.$_$.ha;
  var isInterface = kotlin_kotlin.$_$.c8;
  var Long = kotlin_kotlin.$_$.da;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var arrayCopy = kotlin_kotlin.$_$.i4;
  var toLong = kotlin_kotlin.$_$.p8;
  var toByte = kotlin_kotlin.$_$.o8;
  var rotateLeft = kotlin_kotlin.$_$.za;
  var rotateLeft_0 = kotlin_kotlin.$_$.ya;
  var rotateRight = kotlin_kotlin.$_$.ab;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var NotImplementedError = kotlin_kotlin.$_$.ea;
  var isObject = kotlin_kotlin.$_$.f8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var numberToByte = kotlin_kotlin.$_$.j8;
  var toByteArray = kotlin_kotlin.$_$.b6;
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
  MD5.prototype = Object.create(MDHelper.prototype);
  MD5.prototype.constructor = MD5;
  SHA1.prototype = Object.create(MDHelper.prototype);
  SHA1.prototype.constructor = SHA1;
  HMAC.prototype = Object.create(HashingBase.prototype);
  HMAC.prototype.constructor = HMAC;
  //endregion
  function f($this, x, y, z) {
    return y & x | z & ~x;
  }
  function g($this, x, y, z) {
    return x & z | y & ~z;
  }
  function h($this, x, y, z) {
    return x ^ y ^ z;
  }
  function i($this, x, y, z) {
    return y ^ (x | ~z);
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
  function _set_x__db55ql($this, _set____db54di) {
    $this.x_1 = _set____db54di;
  }
  function _get_x__7mlp09($this) {
    var tmp = $this.x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('x');
    }
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MD5() {
    Companion_getInstance();
    MDHelper_init_$Init$(true, 8, 0, 4, null, this);
  }
  MD5.prototype.get_digestLength_64702b_k$ = function () {
    return 16;
  };
  MD5.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  MD5.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = new Int32Array(4);
    this.x_1 = new Int32Array(16);
    this.engineReset_tikogs_k$();
  };
  MD5.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp(this)[0] = 1732584193;
    _get_currentVal__l92btp(this)[1] = -271733879;
    _get_currentVal__l92btp(this)[2] = -1732584194;
    _get_currentVal__l92btp(this)[3] = 271733878;
  };
  MD5.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        MathHelper_getInstance().encodeLEInt_jts7ji_k$(_get_currentVal__l92btp(this)[i], output, outputOffset + imul(4, i) | 0);
      }
       while (inductionVariable <= 3);
  };
  MD5.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp(this)[0];
    var b = _get_currentVal__l92btp(this)[1];
    var c = _get_currentVal__l92btp(this)[2];
    var d = _get_currentVal__l92btp(this)[3];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_x__7mlp09(this)[i_0] = MathHelper_getInstance().decodeLEInt_wq9yqi_k$(data, imul(4, i_0));
      }
       while (inductionVariable <= 15);
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[0] | 0) + -680876936 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[1] | 0) + -389564586 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[2] | 0) + 606105819 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[3] | 0) + -1044525330 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[4] | 0) + -176418897 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[5] | 0) + 1200080426 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[6] | 0) + -1473231341 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[7] | 0) + -45705983 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[8] | 0) + 1770035416 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[9] | 0) + -1958414417 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[10] | 0) + -42063 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[11] | 0) + -1990404162 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[12] | 0) + 1804603682 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[13] | 0) + -40341101 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[14] | 0) + -1502002290 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[15] | 0) + 1236535329 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[1] | 0) + -165796510 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[6] | 0) + -1069501632 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[11] | 0) + 643717713 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[0] | 0) + -373897302 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[5] | 0) + -701558691 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[10] | 0) + 38016083 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[15] | 0) + -660478335 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[4] | 0) + -405537848 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[9] | 0) + 568446438 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[14] | 0) + -1019803690 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[3] | 0) + -187363961 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[8] | 0) + 1163531501 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[13] | 0) + -1444681467 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[2] | 0) + -51403784 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[7] | 0) + 1735328473 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[12] | 0) + -1926607734 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[5] | 0) + -378558 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[8] | 0) + -2022574463 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[11] | 0) + 1839030562 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[14] | 0) + -35309556 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[1] | 0) + -1530992060 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[4] | 0) + 1272893353 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[7] | 0) + -155497632 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[10] | 0) + -1094730640 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[13] | 0) + 681279174 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[0] | 0) + -358537222 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[3] | 0) + -722521979 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[6] | 0) + 76029189 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[9] | 0) + -640364487 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[12] | 0) + -421815835 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[15] | 0) + 530742520 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[2] | 0) + -995338651 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[0] | 0) + -198630844 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[7] | 0) + 1126891415 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[14] | 0) + -1416354905 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[5] | 0) + -57434055 | 0, 21) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[12] | 0) + 1700485571 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[3] | 0) + -1894986606 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[10] | 0) + -1051523 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[1] | 0) + -2054922799 | 0, 21) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[8] | 0) + 1873313359 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[15] | 0) + -30611744 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[6] | 0) + -1560198380 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[13] | 0) + 1309151649 | 0, 21) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance(), b, c, d) | 0) + _get_x__7mlp09(this)[4] | 0) + -145523070 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance(), a, b, c) | 0) + _get_x__7mlp09(this)[11] | 0) + -1120210379 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance(), d, a, b) | 0) + _get_x__7mlp09(this)[2] | 0) + 718787259 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance(), c, d, a) | 0) + _get_x__7mlp09(this)[9] | 0) + -343485551 | 0, 21) | 0;
    var tmp1_array = _get_currentVal__l92btp(this);
    var tmp2_index0 = 0;
    tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + a | 0;
    var tmp3_array = _get_currentVal__l92btp(this);
    var tmp4_index0 = 1;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0] + b | 0;
    var tmp5_array = _get_currentVal__l92btp(this);
    var tmp6_index0 = 2;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0] + c | 0;
    var tmp7_array = _get_currentVal__l92btp(this);
    var tmp8_index0 = 3;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0] + d | 0;
  };
  MD5.prototype.toString = function () {
    return 'MD5';
  };
  MD5.$metadata$ = classMeta('MD5', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
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
  function SHA1() {
    MDHelper_init_$Init$(false, 8, 0, 4, null, this);
  }
  SHA1.prototype.get_digestLength_64702b_k$ = function () {
    return 20;
  };
  SHA1.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  SHA1.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = new Int32Array(5);
    this.engineReset_tikogs_k$();
  };
  SHA1.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp_0(this)[0] = 1732584193;
    _get_currentVal__l92btp_0(this)[1] = -271733879;
    _get_currentVal__l92btp_0(this)[2] = -1732584194;
    _get_currentVal__l92btp_0(this)[3] = 271733878;
    _get_currentVal__l92btp_0(this)[4] = -1009589776;
  };
  SHA1.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var inductionVariable = 0;
    if (inductionVariable <= 4)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        MathHelper_getInstance().encodeBEInt_34z9tk_k$(_get_currentVal__l92btp_0(this)[i], output, outputOffset + imul(4, i) | 0);
      }
       while (inductionVariable <= 4);
  };
  SHA1.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_0(this)[0];
    var b = _get_currentVal__l92btp_0(this)[1];
    var c = _get_currentVal__l92btp_0(this)[2];
    var d = _get_currentVal__l92btp_0(this)[3];
    var e = _get_currentVal__l92btp_0(this)[4];
    var u;
    var w0 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | ~b & d) | 0) + e | 0) + w0 | 0) + 1518500249 | 0;
    b = b << 30 | (b >>> 2 | 0);
    var w1 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 4);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | ~a & c) | 0) + d | 0) + w1 | 0) + 1518500249 | 0;
    a = a << 30 | (a >>> 2 | 0);
    var w2 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 8);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | ~e & b) | 0) + c | 0) + w2 | 0) + 1518500249 | 0;
    e = e << 30 | (e >>> 2 | 0);
    var w3 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 12);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | ~d & a) | 0) + b | 0) + w3 | 0) + 1518500249 | 0;
    d = d << 30 | (d >>> 2 | 0);
    var w4 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 16);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | ~c & e) | 0) + a | 0) + w4 | 0) + 1518500249 | 0;
    c = c << 30 | (c >>> 2 | 0);
    var w5 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 20);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | ~b & d) | 0) + e | 0) + w5 | 0) + 1518500249 | 0;
    b = b << 30 | (b >>> 2 | 0);
    var w6 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 24);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | ~a & c) | 0) + d | 0) + w6 | 0) + 1518500249 | 0;
    a = a << 30 | (a >>> 2 | 0);
    var w7 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 28);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | ~e & b) | 0) + c | 0) + w7 | 0) + 1518500249 | 0;
    e = e << 30 | (e >>> 2 | 0);
    var w8 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 32);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | ~d & a) | 0) + b | 0) + w8 | 0) + 1518500249 | 0;
    d = d << 30 | (d >>> 2 | 0);
    var w9 = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 36);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | ~c & e) | 0) + a | 0) + w9 | 0) + 1518500249 | 0;
    c = c << 30 | (c >>> 2 | 0);
    var wa = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 40);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | ~b & d) | 0) + e | 0) + wa | 0) + 1518500249 | 0;
    b = b << 30 | (b >>> 2 | 0);
    var wb = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 44);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | ~a & c) | 0) + d | 0) + wb | 0) + 1518500249 | 0;
    a = a << 30 | (a >>> 2 | 0);
    var wc = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 48);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | ~e & b) | 0) + c | 0) + wc | 0) + 1518500249 | 0;
    e = e << 30 | (e >>> 2 | 0);
    var wd = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 52);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | ~d & a) | 0) + b | 0) + wd | 0) + 1518500249 | 0;
    d = d << 30 | (d >>> 2 | 0);
    var we = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 56);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | ~c & e) | 0) + a | 0) + we | 0) + 1518500249 | 0;
    c = c << 30 | (c >>> 2 | 0);
    var wf = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, 60);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | ~b & d) | 0) + e | 0) + wf | 0) + 1518500249 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = wd ^ w8 ^ w2 ^ w0;
    w0 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | ~a & c) | 0) + d | 0) + w0 | 0) + 1518500249 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = we ^ w9 ^ w3 ^ w1;
    w1 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | ~e & b) | 0) + c | 0) + w1 | 0) + 1518500249 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = wf ^ wa ^ w4 ^ w2;
    w2 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | ~d & a) | 0) + b | 0) + w2 | 0) + 1518500249 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w0 ^ wb ^ w5 ^ w3;
    w3 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | ~c & e) | 0) + a | 0) + w3 | 0) + 1518500249 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w1 ^ wc ^ w6 ^ w4;
    w4 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w4 | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w2 ^ wd ^ w7 ^ w5;
    w5 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w5 | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w3 ^ we ^ w8 ^ w6;
    w6 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w6 | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w4 ^ wf ^ w9 ^ w7;
    w7 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w7 | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w5 ^ w0 ^ wa ^ w8;
    w8 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w8 | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w6 ^ w1 ^ wb ^ w9;
    w9 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w9 | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w7 ^ w2 ^ wc ^ wa;
    wa = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wa | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w8 ^ w3 ^ wd ^ wb;
    wb = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + wb | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w9 ^ w4 ^ we ^ wc;
    wc = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + wc | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = wa ^ w5 ^ wf ^ wd;
    wd = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + wd | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = wb ^ w6 ^ w0 ^ we;
    we = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + we | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = wc ^ w7 ^ w1 ^ wf;
    wf = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wf | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = wd ^ w8 ^ w2 ^ w0;
    w0 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w0 | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = we ^ w9 ^ w3 ^ w1;
    w1 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w1 | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = wf ^ wa ^ w4 ^ w2;
    w2 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w2 | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w0 ^ wb ^ w5 ^ w3;
    w3 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w3 | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w1 ^ wc ^ w6 ^ w4;
    w4 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w4 | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w2 ^ wd ^ w7 ^ w5;
    w5 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w5 | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w3 ^ we ^ w8 ^ w6;
    w6 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w6 | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w4 ^ wf ^ w9 ^ w7;
    w7 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w7 | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w5 ^ w0 ^ wa ^ w8;
    w8 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + w8 | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w6 ^ w1 ^ wb ^ w9;
    w9 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + w9 | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w7 ^ w2 ^ wc ^ wa;
    wa = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + wa | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w8 ^ w3 ^ wd ^ wb;
    wb = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + wb | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w9 ^ w4 ^ we ^ wc;
    wc = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + wc | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = wa ^ w5 ^ wf ^ wd;
    wd = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + wd | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = wb ^ w6 ^ w0 ^ we;
    we = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + we | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = wc ^ w7 ^ w1 ^ wf;
    wf = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + wf | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = wd ^ w8 ^ w2 ^ w0;
    w0 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + w0 | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = we ^ w9 ^ w3 ^ w1;
    w1 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + w1 | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = wf ^ wa ^ w4 ^ w2;
    w2 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + w2 | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w0 ^ wb ^ w5 ^ w3;
    w3 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + w3 | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w1 ^ wc ^ w6 ^ w4;
    w4 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + w4 | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w2 ^ wd ^ w7 ^ w5;
    w5 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + w5 | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w3 ^ we ^ w8 ^ w6;
    w6 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + w6 | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w4 ^ wf ^ w9 ^ w7;
    w7 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + w7 | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w5 ^ w0 ^ wa ^ w8;
    w8 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + w8 | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w6 ^ w1 ^ wb ^ w9;
    w9 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + w9 | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w7 ^ w2 ^ wc ^ wa;
    wa = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + wa | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w8 ^ w3 ^ wd ^ wb;
    wb = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + wb | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w9 ^ w4 ^ we ^ wc;
    wc = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + wc | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = wa ^ w5 ^ wf ^ wd;
    wd = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wd | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = wb ^ w6 ^ w0 ^ we;
    we = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + we | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = wc ^ w7 ^ w1 ^ wf;
    wf = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + wf | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = wd ^ w8 ^ w2 ^ w0;
    w0 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w0 | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = we ^ w9 ^ w3 ^ w1;
    w1 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w1 | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = wf ^ wa ^ w4 ^ w2;
    w2 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w2 | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w0 ^ wb ^ w5 ^ w3;
    w3 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w3 | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w1 ^ wc ^ w6 ^ w4;
    w4 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w4 | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w2 ^ wd ^ w7 ^ w5;
    w5 = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w5 | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w3 ^ we ^ w8 ^ w6;
    w6 = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w6 | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w4 ^ wf ^ w9 ^ w7;
    w7 = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w7 | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = w5 ^ w0 ^ wa ^ w8;
    w8 = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w8 | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = w6 ^ w1 ^ wb ^ w9;
    w9 = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w9 | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = w7 ^ w2 ^ wc ^ wa;
    wa = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + wa | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    u = w8 ^ w3 ^ wd ^ wb;
    wb = u << 1 | (u >>> 31 | 0);
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + wb | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    u = w9 ^ w4 ^ we ^ wc;
    wc = u << 1 | (u >>> 31 | 0);
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wc | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    u = wa ^ w5 ^ wf ^ wd;
    wd = u << 1 | (u >>> 31 | 0);
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + wd | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    u = wb ^ w6 ^ w0 ^ we;
    we = u << 1 | (u >>> 31 | 0);
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + we | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    u = wc ^ w7 ^ w1 ^ wf;
    wf = u << 1 | (u >>> 31 | 0);
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + wf | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    var tmp0_array = _get_currentVal__l92btp_0(this);
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + a | 0;
    var tmp2_array = _get_currentVal__l92btp_0(this);
    var tmp3_index0 = 1;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + b | 0;
    var tmp4_array = _get_currentVal__l92btp_0(this);
    var tmp5_index0 = 2;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] + c | 0;
    var tmp6_array = _get_currentVal__l92btp_0(this);
    var tmp7_index0 = 3;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] + d | 0;
    var tmp8_array = _get_currentVal__l92btp_0(this);
    var tmp9_index0 = 4;
    tmp8_array[tmp9_index0] = tmp8_array[tmp9_index0] + e | 0;
  };
  SHA1.prototype.toString = function () {
    return 'SHA-1';
  };
  SHA1.$metadata$ = classMeta('SHA1', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
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
  MD5.prototype.createHmac_eea1ku_k$ = createHmac;
  MD5.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  MD5.prototype.hmac_pnxnkr_k$ = hmac;
  MD5.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA1.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA1.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA1.prototype.hmac_pnxnkr_k$ = hmac;
  SHA1.prototype.hmac$default_f281s0_k$ = hmac$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MD5;
  _.$_$.b = SHA1;
  //endregion
  return _;
}(module.exports, require('hash.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloHashing.js.map
