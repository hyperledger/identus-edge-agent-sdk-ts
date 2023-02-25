(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t;
  var Unit_getInstance = kotlin_kotlin.$_$.g3;
  var toByte = kotlin_kotlin.$_$.k6;
  var toString = kotlin_kotlin.$_$.h7;
  var fill$default = kotlin_kotlin.$_$.d;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g1;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var ensureNotNull = kotlin_kotlin.$_$.e8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var charArrayOf = kotlin_kotlin.$_$.r5;
  var arrayCopy = kotlin_kotlin.$_$.l3;
  var encodeToByteArray = kotlin_kotlin.$_$.z6;
  var classMeta = kotlin_kotlin.$_$.u5;
  var decodeToString = kotlin_kotlin.$_$.y6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.f8;
  var equals = kotlin_kotlin.$_$.v5;
  var interfaceMeta = kotlin_kotlin.$_$.z5;
  //endregion
  //region block: pre-declaration
  //endregion
  function _get_fromBase64__zbwxsi($this) {
    return $this.fromBase64__1;
  }
  function _get_fromBase64URL__902wsb($this) {
    return $this.fromBase64URL_1;
  }
  function _get_isURL__g07qt0($this) {
    return $this.isURL_1;
  }
  function _get_isMIME__wk86l($this) {
    return $this.isMIME_1;
  }
  function outLength($this, src, sp, sl) {
    var sp_0 = sp;
    var base64 = $this.isURL_1 ? Companion_getInstance().fromBase64URL_1 : Companion_getInstance().fromBase64__1;
    var paddings = 0;
    var len = sl - sp_0 | 0;
    if (len === 0)
      return 0;
    if (len < 2) {
      if ($this.isMIME_1 ? base64[0] === -1 : false)
        return 0;
      throw IllegalArgumentException_init_$Create$('Input byte[] should at least have 2 bytes for base64 bytes');
    }
    if ($this.isMIME_1) {
      var n = 0;
      $l$loop: while (sp_0 < sl) {
        var tmp0 = sp_0;
        sp_0 = tmp0 + 1 | 0;
        var b = src[tmp0] & 255;
        var tmp = b;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = 61;
        if (tmp === tmp$ret$0) {
          len = len - ((sl - sp_0 | 0) + 1 | 0) | 0;
          break $l$loop;
        }
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp0_also = base64[b];
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'io.iohk.atala.prism.apollo.base64.Decoder.outLength.<anonymous>' call
        b = tmp0_also;
        tmp$ret$1 = tmp0_also;
        if (tmp$ret$1 === -1) {
          var tmp1 = n;
          n = tmp1 + 1 | 0;
        }
      }
      len = len - n | 0;
    } else {
      var tmp_0 = src[sl - 1 | 0];
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 61;
      if (tmp_0 === toByte(tmp$ret$2)) {
        var tmp2 = paddings;
        paddings = tmp2 + 1 | 0;
        var tmp_1 = src[sl - 2 | 0];
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        tmp$ret$3 = 61;
        if (tmp_1 === toByte(tmp$ret$3)) {
          var tmp3 = paddings;
          paddings = tmp3 + 1 | 0;
        }
      }
    }
    if (paddings === 0 ? !((len & 3) === 0) : false)
      paddings = 4 - (len & 3) | 0;
    return imul(3, (len + 3 | 0) / 4 | 0) - paddings | 0;
  }
  function decode0($this, src, sp, sl, dst) {
    var sp_0 = sp;
    var base64 = $this.isURL_1 ? Companion_getInstance().fromBase64URL_1 : Companion_getInstance().fromBase64__1;
    var dp = 0;
    var bits = 0;
    var shiftto = 18;
    $l$loop_0: while (sp_0 < sl) {
      var tmp0 = sp_0;
      sp_0 = tmp0 + 1 | 0;
      var b = src[tmp0] & 255;
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = base64[b];
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.iohk.atala.prism.apollo.base64.Decoder.decode0.<anonymous>' call
      b = tmp0_also;
      tmp$ret$0 = tmp0_also;
      if (tmp$ret$0 < 0) {
        if (b === -2) {
          var tmp;
          var tmp_0;
          if (shiftto === 6) {
            var tmp_1;
            if (sp_0 === sl) {
              tmp_1 = true;
            } else {
              var tmp1 = sp_0;
              sp_0 = tmp1 + 1 | 0;
              var tmp_2 = src[tmp1];
              var tmp$ret$1;
              // Inline function 'kotlin.code' call
              tmp$ret$1 = 61;
              tmp_1 = !(tmp_2 === toByte(tmp$ret$1));
            }
            tmp_0 = tmp_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp = true;
          } else {
            tmp = shiftto === 18;
          }
          if (tmp) {
            throw IllegalArgumentException_init_$Create$('Input byte array has wrong 4-byte ending unit');
          }
          break $l$loop_0;
        }
        if ($this.isMIME_1)
          continue $l$loop_0;
        else
          throw IllegalArgumentException_init_$Create$('Illegal base64 character ' + toString(src[sp_0 - 1 | 0], 16));
      }
      bits = bits | b << shiftto;
      shiftto = shiftto - 6 | 0;
      if (shiftto < 0) {
        var tmp2 = dp;
        dp = tmp2 + 1 | 0;
        dst[tmp2] = toByte(bits >> 16);
        var tmp3 = dp;
        dp = tmp3 + 1 | 0;
        dst[tmp3] = toByte(bits >> 8);
        var tmp4 = dp;
        dp = tmp4 + 1 | 0;
        dst[tmp4] = toByte(bits);
        shiftto = 18;
        bits = 0;
      }
    }
    var tmp5_subject = shiftto;
    switch (tmp5_subject) {
      case 6:
        var tmp6 = dp;
        dp = tmp6 + 1 | 0;
        dst[tmp6] = toByte(bits >> 16);
        ;
        break;
      case 0:
        var tmp7 = dp;
        dp = tmp7 + 1 | 0;
        dst[tmp7] = toByte(bits >> 16);
        var tmp8 = dp;
        dp = tmp8 + 1 | 0;
        dst[tmp8] = toByte(bits >> 8);
        ;
        break;
      case 12:
        throw IllegalArgumentException_init_$Create$('Last unit does not have enough valid bits');
    }
    $l$loop_1: while (sp_0 < sl) {
      var tmp_3;
      if ($this.isMIME_1) {
        var tmp9 = sp_0;
        sp_0 = tmp9 + 1 | 0;
        tmp_3 = base64[src[tmp9]] < 0;
      } else {
        tmp_3 = false;
      }
      if (tmp_3)
        continue $l$loop_1;
      throw IllegalArgumentException_init_$Create$('Input byte array has incorrect ending byte at ' + sp_0);
    }
    return dp;
  }
  function Companion() {
    Companion_instance = this;
    this.fromBase64__1 = new Int32Array(256);
    fill$default(this.fromBase64__1, -1, 0, 0, 6, null);
    var inductionVariable = 0;
    var last = Companion_getInstance_0().toBase64__1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = Companion_getInstance_0().toBase64__1[i];
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        this.fromBase64__1[tmp$ret$0] = i;
      }
       while (inductionVariable <= last);
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 61;
    this.fromBase64__1[tmp$ret$1] = -2;
    this.fromBase64URL_1 = new Int32Array(256);
    fill$default(this.fromBase64URL_1, -1, 0, 0, 6, null);
    var inductionVariable_0 = 0;
    var last_0 = Companion_getInstance_0().toBase64URL_1.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g_0 = Companion_getInstance_0().toBase64URL_1[i_0];
        tmp$ret$2 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g_0);
        this.fromBase64URL_1[tmp$ret$2] = i_0;
      }
       while (inductionVariable_0 <= last_0);
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    tmp$ret$3 = 61;
    this.fromBase64URL_1[tmp$ret$3] = -2;
    this.RFC4648__1 = new Decoder(false, false);
    this.RFC4648_URLSAFE_1 = new Decoder(true, false);
    this.RFC2045__1 = new Decoder(false, true);
  }
  Companion.prototype.get_RFC4648_vi4er0_k$ = function () {
    return this.RFC4648__1;
  };
  Companion.prototype.get_RFC4648_URLSAFE_g2f5xl_k$ = function () {
    return this.RFC4648_URLSAFE_1;
  };
  Companion.prototype.get_RFC2045_vi30bp_k$ = function () {
    return this.RFC2045__1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _get_MIMELINEMAX__3z1ek5($this) {
    return $this.MIMELINEMAX_1;
  }
  function _get_CRLF__cmup8i($this) {
    return $this.CRLF_1;
  }
  function _get_isURL__g07qt0_0($this) {
    return $this.isURL_1;
  }
  function _get_newline__cwcvsz($this) {
    return $this.newline_1;
  }
  function _get_linemax__g77jz3($this) {
    return $this.linemax_1;
  }
  function _get_doPadding__s7auwl($this) {
    return $this.doPadding_1;
  }
  function outLength_0($this, srclen) {
    var tmp;
    if ($this.doPadding_1) {
      tmp = imul(4, (srclen + 2 | 0) / 3 | 0);
    } else {
      var n = srclen % 3 | 0;
      tmp = imul(4, srclen / 3 | 0) + (n === 0 ? 0 : n + 1 | 0) | 0;
    }
    var len = tmp;
    if ($this.linemax_1 > 0)
      len = len + imul((len - 1 | 0) / $this.linemax_1 | 0, ensureNotNull($this.newline_1).length) | 0;
    return len;
  }
  function encode0($this, src, off, end, dst) {
    var base64 = $this.isURL_1 ? Companion_getInstance_0().toBase64URL_1 : Companion_getInstance_0().toBase64__1;
    var sp = off;
    var slen = imul((end - off | 0) / 3 | 0, 3);
    var sl = off + slen | 0;
    if ($this.linemax_1 > 0 ? slen > imul($this.linemax_1 / 4 | 0, 3) : false)
      slen = imul($this.linemax_1 / 4 | 0, 3);
    var dp = 0;
    while (sp < sl) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = sp + slen | 0;
      tmp$ret$0 = Math.min(tmp0_min, sl);
      var sl0 = tmp$ret$0;
      var sp0 = sp;
      var dp0 = dp;
      while (sp0 < sl0) {
        var tmp2 = sp0;
        sp0 = tmp2 + 1 | 0;
        var tmp = (src[tmp2] & 255) << 16;
        var tmp1 = sp0;
        sp0 = tmp1 + 1 | 0;
        var tmp_0 = tmp | (src[tmp1] & 255) << 8;
        var tmp0 = sp0;
        sp0 = tmp0 + 1 | 0;
        var bits = tmp_0 | src[tmp0] & 255;
        var tmp3 = dp0;
        dp0 = tmp3 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        var tmp1__get_code__adl84j = base64[(bits >>> 18 | 0) & 63];
        tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
        dst[tmp3] = toByte(tmp$ret$1);
        var tmp4 = dp0;
        dp0 = tmp4 + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.code' call
        var tmp2__get_code__cifwzm = base64[(bits >>> 12 | 0) & 63];
        tmp$ret$2 = Char__toInt_impl_vasixd(tmp2__get_code__cifwzm);
        dst[tmp4] = toByte(tmp$ret$2);
        var tmp5 = dp0;
        dp0 = tmp5 + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        var tmp3__get_code__enalup = base64[(bits >>> 6 | 0) & 63];
        tmp$ret$3 = Char__toInt_impl_vasixd(tmp3__get_code__enalup);
        dst[tmp5] = toByte(tmp$ret$3);
        var tmp6 = dp0;
        dp0 = tmp6 + 1 | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.code' call
        var tmp4__get_code__gs5aps = base64[bits & 63];
        tmp$ret$4 = Char__toInt_impl_vasixd(tmp4__get_code__gs5aps);
        dst[tmp6] = toByte(tmp$ret$4);
      }
      var dlen = imul((sl0 - sp | 0) / 3 | 0, 4);
      dp = dp + dlen | 0;
      sp = sl0;
      if (dlen === $this.linemax_1 ? sp < end : false) {
        var indexedObject = ensureNotNull($this.newline_1);
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var b = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp8 = dp;
          dp = tmp8 + 1 | 0;
          dst[tmp8] = b;
        }
      }
    }
    if (sp < end) {
      var tmp9 = sp;
      sp = tmp9 + 1 | 0;
      var b0 = src[tmp9] & 255;
      var tmp10 = dp;
      dp = tmp10 + 1 | 0;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      var tmp5__get_code__iwzzkv = base64[b0 >> 2];
      tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      dst[tmp10] = toByte(tmp$ret$5);
      if (sp === end) {
        var tmp11 = dp;
        dp = tmp11 + 1 | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.code' call
        var tmp6__get_code__l1uofy = base64[b0 << 4 & 63];
        tmp$ret$6 = Char__toInt_impl_vasixd(tmp6__get_code__l1uofy);
        dst[tmp11] = toByte(tmp$ret$6);
        if ($this.doPadding_1) {
          var tmp12 = dp;
          dp = tmp12 + 1 | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.code' call
          tmp$ret$7 = 61;
          dst[tmp12] = toByte(tmp$ret$7);
          var tmp13 = dp;
          dp = tmp13 + 1 | 0;
          var tmp$ret$8;
          // Inline function 'kotlin.code' call
          tmp$ret$8 = 61;
          dst[tmp13] = toByte(tmp$ret$8);
        }
      } else {
        var tmp14 = sp;
        sp = tmp14 + 1 | 0;
        var b1 = src[tmp14] & 255;
        var tmp15 = dp;
        dp = tmp15 + 1 | 0;
        var tmp$ret$9;
        // Inline function 'kotlin.code' call
        var tmp7__get_code__n6pdb1 = base64[b0 << 4 & 63 | b1 >> 4];
        tmp$ret$9 = Char__toInt_impl_vasixd(tmp7__get_code__n6pdb1);
        dst[tmp15] = toByte(tmp$ret$9);
        var tmp16 = dp;
        dp = tmp16 + 1 | 0;
        var tmp$ret$10;
        // Inline function 'kotlin.code' call
        var tmp8__get_code__pbk264 = base64[b1 << 2 & 63];
        tmp$ret$10 = Char__toInt_impl_vasixd(tmp8__get_code__pbk264);
        dst[tmp16] = toByte(tmp$ret$10);
        if ($this.doPadding_1) {
          var tmp17 = dp;
          dp = tmp17 + 1 | 0;
          var tmp$ret$11;
          // Inline function 'kotlin.code' call
          tmp$ret$11 = 61;
          dst[tmp17] = toByte(tmp$ret$11);
        }
      }
    }
    return dp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(66), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(68), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(70), _Char___init__impl__6a9atx(71), _Char___init__impl__6a9atx(72), _Char___init__impl__6a9atx(73), _Char___init__impl__6a9atx(74), _Char___init__impl__6a9atx(75), _Char___init__impl__6a9atx(76), _Char___init__impl__6a9atx(77), _Char___init__impl__6a9atx(78), _Char___init__impl__6a9atx(79), _Char___init__impl__6a9atx(80), _Char___init__impl__6a9atx(81), _Char___init__impl__6a9atx(82), _Char___init__impl__6a9atx(83), _Char___init__impl__6a9atx(84), _Char___init__impl__6a9atx(85), _Char___init__impl__6a9atx(86), _Char___init__impl__6a9atx(87), _Char___init__impl__6a9atx(88), _Char___init__impl__6a9atx(89), _Char___init__impl__6a9atx(90), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102), _Char___init__impl__6a9atx(103), _Char___init__impl__6a9atx(104), _Char___init__impl__6a9atx(105), _Char___init__impl__6a9atx(106), _Char___init__impl__6a9atx(107), _Char___init__impl__6a9atx(108), _Char___init__impl__6a9atx(109), _Char___init__impl__6a9atx(110), _Char___init__impl__6a9atx(111), _Char___init__impl__6a9atx(112), _Char___init__impl__6a9atx(113), _Char___init__impl__6a9atx(114), _Char___init__impl__6a9atx(115), _Char___init__impl__6a9atx(116), _Char___init__impl__6a9atx(117), _Char___init__impl__6a9atx(118), _Char___init__impl__6a9atx(119), _Char___init__impl__6a9atx(120), _Char___init__impl__6a9atx(121), _Char___init__impl__6a9atx(122), _Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(43), _Char___init__impl__6a9atx(47)]);
    tmp.toBase64__1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.charArrayOf' call
    tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(66), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(68), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(70), _Char___init__impl__6a9atx(71), _Char___init__impl__6a9atx(72), _Char___init__impl__6a9atx(73), _Char___init__impl__6a9atx(74), _Char___init__impl__6a9atx(75), _Char___init__impl__6a9atx(76), _Char___init__impl__6a9atx(77), _Char___init__impl__6a9atx(78), _Char___init__impl__6a9atx(79), _Char___init__impl__6a9atx(80), _Char___init__impl__6a9atx(81), _Char___init__impl__6a9atx(82), _Char___init__impl__6a9atx(83), _Char___init__impl__6a9atx(84), _Char___init__impl__6a9atx(85), _Char___init__impl__6a9atx(86), _Char___init__impl__6a9atx(87), _Char___init__impl__6a9atx(88), _Char___init__impl__6a9atx(89), _Char___init__impl__6a9atx(90), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102), _Char___init__impl__6a9atx(103), _Char___init__impl__6a9atx(104), _Char___init__impl__6a9atx(105), _Char___init__impl__6a9atx(106), _Char___init__impl__6a9atx(107), _Char___init__impl__6a9atx(108), _Char___init__impl__6a9atx(109), _Char___init__impl__6a9atx(110), _Char___init__impl__6a9atx(111), _Char___init__impl__6a9atx(112), _Char___init__impl__6a9atx(113), _Char___init__impl__6a9atx(114), _Char___init__impl__6a9atx(115), _Char___init__impl__6a9atx(116), _Char___init__impl__6a9atx(117), _Char___init__impl__6a9atx(118), _Char___init__impl__6a9atx(119), _Char___init__impl__6a9atx(120), _Char___init__impl__6a9atx(121), _Char___init__impl__6a9atx(122), _Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(95)]);
    tmp_0.toBase64URL_1 = tmp$ret$1;
    this.MIMELINEMAX_1 = 76;
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.code' call
    tmp$ret$2 = 13;
    var tmp_2 = toByte(tmp$ret$2);
    var tmp$ret$3;
    // Inline function 'kotlin.code' call
    tmp$ret$3 = 10;
    var tmp0_byteArrayOf = new Int8Array([tmp_2, toByte(tmp$ret$3)]);
    tmp$ret$4 = tmp0_byteArrayOf;
    tmp_1.CRLF_1 = tmp$ret$4;
    this.RFC4648__1 = new Encoder(false, null, -1, true);
    this.RFC4648_URLSAFE_1 = new Encoder(true, null, -1, true);
    this.RFC2045__1 = new Encoder(false, this.CRLF_1, 76, true);
  }
  Companion_0.prototype.get_toBase64_1i1k6r_k$ = function () {
    return this.toBase64__1;
  };
  Companion_0.prototype.get_toBase64URL_r3c1l0_k$ = function () {
    return this.toBase64URL_1;
  };
  Companion_0.prototype.get_RFC4648_vi4er0_k$ = function () {
    return this.RFC4648__1;
  };
  Companion_0.prototype.get_RFC4648_URLSAFE_g2f5xl_k$ = function () {
    return this.RFC4648_URLSAFE_1;
  };
  Companion_0.prototype.get_RFC2045_vi30bp_k$ = function () {
    return this.RFC2045__1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function getEncoder($this) {
    return Companion_getInstance_0().RFC4648__1;
  }
  function getDecoder($this) {
    return Companion_getInstance().RFC4648__1;
  }
  function getUrlEncoder($this) {
    return Companion_getInstance_0().RFC4648_URLSAFE_1;
  }
  function getUrlDecoder($this) {
    return Companion_getInstance().RFC4648_URLSAFE_1;
  }
  function Decoder(isURL, isMIME) {
    Companion_getInstance();
    this.isURL_1 = isURL;
    this.isMIME_1 = isMIME;
  }
  Decoder.prototype.decode_syacgl_k$ = function (src) {
    var dst = new Int8Array(outLength(this, src, 0, src.length));
    var ret = decode0(this, src, 0, src.length, dst);
    if (!(ret === dst.length)) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = new Int8Array(ret);
      var tmp1_copyInto = dst.length;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = dst;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
      tmp$ret$4 = tmp0_copyInto;
    }
    return dst;
  };
  Decoder.prototype.decode_5vkj71_k$ = function (src) {
    return this.decode_syacgl_k$(encodeToByteArray(src));
  };
  Decoder.prototype.decode_rhppo2_k$ = function (src, dst) {
    var len = outLength(this, src, 0, src.length);
    if (dst.length < len)
      throw IllegalArgumentException_init_$Create$('Output byte array is too small for decoding all input bytes');
    return decode0(this, src, 0, src.length, dst);
  };
  Decoder.$metadata$ = classMeta('Decoder');
  function Encoder(isURL, newline, linemax, doPadding) {
    Companion_getInstance_0();
    this.isURL_1 = isURL;
    this.newline_1 = newline;
    this.linemax_1 = linemax;
    this.doPadding_1 = doPadding;
  }
  Encoder.prototype.encode_ub6m3x_k$ = function (src) {
    var len = outLength_0(this, src.length);
    var dst = new Int8Array(len);
    var ret = encode0(this, src, 0, src.length, dst);
    var tmp;
    if (!(ret === dst.length)) {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = new Int8Array(ret);
      var tmp1_copyInto = dst.length;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = dst;
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
      tmp = tmp$ret$4;
    } else {
      tmp = dst;
    }
    return tmp;
  };
  Encoder.prototype.encode_1embqu_k$ = function (src, dst) {
    var len = outLength_0(this, src.length);
    if (dst.length < len)
      throw IllegalArgumentException_init_$Create$('Output byte array is too small for encoding all input bytes');
    return encode0(this, src, 0, src.length, dst);
  };
  Encoder.prototype.encodeToString_4mbq1r_k$ = function (src) {
    var encoded = this.encode_ub6m3x_k$(src);
    return decodeToString(encoded);
  };
  Encoder.prototype.withoutPadding_hvqb4n_k$ = function () {
    return !this.doPadding_1 ? this : new Encoder(this.isURL_1, this.newline_1, this.linemax_1, false);
  };
  Encoder.$metadata$ = classMeta('Encoder');
  function Base64() {
    Base64_instance = this;
  }
  Base64.prototype.encodeToString_4ettju_k$ = function (input, encoding) {
    var tmp0_subject = encoding;
    var tmp;
    if (equals(tmp0_subject, Standard_getInstance())) {
      tmp = getEncoder(this).withoutPadding_hvqb4n_k$().encodeToString_4mbq1r_k$(input);
    } else if (equals(tmp0_subject, StandardPad_getInstance())) {
      tmp = getEncoder(this).encodeToString_4mbq1r_k$(input);
    } else if (equals(tmp0_subject, UrlSafe_getInstance())) {
      tmp = getUrlEncoder(this).withoutPadding_hvqb4n_k$().encodeToString_4mbq1r_k$(input);
    } else if (equals(tmp0_subject, UrlSafePad_getInstance())) {
      tmp = getUrlEncoder(this).encodeToString_4mbq1r_k$(input);
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  Base64.prototype.encodeToString$default_f8jw6e_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.encodeToString_4ettju_k$(input, encoding);
  };
  Base64.prototype.encode_hhuyjq_k$ = function (input, encoding) {
    var tmp0_subject = encoding;
    var tmp;
    if (equals(tmp0_subject, Standard_getInstance())) {
      tmp = getEncoder(this).withoutPadding_hvqb4n_k$().encode_ub6m3x_k$(input);
    } else if (equals(tmp0_subject, StandardPad_getInstance())) {
      tmp = getEncoder(this).encode_ub6m3x_k$(input);
    } else if (equals(tmp0_subject, UrlSafe_getInstance())) {
      tmp = getUrlEncoder(this).withoutPadding_hvqb4n_k$().encode_ub6m3x_k$(input);
    } else if (equals(tmp0_subject, UrlSafePad_getInstance())) {
      tmp = getUrlEncoder(this).encode_ub6m3x_k$(input);
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  Base64.prototype.encode$default_fpm21y_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.encode_hhuyjq_k$(input, encoding);
  };
  Base64.prototype.decode_xxjwh2_k$ = function (input, encoding) {
    var tmp0_subject = encoding;
    var tmp;
    if (equals(tmp0_subject, Standard_getInstance()) ? true : equals(tmp0_subject, StandardPad_getInstance())) {
      tmp = getDecoder(this).decode_5vkj71_k$(input);
    } else if (equals(tmp0_subject, UrlSafe_getInstance()) ? true : equals(tmp0_subject, UrlSafePad_getInstance())) {
      tmp = getUrlDecoder(this).decode_5vkj71_k$(input);
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  Base64.prototype.decode$default_3gwegw_k$ = function (input, encoding, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      encoding = Standard_getInstance();
    return this.decode_xxjwh2_k$(input, encoding);
  };
  Base64.$metadata$ = objectMeta('Base64');
  var Base64_instance;
  function Base64_getInstance() {
    if (Base64_instance == null)
      new Base64();
    return Base64_instance;
  }
  function get_base64PadEncoded(_this__u8e3s4) {
    return Base64_getInstance().encodeToString_4ettju_k$(_this__u8e3s4, StandardPad_getInstance());
  }
  function Standard() {
    Standard_instance = this;
    this.alphabet_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
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
    this.alphabet_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
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
  function UrlSafe() {
    UrlSafe_instance = this;
    this.alphabet_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  }
  UrlSafe.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  UrlSafe.$metadata$ = objectMeta('UrlSafe', [Encoding]);
  var UrlSafe_instance;
  function UrlSafe_getInstance() {
    if (UrlSafe_instance == null)
      new UrlSafe();
    return UrlSafe_instance;
  }
  function UrlSafePad() {
    UrlSafePad_instance = this;
    this.alphabet_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';
  }
  UrlSafePad.prototype.get_alphabet_1i7d0_k$ = function () {
    return this.alphabet_1;
  };
  UrlSafePad.$metadata$ = objectMeta('UrlSafePad', [Encoding]);
  var UrlSafePad_instance;
  function UrlSafePad_getInstance() {
    if (UrlSafePad_instance == null)
      new UrlSafePad();
    return UrlSafePad_instance;
  }
  function Encoding() {
  }
  Encoding.$metadata$ = interfaceMeta('Encoding');
  function get_base64PadDecodedBytes(_this__u8e3s4) {
    return Base64_getInstance().decode_xxjwh2_k$(_this__u8e3s4, StandardPad_getInstance());
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_base64PadDecodedBytes;
  _.$_$.b = get_base64PadEncoded;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloBase64.js.map
