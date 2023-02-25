(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var fillArrayVal = kotlin_kotlin.$_$.t5;
  var Unit_getInstance = kotlin_kotlin.$_$.f3;
  var classMeta = kotlin_kotlin.$_$.r5;
  var objectMeta = kotlin_kotlin.$_$.g6;
  var toString = kotlin_kotlin.$_$.k6;
  var toString_0 = kotlin_kotlin.$_$.e8;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.value_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.value_1);
    }
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function atomicfu$AtomicRefArray$ref(size) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = size;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.AtomicArray.array.<anonymous>' call
      tmp$ret$1 = atomic$ref$1(null);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.array_1 = tmp_2;
  }
  atomicfu$AtomicRefArray$ref.prototype.get_atomicfu$size_iufoqq_k$ = function () {
    return this.array_1.length;
  };
  atomicfu$AtomicRefArray$ref.prototype.atomicfu$get = function (index) {
    return this.array_1[index];
  };
  atomicfu$AtomicRefArray$ref.$metadata$ = classMeta('AtomicArray');
  Object.defineProperty(atomicfu$AtomicRefArray$ref.prototype, 'atomicfu$size', {
    configurable: true,
    get: atomicfu$AtomicRefArray$ref.prototype.get_atomicfu$size_iufoqq_k$
  });
  function atomicfu$AtomicRefArray$ofNulls(size) {
    return new atomicfu$AtomicRefArray$ref(size);
  }
  function update(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.value_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function loop_1(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.value_1);
    }
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.value_1;
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = objectMeta('None', undefined, undefined, undefined, undefined, atomicfu$TraceBase.prototype);
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.prototype.invoke_pyr0m4_k$ = function (event) {
    this.atomicfu$Trace$append$1(event());
  };
  atomicfu$TraceBase.$metadata$ = classMeta('TraceBase');
  function atomicfu$TraceFormat() {
  }
  atomicfu$TraceFormat.prototype.atomicfu$TraceFormat$format = function (index, event) {
    return '' + index + ': ' + toString(event);
  };
  atomicfu$TraceFormat.$metadata$ = classMeta('TraceFormat');
  function AtomicRef(value) {
    this.value_1 = value;
  }
  AtomicRef.prototype.set_kotlinx$atomicfu$value_koguff_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  AtomicRef.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.value_1;
  };
  AtomicRef.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.value_1;
  };
  AtomicRef.prototype.setValue_o0pjfh_k$ = function (thisRef, property, value) {
    this.value_1 = value;
  };
  AtomicRef.prototype.lazySet_9mpar2_k$ = function (value) {
    this.value_1 = value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.value_1 === expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this.value_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.get_kotlinx$atomicfu$value_vi2am5_k$,
    set: AtomicRef.prototype.set_kotlinx$atomicfu$value_koguff_k$
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.value_1 = value;
  }
  AtomicBoolean.prototype.set_kotlinx$atomicfu$value_rpu4go_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  AtomicBoolean.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.value_1;
  };
  AtomicBoolean.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.value_1;
  };
  AtomicBoolean.prototype.setValue_yjn1ii_k$ = function (thisRef, property, value) {
    this.value_1 = value;
  };
  AtomicBoolean.prototype.lazySet_lh19sr_k$ = function (value) {
    this.value_1 = value;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.value_1 === expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.value_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.get_kotlinx$atomicfu$value_vi2am5_k$,
    set: AtomicBoolean.prototype.set_kotlinx$atomicfu$value_rpu4go_k$
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.value_1 = value;
  }
  AtomicInt.prototype.set_kotlinx$atomicfu$value_3lx0f_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  AtomicInt.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.value_1;
  };
  AtomicInt.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.value_1;
  };
  AtomicInt.prototype.setValue_3xckvl_k$ = function (thisRef, property, value) {
    this.value_1 = value;
  };
  AtomicInt.prototype.lazySet_emoqzm_k$ = function (value) {
    this.value_1 = value;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.value_1 === expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.value_1;
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 + delta | 0;
    return this.value_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 + 1 | 0;
    return tmp0_this.value_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1 - 1 | 0;
    return tmp0_this.value_1;
  };
  AtomicInt.prototype.plusAssign_mcu86f_k$ = function (delta) {
    this.atomicfu$getAndAdd(delta);
  };
  AtomicInt.prototype.minusAssign_8s6p5d_k$ = function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  };
  AtomicInt.prototype.toString = function () {
    return this.value_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.get_kotlinx$atomicfu$value_vi2am5_k$,
    set: AtomicInt.prototype.set_kotlinx$atomicfu$value_3lx0f_k$
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.value_1 = value;
  }
  AtomicLong.prototype.set_kotlinx$atomicfu$value_sbfhx2_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  AtomicLong.prototype.get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.value_1;
  };
  AtomicLong.prototype.getValue_1h979_k$ = function (thisRef, property) {
    return this.value_1;
  };
  AtomicLong.prototype.setValue_j9ezy0_k$ = function (thisRef, property, value) {
    this.value_1 = value;
  };
  AtomicLong.prototype.lazySet_42o0gp_k$ = function (value) {
    this.value_1 = value;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this.value_1.equals(expect))
      return false;
    this.value_1 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.value_1;
    this.value_1 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1.inc_28ke_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.value_1;
    tmp0_this.value_1 = tmp1.dec_24n6_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.value_1;
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.plus_u6jwas_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.plus_u6jwas_k$(delta);
    return this.value_1;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.inc_28ke_k$();
    return tmp0_this.value_1;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.value_1 = tmp0_this.value_1.dec_24n6_k$();
    return tmp0_this.value_1;
  };
  AtomicLong.prototype.plusAssign_mcpmgy_k$ = function (delta) {
    this.atomicfu$getAndAdd$long(delta);
  };
  AtomicLong.prototype.minusAssign_rr4kew_k$ = function (delta) {
    this.atomicfu$getAndAdd$long(delta.unaryMinus_6uz0qp_k$());
  };
  AtomicLong.prototype.toString = function () {
    return this.value_1.toString();
  };
  AtomicLong.$metadata$ = classMeta('AtomicLong');
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype.get_kotlinx$atomicfu$value_vi2am5_k$,
    set: AtomicLong.prototype.set_kotlinx$atomicfu$value_sbfhx2_k$
  });
  function atomic$long$1(initial) {
    return atomic_2(initial, None_getInstance());
  }
  function atomic$ref$(initial, trace) {
    return atomic(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic$default(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic(initial, trace);
  }
  function atomic$boolean$(initial, trace) {
    return atomic_0(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic$default_0(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_0(initial, trace);
  }
  function atomic$int$(initial, trace) {
    return atomic_1(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic$default_1(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_1(initial, trace);
  }
  function atomic$long$(initial, trace) {
    return atomic_2(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_2(initial, trace) {
    return new AtomicLong(initial);
  }
  function atomic$default_2(initial, trace, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      trace = None_getInstance();
    return atomic_2(initial, trace);
  }
  function get_traceFormatDefault() {
    init_properties_Trace_kt_b1chdd();
    return traceFormatDefault;
  }
  var traceFormatDefault;
  var properties_initialized_Trace_kt_s8gvpx;
  function init_properties_Trace_kt_b1chdd() {
    if (properties_initialized_Trace_kt_s8gvpx) {
    } else {
      properties_initialized_Trace_kt_s8gvpx = true;
      traceFormatDefault = new atomicfu$TraceFormat();
    }
  }
  function get_atomicfu$reentrantLock() {
    init_properties_Synchronized_kt_vep4ze();
    return Lock;
  }
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.prototype.lock_folzoa_k$ = function () {
  };
  ReentrantLock.prototype.tryLock_hapj0a_k$ = function () {
    return true;
  };
  ReentrantLock.prototype.unlock_85cgkz_k$ = function () {
  };
  ReentrantLock.$metadata$ = classMeta('ReentrantLock');
  var properties_initialized_Synchronized_kt_8bwsba;
  function init_properties_Synchronized_kt_vep4ze() {
    if (properties_initialized_Synchronized_kt_8bwsba) {
    } else {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomicfu$AtomicRefArray$ofNulls;
  _.$_$.b = atomic$boolean$1;
  _.$_$.c = atomic$long$1;
  _.$_$.d = atomic$ref$1;
  _.$_$.e = atomic$int$1;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map
