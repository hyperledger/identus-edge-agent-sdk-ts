(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toLong = kotlin_kotlin.$_$.w1;
  var Long = kotlin_kotlin.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.u1;
  var interfaceMeta = kotlin_kotlin.$_$.o1;
  //endregion
  //region block: pre-declaration
  //endregion
  function VarInt() {
    VarInt_instance = this;
  }
  VarInt.prototype.write_d4cz2a_k$ = function (value, byteBuffer) {
    var value_0 = value;
    while (!toLong(value_0 & -128).equals(new Long(0, 0))) {
      byteBuffer.writeByte_fjn38a_k$(value_0 & 127 | 128);
      value_0 = value_0 >>> 7 | 0;
    }
    byteBuffer.writeByte_fjn38a_k$(value_0 & 127);
  };
  VarInt.prototype.read_big65_k$ = function (byteBuffer) {
    var value = 0;
    var i = 0;
    var b = 0;
    $l$loop: while (true) {
      var tmp;
      if (byteBuffer.size_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = byteBuffer.readByte_ectjk2_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'io.iohk.atala.prism.apollo.varint.VarInt.read.<anonymous>' call
        b = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = !((tmp$ret$0 & 128) === 0);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      value = value | (b & 127) << i;
      i = i + 7 | 0;
      if (i > 35) {
        throw IllegalArgumentException_init_$Create$('Variable length quantity is too long');
      }
    }
    value = value | b << i;
    return value;
  };
  VarInt.$metadata$ = objectMeta('VarInt', [VarIntInterface]);
  var VarInt_instance;
  function VarInt_getInstance() {
    if (VarInt_instance == null)
      new VarInt();
    return VarInt_instance;
  }
  function VarIntInterface() {
  }
  VarIntInterface.$metadata$ = interfaceMeta('VarIntInterface');
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=ApolloVarInt.js.map
