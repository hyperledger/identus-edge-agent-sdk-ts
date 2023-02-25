(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.i1;
  var Long = kotlin_kotlin.$_$.n4;
  var get = kotlin_kotlin.$_$.o2;
  var fold = kotlin_kotlin.$_$.n2;
  var minusKey = kotlin_kotlin.$_$.p2;
  var plus = kotlin_kotlin.$_$.s2;
  var Key = kotlin_kotlin.$_$.r2;
  var Element = kotlin_kotlin.$_$.q2;
  var objectMeta = kotlin_kotlin.$_$.p3;
  var Unit_getInstance = kotlin_kotlin.$_$.m1;
  var emptyList = kotlin_kotlin.$_$.s1;
  var filter = kotlin_kotlin.$_$.x3;
  var toList = kotlin_kotlin.$_$.z3;
  var toString = kotlin_kotlin.$_$.s3;
  var addSuppressed = kotlin_kotlin.$_$.v4;
  var firstOrNull = kotlin_kotlin.$_$.u1;
  var drop = kotlin_kotlin.$_$.r1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.t2;
  var THROW_CCE = kotlin_kotlin.$_$.r4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.j3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d2;
  var classMeta = kotlin_kotlin.$_$.a3;
  var AbstractCoroutine = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Unit = kotlin_kotlin.$_$.t4;
  var ensureNotNull = kotlin_kotlin.$_$.x4;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var SelectBuilderImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var returnIfSuspended = kotlin_kotlin.$_$.d;
  var cancelAndJoin = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var listOf = kotlin_kotlin.$_$.v1;
  var plus_0 = kotlin_kotlin.$_$.y1;
  var SuspendFunction1 = kotlin_kotlin.$_$.v2;
  var SuspendFunction0 = kotlin_kotlin.$_$.u2;
  var get_0 = kotlin_kotlin.$_$.j2;
  var minusKey_0 = kotlin_kotlin.$_$.k2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var AbstractLongTimeSource = kotlin_kotlin.$_$.g4;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.h2;
  var ThreadSafeHeap = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t;
  var isObject = kotlin_kotlin.$_$.k3;
  var compareValuesBy = kotlin_kotlin.$_$.b2;
  var Comparable = kotlin_kotlin.$_$.j4;
  var ThreadSafeHeapNode = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Companion_getInstance = kotlin_kotlin.$_$.k1;
  var KProperty1 = kotlin_kotlin.$_$.v3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e3;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Runnable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var interfaceMeta = kotlin_kotlin.$_$.h3;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var CancellationException = kotlin_kotlin.$_$.c2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var unwrap = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var equals = kotlin_kotlin.$_$.c3;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel$default_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var cancel$default_1 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var plus_1 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y4;
  var AssertionError = kotlin_kotlin.$_$.i4;
  var AssertionError_init_$Init$ = kotlin_kotlin.$_$.q;
  var captureStack = kotlin_kotlin.$_$.z2;
  var Key_getInstance_0 = kotlin_kotlin.$_$.h1;
  var IllegalStateException = kotlin_kotlin.$_$.m4;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.u;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var JobImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var handleCoroutineException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var get_DefaultDelay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var MainCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  //endregion
  //region block: pre-declaration
  runTest$slambda.prototype = Object.create(CoroutineImpl.prototype);
  runTest$slambda.prototype.constructor = runTest$slambda;
  runTestCoroutine$slambda.prototype = Object.create(CoroutineImpl.prototype);
  runTestCoroutine$slambda.prototype.constructor = runTestCoroutine$slambda;
  runTestCoroutine$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  runTestCoroutine$slambda_1.prototype.constructor = runTestCoroutine$slambda_1;
  runTestCoroutine$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  runTestCoroutine$slambda_3.prototype.constructor = runTestCoroutine$slambda_3;
  runTestCoroutine$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  runTestCoroutine$slambda_5.prototype.constructor = runTestCoroutine$slambda_5;
  runTestCoroutine$slambda_7.prototype = Object.create(CoroutineImpl.prototype);
  runTestCoroutine$slambda_7.prototype.constructor = runTestCoroutine$slambda_7;
  $runTestCoroutineCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $runTestCoroutineCOROUTINE$0.prototype.constructor = $runTestCoroutineCOROUTINE$0;
  TestDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  TestDispatcher.prototype.constructor = TestDispatcher;
  StandardTestDispatcherImpl.prototype = Object.create(TestDispatcher.prototype);
  StandardTestDispatcherImpl.prototype.constructor = StandardTestDispatcherImpl;
  TestCoroutineScheduler$timeSource$1.prototype = Object.create(AbstractLongTimeSource.prototype);
  TestCoroutineScheduler$timeSource$1.prototype.constructor = TestCoroutineScheduler$timeSource$1;
  TestCoroutineScheduler.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  TestCoroutineScheduler.prototype.constructor = TestCoroutineScheduler;
  TestScopeImpl.prototype = Object.create(AbstractCoroutine.prototype);
  TestScopeImpl.prototype.constructor = TestScopeImpl;
  UncompletedCoroutinesError.prototype = Object.create(AssertionError.prototype);
  UncompletedCoroutinesError.prototype.constructor = UncompletedCoroutinesError;
  UncaughtExceptionsBeforeTest.prototype = Object.create(IllegalStateException.prototype);
  UncaughtExceptionsBeforeTest.prototype.constructor = UncaughtExceptionsBeforeTest;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  ReportingSupervisorJob.prototype = Object.create(JobImpl.prototype);
  ReportingSupervisorJob.prototype.constructor = ReportingSupervisorJob;
  TestMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  TestMainDispatcher.prototype.constructor = TestMainDispatcher;
  createTestResult$slambda.prototype = Object.create(CoroutineImpl.prototype);
  createTestResult$slambda.prototype.constructor = createTestResult$slambda;
  //endregion
  function runTest(context, dispatchTimeoutMs, testBody) {
    if (!(context.get_1pi7hg_k$(RunningInRunTest_getInstance()) == null))
      throw IllegalStateException_init_$Create$("Calls to `runTest` can't be nested. Please read the docs on `TestResult` for details.");
    return runTest_0(TestScope_0(context.plus_rgw9wi_k$(RunningInRunTest_getInstance())), dispatchTimeoutMs, testBody);
  }
  function runTest$default(context, dispatchTimeoutMs, testBody, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      dispatchTimeoutMs = new Long(60000, 0);
    return runTest(context, dispatchTimeoutMs, testBody);
  }
  function get_DEFAULT_DISPATCH_TIMEOUT_MS() {
    return DEFAULT_DISPATCH_TIMEOUT_MS;
  }
  var DEFAULT_DISPATCH_TIMEOUT_MS;
  function RunningInRunTest() {
    RunningInRunTest_instance = this;
  }
  RunningInRunTest.prototype.get_key_18j28a_k$ = function () {
    return this;
  };
  RunningInRunTest.prototype.toString = function () {
    return 'RunningInRunTest';
  };
  RunningInRunTest.$metadata$ = objectMeta('RunningInRunTest', [Key, Element]);
  var RunningInRunTest_instance;
  function RunningInRunTest_getInstance() {
    if (RunningInRunTest_instance == null)
      new RunningInRunTest();
    return RunningInRunTest_instance;
  }
  function runTest_0(_this__u8e3s4, dispatchTimeoutMs, testBody) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = asSpecificImplementation(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.runTest.<anonymous>' call
    tmp0_let.enter_h4tfnd_k$();
    tmp$ret$0 = createTestResult(runTest$slambda_0(tmp0_let, dispatchTimeoutMs, testBody, _this__u8e3s4, null));
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function runTest$default_0(_this__u8e3s4, dispatchTimeoutMs, testBody, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dispatchTimeoutMs = new Long(60000, 0);
    return runTest_0(_this__u8e3s4, dispatchTimeoutMs, testBody);
  }
  function runTestCoroutine(_this__u8e3s4, coroutine, dispatchTimeoutMs, tryGetCompletionCause, testBody, cleanup, $cont) {
    var tmp = new $runTestCoroutineCOROUTINE$0(_this__u8e3s4, coroutine, dispatchTimeoutMs, tryGetCompletionCause, testBody, cleanup, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function handleTimeout(coroutine, dispatchTimeoutMs, tryGetCompletionCause, cleanup) {
    var tmp;
    try {
      tmp = cleanup();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UncompletedCoroutinesError) {
        tmp_0 = emptyList();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var uncaughtExceptions = tmp;
    var tmp_1 = coroutine.get_children_4cwbp4_k$();
    var activeChildren = toList(filter(tmp_1, handleTimeout$lambda));
    var completionCause = coroutine.get_isCancelled_trk8pu_k$() ? tryGetCompletionCause(coroutine) : null;
    var message = 'After waiting for ' + toString(dispatchTimeoutMs) + ' ms';
    if (completionCause == null)
      message = message + ', the test coroutine is not completing';
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !activeChildren.isEmpty_y1axqb_k$();
    if (tmp$ret$0)
      message = message + (', there were active child jobs: ' + activeChildren);
    if (!(completionCause == null) ? activeChildren.isEmpty_y1axqb_k$() : false) {
      if (coroutine.get_isCompleted_a6j6c8_k$())
        return Unit_getInstance();
      message = message + ', the test coroutine was not completed';
    }
    var error = new UncompletedCoroutinesError(message);
    var tmp0_safe_receiver = completionCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(error, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = uncaughtExceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.coroutines.test.handleTimeout.<anonymous>' call
      addSuppressed(error, element);
    }
    throw error;
  }
  function throwAll(_this__u8e3s4) {
    var tmp0_safe_receiver = firstOrNull(_this__u8e3s4);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.test.throwAll.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = drop(_this__u8e3s4, 1);
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.coroutines.test.throwAll.<anonymous>.<anonymous>' call
        addSuppressed(tmp0_safe_receiver, element);
      }
      throw tmp0_safe_receiver;
      tmp$ret$0 = tmp0_safe_receiver;
    }
  }
  function TestScopeImpl$tryGetCompletionCause$ref() {
    var l = function (p0) {
      return p0.tryGetCompletionCause_o6y0xa_k$();
    };
    l.callableName = 'tryGetCompletionCause';
    return l;
  }
  function runTest$slambda$lambda$lambda() {
    return false;
  }
  function runTest$slambda$lambda($this_runTest, $tmp0_let) {
    return function () {
      var tmp = $this_runTest.get_backgroundScope_9rqckj_k$();
      cancel$default(tmp, null, 1, null);
      var tmp_0 = $this_runTest.get_testScheduler_77amg0_k$();
      tmp_0.advanceUntilIdleOr_rnw05p_k$(runTest$slambda$lambda$lambda);
      return $tmp0_let.leave_1p8cl3_k$();
    };
  }
  function runTest$slambda($tmp0_let, $dispatchTimeoutMs, $testBody, $this_runTest, resultContinuation) {
    this.$tmp0_let_1 = $tmp0_let;
    this.$dispatchTimeoutMs_1 = $dispatchTimeoutMs;
    this.$testBody_1 = $testBody;
    this.$this_runTest_1 = $this_runTest;
    CoroutineImpl.call(this, resultContinuation);
  }
  runTest$slambda.prototype.invoke_d6gbsu_k$ = function ($this$createTestResult, $cont) {
    var tmp = this.create_b6qu53_k$($this$createTestResult, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  runTest$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  runTest$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = TestScopeImpl$tryGetCompletionCause$ref();
            suspendResult = runTestCoroutine(this.$this$createTestResult_1, this.$tmp0_let_1, this.$dispatchTimeoutMs_1, tmp_0, this.$testBody_1, runTest$slambda$lambda(this.$this_runTest_1, this.$tmp0_let_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  runTest$slambda.prototype.create_b6qu53_k$ = function ($this$createTestResult, completion) {
    var i = new runTest$slambda(this.$tmp0_let_1, this.$dispatchTimeoutMs_1, this.$testBody_1, this.$this_runTest_1, completion);
    i.$this$createTestResult_1 = $this$createTestResult;
    return i;
  };
  runTest$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  runTest$slambda.$metadata$ = classMeta('runTest$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function runTest$slambda_0($tmp0_let, $dispatchTimeoutMs, $testBody, $this_runTest, resultContinuation) {
    var i = new runTest$slambda($tmp0_let, $dispatchTimeoutMs, $testBody, $this_runTest, resultContinuation);
    var l = function ($this$createTestResult, $cont) {
      return i.invoke_d6gbsu_k$($this$createTestResult, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function runTestCoroutine$slambda($testBody, resultContinuation) {
    this.$testBody_1 = $testBody;
    CoroutineImpl.call(this, resultContinuation);
  }
  runTestCoroutine$slambda.prototype.invoke_tr8wvu_k$ = function ($this$start, $cont) {
    var tmp = this.create_aq37ol_k$($this$start, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  runTestCoroutine$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_tr8wvu_k$(p1 instanceof AbstractCoroutine ? p1 : THROW_CCE(), $cont);
  };
  runTestCoroutine$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$testBody_1(this.$this$start_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  runTestCoroutine$slambda.prototype.create_aq37ol_k$ = function ($this$start, completion) {
    var i = new runTestCoroutine$slambda(this.$testBody_1, completion);
    i.$this$start_1 = $this$start;
    return i;
  };
  runTestCoroutine$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$(value instanceof AbstractCoroutine ? value : THROW_CCE(), completion);
  };
  runTestCoroutine$slambda.$metadata$ = classMeta('runTestCoroutine$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function runTestCoroutine$slambda_0($testBody, resultContinuation) {
    var i = new runTestCoroutine$slambda($testBody, resultContinuation);
    var l = function ($this$start, $cont) {
      return i.invoke_tr8wvu_k$($this$start, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function runTestCoroutine$slambda$lambda($this_launch) {
    return function () {
      return !get_isActive($this_launch);
    };
  }
  function runTestCoroutine$slambda_1($scheduler, resultContinuation) {
    this.$scheduler_1 = $scheduler;
    CoroutineImpl.call(this, resultContinuation);
  }
  runTestCoroutine$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  runTestCoroutine$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  runTestCoroutine$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 4;
              continue $sm;
            }

            this.$scheduler_1.tryRunNextTaskUnless_d4q0a1_k$(runTestCoroutine$slambda$lambda(this.$this$launch_1));
            ;
            this.state_1 = 2;
            suspendResult = yield_0(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 1;
            continue $sm;
          case 3:
            throw this.exception_1;
          case 4:
            return Unit_getInstance();
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
  runTestCoroutine$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new runTestCoroutine$slambda_1(this.$scheduler_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  runTestCoroutine$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  runTestCoroutine$slambda_1.$metadata$ = classMeta('runTestCoroutine$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function runTestCoroutine$slambda_2($scheduler, resultContinuation) {
    var i = new runTestCoroutine$slambda_1($scheduler, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function runTestCoroutine$slambda_3($completed, resultContinuation) {
    this.$completed_1 = $completed;
    CoroutineImpl.call(this, resultContinuation);
  }
  runTestCoroutine$slambda_3.prototype.invoke_pbb09x_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  runTestCoroutine$slambda_3.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_pbb09x_k$($cont);
  };
  runTestCoroutine$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          this.$completed_1._v = true;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  runTestCoroutine$slambda_3.prototype.create_lvr374_k$ = function (completion) {
    var i = new runTestCoroutine$slambda_3(this.$completed_1, completion);
    return i;
  };
  runTestCoroutine$slambda_3.$metadata$ = classMeta('runTestCoroutine$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function runTestCoroutine$slambda_4($completed, resultContinuation) {
    var i = new runTestCoroutine$slambda_3($completed, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function runTestCoroutine$slambda_5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  runTestCoroutine$slambda_5.prototype.invoke_p2pull_k$ = function (it, $cont) {
    var tmp = this.create_axmm2q_k$(it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  runTestCoroutine$slambda_5.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_p2pull_k$(p1 instanceof Unit ? p1 : THROW_CCE(), $cont);
  };
  runTestCoroutine$slambda_5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  runTestCoroutine$slambda_5.prototype.create_axmm2q_k$ = function (it, completion) {
    var i = new runTestCoroutine$slambda_5(completion);
    i.it_1 = it;
    return i;
  };
  runTestCoroutine$slambda_5.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_axmm2q_k$(value instanceof Unit ? value : THROW_CCE(), completion);
  };
  runTestCoroutine$slambda_5.$metadata$ = classMeta('runTestCoroutine$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function runTestCoroutine$slambda_6(resultContinuation) {
    var i = new runTestCoroutine$slambda_5(resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_p2pull_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function runTestCoroutine$slambda$lambda_0(it) {
    return it.get_isActive_quafmh_k$();
  }
  function runTestCoroutine$slambda_7($cleanup, $coroutine, $tryGetCompletionCause, $dispatchTimeoutMs, resultContinuation) {
    this.$cleanup_1 = $cleanup;
    this.$coroutine_1 = $coroutine;
    this.$tryGetCompletionCause_1 = $tryGetCompletionCause;
    this.$dispatchTimeoutMs_1 = $dispatchTimeoutMs;
    CoroutineImpl.call(this, resultContinuation);
  }
  runTestCoroutine$slambda_7.prototype.invoke_pbb09x_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  runTestCoroutine$slambda_7.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_pbb09x_k$($cont);
  };
  runTestCoroutine$slambda_7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp$ret$0;
          l$ret$1: do {
            var tmp_0;
            try {
              tmp_0 = this.$cleanup_1();
            } catch ($p) {
              var tmp_1;
              if ($p instanceof UncompletedCoroutinesError) {
                tmp_1 = emptyList();
              } else {
                throw $p;
              }
              tmp_0 = tmp_1;
            }
            var uncaughtExceptions = tmp_0;
            var tmp_2 = this.$coroutine_1.get_children_4cwbp4_k$();
            var activeChildren = toList(filter(tmp_2, runTestCoroutine$slambda$lambda_0));
            var completionCause = this.$coroutine_1.get_isCancelled_trk8pu_k$() ? this.$tryGetCompletionCause_1(this.$coroutine_1) : null;
            var message = 'After waiting for ' + toString(this.$dispatchTimeoutMs_1) + ' ms';
            if (completionCause == null)
              message = message + ', the test coroutine is not completing';
            if (!activeChildren.isEmpty_y1axqb_k$())
              message = message + (', there were active child jobs: ' + activeChildren);
            if (!(completionCause == null) ? activeChildren.isEmpty_y1axqb_k$() : false) {
              if (this.$coroutine_1.get_isCompleted_a6j6c8_k$()) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              message = message + ', the test coroutine was not completed';
            }
            var error = new UncompletedCoroutinesError(message);
            var tmp0_safe_receiver = completionCause;
            if (tmp0_safe_receiver == null)
              null;
            else {
              addSuppressed(error, tmp0_safe_receiver);
            }
            var tmp0_iterator = uncaughtExceptions.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              addSuppressed(error, element);
            }
            throw error;
          }
           while (false);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  runTestCoroutine$slambda_7.prototype.create_lvr374_k$ = function (completion) {
    var i = new runTestCoroutine$slambda_7(this.$cleanup_1, this.$coroutine_1, this.$tryGetCompletionCause_1, this.$dispatchTimeoutMs_1, completion);
    return i;
  };
  runTestCoroutine$slambda_7.$metadata$ = classMeta('runTestCoroutine$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function runTestCoroutine$slambda_8($cleanup, $coroutine, $tryGetCompletionCause, $dispatchTimeoutMs, resultContinuation) {
    var i = new runTestCoroutine$slambda_7($cleanup, $coroutine, $tryGetCompletionCause, $dispatchTimeoutMs, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function handleTimeout$lambda(it) {
    return it.get_isActive_quafmh_k$();
  }
  function $runTestCoroutineCOROUTINE$0(_this__u8e3s4, coroutine, dispatchTimeoutMs, tryGetCompletionCause, testBody, cleanup, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.coroutine_1 = coroutine;
    this.dispatchTimeoutMs_1 = dispatchTimeoutMs;
    this.tryGetCompletionCause_1 = tryGetCompletionCause;
    this.testBody_1 = testBody;
    this.cleanup_1 = cleanup;
  }
  $runTestCoroutineCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 10;
            this.scheduler0__1 = ensureNotNull(this.coroutine_1.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance_1()));
            var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
            this.coroutine_1.start_1ln6k9_k$(tmp_0, this.coroutine_1, runTestCoroutine$slambda_0(this.testBody_1, null));
            this.completed1__1 = {_v: false};
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!!this.completed1__1._v) {
              this.state_1 = 9;
              continue $sm;
            }

            this.scheduler0__1.advanceUntilIdle_8tbnvj_k$();
            if (this.coroutine_1.get_isCompleted_a6j6c8_k$()) {
              this.completed1__1._v = true;
              this.state_1 = 1;
              continue $sm;
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_1 = this;
            var tmp_2 = new CoroutineName('background work runner');
            tmp_1.backgroundWorkRunner2__1 = launch$default(this._this__u8e3s4__1, tmp_2, null, runTestCoroutine$slambda_2(this.scheduler0__1, null), 2, null);
            this.state_1 = 3;
            continue $sm;
          case 3:
            this.exceptionState_1 = 7;
            this.state_1 = 4;
            var tmp_3 = this;
            tmp_3.tmp0__anonymous_4_q5x4yb_1 = this;
            this.scope5__1 = new SelectBuilderImpl(this.tmp0__anonymous_4_q5x4yb_1);
            try {
              var tmp_4 = this.coroutine_1.get_onJoin_hnj4j6_k$();
              this.scope5__1.invoke_l7qztr_k$(tmp_4, runTestCoroutine$slambda_4(this.completed1__1, null));
              var tmp_5 = this.scheduler0__1.get_onDispatchEvent_ihtnzs_k$();
              this.scope5__1.invoke_t2zbk2_k$(tmp_5, runTestCoroutine$slambda_6(null));
              this.scope5__1.onTimeout_oq3k0u_k$(this.dispatchTimeoutMs_1, runTestCoroutine$slambda_8(this.cleanup_1, this.coroutine_1, this.tryGetCompletionCause_1, this.dispatchTimeoutMs_1, null));
            } catch ($p) {
              if ($p instanceof Error) {
                this.scope5__1.handleBuilderException_9aaf9h_k$($p);
              } else {
                throw $p;
              }
            }

            suspendResult = returnIfSuspended(this.scope5__1.getResult_clfhg3_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$03__1 = suspendResult;
            this.exceptionState_1 = 10;
            this.state_1 = 5;
            continue $sm;
          case 5:
            this.state_1 = 6;
            suspendResult = cancelAndJoin(this.backgroundWorkRunner2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.state_1 = 1;
            continue $sm;
          case 7:
            this.exceptionState_1 = 10;
            this.t6__1 = this.exception_1;
            this.state_1 = 8;
            suspendResult = cancelAndJoin(this.backgroundWorkRunner2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.t6__1;
          case 9:
            var tmp0_safe_receiver = this.coroutine_1.getCompletionExceptionOrNull_snuvbb_k$();
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp_6;
              try {
                tmp_6 = this.cleanup_1();
              } catch ($p) {
                var tmp_7;
                if ($p instanceof UncompletedCoroutinesError) {
                  tmp_7 = emptyList();
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              var exceptions = tmp_6;
              throwAll(plus_0(listOf(tmp0_safe_receiver), exceptions));
            }

            ;
            throwAll(this.cleanup_1());
            return Unit_getInstance();
          case 10:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 10) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $runTestCoroutineCOROUTINE$0.$metadata$ = classMeta('$runTestCoroutineCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function StandardTestDispatcher(scheduler, name) {
    var tmp0_elvis_lhs = scheduler;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? Companion_getInstance_0().get_currentTestScheduler_tzr3vr_k$() : tmp0_elvis_lhs;
    return new StandardTestDispatcherImpl(tmp1_elvis_lhs == null ? new TestCoroutineScheduler() : tmp1_elvis_lhs, name);
  }
  function StandardTestDispatcher$default(scheduler, name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scheduler = null;
    if (!(($mask0 & 2) === 0))
      name = null;
    return StandardTestDispatcher(scheduler, name);
  }
  function StandardTestDispatcherImpl_init_$Init$(scheduler, name, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      scheduler = new TestCoroutineScheduler();
    if (!(($mask0 & 2) === 0))
      name = null;
    StandardTestDispatcherImpl.call($this, scheduler, name);
    return $this;
  }
  function StandardTestDispatcherImpl_init_$Create$(scheduler, name, $mask0, $marker) {
    return StandardTestDispatcherImpl_init_$Init$(scheduler, name, $mask0, $marker, Object.create(StandardTestDispatcherImpl.prototype));
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function StandardTestDispatcherImpl$dispatch$lambda(it) {
    return false;
  }
  function StandardTestDispatcherImpl(scheduler, name) {
    TestDispatcher.call(this);
    this.scheduler_1 = scheduler;
    this.name_1 = name;
  }
  StandardTestDispatcherImpl.prototype.get_scheduler_5uu87m_k$ = function () {
    return this.scheduler_1;
  };
  StandardTestDispatcherImpl.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var tmp = new Long(0, 0);
    this.scheduler_1.registerEvent_9vl6ag_k$(this, tmp, block, context, StandardTestDispatcherImpl$dispatch$lambda);
  };
  StandardTestDispatcherImpl.prototype.toString = function () {
    var tmp0_elvis_lhs = this.name_1;
    return (tmp0_elvis_lhs == null ? 'StandardTestDispatcher' : tmp0_elvis_lhs) + '[scheduler=' + this.scheduler_1 + ']';
  };
  StandardTestDispatcherImpl.$metadata$ = classMeta('StandardTestDispatcherImpl', undefined, undefined, undefined, undefined, TestDispatcher.prototype);
  function Key_0() {
    Key_instance = this;
  }
  Key_0.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance;
  function Key_getInstance_1() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function _get_events__f13j82($this) {
    return $this.events_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _get_count__iw3m8u($this) {
    return $this.count_1;
  }
  function _set_currentTime__l6rra7($this, _set____db54di) {
    $this.currentTime_1 = _set____db54di;
  }
  function _get_dispatchEvents__h7qhfs($this) {
    return $this.dispatchEvents_1;
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_DisposableHandle$0.prototype.dispose_3n44we_k$ = function () {
    return this.function_1();
  };
  sam$kotlinx_coroutines_DisposableHandle$0.$metadata$ = classMeta('sam$kotlinx_coroutines_DisposableHandle$0', [DisposableHandle]);
  function TestCoroutineScheduler$registerEvent$lambda($isCancelled, $marker) {
    return function () {
      return $isCancelled($marker);
    };
  }
  function TestCoroutineScheduler$registerEvent$lambda_0(this$0, $event) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      var tmp0_synchronized = this$0.lock_1;
      this$0.events_1.remove_8hbkbr_k$($event);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function TestCoroutineScheduler$advanceUntilIdle$lambda(this$0) {
    return function () {
      return none(this$0.events_1, isForeground$factory());
    };
  }
  function TestCoroutineScheduler$isIdle$lambda(it) {
    return !it.isCancelled_1();
  }
  function TestCoroutineScheduler$timeSource$1(this$0) {
    this.this$0__1 = this$0;
    AbstractLongTimeSource.call(this, DurationUnit_MILLISECONDS_getInstance());
  }
  TestCoroutineScheduler$timeSource$1.prototype.read_22xsm_k$ = function () {
    return this.this$0__1.get_currentTime_nu5t31_k$();
  };
  TestCoroutineScheduler$timeSource$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, AbstractLongTimeSource.prototype);
  function TestCoroutineScheduler() {
    Key_getInstance_1();
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
    this.events_1 = new ThreadSafeHeap();
    this.lock_1 = new Object();
    this.count_1 = new Long(0, 0);
    this.currentTime_1 = new Long(0, 0);
    var tmp = this;
    Factory_getInstance();
    tmp.dispatchEvents_1 = Channel$default(-1, null, null, 6, null);
    var tmp_0 = this;
    tmp_0.timeSource_1 = new TestCoroutineScheduler$timeSource$1(this);
  }
  TestCoroutineScheduler.prototype.get_currentTime_nu5t31_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.<get-currentTime>.<anonymous>' call
    tmp$ret$0 = this.currentTime_1;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  TestCoroutineScheduler.prototype.registerEvent_9vl6ag_k$ = function (dispatcher, timeDeltaMillis, marker, context, isCancelled) {
    // Inline function 'kotlin.require' call
    var tmp0_require = timeDeltaMillis.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.registerEvent.<anonymous>' call
      tmp$ret$0 = 'Attempted scheduling an event earlier in time (with the time delta ' + toString(timeDeltaMillis) + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkSchedulerInContext(this, context);
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndIncrement' call
    var oldValue = this.count_1;
    // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.registerEvent.<set-count>' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$1 = oldValue.plus_u6jwas_k$(new Long(1, 0));
    var tmp1__set_count__1euqpb = tmp$ret$1;
    this.count_1 = tmp1__set_count__1euqpb;
    tmp$ret$2 = oldValue;
    var count = tmp$ret$2;
    var isForeground = context.get_1pi7hg_k$(BackgroundWork_getInstance()) === null;
    var tmp$ret$4;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp2_synchronized = this.lock_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.registerEvent.<anonymous>' call
    var time = addClamping(this.get_currentTime_nu5t31_k$(), timeDeltaMillis);
    var tmp = isObject(marker) ? marker : THROW_CCE();
    var event = new TestDispatchEvent(dispatcher, count, time, tmp, isForeground, TestCoroutineScheduler$registerEvent$lambda(isCancelled, marker));
    this.events_1.addLast_xhfl3v_k$(event);
    this.sendDispatchEvent_8m559p_k$(context);
    var tmp_0 = TestCoroutineScheduler$registerEvent$lambda_0(this, event);
    tmp$ret$3 = new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  };
  TestCoroutineScheduler.prototype.tryRunNextTaskUnless_d4q0a1_k$ = function (condition) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.tryRunNextTaskUnless.<anonymous>' call
    if (condition())
      return false;
    var tmp0_elvis_lhs = this.events_1.removeFirstOrNull_eges3a_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var event = tmp;
    if (this.get_currentTime_nu5t31_k$().compareTo_n4fqi2_k$(event.time_1) > 0) {
      currentTimeAheadOfEvents();
    }
    this.currentTime_1 = event.time_1;
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    var event_0 = tmp$ret$1;
    event_0.dispatcher_1.processEvent_wkcfm0_k$(event_0.time_1, event_0.marker_1);
    return true;
  };
  TestCoroutineScheduler.prototype.advanceUntilIdle_8tbnvj_k$ = function () {
    return this.advanceUntilIdleOr_rnw05p_k$(TestCoroutineScheduler$advanceUntilIdle$lambda(this));
  };
  TestCoroutineScheduler.prototype.advanceUntilIdleOr_rnw05p_k$ = function (condition) {
    while (true) {
      if (!this.tryRunNextTaskUnless_d4q0a1_k$(condition))
        return Unit_getInstance();
    }
  };
  TestCoroutineScheduler.prototype.runCurrent_53eqxv_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.runCurrent.<anonymous>' call
    tmp$ret$0 = this.get_currentTime_nu5t31_k$();
    tmp$ret$1 = tmp$ret$0;
    var timeMark = tmp$ret$1;
    while (true) {
      var tmp$ret$7;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      var tmp1_synchronized = this.lock_1;
      var tmp$ret$6;
      // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.runCurrent.<anonymous>' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.removeFirstIf' call
        var tmp0_removeFirstIf = this.events_1;
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.internal.synchronized' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.removeFirstIf.<anonymous>' call
        var tmp0_elvis_lhs = tmp0_removeFirstIf.firstImpl_2706pc_k$();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$2 = null;
          break $l$block;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var first = tmp;
        var tmp_0;
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.runCurrent.<anonymous>.<anonymous>' call
        tmp$ret$3 = first.time_1.compareTo_n4fqi2_k$(timeMark) <= 0;
        if (tmp$ret$3) {
          tmp_0 = tmp0_removeFirstIf.removeAtImpl_726gp6_k$(0);
        } else {
          tmp_0 = null;
        }
        tmp$ret$4 = tmp_0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$2 = tmp$ret$5;
      }
      var tmp0_elvis_lhs_0 = tmp$ret$2;
      var tmp_1;
      if (tmp0_elvis_lhs_0 == null) {
        return Unit_getInstance();
      } else {
        tmp_1 = tmp0_elvis_lhs_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var event = tmp$ret$7;
      event.dispatcher_1.processEvent_wkcfm0_k$(event.time_1, event.marker_1);
    }
  };
  TestCoroutineScheduler.prototype.advanceTimeBy_kh53sx_k$ = function (delayTimeMillis) {
    // Inline function 'kotlin.require' call
    var tmp0_require = delayTimeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.advanceTimeBy.<anonymous>' call
      tmp$ret$0 = 'Can not advance time by a negative delay: ' + toString(delayTimeMillis);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var startingTime = this.get_currentTime_nu5t31_k$();
    var targetTime = addClamping(startingTime, delayTimeMillis);
    while (true) {
      var tmp$ret$6;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      var tmp1_synchronized = this.lock_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.advanceTimeBy.<anonymous>' call
      var timeMark = this.get_currentTime_nu5t31_k$();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.removeFirstIf' call
        var tmp0_removeFirstIf = this.events_1;
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.internal.synchronized' call
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.removeFirstIf.<anonymous>' call
        var tmp0_elvis_lhs = tmp0_removeFirstIf.firstImpl_2706pc_k$();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = null;
          break $l$block;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var first = tmp;
        var tmp_0;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.advanceTimeBy.<anonymous>.<anonymous>' call
        tmp$ret$2 = targetTime.compareTo_n4fqi2_k$(first.time_1) > 0;
        if (tmp$ret$2) {
          tmp_0 = tmp0_removeFirstIf.removeAtImpl_726gp6_k$(0);
        } else {
          tmp_0 = null;
        }
        tmp$ret$3 = tmp_0;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$1 = tmp$ret$4;
      }
      var event = tmp$ret$1;
      var tmp_1;
      if (event == null) {
        this.currentTime_1 = targetTime;
        return Unit_getInstance();
      } else if (timeMark.compareTo_n4fqi2_k$(event.time_1) > 0) {
        currentTimeAheadOfEvents();
      } else {
        this.currentTime_1 = event.time_1;
        tmp_1 = event;
      }
      tmp$ret$5 = tmp_1;
      tmp$ret$6 = tmp$ret$5;
      var event_0 = tmp$ret$6;
      event_0.dispatcher_1.processEvent_wkcfm0_k$(event_0.time_1, event_0.marker_1);
    }
  };
  TestCoroutineScheduler.prototype.isIdle_8do28s_k$ = function (strict) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.TestCoroutineScheduler.isIdle.<anonymous>' call
    var tmp;
    if (strict) {
      tmp = this.events_1.get_isEmpty_zauvru_k$();
    } else {
      tmp = none(this.events_1, TestCoroutineScheduler$isIdle$lambda);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  TestCoroutineScheduler.prototype.isIdle$default_pgi2r_k$ = function (strict, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      strict = true;
    return this.isIdle_8do28s_k$(strict);
  };
  TestCoroutineScheduler.prototype.sendDispatchEvent_8m559p_k$ = function (context) {
    if (!(context.get_1pi7hg_k$(BackgroundWork_getInstance()) === BackgroundWork_getInstance())) {
      this.dispatchEvents_1.trySend_3hclq4_k$(Unit_getInstance());
    }
  };
  TestCoroutineScheduler.prototype.get_onDispatchEvent_ihtnzs_k$ = function () {
    return this.dispatchEvents_1.get_onReceive_mimw11_k$();
  };
  TestCoroutineScheduler.prototype.get_timeSource_74n3n3_k$ = function () {
    return this.timeSource_1;
  };
  TestCoroutineScheduler.$metadata$ = classMeta('TestCoroutineScheduler', [Element], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function BackgroundWork() {
    BackgroundWork_instance = this;
  }
  BackgroundWork.prototype.get_key_18j28a_k$ = function () {
    return this;
  };
  BackgroundWork.prototype.toString = function () {
    return 'BackgroundWork';
  };
  BackgroundWork.$metadata$ = objectMeta('BackgroundWork', [Key, Element]);
  var BackgroundWork_instance;
  function BackgroundWork_getInstance() {
    if (BackgroundWork_instance == null)
      new BackgroundWork();
    return BackgroundWork_instance;
  }
  function _get_count__iw3m8u_0($this) {
    return $this.count_1;
  }
  function TestDispatchEvent(dispatcher, count, time, marker, isForeground, isCancelled) {
    this.dispatcher_1 = dispatcher;
    this.count_1 = count;
    this.time_1 = time;
    this.marker_1 = marker;
    this.isForeground_1 = isForeground;
    this.isCancelled_1 = isCancelled;
    this.heap_1 = null;
    this.index_1 = 0;
  }
  TestDispatchEvent.prototype.get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  TestDispatchEvent.prototype.get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  TestDispatchEvent.prototype.get_marker_gj00g3_k$ = function () {
    return this.marker_1;
  };
  TestDispatchEvent.prototype.get_isForeground_28ny3a_k$ = function () {
    return this.isForeground_1;
  };
  TestDispatchEvent.prototype.get_isCancelled_trk8pu_k$ = function () {
    return this.isCancelled_1;
  };
  TestDispatchEvent.prototype.set_heap_ee7d2q_k$ = function (_set____db54di) {
    this.heap_1 = _set____db54di;
  };
  TestDispatchEvent.prototype.get_heap_won7ed_k$ = function () {
    return this.heap_1;
  };
  TestDispatchEvent.prototype.set_index_eknhut_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  TestDispatchEvent.prototype.get_index_it478p_k$ = function () {
    return this.index_1;
  };
  TestDispatchEvent.prototype.compareTo_z7ary7_k$ = function (other) {
    return compareValuesBy(this, other, [time$factory(), count$factory()]);
  };
  TestDispatchEvent.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_z7ary7_k$(other instanceof TestDispatchEvent ? other : THROW_CCE());
  };
  TestDispatchEvent.prototype.toString = function () {
    return 'TestDispatchEvent(time=' + toString(this.time_1) + ', dispatcher=' + this.dispatcher_1 + (this.isForeground_1 ? '' : ', background') + ')';
  };
  TestDispatchEvent.$metadata$ = classMeta('TestDispatchEvent', [Comparable, ThreadSafeHeapNode]);
  function checkSchedulerInContext(scheduler, context) {
    var tmp0_safe_receiver = context.get_1pi7hg_k$(Key_getInstance_1());
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_check = tmp0_safe_receiver === scheduler;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.test.checkSchedulerInContext.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Detected use of different schedulers. If you need to use several test coroutine dispatchers, create one `TestCoroutineScheduler` and pass it to each of them.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp;
    }
  }
  function addClamping(a, b) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = a.plus_u6jwas_k$(b);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.addClamping.<anonymous>' call
    var tmp;
    if (tmp0_let.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
      tmp = tmp0_let;
    } else {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function currentTimeAheadOfEvents() {
    invalidSchedulerState();
  }
  function none(_this__u8e3s4, predicate) {
    return _this__u8e3s4.find_chppa9_k$(predicate) == null;
  }
  function invalidSchedulerState() {
    throw IllegalStateException_init_$Create$('The test scheduler entered an invalid state. Please report this at https://github.com/Kotlin/kotlinx.coroutines/issues.');
  }
  function isForeground$factory() {
    return getPropertyCallableRef('isForeground', 1, KProperty1, function (receiver) {
      return receiver.isForeground_1;
    }, null);
  }
  function time$factory() {
    return getPropertyCallableRef('time', 1, KProperty1, function (receiver) {
      return receiver.time_1;
    }, null);
  }
  function count$factory() {
    return getPropertyCallableRef('count', 1, KProperty1, function (receiver) {
      return receiver.count_1;
    }, null);
  }
  function cancellableRunnableIsCancelled$ref() {
    var l = function (p0) {
      return cancellableRunnableIsCancelled(p0);
    };
    l.callableName = 'cancellableRunnableIsCancelled';
    return l;
  }
  function TestDispatcher$invokeOnTimeout$lambda(it) {
    return false;
  }
  function TestDispatcher() {
    CoroutineDispatcher.call(this);
  }
  TestDispatcher.prototype.processEvent_wkcfm0_k$ = function (time, marker) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(marker, Runnable)) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    marker.run_mw4iiu_k$();
  };
  TestDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var timedRunnable = new CancellableContinuationRunnable(continuation, this);
    var tmp = this.get_scheduler_5uu87m_k$();
    var tmp_0 = continuation.get_context_h02k06_k$();
    tmp.registerEvent_9vl6ag_k$(this, timeMillis, timedRunnable, tmp_0, cancellableRunnableIsCancelled$ref());
  };
  TestDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var tmp = this.get_scheduler_5uu87m_k$();
    return tmp.registerEvent_9vl6ag_k$(this, timeMillis, block, context, TestDispatcher$invokeOnTimeout$lambda);
  };
  TestDispatcher.$metadata$ = classMeta('TestDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function CancellableContinuationRunnable(continuation, dispatcher) {
    this.continuation_1 = continuation;
    this.dispatcher_1 = dispatcher;
  }
  CancellableContinuationRunnable.prototype.get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  CancellableContinuationRunnable.prototype.run_mw4iiu_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.dispatcher_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = this.continuation_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with_0.resumeUndispatched_re4yxz_k$(tmp0_with, Unit_getInstance());
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  CancellableContinuationRunnable.$metadata$ = classMeta('CancellableContinuationRunnable', [Runnable]);
  function cancellableRunnableIsCancelled(runnable) {
    return !runnable.continuation_1.get_isActive_quafmh_k$();
  }
  function TestScope() {
  }
  TestScope.$metadata$ = interfaceMeta('TestScope', [CoroutineScope]);
  function TestScope_0(context) {
    var ctxWithDispatcher = withDelaySkipping(context);
    var scope = {_v: null};
    var tmp0_subject = ctxWithDispatcher.get_1pi7hg_k$(Key_getInstance());
    var tmp;
    if (tmp0_subject == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
      tmp$ret$0 = new _no_name_provided__qut3iv(scope);
      tmp = tmp$ret$0;
    } else {
      throw IllegalArgumentException_init_$Create$('A CoroutineExceptionHandler was passed to TestScope. Please pass it as an argument to a `launch` or `async` block on an already-created scope if uncaught exceptions require special treatment.');
    }
    var exceptionHandler = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = new TestScopeImpl(ctxWithDispatcher.plus_rgw9wi_k$(exceptionHandler));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.test.TestScope.<anonymous>' call
    scope._v = tmp0_also;
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function TestScope$default(context, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    return TestScope_0(context);
  }
  function _set_entered__py7xta($this, _set____db54di) {
    $this.entered_1 = _set____db54di;
  }
  function _get_entered__bznga($this) {
    return $this.entered_1;
  }
  function _set_finished__nxw66z($this, _set____db54di) {
    $this.finished_1 = _set____db54di;
  }
  function _get_finished__yabkbd($this) {
    return $this.finished_1;
  }
  function _get_uncaughtExceptions__gr4qdq($this) {
    return $this.uncaughtExceptions_1;
  }
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function TestScopeImpl$backgroundScope$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it instanceof CancellationException)) {
        this$0.reportException_aavmoq_k$(it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TestScopeImpl$leave$lambda(it) {
    return it.get_isActive_quafmh_k$();
  }
  function TestScopeImpl(context) {
    AbstractCoroutine.call(this, context, true, true);
    this.entered_1 = false;
    this.finished_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.uncaughtExceptions_1 = tmp$ret$0;
    this.lock_1 = new Object();
    var tmp_0 = this;
    var tmp_1 = this.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(BackgroundWork_getInstance());
    tmp_0.backgroundScope_1 = CoroutineScope_0(tmp_1.plus_rgw9wi_k$(ReportingSupervisorJob_init_$Create$(null, TestScopeImpl$backgroundScope$lambda(this), 1, null)));
  }
  TestScopeImpl.prototype.get_testScheduler_77amg0_k$ = function () {
    return ensureNotNull(this.context_1.get_1pi7hg_k$(Key_getInstance_1()));
  };
  TestScopeImpl.prototype.get_backgroundScope_9rqckj_k$ = function () {
    return this.backgroundScope_1;
  };
  TestScopeImpl.prototype.enter_h4tfnd_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.test.TestScopeImpl.enter.<anonymous>' call
    if (this.entered_1)
      throw IllegalStateException_init_$Create$('Only a single call to `runTest` can be performed during one test.');
    this.entered_1 = true;
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.finished_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = this.uncaughtExceptions_1;
    tmp$ret$2 = tmp$ret$1;
    var exceptions = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !exceptions.isEmpty_y1axqb_k$();
    if (tmp$ret$3) {
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = new UncaughtExceptionsBeforeTest();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.test.TestScopeImpl.enter.<anonymous>' call
      var tmp0_iterator = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var e = tmp0_iterator.next_20eer_k$();
        addSuppressed(tmp1_apply, e);
      }
      tmp$ret$4 = tmp1_apply;
      throw tmp$ret$4;
    }
  };
  TestScopeImpl.prototype.leave_1p8cl3_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.test.TestScopeImpl.leave.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = this.entered_1 ? !this.finished_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.finished_1 = true;
    tmp$ret$1 = this.uncaughtExceptions_1;
    tmp$ret$2 = tmp$ret$1;
    var exceptions = tmp$ret$2;
    var tmp = this.get_children_4cwbp4_k$();
    var activeJobs = toList(filter(tmp, TestScopeImpl$leave$lambda));
    if (exceptions.isEmpty_y1axqb_k$()) {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$3 = !activeJobs.isEmpty_y1axqb_k$();
      if (tmp$ret$3)
        throw new UncompletedCoroutinesError('Active jobs found during the tear-down. Ensure that all coroutines are completed or cancelled by your test. ' + ('The active jobs: ' + activeJobs));
      var tmp_0 = this.get_testScheduler_77amg0_k$();
      if (!tmp_0.isIdle$default_pgi2r_k$(false, 1, null))
        throw new UncompletedCoroutinesError('Unfinished coroutines found during the tear-down. Ensure that all coroutines are completed or cancelled by your test.');
    }
    return exceptions;
  };
  TestScopeImpl.prototype.reportException_aavmoq_k$ = function (throwable) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = this.lock_1;
    var tmp;
    if (this.finished_1) {
      throw throwable;
    } else {
      var tmp0_iterator = this.uncaughtExceptions_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var existingThrowable = tmp0_iterator.next_20eer_k$();
        if (equals(unwrap(throwable), unwrap(existingThrowable)))
          return Unit_getInstance();
      }
      this.uncaughtExceptions_1.add_1j60pz_k$(throwable);
      var tmp_0;
      if (!this.entered_1) {
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = new UncaughtExceptionsBeforeTest();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.test.TestScopeImpl.reportException.<anonymous>.<anonymous>' call
        addSuppressed(tmp0_apply, throwable);
        tmp$ret$0 = tmp0_apply;
        throw tmp$ret$0;
      }
      tmp = tmp_0;
    }
    tmp$ret$1 = tmp;
  };
  TestScopeImpl.prototype.tryGetCompletionCause_o6y0xa_k$ = function () {
    return this.get_completionCause_bxx3i4_k$();
  };
  TestScopeImpl.prototype.toString = function () {
    return 'TestScope[' + (this.finished_1 ? 'test ended' : this.entered_1 ? 'test started' : 'test not started') + ']';
  };
  TestScopeImpl.$metadata$ = classMeta('TestScopeImpl', [TestScope], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function asSpecificImplementation(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof TestScopeImpl) {
      tmp = _this__u8e3s4;
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function UncompletedCoroutinesError(message) {
    AssertionError_init_$Init$(message, this);
    captureStack(this, UncompletedCoroutinesError);
  }
  UncompletedCoroutinesError.$metadata$ = classMeta('UncompletedCoroutinesError', undefined, undefined, undefined, undefined, AssertionError.prototype);
  function withDelaySkipping(_this__u8e3s4) {
    var dispatcher = _this__u8e3s4.get_1pi7hg_k$(Key_getInstance_0());
    var tmp;
    if (dispatcher instanceof TestDispatcher) {
      var ctxScheduler = _this__u8e3s4.get_1pi7hg_k$(Key_getInstance_1());
      if (!(ctxScheduler == null)) {
        // Inline function 'kotlin.require' call
        var tmp0_require = dispatcher.get_scheduler_5uu87m_k$() === ctxScheduler;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.test.withDelaySkipping.<anonymous>' call
          tmp$ret$0 = 'Both a TestCoroutineScheduler ' + ctxScheduler + ' and TestDispatcher ' + dispatcher + ' linked to ' + 'another scheduler were passed.';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      tmp = dispatcher;
    } else {
      if (dispatcher == null) {
        var tmp_0 = _this__u8e3s4.get_1pi7hg_k$(Key_getInstance_1());
        tmp = StandardTestDispatcher$default(tmp_0, null, 2, null);
      } else {
        throw IllegalArgumentException_init_$Create$('Dispatcher must implement TestDispatcher: ' + dispatcher);
      }
    }
    var dispatcher_0 = tmp;
    return _this__u8e3s4.plus_rgw9wi_k$(dispatcher_0).plus_rgw9wi_k$(dispatcher_0.get_scheduler_5uu87m_k$());
  }
  function UncaughtExceptionsBeforeTest() {
    IllegalStateException_init_$Init$('There were uncaught exceptions in coroutines launched from TestScope before the test started. Please avoid this, as such exceptions are also reported in a platform-dependent manner so that they are not lost.', this);
    captureStack(this, UncaughtExceptionsBeforeTest);
  }
  UncaughtExceptionsBeforeTest.$metadata$ = classMeta('UncaughtExceptionsBeforeTest', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function _no_name_provided__qut3iv($scope) {
    this.$scope_1 = $scope;
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.handleException_w1h9is_k$ = function (context, exception) {
    return ensureNotNull(this.$scope_1._v).reportException_aavmoq_k$(exception);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function ReportingSupervisorJob_init_$Init$(parent, onChildCancellation, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    ReportingSupervisorJob.call($this, parent, onChildCancellation);
    return $this;
  }
  function ReportingSupervisorJob_init_$Create$(parent, onChildCancellation, $mask0, $marker) {
    return ReportingSupervisorJob_init_$Init$(parent, onChildCancellation, $mask0, $marker, Object.create(ReportingSupervisorJob.prototype));
  }
  function ReportingSupervisorJob(parent, onChildCancellation) {
    JobImpl.call(this, parent);
    this.onChildCancellation_1 = onChildCancellation;
  }
  ReportingSupervisorJob.prototype.get_onChildCancellation_4qnvlj_k$ = function () {
    return this.onChildCancellation_1;
  };
  ReportingSupervisorJob.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp;
    try {
      tmp = this.onChildCancellation_1(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        addSuppressed(cause, $p);
        handleCoroutineException(this, cause);
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_let = tmp;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.test.internal.ReportingSupervisorJob.childCancelled.<anonymous>' call
    tmp$ret$0 = false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ReportingSupervisorJob.$metadata$ = classMeta('ReportingSupervisorJob', undefined, undefined, undefined, undefined, JobImpl.prototype);
  function _get_name__das4rk_0($this) {
    return $this.name_1;
  }
  function _get_readers__ktkge9($this) {
    return $this.readers_1;
  }
  function _get_isWriting__5qxyrj($this) {
    return $this.isWriting_1;
  }
  function _get_exceptionWhenReading__jlv5a0($this) {
    return $this.exceptionWhenReading_1;
  }
  function _get__value__22ek2v($this) {
    return $this._value_1;
  }
  function concurrentWW($this) {
    return IllegalStateException_init_$Create$($this.name_1 + ' is modified concurrently');
  }
  function concurrentRW($this) {
    return IllegalStateException_init_$Create$($this.name_1 + ' is used concurrently with setting it');
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_delegate__v6dc6q($this, _set____db54di) {
    $this.delegate_1 = _set____db54di;
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _get_delay__ikpy6q($this) {
    var tmp = $this.delegate_1.get_value_j01efc_k$();
    var tmp0_elvis_lhs = isInterface(tmp, Delay) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.test.internal.defaultDelay' call
      tmp$ret$0 = get_DefaultDelay();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.get_currentTestDispatcher_f2qjxz_k$ = function () {
    var tmp = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    var tmp0_safe_receiver = tmp instanceof TestMainDispatcher ? tmp : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.delegate_1;
    var tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_value_j01efc_k$();
    return tmp_0 instanceof TestDispatcher ? tmp_0 : null;
  };
  Companion.prototype.get_currentTestScheduler_tzr3vr_k$ = function () {
    var tmp0_safe_receiver = this.get_currentTestDispatcher_f2qjxz_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scheduler_5uu87m_k$();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function NonConcurrentlyModifiable(initialValue, name) {
    this.name_1 = name;
    this.readers_1 = 0;
    this.isWriting_1 = false;
    this.exceptionWhenReading_1 = null;
    this._value_1 = initialValue;
  }
  NonConcurrentlyModifiable.prototype.set_value_rnwamw_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.exceptionWhenReading_1;
    // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<set-value>.<set-exceptionWhenReading>' call
    this.exceptionWhenReading_1 = null;
    tmp$ret$0 = oldValue;
    var tmp0_safe_receiver = tmp$ret$0;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    tmp$ret$2 = this.readers_1;
    if (!(tmp$ret$2 === 0))
      throw concurrentRW(this);
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.isWriting_1, false)) {
        // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<set-value>.<set-isWriting>' call
        this.isWriting_1 = true;
        tmp$ret$3 = true;
        break $l$block_0;
      } else {
        tmp$ret$3 = false;
        break $l$block_0;
      }
    }
    if (!tmp$ret$3)
      throw concurrentWW(this);
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<set-value>.<set-_value>' call
    this._value_1 = value;
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<set-value>.<set-isWriting>' call
    this.isWriting_1 = false;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    tmp$ret$4 = this.readers_1;
    if (!(tmp$ret$4 === 0))
      throw concurrentRW(this);
  };
  NonConcurrentlyModifiable.prototype.get_value_j01efc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.atomicfu_incrementAndGet' call
    // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<get-value>.<set-readers>' call
    var tmp0__set_readers__tzdg33 = this.readers_1 + 1 | 0;
    this.readers_1 = tmp0__set_readers__tzdg33;
    tmp$ret$0 = this.readers_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    tmp$ret$1 = this.isWriting_1;
    if (tmp$ret$1) {
      // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
      var tmp1_atomicfu_setValue = concurrentRW(this);
      // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<get-value>.<set-exceptionWhenReading>' call
      this.exceptionWhenReading_1 = tmp1_atomicfu_setValue;
    }
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    tmp$ret$2 = this._value_1;
    var result = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.atomicfu_decrementAndGet' call
    // Inline function 'kotlinx.coroutines.test.internal.NonConcurrentlyModifiable.<get-value>.<set-readers>' call
    var tmp2__set_readers__8tdiy9 = this.readers_1 - 1 | 0;
    this.readers_1 = tmp2__set_readers__8tdiy9;
    tmp$ret$3 = this.readers_1;
    return result;
  };
  NonConcurrentlyModifiable.$metadata$ = classMeta('NonConcurrentlyModifiable');
  function TestMainDispatcher(delegate) {
    Companion_getInstance_0();
    MainCoroutineDispatcher.call(this);
    this.mainDispatcher_1 = delegate;
    this.delegate_1 = new NonConcurrentlyModifiable(this.mainDispatcher_1, 'Dispatchers.Main');
  }
  TestMainDispatcher.prototype.get_immediate_r3y8eg_k$ = function () {
    var tmp = this.delegate_1.get_value_j01efc_k$();
    var tmp0_safe_receiver = tmp instanceof MainCoroutineDispatcher ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_immediate_r3y8eg_k$();
    return tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
  };
  TestMainDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.get_value_j01efc_k$().dispatch_o98ux7_k$(context, block);
  };
  TestMainDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return this.delegate_1.get_value_j01efc_k$().isDispatchNeeded_fmz9vn_k$(context);
  };
  TestMainDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.get_value_j01efc_k$().dispatchYield_ww21f6_k$(context, block);
  };
  TestMainDispatcher.prototype.setDispatcher_8barqg_k$ = function (dispatcher) {
    this.delegate_1.set_value_rnwamw_k$(dispatcher);
  };
  TestMainDispatcher.prototype.resetDispatcher_q0h5hh_k$ = function () {
    this.delegate_1.set_value_rnwamw_k$(this.mainDispatcher_1);
  };
  TestMainDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    return _get_delay__ikpy6q(this).scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  TestMainDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    return _get_delay__ikpy6q(this).invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  TestMainDispatcher.$metadata$ = classMeta('TestMainDispatcher', [Delay], undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function get_defaultDelay() {
    return get_DefaultDelay();
  }
  function createTestResult(testProcedure) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, createTestResult$slambda_0(testProcedure, null), 3, null);
  }
  function createTestResult$slambda($testProcedure, resultContinuation) {
    this.$testProcedure_1 = $testProcedure;
    CoroutineImpl.call(this, resultContinuation);
  }
  createTestResult$slambda.prototype.invoke_d6gbsu_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  createTestResult$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  createTestResult$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$testProcedure_1(this.$this$promise_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
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
  createTestResult$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new createTestResult$slambda(this.$testProcedure_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  createTestResult$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  createTestResult$slambda.$metadata$ = classMeta('createTestResult$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function createTestResult$slambda_0($testProcedure, resultContinuation) {
    var i = new createTestResult$slambda($testProcedure, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_d6gbsu_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  //region block: post-declaration
  RunningInRunTest.prototype.get_1pi7hg_k$ = get;
  RunningInRunTest.prototype.fold_6dbyow_k$ = fold;
  RunningInRunTest.prototype.minusKey_y21q55_k$ = minusKey;
  RunningInRunTest.prototype.plus_rgw9wi_k$ = plus;
  TestDispatcher.prototype.plus_rgw9wi_k$ = plus;
  TestDispatcher.prototype.get_1pi7hg_k$ = get_0;
  TestDispatcher.prototype.fold_6dbyow_k$ = fold;
  TestDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  TestDispatcher.prototype.delay_sw4t2e_k$ = delay;
  StandardTestDispatcherImpl.prototype.plus_rgw9wi_k$ = plus;
  StandardTestDispatcherImpl.prototype.get_1pi7hg_k$ = get_0;
  StandardTestDispatcherImpl.prototype.fold_6dbyow_k$ = fold;
  StandardTestDispatcherImpl.prototype.minusKey_y21q55_k$ = minusKey_0;
  StandardTestDispatcherImpl.prototype.delay_sw4t2e_k$ = delay;
  TestCoroutineScheduler.prototype.get_1pi7hg_k$ = get;
  TestCoroutineScheduler.prototype.fold_6dbyow_k$ = fold;
  TestCoroutineScheduler.prototype.minusKey_y21q55_k$ = minusKey;
  TestCoroutineScheduler.prototype.plus_rgw9wi_k$ = plus;
  BackgroundWork.prototype.get_1pi7hg_k$ = get;
  BackgroundWork.prototype.fold_6dbyow_k$ = fold;
  BackgroundWork.prototype.minusKey_y21q55_k$ = minusKey;
  BackgroundWork.prototype.plus_rgw9wi_k$ = plus;
  TestScopeImpl.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  TestScopeImpl.prototype.cancel$default_bm1z3z_k$ = cancel$default_0;
  TestScopeImpl.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  TestScopeImpl.prototype.cancel_2kogtl_k$ = cancel;
  TestScopeImpl.prototype.plus_ee14jq_k$ = plus_1;
  TestScopeImpl.prototype.plus_rgw9wi_k$ = plus;
  TestScopeImpl.prototype.get_1pi7hg_k$ = get;
  TestScopeImpl.prototype.fold_6dbyow_k$ = fold;
  TestScopeImpl.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__qut3iv.prototype.get_1pi7hg_k$ = get;
  _no_name_provided__qut3iv.prototype.fold_6dbyow_k$ = fold;
  _no_name_provided__qut3iv.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__qut3iv.prototype.plus_rgw9wi_k$ = plus;
  ReportingSupervisorJob.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  ReportingSupervisorJob.prototype.cancel$default_bm1z3z_k$ = cancel$default_0;
  ReportingSupervisorJob.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  ReportingSupervisorJob.prototype.cancel_2kogtl_k$ = cancel;
  ReportingSupervisorJob.prototype.plus_ee14jq_k$ = plus_1;
  ReportingSupervisorJob.prototype.plus_rgw9wi_k$ = plus;
  ReportingSupervisorJob.prototype.get_1pi7hg_k$ = get;
  ReportingSupervisorJob.prototype.fold_6dbyow_k$ = fold;
  ReportingSupervisorJob.prototype.minusKey_y21q55_k$ = minusKey;
  TestMainDispatcher.prototype.plus_rgw9wi_k$ = plus;
  TestMainDispatcher.prototype.get_1pi7hg_k$ = get_0;
  TestMainDispatcher.prototype.fold_6dbyow_k$ = fold;
  TestMainDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  TestMainDispatcher.prototype.delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  DEFAULT_DISPATCH_TIMEOUT_MS = new Long(60000, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = runTest$default;
  _.$_$.b = TestScope;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js.map
