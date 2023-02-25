(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-kotlin-test-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-kotlin-test-js-ir'.");
    }
    root['kotlin-kotlin-test-js-ir'] = factory(typeof this['kotlin-kotlin-test-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-test-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toString = kotlin_kotlin.$_$.d5;
  var equals = kotlin_kotlin.$_$.c3;
  var interfaceMeta = kotlin_kotlin.$_$.h3;
  var THROW_CCE = kotlin_kotlin.$_$.r4;
  var Annotation = kotlin_kotlin.$_$.h4;
  var classMeta = kotlin_kotlin.$_$.a3;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.m1;
  var objectMeta = kotlin_kotlin.$_$.p3;
  var to = kotlin_kotlin.$_$.e5;
  var mapOf = kotlin_kotlin.$_$.x1;
  //endregion
  //region block: pre-declaration
  function assertTrue(lazyMessage, actual) {
    if (!actual) {
      this.fail_o1oiv2_k$(lazyMessage());
    }
  }
  function assertTrue_0(message, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertTrue$lambda(message), actual);
  }
  function assertEquals(message, expected, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertEquals$lambda(message, expected, actual), equals(actual, expected));
  }
  function assertNotEquals(message, illegal, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNotEquals$lambda(message, actual), !equals(actual, illegal));
  }
  function assertSame(message, expected, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertSame$lambda(message, expected, actual), actual === expected);
  }
  function assertNotSame(message, illegal, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNotSame$lambda(message, actual), !(actual === illegal));
  }
  function assertNull(message, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNull$lambda(message, actual), actual == null);
  }
  function assertNotNull(message, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNotNull$lambda(message), !(actual == null));
  }
  //endregion
  function set__asserter(_set____db54di) {
    _asserter = _set____db54di;
  }
  function get__asserter() {
    return _asserter;
  }
  var _asserter;
  function Asserter$assertTrue$lambda($message) {
    return function () {
      return $message;
    };
  }
  function Asserter$assertEquals$lambda($message, $expected, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected <' + toString($expected) + '>, actual <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertNotEquals$lambda($message, $actual) {
    return function () {
      return messagePrefix($message) + ('Illegal value: <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertSame$lambda($message, $expected, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected <' + toString($expected) + '>, actual <' + toString($actual) + '> is not same.');
    };
  }
  function Asserter$assertNotSame$lambda($message, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected not same as <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertNull$lambda($message, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected value to be null, but was: <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertNotNull$lambda($message) {
    return function () {
      return messagePrefix($message) + 'Expected value to be not null.';
    };
  }
  function Asserter() {
  }
  Asserter.$metadata$ = interfaceMeta('Asserter');
  function assertTrue_1(actual, message) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp = get_asserter();
    var tmp0_elvis_lhs = message;
    return tmp.assertTrue_1hd403_k$(tmp0_elvis_lhs == null ? 'Expected value to be true.' : tmp0_elvis_lhs, actual);
  }
  function assertTrue$default(actual, message, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      message = null;
    return assertTrue_1(actual, message);
  }
  function get_asserter() {
    var tmp0_elvis_lhs = _asserter;
    return tmp0_elvis_lhs == null ? lookupAsserter() : tmp0_elvis_lhs;
  }
  function assertEquals_0(expected, actual, message) {
    get_asserter().assertEquals_f41q5w_k$(message, expected, actual);
  }
  function assertEquals$default(expected, actual, message, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      message = null;
    return assertEquals_0(expected, actual, message);
  }
  function messagePrefix(message) {
    return message == null ? '' : '' + message + '. ';
  }
  function Test() {
  }
  Test.prototype.equals = function (other) {
    if (!(other instanceof Test))
      return false;
    var tmp0_other_with_cast = other instanceof Test ? other : THROW_CCE();
    return true;
  };
  Test.prototype.hashCode = function () {
    return 0;
  };
  Test.prototype.toString = function () {
    return '@kotlin.test.Test()';
  };
  Test.$metadata$ = classMeta('Test', [Annotation]);
  function Ignore() {
  }
  Ignore.prototype.equals = function (other) {
    if (!(other instanceof Ignore))
      return false;
    var tmp0_other_with_cast = other instanceof Ignore ? other : THROW_CCE();
    return true;
  };
  Ignore.prototype.hashCode = function () {
    return 0;
  };
  Ignore.prototype.toString = function () {
    return '@kotlin.test.Ignore()';
  };
  Ignore.$metadata$ = classMeta('Ignore', [Annotation]);
  function set_assertHook(_set____db54di) {
    init_properties_DefaultJsAsserter_kt_wxz0lz();
    assertHook = _set____db54di;
  }
  function get_assertHook() {
    init_properties_DefaultJsAsserter_kt_wxz0lz();
    return assertHook;
  }
  var assertHook;
  function _set_e__db55a8($this, _set____db54di) {
    $this.e_1 = _set____db54di;
  }
  function _get_e__7mlojw($this) {
    return $this.e_1;
  }
  function _set_a__db556s($this, _set____db54di) {
    $this.a_1 = _set____db54di;
  }
  function _get_a__7mlogg($this) {
    return $this.a_1;
  }
  function failWithMessage($this, lazyMessage, cause) {
    var message = lazyMessage();
    invokeHook($this, false, DefaultJsAsserter$failWithMessage$lambda(message));
    var tmp$ret$0;
    // Inline function 'kotlin.test.AssertionErrorWithCause' call
    tmp$ret$0 = AssertionError_init_$Create$(message, cause);
    throw tmp$ret$0;
  }
  function invokeHook($this, result, lazyMessage) {
    try {
      var tmp = get_assertHook();
      tmp(new DefaultJsAsserter$invokeHook$1(result, lazyMessage));
    }finally {
      $this.e_1 = undefined;
      $this.a_1 = undefined;
    }
  }
  function DefaultJsAsserter$assertTrue$lambda($message) {
    return function () {
      return $message;
    };
  }
  function DefaultJsAsserter$assertTrue$lambda_0($message) {
    return function () {
      return $message;
    };
  }
  function DefaultJsAsserter$fail$lambda($message) {
    return function () {
      return $message;
    };
  }
  function DefaultJsAsserter$failWithMessage$lambda($message) {
    return function () {
      return $message;
    };
  }
  function DefaultJsAsserter$invokeHook$1($result, $lazyMessage) {
    this.result_1 = $result;
    this.expected_1 = DefaultJsAsserter_getInstance().e_1;
    this.actual_1 = DefaultJsAsserter_getInstance().a_1;
    this.lazyMessage_1 = $lazyMessage;
  }
  DefaultJsAsserter$invokeHook$1.prototype.get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  DefaultJsAsserter$invokeHook$1.prototype.get_expected_77p56p_k$ = function () {
    return this.expected_1;
  };
  DefaultJsAsserter$invokeHook$1.prototype.get_actual_avlm6v_k$ = function () {
    return this.actual_1;
  };
  DefaultJsAsserter$invokeHook$1.prototype.get_lazyMessage_4a501i_k$ = function () {
    return this.lazyMessage_1;
  };
  DefaultJsAsserter$invokeHook$1.$metadata$ = classMeta();
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'result', {
    configurable: true,
    get: function () {
      return this.get_result_iyg5d2_k$();
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'expected', {
    configurable: true,
    get: function () {
      return this.get_expected_77p56p_k$();
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'actual', {
    configurable: true,
    get: function () {
      return this.get_actual_avlm6v_k$();
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'lazyMessage', {
    configurable: true,
    get: function () {
      return this.get_lazyMessage_4a501i_k$();
    }
  });
  function DefaultJsAsserter() {
    DefaultJsAsserter_instance = this;
    this.e_1 = undefined;
    this.a_1 = undefined;
  }
  DefaultJsAsserter.prototype.assertEquals_f41q5w_k$ = function (message, expected, actual) {
    this.e_1 = expected;
    this.a_1 = actual;
    assertEquals.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotEquals_93hflx_k$ = function (message, illegal, actual) {
    this.e_1 = illegal;
    this.a_1 = actual;
    assertNotEquals.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertSame_gvak3p_k$ = function (message, expected, actual) {
    this.e_1 = expected;
    this.a_1 = actual;
    assertSame.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotSame_6wzam6_k$ = function (message, illegal, actual) {
    this.e_1 = illegal;
    this.a_1 = actual;
    assertNotSame.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertNull_e5yf43_k$ = function (message, actual) {
    this.a_1 = actual;
    assertNull.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertNotNull_wuch1g_k$ = function (message, actual) {
    this.a_1 = actual;
    assertNotNull.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertTrue_5alkc2_k$ = function (lazyMessage, actual) {
    if (!actual) {
      // Inline function 'kotlin.test.DefaultJsAsserter.failWithMessage' call
      var message = lazyMessage();
      invokeHook(this, false, DefaultJsAsserter$assertTrue$lambda(message));
      var tmp$ret$0;
      // Inline function 'kotlin.test.AssertionErrorWithCause' call
      tmp$ret$0 = AssertionError_init_$Create$(message, null);
      throw tmp$ret$0;
    } else {
      invokeHook(this, true, lazyMessage);
    }
  };
  DefaultJsAsserter.prototype.assertTrue_1hd403_k$ = function (message, actual) {
    this.assertTrue_5alkc2_k$(DefaultJsAsserter$assertTrue$lambda_0(message), actual);
  };
  DefaultJsAsserter.prototype.fail_o1oiv2_k$ = function (message) {
    this.fail_hhp8kv_k$(message, null);
  };
  DefaultJsAsserter.prototype.fail_hhp8kv_k$ = function (message, cause) {
    // Inline function 'kotlin.test.DefaultJsAsserter.failWithMessage' call
    var tmp$ret$0;
    // Inline function 'kotlin.test.DefaultJsAsserter.fail.<anonymous>' call
    tmp$ret$0 = message;
    var message_0 = tmp$ret$0;
    invokeHook(this, false, DefaultJsAsserter$fail$lambda(message_0));
    var tmp$ret$1;
    // Inline function 'kotlin.test.AssertionErrorWithCause' call
    tmp$ret$1 = AssertionError_init_$Create$(message_0, cause);
    throw tmp$ret$1;
  };
  DefaultJsAsserter.$metadata$ = objectMeta('DefaultJsAsserter', [Asserter]);
  var DefaultJsAsserter_instance;
  function DefaultJsAsserter_getInstance() {
    if (DefaultJsAsserter_instance == null)
      new DefaultJsAsserter();
    return DefaultJsAsserter_instance;
  }
  function assertHook$lambda(_anonymous_parameter_0__qggqh8) {
    init_properties_DefaultJsAsserter_kt_wxz0lz();
    return Unit_getInstance();
  }
  var properties_initialized_DefaultJsAsserter_kt_jkw377;
  function init_properties_DefaultJsAsserter_kt_wxz0lz() {
    if (properties_initialized_DefaultJsAsserter_kt_jkw377) {
    } else {
      properties_initialized_DefaultJsAsserter_kt_jkw377 = true;
      assertHook = assertHook$lambda;
    }
  }
  function lookupAsserter() {
    return DefaultJsAsserter_getInstance();
  }
  function AssertionErrorWithCause(message, cause) {
    return AssertionError_init_$Create$(message, cause);
  }
  function set_currentAdapter(_set____db54di) {
    init_properties_TestApi_kt_iy7e2c();
    currentAdapter = _set____db54di;
  }
  function get_currentAdapter() {
    init_properties_TestApi_kt_iy7e2c();
    return currentAdapter;
  }
  var currentAdapter;
  function get_NAME_TO_ADAPTER() {
    init_properties_TestApi_kt_iy7e2c();
    return NAME_TO_ADAPTER;
  }
  var NAME_TO_ADAPTER;
  function detectAdapter() {
    init_properties_TestApi_kt_iy7e2c();
    var frameworkAdapter = isQUnit() ? new QUnitAdapter() : isJasmine() ? new JasmineLikeAdapter() : new BareAdapter();
    var tmp;
    if (!(typeof kotlinTest === 'undefined')) {
      var adapterTransform = kotlinTest.adapterTransformer;
      var tmp_0;
      if (!(adapterTransform === null)) {
        tmp_0 = adapterTransform(frameworkAdapter);
      } else {
        tmp_0 = frameworkAdapter;
      }
      tmp = tmp_0;
    } else {
      tmp = frameworkAdapter;
    }
    return tmp;
  }
  function suite(name, ignored, suiteFn) {
    init_properties_TestApi_kt_iy7e2c();
    adapter().suite(name, ignored, suiteFn);
  }
  function adapter() {
    init_properties_TestApi_kt_iy7e2c();
    var tmp0_elvis_lhs = get_currentAdapter();
    var result = tmp0_elvis_lhs == null ? detectAdapter() : tmp0_elvis_lhs;
    set_currentAdapter(result);
    return result;
  }
  function test(name, ignored, testFn) {
    init_properties_TestApi_kt_iy7e2c();
    adapter().test(name, ignored, testFn);
  }
  function QUnitAdapter$_init_$ref_3ho991() {
    var l = function () {
      return new QUnitAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function JasmineLikeAdapter$_init_$ref_hb6pdw() {
    var l = function () {
      return new JasmineLikeAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function JasmineLikeAdapter$_init_$ref_hb6pdw_0() {
    var l = function () {
      return new JasmineLikeAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function JasmineLikeAdapter$_init_$ref_hb6pdw_1() {
    var l = function () {
      return new JasmineLikeAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function detectAdapter$ref() {
    var l = function () {
      return detectAdapter();
    };
    l.callableName = 'detectAdapter';
    return l;
  }
  var properties_initialized_TestApi_kt_44md0o;
  function init_properties_TestApi_kt_iy7e2c() {
    if (properties_initialized_TestApi_kt_44md0o) {
    } else {
      properties_initialized_TestApi_kt_44md0o = true;
      currentAdapter = null;
      var tmp = to('qunit', QUnitAdapter$_init_$ref_3ho991());
      var tmp_0 = to('jasmine', JasmineLikeAdapter$_init_$ref_hb6pdw());
      var tmp_1 = to('mocha', JasmineLikeAdapter$_init_$ref_hb6pdw_0());
      var tmp_2 = to('jest', JasmineLikeAdapter$_init_$ref_hb6pdw_1());
      NAME_TO_ADAPTER = mapOf([tmp, tmp_0, tmp_1, tmp_2, to('auto', detectAdapter$ref())]);
    }
  }
  function BareAdapter() {
  }
  BareAdapter.prototype.suite_9kwwb5_k$ = function (name, ignored, suiteFn) {
    if (!ignored) {
      suiteFn();
    }
  };
  BareAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_9kwwb5_k$(name, ignored, suiteFn);
  };
  BareAdapter.prototype.test_3wfk20_k$ = function (name, ignored, testFn) {
    if (!ignored) {
      testFn();
    }
  };
  BareAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_3wfk20_k$(name, ignored, testFn);
  };
  BareAdapter.$metadata$ = classMeta('BareAdapter');
  function isQUnit() {
    return typeof QUnit !== 'undefined';
  }
  function isJasmine() {
    return typeof describe === 'function' && typeof it === 'function';
  }
  function JasmineLikeAdapter() {
  }
  JasmineLikeAdapter.prototype.suite_9kwwb5_k$ = function (name, ignored, suiteFn) {
    if (ignored) {
      xdescribe(name, suiteFn);
    } else {
      describe(name, suiteFn);
    }
  };
  JasmineLikeAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_9kwwb5_k$(name, ignored, suiteFn);
  };
  JasmineLikeAdapter.prototype.test_3wfk20_k$ = function (name, ignored, testFn) {
    if (ignored) {
      xit(name, testFn);
    } else {
      it(name, testFn);
    }
  };
  JasmineLikeAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_3wfk20_k$(name, ignored, testFn);
  };
  JasmineLikeAdapter.$metadata$ = classMeta('JasmineLikeAdapter');
  function wrapTest($this, testFn) {
    return QUnitAdapter$wrapTest$lambda(testFn);
  }
  function QUnitAdapter$wrapTest$lambda$lambda($assertionsHappened, $assert) {
    return function (testResult) {
      $assertionsHappened._v = true;
      $assert.ok(testResult.result, testResult.lazyMessage());
      return Unit_getInstance();
    };
  }
  function QUnitAdapter$wrapTest$lambda($testFn) {
    return function (assert) {
      var assertionsHappened = {_v: false};
      set_assertHook(QUnitAdapter$wrapTest$lambda$lambda(assertionsHappened, assert));
      var possiblePromise = $testFn();
      var tmp;
      if (!assertionsHappened._v) {
        assertTrue_1(true, 'A test with no assertions is considered successful');
        tmp = Unit_getInstance();
      }
      return possiblePromise;
    };
  }
  function QUnitAdapter() {
    this.ignoredSuite_1 = false;
  }
  QUnitAdapter.prototype.set_ignoredSuite_iljwjq_k$ = function (_set____db54di) {
    this.ignoredSuite_1 = _set____db54di;
  };
  QUnitAdapter.prototype.get_ignoredSuite_dvl2mn_k$ = function () {
    return this.ignoredSuite_1;
  };
  QUnitAdapter.prototype.suite_9kwwb5_k$ = function (name, ignored, suiteFn) {
    var prevIgnore = this.ignoredSuite_1;
    this.ignoredSuite_1 = !!(this.ignoredSuite_1 | ignored);
    QUnit.module(name, suiteFn);
    this.ignoredSuite_1 = prevIgnore;
  };
  QUnitAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_9kwwb5_k$(name, ignored, suiteFn);
  };
  QUnitAdapter.prototype.test_3wfk20_k$ = function (name, ignored, testFn) {
    if (!!(ignored | this.ignoredSuite_1)) {
      QUnit.skip(name, wrapTest(this, testFn));
    } else {
      QUnit.test(name, wrapTest(this, testFn));
    }
  };
  QUnitAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_3wfk20_k$(name, ignored, testFn);
  };
  QUnitAdapter.$metadata$ = classMeta('QUnitAdapter');
  //region block: init
  _asserter = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = assertEquals$default;
  _.$_$.b = assertEquals_0;
  _.$_$.c = suite;
  _.$_$.d = test;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-test-js-ir.js.map
