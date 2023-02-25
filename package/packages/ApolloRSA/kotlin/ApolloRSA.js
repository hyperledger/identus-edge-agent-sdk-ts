(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_iohk_atala_prism_utils, kotlin_io_iohk_atala_prism_base_asymmetric_encryption) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.j6;
  var THROW_CCE = kotlin_kotlin.$_$.h8;
  var isObject = kotlin_kotlin.$_$.n6;
  var CoroutineImpl = kotlin_kotlin.$_$.t5;
  var Unit_getInstance = kotlin_kotlin.$_$.g3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.l6;
  var toArrayBuffer = kotlin_io_iohk_atala_prism_utils.$_$.e;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d5;
  var toByteArray = kotlin_io_iohk_atala_prism_utils.$_$.f;
  var classMeta = kotlin_kotlin.$_$.e6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u8;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var SuspendFunction1 = kotlin_kotlin.$_$.u5;
  var THROW_ISE = kotlin_kotlin.$_$.i8;
  var Enum = kotlin_kotlin.$_$.a8;
  var NativeTypeInterface = kotlin_io_iohk_atala_prism_utils.$_$.a;
  //endregion
  //region block: pre-declaration
  RSA$sign$slambda.prototype = Object.create(CoroutineImpl.prototype);
  RSA$sign$slambda.prototype.constructor = RSA$sign$slambda;
  RSA$sign$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  RSA$sign$slambda_1.prototype.constructor = RSA$sign$slambda_1;
  RSA$verify$slambda.prototype = Object.create(CoroutineImpl.prototype);
  RSA$verify$slambda.prototype.constructor = RSA$verify$slambda;
  RSA$verify$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  RSA$verify$slambda_1.prototype.constructor = RSA$verify$slambda_1;
  $signCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $signCOROUTINE$0.prototype.constructor = $signCOROUTINE$0;
  $verifyCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $verifyCOROUTINE$1.prototype.constructor = $verifyCOROUTINE$1;
  RSASignatureType.prototype = Object.create(Enum.prototype);
  RSASignatureType.prototype.constructor = RSASignatureType;
  //endregion
  function RSASigner() {
  }
  RSASigner.$metadata$ = interfaceMeta('RSASigner');
  function RSAVerifier() {
  }
  RSAVerifier.$metadata$ = interfaceMeta('RSAVerifier');
  function getRsaPssParams($this) {
    var algorithm = 'RSA-PSS';
    var tmp = {name: algorithm, saltLength: 32};
    return (!(tmp == null) ? isObject(tmp) : false) ? tmp : THROW_CCE();
  }
  function RSA$sign$slambda($privateKey, $data, resultContinuation) {
    this.$privateKey_1 = $privateKey;
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSA$sign$slambda.prototype.invoke_ikgfu1_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RSA$sign$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ikgfu1_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSA$sign$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = await_0(crypto.subtle.sign(this.$privateKey_1.nativeType_1.algorithm.name, this.$privateKey_1.nativeType_1, toArrayBuffer(this.$data_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RSA$sign$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new RSA$sign$slambda(this.$privateKey_1, this.$data_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  RSA$sign$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RSA$sign$slambda.$metadata$ = classMeta('RSA$sign$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RSA$sign$slambda_0($privateKey, $data, resultContinuation) {
    var i = new RSA$sign$slambda($privateKey, $data, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_ikgfu1_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSA$sign$slambda_1(this$0, $privateKey, $data, resultContinuation) {
    this.this$0__1 = this$0;
    this.$privateKey_1 = $privateKey;
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSA$sign$slambda_1.prototype.invoke_ikgfu1_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RSA$sign$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ikgfu1_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSA$sign$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = await_0(crypto.subtle.sign(getRsaPssParams(this.this$0__1), this.$privateKey_1.nativeType_1, toArrayBuffer(this.$data_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RSA$sign$slambda_1.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new RSA$sign$slambda_1(this.this$0__1, this.$privateKey_1, this.$data_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  RSA$sign$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RSA$sign$slambda_1.$metadata$ = classMeta('RSA$sign$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RSA$sign$slambda_2(this$0, $privateKey, $data, resultContinuation) {
    var i = new RSA$sign$slambda_1(this$0, $privateKey, $data, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_ikgfu1_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSA$verify$slambda($publicKey, $signedData, $data, resultContinuation) {
    this.$publicKey_1 = $publicKey;
    this.$signedData_1 = $signedData;
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSA$verify$slambda.prototype.invoke_2o4cgi_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RSA$verify$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_2o4cgi_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSA$verify$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = await_0(crypto.subtle.verify(this.$publicKey_1.nativeType_1.algorithm.name, this.$publicKey_1.nativeType_1, toArrayBuffer(this.$signedData_1), toArrayBuffer(this.$data_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RSA$verify$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new RSA$verify$slambda(this.$publicKey_1, this.$signedData_1, this.$data_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  RSA$verify$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RSA$verify$slambda.$metadata$ = classMeta('RSA$verify$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RSA$verify$slambda_0($publicKey, $signedData, $data, resultContinuation) {
    var i = new RSA$verify$slambda($publicKey, $signedData, $data, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_2o4cgi_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RSA$verify$slambda_1(this$0, $publicKey, $signedData, $data, resultContinuation) {
    this.this$0__1 = this$0;
    this.$publicKey_1 = $publicKey;
    this.$signedData_1 = $signedData;
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  RSA$verify$slambda_1.prototype.invoke_2o4cgi_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RSA$verify$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_2o4cgi_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RSA$verify$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = await_0(crypto.subtle.verify(getRsaPssParams(this.this$0__1), this.$publicKey_1.nativeType_1, toArrayBuffer(this.$signedData_1), toArrayBuffer(this.$data_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RSA$verify$slambda_1.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new RSA$verify$slambda_1(this.this$0__1, this.$publicKey_1, this.$signedData_1, this.$data_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  RSA$verify$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RSA$verify$slambda_1.$metadata$ = classMeta('RSA$verify$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RSA$verify$slambda_2(this$0, $publicKey, $signedData, $data, resultContinuation) {
    var i = new RSA$verify$slambda_1(this$0, $publicKey, $signedData, $data, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_2o4cgi_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $signCOROUTINE$0(_this__u8e3s4, privateKey, data, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.privateKey_1 = privateKey;
    this.data_1 = data;
    this.type_1 = type;
  }
  $signCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.tmp0_subject0__1 = this.type_1;
            this.tmp01__1 = this.tmp0_subject0__1.ordinal_1;
            if ((this.tmp01__1 === 0 ? true : this.tmp01__1 === 1) ? true : this.tmp01__1 === 2) {
              this.state_1 = 2;
              var tmp_0 = MainScope();
              suspendResult = await_0(promise$default(tmp_0, null, null, RSA$sign$slambda_0(this.privateKey_1, this.data_1, null), 3, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if ((this.tmp01__1 === 3 ? true : this.tmp01__1 === 4) ? true : this.tmp01__1 === 5) {
                this.state_1 = 1;
                var tmp_1 = MainScope();
                suspendResult = await_0(promise$default(tmp_1, null, null, RSA$sign$slambda_2(this._this__u8e3s4__1, this.privateKey_1, this.data_1, null), 3, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 1:
            this.WHEN_RESULT2__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 2:
            this.WHEN_RESULT2__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.WHEN_RESULT2__1;
          case 4:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 4) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $signCOROUTINE$0.$metadata$ = classMeta('$signCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $verifyCOROUTINE$1(_this__u8e3s4, publicKey, data, signedData, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.publicKey_1 = publicKey;
    this.data_1 = data;
    this.signedData_1 = signedData;
    this.type_1 = type;
  }
  $verifyCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.tmp0_subject0__1 = this.type_1;
            this.tmp01__1 = this.tmp0_subject0__1.ordinal_1;
            if ((this.tmp01__1 === 0 ? true : this.tmp01__1 === 1) ? true : this.tmp01__1 === 2) {
              this.state_1 = 2;
              var tmp_0 = MainScope();
              suspendResult = await_0(promise$default(tmp_0, null, null, RSA$verify$slambda_0(this.publicKey_1, this.signedData_1, this.data_1, null), 3, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if ((this.tmp01__1 === 3 ? true : this.tmp01__1 === 4) ? true : this.tmp01__1 === 5) {
                this.state_1 = 1;
                var tmp_1 = MainScope();
                suspendResult = await_0(promise$default(tmp_1, null, null, RSA$verify$slambda_2(this._this__u8e3s4__1, this.publicKey_1, this.signedData_1, this.data_1, null), 3, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 1:
            this.WHEN_RESULT2__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 2:
            this.WHEN_RESULT2__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.WHEN_RESULT2__1;
          case 4:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 4) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $verifyCOROUTINE$1.$metadata$ = classMeta('$verifyCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function RSA() {
  }
  RSA.prototype.sign_5j0gaq_k$ = function (privateKey, data, type, $cont) {
    var tmp = new $signCOROUTINE$0(this, privateKey, data, type, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RSA.prototype.verify_dlq9t4_k$ = function (publicKey, data, signedData, type, $cont) {
    var tmp = new $verifyCOROUTINE$1(this, publicKey, data, signedData, type, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RSA.$metadata$ = classMeta('RSA', [RSASigner, RSAVerifier]);
  var RSASignatureType_RSASHA256_instance;
  var RSASignatureType_RSASHA384_instance;
  var RSASignatureType_RSASHA512_instance;
  var RSASignatureType_RSAPSSSHA256_instance;
  var RSASignatureType_RSAPSSSHA384_instance;
  var RSASignatureType_RSAPSSSHA512_instance;
  function values() {
    return [RSASignatureType_RSASHA256_getInstance(), RSASignatureType_RSASHA384_getInstance(), RSASignatureType_RSASHA512_getInstance(), RSASignatureType_RSAPSSSHA256_getInstance(), RSASignatureType_RSAPSSSHA384_getInstance(), RSASignatureType_RSAPSSSHA512_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'RSASHA256':
        return RSASignatureType_RSASHA256_getInstance();
      case 'RSASHA384':
        return RSASignatureType_RSASHA384_getInstance();
      case 'RSASHA512':
        return RSASignatureType_RSASHA512_getInstance();
      case 'RSAPSSSHA256':
        return RSASignatureType_RSAPSSSHA256_getInstance();
      case 'RSAPSSSHA384':
        return RSASignatureType_RSAPSSSHA384_getInstance();
      case 'RSAPSSSHA512':
        return RSASignatureType_RSAPSSSHA512_getInstance();
      default:
        RSASignatureType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RSASignatureType_entriesInitialized;
  function RSASignatureType_initEntries() {
    if (RSASignatureType_entriesInitialized)
      return Unit_getInstance();
    RSASignatureType_entriesInitialized = true;
    RSASignatureType_RSASHA256_instance = new RSASignatureType('RSASHA256', 0);
    RSASignatureType_RSASHA384_instance = new RSASignatureType('RSASHA384', 1);
    RSASignatureType_RSASHA512_instance = new RSASignatureType('RSASHA512', 2);
    RSASignatureType_RSAPSSSHA256_instance = new RSASignatureType('RSAPSSSHA256', 3);
    RSASignatureType_RSAPSSSHA384_instance = new RSASignatureType('RSAPSSSHA384', 4);
    RSASignatureType_RSAPSSSHA512_instance = new RSASignatureType('RSAPSSSHA512', 5);
  }
  function RSASignatureType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RSASignatureType.prototype.nativeValue = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 'RSA-PSS';
        break;
      case 1:
        tmp = 'RSA-PSS';
        break;
      case 2:
        tmp = 'RSA-PSS';
        break;
      case 3:
        tmp = 'RSASSA-PKCS1-v1_5';
        break;
      case 4:
        tmp = 'RSASSA-PKCS1-v1_5';
        break;
      case 5:
        tmp = 'RSASSA-PKCS1-v1_5';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  RSASignatureType.$metadata$ = classMeta('RSASignatureType', [NativeTypeInterface], undefined, undefined, undefined, Enum.prototype);
  function RSASignatureType_RSASHA256_getInstance() {
    RSASignatureType_initEntries();
    return RSASignatureType_RSASHA256_instance;
  }
  function RSASignatureType_RSASHA384_getInstance() {
    RSASignatureType_initEntries();
    return RSASignatureType_RSASHA384_instance;
  }
  function RSASignatureType_RSASHA512_getInstance() {
    RSASignatureType_initEntries();
    return RSASignatureType_RSASHA512_instance;
  }
  function RSASignatureType_RSAPSSSHA256_getInstance() {
    RSASignatureType_initEntries();
    return RSASignatureType_RSAPSSSHA256_instance;
  }
  function RSASignatureType_RSAPSSSHA384_getInstance() {
    RSASignatureType_initEntries();
    return RSASignatureType_RSAPSSSHA384_instance;
  }
  function RSASignatureType_RSAPSSSHA512_getInstance() {
    RSASignatureType_initEntries();
    return RSASignatureType_RSAPSSSHA512_instance;
  }
  //region block: exports
  kotlin_io_iohk_atala_prism_utils.$jsExportAll$(_);
  kotlin_io_iohk_atala_prism_base_asymmetric_encryption.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ApolloUtils.js'), require('./ApolloBaseAsymmetricEncryption.js')));

//# sourceMappingURL=ApolloRSA.js.map
