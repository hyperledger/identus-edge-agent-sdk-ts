(function (_, io_iohk_atala_prism_apollo_hashing_external_hash_oe7kr1, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qd;
  var Unit_getInstance = kotlin_kotlin.$_$.r4;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var classMeta = kotlin_kotlin.$_$.e9;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.ub;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var padStart = kotlin_kotlin.$_$.gb;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var THROW_CCE = kotlin_kotlin.$_$.qc;
  var isInterface = kotlin_kotlin.$_$.t9;
  var Long = kotlin_kotlin.$_$.lc;
  var arrayCopy = kotlin_kotlin.$_$.j5;
  var toLong = kotlin_kotlin.$_$.ia;
  var toByte = kotlin_kotlin.$_$.ha;
  var rotateLeft = kotlin_kotlin.$_$.od;
  var rotateLeft_0 = kotlin_kotlin.$_$.nd;
  var rotateRight = kotlin_kotlin.$_$.pd;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var NotImplementedError = kotlin_kotlin.$_$.mc;
  var isObject = kotlin_kotlin.$_$.w9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var numberToByte = kotlin_kotlin.$_$.ba;
  var toByteArray = kotlin_kotlin.$_$.o7;
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
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toHexString;
  _.$_$.b = SHA256;
  //endregion
  return _;
}(module.exports, require('hash.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloHashing.js.map
