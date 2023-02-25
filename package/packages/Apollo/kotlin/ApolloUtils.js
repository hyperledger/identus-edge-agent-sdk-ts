(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var Unit_getInstance = kotlin_kotlin.$_$.r4;
  var toString = kotlin_kotlin.$_$.ka;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var chunked = kotlin_kotlin.$_$.ab;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var toInt = kotlin_kotlin.$_$.pb;
  var toByte = kotlin_kotlin.$_$.ha;
  var toByteArray = kotlin_kotlin.$_$.o7;
  var hashCode = kotlin_kotlin.$_$.j9;
  var THROW_CCE = kotlin_kotlin.$_$.qc;
  var equals = kotlin_kotlin.$_$.f9;
  var classMeta = kotlin_kotlin.$_$.e9;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ld;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.b8;
  var Pair = kotlin_kotlin.$_$.nc;
  //endregion
  //region block: pre-declaration
  Valid.prototype = Object.create(Validated.prototype);
  Valid.prototype.constructor = Valid;
  Invalid.prototype = Object.create(Validated.prototype);
  Invalid.prototype.constructor = Invalid;
  $suspendableFlatMapCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $suspendableFlatMapCOROUTINE$0.prototype.constructor = $suspendableFlatMapCOROUTINE$0;
  $suspendableMapCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $suspendableMapCOROUTINE$1.prototype.constructor = $suspendableMapCOROUTINE$1;
  //endregion
  function NativeTypeInterface() {
  }
  NativeTypeInterface.$metadata$ = interfaceMeta('NativeTypeInterface');
  function decodeHex(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = (_this__u8e3s4.length % 2 | 0) === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.utils.decodeHex.<anonymous>' call
      tmp$ret$0 = 'Must have an even length';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = chunked(_this__u8e3s4, 2);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'io.iohk.atala.prism.apollo.utils.decodeHex.<anonymous>' call
      tmp$ret$1 = toByte(toInt(item, 16));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    return toByteArray(tmp$ret$3);
  }
  function Validated$Applicative$apply$lambda$lambda($apply, $r1) {
    return function (it) {
      var r2 = it;
      return $apply($r1, r2);
    };
  }
  function Validated$Applicative$apply$lambda($validated2, $apply) {
    return function (it) {
      var r1 = it;
      return $validated2.flatMap_s2sqog_k$(Validated$Applicative$apply$lambda$lambda($apply, r1));
    };
  }
  function Validated$Applicative$apply$lambda$lambda$lambda($apply, $r1, $r2) {
    return function (it) {
      var r3 = it;
      return $apply($r1, $r2, r3);
    };
  }
  function Validated$Applicative$apply$lambda$lambda_0($validated3, $apply, $r1) {
    return function (it) {
      var r2 = it;
      return $validated3.flatMap_s2sqog_k$(Validated$Applicative$apply$lambda$lambda$lambda($apply, $r1, r2));
    };
  }
  function Validated$Applicative$apply$lambda_0($validated2, $validated3, $apply) {
    return function (it) {
      var r1 = it;
      return $validated2.flatMap_s2sqog_k$(Validated$Applicative$apply$lambda$lambda_0($validated3, $apply, r1));
    };
  }
  function Valid(result) {
    Validated.call(this);
    this.result_2 = result;
  }
  Valid.prototype.get_result_iyg5d2_k$ = function () {
    return this.result_2;
  };
  Valid.prototype.component1_7eebsc_k$ = function () {
    return this.result_2;
  };
  Valid.prototype.copy_mek8hk_k$ = function (result) {
    return new Valid(result);
  };
  Valid.prototype.copy$default_bd6ymg_k$ = function (result, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.result_2;
    return this.copy_mek8hk_k$(result);
  };
  Valid.prototype.toString = function () {
    return 'Valid(result=' + this.result_2 + ')';
  };
  Valid.prototype.hashCode = function () {
    return this.result_2 == null ? 0 : hashCode(this.result_2);
  };
  Valid.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Valid))
      return false;
    var tmp0_other_with_cast = other instanceof Valid ? other : THROW_CCE();
    if (!equals(this.result_2, tmp0_other_with_cast.result_2))
      return false;
    return true;
  };
  Valid.$metadata$ = classMeta('Valid', undefined, undefined, undefined, undefined, Validated.prototype);
  function Invalid(error) {
    Validated.call(this);
    this.error_2 = error;
  }
  Invalid.prototype.get_error_iqzvfj_k$ = function () {
    return this.error_2;
  };
  Invalid.prototype.component1_7eebsc_k$ = function () {
    return this.error_2;
  };
  Invalid.prototype.copy_mek8hx_k$ = function (error) {
    return new Invalid(error);
  };
  Invalid.prototype.copy$default_vru3ln_k$ = function (error, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      error = this.error_2;
    return this.copy_mek8hx_k$(error);
  };
  Invalid.prototype.toString = function () {
    return 'Invalid(error=' + this.error_2 + ')';
  };
  Invalid.prototype.hashCode = function () {
    return this.error_2 == null ? 0 : hashCode(this.error_2);
  };
  Invalid.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invalid))
      return false;
    var tmp0_other_with_cast = other instanceof Invalid ? other : THROW_CCE();
    if (!equals(this.error_2, tmp0_other_with_cast.error_2))
      return false;
    return true;
  };
  Invalid.$metadata$ = classMeta('Invalid', undefined, undefined, undefined, undefined, Validated.prototype);
  function Applicative() {
    Applicative_instance = this;
  }
  Applicative.prototype.apply_7j07gf_k$ = function (validated1, validated2, apply) {
    return validated1.flatMap_s2sqog_k$(Validated$Applicative$apply$lambda(validated2, apply));
  };
  Applicative.prototype.apply_on2zsl_k$ = function (validated1, validated2, validated3, apply) {
    return validated1.flatMap_s2sqog_k$(Validated$Applicative$apply$lambda_0(validated2, validated3, apply));
  };
  Applicative.$metadata$ = objectMeta('Applicative');
  var Applicative_instance;
  function Applicative_getInstance() {
    if (Applicative_instance == null)
      new Applicative();
    return Applicative_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.tryOrInvalid_nk58od_k$ = function (t, error) {
    var tmp;
    try {
      tmp = new Valid(t());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = new Invalid(error);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion.prototype.getOrError_l7gwe1_k$ = function (t, error) {
    var tmp0_safe_receiver = t;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.utils.Companion.getOrError.<anonymous>' call
      tmp$ret$0 = new Valid(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new Invalid(error) : tmp1_elvis_lhs;
  };
  Companion.prototype.validate_t6f329_k$ = function (predicate, error) {
    return predicate ? new Valid(Unit_getInstance()) : new Invalid(error);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $suspendableFlatMapCOROUTINE$0(_this__u8e3s4, map, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.map_1 = map;
  }
  $suspendableFlatMapCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.tmp0_subject0__1 = this._this__u8e3s4__1;
            var tmp_0 = this.tmp0_subject0__1;
            if (tmp_0 instanceof Valid) {
              this.state_1 = 1;
              suspendResult = this.map_1(this._this__u8e3s4__1.result_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.tmp0_subject0__1;
              if (tmp_1 instanceof Invalid) {
                this.WHEN_RESULT1__1 = new Invalid(this._this__u8e3s4__1.error_2);
                this.state_1 = 2;
                continue $sm;
              } else {
                var tmp_2 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.state_1 = 2;
            continue $sm;
          case 2:
            return this.WHEN_RESULT1__1;
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
  $suspendableFlatMapCOROUTINE$0.$metadata$ = classMeta('$suspendableFlatMapCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $suspendableMapCOROUTINE$1(_this__u8e3s4, map, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.map_1 = map;
  }
  $suspendableMapCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.tmp0_subject0__1 = this._this__u8e3s4__1;
            var tmp_0 = this.tmp0_subject0__1;
            if (tmp_0 instanceof Valid) {
              this.state_1 = 1;
              suspendResult = this.map_1(this._this__u8e3s4__1.result_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.tmp0_subject0__1;
              if (tmp_1 instanceof Invalid) {
                this.WHEN_RESULT1__1 = new Invalid(this._this__u8e3s4__1.error_2);
                this.state_1 = 2;
                continue $sm;
              } else {
                var tmp_2 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            this.WHEN_RESULT1__1 = new Valid(ARGUMENT);
            this.state_1 = 2;
            continue $sm;
          case 2:
            return this.WHEN_RESULT1__1;
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
  $suspendableMapCOROUTINE$1.$metadata$ = classMeta('$suspendableMapCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Validated() {
    Companion_getInstance();
    this.result_1 = null;
    this.error_1 = null;
  }
  Validated.prototype.get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  Validated.prototype.get_error_iqzvfj_k$ = function () {
    return this.error_1;
  };
  Validated.prototype.toTuple_j9gkqb_k$ = function () {
    return new Pair(this.get_result_iyg5d2_k$(), this.get_error_iqzvfj_k$());
  };
  Validated.prototype.flatMap_s2sqog_k$ = function (map) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject instanceof Valid) {
      tmp = map(this.result_2);
    } else {
      if (tmp0_subject instanceof Invalid) {
        tmp = new Invalid(this.error_2);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  Validated.prototype.suspendableFlatMap_a2ptdc_k$ = function (map, $cont) {
    var tmp = new $suspendableFlatMapCOROUTINE$0(this, map, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Validated.prototype.map_f9z2fr_k$ = function (map) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject instanceof Valid) {
      tmp = new Valid(map(this.result_2));
    } else {
      if (tmp0_subject instanceof Invalid) {
        tmp = new Invalid(this.error_2);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  Validated.prototype.suspendableMap_xnxniv_k$ = function (map, $cont) {
    var tmp = new $suspendableMapCOROUTINE$1(this, map, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Validated.prototype.getElseThrow_v06cix_k$ = function (errorToExceptionMapper) {
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject instanceof Valid) {
      tmp = this.result_2;
    } else {
      if (tmp0_subject instanceof Invalid) {
        throw errorToExceptionMapper(this.error_2);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  Validated.$metadata$ = classMeta('Validated');
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Applicative_getInstance;
  _.$_$.b = Companion_getInstance;
  _.$_$.c = Valid;
  _.$_$.d = decodeHex;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloUtils.js.map
