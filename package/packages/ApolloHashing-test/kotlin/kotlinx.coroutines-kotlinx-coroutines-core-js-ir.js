(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.r4;
  var isObject = kotlin_kotlin.$_$.k3;
  var Unit_getInstance = kotlin_kotlin.$_$.m1;
  var plus = kotlin_kotlin.$_$.s2;
  var get = kotlin_kotlin.$_$.o2;
  var fold = kotlin_kotlin.$_$.n2;
  var minusKey = kotlin_kotlin.$_$.p2;
  var Continuation = kotlin_kotlin.$_$.m2;
  var classMeta = kotlin_kotlin.$_$.a3;
  var Annotation = kotlin_kotlin.$_$.h4;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.i1;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.f2;
  var CoroutineImpl = kotlin_kotlin.$_$.t2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d2;
  var intercepted = kotlin_kotlin.$_$.g2;
  var interfaceMeta = kotlin_kotlin.$_$.h3;
  var isInterface = kotlin_kotlin.$_$.j3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.d5;
  var toString_0 = kotlin_kotlin.$_$.s3;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.p3;
  var hashCode = kotlin_kotlin.$_$.g3;
  var equals = kotlin_kotlin.$_$.c3;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.n;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.e1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g1;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.i2;
  var Key_getInstance = kotlin_kotlin.$_$.h1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.h2;
  var get_0 = kotlin_kotlin.$_$.j2;
  var minusKey_0 = kotlin_kotlin.$_$.k2;
  var ContinuationInterceptor = kotlin_kotlin.$_$.l2;
  var Key = kotlin_kotlin.$_$.r2;
  var Element = kotlin_kotlin.$_$.q2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z;
  var getStringHashCode = kotlin_kotlin.$_$.f3;
  var THROW_ISE = kotlin_kotlin.$_$.s4;
  var Enum = kotlin_kotlin.$_$.k4;
  var startCoroutine = kotlin_kotlin.$_$.w2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y4;
  var startCoroutine_0 = kotlin_kotlin.$_$.x2;
  var Long = kotlin_kotlin.$_$.n4;
  var Companion_getInstance = kotlin_kotlin.$_$.k1;
  var RuntimeException = kotlin_kotlin.$_$.q4;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.z2;
  var Error_0 = kotlin_kotlin.$_$.l4;
  var Error_init_$Init$ = kotlin_kotlin.$_$.s;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.c5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var CancellationException = kotlin_kotlin.$_$.c2;
  var ArrayList = kotlin_kotlin.$_$.n1;
  var SequenceScope = kotlin_kotlin.$_$.w3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var sequence = kotlin_kotlin.$_$.y3;
  var anyToString = kotlin_kotlin.$_$.y2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.d1;
  var createFailure = kotlin_kotlin.$_$.w4;
  var SuspendFunction1 = kotlin_kotlin.$_$.v2;
  var UnsupportedOperationException = kotlin_kotlin.$_$.u4;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.m;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var isSuspendFunction = kotlin_kotlin.$_$.l3;
  var addSuppressed = kotlin_kotlin.$_$.v4;
  var fillArrayVal = kotlin_kotlin.$_$.d3;
  var fill = kotlin_kotlin.$_$.t1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t;
  var fill$default = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.x4;
  var NoSuchElementException = kotlin_kotlin.$_$.o4;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.x;
  var IllegalStateException = kotlin_kotlin.$_$.m4;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.u;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.j1;
  var arrayCopy = kotlin_kotlin.$_$.o1;
  var toLong = kotlin_kotlin.$_$.r3;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var toLongOrNull = kotlin_kotlin.$_$.e4;
  var compareTo = kotlin_kotlin.$_$.b3;
  var copyOf = kotlin_kotlin.$_$.q1;
  var isArray = kotlin_kotlin.$_$.i3;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.e2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.f1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.o;
  var coerceIn = kotlin_kotlin.$_$.t3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function cancel() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_npwpyn_k$(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  function plus_0(other) {
    return other;
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  $awaitCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$0.prototype.constructor = $awaitCOROUTINE$0;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.tryResume_10oxem_k$(value, idempotent) : $handler(value, idempotent);
  }
  function cancel$default_1(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  RemoveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  CoroutineName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineName.prototype.constructor = CoroutineName;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  function delay(time, $cont) {
    if (time.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.Delay.delay.<anonymous>' call
    this.scheduleResumeAfterDelay_5x4w1l_k$(time, cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$0;
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  }
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobSupport$_get_children_$slambda_k839f8.prototype = Object.create(CoroutineImpl.prototype);
  JobSupport$_get_children_$slambda_k839f8.prototype.constructor = JobSupport$_get_children_$slambda_k839f8;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  SelectJoinOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectJoinOnCompletion.prototype.constructor = SelectJoinOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  SelectAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectAwaitOnCompletion.prototype.constructor = SelectAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  YieldContext.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  YieldContext.prototype.constructor = YieldContext;
  AbstractAtomicDesc.prototype = Object.create(AtomicDesc.prototype);
  AbstractAtomicDesc.prototype.constructor = AbstractAtomicDesc;
  RemoveFirstDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  RemoveFirstDesc.prototype.constructor = RemoveFirstDesc;
  TryPollDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  TryPollDesc.prototype.constructor = TryPollDesc;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  function next0($cont) {
    var tmp = new $next0COROUTINE$2(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveElement.prototype = Object.create(Receive.prototype);
  ReceiveElement.prototype.constructor = ReceiveElement;
  ReceiveElementWithUndeliveredHandler.prototype = Object.create(ReceiveElement.prototype);
  ReceiveElementWithUndeliveredHandler.prototype.constructor = ReceiveElementWithUndeliveredHandler;
  ReceiveHasNext.prototype = Object.create(Receive.prototype);
  ReceiveHasNext.prototype.constructor = ReceiveHasNext;
  ReceiveSelect.prototype = Object.create(Receive.prototype);
  ReceiveSelect.prototype.constructor = ReceiveSelect;
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.close_9zy44b_k$(cause) : $handler(cause);
  }
  function offer(element) {
    var result = this.trySend_3hclq4_k$(element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function cancel$default_2(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function cancel_0() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_3(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.cancel_as6ug7_k$(cause) : $handler(cause);
  }
  function poll() {
    var result = this.tryReceive_5r5v2p_k$();
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return ChannelResult__getOrThrow_impl_od1axs(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($cont) {
    var tmp = new $receiveOrNullCOROUTINE$1(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function get_onReceiveOrNull() {
    return new ReceiveChannel$onReceiveOrNull$1(this);
  }
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  AddLastDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  AddLastDesc.prototype.constructor = AddLastDesc;
  SendBufferedDesc.prototype = Object.create(AddLastDesc.prototype);
  SendBufferedDesc.prototype.constructor = SendBufferedDesc;
  TryOfferDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  TryOfferDesc.prototype.constructor = TryOfferDesc;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendSelect.prototype = Object.create(Send.prototype);
  SendSelect.prototype.constructor = SendSelect;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  SendElement.prototype = Object.create(Send.prototype);
  SendElement.prototype.constructor = SendElement;
  SendElementWithUndeliveredHandler.prototype = Object.create(SendElement.prototype);
  SendElementWithUndeliveredHandler.prototype.constructor = SendElementWithUndeliveredHandler;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype = Object.create(CoroutineImpl.prototype);
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype.constructor = ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt;
  $receiveOrNullCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $receiveOrNullCOROUTINE$1.prototype.constructor = $receiveOrNullCOROUTINE$1;
  $next0COROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $next0COROUTINE$2.prototype.constructor = $next0COROUTINE$2;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  LimitedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  LimitedDispatcher.prototype.constructor = LimitedDispatcher;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  function invoke(_this__u8e3s4, block) {
    return this.invoke_oyp7tx_k$(_this__u8e3s4, null, block);
  }
  SelectOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  SelectOnCancelling.prototype.constructor = SelectOnCancelling;
  PairSelectOp.prototype = Object.create(OpDescriptor.prototype);
  PairSelectOp.prototype.constructor = PairSelectOp;
  AtomicSelectOp.prototype = Object.create(AtomicOp.prototype);
  AtomicSelectOp.prototype.constructor = AtomicSelectOp;
  DisposeNode.prototype = Object.create(LinkedListNode.prototype);
  DisposeNode.prototype.constructor = DisposeNode;
  SelectBuilderImpl.prototype = Object.create(LinkedListHead.prototype);
  SelectBuilderImpl.prototype.constructor = SelectBuilderImpl;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  PrepareOp.prototype = Object.create(OpDescriptor.prototype);
  PrepareOp.prototype.constructor = PrepareOp;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.initParentJob_4c2lht_k$(parentContext.get_1pi7hg_k$(Key_getInstance_3()));
    }
    this.context_1 = parentContext.plus_rgw9wi_k$(this);
  }
  AbstractCoroutine.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  AbstractCoroutine.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.context_1;
  };
  AbstractCoroutine.prototype.get_isActive_quafmh_k$ = function () {
    return JobSupport.prototype.get_isActive_quafmh_k$.call(this);
  };
  AbstractCoroutine.prototype.onCompleted_wmtzyo_k$ = function (value) {
  };
  AbstractCoroutine.prototype.onCancelled_oqqex5_k$ = function (cause, handled) {
  };
  AbstractCoroutine.prototype.cancellationExceptionMessage_a64063_k$ = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.onCompletionInternal_39c1g8_k$ = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.onCancelled_oqqex5_k$(state.cause_1, state.get_handled_cq14k3_k$());
    } else {
      this.onCompleted_wmtzyo_k$((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var state = this.makeCompletingOnce_b13xy2_k$(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.afterResume_ufx9w9_k$(state);
  };
  AbstractCoroutine.prototype.afterResume_ufx9w9_k$ = function (state) {
    return this.afterCompletion_2ogq6g_k$(state);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_o179kb_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  AbstractCoroutine.prototype.nameString_cd9e9w_k$ = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.nameString_cd9e9w_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.nameString_cd9e9w_k$.call(this);
  };
  AbstractCoroutine.prototype.start_1ln6k9_k$ = function (start, receiver, block) {
    start.invoke_wxhu2x_k$(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function InternalCoroutinesApi() {
  }
  InternalCoroutinesApi.prototype.equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  InternalCoroutinesApi.prototype.hashCode = function () {
    return 0;
  };
  InternalCoroutinesApi.prototype.toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  InternalCoroutinesApi.$metadata$ = classMeta('InternalCoroutinesApi', [Annotation]);
  function FlowPreview() {
  }
  FlowPreview.prototype.equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    var tmp0_other_with_cast = other instanceof FlowPreview ? other : THROW_CCE();
    return true;
  };
  FlowPreview.prototype.hashCode = function () {
    return 0;
  };
  FlowPreview.prototype.toString = function () {
    return '@kotlinx.coroutines.FlowPreview()';
  };
  FlowPreview.$metadata$ = classMeta('FlowPreview', [Annotation]);
  function ExperimentalCoroutinesApi() {
  }
  ExperimentalCoroutinesApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalCoroutinesApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalCoroutinesApi.prototype.toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  ExperimentalCoroutinesApi.$metadata$ = classMeta('ExperimentalCoroutinesApi', [Annotation]);
  function DelicateCoroutinesApi() {
  }
  DelicateCoroutinesApi.prototype.equals = function (other) {
    if (!(other instanceof DelicateCoroutinesApi))
      return false;
    var tmp0_other_with_cast = other instanceof DelicateCoroutinesApi ? other : THROW_CCE();
    return true;
  };
  DelicateCoroutinesApi.prototype.hashCode = function () {
    return 0;
  };
  DelicateCoroutinesApi.prototype.toString = function () {
    return '@kotlinx.coroutines.DelicateCoroutinesApi()';
  };
  DelicateCoroutinesApi.$metadata$ = classMeta('DelicateCoroutinesApi', [Annotation]);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_1ln6k9_k$(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.handleJobException_oc4gxk_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_1ln6k9_k$(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$0.$metadata$ = classMeta('$awaitCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  DeferredCoroutine.prototype.await_xhs9og_k$ = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DeferredCoroutine.prototype.get_onAwait_l48qpe_k$ = function () {
    return this;
  };
  DeferredCoroutine.prototype.registerSelectClause1_8z4167_k$ = function (select, block) {
    return this.registerSelectClause1Internal_amjpx5_k$(select, block);
  };
  DeferredCoroutine.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    return this.registerSelectClause1_8z4167_k$(select, block);
  };
  DeferredCoroutine.$metadata$ = classMeta('DeferredCoroutine', [Deferred, SelectClause1], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function _get_continuation__y3gzck_0($this) {
    return $this.continuation_1;
  }
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  LazyDeferredCoroutine.$metadata$ = classMeta('LazyDeferredCoroutine', undefined, undefined, undefined, undefined, DeferredCoroutine.prototype);
  function suspendCancellableCoroutine(block, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    block(cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$0;
  }
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function _get_handle__ls055p($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  DisposeOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  DisposeOnCancel.$metadata$ = classMeta('DisposeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function suspendCancellableCoroutineReusable(block, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    block(cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$0;
  }
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveOnCancel(node);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_oatv30_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.resetStateReusable_a3kq5v_k$();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function _get_node__db0vwp($this) {
    return $this.node_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.node_1 = node;
  }
  RemoveOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.node_1.remove_fgfybg_k$();
  };
  RemoveOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.node_1 + ']';
  };
  RemoveOnCancel.$metadata$ = classMeta('RemoveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decision__uou2k6($this) {
    return $this._decision_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _set_parentHandle__bde57($this, _set____db54di) {
    $this.parentHandle_1 = _set____db54di;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.parentHandle_1;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.get_state_iypx7s_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.resumeMode_1)) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_723ard_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        throw $p;
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    $this.parentHandle_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_5s4a1c_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_qdtbew_k$();
    $this.cancel_as6ug7_k$(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.makeResumed_vjvawn_k$()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.callOnCancellation_adp92k_k$(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.cause_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.resumeMode_1, onCancellation, idempotent);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.idempotentResume_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.detachChild_qdtbew_k$();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.context_1 = this.delegate_1.get_context_h02k06_k$();
    this._decision_1 = atomic$int$1(0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this.parentHandle_1 = null;
  }
  CancellableContinuationImpl.prototype.get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  CancellableContinuationImpl.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  CancellableContinuationImpl.prototype.get_state_iypx7s_k$ = function () {
    return this._state_1.value_1;
  };
  CancellableContinuationImpl.prototype.get_isActive_quafmh_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  CancellableContinuationImpl.prototype.get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.get_isCancelled_trk8pu_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.initCancellability_sh6jkn_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.parentHandle_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.resetStateReusable_a3kq5v_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this._state_1.value_1;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.detachChild_qdtbew_k$();
      return false;
    }
    this._decision_1.value_1 = 0;
    this._state_1.value_1 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  CancellableContinuationImpl.prototype.getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  CancellableContinuationImpl.prototype.takeState_olvzuy_k$ = function () {
    return this.get_state_iypx7s_k$();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.get_cancelled_ge9r54_k$();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.copy$default_x1yew9_k$(null, null, null, null, cause, 15, null);
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.invokeHandlers_2wd6qe_k$(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.cancel_as6ug7_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.resumeMode_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_uc06zq_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_as6ug7_k$(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler_qcjvzx_k$ = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation_adp92k_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  CancellableContinuationImpl.prototype.getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.parentHandle_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.cause_1, this);
    if (get_isCancellableMode(this.resumeMode_1)) {
      var job = this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance_3());
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_gdkv2w_k$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.resumeMode_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resume_l1w5in_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this.resumeMode_1, onCancellation);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_yygv6h_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.makeHandled_ws9oq6_k$()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cause_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.cancelHandler_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.get_cancelled_ge9r54_k$()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.cancelCause_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.copy$default_x1yew9_k$(null, cancelHandler, null, null, null, 29, null);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.detachChild_qdtbew_k$ = function () {
    var tmp0_elvis_lhs = this.parentHandle_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3n44we_k$();
    this.parentHandle_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.tryResume_10oxem_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.tryResumeWithException_3icka9_k$ = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.completeResume_fu4ex_k$ = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.resumeMode_1);
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_re4yxz_k$ = function (_this__u8e3s4, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dispatcher_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.resumeMode_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.resumeUndispatchedWithException_xuy3rd_k$ = function (_this__u8e3s4, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
    var tmp_1;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dispatcher_1) === _this__u8e3s4) {
      tmp_1 = get_MODE_UNDISPATCHED();
    } else {
      tmp_1 = this.resumeMode_1;
    }
    var tmp_2 = tmp_1;
    resumeImpl$default(this, tmp_0, tmp_2, null, 8, null);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_gdkv2w_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_bnge6_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  CompletedContinuation.prototype.get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  CompletedContinuation.prototype.get_cancelHandler_w4ijbb_k$ = function () {
    return this.cancelHandler_1;
  };
  CompletedContinuation.prototype.get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedContinuation.prototype.get_idempotentResume_61d27l_k$ = function () {
    return this.idempotentResume_1;
  };
  CompletedContinuation.prototype.get_cancelCause_cj8bx6_k$ = function () {
    return this.cancelCause_1;
  };
  CompletedContinuation.prototype.get_cancelled_ge9r54_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  CompletedContinuation.prototype.invokeHandlers_2wd6qe_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callOnCancellation_adp92k_k$(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  CompletedContinuation.prototype.component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  CompletedContinuation.prototype.component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedContinuation.prototype.component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  CompletedContinuation.prototype.component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  CompletedContinuation.prototype.copy_q5vocy_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.copy$default_x1yew9_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.result_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.cancelHandler_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.onCancellation_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.idempotentResume_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.cancelCause_1;
    return this.copy_q5vocy_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  InvokeOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.handler_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = interfaceMeta('CompletableJob', [Job]);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function _get__handled__q1dawe($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  CompletedExceptionally.prototype.get_handled_cq14k3_k$ = function () {
    return this._handled_1.value_1;
  };
  CompletedExceptionally.prototype.makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.cause_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function _get__resumed__kg85kj($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  CompletedWithCancellation.prototype.get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedWithCancellation.prototype.component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  CompletedWithCancellation.prototype.component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  CompletedWithCancellation.prototype.copy_eadg01_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  CompletedWithCancellation.prototype.copy$default_lzs7jj_k$ = function (result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.result_1;
    if (!(($mask0 & 2) === 0))
      onCancellation = this.onCancellation_1;
    return this.copy_eadg01_k$(result, onCancellation);
  };
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  CoroutineDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.dispatch_o98ux7_k$(context, block);
  };
  CoroutineDispatcher.prototype.interceptContinuation_pbrjat_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_4i98ok_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wtm6d2_k$();
  };
  CoroutineDispatcher.prototype.plus_jld99k_k$ = function (other) {
    return other;
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_1pi7hg_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.handleException_w1h9is_k$(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
    Key_getInstance_1();
  }
  CoroutineExceptionHandler.$metadata$ = interfaceMeta('CoroutineExceptionHandler', [Element]);
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.$handler_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  _no_name_provided__qut3iv.prototype.handleException_w1h9is_k$ = function (context, exception) {
    return this.$handler_1(context, exception);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.name_1 = name;
  }
  CoroutineName.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.name_1 + ')';
  };
  CoroutineName.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  CoroutineName.prototype.copy_3t26ic_k$ = function (name) {
    return new CoroutineName(name);
  };
  CoroutineName.prototype.copy$default_q3pzg4_k$ = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    return this.copy_3t26ic_k$(name);
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  CoroutineName.$metadata$ = classMeta('CoroutineName', undefined, undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function cancel_1(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cancel_4b7aim_k$(cause);
  }
  function cancel$default_4(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel_1(_this__u8e3s4, cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isActive_quafmh_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.get_1pi7hg_k$(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.plus_rgw9wi_k$(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.get_coroutineContext_115oqo_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = objectMeta('GlobalScope', [CoroutineScope]);
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.invoke_1otqlm_k$ = function (block, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable_0(block, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.invoke_wxhu2x_k$ = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.get_isLazy_ew1d53_k$ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Deferred() {
  }
  Deferred.$metadata$ = interfaceMeta('Deferred', [Job]);
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_1pi7hg_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function get_DISPOSED_TASK() {
    init_properties_EventLoop_common_kt_xtc85b();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function get_CLOSED_EMPTY() {
    init_properties_EventLoop_common_kt_xtc85b();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__kwzmz3($this, _set____db54di) {
    $this.useCount_1 = _set____db54di;
  }
  function _get_useCount__843bib($this) {
    return $this.useCount_1;
  }
  function _set_shared__q6vn2($this, _set____db54di) {
    $this.shared_1 = _set____db54di;
  }
  function _get_shared__qjozq($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__ri92ob($this, _set____db54di) {
    $this.unconfinedQueue_1 = _set____db54di;
  }
  function _get_unconfinedQueue__heiv5r($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  EventLoop.prototype.processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$()) {
      Companion_getInstance();
      return new Long(-1, 2147483647);
    }
    return new Long(0, 0);
  };
  EventLoop.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.get_isUnconfinedQueueEmpty_mi405s_k$();
  };
  EventLoop.prototype.get_nextTime_88vw7r_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance();
      return new Long(-1, 2147483647);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp_0;
    if (queue.get_isEmpty_zauvru_k$()) {
      Companion_getInstance();
      tmp_0 = new Long(-1, 2147483647);
    } else {
      tmp_0 = new Long(0, 0);
    }
    return tmp_0;
  };
  EventLoop.prototype.processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mw4iiu_k$();
    return true;
  };
  EventLoop.prototype.shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  EventLoop.prototype.dispatchUnconfined_do6j6f_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.unconfinedQueue_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_xhfl3v_k$(task);
  };
  EventLoop.prototype.get_isActive_quafmh_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
  };
  EventLoop.prototype.get_isUnconfinedLoopActive_g78ri6_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(delta(this, true)) >= 0;
  };
  EventLoop.prototype.get_isUnconfinedQueueEmpty_mi405s_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEmpty_zauvru_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_ocukpa_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.plus_u6jwas_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  EventLoop.prototype.incrementUseCount$default_ig8muj_k$ = function (unconfined, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unconfined = false;
    return this.incrementUseCount_ocukpa_k$(unconfined);
  };
  EventLoop.prototype.decrementUseCount_saho26_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.useCount_1 = tmp0_this.useCount_1.minus_llf5ei_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.shared_1) {
      this.shutdown_cq5p8b_k$();
    }
  };
  EventLoop.prototype.decrementUseCount$default_h3ug27_k$ = function (unconfined, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unconfined = false;
    return this.decrementUseCount_saho26_k$(unconfined);
  };
  EventLoop.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  EventLoop.prototype.shutdown_cq5p8b_k$ = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function _get_ref__e6fxpa($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.get_eventLoop_913645_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ref_1.set_hda1d2_k$(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.prototype.currentOrNull_z5p8mb_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  ThreadLocalEventLoop.prototype.resetEventLoop_a6lzlu_k$ = function () {
    this.ref_1.set_hda1d2_k$(null);
  };
  ThreadLocalEventLoop.prototype.setEventLoop_d3g3n0_k$ = function (eventLoop) {
    this.ref_1.set_hda1d2_k$(eventLoop);
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_cfxg9p;
  function init_properties_EventLoop_common_kt_xtc85b() {
    if (properties_initialized_EventLoop_common_kt_cfxg9p) {
    } else {
      properties_initialized_EventLoop_common_kt_cfxg9p = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
    Key_getInstance_3();
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.get_parent_hy4reb_k$ = function () {
    return null;
  };
  NonDisposableHandle.prototype.dispose_3n44we_k$ = function () {
  };
  NonDisposableHandle.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_1pi7hg_k$(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.get_isActive_quafmh_k$())
      throw _this__u8e3s4.getCancellationException_8i1q6u_k$();
  }
  function cancelAndJoin(_this__u8e3s4, $cont) {
    _this__u8e3s4.cancel$default_bm1z3z_k$(null, 1, null);
    return _this__u8e3s4.join_kbq7u1_k$($cont);
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_1 = isActive;
  }
  Empty.prototype.get_isActive_quafmh_k$ = function () {
    return this.isActive_1;
  };
  Empty.prototype.get_list_wopuqv_k$ = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.get_isActive_quafmh_k$ = function () {
    return true;
  };
  NodeList.prototype.get_list_wopuqv_k$ = function () {
    return this;
  };
  NodeList.prototype.getString_xqex6i_k$ = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('List{');
    tmp0_apply.append_ssq29y_k$(state);
    tmp0_apply.append_ssq29y_k$('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this._next_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.append_ssq29y_k$(', ');
        }
        tmp0_apply.append_t8pm91_k$(tmp0__anonymous__q1qw7t);
      }
      cur = cur._next_1;
    }
    tmp0_apply.append_ssq29y_k$(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.getString_xqex6i_k$('Active') : LinkedListHead.prototype.toString.call(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.set_job_d610gu_k$ = function (_set____db54di) {
    this.job_1 = _set____db54di;
  };
  JobNode.prototype.get_job_18j2r0_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.get_isActive_quafmh_k$ = function () {
    return true;
  };
  JobNode.prototype.get_list_wopuqv_k$ = function () {
    return null;
  };
  JobNode.prototype.dispose_3n44we_k$ = function () {
    return this.get_job_18j2r0_k$().removeNode_o3o6t1_k$(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.get_job_18j2r0_k$()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _get__isCompleting__kxhw32($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__pzi6w3($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__e2tfjy($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this._exceptionsHolder_1.value_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this._exceptionsHolder_1.value_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__cai7fg($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function _get__state__37adl3_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this.get_state_iypx7s_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.get_isCancelling_o1apv_k$();
    var exceptions = state.sealLocked_11gdw4_k$(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_oc4gxk_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
      }
    }
    if (!wasCancelling) {
      $this.onCancelling_bxyn9n_k$(finalException);
    }
    $this.onCompletionInternal_39c1g8_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state.get_isCancelling_o1apv_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_fkrdnv_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.get_size_woubt6_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.get_size_woubt6_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_1j60pz_k$(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_bxyn9n_k$(null);
    $this.onCompletionInternal_39c1g8_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.get_parentHandle_gmoqez_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.dispose_3n44we_k$();
      $this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cause_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_o179kb_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.get_list_wopuqv_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_bxyn9n_k$(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list._next_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur._next_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.get_isScopedCoroutine_rwmmff_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.get_parentHandle_gmoqez_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_fdoq8t_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4._next_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur._next_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.onStart_qth026_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qth026_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.get_state_iypx7s_k$() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.addLast_uyctnf_k$(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_cbgboi_k$(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state._next_1;
    var list = tmp$ret$0;
    $this._state_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    tmp$ret$2 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.get_isCompleting_vi2bwp_k$();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.get_state_iypx7s_k$();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.get_isSealed_zdv4z3_k$())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.get_isCancelling_o1apv_k$();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.addExceptionLocked_jeuhbd_k$(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.get_rootCause_69dwxu_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.list_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.get_isActive_quafmh_k$()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.get_list_wopuqv_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.get_isCompleting_vi2bwp_k$())
      return get_COMPLETING_ALREADY();
    finishing.set_isCompleting_i5ljas_k$(true);
    if (!(finishing === state)) {
      if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.get_isCancelling_o1apv_k$();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.addExceptionLocked_jeuhbd_k$(tmp0_safe_receiver.cause_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.get_rootCause_69dwxu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.get_list_wopuqv_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.childJob_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.invokeOnCompletion$default_7q548c_k$(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2ogq6g_k$(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr._removed_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed._prev_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a._next_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s._removed_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.get_isCancelling_o1apv_k$() ? 'Cancelling' : state.get_isCompleting_vi2bwp_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.get_isActive_quafmh_k$() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  Finishing.prototype.get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  Finishing.prototype.set_isCompleting_i5ljas_k$ = function (value) {
    this._isCompleting_1.value_1 = value;
  };
  Finishing.prototype.get_isCompleting_vi2bwp_k$ = function () {
    return this._isCompleting_1.value_1;
  };
  Finishing.prototype.set_rootCause_s52kuy_k$ = function (value) {
    this._rootCause_1.value_1 = value;
  };
  Finishing.prototype.get_rootCause_69dwxu_k$ = function () {
    return this._rootCause_1.value_1;
  };
  Finishing.prototype.get_isSealed_zdv4z3_k$ = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.get_isCancelling_o1apv_k$ = function () {
    return !(this.get_rootCause_69dwxu_k$() == null);
  };
  Finishing.prototype.get_isActive_quafmh_k$ = function () {
    return this.get_rootCause_69dwxu_k$() == null;
  };
  Finishing.prototype.sealLocked_11gdw4_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.add_1j60pz_k$(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.get_rootCause_69dwxu_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.add_ydlf05_k$(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_1j60pz_k$(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.addExceptionLocked_jeuhbd_k$ = function (exception) {
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null) {
      this.set_rootCause_s52kuy_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.add_1j60pz_k$(eh);
        tmp0_apply.add_1j60pz_k$(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_1j60pz_k$(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.get_isCancelling_o1apv_k$() + ', completing=' + this.get_isCompleting_vi2bwp_k$() + ', rootCause=' + this.get_rootCause_69dwxu_k$() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.list_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function _get_isCancelling__hlz7m9(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Finishing) {
      tmp = _this__u8e3s4.get_isCancelling_o1apv_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.job_1 = job;
  }
  AwaitContinuation.prototype.getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    var state = this.job_1.get_state_iypx7s_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.cause_1;
    return parent.getCancellationException_8i1q6u_k$();
  };
  AwaitContinuation.prototype.nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = classMeta('AwaitContinuation', undefined, undefined, undefined, undefined, CancellableContinuationImpl.prototype);
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.initCancellability_sh6jkn_k$();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    tmp$ret$2 = cont.getResult_clfhg3_k$();
    return tmp$ret$2;
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JobSupport$_get_children_$slambda_k839f8.prototype.invoke_6hwafz_k$ = function ($this$sequence, $cont) {
    var tmp = this.create_d86qwy_k$($this$sequence, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6hwafz_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 8;
            this.state0__1 = this.this$0__1.get_state_iypx7s_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.state_1 = 6;
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.state0__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.state0__1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.tmp0_safe_receiver1__1 = this.state0__1.get_list_wopuqv_k$();
                if (this.tmp0_safe_receiver1__1 == null) {
                  this.WHEN_RESULT2__1 = null;
                  this.state_1 = 5;
                  continue $sm;
                } else {
                  this.cur3__1 = this.tmp0_safe_receiver1__1._next_1;
                  this.state_1 = 1;
                  continue $sm;
                }
              } else {
                this.state_1 = 7;
                continue $sm;
              }
            }

            break;
          case 1:
            if (!!equals(this.cur3__1, this.tmp0_safe_receiver1__1)) {
              this.state_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.cur3__1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.tmp0__anonymous_4_q5x4yb_1 = this.cur3__1;
              this.state_1 = 2;
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.tmp0__anonymous_4_q5x4yb_1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.state_1 = 3;
            continue $sm;
          case 3:
            this.cur3__1 = this.cur3__1._next_1;
            this.state_1 = 1;
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this.state_1 = 5;
            continue $sm;
          case 5:
            ;
            this.state_1 = 7;
            continue $sm;
          case 6:
            this.state_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 8) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.create_d86qwy_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  JobSupport$_get_children_$slambda_k839f8.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_d86qwy_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  JobSupport$_get_children_$slambda_k839f8.$metadata$ = classMeta('JobSupport$<get-children>$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $cont) {
      return i.invoke_6hwafz_k$($this$sequence, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.get_key_18j28a_k$ = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.set_parentHandle_voxu0m_k$ = function (value) {
    this._parentHandle_1.value_1 = value;
  };
  JobSupport.prototype.get_parentHandle_gmoqez_k$ = function () {
    return this._parentHandle_1.value_1;
  };
  JobSupport.prototype.initParentJob_4c2lht_k$ = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    var handle = parent.attachChild_ik9c8b_k$(this);
    this.set_parentHandle_voxu0m_k$(handle);
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.get_state_iypx7s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
    }
  };
  JobSupport.prototype.get_isActive_quafmh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.get_isActive_quafmh_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.get_isCancelled_trk8pu_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.get_isCancelling_o1apv_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobSupport.prototype.start_1tchgi_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.onStart_qth026_k$ = function () {
  };
  JobSupport.prototype.getCancellationException_8i1q6u_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_8ve25p_k$(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_c99ojs_k$(state.cause_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_8ve25p_k$ = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_c99ojs_k$ = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_8ve25p_k$(_this__u8e3s4, message);
  };
  JobSupport.prototype.get_completionCause_bxx3i4_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state.get_rootCause_69dwxu_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state.cause_1;
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.get_completionCauseHandled_bdr920_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.<get-completionCauseHandled>.<anonymous>' call
    var tmp;
    if (tmp0_let instanceof CompletedExceptionally) {
      tmp = tmp0_let.get_handled_cq14k3_k$();
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  JobSupport.prototype.invokeOnCompletion_t2apld_k$ = function (handler) {
    return this.invokeOnCompletion_npwpyn_k$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.isActive_1) {
            if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.get_list_wopuqv_k$();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.get_rootCause_69dwxu_k$();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.get_isCompleting_vi2bwp_k$();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cause_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.join_kbq7u1_k$ = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.get_context_h02k06_k$();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.get_onJoin_hnj4j6_k$ = function () {
    return this;
  };
  JobSupport.prototype.registerSelectClause0_h2wst5_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause0.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          startCoroutineUnintercepted(block, select.get_completion_t4gxwb_k$());
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0__anonymous__q1qw7t) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new SelectJoinOnCompletion(select, block);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  JobSupport.prototype.removeNode_o3o6t1_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this._state_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.get_list_wopuqv_k$() == null)) {
            node.remove_fgfybg_k$();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.get_onCancelComplete_4lfsth_k$ = function () {
    return false;
  };
  JobSupport.prototype.cancel_4b7aim_k$ = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  JobSupport.prototype.cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.cancel_as6ug7_k$ = function (cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = this.toCancellationException$default_c99ojs_k$(tmp0_safe_receiver, null, 1, null);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, null, this);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp_0);
    return true;
  };
  JobSupport.prototype.cancelInternal_wqrppy_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
  };
  JobSupport.prototype.parentCancelled_53w4ri_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
  };
  JobSupport.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.cancelImpl_5ls1mt_k$(cause) ? this.get_handlesException_f6my9f_k$() : false;
  };
  JobSupport.prototype.cancelCoroutine_dy4tw5_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  JobSupport.prototype.cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.get_onCancelComplete_4lfsth_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.afterCompletion_2ogq6g_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.defaultCancellationException_lkdizi_k$ = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.cancellationExceptionMessage_a64063_k$() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.get_rootCause_69dwxu_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.cause_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.afterCompletion_2ogq6g_k$(finalState);
          return true;
        }
      }
    }
  };
  JobSupport.prototype.makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.get_children_4cwbp4_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  JobSupport.prototype.attachChild_ik9c8b_k$ = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_o179kb_k$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_bxyn9n_k$ = function (cause) {
  };
  JobSupport.prototype.get_isScopedCoroutine_rwmmff_k$ = function () {
    return false;
  };
  JobSupport.prototype.get_handlesException_f6my9f_k$ = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_oc4gxk_k$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_39c1g8_k$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_2ogq6g_k$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this.get_state_iypx7s_k$()) + '}';
  };
  JobSupport.prototype.nameString_cd9e9w_k$ = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.get_isCompletedExceptionally_i25lfz_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CompletedExceptionally;
  };
  JobSupport.prototype.getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  JobSupport.prototype.getCompletedInternal_26f4i6_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      tmp$ret$0 = 'This job has not completed yet';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.cause_1;
    return unboxState(state);
  };
  JobSupport.prototype.awaitInternal_pz51jj_k$ = function ($cont) {
    $l$loop: while (true) {
      var state = this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.cause_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.prototype.registerSelectClause1Internal_amjpx5_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause1Internal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          if (tmp0__anonymous__q1qw7t instanceof CompletedExceptionally) {
            select.resumeSelectWithException_xs2ljz_k$(tmp0__anonymous__q1qw7t.cause_1);
          } else {
            var tmp = unboxState(tmp0__anonymous__q1qw7t);
            startCoroutineUnintercepted_0(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
          }
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0__anonymous__q1qw7t) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new SelectAwaitOnCompletion(select, block);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  JobSupport.prototype.selectAwaitCompletion_tgh7vz_k$ = function (select, block) {
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally) {
      select.resumeSelectWithException_xs2ljz_k$(state.cause_1);
    } else {
      var tmp = unboxState(state);
      var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp_1 = select.get_completion_t4gxwb_k$();
      startCoroutineCancellable$default(block, tmp_0, tmp_1, null, 4, null);
    }
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function get_RETRY() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  InactiveNodeList.prototype.get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  InactiveNodeList.prototype.get_isActive_quafmh_k$ = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.list_1.getString_xqex6i_k$('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  ChildHandleNode.prototype.get_childJob_4cx54m_k$ = function () {
    return this.childJob_1;
  };
  ChildHandleNode.prototype.get_parent_hy4reb_k$ = function () {
    return this.get_job_18j2r0_k$();
  };
  ChildHandleNode.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.childJob_1.parentCancelled_53w4ri_k$(this.get_job_18j2r0_k$());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildHandleNode.prototype.childCancelled_fdoq8t_k$ = function (cause) {
    return this.get_job_18j2r0_k$().childCancelled_fdoq8t_k$(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function _get_handler__z70553_0($this) {
    return $this.handler_1;
  }
  function _get__invoked__yhwoci($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function _get_handler__z70553_1($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    return this.handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function _get_continuation__y3gzck_1($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  ResumeOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.continuation_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ResumeOnCompletion.$metadata$ = classMeta('ResumeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function _get_select__irrld($this) {
    return $this.select_1;
  }
  function _get_block__jewopo($this) {
    return $this.block_1;
  }
  function SelectJoinOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  SelectJoinOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      startCoroutineCancellable_0(this.block_1, this.select_1.get_completion_t4gxwb_k$());
    }
  };
  SelectJoinOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectJoinOnCompletion.$metadata$ = classMeta('SelectJoinOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _get_continuation__y3gzck_2($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    var state = this.get_job_18j2r0_k$().get_state_iypx7s_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.continuation_1;
      var tmp1_resumeWithException = state.cause_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.continuation_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.resumeWith_s3a3yh_k$(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = classMeta('ResumeAwaitOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function _get_select__irrld_0($this) {
    return $this.select_1;
  }
  function _get_block__jewopo_0($this) {
    return $this.block_1;
  }
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  SelectAwaitOnCompletion.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.get_job_18j2r0_k$().selectAwaitCompletion_tgh7vz_k$(this.select_1, this.block_1);
    }
  };
  SelectAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectAwaitOnCompletion.$metadata$ = classMeta('SelectAwaitOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  IncompleteStateBox.prototype.get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  ChildContinuation.prototype.get_child_ipppmb_k$ = function () {
    return this.child_1;
  };
  ChildContinuation.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.child_1.parentCancelled_uc06zq_k$(this.child_1.getContinuationCancellationCause_62o4c9_k$(this.get_job_18j2r0_k$()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.get_parentHandle_gmoqez_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_job_18j2r0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.get_handlesException_f6my9f_k$())
        return true;
      var tmp_1 = parentJob.get_parentHandle_gmoqez_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_job_18j2r0_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_4c2lht_k$(parent);
    this.handlesException_1 = handlesException(this);
  }
  JobImpl.prototype.get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  JobImpl.prototype.get_handlesException_f6my9f_k$ = function () {
    return this.handlesException_1;
  };
  JobImpl.prototype.complete_9ww6vb_k$ = function () {
    return this.makeCompleting_2ycklh_k$(Unit_getInstance());
  };
  JobImpl.prototype.completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  JobImpl.$metadata$ = classMeta('JobImpl', [CompletableJob], undefined, undefined, undefined, JobSupport.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  MainCoroutineDispatcher.prototype.toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.get_immediate_r3y8eg_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, Object.create(TimeoutCancellationException.prototype));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    this.coroutine_1 = coroutine;
    captureStack(this, TimeoutCancellationException);
  }
  TimeoutCancellationException.prototype.get_coroutine_cnpmtt_k$ = function () {
    return this.coroutine_1;
  };
  TimeoutCancellationException.prototype.createCopy_mmw9ld_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var tmp0_also = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(tmp0_also, this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  Unconfined.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var yieldContext = context.get_1pi7hg_k$(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function YieldContext() {
    Key_getInstance_4();
    AbstractCoroutineContextElement.call(this, Key_getInstance_4());
    this.dispatcherWasUnconfined_1 = false;
  }
  YieldContext.prototype.set_dispatcherWasUnconfined_6oi8pp_k$ = function (_set____db54di) {
    this.dispatcherWasUnconfined_1 = _set____db54di;
  };
  YieldContext.prototype.get_dispatcherWasUnconfined_gkf39i_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  YieldContext.$metadata$ = classMeta('YieldContext', undefined, undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function yield_0($cont) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      var context = tmp0__anonymous__q1qw7t.get_context_h02k06_k$();
      ensureActive(context);
      var tmp = intercepted(tmp0__anonymous__q1qw7t);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
        cont.dispatchYield_r38es3_k$(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.dispatchYield_r38es3_k$(context.plus_rgw9wi_k$(yieldContext), Unit_getInstance());
        if (yieldContext.dispatcherWasUnconfined_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function _get_receive__lsa4cu($this) {
    return $this.receive_1;
  }
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.closeCause_1 == null))
        throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.channel_1, receive)) {
          removeReceiveOnCancel($this.channel_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.channel_1.pollInternal_ml771g_k$();
        $this.result_1 = result;
        if (result instanceof Closed) {
          if (result.closeCause_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance_0();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.get_receiveException_nqbiq3_k$();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance_0();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.channel_1.onUndeliveredElement_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.get_context_h02k06_k$());
          }
          cancellable.resume_l1w5in_k$(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$5;
  }
  function receiveSuspend($this, receiveMode, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.onUndeliveredElement_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.onUndeliveredElement_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.pollInternal_ml771g_k$();
        if (result instanceof Closed) {
          receive.resumeReceiveClosed_ep2qlw_k$(result);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.resumeValue_nsekne_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.resume_l1w5in_k$(tmp_0, receive.resumeOnCancellationFun_ya26h6_k$((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$1 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$1;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.enqueueReceiveInternal_rxtsl7_k$(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.onReceiveEnqueued_xu1a6p_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
  }
  TryPollDesc.prototype.failure_mowj19_k$ = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!(tmp0_subject instanceof Send)) {
        tmp = get_POLL_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  TryPollDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    var tmp = prepareOp.affected_1;
    var affected = tmp instanceof Send ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeSend_93c6it_k$(prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  TryPollDesc.prototype.onRemoved_gagg6z_k$ = function (affected) {
    (affected instanceof Send ? affected : THROW_CCE()).undeliveredElement_djsee8_k$();
  };
  TryPollDesc.$metadata$ = classMeta('TryPollDesc', undefined, undefined, undefined, undefined, RemoveFirstDesc.prototype);
  function registerSelectReceiveMode($this, select, receiveMode, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if ($this.get_isEmptyImpl_9w6w0q_k$()) {
        if (enqueueReceiveSelect($this, select, block, receiveMode))
          return Unit_getInstance();
      } else {
        var pollResult = $this.pollSelectInternal_puj25v_k$(select);
        if (pollResult === get_ALREADY_SELECTED())
          return Unit_getInstance();
        else if (pollResult === get_POLL_FAILED()) {
        } else if (pollResult === get_RETRY_ATOMIC()) {
        } else {
          tryStartBlockUnintercepted(block, $this, select, receiveMode, pollResult);
        }
      }
    }
  }
  function tryStartBlockUnintercepted(_this__u8e3s4, $this, select, receiveMode, value) {
    var tmp0_subject = value;
    if (tmp0_subject instanceof Closed) {
      var tmp1_subject = receiveMode;
      if (tmp1_subject === 0) {
        throw recoverStackTrace_0(value.get_receiveException_nqbiq3_k$());
      } else if (tmp1_subject === 1) {
        if (!select.trySelect_1ivjiv_k$())
          return Unit_getInstance();
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(Companion_getInstance_1().closed_o16byb_k$(value.closeCause_1)), select.get_completion_t4gxwb_k$());
      }
    } else {
      if (receiveMode === 1) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.toResult' call
        var tmp;
        if (value instanceof Closed) {
          tmp = Companion_getInstance_1().closed_o16byb_k$(value.closeCause_1);
        } else {
          var tmp_0 = Companion_getInstance_1();
          tmp = tmp_0.success_prl0f3_k$((value == null ? true : isObject(value)) ? value : THROW_CCE());
        }
        tmp$ret$0 = tmp;
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(tmp$ret$0), select.get_completion_t4gxwb_k$());
      } else {
        startCoroutineUnintercepted_0(_this__u8e3s4, value, select.get_completion_t4gxwb_k$());
      }
    }
  }
  function enqueueReceiveSelect($this, select, block, receiveMode) {
    var node = new ReceiveSelect($this, select, block, receiveMode);
    var result = enqueueReceive($this, node);
    if (result) {
      select.disposeOnSelect_lrl426_k$(node);
    }
    return result;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receive_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.receive_1.remove_fgfybg_k$()) {
      this.$this_1.onReceiveDequeued_4wpjax_k$();
    }
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = classMeta('RemoveReceiveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function Itr(channel) {
    this.channel_1 = channel;
    this.result_1 = get_POLL_FAILED();
  }
  Itr.prototype.get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  Itr.prototype.set_result_kw7ubu_k$ = function (_set____db54di) {
    this.result_1 = _set____db54di;
  };
  Itr.prototype.get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  Itr.prototype.hasNext_4tgia2_k$ = function ($cont) {
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    this.result_1 = this.channel_1.pollInternal_ml771g_k$();
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.next_20eer_k$ = function () {
    var result = this.result_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
    if (!(result === get_POLL_FAILED())) {
      this.result_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  Itr.$metadata$ = classMeta('Itr', [ChannelIterator]);
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.cont_1 = cont;
    this.receiveMode_1 = receiveMode;
  }
  ReceiveElement.prototype.get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  ReceiveElement.prototype.get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  ReceiveElement.prototype.resumeValue_nsekne_k$ = function (value) {
    var tmp0_subject = this.receiveMode_1;
    return tmp0_subject === 1 ? new ChannelResult(Companion_getInstance_1().success_prl0f3_k$(value)) : value;
  };
  ReceiveElement.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.resumeValue_nsekne_k$(value);
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.desc_1, this.resumeOnCancellationFun_ya26h6_k$(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveElement.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  ReceiveElement.prototype.resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (this.receiveMode_1 === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = this.cont_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      tmp$ret$0 = Companion_getInstance_1().closed_o16byb_k$(closed.closeCause_1);
      var tmp1_resume = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
      tmp0_resume.resumeWith_s3a3yh_k$(tmp$ret$1);
      tmp$ret$2 = Unit_getInstance();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = this.cont_1;
      var tmp3_resumeWithException = closed.get_receiveException_nqbiq3_k$();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp3_resumeWithException));
      tmp2_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.receiveMode_1 + ']';
  };
  ReceiveElement.$metadata$ = classMeta('ReceiveElement', undefined, undefined, undefined, undefined, Receive.prototype);
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  ReceiveElementWithUndeliveredHandler.prototype.get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  ReceiveElementWithUndeliveredHandler.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return bindCancellationFun(this.onUndeliveredElement_1, value, this.cont_1.get_context_h02k06_k$());
  };
  ReceiveElementWithUndeliveredHandler.$metadata$ = classMeta('ReceiveElementWithUndeliveredHandler', undefined, undefined, undefined, undefined, ReceiveElement.prototype);
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator_1 = iterator;
    this.cont_1 = cont;
  }
  ReceiveHasNext.prototype.get_iterator_c8vxs9_k$ = function () {
    return this.iterator_1;
  };
  ReceiveHasNext.prototype.get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  ReceiveHasNext.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.desc_1, this.resumeOnCancellationFun_ya26h6_k$(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
    this.iterator_1.result_1 = value;
    this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    var tmp;
    if (closed.closeCause_1 == null) {
      tmp = this.cont_1.tryResume$default_sti3on_k$(false, null, 2, null);
    } else {
      tmp = this.cont_1.tryResumeWithException_3icka9_k$(closed.get_receiveException_nqbiq3_k$());
    }
    var token = tmp;
    if (!(token == null)) {
      this.iterator_1.result_1 = closed;
      this.cont_1.completeResume_fu4ex_k$(token);
    }
  };
  ReceiveHasNext.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.iterator_1.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.cont_1.get_context_h02k06_k$());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  ReceiveHasNext.$metadata$ = classMeta('ReceiveHasNext', undefined, undefined, undefined, undefined, Receive.prototype);
  function ReceiveSelect(channel, select, block, receiveMode) {
    Receive.call(this);
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
    this.receiveMode_1 = receiveMode;
  }
  ReceiveSelect.prototype.get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  ReceiveSelect.prototype.get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  ReceiveSelect.prototype.get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  ReceiveSelect.prototype.get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  ReceiveSelect.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  ReceiveSelect.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
    startCoroutineCancellable(this.block_1, this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_prl0f3_k$(value)) : value, this.select_1.get_completion_t4gxwb_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
  };
  ReceiveSelect.prototype.resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (!this.select_1.trySelect_1ivjiv_k$())
      return Unit_getInstance();
    var tmp0_subject = this.receiveMode_1;
    if (tmp0_subject === 0) {
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed.get_receiveException_nqbiq3_k$());
    } else if (tmp0_subject === 1) {
      var tmp = new ChannelResult(Companion_getInstance_1().closed_o16byb_k$(closed.closeCause_1));
      var tmp_0 = this.select_1.get_completion_t4gxwb_k$();
      startCoroutineCancellable$default(this.block_1, tmp, tmp_0, null, 4, null);
    }
  };
  ReceiveSelect.prototype.dispose_3n44we_k$ = function () {
    if (this.remove_fgfybg_k$()) {
      this.channel_1.onReceiveDequeued_4wpjax_k$();
    }
  };
  ReceiveSelect.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
  };
  ReceiveSelect.prototype.toString = function () {
    return 'ReceiveSelect@' + get_hexAddress(this) + '[' + this.select_1 + ',receiveMode=' + this.receiveMode_1 + ']';
  };
  ReceiveSelect.$metadata$ = classMeta('ReceiveSelect', [DisposableHandle], undefined, undefined, undefined, Receive.prototype);
  function AbstractChannel$onReceive$1(this$0) {
    this.this$0__1 = this$0;
  }
  AbstractChannel$onReceive$1.prototype.registerSelectClause1_letqps_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 0, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  AbstractChannel$onReceive$1.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    return this.registerSelectClause1_letqps_k$(select, block);
  };
  AbstractChannel$onReceive$1.$metadata$ = classMeta(undefined, [SelectClause1]);
  function AbstractChannel$onReceiveCatching$1(this$0) {
    this.this$0__1 = this$0;
  }
  AbstractChannel$onReceiveCatching$1.prototype.registerSelectClause1_a8859q_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 1, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  AbstractChannel$onReceiveCatching$1.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    return this.registerSelectClause1_a8859q_k$(select, block);
  };
  AbstractChannel$onReceiveCatching$1.$metadata$ = classMeta(undefined, [SelectClause1]);
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.pollInternal_ml771g_k$ = function () {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.tryResumeSend_93c6it_k$(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.completeResumeSend_upvqar_k$();
        return send.get_pollResult_t5mkl7_k$();
      }
      send.undeliveredElement_djsee8_k$();
    }
  };
  AbstractChannel.prototype.pollSelectInternal_puj25v_k$ = function (select) {
    var pollOp = this.describeTryPoll_k2m4a9_k$();
    var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
    if (!(failure == null))
      return failure;
    var send = pollOp.get_result_iyg5d2_k$();
    send.completeResumeSend_upvqar_k$();
    return pollOp.get_result_iyg5d2_k$().get_pollResult_t5mkl7_k$();
  };
  AbstractChannel.prototype.get_hasReceiveOrClosed_wl54xr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    var tmp = tmp$ret$0;
    return isInterface(tmp, ReceiveOrClosed);
  };
  AbstractChannel.prototype.get_isClosedForReceive_v0r77d_k$ = function () {
    return !(this.get_closedForReceive_iep3v5_k$() == null) ? this.get_isBufferEmpty_t57jne_k$() : false;
  };
  AbstractChannel.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  AbstractChannel.prototype.get_isEmptyImpl_9w6w0q_k$ = function () {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    var tmp_0 = tmp$ret$0;
    if (!(tmp_0 instanceof Send)) {
      tmp = this.get_isBufferEmpty_t57jne_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  AbstractChannel.prototype.receive_ihhf9g_k$ = function ($cont) {
    var result = this.pollInternal_ml771g_k$();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    return receiveSuspend(this, 0, $cont);
  };
  AbstractChannel.prototype.enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp;
    if (this.get_isBufferAlwaysEmpty_ross6j_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.queue_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev._prev_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.addLast_uyctnf_k$(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.queue_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf._prev_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.get_isBufferEmpty_t57jne_k$();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.addLast_uyctnf_k$(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.receiveCatching_wrys2l_k$ = function ($cont) {
    var result = this.pollInternal_ml771g_k$();
    if (!(result === get_POLL_FAILED())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp;
      if (result instanceof Closed) {
        tmp = Companion_getInstance_1().closed_o16byb_k$(result.closeCause_1);
      } else {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.success_prl0f3_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
      }
      tmp$ret$0 = tmp;
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $cont);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    return new ChannelResult(tmp_1.holder_1);
  };
  AbstractChannel.prototype.tryReceive_5r5v2p_k$ = function () {
    var result = this.pollInternal_ml771g_k$();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().failure_qsocya_k$();
    if (result instanceof Closed)
      return Companion_getInstance_1().closed_o16byb_k$(result.closeCause_1);
    var tmp = Companion_getInstance_1();
    return tmp.success_prl0f3_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  AbstractChannel.prototype.cancel_as6ug7_k$ = function (cause) {
    return this.cancelInternal_vex9ac_k$(cause);
  };
  AbstractChannel.prototype.cancel_4b7aim_k$ = function (cause) {
    if (this.get_isClosedForReceive_v0r77d_k$())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.cancelInternal_vex9ac_k$(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.cancelInternal_vex9ac_k$ = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.close_9zy44b_k$(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.onCancelIdempotent_1zp8pj_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed._prev_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.onCancelIdempotentList_icdvp_k$(list, closed);
  };
  AbstractChannel.prototype.onCancelIdempotentList_icdvp_k$ = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.resumeSendClosed_r0hgr7_k$(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.get_fkrdnv_k$(i);
              tmp1__anonymous__uwfjfc.resumeSendClosed_r0hgr7_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.iterator_jk1svi_k$ = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.describeTryPoll_k2m4a9_k$ = function () {
    return new TryPollDesc(this.queue_1);
  };
  AbstractChannel.prototype.get_onReceive_mimw11_k$ = function () {
    return new AbstractChannel$onReceive$1(this);
  };
  AbstractChannel.prototype.get_onReceiveCatching_ajg9xa_k$ = function () {
    return new AbstractChannel$onReceiveCatching$1(this);
  };
  AbstractChannel.prototype.takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed_ri9e84_k$.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.onReceiveDequeued_4wpjax_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.onReceiveEnqueued_xu1a6p_k$ = function () {
  };
  AbstractChannel.prototype.onReceiveDequeued_4wpjax_k$ = function () {
  };
  AbstractChannel.$metadata$ = classMeta('AbstractChannel', [Channel], undefined, undefined, undefined, AbstractSendChannel.prototype);
  function _get_onCloseHandler__k3p6yi($this) {
    return $this.onCloseHandler_1;
  }
  function SendBufferedDesc(queue, element) {
    AddLastDesc.call(this, queue, new SendBuffered(element));
  }
  SendBufferedDesc.prototype.failure_mowj19_k$ = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (isInterface(tmp0_subject, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  SendBufferedDesc.$metadata$ = classMeta('SendBufferedDesc', undefined, undefined, undefined, undefined, AddLastDesc.prototype);
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    var tmp_0 = tmp$ret$0;
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.get_isBufferFull_xv8jm_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.get_sendException_qpq1ry_k$();
  }
  function helpCloseAndGetSendException_0($this, element, closed) {
    helpClose($this, closed);
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, closed.get_sendException_qpq1ry_k$());
      throw tmp1_safe_receiver;
    }
    return closed.get_sendException_qpq1ry_k$();
  }
  function sendSuspend($this, element, $cont) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendSuspend.<anonymous>' call
      loop: while (true) {
        if (_get_isFullImpl__v905xu($this)) {
          var send = $this.onUndeliveredElement_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.onUndeliveredElement_1);
          var enqueueResult = $this.enqueueSend_9ksp3t_k$(send);
          if (enqueueResult == null) {
            removeOnCancellation(cancellable, send);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_2;
          } else {
            if (enqueueResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              if (enqueueResult === get_ENQUEUE_FAILED()) {
              } else {
                if (enqueueResult instanceof Receive) {
                } else {
                  var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
        var offerResult = $this.offerInternal_tuzlq7_k$(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp$ret$0 = Unit_getInstance();
          break $l$block_2;
        } else {
          if (offerResult === get_OFFER_FAILED())
            continue loop;
          else {
            if (offerResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
              tmp$ret$0 = Unit_getInstance();
              break $l$block_2;
            } else {
              var tmp1_error = 'offerInternal returned ' + toString_0(offerResult);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
    tmp$ret$3 = cancellable.getResult_clfhg3_k$();
    return tmp$ret$3;
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.get_sendException_qpq1ry_k$();
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, sendException);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
      _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    }
    var tmp$ret$4;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp$ret$3;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure_0 = Companion_getInstance_0();
    tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$3);
    tmp$ret$4 = Unit_getInstance();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.onCloseHandler_1.value_1;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed._prev_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.resumeReceiveClosed_ep2qlw_k$(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.get_fkrdnv_k$(i);
              tmp2__anonymous__z9zvc9.resumeReceiveClosed_ep2qlw_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.onClosedIdempotent_57xn14_k$(closed);
  }
  function TryOfferDesc(element, queue) {
    RemoveFirstDesc.call(this, queue);
    this.element_1 = element;
  }
  TryOfferDesc.prototype.get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  TryOfferDesc.prototype.failure_mowj19_k$ = function (affected) {
    var tmp0_subject = affected;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = affected;
    } else {
      if (!isInterface(tmp0_subject, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  TryOfferDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    var tmp = prepareOp.affected_1;
    var affected = isInterface(tmp, ReceiveOrClosed) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeReceive_mpjrre_k$(this.element_1, prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  TryOfferDesc.$metadata$ = classMeta('TryOfferDesc', undefined, undefined, undefined, undefined, RemoveFirstDesc.prototype);
  function registerSelectSend($this, select, element, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (_get_isFullImpl__v905xu($this)) {
        var node = new SendSelect(element, $this, select, block);
        var enqueueResult = $this.enqueueSend_9ksp3t_k$(node);
        if (enqueueResult == null) {
          select.disposeOnSelect_lrl426_k$(node);
          return Unit_getInstance();
        } else {
          if (enqueueResult instanceof Closed)
            throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, enqueueResult));
          else {
            if (enqueueResult === get_ENQUEUE_FAILED()) {
            } else {
              if (enqueueResult instanceof Receive) {
              } else {
                var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult) + ' ';
                throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
              }
            }
          }
        }
      }
      var offerResult = $this.offerSelectInternal_lspj9s_k$(element, select);
      if (offerResult === get_ALREADY_SELECTED())
        return Unit_getInstance();
      else {
        if (offerResult === get_OFFER_FAILED()) {
        } else {
          if (offerResult === get_RETRY_ATOMIC()) {
          } else {
            if (offerResult === get_OFFER_SUCCESS()) {
              startCoroutineUnintercepted_0(block, $this, select.get_completion_t4gxwb_k$());
              return Unit_getInstance();
            } else {
              if (offerResult instanceof Closed)
                throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, offerResult));
              else {
                var tmp1_error = 'offerSelectInternal returned ' + toString_0(offerResult);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    var head = tmp$ret$0;
    if (head === $this.queue_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.queue_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed._prev_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.queue_1;
    var cur = tmp0_forEach._next_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur._next_1;
    }
    return size;
  }
  function SendSelect(pollResult, channel, select, block) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
  }
  SendSelect.prototype.get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  SendSelect.prototype.get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  SendSelect.prototype.get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  SendSelect.prototype.get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  SendSelect.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  SendSelect.prototype.completeResumeSend_upvqar_k$ = function () {
    var tmp = this.select_1.get_completion_t4gxwb_k$();
    startCoroutineCancellable$default(this.block_1, this.channel_1, tmp, null, 4, null);
  };
  SendSelect.prototype.dispose_3n44we_k$ = function () {
    if (!this.remove_fgfybg_k$())
      return Unit_getInstance();
    this.undeliveredElement_djsee8_k$();
  };
  SendSelect.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed.get_sendException_qpq1ry_k$());
    }
  };
  SendSelect.prototype.undeliveredElement_djsee8_k$ = function () {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, this.pollResult_1, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
    }
  };
  SendSelect.prototype.toString = function () {
    return 'SendSelect@' + get_hexAddress(this) + '(' + this.pollResult_1 + ')[' + this.channel_1 + ', ' + this.select_1 + ']';
  };
  SendSelect.$metadata$ = classMeta('SendSelect', [DisposableHandle], undefined, undefined, undefined, Send.prototype);
  function SendBuffered(element) {
    Send.call(this);
    this.element_1 = element;
  }
  SendBuffered.prototype.get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  SendBuffered.prototype.get_pollResult_t5mkl7_k$ = function () {
    return this.element_1;
  };
  SendBuffered.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SendBuffered.prototype.completeResumeSend_upvqar_k$ = function () {
  };
  SendBuffered.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.element_1 + ')';
  };
  SendBuffered.$metadata$ = classMeta('SendBuffered', undefined, undefined, undefined, undefined, Send.prototype);
  function AbstractSendChannel$onSend$1(this$0) {
    this.this$0__1 = this$0;
  }
  AbstractSendChannel$onSend$1.prototype.registerSelectClause2_tx9czq_k$ = function (select, param, block) {
    registerSelectSend(this.this$0__1, select, param, block);
  };
  AbstractSendChannel$onSend$1.prototype.registerSelectClause2_2icbei_k$ = function (select, param, block) {
    return this.registerSelectClause2_tx9czq_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  AbstractSendChannel$onSend$1.$metadata$ = classMeta(undefined, [SelectClause2]);
  function AbstractSendChannel(onUndeliveredElement) {
    this.onUndeliveredElement_1 = onUndeliveredElement;
    this.queue_1 = new LinkedListHead();
    this.onCloseHandler_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  AbstractSendChannel.prototype.get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  AbstractSendChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.tryResumeReceive_mpjrre_k$(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.completeResumeReceive_1cyi5u_k$(element);
        return receive.get_offerResult_jdi2i8_k$();
      }
    }
  };
  AbstractSendChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    var offerOp = this.describeTryOffer_6o0iky_k$(element);
    var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
    if (!(failure == null))
      return failure;
    var receive = offerOp.get_result_iyg5d2_k$();
    receive.completeResumeReceive_1cyi5u_k$(element);
    return receive.get_offerResult_jdi2i8_k$();
  };
  AbstractSendChannel.prototype.get_closedForSend_4r8ipo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.queue_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg._prev_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.get_closedForReceive_iep3v5_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.takeFirstSendOrPeekClosed_h7sgez_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.queue_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf._next_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.removeImpl_i5v938_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.sendBuffered_4b6ooj_k$ = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.queue_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev._prev_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.addLast_uyctnf_k$(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.describeSendBuffered_gmw7y0_k$ = function (element) {
    return new SendBufferedDesc(this.queue_1, element);
  };
  AbstractSendChannel.prototype.get_isClosedForSend_ajczci_k$ = function () {
    return !(this.get_closedForSend_4r8ipo_k$() == null);
  };
  AbstractSendChannel.prototype.send_4idxxh_k$ = function (element, $cont) {
    if (this.offerInternal_tuzlq7_k$(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    return sendSuspend(this, element, $cont);
  };
  AbstractSendChannel.prototype.offer_pm4fdq_k$ = function (element) {
    try {
      return offer.call(this, element);
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_safe_receiver = this.onUndeliveredElement_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          tmp = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, element, null, 2, null);
        }
        var tmp1_safe_receiver = tmp;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp1_safe_receiver, $p);
          throw tmp1_safe_receiver;
        }
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  AbstractSendChannel.prototype.trySend_3hclq4_k$ = function (element) {
    var result = this.offerInternal_tuzlq7_k$(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().success_prl0f3_k$(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().failure_qsocya_k$();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().closed_o16byb_k$(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().closed_o16byb_k$(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.enqueueSend_9ksp3t_k$ = function (send) {
    if (this.get_isBufferAlwaysFull_v6nbtb_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.queue_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev._prev_1;
        if (isInterface(tmp1__anonymous__uwfjfc, ReceiveOrClosed))
          return tmp1__anonymous__uwfjfc;
        tmp$ret$0 = true;
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.addLast_uyctnf_k$(send);
        tmp$ret$1 = true;
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.queue_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf._prev_1;
        if (isInterface(tmp3__anonymous__ufb84q, ReceiveOrClosed))
          return tmp3__anonymous__ufb84q;
        tmp$ret$2 = true;
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        tmp$ret$4 = this.get_isBufferFull_xv8jm_k$();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.addLast_uyctnf_k$(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  AbstractSendChannel.prototype.close_9zy44b_k$ = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.queue_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev._prev_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.addLast_uyctnf_k$(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.queue_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a._prev_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  AbstractSendChannel.prototype.invokeOnClose_88rhe6_k$ = function (handler) {
    if (!this.onCloseHandler_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.onCloseHandler_1.value_1;
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.get_closedForSend_4r8ipo_k$();
      if (!(closedToken == null) ? this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.closeCause_1);
      }
    }
  };
  AbstractSendChannel.prototype.onClosedIdempotent_57xn14_k$ = function (closed) {
  };
  AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.queue_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf._next_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.removeImpl_i5v938_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.describeTryOffer_6o0iky_k$ = function (element) {
    return new TryOfferDesc(element, this.queue_1);
  };
  AbstractSendChannel.prototype.get_onSend_hnoo40_k$ = function () {
    return new AbstractSendChannel$onSend$1(this);
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.get_bufferDebugString_66mwn9_k$();
  };
  AbstractSendChannel.prototype.get_bufferDebugString_66mwn9_k$ = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = classMeta('AbstractSendChannel', [SendChannel]);
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.undeliveredElement_djsee8_k$ = function () {
  };
  Send.$metadata$ = classMeta('Send', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = interfaceMeta('ReceiveOrClosed');
  function Closed(closeCause) {
    Send.call(this);
    this.closeCause_1 = closeCause;
  }
  Closed.prototype.get_closeCause_gbqkm2_k$ = function () {
    return this.closeCause_1;
  };
  Closed.prototype.get_sendException_qpq1ry_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.get_receiveException_nqbiq3_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.get_offerResult_jdi2i8_k$ = function () {
    return this;
  };
  Closed.prototype.get_pollResult_t5mkl7_k$ = function () {
    return this;
  };
  Closed.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.completeResumeSend_upvqar_k$ = function () {
  };
  Closed.prototype.tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.completeResumeReceive_1cyi5u_k$ = function (value) {
  };
  Closed.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.closeCause_1 + ']';
  };
  Closed.$metadata$ = classMeta('Closed', [ReceiveOrClosed], undefined, undefined, undefined, Send.prototype);
  function get_RECEIVE_THROWS_ON_CLOSE() {
    return RECEIVE_THROWS_ON_CLOSE;
  }
  var RECEIVE_THROWS_ON_CLOSE;
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.get_offerResult_jdi2i8_k$ = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.prototype.resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return null;
  };
  Receive.$metadata$ = classMeta('Receive', [ReceiveOrClosed], undefined, undefined, undefined, LinkedListNode.prototype);
  function toResult(_this__u8e3s4) {
    init_properties_AbstractChannel_kt_mjk5bh();
    var tmp;
    if (_this__u8e3s4 instanceof Closed) {
      tmp = Companion_getInstance_1().closed_o16byb_k$(_this__u8e3s4.closeCause_1);
    } else {
      var tmp_0 = Companion_getInstance_1();
      tmp = tmp_0.success_prl0f3_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
    }
    return tmp;
  }
  function get_RECEIVE_RESULT() {
    return RECEIVE_RESULT;
  }
  var RECEIVE_RESULT;
  function toResult_0(_this__u8e3s4) {
    init_properties_AbstractChannel_kt_mjk5bh();
    return Companion_getInstance_1().closed_o16byb_k$(_this__u8e3s4.closeCause_1);
  }
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.cont_1 = cont;
  }
  SendElement.prototype.get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  SendElement.prototype.get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  SendElement.prototype.tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.cont_1.tryResume_10oxem_k$(Unit_getInstance(), tmp0_safe_receiver == null ? null : tmp0_safe_receiver.desc_1);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  SendElement.prototype.completeResumeSend_upvqar_k$ = function () {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  SendElement.prototype.resumeSendClosed_r0hgr7_k$ = function (closed) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp0_resumeWithException = this.cont_1;
    var tmp1_resumeWithException = closed.get_sendException_qpq1ry_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
    tmp0_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  SendElement.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.get_pollResult_t5mkl7_k$() + ')';
  };
  SendElement.$metadata$ = classMeta('SendElement', undefined, undefined, undefined, undefined, Send.prototype);
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  SendElementWithUndeliveredHandler.prototype.get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  SendElementWithUndeliveredHandler.prototype.remove_fgfybg_k$ = function () {
    if (!SendElement.prototype.remove_fgfybg_k$.call(this))
      return false;
    this.undeliveredElement_djsee8_k$();
    return true;
  };
  SendElementWithUndeliveredHandler.prototype.undeliveredElement_djsee8_k$ = function () {
    callUndeliveredElement(this.onUndeliveredElement_1, this.get_pollResult_t5mkl7_k$(), this.cont_1.get_context_h02k06_k$());
  };
  SendElementWithUndeliveredHandler.$metadata$ = classMeta('SendElementWithUndeliveredHandler', undefined, undefined, undefined, undefined, SendElement.prototype);
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _get_onBufferOverflow__4ha2pi($this) {
    return $this.onBufferOverflow_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_head__9nromv($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.capacity_1) {
      $this.size_1.value_1 = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.onBufferOverflow_1;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.capacity_1) {
      ensureCapacity($this, currentSize);
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.buffer_1[$this.head_1 % $this.buffer_1.length | 0] = null;
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
      $this.head_1 = ($this.head_1 + 1 | 0) % $this.buffer_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.buffer_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.buffer_1.length, 2);
      var tmp1_min = $this.capacity_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.buffer_1[($this.head_1 + i | 0) % $this.buffer_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.buffer_1 = newBuffer;
      $this.head_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.capacity_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.capacity_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.lock_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.capacity_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    var tmp_0 = get_EMPTY();
    fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
    tmp$ret$3 = tmp2_apply;
    tmp.buffer_1 = tmp$ret$3;
    this.head_1 = 0;
    this.size_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  ArrayChannel.prototype.get_isBufferEmpty_t57jne_k$ = function () {
    return this.size_1.value_1 === 0;
  };
  ArrayChannel.prototype.get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  ArrayChannel.prototype.get_isBufferFull_xv8jm_k$ = function () {
    return this.size_1.value_1 === this.capacity_1 ? this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  ArrayChannel.prototype.get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = this.get_isEmptyImpl_9w6w0q_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.get_isClosedForReceive_v0r77d_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.get_isClosedForReceive_v0r77d_k$.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.size_1.value_1;
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.size_1.value_1 = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.size_1.value_1 = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  ArrayChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerSelectInternal.<anonymous>' call
      var size = this.size_1.value_1;
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_6o0iky_k$(element);
          var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
          if (failure == null) {
            this.size_1.value_1 = size;
            receive = offerOp.get_result_iyg5d2_k$();
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure === get_RETRY_ATOMIC()) {
              } else {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp) {
                  this.size_1.value_1 = size;
                  return failure;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.value_1 = size;
        return get_ALREADY_SELECTED();
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  ArrayChannel.prototype.enqueueSend_9ksp3t_k$ = function (send) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.enqueueSend_9ksp3t_k$.call(this, send);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.pollInternal_ml771g_k$ = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var size = this.size_1.value_1;
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.value_1 = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).tryResumeSend_93c6it_k$(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        }
        ensureNotNull(send).undeliveredElement_djsee8_k$();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.size_1.value_1 = size;
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    }
    return result;
  };
  ArrayChannel.prototype.pollSelectInternal_puj25v_k$ = function (select) {
    var send = null;
    var success = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var size = this.size_1.value_1;
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.value_1 = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var pollOp = this.describeTryPoll_k2m4a9_k$();
        var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
        if (failure == null) {
          send = pollOp.get_result_iyg5d2_k$();
          success = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        } else {
          if (failure === get_POLL_FAILED())
            break loop;
          else {
            if (failure === get_RETRY_ATOMIC()) {
            } else {
              if (failure === get_ALREADY_SELECTED()) {
                this.size_1.value_1 = size;
                this.buffer_1[this.head_1] = result;
                return failure;
              } else {
                if (failure instanceof Closed) {
                  send = failure;
                  success = true;
                  replacement = failure;
                  break loop;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
    var tmp;
    if (!(replacement === get_POLL_FAILED())) {
      tmp = !(replacement instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.size_1.value_1 = size;
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    } else {
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.value_1 = size;
        this.buffer_1[this.head_1] = result;
        return get_ALREADY_SELECTED();
      }
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (success) {
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    }
    return result;
  };
  ArrayChannel.prototype.enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var onUndeliveredElement = this.onUndeliveredElement_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.size_1.value_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.buffer_1[this.head_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.buffer_1[this.head_1] = get_EMPTY();
        this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.size_1.value_1 = 0;
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ArrayChannel.prototype.get_bufferDebugString_66mwn9_k$ = function () {
    return '(buffer:capacity=' + this.capacity_1 + ',size=' + this.size_1.value_1 + ')';
  };
  ArrayChannel.$metadata$ = classMeta('ArrayChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = classMeta('BufferOverflow', undefined, undefined, undefined, undefined, Enum.prototype);
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.prototype.get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  Factory.prototype.get_RENDEZVOUS_7qhqgu_k$ = function () {
    return this.RENDEZVOUS_1;
  };
  Factory.prototype.get_CONFLATED_tox14f_k$ = function () {
    return this.CONFLATED_1;
  };
  Factory.prototype.get_BUFFERED_qzy754_k$ = function () {
    return this.BUFFERED_1;
  };
  Factory.prototype.get_OPTIONAL_CHANNEL_c6wrw3_k$ = function () {
    return this.OPTIONAL_CHANNEL_1;
  };
  Factory.prototype.get_DEFAULT_BUFFER_PROPERTY_NAME_rafy59_k$ = function () {
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  Factory.prototype.get_CHANNEL_DEFAULT_CAPACITY_4xco1p_k$ = function () {
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  Factory.$metadata$ = objectMeta('Factory');
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
    Factory_getInstance();
  }
  Channel.$metadata$ = interfaceMeta('Channel', [SendChannel, ReceiveChannel]);
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function _get_failed__jtpc32($this) {
    return $this.failed_1;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isFailure__impl__nz6ehu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).cause_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).cause_1;
    // Inline function 'kotlin.error' call
    var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = classMeta('Failed');
  function Closed_0(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  Closed_0.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.cause_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.cause_1 + ')';
  };
  Closed_0.$metadata$ = classMeta('Closed', undefined, undefined, undefined, undefined, Failed.prototype);
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  Companion.prototype.success_prl0f3_k$ = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.failure_qsocya_k$ = function () {
    return _ChannelResult___init__impl__siwsuf(this.failed_1);
  };
  Companion.prototype.closed_o16byb_k$ = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp0_subject = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp;
    if (tmp0_subject instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.holder_1 = holder;
  }
  ChannelResult.prototype.toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.holder_1);
  };
  ChannelResult.prototype.hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.holder_1);
  };
  ChannelResult.prototype.equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.holder_1, other);
  };
  ChannelResult.$metadata$ = classMeta('ChannelResult');
  function SendChannel() {
  }
  SendChannel.$metadata$ = interfaceMeta('SendChannel');
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype.invoke_xgbiie_k$ = function (it, $cont) {
    var tmp = this.create_vaj3v6_k$(it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_xgbiie_k$(p1 instanceof ChannelResult ? p1.holder_1 : THROW_CCE(), $cont);
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.it_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            this.state_1 = 1;
            suspendResult = this.$block_1(ChannelResult__getOrNull_impl_f5e07h(this.it_1), this);
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
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype.create_vaj3v6_k$ = function (it, completion) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt(this.$block_1, completion);
    i.it_1 = it;
    return i;
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_vaj3v6_k$(value instanceof ChannelResult ? value.holder_1 : THROW_CCE(), completion);
  };
  ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt.$metadata$ = classMeta('ReceiveChannel$<get-onReceiveOrNull>$o$registerSelectClause1$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0($block, resultContinuation) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_xgbiie_k$(it.holder_1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ReceiveChannel$onReceiveOrNull$1(this$0) {
    this.this$0__1 = this$0;
  }
  ReceiveChannel$onReceiveOrNull$1.prototype.registerSelectClause1_6lfp5b_k$ = function (select, block) {
    var tmp = this.this$0__1.get_onReceiveCatching_ajg9xa_k$();
    tmp.registerSelectClause1_bb3j78_k$(select, ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0(block, null));
  };
  ReceiveChannel$onReceiveOrNull$1.prototype.registerSelectClause1_bb3j78_k$ = function (select, block) {
    return this.registerSelectClause1_6lfp5b_k$(select, block);
  };
  ReceiveChannel$onReceiveOrNull$1.$metadata$ = classMeta(undefined, [SelectClause1]);
  function $receiveOrNullCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $receiveOrNullCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            suspendResult = this._this__u8e3s4__1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.state_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.state_1 = 2;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_f5e07h(ARGUMENT);
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
  $receiveOrNullCOROUTINE$1.$metadata$ = classMeta('$receiveOrNullCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = interfaceMeta('ReceiveChannel');
  function $next0COROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $next0COROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            suspendResult = this._this__u8e3s4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE());
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            return this._this__u8e3s4__1.next_20eer_k$();
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
  $next0COROUTINE$2.$metadata$ = classMeta('$next0COROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ChannelIterator() {
  }
  ChannelIterator.$metadata$ = interfaceMeta('ChannelIterator');
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = classMeta('ClosedReceiveChannelException', undefined, undefined, undefined, undefined, NoSuchElementException.prototype);
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = classMeta('ClosedSendChannelException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function updateValueLocked($this, element) {
    var old = $this.value_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.onUndeliveredElement_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.value_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.lock_1 = new NoOpLock();
    this.value_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  ConflatedChannel.prototype.get_isBufferEmpty_t57jne_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.value_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  ConflatedChannel.prototype.get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  ConflatedChannel.prototype.get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = this.get_isEmptyImpl_9w6w0q_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  ConflatedChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerSelectInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_6o0iky_k$(element);
          var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
          if (failure == null) {
            receive = offerOp.get_result_iyg5d2_k$();
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure === get_RETRY_ATOMIC()) {
              } else {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp)
                  return failure;
                else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        return get_ALREADY_SELECTED();
      }
      var tmp1_safe_receiver = updateValueLocked(this, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  ConflatedChannel.prototype.pollInternal_ml771g_k$ = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.value_1;
    this.value_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.pollSelectInternal_puj25v_k$ = function (select) {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    if (!select.trySelect_1ivjiv_k$())
      return get_ALREADY_SELECTED();
    result = this.value_1;
    this.value_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ConflatedChannel.prototype.enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.get_bufferDebugString_66mwn9_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.lock_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.value_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.$metadata$ = classMeta('ConflatedChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  LinkedListChannel.prototype.get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  LinkedListChannel.prototype.get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  LinkedListChannel.prototype.get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  LinkedListChannel.prototype.offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.offerInternal_tuzlq7_k$.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.sendBuffered_4b6ooj_k$(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.offerSelectInternal_lspj9s_k$ = function (element, select) {
    while (true) {
      var tmp;
      if (this.get_hasReceiveOrClosed_wl54xr_k$()) {
        tmp = AbstractChannel.prototype.offerSelectInternal_lspj9s_k$.call(this, element, select);
      } else {
        var tmp0_elvis_lhs = select.performAtomicTrySelect_9r1u91_k$(this.describeSendBuffered_gmw7y0_k$(element));
        tmp = tmp0_elvis_lhs == null ? get_OFFER_SUCCESS() : tmp0_elvis_lhs;
      }
      var result = tmp;
      if (result === get_ALREADY_SELECTED())
        return get_ALREADY_SELECTED();
      else {
        if (result === get_OFFER_SUCCESS())
          return get_OFFER_SUCCESS();
        else {
          if (result === get_OFFER_FAILED()) {
          } else {
            if (result === get_RETRY_ATOMIC()) {
            } else {
              if (result instanceof Closed)
                return result;
              else {
                var tmp0_error = 'Invalid result ' + toString_0(result);
                throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
              }
            }
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.onCancelIdempotentList_icdvp_k$ = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.onUndeliveredElement_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.element_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.resumeSendClosed_r0hgr7_k$(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.get_fkrdnv_k$(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.onUndeliveredElement_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.element_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.resumeSendClosed_r0hgr7_k$(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  LinkedListChannel.$metadata$ = classMeta('LinkedListChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  RendezvousChannel.prototype.get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  RendezvousChannel.prototype.get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return true;
  };
  RendezvousChannel.prototype.get_isBufferFull_xv8jm_k$ = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = classMeta('RendezvousChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function get_NO_VALUE() {
    init_properties_SharedFlow_kt_5sqb47();
    return NO_VALUE;
  }
  var NO_VALUE;
  var properties_initialized_SharedFlow_kt_tmefor;
  function init_properties_SharedFlow_kt_5sqb47() {
    if (properties_initialized_SharedFlow_kt_tmefor) {
    } else {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    init_properties_StateFlow_kt_6znnsl();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    init_properties_StateFlow_kt_6znnsl();
    return PENDING;
  }
  var PENDING;
  var properties_initialized_StateFlow_kt_nsqikx;
  function init_properties_StateFlow_kt_6znnsl() {
    if (properties_initialized_StateFlow_kt_nsqikx) {
    } else {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    init_properties_AbstractSharedFlow_kt_ejuukb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function init_properties_AbstractSharedFlow_kt_ejuukb() {
    if (properties_initialized_AbstractSharedFlow_kt_2mpafr) {
    } else {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      EMPTY_RESUMES = tmp$ret$0;
    }
  }
  function get_NULL() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function get_DONE() {
    init_properties_NullSurrogate_kt_8d5lbx();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function init_properties_NullSurrogate_kt_8d5lbx() {
    if (properties_initialized_NullSurrogate_kt_39v8bl) {
    } else {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function get_defaultKeySelector() {
    init_properties_Distinct_kt_yydxy6();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    init_properties_Distinct_kt_yydxy6();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda(it) {
    init_properties_Distinct_kt_yydxy6();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    init_properties_Distinct_kt_yydxy6();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function init_properties_Distinct_kt_yydxy6() {
    if (properties_initialized_Distinct_kt_uy8c72) {
    } else {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function get_DEFAULT_CONCURRENCY() {
    init_properties_Merge_kt_uorl8c();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function get_DEFAULT_CONCURRENCY_PROPERTY_NAME() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_dhn6vs;
  function init_properties_Merge_kt_uorl8c() {
    if (properties_initialized_Merge_kt_dhn6vs) {
    } else {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().MAX_VALUE_1);
    }
  }
  function _set_elements__x18af4($this, _set____db54di) {
    $this.elements_1 = _set____db54di;
  }
  function _get_elements__k8byyc($this) {
    return $this.elements_1;
  }
  function _set_head__9nromv_0($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b_0($this) {
    return $this.head_1;
  }
  function _set_tail__9uatxj($this, _set____db54di) {
    $this.tail_1 = _set____db54di;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.elements_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.elements_1;
    var tmp1_copyInto = $this.head_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.elements_1;
    var tmp4_copyInto = $this.elements_1.length - $this.head_1 | 0;
    var tmp5_copyInto = $this.head_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.elements_1 = newElements;
    $this.head_1 = 0;
    $this.tail_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.elements_1 = tmp$ret$0;
    this.head_1 = 0;
    this.tail_1 = 0;
  }
  ArrayQueue.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.head_1 === this.tail_1;
  };
  ArrayQueue.prototype.addLast_xhfl3v_k$ = function (element) {
    this.elements_1[this.tail_1] = element;
    this.tail_1 = (this.tail_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    if (this.tail_1 === this.head_1) {
      ensureCapacity_0(this);
    }
  };
  ArrayQueue.prototype.removeFirstOrNull_eges3a_k$ = function () {
    if (this.head_1 === this.tail_1)
      return null;
    var element = this.elements_1[this.head_1];
    this.elements_1[this.head_1] = null;
    this.head_1 = (this.head_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.prototype.clear_j9y8zo_k$ = function () {
    this.head_1 = 0;
    this.tail_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.elements_1.length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.elements_1 = tmp$ret$0;
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function get_NO_DECISION() {
    init_properties_Atomic_kt_3h20tt();
    return NO_DECISION;
  }
  var NO_DECISION;
  function get_RETRY_ATOMIC() {
    init_properties_Atomic_kt_3h20tt();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  OpDescriptor.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  OpDescriptor.prototype.isEarlierThan_b5adjh_k$ = function (that) {
    var tmp0_elvis_lhs = this.get_atomicOp_p2pkuj_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that.get_atomicOp_p2pkuj_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp.get_opSequence_bttwhh_k$().compareTo_n4fqi2_k$(thatOp.get_opSequence_bttwhh_k$()) < 0;
  };
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  AtomicOp.prototype.get_consensus_1b3g0e_k$ = function () {
    return this._consensus_1.value_1;
  };
  AtomicOp.prototype.get_isDecided_ofk0qx_k$ = function () {
    return !(this._consensus_1.value_1 === get_NO_DECISION());
  };
  AtomicOp.prototype.get_opSequence_bttwhh_k$ = function () {
    return new Long(0, 0);
  };
  AtomicOp.prototype.get_atomicOp_p2pkuj_k$ = function () {
    return this;
  };
  AtomicOp.prototype.decide_ydi1rd_k$ = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this._consensus_1.value_1;
    if (!(current === get_NO_DECISION()))
      return current;
    if (this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this._consensus_1.value_1;
  };
  AtomicOp.prototype.perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.value_1;
    if (decision === get_NO_DECISION()) {
      decision = this.decide_ydi1rd_k$(this.prepare_gq68ys_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.complete_fye4ce_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = classMeta('AtomicOp', undefined, undefined, undefined, undefined, OpDescriptor.prototype);
  function AtomicDesc() {
  }
  AtomicDesc.prototype.set_atomicOp_7j6ry0_k$ = function (_set____db54di) {
    this.atomicOp_1 = _set____db54di;
  };
  AtomicDesc.prototype.get_atomicOp_p2pkuj_k$ = function () {
    var tmp = this.atomicOp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('atomicOp');
    }
  };
  AtomicDesc.$metadata$ = classMeta('AtomicDesc');
  var properties_initialized_Atomic_kt_vn225v;
  function init_properties_Atomic_kt_3h20tt() {
    if (properties_initialized_Atomic_kt_vn225v) {
    } else {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_CLOSED() {
    init_properties_ConcurrentLinkedList_kt_u21ib0();
    return CLOSED;
  }
  var CLOSED;
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function init_properties_ConcurrentLinkedList_kt_u21ib0() {
    if (properties_initialized_ConcurrentLinkedList_kt_kwt434) {
    } else {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.dispatcher_1.isDispatchNeeded_fmz9vn_k$(tmp1_resumeCancellableWith.get_context_h02k06_k$())) {
        tmp1_resumeCancellableWith._state_1 = state;
        tmp1_resumeCancellableWith.resumeMode_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.dispatcher_1.dispatch_o98ux7_k$(tmp1_resumeCancellableWith.get_context_h02k06_k$(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
          if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
            tmp1_resumeCancellableWith._state_1 = state;
            tmp1_resumeCancellableWith.resumeMode_1 = tmp0_executeUnconfined;
            eventLoop.dispatchUnconfined_do6j6f_k$(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.incrementUseCount_ocukpa_k$(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance_3());
                if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                  var cause = job.getCancellationException_8i1q6u_k$();
                  tmp1_resumeCancellableWith.cancelCompletedResult_tweln2_k$(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance_0();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.resumeWith_s3a3yh_k$(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.continuation_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.countOrElement_1;
                tmp1_resumeCancellableWith.continuation_1.resumeWith_s3a3yh_k$(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.handleFatalException_56zdfo_k$($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.decrementUseCount_saho26_k$(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.resumeWith_s3a3yh_k$(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get__reusableCancellableContinuation__ic28e($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this._reusableCancellableContinuation_1.value_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = get_UNDEFINED();
    this.countOrElement_1 = threadContextElements(this.get_context_h02k06_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  DispatchedContinuation.prototype.get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  DispatchedContinuation.prototype.get_context_h02k06_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  DispatchedContinuation.prototype.set__state_9u8p4v_k$ = function (_set____db54di) {
    this._state_1 = _set____db54di;
  };
  DispatchedContinuation.prototype.get__state_a6aoij_k$ = function () {
    return this._state_1;
  };
  DispatchedContinuation.prototype.get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  DispatchedContinuation.prototype.getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  DispatchedContinuation.prototype.get_countOrElement_ut92s3_k$ = function () {
    return this.countOrElement_1;
  };
  DispatchedContinuation.prototype.isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1.value_1 == null);
  };
  DispatchedContinuation.prototype.awaitReusability_itz0u_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.release_wtm6d2_k$ = function () {
    this.awaitReusability_itz0u_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qdtbew_k$();
    }
  };
  DispatchedContinuation.prototype.claimReusableCancellableContinuation_oatv30_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (tmp1__anonymous__uwfjfc === null) {
        this._reusableCancellableContinuation_1.value_1 = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_5s4a1c_k$ = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_723ard_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this._state_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.get_delegate_i94tki_k$ = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_s3a3yh_k$ = function (result) {
    var context = this.continuation_1.get_context_h02k06_k$();
    var state = toState$default(result, null, 1, null);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
      this._state_1 = state;
      this.resumeMode_1 = get_MODE_ATOMIC();
      this.dispatcher_1.dispatch_o98ux7_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.resumeMode_1 = tmp0_executeUnconfined;
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.get_context_h02k06_k$();
            var tmp1_withCoroutineContext = this.countOrElement_1;
            this.continuation_1.resumeWith_s3a3yh_k$(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.handleFatalException_56zdfo_k$($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.resumeCancellableWith_tuk66b_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this.get_context_h02k06_k$())) {
      this._state_1 = state;
      this.resumeMode_1 = get_MODE_CANCELLABLE();
      this.dispatcher_1.dispatch_o98ux7_k$(this.get_context_h02k06_k$(), this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.resumeMode_1 = tmp0_executeUnconfined;
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
            var tmp$ret$3;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance_3());
              if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                var cause = job.getCancellationException_8i1q6u_k$();
                this.cancelCompletedResult_tweln2_k$(state, cause);
                var tmp$ret$2;
                // Inline function 'kotlin.coroutines.resumeWithException' call
                var tmp$ret$1;
                // Inline function 'kotlin.Companion.failure' call
                var tmp0_failure = Companion_getInstance_0();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                this.resumeWith_s3a3yh_k$(tmp$ret$1);
                tmp$ret$2 = Unit_getInstance();
                tmp$ret$3 = true;
                break $l$block_0;
              }
              tmp$ret$3 = false;
            }
            if (!tmp$ret$3) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              var tmp$ret$4;
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              var tmp0_withContinuationContext = this.continuation_1;
              var tmp1_withContinuationContext = this.countOrElement_1;
              this.continuation_1.resumeWith_s3a3yh_k$(result);
              tmp$ret$4 = Unit_getInstance();
            }
            $l$loop: while (true) {
              if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.handleFatalException_56zdfo_k$($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.onCancellation_1(cause);
    }
  };
  DispatchedContinuation.prototype.resumeCancelled_vc1wm3_k$ = function (state) {
    var job = this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance_3());
    if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_tweln2_k$(state, cause);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.resumeUndispatchedWith_xz834r_k$ = function (result) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    var tmp0_withContinuationContext = this.continuation_1;
    var tmp1_withContinuationContext = this.countOrElement_1;
    this.continuation_1.resumeWith_s3a3yh_k$(result);
    tmp$ret$0 = Unit_getInstance();
  };
  DispatchedContinuation.prototype.dispatchYield_r38es3_k$ = function (context, value) {
    this._state_1 = value;
    this.resumeMode_1 = get_MODE_CANCELLABLE();
    this.dispatcher_1.dispatchYield_ww21f6_k$(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (doYield ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false)
      return false;
    var tmp;
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      _this__u8e3s4._state_1 = contState;
      _this__u8e3s4.resumeMode_1 = mode;
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        block();
        $l$loop: while (true) {
          if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.handleFatalException_56zdfo_k$($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
      tmp = false;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
      if (eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
        _this__u8e3s4._state_1 = Unit_getInstance();
        _this__u8e3s4.resumeMode_1 = tmp0_executeUnconfined;
        eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.run_mw4iiu_k$();
          $l$loop: while (true) {
            if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.handleFatalException_56zdfo_k$($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  DispatchedTask.prototype.set_resumeMode_b1d3vh_k$ = function (_set____db54di) {
    this.resumeMode_1 = _set____db54di;
  };
  DispatchedTask.prototype.get_resumeMode_te1i4n_k$ = function () {
    return this.resumeMode_1;
  };
  DispatchedTask.prototype.cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_gdkv2w_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  };
  DispatchedTask.prototype.run_mw4iiu_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.get_delegate_i94tki_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.continuation_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.countOrElement_1;
      var context = continuation.get_context_h02k06_k$();
      var state = this.takeState_olvzuy_k$();
      var exception = this.getExceptionalResult_bnge6_k$(state);
      var job = (exception == null ? get_isCancellableMode(this.resumeMode_1) : false) ? context.get_1pi7hg_k$(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance_0();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.resumeWith_s3a3yh_k$(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.getSuccessfulResult_gdkv2w_k$(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.resumeWith_s3a3yh_k$(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance_0();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_0();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.handleFatalException_56zdfo_k$(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_56zdfo_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.get_delegate_i94tki_k$().get_context_h02k06_k$(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.get_delegate_i94tki_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.resumeMode_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.dispatcher_1;
      var context = delegate.get_context_h02k06_k$();
      if (dispatcher.isDispatchNeeded_fmz9vn_k$(context)) {
        dispatcher.dispatch_o98ux7_k$(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.incrementUseCount_ocukpa_k$(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.handleFatalException_56zdfo_k$($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.decrementUseCount_saho26_k$(true);
    }
  }
  function resumeWithStackTrace(_this__u8e3s4, exception) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance_0();
    var tmp1_failure = recoverStackTrace(exception, _this__u8e3s4);
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.get_delegate_i94tki_k$(), true);
        $l$loop: while (true) {
          if (!eventLoop.processUnconfinedEvent_mypjl6_k$())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.handleFatalException_56zdfo_k$($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.takeState_olvzuy_k$();
    var exception = _this__u8e3s4.getExceptionalResult_bnge6_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance_0();
      var tmp2_success = _this__u8e3s4.getSuccessfulResult_gdkv2w_k$(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.continuation_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.countOrElement_1;
      tmp3_resumeUndispatchedWith.continuation_1.resumeWith_s3a3yh_k$(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.resumeWith_s3a3yh_k$(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.add_1j60pz_k$((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.get_fkrdnv_k$(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.holder_1 = holder;
  }
  InlineList.prototype.toString = function () {
    return InlineList__toString_impl_1aej86(this.holder_1);
  };
  InlineList.prototype.hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.holder_1);
  };
  InlineList.prototype.equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.holder_1, other);
  };
  InlineList.$metadata$ = classMeta('InlineList');
  function checkParallelism(_this__u8e3s4) {
    var tmp0_require = _this__u8e3s4 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.checkParallelism.<anonymous>' call
      tmp$ret$0 = 'Expected positive parallelism level, but got ' + _this__u8e3s4;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return tmp;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__25q2h7($this) {
    return $this.parallelism_1;
  }
  function _set_runningWorkers__ctf6jl($this, _set____db54di) {
    $this.runningWorkers_1 = _set____db54di;
  }
  function _get_runningWorkers__wolfe3($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__c6g84g($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__l5417m($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, dispatch) {
    if (addAndTryDispatching($this, block))
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    dispatch();
  }
  function tryAllocateWorker($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_synchronized = $this.workerAllocationLock_1;
    if ($this.runningWorkers_1 >= $this.parallelism_1)
      return false;
    var tmp0_this = $this;
    tmp0_this.runningWorkers_1 = tmp0_this.runningWorkers_1 + 1 | 0;
    return true;
  }
  function addAndTryDispatching($this, block) {
    $this.queue_1.addLast_3l8aar_k$(block);
    return $this.runningWorkers_1 >= $this.parallelism_1;
  }
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
    this.runningWorkers_1 = 0;
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new Object();
  }
  LimitedDispatcher.prototype.delay_sw4t2e_k$ = function (time, $cont) {
    return this.$$delegate_0__1.delay_sw4t2e_k$(time, $cont);
  };
  LimitedDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  LimitedDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  LimitedDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return CoroutineDispatcher.prototype.limitedParallelism_glrman_k$.call(this, parallelism);
  };
  LimitedDispatcher.prototype.run_mw4iiu_k$ = function () {
    var fairnessCounter = 0;
    $l$loop: while (true) {
      var task = this.queue_1.removeFirstOrNull_eges3a_k$();
      if (!(task == null)) {
        try {
          task.run_mw4iiu_k$();
        } catch ($p) {
          if ($p instanceof Error) {
            handleCoroutineException(EmptyCoroutineContext_getInstance(), $p);
          } else {
            throw $p;
          }
        }
        var tmp;
        fairnessCounter = fairnessCounter + 1 | 0;
        if (fairnessCounter >= 16) {
          tmp = this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this);
        } else {
          tmp = false;
        }
        if (tmp) {
          this.dispatcher_1.dispatch_o98ux7_k$(this, this);
          return Unit_getInstance();
        }
        continue $l$loop;
      }
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      var tmp0_synchronized = this.workerAllocationLock_1;
      var tmp0_this = this;
      tmp0_this.runningWorkers_1 = tmp0_this.runningWorkers_1 - 1 | 0;
      if (this.queue_1.get_size_woubt6_k$() === 0)
        return Unit_getInstance();
      var tmp1_this = this;
      tmp1_this.runningWorkers_1 = tmp1_this.runningWorkers_1 + 1 | 0;
      fairnessCounter = 0;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  LimitedDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatch.<anonymous>' call
      this.dispatcher_1.dispatch_o98ux7_k$(this, this);
    }
  };
  LimitedDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchYield.<anonymous>' call
      this.dispatcher_1.dispatchYield_ww21f6_k$(this, this);
    }
  };
  LimitedDispatcher.$metadata$ = classMeta('LimitedDispatcher', [Runnable, Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function get_REMOVE_PREPARED() {
    init_properties_LockFreeLinkedList_common_kt_ecmrzd();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_b0cmf9;
  function init_properties_LockFreeLinkedList_common_kt_ecmrzd() {
    if (properties_initialized_LockFreeLinkedList_common_kt_b0cmf9) {
    } else {
      properties_initialized_LockFreeLinkedList_common_kt_b0cmf9 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function _get__cur__d2ko2y($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    var tmp = this;
    Companion_getInstance_2();
    tmp._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  LockFreeTaskQueue.prototype.get_isEmpty_zauvru_k$ = function () {
    return this._cur_1.value_1.get_isEmpty_zauvru_k$();
  };
  LockFreeTaskQueue.prototype.get_size_woubt6_k$ = function () {
    return this._cur_1.value_1.get_size_woubt6_k$();
  };
  LockFreeTaskQueue.prototype.close_ymq55z_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (tmp1__anonymous__uwfjfc.close_1keygo_k$())
        return Unit_getInstance();
      this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
    }
  };
  LockFreeTaskQueue.prototype.addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.addLast.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc.addLast_3l8aar_k$(element);
      Companion_getInstance_2();
      if (tmp0_subject === 0)
        return true;
      else {
        Companion_getInstance_2();
        if (tmp0_subject === 2)
          return false;
        else {
          Companion_getInstance_2();
          if (tmp0_subject === 1) {
            this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
          }
        }
      }
    }
  };
  LockFreeTaskQueue.prototype.removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.removeFirstOrNull.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var result = tmp1__anonymous__uwfjfc.removeFirstOrNull_eges3a_k$();
      if (!(result === Companion_getInstance_2().REMOVE_FROZEN_1)) {
        return (result == null ? true : isObject(result)) ? result : THROW_CCE();
      }
      this._cur_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc.next_20eer_k$());
    }
  };
  LockFreeTaskQueue.prototype.map_cey4p6_k$ = function (transform) {
    return this._cur_1.value_1.map_cey4p6_k$(transform);
  };
  LockFreeTaskQueue.prototype.isClosed_baxhhm_k$ = function () {
    return this._cur_1.value_1.isClosed_baxhhm_k$();
  };
  LockFreeTaskQueue.$metadata$ = classMeta('LockFreeTaskQueue');
  function _get_capacity__a9k9f3_0($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__485sb7($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__da8grj($this) {
    return $this.mask_1;
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__state__37adl3_1($this) {
    return $this._state_1;
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1).value_1;
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1).value_1 = element;
      return $this;
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeSlowPath.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
      var tmp0_withState = Companion_getInstance_2();
      var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      Companion_getInstance_2();
      if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
        return $this.next_20eer_k$();
      }
      var tmp;
      if ($this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_2().updateHead_eajy5c_k$(tmp1__anonymous__uwfjfc, newHead))) {
        $this.array_1.atomicfu$get(head & $this.mask_1).value_1 = null;
        return null;
      }
      tmp$ret$0 = tmp;
    }
  }
  function markFrozen($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = $this._state_1;
      while (true) {
        var cur = tmp0_updateAndGet.value_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.markFrozen.<anonymous>' call
        Companion_getInstance_2();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return cur;
        Companion_getInstance_2();
        tmp$ret$0 = cur.or_s401rn_k$(new Long(0, 268435456));
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._next_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.allocateOrGetNextCopy.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (!(tmp1__anonymous__uwfjfc == null))
        return tmp1__anonymous__uwfjfc;
      $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var head = state.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = state.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & $this.mask_1) === (tail & $this.mask_1))) {
      var tmp0_elvis_lhs = $this.array_1.atomicfu$get(index & $this.mask_1).value_1;
      var value = tmp0_elvis_lhs == null ? new Placeholder(index) : tmp0_elvis_lhs;
      next.array_1.atomicfu$get(index & next.mask_1).value_1 = value;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
    }
    var tmp = next._state_1;
    var tmp_0 = Companion_getInstance_2();
    Companion_getInstance_2();
    tmp.value_1 = tmp_0.wo_iscla2_k$(state, new Long(0, 268435456));
    tmp$ret$0 = Unit_getInstance();
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  Placeholder.prototype.get_index_it478p_k$ = function () {
    return this.index_1;
  };
  Placeholder.$metadata$ = classMeta('Placeholder');
  function Companion_0() {
    Companion_instance_0 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  Companion_0.prototype.get_INITIAL_CAPACITY_tvo5ku_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  Companion_0.prototype.get_CAPACITY_BITS_m7bade_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  Companion_0.prototype.get_MAX_CAPACITY_MASK_bnmlt9_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  Companion_0.prototype.get_HEAD_SHIFT_ww01xo_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  Companion_0.prototype.get_HEAD_MASK_jkay7y_k$ = function () {
    return this.HEAD_MASK_1;
  };
  Companion_0.prototype.get_TAIL_SHIFT_z9ya0s_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  Companion_0.prototype.get_TAIL_MASK_h71l4e_k$ = function () {
    return this.TAIL_MASK_1;
  };
  Companion_0.prototype.get_FROZEN_SHIFT_9ve6oc_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  Companion_0.prototype.get_FROZEN_MASK_gcrlj6_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  Companion_0.prototype.get_CLOSED_SHIFT_v5gopk_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  Companion_0.prototype.get_CLOSED_MASK_agddhm_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  Companion_0.prototype.get_MIN_ADD_SPIN_CAPACITY_z2m7z7_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  Companion_0.prototype.get_REMOVE_FROZEN_w56qum_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  Companion_0.prototype.get_ADD_SUCCESS_vnro04_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  Companion_0.prototype.get_ADD_FROZEN_bsr1ax_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  Companion_0.prototype.get_ADD_CLOSED_db6t8t_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  Companion_0.prototype.wo_iscla2_k$ = function (_this__u8e3s4, other) {
    return _this__u8e3s4.and_jhajnj_k$(other.inv_28kx_k$());
  };
  Companion_0.prototype.updateHead_eajy5c_k$ = function (_this__u8e3s4, newHead) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(1073741823, 0)).or_s401rn_k$(toLong(newHead).shl_po5ip6_k$(0));
  };
  Companion_0.prototype.updateTail_fwivqo_k$ = function (_this__u8e3s4, newTail) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(-1073741824, 268435455)).or_s401rn_k$(toLong(newTail).shl_po5ip6_k$(30));
  };
  Companion_0.prototype.withState_s3n57v_k$ = function (_this__u8e3s4, block) {
    var head = _this__u8e3s4.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = _this__u8e3s4.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  Companion_0.prototype.addFailReason_gc2gzp_k$ = function (_this__u8e3s4) {
    return !_this__u8e3s4.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_2();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    // Inline function 'kotlin.check' call
    Companion_getInstance_2();
    var tmp0_check = this.mask_1 <= 1073741823;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = (this.capacity_1 & this.mask_1) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  LockFreeTaskQueueCore.prototype.get_isEmpty_zauvru_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var tmp1_withState = this._state_1.value_1;
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-isEmpty>.<anonymous>' call
    tmp$ret$0 = head === tail;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  LockFreeTaskQueueCore.prototype.get_size_woubt6_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var tmp1_withState = this._state_1.value_1;
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-size>.<anonymous>' call
    var tmp = tail - head | 0;
    Companion_getInstance_2();
    tmp$ret$0 = tmp & 1073741823;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  LockFreeTaskQueueCore.prototype.close_1keygo_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this._state_1;
      while (true) {
        var cur = tmp0_update.value_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.close.<anonymous>' call
        Companion_getInstance_2();
        if (!cur.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
          return true;
        Companion_getInstance_2();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return false;
        Companion_getInstance_2();
        tmp$ret$0 = cur.or_s401rn_k$(new Long(0, 536870912));
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return true;
  };
  LockFreeTaskQueueCore.prototype.addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.addLast.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        Companion_getInstance_2();
        var tmp = new Long(0, 268435456);
        Companion_getInstance_2();
        if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(tmp.or_s401rn_k$(new Long(0, 536870912))).equals(new Long(0, 0)))
          return Companion_getInstance_2().addFailReason_gc2gzp_k$(tmp1__anonymous__uwfjfc);
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        var tmp0_withState = Companion_getInstance_2();
        var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        var mask = this.mask_1;
        if (((tail + 2 | 0) & mask) === (head & mask)) {
          Companion_getInstance_2();
          return 1;
        }
        if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail & mask).value_1 == null) : false) {
          var tmp_0;
          Companion_getInstance_2();
          if (this.capacity_1 < 1024) {
            tmp_0 = true;
          } else {
            var tmp_1 = tail - head | 0;
            Companion_getInstance_2();
            tmp_0 = (tmp_1 & 1073741823) > this.capacity_1 >> 1;
          }
          if (tmp_0) {
            Companion_getInstance_2();
            return 1;
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp_2 = tail + 1 | 0;
        Companion_getInstance_2();
        var newTail = tmp_2 & 1073741823;
        var tmp_3;
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_2().updateTail_fwivqo_k$(tmp1__anonymous__uwfjfc, newTail))) {
          this.array_1.atomicfu$get(tail & mask).value_1 = element;
          var cur = this;
          $l$loop_0: while (true) {
            var tmp_4 = cur._state_1.value_1;
            Companion_getInstance_2();
            if (tmp_4.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
              break $l$loop_0;
            var tmp0_elvis_lhs = fillPlaceholder(cur.next_20eer_k$(), tail, element);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              break $l$loop_0;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            cur = tmp_5;
          }
          Companion_getInstance_2();
          return 0;
        }
        tmp$ret$1 = tmp_3;
      }
    }
  };
  LockFreeTaskQueueCore.prototype.removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeFirstOrNull.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        Companion_getInstance_2();
        if (!tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return Companion_getInstance_2().REMOVE_FROZEN_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        var tmp0_withState = Companion_getInstance_2();
        var head = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1__anonymous__uwfjfc.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        if ((tail & this.mask_1) === (head & this.mask_1))
          return null;
        var element = this.array_1.atomicfu$get(head & this.mask_1).value_1;
        if (element == null) {
          if (this.singleConsumer_1)
            return null;
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        if (element instanceof Placeholder)
          return null;
        var tmp = head + 1 | 0;
        Companion_getInstance_2();
        var newHead = tmp & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, Companion_getInstance_2().updateHead_eajy5c_k$(tmp1__anonymous__uwfjfc, newHead))) {
          this.array_1.atomicfu$get(head & this.mask_1).value_1 = null;
          return element;
        }
        if (!this.singleConsumer_1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        var cur = this;
        while (true) {
          var tmp0_elvis_lhs = removeSlowPath(cur, head, newHead);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return element;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          cur = tmp_0;
        }
        tmp$ret$1 = Unit_getInstance();
      }
    }
  };
  LockFreeTaskQueueCore.prototype.next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  LockFreeTaskQueueCore.prototype.map_cey4p6_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    var tmp0_withState = Companion_getInstance_2();
    var tmp1_withState = this._state_1.value_1;
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & this.mask_1) === (tail & this.mask_1))) {
      var element = this.array_1.atomicfu$get(index & this.mask_1).value_1;
      var tmp;
      if (!(element == null)) {
        tmp = !(element instanceof Placeholder);
      } else {
        tmp = false;
      }
      if (tmp) {
        res.add_1j60pz_k$(transform(isObject(element) ? element : THROW_CCE()));
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    tmp$ret$0 = Unit_getInstance();
    return res;
  };
  LockFreeTaskQueueCore.prototype.isClosed_baxhhm_k$ = function () {
    var tmp = this._state_1.value_1;
    Companion_getInstance_2();
    return !tmp.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  LockFreeTaskQueueCore.$metadata$ = classMeta('LockFreeTaskQueueCore');
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = classMeta('UndeliveredElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.coroutineContext_1 = context;
  }
  ContextScope.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext_1 + ')';
  };
  ContextScope.$metadata$ = classMeta('ContextScope', [CoroutineScope]);
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  Symbol.prototype.get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  Symbol.prototype.toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  Symbol.prototype.unbox_eumklp_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp$default(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      minValue = 1;
    if (!(($mask0 & 8) === 0))
      maxValue = IntCompanionObject_getInstance().MAX_VALUE_1;
    return systemProp(propertyName, defaultValue, minValue, maxValue);
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_n4fqi2_k$(parsed) <= 0 ? parsed.compareTo_n4fqi2_k$(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function systemProp$default_0(propertyName, defaultValue, minValue, maxValue, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      minValue = new Long(1, 0);
    if (!(($mask0 & 8) === 0)) {
      Companion_getInstance();
      maxValue = new Long(-1, 2147483647);
    }
    return systemProp_0(propertyName, defaultValue, minValue, maxValue);
  }
  function _set_a__db556s($this, _set____db54di) {
    $this.a_1 = _set____db54di;
  }
  function _get_a__7mlogg($this) {
    return $this.a_1;
  }
  function _get__size__kqacr3($this) {
    return $this._size_1;
  }
  function _set_size__9twho6($this, value) {
    $this._size_1.value_1 = value;
  }
  function siftUpFrom($this, i) {
    var $this_0 = $this;
    var i_0 = i;
    $l$1: do {
      $l$0: do {
        if (i_0 <= 0)
          return Unit_getInstance();
        var a = ensureNotNull($this_0.a_1);
        var j = (i_0 - 1 | 0) / 2 | 0;
        if (compareTo(ensureNotNull(a[j]), ensureNotNull(a[i_0])) <= 0)
          return Unit_getInstance();
        swap($this_0, i_0, j);
        var tmp0 = $this_0;
        var tmp1 = j;
        $this_0 = tmp0;
        i_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function siftDownFrom($this, i) {
    var $this_0 = $this;
    var i_0 = i;
    $l$1: do {
      $l$0: do {
        var j = imul(2, i_0) + 1 | 0;
        if (j >= $this_0.get_size_woubt6_k$())
          return Unit_getInstance();
        var a = ensureNotNull($this_0.a_1);
        if ((j + 1 | 0) < $this_0.get_size_woubt6_k$() ? compareTo(ensureNotNull(a[j + 1 | 0]), ensureNotNull(a[j])) < 0 : false) {
          var tmp0 = j;
          j = tmp0 + 1 | 0;
        }
        if (compareTo(ensureNotNull(a[i_0]), ensureNotNull(a[j])) <= 0)
          return Unit_getInstance();
        swap($this_0, i_0, j);
        var tmp0_0 = $this_0;
        var tmp1 = j;
        $this_0 = tmp0_0;
        i_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function realloc($this) {
    var a = $this.a_1;
    var tmp;
    if (a == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(4), null);
      var tmp_0 = tmp$ret$0;
      var tmp0_also = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.realloc.<anonymous>' call
      $this.a_1 = tmp0_also;
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else if ($this.get_size_woubt6_k$() >= a.length) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp1_also = copyOf(a, imul($this.get_size_woubt6_k$(), 2));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.realloc.<anonymous>' call
      $this.a_1 = tmp1_also;
      tmp$ret$2 = tmp1_also;
      tmp = tmp$ret$2;
    } else {
      tmp = a;
    }
    return tmp;
  }
  function swap($this, i, j) {
    var a = ensureNotNull($this.a_1);
    var ni = ensureNotNull(a[j]);
    var nj = ensureNotNull(a[i]);
    a[i] = ni;
    a[j] = nj;
    ni.set_index_eknhut_k$(i);
    nj.set_index_eknhut_k$(j);
  }
  function ThreadSafeHeap() {
    this.a_1 = null;
    this._size_1 = atomic$int$1(0);
  }
  ThreadSafeHeap.prototype.get_size_woubt6_k$ = function () {
    return this._size_1.value_1;
  };
  ThreadSafeHeap.prototype.get_isEmpty_zauvru_k$ = function () {
    return this.get_size_woubt6_k$() === 0;
  };
  ThreadSafeHeap.prototype.clear_j9y8zo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp0_safe_receiver = this.a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      fill$default(tmp0_safe_receiver, null, 0, 0, 6, null);
    }
    this._size_1.value_1 = 0;
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  ThreadSafeHeap.prototype.find_chppa9_k$ = function (predicate) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.find.<anonymous>' call
      var inductionVariable = 0;
      var last = this.get_size_woubt6_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1_safe_receiver = this.a_1;
          var value = ensureNotNull(tmp1_safe_receiver == null ? null : tmp1_safe_receiver[i]);
          if (predicate(value)) {
            tmp$ret$0 = value;
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = null;
    }
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ThreadSafeHeap.prototype.peek_21nx7_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.peek.<anonymous>' call
    tmp$ret$0 = this.firstImpl_2706pc_k$();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ThreadSafeHeap.prototype.removeFirstOrNull_eges3a_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.removeFirstOrNull.<anonymous>' call
    var tmp;
    if (this.get_size_woubt6_k$() > 0) {
      tmp = this.removeAtImpl_726gp6_k$(0);
    } else {
      tmp = null;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ThreadSafeHeap.prototype.removeFirstIf_y0tbyn_k$ = function (predicate) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.removeFirstIf.<anonymous>' call
    var tmp0_elvis_lhs = this.firstImpl_2706pc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var first = tmp;
    var tmp_0;
    if (predicate(first)) {
      tmp_0 = this.removeAtImpl_726gp6_k$(0);
    } else {
      tmp_0 = null;
    }
    tmp$ret$0 = tmp_0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ThreadSafeHeap.prototype.addLast_xhfl3v_k$ = function (node) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    this.addImpl_ofmap1_k$(node);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  ThreadSafeHeap.prototype.addLastIf_1adrj8_k$ = function (node, cond) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.ThreadSafeHeap.addLastIf.<anonymous>' call
    var tmp;
    if (cond(this.firstImpl_2706pc_k$())) {
      this.addImpl_ofmap1_k$(node);
      tmp = true;
    } else {
      tmp = false;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ThreadSafeHeap.prototype.remove_8hbkbr_k$ = function (node) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp;
    if (node.get_heap_won7ed_k$() == null) {
      tmp = false;
    } else {
      var index = node.get_index_it478p_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      this.removeAtImpl_726gp6_k$(index);
      tmp = true;
    }
    return tmp;
    return tmp$ret$0;
  };
  ThreadSafeHeap.prototype.firstImpl_2706pc_k$ = function () {
    var tmp0_safe_receiver = this.a_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver[0];
  };
  ThreadSafeHeap.prototype.removeAtImpl_726gp6_k$ = function (index) {
    // Inline function 'kotlinx.coroutines.assert' call
    var a = ensureNotNull(this.a_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.get_size_woubt6_k$();
    _set_size__9twho6(tmp0_this, tmp1 - 1 | 0);
    if (index < this.get_size_woubt6_k$()) {
      swap(this, index, this.get_size_woubt6_k$());
      var j = (index - 1 | 0) / 2 | 0;
      if (index > 0 ? compareTo(ensureNotNull(a[index]), ensureNotNull(a[j])) < 0 : false) {
        swap(this, index, j);
        siftUpFrom(this, j);
      } else {
        siftDownFrom(this, index);
      }
    }
    var result = ensureNotNull(a[this.get_size_woubt6_k$()]);
    // Inline function 'kotlinx.coroutines.assert' call
    result.set_heap_ee7d2q_k$(null);
    result.set_index_eknhut_k$(-1);
    a[this.get_size_woubt6_k$()] = null;
    return result;
  };
  ThreadSafeHeap.prototype.addImpl_ofmap1_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.assert' call
    node.set_heap_ee7d2q_k$(this);
    var a = realloc(this);
    var tmp0_this = this;
    var tmp1 = tmp0_this.get_size_woubt6_k$();
    _set_size__9twho6(tmp0_this, tmp1 + 1 | 0);
    var i = tmp1;
    a[i] = node;
    node.set_index_eknhut_k$(i);
    siftUpFrom(this, i);
  };
  ThreadSafeHeap.$metadata$ = classMeta('ThreadSafeHeap');
  function ThreadSafeHeapNode() {
  }
  ThreadSafeHeapNode.$metadata$ = interfaceMeta('ThreadSafeHeapNode');
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function startCoroutineCancellable_0(_this__u8e3s4, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
      } else {
        throw $p;
      }
    }
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.resumeWith_s3a3yh_k$(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUnintercepted(_this__u8e3s4, completion) {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
          tmp$ret$6 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
  }
  function startCoroutineUnintercepted_0(_this__u8e3s4, receiver, completion) {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp = tmp$ret$3;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$5;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$4);
          tmp$ret$5 = Unit_getInstance();
          tmp$ret$6 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$8;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$7);
        tmp$ret$8 = Unit_getInstance();
      }
    }
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    tmp$ret$0 = completion;
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$1);
        tmp$ret$2 = Unit_getInstance();
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
      actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.get_context_h02k06_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function startCoroutineUndispatched_0(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.get_context_h02k06_k$();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function get_NOT_SELECTED() {
    init_properties_Select_kt_rcehwi();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function get_ALREADY_SELECTED() {
    init_properties_Select_kt_rcehwi();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function get_UNDECIDED_0() {
    init_properties_Select_kt_rcehwi();
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function get_RESUMED_0() {
    init_properties_Select_kt_rcehwi();
    return RESUMED_0;
  }
  var RESUMED_0;
  function get_selectOpSequenceNumber() {
    init_properties_Select_kt_rcehwi();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function SelectInstance() {
  }
  SelectInstance.$metadata$ = interfaceMeta('SelectInstance');
  function _get_number__4pkqn6($this) {
    return $this.number_1;
  }
  function SeqNumber() {
    this.number_1 = atomic$long$1(new Long(1, 0));
  }
  SeqNumber.prototype.next_20eer_k$ = function () {
    return this.number_1.atomicfu$incrementAndGet$long();
  };
  SeqNumber.$metadata$ = classMeta('SeqNumber');
  function select(builder, $cont) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.selects.select.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var scope = new SelectBuilderImpl(tmp0__anonymous__q1qw7t);
    try {
      builder(scope);
    } catch ($p) {
      if ($p instanceof Error) {
        scope.handleBuilderException_9aaf9h_k$($p);
      } else {
        throw $p;
      }
    }
    tmp$ret$0 = scope.getResult_clfhg3_k$();
    return tmp$ret$0;
  }
  function SelectBuilder() {
  }
  SelectBuilder.$metadata$ = interfaceMeta('SelectBuilder');
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = interfaceMeta('SelectClause1');
  function prepareSelectOp($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.impl_1._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.selects.AtomicSelectOp.prepareSelectOp.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (tmp1__anonymous__uwfjfc === $this)
        return null;
      else {
        if (tmp1__anonymous__uwfjfc instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.perform_8emi3i_k$($this.impl_1);
        } else {
          if (tmp1__anonymous__uwfjfc === get_NOT_SELECTED()) {
            if ($this.impl_1._state_1.atomicfu$compareAndSet(get_NOT_SELECTED(), $this))
              return null;
          } else {
            return get_ALREADY_SELECTED();
          }
        }
      }
    }
  }
  function undoPrepare($this) {
    $this.impl_1._state_1.atomicfu$compareAndSet($this, get_NOT_SELECTED());
  }
  function completeSelect($this, failure) {
    var selectSuccess = failure == null;
    var update = selectSuccess ? null : get_NOT_SELECTED();
    if ($this.impl_1._state_1.atomicfu$compareAndSet($this, update)) {
      if (selectSuccess) {
        doAfterSelect($this.impl_1);
      }
    }
  }
  function _get_uCont__b1l76e($this) {
    return $this.uCont_1;
  }
  function _get__state__37adl3_2($this) {
    return $this._state_1;
  }
  function _get__result__la4wut($this) {
    return $this._result_1;
  }
  function _get__parentHandle__f9kzhc_0($this) {
    return $this._parentHandle_1;
  }
  function _set_parentHandle__bde57_0($this, value) {
    $this._parentHandle_1.value_1 = value;
  }
  function _get_parentHandle__f8dcex_0($this) {
    return $this._parentHandle_1.value_1;
  }
  function doResume($this, value, block) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._result_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (tmp1__anonymous__uwfjfc === get_UNDECIDED_0()) {
        var update = value();
        if ($this._result_1.atomicfu$compareAndSet(get_UNDECIDED_0(), update))
          return Unit_getInstance();
      } else if (tmp1__anonymous__uwfjfc === get_COROUTINE_SUSPENDED()) {
        if ($this._result_1.atomicfu$compareAndSet(get_COROUTINE_SUSPENDED(), get_RESUMED_0())) {
          block();
          return Unit_getInstance();
        }
      } else
        throw IllegalStateException_init_$Create$('Already resumed');
    }
  }
  function initCancellability($this) {
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new SelectOnCancelling($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var newRegistration = parent.invokeOnCompletion$default_7q548c_k$(true, false, tmp$ret$1, 2, null);
    _set_parentHandle__bde57_0($this, newRegistration);
    if ($this.get_isSelected_dl432q_k$()) {
      newRegistration.dispose_3n44we_k$();
    }
  }
  function SelectOnCancelling($outer) {
    this.$this_1 = $outer;
    JobCancellingNode.call(this);
  }
  SelectOnCancelling.prototype.invoke_7fb7sc_k$ = function (cause) {
    if (this.$this_1.trySelect_1ivjiv_k$()) {
      this.$this_1.resumeSelectWithException_xs2ljz_k$(this.get_job_18j2r0_k$().getCancellationException_8i1q6u_k$());
    }
  };
  SelectOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  SelectOnCancelling.$metadata$ = classMeta('SelectOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function doAfterSelect($this) {
    var tmp0_safe_receiver = _get_parentHandle__f8dcex_0($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dispose_3n44we_k$();
    }
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = $this._next_1;
    while (!equals(cur, $this)) {
      if (cur instanceof DisposeNode) {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doAfterSelect.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        tmp0__anonymous__q1qw7t.handle_1.dispose_3n44we_k$();
      }
      cur = cur._next_1;
    }
  }
  function PairSelectOp(otherOp) {
    OpDescriptor.call(this);
    this.otherOp_1 = otherOp;
  }
  PairSelectOp.prototype.get_otherOp_hou6zc_k$ = function () {
    return this.otherOp_1;
  };
  PairSelectOp.prototype.perform_8emi3i_k$ = function (affected) {
    var impl = affected instanceof SelectBuilderImpl ? affected : THROW_CCE();
    this.otherOp_1.finishPrepare_o9c8d9_k$();
    var decision = this.otherOp_1.atomicOp_1.decide_ydi1rd_k$(null);
    var update = decision == null ? this.otherOp_1.desc_1 : get_NOT_SELECTED();
    impl._state_1.atomicfu$compareAndSet(this, update);
    return decision;
  };
  PairSelectOp.prototype.get_atomicOp_p2pkuj_k$ = function () {
    return this.otherOp_1.atomicOp_1;
  };
  PairSelectOp.$metadata$ = classMeta('PairSelectOp', undefined, undefined, undefined, undefined, OpDescriptor.prototype);
  function AtomicSelectOp(impl, desc) {
    AtomicOp.call(this);
    this.impl_1 = impl;
    this.desc_1 = desc;
    this.opSequence_1 = get_selectOpSequenceNumber().next_20eer_k$();
    this.desc_1.atomicOp_1 = this;
  }
  AtomicSelectOp.prototype.get_impl_woo0o9_k$ = function () {
    return this.impl_1;
  };
  AtomicSelectOp.prototype.get_desc_woknve_k$ = function () {
    return this.desc_1;
  };
  AtomicSelectOp.prototype.get_opSequence_bttwhh_k$ = function () {
    return this.opSequence_1;
  };
  AtomicSelectOp.prototype.prepare_f0a9ag_k$ = function (affected) {
    if (affected == null) {
      var tmp0_safe_receiver = prepareSelectOp(this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    try {
      return this.desc_1.prepare_lz7jjr_k$(this);
    } catch ($p) {
      if ($p instanceof Error) {
        if (affected == null) {
          undoPrepare(this);
        }
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  AtomicSelectOp.prototype.prepare_gq68ys_k$ = function (affected) {
    return this.prepare_f0a9ag_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE());
  };
  AtomicSelectOp.prototype.complete_rmzwiy_k$ = function (affected, failure) {
    completeSelect(this, failure);
    this.desc_1.complete_b09hpj_k$(this, failure);
  };
  AtomicSelectOp.prototype.complete_fye4ce_k$ = function (affected, failure) {
    return this.complete_rmzwiy_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), failure);
  };
  AtomicSelectOp.prototype.toString = function () {
    return 'AtomicSelectOp(sequence=' + toString_0(this.opSequence_1) + ')';
  };
  AtomicSelectOp.$metadata$ = classMeta('AtomicSelectOp', undefined, undefined, undefined, undefined, AtomicOp.prototype);
  function DisposeNode(handle) {
    LinkedListNode.call(this);
    this.handle_1 = handle;
  }
  DisposeNode.prototype.get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  DisposeNode.$metadata$ = classMeta('DisposeNode', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function _no_name_provided__qut3iv_0(this$0, $block) {
    this.this$0__1 = this$0;
    this.$block_1 = $block;
  }
  _no_name_provided__qut3iv_0.prototype.run_mw4iiu_k$ = function () {
    // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.onTimeout.<anonymous>' call
    if (this.this$0__1.trySelect_1ivjiv_k$()) {
      startCoroutineCancellable_0(this.$block_1, this.this$0__1.get_completion_t4gxwb_k$());
    }
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Runnable]);
  function SelectBuilderImpl(uCont) {
    LinkedListHead.call(this);
    this.uCont_1 = uCont;
    this._state_1 = atomic$ref$1(get_NOT_SELECTED());
    this._result_1 = atomic$ref$1(get_UNDECIDED_0());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  SelectBuilderImpl.prototype.get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  SelectBuilderImpl.prototype.getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  SelectBuilderImpl.prototype.get_context_h02k06_k$ = function () {
    return this.uCont_1.get_context_h02k06_k$();
  };
  SelectBuilderImpl.prototype.get_completion_t4gxwb_k$ = function () {
    return this;
  };
  SelectBuilderImpl.prototype.resumeWith_4vzby1_k$ = function (result) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume' call
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = this._result_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        if (tmp1__anonymous__uwfjfc === get_UNDECIDED_0()) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeWith.<anonymous>' call
          tmp$ret$0 = toState$default(result, null, 1, null);
          var update = tmp$ret$0;
          if (this._result_1.atomicfu$compareAndSet(get_UNDECIDED_0(), update)) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else if (tmp1__anonymous__uwfjfc === get_COROUTINE_SUSPENDED()) {
          if (this._result_1.atomicfu$compareAndSet(get_COROUTINE_SUSPENDED(), get_RESUMED_0())) {
            // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeWith.<anonymous>' call
            if (_Result___get_isFailure__impl__jpiriv(result)) {
              // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
              var tmp0_resumeWithStackTrace = this.uCont_1;
              var tmp1_resumeWithStackTrace = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
              var tmp$ret$2;
              // Inline function 'kotlin.Companion.failure' call
              var tmp0_failure = Companion_getInstance_0();
              var tmp1_failure = recoverStackTrace(tmp1_resumeWithStackTrace, tmp0_resumeWithStackTrace);
              tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
              tmp0_resumeWithStackTrace.resumeWith_s3a3yh_k$(tmp$ret$2);
            } else {
              this.uCont_1.resumeWith_s3a3yh_k$(result);
            }
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else
          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  };
  SelectBuilderImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_4vzby1_k$(result);
  };
  SelectBuilderImpl.prototype.resumeSelectWithException_xs2ljz_k$ = function (exception) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume' call
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = this._result_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.doResume.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        if (tmp1__anonymous__uwfjfc === get_UNDECIDED_0()) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeSelectWithException.<anonymous>' call
          var tmp = recoverStackTrace(exception, this.uCont_1);
          tmp$ret$0 = CompletedExceptionally_init_$Create$(tmp, false, 2, null);
          var update = tmp$ret$0;
          if (this._result_1.atomicfu$compareAndSet(get_UNDECIDED_0(), update)) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else if (tmp1__anonymous__uwfjfc === get_COROUTINE_SUSPENDED()) {
          if (this._result_1.atomicfu$compareAndSet(get_COROUTINE_SUSPENDED(), get_RESUMED_0())) {
            // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.resumeSelectWithException.<anonymous>' call
            var tmp_0 = intercepted(this.uCont_1);
            var tmp$ret$2;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance_0();
            tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
            tmp_0.resumeWith_s3a3yh_k$(tmp$ret$2);
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }
        } else
          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  };
  SelectBuilderImpl.prototype.getResult_clfhg3_k$ = function () {
    if (!this.get_isSelected_dl432q_k$()) {
      initCancellability(this);
    }
    var result = this._result_1.value_1;
    if (result === get_UNDECIDED_0()) {
      if (this._result_1.atomicfu$compareAndSet(get_UNDECIDED_0(), get_COROUTINE_SUSPENDED()))
        return get_COROUTINE_SUSPENDED();
      result = this._result_1.value_1;
    }
    if (result === get_RESUMED_0())
      throw IllegalStateException_init_$Create$('Already resumed');
    else {
      if (result instanceof CompletedExceptionally)
        throw result.cause_1;
      else {
        return result;
      }
    }
  };
  SelectBuilderImpl.prototype.handleBuilderException_9aaf9h_k$ = function (e) {
    if (this.trySelect_1ivjiv_k$()) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
      this.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      if (!(e instanceof CancellationException)) {
        var result = this.getResult_clfhg3_k$();
        var tmp;
        if (!(result instanceof CompletedExceptionally)) {
          tmp = true;
        } else {
          tmp = !(unwrap(result.cause_1) === unwrap(e));
        }
        if (tmp) {
          handleCoroutineException(this.get_context_h02k06_k$(), e);
        }
      }
    }
  };
  SelectBuilderImpl.prototype.get_isSelected_dl432q_k$ = function () {
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.<get-isSelected>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
      if (tmp1__anonymous__uwfjfc === get_NOT_SELECTED())
        return false;
      else {
        if (tmp1__anonymous__uwfjfc instanceof OpDescriptor) {
          tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
        } else {
          return true;
        }
      }
    }
    return Unit_getInstance();
  };
  SelectBuilderImpl.prototype.disposeOnSelect_lrl426_k$ = function (handle) {
    var node = new DisposeNode(handle);
    if (!this.get_isSelected_dl432q_k$()) {
      this.addLast_uyctnf_k$(node);
      if (!this.get_isSelected_dl432q_k$())
        return Unit_getInstance();
    }
    handle.dispose_3n44we_k$();
  };
  SelectBuilderImpl.prototype.trySelect_1ivjiv_k$ = function () {
    var result = this.trySelectOther_zha44u_k$(null);
    var tmp;
    if (result === get_RESUME_TOKEN()) {
      tmp = true;
    } else if (result == null) {
      tmp = false;
    } else {
      var tmp0_error = 'Unexpected trySelectIdempotent result ' + toString(result);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
    return tmp;
  };
  SelectBuilderImpl.prototype.trySelectOther_zha44u_k$ = function (otherOp) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.selects.SelectBuilderImpl.trySelectOther.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.value_1;
        if (tmp1__anonymous__uwfjfc === get_NOT_SELECTED()) {
          if (otherOp == null) {
            if (!this._state_1.atomicfu$compareAndSet(get_NOT_SELECTED(), null)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
          } else {
            var pairSelectOp = new PairSelectOp(otherOp);
            if (!this._state_1.atomicfu$compareAndSet(get_NOT_SELECTED(), pairSelectOp)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block_0;
            }
            var decision = pairSelectOp.perform_8emi3i_k$(this);
            if (!(decision === null))
              return decision;
          }
          doAfterSelect(this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1__anonymous__uwfjfc instanceof OpDescriptor) {
            if (!(otherOp == null)) {
              var otherAtomicOp = otherOp.atomicOp_1;
              var tmp;
              if (otherAtomicOp instanceof AtomicSelectOp) {
                tmp = otherAtomicOp.impl_1 === this;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlin.error' call
                throw IllegalStateException_init_$Create$('Cannot use matching select clauses on the same object');
              } else {
                if (otherAtomicOp.isEarlierThan_b5adjh_k$(tmp1__anonymous__uwfjfc)) {
                  return get_RETRY_ATOMIC();
                }
              }
            }
            tmp1__anonymous__uwfjfc.perform_8emi3i_k$(this);
          } else {
            if (otherOp == null)
              return null;
            else {
              if (tmp1__anonymous__uwfjfc === otherOp.desc_1)
                return get_RESUME_TOKEN();
              else {
                return null;
              }
            }
          }
        }
      }
    }
  };
  SelectBuilderImpl.prototype.performAtomicTrySelect_9r1u91_k$ = function (desc) {
    return (new AtomicSelectOp(this, desc)).perform_8emi3i_k$(null);
  };
  SelectBuilderImpl.prototype.toString = function () {
    return 'SelectInstance(state=' + toString(this._state_1.value_1) + ', result=' + toString(this._result_1.value_1) + ')';
  };
  SelectBuilderImpl.prototype.invoke_l7qztr_k$ = function (_this__u8e3s4, block) {
    _this__u8e3s4.registerSelectClause0_h2wst5_k$(this, block);
  };
  SelectBuilderImpl.prototype.invoke_t2zbk2_k$ = function (_this__u8e3s4, block) {
    _this__u8e3s4.registerSelectClause1_bb3j78_k$(this, block);
  };
  SelectBuilderImpl.prototype.invoke_oyp7tx_k$ = function (_this__u8e3s4, param, block) {
    _this__u8e3s4.registerSelectClause2_2icbei_k$(this, param, block);
  };
  SelectBuilderImpl.prototype.onTimeout_oq3k0u_k$ = function (timeMillis, block) {
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0) {
      if (this.trySelect_1ivjiv_k$()) {
        startCoroutineUnintercepted(block, this.get_completion_t4gxwb_k$());
      }
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.Runnable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(this, block);
    var action = tmp$ret$0;
    this.disposeOnSelect_lrl426_k$(get_delay(this.get_context_h02k06_k$()).invokeOnTimeout_sx2bqq_k$(timeMillis, action, this.get_context_h02k06_k$()));
  };
  SelectBuilderImpl.$metadata$ = classMeta('SelectBuilderImpl', [SelectBuilder, SelectInstance, Continuation, CoroutineStackFrame], undefined, undefined, undefined, LinkedListHead.prototype);
  function SelectClause2() {
  }
  SelectClause2.$metadata$ = interfaceMeta('SelectClause2');
  var properties_initialized_Select_kt_7rpl36;
  function init_properties_Select_kt_rcehwi() {
    if (properties_initialized_Select_kt_7rpl36) {
    } else {
      properties_initialized_Select_kt_7rpl36 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED_0 = new Symbol('UNDECIDED');
      RESUMED_0 = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function get_LOCK_FAIL() {
    init_properties_Mutex_kt_ho0aqz();
    return LOCK_FAIL;
  }
  var LOCK_FAIL;
  function get_UNLOCK_FAIL() {
    init_properties_Mutex_kt_ho0aqz();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function get_LOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return LOCKED;
  }
  var LOCKED;
  function get_UNLOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return UNLOCKED;
  }
  var UNLOCKED;
  function get_EMPTY_LOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function get_EMPTY_UNLOCKED() {
    init_properties_Mutex_kt_ho0aqz();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked_1 = locked;
  }
  Empty_0.prototype.get_locked_g9dxjn_k$ = function () {
    return this.locked_1;
  };
  Empty_0.prototype.toString = function () {
    return 'Empty[' + toString_0(this.locked_1) + ']';
  };
  Empty_0.$metadata$ = classMeta('Empty');
  var properties_initialized_Mutex_kt_yv4p3j;
  function init_properties_Mutex_kt_ho0aqz() {
    if (properties_initialized_Mutex_kt_yv4p3j) {
    } else {
      properties_initialized_Mutex_kt_yv4p3j = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(get_LOCKED());
      EMPTY_UNLOCKED = new Empty_0(get_UNLOCKED());
    }
  }
  function get_MAX_SPIN_CYCLES() {
    init_properties_Semaphore_kt_nhoai8();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    init_properties_Semaphore_kt_nhoai8();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    init_properties_Semaphore_kt_nhoai8();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    init_properties_Semaphore_kt_nhoai8();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    init_properties_Semaphore_kt_nhoai8();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE() {
    init_properties_Semaphore_kt_nhoai8();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  var properties_initialized_Semaphore_kt_uqcwok;
  function init_properties_Semaphore_kt_nhoai8() {
    if (properties_initialized_Semaphore_kt_uqcwok) {
    } else {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp$default('kotlinx.coroutines.semaphore.maxSpinCycles', 100, 0, 0, 12, null);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp$default('kotlinx.coroutines.semaphore.segmentSize', 16, 0, 0, 12, null);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().Default_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function get_UNDEFINED_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(context);
    return (!(combined === Dispatchers_getInstance().Default_1) ? combined.get_1pi7hg_k$(Key_getInstance()) == null : false) ? combined.plus_rgw9wi_k$(Dispatchers_getInstance().Default_1) : combined;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  function set_counter(_set____db54di) {
    counter = _set____db54di;
  }
  function get_counter() {
    return counter;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__9278zd($this, _set____db54di) {
    $this.injectedMainDispatcher_1 = _set____db54di;
  }
  function _get_injectedMainDispatcher__d6w7gb($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  Dispatchers.prototype.get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  Dispatchers.prototype.get_Main_wo5vz6_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  Dispatchers.prototype.get_Unconfined_sfvx0q_k$ = function () {
    return this.Unconfined_1;
  };
  Dispatchers.prototype.injectMain_isae1a_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  Dispatchers.prototype.resetInjectedMain_6cv6vt_k$ = function () {
    this.injectedMainDispatcher_1 = null;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__pxbc17($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  JsMainDispatcher.prototype.get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  JsMainDispatcher.prototype.get_immediate_r3y8eg_k$ = function () {
    return this.immediate_1;
  };
  JsMainDispatcher.prototype.isDispatchNeeded_fmz9vn_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  JsMainDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.dispatch_o98ux7_k$(context, block);
  };
  JsMainDispatcher.prototype.dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_ww21f6_k$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_o98ux7_k$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this.job_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.job_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.job_1, this.job_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.scheduleQueueProcessing_nyddyc_k$ = function () {
    process.nextTick(this.messageQueue_1.processQueue_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.scheduleQueueProcessing_nyddyc_k$ = function () {
    setTimeout(this.messageQueue_1.processQueue_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.get_processQueue_xqf7it_k$ = function () {
    return this.processQueue_1;
  };
  ScheduledMessageQueue.prototype.schedule_o6nex2_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nyddyc_k$();
  };
  ScheduledMessageQueue.prototype.reschedule_mh206x_k$ = function () {
    setTimeout(this.processQueue_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.get_messageQueue_gxtffx_k$ = function () {
    return this.messageQueue_1;
  };
  SetTimeoutBasedDispatcher.prototype.limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  SetTimeoutBasedDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    this.messageQueue_1.enqueue_w6uc33_k$(block);
  };
  SetTimeoutBasedDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  SetTimeoutBasedDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function _set_scheduled__8qlfaw($this, _set____db54di) {
    $this.scheduled_1 = _set____db54di;
  }
  function _get_scheduled__wzo69o($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  MessageQueue.prototype.get_yieldEvery_1qy12h_k$ = function () {
    return this.yieldEvery_1;
  };
  MessageQueue.prototype.enqueue_w6uc33_k$ = function (element) {
    this.addLast_xhfl3v_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o6nex2_k$();
    }
  };
  MessageQueue.prototype.process_mza50i_k$ = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.yieldEvery_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.removeFirstOrNull_eges3a_k$();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.run_mw4iiu_k$();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.get_isEmpty_zauvru_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mh206x_k$();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function _get_handle__ls055p_0($this) {
    return $this.handle_1;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  ClearTimeout.prototype.dispose_3n44we_k$ = function () {
    clearTimeout(this.handle_1);
  };
  ClearTimeout.prototype.invoke_7fb7sc_k$ = function (cause) {
    this.dispose_3n44we_k$();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  ClearTimeout.$metadata$ = classMeta('ClearTimeout', [DisposableHandle], undefined, undefined, undefined, CancelHandler.prototype);
  function get_MAX_DELAY() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function _get_queue__c6g84g_0($this) {
    return $this.queue_1;
  }
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.this$0__1 = this$0;
    this.$handle_1 = $handle;
  }
  WindowDispatcher$invokeOnTimeout$1.prototype.dispose_3n44we_k$ = function () {
    this.this$0__1.window_1.clearTimeout(this.$handle_1);
  };
  WindowDispatcher$invokeOnTimeout$1.$metadata$ = classMeta(undefined, [DisposableHandle]);
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  WindowDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    return this.queue_1.enqueue_w6uc33_k$(block);
  };
  WindowDispatcher.prototype.scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.prototype.invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function _get_window__ax0zxh_0($this) {
    return $this.window_1;
  }
  function _get_messageName__5th09r($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        this$0.process_mza50i_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.schedule_o6nex2_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.reschedule_mh206x_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function promise(_this__u8e3s4, context, start, block) {
    return asPromise(async(_this__u8e3s4, context, start, block));
  }
  function promise$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return promise(_this__u8e3s4, context, start, block);
  }
  function asPromise(_this__u8e3s4) {
    var promise = new Promise(asPromise$lambda(_this__u8e3s4));
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = promise;
    tmp$ret$0.deferred = _this__u8e3s4;
    return promise;
  }
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.getCompletionExceptionOrNull_snuvbb_k$();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.getCompleted_nczk2z_k$());
      }
      return Unit_getInstance();
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.invokeOnCompletion_t2apld_k$(asPromise$lambda$lambda($this_asPromise, reject, resolve));
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function Runnable_0(block) {
    return new _no_name_provided__qut3iv_1(block);
  }
  function _no_name_provided__qut3iv_1($block) {
    this.$block_1 = $block;
  }
  _no_name_provided__qut3iv_1.prototype.run_mw4iiu_k$ = function () {
    this.$block_1();
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [Runnable]);
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function afterTask(_this__u8e3s4) {
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.prototype.tryLock_hapj0a_k$ = function () {
    return true;
  };
  NoOpLock.prototype.unlock_85cgkz_k$ = function () {
  };
  NoOpLock.$metadata$ = classMeta('NoOpLock');
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.get_isEmpty_zauvru_k$ = function () {
    return this._next_1 === this;
  };
  LinkedListHead.prototype.remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  LinkedListNode.prototype.set__next_ir5h2x_k$ = function (_set____db54di) {
    this._next_1 = _set____db54di;
  };
  LinkedListNode.prototype.get__next_inmai1_k$ = function () {
    return this._next_1;
  };
  LinkedListNode.prototype.set__prev_qmwz5z_k$ = function (_set____db54di) {
    this._prev_1 = _set____db54di;
  };
  LinkedListNode.prototype.get__prev_inntnt_k$ = function () {
    return this._prev_1;
  };
  LinkedListNode.prototype.set__removed_pin64r_k$ = function (_set____db54di) {
    this._removed_1 = _set____db54di;
  };
  LinkedListNode.prototype.get__removed_p9514a_k$ = function () {
    return this._removed_1;
  };
  LinkedListNode.prototype.get_nextNode_88zlwi_k$ = function () {
    return this._next_1;
  };
  LinkedListNode.prototype.get_prevNode_i5bmvy_k$ = function () {
    return this._prev_1;
  };
  LinkedListNode.prototype.get_isRemoved_gzdz59_k$ = function () {
    return this._removed_1;
  };
  LinkedListNode.prototype.addLast_uyctnf_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  LinkedListNode.prototype.remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  LinkedListNode.prototype.removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_cbgboi_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIf_h8xph4_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIfPrev_bzlxtw_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIfPrevAndIf_gphed7_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  LinkedListNode.prototype.helpRemove_v3vfak_k$ = function () {
  };
  LinkedListNode.prototype.removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    var tmp0_check = next.removeImpl_i5v938_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      tmp$ret$0 = 'Should remove';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return next;
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function PrepareOp(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.affected_1 = affected;
    this.desc_1 = desc;
    this.atomicOp_1 = atomicOp;
  }
  PrepareOp.prototype.get_affected_lutt4z_k$ = function () {
    return this.affected_1;
  };
  PrepareOp.prototype.get_desc_woknve_k$ = function () {
    return this.desc_1;
  };
  PrepareOp.prototype.get_atomicOp_p2pkuj_k$ = function () {
    return this.atomicOp_1;
  };
  PrepareOp.prototype.perform_8emi3i_k$ = function (affected) {
    return null;
  };
  PrepareOp.prototype.finishPrepare_o9c8d9_k$ = function () {
  };
  PrepareOp.$metadata$ = classMeta('PrepareOp', undefined, undefined, undefined, undefined, OpDescriptor.prototype);
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  AbstractAtomicDesc.prototype.onPrepare_soaf0c_k$ = function (prepareOp) {
    this.finishPrepare_kkga2x_k$(prepareOp);
    return null;
  };
  AbstractAtomicDesc.prototype.onRemoved_gagg6z_k$ = function (affected) {
  };
  AbstractAtomicDesc.prototype.prepare_lz7jjr_k$ = function (op) {
    var affected = this.get_affectedNode_2377z5_k$();
    var failure = this.failure_mowj19_k$(affected);
    if (!(failure == null))
      return failure;
    return this.onPrepare_soaf0c_k$(new PrepareOp(affected, this, op));
  };
  AbstractAtomicDesc.prototype.complete_b09hpj_k$ = function (op, failure) {
    return this.onComplete_9ma4gp_k$();
  };
  AbstractAtomicDesc.prototype.failure_mowj19_k$ = function (affected) {
    return null;
  };
  AbstractAtomicDesc.prototype.retry_84e02v_k$ = function (affected, next) {
    return false;
  };
  AbstractAtomicDesc.$metadata$ = classMeta('AbstractAtomicDesc', undefined, undefined, undefined, undefined, AtomicDesc.prototype);
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.queue_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4._next_1;
    tmp.affectedNode_1 = tmp$ret$0;
  }
  RemoveFirstDesc.prototype.get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  RemoveFirstDesc.prototype.get_result_iyg5d2_k$ = function () {
    var tmp = this.get_affectedNode_2377z5_k$();
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  RemoveFirstDesc.prototype.get_affectedNode_2377z5_k$ = function () {
    return this.affectedNode_1;
  };
  RemoveFirstDesc.prototype.finishPrepare_kkga2x_k$ = function (prepareOp) {
  };
  RemoveFirstDesc.prototype.onComplete_9ma4gp_k$ = function () {
    this.queue_1.removeFirstOrNull_eges3a_k$();
  };
  RemoveFirstDesc.prototype.finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  RemoveFirstDesc.$metadata$ = classMeta('RemoveFirstDesc', undefined, undefined, undefined, undefined, AbstractAtomicDesc.prototype);
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this.node_1 = node;
  }
  AddLastDesc.prototype.get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  AddLastDesc.prototype.get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  AddLastDesc.prototype.get_affectedNode_2377z5_k$ = function () {
    return this.queue_1._prev_1;
  };
  AddLastDesc.prototype.finishPrepare_kkga2x_k$ = function (prepareOp) {
  };
  AddLastDesc.prototype.onComplete_9ma4gp_k$ = function () {
    return this.queue_1.addLast_uyctnf_k$(this.node_1);
  };
  AddLastDesc.prototype.finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  AddLastDesc.$metadata$ = classMeta('AddLastDesc', undefined, undefined, undefined, undefined, AbstractAtomicDesc.prototype);
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $cont) {
    throw exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__lx0xdg_0($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  CommonThreadLocal.prototype.get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_hda1d2_k$ = function (value) {
    this.value_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  JobSupport.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  JobSupport.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  JobSupport.prototype.cancel_2kogtl_k$ = cancel;
  JobSupport.prototype.plus_ee14jq_k$ = plus_0;
  JobSupport.prototype.plus_rgw9wi_k$ = plus;
  JobSupport.prototype.get_1pi7hg_k$ = get;
  JobSupport.prototype.fold_6dbyow_k$ = fold;
  JobSupport.prototype.minusKey_y21q55_k$ = minusKey;
  AbstractCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  AbstractCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  AbstractCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  AbstractCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  AbstractCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  AbstractCoroutine.prototype.plus_rgw9wi_k$ = plus;
  AbstractCoroutine.prototype.get_1pi7hg_k$ = get;
  AbstractCoroutine.prototype.fold_6dbyow_k$ = fold;
  AbstractCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  StandaloneCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  StandaloneCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  StandaloneCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  StandaloneCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  StandaloneCoroutine.prototype.plus_rgw9wi_k$ = plus;
  StandaloneCoroutine.prototype.get_1pi7hg_k$ = get;
  StandaloneCoroutine.prototype.fold_6dbyow_k$ = fold;
  StandaloneCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  LazyStandaloneCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  LazyStandaloneCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  LazyStandaloneCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  LazyStandaloneCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  LazyStandaloneCoroutine.prototype.plus_rgw9wi_k$ = plus;
  LazyStandaloneCoroutine.prototype.get_1pi7hg_k$ = get;
  LazyStandaloneCoroutine.prototype.fold_6dbyow_k$ = fold;
  LazyStandaloneCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  DeferredCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  DeferredCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  DeferredCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  DeferredCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  DeferredCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  DeferredCoroutine.prototype.plus_rgw9wi_k$ = plus;
  DeferredCoroutine.prototype.get_1pi7hg_k$ = get;
  DeferredCoroutine.prototype.fold_6dbyow_k$ = fold;
  DeferredCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  LazyDeferredCoroutine.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  LazyDeferredCoroutine.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  LazyDeferredCoroutine.prototype.cancel_2kogtl_k$ = cancel;
  LazyDeferredCoroutine.prototype.plus_ee14jq_k$ = plus_0;
  LazyDeferredCoroutine.prototype.plus_rgw9wi_k$ = plus;
  LazyDeferredCoroutine.prototype.get_1pi7hg_k$ = get;
  LazyDeferredCoroutine.prototype.fold_6dbyow_k$ = fold;
  LazyDeferredCoroutine.prototype.minusKey_y21q55_k$ = minusKey;
  CancellableContinuationImpl.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  CancellableContinuationImpl.prototype.tryResume$default_sti3on_k$ = tryResume$default;
  CoroutineDispatcher.prototype.get_1pi7hg_k$ = get_0;
  CoroutineDispatcher.prototype.fold_6dbyow_k$ = fold;
  CoroutineDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  CoroutineDispatcher.prototype.plus_rgw9wi_k$ = plus;
  _no_name_provided__qut3iv.prototype.get_1pi7hg_k$ = get;
  _no_name_provided__qut3iv.prototype.fold_6dbyow_k$ = fold;
  _no_name_provided__qut3iv.prototype.minusKey_y21q55_k$ = minusKey;
  _no_name_provided__qut3iv.prototype.plus_rgw9wi_k$ = plus;
  CoroutineName.prototype.get_1pi7hg_k$ = get;
  CoroutineName.prototype.fold_6dbyow_k$ = fold;
  CoroutineName.prototype.minusKey_y21q55_k$ = minusKey;
  CoroutineName.prototype.plus_rgw9wi_k$ = plus;
  EventLoop.prototype.plus_rgw9wi_k$ = plus;
  EventLoop.prototype.get_1pi7hg_k$ = get_0;
  EventLoop.prototype.fold_6dbyow_k$ = fold;
  EventLoop.prototype.minusKey_y21q55_k$ = minusKey_0;
  AwaitContinuation.prototype.cancel$default_5qyvia_k$ = cancel$default_1;
  AwaitContinuation.prototype.tryResume$default_sti3on_k$ = tryResume$default;
  JobImpl.prototype.invokeOnCompletion$default_7q548c_k$ = invokeOnCompletion$default;
  JobImpl.prototype.cancel$default_bm1z3z_k$ = cancel$default;
  JobImpl.prototype.cancel$default_5qyvia_k$ = cancel$default_0;
  JobImpl.prototype.cancel_2kogtl_k$ = cancel;
  JobImpl.prototype.plus_ee14jq_k$ = plus_0;
  JobImpl.prototype.plus_rgw9wi_k$ = plus;
  JobImpl.prototype.get_1pi7hg_k$ = get;
  JobImpl.prototype.fold_6dbyow_k$ = fold;
  JobImpl.prototype.minusKey_y21q55_k$ = minusKey;
  MainCoroutineDispatcher.prototype.plus_rgw9wi_k$ = plus;
  MainCoroutineDispatcher.prototype.get_1pi7hg_k$ = get_0;
  MainCoroutineDispatcher.prototype.fold_6dbyow_k$ = fold;
  MainCoroutineDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  Unconfined.prototype.plus_rgw9wi_k$ = plus;
  Unconfined.prototype.get_1pi7hg_k$ = get_0;
  Unconfined.prototype.fold_6dbyow_k$ = fold;
  Unconfined.prototype.minusKey_y21q55_k$ = minusKey_0;
  YieldContext.prototype.get_1pi7hg_k$ = get;
  YieldContext.prototype.fold_6dbyow_k$ = fold;
  YieldContext.prototype.minusKey_y21q55_k$ = minusKey;
  YieldContext.prototype.plus_rgw9wi_k$ = plus;
  Itr.prototype.next0_nshvhy_k$ = next0;
  AbstractSendChannel.prototype.close$default_jao18g_k$ = close$default;
  AbstractChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  AbstractChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  AbstractChannel.prototype.close$default_jao18g_k$ = close$default;
  AbstractChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  AbstractChannel.prototype.poll_21vi7_k$ = poll;
  AbstractChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  AbstractChannel.prototype.get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  ArrayChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  ArrayChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  ArrayChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  ArrayChannel.prototype.close$default_jao18g_k$ = close$default;
  ArrayChannel.prototype.poll_21vi7_k$ = poll;
  ArrayChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  ArrayChannel.prototype.get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  ConflatedChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  ConflatedChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  ConflatedChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  ConflatedChannel.prototype.close$default_jao18g_k$ = close$default;
  ConflatedChannel.prototype.poll_21vi7_k$ = poll;
  ConflatedChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  ConflatedChannel.prototype.get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  LinkedListChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  LinkedListChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  LinkedListChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  LinkedListChannel.prototype.close$default_jao18g_k$ = close$default;
  LinkedListChannel.prototype.poll_21vi7_k$ = poll;
  LinkedListChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  LinkedListChannel.prototype.get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  RendezvousChannel.prototype.cancel$default_5qyvia_k$ = cancel$default_3;
  RendezvousChannel.prototype.cancel$default_bm1z3z_k$ = cancel$default_2;
  RendezvousChannel.prototype.cancel_2kogtl_k$ = cancel_0;
  RendezvousChannel.prototype.close$default_jao18g_k$ = close$default;
  RendezvousChannel.prototype.poll_21vi7_k$ = poll;
  RendezvousChannel.prototype.receiveOrNull_5cvr9l_k$ = receiveOrNull;
  RendezvousChannel.prototype.get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  LimitedDispatcher.prototype.plus_rgw9wi_k$ = plus;
  LimitedDispatcher.prototype.get_1pi7hg_k$ = get_0;
  LimitedDispatcher.prototype.fold_6dbyow_k$ = fold;
  LimitedDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  SelectBuilderImpl.prototype.invoke_inztx3_k$ = invoke;
  JsMainDispatcher.prototype.plus_rgw9wi_k$ = plus;
  JsMainDispatcher.prototype.get_1pi7hg_k$ = get_0;
  JsMainDispatcher.prototype.fold_6dbyow_k$ = fold;
  JsMainDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  UnconfinedEventLoop.prototype.plus_rgw9wi_k$ = plus;
  UnconfinedEventLoop.prototype.get_1pi7hg_k$ = get_0;
  UnconfinedEventLoop.prototype.fold_6dbyow_k$ = fold;
  UnconfinedEventLoop.prototype.minusKey_y21q55_k$ = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.plus_rgw9wi_k$ = plus;
  SetTimeoutBasedDispatcher.prototype.get_1pi7hg_k$ = get_0;
  SetTimeoutBasedDispatcher.prototype.fold_6dbyow_k$ = fold;
  SetTimeoutBasedDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.delay_sw4t2e_k$ = delay;
  NodeDispatcher.prototype.plus_rgw9wi_k$ = plus;
  NodeDispatcher.prototype.get_1pi7hg_k$ = get_0;
  NodeDispatcher.prototype.fold_6dbyow_k$ = fold;
  NodeDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  NodeDispatcher.prototype.delay_sw4t2e_k$ = delay;
  SetTimeoutDispatcher.prototype.plus_rgw9wi_k$ = plus;
  SetTimeoutDispatcher.prototype.get_1pi7hg_k$ = get_0;
  SetTimeoutDispatcher.prototype.fold_6dbyow_k$ = fold;
  SetTimeoutDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  SetTimeoutDispatcher.prototype.delay_sw4t2e_k$ = delay;
  WindowDispatcher.prototype.plus_rgw9wi_k$ = plus;
  WindowDispatcher.prototype.get_1pi7hg_k$ = get_0;
  WindowDispatcher.prototype.fold_6dbyow_k$ = fold;
  WindowDispatcher.prototype.minusKey_y21q55_k$ = minusKey_0;
  WindowDispatcher.prototype.delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  RECEIVE_THROWS_ON_CLOSE = 0;
  RECEIVE_RESULT = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = delay;
  _.$_$.c = cancelAndJoin;
  _.$_$.d = yield_0;
  _.$_$.e = Channel$default;
  _.$_$.f = cancel$default_0;
  _.$_$.g = cancel$default;
  _.$_$.h = invokeOnCompletion$default;
  _.$_$.i = cancel$default_4;
  _.$_$.j = launch$default;
  _.$_$.k = promise$default;
  _.$_$.l = Factory_getInstance;
  _.$_$.m = Key_getInstance_1;
  _.$_$.n = Dispatchers_getInstance;
  _.$_$.o = GlobalScope_getInstance;
  _.$_$.p = ThreadSafeHeapNode;
  _.$_$.q = ThreadSafeHeap;
  _.$_$.r = unwrap;
  _.$_$.s = SelectBuilderImpl;
  _.$_$.t = AbstractCoroutine;
  _.$_$.u = CoroutineDispatcher;
  _.$_$.v = CoroutineExceptionHandler;
  _.$_$.w = CoroutineName;
  _.$_$.x = CoroutineScope_0;
  _.$_$.y = CoroutineScope;
  _.$_$.z = get_DefaultDelay;
  _.$_$.a1 = Delay;
  _.$_$.b1 = DisposableHandle;
  _.$_$.c1 = cancel;
  _.$_$.d1 = plus_0;
  _.$_$.e1 = JobImpl;
  _.$_$.f1 = MainCoroutineDispatcher;
  _.$_$.g1 = Runnable;
  _.$_$.h1 = handleCoroutineException;
  _.$_$.i1 = get_isActive;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
