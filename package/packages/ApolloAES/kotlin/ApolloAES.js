(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_iohk_atala_prism_utils, kotlin_io_iohk_atala_prism_base_symmetric_encryption) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.z5;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.s;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var Unit_getInstance = kotlin_kotlin.$_$.g3;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var THROW_CCE = kotlin_kotlin.$_$.s7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.b6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u4;
  var toByteArray = kotlin_io_iohk_atala_prism_utils.$_$.c;
  var KMMSymmetricKey = kotlin_io_iohk_atala_prism_base_symmetric_encryption.$_$.a;
  var classMeta = kotlin_kotlin.$_$.u5;
  var ensureNotNull = kotlin_kotlin.$_$.e8;
  var toArrayBuffer = kotlin_io_iohk_atala_prism_utils.$_$.b;
  var NotImplementedError = kotlin_kotlin.$_$.p7;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var SuspendFunction1 = kotlin_kotlin.$_$.l5;
  var THROW_ISE = kotlin_kotlin.$_$.t7;
  var Enum = kotlin_kotlin.$_$.m7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.f8;
  var NativeTypeInterface = kotlin_io_iohk_atala_prism_utils.$_$.a;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  function createRandomAESKey$default(algorithm, blockMode, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      blockMode = KAESBlockMode_GCM_getInstance();
    return $handler == null ? this.createRandomAESKey_gwplgi_k$(algorithm, blockMode, $cont) : $handler(algorithm, blockMode, $cont);
  }
  AES$Companion$createRandomAESKey$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AES$Companion$createRandomAESKey$slambda.prototype.constructor = AES$Companion$createRandomAESKey$slambda;
  AES$encrypt$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AES$encrypt$slambda.prototype.constructor = AES$encrypt$slambda;
  AES$decrypt$slambda.prototype = Object.create(CoroutineImpl.prototype);
  AES$decrypt$slambda.prototype.constructor = AES$decrypt$slambda;
  KAESAlgorithm.prototype = Object.create(Enum.prototype);
  KAESAlgorithm.prototype.constructor = KAESAlgorithm;
  KAESBlockMode.prototype = Object.create(Enum.prototype);
  KAESBlockMode.prototype.constructor = KAESBlockMode;
  KAESPadding.prototype = Object.create(Enum.prototype);
  KAESPadding.prototype.constructor = KAESPadding;
  //endregion
  function AESDecryptor() {
  }
  AESDecryptor.$metadata$ = interfaceMeta('AESDecryptor');
  function AESEncryptor() {
  }
  AESEncryptor.$metadata$ = interfaceMeta('AESEncryptor');
  function AESKeyGeneration() {
  }
  AESKeyGeneration.$metadata$ = interfaceMeta('AESKeyGeneration');
  function keySize(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 128;
        break;
      case 1:
        tmp = 192;
        break;
      case 2:
        tmp = 256;
        break;
      default:
        throw Exception_init_$Create$('This line should never be reached');
    }
    return tmp;
  }
  function needIV(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = false;
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        tmp = true;
        break;
      default:
        throw IllegalStateException_init_$Create$('Should never reach this line');
    }
    return tmp;
  }
  function _get_GCM_AUTH_TAG_SIZE__plhpcy($this) {
    return $this.GCM_AUTH_TAG_SIZE_1;
  }
  function getAesKeyGenParams($this, algorithm, blockMode) {
    var algorithmString = algorithm.nativeValue() + '-' + blockMode.nativeValue();
    var keyLength = keySize(algorithm);
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = {name: algorithmString, length: keyLength};
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function AES$Companion$createRandomAESKey$slambda($algorithm, $blockMode, resultContinuation) {
    this.$algorithm_1 = $algorithm;
    this.$blockMode_1 = $blockMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  AES$Companion$createRandomAESKey$slambda.prototype.invoke_o3dk73_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AES$Companion$createRandomAESKey$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_o3dk73_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  AES$Companion$createRandomAESKey$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            var tmp_0 = crypto.subtle;
            var tmp_1 = getAesKeyGenParams(Companion_getInstance(), this.$algorithm_1, this.$blockMode_1);
            var tmp_2 = this;
            tmp_2.tmp0_arrayOf0__1 = [(/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).encrypt, (/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).decrypt];
            suspendResult = await_0(tmp_0.generateKey(tmp_1, true, this.tmp0_arrayOf0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cryptoKey1__1 = suspendResult;
            this.state_1 = 2;
            suspendResult = await_0(crypto.subtle.exportKey((/*union*/{jwk: 'jwk', pkcs8: 'pkcs8', raw: 'raw', spki: 'spki'}/*union*/).raw, this.cryptoKey1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var key = toByteArray(ARGUMENT);
            return new KMMSymmetricKey(key);
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  AES$Companion$createRandomAESKey$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new AES$Companion$createRandomAESKey$slambda(this.$algorithm_1, this.$blockMode_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  AES$Companion$createRandomAESKey$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  AES$Companion$createRandomAESKey$slambda.$metadata$ = classMeta('AES$Companion$createRandomAESKey$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function AES$Companion$createRandomAESKey$slambda_0($algorithm, $blockMode, resultContinuation) {
    var i = new AES$Companion$createRandomAESKey$slambda($algorithm, $blockMode, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_o3dk73_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function getAesKeyAlgorithm($this) {
    var algorithmString = $this.algorithm_1.nativeValue() + '-' + $this.blockMode_1.nativeValue();
    var length = keySize($this.algorithm_1);
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = {name: algorithmString, length: length};
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function getAesParams($this) {
    var algorithmString = $this.algorithm_1.nativeValue() + '-' + $this.blockMode_1.nativeValue();
    var tmp;
    if (needIV($this.blockMode_1)) {
      var jsIV = toArrayBuffer(ensureNotNull($this.iv_1));
      var tmp0_subject = $this.blockMode_1;
      var tmp0 = tmp0_subject.ordinal_1;
      var tmp_0;
      switch (tmp0) {
        case 5:
          Companion_getInstance();
          var tagSize = 128;
          var tmp$ret$0;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp0_unsafeCast = {name: algorithmString, iv: jsIV, tagLength: tagSize};
          tmp$ret$0 = tmp0_unsafeCast;

          tmp_0 = tmp$ret$0;
          break;
        case 1:
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp1_unsafeCast = {name: algorithmString, iv: jsIV};
          tmp$ret$1 = tmp1_unsafeCast;

          tmp_0 = tmp$ret$1;
          break;
        default:
          throw new NotImplementedError('Yet to be implemented');
      }
      tmp = tmp_0;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = {name: algorithmString};
      tmp$ret$2 = tmp2_unsafeCast;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    this.GCM_AUTH_TAG_SIZE_1 = 128;
  }
  Companion.prototype.createRandomAESKey_gwplgi_k$ = function (algorithm, blockMode, $cont) {
    var tmp = MainScope();
    return await_0(promise$default(tmp, null, null, AES$Companion$createRandomAESKey$slambda_0(algorithm, blockMode, null), 3, null), $cont);
  };
  Companion.$metadata$ = objectMeta('Companion', [AESKeyGeneration]);
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AES$encrypt$slambda(this$0, $data, resultContinuation) {
    this.this$0__1 = this$0;
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  AES$encrypt$slambda.prototype.invoke_ikgfu1_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AES$encrypt$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ikgfu1_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  AES$encrypt$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.nativeKey0__1 = this.this$0__1.key_1.nativeValue_1;
            this.state_1 = 1;
            var tmp_0 = crypto.subtle;
            var tmp_1 = (/*union*/{jwk: 'jwk', pkcs8: 'pkcs8', raw: 'raw', spki: 'spki'}/*union*/).raw;
            var tmp_2 = toArrayBuffer(this.nativeKey0__1);
            var tmp_3 = getAesKeyAlgorithm(this.this$0__1);
            var tmp_4 = this;
            tmp_4.tmp0_arrayOf1__1 = [(/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).encrypt, (/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).decrypt];
            suspendResult = await_0(tmp_0.importKey(tmp_1, tmp_2, tmp_3, true, this.tmp0_arrayOf1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cryptoKey2__1 = suspendResult;
            this.state_1 = 2;
            suspendResult = await_0(crypto.subtle.encrypt(getAesParams(this.this$0__1), this.cryptoKey2__1, toArrayBuffer(this.$data_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  AES$encrypt$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new AES$encrypt$slambda(this.this$0__1, this.$data_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  AES$encrypt$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  AES$encrypt$slambda.$metadata$ = classMeta('AES$encrypt$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function AES$encrypt$slambda_0(this$0, $data, resultContinuation) {
    var i = new AES$encrypt$slambda(this$0, $data, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_ikgfu1_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function AES$decrypt$slambda(this$0, $data, resultContinuation) {
    this.this$0__1 = this$0;
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  AES$decrypt$slambda.prototype.invoke_ikgfu1_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  AES$decrypt$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ikgfu1_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  AES$decrypt$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.nativeKey0__1 = this.this$0__1.key_1.nativeValue_1;
            this.state_1 = 1;
            var tmp_0 = crypto.subtle;
            var tmp_1 = (/*union*/{jwk: 'jwk', pkcs8: 'pkcs8', raw: 'raw', spki: 'spki'}/*union*/).raw;
            var tmp_2 = toArrayBuffer(this.nativeKey0__1);
            var tmp_3 = getAesKeyAlgorithm(this.this$0__1);
            var tmp_4 = this;
            tmp_4.tmp0_arrayOf1__1 = [(/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).encrypt, (/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).decrypt];
            suspendResult = await_0(tmp_0.importKey(tmp_1, tmp_2, tmp_3, true, this.tmp0_arrayOf1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cryptoKey2__1 = suspendResult;
            this.state_1 = 2;
            suspendResult = await_0(crypto.subtle.decrypt(getAesParams(this.this$0__1), this.cryptoKey2__1, toArrayBuffer(this.$data_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  AES$decrypt$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new AES$decrypt$slambda(this.this$0__1, this.$data_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  AES$decrypt$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  AES$decrypt$slambda.$metadata$ = classMeta('AES$decrypt$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function AES$decrypt$slambda_0(this$0, $data, resultContinuation) {
    var i = new AES$decrypt$slambda(this$0, $data, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_ikgfu1_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function AES(algorithm, blockMode, padding, key, iv) {
    Companion_getInstance();
    this.algorithm_1 = algorithm;
    this.blockMode_1 = blockMode;
    this.padding_1 = padding;
    this.key_1 = key;
    this.iv_1 = iv;
  }
  AES.prototype.get_algorithm_c8rufa_k$ = function () {
    return this.algorithm_1;
  };
  AES.prototype.get_blockMode_mxu147_k$ = function () {
    return this.blockMode_1;
  };
  AES.prototype.get_padding_c2ipjs_k$ = function () {
    return this.padding_1;
  };
  AES.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  AES.prototype.get_iv_kntnwq_k$ = function () {
    return this.iv_1;
  };
  AES.prototype.encrypt_5g715w_k$ = function (data, $cont) {
    var tmp = MainScope();
    return await_0(promise$default(tmp, null, null, AES$encrypt$slambda_0(this, data, null), 3, null), $cont);
  };
  AES.prototype.decrypt_uvw1vg_k$ = function (data, $cont) {
    var tmp = MainScope();
    return await_0(promise$default(tmp, null, null, AES$decrypt$slambda_0(this, data, null), 3, null), $cont);
  };
  AES.$metadata$ = classMeta('AES', [AESEncryptor, AESDecryptor]);
  var KAESAlgorithm_AES_128_instance;
  var KAESAlgorithm_AES_192_instance;
  var KAESAlgorithm_AES_256_instance;
  function values() {
    return [KAESAlgorithm_AES_128_getInstance(), KAESAlgorithm_AES_192_getInstance(), KAESAlgorithm_AES_256_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'AES_128':
        return KAESAlgorithm_AES_128_getInstance();
      case 'AES_192':
        return KAESAlgorithm_AES_192_getInstance();
      case 'AES_256':
        return KAESAlgorithm_AES_256_getInstance();
      default:
        KAESAlgorithm_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KAESAlgorithm_entriesInitialized;
  function KAESAlgorithm_initEntries() {
    if (KAESAlgorithm_entriesInitialized)
      return Unit_getInstance();
    KAESAlgorithm_entriesInitialized = true;
    KAESAlgorithm_AES_128_instance = new KAESAlgorithm('AES_128', 0);
    KAESAlgorithm_AES_192_instance = new KAESAlgorithm('AES_192', 1);
    KAESAlgorithm_AES_256_instance = new KAESAlgorithm('AES_256', 2);
  }
  function KAESAlgorithm(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KAESAlgorithm.prototype.nativeValue = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 'AES';
        break;
      case 1:
        tmp = 'AES';
        break;
      case 2:
        tmp = 'AES';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  KAESAlgorithm.$metadata$ = classMeta('KAESAlgorithm', [NativeTypeInterface], undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(KAESAlgorithm.prototype, 'name', {
    configurable: true,
    get: KAESAlgorithm.prototype.get_name_woqyms_k$
  });
  Object.defineProperty(KAESAlgorithm.prototype, 'ordinal', {
    configurable: true,
    get: KAESAlgorithm.prototype.get_ordinal_ip24qg_k$
  });
  function KAESAlgorithm_AES_128_getInstance() {
    KAESAlgorithm_initEntries();
    return KAESAlgorithm_AES_128_instance;
  }
  function KAESAlgorithm_AES_192_getInstance() {
    KAESAlgorithm_initEntries();
    return KAESAlgorithm_AES_192_instance;
  }
  function KAESAlgorithm_AES_256_getInstance() {
    KAESAlgorithm_initEntries();
    return KAESAlgorithm_AES_256_instance;
  }
  var KAESBlockMode_ECB_instance;
  var KAESBlockMode_CBC_instance;
  var KAESBlockMode_CFB_instance;
  var KAESBlockMode_CFB8_instance;
  var KAESBlockMode_CTR_instance;
  var KAESBlockMode_GCM_instance;
  var KAESBlockMode_OFB_instance;
  var KAESBlockMode_RC4_instance;
  function values_0() {
    return [KAESBlockMode_ECB_getInstance(), KAESBlockMode_CBC_getInstance(), KAESBlockMode_CFB_getInstance(), KAESBlockMode_CFB8_getInstance(), KAESBlockMode_CTR_getInstance(), KAESBlockMode_GCM_getInstance(), KAESBlockMode_OFB_getInstance(), KAESBlockMode_RC4_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'ECB':
        return KAESBlockMode_ECB_getInstance();
      case 'CBC':
        return KAESBlockMode_CBC_getInstance();
      case 'CFB':
        return KAESBlockMode_CFB_getInstance();
      case 'CFB8':
        return KAESBlockMode_CFB8_getInstance();
      case 'CTR':
        return KAESBlockMode_CTR_getInstance();
      case 'GCM':
        return KAESBlockMode_GCM_getInstance();
      case 'OFB':
        return KAESBlockMode_OFB_getInstance();
      case 'RC4':
        return KAESBlockMode_RC4_getInstance();
      default:
        KAESBlockMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KAESBlockMode_entriesInitialized;
  function KAESBlockMode_initEntries() {
    if (KAESBlockMode_entriesInitialized)
      return Unit_getInstance();
    KAESBlockMode_entriesInitialized = true;
    KAESBlockMode_ECB_instance = new KAESBlockMode('ECB', 0);
    KAESBlockMode_CBC_instance = new KAESBlockMode('CBC', 1);
    KAESBlockMode_CFB_instance = new KAESBlockMode('CFB', 2);
    KAESBlockMode_CFB8_instance = new KAESBlockMode('CFB8', 3);
    KAESBlockMode_CTR_instance = new KAESBlockMode('CTR', 4);
    KAESBlockMode_GCM_instance = new KAESBlockMode('GCM', 5);
    KAESBlockMode_OFB_instance = new KAESBlockMode('OFB', 6);
    KAESBlockMode_RC4_instance = new KAESBlockMode('RC4', 7);
  }
  function KAESBlockMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KAESBlockMode.prototype.nativeValue = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        throw NotImplementedError_init_$Create$(null, 1, null);
      case 1:
        tmp = 'CBC';
        break;
      case 2:
        throw NotImplementedError_init_$Create$(null, 1, null);
      case 3:
        throw NotImplementedError_init_$Create$(null, 1, null);
      case 4:
        tmp = 'CTR';
        break;
      case 5:
        tmp = 'GCM';
        break;
      case 6:
        throw NotImplementedError_init_$Create$(null, 1, null);
      case 7:
        throw NotImplementedError_init_$Create$(null, 1, null);
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  KAESBlockMode.$metadata$ = classMeta('KAESBlockMode', [NativeTypeInterface], undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(KAESBlockMode.prototype, 'name', {
    configurable: true,
    get: KAESBlockMode.prototype.get_name_woqyms_k$
  });
  Object.defineProperty(KAESBlockMode.prototype, 'ordinal', {
    configurable: true,
    get: KAESBlockMode.prototype.get_ordinal_ip24qg_k$
  });
  function KAESBlockMode_ECB_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_ECB_instance;
  }
  function KAESBlockMode_CBC_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_CBC_instance;
  }
  function KAESBlockMode_CFB_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_CFB_instance;
  }
  function KAESBlockMode_CFB8_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_CFB8_instance;
  }
  function KAESBlockMode_CTR_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_CTR_instance;
  }
  function KAESBlockMode_GCM_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_GCM_instance;
  }
  function KAESBlockMode_OFB_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_OFB_instance;
  }
  function KAESBlockMode_RC4_getInstance() {
    KAESBlockMode_initEntries();
    return KAESBlockMode_RC4_instance;
  }
  var KAESPadding_NO_PADDING_instance;
  var KAESPadding_PKCS5PADDING_instance;
  var KAESPadding_PKCS7PADDING_instance;
  function values_1() {
    return [KAESPadding_NO_PADDING_getInstance(), KAESPadding_PKCS5PADDING_getInstance(), KAESPadding_PKCS7PADDING_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'NO_PADDING':
        return KAESPadding_NO_PADDING_getInstance();
      case 'PKCS5PADDING':
        return KAESPadding_PKCS5PADDING_getInstance();
      case 'PKCS7PADDING':
        return KAESPadding_PKCS7PADDING_getInstance();
      default:
        KAESPadding_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KAESPadding_entriesInitialized;
  function KAESPadding_initEntries() {
    if (KAESPadding_entriesInitialized)
      return Unit_getInstance();
    KAESPadding_entriesInitialized = true;
    KAESPadding_NO_PADDING_instance = new KAESPadding('NO_PADDING', 0);
    KAESPadding_PKCS5PADDING_instance = new KAESPadding('PKCS5PADDING', 1);
    KAESPadding_PKCS7PADDING_instance = new KAESPadding('PKCS7PADDING', 2);
  }
  function KAESPadding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KAESPadding.prototype.nativeValue = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = '';
        break;
      case 1:
        tmp = '';
        break;
      case 2:
        tmp = '';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  KAESPadding.$metadata$ = classMeta('KAESPadding', [NativeTypeInterface], undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(KAESPadding.prototype, 'name', {
    configurable: true,
    get: KAESPadding.prototype.get_name_woqyms_k$
  });
  Object.defineProperty(KAESPadding.prototype, 'ordinal', {
    configurable: true,
    get: KAESPadding.prototype.get_ordinal_ip24qg_k$
  });
  function KAESPadding_NO_PADDING_getInstance() {
    KAESPadding_initEntries();
    return KAESPadding_NO_PADDING_instance;
  }
  function KAESPadding_PKCS5PADDING_getInstance() {
    KAESPadding_initEntries();
    return KAESPadding_PKCS5PADDING_instance;
  }
  function KAESPadding_PKCS7PADDING_getInstance() {
    KAESPadding_initEntries();
    return KAESPadding_PKCS7PADDING_instance;
  }
  //region block: post-declaration
  Companion.prototype.createRandomAESKey$default_udy0qm_k$ = createRandomAESKey$default;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$aes = $io$iohk$atala$prism$apollo.aes || ($io$iohk$atala$prism$apollo.aes = {});
    $io$iohk$atala$prism$apollo$aes.keySize = keySize;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$aes = $io$iohk$atala$prism$apollo.aes || ($io$iohk$atala$prism$apollo.aes = {});
    $io$iohk$atala$prism$apollo$aes.KAESAlgorithm = KAESAlgorithm;
    $io$iohk$atala$prism$apollo$aes.KAESAlgorithm.values = values;
    $io$iohk$atala$prism$apollo$aes.KAESAlgorithm.valueOf = valueOf;
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESAlgorithm, 'AES_128', {
      configurable: true,
      get: KAESAlgorithm_AES_128_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESAlgorithm, 'AES_192', {
      configurable: true,
      get: KAESAlgorithm_AES_192_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESAlgorithm, 'AES_256', {
      configurable: true,
      get: KAESAlgorithm_AES_256_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$aes = $io$iohk$atala$prism$apollo.aes || ($io$iohk$atala$prism$apollo.aes = {});
    $io$iohk$atala$prism$apollo$aes.KAESBlockMode = KAESBlockMode;
    $io$iohk$atala$prism$apollo$aes.KAESBlockMode.values = values_0;
    $io$iohk$atala$prism$apollo$aes.KAESBlockMode.valueOf = valueOf_0;
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'ECB', {
      configurable: true,
      get: KAESBlockMode_ECB_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'CBC', {
      configurable: true,
      get: KAESBlockMode_CBC_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'CFB', {
      configurable: true,
      get: KAESBlockMode_CFB_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'CFB8', {
      configurable: true,
      get: KAESBlockMode_CFB8_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'CTR', {
      configurable: true,
      get: KAESBlockMode_CTR_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'GCM', {
      configurable: true,
      get: KAESBlockMode_GCM_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'OFB', {
      configurable: true,
      get: KAESBlockMode_OFB_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESBlockMode, 'RC4', {
      configurable: true,
      get: KAESBlockMode_RC4_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$aes = $io$iohk$atala$prism$apollo.aes || ($io$iohk$atala$prism$apollo.aes = {});
    $io$iohk$atala$prism$apollo$aes.KAESPadding = KAESPadding;
    $io$iohk$atala$prism$apollo$aes.KAESPadding.values = values_1;
    $io$iohk$atala$prism$apollo$aes.KAESPadding.valueOf = valueOf_1;
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESPadding, 'NO_PADDING', {
      configurable: true,
      get: KAESPadding_NO_PADDING_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESPadding, 'PKCS5PADDING', {
      configurable: true,
      get: KAESPadding_PKCS5PADDING_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$aes.KAESPadding, 'PKCS7PADDING', {
      configurable: true,
      get: KAESPadding_PKCS7PADDING_getInstance
    });
  }
  $jsExportAll$(_);
  kotlin_io_iohk_atala_prism_utils.$jsExportAll$(_);
  kotlin_io_iohk_atala_prism_base_symmetric_encryption.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ApolloUtils.js'), require('./ApolloBaseSymmetricEncryption.js')));

//# sourceMappingURL=ApolloAES.js.map
