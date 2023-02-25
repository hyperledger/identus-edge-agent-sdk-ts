(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-kotlinx-atomicfu-runtime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-kotlinx-atomicfu-runtime-js-ir'.");
    }
    root['kotlin-kotlinx-atomicfu-runtime-js-ir'] = factory(typeof this['kotlin-kotlinx-atomicfu-runtime-js-ir'] === 'undefined' ? {} : this['kotlin-kotlinx-atomicfu-runtime-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Long = kotlin_kotlin.$_$.n4;
  var Unit_getInstance = kotlin_kotlin.$_$.m1;
  var equals = kotlin_kotlin.$_$.c3;
  //endregion
  //region block: pre-declaration
  //endregion
  function atomicfu_getAndIncrement(atomicfu$getter, atomicfu$setter) {
    var oldValue = atomicfu$getter();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$0 = oldValue.plus_u6jwas_k$(new Long(1, 0));
    atomicfu$setter(tmp$ret$0);
    return oldValue;
  }
  function atomicfu_incrementAndGet(atomicfu$getter, atomicfu$setter) {
    atomicfu$setter(atomicfu$getter() + 1 | 0);
    return atomicfu$getter();
  }
  function atomicfu_getValue(atomicfu$getter, atomicfu$setter) {
    return atomicfu$getter();
  }
  function atomicfu_setValue(value, atomicfu$getter, atomicfu$setter) {
    atomicfu$setter(value);
  }
  function atomicfu_decrementAndGet(atomicfu$getter, atomicfu$setter) {
    atomicfu$setter(atomicfu$getter() - 1 | 0);
    return atomicfu$getter();
  }
  function atomicfu_getAndSet(value, atomicfu$getter, atomicfu$setter) {
    var oldValue = atomicfu$getter();
    atomicfu$setter(value);
    return oldValue;
  }
  function atomicfu_compareAndSet(expect, update, atomicfu$getter, atomicfu$setter) {
    if (equals(atomicfu$getter(), expect)) {
      atomicfu$setter(update);
      return true;
    } else {
      return false;
    }
  }
  return _;
}));

//# sourceMappingURL=kotlin-kotlinx-atomicfu-runtime-js-ir.js.map
