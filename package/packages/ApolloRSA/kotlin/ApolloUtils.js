(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.g3;
  var arrayCopy = kotlin_kotlin.$_$.l3;
  var toCharArray = kotlin_kotlin.$_$.o7;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.m1;
  var charArray = kotlin_kotlin.$_$.b6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.r1;
  var get_indices = kotlin_kotlin.$_$.d4;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.o1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.k1;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.l1;
  var toByte = kotlin_kotlin.$_$.v6;
  var concatToString = kotlin_kotlin.$_$.j7;
  var interfaceMeta = kotlin_kotlin.$_$.j6;
  var toString = kotlin_kotlin.$_$.y6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var chunked = kotlin_kotlin.$_$.i7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toInt = kotlin_kotlin.$_$.r7;
  var toByteArray = kotlin_kotlin.$_$.t4;
  //endregion
  //region block: pre-declaration
  //endregion
  function padStart(_this__u8e3s4, length, padValue) {
    var tmp;
    if (_this__u8e3s4.length >= length) {
      tmp = _this__u8e3s4;
    } else {
      var tmp_0 = 0;
      var tmp_1 = length;
      var tmp_2 = new Int8Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        var tmp$ret$0;
        // Inline function 'io.iohk.atala.prism.apollo.utils.padStart.<anonymous>' call
        tmp$ret$0 = padValue;
        tmp_2[tmp_3] = tmp$ret$0;
        tmp_0 = tmp_0 + 1 | 0;
      }
      var result = tmp_2;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = length - _this__u8e3s4.length | 0;
      var tmp1_copyInto = _this__u8e3s4.length;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$2 = tmp$ret$1;
      var tmp_4 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = result;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_4, tmp$ret$4, tmp0_copyInto, 0, tmp1_copyInto);
      tmp$ret$5 = result;
      tmp = result;
    }
    return tmp;
  }
  function toHex(_this__u8e3s4) {
    var HEX_ARRAY = toCharArray('0123456789abcdef');
    var tmp$ret$2;
    // Inline function 'kotlin.collections.toUByteArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp$ret$2 = _UByteArray___init__impl__ip4y9n(tmp$ret$1);
    var ubytes = tmp$ret$2;
    var hexChars = charArray(imul(_this__u8e3s4.length, 2));
    var tmp$ret$3;
    // Inline function 'kotlin.collections.indices' call
    tmp$ret$3 = get_indices(_UByteArray___get_storage__impl__d4kctt(ubytes));
    var progression = tmp$ret$3;
    var inductionVariable = progression.first_1;
    var last = progression.last_1;
    if (inductionVariable <= last)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$7;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$6;
        // Inline function 'kotlin.UByte.and' call
        var tmp0_and = UByteArray__get_impl_t5f3hv(ubytes, j);
        var tmp$ret$4;
        // Inline function 'kotlin.toUByte' call
        tmp$ret$4 = _UByte___init__impl__g9hnc4(-1);
        var tmp1_and = tmp$ret$4;
        var tmp$ret$5;
        // Inline function 'kotlin.experimental.and' call
        var tmp0_and_0 = _UByte___get_data__impl__jof9qr(tmp0_and);
        var tmp1_and_0 = _UByte___get_data__impl__jof9qr(tmp1_and);
        tmp$ret$5 = toByte(tmp0_and_0 & tmp1_and_0);
        tmp$ret$6 = _UByte___init__impl__g9hnc4(tmp$ret$5);
        var tmp2_toInt = tmp$ret$6;
        tmp$ret$7 = _UByte___get_data__impl__jof9qr(tmp2_toInt) & 255;
        var v = tmp$ret$7;
        hexChars[imul(j, 2)] = HEX_ARRAY[v >>> 4 | 0];
        hexChars[imul(j, 2) + 1 | 0] = HEX_ARRAY[v & 15];
      }
       while (!(j === last));
    return concatToString(hexChars);
  }
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
  function toArrayBuffer(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1.buffer;
  }
  function toByteArray_0(_this__u8e3s4) {
    var byteArray = new Int8Array(_this__u8e3s4.length);
    var inductionVariable = 0;
    var last = byteArray.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'js.core.get' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = _this__u8e3s4;
        tmp$ret$1 = tmp$ret$0[i];
        byteArray[i] = tmp$ret$1;
      }
       while (inductionVariable <= last);
    return byteArray;
  }
  function asUint8Array(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    var tmp0_run = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.iohk.atala.prism.apollo.utils.asUint8Array.<anonymous>' call
    tmp$ret$2 = new Uint8Array(tmp0_run.buffer, tmp0_run.byteOffset, tmp0_run.length);
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function toByteArray_1(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = new Int8Array(_this__u8e3s4);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
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
  _.$_$.a = NativeTypeInterface;
  _.$_$.b = asUint8Array;
  _.$_$.c = decodeHex;
  _.$_$.d = padStart;
  _.$_$.e = toArrayBuffer;
  _.$_$.f = toByteArray_1;
  _.$_$.g = toByteArray_0;
  _.$_$.h = toHex;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloUtils.js.map
