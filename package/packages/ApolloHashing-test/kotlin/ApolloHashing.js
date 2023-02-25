(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'hash.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('hash.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1 === 'undefined') {
      throw new Error("Error loading module 'ApolloHashing'. Its dependency 'hash.js' was not found. Please, check whether 'hash.js' is loaded prior to 'ApolloHashing'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ApolloHashing'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ApolloHashing'.");
    }
    root.ApolloHashing = factory(typeof ApolloHashing === 'undefined' ? {} : ApolloHashing, io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var classMeta = kotlin_kotlin.$_$.a3;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.c5;
  var Unit_getInstance = kotlin_kotlin.$_$.m1;
  var objectMeta = kotlin_kotlin.$_$.p3;
  var toByte = kotlin_kotlin.$_$.q3;
  var Long = kotlin_kotlin.$_$.n4;
  var longArrayOf = kotlin_kotlin.$_$.m3;
  var longArray = kotlin_kotlin.$_$.n3;
  var until = kotlin_kotlin.$_$.u3;
  var sliceArray = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t;
  var arrayCopy = kotlin_kotlin.$_$.o1;
  var ensureNotNull = kotlin_kotlin.$_$.x4;
  var toLong = kotlin_kotlin.$_$.r3;
  var fill$default = kotlin_kotlin.$_$.g;
  var fill$default_0 = kotlin_kotlin.$_$.f;
  var fill$default_1 = kotlin_kotlin.$_$.e;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.f4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c1;
  var padStart = kotlin_kotlin.$_$.b4;
  var interfaceMeta = kotlin_kotlin.$_$.h3;
  var THROW_CCE = kotlin_kotlin.$_$.r4;
  var isInterface = kotlin_kotlin.$_$.j3;
  var rotateLeft = kotlin_kotlin.$_$.a5;
  var rotateLeft_0 = kotlin_kotlin.$_$.z4;
  var rotateRight = kotlin_kotlin.$_$.b5;
  var toInt = kotlin_kotlin.$_$.d4;
  var NotImplementedError = kotlin_kotlin.$_$.p4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var isObject = kotlin_kotlin.$_$.k3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var numberToByte = kotlin_kotlin.$_$.o3;
  var toByteArray = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  Keyed.prototype = Object.create(BLAKE2B.prototype);
  Keyed.prototype.constructor = Keyed;
  BLAKE2B_160.prototype = Object.create(BLAKE2B.prototype);
  BLAKE2B_160.prototype.constructor = BLAKE2B_160;
  Keyed_0.prototype = Object.create(BLAKE2B.prototype);
  Keyed_0.prototype.constructor = Keyed_0;
  BLAKE2B_256.prototype = Object.create(BLAKE2B.prototype);
  BLAKE2B_256.prototype.constructor = BLAKE2B_256;
  Keyed_1.prototype = Object.create(BLAKE2B.prototype);
  Keyed_1.prototype.constructor = Keyed_1;
  BLAKE2B_384.prototype = Object.create(BLAKE2B.prototype);
  BLAKE2B_384.prototype.constructor = BLAKE2B_384;
  Keyed_2.prototype = Object.create(BLAKE2B.prototype);
  Keyed_2.prototype.constructor = Keyed_2;
  BLAKE2B_512.prototype = Object.create(BLAKE2B.prototype);
  BLAKE2B_512.prototype.constructor = BLAKE2B_512;
  Keyed_3.prototype = Object.create(BLAKE2S.prototype);
  Keyed_3.prototype.constructor = Keyed_3;
  BLAKE2S_128.prototype = Object.create(BLAKE2S.prototype);
  BLAKE2S_128.prototype.constructor = BLAKE2S_128;
  Keyed_4.prototype = Object.create(BLAKE2S.prototype);
  Keyed_4.prototype.constructor = Keyed_4;
  BLAKE2S_160.prototype = Object.create(BLAKE2S.prototype);
  BLAKE2S_160.prototype.constructor = BLAKE2S_160;
  Keyed_5.prototype = Object.create(BLAKE2S.prototype);
  Keyed_5.prototype.constructor = Keyed_5;
  BLAKE2S_224.prototype = Object.create(BLAKE2S.prototype);
  BLAKE2S_224.prototype.constructor = BLAKE2S_224;
  Keyed_6.prototype = Object.create(BLAKE2S.prototype);
  Keyed_6.prototype.constructor = Keyed_6;
  BLAKE2S_256.prototype = Object.create(BLAKE2S.prototype);
  BLAKE2S_256.prototype.constructor = BLAKE2S_256;
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
  MD2.prototype = Object.create(HashingBase.prototype);
  MD2.prototype.constructor = MD2;
  MDHelper.prototype = Object.create(HashingBase.prototype);
  MDHelper.prototype.constructor = MDHelper;
  MD4.prototype = Object.create(MDHelper.prototype);
  MD4.prototype.constructor = MD4;
  MD5.prototype = Object.create(MDHelper.prototype);
  MD5.prototype.constructor = MD5;
  SHA0.prototype = Object.create(MDHelper.prototype);
  SHA0.prototype.constructor = SHA0;
  SHA1.prototype = Object.create(MDHelper.prototype);
  SHA1.prototype.constructor = SHA1;
  SHA224.prototype = Object.create(MDHelper.prototype);
  SHA224.prototype.constructor = SHA224;
  SHA256.prototype = Object.create(MDHelper.prototype);
  SHA256.prototype.constructor = SHA256;
  SHA384.prototype = Object.create(MDHelper.prototype);
  SHA384.prototype.constructor = SHA384;
  KeccakDigest.prototype = Object.create(HashingBase.prototype);
  KeccakDigest.prototype.constructor = KeccakDigest;
  SHA3_224.prototype = Object.create(KeccakDigest.prototype);
  SHA3_224.prototype.constructor = SHA3_224;
  SHA3_256.prototype = Object.create(KeccakDigest.prototype);
  SHA3_256.prototype.constructor = SHA3_256;
  SHA3_384.prototype = Object.create(KeccakDigest.prototype);
  SHA3_384.prototype.constructor = SHA3_384;
  SHA3_512.prototype = Object.create(KeccakDigest.prototype);
  SHA3_512.prototype.constructor = SHA3_512;
  SHA512.prototype = Object.create(MDHelper.prototype);
  SHA512.prototype.constructor = SHA512;
  HashHelper.prototype = Object.create(MDHelper.prototype);
  HashHelper.prototype.constructor = HashHelper;
  HashHelper_0.prototype = Object.create(MDHelper.prototype);
  HashHelper_0.prototype.constructor = HashHelper_0;
  Keyed_7.prototype = Object.create(BLAKE2B.prototype);
  Keyed_7.prototype.constructor = Keyed_7;
  BLAKE224.prototype = Object.create(HashingBase.prototype);
  BLAKE224.prototype.constructor = BLAKE224;
  BLAKE256.prototype = Object.create(HashingBase.prototype);
  BLAKE256.prototype.constructor = BLAKE256;
  BLAKE384.prototype = Object.create(HashingBase.prototype);
  BLAKE384.prototype.constructor = BLAKE384;
  BLAKE512.prototype = Object.create(HashingBase.prototype);
  BLAKE512.prototype.constructor = BLAKE512;
  HMAC.prototype = Object.create(HashingBase.prototype);
  HMAC.prototype.constructor = HMAC;
  //endregion
  function Keyed_init_$Init$(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$(key, salt, personalisation, $mask0, $marker, Object.create(Keyed.prototype));
  }
  function Keyed(key, salt, personalisation) {
    BLAKE2B_init_$Init$_2(key, 160, salt, personalisation, this);
  }
  Keyed.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  Keyed.prototype.toString = function () {
    return 'BLAKE2B-160';
  };
  Keyed.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function BLAKE2B_160() {
    BLAKE2B_init_$Init$(160, this);
  }
  BLAKE2B_160.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE2B_160.prototype.toString = function () {
    return 'BLAKE2B-160';
  };
  BLAKE2B_160.$metadata$ = classMeta('BLAKE2B_160', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function Keyed_init_$Init$_0(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_0.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_0(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_0(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_0.prototype));
  }
  function Keyed_0(key, salt, personalisation) {
    BLAKE2B_init_$Init$_2(key, 256, salt, personalisation, this);
  }
  Keyed_0.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  Keyed_0.prototype.toString = function () {
    return 'BLAKE2B-256';
  };
  Keyed_0.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function BLAKE2B_256() {
    BLAKE2B_init_$Init$(256, this);
  }
  BLAKE2B_256.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE2B_256.prototype.toString = function () {
    return 'BLAKE2B-256';
  };
  BLAKE2B_256.$metadata$ = classMeta('BLAKE2B_256', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function Keyed_init_$Init$_1(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_1.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_1(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_1(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_1.prototype));
  }
  function Keyed_1(key, salt, personalisation) {
    BLAKE2B_init_$Init$_2(key, 384, salt, personalisation, this);
  }
  Keyed_1.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  Keyed_1.prototype.toString = function () {
    return 'BLAKE2B-384';
  };
  Keyed_1.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function BLAKE2B_384() {
    BLAKE2B_init_$Init$(384, this);
  }
  BLAKE2B_384.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE2B_384.prototype.toString = function () {
    return 'BLAKE2B-384';
  };
  BLAKE2B_384.$metadata$ = classMeta('BLAKE2B_384', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function Keyed_init_$Init$_2(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_2.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_2(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_2(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_2.prototype));
  }
  function Keyed_2(key, salt, personalisation) {
    BLAKE2B_init_$Init$_2(key, 512, salt, personalisation, this);
  }
  Keyed_2.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  Keyed_2.prototype.toString = function () {
    return 'BLAKE2B-512';
  };
  Keyed_2.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function BLAKE2B_512() {
    BLAKE2B_init_$Init$(512, this);
  }
  BLAKE2B_512.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE2B_512.prototype.toString = function () {
    return 'BLAKE2B-512';
  };
  BLAKE2B_512.$metadata$ = classMeta('BLAKE2B_512', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function Keyed_init_$Init$_3(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_3.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_3(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_3(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_3.prototype));
  }
  function Keyed_3(key, salt, personalisation) {
    BLAKE2S_init_$Init$_2(key, 16, salt, personalisation, this);
  }
  Keyed_3.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function BLAKE2S_128() {
    BLAKE2S_init_$Init$(128, this);
  }
  BLAKE2S_128.prototype.toString = function () {
    return 'BLAKE2s-128';
  };
  BLAKE2S_128.$metadata$ = classMeta('BLAKE2S_128', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function Keyed_init_$Init$_4(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_4.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_4(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_4(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_4.prototype));
  }
  function Keyed_4(key, salt, personalisation) {
    BLAKE2S_init_$Init$_2(key, 20, salt, personalisation, this);
  }
  Keyed_4.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function BLAKE2S_160() {
    BLAKE2S_init_$Init$(160, this);
  }
  BLAKE2S_160.prototype.toString = function () {
    return 'BLAKE2s-160';
  };
  BLAKE2S_160.$metadata$ = classMeta('BLAKE2S_160', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function Keyed_init_$Init$_5(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_5.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_5(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_5(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_5.prototype));
  }
  function Keyed_5(key, salt, personalisation) {
    BLAKE2S_init_$Init$_2(key, 28, salt, personalisation, this);
  }
  Keyed_5.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function BLAKE2S_224() {
    BLAKE2S_init_$Init$(224, this);
  }
  BLAKE2S_224.prototype.toString = function () {
    return 'BLAKE2s-224';
  };
  BLAKE2S_224.$metadata$ = classMeta('BLAKE2S_224', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function Keyed_init_$Init$_6(key, salt, personalisation, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    Keyed_6.call($this, key, salt, personalisation);
    return $this;
  }
  function Keyed_init_$Create$_6(key, salt, personalisation, $mask0, $marker) {
    return Keyed_init_$Init$_6(key, salt, personalisation, $mask0, $marker, Object.create(Keyed_6.prototype));
  }
  function Keyed_6(key, salt, personalisation) {
    BLAKE2S_init_$Init$_2(key, 32, salt, personalisation, this);
  }
  Keyed_6.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function BLAKE2S_256() {
    BLAKE2S_init_$Init$(256, this);
  }
  BLAKE2S_256.prototype.toString = function () {
    return 'BLAKE2s-256';
  };
  BLAKE2S_256.$metadata$ = classMeta('BLAKE2S_256', undefined, undefined, undefined, undefined, BLAKE2S.prototype);
  function _get_S__7mlo4e($this) {
    return $this.S_1;
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
  function _set_c__db558i($this, _set____db54di) {
    $this.c_1 = _set____db54di;
  }
  function _get_c__7mloi6($this) {
    var tmp = $this.c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('c');
    }
  }
  function _set_d__db559d($this, _set____db54di) {
    $this.d_1 = _set____db54di;
  }
  function _get_d__7mloj1($this) {
    var tmp = $this.d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('d');
    }
  }
  function _set_l__db55g9($this, _set____db54di) {
    $this.l_1 = _set____db54di;
  }
  function _get_l__7mlopx($this) {
    return $this.l_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([41, 46, 67, 201, 162, 216, 124, 1, 61, 54, 84, 161, 236, 240, 6, 19, 98, 167, 5, 243, 192, 199, 115, 140, 152, 147, 43, 217, 188, 76, 130, 202, 30, 155, 87, 60, 253, 212, 224, 22, 103, 66, 111, 24, 138, 23, 229, 18, 190, 78, 196, 214, 218, 158, 222, 73, 160, 251, 245, 142, 187, 47, 238, 122, 169, 104, 121, 145, 21, 178, 7, 63, 148, 194, 16, 137, 11, 34, 95, 33, 128, 127, 93, 154, 90, 144, 50, 39, 53, 62, 204, 231, 191, 247, 151, 3, 255, 25, 48, 179, 72, 165, 181, 209, 215, 94, 146, 42, 172, 86, 170, 198, 79, 184, 56, 210, 150, 164, 125, 182, 118, 252, 107, 226, 156, 116, 4, 241, 69, 157, 112, 89, 100, 113, 135, 32, 134, 91, 207, 101, 230, 45, 168, 2, 27, 96, 37, 173, 174, 176, 185, 246, 28, 70, 97, 105, 52, 64, 126, 15, 85, 71, 163, 35, 221, 81, 175, 58, 195, 92, 249, 206, 186, 197, 234, 38, 44, 83, 13, 110, 133, 40, 132, 9, 211, 223, 205, 244, 65, 129, 77, 82, 106, 220, 55, 200, 108, 193, 171, 250, 36, 225, 123, 8, 12, 189, 177, 74, 120, 136, 149, 139, 227, 99, 232, 109, 233, 203, 213, 254, 59, 0, 29, 57, 242, 239, 183, 14, 102, 88, 208, 228, 166, 119, 114, 248, 235, 117, 75, 10, 49, 68, 80, 180, 143, 237, 31, 26, 219, 153, 141, 51, 159, 17, 131, 20]);
    tmp.S_1 = tmp$ret$0;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MD2() {
    Companion_getInstance();
    HashingBase.call(this);
    this.l_1 = 0;
  }
  MD2.prototype.get_digestLength_64702b_k$ = function () {
    return 16;
  };
  MD2.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 16;
  };
  MD2.prototype.doInit_ec9a0a_k$ = function () {
    this.x_1 = new Int32Array(48);
    this.c_1 = new Int32Array(16);
    this.d_1 = new Int8Array(16);
    this.engineReset_tikogs_k$();
  };
  MD2.prototype.engineReset_tikogs_k$ = function () {
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_x__7mlp09(this)[i] = 0;
        _get_c__7mloi6(this)[i] = 0;
      }
       while (inductionVariable <= 15);
    this.l_1 = 0;
  };
  MD2.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    var pending = this.flush_1m2gp0_k$();
    var inductionVariable = 0;
    var last = 16 - pending | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.update_2c9aky_k$(toByte(16 - pending | 0));
      }
       while (inductionVariable < last);
    this.flush_1m2gp0_k$();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 15)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_d__7mloj1(this)[i_0] = toByte(_get_c__7mloi6(this)[i_0]);
      }
       while (inductionVariable_0 <= 15);
    this.processBlock_6l7x9o_k$(_get_d__7mloj1(this));
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 15)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        output[outputOffset + i_1 | 0] = toByte(_get_x__7mlp09(this)[i_1]);
      }
       while (inductionVariable_1 <= 15);
  };
  MD2.prototype.processBlock_6l7x9o_k$ = function (data) {
    var tL = this.l_1;
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var u = data[i] & 255;
        _get_x__7mlp09(this)[16 + i | 0] = u;
        _get_x__7mlp09(this)[32 + i | 0] = _get_x__7mlp09(this)[i] ^ u;
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        var tmp0_let = Companion_getInstance().S_1[u ^ tL];
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
        _get_c__7mloi6(this)[i] = _get_c__7mloi6(this)[i] ^ tmp0_let;
        tmp$ret$0 = _get_c__7mloi6(this)[i];
        tmp$ret$1 = tmp$ret$0;
        tL = tmp$ret$1;
      }
       while (inductionVariable <= 15);
    this.l_1 = tL;
    var t = 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 17)
      do {
        var j = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k = 0;
        while (k < 48) {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          var tmp1_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 0 | 0] = _get_x__7mlp09(this)[k + 0 | 0] ^ tmp1_let;
          tmp$ret$2 = _get_x__7mlp09(this)[k + 0 | 0];
          tmp$ret$3 = tmp$ret$2;
          t = tmp$ret$3;
          var tmp$ret$5;
          // Inline function 'kotlin.let' call
          var tmp2_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$4;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 1 | 0] = _get_x__7mlp09(this)[k + 1 | 0] ^ tmp2_let;
          tmp$ret$4 = _get_x__7mlp09(this)[k + 1 | 0];
          tmp$ret$5 = tmp$ret$4;
          t = tmp$ret$5;
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          var tmp3_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 2 | 0] = _get_x__7mlp09(this)[k + 2 | 0] ^ tmp3_let;
          tmp$ret$6 = _get_x__7mlp09(this)[k + 2 | 0];
          tmp$ret$7 = tmp$ret$6;
          t = tmp$ret$7;
          var tmp$ret$9;
          // Inline function 'kotlin.let' call
          var tmp4_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$8;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 3 | 0] = _get_x__7mlp09(this)[k + 3 | 0] ^ tmp4_let;
          tmp$ret$8 = _get_x__7mlp09(this)[k + 3 | 0];
          tmp$ret$9 = tmp$ret$8;
          t = tmp$ret$9;
          var tmp$ret$11;
          // Inline function 'kotlin.let' call
          var tmp5_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$10;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 4 | 0] = _get_x__7mlp09(this)[k + 4 | 0] ^ tmp5_let;
          tmp$ret$10 = _get_x__7mlp09(this)[k + 4 | 0];
          tmp$ret$11 = tmp$ret$10;
          t = tmp$ret$11;
          var tmp$ret$13;
          // Inline function 'kotlin.let' call
          var tmp6_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$12;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 5 | 0] = _get_x__7mlp09(this)[k + 5 | 0] ^ tmp6_let;
          tmp$ret$12 = _get_x__7mlp09(this)[k + 5 | 0];
          tmp$ret$13 = tmp$ret$12;
          t = tmp$ret$13;
          var tmp$ret$15;
          // Inline function 'kotlin.let' call
          var tmp7_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$14;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 6 | 0] = _get_x__7mlp09(this)[k + 6 | 0] ^ tmp7_let;
          tmp$ret$14 = _get_x__7mlp09(this)[k + 6 | 0];
          tmp$ret$15 = tmp$ret$14;
          t = tmp$ret$15;
          var tmp$ret$17;
          // Inline function 'kotlin.let' call
          var tmp8_let = Companion_getInstance().S_1[t];
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$16;
          // Inline function 'io.iohk.atala.prism.apollo.hashing.MD2.processBlock.<anonymous>' call
          _get_x__7mlp09(this)[k + 7 | 0] = _get_x__7mlp09(this)[k + 7 | 0] ^ tmp8_let;
          tmp$ret$16 = _get_x__7mlp09(this)[k + 7 | 0];
          tmp$ret$17 = tmp$ret$16;
          t = tmp$ret$17;
          k = k + 8 | 0;
        }
        t = (t + j | 0) & 255;
      }
       while (inductionVariable_0 <= 17);
  };
  MD2.prototype.toString = function () {
    return 'MD2';
  };
  MD2.$metadata$ = classMeta('MD2', [HMACInterface], undefined, undefined, undefined, HashingBase.prototype);
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
  function MD4() {
    MDHelper_init_$Init$(true, 8, 0, 4, null, this);
  }
  MD4.prototype.get_digestLength_64702b_k$ = function () {
    return 16;
  };
  MD4.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  MD4.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = new Int32Array(4);
    this.engineReset_tikogs_k$();
  };
  MD4.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp(this)[0] = 1732584193;
    _get_currentVal__l92btp(this)[1] = -271733879;
    _get_currentVal__l92btp(this)[2] = -1732584194;
    _get_currentVal__l92btp(this)[3] = 271733878;
  };
  MD4.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
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
  MD4.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp(this)[0];
    var b = _get_currentVal__l92btp(this)[1];
    var c = _get_currentVal__l92btp(this)[2];
    var d = _get_currentVal__l92btp(this)[3];
    var x00 = data[0] & 255 | (data[1] & 255) << 8 | (data[2] & 255) << 16 | (data[3] & 255) << 24;
    var x01 = data[4] & 255 | (data[5] & 255) << 8 | (data[6] & 255) << 16 | (data[7] & 255) << 24;
    var x02 = data[8] & 255 | (data[9] & 255) << 8 | (data[10] & 255) << 16 | (data[11] & 255) << 24;
    var x03 = data[12] & 255 | (data[13] & 255) << 8 | (data[14] & 255) << 16 | (data[15] & 255) << 24;
    var x04 = data[16] & 255 | (data[17] & 255) << 8 | (data[18] & 255) << 16 | (data[19] & 255) << 24;
    var x05 = data[20] & 255 | (data[21] & 255) << 8 | (data[22] & 255) << 16 | (data[23] & 255) << 24;
    var x06 = data[24] & 255 | (data[25] & 255) << 8 | (data[26] & 255) << 16 | (data[27] & 255) << 24;
    var x07 = data[28] & 255 | (data[29] & 255) << 8 | (data[30] & 255) << 16 | (data[31] & 255) << 24;
    var x08 = data[32] & 255 | (data[33] & 255) << 8 | (data[34] & 255) << 16 | (data[35] & 255) << 24;
    var x09 = data[36] & 255 | (data[37] & 255) << 8 | (data[38] & 255) << 16 | (data[39] & 255) << 24;
    var x10 = data[40] & 255 | (data[41] & 255) << 8 | (data[42] & 255) << 16 | (data[43] & 255) << 24;
    var x11 = data[44] & 255 | (data[45] & 255) << 8 | (data[46] & 255) << 16 | (data[47] & 255) << 24;
    var x12 = data[48] & 255 | (data[49] & 255) << 8 | (data[50] & 255) << 16 | (data[51] & 255) << 24;
    var x13 = data[52] & 255 | (data[53] & 255) << 8 | (data[54] & 255) << 16 | (data[55] & 255) << 24;
    var x14 = data[56] & 255 | (data[57] & 255) << 8 | (data[58] & 255) << 16 | (data[59] & 255) << 24;
    var x15 = data[60] & 255 | (data[61] & 255) << 8 | (data[62] & 255) << 16 | (data[63] & 255) << 24;
    var t;
    t = (a + ((c ^ d) & b ^ d) | 0) + x00 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = (d + ((b ^ c) & a ^ c) | 0) + x01 | 0;
    d = t << 7 | (t >>> 25 | 0);
    t = (c + ((a ^ b) & d ^ b) | 0) + x02 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = (b + ((d ^ a) & c ^ a) | 0) + x03 | 0;
    b = t << 19 | (t >>> 13 | 0);
    t = (a + ((c ^ d) & b ^ d) | 0) + x04 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = (d + ((b ^ c) & a ^ c) | 0) + x05 | 0;
    d = t << 7 | (t >>> 25 | 0);
    t = (c + ((a ^ b) & d ^ b) | 0) + x06 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = (b + ((d ^ a) & c ^ a) | 0) + x07 | 0;
    b = t << 19 | (t >>> 13 | 0);
    t = (a + ((c ^ d) & b ^ d) | 0) + x08 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = (d + ((b ^ c) & a ^ c) | 0) + x09 | 0;
    d = t << 7 | (t >>> 25 | 0);
    t = (c + ((a ^ b) & d ^ b) | 0) + x10 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = (b + ((d ^ a) & c ^ a) | 0) + x11 | 0;
    b = t << 19 | (t >>> 13 | 0);
    t = (a + ((c ^ d) & b ^ d) | 0) + x12 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = (d + ((b ^ c) & a ^ c) | 0) + x13 | 0;
    d = t << 7 | (t >>> 25 | 0);
    t = (c + ((a ^ b) & d ^ b) | 0) + x14 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = (b + ((d ^ a) & c ^ a) | 0) + x15 | 0;
    b = t << 19 | (t >>> 13 | 0);
    t = ((a + (d & c | (d | c) & b) | 0) + x00 | 0) + 1518500249 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (c & b | (c | b) & a) | 0) + x04 | 0) + 1518500249 | 0;
    d = t << 5 | (t >>> 27 | 0);
    t = ((c + (b & a | (b | a) & d) | 0) + x08 | 0) + 1518500249 | 0;
    c = t << 9 | (t >>> 23 | 0);
    t = ((b + (a & d | (a | d) & c) | 0) + x12 | 0) + 1518500249 | 0;
    b = t << 13 | (t >>> 19 | 0);
    t = ((a + (d & c | (d | c) & b) | 0) + x01 | 0) + 1518500249 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (c & b | (c | b) & a) | 0) + x05 | 0) + 1518500249 | 0;
    d = t << 5 | (t >>> 27 | 0);
    t = ((c + (b & a | (b | a) & d) | 0) + x09 | 0) + 1518500249 | 0;
    c = t << 9 | (t >>> 23 | 0);
    t = ((b + (a & d | (a | d) & c) | 0) + x13 | 0) + 1518500249 | 0;
    b = t << 13 | (t >>> 19 | 0);
    t = ((a + (d & c | (d | c) & b) | 0) + x02 | 0) + 1518500249 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (c & b | (c | b) & a) | 0) + x06 | 0) + 1518500249 | 0;
    d = t << 5 | (t >>> 27 | 0);
    t = ((c + (b & a | (b | a) & d) | 0) + x10 | 0) + 1518500249 | 0;
    c = t << 9 | (t >>> 23 | 0);
    t = ((b + (a & d | (a | d) & c) | 0) + x14 | 0) + 1518500249 | 0;
    b = t << 13 | (t >>> 19 | 0);
    t = ((a + (d & c | (d | c) & b) | 0) + x03 | 0) + 1518500249 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (c & b | (c | b) & a) | 0) + x07 | 0) + 1518500249 | 0;
    d = t << 5 | (t >>> 27 | 0);
    t = ((c + (b & a | (b | a) & d) | 0) + x11 | 0) + 1518500249 | 0;
    c = t << 9 | (t >>> 23 | 0);
    t = ((b + (a & d | (a | d) & c) | 0) + x15 | 0) + 1518500249 | 0;
    b = t << 13 | (t >>> 19 | 0);
    t = ((a + (b ^ c ^ d) | 0) + x00 | 0) + 1859775393 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (a ^ b ^ c) | 0) + x08 | 0) + 1859775393 | 0;
    d = t << 9 | (t >>> 23 | 0);
    t = ((c + (d ^ a ^ b) | 0) + x04 | 0) + 1859775393 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = ((b + (c ^ d ^ a) | 0) + x12 | 0) + 1859775393 | 0;
    b = t << 15 | (t >>> 17 | 0);
    t = ((a + (b ^ c ^ d) | 0) + x02 | 0) + 1859775393 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (a ^ b ^ c) | 0) + x10 | 0) + 1859775393 | 0;
    d = t << 9 | (t >>> 23 | 0);
    t = ((c + (d ^ a ^ b) | 0) + x06 | 0) + 1859775393 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = ((b + (c ^ d ^ a) | 0) + x14 | 0) + 1859775393 | 0;
    b = t << 15 | (t >>> 17 | 0);
    t = ((a + (b ^ c ^ d) | 0) + x01 | 0) + 1859775393 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (a ^ b ^ c) | 0) + x09 | 0) + 1859775393 | 0;
    d = t << 9 | (t >>> 23 | 0);
    t = ((c + (d ^ a ^ b) | 0) + x05 | 0) + 1859775393 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = ((b + (c ^ d ^ a) | 0) + x13 | 0) + 1859775393 | 0;
    b = t << 15 | (t >>> 17 | 0);
    t = ((a + (b ^ c ^ d) | 0) + x03 | 0) + 1859775393 | 0;
    a = t << 3 | (t >>> 29 | 0);
    t = ((d + (a ^ b ^ c) | 0) + x11 | 0) + 1859775393 | 0;
    d = t << 9 | (t >>> 23 | 0);
    t = ((c + (d ^ a ^ b) | 0) + x07 | 0) + 1859775393 | 0;
    c = t << 11 | (t >>> 21 | 0);
    t = ((b + (c ^ d ^ a) | 0) + x15 | 0) + 1859775393 | 0;
    b = t << 15 | (t >>> 17 | 0);
    var tmp0_array = _get_currentVal__l92btp(this);
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + a | 0;
    var tmp2_array = _get_currentVal__l92btp(this);
    var tmp3_index0 = 1;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + b | 0;
    var tmp4_array = _get_currentVal__l92btp(this);
    var tmp5_index0 = 2;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] + c | 0;
    var tmp6_array = _get_currentVal__l92btp(this);
    var tmp7_index0 = 3;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] + d | 0;
  };
  MD4.prototype.toString = function () {
    return 'MD4';
  };
  MD4.$metadata$ = classMeta('MD4', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
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
  function _set_x__db55ql_0($this, _set____db54di) {
    $this.x_1 = _set____db54di;
  }
  function _get_x__7mlp09_0($this) {
    var tmp = $this.x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('x');
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function MD5() {
    Companion_getInstance_0();
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
    _get_currentVal__l92btp_0(this)[0] = 1732584193;
    _get_currentVal__l92btp_0(this)[1] = -271733879;
    _get_currentVal__l92btp_0(this)[2] = -1732584194;
    _get_currentVal__l92btp_0(this)[3] = 271733878;
  };
  MD5.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        MathHelper_getInstance().encodeLEInt_jts7ji_k$(_get_currentVal__l92btp_0(this)[i], output, outputOffset + imul(4, i) | 0);
      }
       while (inductionVariable <= 3);
  };
  MD5.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_0(this)[0];
    var b = _get_currentVal__l92btp_0(this)[1];
    var c = _get_currentVal__l92btp_0(this)[2];
    var d = _get_currentVal__l92btp_0(this)[3];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_x__7mlp09_0(this)[i_0] = MathHelper_getInstance().decodeLEInt_wq9yqi_k$(data, imul(4, i_0));
      }
       while (inductionVariable <= 15);
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[0] | 0) + -680876936 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[1] | 0) + -389564586 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[2] | 0) + 606105819 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[3] | 0) + -1044525330 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[4] | 0) + -176418897 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[5] | 0) + 1200080426 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[6] | 0) + -1473231341 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[7] | 0) + -45705983 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[8] | 0) + 1770035416 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[9] | 0) + -1958414417 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[10] | 0) + -42063 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[11] | 0) + -1990404162 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + f(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[12] | 0) + 1804603682 | 0, 7) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + f(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[13] | 0) + -40341101 | 0, 12) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + f(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[14] | 0) + -1502002290 | 0, 17) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + f(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[15] | 0) + 1236535329 | 0, 22) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[1] | 0) + -165796510 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[6] | 0) + -1069501632 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[11] | 0) + 643717713 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[0] | 0) + -373897302 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[5] | 0) + -701558691 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[10] | 0) + 38016083 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[15] | 0) + -660478335 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[4] | 0) + -405537848 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[9] | 0) + 568446438 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[14] | 0) + -1019803690 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[3] | 0) + -187363961 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[8] | 0) + 1163531501 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + g(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[13] | 0) + -1444681467 | 0, 5) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + g(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[2] | 0) + -51403784 | 0, 9) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + g(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[7] | 0) + 1735328473 | 0, 14) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + g(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[12] | 0) + -1926607734 | 0, 20) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[5] | 0) + -378558 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[8] | 0) + -2022574463 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[11] | 0) + 1839030562 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[14] | 0) + -35309556 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[1] | 0) + -1530992060 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[4] | 0) + 1272893353 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[7] | 0) + -155497632 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[10] | 0) + -1094730640 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[13] | 0) + 681279174 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[0] | 0) + -358537222 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[3] | 0) + -722521979 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[6] | 0) + 76029189 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + h(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[9] | 0) + -640364487 | 0, 4) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + h(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[12] | 0) + -421815835 | 0, 11) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + h(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[15] | 0) + 530742520 | 0, 16) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + h(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[2] | 0) + -995338651 | 0, 23) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[0] | 0) + -198630844 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[7] | 0) + 1126891415 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[14] | 0) + -1416354905 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[5] | 0) + -57434055 | 0, 21) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[12] | 0) + 1700485571 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[3] | 0) + -1894986606 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[10] | 0) + -1051523 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[1] | 0) + -2054922799 | 0, 21) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[8] | 0) + 1873313359 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[15] | 0) + -30611744 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[6] | 0) + -1560198380 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[13] | 0) + 1309151649 | 0, 21) | 0;
    a = b + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((a + i(Companion_getInstance_0(), b, c, d) | 0) + _get_x__7mlp09_0(this)[4] | 0) + -145523070 | 0, 6) | 0;
    d = a + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((d + i(Companion_getInstance_0(), a, b, c) | 0) + _get_x__7mlp09_0(this)[11] | 0) + -1120210379 | 0, 10) | 0;
    c = d + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((c + i(Companion_getInstance_0(), d, a, b) | 0) + _get_x__7mlp09_0(this)[2] | 0) + 718787259 | 0, 15) | 0;
    b = c + MathHelper_getInstance().circularLeftInt_ykbdyh_k$(((b + i(Companion_getInstance_0(), c, d, a) | 0) + _get_x__7mlp09_0(this)[9] | 0) + -343485551 | 0, 21) | 0;
    var tmp1_array = _get_currentVal__l92btp_0(this);
    var tmp2_index0 = 0;
    tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + a | 0;
    var tmp3_array = _get_currentVal__l92btp_0(this);
    var tmp4_index0 = 1;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0] + b | 0;
    var tmp5_array = _get_currentVal__l92btp_0(this);
    var tmp6_index0 = 2;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0] + c | 0;
    var tmp7_array = _get_currentVal__l92btp_0(this);
    var tmp8_index0 = 3;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0] + d | 0;
  };
  MD5.prototype.toString = function () {
    return 'MD5';
  };
  MD5.$metadata$ = classMeta('MD5', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
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
  function SHA0() {
    MDHelper_init_$Init$(false, 8, 0, 4, null, this);
  }
  SHA0.prototype.get_digestLength_64702b_k$ = function () {
    return 20;
  };
  SHA0.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  SHA0.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = new Int32Array(5);
    this.engineReset_tikogs_k$();
  };
  SHA0.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp_1(this)[0] = 1732584193;
    _get_currentVal__l92btp_1(this)[1] = -271733879;
    _get_currentVal__l92btp_1(this)[2] = -1732584194;
    _get_currentVal__l92btp_1(this)[3] = 271733878;
    _get_currentVal__l92btp_1(this)[4] = -1009589776;
  };
  SHA0.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var inductionVariable = 0;
    if (inductionVariable <= 4)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        MathHelper_getInstance().encodeBEInt_34z9tk_k$(_get_currentVal__l92btp_1(this)[i], output, outputOffset + imul(4, i) | 0);
      }
       while (inductionVariable <= 4);
  };
  SHA0.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_1(this)[0];
    var b = _get_currentVal__l92btp_1(this)[1];
    var c = _get_currentVal__l92btp_1(this)[2];
    var d = _get_currentVal__l92btp_1(this)[3];
    var e = _get_currentVal__l92btp_1(this)[4];
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
    w0 = wd ^ w8 ^ w2 ^ w0;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | ~a & c) | 0) + d | 0) + w0 | 0) + 1518500249 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w1 = we ^ w9 ^ w3 ^ w1;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | ~e & b) | 0) + c | 0) + w1 | 0) + 1518500249 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w2 = wf ^ wa ^ w4 ^ w2;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | ~d & a) | 0) + b | 0) + w2 | 0) + 1518500249 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w3 = w0 ^ wb ^ w5 ^ w3;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | ~c & e) | 0) + a | 0) + w3 | 0) + 1518500249 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w4 = w1 ^ wc ^ w6 ^ w4;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w4 | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w5 = w2 ^ wd ^ w7 ^ w5;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w5 | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w6 = w3 ^ we ^ w8 ^ w6;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w6 | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w7 = w4 ^ wf ^ w9 ^ w7;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w7 | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w8 = w5 ^ w0 ^ wa ^ w8;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w8 | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w9 = w6 ^ w1 ^ wb ^ w9;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w9 | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    wa = w7 ^ w2 ^ wc ^ wa;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wa | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    wb = w8 ^ w3 ^ wd ^ wb;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + wb | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    wc = w9 ^ w4 ^ we ^ wc;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + wc | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    wd = wa ^ w5 ^ wf ^ wd;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + wd | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    we = wb ^ w6 ^ w0 ^ we;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + we | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    wf = wc ^ w7 ^ w1 ^ wf;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wf | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w0 = wd ^ w8 ^ w2 ^ w0;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w0 | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w1 = we ^ w9 ^ w3 ^ w1;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w1 | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w2 = wf ^ wa ^ w4 ^ w2;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w2 | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w3 = w0 ^ wb ^ w5 ^ w3;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w3 | 0) + 1859775393 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w4 = w1 ^ wc ^ w6 ^ w4;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w4 | 0) + 1859775393 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w5 = w2 ^ wd ^ w7 ^ w5;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w5 | 0) + 1859775393 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w6 = w3 ^ we ^ w8 ^ w6;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w6 | 0) + 1859775393 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w7 = w4 ^ wf ^ w9 ^ w7;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w7 | 0) + 1859775393 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w8 = w5 ^ w0 ^ wa ^ w8;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + w8 | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w9 = w6 ^ w1 ^ wb ^ w9;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + w9 | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    wa = w7 ^ w2 ^ wc ^ wa;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + wa | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    wb = w8 ^ w3 ^ wd ^ wb;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + wb | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    wc = w9 ^ w4 ^ we ^ wc;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + wc | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    wd = wa ^ w5 ^ wf ^ wd;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + wd | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    we = wb ^ w6 ^ w0 ^ we;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + we | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    wf = wc ^ w7 ^ w1 ^ wf;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + wf | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w0 = wd ^ w8 ^ w2 ^ w0;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + w0 | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w1 = we ^ w9 ^ w3 ^ w1;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + w1 | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w2 = wf ^ wa ^ w4 ^ w2;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + w2 | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w3 = w0 ^ wb ^ w5 ^ w3;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + w3 | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w4 = w1 ^ wc ^ w6 ^ w4;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + w4 | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w5 = w2 ^ wd ^ w7 ^ w5;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + w5 | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w6 = w3 ^ we ^ w8 ^ w6;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + w6 | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w7 = w4 ^ wf ^ w9 ^ w7;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b & c | b & d | c & d) | 0) + e | 0) + w7 | 0) + -1894007588 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w8 = w5 ^ w0 ^ wa ^ w8;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a & b | a & c | b & c) | 0) + d | 0) + w8 | 0) + -1894007588 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w9 = w6 ^ w1 ^ wb ^ w9;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e & a | e & b | a & b) | 0) + c | 0) + w9 | 0) + -1894007588 | 0;
    e = e << 30 | (e >>> 2 | 0);
    wa = w7 ^ w2 ^ wc ^ wa;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d & e | d & a | e & a) | 0) + b | 0) + wa | 0) + -1894007588 | 0;
    d = d << 30 | (d >>> 2 | 0);
    wb = w8 ^ w3 ^ wd ^ wb;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c & d | c & e | d & e) | 0) + a | 0) + wb | 0) + -1894007588 | 0;
    c = c << 30 | (c >>> 2 | 0);
    wc = w9 ^ w4 ^ we ^ wc;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + wc | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    wd = wa ^ w5 ^ wf ^ wd;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wd | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    we = wb ^ w6 ^ w0 ^ we;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + we | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    wf = wc ^ w7 ^ w1 ^ wf;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + wf | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w0 = wd ^ w8 ^ w2 ^ w0;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w0 | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w1 = we ^ w9 ^ w3 ^ w1;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w1 | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w2 = wf ^ wa ^ w4 ^ w2;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w2 | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w3 = w0 ^ wb ^ w5 ^ w3;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w3 | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w4 = w1 ^ wc ^ w6 ^ w4;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w4 | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    w5 = w2 ^ wd ^ w7 ^ w5;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + w5 | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    w6 = w3 ^ we ^ w8 ^ w6;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + w6 | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    w7 = w4 ^ wf ^ w9 ^ w7;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + w7 | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    w8 = w5 ^ w0 ^ wa ^ w8;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + w8 | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    w9 = w6 ^ w1 ^ wb ^ w9;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + w9 | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    wa = w7 ^ w2 ^ wc ^ wa;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + wa | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    wb = w8 ^ w3 ^ wd ^ wb;
    e = ((((a << 5 | (a >>> 27 | 0)) + (b ^ c ^ d) | 0) + e | 0) + wb | 0) + -899497514 | 0;
    b = b << 30 | (b >>> 2 | 0);
    wc = w9 ^ w4 ^ we ^ wc;
    d = ((((e << 5 | (e >>> 27 | 0)) + (a ^ b ^ c) | 0) + d | 0) + wc | 0) + -899497514 | 0;
    a = a << 30 | (a >>> 2 | 0);
    wd = wa ^ w5 ^ wf ^ wd;
    c = ((((d << 5 | (d >>> 27 | 0)) + (e ^ a ^ b) | 0) + c | 0) + wd | 0) + -899497514 | 0;
    e = e << 30 | (e >>> 2 | 0);
    we = wb ^ w6 ^ w0 ^ we;
    b = ((((c << 5 | (c >>> 27 | 0)) + (d ^ e ^ a) | 0) + b | 0) + we | 0) + -899497514 | 0;
    d = d << 30 | (d >>> 2 | 0);
    wf = wc ^ w7 ^ w1 ^ wf;
    a = ((((b << 5 | (b >>> 27 | 0)) + (c ^ d ^ e) | 0) + a | 0) + wf | 0) + -899497514 | 0;
    c = c << 30 | (c >>> 2 | 0);
    var tmp0_array = _get_currentVal__l92btp_1(this);
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + a | 0;
    var tmp2_array = _get_currentVal__l92btp_1(this);
    var tmp3_index0 = 1;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + b | 0;
    var tmp4_array = _get_currentVal__l92btp_1(this);
    var tmp5_index0 = 2;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] + c | 0;
    var tmp6_array = _get_currentVal__l92btp_1(this);
    var tmp7_index0 = 3;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] + d | 0;
    var tmp8_array = _get_currentVal__l92btp_1(this);
    var tmp9_index0 = 4;
    tmp8_array[tmp9_index0] = tmp8_array[tmp9_index0] + e | 0;
  };
  SHA0.prototype.toString = function () {
    return 'SHA-0';
  };
  SHA0.$metadata$ = classMeta('SHA0', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _set_currentVal__66tqoh_2($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_2($this) {
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
    _get_currentVal__l92btp_2(this)[0] = 1732584193;
    _get_currentVal__l92btp_2(this)[1] = -271733879;
    _get_currentVal__l92btp_2(this)[2] = -1732584194;
    _get_currentVal__l92btp_2(this)[3] = 271733878;
    _get_currentVal__l92btp_2(this)[4] = -1009589776;
  };
  SHA1.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var inductionVariable = 0;
    if (inductionVariable <= 4)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        MathHelper_getInstance().encodeBEInt_34z9tk_k$(_get_currentVal__l92btp_2(this)[i], output, outputOffset + imul(4, i) | 0);
      }
       while (inductionVariable <= 4);
  };
  SHA1.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_2(this)[0];
    var b = _get_currentVal__l92btp_2(this)[1];
    var c = _get_currentVal__l92btp_2(this)[2];
    var d = _get_currentVal__l92btp_2(this)[3];
    var e = _get_currentVal__l92btp_2(this)[4];
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
    var tmp0_array = _get_currentVal__l92btp_2(this);
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + a | 0;
    var tmp2_array = _get_currentVal__l92btp_2(this);
    var tmp3_index0 = 1;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + b | 0;
    var tmp4_array = _get_currentVal__l92btp_2(this);
    var tmp5_index0 = 2;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] + c | 0;
    var tmp6_array = _get_currentVal__l92btp_2(this);
    var tmp7_index0 = 3;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] + d | 0;
    var tmp8_array = _get_currentVal__l92btp_2(this);
    var tmp9_index0 = 4;
    tmp8_array[tmp9_index0] = tmp8_array[tmp9_index0] + e | 0;
  };
  SHA1.prototype.toString = function () {
    return 'SHA-1';
  };
  SHA1.$metadata$ = classMeta('SHA1', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _get_K__7mlnxi($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh_3($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_3($this) {
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
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SHA224() {
    Companion_getInstance_1();
    MDHelper_init_$Init$(false, 8, 0, 4, null, this);
  }
  SHA224.prototype.get_digestLength_64702b_k$ = function () {
    return 28;
  };
  SHA224.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  SHA224.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = new Int32Array(8);
    this.w_1 = new Int32Array(64);
    this.engineReset_tikogs_k$();
  };
  SHA224.prototype.engineReset_tikogs_k$ = function () {
    this.currentVal_1 = new Int32Array(8);
    _get_currentVal__l92btp_3(this)[0] = -1056596264;
    _get_currentVal__l92btp_3(this)[1] = 914150663;
    _get_currentVal__l92btp_3(this)[2] = 812702999;
    _get_currentVal__l92btp_3(this)[3] = -150054599;
    _get_currentVal__l92btp_3(this)[4] = -4191439;
    _get_currentVal__l92btp_3(this)[5] = 1750603025;
    _get_currentVal__l92btp_3(this)[6] = 1694076839;
    _get_currentVal__l92btp_3(this)[7] = -1090891868;
  };
  SHA224.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBEInt_34z9tk_k$(_get_currentVal__l92btp_3(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 4 | 0;
    }
  };
  SHA224.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_3(this)[0];
    var b = _get_currentVal__l92btp_3(this)[1];
    var c = _get_currentVal__l92btp_3(this)[2];
    var d = _get_currentVal__l92btp_3(this)[3];
    var e = _get_currentVal__l92btp_3(this)[4];
    var f = _get_currentVal__l92btp_3(this)[5];
    var g = _get_currentVal__l92btp_3(this)[6];
    var h = _get_currentVal__l92btp_3(this)[7];
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
        var t1 = (((h + (MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 26) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 21) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 7)) | 0) + (f & e ^ g & ~e) | 0) + Companion_getInstance_1().K_1[i_1] | 0) + _get_w__7mloze(this)[i_1] | 0;
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
    var tmp3_array = _get_currentVal__l92btp_3(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0] + a | 0;
    var tmp5_array = _get_currentVal__l92btp_3(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0] + b | 0;
    var tmp7_array = _get_currentVal__l92btp_3(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0] + c | 0;
    var tmp9_array = _get_currentVal__l92btp_3(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0] + d | 0;
    var tmp11_array = _get_currentVal__l92btp_3(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0] + e | 0;
    var tmp13_array = _get_currentVal__l92btp_3(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0] + f | 0;
    var tmp15_array = _get_currentVal__l92btp_3(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0] + g | 0;
    var tmp17_array = _get_currentVal__l92btp_3(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0] + h | 0;
  };
  SHA224.prototype.toString = function () {
    return 'SHA-224';
  };
  SHA224.$metadata$ = classMeta('SHA224', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _get_K__7mlnxi_0($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh_4($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_4($this) {
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
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function SHA256() {
    Companion_getInstance_2();
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
    _get_currentVal__l92btp_4(this)[0] = 1779033703;
    _get_currentVal__l92btp_4(this)[1] = -1150833019;
    _get_currentVal__l92btp_4(this)[2] = 1013904242;
    _get_currentVal__l92btp_4(this)[3] = -1521486534;
    _get_currentVal__l92btp_4(this)[4] = 1359893119;
    _get_currentVal__l92btp_4(this)[5] = -1694144372;
    _get_currentVal__l92btp_4(this)[6] = 528734635;
    _get_currentVal__l92btp_4(this)[7] = 1541459225;
  };
  SHA256.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBEInt_34z9tk_k$(_get_currentVal__l92btp_4(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 4 | 0;
    }
  };
  SHA256.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_4(this)[0];
    var b = _get_currentVal__l92btp_4(this)[1];
    var c = _get_currentVal__l92btp_4(this)[2];
    var d = _get_currentVal__l92btp_4(this)[3];
    var e = _get_currentVal__l92btp_4(this)[4];
    var f = _get_currentVal__l92btp_4(this)[5];
    var g = _get_currentVal__l92btp_4(this)[6];
    var h = _get_currentVal__l92btp_4(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze_0(this)[i] = MathHelper_getInstance().decodeBEInt_qqshlw_k$(data, imul(4, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 63)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze_0(this)[i_0] = (((MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze_0(this)[i_0 - 2 | 0], 15) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze_0(this)[i_0 - 2 | 0], 13) ^ (_get_w__7mloze_0(this)[i_0 - 2 | 0] >>> 10 | 0)) + _get_w__7mloze_0(this)[i_0 - 7 | 0] | 0) + (MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze_0(this)[i_0 - 15 | 0], 25) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(_get_w__7mloze_0(this)[i_0 - 15 | 0], 14) ^ (_get_w__7mloze_0(this)[i_0 - 15 | 0] >>> 3 | 0)) | 0) + _get_w__7mloze_0(this)[i_0 - 16 | 0] | 0;
      }
       while (inductionVariable_0 <= 63);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 63)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var t1 = (((h + (MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 26) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 21) ^ MathHelper_getInstance().circularLeftInt_ykbdyh_k$(e, 7)) | 0) + (f & e ^ g & ~e) | 0) + Companion_getInstance_2().K_1[i_1] | 0) + _get_w__7mloze_0(this)[i_1] | 0;
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
    var tmp3_array = _get_currentVal__l92btp_4(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0] + a | 0;
    var tmp5_array = _get_currentVal__l92btp_4(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0] + b | 0;
    var tmp7_array = _get_currentVal__l92btp_4(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0] + c | 0;
    var tmp9_array = _get_currentVal__l92btp_4(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0] + d | 0;
    var tmp11_array = _get_currentVal__l92btp_4(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0] + e | 0;
    var tmp13_array = _get_currentVal__l92btp_4(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0] + f | 0;
    var tmp15_array = _get_currentVal__l92btp_4(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0] + g | 0;
    var tmp17_array = _get_currentVal__l92btp_4(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0] + h | 0;
  };
  SHA256.prototype.toString = function () {
    return 'SHA-256';
  };
  SHA256.$metadata$ = classMeta('SHA256', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _get_K__7mlnxi_1($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh_5($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_5($this) {
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
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SHA384() {
    Companion_getInstance_3();
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
    _get_currentVal__l92btp_5(this)[0] = new Long(-1056596264, -876896931);
    _get_currentVal__l92btp_5(this)[1] = new Long(914150663, 1654270250);
    _get_currentVal__l92btp_5(this)[2] = new Long(812702999, -1856437926);
    _get_currentVal__l92btp_5(this)[3] = new Long(-150054599, 355462360);
    _get_currentVal__l92btp_5(this)[4] = new Long(-4191439, 1731405415);
    _get_currentVal__l92btp_5(this)[5] = new Long(1750603025, -1900787065);
    _get_currentVal__l92btp_5(this)[6] = new Long(1694076839, -619958771);
    _get_currentVal__l92btp_5(this)[7] = new Long(-1090891868, 1203062813);
  };
  SHA384.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBELong_4kx4k4_k$(_get_currentVal__l92btp_5(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 8 | 0;
    }
  };
  SHA384.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_5(this)[0];
    var b = _get_currentVal__l92btp_5(this)[1];
    var c = _get_currentVal__l92btp_5(this)[2];
    var d = _get_currentVal__l92btp_5(this)[3];
    var e = _get_currentVal__l92btp_5(this)[4];
    var f = _get_currentVal__l92btp_5(this)[5];
    var g = _get_currentVal__l92btp_5(this)[6];
    var h = _get_currentVal__l92btp_5(this)[7];
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
        t1 = t1.plus_u6jwas_k$(Companion_getInstance_3().K_1[i_1]);
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
    var tmp3_array = _get_currentVal__l92btp_5(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0].plus_u6jwas_k$(a);
    var tmp5_array = _get_currentVal__l92btp_5(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0].plus_u6jwas_k$(b);
    var tmp7_array = _get_currentVal__l92btp_5(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0].plus_u6jwas_k$(c);
    var tmp9_array = _get_currentVal__l92btp_5(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0].plus_u6jwas_k$(d);
    var tmp11_array = _get_currentVal__l92btp_5(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0].plus_u6jwas_k$(e);
    var tmp13_array = _get_currentVal__l92btp_5(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0].plus_u6jwas_k$(f);
    var tmp15_array = _get_currentVal__l92btp_5(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0].plus_u6jwas_k$(g);
    var tmp17_array = _get_currentVal__l92btp_5(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0].plus_u6jwas_k$(h);
  };
  SHA384.prototype.toString = function () {
    return 'SHA-384';
  };
  SHA384.$metadata$ = classMeta('SHA384', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function SHA3_224() {
    KeccakDigest.call(this, 6);
  }
  SHA3_224.prototype.get_digestLength_64702b_k$ = function () {
    return 28;
  };
  SHA3_224.prototype.toString = function () {
    return 'SHA3-224';
  };
  SHA3_224.$metadata$ = classMeta('SHA3_224', [HMACInterface], undefined, undefined, undefined, KeccakDigest.prototype);
  function SHA3_256() {
    KeccakDigest.call(this, 6);
  }
  SHA3_256.prototype.get_digestLength_64702b_k$ = function () {
    return 32;
  };
  SHA3_256.prototype.toString = function () {
    return 'SHA3-256';
  };
  SHA3_256.$metadata$ = classMeta('SHA3_256', [HMACInterface], undefined, undefined, undefined, KeccakDigest.prototype);
  function SHA3_384() {
    KeccakDigest.call(this, 6);
  }
  SHA3_384.prototype.get_digestLength_64702b_k$ = function () {
    return 48;
  };
  SHA3_384.prototype.toString = function () {
    return 'SHA3-384';
  };
  SHA3_384.$metadata$ = classMeta('SHA3_384', [HMACInterface], undefined, undefined, undefined, KeccakDigest.prototype);
  function SHA3_512() {
    KeccakDigest.call(this, 6);
  }
  SHA3_512.prototype.get_digestLength_64702b_k$ = function () {
    return 64;
  };
  SHA3_512.prototype.toString = function () {
    return 'SHA3-512';
  };
  SHA3_512.$metadata$ = classMeta('SHA3_512', [HMACInterface], undefined, undefined, undefined, KeccakDigest.prototype);
  function _get_K__7mlnxi_2($this) {
    return $this.K_1;
  }
  function _set_currentVal__66tqoh_6($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_6($this) {
    var tmp = $this.currentVal_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentVal');
    }
  }
  function _set_w__db55pq_2($this, _set____db54di) {
    $this.w_1 = _set____db54di;
  }
  function _get_w__7mloze_2($this) {
    var tmp = $this.w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('w');
    }
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function SHA512() {
    Companion_getInstance_4();
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
    _get_currentVal__l92btp_6(this)[0] = new Long(-205731576, 1779033703);
    _get_currentVal__l92btp_6(this)[1] = new Long(-2067093701, -1150833019);
    _get_currentVal__l92btp_6(this)[2] = new Long(-23791573, 1013904242);
    _get_currentVal__l92btp_6(this)[3] = new Long(1595750129, -1521486534);
    _get_currentVal__l92btp_6(this)[4] = new Long(-1377402159, 1359893119);
    _get_currentVal__l92btp_6(this)[5] = new Long(725511199, -1694144372);
    _get_currentVal__l92btp_6(this)[6] = new Long(-79577749, 528734635);
    _get_currentVal__l92btp_6(this)[7] = new Long(327033209, 1541459225);
  };
  SHA512.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBELong_4kx4k4_k$(_get_currentVal__l92btp_6(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 8 | 0;
    }
  };
  SHA512.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_6(this)[0];
    var b = _get_currentVal__l92btp_6(this)[1];
    var c = _get_currentVal__l92btp_6(this)[2];
    var d = _get_currentVal__l92btp_6(this)[3];
    var e = _get_currentVal__l92btp_6(this)[4];
    var f = _get_currentVal__l92btp_6(this)[5];
    var g = _get_currentVal__l92btp_6(this)[6];
    var h = _get_currentVal__l92btp_6(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze_2(this)[i] = MathHelper_getInstance().decodeBELong_acxpw5_k$(data, imul(8, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 79)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze_2(this)[i_0] = MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_2(this)[i_0 - 2 | 0], 45).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_2(this)[i_0 - 2 | 0], 3)).xor_jjua9n_k$(_get_w__7mloze_2(this)[i_0 - 2 | 0].ushr_rr8rvr_k$(6)).plus_u6jwas_k$(_get_w__7mloze_2(this)[i_0 - 7 | 0]).plus_u6jwas_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_2(this)[i_0 - 15 | 0], 63).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_2(this)[i_0 - 15 | 0], 56)).xor_jjua9n_k$(_get_w__7mloze_2(this)[i_0 - 15 | 0].ushr_rr8rvr_k$(7))).plus_u6jwas_k$(_get_w__7mloze_2(this)[i_0 - 16 | 0]);
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
        t1 = t1.plus_u6jwas_k$(Companion_getInstance_4().K_1[i_1]);
        t1 = t1.plus_u6jwas_k$(_get_w__7mloze_2(this)[i_1]);
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
    var tmp3_array = _get_currentVal__l92btp_6(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0].plus_u6jwas_k$(a);
    var tmp5_array = _get_currentVal__l92btp_6(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0].plus_u6jwas_k$(b);
    var tmp7_array = _get_currentVal__l92btp_6(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0].plus_u6jwas_k$(c);
    var tmp9_array = _get_currentVal__l92btp_6(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0].plus_u6jwas_k$(d);
    var tmp11_array = _get_currentVal__l92btp_6(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0].plus_u6jwas_k$(e);
    var tmp13_array = _get_currentVal__l92btp_6(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0].plus_u6jwas_k$(f);
    var tmp15_array = _get_currentVal__l92btp_6(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0].plus_u6jwas_k$(g);
    var tmp17_array = _get_currentVal__l92btp_6(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0].plus_u6jwas_k$(h);
  };
  SHA512.prototype.toString = function () {
    return 'SHA-512';
  };
  SHA512.$metadata$ = classMeta('SHA512', [HMACInterface], undefined, undefined, undefined, MDHelper.prototype);
  function _set_currentVal__66tqoh_7($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_7($this) {
    var tmp = $this.currentVal_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentVal');
    }
  }
  function _set_w__db55pq_3($this, _set____db54di) {
    $this.w_1 = _set____db54di;
  }
  function _get_w__7mloze_3($this) {
    var tmp = $this.w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('w');
    }
  }
  function _get_K__7mlnxi_3($this) {
    return $this.K_1;
  }
  function _set_delegate__v6dc6q($this, _set____db54di) {
    $this.delegate_1 = _set____db54di;
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function HashHelper() {
    MDHelper_init_$Init$(false, 16, 0, 4, null, this);
  }
  HashHelper.prototype.get_digestLength_64702b_k$ = function () {
    return 64;
  };
  HashHelper.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  HashHelper.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = longArray(8);
    this.w_1 = longArray(80);
    this.engineReset_tikogs_k$();
  };
  HashHelper.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp_7(this)[0] = new Long(424955298, -1942145080);
    _get_currentVal__l92btp_7(this)[1] = new Long(-1982016298, 1944164710);
    _get_currentVal__l92btp_7(this)[2] = new Long(855612546, 502970286);
    _get_currentVal__l92btp_7(this)[3] = new Long(1479516111, 1738396948);
    _get_currentVal__l92btp_7(this)[4] = new Long(2077511080, 258812777);
    _get_currentVal__l92btp_7(this)[5] = new Long(79989058, 2011393907);
    _get_currentVal__l92btp_7(this)[6] = new Long(1780299464, 1067287976);
    _get_currentVal__l92btp_7(this)[7] = new Long(-1848208735, 286451373);
  };
  HashHelper.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBELong_4kx4k4_k$(_get_currentVal__l92btp_7(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 8 | 0;
    }
  };
  HashHelper.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_7(this)[0];
    var b = _get_currentVal__l92btp_7(this)[1];
    var c = _get_currentVal__l92btp_7(this)[2];
    var d = _get_currentVal__l92btp_7(this)[3];
    var e = _get_currentVal__l92btp_7(this)[4];
    var f = _get_currentVal__l92btp_7(this)[5];
    var g = _get_currentVal__l92btp_7(this)[6];
    var h = _get_currentVal__l92btp_7(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze_3(this)[i] = MathHelper_getInstance().decodeBELong_acxpw5_k$(data, imul(8, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 79)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze_3(this)[i_0] = MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_3(this)[i_0 - 2 | 0], 45).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_3(this)[i_0 - 2 | 0], 3)).xor_jjua9n_k$(_get_w__7mloze_3(this)[i_0 - 2 | 0].ushr_rr8rvr_k$(6)).plus_u6jwas_k$(_get_w__7mloze_3(this)[i_0 - 7 | 0]).plus_u6jwas_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_3(this)[i_0 - 15 | 0], 63).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_3(this)[i_0 - 15 | 0], 56)).xor_jjua9n_k$(_get_w__7mloze_3(this)[i_0 - 15 | 0].ushr_rr8rvr_k$(7))).plus_u6jwas_k$(_get_w__7mloze_3(this)[i_0 - 16 | 0]);
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
        t1 = t1.plus_u6jwas_k$(Companion_getInstance_5().K_1[i_1]);
        t1 = t1.plus_u6jwas_k$(_get_w__7mloze_3(this)[i_1]);
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
    var tmp3_array = _get_currentVal__l92btp_7(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0].plus_u6jwas_k$(a);
    var tmp5_array = _get_currentVal__l92btp_7(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0].plus_u6jwas_k$(b);
    var tmp7_array = _get_currentVal__l92btp_7(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0].plus_u6jwas_k$(c);
    var tmp9_array = _get_currentVal__l92btp_7(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0].plus_u6jwas_k$(d);
    var tmp11_array = _get_currentVal__l92btp_7(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0].plus_u6jwas_k$(e);
    var tmp13_array = _get_currentVal__l92btp_7(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0].plus_u6jwas_k$(f);
    var tmp15_array = _get_currentVal__l92btp_7(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0].plus_u6jwas_k$(g);
    var tmp17_array = _get_currentVal__l92btp_7(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0].plus_u6jwas_k$(h);
  };
  HashHelper.prototype.toString = function () {
    return 'SHA-512/224';
  };
  HashHelper.$metadata$ = classMeta('HashHelper', undefined, undefined, undefined, undefined, MDHelper.prototype);
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function SHA512_224() {
    Companion_getInstance_5();
    this.delegate_1 = new HashHelper();
  }
  SHA512_224.prototype.get_digestLength_64702b_k$ = function () {
    return 28;
  };
  SHA512_224.prototype.get_blockLength_ozdqi2_k$ = function () {
    return this.delegate_1.get_blockLength_ozdqi2_k$();
  };
  SHA512_224.prototype.update_2c9aky_k$ = function (input) {
    return this.delegate_1.update_2c9aky_k$(input);
  };
  SHA512_224.prototype.update_48pyh5_k$ = function (input) {
    return this.delegate_1.update_48pyh5_k$(input);
  };
  SHA512_224.prototype.update_evdvfb_k$ = function (input, offset, length) {
    return this.delegate_1.update_evdvfb_k$(input, offset, length);
  };
  SHA512_224.prototype.toString = function () {
    return 'SHA-512/224';
  };
  SHA512_224.prototype.digest_m0ziv0_k$ = function () {
    var result = this.delegate_1.digest_m0ziv0_k$();
    return sliceArray(result, until(0, this.get_digestLength_64702b_k$()));
  };
  SHA512_224.prototype.digest_g3p5dr_k$ = function (input) {
    this.update_48pyh5_k$(input);
    return this.digest_m0ziv0_k$();
  };
  SHA512_224.prototype.digest_7stlcx_k$ = function (output, offset, length) {
    var digest = this.digest_m0ziv0_k$();
    if (length < digest.length)
      throw IllegalArgumentException_init_$Create$('partial digests not returned');
    if ((output.length - offset | 0) < digest.length)
      throw IllegalArgumentException_init_$Create$('insufficient space in the output buffer to store the digest');
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = digest.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = digest;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = output;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, offset, 0, tmp0_copyInto);
    tmp$ret$4 = output;
    return digest.length;
  };
  SHA512_224.prototype.reset_5tn5dq_k$ = function () {
    return this.delegate_1.reset_5tn5dq_k$();
  };
  SHA512_224.$metadata$ = classMeta('SHA512_224', [Digest, HMACInterface]);
  function _set_currentVal__66tqoh_8($this, _set____db54di) {
    $this.currentVal_1 = _set____db54di;
  }
  function _get_currentVal__l92btp_8($this) {
    var tmp = $this.currentVal_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentVal');
    }
  }
  function _set_w__db55pq_4($this, _set____db54di) {
    $this.w_1 = _set____db54di;
  }
  function _get_w__7mloze_4($this) {
    var tmp = $this.w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('w');
    }
  }
  function _get_K__7mlnxi_4($this) {
    return $this.K_1;
  }
  function _set_delegate__v6dc6q_0($this, _set____db54di) {
    $this.delegate_1 = _set____db54di;
  }
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function HashHelper_0() {
    MDHelper_init_$Init$(false, 16, 0, 4, null, this);
  }
  HashHelper_0.prototype.get_digestLength_64702b_k$ = function () {
    return 64;
  };
  HashHelper_0.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  HashHelper_0.prototype.doInit_ec9a0a_k$ = function () {
    this.currentVal_1 = longArray(8);
    this.w_1 = longArray(80);
    this.engineReset_tikogs_k$();
  };
  HashHelper_0.prototype.engineReset_tikogs_k$ = function () {
    _get_currentVal__l92btp_8(this)[0] = new Long(-64227540, 573645204);
    _get_currentVal__l92btp_8(this)[1] = new Long(-934517566, -1621794909);
    _get_currentVal__l92btp_8(this)[2] = new Long(1867755857, 596883563);
    _get_currentVal__l92btp_8(this)[3] = new Long(1497426621, -1774684391);
    _get_currentVal__l92btp_8(this)[4] = new Long(-1467023389, -1775747358);
    _get_currentVal__l92btp_8(this)[5] = new Long(1401305490, -1101128155);
    _get_currentVal__l92btp_8(this)[6] = new Long(746961066, 721525244);
    _get_currentVal__l92btp_8(this)[7] = new Long(-2117784414, 246885852);
  };
  HashHelper_0.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    this.makeMDPadding_p11qth_k$();
    var olen = this.get_digestLength_64702b_k$();
    var i = 0;
    var j = 0;
    while (j < olen) {
      MathHelper_getInstance().encodeBELong_4kx4k4_k$(_get_currentVal__l92btp_8(this)[i], output, outputOffset + j | 0);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      j = j + 8 | 0;
    }
  };
  HashHelper_0.prototype.processBlock_6l7x9o_k$ = function (data) {
    var a = _get_currentVal__l92btp_8(this)[0];
    var b = _get_currentVal__l92btp_8(this)[1];
    var c = _get_currentVal__l92btp_8(this)[2];
    var d = _get_currentVal__l92btp_8(this)[3];
    var e = _get_currentVal__l92btp_8(this)[4];
    var f = _get_currentVal__l92btp_8(this)[5];
    var g = _get_currentVal__l92btp_8(this)[6];
    var h = _get_currentVal__l92btp_8(this)[7];
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_w__7mloze_4(this)[i] = MathHelper_getInstance().decodeBELong_acxpw5_k$(data, imul(8, i));
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 <= 79)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        _get_w__7mloze_4(this)[i_0] = MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_4(this)[i_0 - 2 | 0], 45).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_4(this)[i_0 - 2 | 0], 3)).xor_jjua9n_k$(_get_w__7mloze_4(this)[i_0 - 2 | 0].ushr_rr8rvr_k$(6)).plus_u6jwas_k$(_get_w__7mloze_4(this)[i_0 - 7 | 0]).plus_u6jwas_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_4(this)[i_0 - 15 | 0], 63).xor_jjua9n_k$(MathHelper_getInstance().circularLeftLong_httfqt_k$(_get_w__7mloze_4(this)[i_0 - 15 | 0], 56)).xor_jjua9n_k$(_get_w__7mloze_4(this)[i_0 - 15 | 0].ushr_rr8rvr_k$(7))).plus_u6jwas_k$(_get_w__7mloze_4(this)[i_0 - 16 | 0]);
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
        t1 = t1.plus_u6jwas_k$(Companion_getInstance_6().K_1[i_1]);
        t1 = t1.plus_u6jwas_k$(_get_w__7mloze_4(this)[i_1]);
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
    var tmp3_array = _get_currentVal__l92btp_8(this);
    var tmp4_index0 = 0;
    tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0].plus_u6jwas_k$(a);
    var tmp5_array = _get_currentVal__l92btp_8(this);
    var tmp6_index0 = 1;
    tmp5_array[tmp6_index0] = tmp5_array[tmp6_index0].plus_u6jwas_k$(b);
    var tmp7_array = _get_currentVal__l92btp_8(this);
    var tmp8_index0 = 2;
    tmp7_array[tmp8_index0] = tmp7_array[tmp8_index0].plus_u6jwas_k$(c);
    var tmp9_array = _get_currentVal__l92btp_8(this);
    var tmp10_index0 = 3;
    tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0].plus_u6jwas_k$(d);
    var tmp11_array = _get_currentVal__l92btp_8(this);
    var tmp12_index0 = 4;
    tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0].plus_u6jwas_k$(e);
    var tmp13_array = _get_currentVal__l92btp_8(this);
    var tmp14_index0 = 5;
    tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0].plus_u6jwas_k$(f);
    var tmp15_array = _get_currentVal__l92btp_8(this);
    var tmp16_index0 = 6;
    tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0].plus_u6jwas_k$(g);
    var tmp17_array = _get_currentVal__l92btp_8(this);
    var tmp18_index0 = 7;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0].plus_u6jwas_k$(h);
  };
  HashHelper_0.prototype.toString = function () {
    return 'SHA-512/256';
  };
  HashHelper_0.$metadata$ = classMeta('HashHelper', undefined, undefined, undefined, undefined, MDHelper.prototype);
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-685199838, 1116352408), new Long(602891725, 1899447441), new Long(-330482897, -1245643825), new Long(-2121671748, -373957723), new Long(-213338824, 961987163), new Long(-1241133031, 1508970993), new Long(-1357295717, -1841331548), new Long(-630357736, -1424204075), new Long(-1560083902, -670586216), new Long(1164996542, 310598401), new Long(1323610764, 607225278), new Long(-704662302, 1426881987), new Long(-226784913, 1925078388), new Long(991336113, -2132889090), new Long(633803317, -1680079193), new Long(-815192428, -1046744716), new Long(-1628353838, -459576895), new Long(944711139, -272742522), new Long(-1953704523, 264347078), new Long(2007800933, 604807628), new Long(1495990901, 770255983), new Long(1856431235, 1249150122), new Long(-1119749164, 1555081692), new Long(-2096016459, 1996064986), new Long(-295247957, -1740746414), new Long(766784016, -1473132947), new Long(-1728372417, -1341970488), new Long(-1091629340, -1084653625), new Long(1034457026, -958395405), new Long(-1828018395, -710438585), new Long(-536640913, 113926993), new Long(168717936, 338241895), new Long(1188179964, 666307205), new Long(1546045734, 773529912), new Long(1522805485, 1294757372), new Long(-1651133473, 1396182291), new Long(-1951439906, 1695183700), new Long(1014477480, 1986661051), new Long(1206759142, -2117940946), new Long(344077627, -1838011259), new Long(1290863460, -1564481375), new Long(-1136513023, -1474664885), new Long(-789014639, -1035236496), new Long(106217008, -949202525), new Long(-688958952, -778901479), new Long(1432725776, -694614492), new Long(1467031594, -200395387), new Long(851169720, 275423344), new Long(-1194143544, 430227734), new Long(1363258195, 506948616), new Long(-544281703, 659060556), new Long(-509917016, 883997877), new Long(-976659869, 958139571), new Long(-482243893, 1322822218), new Long(2003034995, 1537002063), new Long(-692930397, 1747873779), new Long(1575990012, 1955562222), new Long(1125592928, 2024104815), new Long(-1578062990, -2067236844), new Long(442776044, -1933114872), new Long(593698344, -1866530822), new Long(-561857047, -1538233109), new Long(-1295615723, -1090935817), new Long(-479046869, -965641998), new Long(-366583396, -903397682), new Long(566280711, -779700025), new Long(-840897762, -354779690), new Long(-294727304, -176337025), new Long(1914138554, 116418474), new Long(-1563912026, 174292421), new Long(-1090974290, 289380356), new Long(320620315, 460393269), new Long(587496836, 685471733), new Long(1086792851, 852142971), new Long(365543100, 1017036298), new Long(-1676669620, 1126000580), new Long(-885112138, 1288033470), new Long(-60457430, 1501505948), new Long(987167468, 1607167915), new Long(1246189591, 1816402316)]);
    tmp.K_1 = tmp$ret$0;
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function SHA512_256() {
    Companion_getInstance_6();
    this.delegate_1 = new HashHelper_0();
  }
  SHA512_256.prototype.get_digestLength_64702b_k$ = function () {
    return 32;
  };
  SHA512_256.prototype.get_blockLength_ozdqi2_k$ = function () {
    return this.delegate_1.get_blockLength_ozdqi2_k$();
  };
  SHA512_256.prototype.toString = function () {
    return 'SHA-512/256';
  };
  SHA512_256.prototype.update_2c9aky_k$ = function (input) {
    return this.delegate_1.update_2c9aky_k$(input);
  };
  SHA512_256.prototype.update_48pyh5_k$ = function (input) {
    return this.delegate_1.update_48pyh5_k$(input);
  };
  SHA512_256.prototype.update_evdvfb_k$ = function (input, offset, length) {
    return this.delegate_1.update_evdvfb_k$(input, offset, length);
  };
  SHA512_256.prototype.digest_m0ziv0_k$ = function () {
    var result = this.delegate_1.digest_m0ziv0_k$();
    return sliceArray(result, until(0, this.get_digestLength_64702b_k$()));
  };
  SHA512_256.prototype.digest_g3p5dr_k$ = function (input) {
    this.update_48pyh5_k$(input);
    return this.digest_m0ziv0_k$();
  };
  SHA512_256.prototype.digest_7stlcx_k$ = function (output, offset, length) {
    var digest = this.digest_m0ziv0_k$();
    if (length < digest.length)
      throw IllegalArgumentException_init_$Create$('partial digests not returned');
    if ((output.length - offset | 0) < digest.length)
      throw IllegalArgumentException_init_$Create$('insufficient space in the output buffer to store the digest');
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = digest.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = digest;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = output;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, offset, 0, tmp0_copyInto);
    tmp$ret$4 = output;
    return digest.length;
  };
  SHA512_256.prototype.reset_5tn5dq_k$ = function () {
    return this.delegate_1.reset_5tn5dq_k$();
  };
  SHA512_256.$metadata$ = classMeta('SHA512_256', [Digest, HMACInterface]);
  function Keyed_init_$Init$_7(key, salt, personalisation, outputSizeBits, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      salt = null;
    if (!(($mask0 & 4) === 0))
      personalisation = null;
    if (!(($mask0 & 8) === 0))
      outputSizeBits = 512;
    Keyed_7.call($this, key, salt, personalisation, outputSizeBits);
    return $this;
  }
  function Keyed_init_$Create$_7(key, salt, personalisation, outputSizeBits, $mask0, $marker) {
    return Keyed_init_$Init$_7(key, salt, personalisation, outputSizeBits, $mask0, $marker, Object.create(Keyed_7.prototype));
  }
  function _get_blake2b_IV__vbeq5c($this) {
    return $this.blake2b_IV_1;
  }
  function _get_blake2b_sigma__8fvopi($this) {
    return $this.blake2b_sigma_1;
  }
  function _get_ROUNDS__1juy2u($this) {
    return $this.ROUNDS_1;
  }
  function _set_digestSize__mz828i($this, _set____db54di) {
    $this.digestSize_1 = _set____db54di;
  }
  function _get_digestSize__7wzh3a($this) {
    return $this.digestSize_1;
  }
  function _set_keyLength__rc2728($this, _set____db54di) {
    $this.keyLength_1 = _set____db54di;
  }
  function _get_keyLength__ee7eic($this) {
    return $this.keyLength_1;
  }
  function _set_salt__9tr3r5($this, _set____db54di) {
    $this.salt_1 = _set____db54di;
  }
  function _get_salt__ddj3cl($this) {
    return $this.salt_1;
  }
  function _set_personalization__cgm869($this, _set____db54di) {
    $this.personalization_1 = _set____db54di;
  }
  function _get_personalization__mkcfot($this) {
    return $this.personalization_1;
  }
  function _set_key__4w8w3q($this, _set____db54di) {
    $this.key_1 = _set____db54di;
  }
  function _get_key__e6bh8y($this) {
    return $this.key_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_bufferPos__jel8rz($this, _set____db54di) {
    $this.bufferPos_1 = _set____db54di;
  }
  function _get_bufferPos__9w97ml($this) {
    return $this.bufferPos_1;
  }
  function _get_internalState__g3y4ql($this) {
    return $this.internalState_1;
  }
  function _set_chainValue__kwseqh($this, _set____db54di) {
    $this.chainValue_1 = _set____db54di;
  }
  function _get_chainValue__z2323f($this) {
    return $this.chainValue_1;
  }
  function _set_t0__dl8h7p($this, _set____db54di) {
    $this.t0__1 = _set____db54di;
  }
  function _get_t0__ndca1b($this) {
    return $this.t0__1;
  }
  function _set_t1__dl8h6u($this, _set____db54di) {
    $this.t1__1 = _set____db54di;
  }
  function _get_t1__ndca26($this) {
    return $this.t1__1;
  }
  function _set_f0__dl8rlf($this, _set____db54di) {
    $this.f0__1 = _set____db54di;
  }
  function _get_f0__ndbznl($this) {
    return $this.f0__1;
  }
  function BLAKE2B_init_$Init$(digestSize, $this) {
    BLAKE2B.call($this);
    if ((digestSize < 8 ? true : digestSize > 512) ? true : !((digestSize % 8 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('BLAKE2b digest bit length must be a multiple of 8 and not greater than 512');
    }
    $this.buffer_1 = new Int8Array($this.get_blockLength_ozdqi2_k$());
    $this.keyLength_1 = 0;
    $this.digestSize_1 = digestSize / 8 | 0;
    init($this);
    return $this;
  }
  function BLAKE2B_init_$Create$(digestSize) {
    return BLAKE2B_init_$Init$(digestSize, Object.create(BLAKE2B.prototype));
  }
  function BLAKE2B_init_$Init$_0(digestSize, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      digestSize = 512;
    BLAKE2B_init_$Init$(digestSize, $this);
    return $this;
  }
  function BLAKE2B_init_$Create$_0(digestSize, $mask0, $marker) {
    return BLAKE2B_init_$Init$_0(digestSize, $mask0, $marker, Object.create(BLAKE2B.prototype));
  }
  function BLAKE2B_init_$Init$_1(key, $this) {
    BLAKE2B.call($this);
    $this.buffer_1 = new Int8Array($this.get_blockLength_ozdqi2_k$());
    if (!(key == null)) {
      var tmp = $this;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = new Int8Array(key.length);
      var tmp1_copyInto = key.length;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = key;
      tmp$ret$1 = tmp$ret$0;
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp_0, tmp$ret$3, 0, 0, tmp1_copyInto);
      tmp$ret$4 = tmp0_copyInto;
      tmp.key_1 = tmp$ret$4;
      if (key.length > 64) {
        throw IllegalArgumentException_init_$Create$('Keys > 64 are not supported');
      }
      $this.keyLength_1 = key.length;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = ensureNotNull($this.buffer_1);
      var tmp3_copyInto = key.length;
      var tmp$ret$6;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = key;
      tmp$ret$6 = tmp$ret$5;
      var tmp_1 = tmp$ret$6;
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp2_copyInto;
      tmp$ret$8 = tmp$ret$7;
      arrayCopy(tmp_1, tmp$ret$8, 0, 0, tmp3_copyInto);
      tmp$ret$9 = tmp2_copyInto;
      $this.bufferPos_1 = $this.get_blockLength_ozdqi2_k$();
    }
    $this.digestSize_1 = 64;
    init($this);
    return $this;
  }
  function BLAKE2B_init_$Create$_1(key) {
    return BLAKE2B_init_$Init$_1(key, Object.create(BLAKE2B.prototype));
  }
  function BLAKE2B_init_$Init$_2(key, digestSize, salt, personalization, $this) {
    BLAKE2B.call($this);
    if ((digestSize < 8 ? true : digestSize > 512) ? true : !((digestSize % 8 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('BLAKE2b digest bit length must be a multiple of 8 and not greater than 512');
    }
    $this.digestSize_1 = digestSize / 8 | 0;
    $this.buffer_1 = new Int8Array($this.get_blockLength_ozdqi2_k$());
    if (!(salt == null)) {
      if (!(salt.length === 16)) {
        throw IllegalArgumentException_init_$Create$('salt length must be exactly 16 bytes');
      }
      var tmp = $this;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = new Int8Array(16);
      var tmp1_copyInto = salt.length;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = salt;
      tmp$ret$1 = tmp$ret$0;
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp_0, tmp$ret$3, 0, 0, tmp1_copyInto);
      tmp$ret$4 = tmp0_copyInto;
      tmp.salt_1 = tmp$ret$4;
    }
    if (!(personalization == null)) {
      if (!(personalization.length === 16)) {
        throw IllegalArgumentException_init_$Create$('personalization length must be exactly 16 bytes');
      }
      var tmp_1 = $this;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = new Int8Array(16);
      var tmp3_copyInto = personalization.length;
      var tmp$ret$6;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = personalization;
      tmp$ret$6 = tmp$ret$5;
      var tmp_2 = tmp$ret$6;
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp2_copyInto;
      tmp$ret$8 = tmp$ret$7;
      arrayCopy(tmp_2, tmp$ret$8, 0, 0, tmp3_copyInto);
      tmp$ret$9 = tmp2_copyInto;
      tmp_1.personalization_1 = tmp$ret$9;
    }
    if (!(key == null)) {
      var tmp_3 = $this;
      var tmp$ret$14;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = new Int8Array(key.length);
      var tmp5_copyInto = key.length;
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = key;
      tmp$ret$11 = tmp$ret$10;
      var tmp_4 = tmp$ret$11;
      var tmp$ret$13;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$12 = tmp4_copyInto;
      tmp$ret$13 = tmp$ret$12;
      arrayCopy(tmp_4, tmp$ret$13, 0, 0, tmp5_copyInto);
      tmp$ret$14 = tmp4_copyInto;
      tmp_3.key_1 = tmp$ret$14;
      if (key.length > 64) {
        throw IllegalArgumentException_init_$Create$('Keys > 64 are not supported');
      }
      $this.keyLength_1 = key.length;
      var tmp$ret$19;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = ensureNotNull($this.buffer_1);
      var tmp7_copyInto = key.length;
      var tmp$ret$16;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$15;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$15 = key;
      tmp$ret$16 = tmp$ret$15;
      var tmp_5 = tmp$ret$16;
      var tmp$ret$18;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$17;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$17 = tmp6_copyInto;
      tmp$ret$18 = tmp$ret$17;
      arrayCopy(tmp_5, tmp$ret$18, 0, 0, tmp7_copyInto);
      tmp$ret$19 = tmp6_copyInto;
      $this.bufferPos_1 = $this.get_blockLength_ozdqi2_k$();
    }
    init($this);
    return $this;
  }
  function BLAKE2B_init_$Create$_2(key, digestSize, salt, personalization) {
    return BLAKE2B_init_$Init$_2(key, digestSize, salt, personalization, Object.create(BLAKE2B.prototype));
  }
  function initializeInternalState($this) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = ensureNotNull($this.chainValue_1);
    var tmp1_copyInto = $this.internalState_1;
    var tmp2_copyInto = ensureNotNull($this.chainValue_1).length;
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
    tmp$ret$2 = tmp1_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto);
    tmp$ret$4 = tmp1_copyInto;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = Companion_getInstance_7().blake2b_IV_1;
    var tmp4_copyInto = $this.internalState_1;
    var tmp5_copyInto = ensureNotNull($this.chainValue_1).length;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp3_copyInto;
    tmp$ret$6 = tmp$ret$5;
    var tmp_0 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = tmp4_copyInto;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, tmp5_copyInto, 0, 4);
    tmp$ret$9 = tmp4_copyInto;
    $this.internalState_1[12] = $this.t0__1.xor_jjua9n_k$(Companion_getInstance_7().blake2b_IV_1[4]);
    $this.internalState_1[13] = $this.t1__1.xor_jjua9n_k$(Companion_getInstance_7().blake2b_IV_1[5]);
    $this.internalState_1[14] = $this.f0__1.xor_jjua9n_k$(Companion_getInstance_7().blake2b_IV_1[6]);
    $this.internalState_1[15] = Companion_getInstance_7().blake2b_IV_1[7];
  }
  function init($this) {
    if ($this.chainValue_1 == null) {
      $this.chainValue_1 = longArray(8);
      ensureNotNull($this.chainValue_1)[0] = Companion_getInstance_7().blake2b_IV_1[0].xor_jjua9n_k$(toLong($this.digestSize_1).or_s401rn_k$(toLong($this.keyLength_1).shl_po5ip6_k$(8)).or_s401rn_k$(new Long(16842752, 0)));
      ensureNotNull($this.chainValue_1)[1] = Companion_getInstance_7().blake2b_IV_1[1];
      ensureNotNull($this.chainValue_1)[2] = Companion_getInstance_7().blake2b_IV_1[2];
      ensureNotNull($this.chainValue_1)[3] = Companion_getInstance_7().blake2b_IV_1[3];
      ensureNotNull($this.chainValue_1)[4] = Companion_getInstance_7().blake2b_IV_1[4];
      ensureNotNull($this.chainValue_1)[5] = Companion_getInstance_7().blake2b_IV_1[5];
      if (!($this.salt_1 == null)) {
        ensureNotNull($this.chainValue_1)[4] = ensureNotNull($this.chainValue_1)[4].xor_jjua9n_k$(MathHelper_getInstance().decodeLELong_h6cp29_k$(ensureNotNull($this.salt_1), 0));
        ensureNotNull($this.chainValue_1)[5] = ensureNotNull($this.chainValue_1)[5].xor_jjua9n_k$(MathHelper_getInstance().decodeLELong_h6cp29_k$(ensureNotNull($this.salt_1), 8));
      }
      ensureNotNull($this.chainValue_1)[6] = Companion_getInstance_7().blake2b_IV_1[6];
      ensureNotNull($this.chainValue_1)[7] = Companion_getInstance_7().blake2b_IV_1[7];
      if (!($this.personalization_1 == null)) {
        ensureNotNull($this.chainValue_1)[6] = ensureNotNull($this.chainValue_1)[6].xor_jjua9n_k$(MathHelper_getInstance().decodeLELong_h6cp29_k$(ensureNotNull($this.personalization_1), 0));
        ensureNotNull($this.chainValue_1)[7] = ensureNotNull($this.chainValue_1)[7].xor_jjua9n_k$(MathHelper_getInstance().decodeLELong_h6cp29_k$(ensureNotNull($this.personalization_1), 8));
      }
    }
  }
  function g_0($this, m1, m2, posA, posB, posC, posD) {
    $this.internalState_1[posA] = $this.internalState_1[posA].plus_u6jwas_k$($this.internalState_1[posB]).plus_u6jwas_k$(m1);
    $this.internalState_1[posD] = MathHelper_getInstance().circularRightLong_8bf1eq_k$($this.internalState_1[posD].xor_jjua9n_k$($this.internalState_1[posA]), 32);
    $this.internalState_1[posC] = $this.internalState_1[posC].plus_u6jwas_k$($this.internalState_1[posD]);
    $this.internalState_1[posB] = MathHelper_getInstance().circularRightLong_8bf1eq_k$($this.internalState_1[posB].xor_jjua9n_k$($this.internalState_1[posC]), 24);
    $this.internalState_1[posA] = $this.internalState_1[posA].plus_u6jwas_k$($this.internalState_1[posB]).plus_u6jwas_k$(m2);
    $this.internalState_1[posD] = MathHelper_getInstance().circularRightLong_8bf1eq_k$($this.internalState_1[posD].xor_jjua9n_k$($this.internalState_1[posA]), 16);
    $this.internalState_1[posC] = $this.internalState_1[posC].plus_u6jwas_k$($this.internalState_1[posD]);
    $this.internalState_1[posB] = MathHelper_getInstance().circularRightLong_8bf1eq_k$($this.internalState_1[posB].xor_jjua9n_k$($this.internalState_1[posC]), 63);
  }
  function compress($this, message, messagePos) {
    initializeInternalState($this);
    var m = longArray(16);
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        m[j] = MathHelper_getInstance().decodeLELong_h6cp29_k$(message, messagePos + imul(j, 8) | 0);
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 0;
    Companion_getInstance_7();
    var last = 12;
    if (inductionVariable_0 < last)
      do {
        var round = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][0]], m[Companion_getInstance_7().blake2b_sigma_1[round][1]], 0, 4, 8, 12);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][2]], m[Companion_getInstance_7().blake2b_sigma_1[round][3]], 1, 5, 9, 13);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][4]], m[Companion_getInstance_7().blake2b_sigma_1[round][5]], 2, 6, 10, 14);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][6]], m[Companion_getInstance_7().blake2b_sigma_1[round][7]], 3, 7, 11, 15);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][8]], m[Companion_getInstance_7().blake2b_sigma_1[round][9]], 0, 5, 10, 15);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][10]], m[Companion_getInstance_7().blake2b_sigma_1[round][11]], 1, 6, 11, 12);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][12]], m[Companion_getInstance_7().blake2b_sigma_1[round][13]], 2, 7, 8, 13);
        g_0($this, m[Companion_getInstance_7().blake2b_sigma_1[round][14]], m[Companion_getInstance_7().blake2b_sigma_1[round][15]], 3, 4, 9, 14);
      }
       while (inductionVariable_0 < last);
    var inductionVariable_1 = 0;
    var last_0 = ensureNotNull($this.chainValue_1).length - 1 | 0;
    if (inductionVariable_1 <= last_0)
      do {
        var offset = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        ensureNotNull($this.chainValue_1)[offset] = ensureNotNull($this.chainValue_1)[offset].xor_jjua9n_k$($this.internalState_1[offset]).xor_jjua9n_k$($this.internalState_1[offset + 8 | 0]);
      }
       while (inductionVariable_1 <= last_0);
  }
  function Keyed_7(key, salt, personalisation, outputSizeBits) {
    BLAKE2B_init_$Init$_2(key, outputSizeBits << 3, salt, personalisation, this);
  }
  Keyed_7.$metadata$ = classMeta('Keyed', undefined, undefined, undefined, undefined, BLAKE2B.prototype);
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(-205731576, 1779033703), new Long(-2067093701, -1150833019), new Long(-23791573, 1013904242), new Long(1595750129, -1521486534), new Long(-1377402159, 1359893119), new Long(725511199, -1694144372), new Long(-79577749, 528734635), new Long(327033209, 1541459225)]);
    tmp.blake2b_IV_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$15;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$1 = new Int8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    var tmp_1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$2 = new Int8Array([14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]);
    var tmp_2 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$3 = new Int8Array([11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4]);
    var tmp_3 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$4 = new Int8Array([7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8]);
    var tmp_4 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$5 = new Int8Array([9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13]);
    var tmp_5 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$6 = new Int8Array([2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]);
    var tmp_6 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$7 = new Int8Array([12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11]);
    var tmp_7 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$8 = new Int8Array([13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10]);
    var tmp_8 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$9 = new Int8Array([6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5]);
    var tmp_9 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$10 = new Int8Array([10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]);
    var tmp_10 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$11 = new Int8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    var tmp_11 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$12 = new Int8Array([14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]);
    var tmp0_arrayOf = [tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp$ret$12];
    var tmp$ret$14;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$13 = tmp0_arrayOf;
    tmp$ret$14 = tmp$ret$13;
    tmp$ret$15 = tmp$ret$14;
    tmp_0.blake2b_sigma_1 = tmp$ret$15;
    this.ROUNDS_1 = 12;
  }
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  BLAKE2B.prototype.get_digestLength_64702b_k$ = function () {
    return this.digestSize_1;
  };
  BLAKE2B.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE2B.prototype.clearKey_jpijr5_k$ = function () {
    if (!(this.key_1 == null)) {
      var tmp0_safe_receiver = this.key_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        fill$default(tmp0_safe_receiver, 0, 0, 0, 6, null);
      }
      var tmp1_safe_receiver = this.buffer_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        fill$default(tmp1_safe_receiver, 0, 0, 0, 6, null);
      }
    }
  };
  BLAKE2B.prototype.clearSalt_rit69e_k$ = function () {
    if (!(this.salt_1 == null)) {
      var tmp0_safe_receiver = this.salt_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        fill$default(tmp0_safe_receiver, 0, 0, 0, 6, null);
      }
    }
  };
  BLAKE2B.prototype.doFinal_l87dne_k$ = function (out, outOffset) {
    this.f0__1 = new Long(-1, -1);
    var tmp0_this = this;
    tmp0_this.t0__1 = tmp0_this.t0__1.plus_u6jwas_k$(toLong(this.bufferPos_1));
    if (this.bufferPos_1 > 0 ? this.t0__1.equals(new Long(0, 0)) : false) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.t1__1;
      tmp1_this.t1__1 = tmp2.inc_28ke_k$();
    }
    compress(this, ensureNotNull(this.buffer_1), 0);
    var tmp3_safe_receiver = this.buffer_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      fill$default(tmp3_safe_receiver, 0, 0, 0, 6, null);
    }
    var tmp = new Long(0, 0);
    fill$default_0(this.internalState_1, tmp, 0, 0, 6, null);
    var i = 0;
    while (i < ensureNotNull(this.chainValue_1).length ? imul(i, 8) < this.digestSize_1 : false) {
      var bytes = new Int8Array(8);
      MathHelper_getInstance().encodeLELong_jfxdem_k$(ensureNotNull(this.chainValue_1)[i], bytes, 0);
      if (imul(i, 8) < (this.digestSize_1 - 8 | 0)) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = ensureNotNull(out);
        var tmp1_copyInto = outOffset + imul(i, 8) | 0;
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
        tmp$ret$2 = tmp0_copyInto;
        tmp$ret$3 = tmp$ret$2;
        arrayCopy(tmp_0, tmp$ret$3, tmp1_copyInto, 0, 8);
        tmp$ret$4 = tmp0_copyInto;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp2_copyInto = ensureNotNull(out);
        var tmp3_copyInto = outOffset + imul(i, 8) | 0;
        var tmp4_copyInto = this.digestSize_1 - imul(i, 8) | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$5 = bytes;
        tmp$ret$6 = tmp$ret$5;
        var tmp_1 = tmp$ret$6;
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = tmp2_copyInto;
        tmp$ret$8 = tmp$ret$7;
        arrayCopy(tmp_1, tmp$ret$8, tmp3_copyInto, 0, tmp4_copyInto);
        tmp$ret$9 = tmp2_copyInto;
      }
      var tmp4 = i;
      i = tmp4 + 1 | 0;
    }
    var tmp5_safe_receiver = this.chainValue_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp_2 = new Long(0, 0);
      fill$default_0(tmp5_safe_receiver, tmp_2, 0, 0, 6, null);
    }
    this.reset_5tn5dq_k$();
    return this.digestSize_1;
  };
  BLAKE2B.prototype.update_48pyh5_k$ = function (input) {
    this.update_evdvfb_k$(input, 0, input.length);
  };
  BLAKE2B.prototype.update_2c9aky_k$ = function (input) {
    var remainingLength = this.get_blockLength_ozdqi2_k$() - this.bufferPos_1 | 0;
    if (remainingLength === 0) {
      var tmp0_this = this;
      tmp0_this.t0__1 = tmp0_this.t0__1.plus_u6jwas_k$(toLong(this.get_blockLength_ozdqi2_k$()));
      if (this.t0__1.equals(new Long(0, 0))) {
        var tmp1_this = this;
        var tmp2 = tmp1_this.t1__1;
        tmp1_this.t1__1 = tmp2.inc_28ke_k$();
      }
      compress(this, ensureNotNull(this.buffer_1), 0);
      var tmp = ensureNotNull(this.buffer_1);
      fill$default(tmp, 0, 0, 0, 6, null);
      ensureNotNull(this.buffer_1)[0] = input;
      this.bufferPos_1 = 1;
    } else {
      ensureNotNull(this.buffer_1)[this.bufferPos_1] = input;
      var tmp3_this = this;
      var tmp4 = tmp3_this.bufferPos_1;
      tmp3_this.bufferPos_1 = tmp4 + 1 | 0;
      return Unit_getInstance();
    }
  };
  BLAKE2B.prototype.update_evdvfb_k$ = function (input, offset, length) {
    if (length === 0) {
      return Unit_getInstance();
    }
    var remainingLength = 0;
    if (!(this.bufferPos_1 === 0)) {
      remainingLength = this.get_blockLength_ozdqi2_k$() - this.bufferPos_1 | 0;
      if (remainingLength < length) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = ensureNotNull(this.buffer_1);
        var tmp1_copyInto = this.bufferPos_1;
        var tmp2_copyInto = offset + remainingLength | 0;
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
        arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, offset, tmp2_copyInto);
        tmp$ret$4 = tmp0_copyInto;
        var tmp0_this = this;
        tmp0_this.t0__1 = tmp0_this.t0__1.plus_u6jwas_k$(toLong(this.get_blockLength_ozdqi2_k$()));
        if (this.t0__1.equals(new Long(0, 0))) {
          var tmp1_this = this;
          var tmp2 = tmp1_this.t1__1;
          tmp1_this.t1__1 = tmp2.inc_28ke_k$();
        }
        compress(this, ensureNotNull(this.buffer_1), 0);
        this.bufferPos_1 = 0;
        var tmp3_safe_receiver = this.buffer_1;
        if (tmp3_safe_receiver == null)
          null;
        else {
          fill$default(tmp3_safe_receiver, 0, 0, 0, 6, null);
        }
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp3_copyInto = ensureNotNull(this.buffer_1);
        var tmp4_copyInto = this.bufferPos_1;
        var tmp5_copyInto = offset + length | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$5 = input;
        tmp$ret$6 = tmp$ret$5;
        var tmp_0 = tmp$ret$6;
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = tmp3_copyInto;
        tmp$ret$8 = tmp$ret$7;
        arrayCopy(tmp_0, tmp$ret$8, tmp4_copyInto, offset, tmp5_copyInto);
        tmp$ret$9 = tmp3_copyInto;
        var tmp4_this = this;
        tmp4_this.bufferPos_1 = tmp4_this.bufferPos_1 + length | 0;
        return Unit_getInstance();
      }
    }
    var blockWiseLastPos = (offset + length | 0) - this.get_blockLength_ozdqi2_k$() | 0;
    var messagePos = offset + remainingLength | 0;
    while (messagePos < blockWiseLastPos) {
      var tmp5_this = this;
      tmp5_this.t0__1 = tmp5_this.t0__1.plus_u6jwas_k$(toLong(this.get_blockLength_ozdqi2_k$()));
      if (this.t0__1.equals(new Long(0, 0))) {
        var tmp6_this = this;
        var tmp7 = tmp6_this.t1__1;
        tmp6_this.t1__1 = tmp7.inc_28ke_k$();
      }
      compress(this, input, messagePos);
      messagePos = messagePos + this.get_blockLength_ozdqi2_k$() | 0;
    }
    var tmp$ret$14;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp6_copyInto = ensureNotNull(this.buffer_1);
    var tmp7_copyInto = messagePos;
    var tmp8_copyInto = offset + length | 0;
    var tmp$ret$11;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$10 = input;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = tmp6_copyInto;
    tmp$ret$13 = tmp$ret$12;
    arrayCopy(tmp_1, tmp$ret$13, 0, tmp7_copyInto, tmp8_copyInto);
    tmp$ret$14 = tmp6_copyInto;
    var tmp8_this = this;
    tmp8_this.bufferPos_1 = tmp8_this.bufferPos_1 + ((offset + length | 0) - messagePos | 0) | 0;
  };
  BLAKE2B.prototype.digest_m0ziv0_k$ = function () {
    var digest = new Int8Array(this.digestSize_1);
    this.doFinal_l87dne_k$(digest, 0);
    return digest;
  };
  BLAKE2B.prototype.digest_g3p5dr_k$ = function (input) {
    this.update_48pyh5_k$(input);
    return this.digest_m0ziv0_k$();
  };
  BLAKE2B.prototype.digest_7stlcx_k$ = function (output, offset, length) {
    var digest = this.digest_m0ziv0_k$();
    if (length < digest.length)
      throw IllegalArgumentException_init_$Create$('partial digests not returned');
    if ((output.length - offset | 0) < digest.length)
      throw IllegalArgumentException_init_$Create$('insufficient space in the output buffer to store the digest');
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = digest.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = digest;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = output;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, offset, 0, tmp0_copyInto);
    tmp$ret$4 = output;
    return digest.length;
  };
  BLAKE2B.prototype.reset_5tn5dq_k$ = function () {
    this.bufferPos_1 = 0;
    this.f0__1 = new Long(0, 0);
    this.t0__1 = new Long(0, 0);
    this.t1__1 = new Long(0, 0);
    this.chainValue_1 = null;
    var tmp0_safe_receiver = this.buffer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      fill$default(tmp0_safe_receiver, 0, 0, 0, 6, null);
    }
    if (!(this.key_1 == null)) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = ensureNotNull(this.key_1);
      var tmp1_copyInto = ensureNotNull(this.buffer_1);
      var tmp2_copyInto = ensureNotNull(this.key_1).length;
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
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto);
      tmp$ret$4 = tmp1_copyInto;
      this.bufferPos_1 = this.get_blockLength_ozdqi2_k$();
    }
    init(this);
  };
  BLAKE2B.prototype.toString = function () {
    return 'BLAKE2B';
  };
  function BLAKE2B() {
    Companion_getInstance_7();
    this.digestSize_1 = 64;
    this.keyLength_1 = 0;
    this.salt_1 = null;
    this.personalization_1 = null;
    this.key_1 = null;
    this.buffer_1 = null;
    this.bufferPos_1 = 0;
    this.internalState_1 = longArray(16);
    this.chainValue_1 = null;
    this.t0__1 = new Long(0, 0);
    this.t1__1 = new Long(0, 0);
    this.f0__1 = new Long(0, 0);
  }
  BLAKE2B.$metadata$ = classMeta('BLAKE2B', [Digest]);
  function _get_blake2s_IV__vkr88h($this) {
    return $this.blake2s_IV_1;
  }
  function _get_blake2s_sigma__fo20hz($this) {
    return $this.blake2s_sigma_1;
  }
  function _get_ROUNDS__1juy2u_0($this) {
    return $this.ROUNDS_1;
  }
  function _set_digestSize__mz828i_0($this, _set____db54di) {
    $this.digestSize_1 = _set____db54di;
  }
  function _get_digestSize__7wzh3a_0($this) {
    return $this.digestSize_1;
  }
  function _set_keyLength__rc2728_0($this, _set____db54di) {
    $this.keyLength_1 = _set____db54di;
  }
  function _get_keyLength__ee7eic_0($this) {
    return $this.keyLength_1;
  }
  function _set_salt__9tr3r5_0($this, _set____db54di) {
    $this.salt_1 = _set____db54di;
  }
  function _get_salt__ddj3cl_0($this) {
    return $this.salt_1;
  }
  function _set_personalization__cgm869_0($this, _set____db54di) {
    $this.personalization_1 = _set____db54di;
  }
  function _get_personalization__mkcfot_0($this) {
    return $this.personalization_1;
  }
  function _set_key__4w8w3q_0($this, _set____db54di) {
    $this.key_1 = _set____db54di;
  }
  function _get_key__e6bh8y_0($this) {
    return $this.key_1;
  }
  function _set_fanout__ifrzmk($this, _set____db54di) {
    $this.fanout_1 = _set____db54di;
  }
  function _get_fanout__jwik9c($this) {
    return $this.fanout_1;
  }
  function _set_depth__dghfxe($this, _set____db54di) {
    $this.depth_1 = _set____db54di;
  }
  function _get_depth__ikn0k2($this) {
    return $this.depth_1;
  }
  function _set_leafLength__4gsma5($this, _set____db54di) {
    $this.leafLength_1 = _set____db54di;
  }
  function _get_leafLength__jj17fd($this) {
    return $this.leafLength_1;
  }
  function _set_nodeOffset__sg71fi($this, _set____db54di) {
    $this.nodeOffset_1 = _set____db54di;
  }
  function _get_nodeOffset__riofee($this) {
    return $this.nodeOffset_1;
  }
  function _set_nodeDepth__wtdqf8($this, _set____db54di) {
    $this.nodeDepth_1 = _set____db54di;
  }
  function _get_nodeDepth__8wvv5c($this) {
    return $this.nodeDepth_1;
  }
  function _set_innerHashLength__hoq7yd($this, _set____db54di) {
    $this.innerHashLength_1 = _set____db54di;
  }
  function _get_innerHashLength__7l00ft($this) {
    return $this.innerHashLength_1;
  }
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_bufferPos__jel8rz_0($this, _set____db54di) {
    $this.bufferPos_1 = _set____db54di;
  }
  function _get_bufferPos__9w97ml_0($this) {
    return $this.bufferPos_1;
  }
  function _set_internalState__vbpn8x($this, _set____db54di) {
    $this.internalState_1 = _set____db54di;
  }
  function _get_internalState__g3y4ql_0($this) {
    return $this.internalState_1;
  }
  function _set_chainValue__kwseqh_0($this, _set____db54di) {
    $this.chainValue_1 = _set____db54di;
  }
  function _get_chainValue__z2323f_0($this) {
    return $this.chainValue_1;
  }
  function _set_t0__dl8h7p_0($this, _set____db54di) {
    $this.t0__1 = _set____db54di;
  }
  function _get_t0__ndca1b_0($this) {
    return $this.t0__1;
  }
  function _set_t1__dl8h6u_0($this, _set____db54di) {
    $this.t1__1 = _set____db54di;
  }
  function _get_t1__ndca26_0($this) {
    return $this.t1__1;
  }
  function _set_f0__dl8rlf_0($this, _set____db54di) {
    $this.f0__1 = _set____db54di;
  }
  function _get_f0__ndbznl_0($this) {
    return $this.f0__1;
  }
  function BLAKE2S_init_$Init$(digestBits, $this) {
    BLAKE2S.call($this);
    if ((digestBits < 8 ? true : digestBits > 256) ? true : !((digestBits % 8 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('BLAKE2s digest bit length must be a multiple of 8 and not greater than 256');
    }
    $this.digestSize_1 = digestBits / 8 | 0;
    init_0($this, null, null, null);
    return $this;
  }
  function BLAKE2S_init_$Create$(digestBits) {
    return BLAKE2S_init_$Init$(digestBits, Object.create(BLAKE2S.prototype));
  }
  function BLAKE2S_init_$Init$_0(digestBits, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      digestBits = 256;
    BLAKE2S_init_$Init$(digestBits, $this);
    return $this;
  }
  function BLAKE2S_init_$Create$_0(digestBits, $mask0, $marker) {
    return BLAKE2S_init_$Init$_0(digestBits, $mask0, $marker, Object.create(BLAKE2S.prototype));
  }
  function BLAKE2S_init_$Init$_1(key, $this) {
    BLAKE2S.call($this);
    init_0($this, null, null, key);
    return $this;
  }
  function BLAKE2S_init_$Create$_1(key) {
    return BLAKE2S_init_$Init$_1(key, Object.create(BLAKE2S.prototype));
  }
  function BLAKE2S_init_$Init$_2(key, digestBytes, salt, personalization, $this) {
    BLAKE2S.call($this);
    if (digestBytes < 1 ? true : digestBytes > 32) {
      throw IllegalArgumentException_init_$Create$('Invalid digest length (required: 1 - 32)');
    }
    $this.digestSize_1 = digestBytes;
    init_0($this, salt, personalization, key);
    return $this;
  }
  function BLAKE2S_init_$Create$_2(key, digestBytes, salt, personalization) {
    return BLAKE2S_init_$Init$_2(key, digestBytes, salt, personalization, Object.create(BLAKE2S.prototype));
  }
  function BLAKE2S_init_$Init$_3(digestBytes, key, salt, personalization, offset, $this) {
    BLAKE2S.call($this);
    $this.digestSize_1 = digestBytes;
    $this.nodeOffset_1 = offset;
    init_0($this, salt, personalization, key);
    return $this;
  }
  function BLAKE2S_init_$Create$_3(digestBytes, key, salt, personalization, offset) {
    return BLAKE2S_init_$Init$_3(digestBytes, key, salt, personalization, offset, Object.create(BLAKE2S.prototype));
  }
  function BLAKE2S_init_$Init$_4(digestBytes, hashLength, offset, $this) {
    BLAKE2S.call($this);
    $this.digestSize_1 = digestBytes;
    $this.nodeOffset_1 = offset;
    $this.fanout_1 = 0;
    $this.depth_1 = 0;
    $this.leafLength_1 = hashLength;
    $this.innerHashLength_1 = hashLength;
    $this.nodeDepth_1 = 0;
    init_0($this, null, null, null);
    return $this;
  }
  function BLAKE2S_init_$Create$_4(digestBytes, hashLength, offset) {
    return BLAKE2S_init_$Init$_4(digestBytes, hashLength, offset, Object.create(BLAKE2S.prototype));
  }
  function initializeInternalState_0($this) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = ensureNotNull($this.chainValue_1);
    var tmp1_copyInto = $this.internalState_1;
    var tmp2_copyInto = ensureNotNull($this.chainValue_1).length;
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
    tmp$ret$2 = tmp1_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto);
    tmp$ret$4 = tmp1_copyInto;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = Companion_getInstance_8().blake2s_IV_1;
    var tmp4_copyInto = $this.internalState_1;
    var tmp5_copyInto = ensureNotNull($this.chainValue_1).length;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp3_copyInto;
    tmp$ret$6 = tmp$ret$5;
    var tmp_0 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = tmp4_copyInto;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, tmp5_copyInto, 0, 4);
    tmp$ret$9 = tmp4_copyInto;
    $this.internalState_1[12] = $this.t0__1 ^ Companion_getInstance_8().blake2s_IV_1[4];
    $this.internalState_1[13] = $this.t1__1 ^ Companion_getInstance_8().blake2s_IV_1[5];
    $this.internalState_1[14] = $this.f0__1 ^ Companion_getInstance_8().blake2s_IV_1[6];
    $this.internalState_1[15] = Companion_getInstance_8().blake2s_IV_1[7];
  }
  function init_0($this, salt, personalization, key) {
    $this.buffer_1 = new Int8Array(Companion_getInstance_8().get_byteLength_fiok15_k$());
    var tmp;
    if (!(key == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$0 = key.length === 0;
      tmp$ret$1 = !tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (key.length > 32) {
        throw IllegalArgumentException_init_$Create$('Keys > 32 bytes are not supported');
      }
      var tmp_0 = $this;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = new Int8Array(key.length);
      var tmp1_copyInto = key.length;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = key;
      tmp$ret$3 = tmp$ret$2;
      var tmp_1 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp0_copyInto;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp_1, tmp$ret$5, 0, 0, tmp1_copyInto);
      tmp$ret$6 = tmp0_copyInto;
      tmp_0.key_1 = tmp$ret$6;
      $this.keyLength_1 = key.length;
      var tmp$ret$11;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = ensureNotNull($this.buffer_1);
      var tmp3_copyInto = key.length;
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = key;
      tmp$ret$8 = tmp$ret$7;
      var tmp_2 = tmp$ret$8;
      var tmp$ret$10;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$9 = tmp2_copyInto;
      tmp$ret$10 = tmp$ret$9;
      arrayCopy(tmp_2, tmp$ret$10, 0, 0, tmp3_copyInto);
      tmp$ret$11 = tmp2_copyInto;
      $this.bufferPos_1 = Companion_getInstance_8().get_byteLength_fiok15_k$();
    }
    if ($this.chainValue_1 == null) {
      $this.chainValue_1 = new Int32Array(8);
      ensureNotNull($this.chainValue_1)[0] = Companion_getInstance_8().blake2s_IV_1[0] ^ ($this.digestSize_1 | $this.keyLength_1 << 8 | ($this.fanout_1 << 16 | $this.depth_1 << 24));
      ensureNotNull($this.chainValue_1)[1] = Companion_getInstance_8().blake2s_IV_1[1] ^ $this.leafLength_1;
      var nofHi = $this.nodeOffset_1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
      var nofLo = $this.nodeOffset_1.toInt_1tsl84_k$();
      ensureNotNull($this.chainValue_1)[2] = Companion_getInstance_8().blake2s_IV_1[2] ^ nofLo;
      ensureNotNull($this.chainValue_1)[3] = Companion_getInstance_8().blake2s_IV_1[3] ^ (nofHi | $this.nodeDepth_1 << 16 | $this.innerHashLength_1 << 24);
      ensureNotNull($this.chainValue_1)[4] = Companion_getInstance_8().blake2s_IV_1[4];
      ensureNotNull($this.chainValue_1)[5] = Companion_getInstance_8().blake2s_IV_1[5];
      if (!(salt == null)) {
        if (!(salt.length === 8)) {
          throw IllegalArgumentException_init_$Create$('Salt length must be exactly 8 bytes');
        }
        var tmp_3 = $this;
        var tmp$ret$16;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = new Int8Array(8);
        var tmp5_copyInto = salt.length;
        var tmp$ret$13;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$12;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$12 = salt;
        tmp$ret$13 = tmp$ret$12;
        var tmp_4 = tmp$ret$13;
        var tmp$ret$15;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$14;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$14 = tmp4_copyInto;
        tmp$ret$15 = tmp$ret$14;
        arrayCopy(tmp_4, tmp$ret$15, 0, 0, tmp5_copyInto);
        tmp$ret$16 = tmp4_copyInto;
        tmp_3.salt_1 = tmp$ret$16;
        ensureNotNull($this.chainValue_1)[4] = ensureNotNull($this.chainValue_1)[4] ^ MathHelper_getInstance().decodeLEInt_wq9yqi_k$(salt, 0);
        ensureNotNull($this.chainValue_1)[5] = ensureNotNull($this.chainValue_1)[5] ^ MathHelper_getInstance().decodeLEInt_wq9yqi_k$(salt, 4);
      }
      ensureNotNull($this.chainValue_1)[6] = Companion_getInstance_8().blake2s_IV_1[6];
      ensureNotNull($this.chainValue_1)[7] = Companion_getInstance_8().blake2s_IV_1[7];
      if (!(personalization == null)) {
        if (!(personalization.length === 8)) {
          throw IllegalArgumentException_init_$Create$('Personalization length must be exactly 8 bytes');
        }
        var tmp_5 = $this;
        var tmp$ret$21;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp6_copyInto = new Int8Array(8);
        var tmp7_copyInto = personalization.length;
        var tmp$ret$18;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$17;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$17 = personalization;
        tmp$ret$18 = tmp$ret$17;
        var tmp_6 = tmp$ret$18;
        var tmp$ret$20;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$19;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$19 = tmp6_copyInto;
        tmp$ret$20 = tmp$ret$19;
        arrayCopy(tmp_6, tmp$ret$20, 0, 0, tmp7_copyInto);
        tmp$ret$21 = tmp6_copyInto;
        tmp_5.personalization_1 = tmp$ret$21;
        ensureNotNull($this.chainValue_1)[6] = ensureNotNull($this.chainValue_1)[6] ^ MathHelper_getInstance().decodeLEInt_wq9yqi_k$(personalization, 0);
        ensureNotNull($this.chainValue_1)[7] = ensureNotNull($this.chainValue_1)[7] ^ MathHelper_getInstance().decodeLEInt_wq9yqi_k$(personalization, 4);
      }
    }
  }
  function compress_0($this, message, messagePos) {
    initializeInternalState_0($this);
    var m = new Int32Array(16);
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        m[j] = MathHelper_getInstance().decodeLEInt_wq9yqi_k$(ensureNotNull(message), messagePos + imul(j, 4) | 0);
      }
       while (inductionVariable <= 15);
    var inductionVariable_0 = 0;
    Companion_getInstance_8();
    var last = 10;
    if (inductionVariable_0 < last)
      do {
        var round = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][0]], m[Companion_getInstance_8().blake2s_sigma_1[round][1]], 0, 4, 8, 12);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][2]], m[Companion_getInstance_8().blake2s_sigma_1[round][3]], 1, 5, 9, 13);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][4]], m[Companion_getInstance_8().blake2s_sigma_1[round][5]], 2, 6, 10, 14);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][6]], m[Companion_getInstance_8().blake2s_sigma_1[round][7]], 3, 7, 11, 15);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][8]], m[Companion_getInstance_8().blake2s_sigma_1[round][9]], 0, 5, 10, 15);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][10]], m[Companion_getInstance_8().blake2s_sigma_1[round][11]], 1, 6, 11, 12);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][12]], m[Companion_getInstance_8().blake2s_sigma_1[round][13]], 2, 7, 8, 13);
        g_1($this, m[Companion_getInstance_8().blake2s_sigma_1[round][14]], m[Companion_getInstance_8().blake2s_sigma_1[round][15]], 3, 4, 9, 14);
      }
       while (inductionVariable_0 < last);
    var inductionVariable_1 = 0;
    var last_0 = ensureNotNull($this.chainValue_1).length - 1 | 0;
    if (inductionVariable_1 <= last_0)
      do {
        var offset = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        ensureNotNull($this.chainValue_1)[offset] = ensureNotNull($this.chainValue_1)[offset] ^ $this.internalState_1[offset] ^ $this.internalState_1[offset + 8 | 0];
      }
       while (inductionVariable_1 <= last_0);
  }
  function g_1($this, m1, m2, posA, posB, posC, posD) {
    $this.internalState_1[posA] = ($this.internalState_1[posA] + $this.internalState_1[posB] | 0) + m1 | 0;
    $this.internalState_1[posD] = rotr32($this, $this.internalState_1[posD] ^ $this.internalState_1[posA], 16);
    $this.internalState_1[posC] = $this.internalState_1[posC] + $this.internalState_1[posD] | 0;
    $this.internalState_1[posB] = rotr32($this, $this.internalState_1[posB] ^ $this.internalState_1[posC], 12);
    $this.internalState_1[posA] = ($this.internalState_1[posA] + $this.internalState_1[posB] | 0) + m2 | 0;
    $this.internalState_1[posD] = rotr32($this, $this.internalState_1[posD] ^ $this.internalState_1[posA], 8);
    $this.internalState_1[posC] = $this.internalState_1[posC] + $this.internalState_1[posD] | 0;
    $this.internalState_1[posB] = rotr32($this, $this.internalState_1[posB] ^ $this.internalState_1[posC], 7);
  }
  function rotr32($this, x, rot) {
    return x >>> rot | 0 | x << (32 - rot | 0);
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
    tmp.blake2s_IV_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$1 = new Int8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    var tmp_1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$2 = new Int8Array([14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]);
    var tmp_2 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$3 = new Int8Array([11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4]);
    var tmp_3 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$4 = new Int8Array([7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8]);
    var tmp_4 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$5 = new Int8Array([9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13]);
    var tmp_5 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$6 = new Int8Array([2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]);
    var tmp_6 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$7 = new Int8Array([12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11]);
    var tmp_7 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$8 = new Int8Array([13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10]);
    var tmp_8 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$9 = new Int8Array([6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5]);
    var tmp_9 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$10 = new Int8Array([10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]);
    var tmp0_arrayOf = [tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp$ret$10];
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = tmp0_arrayOf;
    tmp$ret$12 = tmp$ret$11;
    tmp$ret$13 = tmp$ret$12;
    tmp_0.blake2s_sigma_1 = tmp$ret$13;
    this.ROUNDS_1 = 10;
  }
  Companion_8.prototype.get_byteLength_fiok15_k$ = function () {
    return 64;
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  BLAKE2S.prototype.get_digestLength_64702b_k$ = function () {
    return this.digestSize_1;
  };
  BLAKE2S.prototype.get_blockLength_ozdqi2_k$ = function () {
    return Companion_getInstance_8().get_byteLength_fiok15_k$();
  };
  BLAKE2S.prototype.clearKey_jpijr5_k$ = function () {
    if (!(this.key_1 == null)) {
      var tmp0_safe_receiver = this.key_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        fill$default(tmp0_safe_receiver, 0, 0, 0, 6, null);
      }
      var tmp1_safe_receiver = this.buffer_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        fill$default(tmp1_safe_receiver, 0, 0, 0, 6, null);
      }
    }
  };
  BLAKE2S.prototype.clearSalt_rit69e_k$ = function () {
    if (!(this.salt_1 == null)) {
      var tmp0_safe_receiver = this.salt_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        fill$default(tmp0_safe_receiver, 0, 0, 0, 6, null);
      }
    }
  };
  BLAKE2S.prototype.doFinal_6monlj_k$ = function (out, outOffset) {
    this.f0__1 = -1;
    var tmp0_this = this;
    tmp0_this.t0__1 = tmp0_this.t0__1 + this.bufferPos_1 | 0;
    if (this.t0__1 < 0 ? this.bufferPos_1 > (-this.t0__1 | 0) : false) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.t1__1;
      tmp1_this.t1__1 = tmp2 + 1 | 0;
    }
    compress_0(this, this.buffer_1, 0);
    var tmp3_safe_receiver = this.buffer_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      fill$default(tmp3_safe_receiver, 0, 0, 0, 6, null);
    }
    var tmp = this.internalState_1;
    fill$default_1(tmp, 0, 0, 0, 6, null);
    var i = 0;
    while (i < ensureNotNull(this.chainValue_1).length ? imul(i, 4) < this.digestSize_1 : false) {
      var bytes = new Int8Array(4);
      MathHelper_getInstance().encodeLEInt_jts7ji_k$(ensureNotNull(this.chainValue_1)[i], bytes, 0);
      if (imul(i, 4) < (this.digestSize_1 - 4 | 0)) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = outOffset + imul(i, 4) | 0;
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
        tmp$ret$2 = out;
        tmp$ret$3 = tmp$ret$2;
        arrayCopy(tmp_0, tmp$ret$3, tmp0_copyInto, 0, 4);
        tmp$ret$4 = out;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = outOffset + imul(i, 4) | 0;
        var tmp2_copyInto = this.digestSize_1 - imul(i, 4) | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$5 = bytes;
        tmp$ret$6 = tmp$ret$5;
        var tmp_1 = tmp$ret$6;
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = out;
        tmp$ret$8 = tmp$ret$7;
        arrayCopy(tmp_1, tmp$ret$8, tmp1_copyInto, 0, tmp2_copyInto);
        tmp$ret$9 = out;
      }
      var tmp4 = i;
      i = tmp4 + 1 | 0;
    }
    var tmp5_safe_receiver = this.chainValue_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      fill$default_1(tmp5_safe_receiver, 0, 0, 0, 6, null);
    }
    this.reset_5tn5dq_k$();
    return this.digestSize_1;
  };
  BLAKE2S.prototype.update_48pyh5_k$ = function (input) {
    this.update_evdvfb_k$(input, 0, input.length);
  };
  BLAKE2S.prototype.update_2c9aky_k$ = function (input) {
    var remainingLength = Companion_getInstance_8().get_byteLength_fiok15_k$() - this.bufferPos_1 | 0;
    if (remainingLength === 0) {
      var tmp0_this = this;
      tmp0_this.t0__1 = tmp0_this.t0__1 + Companion_getInstance_8().get_byteLength_fiok15_k$() | 0;
      if (this.t0__1 === 0) {
        var tmp1_this = this;
        var tmp2 = tmp1_this.t1__1;
        tmp1_this.t1__1 = tmp2 + 1 | 0;
      }
      compress_0(this, this.buffer_1, 0);
      var tmp3_safe_receiver = this.buffer_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        fill$default(tmp3_safe_receiver, 0, 0, 0, 6, null);
      }
      ensureNotNull(this.buffer_1)[0] = input;
      this.bufferPos_1 = 1;
    } else {
      ensureNotNull(this.buffer_1)[this.bufferPos_1] = input;
      var tmp4_this = this;
      var tmp5 = tmp4_this.bufferPos_1;
      tmp4_this.bufferPos_1 = tmp5 + 1 | 0;
    }
  };
  BLAKE2S.prototype.update_evdvfb_k$ = function (input, offset, length) {
    if (length === 0) {
      return Unit_getInstance();
    }
    var remainingLength = 0;
    if (!(this.bufferPos_1 === 0)) {
      remainingLength = Companion_getInstance_8().get_byteLength_fiok15_k$() - this.bufferPos_1 | 0;
      if (remainingLength < length) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = ensureNotNull(this.buffer_1);
        var tmp1_copyInto = this.bufferPos_1;
        var tmp2_copyInto = offset + remainingLength | 0;
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
        arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, offset, tmp2_copyInto);
        tmp$ret$4 = tmp0_copyInto;
        var tmp0_this = this;
        tmp0_this.t0__1 = tmp0_this.t0__1 + Companion_getInstance_8().get_byteLength_fiok15_k$() | 0;
        if (this.t0__1 === 0) {
          var tmp1_this = this;
          var tmp2 = tmp1_this.t1__1;
          tmp1_this.t1__1 = tmp2 + 1 | 0;
        }
        compress_0(this, this.buffer_1, 0);
        this.bufferPos_1 = 0;
        var tmp3_safe_receiver = this.buffer_1;
        if (tmp3_safe_receiver == null)
          null;
        else {
          fill$default(tmp3_safe_receiver, 0, 0, 0, 6, null);
        }
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp3_copyInto = ensureNotNull(this.buffer_1);
        var tmp4_copyInto = this.bufferPos_1;
        var tmp5_copyInto = offset + length | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$5 = input;
        tmp$ret$6 = tmp$ret$5;
        var tmp_0 = tmp$ret$6;
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = tmp3_copyInto;
        tmp$ret$8 = tmp$ret$7;
        arrayCopy(tmp_0, tmp$ret$8, tmp4_copyInto, offset, tmp5_copyInto);
        tmp$ret$9 = tmp3_copyInto;
        var tmp4_this = this;
        tmp4_this.bufferPos_1 = tmp4_this.bufferPos_1 + length | 0;
        return Unit_getInstance();
      }
    }
    var blockWiseLastPos = (offset + length | 0) - Companion_getInstance_8().get_byteLength_fiok15_k$() | 0;
    var messagePos = offset + remainingLength | 0;
    while (messagePos < blockWiseLastPos) {
      var tmp5_this = this;
      tmp5_this.t0__1 = tmp5_this.t0__1 + Companion_getInstance_8().get_byteLength_fiok15_k$() | 0;
      if (this.t0__1 === 0) {
        var tmp6_this = this;
        var tmp7 = tmp6_this.t1__1;
        tmp6_this.t1__1 = tmp7 + 1 | 0;
      }
      compress_0(this, input, messagePos);
      messagePos = messagePos + Companion_getInstance_8().get_byteLength_fiok15_k$() | 0;
    }
    var tmp$ret$14;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp6_copyInto = ensureNotNull(this.buffer_1);
    var tmp7_copyInto = messagePos;
    var tmp8_copyInto = offset + length | 0;
    var tmp$ret$11;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$10 = input;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = tmp6_copyInto;
    tmp$ret$13 = tmp$ret$12;
    arrayCopy(tmp_1, tmp$ret$13, 0, tmp7_copyInto, tmp8_copyInto);
    tmp$ret$14 = tmp6_copyInto;
    var tmp8_this = this;
    tmp8_this.bufferPos_1 = tmp8_this.bufferPos_1 + ((offset + length | 0) - messagePos | 0) | 0;
  };
  BLAKE2S.prototype.digest_m0ziv0_k$ = function () {
    var digest = new Int8Array(this.digestSize_1);
    this.doFinal_6monlj_k$(digest, 0);
    return digest;
  };
  BLAKE2S.prototype.digest_g3p5dr_k$ = function (input) {
    this.update_48pyh5_k$(input);
    return this.digest_m0ziv0_k$();
  };
  BLAKE2S.prototype.digest_7stlcx_k$ = function (output, offset, length) {
    var digest = this.digest_m0ziv0_k$();
    if (length < digest.length)
      throw IllegalArgumentException_init_$Create$('partial digests not returned');
    if ((output.length - offset | 0) < digest.length)
      throw IllegalArgumentException_init_$Create$('insufficient space in the output buffer to store the digest');
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = digest.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = digest;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = output;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, offset, 0, tmp0_copyInto);
    tmp$ret$4 = output;
    return digest.length;
  };
  BLAKE2S.prototype.reset_5tn5dq_k$ = function () {
    this.bufferPos_1 = 0;
    this.f0__1 = 0;
    this.t0__1 = 0;
    this.t1__1 = 0;
    this.chainValue_1 = null;
    var tmp0_safe_receiver = this.buffer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      fill$default(tmp0_safe_receiver, 0, 0, 0, 6, null);
    }
    if (!(this.key_1 == null)) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = ensureNotNull(this.key_1);
      var tmp1_copyInto = ensureNotNull(this.buffer_1);
      var tmp2_copyInto = ensureNotNull(this.key_1).length;
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
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto);
      tmp$ret$4 = tmp1_copyInto;
      this.bufferPos_1 = Companion_getInstance_8().get_byteLength_fiok15_k$();
    }
    init_0(this, this.salt_1, this.personalization_1, this.key_1);
  };
  BLAKE2S.prototype.toString = function () {
    return 'BLAKE2s';
  };
  function BLAKE2S() {
    Companion_getInstance_8();
    this.digestSize_1 = 32;
    this.keyLength_1 = 0;
    this.salt_1 = null;
    this.personalization_1 = null;
    this.key_1 = null;
    this.fanout_1 = 1;
    this.depth_1 = 1;
    this.leafLength_1 = 0;
    this.nodeOffset_1 = new Long(0, 0);
    this.nodeDepth_1 = 0;
    this.innerHashLength_1 = 0;
    this.buffer_1 = null;
    this.bufferPos_1 = 0;
    this.internalState_1 = new Int32Array(16);
    this.chainValue_1 = null;
    this.t0__1 = 0;
    this.t1__1 = 0;
    this.f0__1 = 0;
  }
  BLAKE2S.$metadata$ = classMeta('BLAKE2S', [Digest]);
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
  function _get_RC__ndbla2($this) {
    return $this.RC_1;
  }
  function KeccakDigest_init_$Init$(markByte, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      markByte = 1;
    KeccakDigest.call($this, markByte);
    return $this;
  }
  function KeccakDigest_init_$Create$(markByte, $mask0, $marker) {
    return KeccakDigest_init_$Init$(markByte, $mask0, $marker, Object.create(KeccakDigest.prototype));
  }
  function _get_markByte__8j5ipi($this) {
    return $this.markByte_1;
  }
  function _set_a__db556s($this, _set____db54di) {
    $this.a_1 = _set____db54di;
  }
  function _get_a__7mlogg($this) {
    var tmp = $this.a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('a');
    }
  }
  function _set_tmpOut__gj2f5s($this, _set____db54di) {
    $this.tmpOut_1 = _set____db54di;
  }
  function _get_tmpOut__hzszsk($this) {
    var tmp = $this.tmpOut_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tmpOut');
    }
  }
  function doReset($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 24)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_a__7mlogg($this)[i] = new Long(0, 0);
      }
       while (inductionVariable <= 24);
    _get_a__7mlogg($this)[1] = new Long(-1, -1);
    _get_a__7mlogg($this)[2] = new Long(-1, -1);
    _get_a__7mlogg($this)[8] = new Long(-1, -1);
    _get_a__7mlogg($this)[12] = new Long(-1, -1);
    _get_a__7mlogg($this)[17] = new Long(-1, -1);
    _get_a__7mlogg($this)[20] = new Long(-1, -1);
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([new Long(1, 0), new Long(32898, 0), new Long(32906, -2147483648), new Long(-2147450880, -2147483648), new Long(32907, 0), new Long(-2147483647, 0), new Long(-2147450751, -2147483648), new Long(32777, -2147483648), new Long(138, 0), new Long(136, 0), new Long(-2147450871, 0), new Long(-2147483638, 0), new Long(-2147450741, 0), new Long(139, -2147483648), new Long(32905, -2147483648), new Long(32771, -2147483648), new Long(32770, -2147483648), new Long(128, -2147483648), new Long(32778, 0), new Long(-2147483638, -2147483648), new Long(-2147450751, -2147483648), new Long(32896, -2147483648), new Long(-2147483647, 0), new Long(-2147450872, -2147483648)]);
    tmp.RC_1 = tmp$ret$0;
  }
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function KeccakDigest(markByte) {
    Companion_getInstance_9();
    HashingBase.call(this);
    this.markByte_1 = markByte;
  }
  KeccakDigest.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 200 - imul(2, this.get_digestLength_64702b_k$()) | 0;
  };
  KeccakDigest.prototype.doInit_ec9a0a_k$ = function () {
    this.a_1 = longArray(25);
    this.tmpOut_1 = new Int8Array((this.get_digestLength_64702b_k$() + 7 | 0) & -8);
    doReset(this);
  };
  KeccakDigest.prototype.engineReset_tikogs_k$ = function () {
    doReset(this);
  };
  KeccakDigest.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    var ptr = this.flush_1m2gp0_k$();
    var buf = this.blockBuffer_1;
    if ((ptr + 1 | 0) === buf.length) {
      buf[ptr] = toByte(this.markByte_1 + 128 | 0);
    } else {
      buf[ptr] = this.markByte_1;
      var inductionVariable = ptr + 1 | 0;
      var last = buf.length - 1 | 0;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buf[i] = 0;
        }
         while (inductionVariable < last);
      buf[buf.length - 1 | 0] = -128;
    }
    this.processBlock_6l7x9o_k$(buf);
    _get_a__7mlogg(this)[1] = _get_a__7mlogg(this)[1].inv_28kx_k$();
    _get_a__7mlogg(this)[2] = _get_a__7mlogg(this)[2].inv_28kx_k$();
    _get_a__7mlogg(this)[8] = _get_a__7mlogg(this)[8].inv_28kx_k$();
    _get_a__7mlogg(this)[12] = _get_a__7mlogg(this)[12].inv_28kx_k$();
    _get_a__7mlogg(this)[17] = _get_a__7mlogg(this)[17].inv_28kx_k$();
    _get_a__7mlogg(this)[20] = _get_a__7mlogg(this)[20].inv_28kx_k$();
    var dlen = this.get_digestLength_64702b_k$();
    var i_0 = 0;
    while (i_0 < dlen) {
      MathHelper_getInstance().encodeLELong_jfxdem_k$(_get_a__7mlogg(this)[i_0 >>> 3 | 0], _get_tmpOut__hzszsk(this), i_0);
      i_0 = i_0 + 8 | 0;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = _get_tmpOut__hzszsk(this);
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
    tmp$ret$2 = output;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, outputOffset, 0, dlen);
    tmp$ret$4 = output;
  };
  KeccakDigest.prototype.processBlock_6l7x9o_k$ = function (data) {
    var i = 0;
    while (i < data.length) {
      _get_a__7mlogg(this)[i >>> 3 | 0] = _get_a__7mlogg(this)[i >>> 3 | 0].xor_jjua9n_k$(MathHelper_getInstance().decodeLELong_h6cp29_k$(data, i));
      i = i + 8 | 0;
    }
    var t0;
    var t1;
    var t2;
    var t3;
    var t4;
    var tt0;
    var tt1;
    var tt2;
    var tt3;
    var t;
    var kt;
    var c0;
    var c1;
    var c2;
    var c3;
    var c4;
    var bnn;
    var j = 0;
    while (j < 24) {
      tt0 = _get_a__7mlogg(this)[1].xor_jjua9n_k$(_get_a__7mlogg(this)[6]);
      tt1 = _get_a__7mlogg(this)[11].xor_jjua9n_k$(_get_a__7mlogg(this)[16]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[21].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[4].xor_jjua9n_k$(_get_a__7mlogg(this)[9]);
      tt3 = _get_a__7mlogg(this)[14].xor_jjua9n_k$(_get_a__7mlogg(this)[19]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[24]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t0 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[2].xor_jjua9n_k$(_get_a__7mlogg(this)[7]);
      tt1 = _get_a__7mlogg(this)[12].xor_jjua9n_k$(_get_a__7mlogg(this)[17]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[22].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[0].xor_jjua9n_k$(_get_a__7mlogg(this)[5]);
      tt3 = _get_a__7mlogg(this)[10].xor_jjua9n_k$(_get_a__7mlogg(this)[15]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[20]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t1 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[3].xor_jjua9n_k$(_get_a__7mlogg(this)[8]);
      tt1 = _get_a__7mlogg(this)[13].xor_jjua9n_k$(_get_a__7mlogg(this)[18]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[23].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[1].xor_jjua9n_k$(_get_a__7mlogg(this)[6]);
      tt3 = _get_a__7mlogg(this)[11].xor_jjua9n_k$(_get_a__7mlogg(this)[16]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[21]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t2 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[4].xor_jjua9n_k$(_get_a__7mlogg(this)[9]);
      tt1 = _get_a__7mlogg(this)[14].xor_jjua9n_k$(_get_a__7mlogg(this)[19]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[24].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[2].xor_jjua9n_k$(_get_a__7mlogg(this)[7]);
      tt3 = _get_a__7mlogg(this)[12].xor_jjua9n_k$(_get_a__7mlogg(this)[17]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[22]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t3 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[0].xor_jjua9n_k$(_get_a__7mlogg(this)[5]);
      tt1 = _get_a__7mlogg(this)[10].xor_jjua9n_k$(_get_a__7mlogg(this)[15]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[20].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[3].xor_jjua9n_k$(_get_a__7mlogg(this)[8]);
      tt3 = _get_a__7mlogg(this)[13].xor_jjua9n_k$(_get_a__7mlogg(this)[18]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[23]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t4 = tt0.xor_jjua9n_k$(tt2);
      _get_a__7mlogg(this)[0] = _get_a__7mlogg(this)[0].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[5] = _get_a__7mlogg(this)[5].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[10] = _get_a__7mlogg(this)[10].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[15] = _get_a__7mlogg(this)[15].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[20] = _get_a__7mlogg(this)[20].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[1] = _get_a__7mlogg(this)[1].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[6] = _get_a__7mlogg(this)[6].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[11] = _get_a__7mlogg(this)[11].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[16] = _get_a__7mlogg(this)[16].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[21] = _get_a__7mlogg(this)[21].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[2] = _get_a__7mlogg(this)[2].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[7] = _get_a__7mlogg(this)[7].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[12] = _get_a__7mlogg(this)[12].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[17] = _get_a__7mlogg(this)[17].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[22] = _get_a__7mlogg(this)[22].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[3] = _get_a__7mlogg(this)[3].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[8] = _get_a__7mlogg(this)[8].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[13] = _get_a__7mlogg(this)[13].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[18] = _get_a__7mlogg(this)[18].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[23] = _get_a__7mlogg(this)[23].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[4] = _get_a__7mlogg(this)[4].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[9] = _get_a__7mlogg(this)[9].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[14] = _get_a__7mlogg(this)[14].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[19] = _get_a__7mlogg(this)[19].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[24] = _get_a__7mlogg(this)[24].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[5] = _get_a__7mlogg(this)[5].shl_po5ip6_k$(36).or_s401rn_k$(_get_a__7mlogg(this)[5].ushr_rr8rvr_k$(28));
      _get_a__7mlogg(this)[10] = _get_a__7mlogg(this)[10].shl_po5ip6_k$(3).or_s401rn_k$(_get_a__7mlogg(this)[10].ushr_rr8rvr_k$(61));
      _get_a__7mlogg(this)[15] = _get_a__7mlogg(this)[15].shl_po5ip6_k$(41).or_s401rn_k$(_get_a__7mlogg(this)[15].ushr_rr8rvr_k$(23));
      _get_a__7mlogg(this)[20] = _get_a__7mlogg(this)[20].shl_po5ip6_k$(18).or_s401rn_k$(_get_a__7mlogg(this)[20].ushr_rr8rvr_k$(46));
      _get_a__7mlogg(this)[1] = _get_a__7mlogg(this)[1].shl_po5ip6_k$(1).or_s401rn_k$(_get_a__7mlogg(this)[1].ushr_rr8rvr_k$(63));
      _get_a__7mlogg(this)[6] = _get_a__7mlogg(this)[6].shl_po5ip6_k$(44).or_s401rn_k$(_get_a__7mlogg(this)[6].ushr_rr8rvr_k$(20));
      _get_a__7mlogg(this)[11] = _get_a__7mlogg(this)[11].shl_po5ip6_k$(10).or_s401rn_k$(_get_a__7mlogg(this)[11].ushr_rr8rvr_k$(54));
      _get_a__7mlogg(this)[16] = _get_a__7mlogg(this)[16].shl_po5ip6_k$(45).or_s401rn_k$(_get_a__7mlogg(this)[16].ushr_rr8rvr_k$(19));
      _get_a__7mlogg(this)[21] = _get_a__7mlogg(this)[21].shl_po5ip6_k$(2).or_s401rn_k$(_get_a__7mlogg(this)[21].ushr_rr8rvr_k$(62));
      _get_a__7mlogg(this)[2] = _get_a__7mlogg(this)[2].shl_po5ip6_k$(62).or_s401rn_k$(_get_a__7mlogg(this)[2].ushr_rr8rvr_k$(2));
      _get_a__7mlogg(this)[7] = _get_a__7mlogg(this)[7].shl_po5ip6_k$(6).or_s401rn_k$(_get_a__7mlogg(this)[7].ushr_rr8rvr_k$(58));
      _get_a__7mlogg(this)[12] = _get_a__7mlogg(this)[12].shl_po5ip6_k$(43).or_s401rn_k$(_get_a__7mlogg(this)[12].ushr_rr8rvr_k$(21));
      _get_a__7mlogg(this)[17] = _get_a__7mlogg(this)[17].shl_po5ip6_k$(15).or_s401rn_k$(_get_a__7mlogg(this)[17].ushr_rr8rvr_k$(49));
      _get_a__7mlogg(this)[22] = _get_a__7mlogg(this)[22].shl_po5ip6_k$(61).or_s401rn_k$(_get_a__7mlogg(this)[22].ushr_rr8rvr_k$(3));
      _get_a__7mlogg(this)[3] = _get_a__7mlogg(this)[3].shl_po5ip6_k$(28).or_s401rn_k$(_get_a__7mlogg(this)[3].ushr_rr8rvr_k$(36));
      _get_a__7mlogg(this)[8] = _get_a__7mlogg(this)[8].shl_po5ip6_k$(55).or_s401rn_k$(_get_a__7mlogg(this)[8].ushr_rr8rvr_k$(9));
      _get_a__7mlogg(this)[13] = _get_a__7mlogg(this)[13].shl_po5ip6_k$(25).or_s401rn_k$(_get_a__7mlogg(this)[13].ushr_rr8rvr_k$(39));
      _get_a__7mlogg(this)[18] = _get_a__7mlogg(this)[18].shl_po5ip6_k$(21).or_s401rn_k$(_get_a__7mlogg(this)[18].ushr_rr8rvr_k$(43));
      _get_a__7mlogg(this)[23] = _get_a__7mlogg(this)[23].shl_po5ip6_k$(56).or_s401rn_k$(_get_a__7mlogg(this)[23].ushr_rr8rvr_k$(8));
      _get_a__7mlogg(this)[4] = _get_a__7mlogg(this)[4].shl_po5ip6_k$(27).or_s401rn_k$(_get_a__7mlogg(this)[4].ushr_rr8rvr_k$(37));
      _get_a__7mlogg(this)[9] = _get_a__7mlogg(this)[9].shl_po5ip6_k$(20).or_s401rn_k$(_get_a__7mlogg(this)[9].ushr_rr8rvr_k$(44));
      _get_a__7mlogg(this)[14] = _get_a__7mlogg(this)[14].shl_po5ip6_k$(39).or_s401rn_k$(_get_a__7mlogg(this)[14].ushr_rr8rvr_k$(25));
      _get_a__7mlogg(this)[19] = _get_a__7mlogg(this)[19].shl_po5ip6_k$(8).or_s401rn_k$(_get_a__7mlogg(this)[19].ushr_rr8rvr_k$(56));
      _get_a__7mlogg(this)[24] = _get_a__7mlogg(this)[24].shl_po5ip6_k$(14).or_s401rn_k$(_get_a__7mlogg(this)[24].ushr_rr8rvr_k$(50));
      bnn = _get_a__7mlogg(this)[12].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[6].or_s401rn_k$(_get_a__7mlogg(this)[12]);
      c0 = _get_a__7mlogg(this)[0].xor_jjua9n_k$(kt);
      kt = bnn.or_s401rn_k$(_get_a__7mlogg(this)[18]);
      c1 = _get_a__7mlogg(this)[6].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[18].and_jhajnj_k$(_get_a__7mlogg(this)[24]);
      c2 = _get_a__7mlogg(this)[12].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[24].or_s401rn_k$(_get_a__7mlogg(this)[0]);
      c3 = _get_a__7mlogg(this)[18].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[0].and_jhajnj_k$(_get_a__7mlogg(this)[6]);
      c4 = _get_a__7mlogg(this)[24].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[0] = c0;
      _get_a__7mlogg(this)[6] = c1;
      _get_a__7mlogg(this)[12] = c2;
      _get_a__7mlogg(this)[18] = c3;
      _get_a__7mlogg(this)[24] = c4;
      bnn = _get_a__7mlogg(this)[22].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[9].or_s401rn_k$(_get_a__7mlogg(this)[10]);
      c0 = _get_a__7mlogg(this)[3].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[10].and_jhajnj_k$(_get_a__7mlogg(this)[16]);
      c1 = _get_a__7mlogg(this)[9].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[16].or_s401rn_k$(bnn);
      c2 = _get_a__7mlogg(this)[10].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[22].or_s401rn_k$(_get_a__7mlogg(this)[3]);
      c3 = _get_a__7mlogg(this)[16].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[3].and_jhajnj_k$(_get_a__7mlogg(this)[9]);
      c4 = _get_a__7mlogg(this)[22].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[3] = c0;
      _get_a__7mlogg(this)[9] = c1;
      _get_a__7mlogg(this)[10] = c2;
      _get_a__7mlogg(this)[16] = c3;
      _get_a__7mlogg(this)[22] = c4;
      bnn = _get_a__7mlogg(this)[19].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[7].or_s401rn_k$(_get_a__7mlogg(this)[13]);
      c0 = _get_a__7mlogg(this)[1].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[13].and_jhajnj_k$(_get_a__7mlogg(this)[19]);
      c1 = _get_a__7mlogg(this)[7].xor_jjua9n_k$(kt);
      kt = bnn.and_jhajnj_k$(_get_a__7mlogg(this)[20]);
      c2 = _get_a__7mlogg(this)[13].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[20].or_s401rn_k$(_get_a__7mlogg(this)[1]);
      c3 = bnn.xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[1].and_jhajnj_k$(_get_a__7mlogg(this)[7]);
      c4 = _get_a__7mlogg(this)[20].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[1] = c0;
      _get_a__7mlogg(this)[7] = c1;
      _get_a__7mlogg(this)[13] = c2;
      _get_a__7mlogg(this)[19] = c3;
      _get_a__7mlogg(this)[20] = c4;
      bnn = _get_a__7mlogg(this)[17].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[5].and_jhajnj_k$(_get_a__7mlogg(this)[11]);
      c0 = _get_a__7mlogg(this)[4].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[11].or_s401rn_k$(_get_a__7mlogg(this)[17]);
      c1 = _get_a__7mlogg(this)[5].xor_jjua9n_k$(kt);
      kt = bnn.or_s401rn_k$(_get_a__7mlogg(this)[23]);
      c2 = _get_a__7mlogg(this)[11].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[23].and_jhajnj_k$(_get_a__7mlogg(this)[4]);
      c3 = bnn.xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[4].or_s401rn_k$(_get_a__7mlogg(this)[5]);
      c4 = _get_a__7mlogg(this)[23].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[4] = c0;
      _get_a__7mlogg(this)[5] = c1;
      _get_a__7mlogg(this)[11] = c2;
      _get_a__7mlogg(this)[17] = c3;
      _get_a__7mlogg(this)[23] = c4;
      bnn = _get_a__7mlogg(this)[8].inv_28kx_k$();
      kt = bnn.and_jhajnj_k$(_get_a__7mlogg(this)[14]);
      c0 = _get_a__7mlogg(this)[2].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[14].or_s401rn_k$(_get_a__7mlogg(this)[15]);
      c1 = bnn.xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[15].and_jhajnj_k$(_get_a__7mlogg(this)[21]);
      c2 = _get_a__7mlogg(this)[14].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[21].or_s401rn_k$(_get_a__7mlogg(this)[2]);
      c3 = _get_a__7mlogg(this)[15].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[2].and_jhajnj_k$(_get_a__7mlogg(this)[8]);
      c4 = _get_a__7mlogg(this)[21].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[2] = c0;
      _get_a__7mlogg(this)[8] = c1;
      _get_a__7mlogg(this)[14] = c2;
      _get_a__7mlogg(this)[15] = c3;
      _get_a__7mlogg(this)[21] = c4;
      _get_a__7mlogg(this)[0] = _get_a__7mlogg(this)[0].xor_jjua9n_k$(Companion_getInstance_9().RC_1[j + 0 | 0]);
      tt0 = _get_a__7mlogg(this)[6].xor_jjua9n_k$(_get_a__7mlogg(this)[9]);
      tt1 = _get_a__7mlogg(this)[7].xor_jjua9n_k$(_get_a__7mlogg(this)[5]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[8].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[24].xor_jjua9n_k$(_get_a__7mlogg(this)[22]);
      tt3 = _get_a__7mlogg(this)[20].xor_jjua9n_k$(_get_a__7mlogg(this)[23]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[21]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t0 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[12].xor_jjua9n_k$(_get_a__7mlogg(this)[10]);
      tt1 = _get_a__7mlogg(this)[13].xor_jjua9n_k$(_get_a__7mlogg(this)[11]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[14].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[0].xor_jjua9n_k$(_get_a__7mlogg(this)[3]);
      tt3 = _get_a__7mlogg(this)[1].xor_jjua9n_k$(_get_a__7mlogg(this)[4]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[2]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t1 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[18].xor_jjua9n_k$(_get_a__7mlogg(this)[16]);
      tt1 = _get_a__7mlogg(this)[19].xor_jjua9n_k$(_get_a__7mlogg(this)[17]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[15].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[6].xor_jjua9n_k$(_get_a__7mlogg(this)[9]);
      tt3 = _get_a__7mlogg(this)[7].xor_jjua9n_k$(_get_a__7mlogg(this)[5]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[8]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t2 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[24].xor_jjua9n_k$(_get_a__7mlogg(this)[22]);
      tt1 = _get_a__7mlogg(this)[20].xor_jjua9n_k$(_get_a__7mlogg(this)[23]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[21].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[12].xor_jjua9n_k$(_get_a__7mlogg(this)[10]);
      tt3 = _get_a__7mlogg(this)[13].xor_jjua9n_k$(_get_a__7mlogg(this)[11]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[14]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t3 = tt0.xor_jjua9n_k$(tt2);
      tt0 = _get_a__7mlogg(this)[0].xor_jjua9n_k$(_get_a__7mlogg(this)[3]);
      tt1 = _get_a__7mlogg(this)[1].xor_jjua9n_k$(_get_a__7mlogg(this)[4]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[2].xor_jjua9n_k$(tt1));
      tt0 = tt0.shl_po5ip6_k$(1).or_s401rn_k$(tt0.ushr_rr8rvr_k$(63));
      tt2 = _get_a__7mlogg(this)[18].xor_jjua9n_k$(_get_a__7mlogg(this)[16]);
      tt3 = _get_a__7mlogg(this)[19].xor_jjua9n_k$(_get_a__7mlogg(this)[17]);
      tt0 = tt0.xor_jjua9n_k$(_get_a__7mlogg(this)[15]);
      tt2 = tt2.xor_jjua9n_k$(tt3);
      t4 = tt0.xor_jjua9n_k$(tt2);
      _get_a__7mlogg(this)[0] = _get_a__7mlogg(this)[0].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[3] = _get_a__7mlogg(this)[3].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[1] = _get_a__7mlogg(this)[1].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[4] = _get_a__7mlogg(this)[4].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[2] = _get_a__7mlogg(this)[2].xor_jjua9n_k$(t0);
      _get_a__7mlogg(this)[6] = _get_a__7mlogg(this)[6].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[9] = _get_a__7mlogg(this)[9].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[7] = _get_a__7mlogg(this)[7].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[5] = _get_a__7mlogg(this)[5].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[8] = _get_a__7mlogg(this)[8].xor_jjua9n_k$(t1);
      _get_a__7mlogg(this)[12] = _get_a__7mlogg(this)[12].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[10] = _get_a__7mlogg(this)[10].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[13] = _get_a__7mlogg(this)[13].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[11] = _get_a__7mlogg(this)[11].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[14] = _get_a__7mlogg(this)[14].xor_jjua9n_k$(t2);
      _get_a__7mlogg(this)[18] = _get_a__7mlogg(this)[18].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[16] = _get_a__7mlogg(this)[16].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[19] = _get_a__7mlogg(this)[19].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[17] = _get_a__7mlogg(this)[17].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[15] = _get_a__7mlogg(this)[15].xor_jjua9n_k$(t3);
      _get_a__7mlogg(this)[24] = _get_a__7mlogg(this)[24].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[22] = _get_a__7mlogg(this)[22].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[20] = _get_a__7mlogg(this)[20].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[23] = _get_a__7mlogg(this)[23].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[21] = _get_a__7mlogg(this)[21].xor_jjua9n_k$(t4);
      _get_a__7mlogg(this)[3] = _get_a__7mlogg(this)[3].shl_po5ip6_k$(36).or_s401rn_k$(_get_a__7mlogg(this)[3].ushr_rr8rvr_k$(28));
      _get_a__7mlogg(this)[1] = _get_a__7mlogg(this)[1].shl_po5ip6_k$(3).or_s401rn_k$(_get_a__7mlogg(this)[1].ushr_rr8rvr_k$(61));
      _get_a__7mlogg(this)[4] = _get_a__7mlogg(this)[4].shl_po5ip6_k$(41).or_s401rn_k$(_get_a__7mlogg(this)[4].ushr_rr8rvr_k$(23));
      _get_a__7mlogg(this)[2] = _get_a__7mlogg(this)[2].shl_po5ip6_k$(18).or_s401rn_k$(_get_a__7mlogg(this)[2].ushr_rr8rvr_k$(46));
      _get_a__7mlogg(this)[6] = _get_a__7mlogg(this)[6].shl_po5ip6_k$(1).or_s401rn_k$(_get_a__7mlogg(this)[6].ushr_rr8rvr_k$(63));
      _get_a__7mlogg(this)[9] = _get_a__7mlogg(this)[9].shl_po5ip6_k$(44).or_s401rn_k$(_get_a__7mlogg(this)[9].ushr_rr8rvr_k$(20));
      _get_a__7mlogg(this)[7] = _get_a__7mlogg(this)[7].shl_po5ip6_k$(10).or_s401rn_k$(_get_a__7mlogg(this)[7].ushr_rr8rvr_k$(54));
      _get_a__7mlogg(this)[5] = _get_a__7mlogg(this)[5].shl_po5ip6_k$(45).or_s401rn_k$(_get_a__7mlogg(this)[5].ushr_rr8rvr_k$(19));
      _get_a__7mlogg(this)[8] = _get_a__7mlogg(this)[8].shl_po5ip6_k$(2).or_s401rn_k$(_get_a__7mlogg(this)[8].ushr_rr8rvr_k$(62));
      _get_a__7mlogg(this)[12] = _get_a__7mlogg(this)[12].shl_po5ip6_k$(62).or_s401rn_k$(_get_a__7mlogg(this)[12].ushr_rr8rvr_k$(2));
      _get_a__7mlogg(this)[10] = _get_a__7mlogg(this)[10].shl_po5ip6_k$(6).or_s401rn_k$(_get_a__7mlogg(this)[10].ushr_rr8rvr_k$(58));
      _get_a__7mlogg(this)[13] = _get_a__7mlogg(this)[13].shl_po5ip6_k$(43).or_s401rn_k$(_get_a__7mlogg(this)[13].ushr_rr8rvr_k$(21));
      _get_a__7mlogg(this)[11] = _get_a__7mlogg(this)[11].shl_po5ip6_k$(15).or_s401rn_k$(_get_a__7mlogg(this)[11].ushr_rr8rvr_k$(49));
      _get_a__7mlogg(this)[14] = _get_a__7mlogg(this)[14].shl_po5ip6_k$(61).or_s401rn_k$(_get_a__7mlogg(this)[14].ushr_rr8rvr_k$(3));
      _get_a__7mlogg(this)[18] = _get_a__7mlogg(this)[18].shl_po5ip6_k$(28).or_s401rn_k$(_get_a__7mlogg(this)[18].ushr_rr8rvr_k$(36));
      _get_a__7mlogg(this)[16] = _get_a__7mlogg(this)[16].shl_po5ip6_k$(55).or_s401rn_k$(_get_a__7mlogg(this)[16].ushr_rr8rvr_k$(9));
      _get_a__7mlogg(this)[19] = _get_a__7mlogg(this)[19].shl_po5ip6_k$(25).or_s401rn_k$(_get_a__7mlogg(this)[19].ushr_rr8rvr_k$(39));
      _get_a__7mlogg(this)[17] = _get_a__7mlogg(this)[17].shl_po5ip6_k$(21).or_s401rn_k$(_get_a__7mlogg(this)[17].ushr_rr8rvr_k$(43));
      _get_a__7mlogg(this)[15] = _get_a__7mlogg(this)[15].shl_po5ip6_k$(56).or_s401rn_k$(_get_a__7mlogg(this)[15].ushr_rr8rvr_k$(8));
      _get_a__7mlogg(this)[24] = _get_a__7mlogg(this)[24].shl_po5ip6_k$(27).or_s401rn_k$(_get_a__7mlogg(this)[24].ushr_rr8rvr_k$(37));
      _get_a__7mlogg(this)[22] = _get_a__7mlogg(this)[22].shl_po5ip6_k$(20).or_s401rn_k$(_get_a__7mlogg(this)[22].ushr_rr8rvr_k$(44));
      _get_a__7mlogg(this)[20] = _get_a__7mlogg(this)[20].shl_po5ip6_k$(39).or_s401rn_k$(_get_a__7mlogg(this)[20].ushr_rr8rvr_k$(25));
      _get_a__7mlogg(this)[23] = _get_a__7mlogg(this)[23].shl_po5ip6_k$(8).or_s401rn_k$(_get_a__7mlogg(this)[23].ushr_rr8rvr_k$(56));
      _get_a__7mlogg(this)[21] = _get_a__7mlogg(this)[21].shl_po5ip6_k$(14).or_s401rn_k$(_get_a__7mlogg(this)[21].ushr_rr8rvr_k$(50));
      bnn = _get_a__7mlogg(this)[13].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[9].or_s401rn_k$(_get_a__7mlogg(this)[13]);
      c0 = _get_a__7mlogg(this)[0].xor_jjua9n_k$(kt);
      kt = bnn.or_s401rn_k$(_get_a__7mlogg(this)[17]);
      c1 = _get_a__7mlogg(this)[9].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[17].and_jhajnj_k$(_get_a__7mlogg(this)[21]);
      c2 = _get_a__7mlogg(this)[13].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[21].or_s401rn_k$(_get_a__7mlogg(this)[0]);
      c3 = _get_a__7mlogg(this)[17].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[0].and_jhajnj_k$(_get_a__7mlogg(this)[9]);
      c4 = _get_a__7mlogg(this)[21].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[0] = c0;
      _get_a__7mlogg(this)[9] = c1;
      _get_a__7mlogg(this)[13] = c2;
      _get_a__7mlogg(this)[17] = c3;
      _get_a__7mlogg(this)[21] = c4;
      bnn = _get_a__7mlogg(this)[14].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[22].or_s401rn_k$(_get_a__7mlogg(this)[1]);
      c0 = _get_a__7mlogg(this)[18].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[1].and_jhajnj_k$(_get_a__7mlogg(this)[5]);
      c1 = _get_a__7mlogg(this)[22].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[5].or_s401rn_k$(bnn);
      c2 = _get_a__7mlogg(this)[1].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[14].or_s401rn_k$(_get_a__7mlogg(this)[18]);
      c3 = _get_a__7mlogg(this)[5].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[18].and_jhajnj_k$(_get_a__7mlogg(this)[22]);
      c4 = _get_a__7mlogg(this)[14].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[18] = c0;
      _get_a__7mlogg(this)[22] = c1;
      _get_a__7mlogg(this)[1] = c2;
      _get_a__7mlogg(this)[5] = c3;
      _get_a__7mlogg(this)[14] = c4;
      bnn = _get_a__7mlogg(this)[23].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[10].or_s401rn_k$(_get_a__7mlogg(this)[19]);
      c0 = _get_a__7mlogg(this)[6].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[19].and_jhajnj_k$(_get_a__7mlogg(this)[23]);
      c1 = _get_a__7mlogg(this)[10].xor_jjua9n_k$(kt);
      kt = bnn.and_jhajnj_k$(_get_a__7mlogg(this)[2]);
      c2 = _get_a__7mlogg(this)[19].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[2].or_s401rn_k$(_get_a__7mlogg(this)[6]);
      c3 = bnn.xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[6].and_jhajnj_k$(_get_a__7mlogg(this)[10]);
      c4 = _get_a__7mlogg(this)[2].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[6] = c0;
      _get_a__7mlogg(this)[10] = c1;
      _get_a__7mlogg(this)[19] = c2;
      _get_a__7mlogg(this)[23] = c3;
      _get_a__7mlogg(this)[2] = c4;
      bnn = _get_a__7mlogg(this)[11].inv_28kx_k$();
      kt = _get_a__7mlogg(this)[3].and_jhajnj_k$(_get_a__7mlogg(this)[7]);
      c0 = _get_a__7mlogg(this)[24].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[7].or_s401rn_k$(_get_a__7mlogg(this)[11]);
      c1 = _get_a__7mlogg(this)[3].xor_jjua9n_k$(kt);
      kt = bnn.or_s401rn_k$(_get_a__7mlogg(this)[15]);
      c2 = _get_a__7mlogg(this)[7].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[15].and_jhajnj_k$(_get_a__7mlogg(this)[24]);
      c3 = bnn.xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[24].or_s401rn_k$(_get_a__7mlogg(this)[3]);
      c4 = _get_a__7mlogg(this)[15].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[24] = c0;
      _get_a__7mlogg(this)[3] = c1;
      _get_a__7mlogg(this)[7] = c2;
      _get_a__7mlogg(this)[11] = c3;
      _get_a__7mlogg(this)[15] = c4;
      bnn = _get_a__7mlogg(this)[16].inv_28kx_k$();
      kt = bnn.and_jhajnj_k$(_get_a__7mlogg(this)[20]);
      c0 = _get_a__7mlogg(this)[12].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[20].or_s401rn_k$(_get_a__7mlogg(this)[4]);
      c1 = bnn.xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[4].and_jhajnj_k$(_get_a__7mlogg(this)[8]);
      c2 = _get_a__7mlogg(this)[20].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[8].or_s401rn_k$(_get_a__7mlogg(this)[12]);
      c3 = _get_a__7mlogg(this)[4].xor_jjua9n_k$(kt);
      kt = _get_a__7mlogg(this)[12].and_jhajnj_k$(_get_a__7mlogg(this)[16]);
      c4 = _get_a__7mlogg(this)[8].xor_jjua9n_k$(kt);
      _get_a__7mlogg(this)[12] = c0;
      _get_a__7mlogg(this)[16] = c1;
      _get_a__7mlogg(this)[20] = c2;
      _get_a__7mlogg(this)[4] = c3;
      _get_a__7mlogg(this)[8] = c4;
      _get_a__7mlogg(this)[0] = _get_a__7mlogg(this)[0].xor_jjua9n_k$(Companion_getInstance_9().RC_1[j + 1 | 0]);
      t = _get_a__7mlogg(this)[5];
      _get_a__7mlogg(this)[5] = _get_a__7mlogg(this)[18];
      _get_a__7mlogg(this)[18] = _get_a__7mlogg(this)[11];
      _get_a__7mlogg(this)[11] = _get_a__7mlogg(this)[10];
      _get_a__7mlogg(this)[10] = _get_a__7mlogg(this)[6];
      _get_a__7mlogg(this)[6] = _get_a__7mlogg(this)[22];
      _get_a__7mlogg(this)[22] = _get_a__7mlogg(this)[20];
      _get_a__7mlogg(this)[20] = _get_a__7mlogg(this)[12];
      _get_a__7mlogg(this)[12] = _get_a__7mlogg(this)[19];
      _get_a__7mlogg(this)[19] = _get_a__7mlogg(this)[15];
      _get_a__7mlogg(this)[15] = _get_a__7mlogg(this)[24];
      _get_a__7mlogg(this)[24] = _get_a__7mlogg(this)[8];
      _get_a__7mlogg(this)[8] = t;
      t = _get_a__7mlogg(this)[1];
      _get_a__7mlogg(this)[1] = _get_a__7mlogg(this)[9];
      _get_a__7mlogg(this)[9] = _get_a__7mlogg(this)[14];
      _get_a__7mlogg(this)[14] = _get_a__7mlogg(this)[2];
      _get_a__7mlogg(this)[2] = _get_a__7mlogg(this)[13];
      _get_a__7mlogg(this)[13] = _get_a__7mlogg(this)[23];
      _get_a__7mlogg(this)[23] = _get_a__7mlogg(this)[4];
      _get_a__7mlogg(this)[4] = _get_a__7mlogg(this)[21];
      _get_a__7mlogg(this)[21] = _get_a__7mlogg(this)[16];
      _get_a__7mlogg(this)[16] = _get_a__7mlogg(this)[3];
      _get_a__7mlogg(this)[3] = _get_a__7mlogg(this)[17];
      _get_a__7mlogg(this)[17] = _get_a__7mlogg(this)[7];
      _get_a__7mlogg(this)[7] = t;
      j = j + 2 | 0;
    }
  };
  KeccakDigest.$metadata$ = classMeta('KeccakDigest', undefined, undefined, undefined, undefined, HashingBase.prototype);
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
  function toBinary(_this__u8e3s4) {
    var blen = _this__u8e3s4.length / 2 | 0;
    var buf = new Int8Array(blen);
    var inductionVariable = 0;
    if (inductionVariable < blen)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = imul(i, 2);
        var tmp1_substring = imul(i, 2) + 2 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = _this__u8e3s4;
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, tmp1_substring);
        var bs = tmp$ret$1;
        buf[i] = toByte(toInt(bs, 16));
      }
       while (inductionVariable < blen);
    return buf;
  }
  function BLAKE224() {
    HashingBase.call(this);
  }
  BLAKE224.prototype.get_digestLength_64702b_k$ = function () {
    return 28;
  };
  BLAKE224.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  BLAKE224.prototype.toString = function () {
    return 'BLAKE-224';
  };
  BLAKE224.prototype.engineReset_tikogs_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE224.prototype.processBlock_6l7x9o_k$ = function (data) {
    return Unit_getInstance();
  };
  BLAKE224.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    return Unit_getInstance();
  };
  BLAKE224.prototype.doInit_ec9a0a_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE224.prototype.update_48pyh5_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE224.prototype.digest_m0ziv0_k$ = function () {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE224.prototype.digest_g3p5dr_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE224.$metadata$ = classMeta('BLAKE224', undefined, undefined, undefined, undefined, HashingBase.prototype);
  function BLAKE256() {
    HashingBase.call(this);
  }
  BLAKE256.prototype.get_digestLength_64702b_k$ = function () {
    return 32;
  };
  BLAKE256.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 64;
  };
  BLAKE256.prototype.toString = function () {
    return 'BLAKE-256';
  };
  BLAKE256.prototype.engineReset_tikogs_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE256.prototype.processBlock_6l7x9o_k$ = function (data) {
    return Unit_getInstance();
  };
  BLAKE256.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    return Unit_getInstance();
  };
  BLAKE256.prototype.doInit_ec9a0a_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE256.prototype.update_48pyh5_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE256.prototype.digest_m0ziv0_k$ = function () {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE256.prototype.digest_g3p5dr_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE256.$metadata$ = classMeta('BLAKE256', undefined, undefined, undefined, undefined, HashingBase.prototype);
  function BLAKE384() {
    HashingBase.call(this);
  }
  BLAKE384.prototype.get_digestLength_64702b_k$ = function () {
    return 48;
  };
  BLAKE384.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE384.prototype.toString = function () {
    return 'BLAKE-384';
  };
  BLAKE384.prototype.engineReset_tikogs_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE384.prototype.processBlock_6l7x9o_k$ = function (data) {
    return Unit_getInstance();
  };
  BLAKE384.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    return Unit_getInstance();
  };
  BLAKE384.prototype.doInit_ec9a0a_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE384.prototype.update_48pyh5_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE384.prototype.digest_m0ziv0_k$ = function () {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE384.prototype.digest_g3p5dr_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE384.$metadata$ = classMeta('BLAKE384', undefined, undefined, undefined, undefined, HashingBase.prototype);
  function BLAKE512() {
    HashingBase.call(this);
  }
  BLAKE512.prototype.get_digestLength_64702b_k$ = function () {
    return 64;
  };
  BLAKE512.prototype.get_blockLength_ozdqi2_k$ = function () {
    return 128;
  };
  BLAKE512.prototype.toString = function () {
    return 'BLAKE-512';
  };
  BLAKE512.prototype.engineReset_tikogs_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE512.prototype.processBlock_6l7x9o_k$ = function (data) {
    return Unit_getInstance();
  };
  BLAKE512.prototype.doPadding_i7rt9p_k$ = function (output, outputOffset) {
    return Unit_getInstance();
  };
  BLAKE512.prototype.doInit_ec9a0a_k$ = function () {
    return Unit_getInstance();
  };
  BLAKE512.prototype.update_48pyh5_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE512.prototype.digest_m0ziv0_k$ = function () {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE512.prototype.digest_g3p5dr_k$ = function (input) {
    throw new NotImplementedError('Not implemented');
  };
  BLAKE512.$metadata$ = classMeta('BLAKE512', undefined, undefined, undefined, undefined, HashingBase.prototype);
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
  MD2.prototype.createHmac_eea1ku_k$ = createHmac;
  MD2.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  MD2.prototype.hmac_pnxnkr_k$ = hmac;
  MD2.prototype.hmac$default_f281s0_k$ = hmac$default;
  MD4.prototype.createHmac_eea1ku_k$ = createHmac;
  MD4.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  MD4.prototype.hmac_pnxnkr_k$ = hmac;
  MD4.prototype.hmac$default_f281s0_k$ = hmac$default;
  MD5.prototype.createHmac_eea1ku_k$ = createHmac;
  MD5.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  MD5.prototype.hmac_pnxnkr_k$ = hmac;
  MD5.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA0.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA0.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA0.prototype.hmac_pnxnkr_k$ = hmac;
  SHA0.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA1.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA1.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA1.prototype.hmac_pnxnkr_k$ = hmac;
  SHA1.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA224.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA224.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA224.prototype.hmac_pnxnkr_k$ = hmac;
  SHA224.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA256.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA256.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA256.prototype.hmac_pnxnkr_k$ = hmac;
  SHA256.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA384.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA384.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA384.prototype.hmac_pnxnkr_k$ = hmac;
  SHA384.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA3_224.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA3_224.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA3_224.prototype.hmac_pnxnkr_k$ = hmac;
  SHA3_224.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA3_256.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA3_256.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA3_256.prototype.hmac_pnxnkr_k$ = hmac;
  SHA3_256.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA3_384.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA3_384.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA3_384.prototype.hmac_pnxnkr_k$ = hmac;
  SHA3_384.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA3_512.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA3_512.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA3_512.prototype.hmac_pnxnkr_k$ = hmac;
  SHA3_512.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA512.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA512.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA512.prototype.hmac_pnxnkr_k$ = hmac;
  SHA512.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA512_224.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA512_224.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA512_224.prototype.hmac_pnxnkr_k$ = hmac;
  SHA512_224.prototype.hmac$default_f281s0_k$ = hmac$default;
  SHA512_256.prototype.createHmac_eea1ku_k$ = createHmac;
  SHA512_256.prototype.createHmac$default_a5ydun_k$ = createHmac$default;
  SHA512_256.prototype.hmac_pnxnkr_k$ = hmac;
  SHA512_256.prototype.hmac$default_f281s0_k$ = hmac$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyed_init_$Create$;
  _.$_$.b = Keyed_init_$Create$_0;
  _.$_$.c = Keyed_init_$Create$_1;
  _.$_$.d = Keyed_init_$Create$_2;
  _.$_$.e = Keyed_init_$Create$_3;
  _.$_$.f = Keyed_init_$Create$_4;
  _.$_$.g = Keyed_init_$Create$_5;
  _.$_$.h = Keyed_init_$Create$_6;
  _.$_$.i = Keyed_7;
  _.$_$.j = toBinary;
  _.$_$.k = toHexString;
  _.$_$.l = BLAKE224;
  _.$_$.m = BLAKE256;
  _.$_$.n = BLAKE2B_160;
  _.$_$.o = BLAKE2B_256;
  _.$_$.p = BLAKE2B_384;
  _.$_$.q = BLAKE2B_512;
  _.$_$.r = BLAKE2S_128;
  _.$_$.s = BLAKE2S_160;
  _.$_$.t = BLAKE2S_224;
  _.$_$.u = BLAKE2S_256;
  _.$_$.v = BLAKE384;
  _.$_$.w = BLAKE512;
  _.$_$.x = MD2;
  _.$_$.y = MD4;
  _.$_$.z = MD5;
  _.$_$.a1 = SHA0;
  _.$_$.b1 = SHA1;
  _.$_$.c1 = SHA224;
  _.$_$.d1 = SHA256;
  _.$_$.e1 = SHA384;
  _.$_$.f1 = SHA3_224;
  _.$_$.g1 = SHA3_256;
  _.$_$.h1 = SHA3_384;
  _.$_$.i1 = SHA3_512;
  _.$_$.j1 = SHA512_224;
  _.$_$.k1 = SHA512_256;
  _.$_$.l1 = SHA512;
  //endregion
  return _;
}));

//# sourceMappingURL=ApolloHashing.js.map
