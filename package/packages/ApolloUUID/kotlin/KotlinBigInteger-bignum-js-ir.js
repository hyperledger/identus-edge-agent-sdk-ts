(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var log10 = Math.log10;
  var interfaceMeta = kotlin_kotlin.$_$.u7;
  var THROW_ISE = kotlin_kotlin.$_$.ia;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var Enum = kotlin_kotlin.$_$.aa;
  var classMeta = kotlin_kotlin.$_$.o7;
  var hashCode = kotlin_kotlin.$_$.t7;
  var THROW_CCE = kotlin_kotlin.$_$.ha;
  var Long = kotlin_kotlin.$_$.da;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Pair = kotlin_kotlin.$_$.fa;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.u;
  var ensureNotNull = kotlin_kotlin.$_$.ua;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.n3;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.o3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var contains = kotlin_kotlin.$_$.e9;
  var contains$default = kotlin_kotlin.$_$.h;
  var get_lastIndex = kotlin_kotlin.$_$.j9;
  var charSequenceGet = kotlin_kotlin.$_$.l7;
  var Char = kotlin_kotlin.$_$.y9;
  var equals = kotlin_kotlin.$_$.p7;
  var charSequenceLength = kotlin_kotlin.$_$.m7;
  var charArrayOf = kotlin_kotlin.$_$.j7;
  var split$default = kotlin_kotlin.$_$.j;
  var toLong = kotlin_kotlin.$_$.p8;
  var listOf = kotlin_kotlin.$_$.p5;
  var toLong_0 = kotlin_kotlin.$_$.r9;
  var numberToLong = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.n8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xa;
  var toString = kotlin_kotlin.$_$.r8;
  var Triple = kotlin_kotlin.$_$.ja;
  var numberToDouble = kotlin_kotlin.$_$.k8;
  var Companion_getInstance = kotlin_kotlin.$_$.w3;
  var until = kotlin_kotlin.$_$.z8;
  var substring = kotlin_kotlin.$_$.l9;
  var abs = kotlin_kotlin.$_$.t8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var toDouble = kotlin_kotlin.$_$.o9;
  var isNumber = kotlin_kotlin.$_$.e8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var isObject = kotlin_kotlin.$_$.f8;
  var split$default_0 = kotlin_kotlin.$_$.k;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.p3;
  var abs_0 = kotlin_kotlin.$_$.s8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t;
  var Comparable = kotlin_kotlin.$_$.z9;
  var getKClass = kotlin_kotlin.$_$.b;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t3;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var contains_0 = kotlin_kotlin.$_$.u8;
  var isEmpty = kotlin_kotlin.$_$.v8;
  var ClosedRange = kotlin_kotlin.$_$.w8;
  var Iterable = kotlin_kotlin.$_$.e4;
  var Iterator = kotlin_kotlin.$_$.f4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.f3;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.g3;
  var copyOf = kotlin_kotlin.$_$.x4;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.z2;
  var ULongArray = kotlin_kotlin.$_$.oa;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.a3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.w2;
  var numberToInt = kotlin_kotlin.$_$.l8;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.v2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.e3;
  var UByte = kotlin_kotlin.$_$.la;
  var UShort = kotlin_kotlin.$_$.qa;
  var UInt = kotlin_kotlin.$_$.na;
  var ULong = kotlin_kotlin.$_$.pa;
  var ULongArray__iterator_impl_cq4d2h = kotlin_kotlin.$_$.d3;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.x2;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.m3;
  var toByte = kotlin_kotlin.$_$.o8;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var toShort = kotlin_kotlin.$_$.q8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.z3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.j2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.a4;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.y3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.b2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.c2;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.b4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var println = kotlin_kotlin.$_$.f7;
  var UIntArray = kotlin_kotlin.$_$.ma;
  var UIntArray__hashCode_impl_hr7ost = kotlin_kotlin.$_$.p2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.t2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.u2;
  var copyOfRange = kotlin_kotlin.$_$.r4;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.n2;
  var contentEquals = kotlin_kotlin.$_$.o4;
  var UIntArray__isEmpty_impl_vd8j4n = kotlin_kotlin.$_$.q2;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.d2;
  var emptyList = kotlin_kotlin.$_$.g5;
  var UIntArray__iterator_impl_tkdv7k = kotlin_kotlin.$_$.r2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.k2;
  var addAll = kotlin_kotlin.$_$.h4;
  var takeLast = kotlin_kotlin.$_$.x5;
  var chunked = kotlin_kotlin.$_$.l4;
  var reversed = kotlin_kotlin.$_$.t5;
  var flatten = kotlin_kotlin.$_$.i5;
  var listOf_0 = kotlin_kotlin.$_$.o5;
  var plus = kotlin_kotlin.$_$.r5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var toUIntArray = kotlin_kotlin.$_$.i6;
  var copyToArray = kotlin_kotlin.$_$.d5;
  var toList = kotlin_kotlin.$_$.f6;
  var checkIndexOverflow = kotlin_kotlin.$_$.k4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.m5;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.o2;
  var take = kotlin_kotlin.$_$.z5;
  var toList_0 = kotlin_kotlin.$_$.d6;
  var UByteArray = kotlin_kotlin.$_$.ka;
  var toList_1 = kotlin_kotlin.$_$.e6;
  var UByteArray__iterator_impl_509y1p = kotlin_kotlin.$_$.g2;
  var toUByteArray = kotlin_kotlin.$_$.h6;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.l2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.m2;
  var uintCompare = kotlin_kotlin.$_$.eb;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.s2;
  var slice = kotlin_kotlin.$_$.v5;
  var uintDivide = kotlin_kotlin.$_$.fb;
  var uintRemainder = kotlin_kotlin.$_$.gb;
  var ulongDivide = kotlin_kotlin.$_$.ib;
  var ulongCompare = kotlin_kotlin.$_$.hb;
  var minOf = kotlin_kotlin.$_$.l6;
  var toString_0 = kotlin_kotlin.$_$.s9;
  var isCharSequence = kotlin_kotlin.$_$.y7;
  var reversed_0 = kotlin_kotlin.$_$.k9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var reversed_1 = kotlin_kotlin.$_$.u5;
  var drop = kotlin_kotlin.$_$.f5;
  var dropLast = kotlin_kotlin.$_$.e5;
  var NotImplementedError = kotlin_kotlin.$_$.ea;
  var copyOfRange_0 = kotlin_kotlin.$_$.s4;
  var contentEquals_0 = kotlin_kotlin.$_$.p4;
  var ULongArray__hashCode_impl_aze4wa = kotlin_kotlin.$_$.b3;
  var ULongArray__isEmpty_impl_c3yngu = kotlin_kotlin.$_$.c3;
  var longArrayOf = kotlin_kotlin.$_$.h8;
  var longArray = kotlin_kotlin.$_$.i8;
  var arrayCopy = kotlin_kotlin.$_$.i4;
  var toULongArray = kotlin_kotlin.$_$.j6;
  var slice_0 = kotlin_kotlin.$_$.w5;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.l;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.y2;
  var ulongRemainder = kotlin_kotlin.$_$.jb;
  var get_indices = kotlin_kotlin.$_$.j5;
  var toString_1 = kotlin_kotlin.$_$.t9;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.h2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.e2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.i2;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.f2;
  var get_lastIndex_1 = kotlin_kotlin.$_$.n5;
  var take_0 = kotlin_kotlin.$_$.y5;
  var reversedArray = kotlin_kotlin.$_$.s5;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.u1;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.v1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.w1;
  //endregion
  //region block: pre-declaration
  function parseString$default(string, base, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      base = 10;
    return $handler == null ? this.parseString_d68ls2_k$(string, base) : $handler(string, base);
  }
  function tryFromFloat$default(float, exactRequired, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      exactRequired = false;
    return $handler == null ? this.tryFromFloat_2gb71f_k$(float, exactRequired) : $handler(float, exactRequired);
  }
  function tryFromDouble$default(double, exactRequired, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      exactRequired = false;
    return $handler == null ? this.tryFromDouble_qi6grp_k$(double, exactRequired) : $handler(double, exactRequired);
  }
  function get_isNegative() {
    return this.signum_exb08b_k$() < 0;
  }
  function get_isPositive() {
    return this.signum_exb08b_k$() > 0;
  }
  function plus_0(other) {
    return this.getInstance_rhh4hh_k$().add_nl3k2s_k$(other);
  }
  function minus(other) {
    return this.getInstance_rhh4hh_k$().subtract_ogq3v3_k$(other);
  }
  function times(other) {
    return this.getInstance_rhh4hh_k$().multiply_cwkmht_k$(other);
  }
  function div(other) {
    return this.getInstance_rhh4hh_k$().divide_zbvjws_k$(other);
  }
  function rem(other) {
    return this.getInstance_rhh4hh_k$().remainder_px8lk0_k$(other);
  }
  function plus_1(int) {
    return this.getInstance_rhh4hh_k$().add_nl3k2s_k$(this.getCreator_y5p0ja_k$().fromInt_venwfw_k$(int));
  }
  function plus_2(long) {
    return this.getInstance_rhh4hh_k$().add_nl3k2s_k$(this.getCreator_y5p0ja_k$().fromLong_adx1cg_k$(long));
  }
  function plus_3(short) {
    return this.getInstance_rhh4hh_k$().add_nl3k2s_k$(this.getCreator_y5p0ja_k$().fromShort_4vs6zg_k$(short));
  }
  function plus_4(byte) {
    return this.getInstance_rhh4hh_k$().add_nl3k2s_k$(this.getCreator_y5p0ja_k$().fromByte_17zj7c_k$(byte));
  }
  function times_0(int) {
    return this.getInstance_rhh4hh_k$().multiply_cwkmht_k$(this.getCreator_y5p0ja_k$().fromInt_venwfw_k$(int));
  }
  function times_1(long) {
    return this.getInstance_rhh4hh_k$().multiply_cwkmht_k$(this.getCreator_y5p0ja_k$().fromLong_adx1cg_k$(long));
  }
  function times_2(short) {
    return this.getInstance_rhh4hh_k$().multiply_cwkmht_k$(this.getCreator_y5p0ja_k$().fromShort_4vs6zg_k$(short));
  }
  function times_3(byte) {
    return this.getInstance_rhh4hh_k$().multiply_cwkmht_k$(this.getCreator_y5p0ja_k$().fromByte_17zj7c_k$(byte));
  }
  function minus_0(int) {
    return this.getInstance_rhh4hh_k$().subtract_ogq3v3_k$(this.getCreator_y5p0ja_k$().fromInt_venwfw_k$(int));
  }
  function minus_1(long) {
    return this.getInstance_rhh4hh_k$().subtract_ogq3v3_k$(this.getCreator_y5p0ja_k$().fromLong_adx1cg_k$(long));
  }
  function minus_2(short) {
    return this.getInstance_rhh4hh_k$().subtract_ogq3v3_k$(this.getCreator_y5p0ja_k$().fromShort_4vs6zg_k$(short));
  }
  function minus_3(byte) {
    return this.getInstance_rhh4hh_k$().subtract_ogq3v3_k$(this.getCreator_y5p0ja_k$().fromByte_17zj7c_k$(byte));
  }
  function div_0(int) {
    return this.getInstance_rhh4hh_k$().divide_zbvjws_k$(this.getCreator_y5p0ja_k$().fromInt_venwfw_k$(int));
  }
  function div_1(long) {
    return this.getInstance_rhh4hh_k$().divide_zbvjws_k$(this.getCreator_y5p0ja_k$().fromLong_adx1cg_k$(long));
  }
  function div_2(short) {
    return this.getInstance_rhh4hh_k$().divide_zbvjws_k$(this.getCreator_y5p0ja_k$().fromShort_4vs6zg_k$(short));
  }
  function div_3(byte) {
    return this.getInstance_rhh4hh_k$().divide_zbvjws_k$(this.getCreator_y5p0ja_k$().fromByte_17zj7c_k$(byte));
  }
  function rem_0(int) {
    return this.getInstance_rhh4hh_k$().remainder_px8lk0_k$(this.getCreator_y5p0ja_k$().fromInt_venwfw_k$(int));
  }
  function rem_1(long) {
    return this.getInstance_rhh4hh_k$().remainder_px8lk0_k$(this.getCreator_y5p0ja_k$().fromLong_adx1cg_k$(long));
  }
  function rem_2(short) {
    return this.getInstance_rhh4hh_k$().remainder_px8lk0_k$(this.getCreator_y5p0ja_k$().fromShort_4vs6zg_k$(short));
  }
  function rem_3(byte) {
    return this.getInstance_rhh4hh_k$().remainder_px8lk0_k$(this.getCreator_y5p0ja_k$().fromByte_17zj7c_k$(byte));
  }
  function intValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.intValue_6699zc_k$(exactRequired) : $handler(exactRequired);
  }
  function longValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.longValue_n92i4l_k$(exactRequired) : $handler(exactRequired);
  }
  function byteValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.byteValue_uywx5d_k$(exactRequired) : $handler(exactRequired);
  }
  function shortValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.shortValue_yl9ynv_k$(exactRequired) : $handler(exactRequired);
  }
  function uintValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.uintValue_p7sneg_k$(exactRequired) : $handler(exactRequired).data_1;
  }
  function ulongValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.ulongValue_xcqapg_k$(exactRequired) : $handler(exactRequired).data_1;
  }
  function ubyteValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.ubyteValue_rrikek_k$(exactRequired) : $handler(exactRequired).data_1;
  }
  function ushortValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.ushortValue_dp7rvm_k$(exactRequired) : $handler(exactRequired).data_1;
  }
  function floatValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.floatValue_dv7hej_k$(exactRequired) : $handler(exactRequired);
  }
  function doubleValue$default(exactRequired, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exactRequired = true;
    return $handler == null ? this.doubleValue_lwfwgq_k$(exactRequired) : $handler(exactRequired);
  }
  Endianness.prototype = Object.create(Enum.prototype);
  Endianness.prototype.constructor = Endianness;
  SignificantDecider.prototype = Object.create(Enum.prototype);
  SignificantDecider.prototype.constructor = SignificantDecider;
  ScaleOps.prototype = Object.create(Enum.prototype);
  ScaleOps.prototype.constructor = ScaleOps;
  RoundingMode.prototype = Object.create(Enum.prototype);
  RoundingMode.prototype.constructor = RoundingMode;
  function toUIntArrayRepresentedAsTypedUByteArray$default(operand, endianness, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      endianness = Endianness_BIG_getInstance();
    return $handler == null ? this.toUIntArrayRepresentedAsTypedUByteArray_sumltp_k$(operand, endianness) : $handler(new UIntArray(operand), endianness);
  }
  function toUIntArrayRepresentedAsUByteArray$default(operand, endianness, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      endianness = Endianness_BIG_getInstance();
    return $handler == null ? this.toUIntArrayRepresentedAsUByteArray_bqtdno_k$(operand, endianness) : $handler(new UIntArray(operand), endianness).storage_1;
  }
  Sign.prototype = Object.create(Enum.prototype);
  Sign.prototype.constructor = Sign;
  Platform.prototype = Object.create(Enum.prototype);
  Platform.prototype.constructor = Platform;
  //endregion
  function Creator() {
  }
  Creator.$metadata$ = interfaceMeta('Creator');
  function Util() {
  }
  Util.$metadata$ = interfaceMeta('Util');
  function BigNumber() {
  }
  BigNumber.$metadata$ = interfaceMeta('BigNumber');
  function CommonBigNumberOperations() {
  }
  CommonBigNumberOperations.$metadata$ = interfaceMeta('CommonBigNumberOperations');
  function NarrowingOperations() {
  }
  NarrowingOperations.$metadata$ = interfaceMeta('NarrowingOperations');
  function ByteArraySerializable() {
  }
  ByteArraySerializable.$metadata$ = interfaceMeta('ByteArraySerializable');
  function BitwiseCapable() {
  }
  BitwiseCapable.$metadata$ = interfaceMeta('BitwiseCapable');
  function ByteArrayDeserializable() {
  }
  ByteArrayDeserializable.$metadata$ = interfaceMeta('ByteArrayDeserializable');
  var Endianness_BIG_instance;
  var Endianness_LITTLE_instance;
  function values() {
    return [Endianness_BIG_getInstance(), Endianness_LITTLE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'BIG':
        return Endianness_BIG_getInstance();
      case 'LITTLE':
        return Endianness_LITTLE_getInstance();
      default:
        Endianness_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Endianness_entriesInitialized;
  function Endianness_initEntries() {
    if (Endianness_entriesInitialized)
      return Unit_getInstance();
    Endianness_entriesInitialized = true;
    Endianness_BIG_instance = new Endianness('BIG', 0);
    Endianness_LITTLE_instance = new Endianness('LITTLE', 1);
  }
  function Endianness(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Endianness.$metadata$ = classMeta('Endianness', undefined, undefined, undefined, undefined, Enum.prototype);
  function Endianness_BIG_getInstance() {
    Endianness_initEntries();
    return Endianness_BIG_instance;
  }
  function Endianness_LITTLE_getInstance() {
    Endianness_initEntries();
    return Endianness_LITTLE_instance;
  }
  function ModularQuotientAndRemainder(quotient, remainder) {
    this.quotient_1 = quotient;
    this.remainder_1 = remainder;
  }
  ModularQuotientAndRemainder.prototype.get_quotient_ooukvo_k$ = function () {
    return this.quotient_1;
  };
  ModularQuotientAndRemainder.prototype.get_remainder_mwecu4_k$ = function () {
    return this.remainder_1;
  };
  ModularQuotientAndRemainder.prototype.component1_7eebsc_k$ = function () {
    return this.quotient_1;
  };
  ModularQuotientAndRemainder.prototype.component2_7eebsb_k$ = function () {
    return this.remainder_1;
  };
  ModularQuotientAndRemainder.prototype.copy_95exy1_k$ = function (quotient, remainder) {
    return new ModularQuotientAndRemainder(quotient, remainder);
  };
  ModularQuotientAndRemainder.prototype.copy$default_rnm228_k$ = function (quotient, remainder, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      quotient = this.quotient_1;
    if (!(($mask0 & 2) === 0))
      remainder = this.remainder_1;
    return this.copy_95exy1_k$(quotient, remainder);
  };
  ModularQuotientAndRemainder.prototype.toString = function () {
    return 'ModularQuotientAndRemainder(quotient=' + this.quotient_1 + ', remainder=' + this.remainder_1 + ')';
  };
  ModularQuotientAndRemainder.prototype.hashCode = function () {
    var result = hashCode(this.quotient_1);
    result = imul(result, 31) + hashCode(this.remainder_1) | 0;
    return result;
  };
  ModularQuotientAndRemainder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ModularQuotientAndRemainder))
      return false;
    var tmp0_other_with_cast = other instanceof ModularQuotientAndRemainder ? other : THROW_CCE();
    if (!this.quotient_1.equals(tmp0_other_with_cast.quotient_1))
      return false;
    if (!this.remainder_1.equals(tmp0_other_with_cast.remainder_1))
      return false;
    return true;
  };
  ModularQuotientAndRemainder.$metadata$ = classMeta('ModularQuotientAndRemainder');
  var SignificantDecider_FIVE_instance;
  var SignificantDecider_LESS_THAN_FIVE_instance;
  var SignificantDecider_MORE_THAN_FIVE_instance;
  function values_0() {
    return [SignificantDecider_FIVE_getInstance(), SignificantDecider_LESS_THAN_FIVE_getInstance(), SignificantDecider_MORE_THAN_FIVE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'FIVE':
        return SignificantDecider_FIVE_getInstance();
      case 'LESS_THAN_FIVE':
        return SignificantDecider_LESS_THAN_FIVE_getInstance();
      case 'MORE_THAN_FIVE':
        return SignificantDecider_MORE_THAN_FIVE_getInstance();
      default:
        SignificantDecider_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SignificantDecider_entriesInitialized;
  function SignificantDecider_initEntries() {
    if (SignificantDecider_entriesInitialized)
      return Unit_getInstance();
    SignificantDecider_entriesInitialized = true;
    SignificantDecider_FIVE_instance = new SignificantDecider('FIVE', 0);
    SignificantDecider_LESS_THAN_FIVE_instance = new SignificantDecider('LESS_THAN_FIVE', 1);
    SignificantDecider_MORE_THAN_FIVE_instance = new SignificantDecider('MORE_THAN_FIVE', 2);
  }
  function _get_double10pow__rixyp5($this) {
    return $this.double10pow_1;
  }
  function _get_maximumDouble__boa8dc($this) {
    return $this.maximumDouble_1;
  }
  function _get_leastSignificantDouble__ujhrm8($this) {
    return $this.leastSignificantDouble_1;
  }
  function _get_float10pow__736wuq($this) {
    return $this.float10pow_1;
  }
  function _get_maximumFloat__19w33j($this) {
    return $this.maximumFloat_1;
  }
  function _get_leastSignificantFloat__6sbtzz($this) {
    return $this.leastSignificantFloat_1;
  }
  function roundOrDont($this, significand, exponent, decimalMode) {
    var tmp;
    if (decimalMode.isPrecisionUnlimited_1) {
      tmp = BigDecimal_init_$Create$(significand, exponent, null, 4, null);
    } else {
      tmp = roundSignificand($this, significand, exponent, decimalMode);
    }
    return tmp;
  }
  function SignificantDecider(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SignificantDecider.$metadata$ = classMeta('SignificantDecider', undefined, undefined, undefined, undefined, Enum.prototype);
  function determineDecider($this, discarded) {
    var tmp = Companion_getInstance_6().TEN_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = discarded.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    var scale = tmp.pow_u6dvr2_k$(tmp$ret$0);
    var divrem = discarded.divrem_n4lz8w_k$(scale);
    var significant = divrem.quotient_1.abs_22cy_k$().intValue_6699zc_k$(true);
    var rest = divrem.remainder_1.abs_22cy_k$();
    var tmp_0;
    if (significant === 5) {
      var tmp_1;
      if (rest.equals(Companion_getInstance_6().ZERO_1)) {
        tmp_1 = SignificantDecider_FIVE_getInstance();
      } else {
        tmp_1 = SignificantDecider_MORE_THAN_FIVE_getInstance();
      }
      tmp_0 = tmp_1;
    } else if (significant > 5) {
      tmp_0 = SignificantDecider_MORE_THAN_FIVE_getInstance();
    } else if (significant < 5) {
      tmp_0 = SignificantDecider_LESS_THAN_FIVE_getInstance();
    } else {
      throw RuntimeException_init_$Create$("Couldn't determine decider");
    }
    return tmp_0;
  }
  function roundDiscarded($this, significand, discarded, decimalMode) {
    var toDiscard = significand.numberOfDecimalDigits_wouqvd_k$().minus_llf5ei_k$(decimalMode.decimalPrecision_1);
    var tmp;
    if (toDiscard.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var additionallyDiscarded = significand.divrem_n4lz8w_k$(Companion_getInstance_6().TEN_1.pow_u6dvr2_k$(toDiscard));
      tmp = new Pair(additionallyDiscarded.quotient_1, additionallyDiscarded.remainder_1);
    } else {
      tmp = new Pair(significand, discarded);
    }
    var tmp0_container = tmp;
    var result = tmp0_container.component1_7eebsc_k$();
    var remainder = tmp0_container.component2_7eebsb_k$();
    var tmp_0;
    if (significand.equals(Companion_getInstance_6().ZERO_1)) {
      tmp_0 = discarded.sign_1;
    } else {
      tmp_0 = significand.sign_1;
    }
    var sign = tmp_0;
    if (remainder.isZero_jihrta_k$()) {
      return result;
    }
    var decider = determineDecider($this, remainder);
    var tmp1_subject = decimalMode.roundingMode_1;
    var tmp0 = tmp1_subject.ordinal_1;
    switch (tmp0) {
      case 2:
        if (sign.equals(Sign_POSITIVE_getInstance())) {
          var tmp2 = result;
          result = tmp2.inc_28ke_k$();
        } else {
          var tmp3 = result;
          result = tmp3.dec_24n6_k$();
        }

        break;
      case 3:
        ;
        break;
      case 1:
        if (sign.equals(Sign_POSITIVE_getInstance())) {
          var tmp4 = result;
          result = tmp4.inc_28ke_k$();
        } else {
        }

        break;
      case 0:
        if (sign.equals(Sign_POSITIVE_getInstance())) {
        } else {
          var tmp5 = result;
          result = tmp5.dec_24n6_k$();
        }

        break;
      case 5:
        var tmp6_subject = sign;
        var tmp0_0 = tmp6_subject.ordinal_1;
        switch (tmp0_0) {
          case 0:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              var tmp7 = result;
              result = tmp7.inc_28ke_k$();
            }

            break;
          case 1:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              var tmp8 = result;
              result = tmp8.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 6:
        var tmp9_subject = sign;
        var tmp0_1 = tmp9_subject.ordinal_1;
        switch (tmp0_1) {
          case 0:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              var tmp10 = result;
              result = tmp10.inc_28ke_k$();
            }

            break;
          case 1:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              var tmp11 = result;
              result = tmp11.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 7:
        var tmp12_subject = sign;
        var tmp0_2 = tmp12_subject.ordinal_1;
        switch (tmp0_2) {
          case 0:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              var tmp13 = result;
              result = tmp13.inc_28ke_k$();
            }

            break;
          case 1:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              var tmp14 = result;
              result = tmp14.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 8:
        var tmp15_subject = sign;
        var tmp0_3 = tmp15_subject.ordinal_1;
        switch (tmp0_3) {
          case 0:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              var tmp16 = result;
              result = tmp16.inc_28ke_k$();
            }

            break;
          case 1:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              var tmp17 = result;
              result = tmp17.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 9:
        if (decider.equals(SignificantDecider_FIVE_getInstance())) {
          if (significand.rem_kb2195_k$(2).equals(Companion_getInstance_6().ONE_1)) {
            var tmp18_subject = sign;
            var tmp0_4 = tmp18_subject.ordinal_1;
            switch (tmp0_4) {
              case 0:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  var tmp19 = result;
                  result = tmp19.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  var tmp20 = result;
                  result = tmp20.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          } else {
            var tmp21_subject = sign;
            var tmp0_5 = tmp21_subject.ordinal_1;
            switch (tmp0_5) {
              case 0:
                if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
                  var tmp22 = result;
                  result = tmp22.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  var tmp23 = result;
                  result = tmp23.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          }
        } else if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
          if (sign.equals(Sign_POSITIVE_getInstance())) {
            var tmp24 = result;
            result = tmp24.inc_28ke_k$();
          }
          if (sign.equals(Sign_NEGATIVE_getInstance())) {
            var tmp25 = result;
            result = tmp25.dec_24n6_k$();
          }
        }

        break;
      case 10:
        if (decider.equals(SignificantDecider_FIVE_getInstance())) {
          if (significand.rem_kb2195_k$(2).equals(Companion_getInstance_6().ZERO_1)) {
            var tmp26_subject = sign;
            var tmp0_6 = tmp26_subject.ordinal_1;
            switch (tmp0_6) {
              case 0:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  var tmp27 = result;
                  result = tmp27.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  var tmp28 = result;
                  result = tmp28.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          } else {
            var tmp29_subject = sign;
            var tmp0_7 = tmp29_subject.ordinal_1;
            switch (tmp0_7) {
              case 0:
                if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
                  var tmp30 = result;
                  result = tmp30.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  var tmp31 = result;
                  result = tmp31.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          }
        } else if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
          if (sign.equals(Sign_POSITIVE_getInstance())) {
            var tmp32 = result;
            result = tmp32.inc_28ke_k$();
          }
          if (sign.equals(Sign_NEGATIVE_getInstance())) {
            var tmp33 = result;
            result = tmp33.dec_24n6_k$();
          }
        }

        break;
      case 4:
        throw ArithmeticException_init_$Create$('Non-terminating result of division operation. Specify decimalPrecision');
    }
    return result;
  }
  function roundSignificand($this, significand, exponent, decimalMode) {
    if (significand.equals(Companion_getInstance_6().ZERO_1)) {
      return new BigDecimal(Companion_getInstance_6().ZERO_1, exponent, decimalMode);
    }
    var significandDigits = significand.numberOfDecimalDigits_wouqvd_k$();
    var tmp;
    if (decimalMode.usingScale_1) {
      tmp = decimalMode.decimalPrecision_1.plus_u6jwas_k$(decimalMode.scale_1);
    } else {
      tmp = decimalMode.decimalPrecision_1;
    }
    var desiredPrecision = tmp;
    var tmp_0;
    if (desiredPrecision.compareTo_n4fqi2_k$(significandDigits) > 0) {
      var extendedSignificand = significand.times_y2637j_k$(Companion_getInstance_6().TEN_1.pow_u6dvr2_k$(desiredPrecision.minus_llf5ei_k$(significandDigits)));
      tmp_0 = new BigDecimal(extendedSignificand, exponent, decimalMode);
    } else if (desiredPrecision.compareTo_n4fqi2_k$(significandDigits) < 0) {
      var divRem = significand.divrem_n4lz8w_k$(Companion_getInstance_6().TEN_1.pow_u6dvr2_k$(significandDigits.minus_llf5ei_k$(desiredPrecision)));
      var resolvedRemainder = divRem.remainder_1;
      if (divRem.remainder_1.equals(Companion_getInstance_6().ZERO_1)) {
        return new BigDecimal(divRem.quotient_1, exponent, decimalMode);
      }
      var tmp_1;
      if (significand.numberOfDecimalDigits_wouqvd_k$().equals(divRem.quotient_1.numberOfDecimalDigits_wouqvd_k$().plus_u6jwas_k$(divRem.remainder_1.numberOfDecimalDigits_wouqvd_k$()))) {
        var newSignificand = roundDiscarded($this, divRem.quotient_1, resolvedRemainder, decimalMode);
        var exponentModifier = newSignificand.numberOfDecimalDigits_wouqvd_k$().minus_llf5ei_k$(divRem.quotient_1.numberOfDecimalDigits_wouqvd_k$());
        tmp_1 = new BigDecimal(newSignificand, exponent.plus_u6jwas_k$(exponentModifier), decimalMode);
      } else {
        tmp_1 = $this.handleZeroRounding_32bv6d_k$(divRem.quotient_1, exponent, decimalMode);
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = new BigDecimal(significand, exponent, decimalMode);
    }
    return tmp_0;
  }
  function applyScale($this, significand, exponent, decimalMode) {
    if (!decimalMode.usingScale_1) {
      return new BigDecimal(significand, exponent, decimalMode);
    }
    var tmp;
    if (exponent.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = exponent.plus_u6jwas_k$(decimalMode.scale_1);
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      var tmp_0 = tmp$ret$0;
      tmp = DecimalMode_init_$Create$(tmp_0, decimalMode.roundingMode_1, new Long(0, 0), 4, null);
    } else if (exponent.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = decimalMode.scale_1;
      tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(new Long(1, 0));
      var tmp_1 = tmp$ret$1;
      tmp = DecimalMode_init_$Create$(tmp_1, decimalMode.roundingMode_1, new Long(0, 0), 4, null);
    } else {
      throw RuntimeException_init_$Create$('Unexpected state');
    }
    var workMode = tmp;
    var tmp_2;
    if (exponent.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
      tmp_2 = roundSignificand($this, significand, exponent, workMode);
    } else {
      var temp = BigDecimal_init_$Create$(significand, exponent, null, 4, null).plus_crvk61_k$(significand.signum_exb08b_k$());
      tmp_2 = roundSignificand($this, temp.significand_1, temp.exponent_1, workMode).minus_c5ihzl_k$(significand.signum_exb08b_k$());
    }
    return tmp_2;
  }
  function resolveDecimalMode($this, firstDecimalMode, secondDecimalMode, suppliedDecimalMode) {
    var tmp;
    if (!(suppliedDecimalMode == null)) {
      tmp = suppliedDecimalMode;
    } else {
      if (firstDecimalMode == null ? secondDecimalMode == null : false) {
        var tmp_0 = new Long(0, 0);
        return DecimalMode_init_$Create$(tmp_0, null, new Long(0, 0), 7, null);
      }
      if (firstDecimalMode == null ? !(secondDecimalMode == null) : false) {
        return secondDecimalMode;
      }
      if (secondDecimalMode == null ? !(firstDecimalMode == null) : false) {
        return firstDecimalMode;
      }
      if (!ensureNotNull(firstDecimalMode).roundingMode_1.equals(ensureNotNull(secondDecimalMode).roundingMode_1)) {
        throw ArithmeticException_init_$Create$('Different rounding modes! This: ' + firstDecimalMode.roundingMode_1 + ' Other: ' + secondDecimalMode.roundingMode_1);
      }
      var tmp_1;
      if (firstDecimalMode.decimalPrecision_1.compareTo_n4fqi2_k$(secondDecimalMode.decimalPrecision_1) >= 0) {
        tmp_1 = firstDecimalMode;
      } else {
        tmp_1 = secondDecimalMode;
      }
      var unifiedDecimalMode = tmp_1;
      tmp = unifiedDecimalMode;
    }
    return tmp;
  }
  function SignificantDecider_FIVE_getInstance() {
    SignificantDecider_initEntries();
    return SignificantDecider_FIVE_instance;
  }
  function SignificantDecider_LESS_THAN_FIVE_getInstance() {
    SignificantDecider_initEntries();
    return SignificantDecider_LESS_THAN_FIVE_instance;
  }
  function SignificantDecider_MORE_THAN_FIVE_getInstance() {
    SignificantDecider_initEntries();
    return SignificantDecider_MORE_THAN_FIVE_instance;
  }
  var ScaleOps_Max_instance;
  var ScaleOps_Min_instance;
  var ScaleOps_Add_instance;
  function values_1() {
    return [ScaleOps_Max_getInstance(), ScaleOps_Min_getInstance(), ScaleOps_Add_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Max':
        return ScaleOps_Max_getInstance();
      case 'Min':
        return ScaleOps_Min_getInstance();
      case 'Add':
        return ScaleOps_Add_getInstance();
      default:
        ScaleOps_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ScaleOps_entriesInitialized;
  function ScaleOps_initEntries() {
    if (ScaleOps_entriesInitialized)
      return Unit_getInstance();
    ScaleOps_entriesInitialized = true;
    ScaleOps_Max_instance = new ScaleOps('Max', 0);
    ScaleOps_Min_instance = new ScaleOps('Min', 1);
    ScaleOps_Add_instance = new ScaleOps('Add', 2);
  }
  function BigDecimal_init_$Init$(_significand, _exponent, _decimalMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      _exponent = new Long(0, 0);
    if (!(($mask0 & 4) === 0))
      _decimalMode = null;
    BigDecimal.call($this, _significand, _exponent, _decimalMode);
    return $this;
  }
  function BigDecimal_init_$Create$(_significand, _exponent, _decimalMode, $mask0, $marker) {
    return BigDecimal_init_$Init$(_significand, _exponent, _decimalMode, $mask0, $marker, Object.create(BigDecimal.prototype));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_6().ZERO_1;
    var tmp_1 = new Long(0, 0);
    tmp.ZERO_1 = BigDecimal_init_$Create$(tmp_0, tmp_1, null, 6, null);
    var tmp_2 = this;
    var tmp_3 = Companion_getInstance_6().ONE_1;
    var tmp_4 = new Long(0, 0);
    tmp_2.ONE_1 = BigDecimal_init_$Create$(tmp_3, tmp_4, null, 6, null);
    var tmp_5 = this;
    var tmp_6 = Companion_getInstance_6().TWO_1;
    var tmp_7 = new Long(0, 0);
    tmp_5.TWO_1 = BigDecimal_init_$Create$(tmp_6, tmp_7, null, 6, null);
    var tmp_8 = this;
    var tmp_9 = Companion_getInstance_6().TEN_1;
    var tmp_10 = new Long(1, 0);
    tmp_8.TEN_1 = BigDecimal_init_$Create$(tmp_9, tmp_10, null, 4, null);
    this.useToStringExpanded_1 = false;
    var tmp_11 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$0 = new Float64Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10, 1.0E11, 1.0E12, 1.0E13, 1.0E14, 1.0E15, 1.0E16, 1.0E17, 1.0E18, 1.0E19, 1.0E20, 1.0E21, 1.0E22]);
    tmp_11.double10pow_1 = tmp$ret$0;
    var tmp_12 = this;
    DoubleCompanionObject_getInstance();
    tmp_12.maximumDouble_1 = this.fromDouble$default_94rnga_k$(1.7976931348623157E308, null, 2, null);
    var tmp_13 = this;
    DoubleCompanionObject_getInstance();
    tmp_13.leastSignificantDouble_1 = this.fromDouble$default_94rnga_k$(4.9E-324, null, 2, null);
    var tmp_14 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
    tmp_14.float10pow_1 = tmp$ret$1;
    var tmp_15 = this;
    FloatCompanionObject_getInstance();
    tmp_15.maximumFloat_1 = this.fromFloat$default_vch0z2_k$(3.4028235E38, null, 2, null);
    var tmp_16 = this;
    FloatCompanionObject_getInstance();
    tmp_16.leastSignificantFloat_1 = this.fromFloat$default_vch0z2_k$(1.4E-45, null, 2, null);
  }
  Companion.prototype.get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  Companion.prototype.get_ONE_18jnkz_k$ = function () {
    return this.ONE_1;
  };
  Companion.prototype.get_TWO_18jjnh_k$ = function () {
    return this.TWO_1;
  };
  Companion.prototype.get_TEN_18jk30_k$ = function () {
    return this.TEN_1;
  };
  Companion.prototype.set_useToStringExpanded_mj9k6y_k$ = function (_set____db54di) {
    this.useToStringExpanded_1 = _set____db54di;
  };
  Companion.prototype.get_useToStringExpanded_n0i265_k$ = function () {
    return this.useToStringExpanded_1;
  };
  Companion.prototype.handleZeroRounding_32bv6d_k$ = function (significand, exponent, decimalMode) {
    var tmp;
    if (significand.sign_1.equals(Sign_POSITIVE_getInstance())) {
      var tmp0_subject = decimalMode.roundingMode_1;
      var tmp0 = tmp0_subject.ordinal_1;
      var tmp_0;
      switch (tmp0) {
        case 1:
        case 2:
          var increasedSignificand = significand.inc_28ke_k$();
          var exponentModifier = increasedSignificand.numberOfDecimalDigits_wouqvd_k$().minus_llf5ei_k$(significand.numberOfDecimalDigits_wouqvd_k$());
          tmp_0 = new BigDecimal(increasedSignificand, exponent.plus_u6jwas_k$(exponentModifier), decimalMode);
          break;
        default:
          tmp_0 = new BigDecimal(significand, exponent, decimalMode);
          break;
      }
      tmp = tmp_0;
    } else if (significand.sign_1.equals(Sign_NEGATIVE_getInstance())) {
      var tmp1_subject = decimalMode.roundingMode_1;
      var tmp0_0 = tmp1_subject.ordinal_1;
      var tmp_1;
      switch (tmp0_0) {
        case 0:
        case 2:
          var increasedSignificand_0 = significand.dec_24n6_k$();
          var exponentModifier_0 = increasedSignificand_0.numberOfDecimalDigits_wouqvd_k$().minus_llf5ei_k$(significand.numberOfDecimalDigits_wouqvd_k$());
          tmp_1 = new BigDecimal(increasedSignificand_0, exponent.plus_u6jwas_k$(exponentModifier_0), decimalMode);
          break;
        default:
          tmp_1 = new BigDecimal(significand, exponent, decimalMode);
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = new BigDecimal(significand, exponent, decimalMode);
    }
    return tmp;
  };
  Companion.prototype.fromBigDecimal_cbrf3f_k$ = function (bigDecimal, decimalMode) {
    return (new BigDecimal(bigDecimal.significand_1, bigDecimal.exponent_1, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromBigDecimal$default_k4md00_k$ = function (bigDecimal, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromBigDecimal_cbrf3f_k$(bigDecimal, decimalMode);
  };
  Companion.prototype.fromBigInteger_a5py1q_k$ = function (bigInteger, decimalMode) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigInteger.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigInteger, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromBigInteger$default_z400mb_k$ = function (bigInteger, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromBigInteger_a5py1q_k$(bigInteger, decimalMode);
  };
  Companion.prototype.fromLong_p73ogz_k$ = function (long, decimalMode) {
    var bigint = Companion_getInstance_6().fromLong_adx1cg_k$(long);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromLong$default_qitpus_k$ = function (long, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromLong_p73ogz_k$(long, decimalMode);
  };
  Companion.prototype.fromULong_vs5w9j_k$ = function (uLong, decimalMode) {
    var bigint = Companion_getInstance_6().fromULong_6igdxg_k$(uLong);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromULong$default_51sfgu_k$ = function (uLong, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromULong_vs5w9j_k$(uLong, decimalMode);
  };
  Companion.prototype.fromInt_egw1lj_k$ = function (int, decimalMode) {
    var bigint = Companion_getInstance_6().fromInt_venwfw_k$(int);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromInt$default_ghkl0y_k$ = function (int, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromInt_egw1lj_k$(int, decimalMode);
  };
  Companion.prototype.fromUInt_oh6us9_k$ = function (uInt, decimalMode) {
    var bigint = Companion_getInstance_6().fromUInt_vesuxg_k$(uInt);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromUInt$default_cocalk_k$ = function (uInt, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromUInt_oh6us9_k$(uInt, decimalMode);
  };
  Companion.prototype.fromUShort_1p6mj1_k$ = function (uShort, decimalMode) {
    var bigint = Companion_getInstance_6().fromUShort_puylkq_k$(uShort);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromUShort$default_k5dojy_k$ = function (uShort, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromUShort_1p6mj1_k$(uShort, decimalMode);
  };
  Companion.prototype.fromShort_sqk9tj_k$ = function (short, decimalMode) {
    var bigint = Companion_getInstance_6().fromShort_4vs6zg_k$(short);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromShort$default_n9xb1q_k$ = function (short, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromShort_sqk9tj_k$(short, decimalMode);
  };
  Companion.prototype.fromUByte_r4b3mf_k$ = function (uByte, decimalMode) {
    var bigint = Companion_getInstance_6().fromUByte_6dwq2s_k$(uByte);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromUByte$default_1pbsge_k$ = function (uByte, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromUByte_r4b3mf_k$(uByte, decimalMode);
  };
  Companion.prototype.fromByte_kv83nv_k$ = function (byte, decimalMode) {
    var bigint = Companion_getInstance_6().fromByte_17zj7c_k$(byte);
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = bigint.numberOfDecimalDigits_wouqvd_k$();
    tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromByte$default_4jj3t8_k$ = function (byte, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromByte_kv83nv_k$(byte, decimalMode);
  };
  Companion.prototype.fromLongAsSignificand_i9m7dq_k$ = function (long, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromLong_adx1cg_k$(long), new Long(0, 0), decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromLongAsSignificand$default_aqy85b_k$ = function (long, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromLongAsSignificand_i9m7dq_k$(long, decimalMode);
  };
  Companion.prototype.fromIntAsSignificand_7oskiq_k$ = function (int, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromInt_venwfw_k$(int), new Long(0, 0), decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromIntAsSignificand$default_k3x4tj_k$ = function (int, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromIntAsSignificand_7oskiq_k$(int, decimalMode);
  };
  Companion.prototype.fromShortAsSignificand_h4hi4c_k$ = function (short, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromShort_4vs6zg_k$(short), new Long(0, 0), decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromShortAsSignificand$default_pqb0zj_k$ = function (short, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromShortAsSignificand_h4hi4c_k$(short, decimalMode);
  };
  Companion.prototype.fromByteAsSignificand_6yy8ny_k$ = function (byte, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromByte_17zj7c_k$(byte), new Long(0, 0), decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromByteAsSignificand$default_s7i56p_k$ = function (byte, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromByteAsSignificand_6yy8ny_k$(byte, decimalMode);
  };
  Companion.prototype.fromFloat_ohkipj_k$ = function (float, decimalMode) {
    var floatString = float.toString();
    var tmp;
    var tmp_0;
    var tmp_1 = _Char___init__impl__6a9atx(46);
    if (contains$default(floatString, tmp_1, false, 2, null)) {
      tmp_0 = !contains(floatString, _Char___init__impl__6a9atx(69), true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.dropLastWhile' call
        var inductionVariable = get_lastIndex(floatString);
        if (0 <= inductionVariable)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var tmp$ret$0;
            // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.fromFloat.<anonymous>' call
            var tmp0__anonymous__q1qw7t = charSequenceGet(floatString, index);
            tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(48)));
            if (!tmp$ret$0) {
              var tmp$ret$2;
              // Inline function 'kotlin.text.substring' call
              var tmp0_substring = index + 1 | 0;
              var tmp$ret$1;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$1 = floatString;
              tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
              tmp$ret$3 = tmp$ret$2;
              break $l$block;
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$3 = '';
      }
      tmp = this.parseStringWithMode_fcq7nd_k$(tmp$ret$3, decimalMode).roundSignificand_g8q14u_k$(decimalMode);
    } else {
      tmp = this.parseStringWithMode_fcq7nd_k$(floatString, decimalMode).roundSignificand_g8q14u_k$(decimalMode);
    }
    return tmp;
  };
  Companion.prototype.fromFloat$default_vch0z2_k$ = function (float, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromFloat_ohkipj_k$(float, decimalMode);
  };
  Companion.prototype.fromDouble_sgw6pz_k$ = function (double, decimalMode) {
    var doubleString = double.toString();
    var tmp;
    var tmp_0;
    var tmp_1 = _Char___init__impl__6a9atx(46);
    if (contains$default(doubleString, tmp_1, false, 2, null)) {
      tmp_0 = !contains(doubleString, _Char___init__impl__6a9atx(69), true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.dropLastWhile' call
        var inductionVariable = get_lastIndex(doubleString);
        if (0 <= inductionVariable)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var tmp$ret$0;
            // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.fromDouble.<anonymous>' call
            var tmp0__anonymous__q1qw7t = charSequenceGet(doubleString, index);
            tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(48)));
            if (!tmp$ret$0) {
              var tmp$ret$2;
              // Inline function 'kotlin.text.substring' call
              var tmp0_substring = index + 1 | 0;
              var tmp$ret$1;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$1 = doubleString;
              tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
              tmp$ret$3 = tmp$ret$2;
              break $l$block;
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$3 = '';
      }
      tmp = this.parseStringWithMode_fcq7nd_k$(tmp$ret$3, decimalMode).roundSignificand_g8q14u_k$(decimalMode);
    } else {
      tmp = this.parseStringWithMode_fcq7nd_k$(doubleString, decimalMode).roundSignificand_g8q14u_k$(decimalMode).roundSignificand_g8q14u_k$(decimalMode);
    }
    return tmp;
  };
  Companion.prototype.fromDouble$default_94rnga_k$ = function (double, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.fromDouble_sgw6pz_k$(double, decimalMode);
  };
  Companion.prototype.fromBigIntegerWithExponent_a2brfx_k$ = function (bigInteger, exponent, decimalMode) {
    return (new BigDecimal(bigInteger, exponent, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromBigIntegerWithExponent$default_q4s5q0_k$ = function (bigInteger, exponent, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return this.fromBigIntegerWithExponent_a2brfx_k$(bigInteger, exponent, decimalMode);
  };
  Companion.prototype.fromLongWithExponent_v1uxss_k$ = function (long, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromLong_adx1cg_k$(long);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromLongWithExponent$default_obiikb_k$ = function (long, exponent, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return this.fromLongWithExponent_v1uxss_k$(long, exponent, decimalMode);
  };
  Companion.prototype.fromIntWithExponent_jj0l2a_k$ = function (int, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromInt_venwfw_k$(int);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromIntWithExponent$default_8docgz_k$ = function (int, exponent, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return this.fromIntWithExponent_jj0l2a_k$(int, exponent, decimalMode);
  };
  Companion.prototype.fromShortWithExponent_bswrcu_k$ = function (short, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromShort_4vs6zg_k$(short);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromShortWithExponent$default_kvqbul_k$ = function (short, exponent, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return this.fromShortWithExponent_bswrcu_k$(short, exponent, decimalMode);
  };
  Companion.prototype.fromByteWithExponent_m99mq4_k$ = function (byte, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromByte_17zj7c_k$(byte);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_g8q14u_k$(decimalMode);
  };
  Companion.prototype.fromByteWithExponent$default_p8fv59_k$ = function (byte, exponent, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return this.fromByteWithExponent_m99mq4_k$(byte, exponent, decimalMode);
  };
  Companion.prototype.fromBigInteger_30ftd_k$ = function (bigInteger) {
    return this.fromBigInteger_a5py1q_k$(bigInteger, null);
  };
  Companion.prototype.fromULong_6igdxg_k$ = function (uLong) {
    return this.fromULong_vs5w9j_k$(uLong, null);
  };
  Companion.prototype.fromUInt_vesuxg_k$ = function (uInt) {
    return this.fromUInt_oh6us9_k$(uInt, null);
  };
  Companion.prototype.fromUShort_puylkq_k$ = function (uShort) {
    return this.fromUShort_1p6mj1_k$(uShort, null);
  };
  Companion.prototype.fromUByte_6dwq2s_k$ = function (uByte) {
    return this.fromUByte_r4b3mf_k$(uByte, null);
  };
  Companion.prototype.fromLong_adx1cg_k$ = function (long) {
    return this.fromLong_p73ogz_k$(long, null);
  };
  Companion.prototype.fromInt_venwfw_k$ = function (int) {
    return this.fromInt_egw1lj_k$(int, null);
  };
  Companion.prototype.fromShort_4vs6zg_k$ = function (short) {
    return this.fromShort_sqk9tj_k$(short, null);
  };
  Companion.prototype.fromByte_17zj7c_k$ = function (byte) {
    return this.fromByte_kv83nv_k$(byte, null);
  };
  Companion.prototype.tryFromFloat_2gb71f_k$ = function (float, exactRequired) {
    return this.fromFloat_ohkipj_k$(float, null);
  };
  Companion.prototype.tryFromDouble_qi6grp_k$ = function (double, exactRequired) {
    return this.fromDouble_sgw6pz_k$(double, null);
  };
  Companion.prototype.parseString_d68ls2_k$ = function (string, base) {
    return this.parseStringWithMode_fcq7nd_k$(string, null);
  };
  Companion.prototype.parseString_osqjrx_k$ = function (string) {
    return this.parseStringWithMode$default_5i9x4o_k$(string, null, 2, null);
  };
  Companion.prototype.parseStringWithMode_fcq7nd_k$ = function (floatingPointString, decimalMode) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(floatingPointString) === 0;
    if (tmp$ret$0) {
      return this.ZERO_1;
    }
    if (contains(floatingPointString, _Char___init__impl__6a9atx(69), true)) {
      var tmp;
      var tmp_0 = _Char___init__impl__6a9atx(46);
      if (!contains$default(floatingPointString, tmp_0, false, 2, null)) {
        var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(101)]);
        var splitAroundE = split$default(floatingPointString, tmp_1, false, 0, 6, null);
        tmp = listOf([splitAroundE.get_fkrdnv_k$(0), '0E' + splitAroundE.get_fkrdnv_k$(1)]);
      } else {
        var tmp_2 = charArrayOf([_Char___init__impl__6a9atx(46)]);
        tmp = split$default(floatingPointString, tmp_2, false, 0, 6, null);
      }
      var split = tmp;
      var tmp0_subject = split.get_size_woubt6_k$();
      if (tmp0_subject === 2) {
        var signPresent = equals(new Char(charSequenceGet(floatingPointString, 0)), new Char(_Char___init__impl__6a9atx(45))) ? true : equals(new Char(charSequenceGet(floatingPointString, 0)), new Char(_Char___init__impl__6a9atx(43)));
        var tmp_3;
        if (signPresent) {
          tmp_3 = 1;
        } else {
          tmp_3 = 0;
        }
        var leftStart = tmp_3;
        var tmp_4;
        if (signPresent) {
          var tmp_5;
          if (equals(new Char(charSequenceGet(floatingPointString, 0)), new Char(_Char___init__impl__6a9atx(45)))) {
            tmp_5 = Sign_NEGATIVE_getInstance();
          } else {
            tmp_5 = Sign_POSITIVE_getInstance();
          }
          tmp_4 = tmp_5;
        } else {
          tmp_4 = Sign_POSITIVE_getInstance();
        }
        var sign = tmp_4;
        var tmp$ret$2;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = split.get_fkrdnv_k$(0);
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp0_substring;
        tmp$ret$2 = tmp$ret$1.substring(leftStart);
        var left = tmp$ret$2;
        var tmp_6 = split.get_fkrdnv_k$(1);
        var tmp_7 = charArrayOf([_Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(101)]);
        var rightSplit = split$default(tmp_6, tmp_7, false, 0, 6, null);
        var right = rightSplit.get_fkrdnv_k$(0);
        var exponentSplit = rightSplit.get_fkrdnv_k$(1);
        var exponentSignPresent = equals(new Char(charSequenceGet(exponentSplit, 0)), new Char(_Char___init__impl__6a9atx(45))) ? true : equals(new Char(charSequenceGet(exponentSplit, 0)), new Char(_Char___init__impl__6a9atx(43)));
        var tmp_8;
        if (equals(new Char(charSequenceGet(exponentSplit, 0)), new Char(_Char___init__impl__6a9atx(45)))) {
          tmp_8 = Sign_NEGATIVE_getInstance();
        } else {
          tmp_8 = Sign_POSITIVE_getInstance();
        }
        var exponentSign = tmp_8;
        var tmp_9;
        if (exponentSignPresent) {
          tmp_9 = 1;
        } else {
          tmp_9 = 0;
        }
        var skipSignIfPresent = tmp_9;
        var tmp$ret$4;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = exponentSplit;
        tmp$ret$4 = tmp$ret$3.substring(skipSignIfPresent);
        var exponentString = tmp$ret$4;
        var tmp_10;
        if (exponentSign.equals(Sign_POSITIVE_getInstance())) {
          tmp_10 = toLong_0(exponentString, 10);
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.Long.times' call
          var tmp1_times = toLong_0(exponentString, 10);
          tmp$ret$5 = tmp1_times.times_2zfqpc_k$(new Long(-1, -1));
          tmp_10 = tmp$ret$5;
        }
        var exponent = tmp_10;
        var tmp$ret$7;
        $l$block: {
          // Inline function 'kotlin.text.indexOfFirst' call
          var inductionVariable = 0;
          var last = charSequenceLength(left) - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$6;
              // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = charSequenceGet(left, index);
              tmp$ret$6 = !equals(new Char(tmp2__anonymous__z9zvc9), new Char(_Char___init__impl__6a9atx(48)));
              if (tmp$ret$6) {
                tmp$ret$7 = index;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$7 = -1;
        }
        var leftFirstNonZero = tmp$ret$7;
        if (leftFirstNonZero === -1) {
          leftFirstNonZero = 0;
        }
        var tmp$ret$9;
        $l$block_0: {
          // Inline function 'kotlin.text.indexOfLast' call
          var inductionVariable_0 = charSequenceLength(right) - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var tmp$ret$8;
              // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
              var tmp3__anonymous__ufb84q = charSequenceGet(right, index_0);
              tmp$ret$8 = !equals(new Char(tmp3__anonymous__ufb84q), new Char(_Char___init__impl__6a9atx(48)));
              if (tmp$ret$8) {
                tmp$ret$9 = index_0;
                break $l$block_0;
              }
            }
             while (0 <= inductionVariable_0);
          tmp$ret$9 = -1;
        }
        var rightLastNonZero = tmp$ret$9;
        if (rightLastNonZero === -1) {
          rightLastNonZero = right.length - 1 | 0;
        }
        var tmp$ret$11;
        // Inline function 'kotlin.text.substring' call
        var tmp4_substring = leftFirstNonZero;
        var tmp5_substring = left.length;
        var tmp$ret$10;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$10 = left;
        tmp$ret$11 = tmp$ret$10.substring(tmp4_substring, tmp5_substring);
        var leftTruncated = tmp$ret$11;
        var tmp$ret$13;
        // Inline function 'kotlin.text.substring' call
        var tmp6_substring = rightLastNonZero + 1 | 0;
        var tmp$ret$12;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$12 = right;
        tmp$ret$13 = tmp$ret$12.substring(0, tmp6_substring);
        var rightTruncated = tmp$ret$13;
        var significand = Companion_getInstance_6().parseString_d68ls2_k$(leftTruncated + rightTruncated, 10);
        if (significand.equals(Companion_getInstance_6().ZERO_1)) {
          sign = Sign_ZERO_getInstance();
        }
        if (sign.equals(Sign_NEGATIVE_getInstance())) {
          significand = significand.negate_hcqk8u_k$();
        }
        var tmp_11;
        if (!(leftTruncated === '0')) {
          var tmp$ret$15;
          // Inline function 'kotlin.Long.minus' call
          var tmp$ret$14;
          // Inline function 'kotlin.Long.plus' call
          var tmp7_plus = leftTruncated.length;
          tmp$ret$14 = exponent.plus_u6jwas_k$(toLong(tmp7_plus));
          var tmp8_minus = tmp$ret$14;
          tmp$ret$15 = tmp8_minus.minus_llf5ei_k$(new Long(1, 0));
          tmp_11 = tmp$ret$15;
        } else {
          var tmp$ret$16;
          // Inline function 'kotlin.Long.minus' call
          var tmp9_minus = exponent.minus_llf5ei_k$(numberToLong(rightTruncated.length).minus_llf5ei_k$(significand.numberOfDecimalDigits_wouqvd_k$()));
          tmp$ret$16 = tmp9_minus.minus_llf5ei_k$(new Long(1, 0));
          tmp_11 = tmp$ret$16;
        }
        var exponentModifiedByFloatingPointPosition = tmp_11;
        return new BigDecimal(significand, exponentModifiedByFloatingPointPosition, decimalMode);
      } else
        throw ArithmeticException_init_$Create$('Invalid (or unsupported) floating point number format: ' + floatingPointString);
    } else {
      var tmp_12 = _Char___init__impl__6a9atx(46);
      if (contains$default(floatingPointString, tmp_12, false, 2, null)) {
        var tmp_13 = charArrayOf([_Char___init__impl__6a9atx(46)]);
        var split_0 = split$default(floatingPointString, tmp_13, false, 0, 6, null);
        var tmp1_subject = split_0.get_size_woubt6_k$();
        if (tmp1_subject === 2) {
          var signPresent_0 = equals(new Char(charSequenceGet(floatingPointString, 0)), new Char(_Char___init__impl__6a9atx(45))) ? true : equals(new Char(charSequenceGet(floatingPointString, 0)), new Char(_Char___init__impl__6a9atx(43)));
          var tmp_14;
          if (signPresent_0) {
            tmp_14 = 1;
          } else {
            tmp_14 = 0;
          }
          var leftStart_0 = tmp_14;
          var tmp_15;
          if (signPresent_0) {
            var tmp_16;
            if (equals(new Char(charSequenceGet(floatingPointString, 0)), new Char(_Char___init__impl__6a9atx(45)))) {
              tmp_16 = Sign_NEGATIVE_getInstance();
            } else {
              tmp_16 = Sign_POSITIVE_getInstance();
            }
            tmp_15 = tmp_16;
          } else {
            tmp_15 = Sign_POSITIVE_getInstance();
          }
          var sign_0 = tmp_15;
          var tmp$ret$18;
          // Inline function 'kotlin.text.substring' call
          var tmp10_substring = split_0.get_fkrdnv_k$(0);
          var tmp$ret$17;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$17 = tmp10_substring;
          tmp$ret$18 = tmp$ret$17.substring(leftStart_0);
          var left_0 = tmp$ret$18;
          var right_0 = split_0.get_fkrdnv_k$(1);
          var tmp$ret$20;
          $l$block_1: {
            // Inline function 'kotlin.text.indexOfFirst' call
            var inductionVariable_1 = 0;
            var last_0 = charSequenceLength(left_0) - 1 | 0;
            if (inductionVariable_1 <= last_0)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp$ret$19;
                // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
                var tmp11__anonymous__tkubxh = charSequenceGet(left_0, index_1);
                tmp$ret$19 = !equals(new Char(tmp11__anonymous__tkubxh), new Char(_Char___init__impl__6a9atx(48)));
                if (tmp$ret$19) {
                  tmp$ret$20 = index_1;
                  break $l$block_1;
                }
              }
               while (inductionVariable_1 <= last_0);
            tmp$ret$20 = -1;
          }
          var leftFirstNonZero_0 = tmp$ret$20;
          if (leftFirstNonZero_0 === -1) {
            leftFirstNonZero_0 = 0;
          }
          var tmp$ret$22;
          $l$block_2: {
            // Inline function 'kotlin.text.indexOfLast' call
            var inductionVariable_2 = charSequenceLength(right_0) - 1 | 0;
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                var tmp$ret$21;
                // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
                var tmp12__anonymous__oq5opy = charSequenceGet(right_0, index_2);
                tmp$ret$21 = !equals(new Char(tmp12__anonymous__oq5opy), new Char(_Char___init__impl__6a9atx(48)));
                if (tmp$ret$21) {
                  tmp$ret$22 = index_2;
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$22 = -1;
          }
          var rightLastNonZero_0 = tmp$ret$22;
          if (rightLastNonZero_0 === -1) {
            rightLastNonZero_0 = right_0.length - 1 | 0;
          }
          var tmp$ret$24;
          // Inline function 'kotlin.text.substring' call
          var tmp13_substring = leftFirstNonZero_0;
          var tmp14_substring = left_0.length;
          var tmp$ret$23;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$23 = left_0;
          tmp$ret$24 = tmp$ret$23.substring(tmp13_substring, tmp14_substring);
          var leftTruncated_0 = tmp$ret$24;
          var tmp$ret$26;
          // Inline function 'kotlin.text.substring' call
          var tmp15_substring = rightLastNonZero_0 + 1 | 0;
          var tmp$ret$25;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$25 = right_0;
          tmp$ret$26 = tmp$ret$25.substring(0, tmp15_substring);
          var rightTruncated_0 = tmp$ret$26;
          var significand_0 = Companion_getInstance_6().parseString_d68ls2_k$(leftTruncated_0 + rightTruncated_0, 10);
          var tmp_17;
          var tmp_18;
          var tmp$ret$27;
          // Inline function 'kotlin.text.isNotEmpty' call
          tmp$ret$27 = charSequenceLength(leftTruncated_0) > 0;
          if (tmp$ret$27) {
            tmp_18 = !equals(new Char(charSequenceGet(leftTruncated_0, 0)), new Char(_Char___init__impl__6a9atx(48)));
          } else {
            tmp_18 = false;
          }
          if (tmp_18) {
            tmp_17 = leftTruncated_0.length - 1 | 0;
          } else {
            var tmp$ret$29;
            $l$block_3: {
              // Inline function 'kotlin.text.indexOfFirst' call
              var inductionVariable_3 = 0;
              var last_1 = charSequenceLength(rightTruncated_0) - 1 | 0;
              if (inductionVariable_3 <= last_1)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var tmp$ret$28;
                  // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
                  var tmp16__anonymous__5bf3vu = charSequenceGet(rightTruncated_0, index_3);
                  tmp$ret$28 = !equals(new Char(tmp16__anonymous__5bf3vu), new Char(_Char___init__impl__6a9atx(48)));
                  if (tmp$ret$28) {
                    tmp$ret$29 = index_3;
                    break $l$block_3;
                  }
                }
                 while (inductionVariable_3 <= last_1);
              tmp$ret$29 = -1;
            }
            tmp_17 = imul(tmp$ret$29 + 1 | 0, -1);
          }
          var exponent_0 = tmp_17;
          if (significand_0.equals(Companion_getInstance_6().ZERO_1)) {
            sign_0 = Sign_ZERO_getInstance();
          }
          if (sign_0.equals(Sign_NEGATIVE_getInstance())) {
            significand_0 = significand_0.negate_hcqk8u_k$();
          }
          return new BigDecimal(significand_0, toLong(exponent_0), decimalMode);
        } else
          throw ArithmeticException_init_$Create$('Invalid (or unsupported) floating point number format: ' + floatingPointString);
      } else {
        var significand_1 = Companion_getInstance_6().parseString_d68ls2_k$(floatingPointString, 10);
        var tmp$ret$30;
        // Inline function 'kotlin.Long.minus' call
        var tmp17_minus = significand_1.numberOfDecimalDigits_wouqvd_k$();
        tmp$ret$30 = tmp17_minus.minus_llf5ei_k$(new Long(1, 0));
        return new BigDecimal(significand_1, tmp$ret$30, decimalMode);
      }
    }
  };
  Companion.prototype.parseStringWithMode$default_5i9x4o_k$ = function (floatingPointString, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.parseStringWithMode_fcq7nd_k$(floatingPointString, decimalMode);
  };
  Companion.$metadata$ = objectMeta('Companion', [Creator]);
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function removeTrailingZeroes($this, bigDecimal) {
    if (bigDecimal.equals(Companion_getInstance_4().ZERO_1))
      return $this;
    var significand = bigDecimal.significand_1;
    var divisionResult = new QuotientAndRemainder(bigDecimal.significand_1, Companion_getInstance_6().ZERO_1);
    do {
      divisionResult = divisionResult.quotient_1.divrem_n4lz8w_k$(Companion_getInstance_6().TEN_1);
      if (divisionResult.remainder_1.equals(Companion_getInstance_6().ZERO_1)) {
        significand = divisionResult.quotient_1;
      }
    }
     while (divisionResult.remainder_1.equals(Companion_getInstance_6().ZERO_1));
    var tmp = significand;
    return BigDecimal_init_$Create$(tmp, bigDecimal.exponent_1, null, 4, null);
  }
  function integerDiv($this, other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), $this.decimalMode_1, other.decimalMode_1, decimalMode);
    var newExponent = $this.exponent_1.minus_llf5ei_k$(other.exponent_1);
    var newSignificand = $this.significand_1.div_rro038_k$(other.significand_1);
    return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
  }
  function integerDiv$default($this, other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return integerDiv($this, other, decimalMode);
  }
  function rem_4($this, other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), $this.decimalMode_1, other.decimalMode_1, decimalMode);
    var newExponent = $this.exponent_1.minus_llf5ei_k$(other.exponent_1);
    var newSignificand = $this.significand_1.rem_jqghgr_k$(other.significand_1);
    return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
  }
  function rem$default($this, other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return rem_4($this, other, decimalMode);
  }
  function divrem($this, other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), $this.decimalMode_1, other.decimalMode_1, decimalMode);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = $this.exponent_1;
    var tmp1_max = other.exponent_1;
    tmp$ret$0 = tmp0_max.compareTo_n4fqi2_k$(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
    var newExponent = tmp$ret$0;
    var newSignificand = $this.significand_1.div_rro038_k$(other.significand_1);
    var newRemainderSignificand = $this.significand_1.rem_jqghgr_k$(other.significand_1);
    return new Pair(roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode), roundOrDont(Companion_getInstance_4(), newRemainderSignificand, newExponent, resolvedDecimalMode));
  }
  function divrem$default($this, other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      decimalMode = null;
    return divrem($this, other, decimalMode);
  }
  function ScaleOps(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ScaleOps.$metadata$ = classMeta('ScaleOps', undefined, undefined, undefined, undefined, Enum.prototype);
  function computeMode($this, other, op) {
    var tmp;
    if ((($this.decimalMode_1 == null ? true : $this.decimalMode_1.isPrecisionUnlimited_1) ? true : other.decimalMode_1 == null) ? true : other.decimalMode_1.isPrecisionUnlimited_1) {
      tmp = Companion_getInstance_5().DEFAULT_1;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = $this.decimalMode_1.decimalPrecision_1;
      var tmp1_max = other.decimalMode_1.decimalPrecision_1;
      tmp$ret$0 = tmp0_max.compareTo_n4fqi2_k$(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
      var tmp_0 = tmp$ret$0;
      var tmp_1;
      if ($this.decimalMode_1.usingScale_1 ? other.decimalMode_1.usingScale_1 : false) {
        var tmp0_subject = op;
        var tmp0 = tmp0_subject.ordinal_1;
        var tmp_2;
        switch (tmp0) {
          case 0:
            var tmp$ret$1;
            // Inline function 'kotlin.math.max' call
            var tmp2_max = $this.decimalMode_1.scale_1;
            var tmp3_max = other.decimalMode_1.scale_1;
            tmp$ret$1 = tmp2_max.compareTo_n4fqi2_k$(tmp3_max) >= 0 ? tmp2_max : tmp3_max;

            tmp_2 = tmp$ret$1;
            break;
          case 1:
            var tmp$ret$2;
            // Inline function 'kotlin.math.min' call
            var tmp4_min = $this.decimalMode_1.scale_1;
            var tmp5_min = other.decimalMode_1.scale_1;
            tmp$ret$2 = tmp4_min.compareTo_n4fqi2_k$(tmp5_min) <= 0 ? tmp4_min : tmp5_min;

            tmp_2 = tmp$ret$2;
            break;
          case 2:
            tmp_2 = $this.decimalMode_1.scale_1.plus_u6jwas_k$(other.decimalMode_1.scale_1);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new Long(-1, -1);
      }
      tmp = new DecimalMode(tmp_0, $this.decimalMode_1.roundingMode_1, tmp_1);
    }
    return tmp;
  }
  function checkWholeness($this, exactRequired) {
    if (exactRequired ? !$this.isWholeNumber_olkfca_k$() : false)
      throw ArithmeticException_init_$Create$('Cannot convert to int and provide exact value');
  }
  function getRidOfRadix($this, bigDecimal) {
    var precision = bigDecimal.significand_1.numberOfDecimalDigits_wouqvd_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = bigDecimal.exponent_1.minus_llf5ei_k$(precision);
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
    var newExponent = tmp$ret$0;
    return BigDecimal_init_$Create$(bigDecimal.significand_1, newExponent, null, 4, null);
  }
  function bringSignificandToSameExponent($this, first, second) {
    var firstPrepared = getRidOfRadix($this, first);
    var secondPrepared = getRidOfRadix($this, second);
    var firstPreparedExponent = firstPrepared.exponent_1;
    var secondPreparedExponent = secondPrepared.exponent_1;
    var tmp;
    if (first.exponent_1.compareTo_n4fqi2_k$(second.exponent_1) > 0) {
      var moveFirstBy = firstPreparedExponent.minus_llf5ei_k$(secondPreparedExponent);
      var tmp_0;
      if (moveFirstBy.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
        var movedFirst = firstPrepared.significand_1.times_y2637j_k$(toBigInteger(10).pow_u6dvr2_k$(moveFirstBy));
        return new Triple(movedFirst, second.significand_1, secondPreparedExponent);
      } else {
        var tmp_1 = toBigInteger(10);
        var tmp$ret$0;
        // Inline function 'kotlin.Long.times' call
        tmp$ret$0 = moveFirstBy.times_2zfqpc_k$(new Long(-1, -1));
        var movedSecond = secondPrepared.significand_1.times_y2637j_k$(tmp_1.pow_u6dvr2_k$(tmp$ret$0));
        tmp_0 = new Triple(first.significand_1, movedSecond, firstPreparedExponent);
      }
      tmp = tmp_0;
    } else if (first.exponent_1.compareTo_n4fqi2_k$(second.exponent_1) < 0) {
      var moveSecondBy = secondPreparedExponent.minus_llf5ei_k$(firstPreparedExponent);
      var tmp_2;
      if (moveSecondBy.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
        var movedSecond_0 = secondPrepared.significand_1.times_y2637j_k$(toBigInteger(10).pow_u6dvr2_k$(moveSecondBy));
        tmp_2 = new Triple(first.significand_1, movedSecond_0, firstPreparedExponent);
      } else {
        var tmp_3 = toBigInteger(10);
        var tmp$ret$1;
        // Inline function 'kotlin.Long.times' call
        tmp$ret$1 = moveSecondBy.times_2zfqpc_k$(new Long(-1, -1));
        var movedFirst_0 = firstPrepared.significand_1.times_y2637j_k$(tmp_3.pow_u6dvr2_k$(tmp$ret$1));
        tmp_2 = new Triple(movedFirst_0, second.significand_1, firstPreparedExponent);
      }
      return tmp_2;
    } else if (first.exponent_1.equals(second.exponent_1)) {
      var delta = firstPreparedExponent.minus_llf5ei_k$(secondPreparedExponent);
      var tmp_4;
      if (delta.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var movedFirst_1 = first.significand_1.times_y2637j_k$(toBigInteger(10).pow_u6dvr2_k$(delta));
        tmp_4 = new Triple(movedFirst_1, second.significand_1, firstPreparedExponent);
      } else {
        if (delta.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
          var tmp_5 = toBigInteger(10);
          var tmp$ret$2;
          // Inline function 'kotlin.Long.times' call
          tmp$ret$2 = delta.times_2zfqpc_k$(new Long(-1, -1));
          var movedSecond_1 = second.significand_1.times_y2637j_k$(tmp_5.pow_u6dvr2_k$(tmp$ret$2));
          tmp_4 = new Triple(first.significand_1, movedSecond_1, firstPreparedExponent);
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.Long.compareTo' call
          tmp$ret$3 = delta.compareTo_n4fqi2_k$(new Long(0, 0));
          if (tmp$ret$3 === 0) {
            tmp_4 = new Triple(first.significand_1, second.significand_1, firstPreparedExponent);
          } else {
            throw RuntimeException_init_$Create$('Invalid delta: ' + toString(delta));
          }
        }
      }
      return tmp_4;
    } else {
      throw RuntimeException_init_$Create$('Invalid comparison state BigInteger: ' + toString(first.exponent_1) + ', ' + toString(second.exponent_1));
    }
    return tmp;
  }
  function javascriptNumberComparison($this, number) {
    var double = numberToDouble(number);
    var tmp;
    Companion_getInstance();
    if (double > (new Long(-1, 2147483647)).toDouble_ygsx0s_k$()) {
      tmp = $this.compare_8894gk_k$(Companion_getInstance_4().parseString_osqjrx_k$(double.toString()));
    } else {
      if (double % 1 === 0.0) {
        tmp = $this.compare_8894gk_k$(Companion_getInstance_4().fromLong_adx1cg_k$(numberToLong(number)));
      } else {
        var tmp_0 = numberToDouble(number);
        tmp = $this.compare_8894gk_k$(toBigDecimal$default(tmp_0, null, null, 3, null));
      }
    }
    return tmp;
  }
  function noExponentStringtoScientificNotation($this, input) {
    return placeADotInString($this, input, input.length - 1 | 0) + ('E+' + (input.length - 1 | 0));
  }
  function placeADotInStringExpanded($this, input, position) {
    var prefix = substring(input, until(0, input.length - position | 0));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var tmp0_dropLastWhile = substring(input, until(input.length - position | 0, input.length));
      var inductionVariable = get_lastIndex(tmp0_dropLastWhile);
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'com.ionspin.kotlin.bignum.decimal.BigDecimal.placeADotInStringExpanded.<anonymous>' call
          var tmp1__anonymous__uwfjfc = charSequenceGet(tmp0_dropLastWhile, index);
          tmp$ret$0 = equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(48)));
          if (!tmp$ret$0) {
            var tmp$ret$2;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index + 1 | 0;
            var tmp$ret$1;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$1 = tmp0_dropLastWhile;
            tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
            tmp$ret$3 = tmp$ret$2;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = '';
    }
    var suffix = tmp$ret$3;
    var tmp;
    var tmp$ret$4;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$4 = charSequenceLength(suffix) > 0;
    if (tmp$ret$4) {
      tmp = prefix + '.' + suffix;
    } else {
      tmp = prefix;
    }
    return tmp;
  }
  function placeADotInString($this, input, position) {
    var prefix = substring(input, until(0, input.length - position | 0));
    var suffix = substring(input, until(input.length - position | 0, input.length));
    var prepared = prefix + '.' + suffix;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var inductionVariable = get_lastIndex(prepared);
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'com.ionspin.kotlin.bignum.decimal.BigDecimal.placeADotInString.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(prepared, index);
          tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(48)));
          if (!tmp$ret$0) {
            var tmp$ret$2;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index + 1 | 0;
            var tmp$ret$1;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$1 = prepared;
            tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
            tmp$ret$3 = tmp$ret$2;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = '';
    }
    return tmp$ret$3;
  }
  function ScaleOps_Max_getInstance() {
    ScaleOps_initEntries();
    return ScaleOps_Max_instance;
  }
  function ScaleOps_Min_getInstance() {
    ScaleOps_initEntries();
    return ScaleOps_Min_instance;
  }
  function ScaleOps_Add_getInstance() {
    ScaleOps_initEntries();
    return ScaleOps_Add_instance;
  }
  function BigDecimal(_significand, _exponent, _decimalMode) {
    Companion_getInstance_4();
    if (!(_decimalMode == null) ? _decimalMode.usingScale_1 : false) {
      var wrk = applyScale(Companion_getInstance_4(), _significand, _exponent, _decimalMode);
      if (!wrk.isZero_jihrta_k$()) {
        this.significand_1 = wrk.significand_1;
        this.exponent_1 = wrk.exponent_1;
        var newPrecision = this.significand_1.numberOfDecimalDigits_wouqvd_k$();
        this.precision_1 = newPrecision;
        var tmp = this;
        tmp.decimalMode_1 = _decimalMode.copy$default_7taprw_k$(newPrecision, null, new Long(0, 0), 6, null);
      } else {
        this.significand_1 = wrk.significand_1;
        this.exponent_1 = wrk.exponent_1.times_2zfqpc_k$(_decimalMode.decimalPrecision_1.plus_u6jwas_k$(_decimalMode.scale_1));
        this.precision_1 = _decimalMode.decimalPrecision_1.plus_u6jwas_k$(_decimalMode.scale_1);
        var tmp_0 = this;
        tmp_0.decimalMode_1 = _decimalMode.copy$default_7taprw_k$(this.precision_1, null, new Long(0, 0), 6, null);
      }
    } else {
      this.significand_1 = _significand;
      this.precision_1 = _significand.numberOfDecimalDigits_wouqvd_k$();
      this.exponent_1 = _exponent;
      this.decimalMode_1 = _decimalMode;
    }
    var tmp_1 = this;
    var tmp0_safe_receiver = this.decimalMode_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.decimalPrecision_1;
    tmp_1.precisionLimit_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
    var tmp_2 = this;
    var tmp0_safe_receiver_0 = this.decimalMode_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.roundingMode_1;
    tmp_2.roundingMode_1 = tmp1_elvis_lhs_0 == null ? RoundingMode_NONE_getInstance() : tmp1_elvis_lhs_0;
    var tmp_3 = this;
    var tmp0_safe_receiver_1 = this.decimalMode_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.scale_1;
    tmp_3.scale_1 = tmp1_elvis_lhs_1 == null ? new Long(-1, -1) : tmp1_elvis_lhs_1;
    this.usingScale_1 = this.scale_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
  }
  BigDecimal.prototype.get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  BigDecimal.prototype.get_significand_2b6rly_k$ = function () {
    return this.significand_1;
  };
  BigDecimal.prototype.get_exponent_7ddt2w_k$ = function () {
    return this.exponent_1;
  };
  BigDecimal.prototype.get_decimalMode_8x5d5h_k$ = function () {
    return this.decimalMode_1;
  };
  BigDecimal.prototype.get_precisionLimit_es4j52_k$ = function () {
    return this.precisionLimit_1;
  };
  BigDecimal.prototype.get_roundingMode_uxzxk0_k$ = function () {
    return this.roundingMode_1;
  };
  BigDecimal.prototype.get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  BigDecimal.prototype.get_usingScale_nxygf_k$ = function () {
    return this.usingScale_1;
  };
  BigDecimal.prototype.scale_plu1h0_k$ = function (scale) {
    if (scale.compareTo_n4fqi2_k$(new Long(0, 0)) < 0)
      throw ArithmeticException_init_$Create$('Negative Scale is unsupported.');
    var tmp;
    if (this.decimalMode_1 == null) {
      var tmp_0;
      if (scale.equals(new Long(-1, -1))) {
        tmp_0 = Companion_getInstance_5().DEFAULT_1;
      } else {
        tmp_0 = new DecimalMode(new Long(0, 0), RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance(), scale);
      }
      tmp = tmp_0;
    } else {
      tmp = new DecimalMode(this.decimalMode_1.decimalPrecision_1.minus_llf5ei_k$(this.decimalMode_1.scale_1), this.decimalMode_1.roundingMode_1, scale);
    }
    var mode = tmp;
    return new BigDecimal(this.significand_1, this.exponent_1, mode);
  };
  BigDecimal.prototype.removeScale_51od0a_k$ = function () {
    var tmp0_safe_receiver = this.decimalMode_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.decimalPrecision_1;
    var tmp = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.decimalMode_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.roundingMode_1;
    return new BigDecimal(this.significand_1, this.exponent_1, new DecimalMode(tmp, tmp3_elvis_lhs == null ? RoundingMode_NONE_getInstance() : tmp3_elvis_lhs, new Long(-1, -1)));
  };
  BigDecimal.prototype.getCreator_y5p0ja_k$ = function () {
    return Companion_getInstance_4();
  };
  BigDecimal.prototype.getInstance_rhh4hh_k$ = function () {
    return this;
  };
  BigDecimal.prototype.add_ib6t94_k$ = function (other) {
    return this.add_o2o8at_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.add_nl3k2s_k$ = function (other) {
    return this.add_ib6t94_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.add_o2o8at_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), other.significand_1, other.exponent_1, resolvedDecimalMode);
    }
    if (other.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), this.significand_1, this.exponent_1, resolvedDecimalMode);
    }
    var tmp0_container = bringSignificandToSameExponent(this, this, other);
    var first = tmp0_container.component1_7eebsc_k$();
    var second = tmp0_container.component2_7eebsb_k$();
    var firstNumOfDigits = first.numberOfDecimalDigits_wouqvd_k$();
    var secondNumOfDigits = second.numberOfDecimalDigits_wouqvd_k$();
    var newSignificand = first.plus_o9al5h_k$(second);
    var newSignificandNumOfDigit = newSignificand.numberOfDecimalDigits_wouqvd_k$();
    var tmp;
    if (firstNumOfDigits.compareTo_n4fqi2_k$(secondNumOfDigits) > 0) {
      tmp = firstNumOfDigits;
    } else {
      tmp = secondNumOfDigits;
    }
    var largerOperand = tmp;
    var carryDetected = newSignificandNumOfDigit.minus_llf5ei_k$(largerOperand);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.exponent_1;
    var tmp1_max = other.exponent_1;
    tmp$ret$0 = tmp0_max.compareTo_n4fqi2_k$(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
    var newExponent = tmp$ret$0.plus_u6jwas_k$(carryDetected);
    var tmp_0;
    if (resolvedDecimalMode.usingScale_1) {
      var tmp_1 = Companion_getInstance_4();
      tmp_0 = roundOrDont(tmp_1, newSignificand, newExponent, resolvedDecimalMode.copy$default_7taprw_k$(newSignificandNumOfDigit, null, new Long(0, 0), 6, null));
    } else {
      tmp_0 = roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
    }
    return tmp_0;
  };
  BigDecimal.prototype.add$default_7nsj9y_k$ = function (other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.add_o2o8at_k$(other, decimalMode);
  };
  BigDecimal.prototype.subtract_48b20r_k$ = function (other) {
    return this.subtract_5kfte_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.subtract_ogq3v3_k$ = function (other) {
    return this.subtract_48b20r_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.subtract_5kfte_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), other.significand_1.negate_hcqk8u_k$(), other.exponent_1, resolvedDecimalMode);
    }
    if (other.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), this.significand_1, this.exponent_1, resolvedDecimalMode);
    }
    var tmp0_container = bringSignificandToSameExponent(this, this, other);
    var first = tmp0_container.component1_7eebsc_k$();
    var second = tmp0_container.component2_7eebsb_k$();
    var firstNumOfDigits = first.numberOfDecimalDigits_wouqvd_k$();
    var secondNumOfDigits = second.numberOfDecimalDigits_wouqvd_k$();
    var newSignificand = first.minus_as3vyt_k$(second);
    var newSignificandNumOfDigit = newSignificand.numberOfDecimalDigits_wouqvd_k$();
    var tmp;
    if (firstNumOfDigits.compareTo_n4fqi2_k$(secondNumOfDigits) > 0) {
      tmp = firstNumOfDigits;
    } else {
      tmp = secondNumOfDigits;
    }
    var largerOperand = tmp;
    var borrowDetected = newSignificandNumOfDigit.minus_llf5ei_k$(largerOperand);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.exponent_1;
    var tmp1_max = other.exponent_1;
    tmp$ret$0 = tmp0_max.compareTo_n4fqi2_k$(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
    var newExponent = tmp$ret$0.plus_u6jwas_k$(borrowDetected);
    if (this.usingScale_1) {
      var tmp_0 = Companion_getInstance_4();
      return roundOrDont(tmp_0, newSignificand, newExponent, resolvedDecimalMode.copy$default_7taprw_k$(newSignificandNumOfDigit, null, new Long(0, 0), 6, null));
    } else {
      return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
    }
  };
  BigDecimal.prototype.subtract$default_beda1j_k$ = function (other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.subtract_5kfte_k$(other, decimalMode);
  };
  BigDecimal.prototype.multiply_u3j4dx_k$ = function (other) {
    return this.multiply_kmo6wy_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.multiply_cwkmht_k$ = function (other) {
    return this.multiply_u3j4dx_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.multiply_kmo6wy_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    var firstNumOfDigits = this.significand_1.numberOfDecimalDigits_wouqvd_k$();
    var secondNumOfDigits = other.significand_1.numberOfDecimalDigits_wouqvd_k$();
    var newSignificand = this.significand_1.times_y2637j_k$(other.significand_1);
    var newSignificandNumOfDigit = newSignificand.numberOfDecimalDigits_wouqvd_k$();
    var moveExponent = newSignificandNumOfDigit.minus_llf5ei_k$(firstNumOfDigits.plus_u6jwas_k$(secondNumOfDigits));
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.exponent_1.plus_u6jwas_k$(other.exponent_1).plus_u6jwas_k$(moveExponent);
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
    var newExponent = tmp$ret$0;
    var tmp;
    if (resolvedDecimalMode.usingScale_1) {
      var tmp_0 = Companion_getInstance_4();
      tmp = roundOrDont(tmp_0, newSignificand, newExponent, resolvedDecimalMode.copy$default_7taprw_k$(newSignificandNumOfDigit, null, new Long(0, 0), 6, null));
    } else {
      tmp = roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
    }
    return tmp;
  };
  BigDecimal.prototype.multiply$default_3bgxyx_k$ = function (other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.multiply_kmo6wy_k$(other, decimalMode);
  };
  BigDecimal.prototype.divide_5l7d8g_k$ = function (other) {
    return this.divide_mvowml_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.divide_zbvjws_k$ = function (other) {
    return this.divide_5l7d8g_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.divide_mvowml_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    if (resolvedDecimalMode.isPrecisionUnlimited_1 ? !resolvedDecimalMode.usingScale_1 : false) {
      var newExponent = this.exponent_1.minus_llf5ei_k$(other.exponent_1);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = other.precision_1;
      tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(2, 0));
      var tmp1_plus = tmp$ret$0;
      tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(new Long(6, 0));
      var power = tmp$ret$1;
      var thisPrepared = this.significand_1.times_y2637j_k$(Companion_getInstance_6().TEN_1.pow_u6dvr2_k$(power));
      var divRem = thisPrepared.divrem_n4lz8w_k$(other.significand_1);
      var result = divRem.quotient_1;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = other.precision_1;
      tmp$ret$2 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
      var expectedDiff = tmp$ret$2;
      var exponentModifier = expectedDiff.plus_u6jwas_k$(result.numberOfDecimalDigits_wouqvd_k$().minus_llf5ei_k$(thisPrepared.numberOfDecimalDigits_wouqvd_k$()));
      if (!divRem.remainder_1.equals(Companion_getInstance_6().ZERO_1)) {
        throw ArithmeticException_init_$Create$('Non-terminating result of division operation (i.e. 1/3 = 0.3333... library needs to know when to stop and how to round up at that point). Specify decimalPrecision inside your decimal mode.');
      }
      return new BigDecimal(result, newExponent.plus_u6jwas_k$(exponentModifier), resolvedDecimalMode);
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.Long.minus' call
      var tmp3_minus = this.exponent_1.minus_llf5ei_k$(other.exponent_1);
      tmp$ret$3 = tmp3_minus.minus_llf5ei_k$(new Long(1, 0));
      var newExponent_0 = tmp$ret$3;
      var desiredPrecision = resolvedDecimalMode.decimalPrecision_1;
      var power_0 = desiredPrecision.minus_llf5ei_k$(this.precision_1).plus_u6jwas_k$(other.precision_1);
      var tmp;
      if (power_0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        tmp = this.significand_1.times_y2637j_k$(toBigInteger(10).pow_u6dvr2_k$(power_0));
      } else if (power_0.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
        var tmp_0 = toBigInteger(10);
        var tmp$ret$4;
        // Inline function 'kotlin.math.absoluteValue' call
        tmp$ret$4 = abs(power_0);
        tmp = this.significand_1.div_rro038_k$(tmp_0.pow_u6dvr2_k$(tmp$ret$4));
      } else {
        tmp = this.significand_1;
      }
      var thisPrepared_0 = tmp;
      var divRem_0 = thisPrepared_0.divrem_n4lz8w_k$(other.significand_1);
      var result_0 = divRem_0.quotient_1;
      if (result_0.equals(Companion_getInstance_6().ZERO_1)) {
        var tmp0 = newExponent_0;
        newExponent_0 = tmp0.dec_24n6_k$();
      }
      var exponentModifier_0 = result_0.numberOfDecimalDigits_wouqvd_k$().minus_llf5ei_k$(resolvedDecimalMode.decimalPrecision_1);
      var tmp_1;
      if (this.usingScale_1) {
        var tmp_2 = roundDiscarded(Companion_getInstance_4(), result_0, divRem_0.remainder_1, resolvedDecimalMode);
        var tmp_3 = newExponent_0.plus_u6jwas_k$(exponentModifier_0);
        var tmp_4 = result_0.numberOfDecimalDigits_wouqvd_k$();
        tmp_1 = new BigDecimal(tmp_2, tmp_3, resolvedDecimalMode.copy$default_7taprw_k$(tmp_4, null, new Long(0, 0), 6, null));
      } else {
        tmp_1 = new BigDecimal(roundDiscarded(Companion_getInstance_4(), result_0, divRem_0.remainder_1, resolvedDecimalMode), newExponent_0.plus_u6jwas_k$(exponentModifier_0), resolvedDecimalMode);
      }
      return tmp_1;
    }
  };
  BigDecimal.prototype.divide$default_vv8782_k$ = function (other, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return this.divide_mvowml_k$(other, decimalMode);
  };
  BigDecimal.prototype.remainder_5zgt4c_k$ = function (other) {
    return this.divideAndRemainder_odnahe_k$(other).second_1;
  };
  BigDecimal.prototype.remainder_px8lk0_k$ = function (other) {
    return this.remainder_5zgt4c_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.divideAndRemainder_odnahe_k$ = function (other) {
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      return new Pair(Companion_getInstance_4().ZERO_1, this);
    }
    if (other.abs_22cy_k$().compareTo_m610zm_k$(this.abs_22cy_k$()) > 0) {
      return new Pair(Companion_getInstance_4().ZERO_1, this);
    }
    var tmp0_safe_receiver = this.decimalMode_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = this.exponent_1;
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      var tmp_0 = tmp$ret$0;
      tmp = tmp0_safe_receiver.copy$default_7taprw_k$(tmp_0, null, new Long(0, 0), 6, null);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = this.exponent_1;
      tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(new Long(1, 0));
      var tmp_2 = tmp$ret$1;
      var tmp_3 = RoundingMode_FLOOR_getInstance();
      tmp_1 = DecimalMode_init_$Create$(tmp_2, tmp_3, new Long(0, 0), 4, null);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var resolvedRoundingMode = tmp_1;
    var quotient = this.divide_mvowml_k$(other, resolvedRoundingMode);
    var quotientInfinitePrecision = quotient.copy$default_vqg4dt_k$(null, new Long(0, 0), Companion_getInstance_5().DEFAULT_1, 3, null);
    var remainder = this.minus_us1adz_k$(quotientInfinitePrecision.times_ry0rn1_k$(other));
    return new Pair(quotient, remainder);
  };
  BigDecimal.prototype.divideAndRemainder_lbgxlu_k$ = function (other) {
    return this.divideAndRemainder_odnahe_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.isZero_jihrta_k$ = function () {
    return this.significand_1.isZero_jihrta_k$();
  };
  BigDecimal.prototype.copy_mpq9kr_k$ = function (significand, exponent, decimalMode) {
    return new BigDecimal(significand, exponent, decimalMode);
  };
  BigDecimal.prototype.copy$default_vqg4dt_k$ = function (significand, exponent, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      significand = this.significand_1;
    if (!(($mask0 & 2) === 0))
      exponent = this.exponent_1;
    if (!(($mask0 & 4) === 0))
      decimalMode = this.decimalMode_1;
    return this.copy_mpq9kr_k$(significand, exponent, decimalMode);
  };
  BigDecimal.prototype.moveDecimalPoint_8je28h_k$ = function (places) {
    if (places === 0) {
      return this;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.exponent_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(toLong(places));
    var tmp = tmp$ret$0;
    return this.copy$default_vqg4dt_k$(null, tmp, null, 5, null);
  };
  BigDecimal.prototype.moveDecimalPoint_jfacyu_k$ = function (places) {
    if (places.equals(new Long(0, 0))) {
      return this;
    }
    var tmp = this.exponent_1.plus_u6jwas_k$(places);
    return this.copy$default_vqg4dt_k$(null, tmp, null, 5, null);
  };
  BigDecimal.prototype.pow_urdtnb_k$ = function (exponent) {
    return this.pow_u6dvr2_k$(toLong(exponent));
  };
  BigDecimal.prototype.floor_1m2c5o_k$ = function () {
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      var tmp0_subject = this.significand_1.sign_1;
      var tmp0 = tmp0_subject.ordinal_1;
      var tmp;
      switch (tmp0) {
        case 0:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        case 1:
          tmp = Companion_getInstance_4().ONE_1.negate_hcqk8u_k$();
          break;
        case 2:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.exponent_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
    var tmp_0 = tmp$ret$0;
    var tmp_1 = RoundingMode_FLOOR_getInstance();
    return this.roundSignificand_g8q14u_k$(DecimalMode_init_$Create$(tmp_0, tmp_1, new Long(0, 0), 4, null));
  };
  BigDecimal.prototype.ceil_1td6t_k$ = function () {
    if (this.isZero_jihrta_k$()) {
      return Companion_getInstance_4().ZERO_1;
    }
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      var tmp0_subject = this.significand_1.sign_1;
      var tmp0 = tmp0_subject.ordinal_1;
      var tmp;
      switch (tmp0) {
        case 0:
          tmp = Companion_getInstance_4().ONE_1;
          break;
        case 1:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        case 2:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.exponent_1;
    tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
    var tmp_0 = tmp$ret$0;
    var tmp_1 = RoundingMode_CEILING_getInstance();
    return this.roundSignificand_g8q14u_k$(DecimalMode_init_$Create$(tmp_0, tmp_1, new Long(0, 0), 4, null));
  };
  BigDecimal.prototype.toBigInteger_xwiad5_k$ = function () {
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      return Companion_getInstance_6().ZERO_1;
    }
    var precisionExponentDiff = this.exponent_1.minus_llf5ei_k$(this.precision_1);
    var tmp;
    if (precisionExponentDiff.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp_0 = toBigInteger(10);
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = precisionExponentDiff.plus_u6jwas_k$(new Long(1, 0));
      tmp = this.significand_1.times_y2637j_k$(tmp_0.pow_u6dvr2_k$(tmp$ret$0));
    } else if (precisionExponentDiff.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      var tmp_1 = toBigInteger(10);
      var tmp$ret$2;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$1;
      // Inline function 'kotlin.math.absoluteValue' call
      tmp$ret$1 = abs(precisionExponentDiff);
      var tmp0_minus = tmp$ret$1;
      tmp$ret$2 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
      tmp = this.significand_1.div_rro038_k$(tmp_1.pow_u6dvr2_k$(tmp$ret$2));
    } else {
      tmp = this.significand_1.times_vzczyd_k$(10);
    }
    return tmp;
  };
  BigDecimal.prototype.numberOfDecimalDigits_wouqvd_k$ = function () {
    var tmp;
    var containsUpper = this.precision_1;
    var containsArg = this.exponent_1;
    if ((new Long(1, 0)).compareTo_n4fqi2_k$(containsArg) <= 0 ? containsArg.compareTo_n4fqi2_k$(containsUpper) < 0 : false) {
      tmp = this.precision_1;
    } else {
      if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.exponent_1.compareTo_n4fqi2_k$(this.precision_1) > 0 : false) {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = this.exponent_1;
        tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
        tmp = tmp$ret$0;
      } else {
        if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.exponent_1.equals(this.precision_1) : false) {
          var tmp$ret$1;
          // Inline function 'kotlin.Long.plus' call
          var tmp1_plus = this.precision_1;
          tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(new Long(1, 0));
          tmp = tmp$ret$1;
        } else {
          if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
            var tmp$ret$2;
            // Inline function 'kotlin.math.absoluteValue' call
            var tmp2__get_absoluteValue__uu8ln7 = this.exponent_1;
            tmp$ret$2 = abs(tmp2__get_absoluteValue__uu8ln7);
            tmp = tmp$ret$2.plus_u6jwas_k$(this.precision_1);
          } else {
            if (this.exponent_1.equals(new Long(0, 0))) {
              tmp = removeTrailingZeroes(this, this).precision_1;
            } else {
              throw RuntimeException_init_$Create$('Invalid case when getting number of decimal digits');
            }
          }
        }
      }
    }
    var numberOfDigits = tmp;
    return numberOfDigits;
  };
  BigDecimal.prototype.toString_flfcob_k$ = function (base) {
    if (!(base === 10)) {
      throw RuntimeException_init_$Create$('BigDecimal in base other than 10 is not supported yet');
    }
    return this.toString();
  };
  BigDecimal.prototype.divrem_pxqwgg_k$ = function (other) {
    return this.divideAndRemainder_odnahe_k$(other);
  };
  BigDecimal.prototype.plus_epkrb3_k$ = function (other) {
    return this.add_o2o8at_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.plus_o9al5h_k$ = function (other) {
    return this.plus_epkrb3_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.minus_us1adz_k$ = function (other) {
    return this.subtract_5kfte_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.minus_as3vyt_k$ = function (other) {
    return this.minus_us1adz_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.times_ry0rn1_k$ = function (other) {
    return this.multiply_kmo6wy_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.times_y2637j_k$ = function (other) {
    return this.times_ry0rn1_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.div_j6tfoo_k$ = function (other) {
    return this.divide_mvowml_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  BigDecimal.prototype.div_rro038_k$ = function (other) {
    return this.div_j6tfoo_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.rem_5b2vy7_k$ = function (other) {
    return rem_4(this, other, null);
  };
  BigDecimal.prototype.rem_jqghgr_k$ = function (other) {
    return this.rem_5b2vy7_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  BigDecimal.prototype.unaryMinus_6uz0qp_k$ = function () {
    return new BigDecimal(this.significand_1.negate_hcqk8u_k$(), this.exponent_1, this.decimalMode_1);
  };
  BigDecimal.prototype.secureOverwrite_5be265_k$ = function () {
    this.significand_1.secureOverwrite_5be265_k$();
  };
  BigDecimal.prototype.inc_28ke_k$ = function () {
    return this.plus_crvk61_k$(1);
  };
  BigDecimal.prototype.dec_24n6_k$ = function () {
    return this.minus_c5ihzl_k$(1);
  };
  BigDecimal.prototype.abs_22cy_k$ = function () {
    return new BigDecimal(this.significand_1.abs_22cy_k$(), this.exponent_1, this.decimalMode_1);
  };
  BigDecimal.prototype.negate_hcqk8u_k$ = function () {
    return new BigDecimal(this.significand_1.negate_hcqk8u_k$(), this.exponent_1, this.decimalMode_1);
  };
  BigDecimal.prototype.pow_u6dvr2_k$ = function (exponent) {
    if (this.equals(Companion_getInstance_4().ZERO_1) ? exponent.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 : false) {
      throw ArithmeticException_init_$Create$('Negative exponentiation of zero is not defined.');
    }
    var result = this;
    var tmp;
    if (exponent.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var inductionVariable = new Long(0, 0);
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      tmp$ret$0 = exponent.minus_llf5ei_k$(new Long(1, 0));
      var last = tmp$ret$0;
      if (inductionVariable.compareTo_n4fqi2_k$(last) < 0)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
          result = result.times_ry0rn1_k$(this);
        }
         while (inductionVariable.compareTo_n4fqi2_k$(last) < 0);
      tmp = result;
    } else if (exponent.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      Companion_getInstance();
      if (exponent.equals(new Long(0, -2147483648))) {
        var inductionVariable_0 = new Long(0, 0);
        Companion_getInstance();
        var last_0 = new Long(-1, 2147483647);
        if (inductionVariable_0.compareTo_n4fqi2_k$(last_0) <= 0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0.plus_u6jwas_k$(new Long(1, 0));
            result = result.div_j6tfoo_k$(this);
          }
           while (!i_0.equals(last_0));
        result = result.div_j6tfoo_k$(this);
      } else {
        var inductionVariable_1 = new Long(0, 0);
        var tmp$ret$1;
        // Inline function 'kotlin.math.absoluteValue' call
        tmp$ret$1 = abs(exponent);
        var last_1 = tmp$ret$1;
        if (inductionVariable_1.compareTo_n4fqi2_k$(last_1) <= 0)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1.plus_u6jwas_k$(new Long(1, 0));
            result = result.div_j6tfoo_k$(this);
          }
           while (!i_1.equals(last_1));
      }
      tmp = result;
    } else {
      tmp = Companion_getInstance_4().ONE_1;
    }
    return tmp;
  };
  BigDecimal.prototype.signum_exb08b_k$ = function () {
    return this.significand_1.signum_exb08b_k$();
  };
  BigDecimal.prototype.intValue_6699zc_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().intValue_6699zc_k$(exactRequired);
  };
  BigDecimal.prototype.longValue_n92i4l_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().longValue_n92i4l_k$(exactRequired);
  };
  BigDecimal.prototype.byteValue_uywx5d_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().byteValue_uywx5d_k$(exactRequired);
  };
  BigDecimal.prototype.shortValue_yl9ynv_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().shortValue_yl9ynv_k$(exactRequired);
  };
  BigDecimal.prototype.uintValue_p7sneg_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().uintValue_p7sneg_k$(exactRequired);
  };
  BigDecimal.prototype.ulongValue_xcqapg_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().ulongValue_xcqapg_k$(exactRequired);
  };
  BigDecimal.prototype.ubyteValue_rrikek_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().ubyteValue_rrikek_k$(exactRequired);
  };
  BigDecimal.prototype.ushortValue_dp7rvm_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().ushortValue_dp7rvm_k$(exactRequired);
  };
  BigDecimal.prototype.isWholeNumber_olkfca_k$ = function () {
    var res = this.abs_22cy_k$().divrem_pxqwgg_k$(Companion_getInstance_4().ONE_1);
    var isWholeNumber = res.second_1.isZero_jihrta_k$();
    return isWholeNumber;
  };
  BigDecimal.prototype.floatValue_dv7hej_k$ = function (exactRequired) {
    if (exactRequired) {
      var exactPossible = true;
      if (this.exponent_1.compareTo_n4fqi2_k$(new Long(-45, -1)) < 0 ? true : this.exponent_1.compareTo_n4fqi2_k$(new Long(38, 0)) > 0) {
        exactPossible = false;
      }
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = this.precision_1.minus_llf5ei_k$(this.exponent_1);
      tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
      if (tmp$ret$0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tmp_0;
        if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
          var tmp_1 = Companion_getInstance_6().TEN_1;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp1_minus = this.precision_1.minus_llf5ei_k$(this.exponent_1);
          tmp$ret$1 = tmp1_minus.minus_llf5ei_k$(new Long(1, 0));
          tmp_0 = this.significand_1.div_rro038_k$(tmp_1.pow_u6dvr2_k$(tmp$ret$1));
        } else {
          tmp_0 = Companion_getInstance_6().ZERO_1;
        }
        var integerPart = tmp_0;
        var integerPartBitLength = get_chosenArithmetic().bitLength_1nuydl_k$(integerPart.magnitude_1);
        var tmp_2 = Companion_getInstance_6().TEN_1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        var tmp2_minus = this.precision_1.minus_llf5ei_k$(this.exponent_1);
        tmp$ret$2 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
        var fractionPart = this.significand_1.divrem_n4lz8w_k$(tmp_2.pow_u6dvr2_k$(tmp$ret$2)).remainder_1;
        var tmp_3 = new Long(-1, -1);
        var fractionConvertTemp = BigDecimal_init_$Create$(fractionPart, tmp_3, null, 4, null);
        var tmp$ret$3;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$3 = ArrayList_init_$Create$();
        var bitList = tmp$ret$3;
        var counter = 0;
        while (!fractionConvertTemp.equals(Companion_getInstance_4().ZERO_1) ? counter <= 24 : false) {
          var multiplied = fractionConvertTemp.times_vzczyd_k$(2);
          var tmp_4;
          if (multiplied.compareTo_m610zm_k$(Companion_getInstance_4().ONE_1) >= 0) {
            tmp_4 = 1;
          } else {
            tmp_4 = 0;
          }
          var bit = tmp_4;
          bitList.add_1j60pz_k$(bit);
          var tmp_5;
          if (bit === 1) {
            tmp_5 = multiplied.divrem_pxqwgg_k$(Companion_getInstance_4().TEN_1).second_1;
          } else {
            tmp_5 = multiplied;
          }
          fractionConvertTemp = tmp_5;
          var tmp0 = counter;
          counter = tmp0 + 1 | 0;
        }
        var bitSum = integerPartBitLength + bitList.get_size_woubt6_k$() | 0;
        tmp = bitSum;
      } else {
        var trailingZeroBits = get_chosenArithmetic().trailingZeroBits_21kjuo_k$(this.significand_1.magnitude_1);
        var bitSum_0 = get_chosenArithmetic().bitLength_1nuydl_k$(this.significand_1.magnitude_1);
        tmp = bitSum_0 - trailingZeroBits | 0;
      }
      var totalBits = tmp;
      if (totalBits > 24) {
        exactPossible = false;
      }
      if (!exactPossible) {
        throw ArithmeticException_init_$Create$('Value cannot be narrowed to float');
      }
    }
    var tmp$ret$4;
    // Inline function 'kotlin.Long.minus' call
    var tmp3_minus = this.precision_1;
    tmp$ret$4 = tmp3_minus.minus_llf5ei_k$(new Long(1, 0));
    var divExponent = tmp$ret$4.minus_llf5ei_k$(this.exponent_1);
    var f = this.significand_1.longValue_n92i4l_k$(exactRequired);
    var tmp_6;
    if (divExponent.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? divExponent.compareTo_n4fqi2_k$(toLong(Companion_getInstance_4().float10pow_1.length)) < 0 : false) {
      var tmp$ret$5;
      // Inline function 'kotlin.Long.div' call
      var tmp4_div = Companion_getInstance_4().float10pow_1[divExponent.toInt_1tsl84_k$()];
      tmp$ret$5 = f.toFloat_jhbgwv_k$() / tmp4_div;
      tmp_6 = tmp$ret$5;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.text.toFloat' call
      var tmp5_toFloat = this.toString();
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = toDouble(tmp5_toFloat);
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp0_unsafeCast;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp_6 = tmp$ret$8;
    }
    return tmp_6;
  };
  BigDecimal.prototype.doubleValue_lwfwgq_k$ = function (exactRequired) {
    if (exactRequired) {
      var exactPossible = true;
      if (this.exponent_1.compareTo_n4fqi2_k$(new Long(-324, -1)) < 0 ? true : this.exponent_1.compareTo_n4fqi2_k$(new Long(308, 0)) > 0) {
        exactPossible = false;
      }
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = this.precision_1.minus_llf5ei_k$(this.exponent_1);
      tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(new Long(1, 0));
      if (tmp$ret$0.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var tmp_0;
        if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
          var tmp_1 = Companion_getInstance_6().TEN_1;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp1_minus = this.precision_1.minus_llf5ei_k$(this.exponent_1);
          tmp$ret$1 = tmp1_minus.minus_llf5ei_k$(new Long(1, 0));
          tmp_0 = this.significand_1.div_rro038_k$(tmp_1.pow_u6dvr2_k$(tmp$ret$1));
        } else {
          tmp_0 = Companion_getInstance_6().ZERO_1;
        }
        var integerPart = tmp_0;
        var integerPartBitLength = get_chosenArithmetic().bitLength_1nuydl_k$(integerPart.magnitude_1);
        var tmp_2 = Companion_getInstance_6().TEN_1;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        var tmp2_minus = this.precision_1.minus_llf5ei_k$(this.exponent_1);
        tmp$ret$2 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
        var fractionPart = this.significand_1.divrem_n4lz8w_k$(tmp_2.pow_u6dvr2_k$(tmp$ret$2)).remainder_1;
        var tmp_3 = new Long(-1, -1);
        var fractionConvertTemp = BigDecimal_init_$Create$(fractionPart, tmp_3, null, 4, null);
        var tmp$ret$3;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$3 = ArrayList_init_$Create$();
        var bitList = tmp$ret$3;
        var counter = 0;
        while (!fractionConvertTemp.equals(Companion_getInstance_4().ZERO_1) ? counter <= 53 : false) {
          var multiplied = fractionConvertTemp.times_vzczyd_k$(2);
          var tmp_4;
          if (multiplied.compareTo_m610zm_k$(Companion_getInstance_4().ONE_1) >= 0) {
            tmp_4 = 1;
          } else {
            tmp_4 = 0;
          }
          var bit = tmp_4;
          bitList.add_1j60pz_k$(bit);
          var tmp_5;
          if (bit === 1) {
            tmp_5 = multiplied.divrem_pxqwgg_k$(Companion_getInstance_4().TEN_1).second_1;
          } else {
            tmp_5 = multiplied;
          }
          fractionConvertTemp = tmp_5;
          var tmp0 = counter;
          counter = tmp0 + 1 | 0;
        }
        var bitSum = integerPartBitLength + bitList.get_size_woubt6_k$() | 0;
        tmp = bitSum;
      } else {
        var trailingZeroBits = get_chosenArithmetic().trailingZeroBits_21kjuo_k$(this.significand_1.magnitude_1);
        var bitSum_0 = get_chosenArithmetic().bitLength_1nuydl_k$(this.significand_1.magnitude_1);
        tmp = bitSum_0 - trailingZeroBits | 0;
      }
      var totalBits = tmp;
      if (totalBits > 53) {
        exactPossible = false;
      }
      if (!exactPossible) {
        throw ArithmeticException_init_$Create$('Value cannot be narrowed to float');
      }
    }
    var tmp$ret$4;
    // Inline function 'kotlin.Long.minus' call
    var tmp3_minus = this.precision_1;
    tmp$ret$4 = tmp3_minus.minus_llf5ei_k$(new Long(1, 0));
    var divExponent = tmp$ret$4.minus_llf5ei_k$(this.exponent_1);
    var l = this.significand_1.longValue_n92i4l_k$(exactRequired);
    var tmp_6;
    Companion_getInstance();
    if (this.significand_1.compareTo_m610zm_k$(new Long(-1, 2147483647)) > 0) {
      tmp_6 = true;
    } else {
      Companion_getInstance();
      tmp_6 = this.significand_1.compareTo_m610zm_k$(new Long(0, -2147483648)) < 0;
    }
    if (tmp_6) {
      return toDouble(this.toString());
    }
    var tmp_7;
    if ((numberToLong(l.toDouble_ygsx0s_k$()).equals(l) ? divExponent.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 : false) ? divExponent.compareTo_n4fqi2_k$(toLong(Companion_getInstance_4().double10pow_1.length)) < 0 : false) {
      var tmp$ret$5;
      // Inline function 'kotlin.Long.div' call
      var tmp4_div = Companion_getInstance_4().double10pow_1[divExponent.toInt_1tsl84_k$()];
      tmp$ret$5 = l.toDouble_ygsx0s_k$() / tmp4_div;
      tmp_7 = tmp$ret$5;
    } else {
      tmp_7 = toDouble(this.toString());
    }
    return tmp_7;
  };
  BigDecimal.prototype.roundSignificand_g8q14u_k$ = function (decimalMode) {
    if (decimalMode == null) {
      return this;
    }
    return roundSignificand(Companion_getInstance_4(), this.significand_1, this.exponent_1, decimalMode);
  };
  BigDecimal.prototype.roundToDigitPosition_grth94_k$ = function (digitPosition, roundingMode) {
    if (digitPosition.equals(new Long(0, 0))) {
      throw ArithmeticException_init_$Create$('Rounding to 0 position is not supported');
    }
    var tmp;
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
      tmp = this.roundSignificand_g8q14u_k$(DecimalMode_init_$Create$(digitPosition, roundingMode, new Long(0, 0), 4, null));
    } else {
      var tmp_0 = this.plus_crvk61_k$(this.signum_exb08b_k$());
      tmp = tmp_0.roundSignificand_g8q14u_k$(DecimalMode_init_$Create$(digitPosition, roundingMode, new Long(0, 0), 4, null)).minus_c5ihzl_k$(this.signum_exb08b_k$());
    }
    var rounded = tmp;
    var tmp_1;
    if (this.decimalMode_1 == null) {
      tmp_1 = BigDecimal_init_$Create$(rounded.significand_1, rounded.exponent_1, null, 4, null);
    } else {
      tmp_1 = new BigDecimal(rounded.significand_1, rounded.exponent_1, this.decimalMode_1);
    }
    return tmp_1;
  };
  BigDecimal.prototype.roundToDigitPosition$default_f1k9gy_k$ = function (digitPosition, roundingMode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      roundingMode = this.roundingMode_1;
    return this.roundToDigitPosition_grth94_k$(digitPosition, roundingMode);
  };
  BigDecimal.prototype.roundToDigitPositionAfterDecimalPoint_eftuef_k$ = function (digitPosition, roundingMode) {
    if (digitPosition.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      throw ArithmeticException_init_$Create$("This method doesn't support negative digit position");
    }
    var tmp;
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = this.exponent_1.plus_u6jwas_k$(digitPosition);
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      tmp = this.roundToDigitPosition_grth94_k$(tmp$ret$0, roundingMode);
    } else if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$1 = digitPosition.plus_u6jwas_k$(new Long(1, 0));
      tmp = this.roundToDigitPosition_grth94_k$(tmp$ret$1, roundingMode);
    } else {
      throw RuntimeException_init_$Create$('Unexpected state');
    }
    var rounded = tmp;
    var tmp_0;
    if (this.decimalMode_1 == null) {
      tmp_0 = BigDecimal_init_$Create$(rounded.significand_1, rounded.exponent_1, null, 4, null);
    } else {
      tmp_0 = new BigDecimal(rounded.significand_1, rounded.exponent_1, this.decimalMode_1);
    }
    return tmp_0;
  };
  BigDecimal.prototype.compare_8894gk_k$ = function (other) {
    var tmp;
    if (this.exponent_1.equals(other.exponent_1) ? this.precision_1.equals(other.precision_1) : false) {
      tmp = this.significand_1.compare_5f4790_k$(other.significand_1);
    } else {
      var tmp0_container = bringSignificandToSameExponent(this, this, other);
      var preparedFirst = tmp0_container.component1_7eebsc_k$();
      var preparedSecond = tmp0_container.component2_7eebsb_k$();
      tmp = preparedFirst.compare_5f4790_k$(preparedSecond);
    }
    return tmp;
  };
  BigDecimal.prototype.compareTo_m610zm_k$ = function (other) {
    if (isNumber(other)) {
      if (RuntimePlatform_getInstance().currentPlatform_2rav3o_k$().equals(Platform_JS_getInstance())) {
        return javascriptNumberComparison(this, other);
      }
    }
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof BigDecimal) {
      tmp = this.compare_8894gk_k$(other);
    } else {
      if (tmp0_subject instanceof Long) {
        tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromLong_adx1cg_k$(other));
      } else {
        if (typeof tmp0_subject === 'number') {
          tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromInt_venwfw_k$(other));
        } else {
          if (typeof tmp0_subject === 'number') {
            tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromShort_4vs6zg_k$(other));
          } else {
            if (typeof tmp0_subject === 'number') {
              tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromByte_17zj7c_k$(other));
            } else {
              if (typeof tmp0_subject === 'number') {
                var tmp_0 = Companion_getInstance_4();
                tmp = this.compare_8894gk_k$(tmp_0.fromDouble$default_94rnga_k$(other, null, 2, null));
              } else {
                if (typeof tmp0_subject === 'number') {
                  var tmp_1 = Companion_getInstance_4();
                  tmp = this.compare_8894gk_k$(tmp_1.fromFloat$default_vch0z2_k$(other, null, 2, null));
                } else {
                  throw RuntimeException_init_$Create$('Invalid comparison type for BigDecimal: ' + getKClassFromExpression(other).get_simpleName_r6f8py_k$());
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  BigDecimal.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_m610zm_k$(isObject(other) ? other : THROW_CCE());
  };
  BigDecimal.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof BigDecimal) {
      tmp = this.compare_8894gk_k$(other);
    } else {
      if (tmp0_subject instanceof Long) {
        tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromLong_adx1cg_k$(other));
      } else {
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
          tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromInt_venwfw_k$(other));
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
            tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromShort_4vs6zg_k$(other));
          } else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
              tmp = this.compare_8894gk_k$(Companion_getInstance_4().fromByte_17zj7c_k$(other));
            } else {
              if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                var tmp_0 = Companion_getInstance_4();
                tmp = this.compare_8894gk_k$(tmp_0.fromDouble$default_94rnga_k$(other, null, 2, null));
              } else {
                if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                  var tmp_1 = Companion_getInstance_4();
                  tmp = this.compare_8894gk_k$(tmp_1.fromFloat$default_vch0z2_k$(other, null, 2, null));
                } else {
                  tmp = -1;
                }
              }
            }
          }
        }
      }
    }
    var comparison = tmp;
    return comparison === 0;
  };
  BigDecimal.prototype.hashCode = function () {
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return 0;
    }
    return removeTrailingZeroes(this, this).significand_1.hashCode() + this.exponent_1.hashCode() | 0;
  };
  BigDecimal.prototype.toString = function () {
    if (Companion_getInstance_4().useToStringExpanded_1) {
      return this.toStringExpanded_bbeedh_k$();
    }
    var significandString = this.significand_1.toString_flfcob_k$(10);
    var tmp;
    if (this.significand_1.compareTo_m610zm_k$(0) < 0) {
      tmp = 2;
    } else {
      tmp = 1;
    }
    var modifier = tmp;
    var tmp_0;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var tmp0_dropLastWhile = this.significand_1.toString();
      var inductionVariable = get_lastIndex(tmp0_dropLastWhile);
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'com.ionspin.kotlin.bignum.decimal.BigDecimal.toString.<anonymous>' call
          var tmp1__anonymous__uwfjfc = charSequenceGet(tmp0_dropLastWhile, index);
          tmp$ret$0 = equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(48)));
          if (!tmp$ret$0) {
            var tmp$ret$2;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index + 1 | 0;
            var tmp$ret$1;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$1 = tmp0_dropLastWhile;
            tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring);
            tmp$ret$3 = tmp$ret$2;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = '';
    }
    if (tmp$ret$3.length <= 1) {
      tmp_0 = '0';
    } else {
      tmp_0 = '';
    }
    var expand = tmp_0;
    var tmp_1;
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      tmp_1 = placeADotInString(this, significandString, significandString.length - modifier | 0) + expand + 'E+' + toString(this.exponent_1);
    } else if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      tmp_1 = placeADotInString(this, significandString, significandString.length - modifier | 0) + expand + 'E' + toString(this.exponent_1);
    } else if (this.exponent_1.equals(new Long(0, 0))) {
      tmp_1 = placeADotInString(this, significandString, significandString.length - modifier | 0) + expand;
    } else {
      throw RuntimeException_init_$Create$('Invalid state, please report a bug (Integer compareTo invalid)');
    }
    return tmp_1;
  };
  BigDecimal.prototype.toPlainString_6qmubk_k$ = function () {
    var expandedString = this.toStringExpanded_bbeedh_k$();
    var tmp;
    if (this.usingScale_1 ? this.scale_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 : false) {
      var split = split$default_0(expandedString, ['.'], false, 0, 6, null);
      var tmp_0;
      if (split.get_size_woubt6_k$() === 1) {
        tmp_0 = expandedString + '.' + times_4(_Char___init__impl__6a9atx(48), this.scale_1);
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.minus' call
        var tmp0_minus = this.scale_1;
        var tmp1_minus = split.get_fkrdnv_k$(1).length;
        tmp$ret$0 = tmp0_minus.minus_llf5ei_k$(toLong(tmp1_minus));
        var missingZeroCount = tmp$ret$0;
        var tmp_1;
        if (missingZeroCount.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
          tmp_1 = expandedString + times_4(_Char___init__impl__6a9atx(48), missingZeroCount);
        } else {
          tmp_1 = expandedString;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = expandedString;
    }
    var finalString = tmp;
    return finalString;
  };
  BigDecimal.prototype.toStringExpanded_bbeedh_k$ = function () {
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return '0';
    }
    var digits = this.significand_1.numberOfDecimalDigits_wouqvd_k$();
    if (this.exponent_1.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) > 0) {
      throw RuntimeException_init_$Create$('Invalid toStringExpanded request (exponent > Int.MAX_VALUE)');
    }
    var significandString = this.significand_1.toStringWithoutSign_3tydrs_k$(10);
    var tmp;
    if (this.significand_1.sign_1.equals(Sign_NEGATIVE_getInstance())) {
      tmp = '-';
    } else {
      tmp = '';
    }
    var sign = tmp;
    var tmp_0;
    if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = this.exponent_1.minus_llf5ei_k$(digits);
      tmp$ret$0 = tmp0_plus.plus_u6jwas_k$(new Long(1, 0));
      var diffBigInt = tmp$ret$0;
      var tmp_1;
      if (diffBigInt.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        var expandZeros = this.times_umxj7i_k$(diffBigInt, _Char___init__impl__6a9atx(48));
        tmp_1 = significandString + expandZeros;
      } else {
        tmp_1 = placeADotInStringExpanded(this, significandString, (significandString.length - this.exponent_1.toInt_1tsl84_k$() | 0) - 1 | 0);
      }
      tmp_0 = tmp_1;
    } else if (this.exponent_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.absoluteValue' call
      var tmp1__get_absoluteValue__rcem8i = this.exponent_1.toInt_1tsl84_k$();
      tmp$ret$1 = abs_0(tmp1__get_absoluteValue__rcem8i);
      var diffInt = tmp$ret$1;
      var tmp_2;
      if (diffInt > 0) {
        var tmp$ret$2;
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp2__get_absoluteValue__uu8ln7 = this.exponent_1;
        tmp$ret$2 = abs(tmp2__get_absoluteValue__uu8ln7);
        var expandZeros_0 = this.times_umxj7i_k$(tmp$ret$2, _Char___init__impl__6a9atx(48));
        tmp_2 = placeADotInStringExpanded(this, expandZeros_0 + significandString, (diffInt + significandString.length | 0) - 1 | 0);
      } else {
        tmp_2 = placeADotInStringExpanded(this, significandString, significandString.length - 1 | 0);
      }
      tmp_0 = tmp_2;
    } else if (this.exponent_1.equals(new Long(0, 0))) {
      if (digits.equals(new Long(1, 0))) {
        return sign + significandString;
      }
      tmp_0 = placeADotInStringExpanded(this, significandString, significandString.length - 1 | 0);
    } else {
      throw RuntimeException_init_$Create$('Invalid state, please report a bug (Integer compareTo invalid)');
    }
    var adjusted = tmp_0;
    return sign + adjusted;
  };
  BigDecimal.prototype.times_umxj7i_k$ = function (_this__u8e3s4, char) {
    if (_this__u8e3s4.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      throw RuntimeException_init_$Create$('Char cannot be multiplied with negative number');
    }
    var counter = _this__u8e3s4;
    var stringBuilder = StringBuilder_init_$Create$();
    while (counter.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      stringBuilder.append_t8oh9e_k$(char);
      var tmp0 = counter;
      counter = tmp0.dec_24n6_k$();
    }
    return stringBuilder.toString();
  };
  BigDecimal.$metadata$ = classMeta('BigDecimal', [BigNumber, CommonBigNumberOperations, NarrowingOperations, Comparable]);
  function toBigDecimal(_this__u8e3s4, exponentModifier, decimalMode) {
    var tmp = Companion_getInstance_4().fromDouble_sgw6pz_k$(_this__u8e3s4, decimalMode);
    var tmp0_elvis_lhs = exponentModifier;
    return tmp.moveDecimalPoint_jfacyu_k$(tmp0_elvis_lhs == null ? new Long(0, 0) : tmp0_elvis_lhs);
  }
  function toBigDecimal$default(_this__u8e3s4, exponentModifier, decimalMode, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exponentModifier = null;
    if (!(($mask0 & 2) === 0))
      decimalMode = null;
    return toBigDecimal(_this__u8e3s4, exponentModifier, decimalMode);
  }
  function DecimalMode_init_$Init$(decimalPrecision, roundingMode, scale, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      decimalPrecision = new Long(0, 0);
    if (!(($mask0 & 2) === 0))
      roundingMode = RoundingMode_NONE_getInstance();
    if (!(($mask0 & 4) === 0))
      scale = new Long(-1, -1);
    DecimalMode.call($this, decimalPrecision, roundingMode, scale);
    return $this;
  }
  function DecimalMode_init_$Create$(decimalPrecision, roundingMode, scale, $mask0, $marker) {
    return DecimalMode_init_$Init$(decimalPrecision, roundingMode, scale, $mask0, $marker, Object.create(DecimalMode.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = new Long(0, 0);
    tmp.DEFAULT_1 = DecimalMode_init_$Create$(tmp_0, null, new Long(0, 0), 7, null);
    this.US_CURRENCY_1 = new DecimalMode(new Long(30, 0), RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance(), new Long(2, 0));
  }
  Companion_0.prototype.get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  Companion_0.prototype.get_US_CURRENCY_c94pwp_k$ = function () {
    return this.US_CURRENCY_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DecimalMode(decimalPrecision, roundingMode, scale) {
    Companion_getInstance_5();
    this.decimalPrecision_1 = decimalPrecision;
    this.roundingMode_1 = roundingMode;
    this.scale_1 = scale;
    if (this.decimalPrecision_1.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      throw ArithmeticException_init_$Create$('Negative decimal precision is not allowed.');
    }
    this.isPrecisionUnlimited_1 = this.decimalPrecision_1.equals(new Long(0, 0));
    this.usingScale_1 = this.scale_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0;
    if ((!this.usingScale_1 ? this.decimalPrecision_1.equals(new Long(0, 0)) : false) ? !this.roundingMode_1.equals(RoundingMode_NONE_getInstance()) : false) {
      throw ArithmeticException_init_$Create$('Rounding mode with 0 digits precision.');
    }
    if (this.scale_1.compareTo_n4fqi2_k$(new Long(-1, -1)) < 0) {
      throw ArithmeticException_init_$Create$('Negative Scale is unsupported.');
    }
    if (this.usingScale_1 ? this.roundingMode_1.equals(RoundingMode_NONE_getInstance()) : false) {
      throw ArithmeticException_init_$Create$('Scale of ' + toString(this.scale_1) + ' digits to the right of the decimal requires a RoundingMode that is not NONE.');
    }
  }
  DecimalMode.prototype.get_decimalPrecision_1lnz0q_k$ = function () {
    return this.decimalPrecision_1;
  };
  DecimalMode.prototype.get_roundingMode_uxzxk0_k$ = function () {
    return this.roundingMode_1;
  };
  DecimalMode.prototype.get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  DecimalMode.prototype.get_isPrecisionUnlimited_ayf8d2_k$ = function () {
    return this.isPrecisionUnlimited_1;
  };
  DecimalMode.prototype.get_usingScale_nxygf_k$ = function () {
    return this.usingScale_1;
  };
  DecimalMode.prototype.component1_7eebsc_k$ = function () {
    return this.decimalPrecision_1;
  };
  DecimalMode.prototype.component2_7eebsb_k$ = function () {
    return this.roundingMode_1;
  };
  DecimalMode.prototype.component3_7eebsa_k$ = function () {
    return this.scale_1;
  };
  DecimalMode.prototype.copy_izjgfe_k$ = function (decimalPrecision, roundingMode, scale) {
    return new DecimalMode(decimalPrecision, roundingMode, scale);
  };
  DecimalMode.prototype.copy$default_7taprw_k$ = function (decimalPrecision, roundingMode, scale, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      decimalPrecision = this.decimalPrecision_1;
    if (!(($mask0 & 2) === 0))
      roundingMode = this.roundingMode_1;
    if (!(($mask0 & 4) === 0))
      scale = this.scale_1;
    return this.copy_izjgfe_k$(decimalPrecision, roundingMode, scale);
  };
  DecimalMode.prototype.toString = function () {
    return 'DecimalMode(decimalPrecision=' + toString(this.decimalPrecision_1) + ', roundingMode=' + this.roundingMode_1 + ', scale=' + toString(this.scale_1) + ')';
  };
  DecimalMode.prototype.hashCode = function () {
    var result = this.decimalPrecision_1.hashCode();
    result = imul(result, 31) + this.roundingMode_1.hashCode() | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    return result;
  };
  DecimalMode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecimalMode))
      return false;
    var tmp0_other_with_cast = other instanceof DecimalMode ? other : THROW_CCE();
    if (!this.decimalPrecision_1.equals(tmp0_other_with_cast.decimalPrecision_1))
      return false;
    if (!this.roundingMode_1.equals(tmp0_other_with_cast.roundingMode_1))
      return false;
    if (!this.scale_1.equals(tmp0_other_with_cast.scale_1))
      return false;
    return true;
  };
  DecimalMode.$metadata$ = classMeta('DecimalMode');
  var RoundingMode_FLOOR_instance;
  var RoundingMode_CEILING_instance;
  var RoundingMode_AWAY_FROM_ZERO_instance;
  var RoundingMode_TOWARDS_ZERO_instance;
  var RoundingMode_NONE_instance;
  var RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_instance;
  var RoundingMode_ROUND_HALF_TOWARDS_ZERO_instance;
  var RoundingMode_ROUND_HALF_CEILING_instance;
  var RoundingMode_ROUND_HALF_FLOOR_instance;
  var RoundingMode_ROUND_HALF_TO_EVEN_instance;
  var RoundingMode_ROUND_HALF_TO_ODD_instance;
  function values_2() {
    return [RoundingMode_FLOOR_getInstance(), RoundingMode_CEILING_getInstance(), RoundingMode_AWAY_FROM_ZERO_getInstance(), RoundingMode_TOWARDS_ZERO_getInstance(), RoundingMode_NONE_getInstance(), RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance(), RoundingMode_ROUND_HALF_TOWARDS_ZERO_getInstance(), RoundingMode_ROUND_HALF_CEILING_getInstance(), RoundingMode_ROUND_HALF_FLOOR_getInstance(), RoundingMode_ROUND_HALF_TO_EVEN_getInstance(), RoundingMode_ROUND_HALF_TO_ODD_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'FLOOR':
        return RoundingMode_FLOOR_getInstance();
      case 'CEILING':
        return RoundingMode_CEILING_getInstance();
      case 'AWAY_FROM_ZERO':
        return RoundingMode_AWAY_FROM_ZERO_getInstance();
      case 'TOWARDS_ZERO':
        return RoundingMode_TOWARDS_ZERO_getInstance();
      case 'NONE':
        return RoundingMode_NONE_getInstance();
      case 'ROUND_HALF_AWAY_FROM_ZERO':
        return RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance();
      case 'ROUND_HALF_TOWARDS_ZERO':
        return RoundingMode_ROUND_HALF_TOWARDS_ZERO_getInstance();
      case 'ROUND_HALF_CEILING':
        return RoundingMode_ROUND_HALF_CEILING_getInstance();
      case 'ROUND_HALF_FLOOR':
        return RoundingMode_ROUND_HALF_FLOOR_getInstance();
      case 'ROUND_HALF_TO_EVEN':
        return RoundingMode_ROUND_HALF_TO_EVEN_getInstance();
      case 'ROUND_HALF_TO_ODD':
        return RoundingMode_ROUND_HALF_TO_ODD_getInstance();
      default:
        RoundingMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RoundingMode_entriesInitialized;
  function RoundingMode_initEntries() {
    if (RoundingMode_entriesInitialized)
      return Unit_getInstance();
    RoundingMode_entriesInitialized = true;
    RoundingMode_FLOOR_instance = new RoundingMode('FLOOR', 0);
    RoundingMode_CEILING_instance = new RoundingMode('CEILING', 1);
    RoundingMode_AWAY_FROM_ZERO_instance = new RoundingMode('AWAY_FROM_ZERO', 2);
    RoundingMode_TOWARDS_ZERO_instance = new RoundingMode('TOWARDS_ZERO', 3);
    RoundingMode_NONE_instance = new RoundingMode('NONE', 4);
    RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_instance = new RoundingMode('ROUND_HALF_AWAY_FROM_ZERO', 5);
    RoundingMode_ROUND_HALF_TOWARDS_ZERO_instance = new RoundingMode('ROUND_HALF_TOWARDS_ZERO', 6);
    RoundingMode_ROUND_HALF_CEILING_instance = new RoundingMode('ROUND_HALF_CEILING', 7);
    RoundingMode_ROUND_HALF_FLOOR_instance = new RoundingMode('ROUND_HALF_FLOOR', 8);
    RoundingMode_ROUND_HALF_TO_EVEN_instance = new RoundingMode('ROUND_HALF_TO_EVEN', 9);
    RoundingMode_ROUND_HALF_TO_ODD_instance = new RoundingMode('ROUND_HALF_TO_ODD', 10);
  }
  function RoundingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RoundingMode.$metadata$ = classMeta('RoundingMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function RoundingMode_FLOOR_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_FLOOR_instance;
  }
  function RoundingMode_CEILING_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_CEILING_instance;
  }
  function RoundingMode_AWAY_FROM_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_AWAY_FROM_ZERO_instance;
  }
  function RoundingMode_TOWARDS_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_TOWARDS_ZERO_instance;
  }
  function RoundingMode_NONE_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_NONE_instance;
  }
  function RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_instance;
  }
  function RoundingMode_ROUND_HALF_TOWARDS_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_TOWARDS_ZERO_instance;
  }
  function RoundingMode_ROUND_HALF_CEILING_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_CEILING_instance;
  }
  function RoundingMode_ROUND_HALF_FLOOR_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_FLOOR_instance;
  }
  function RoundingMode_ROUND_HALF_TO_EVEN_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_TO_EVEN_instance;
  }
  function RoundingMode_ROUND_HALF_TO_ODD_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_TO_ODD_instance;
  }
  function _get_arithmetic__88c6an($this) {
    return $this.arithmetic_1;
  }
  function _get_endInclusive__c3dm3e($this) {
    return $this.endInclusive_1;
  }
  function _set_current__qj3kk($this, _set____db54di) {
    $this.current_1 = _set____db54di;
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function BigInteger_init_$Init$(long, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromLong_he24gz_k$(long);
    var tmp$ret$0;
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    var tmp0_determinSignFromNumber = Companion_getInstance_6();
    var tmp0_subject = getKClass(Long);
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (long instanceof Long)
        long;
      else
        THROW_CCE();
      tmp_0 = long.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : long.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof long === 'number')
        long;
      else
        THROW_CCE();
      tmp_0 = long < 0 ? Sign_NEGATIVE_getInstance() : long > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof long === 'number')
        long;
      else
        THROW_CCE();
      tmp_0 = long < 0 ? Sign_NEGATIVE_getInstance() : long > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof long === 'number')
        long;
      else
        THROW_CCE();
      tmp_0 = long < 0 ? Sign_NEGATIVE_getInstance() : long > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + getKClass(Long));
    }
    tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$(long) {
    return BigInteger_init_$Init$(long, Object.create(BigInteger.prototype));
  }
  function BigInteger_init_$Init$_0(int, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromInt_o8kqpb_k$(int);
    var tmp$ret$0;
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    var tmp0_determinSignFromNumber = Companion_getInstance_6();
    var tmp0_subject = PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$();
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (int instanceof Long)
        int;
      else
        THROW_CCE();
      tmp_0 = int.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : int.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof int === 'number')
        int;
      else
        THROW_CCE();
      tmp_0 = int < 0 ? Sign_NEGATIVE_getInstance() : int > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof int === 'number')
        int;
      else
        THROW_CCE();
      tmp_0 = int < 0 ? Sign_NEGATIVE_getInstance() : int > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof int === 'number')
        int;
      else
        THROW_CCE();
      tmp_0 = int < 0 ? Sign_NEGATIVE_getInstance() : int > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$());
    }
    tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$_0(int) {
    return BigInteger_init_$Init$_0(int, Object.create(BigInteger.prototype));
  }
  function BigInteger_init_$Init$_1(short, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromShort_j5p27l_k$(short);
    var tmp$ret$0;
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    var tmp0_determinSignFromNumber = Companion_getInstance_6();
    var tmp0_subject = PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$();
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (short instanceof Long)
        short;
      else
        THROW_CCE();
      tmp_0 = short.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : short.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof short === 'number')
        short;
      else
        THROW_CCE();
      tmp_0 = short < 0 ? Sign_NEGATIVE_getInstance() : short > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof short === 'number')
        short;
      else
        THROW_CCE();
      tmp_0 = short < 0 ? Sign_NEGATIVE_getInstance() : short > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof short === 'number')
        short;
      else
        THROW_CCE();
      tmp_0 = short < 0 ? Sign_NEGATIVE_getInstance() : short > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$());
    }
    tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$_1(short) {
    return BigInteger_init_$Init$_1(short, Object.create(BigInteger.prototype));
  }
  function BigInteger_init_$Init$_2(byte, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromByte_vyarwl_k$(byte);
    var tmp$ret$0;
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    var tmp0_determinSignFromNumber = Companion_getInstance_6();
    var tmp0_subject = PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$();
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (byte instanceof Long)
        byte;
      else
        THROW_CCE();
      tmp_0 = byte.compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : byte.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof byte === 'number')
        byte;
      else
        THROW_CCE();
      tmp_0 = byte < 0 ? Sign_NEGATIVE_getInstance() : byte > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof byte === 'number')
        byte;
      else
        THROW_CCE();
      tmp_0 = byte < 0 ? Sign_NEGATIVE_getInstance() : byte > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof byte === 'number')
        byte;
      else
        THROW_CCE();
      tmp_0 = byte < 0 ? Sign_NEGATIVE_getInstance() : byte > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$());
    }
    tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$_2(byte) {
    return BigInteger_init_$Init$_2(byte, Object.create(BigInteger.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.arithmetic_1 = get_chosenArithmetic();
    this.ZERO_1 = new BigInteger(this.arithmetic_1.get_ZERO_r1gpek_k$(), Sign_ZERO_getInstance());
    this.ONE_1 = new BigInteger(this.arithmetic_1.get_ONE_qk94fk_k$(), Sign_POSITIVE_getInstance());
    this.TWO_1 = new BigInteger(this.arithmetic_1.get_TWO_2fvlu2_k$(), Sign_POSITIVE_getInstance());
    this.TEN_1 = new BigInteger(this.arithmetic_1.get_TEN_32vuwp_k$(), Sign_POSITIVE_getInstance());
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.log10' call
    tmp$ret$0 = log10(2.0);
    tmp.LOG_10_OF_2__1 = tmp$ret$0;
  }
  Companion_1.prototype.get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  Companion_1.prototype.get_ONE_18jnkz_k$ = function () {
    return this.ONE_1;
  };
  Companion_1.prototype.get_TWO_18jjnh_k$ = function () {
    return this.TWO_1;
  };
  Companion_1.prototype.get_TEN_18jk30_k$ = function () {
    return this.TEN_1;
  };
  Companion_1.prototype.get_LOG_10_OF_2_5oia3e_k$ = function () {
    return this.LOG_10_OF_2__1;
  };
  Companion_1.prototype.createFromWordArray_7zxsw7_k$ = function (wordArray, requestedSign) {
    return new BigInteger(wordArray, requestedSign);
  };
  Companion_1.prototype.parseString_d68ls2_k$ = function (string, base) {
    if (base < 2 ? true : base > 36) {
      throw NumberFormatException_init_$Create$('Unsupported base: ' + base + '. Supported base range is from 2 to 36');
    }
    var tmp = _Char___init__impl__6a9atx(46);
    var decimal = contains$default(string, tmp, false, 2, null);
    if (decimal) {
      var bigDecimal = Companion_getInstance_4().parseString_osqjrx_k$(string);
      var isActuallyDecimal = bigDecimal.minus_us1adz_k$(bigDecimal.floor_1m2c5o_k$()).compareTo_m610zm_k$(0) > 0;
      if (isActuallyDecimal) {
        throw NumberFormatException_init_$Create$('Supplied string is decimal, which cannot be converted to BigInteger without precision loss.');
      }
      return bigDecimal.toBigInteger_xwiad5_k$();
    }
    var signed = equals(new Char(charSequenceGet(string, 0)), new Char(_Char___init__impl__6a9atx(45))) ? true : equals(new Char(charSequenceGet(string, 0)), new Char(_Char___init__impl__6a9atx(43)));
    var tmp_0;
    if (signed) {
      if (string.length === 1) {
        throw NumberFormatException_init_$Create$('Invalid big integer: ' + string);
      }
      var tmp_1;
      if (equals(new Char(charSequenceGet(string, 0)), new Char(_Char___init__impl__6a9atx(45)))) {
        tmp_1 = Sign_NEGATIVE_getInstance();
      } else {
        tmp_1 = Sign_POSITIVE_getInstance();
      }
      var isNegative = tmp_1;
      if (string.length === 2 ? equals(new Char(charSequenceGet(string, 1)), new Char(_Char___init__impl__6a9atx(48))) : false) {
        return this.ZERO_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = string.length;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = string;
      tmp$ret$1 = tmp$ret$0.substring(1, tmp0_substring);
      tmp_0 = new BigInteger(this.arithmetic_1.parseForBase_1vllqq_k$(tmp$ret$1, base), isNegative);
    } else {
      if (string.length === 1 ? equals(new Char(charSequenceGet(string, 0)), new Char(_Char___init__impl__6a9atx(48))) : false) {
        return this.ZERO_1;
      }
      tmp_0 = new BigInteger(this.arithmetic_1.parseForBase_1vllqq_k$(string, base), Sign_POSITIVE_getInstance());
    }
    return tmp_0;
  };
  Companion_1.prototype.fromWordArray_6ihew3_k$ = function (wordArray, sign) {
    return new BigInteger(wordArray, sign);
  };
  Companion_1.prototype.fromBigInteger_30ftd_k$ = function (bigInteger) {
    return bigInteger;
  };
  Companion_1.prototype.fromULong_6igdxg_k$ = function (uLong) {
    return new BigInteger(this.arithmetic_1.fromULong_hblzkh_k$(uLong), Sign_POSITIVE_getInstance());
  };
  Companion_1.prototype.fromUInt_vesuxg_k$ = function (uInt) {
    return new BigInteger(this.arithmetic_1.fromUInt_cy4kv3_k$(uInt), Sign_POSITIVE_getInstance());
  };
  Companion_1.prototype.fromUShort_puylkq_k$ = function (uShort) {
    return new BigInteger(this.arithmetic_1.fromUShort_nm7bax_k$(uShort), Sign_POSITIVE_getInstance());
  };
  Companion_1.prototype.fromUByte_6dwq2s_k$ = function (uByte) {
    return new BigInteger(this.arithmetic_1.fromUByte_mymlzl_k$(uByte), Sign_POSITIVE_getInstance());
  };
  Companion_1.prototype.fromLong_adx1cg_k$ = function (long) {
    return BigInteger_init_$Create$(long);
  };
  Companion_1.prototype.fromInt_venwfw_k$ = function (int) {
    return BigInteger_init_$Create$_0(int);
  };
  Companion_1.prototype.fromShort_4vs6zg_k$ = function (short) {
    return BigInteger_init_$Create$_1(short);
  };
  Companion_1.prototype.fromByte_17zj7c_k$ = function (byte) {
    return BigInteger_init_$Create$_2(byte);
  };
  Companion_1.prototype.tryFromFloat_2gb71f_k$ = function (float, exactRequired) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$0 = Math.floor(float);
    var floatDecimalPart = float - tmp$ret$0;
    var tmp = Companion_getInstance_4();
    var tmp$ret$1;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$1 = Math.floor(float);
    var bigDecimal = tmp.fromFloat_ohkipj_k$(tmp$ret$1, null);
    if (exactRequired) {
      if (floatDecimalPart > 0) {
        throw ArithmeticException_init_$Create$('Cant create BigInteger without precision loss, and exact  value was required');
      }
    }
    return bigDecimal.toBigInteger_xwiad5_k$();
  };
  Companion_1.prototype.tryFromDouble_qi6grp_k$ = function (double, exactRequired) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$0 = Math.floor(double);
    var doubleDecimalPart = double - tmp$ret$0;
    var tmp = Companion_getInstance_4();
    var tmp$ret$1;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$1 = Math.floor(double);
    var bigDecimal = tmp.fromDouble_sgw6pz_k$(tmp$ret$1, null);
    if (exactRequired) {
      if (doubleDecimalPart > 0.0) {
        throw ArithmeticException_init_$Create$('Cant create BigInteger without precision loss, and exact  value was required');
      }
    }
    return bigDecimal.toBigInteger_xwiad5_k$();
  };
  Companion_1.prototype.max_bba1vg_k$ = function (first, second) {
    var tmp;
    if (first.compareTo_m610zm_k$(second) > 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  Companion_1.prototype.max_y1yz6u_k$ = function (first, second) {
    var tmp = first instanceof BigInteger ? first : THROW_CCE();
    return this.max_bba1vg_k$(tmp, second instanceof BigInteger ? second : THROW_CCE());
  };
  Companion_1.prototype.min_57hfn6_k$ = function (first, second) {
    var tmp;
    if (first.compareTo_m610zm_k$(second) < 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  Companion_1.prototype.min_ymppdk_k$ = function (first, second) {
    var tmp = first instanceof BigInteger ? first : THROW_CCE();
    return this.min_57hfn6_k$(tmp, second instanceof BigInteger ? second : THROW_CCE());
  };
  Companion_1.prototype.fromUByteArray_c5iqnc_k$ = function (source, sign) {
    var result = this.arithmetic_1.fromUByteArray_2uik0t_k$(source);
    return new BigInteger(result, sign);
  };
  Companion_1.prototype.fromByteArray_9bkqas_k$ = function (source, sign) {
    var result = this.arithmetic_1.fromByteArray_eoj773_k$(source);
    return new BigInteger(result, sign);
  };
  Companion_1.$metadata$ = objectMeta('Companion', [Creator, Util, ByteArrayDeserializable]);
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function isResultZero($this, resultMagnitude) {
    return Companion_getInstance_6().arithmetic_1.compare_h3oy0f_k$(resultMagnitude, Companion_getInstance_6().arithmetic_1.get_ZERO_r1gpek_k$()) === 0;
  }
  function d1reciprocalRecursive($this) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.reciprocal_gjjqls_k$($this.magnitude_1).first_1.storage_1, $this.sign_1);
  }
  function naiveGcd($this, other) {
    var u = $this;
    var v = other;
    while (!v.equals(Companion_getInstance_6().ZERO_1)) {
      var tmpU = u;
      u = v;
      v = tmpU.rem_jqghgr_k$(v);
    }
    return u;
  }
  function exponentiationBySquaring($this, y, x, n) {
    var $this_0 = $this;
    var y_0 = y;
    var x_0 = x;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (n_0.equals(Companion_getInstance_6().ZERO_1)) {
          tmp = y_0;
        } else if (n_0.equals(Companion_getInstance_6().ONE_1)) {
          tmp = x_0.times_y2637j_k$(y_0);
        } else if (n_0.mod_1rrww9_k$(Companion_getInstance_6().TWO_1).equals(Companion_getInstance_6().ZERO_1)) {
          var tmp0 = $this_0;
          var tmp1 = y_0;
          var tmp2 = x_0.times_y2637j_k$(x_0);
          var tmp3 = n_0.div_pipt5c_k$(2);
          $this_0 = tmp0;
          y_0 = tmp1;
          x_0 = tmp2;
          n_0 = tmp3;
          continue $l$0;
        } else {
          var tmp4 = $this_0;
          var tmp5 = x_0.times_y2637j_k$(y_0);
          var tmp6 = x_0.times_y2637j_k$(x_0);
          var tmp7 = n_0.minus_c5ihzl_k$(1).div_pipt5c_k$(2);
          $this_0 = tmp4;
          y_0 = tmp5;
          x_0 = tmp6;
          n_0 = tmp7;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function javascriptNumberComparison_0($this, number) {
    var double = numberToDouble(number);
    var tmp;
    Companion_getInstance();
    if (double > (new Long(-1, 2147483647)).toDouble_ygsx0s_k$()) {
      var tmp_0 = Companion_getInstance_6();
      var tmp_1 = double.toString();
      tmp = $this.compare_5f4790_k$(tmp_0.parseString$default_thoqxr_k$(tmp_1, 0, 2, null));
    } else {
      if (double % 1 === 0.0) {
        tmp = $this.compare_5f4790_k$(Companion_getInstance_6().fromLong_adx1cg_k$(numberToLong(number)));
      } else {
        var tmp_2 = numberToDouble(number);
        tmp = $this.compareFloatAndBigInt_hgy8p2_k$(tmp_2, BigInteger$javascriptNumberComparison$lambda($this));
      }
    }
    return tmp;
  }
  function QuotientAndRemainder(quotient, remainder) {
    this.quotient_1 = quotient;
    this.remainder_1 = remainder;
  }
  QuotientAndRemainder.prototype.get_quotient_ooukvo_k$ = function () {
    return this.quotient_1;
  };
  QuotientAndRemainder.prototype.get_remainder_mwecu4_k$ = function () {
    return this.remainder_1;
  };
  QuotientAndRemainder.prototype.component1_7eebsc_k$ = function () {
    return this.quotient_1;
  };
  QuotientAndRemainder.prototype.component2_7eebsb_k$ = function () {
    return this.remainder_1;
  };
  QuotientAndRemainder.prototype.copy_l9y97v_k$ = function (quotient, remainder) {
    return new QuotientAndRemainder(quotient, remainder);
  };
  QuotientAndRemainder.prototype.copy$default_hpien0_k$ = function (quotient, remainder, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      quotient = this.quotient_1;
    if (!(($mask0 & 2) === 0))
      remainder = this.remainder_1;
    return this.copy_l9y97v_k$(quotient, remainder);
  };
  QuotientAndRemainder.prototype.toString = function () {
    return 'QuotientAndRemainder(quotient=' + this.quotient_1 + ', remainder=' + this.remainder_1 + ')';
  };
  QuotientAndRemainder.prototype.hashCode = function () {
    var result = this.quotient_1.hashCode();
    result = imul(result, 31) + this.remainder_1.hashCode() | 0;
    return result;
  };
  QuotientAndRemainder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuotientAndRemainder))
      return false;
    var tmp0_other_with_cast = other instanceof QuotientAndRemainder ? other : THROW_CCE();
    if (!this.quotient_1.equals(tmp0_other_with_cast.quotient_1))
      return false;
    if (!this.remainder_1.equals(tmp0_other_with_cast.remainder_1))
      return false;
    return true;
  };
  QuotientAndRemainder.$metadata$ = classMeta('QuotientAndRemainder');
  function SqareRootAndRemainder(squareRoot, remainder) {
    this.squareRoot_1 = squareRoot;
    this.remainder_1 = remainder;
  }
  SqareRootAndRemainder.prototype.get_squareRoot_ee9c88_k$ = function () {
    return this.squareRoot_1;
  };
  SqareRootAndRemainder.prototype.get_remainder_mwecu4_k$ = function () {
    return this.remainder_1;
  };
  SqareRootAndRemainder.prototype.component1_7eebsc_k$ = function () {
    return this.squareRoot_1;
  };
  SqareRootAndRemainder.prototype.component2_7eebsb_k$ = function () {
    return this.remainder_1;
  };
  SqareRootAndRemainder.prototype.copy_l9y97v_k$ = function (squareRoot, remainder) {
    return new SqareRootAndRemainder(squareRoot, remainder);
  };
  SqareRootAndRemainder.prototype.copy$default_hpien0_k$ = function (squareRoot, remainder, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      squareRoot = this.squareRoot_1;
    if (!(($mask0 & 2) === 0))
      remainder = this.remainder_1;
    return this.copy_l9y97v_k$(squareRoot, remainder);
  };
  SqareRootAndRemainder.prototype.toString = function () {
    return 'SqareRootAndRemainder(squareRoot=' + this.squareRoot_1 + ', remainder=' + this.remainder_1 + ')';
  };
  SqareRootAndRemainder.prototype.hashCode = function () {
    var result = this.squareRoot_1.hashCode();
    result = imul(result, 31) + this.remainder_1.hashCode() | 0;
    return result;
  };
  SqareRootAndRemainder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SqareRootAndRemainder))
      return false;
    var tmp0_other_with_cast = other instanceof SqareRootAndRemainder ? other : THROW_CCE();
    if (!this.squareRoot_1.equals(tmp0_other_with_cast.squareRoot_1))
      return false;
    if (!this.remainder_1.equals(tmp0_other_with_cast.remainder_1))
      return false;
    return true;
  };
  SqareRootAndRemainder.$metadata$ = classMeta('SqareRootAndRemainder');
  function BigIntegerRange(start, endInclusive) {
    this.start_1 = start;
    this.endInclusive_1 = endInclusive;
  }
  BigIntegerRange.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  BigIntegerRange.prototype.get_endInclusive_r07xpi_k$ = function () {
    return this.endInclusive_1;
  };
  BigIntegerRange.prototype.iterator_jk1svi_k$ = function () {
    return new BigIntegerIterator(this.start_1, this.endInclusive_1);
  };
  BigIntegerRange.$metadata$ = classMeta('BigIntegerRange', [ClosedRange, Iterable]);
  function BigIntegerIterator(start, endInclusive) {
    this.endInclusive_1 = endInclusive;
    this.current_1 = start;
  }
  BigIntegerIterator.prototype.hasNext_bitz1p_k$ = function () {
    return this.current_1.compareTo_m610zm_k$(this.endInclusive_1) <= 0;
  };
  BigIntegerIterator.prototype.next_20eer_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.current_1;
    tmp0_this.current_1 = tmp1.inc_28ke_k$();
    return tmp1;
  };
  BigIntegerIterator.$metadata$ = classMeta('BigIntegerIterator', [Iterator]);
  function BigInteger$compareTo$lambda(this$0) {
    return function (it) {
      return this$0.compare_5f4790_k$(it);
    };
  }
  function BigInteger$compareTo$lambda_0(this$0) {
    return function (it) {
      return this$0.compare_5f4790_k$(it);
    };
  }
  function BigInteger$javascriptNumberComparison$lambda(this$0) {
    return function (it) {
      return this$0.compare_5f4790_k$(it);
    };
  }
  function BigInteger(wordArray, requestedSign) {
    Companion_getInstance_6();
    if (requestedSign.equals(Sign_ZERO_getInstance())) {
      // Inline function 'kotlin.require' call
      var tmp0_require = isResultZero(this, wordArray);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.BigInteger.<anonymous>' call
        tmp$ret$0 = 'sign should be Sign.ZERO iff magnitude has a value of 0';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    this.magnitude_1 = BigInteger63Arithmetic_getInstance().removeLeadingZeros_u2w242_k$(wordArray);
    var tmp = this;
    var tmp_0;
    if (isResultZero(this, this.magnitude_1)) {
      tmp_0 = Sign_ZERO_getInstance();
    } else {
      tmp_0 = requestedSign;
    }
    tmp.sign_1 = tmp_0;
    this.numberOfWords_1 = _ULongArray___get_size__impl__ju6dtr(this.magnitude_1);
    this.stringRepresentation_1 = null;
  }
  BigInteger.prototype.getCreator_y5p0ja_k$ = function () {
    return Companion_getInstance_6();
  };
  BigInteger.prototype.getInstance_rhh4hh_k$ = function () {
    return this;
  };
  BigInteger.prototype.getBackingArrayCopy_mxscn8_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.magnitude_1;
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf)));
    return tmp$ret$0;
  };
  BigInteger.prototype.getSign_18qril_k$ = function () {
    return this.sign_1;
  };
  BigInteger.prototype.get_magnitude_w2nxk6_k$ = function () {
    return this.magnitude_1;
  };
  BigInteger.prototype.get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  BigInteger.prototype.get_numberOfWords_n1dbq8_k$ = function () {
    return this.numberOfWords_1;
  };
  BigInteger.prototype.set_stringRepresentation_tbgkhg_k$ = function (_set____db54di) {
    this.stringRepresentation_1 = _set____db54di;
  };
  BigInteger.prototype.get_stringRepresentation_aq9wmx_k$ = function () {
    return this.stringRepresentation_1;
  };
  BigInteger.prototype.add_fi1w1k_k$ = function (other) {
    var comparison = Companion_getInstance_6().arithmetic_1.compare_h3oy0f_k$(this.magnitude_1, other.magnitude_1);
    var tmp;
    if (other.sign_1.equals(this.sign_1)) {
      return new BigInteger(Companion_getInstance_6().arithmetic_1.add_kdhu68_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
    } else {
      var tmp_0;
      if (comparison > 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_jhqa8d_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
      } else if (comparison < 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_jhqa8d_k$(other.magnitude_1, this.magnitude_1), other.sign_1);
      } else {
        tmp_0 = Companion_getInstance_6().ZERO_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  BigInteger.prototype.add_nl3k2s_k$ = function (other) {
    return this.add_fi1w1k_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.subtract_71fz8b_k$ = function (other) {
    var comparison = Companion_getInstance_6().arithmetic_1.compare_h3oy0f_k$(this.magnitude_1, other.magnitude_1);
    if (this.equals(Companion_getInstance_6().ZERO_1)) {
      return other.negate_hcqk8u_k$();
    }
    if (other.equals(Companion_getInstance_6().ZERO_1)) {
      return this;
    }
    var tmp;
    if (other.sign_1.equals(this.sign_1)) {
      var tmp_0;
      if (comparison > 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_jhqa8d_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
      } else if (comparison < 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_jhqa8d_k$(other.magnitude_1, this.magnitude_1), this.sign_1.not_2cb7_k$());
      } else {
        tmp_0 = Companion_getInstance_6().ZERO_1;
      }
      tmp = tmp_0;
    } else {
      return new BigInteger(Companion_getInstance_6().arithmetic_1.add_kdhu68_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
    }
    return tmp;
  };
  BigInteger.prototype.subtract_ogq3v3_k$ = function (other) {
    return this.subtract_71fz8b_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.multiply_rae76d_k$ = function (other) {
    if (this.isZero_jihrta_k$() ? true : other.isZero_jihrta_k$()) {
      return Companion_getInstance_6().ZERO_1;
    }
    if (other.equals(Companion_getInstance_6().ONE_1)) {
      return this;
    }
    var tmp;
    if (!this.sign_1.equals(other.sign_1)) {
      tmp = Sign_NEGATIVE_getInstance();
    } else {
      tmp = Sign_POSITIVE_getInstance();
    }
    var sign = tmp;
    var tmp_0;
    if (sign.equals(Sign_POSITIVE_getInstance())) {
      tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.multiply_u6tj2b_k$(this.magnitude_1, other.magnitude_1), sign);
    } else {
      tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.multiply_u6tj2b_k$(this.magnitude_1, other.magnitude_1), sign);
    }
    return tmp_0;
  };
  BigInteger.prototype.multiply_cwkmht_k$ = function (other) {
    return this.multiply_rae76d_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.divide_2s2g0w_k$ = function (other) {
    if (other.isZero_jihrta_k$()) {
      throw ArithmeticException_init_$Create$('Division by zero! ' + this + ' / ' + other);
    }
    var result = Companion_getInstance_6().arithmetic_1.divide_talz8b_k$(this.magnitude_1, other.magnitude_1).first_1.storage_1;
    var tmp;
    if (equals(result, Companion_getInstance_6().arithmetic_1.get_ZERO_r1gpek_k$())) {
      tmp = Companion_getInstance_6().ZERO_1;
    } else {
      var tmp_0;
      if (!this.sign_1.equals(other.sign_1)) {
        tmp_0 = Sign_NEGATIVE_getInstance();
      } else {
        tmp_0 = Sign_POSITIVE_getInstance();
      }
      var sign = tmp_0;
      tmp = new BigInteger(result, sign);
    }
    return tmp;
  };
  BigInteger.prototype.divide_zbvjws_k$ = function (other) {
    return this.divide_2s2g0w_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.remainder_8slqbw_k$ = function (other) {
    if (other.isZero_jihrta_k$()) {
      throw ArithmeticException_init_$Create$('Division by zero! ' + this + ' / ' + other);
    }
    var tmp;
    if (!this.sign_1.equals(other.sign_1)) {
      tmp = Sign_NEGATIVE_getInstance();
    } else {
      tmp = Sign_POSITIVE_getInstance();
    }
    var sign = tmp;
    var result = Companion_getInstance_6().arithmetic_1.divide_talz8b_k$(this.magnitude_1, other.magnitude_1).second_1.storage_1;
    if (equals(result, Companion_getInstance_6().arithmetic_1.get_ZERO_r1gpek_k$())) {
      sign = Sign_ZERO_getInstance();
    }
    return new BigInteger(result, sign);
  };
  BigInteger.prototype.remainder_px8lk0_k$ = function (other) {
    return this.remainder_8slqbw_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.divideAndRemainder_lkid9u_k$ = function (other) {
    if (other.isZero_jihrta_k$()) {
      throw ArithmeticException_init_$Create$('Division by zero! ' + this + ' / ' + other);
    }
    var tmp;
    if (!this.sign_1.equals(other.sign_1)) {
      tmp = Sign_NEGATIVE_getInstance();
    } else {
      tmp = Sign_POSITIVE_getInstance();
    }
    var sign = tmp;
    var result = Companion_getInstance_6().arithmetic_1.divide_talz8b_k$(this.magnitude_1, other.magnitude_1);
    var tmp_0;
    if (equals(result.first_1, new ULongArray(Companion_getInstance_6().arithmetic_1.get_ZERO_r1gpek_k$()))) {
      tmp_0 = Companion_getInstance_6().ZERO_1;
    } else {
      tmp_0 = new BigInteger(result.first_1.storage_1, sign);
    }
    var quotient = tmp_0;
    var tmp_1;
    if (equals(result.second_1, new ULongArray(Companion_getInstance_6().arithmetic_1.get_ZERO_r1gpek_k$()))) {
      tmp_1 = Companion_getInstance_6().ZERO_1;
    } else {
      tmp_1 = new BigInteger(result.second_1.storage_1, this.sign_1);
    }
    var remainder = tmp_1;
    return new Pair(quotient, remainder);
  };
  BigInteger.prototype.divideAndRemainder_lbgxlu_k$ = function (other) {
    return this.divideAndRemainder_lkid9u_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.sqrt_23u3k_k$ = function () {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.sqrt_klb7yu_k$(this.magnitude_1).first_1.storage_1, this.sign_1);
  };
  BigInteger.prototype.sqrtAndRemainder_n2e1f6_k$ = function () {
    return new SqareRootAndRemainder(new BigInteger(Companion_getInstance_6().arithmetic_1.sqrt_klb7yu_k$(this.magnitude_1).first_1.storage_1, this.sign_1), new BigInteger(Companion_getInstance_6().arithmetic_1.sqrt_klb7yu_k$(this.magnitude_1).second_1.storage_1, this.sign_1));
  };
  BigInteger.prototype.gcd_832ohd_k$ = function (other) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.gcd_48x9rb_k$(this.magnitude_1, other.magnitude_1), Sign_POSITIVE_getInstance());
  };
  BigInteger.prototype.modInverse_3t6357_k$ = function (modulo) {
    if (!this.gcd_832ohd_k$(modulo).equals(Companion_getInstance_6().ONE_1)) {
      throw ArithmeticException_init_$Create$('BigInteger is not invertible. This and modulus are not relatively prime (coprime)');
    }
    var u = Companion_getInstance_6().ONE_1;
    var w = Companion_getInstance_6().ZERO_1;
    var b = this;
    var c = modulo;
    while (!c.equals(Companion_getInstance_6().ZERO_1)) {
      var tmp0_container = b.divrem_n4lz8w_k$(c);
      var q = tmp0_container.component1_7eebsc_k$();
      var r = tmp0_container.component2_7eebsb_k$();
      b = c;
      c = r;
      var tmpU = u;
      u = w;
      w = tmpU.minus_as3vyt_k$(q.times_y2637j_k$(w));
    }
    return u;
  };
  BigInteger.prototype.mod_1rrww9_k$ = function (modulo) {
    var result = this.rem_jqghgr_k$(modulo);
    var tmp;
    if (result.compareTo_m610zm_k$(0) < 0) {
      tmp = result.plus_o9al5h_k$(modulo);
    } else {
      tmp = result;
    }
    return tmp;
  };
  BigInteger.prototype.compare_5f4790_k$ = function (other) {
    if (this.isZero_jihrta_k$() ? other.isZero_jihrta_k$() : false)
      return 0;
    if (other.isZero_jihrta_k$() ? this.sign_1.equals(Sign_POSITIVE_getInstance()) : false)
      return 1;
    if (other.isZero_jihrta_k$() ? this.sign_1.equals(Sign_NEGATIVE_getInstance()) : false)
      return -1;
    if (this.isZero_jihrta_k$() ? other.sign_1.equals(Sign_POSITIVE_getInstance()) : false)
      return -1;
    if (this.isZero_jihrta_k$() ? other.sign_1.equals(Sign_NEGATIVE_getInstance()) : false)
      return 1;
    if (!this.sign_1.equals(other.sign_1))
      return this.sign_1.equals(Sign_POSITIVE_getInstance()) ? 1 : -1;
    var result = Companion_getInstance_6().arithmetic_1.compare_h3oy0f_k$(this.magnitude_1, other.magnitude_1);
    var tmp;
    if (this.sign_1.equals(Sign_NEGATIVE_getInstance()) ? other.sign_1.equals(Sign_NEGATIVE_getInstance()) : false) {
      tmp = imul(result, -1);
    } else {
      tmp = result;
    }
    return tmp;
  };
  BigInteger.prototype.isZero_jihrta_k$ = function () {
    return this.sign_1.equals(Sign_ZERO_getInstance()) ? true : get_chosenArithmetic().compare_h3oy0f_k$(this.magnitude_1, get_chosenArithmetic().get_ZERO_r1gpek_k$()) === 0;
  };
  BigInteger.prototype.negate_hcqk8u_k$ = function () {
    return new BigInteger(this.magnitude_1, this.sign_1.not_2cb7_k$());
  };
  BigInteger.prototype.abs_22cy_k$ = function () {
    return new BigInteger(this.magnitude_1, Sign_POSITIVE_getInstance());
  };
  BigInteger.prototype.factorial_ly8spn_k$ = function () {
    var result = Companion_getInstance_6().ONE_1;
    var element = Companion_getInstance_6().ONE_1;
    var abs = this.abs_22cy_k$();
    while (element.compareTo_m610zm_k$(abs) <= 0) {
      result = result.times_y2637j_k$(element);
      element = element.inc_28ke_k$();
    }
    var tmp;
    if (this.get_isNegative_i24zqw_k$()) {
      tmp = result.unaryMinus_6uz0qp_k$();
    } else {
      tmp = result;
    }
    return tmp;
  };
  BigInteger.prototype.pow_tnf9r5_k$ = function (exponent) {
    if (exponent.compareTo_m610zm_k$(Companion_getInstance_6().ZERO_1) < 0)
      throw ArithmeticException_init_$Create$('Negative exponent not supported with BigInteger');
    Companion_getInstance();
    if (exponent.compareTo_m610zm_k$(new Long(-1, 2147483647)) <= 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp0_toLong = ULongArray__get_impl_pr71q9(exponent.magnitude_1, 0);
      tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      return this.pow_u6dvr2_k$(tmp$ret$0);
    }
    return exponentiationBySquaring(this, Companion_getInstance_6().ONE_1, this, exponent);
  };
  BigInteger.prototype.pow_u6dvr2_k$ = function (exponent) {
    if (exponent.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      throw ArithmeticException_init_$Create$('Negative exponent not supported with BigInteger');
    }
    var tmp0_subject = this;
    var tmp;
    if (tmp0_subject.equals(Companion_getInstance_6().ZERO_1)) {
      tmp = Companion_getInstance_6().ZERO_1;
    } else if (tmp0_subject.equals(Companion_getInstance_6().ONE_1)) {
      tmp = Companion_getInstance_6().ONE_1;
    } else {
      var tmp_0;
      if (this.sign_1.equals(Sign_NEGATIVE_getInstance())) {
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Long.rem' call
        tmp$ret$0 = exponent.rem_9rbcjo_k$(new Long(2, 0));
        if (tmp$ret$0.equals(new Long(0, 0))) {
          tmp_1 = Sign_POSITIVE_getInstance();
        } else {
          tmp_1 = Sign_NEGATIVE_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = Sign_POSITIVE_getInstance();
      }
      var sign = tmp_0;
      tmp = new BigInteger(Companion_getInstance_6().arithmetic_1.pow_itc3bp_k$(this.magnitude_1, exponent), sign);
    }
    return tmp;
  };
  BigInteger.prototype.pow_urdtnb_k$ = function (exponent) {
    return this.pow_u6dvr2_k$(toLong(exponent));
  };
  BigInteger.prototype.signum_exb08b_k$ = function () {
    var tmp0_subject = this.sign_1;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = -1;
        break;
      case 2:
        tmp = 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  BigInteger.prototype.bitAt_8n6eu_k$ = function (position) {
    return Companion_getInstance_6().arithmetic_1.bitAt_3y3268_k$(this.magnitude_1, position);
  };
  BigInteger.prototype.setBitAt_ae4lv6_k$ = function (position, bit) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.setBitAt_13j0kv_k$(this.magnitude_1, position, bit), this.sign_1);
  };
  BigInteger.prototype.numberOfDecimalDigits_wouqvd_k$ = function () {
    if (this.isZero_jihrta_k$()) {
      return new Long(1, 0);
    }
    var bitLenght = Companion_getInstance_6().arithmetic_1.bitLength_1nuydl_k$(this.magnitude_1);
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = (bitLenght - 1 | 0) * Companion_getInstance_6().LOG_10_OF_2__1;
    tmp$ret$0 = Math.ceil(tmp0_ceil);
    var minDigit = tmp$ret$0;
    var tmp = this.div_rro038_k$(toBigInteger(10).pow_urdtnb_k$(numberToInt(minDigit)));
    var counter = new Long(0, 0);
    while (!(tmp.compareTo_m610zm_k$(0) === 0)) {
      tmp = tmp.div_pipt5c_k$(10);
      var tmp0 = counter;
      counter = tmp0.inc_28ke_k$();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp1_plus = counter;
    var tmp2_plus = numberToInt(minDigit);
    tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
    return tmp$ret$1;
  };
  BigInteger.prototype.shl_po5ip6_k$ = function (places) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.shiftLeft_f3dma3_k$(this.magnitude_1, places), this.sign_1);
  };
  BigInteger.prototype.shr_wjue3g_k$ = function (places) {
    var result = new BigInteger(Companion_getInstance_6().arithmetic_1.shiftRight_tbmvgc_k$(this.magnitude_1, places), this.sign_1);
    if (equals(result.magnitude_1, Companion_getInstance_6().arithmetic_1.get_ZERO_r1gpek_k$())) {
      return Companion_getInstance_6().ZERO_1;
    }
    return result;
  };
  BigInteger.prototype.unaryMinus_6uz0qp_k$ = function () {
    return this.negate_hcqk8u_k$();
  };
  BigInteger.prototype.secureOverwrite_5be265_k$ = function () {
    var inductionVariable = 0;
    var last = _ULongArray___get_size__impl__ju6dtr(this.magnitude_1);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ULongArray__set_impl_z19mvh(this.magnitude_1, i, _ULong___init__impl__c78o9k(new Long(0, 0)));
      }
       while (inductionVariable < last);
  };
  BigInteger.prototype.dec_24n6_k$ = function () {
    return this.minus_as3vyt_k$(Companion_getInstance_6().ONE_1);
  };
  BigInteger.prototype.inc_28ke_k$ = function () {
    return this.plus_o9al5h_k$(Companion_getInstance_6().ONE_1);
  };
  BigInteger.prototype.divrem_n4lz8w_k$ = function (other) {
    var result = this.divideAndRemainder_lkid9u_k$(other);
    return new QuotientAndRemainder(result.first_1, result.second_1);
  };
  BigInteger.prototype.and_dp1nni_k$ = function (other) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.and_3oowga_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
  };
  BigInteger.prototype.and_ey0tzm_k$ = function (other) {
    return this.and_dp1nni_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.or_yptqbu_k$ = function (other) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.or_gocrlu_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
  };
  BigInteger.prototype.or_a77ode_k$ = function (other) {
    return this.or_yptqbu_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.xor_sc8v0i_k$ = function (other) {
    var resultMagnitude = Companion_getInstance_6().arithmetic_1.xor_pqjm4m_k$(this.magnitude_1, other.magnitude_1);
    var resultSign = !!(this.get_isNegative_i24zqw_k$() ^ other.get_isNegative_i24zqw_k$()) ? Sign_NEGATIVE_getInstance() : isResultZero(this, resultMagnitude) ? Sign_ZERO_getInstance() : Sign_POSITIVE_getInstance();
    return new BigInteger(resultMagnitude, resultSign);
  };
  BigInteger.prototype.xor_oulep6_k$ = function (other) {
    return this.xor_sc8v0i_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  BigInteger.prototype.not_2cb7_k$ = function () {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.not_6prkas_k$(this.magnitude_1), this.sign_1);
  };
  BigInteger.prototype.compareTo_m610zm_k$ = function (other) {
    if (isNumber(other)) {
      if (RuntimePlatform_getInstance().currentPlatform_2rav3o_k$().equals(Platform_JS_getInstance())) {
        return javascriptNumberComparison_0(this, other);
      }
    }
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof BigInteger) {
      tmp = this.compare_5f4790_k$(other);
    } else {
      if (tmp0_subject instanceof Long) {
        tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromLong_adx1cg_k$(other));
      } else {
        if (typeof tmp0_subject === 'number') {
          tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromInt_venwfw_k$(other));
        } else {
          if (typeof tmp0_subject === 'number') {
            tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromShort_4vs6zg_k$(other));
          } else {
            if (typeof tmp0_subject === 'number') {
              tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromByte_17zj7c_k$(other));
            } else {
              if (tmp0_subject instanceof ULong) {
                tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromULong_6igdxg_k$(other.data_1));
              } else {
                if (tmp0_subject instanceof UInt) {
                  tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromUInt_vesuxg_k$(other.data_1));
                } else {
                  if (tmp0_subject instanceof UShort) {
                    tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromUShort_puylkq_k$(other.data_1));
                  } else {
                    if (tmp0_subject instanceof UByte) {
                      tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromUByte_6dwq2s_k$(other.data_1));
                    } else {
                      if (typeof tmp0_subject === 'number') {
                        tmp = this.compareFloatAndBigInt_hgy8p2_k$(other, BigInteger$compareTo$lambda(this));
                      } else {
                        if (typeof tmp0_subject === 'number') {
                          tmp = this.compareDoubleAndBigInt_j15to6_k$(other, BigInteger$compareTo$lambda_0(this));
                        } else {
                          throw RuntimeException_init_$Create$('Invalid comparison type for BigInteger: ' + getKClassFromExpression(other));
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  BigInteger.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_m610zm_k$(isObject(other) ? other : THROW_CCE());
  };
  BigInteger.prototype.compareFloatAndBigInt_hgy8p2_k$ = function (float, comparisonBlock) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$0 = Math.floor(float);
    var withoutDecimalPart = tmp$ret$0;
    var hasDecimalPart = !(float % 1 === 0.0);
    var tmp;
    if (hasDecimalPart) {
      var tmp_0 = Companion_getInstance_6();
      var tmp_1 = withoutDecimalPart + 1;
      var comparisonResult = comparisonBlock(tmp_0.tryFromFloat$default_y9ccu6_k$(tmp_1, false, 2, null));
      var tmp_2;
      if (comparisonResult === 0) {
        tmp_2 = 1;
      } else {
        tmp_2 = comparisonResult;
      }
      tmp = tmp_2;
    } else {
      var tmp_3 = Companion_getInstance_6();
      tmp = comparisonBlock(tmp_3.tryFromFloat$default_y9ccu6_k$(withoutDecimalPart, false, 2, null));
    }
    return tmp;
  };
  BigInteger.prototype.compareDoubleAndBigInt_j15to6_k$ = function (double, comparisonBlock) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$0 = Math.floor(double);
    var withoutDecimalPart = tmp$ret$0;
    var hasDecimalPart = !(double % 1 === 0.0);
    var tmp;
    if (hasDecimalPart) {
      var tmp_0 = Companion_getInstance_6();
      var tmp_1 = withoutDecimalPart + 1;
      var comparisonResult = comparisonBlock(tmp_0.tryFromDouble$default_s0s596_k$(tmp_1, false, 2, null));
      var tmp_2;
      if (comparisonResult === 0) {
        tmp_2 = 1;
      } else {
        tmp_2 = comparisonResult;
      }
      tmp = tmp_2;
    } else {
      var tmp_3 = Companion_getInstance_6();
      tmp = comparisonBlock(tmp_3.tryFromDouble$default_s0s596_k$(withoutDecimalPart, false, 2, null));
    }
    return tmp;
  };
  BigInteger.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof BigInteger) {
      tmp = this.compare_5f4790_k$(other);
    } else {
      if (tmp0_subject instanceof Long) {
        tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromLong_adx1cg_k$(other));
      } else {
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
          tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromInt_venwfw_k$(other));
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
            tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromShort_4vs6zg_k$(other));
          } else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
              tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromByte_17zj7c_k$(other));
            } else {
              if (tmp0_subject instanceof ULong) {
                tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromULong_6igdxg_k$(other.data_1));
              } else {
                if (tmp0_subject instanceof UInt) {
                  tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromUInt_vesuxg_k$(other.data_1));
                } else {
                  if (tmp0_subject instanceof UShort) {
                    tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromUShort_puylkq_k$(other.data_1));
                  } else {
                    if (tmp0_subject instanceof UByte) {
                      tmp = this.compare_5f4790_k$(Companion_getInstance_6().fromUByte_6dwq2s_k$(other.data_1));
                    } else {
                      tmp = -1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var comparison = tmp;
    return comparison === 0;
  };
  BigInteger.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = this.magnitude_1;
    var accumulator = 0;
    var tmp0_iterator = ULongArray__iterator_impl_cq4d2h(tmp0_fold);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.BigInteger.hashCode.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator;
      tmp$ret$0 = tmp1__anonymous__uwfjfc + ULong__hashCode_impl_6hv2lb(element) | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1 + this.sign_1.hashCode() | 0;
  };
  BigInteger.prototype.toString = function () {
    return this.toString_flfcob_k$(10);
  };
  BigInteger.prototype.toString_flfcob_k$ = function (base) {
    var tmp;
    if (this.sign_1.equals(Sign_NEGATIVE_getInstance())) {
      tmp = '-';
    } else {
      tmp = '';
    }
    var sign = tmp;
    return sign + this.toStringWithoutSign_3tydrs_k$(base);
  };
  BigInteger.prototype.toStringWithoutSign_3tydrs_k$ = function (base) {
    return Companion_getInstance_6().arithmetic_1.toString_2sf9en_k$(this.magnitude_1, base);
  };
  BigInteger.prototype.times_2z9ubu_k$ = function (char) {
    if (this.compareTo_m610zm_k$(0) < 0) {
      throw RuntimeException_init_$Create$('Char cannot be multiplied with negative number');
    }
    var counter = this;
    var stringBuilder = StringBuilder_init_$Create$();
    while (counter.compareTo_m610zm_k$(0) > 0) {
      stringBuilder.append_t8oh9e_k$(char);
      var tmp0 = counter;
      counter = tmp0.dec_24n6_k$();
    }
    return stringBuilder.toString();
  };
  BigInteger.prototype.toModularBigInteger_ll9lak_k$ = function (modulo) {
    var creator = Companion_getInstance_7().creatorForModulo_czwz96_k$(modulo);
    return creator.fromBigInteger_30ftd_k$(this);
  };
  BigInteger.prototype.intValue_6699zc_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(IntCompanionObject_getInstance().MAX_VALUE_1) > 0 ? true : this.compareTo_m610zm_k$(IntCompanionObject_getInstance().MIN_VALUE_1) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to int and provide exact value');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp0_toInt = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toInt).toInt_1tsl84_k$();
    return imul(tmp$ret$0, this.signum_exb08b_k$());
  };
  BigInteger.prototype.longValue_n92i4l_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0;
      Companion_getInstance();
      if (this.compareTo_m610zm_k$(new Long(-1, 2147483647)) > 0) {
        tmp_0 = true;
      } else {
        Companion_getInstance();
        tmp_0 = this.compareTo_m610zm_k$(new Long(0, -2147483648)) < 0;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to long and provide exact value');
    }
    var tmp_1;
    if (_ULongArray___get_size__impl__ju6dtr(this.magnitude_1) > 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shl' call
      var tmp0_shl = ULongArray__get_impl_pr71q9(this.magnitude_1, 1);
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).shl_po5ip6_k$(63));
      var firstBit = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp1_toLong = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toLong);
      var tmp_2 = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(firstBit);
      var tmp2_times = tmp_2.or_s401rn_k$(tmp$ret$2);
      var tmp3_times = this.signum_exb08b_k$();
      tmp$ret$3 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
      tmp_1 = tmp$ret$3;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp4_toLong = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
      tmp$ret$4 = _ULong___get_data__impl__fggpzb(tmp4_toLong);
      var tmp5_times = tmp$ret$4;
      var tmp6_times = this.signum_exb08b_k$();
      tmp$ret$5 = tmp5_times.times_2zfqpc_k$(toLong(tmp6_times));
      return tmp$ret$5;
    }
    return tmp_1;
  };
  BigInteger.prototype.byteValue_uywx5d_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(ByteCompanionObject_getInstance().MAX_VALUE_1) > 0 ? true : this.compareTo_m610zm_k$(ByteCompanionObject_getInstance().MIN_VALUE_1) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to byte and provide exact value');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toByte' call
    var tmp0_toByte = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toByte).toByte_edm0nx_k$();
    return toByte(tmp$ret$0 * this.signum_exb08b_k$() | 0);
  };
  BigInteger.prototype.shortValue_yl9ynv_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(ShortCompanionObject_getInstance().MAX_VALUE_1) > 0 ? true : this.compareTo_m610zm_k$(ShortCompanionObject_getInstance().MIN_VALUE_1) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to short and provide exact value');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toShort' call
    var tmp0_toShort = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toShort).toShort_ja8oqn_k$();
    return toShort(tmp$ret$0 * this.signum_exb08b_k$() | 0);
  };
  BigInteger.prototype.uintValue_p7sneg_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0;
      Companion_getInstance_0();
      if (this.compareTo_m610zm_k$(new UInt(_UInt___init__impl__l7qpdl(-1))) > 0) {
        tmp_0 = true;
      } else {
        tmp_0 = this.get_isNegative_i24zqw_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned int and provide exact value');
    }
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toUInt' call
    var tmp0_toUInt = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp0_toUInt);
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  BigInteger.prototype.ulongValue_xcqapg_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0;
      Companion_getInstance_1();
      if (this.compareTo_m610zm_k$(new ULong(_ULong___init__impl__c78o9k(new Long(-1, -1)))) > 0) {
        tmp_0 = true;
      } else {
        tmp_0 = this.get_isNegative_i24zqw_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned long and provide exact value');
    }
    var tmp_1;
    if (_ULongArray___get_size__impl__ju6dtr(this.magnitude_1) > 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shl' call
      var tmp0_shl = ULongArray__get_impl_pr71q9(this.magnitude_1, 1);
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).shl_po5ip6_k$(63));
      var firstBit = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.or' call
      var tmp1_or = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(firstBit)));
      tmp_1 = tmp$ret$1;
    } else {
      return ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    }
    return tmp_1;
  };
  BigInteger.prototype.ubyteValue_rrikek_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.UByte.toUInt' call
      Companion_getInstance_2();
      var tmp0_toUInt = _UByte___init__impl__g9hnc4(-1);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(tmp0_toUInt) & 255);
      if (this.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0) {
        tmp_0 = true;
      } else {
        tmp_0 = this.get_isNegative_i24zqw_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned byte and provide exact value');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.toUByte' call
    var tmp1_toUByte = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    var tmp$ret$1;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = _ULong___get_data__impl__fggpzb(tmp1_toUByte);
    tmp$ret$1 = _UByte___init__impl__g9hnc4(tmp0_toUByte.toByte_edm0nx_k$());
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  BigInteger.prototype.ushortValue_dp7rvm_k$ = function (exactRequired) {
    var tmp;
    var tmp_0;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.UShort.toUInt' call
      Companion_getInstance_3();
      var tmp0_toUInt = _UShort___init__impl__jigrne(-1);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(_UShort___get_data__impl__g0245(tmp0_toUInt) & 65535);
      tmp_0 = this.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.get_isNegative_i24zqw_k$();
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned short and provide exact value');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.toUShort' call
    var tmp1_toUShort = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = _ULong___get_data__impl__fggpzb(tmp1_toUShort);
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp0_toUShort.toShort_ja8oqn_k$());
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  BigInteger.prototype.floatValue_dv7hej_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0 = this.abs_22cy_k$();
      FloatCompanionObject_getInstance();
      tmp = tmp_0.compareTo_m610zm_k$(3.4028235E38) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to float and provide exact value');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = this.toString();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  BigInteger.prototype.doubleValue_lwfwgq_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0 = this.abs_22cy_k$();
      DoubleCompanionObject_getInstance();
      tmp = tmp_0.compareTo_m610zm_k$(1.7976931348623157E308) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      println(this.abs_22cy_k$());
      DoubleCompanionObject_getInstance();
      println(1.7976931348623157E308);
      var tmp_1 = this.abs_22cy_k$();
      DoubleCompanionObject_getInstance();
      if (tmp_1.compareTo_m610zm_k$(1.7976931348623157E308) > 0) {
        println('huh');
      }
      throw ArithmeticException_init_$Create$('Cannot convert to double and provide exact value');
    }
    return toDouble(this.toString());
  };
  BigInteger.prototype.toUByteArray_201ts2_k$ = function () {
    return Companion_getInstance_6().arithmetic_1.toUByteArray_kay110_k$(this.magnitude_1);
  };
  BigInteger.prototype.toByteArray_qczt2u_k$ = function () {
    return Companion_getInstance_6().arithmetic_1.toByteArray_s51w18_k$(this.magnitude_1);
  };
  BigInteger.prototype.rangeTo_t4gixt_k$ = function (other) {
    return new BigIntegerRange(this, other);
  };
  BigInteger.$metadata$ = classMeta('BigInteger', [BigNumber, CommonBigNumberOperations, NarrowingOperations, BitwiseCapable, Comparable, ByteArraySerializable]);
  function BigInteger32ArithmeticInterface() {
  }
  BigInteger32ArithmeticInterface.$metadata$ = interfaceMeta('BigInteger32ArithmeticInterface');
  function BigIntegerArithmetic() {
  }
  BigIntegerArithmetic.$metadata$ = interfaceMeta('BigIntegerArithmetic');
  var Sign_POSITIVE_instance;
  var Sign_NEGATIVE_instance;
  var Sign_ZERO_instance;
  function values_3() {
    return [Sign_POSITIVE_getInstance(), Sign_NEGATIVE_getInstance(), Sign_ZERO_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'POSITIVE':
        return Sign_POSITIVE_getInstance();
      case 'NEGATIVE':
        return Sign_NEGATIVE_getInstance();
      case 'ZERO':
        return Sign_ZERO_getInstance();
      default:
        Sign_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Sign_entriesInitialized;
  function Sign_initEntries() {
    if (Sign_entriesInitialized)
      return Unit_getInstance();
    Sign_entriesInitialized = true;
    Sign_POSITIVE_instance = new Sign('POSITIVE', 0);
    Sign_NEGATIVE_instance = new Sign('NEGATIVE', 1);
    Sign_ZERO_instance = new Sign('ZERO', 2);
  }
  function Sign(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Sign.prototype.not_2cb7_k$ = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = Sign_NEGATIVE_getInstance();
        break;
      case 1:
        tmp = Sign_POSITIVE_getInstance();
        break;
      case 2:
        tmp = Sign_ZERO_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  Sign.prototype.toInt_1tsl84_k$ = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = -1;
        break;
      case 2:
        tmp = 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  Sign.$metadata$ = classMeta('Sign', undefined, undefined, undefined, undefined, Enum.prototype);
  function Sign_POSITIVE_getInstance() {
    Sign_initEntries();
    return Sign_POSITIVE_instance;
  }
  function Sign_NEGATIVE_getInstance() {
    Sign_initEntries();
    return Sign_NEGATIVE_instance;
  }
  function Sign_ZERO_getInstance() {
    Sign_initEntries();
    return Sign_ZERO_instance;
  }
  function toBigInteger(_this__u8e3s4) {
    return Companion_getInstance_6().fromInt_venwfw_k$(_this__u8e3s4);
  }
  function get_chosenArithmetic() {
    init_properties_Configuration_kt_li7kn6();
    return chosenArithmetic;
  }
  var chosenArithmetic;
  var properties_initialized_Configuration_kt_gex7mu;
  function init_properties_Configuration_kt_li7kn6() {
    if (properties_initialized_Configuration_kt_gex7mu) {
    } else {
      properties_initialized_Configuration_kt_gex7mu = true;
      chosenArithmetic = BigInteger63Arithmetic_getInstance();
    }
  }
  var Platform_JVM_instance;
  var Platform_NATIVE_instance;
  var Platform_JS_instance;
  function values_4() {
    return [Platform_JVM_getInstance(), Platform_NATIVE_getInstance(), Platform_JS_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'JVM':
        return Platform_JVM_getInstance();
      case 'NATIVE':
        return Platform_NATIVE_getInstance();
      case 'JS':
        return Platform_JS_getInstance();
      default:
        Platform_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_JVM_instance = new Platform('JVM', 0);
    Platform_NATIVE_instance = new Platform('NATIVE', 1);
    Platform_JS_instance = new Platform('JS', 2);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Platform.$metadata$ = classMeta('Platform', undefined, undefined, undefined, undefined, Enum.prototype);
  function Platform_JVM_getInstance() {
    Platform_initEntries();
    return Platform_JVM_instance;
  }
  function Platform_NATIVE_getInstance() {
    Platform_initEntries();
    return Platform_NATIVE_instance;
  }
  function Platform_JS_getInstance() {
    Platform_initEntries();
    return Platform_JS_instance;
  }
  function Sextuple(a, b, c, d, e, f) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
  }
  Sextuple.prototype.get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  Sextuple.prototype.get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  Sextuple.prototype.get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  Sextuple.prototype.get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  Sextuple.prototype.get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  Sextuple.prototype.get_f_1mhr5p_k$ = function () {
    return this.f_1;
  };
  Sextuple.prototype.component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  Sextuple.prototype.component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  Sextuple.prototype.component3_7eebsa_k$ = function () {
    return this.c_1;
  };
  Sextuple.prototype.component4_7eebs9_k$ = function () {
    return this.d_1;
  };
  Sextuple.prototype.component5_7eebs8_k$ = function () {
    return this.e_1;
  };
  Sextuple.prototype.component6_7eebs7_k$ = function () {
    return this.f_1;
  };
  Sextuple.prototype.copy_n3gqog_k$ = function (a, b, c, d, e, f) {
    return new Sextuple(a, b, c, d, e, f);
  };
  Sextuple.prototype.copy$default_8et7fx_k$ = function (a, b, c, d, e, f, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      a = this.a_1;
    if (!(($mask0 & 2) === 0))
      b = this.b_1;
    if (!(($mask0 & 4) === 0))
      c = this.c_1;
    if (!(($mask0 & 8) === 0))
      d = this.d_1;
    if (!(($mask0 & 16) === 0))
      e = this.e_1;
    if (!(($mask0 & 32) === 0))
      f = this.f_1;
    return this.copy_n3gqog_k$(a, b, c, d, e, f);
  };
  Sextuple.prototype.toString = function () {
    return 'Sextuple(a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  Sextuple.prototype.hashCode = function () {
    var result = this.a_1 == null ? 0 : hashCode(this.a_1);
    result = imul(result, 31) + (this.b_1 == null ? 0 : hashCode(this.b_1)) | 0;
    result = imul(result, 31) + (this.c_1 == null ? 0 : hashCode(this.c_1)) | 0;
    result = imul(result, 31) + (this.d_1 == null ? 0 : hashCode(this.d_1)) | 0;
    result = imul(result, 31) + (this.e_1 == null ? 0 : hashCode(this.e_1)) | 0;
    result = imul(result, 31) + (this.f_1 == null ? 0 : hashCode(this.f_1)) | 0;
    return result;
  };
  Sextuple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Sextuple))
      return false;
    var tmp0_other_with_cast = other instanceof Sextuple ? other : THROW_CCE();
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  Sextuple.$metadata$ = classMeta('Sextuple');
  function Quadruple(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
  }
  Quadruple.prototype.get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  Quadruple.prototype.get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  Quadruple.prototype.get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  Quadruple.prototype.get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  Quadruple.prototype.component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  Quadruple.prototype.component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  Quadruple.prototype.component3_7eebsa_k$ = function () {
    return this.c_1;
  };
  Quadruple.prototype.component4_7eebs9_k$ = function () {
    return this.d_1;
  };
  Quadruple.prototype.copy_8edtoj_k$ = function (a, b, c, d) {
    return new Quadruple(a, b, c, d);
  };
  Quadruple.prototype.copy$default_vmnxqm_k$ = function (a, b, c, d, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      a = this.a_1;
    if (!(($mask0 & 2) === 0))
      b = this.b_1;
    if (!(($mask0 & 4) === 0))
      c = this.c_1;
    if (!(($mask0 & 8) === 0))
      d = this.d_1;
    return this.copy_8edtoj_k$(a, b, c, d);
  };
  Quadruple.prototype.toString = function () {
    return 'Quadruple(a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ')';
  };
  Quadruple.prototype.hashCode = function () {
    var result = this.a_1 == null ? 0 : hashCode(this.a_1);
    result = imul(result, 31) + (this.b_1 == null ? 0 : hashCode(this.b_1)) | 0;
    result = imul(result, 31) + (this.c_1 == null ? 0 : hashCode(this.c_1)) | 0;
    result = imul(result, 31) + (this.d_1 == null ? 0 : hashCode(this.d_1)) | 0;
    return result;
  };
  Quadruple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Quadruple))
      return false;
    var tmp0_other_with_cast = other instanceof Quadruple ? other : THROW_CCE();
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    return true;
  };
  Quadruple.$metadata$ = classMeta('Quadruple');
  function SignedUIntArray(unsignedValue, sign) {
    this.unsignedValue_1 = unsignedValue;
    this.sign_1 = sign;
  }
  SignedUIntArray.prototype.get_unsignedValue_4z2k5b_k$ = function () {
    return this.unsignedValue_1;
  };
  SignedUIntArray.prototype.get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  SignedUIntArray.prototype.component1_gs1y74_k$ = function () {
    return this.unsignedValue_1;
  };
  SignedUIntArray.prototype.component2_7eebsb_k$ = function () {
    return this.sign_1;
  };
  SignedUIntArray.prototype.copy_rtrosi_k$ = function (unsignedValue, sign) {
    return new SignedUIntArray(unsignedValue, sign);
  };
  SignedUIntArray.prototype.copy$default_4znrh4_k$ = function (unsignedValue, sign, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unsignedValue = this.unsignedValue_1;
    if (!(($mask0 & 2) === 0))
      sign = this.sign_1;
    return this.copy_rtrosi_k$(unsignedValue, sign);
  };
  SignedUIntArray.prototype.toString = function () {
    return 'SignedUIntArray(unsignedValue=' + new UIntArray(this.unsignedValue_1) + ', sign=' + this.sign_1 + ')';
  };
  SignedUIntArray.prototype.hashCode = function () {
    var result = UIntArray__hashCode_impl_hr7ost(this.unsignedValue_1);
    result = imul(result, 31) + (this.sign_1 | 0) | 0;
    return result;
  };
  SignedUIntArray.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignedUIntArray))
      return false;
    var tmp0_other_with_cast = other instanceof SignedUIntArray ? other : THROW_CCE();
    if (!equals(this.unsignedValue_1, tmp0_other_with_cast.unsignedValue_1))
      return false;
    if (!(this.sign_1 === tmp0_other_with_cast.sign_1))
      return false;
    return true;
  };
  SignedUIntArray.$metadata$ = classMeta('SignedUIntArray');
  function signedAdd($this, first, second) {
    var tmp;
    if (!!(first.sign_1 ^ second.sign_1)) {
      var tmp_0;
      if ($this.compareTo_bu7gq6_k$(first.unsignedValue_1, second.unsignedValue_1) > 0) {
        tmp_0 = new SignedUIntArray($this.minus_ove8ru_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
      } else {
        tmp_0 = new SignedUIntArray($this.minus_ove8ru_k$(second.unsignedValue_1, first.unsignedValue_1), second.sign_1);
      }
      tmp = tmp_0;
    } else {
      tmp = new SignedUIntArray($this.plus_tp68d0_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
    }
    return tmp;
  }
  function signedSubtract($this, first, second) {
    return signedAdd($this, first, second.copy$default_4znrh4_k$(null, !second.sign_1, 1, null));
  }
  function signedMultiply($this, first, second) {
    return new SignedUIntArray($this.times_pw1zb4_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedDivide($this, first, second) {
    return new SignedUIntArray($this.div_mapn8r_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedRemainder($this, first, second) {
    return new SignedUIntArray($this.rem_e8q11w_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function checkReciprocal($this, operand, reciprocal) {
    var product = $this.times_pw1zb4_k$(operand, reciprocal.first_1.storage_1);
    var check = $this.shr_7qrbnd_k$(product, reciprocal.second_1);
    var tmp;
    if (!equals(check, $this.ONE_1)) {
      tmp = new Pair(reciprocal.first_1, reciprocal.second_1 - 1 | 0);
    } else {
      tmp = new Pair(reciprocal.first_1, reciprocal.second_1);
    }
    return tmp;
  }
  function reqursiveSqrt($this, operand) {
    var n = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = (n - 1 | 0) / 4;
    tmp$ret$0 = Math.floor(tmp0_floor);
    var l = numberToInt(tmp$ret$0);
    if (l === 0) {
      return $this.basecaseSqrt_5aqb3k_k$(operand);
    }
    var step = n / 4 | 0;
    var stepRemainder = n % 4 | 0;
    var baseLPowerShift = imul(32, l);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp1_copyOfRange = n - (imul(3, step) + stepRemainder | 0) | 0;
    var tmp2_copyOfRange = n - (imul(2, step) + stepRemainder | 0) | 0;
    tmp$ret$1 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), tmp1_copyOfRange, tmp2_copyOfRange));
    var a1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp3_copyOfRange = n - (imul(3, step) + stepRemainder | 0) | 0;
    tmp$ret$2 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), 0, tmp3_copyOfRange));
    var a0 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp4_copyOfRange = n - (imul(2, step) + stepRemainder | 0) | 0;
    tmp$ret$3 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), tmp4_copyOfRange, n));
    var a3a2 = tmp$ret$3;
    var tmp0_container = reqursiveSqrt($this, a3a2);
    var sPrim = tmp0_container.component1_7eebsc_k$().storage_1;
    var rPrim = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp1_container = $this.basicDivide2_plcxxx_k$($this.plus_tp68d0_k$($this.shl_2g7hbz_k$(rPrim, baseLPowerShift), a1), $this.shl_2g7hbz_k$(sPrim, 1));
    var q = tmp1_container.component1_7eebsc_k$().storage_1;
    var u = tmp1_container.component2_7eebsb_k$().storage_1;
    var s = $this.plus_tp68d0_k$($this.shl_2g7hbz_k$(sPrim, baseLPowerShift), q);
    var r = $this.minus_ove8ru_k$($this.plus_tp68d0_k$($this.shl_2g7hbz_k$(u, baseLPowerShift), a0), $this.times_pw1zb4_k$(q, q));
    return new Pair(new UIntArray(s), new UIntArray(r));
  }
  function euclideanGcd($this, first, second) {
    var u = first;
    var v = second;
    while (!equals(v, $this.ZERO_1)) {
      var tmpU = u;
      u = v;
      v = $this.rem_e8q11w_k$(tmpU, v);
    }
    return u;
  }
  function binaryGcd($this, first, second) {
    var $this_0 = $this;
    var first_0 = first;
    var second_0 = second;
    $l$1: do {
      $l$0: do {
        if (contentEquals(first_0, second_0)) {
          return first_0;
        }
        if (contentEquals(first_0, $this_0.ZERO_1)) {
          return second_0;
        }
        if (contentEquals(second_0, $this_0.ZERO_1)) {
          return first_0;
        }
        if (contentEquals($this_0.and_tlzv1f_k$(first_0, $this_0.ONE_1), $this_0.ZERO_1)) {
          if (contentEquals($this_0.and_tlzv1f_k$(second_0, $this_0.ONE_1), $this_0.ZERO_1)) {
            return $this_0.shl_2g7hbz_k$(binaryGcd($this_0, $this_0.shr_7qrbnd_k$(first_0, 1), $this_0.shr_7qrbnd_k$(second_0, 1)), 1);
          } else {
            var tmp0 = $this_0;
            var tmp1 = $this_0.shr_7qrbnd_k$(first_0, 1);
            var tmp2 = second_0;
            $this_0 = tmp0;
            first_0 = tmp1;
            second_0 = tmp2;
            continue $l$0;
          }
        }
        if (contentEquals($this_0.and_tlzv1f_k$(second_0, $this_0.ONE_1), $this_0.ZERO_1)) {
          var tmp3 = $this_0;
          var tmp4 = first_0;
          var tmp5 = $this_0.shr_7qrbnd_k$(second_0, 1);
          $this_0 = tmp3;
          first_0 = tmp4;
          second_0 = tmp5;
          continue $l$0;
        }
        var tmp;
        if ($this_0.compare_u59uit_k$(first_0, second_0) === 1) {
          var tmp6 = $this_0;
          var tmp7 = $this_0.shr_7qrbnd_k$($this_0.subtract_hh11hc_k$(first_0, second_0), 1);
          var tmp8 = second_0;
          $this_0 = tmp6;
          first_0 = tmp7;
          second_0 = tmp8;
          continue $l$0;
        } else {
          var tmp9 = $this_0;
          var tmp10 = $this_0.shr_7qrbnd_k$($this_0.subtract_hh11hc_k$(second_0, first_0), 1);
          var tmp11 = first_0;
          $this_0 = tmp9;
          first_0 = tmp10;
          second_0 = tmp11;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function oldToByteArray($this, operand, sign) {
    if (UIntArray__isEmpty_impl_vd8j4n(operand)) {
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      return tmp$ret$0;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.toUByteArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.byteArrayOf' call
    tmp$ret$1 = new Int8Array([1]);
    var tmp0_toUByteArray = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_toUByteArray;
    tmp$ret$3 = tmp$ret$2.slice();
    tmp$ret$4 = _UByteArray___init__impl__ip4y9n(tmp$ret$3);
    var bitLength = $this.bitLength_ti7g0u_k$(operand);
    var tmp$ret$39;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_subject = sign;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 2:
        tmp = emptyList();
        break;
      case 0:
        var tmp$ret$18;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$17;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo = ArrayList_init_$Create$();
        var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(operand);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$().data_1;
          var tmp$ret$16;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          var tmp$ret$7;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$6;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$5;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 24 | 0);
          var tmp0_and = tmp$ret$5;
          tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp1_toByte = tmp$ret$6;
          tmp$ret$7 = toByte(_UInt___get_data__impl__f0vqqw(tmp1_toByte));
          var tmp_0 = tmp$ret$7;
          var tmp$ret$10;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$9;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$8;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 16 | 0);
          var tmp2_and = tmp$ret$8;
          tmp$ret$9 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp3_toByte = tmp$ret$9;
          tmp$ret$10 = toByte(_UInt___get_data__impl__f0vqqw(tmp3_toByte));
          var tmp_1 = tmp$ret$10;
          var tmp$ret$13;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$12;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$11;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$11 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 8 | 0);
          var tmp4_and = tmp$ret$11;
          tmp$ret$12 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp5_toByte = tmp$ret$12;
          tmp$ret$13 = toByte(_UInt___get_data__impl__f0vqqw(tmp5_toByte));
          var tmp_2 = tmp$ret$13;
          var tmp$ret$15;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$14;
          // Inline function 'kotlin.UInt.and' call
          tmp$ret$14 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp6_toByte = tmp$ret$14;
          tmp$ret$15 = toByte(_UInt___get_data__impl__f0vqqw(tmp6_toByte));
          tmp$ret$16 = listOf([tmp_0, tmp_1, tmp_2, tmp$ret$15]);
          var list = tmp$ret$16;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$17 = tmp0_flatMapTo;
        tmp$ret$18 = tmp$ret$17;

        var collected = flatten(reversed(chunked(takeLast(tmp$ret$18, imul(_UIntArray___get_size__impl__r6l8ci(operand), 4) + 1 | 0), 4)));
        var tmp_3;
        if ((bitLength % 8 | 0) === 0) {
          tmp_3 = plus(listOf_0(0), collected);
        } else {
          tmp_3 = collected;
        }

        var corrected = tmp_3;
        tmp = corrected;
        break;
      case 1:
        var tmp$ret$22;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$21;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(_UIntArray___get_size__impl__r6l8ci(operand));
        var tmp0_iterator_0 = UIntArray__iterator_impl_tkdv7k(operand);
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$().data_1;
          var tmp$ret$20;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          var tmp$ret$19;
          // Inline function 'kotlin.UInt.inv' call
          tmp$ret$19 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(item));
          tmp$ret$20 = tmp$ret$19;
          tmp0_mapTo.add_1j60pz_k$(new UInt(tmp$ret$20));
        }
        tmp$ret$21 = tmp0_mapTo;
        tmp$ret$22 = tmp$ret$21;

        var inverted = toUIntArray(tmp$ret$22);
        var converted = $this.plus_18bngj_k$(inverted, _UInt___init__impl__l7qpdl(1));
        var tmp$ret$36;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$35;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo_0 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = UIntArray__iterator_impl_tkdv7k(converted);
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$().data_1;
          var tmp$ret$34;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          var tmp$ret$25;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$24;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$23;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$23 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 24 | 0);
          var tmp0_and_0 = tmp$ret$23;
          tmp$ret$24 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and_0) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp1_toByte_0 = tmp$ret$24;
          tmp$ret$25 = toByte(_UInt___get_data__impl__f0vqqw(tmp1_toByte_0));
          var tmp_4 = tmp$ret$25;
          var tmp$ret$28;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$27;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$26;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$26 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 16 | 0);
          var tmp2_and_0 = tmp$ret$26;
          tmp$ret$27 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_and_0) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp3_toByte_0 = tmp$ret$27;
          tmp$ret$28 = toByte(_UInt___get_data__impl__f0vqqw(tmp3_toByte_0));
          var tmp_5 = tmp$ret$28;
          var tmp$ret$31;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$30;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$29;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$29 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 8 | 0);
          var tmp4_and_0 = tmp$ret$29;
          tmp$ret$30 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_and_0) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp5_toByte_0 = tmp$ret$30;
          tmp$ret$31 = toByte(_UInt___get_data__impl__f0vqqw(tmp5_toByte_0));
          var tmp_6 = tmp$ret$31;
          var tmp$ret$33;
          // Inline function 'kotlin.UInt.toByte' call
          var tmp$ret$32;
          // Inline function 'kotlin.UInt.and' call
          tmp$ret$32 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp6_toByte_0 = tmp$ret$32;
          tmp$ret$33 = toByte(_UInt___get_data__impl__f0vqqw(tmp6_toByte_0));
          tmp$ret$34 = listOf([tmp_4, tmp_5, tmp_6, tmp$ret$33]);
          var list_0 = tmp$ret$34;
          addAll(tmp0_flatMapTo_0, list_0);
        }
        tmp$ret$35 = tmp0_flatMapTo_0;
        tmp$ret$36 = tmp$ret$35;

        var collected_0 = flatten(reversed(chunked(takeLast(tmp$ret$36, imul(_UIntArray___get_size__impl__r6l8ci(operand), 4) + 1 | 0), 4)));
        var tmp_7;
        if ((bitLength % 8 | 0) === 0) {
          tmp_7 = plus(listOf_0(-1), collected_0);
        } else {
          tmp_7 = collected_0;
        }

        var corrected_0 = tmp_7;
        var tmp$ret$38;
        // Inline function 'kotlin.collections.takeWhile' call
        var list_1 = ArrayList_init_$Create$();
        var tmp0_iterator_2 = corrected_0.iterator_jk1svi_k$();
        $l$loop: while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_2.next_20eer_k$();
          var tmp$ret$37;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          tmp$ret$37 = item_0 === -1;
          if (!tmp$ret$37)
            break $l$loop;
          list_1.add_1j60pz_k$(item_0);
        }
        tmp$ret$38 = list_1;

        var signExtensionCount = tmp$ret$38.get_size_woubt6_k$();
        var tmp_8;
        if (signExtensionCount > 1) {
          tmp_8 = corrected_0.subList_d153ha_k$(signExtensionCount - 1 | 0, corrected_0.get_size_woubt6_k$());
        } else {
          tmp_8 = corrected_0;
        }

        var perfected = tmp_8;
        tmp = perfected;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp1_toTypedArray = tmp;
    tmp$ret$39 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$39;
  }
  function oldFromByteArray($this, byteArray) {
    var sign = (byteArray[0] >>> 7 | 0) & 1;
    var chunked_0 = chunked(reversed(toList(byteArray)), 4);
    var tmp0_subject = sign;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = Sign_POSITIVE_getInstance();
        break;
      case 1:
        tmp = Sign_NEGATIVE_getInstance();
        break;
      default:
        throw RuntimeException_init_$Create$('Invalid sign value when converting from byte array');
    }
    var resolvedSign = tmp;
    var tmp1_subject = resolvedSign;
    var tmp0 = tmp1_subject.ordinal_1;
    var tmp_0;
    switch (tmp0) {
      case 0:
        var tmp$ret$11;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$10;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo = ArrayList_init_$Create$();
        var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$9;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          var tmp$ret$5;
          // Inline function 'kotlin.collections.foldIndexed' call
          var tmp0_foldIndexed = reversed(element);
          var index = 0;
          var accumulator = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_0 = tmp0_foldIndexed.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            var tmp$ret$4;
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
            var tmp2__anonymous__z9zvc9 = accumulator;
            var tmp$ret$3;
            // Inline function 'kotlin.UInt.plus' call
            var tmp$ret$2;
            // Inline function 'kotlin.UInt.shl' call
            var tmp$ret$1;
            // Inline function 'kotlin.UInt.and' call
            var tmp$ret$0;
            // Inline function 'kotlin.toUInt' call
            tmp$ret$0 = _UInt___init__impl__l7qpdl(element_0);
            var tmp0_and = tmp$ret$0;
            tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
            var tmp1_shl = tmp$ret$1;
            var tmp2_shl = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(tmp1__anonymous__uwfjfc, 8) | 0;
            tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shl) << tmp2_shl);
            var tmp3_plus = tmp$ret$2;
            tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2__anonymous__z9zvc9) + _UInt___get_data__impl__f0vqqw(tmp3_plus) | 0);
            tmp$ret$4 = tmp$ret$3;
            accumulator = tmp$ret$4;
          }
          tmp$ret$5 = accumulator;
          var result = tmp$ret$5;
          var discard = 4 - element.get_size_woubt6_k$() | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.UInt.shr' call
          var tmp$ret$6;
          // Inline function 'kotlin.UInt.shl' call
          var tmp3_shl = imul(8, discard);
          tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << tmp3_shl);
          var tmp4_shr = tmp$ret$6;
          var tmp5_shr = imul(8, discard);
          tmp$ret$7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> tmp5_shr | 0);
          var discarded = tmp$ret$7;
          var tmp$ret$8;
          // Inline function 'kotlin.uintArrayOf' call
          tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
          tmp$ret$9 = new UIntArray(tmp$ret$8);
          var list = tmp$ret$9;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$10 = tmp0_flatMapTo;
        tmp$ret$11 = tmp$ret$10;

        var collected = toUIntArray(tmp$ret$11);
        if (contentEquals(collected, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        var tmp$ret$14;
        $l$block: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          var tmp$ret$12;
          // Inline function 'kotlin.collections.lastIndex' call
          tmp$ret$12 = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
          var inductionVariable = tmp$ret$12;
          if (0 <= inductionVariable)
            do {
              var index_0 = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var tmp$ret$13;
              // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
              var tmp0__anonymous__q1qw7t = UIntArray__get_impl_gp5kza(collected, index_0);
              tmp$ret$13 = tmp0__anonymous__q1qw7t === _UInt___init__impl__l7qpdl(0);
              if (!tmp$ret$13) {
                tmp$ret$14 = take(collected, index_0 + 1 | 0);
                break $l$block;
              }
            }
             while (0 <= inductionVariable);
          tmp$ret$14 = emptyList();
        }

        var corrected = toUIntArray(tmp$ret$14);
        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_cj3f2k_k$(corrected)), resolvedSign);
        break;
      case 1:
        var tmp$ret$23;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$22;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo_0 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$21;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          var tmp$ret$19;
          // Inline function 'kotlin.collections.foldIndexed' call
          var tmp0_foldIndexed_0 = reversed(element_1);
          var index_1 = 0;
          var accumulator_0 = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_2 = tmp0_foldIndexed_0.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
            var tmp$ret$18;
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1_0 = index_1;
            index_1 = tmp1_0 + 1 | 0;
            var tmp1__anonymous__uwfjfc_0 = checkIndexOverflow(tmp1_0);
            var tmp2__anonymous__z9zvc9_0 = accumulator_0;
            var tmp$ret$17;
            // Inline function 'kotlin.UInt.plus' call
            var tmp$ret$16;
            // Inline function 'kotlin.UInt.shl' call
            var tmp$ret$15;
            // Inline function 'kotlin.toUInt' call
            tmp$ret$15 = _UInt___init__impl__l7qpdl(element_2);
            var tmp0_shl = tmp$ret$15;
            var tmp1_shl_0 = imul(element_1.get_size_woubt6_k$() - 1 | 0, 8) - imul(tmp1__anonymous__uwfjfc_0, 8) | 0;
            tmp$ret$16 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shl) << tmp1_shl_0);
            var tmp2_plus = tmp$ret$16;
            tmp$ret$17 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2__anonymous__z9zvc9_0) + _UInt___get_data__impl__f0vqqw(tmp2_plus) | 0);
            tmp$ret$18 = tmp$ret$17;
            accumulator_0 = tmp$ret$18;
          }
          tmp$ret$19 = accumulator_0;
          var result_0 = tmp$ret$19;
          var tmp$ret$20;
          // Inline function 'kotlin.uintArrayOf' call
          tmp$ret$20 = _UIntArray___init__impl__ghjpc6(new Int32Array([result_0]));
          tmp$ret$21 = new UIntArray(tmp$ret$20);
          var list_0 = tmp$ret$21;
          addAll(tmp0_flatMapTo_0, list_0);
        }
        tmp$ret$22 = tmp0_flatMapTo_0;
        tmp$ret$23 = tmp$ret$22;

        var collected_0 = toUIntArray(tmp$ret$23);
        var subtracted = $this.minus_ltiz4p_k$(collected_0, _UInt___init__impl__l7qpdl(1));
        var tmp$ret$27;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$26;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(_UIntArray___get_size__impl__r6l8ci(subtracted));
        var tmp0_iterator_3 = UIntArray__iterator_impl_tkdv7k(subtracted);
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_3.next_20eer_k$().data_1;
          var tmp$ret$25;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          var tmp$ret$24;
          // Inline function 'kotlin.UInt.inv' call
          tmp$ret$24 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(item));
          tmp$ret$25 = tmp$ret$24;
          tmp0_mapTo.add_1j60pz_k$(new UInt(tmp$ret$25));
        }
        tmp$ret$26 = tmp0_mapTo;
        tmp$ret$27 = tmp$ret$26;

        var inverted = toUIntArray(tmp$ret$27);
        if (contentEquals(collected_0, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_cj3f2k_k$(inverted)), resolvedSign);
        break;
      case 2:
        throw RuntimeException_init_$Create$("Bug in fromByteArray, sign shouldn't ever be zero at this point.");
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_0;
  }
  function oldFromByteArray_0($this, byteArray) {
    var sign = (byteArray[0] >>> 7 | 0) & 1;
    var chunked_0 = chunked(reversed(toList_0(byteArray)), 4);
    var tmp0_subject = sign;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = Sign_POSITIVE_getInstance();
        break;
      case 1:
        tmp = Sign_NEGATIVE_getInstance();
        break;
      default:
        throw RuntimeException_init_$Create$('Invalid sign value when converting from byte array');
    }
    var resolvedSign = tmp;
    var tmp1_subject = resolvedSign;
    var tmp0 = tmp1_subject.ordinal_1;
    var tmp_0;
    switch (tmp0) {
      case 0:
        var tmp$ret$11;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$10;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo = ArrayList_init_$Create$();
        var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$9;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          var tmp$ret$5;
          // Inline function 'kotlin.collections.foldIndexed' call
          var tmp0_foldIndexed = reversed(element);
          var index = 0;
          var accumulator = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_0 = tmp0_foldIndexed.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            var tmp$ret$4;
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
            var tmp2__anonymous__z9zvc9 = accumulator;
            var tmp$ret$3;
            // Inline function 'kotlin.UInt.plus' call
            var tmp$ret$2;
            // Inline function 'kotlin.UInt.shl' call
            var tmp$ret$1;
            // Inline function 'kotlin.UInt.and' call
            var tmp$ret$0;
            // Inline function 'kotlin.toUInt' call
            tmp$ret$0 = _UInt___init__impl__l7qpdl(element_0);
            var tmp0_and = tmp$ret$0;
            tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
            var tmp1_shl = tmp$ret$1;
            var tmp2_shl = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(tmp1__anonymous__uwfjfc, 8) | 0;
            tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shl) << tmp2_shl);
            var tmp3_plus = tmp$ret$2;
            tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2__anonymous__z9zvc9) + _UInt___get_data__impl__f0vqqw(tmp3_plus) | 0);
            tmp$ret$4 = tmp$ret$3;
            accumulator = tmp$ret$4;
          }
          tmp$ret$5 = accumulator;
          var result = tmp$ret$5;
          var discard = 4 - element.get_size_woubt6_k$() | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.UInt.shr' call
          var tmp$ret$6;
          // Inline function 'kotlin.UInt.shl' call
          var tmp3_shl = imul(8, discard);
          tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << tmp3_shl);
          var tmp4_shr = tmp$ret$6;
          var tmp5_shr = imul(8, discard);
          tmp$ret$7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> tmp5_shr | 0);
          var discarded = tmp$ret$7;
          var tmp$ret$8;
          // Inline function 'kotlin.uintArrayOf' call
          tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
          tmp$ret$9 = new UIntArray(tmp$ret$8);
          var list = tmp$ret$9;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$10 = tmp0_flatMapTo;
        tmp$ret$11 = tmp$ret$10;

        var collected = toUIntArray(tmp$ret$11);
        if (contentEquals(collected, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        var tmp$ret$14;
        $l$block: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          var tmp$ret$12;
          // Inline function 'kotlin.collections.lastIndex' call
          tmp$ret$12 = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
          var inductionVariable = tmp$ret$12;
          if (0 <= inductionVariable)
            do {
              var index_0 = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var tmp$ret$13;
              // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
              var tmp0__anonymous__q1qw7t = UIntArray__get_impl_gp5kza(collected, index_0);
              tmp$ret$13 = tmp0__anonymous__q1qw7t === _UInt___init__impl__l7qpdl(0);
              if (!tmp$ret$13) {
                tmp$ret$14 = take(collected, index_0 + 1 | 0);
                break $l$block;
              }
            }
             while (0 <= inductionVariable);
          tmp$ret$14 = emptyList();
        }

        var corrected = toUIntArray(tmp$ret$14);
        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_cj3f2k_k$(corrected)), resolvedSign);
        break;
      case 1:
        var tmp$ret$23;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$22;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo_0 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$21;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          var tmp$ret$19;
          // Inline function 'kotlin.collections.foldIndexed' call
          var tmp0_foldIndexed_0 = reversed(element_1);
          var index_1 = 0;
          var accumulator_0 = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_2 = tmp0_foldIndexed_0.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
            var tmp$ret$18;
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1_0 = index_1;
            index_1 = tmp1_0 + 1 | 0;
            var tmp1__anonymous__uwfjfc_0 = checkIndexOverflow(tmp1_0);
            var tmp2__anonymous__z9zvc9_0 = accumulator_0;
            var tmp$ret$17;
            // Inline function 'kotlin.UInt.plus' call
            var tmp$ret$16;
            // Inline function 'kotlin.UInt.shl' call
            var tmp$ret$15;
            // Inline function 'kotlin.toUInt' call
            tmp$ret$15 = _UInt___init__impl__l7qpdl(element_2);
            var tmp0_shl = tmp$ret$15;
            var tmp1_shl_0 = imul(element_1.get_size_woubt6_k$() - 1 | 0, 8) - imul(tmp1__anonymous__uwfjfc_0, 8) | 0;
            tmp$ret$16 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shl) << tmp1_shl_0);
            var tmp2_plus = tmp$ret$16;
            tmp$ret$17 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2__anonymous__z9zvc9_0) + _UInt___get_data__impl__f0vqqw(tmp2_plus) | 0);
            tmp$ret$18 = tmp$ret$17;
            accumulator_0 = tmp$ret$18;
          }
          tmp$ret$19 = accumulator_0;
          var result_0 = tmp$ret$19;
          var tmp$ret$20;
          // Inline function 'kotlin.uintArrayOf' call
          tmp$ret$20 = _UIntArray___init__impl__ghjpc6(new Int32Array([result_0]));
          tmp$ret$21 = new UIntArray(tmp$ret$20);
          var list_0 = tmp$ret$21;
          addAll(tmp0_flatMapTo_0, list_0);
        }
        tmp$ret$22 = tmp0_flatMapTo_0;
        tmp$ret$23 = tmp$ret$22;

        var collected_0 = toUIntArray(tmp$ret$23);
        var subtracted = $this.minus_ltiz4p_k$(collected_0, _UInt___init__impl__l7qpdl(1));
        var tmp$ret$27;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$26;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(_UIntArray___get_size__impl__r6l8ci(subtracted));
        var tmp0_iterator_3 = UIntArray__iterator_impl_tkdv7k(subtracted);
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_3.next_20eer_k$().data_1;
          var tmp$ret$25;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          var tmp$ret$24;
          // Inline function 'kotlin.UInt.inv' call
          tmp$ret$24 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(item));
          tmp$ret$25 = tmp$ret$24;
          tmp0_mapTo.add_1j60pz_k$(new UInt(tmp$ret$25));
        }
        tmp$ret$26 = tmp0_mapTo;
        tmp$ret$27 = tmp$ret$26;

        var inverted = toUIntArray(tmp$ret$27);
        if (contentEquals(collected_0, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_cj3f2k_k$(inverted)), resolvedSign);
        break;
      case 2:
        throw RuntimeException_init_$Create$("Bug in fromByteArray, sign shouldn't ever be zero at this point.");
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_0;
  }
  function oldFromUByteArray($this, uByteArray, endianness) {
    var tmp0_subject = endianness;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = chunked(reversed(toList(uByteArray)), 4);
        break;
      case 1:
        tmp = chunked(toList(uByteArray), 4);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var chunked_0 = tmp;
    var resolvedSign = Sign_POSITIVE_getInstance();
    var tmp$ret$11;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp$ret$10;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$9;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'kotlin.collections.foldIndexed' call
      var tmp0_foldIndexed = reversed(element);
      var index = 0;
      var accumulator = _UInt___init__impl__l7qpdl(0);
      var tmp0_iterator_0 = tmp0_foldIndexed.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
        var tmp$ret$4;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
        var tmp2__anonymous__z9zvc9 = accumulator;
        var tmp$ret$3;
        // Inline function 'kotlin.UInt.plus' call
        var tmp$ret$2;
        // Inline function 'kotlin.UInt.shl' call
        var tmp$ret$1;
        // Inline function 'kotlin.UInt.and' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toUInt' call
        tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(element_0) & 255);
        var tmp0_and = tmp$ret$0;
        tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
        var tmp1_shl = tmp$ret$1;
        var tmp2_shl = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(tmp1__anonymous__uwfjfc, 8) | 0;
        tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shl) << tmp2_shl);
        var tmp3_plus = tmp$ret$2;
        tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2__anonymous__z9zvc9) + _UInt___get_data__impl__f0vqqw(tmp3_plus) | 0);
        tmp$ret$4 = tmp$ret$3;
        accumulator = tmp$ret$4;
      }
      tmp$ret$5 = accumulator;
      var result = tmp$ret$5;
      var discard = 4 - element.get_size_woubt6_k$() | 0;
      var tmp$ret$7;
      // Inline function 'kotlin.UInt.shr' call
      var tmp$ret$6;
      // Inline function 'kotlin.UInt.shl' call
      var tmp3_shl = imul(8, discard);
      tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << tmp3_shl);
      var tmp4_shr = tmp$ret$6;
      var tmp5_shr = imul(8, discard);
      tmp$ret$7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> tmp5_shr | 0);
      var discarded = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'kotlin.uintArrayOf' call
      tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
      tmp$ret$9 = new UIntArray(tmp$ret$8);
      var list = tmp$ret$9;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$10 = tmp0_flatMapTo;
    tmp$ret$11 = tmp$ret$10;
    var collected = toUIntArray(tmp$ret$11);
    if (contentEquals(collected, $this.ZERO_1)) {
      return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
    }
    var tmp$ret$14;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      var tmp$ret$12;
      // Inline function 'kotlin.collections.lastIndex' call
      tmp$ret$12 = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
      var inductionVariable = tmp$ret$12;
      if (0 <= inductionVariable)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$13;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
          var tmp0__anonymous__q1qw7t = UIntArray__get_impl_gp5kza(collected, index_0);
          tmp$ret$13 = tmp0__anonymous__q1qw7t === _UInt___init__impl__l7qpdl(0);
          if (!tmp$ret$13) {
            tmp$ret$14 = take(collected, index_0 + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$14 = emptyList();
    }
    var corrected = toUIntArray(tmp$ret$14);
    return new Pair(new UIntArray($this.removeLeadingZeros_cj3f2k_k$(corrected)), resolvedSign);
  }
  function oldFromUByteArray_0($this, uByteArray, endianness) {
    var tmp0_subject = endianness;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = chunked(reversed(toList_1(new UByteArray(uByteArray))), 4);
        break;
      case 1:
        tmp = chunked(toList_1(new UByteArray(uByteArray)), 4);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var chunked_0 = tmp;
    var resolvedSign = Sign_POSITIVE_getInstance();
    var tmp$ret$11;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp$ret$10;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$9;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'kotlin.collections.foldIndexed' call
      var tmp0_foldIndexed = reversed(element);
      var index = 0;
      var accumulator = _UInt___init__impl__l7qpdl(0);
      var tmp0_iterator_0 = tmp0_foldIndexed.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
        var tmp$ret$4;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
        var tmp2__anonymous__z9zvc9 = accumulator;
        var tmp$ret$3;
        // Inline function 'kotlin.UInt.plus' call
        var tmp$ret$2;
        // Inline function 'kotlin.UInt.shl' call
        var tmp$ret$1;
        // Inline function 'kotlin.UInt.and' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toUInt' call
        tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(element_0) & 255);
        var tmp0_and = tmp$ret$0;
        tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
        var tmp1_shl = tmp$ret$1;
        var tmp2_shl = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(tmp1__anonymous__uwfjfc, 8) | 0;
        tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shl) << tmp2_shl);
        var tmp3_plus = tmp$ret$2;
        tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2__anonymous__z9zvc9) + _UInt___get_data__impl__f0vqqw(tmp3_plus) | 0);
        tmp$ret$4 = tmp$ret$3;
        accumulator = tmp$ret$4;
      }
      tmp$ret$5 = accumulator;
      var result = tmp$ret$5;
      var discard = 4 - element.get_size_woubt6_k$() | 0;
      var tmp$ret$7;
      // Inline function 'kotlin.UInt.shr' call
      var tmp$ret$6;
      // Inline function 'kotlin.UInt.shl' call
      var tmp3_shl = imul(8, discard);
      tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << tmp3_shl);
      var tmp4_shr = tmp$ret$6;
      var tmp5_shr = imul(8, discard);
      tmp$ret$7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> tmp5_shr | 0);
      var discarded = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'kotlin.uintArrayOf' call
      tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
      tmp$ret$9 = new UIntArray(tmp$ret$8);
      var list = tmp$ret$9;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$10 = tmp0_flatMapTo;
    tmp$ret$11 = tmp$ret$10;
    var collected = toUIntArray(tmp$ret$11);
    if (contentEquals(collected, $this.ZERO_1)) {
      return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
    }
    var tmp$ret$14;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      var tmp$ret$12;
      // Inline function 'kotlin.collections.lastIndex' call
      tmp$ret$12 = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
      var inductionVariable = tmp$ret$12;
      if (0 <= inductionVariable)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$13;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
          var tmp0__anonymous__q1qw7t = UIntArray__get_impl_gp5kza(collected, index_0);
          tmp$ret$13 = tmp0__anonymous__q1qw7t === _UInt___init__impl__l7qpdl(0);
          if (!tmp$ret$13) {
            tmp$ret$14 = take(collected, index_0 + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$14 = emptyList();
    }
    var corrected = toUIntArray(tmp$ret$14);
    return new Pair(new UIntArray($this.removeLeadingZeros_cj3f2k_k$(corrected)), resolvedSign);
  }
  function dropLeadingZeros(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      if (yielding) {
        list.add_1j60pz_k$(item);
      } else {
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        tmp$ret$0 = item === 0;
        if (!tmp$ret$0) {
          list.add_1j60pz_k$(item);
          yielding = true;
        }
      }
    }
    tmp$ret$1 = list;
    return tmp$ret$1;
  }
  function dropLeadingZeros_0(_this__u8e3s4, $this) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (yielding) {
        list.add_1j60pz_k$(item);
      } else {
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        tmp$ret$0 = item === 0;
        if (!tmp$ret$0) {
          list.add_1j60pz_k$(item);
          yielding = true;
        }
      }
    }
    tmp$ret$1 = list;
    var tmp0_toTypedArray = tmp$ret$1;
    tmp$ret$2 = copyToArray(tmp0_toTypedArray);
    return tmp$ret$2;
  }
  function dropLeadingZeros_1(_this__u8e3s4, $this) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable].data_1;
      inductionVariable = inductionVariable + 1 | 0;
      if (yielding) {
        list.add_1j60pz_k$(new UByte(item));
      } else {
        var tmp$ret$1;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        var tmp = new UByte(item);
        var tmp$ret$0;
        // Inline function 'kotlin.toUByte' call
        tmp$ret$0 = _UByte___init__impl__g9hnc4(0);
        tmp$ret$1 = equals(tmp, new UByte(tmp$ret$0));
        if (!tmp$ret$1) {
          list.add_1j60pz_k$(new UByte(item));
          yielding = true;
        }
      }
    }
    tmp$ret$2 = list;
    var tmp0_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp0_toTypedArray);
    return tmp$ret$3;
  }
  function dropLeadingZeros_2(_this__u8e3s4, $this) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = UByteArray__iterator_impl_509y1p(_this__u8e3s4);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      if (yielding) {
        list.add_1j60pz_k$(new UByte(item));
      } else {
        var tmp$ret$1;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        var tmp = new UByte(item);
        var tmp$ret$0;
        // Inline function 'kotlin.toUByte' call
        tmp$ret$0 = _UByte___init__impl__g9hnc4(0);
        tmp$ret$1 = equals(tmp, new UByte(tmp$ret$0));
        if (!tmp$ret$1) {
          list.add_1j60pz_k$(new UByte(item));
          yielding = true;
        }
      }
    }
    tmp$ret$2 = list;
    return toUByteArray(tmp$ret$2);
  }
  function BigInteger32Arithmetic$toUnsignedIntArrayCodeFormat$lambda(it) {
    return UInt__toString_impl_dbgl21(it.data_1) + 'U';
  }
  function BigInteger32Arithmetic() {
    BigInteger32Arithmetic_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([]);
    tmp._emitIntArray_1 = tmp$ret$0;
    this.baseMask_1 = _ULong___init__impl__c78o9k(new Long(-1, 0));
    this.baseMaskInt_1 = _UInt___init__impl__l7qpdl(-1);
    this.overflowMask_1 = _ULong___init__impl__c78o9k(new Long(0, 1));
    this.lowerMask_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    this.base_1 = _UInt___init__impl__l7qpdl(-1);
    this.basePowerOfTwo_1 = 32;
    this.wordSizeInBits_1 = 32;
    this.ZERO_1 = _UIntArray___init__impl__ghjpc6_0(0);
    var tmp_0 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.UIntArray' call
    var tmp_1 = 0;
    var tmp_2 = 1;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$3;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.ONE.<anonymous>' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(1);
      var tmp0_toInt = tmp$ret$1;
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$3 = tmp$ret$2;
      tmp_3[tmp_4] = tmp$ret$3;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_3);
    tmp_0.ONE_1 = tmp$ret$4;
    var tmp_5 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.UIntArray' call
    var tmp_6 = 0;
    var tmp_7 = 1;
    var tmp_8 = new Int32Array(tmp_7);
    while (tmp_6 < tmp_7) {
      var tmp_9 = tmp_6;
      var tmp$ret$7;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$6;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$5;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.TWO.<anonymous>' call
      tmp$ret$5 = _UInt___init__impl__l7qpdl(2);
      var tmp0_toInt_0 = tmp$ret$5;
      tmp$ret$6 = _UInt___get_data__impl__f0vqqw(tmp0_toInt_0);
      tmp$ret$7 = tmp$ret$6;
      tmp_8[tmp_9] = tmp$ret$7;
      tmp_6 = tmp_6 + 1 | 0;
    }
    tmp$ret$8 = _UIntArray___init__impl__ghjpc6(tmp_8);
    tmp_5.TWO_1 = tmp$ret$8;
    var tmp_10 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.UIntArray' call
    var tmp_11 = 0;
    var tmp_12 = 1;
    var tmp_13 = new Int32Array(tmp_12);
    while (tmp_11 < tmp_12) {
      var tmp_14 = tmp_11;
      var tmp$ret$11;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$10;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$9;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.TEN.<anonymous>' call
      tmp$ret$9 = _UInt___init__impl__l7qpdl(10);
      var tmp0_toInt_1 = tmp$ret$9;
      tmp$ret$10 = _UInt___get_data__impl__f0vqqw(tmp0_toInt_1);
      tmp$ret$11 = tmp$ret$10;
      tmp_13[tmp_14] = tmp$ret$11;
      tmp_11 = tmp_11 + 1 | 0;
    }
    tmp$ret$12 = _UIntArray___init__impl__ghjpc6(tmp_13);
    tmp_10.TEN_1 = tmp$ret$12;
    this.karatsubaThreshold_1 = 60;
    this.toomCookThreshold_1 = 15000;
    this.SIGNED_POSITIVE_TWO_1 = new SignedUIntArray(this.TWO_1, true);
  }
  BigInteger32Arithmetic.prototype.get__emitIntArray_vjsnkj_k$ = function () {
    return this._emitIntArray_1;
  };
  BigInteger32Arithmetic.prototype.get_baseMask_kf6d7k_k$ = function () {
    return this.baseMask_1;
  };
  BigInteger32Arithmetic.prototype.get_baseMaskInt_g76tla_k$ = function () {
    return this.baseMaskInt_1;
  };
  BigInteger32Arithmetic.prototype.get_overflowMask_qaxvox_k$ = function () {
    return this.overflowMask_1;
  };
  BigInteger32Arithmetic.prototype.get_lowerMask_8e69pa_k$ = function () {
    return this.lowerMask_1;
  };
  BigInteger32Arithmetic.prototype.get_base_rb5thd_k$ = function () {
    return this.base_1;
  };
  BigInteger32Arithmetic.prototype.get_basePowerOfTwo_4zvm3u_k$ = function () {
    return this.basePowerOfTwo_1;
  };
  BigInteger32Arithmetic.prototype.get_wordSizeInBits_q6hmfz_k$ = function () {
    return this.wordSizeInBits_1;
  };
  BigInteger32Arithmetic.prototype.get_ZERO_3hy8v1_k$ = function () {
    return this.ZERO_1;
  };
  BigInteger32Arithmetic.prototype.get_ONE_13ku9j_k$ = function () {
    return this.ONE_1;
  };
  BigInteger32Arithmetic.prototype.get_TWO_e5tkof_k$ = function () {
    return this.TWO_1;
  };
  BigInteger32Arithmetic.prototype.get_TEN_45c3xc_k$ = function () {
    return this.TEN_1;
  };
  BigInteger32Arithmetic.prototype.get_karatsubaThreshold_iz6kh0_k$ = function () {
    return this.karatsubaThreshold_1;
  };
  BigInteger32Arithmetic.prototype.get_toomCookThreshold_rqmabj_k$ = function () {
    return this.toomCookThreshold_1;
  };
  BigInteger32Arithmetic.prototype.numberOfLeadingZerosInAWord_4e4qx_k$ = function (value) {
    var x = value;
    var y;
    var n = this.basePowerOfTwo_1;
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.shr' call
    var tmp0_shr = x;
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shr) >>> 16 | 0);
    y = tmp$ret$0;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 16 | 0;
      x = y;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.shr' call
    var tmp1_shr = x;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shr) >>> 8 | 0);
    y = tmp$ret$1;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 8 | 0;
      x = y;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.shr' call
    var tmp2_shr = x;
    tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_shr) >>> 4 | 0);
    y = tmp$ret$2;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 4 | 0;
      x = y;
    }
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.shr' call
    var tmp3_shr = x;
    tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp3_shr) >>> 2 | 0);
    y = tmp$ret$3;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 2 | 0;
      x = y;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.UInt.shr' call
    var tmp4_shr = x;
    tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> 1 | 0);
    y = tmp$ret$4;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      return n - 2 | 0;
    }
    var tmp = n;
    var tmp$ret$5;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp5_toInt = x;
    tmp$ret$5 = _UInt___get_data__impl__f0vqqw(tmp5_toInt);
    return tmp - tmp$ret$5 | 0;
  };
  BigInteger32Arithmetic.prototype.numberOfTrailingZerosInAWord_65kqap_k$ = function (value) {
    var x = value;
    var y;
    var n = 32;
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.and' call
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.shl' call
    var tmp0_shl = x;
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shl) << 16);
    var tmp1_and = tmp$ret$0;
    var tmp2_and = this.baseMaskInt_1;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_and) & _UInt___get_data__impl__f0vqqw(tmp2_and));
    y = tmp$ret$1;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 16 | 0;
      x = y;
    }
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.and' call
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.shl' call
    var tmp3_shl = x;
    tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp3_shl) << 8);
    var tmp4_and = tmp$ret$2;
    var tmp5_and = this.baseMaskInt_1;
    tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_and) & _UInt___get_data__impl__f0vqqw(tmp5_and));
    y = tmp$ret$3;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 8 | 0;
      x = y;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.UInt.and' call
    var tmp$ret$4;
    // Inline function 'kotlin.UInt.shl' call
    var tmp6_shl = x;
    tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp6_shl) << 4);
    var tmp7_and = tmp$ret$4;
    var tmp8_and = this.baseMaskInt_1;
    tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp7_and) & _UInt___get_data__impl__f0vqqw(tmp8_and));
    y = tmp$ret$5;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 4 | 0;
      x = y;
    }
    var tmp$ret$7;
    // Inline function 'kotlin.UInt.and' call
    var tmp$ret$6;
    // Inline function 'kotlin.UInt.shl' call
    var tmp9_shl = x;
    tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp9_shl) << 2);
    var tmp10_and = tmp$ret$6;
    var tmp11_and = this.baseMaskInt_1;
    tmp$ret$7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp10_and) & _UInt___get_data__impl__f0vqqw(tmp11_and));
    y = tmp$ret$7;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 2 | 0;
      x = y;
    }
    var tmp$ret$9;
    // Inline function 'kotlin.UInt.and' call
    var tmp$ret$8;
    // Inline function 'kotlin.UInt.shl' call
    var tmp12_shl = x;
    tmp$ret$8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp12_shl) << 1);
    var tmp13_and = tmp$ret$8;
    var tmp14_and = this.baseMaskInt_1;
    tmp$ret$9 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp13_and) & _UInt___get_data__impl__f0vqqw(tmp14_and));
    y = tmp$ret$9;
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      return n - 2 | 0;
    }
    var tmp = n;
    var tmp$ret$10;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp15_toInt = x;
    tmp$ret$10 = _UInt___get_data__impl__f0vqqw(tmp15_toInt);
    return tmp - tmp$ret$10 | 0;
  };
  BigInteger32Arithmetic.prototype.bitLength_ti7g0u_k$ = function (value) {
    if (UIntArray__isEmpty_impl_vd8j4n(value)) {
      return 0;
    }
    var mostSignificant = UIntArray__get_impl_gp5kza(value, _UIntArray___get_size__impl__r6l8ci(value) - 1 | 0);
    return this.bitLength_1kl4ud_k$(mostSignificant) + imul(_UIntArray___get_size__impl__r6l8ci(value) - 1 | 0, this.basePowerOfTwo_1) | 0;
  };
  BigInteger32Arithmetic.prototype.bitLength_1kl4ud_k$ = function (value) {
    return this.basePowerOfTwo_1 - this.numberOfLeadingZerosInAWord_4e4qx_k$(value) | 0;
  };
  BigInteger32Arithmetic.prototype.trailingZeroBits_frweb6_k$ = function (value) {
    return this.numberOfTrailingZerosInAWord_65kqap_k$(value);
  };
  BigInteger32Arithmetic.prototype.trailingZeroBits_9os8p_k$ = function (value) {
    if (contentEquals(value, this.ZERO_1)) {
      return 0;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.count' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.takeWhile' call
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(value);
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.trailingZeroBits.<anonymous>' call
      tmp$ret$0 = item === _UInt___init__impl__l7qpdl(0);
      if (!tmp$ret$0)
        break $l$loop;
      list.add_1j60pz_k$(new UInt(item));
    }
    tmp$ret$1 = list;
    var tmp0_count = tmp$ret$1;
    tmp$ret$2 = tmp0_count.get_size_woubt6_k$();
    var zeroWordsCount = tmp$ret$2;
    if (zeroWordsCount === _UIntArray___get_size__impl__r6l8ci(value)) {
      return 0;
    }
    return this.trailingZeroBits_frweb6_k$(UIntArray__get_impl_gp5kza(value, zeroWordsCount)) + imul(zeroWordsCount, 63) | 0;
  };
  BigInteger32Arithmetic.prototype.removeLeadingZeros_cj3f2k_k$ = function (bigInteger) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.indexOfLast' call
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var tmp0_indexOfLast = _UIntArray___get_storage__impl__92a0v0(bigInteger);
      var inductionVariable = tmp0_indexOfLast.length - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.collections.indexOfLast.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0_indexOfLast[index];
          var tmp$ret$1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.removeLeadingZeros.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.toUInt' call
          tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp1__anonymous__uwfjfc);
          var tmp0__anonymous__q1qw7t = tmp$ret$0;
          tmp$ret$1 = !(tmp0__anonymous__q1qw7t === _UInt___init__impl__l7qpdl(0));
          tmp$ret$2 = tmp$ret$1;
          if (tmp$ret$2) {
            tmp$ret$3 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = -1;
    }
    tmp$ret$4 = tmp$ret$3;
    var firstEmpty = tmp$ret$4 + 1 | 0;
    if (firstEmpty === -1 ? true : firstEmpty === 0) {
      return this.ZERO_1;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyOfRange' call
    tmp$ret$5 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(bigInteger), 0, firstEmpty));
    return tmp$ret$5;
  };
  BigInteger32Arithmetic.prototype.countLeadingZeroWords_po0bdl_k$ = function (bigInteger) {
    var lastNonEmptyIndex = _UIntArray___get_size__impl__r6l8ci(bigInteger) - 1 | 0;
    if (lastNonEmptyIndex <= 0) {
      return 0;
    }
    var element = UIntArray__get_impl_gp5kza(bigInteger, lastNonEmptyIndex);
    while (element === _UInt___init__impl__l7qpdl(0) ? lastNonEmptyIndex > 0 : false) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
      element = UIntArray__get_impl_gp5kza(bigInteger, lastNonEmptyIndex);
    }
    if (UIntArray__get_impl_gp5kza(bigInteger, lastNonEmptyIndex) === _UInt___init__impl__l7qpdl(0)) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
    }
    return (_UIntArray___get_size__impl__r6l8ci(bigInteger) - lastNonEmptyIndex | 0) - 1 | 0;
  };
  BigInteger32Arithmetic.prototype.shiftLeft_sb719h_k$ = function (operand, places) {
    if (UIntArray__isEmpty_impl_vd8j4n(operand) ? true : places === 0) {
      return operand;
    }
    var originalSize = _UIntArray___get_size__impl__r6l8ci(operand);
    var leadingZeros = this.numberOfLeadingZerosInAWord_4e4qx_k$(UIntArray__get_impl_gp5kza(operand, _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0));
    var shiftWords = places / this.basePowerOfTwo_1 | 0;
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var tmp;
    if (shiftBits > leadingZeros) {
      tmp = shiftWords + 1 | 0;
    } else {
      tmp = shiftWords;
    }
    var wordsNeeded = tmp;
    if (shiftBits === 0) {
      var tmp$ret$3;
      // Inline function 'kotlin.UIntArray' call
      var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand) + wordsNeeded | 0;
      var tmp_0 = 0;
      var tmp_1 = tmp0_UIntArray;
      var tmp_2 = new Int32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        var tmp$ret$2;
        // Inline function 'kotlin.UIntArray.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.shiftLeft.<anonymous>' call
        var tmp0_subject = tmp_3;
        tmp$ret$0 = (0 <= tmp0_subject ? tmp0_subject < shiftWords : false) ? _UInt___init__impl__l7qpdl(0) : UIntArray__get_impl_gp5kza(operand, tmp_3 - shiftWords | 0);
        var tmp0_toInt = tmp$ret$0;
        tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$2 = tmp$ret$1;
        tmp_2[tmp_3] = tmp$ret$2;
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_2);
      return tmp$ret$3;
    }
    var tmp$ret$12;
    // Inline function 'kotlin.UIntArray' call
    var tmp1_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand) + wordsNeeded | 0;
    var tmp_4 = 0;
    var tmp_5 = tmp1_UIntArray;
    var tmp_6 = new Int32Array(tmp_5);
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      var tmp$ret$11;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$10;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$9;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.shiftLeft.<anonymous>' call
      var tmp0_subject_0 = tmp_7;
      var tmp_8;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 < shiftWords : false) {
        tmp_8 = _UInt___init__impl__l7qpdl(0);
      } else {
        if (tmp0_subject_0 === shiftWords) {
          var tmp$ret$4;
          // Inline function 'kotlin.UInt.shl' call
          var tmp0_shl = UIntArray__get_impl_gp5kza(operand, tmp_7 - shiftWords | 0);
          tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shl) << shiftBits);
          tmp_8 = tmp$ret$4;
        } else {
          var containsLower = shiftWords + 1 | 0;
          if (tmp0_subject_0 < (originalSize + shiftWords | 0) ? containsLower <= tmp0_subject_0 : false) {
            var tmp$ret$7;
            // Inline function 'kotlin.UInt.or' call
            var tmp$ret$5;
            // Inline function 'kotlin.UInt.shl' call
            var tmp1_shl = UIntArray__get_impl_gp5kza(operand, tmp_7 - shiftWords | 0);
            tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shl) << shiftBits);
            var tmp4_or = tmp$ret$5;
            var tmp$ret$6;
            // Inline function 'kotlin.UInt.shr' call
            var tmp2_shr = UIntArray__get_impl_gp5kza(operand, (tmp_7 - shiftWords | 0) - 1 | 0);
            var tmp3_shr = BigInteger32Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
            tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_shr) >>> tmp3_shr | 0);
            var tmp5_or = tmp$ret$6;
            tmp$ret$7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_or) | _UInt___get_data__impl__f0vqqw(tmp5_or));
            tmp_8 = tmp$ret$7;
          } else {
            if (tmp0_subject_0 === ((originalSize + wordsNeeded | 0) - 1 | 0)) {
              var tmp$ret$8;
              // Inline function 'kotlin.UInt.shr' call
              var tmp6_shr = UIntArray__get_impl_gp5kza(operand, tmp_7 - wordsNeeded | 0);
              var tmp7_shr = BigInteger32Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
              tmp$ret$8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp6_shr) >>> tmp7_shr | 0);
              tmp_8 = tmp$ret$8;
            } else {
              throw RuntimeException_init_$Create$('Invalid case ' + tmp_7);
            }
          }
        }
      }
      tmp$ret$9 = tmp_8;
      var tmp0_toInt_0 = tmp$ret$9;
      tmp$ret$10 = _UInt___get_data__impl__f0vqqw(tmp0_toInt_0);
      tmp$ret$11 = tmp$ret$10;
      tmp_6[tmp_7] = tmp$ret$11;
      tmp_4 = tmp_4 + 1 | 0;
    }
    tmp$ret$12 = _UIntArray___init__impl__ghjpc6(tmp_6);
    return tmp$ret$12;
  };
  BigInteger32Arithmetic.prototype.shiftRight_9rug46_k$ = function (operand, places) {
    if (UIntArray__isEmpty_impl_vd8j4n(operand) ? true : places === 0) {
      return operand;
    }
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var wordsToDiscard = places / this.basePowerOfTwo_1 | 0;
    if (wordsToDiscard >= _UIntArray___get_size__impl__r6l8ci(operand)) {
      return this.ZERO_1;
    }
    if (shiftBits === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOfRange' call
      var tmp0_copyOfRange = _UIntArray___get_size__impl__r6l8ci(operand);
      tmp$ret$0 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), wordsToDiscard, tmp0_copyOfRange));
      return tmp$ret$0;
    }
    if (_UIntArray___get_size__impl__r6l8ci(operand) > 1 ? (_UIntArray___get_size__impl__r6l8ci(operand) - wordsToDiscard | 0) === 1 : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.shr' call
      var tmp1_shr = UIntArray__get_impl_gp5kza(operand, _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0);
      tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shr) >>> shiftBits | 0);
      var tmp2_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
      tmp$ret$2 = tmp2_uintArrayOf;
      return tmp$ret$2;
    }
    var tmp$ret$10;
    // Inline function 'kotlin.UIntArray' call
    var tmp3_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand) - wordsToDiscard | 0;
    var tmp = 0;
    var tmp_0 = tmp3_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$9;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$8;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$7;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.shiftRight.<anonymous>' call
      var tmp0_subject = tmp_2;
      var tmp_3;
      if (0 <= tmp0_subject ? tmp0_subject < ((_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0) - wordsToDiscard | 0) : false) {
        var tmp$ret$5;
        // Inline function 'kotlin.UInt.or' call
        var tmp$ret$3;
        // Inline function 'kotlin.UInt.shr' call
        var tmp0_shr = UIntArray__get_impl_gp5kza(operand, tmp_2 + wordsToDiscard | 0);
        tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shr) >>> shiftBits | 0);
        var tmp3_or = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.UInt.shl' call
        var tmp1_shl = UIntArray__get_impl_gp5kza(operand, (tmp_2 + wordsToDiscard | 0) + 1 | 0);
        var tmp2_shl = BigInteger32Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
        tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_shl) << tmp2_shl);
        var tmp4_or = tmp$ret$4;
        tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp3_or) | _UInt___get_data__impl__f0vqqw(tmp4_or));
        tmp_3 = tmp$ret$5;
      } else if (tmp0_subject === ((_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0) - wordsToDiscard | 0)) {
        var tmp$ret$6;
        // Inline function 'kotlin.UInt.shr' call
        var tmp5_shr = UIntArray__get_impl_gp5kza(operand, tmp_2 + wordsToDiscard | 0);
        tmp$ret$6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_shr) >>> shiftBits | 0);
        tmp_3 = tmp$ret$6;
      } else {
        throw RuntimeException_init_$Create$('Invalid case ' + tmp_2);
      }
      tmp$ret$7 = tmp_3;
      var tmp0_toInt = tmp$ret$7;
      tmp$ret$8 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$9 = tmp$ret$8;
      tmp_1[tmp_2] = tmp$ret$9;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$10 = _UIntArray___init__impl__ghjpc6(tmp_1);
    var result = tmp$ret$10;
    return this.removeLeadingZeros_cj3f2k_k$(result);
  };
  BigInteger32Arithmetic.prototype.normalize_6trsd_k$ = function (dividend, divisor) {
    var divisorSize = _UIntArray___get_size__impl__r6l8ci(divisor);
    var normalizationShift = this.numberOfLeadingZerosInAWord_4e4qx_k$(UIntArray__get_impl_gp5kza(divisor, divisorSize - 1 | 0));
    var divisorNormalized = this.shl_2g7hbz_k$(divisor, normalizationShift);
    var dividendNormalized = this.shl_2g7hbz_k$(dividend, normalizationShift);
    return new Triple(new UIntArray(dividendNormalized), new UIntArray(divisorNormalized), normalizationShift);
  };
  BigInteger32Arithmetic.prototype.normalize_mu4aqs_k$ = function (operand) {
    var normalizationShift = this.numberOfLeadingZerosInAWord_4e4qx_k$(UIntArray__get_impl_gp5kza(operand, _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0));
    return new Pair(new UIntArray(this.shl_2g7hbz_k$(operand, normalizationShift)), normalizationShift);
  };
  BigInteger32Arithmetic.prototype.denormalize_wmix8o_k$ = function (remainderNormalized, normalizationShift) {
    var remainder = this.shr_7qrbnd_k$(remainderNormalized, normalizationShift);
    return remainder;
  };
  BigInteger32Arithmetic.prototype.compare_u59uit_k$ = function (first, second) {
    var firstStart = _UIntArray___get_size__impl__r6l8ci(first) - this.countLeadingZeroWords_po0bdl_k$(first) | 0;
    var secondStart = _UIntArray___get_size__impl__r6l8ci(second) - this.countLeadingZeroWords_po0bdl_k$(second) | 0;
    if (firstStart > secondStart) {
      return 1;
    }
    if (secondStart > firstStart) {
      return -1;
    }
    var counter = firstStart - 1 | 0;
    var firstIsLarger = false;
    var bothAreEqual = true;
    $l$loop_0: while (counter >= 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp0_compareTo = UIntArray__get_impl_gp5kza(first, counter);
      var tmp1_compareTo = UIntArray__get_impl_gp5kza(second, counter);
      tmp$ret$0 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_compareTo), _UInt___get_data__impl__f0vqqw(tmp1_compareTo));
      if (tmp$ret$0 > 0) {
        firstIsLarger = true;
        bothAreEqual = false;
        break $l$loop_0;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp2_compareTo = UIntArray__get_impl_gp5kza(first, counter);
      var tmp3_compareTo = UIntArray__get_impl_gp5kza(second, counter);
      tmp$ret$1 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp2_compareTo), _UInt___get_data__impl__f0vqqw(tmp3_compareTo));
      if (tmp$ret$1 < 0) {
        firstIsLarger = false;
        bothAreEqual = false;
        break $l$loop_0;
      }
      var tmp0 = counter;
      counter = tmp0 - 1 | 0;
    }
    if (bothAreEqual) {
      return 0;
    }
    if (firstIsLarger) {
      return 1;
    } else {
      return -1;
    }
  };
  BigInteger32Arithmetic.prototype.add_86n30z_k$ = function (first, second) {
    if (_UIntArray___get_size__impl__r6l8ci(first) === 1 ? UIntArray__get_impl_gp5kza(first, 0) === _UInt___init__impl__l7qpdl(0) : false)
      return second;
    if (_UIntArray___get_size__impl__r6l8ci(second) === 1 ? UIntArray__get_impl_gp5kza(second, 0) === _UInt___init__impl__l7qpdl(0) : false)
      return first;
    var tmp;
    if (_UIntArray___get_size__impl__r6l8ci(first) > _UIntArray___get_size__impl__r6l8ci(second)) {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(first), _UIntArray___get_size__impl__r6l8ci(second), new UIntArray(first), new UIntArray(second));
    } else {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(second), _UIntArray___get_size__impl__r6l8ci(first), new UIntArray(second), new UIntArray(first));
    }
    var tmp0_container = tmp;
    var maxLength = tmp0_container.component1_7eebsc_k$();
    var minLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var tmp$ret$3;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = maxLength + 1 | 0;
    var tmp_0 = 0;
    var tmp_1 = tmp0_UIntArray;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.add.<anonymous>' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(0);
      var tmp0_toInt = tmp$ret$0;
      tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$2 = tmp$ret$1;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_2);
    var result = tmp$ret$3;
    var i = 0;
    var sum = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < minLength) {
      var tmp$ret$9;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.plus' call
      var tmp1_plus = sum;
      var tmp2_plus = UIntArray__get_impl_gp5kza(largerData, i);
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$4;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$4 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp2_plus)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_plus = tmp$ret$4;
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp0_plus)));
      tmp$ret$6 = tmp$ret$5;
      var tmp3_plus = tmp$ret$6;
      var tmp4_plus = UIntArray__get_impl_gp5kza(smallerData, i);
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$7;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$7 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp4_plus)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_plus_0 = tmp$ret$7;
      tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp0_plus_0)));
      tmp$ret$9 = tmp$ret$8;
      sum = tmp$ret$9;
      var tmp_4 = i;
      var tmp$ret$12;
      // Inline function 'kotlin.ULong.toUInt' call
      var tmp$ret$10;
      // Inline function 'kotlin.ULong.and' call
      var tmp5_and = sum;
      var tmp6_and = this.baseMask_1;
      tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp6_and)));
      var tmp7_toUInt = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp7_toUInt);
      tmp$ret$11 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
      tmp$ret$12 = tmp$ret$11;
      UIntArray__set_impl_7f2zu2(result, tmp_4, tmp$ret$12);
      var tmp$ret$13;
      // Inline function 'kotlin.ULong.shr' call
      var tmp8_shr = sum;
      var tmp9_shr = this.basePowerOfTwo_1;
      tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shr).ushr_rr8rvr_k$(tmp9_shr));
      sum = tmp$ret$13;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    while (true) {
      if (equals(sum, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
        while (i < maxLength) {
          UIntArray__set_impl_7f2zu2(result, i, UIntArray__get_impl_gp5kza(largerData, i));
          var tmp2 = i;
          i = tmp2 + 1 | 0;
        }
        var tmp_5;
        if (UIntArray__get_impl_gp5kza(result, _UIntArray___get_size__impl__r6l8ci(result) - 1 | 0) === _UInt___init__impl__l7qpdl(0)) {
          var tmp$ret$14;
          // Inline function 'kotlin.collections.copyOfRange' call
          var tmp10_copyOfRange = _UIntArray___get_size__impl__r6l8ci(result) - 1 | 0;
          tmp$ret$14 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(result), 0, tmp10_copyOfRange));
          tmp_5 = tmp$ret$14;
        } else {
          tmp_5 = result;
        }
        return tmp_5;
      }
      if (i === maxLength) {
        var tmp$ret$16;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp11_toUInt = sum;
        var tmp$ret$15;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp11_toUInt);
        tmp$ret$15 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
        tmp$ret$16 = tmp$ret$15;
        UIntArray__set_impl_7f2zu2(result, maxLength, tmp$ret$16);
        return result;
      }
      var tmp$ret$19;
      // Inline function 'kotlin.ULong.plus' call
      var tmp12_plus = sum;
      var tmp13_plus = UIntArray__get_impl_gp5kza(largerData, i);
      var tmp$ret$18;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$17;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$17 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp13_plus)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_plus_1 = tmp$ret$17;
      tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp0_plus_1)));
      tmp$ret$19 = tmp$ret$18;
      sum = tmp$ret$19;
      var tmp_6 = i;
      var tmp$ret$22;
      // Inline function 'kotlin.ULong.toUInt' call
      var tmp$ret$20;
      // Inline function 'kotlin.ULong.and' call
      var tmp14_and = sum;
      var tmp15_and = this.baseMask_1;
      tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp14_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp15_and)));
      var tmp16_toUInt = tmp$ret$20;
      var tmp$ret$21;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt_1 = _ULong___get_data__impl__fggpzb(tmp16_toUInt);
      tmp$ret$21 = _UInt___init__impl__l7qpdl(tmp0_toUInt_1.toInt_1tsl84_k$());
      tmp$ret$22 = tmp$ret$21;
      UIntArray__set_impl_7f2zu2(result, tmp_6, tmp$ret$22);
      var tmp$ret$23;
      // Inline function 'kotlin.ULong.shr' call
      var tmp17_shr = sum;
      var tmp18_shr = this.basePowerOfTwo_1;
      tmp$ret$23 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_shr).ushr_rr8rvr_k$(tmp18_shr));
      sum = tmp$ret$23;
      var tmp3 = i;
      i = tmp3 + 1 | 0;
    }
  };
  BigInteger32Arithmetic.prototype.subtract_hh11hc_k$ = function (first, second) {
    var firstWithoutLeadingZeroes = this.removeLeadingZeros_cj3f2k_k$(first);
    var secondWithoutLeadingZeroes = this.removeLeadingZeros_cj3f2k_k$(second);
    var firstIsLarger = this.compare_u59uit_k$(firstWithoutLeadingZeroes, secondWithoutLeadingZeroes) === 1;
    var tmp;
    if (firstIsLarger) {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(firstWithoutLeadingZeroes), _UIntArray___get_size__impl__r6l8ci(secondWithoutLeadingZeroes), new UIntArray(firstWithoutLeadingZeroes), new UIntArray(secondWithoutLeadingZeroes));
    } else {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(secondWithoutLeadingZeroes), _UIntArray___get_size__impl__r6l8ci(firstWithoutLeadingZeroes), new UIntArray(secondWithoutLeadingZeroes), new UIntArray(firstWithoutLeadingZeroes));
    }
    var tmp0_container = tmp;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var tmp$ret$3;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = largerLength + 1 | 0;
    var tmp_0 = 0;
    var tmp_1 = tmp0_UIntArray;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.subtract.<anonymous>' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(0);
      var tmp0_toInt = tmp$ret$0;
      tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$2 = tmp$ret$1;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_2);
    var result = tmp$ret$3;
    var i = 0;
    var diff = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerLength) {
      if (i >= _UIntArray___get_size__impl__r6l8ci(largerData)) {
        println('Breakpoint');
      }
      if (i >= _UIntArray___get_size__impl__r6l8ci(smallerData)) {
        println('Breakpoint');
      }
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.minus' call
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.minus' call
      var tmp$ret$4;
      // Inline function 'kotlin.UInt.toULong' call
      var tmp1_toULong = UIntArray__get_impl_gp5kza(largerData, i);
      tmp$ret$4 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp1_toULong)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp2_minus = tmp$ret$4;
      var tmp3_minus = UIntArray__get_impl_gp5kza(smallerData, i);
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.minus' call
      var tmp$ret$5;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$5 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp3_minus)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_minus = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp0_minus)));
      tmp$ret$7 = tmp$ret$6;
      var tmp4_minus = tmp$ret$7;
      var tmp5_minus = diff;
      tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp5_minus)));
      diff = tmp$ret$8;
      var tmp_4 = i;
      var tmp$ret$10;
      // Inline function 'kotlin.ULong.toUInt' call
      var tmp6_toUInt = diff;
      var tmp$ret$9;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp6_toUInt);
      tmp$ret$9 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
      tmp$ret$10 = tmp$ret$9;
      UIntArray__set_impl_7f2zu2(result, tmp_4, tmp$ret$10);
      var tmp$ret$12;
      // Inline function 'kotlin.ULong.shr' call
      var tmp$ret$11;
      // Inline function 'kotlin.ULong.and' call
      var tmp7_and = diff;
      var tmp8_and = this.overflowMask_1;
      tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp8_and)));
      var tmp9_shr = tmp$ret$11;
      var tmp10_shr = this.wordSizeInBits_1;
      tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_shr).ushr_rr8rvr_k$(tmp10_shr));
      diff = tmp$ret$12;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    while (!equals(diff, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$15;
      // Inline function 'kotlin.UInt.minus' call
      var tmp11_minus = UIntArray__get_impl_gp5kza(largerData, i);
      var tmp12_minus = diff;
      var tmp$ret$14;
      // Inline function 'kotlin.ULong.minus' call
      var tmp$ret$13;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$13 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp11_minus)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_minus_0 = tmp$ret$13;
      tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_minus_0).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp12_minus)));
      tmp$ret$15 = tmp$ret$14;
      diff = tmp$ret$15;
      var tmp_5 = i;
      var tmp$ret$18;
      // Inline function 'kotlin.UInt.and' call
      var tmp$ret$17;
      // Inline function 'kotlin.ULong.toUInt' call
      var tmp13_toUInt = diff;
      var tmp$ret$16;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp13_toUInt);
      tmp$ret$16 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
      tmp$ret$17 = tmp$ret$16;
      var tmp14_and = tmp$ret$17;
      var tmp15_and = this.baseMaskInt_1;
      tmp$ret$18 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp14_and) & _UInt___get_data__impl__f0vqqw(tmp15_and));
      UIntArray__set_impl_7f2zu2(result, tmp_5, tmp$ret$18);
      var tmp$ret$20;
      // Inline function 'kotlin.ULong.shr' call
      var tmp$ret$19;
      // Inline function 'kotlin.ULong.and' call
      var tmp16_and = diff;
      var tmp17_and = this.overflowMask_1;
      tmp$ret$19 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp17_and)));
      var tmp18_shr = tmp$ret$19;
      var tmp19_shr = this.wordSizeInBits_1;
      tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp18_shr).ushr_rr8rvr_k$(tmp19_shr));
      diff = tmp$ret$20;
      var tmp2 = i;
      i = tmp2 + 1 | 0;
    }
    while (i < largerLength) {
      UIntArray__set_impl_7f2zu2(result, i, UIntArray__get_impl_gp5kza(largerData, i));
      var tmp3 = i;
      i = tmp3 + 1 | 0;
    }
    var tmp$ret$23;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$22;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(result);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      var tmp$ret$21;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.subtract.<anonymous>' call
      tmp$ret$21 = element === _UInt___init__impl__l7qpdl(0);
      if (tmp$ret$21) {
        tmp0_filterTo.add_1j60pz_k$(new UInt(element));
      }
    }
    tmp$ret$22 = tmp0_filterTo;
    tmp$ret$23 = tmp$ret$22;
    if (tmp$ret$23.isEmpty_y1axqb_k$()) {
      return this.ZERO_1;
    }
    var tmp$ret$28;
    // Inline function 'kotlin.collections.indexOfLast' call
    var tmp$ret$27;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var tmp0_indexOfLast = _UIntArray___get_storage__impl__92a0v0(result);
      var inductionVariable = tmp0_indexOfLast.length - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$26;
          // Inline function 'kotlin.collections.indexOfLast.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0_indexOfLast[index];
          var tmp$ret$25;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.subtract.<anonymous>' call
          var tmp$ret$24;
          // Inline function 'kotlin.toUInt' call
          tmp$ret$24 = _UInt___init__impl__l7qpdl(tmp1__anonymous__uwfjfc);
          var tmp20__anonymous__q2j3lv = tmp$ret$24;
          tmp$ret$25 = !(tmp20__anonymous__q2j3lv === _UInt___init__impl__l7qpdl(0));
          tmp$ret$26 = tmp$ret$25;
          if (tmp$ret$26) {
            tmp$ret$27 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$27 = -1;
    }
    tmp$ret$28 = tmp$ret$27;
    var firstEmpty = tmp$ret$28 + 1 | 0;
    var tmp$ret$29;
    // Inline function 'kotlin.collections.copyOfRange' call
    tmp$ret$29 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(result), 0, firstEmpty));
    return tmp$ret$29;
  };
  BigInteger32Arithmetic.prototype.multiply_fgk5fk_k$ = function (first, second) {
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.times' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(imul(_UInt___get_data__impl__f0vqqw(first), _UInt___get_data__impl__f0vqqw(second)));
    var result = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.toUInt' call
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.shr' call
    var tmp0_shr = this.basePowerOfTwo_1;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) >>> tmp0_shr | 0);
    var tmp1_toUInt = tmp$ret$1;
    tmp$ret$2 = tmp1_toUInt;
    var high = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.toUInt' call
    tmp$ret$3 = result;
    var low = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$4 = _UIntArray___init__impl__ghjpc6(new Int32Array([low, high]));
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$4);
  };
  BigInteger32Arithmetic.prototype.multiply_wo7wfz_k$ = function (first, second) {
    var result = _UIntArray___init__impl__ghjpc6_0(_UIntArray___get_size__impl__r6l8ci(first) + 1 | 0);
    var product;
    var sum;
    var inductionVariable = 0;
    var last = _UIntArray___get_size__impl__r6l8ci(first);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        // Inline function 'kotlin.ULong.times' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toULong' call
        var tmp0_toULong = UIntArray__get_impl_gp5kza(first, i);
        tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp0_toULong)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp1_times = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.ULong.times' call
        var tmp$ret$1;
        // Inline function 'kotlin.UInt.toULong' call
        tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(second)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp0_times = tmp$ret$1;
        tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_times).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(tmp0_times)));
        tmp$ret$3 = tmp$ret$2;
        product = tmp$ret$3;
        var tmp$ret$10;
        // Inline function 'kotlin.ULong.plus' call
        var tmp$ret$4;
        // Inline function 'kotlin.UInt.toULong' call
        var tmp2_toULong = UIntArray__get_impl_gp5kza(result, i);
        tmp$ret$4 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp2_toULong)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp6_plus = tmp$ret$4;
        var tmp$ret$7;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp$ret$5;
        // Inline function 'kotlin.ULong.and' call
        var tmp3_and = product;
        var tmp4_and = this.baseMask_1;
        tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp4_and)));
        var tmp5_toUInt = tmp$ret$5;
        var tmp$ret$6;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp5_toUInt);
        tmp$ret$6 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
        tmp$ret$7 = tmp$ret$6;
        var tmp7_plus = tmp$ret$7;
        var tmp$ret$9;
        // Inline function 'kotlin.ULong.plus' call
        var tmp$ret$8;
        // Inline function 'kotlin.UInt.toULong' call
        tmp$ret$8 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp7_plus)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp0_plus = tmp$ret$8;
        tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp0_plus)));
        tmp$ret$10 = tmp$ret$9;
        sum = tmp$ret$10;
        var tmp$ret$13;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp$ret$11;
        // Inline function 'kotlin.ULong.and' call
        var tmp8_and = sum;
        var tmp9_and = this.baseMask_1;
        tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp9_and)));
        var tmp10_toUInt = tmp$ret$11;
        var tmp$ret$12;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp10_toUInt);
        tmp$ret$12 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
        tmp$ret$13 = tmp$ret$12;
        UIntArray__set_impl_7f2zu2(result, i, tmp$ret$13);
        var tmp$ret$14;
        // Inline function 'kotlin.ULong.shr' call
        var tmp11_shr = sum;
        var tmp12_shr = this.basePowerOfTwo_1;
        tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shr).ushr_rr8rvr_k$(tmp12_shr));
        sum = tmp$ret$14;
        var tmp = i + 1 | 0;
        var tmp$ret$20;
        // Inline function 'kotlin.UInt.plus' call
        var tmp$ret$17;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp$ret$15;
        // Inline function 'kotlin.ULong.shr' call
        var tmp13_shr = product;
        var tmp14_shr = this.basePowerOfTwo_1;
        tmp$ret$15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp13_shr).ushr_rr8rvr_k$(tmp14_shr));
        var tmp15_toUInt = tmp$ret$15;
        var tmp$ret$16;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt_1 = _ULong___get_data__impl__fggpzb(tmp15_toUInt);
        tmp$ret$16 = _UInt___init__impl__l7qpdl(tmp0_toUInt_1.toInt_1tsl84_k$());
        tmp$ret$17 = tmp$ret$16;
        var tmp17_plus = tmp$ret$17;
        var tmp$ret$19;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp16_toUInt = sum;
        var tmp$ret$18;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt_2 = _ULong___get_data__impl__fggpzb(tmp16_toUInt);
        tmp$ret$18 = _UInt___init__impl__l7qpdl(tmp0_toUInt_2.toInt_1tsl84_k$());
        tmp$ret$19 = tmp$ret$18;
        var tmp18_plus = tmp$ret$19;
        tmp$ret$20 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp17_plus) + _UInt___get_data__impl__f0vqqw(tmp18_plus) | 0);
        UIntArray__set_impl_7f2zu2(result, tmp, tmp$ret$20);
      }
       while (inductionVariable < last);
    return this.removeLeadingZeros_cj3f2k_k$(result);
  };
  BigInteger32Arithmetic.prototype.karatsubaMultiply_1lpnds_k$ = function (firstUnsigned, secondUnsigned) {
    var first = new SignedUIntArray(firstUnsigned, true);
    var second = new SignedUIntArray(secondUnsigned, true);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _UIntArray___get_size__impl__r6l8ci(first.unsignedValue_1);
    var tmp1_max = _UIntArray___get_size__impl__r6l8ci(second.unsignedValue_1);
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var halfLength = (tmp$ret$0 + 1 | 0) / 2 | 0;
    var mask = this.subtract_hh11hc_k$(this.shl_2g7hbz_k$(this.ONE_1, imul(halfLength, this.wordSizeInBits_1)), this.ONE_1);
    var firstLower = this.and_2m9ip6_k$(first, mask);
    var firstHigher = this.shr_rwzjbo_k$(first, imul(halfLength, this.wordSizeInBits_1));
    var secondLower = this.and_2m9ip6_k$(second, mask);
    var secondHigher = this.shr_rwzjbo_k$(second, imul(halfLength, this.wordSizeInBits_1));
    var higherProduct = this.times_9xmdsk_k$(firstHigher, secondHigher);
    var lowerProduct = this.times_9xmdsk_k$(firstLower, secondLower);
    var middleProduct = this.times_9xmdsk_k$(this.plus_8snexk_k$(firstHigher, firstLower), this.plus_8snexk_k$(secondHigher, secondLower));
    var result = this.plus_8snexk_k$(this.plus_8snexk_k$(this.shl_k2tiau_k$(higherProduct, imul(imul(2, this.wordSizeInBits_1), halfLength)), this.shl_k2tiau_k$(this.minus_o2v7uq_k$(this.minus_o2v7uq_k$(middleProduct, higherProduct), lowerProduct), imul(this.wordSizeInBits_1, halfLength))), lowerProduct);
    return result.unsignedValue_1;
  };
  BigInteger32Arithmetic.prototype.prependULongArray_uf7y2u_k$ = function (original, numberOfWords, value) {
    var tmp$ret$3;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(original) + numberOfWords | 0;
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.prependULongArray.<anonymous>' call
      tmp$ret$0 = tmp_2 < numberOfWords ? value : UIntArray__get_impl_gp5kza(original, tmp_2 - numberOfWords | 0);
      var tmp0_toInt = tmp$ret$0;
      tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$2 = tmp$ret$1;
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return tmp$ret$3;
  };
  BigInteger32Arithmetic.prototype.extendUIntArray_2gc72v_k$ = function (original, numberOfWords, value) {
    var tmp$ret$3;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(original) + numberOfWords | 0;
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.extendUIntArray.<anonymous>' call
      tmp$ret$0 = tmp_2 < _UIntArray___get_size__impl__r6l8ci(original) ? UIntArray__get_impl_gp5kza(original, tmp_2) : value;
      var tmp0_toInt = tmp$ret$0;
      tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$2 = tmp$ret$1;
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return tmp$ret$3;
  };
  BigInteger32Arithmetic.prototype.toomCook3Multiply_f3ys5e_k$ = function (firstUnchecked, secondUnchecked) {
    var tmp;
    if (!((_UIntArray___get_size__impl__r6l8ci(firstUnchecked) % 3 | 0) === 0)) {
      var tmp_0 = new UIntArray(firstUnchecked);
      var tmp$ret$4;
      // Inline function 'kotlin.collections.asIterable' call
      var tmp$ret$3;
      // Inline function 'kotlin.UIntArray' call
      var tmp0_UIntArray = imul((_UIntArray___get_size__impl__r6l8ci(firstUnchecked) + 2 | 0) / 3 | 0, 3) - _UIntArray___get_size__impl__r6l8ci(firstUnchecked) | 0;
      var tmp_1 = 0;
      var tmp_2 = tmp0_UIntArray;
      var tmp_3 = new Int32Array(tmp_2);
      while (tmp_1 < tmp_2) {
        var tmp_4 = tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.UIntArray.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toomCook3Multiply.<anonymous>' call
        tmp$ret$0 = _UInt___init__impl__l7qpdl(0);
        var tmp0_toInt = tmp$ret$0;
        tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$2 = tmp$ret$1;
        tmp_3[tmp_4] = tmp$ret$2;
        tmp_1 = tmp_1 + 1 | 0;
      }
      tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_3);
      var tmp1_asIterable = tmp$ret$3;
      tmp$ret$4 = new UIntArray(tmp1_asIterable);
      tmp = plus(tmp_0, tmp$ret$4);
    } else {
      tmp = new UIntArray(firstUnchecked);
    }
    var first = toUIntArray(tmp);
    var tmp_5;
    if (!((_UIntArray___get_size__impl__r6l8ci(secondUnchecked) % 3 | 0) === 0)) {
      var tmp_6 = new UIntArray(secondUnchecked);
      var tmp$ret$9;
      // Inline function 'kotlin.collections.asIterable' call
      var tmp$ret$8;
      // Inline function 'kotlin.UIntArray' call
      var tmp2_UIntArray = imul((_UIntArray___get_size__impl__r6l8ci(secondUnchecked) + 2 | 0) / 3 | 0, 3) - _UIntArray___get_size__impl__r6l8ci(secondUnchecked) | 0;
      var tmp_7 = 0;
      var tmp_8 = tmp2_UIntArray;
      var tmp_9 = new Int32Array(tmp_8);
      while (tmp_7 < tmp_8) {
        var tmp_10 = tmp_7;
        var tmp$ret$7;
        // Inline function 'kotlin.UIntArray.<anonymous>' call
        var tmp$ret$6;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp$ret$5;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toomCook3Multiply.<anonymous>' call
        tmp$ret$5 = _UInt___init__impl__l7qpdl(0);
        var tmp0_toInt_0 = tmp$ret$5;
        tmp$ret$6 = _UInt___get_data__impl__f0vqqw(tmp0_toInt_0);
        tmp$ret$7 = tmp$ret$6;
        tmp_9[tmp_10] = tmp$ret$7;
        tmp_7 = tmp_7 + 1 | 0;
      }
      tmp$ret$8 = _UIntArray___init__impl__ghjpc6(tmp_9);
      var tmp3_asIterable = tmp$ret$8;
      tmp$ret$9 = new UIntArray(tmp3_asIterable);
      tmp_5 = plus(tmp_6, tmp$ret$9);
    } else {
      tmp_5 = new UIntArray(secondUnchecked);
    }
    var second = toUIntArray(tmp_5);
    var firstLength = _UIntArray___get_size__impl__r6l8ci(first);
    var secondLength = _UIntArray___get_size__impl__r6l8ci(second);
    var tmp_11;
    if (firstLength > secondLength) {
      var prepared = this.extendUIntArray_2gc72v_k$(second, firstLength - secondLength | 0, _UInt___init__impl__l7qpdl(0));
      tmp_11 = new Pair(new UIntArray(first), new UIntArray(prepared));
    } else if (firstLength < secondLength) {
      var prepared_0 = this.extendUIntArray_2gc72v_k$(first, secondLength - firstLength | 0, _UInt___init__impl__l7qpdl(0));
      tmp_11 = new Pair(new UIntArray(prepared_0), new UIntArray(second));
    } else {
      tmp_11 = new Pair(new UIntArray(first), new UIntArray(second));
    }
    var tmp0_container = tmp_11;
    var firstPrepared = tmp0_container.component1_7eebsc_k$().storage_1;
    var secondPrepared = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp$ret$10;
    // Inline function 'kotlin.math.max' call
    var tmp4_max = _UIntArray___get_size__impl__r6l8ci(first);
    var tmp5_max = _UIntArray___get_size__impl__r6l8ci(second);
    tmp$ret$10 = Math.max(tmp4_max, tmp5_max);
    var longestLength = tmp$ret$10;
    var extendedDigit = (longestLength + 2 | 0) / 3 | 0;
    var m0 = new SignedUIntArray(toUIntArray(slice(firstPrepared, until(0, extendedDigit))), true);
    var m1 = new SignedUIntArray(toUIntArray(slice(firstPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var m2 = new SignedUIntArray(toUIntArray(slice(firstPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var n0 = new SignedUIntArray(toUIntArray(slice(secondPrepared, until(0, extendedDigit))), true);
    var n1 = new SignedUIntArray(toUIntArray(slice(secondPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var n2 = new SignedUIntArray(toUIntArray(slice(secondPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var p0 = this.plus_8snexk_k$(m0, m2);
    var pe0 = m0;
    var pe1 = this.plus_8snexk_k$(p0, m1);
    var pem1 = this.minus_o2v7uq_k$(p0, m1);
    var doublePemM2 = this.times_9xmdsk_k$(this.plus_8snexk_k$(pem1, m2), this.SIGNED_POSITIVE_TWO_1);
    var pem2 = this.minus_o2v7uq_k$(doublePemM2, m0);
    var pinf = m2;
    var q0 = this.plus_8snexk_k$(n0, n2);
    var qe0 = n0;
    var qe1 = this.plus_8snexk_k$(q0, n1);
    var qem1 = this.minus_o2v7uq_k$(q0, n1);
    var doubleQemN2 = this.times_9xmdsk_k$(this.plus_8snexk_k$(qem1, n2), this.SIGNED_POSITIVE_TWO_1);
    var qem2 = this.minus_o2v7uq_k$(doubleQemN2, n0);
    var qinf = n2;
    var re0 = this.times_9xmdsk_k$(pe0, qe0);
    var re1 = this.times_9xmdsk_k$(pe1, qe1);
    var rem1 = this.times_9xmdsk_k$(pem1, qem1);
    var rem2 = this.times_9xmdsk_k$(pem2, qem2);
    var rinf = this.times_9xmdsk_k$(pinf, qinf);
    var r0 = re0;
    var r4 = rinf;
    var rem2re1diff = this.minus_o2v7uq_k$(rem2, re1);
    var tmp$ret$11;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$11 = _UIntArray___init__impl__ghjpc6(new Int32Array([_UInt___init__impl__l7qpdl(3)]));
    var r3 = this.div_ez7ly9_k$(rem2re1diff, new SignedUIntArray(tmp$ret$11, true));
    var r1 = this.shr_rwzjbo_k$(this.minus_o2v7uq_k$(re1, rem1), 1);
    var r2 = this.minus_o2v7uq_k$(rem1, r0);
    r3 = this.plus_8snexk_k$(this.shr_rwzjbo_k$(this.minus_o2v7uq_k$(r2, r3), 1), this.times_9xmdsk_k$(this.SIGNED_POSITIVE_TWO_1, rinf));
    r2 = this.minus_o2v7uq_k$(this.plus_8snexk_k$(r2, r1), r4);
    r1 = this.minus_o2v7uq_k$(r1, r3);
    var bShiftAmount = imul(extendedDigit, this.wordSizeInBits_1);
    var rb0 = r0;
    var rb1 = this.shl_k2tiau_k$(r1, bShiftAmount);
    var rb2 = this.shl_k2tiau_k$(r2, imul(bShiftAmount, 2));
    var rb3 = this.shl_k2tiau_k$(r3, imul(bShiftAmount, 3));
    var rb4 = this.shl_k2tiau_k$(r4, imul(bShiftAmount, 4));
    var rb = this.plus_8snexk_k$(this.plus_8snexk_k$(this.plus_8snexk_k$(this.plus_8snexk_k$(rb0, rb1), rb2), rb3), rb4);
    return rb.unsignedValue_1;
  };
  BigInteger32Arithmetic.prototype.get_SIGNED_POSITIVE_TWO_icygcg_k$ = function () {
    return this.SIGNED_POSITIVE_TWO_1;
  };
  BigInteger32Arithmetic.prototype.plus_8snexk_k$ = function (_this__u8e3s4, other) {
    return signedAdd(this, _this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.minus_o2v7uq_k$ = function (_this__u8e3s4, other) {
    return signedSubtract(this, _this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.times_9xmdsk_k$ = function (_this__u8e3s4, other) {
    return signedMultiply(this, _this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.div_ez7ly9_k$ = function (_this__u8e3s4, other) {
    return signedDivide(this, _this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.rem_9tvxi0_k$ = function (_this__u8e3s4, other) {
    return signedRemainder(this, _this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.shr_rwzjbo_k$ = function (_this__u8e3s4, places) {
    return new SignedUIntArray(this.shr_7qrbnd_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  BigInteger32Arithmetic.prototype.shl_k2tiau_k$ = function (_this__u8e3s4, places) {
    return new SignedUIntArray(this.shl_2g7hbz_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  BigInteger32Arithmetic.prototype.and_2m9ip6_k$ = function (_this__u8e3s4, operand) {
    return new SignedUIntArray(this.and_tlzv1f_k$(_this__u8e3s4.unsignedValue_1, operand), _this__u8e3s4.sign_1);
  };
  BigInteger32Arithmetic.prototype.multiply_of8lyo_k$ = function (first, second) {
    if (equals(first, this.ZERO_1) ? true : equals(second, this.ZERO_1)) {
      return this.ZERO_1;
    }
    if (_UIntArray___get_size__impl__r6l8ci(first) >= 60 ? true : _UIntArray___get_size__impl__r6l8ci(second) === 60) {
      return this.karatsubaMultiply_1lpnds_k$(first, second);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.foldIndexed' call
    var tmp0_foldIndexed = this.ZERO_1;
    var index = 0;
    var accumulator = tmp0_foldIndexed;
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(second);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.multiply.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = tmp1;
      var tmp2__anonymous__z9zvc9 = accumulator;
      tmp$ret$0 = BigInteger32Arithmetic_getInstance().plus_tp68d0_k$(tmp2__anonymous__z9zvc9, BigInteger32Arithmetic_getInstance().shl_2g7hbz_k$(BigInteger32Arithmetic_getInstance().multiply_wo7wfz_k$(first, element), imul(tmp1__anonymous__uwfjfc, BigInteger32Arithmetic_getInstance().basePowerOfTwo_1)));
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$1);
  };
  BigInteger32Arithmetic.prototype.multiplyNoKaratsuba_mtnef_k$ = function (first, second) {
    if (equals(first, this.ZERO_1) ? true : equals(second, this.ZERO_1)) {
      return this.ZERO_1;
    }
    if (_UIntArray___get_size__impl__r6l8ci(first) >= 60 ? true : _UIntArray___get_size__impl__r6l8ci(second) === 60) {
      return this.karatsubaMultiply_1lpnds_k$(first, second);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.foldIndexed' call
    var tmp0_foldIndexed = this.ZERO_1;
    var index = 0;
    var accumulator = tmp0_foldIndexed;
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(second);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.multiplyNoKaratsuba.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = tmp1;
      var tmp2__anonymous__z9zvc9 = accumulator;
      tmp$ret$0 = BigInteger32Arithmetic_getInstance().plus_tp68d0_k$(tmp2__anonymous__z9zvc9, BigInteger32Arithmetic_getInstance().shl_2g7hbz_k$(BigInteger32Arithmetic_getInstance().multiply_wo7wfz_k$(first, element), imul(tmp1__anonymous__uwfjfc, BigInteger32Arithmetic_getInstance().basePowerOfTwo_1)));
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$1);
  };
  BigInteger32Arithmetic.prototype.pow_jek5yp_k$ = function (base, exponent) {
    if (exponent.equals(new Long(0, 0))) {
      return this.ONE_1;
    }
    if (exponent.equals(new Long(1, 0))) {
      return base;
    }
    var helperVar = this.ONE_1;
    var exponentVar = exponent;
    var baseVar = base;
    while (exponentVar.compareTo_n4fqi2_k$(new Long(1, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.rem' call
      var tmp0_rem = exponentVar;
      tmp$ret$0 = tmp0_rem.rem_9rbcjo_k$(new Long(2, 0));
      if (tmp$ret$0.equals(new Long(0, 0))) {
        baseVar = this.times_pw1zb4_k$(baseVar, baseVar);
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp1_div = exponentVar;
        tmp$ret$1 = tmp1_div.div_9s1fi3_k$(new Long(2, 0));
        exponentVar = tmp$ret$1;
      } else {
        helperVar = this.times_pw1zb4_k$(baseVar, helperVar);
        baseVar = this.times_pw1zb4_k$(baseVar, baseVar);
        var tmp$ret$3;
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        var tmp2_minus = exponentVar;
        tmp$ret$2 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
        var tmp3_div = tmp$ret$2;
        tmp$ret$3 = tmp3_div.div_9s1fi3_k$(new Long(2, 0));
        exponentVar = tmp$ret$3;
      }
    }
    return this.times_pw1zb4_k$(helperVar, baseVar);
  };
  BigInteger32Arithmetic.prototype.divide_llsyav_k$ = function (first, second) {
    return this.basicDivide_ierv6v_k$(first, second);
  };
  BigInteger32Arithmetic.prototype.basicDivide_ierv6v_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    if (this.compareTo_bu7gq6_k$(unnormalizedDivisor, unnormalizedDividend) > 0) {
      return new Pair(new UIntArray(this.ZERO_1), new UIntArray(unnormalizedDividend));
    }
    if (_UIntArray___get_size__impl__r6l8ci(unnormalizedDivisor) === 1 ? _UIntArray___get_size__impl__r6l8ci(unnormalizedDividend) === 1 : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$0;
      // Inline function 'kotlin.UInt.div' call
      var tmp0_div = UIntArray__get_impl_gp5kza(unnormalizedDividend, 0);
      var tmp1_div = UIntArray__get_impl_gp5kza(unnormalizedDivisor, 0);
      tmp$ret$0 = uintDivide(tmp0_div, tmp1_div);
      var tmp2_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$0]));
      tmp$ret$1 = tmp2_uintArrayOf;
      var tmp = new UIntArray(this.removeLeadingZeros_cj3f2k_k$(tmp$ret$1));
      var tmp$ret$3;
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.rem' call
      var tmp3_rem = UIntArray__get_impl_gp5kza(unnormalizedDividend, 0);
      var tmp4_rem = UIntArray__get_impl_gp5kza(unnormalizedDivisor, 0);
      tmp$ret$2 = uintRemainder(tmp3_rem, tmp4_rem);
      var tmp5_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$2]));
      tmp$ret$3 = tmp5_uintArrayOf;
      return new Pair(tmp, new UIntArray(this.removeLeadingZeros_cj3f2k_k$(tmp$ret$3)));
    }
    var bitPrecision = this.bitLength_ti7g0u_k$(unnormalizedDividend) - this.bitLength_ti7g0u_k$(unnormalizedDivisor) | 0;
    if (bitPrecision === 0) {
      var tmp$ret$4;
      // Inline function 'kotlin.uintArrayOf' call
      tmp$ret$4 = _UIntArray___init__impl__ghjpc6(new Int32Array([_UInt___init__impl__l7qpdl(1)]));
      return new Pair(new UIntArray(tmp$ret$4), new UIntArray(this.minus_ove8ru_k$(unnormalizedDividend, unnormalizedDivisor)));
    }
    var tmp0_container = this.normalize_6trsd_k$(unnormalizedDividend, unnormalizedDivisor);
    var dividend = tmp0_container.component1_7eebsc_k$().storage_1;
    var divisor = tmp0_container.component2_7eebsb_k$().storage_1;
    var normalizationShift = tmp0_container.component3_7eebsa_k$();
    var dividendSize = _UIntArray___get_size__impl__r6l8ci(dividend);
    var divisorSize = _UIntArray___get_size__impl__r6l8ci(divisor);
    var wordPrecision = dividendSize - divisorSize | 0;
    var qjhat;
    var reconstructedQuotient;
    var quotient = _UIntArray___init__impl__ghjpc6_0(wordPrecision);
    var divisorTimesBaseToPowerOfM = this.shl_2g7hbz_k$(divisor, imul(wordPrecision, this.basePowerOfTwo_1));
    if (this.compareTo_bu7gq6_k$(dividend, divisorTimesBaseToPowerOfM) >= 0) {
      quotient = _UIntArray___init__impl__ghjpc6_0(wordPrecision + 1 | 0);
      UIntArray__set_impl_7f2zu2(quotient, wordPrecision, _UInt___init__impl__l7qpdl(1));
      dividend = this.minus_ove8ru_k$(dividend, divisorTimesBaseToPowerOfM);
    }
    var inductionVariable = wordPrecision - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0;
        if ((divisorSize + j | 0) < _UIntArray___get_size__impl__r6l8ci(dividend)) {
          var tmp$ret$12;
          // Inline function 'kotlin.ULong.div' call
          var tmp$ret$9;
          // Inline function 'kotlin.ULong.plus' call
          var tmp$ret$6;
          // Inline function 'kotlin.ULong.shl' call
          var tmp$ret$5;
          // Inline function 'kotlin.UInt.toULong' call
          var tmp6_toULong = UIntArray__get_impl_gp5kza(dividend, divisorSize + j | 0);
          tmp$ret$5 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp6_toULong)).and_jhajnj_k$(new Long(-1, 0)));
          var tmp7_shl = tmp$ret$5;
          var tmp8_shl = this.basePowerOfTwo_1;
          tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_shl).shl_po5ip6_k$(tmp8_shl));
          var tmp9_plus = tmp$ret$6;
          var tmp10_plus = UIntArray__get_impl_gp5kza(dividend, (divisorSize + j | 0) - 1 | 0);
          var tmp$ret$8;
          // Inline function 'kotlin.ULong.plus' call
          var tmp$ret$7;
          // Inline function 'kotlin.UInt.toULong' call
          tmp$ret$7 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp10_plus)).and_jhajnj_k$(new Long(-1, 0)));
          var tmp0_plus = tmp$ret$7;
          tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp0_plus)));
          tmp$ret$9 = tmp$ret$8;
          var tmp11_div = tmp$ret$9;
          var tmp12_div = UIntArray__get_impl_gp5kza(divisor, divisorSize - 1 | 0);
          var tmp$ret$11;
          // Inline function 'kotlin.ULong.div' call
          var tmp$ret$10;
          // Inline function 'kotlin.UInt.toULong' call
          tmp$ret$10 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp12_div)).and_jhajnj_k$(new Long(-1, 0)));
          var tmp0_div_0 = tmp$ret$10;
          tmp$ret$11 = ulongDivide(tmp11_div, tmp0_div_0);
          tmp$ret$12 = tmp$ret$11;
          tmp_0 = tmp$ret$12;
        } else {
          var tmp_1;
          if ((divisorSize + j | 0) === _UIntArray___get_size__impl__r6l8ci(dividend)) {
            var tmp$ret$14;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp$ret$13;
            // Inline function 'kotlin.UInt.div' call
            var tmp13_div = UIntArray__get_impl_gp5kza(dividend, (divisorSize + j | 0) - 1 | 0);
            var tmp14_div = UIntArray__get_impl_gp5kza(divisor, divisorSize - 1 | 0);
            tmp$ret$13 = uintDivide(tmp13_div, tmp14_div);
            var tmp15_toULong = tmp$ret$13;
            tmp$ret$14 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp15_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            tmp_1 = tmp$ret$14;
          } else {
            tmp_1 = _ULong___init__impl__c78o9k(new Long(0, 0));
          }
          tmp_0 = tmp_1;
        }
        qjhat = tmp_0;
        var tmp_2 = quotient;
        var tmp_3;
        var tmp$ret$18;
        // Inline function 'kotlin.ULong.compareTo' call
        var tmp17_compareTo = qjhat;
        var tmp$ret$17;
        // Inline function 'kotlin.UInt.minus' call
        var tmp16_minus = this.base_1;
        var tmp$ret$16;
        // Inline function 'kotlin.ULong.minus' call
        var tmp$ret$15;
        // Inline function 'kotlin.UInt.toULong' call
        tmp$ret$15 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp16_minus)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp0_minus = tmp$ret$15;
        tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0)))));
        tmp$ret$17 = tmp$ret$16;
        var tmp18_compareTo = tmp$ret$17;
        tmp$ret$18 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp17_compareTo), _ULong___get_data__impl__fggpzb(tmp18_compareTo));
        if (tmp$ret$18 < 0) {
          var tmp$ret$20;
          // Inline function 'kotlin.ULong.toUInt' call
          var tmp19_toUInt = qjhat;
          var tmp$ret$19;
          // Inline function 'kotlin.toUInt' call
          var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp19_toUInt);
          tmp$ret$19 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
          tmp$ret$20 = tmp$ret$19;
          tmp_3 = tmp$ret$20;
        } else {
          var tmp$ret$21;
          // Inline function 'kotlin.UInt.minus' call
          var tmp20_minus = this.base_1;
          tmp$ret$21 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp20_minus) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) | 0);
          tmp_3 = tmp$ret$21;
        }
        UIntArray__set_impl_7f2zu2(tmp_2, j, tmp_3);
        reconstructedQuotient = this.shl_2g7hbz_k$(this.times_wk9fwx_k$(divisor, UIntArray__get_impl_gp5kza(quotient, j)), imul(j, this.basePowerOfTwo_1));
        while (this.compareTo_bu7gq6_k$(reconstructedQuotient, dividend) > 0) {
          var tmp_4 = quotient;
          var tmp$ret$22;
          // Inline function 'kotlin.UInt.minus' call
          var tmp21_minus = UIntArray__get_impl_gp5kza(quotient, j);
          tmp$ret$22 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp21_minus) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) | 0);
          UIntArray__set_impl_7f2zu2(tmp_4, j, tmp$ret$22);
          reconstructedQuotient = this.shl_2g7hbz_k$(this.times_wk9fwx_k$(divisor, UIntArray__get_impl_gp5kza(quotient, j)), imul(j, this.basePowerOfTwo_1));
        }
        dividend = this.minus_ove8ru_k$(dividend, reconstructedQuotient);
      }
       while (0 <= inductionVariable);
    while (this.compareTo_bu7gq6_k$(dividend, divisor) >= 0) {
      quotient = this.plus_18bngj_k$(quotient, _UInt___init__impl__l7qpdl(1));
      dividend = this.minus_ove8ru_k$(dividend, divisor);
    }
    var denormRemainder = this.denormalize_wmix8o_k$(dividend, normalizationShift);
    return new Pair(new UIntArray(this.removeLeadingZeros_cj3f2k_k$(quotient)), new UIntArray(denormRemainder));
  };
  BigInteger32Arithmetic.prototype.basicDivide2_plcxxx_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    var tmp0_container = this.normalize_6trsd_k$(unnormalizedDividend, unnormalizedDivisor);
    var a = tmp0_container.component1_7eebsc_k$().storage_1;
    var b = tmp0_container.component2_7eebsb_k$().storage_1;
    var shift = tmp0_container.component3_7eebsa_k$();
    var m = _UIntArray___get_size__impl__r6l8ci(a) - _UIntArray___get_size__impl__r6l8ci(b) | 0;
    var bmb = this.shl_2g7hbz_k$(b, imul(m, this.wordSizeInBits_1));
    var tmp$ret$3;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = m + 1 | 0;
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.basicDivide2.<anonymous>' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(0);
      var tmp0_toInt = tmp$ret$0;
      tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$2 = tmp$ret$1;
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_1);
    var q = tmp$ret$3;
    if (this.compareTo_bu7gq6_k$(a, bmb) > 0) {
      UIntArray__set_impl_7f2zu2(q, m, _UInt___init__impl__l7qpdl(1));
      a = this.minus_ove8ru_k$(a, bmb);
    }
    var qjhat = this.ZERO_1;
    var qjhatULong = _ULong___init__impl__c78o9k(new Long(0, 0));
    var bjb = this.ZERO_1;
    var delta = this.ZERO_1;
    var inductionVariable = m - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$7;
        // Inline function 'kotlin.ULong.div' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyOfRange' call
        var tmp1_copyOfRange = a;
        var tmp2_copyOfRange = _UIntArray___get_size__impl__r6l8ci(b) - 1 | 0;
        var tmp3_copyOfRange = _UIntArray___get_size__impl__r6l8ci(b) + 1 | 0;
        tmp$ret$4 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(tmp1_copyOfRange), tmp2_copyOfRange, tmp3_copyOfRange));
        var tmp4_div = this.toULongExact_xpi7aa_k$(tmp$ret$4);
        var tmp5_div = UIntArray__get_impl_gp5kza(b, _UIntArray___get_size__impl__r6l8ci(b) - 1 | 0);
        var tmp$ret$6;
        // Inline function 'kotlin.ULong.div' call
        var tmp$ret$5;
        // Inline function 'kotlin.UInt.toULong' call
        tmp$ret$5 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp5_div)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp0_div = tmp$ret$5;
        tmp$ret$6 = ulongDivide(tmp4_div, tmp0_div);
        tmp$ret$7 = tmp$ret$6;
        qjhatULong = tmp$ret$7;
        var tmp_3 = q;
        var tmp$ret$10;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp$ret$8;
        // Inline function 'kotlin.math.min' call
        var tmp6_min = qjhatULong;
        var tmp7_min = this.baseMask_1;
        tmp$ret$8 = minOf(tmp6_min, tmp7_min);
        var tmp8_toUInt = tmp$ret$8;
        var tmp$ret$9;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp8_toUInt);
        tmp$ret$9 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
        tmp$ret$10 = tmp$ret$9;
        UIntArray__set_impl_7f2zu2(tmp_3, j, tmp$ret$10);
        bjb = this.shl_2g7hbz_k$(b, imul(j, this.wordSizeInBits_1));
        var qjBjb = this.shl_2g7hbz_k$(this.times_wk9fwx_k$(b, UIntArray__get_impl_gp5kza(q, j)), imul(j, this.wordSizeInBits_1));
        if (this.compareTo_bu7gq6_k$(qjBjb, a) > 0) {
          delta = this.minus_ove8ru_k$(qjBjb, a);
          while (this.compareTo_bu7gq6_k$(delta, qjBjb) > 0) {
            var tmp_4 = q;
            var tmp$ret$11;
            // Inline function 'kotlin.UInt.minus' call
            var tmp9_minus = UIntArray__get_impl_gp5kza(q, j);
            tmp$ret$11 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp9_minus) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) | 0);
            UIntArray__set_impl_7f2zu2(tmp_4, j, tmp$ret$11);
            delta = this.minus_ove8ru_k$(delta, bjb);
          }
          a = this.shl_2g7hbz_k$(this.minus_ove8ru_k$(a, this.times_wk9fwx_k$(b, UIntArray__get_impl_gp5kza(q, j))), imul(j, this.wordSizeInBits_1));
        } else {
          a = this.minus_ove8ru_k$(a, qjBjb);
        }
      }
       while (0 <= inductionVariable);
    var denormRemainder = this.denormalize_wmix8o_k$(a, shift);
    return new Pair(new UIntArray(this.removeLeadingZeros_cj3f2k_k$(q)), new UIntArray(denormRemainder));
  };
  BigInteger32Arithmetic.prototype.d1ReciprocalRecursiveWordVersion_mbpm6_k$ = function (a) {
    var n = _UIntArray___get_size__impl__r6l8ci(a) - 1 | 0;
    if (n <= 2) {
      var tmp;
      if (n === 0) {
        tmp = 1;
      } else {
        tmp = n;
      }
      var corrected = tmp;
      var rhoPowered = this.shl_2g7hbz_k$(this.ONE_1, imul(imul(corrected, 2), this.wordSizeInBits_1));
      var x = this.div_mapn8r_k$(rhoPowered, a);
      var r = this.minus_ove8ru_k$(rhoPowered, this.times_pw1zb4_k$(x, a));
      return new Pair(new UIntArray(x), new UIntArray(r));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = (n - 1 | 0) / 2;
    tmp$ret$0 = Math.floor(tmp0_floor);
    var l = numberToInt(tmp$ret$0);
    var h = n - l | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp1_copyOfRange = (_UIntArray___get_size__impl__r6l8ci(a) - h | 0) - 1 | 0;
    var tmp2_copyOfRange = _UIntArray___get_size__impl__r6l8ci(a);
    tmp$ret$1 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(a), tmp1_copyOfRange, tmp2_copyOfRange));
    var ah = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyOfRange' call
    tmp$ret$2 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(a), 0, l));
    var al = tmp$ret$2;
    var tmp0_container = this.d1ReciprocalRecursiveWordVersion_mbpm6_k$(ah);
    var xh = tmp0_container.component1_7eebsc_k$().storage_1;
    var rh = tmp0_container.component2_7eebsb_k$().storage_1;
    var s = this.times_pw1zb4_k$(al, xh);
    var rhRhoL = this.shl_2g7hbz_k$(rh, imul(l, this.wordSizeInBits_1));
    var tmp_0;
    if (this.compareTo_bu7gq6_k$(rhRhoL, s) >= 0) {
      tmp_0 = this.minus_ove8ru_k$(rhRhoL, s);
    } else {
      xh = this.minus_ove8ru_k$(xh, this.ONE_1);
      tmp_0 = this.minus_ove8ru_k$(this.plus_tp68d0_k$(rhRhoL, a), s);
    }
    var t = tmp_0;
    var tm = this.shr_7qrbnd_k$(t, imul(h, this.wordSizeInBits_1));
    var d = this.shr_7qrbnd_k$(this.times_pw1zb4_k$(xh, tm), imul(h, this.wordSizeInBits_1));
    var x_0 = this.plus_tp68d0_k$(this.shl_2g7hbz_k$(xh, imul(l, this.wordSizeInBits_1)), d);
    var r_0 = this.minus_ove8ru_k$(this.shl_2g7hbz_k$(t, imul(l, this.wordSizeInBits_1)), this.times_pw1zb4_k$(a, d));
    if (this.compareTo_bu7gq6_k$(r_0, a) >= 0) {
      x_0 = this.plus_tp68d0_k$(x_0, this.ONE_1);
      r_0 = this.minus_ove8ru_k$(r_0, a);
      if (this.compareTo_bu7gq6_k$(r_0, a) >= 0) {
        x_0 = this.plus_tp68d0_k$(x_0, this.ONE_1);
        r_0 = this.minus_ove8ru_k$(r_0, a);
      }
    }
    return new Pair(new UIntArray(x_0), new UIntArray(r_0));
  };
  BigInteger32Arithmetic.prototype.reciprocalSingleWord_nfdsic_k$ = function (operand) {
    var bitLength = this.bitLength_1kl4ud_k$(operand);
    var requiredPrecision = imul(bitLength, 4);
    if (imul(bitLength, 2) <= 63) {
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shl' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0))).shl_po5ip6_k$(requiredPrecision));
      var base = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.div' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.div' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(operand)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_div = tmp$ret$1;
      tmp$ret$2 = ulongDivide(base, tmp0_div);
      tmp$ret$3 = tmp$ret$2;
      var result = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.uintArrayOf' call
      tmp$ret$4 = _UIntArray___init__impl__ghjpc6(new Int32Array([operand]));
      var tmp = tmp$ret$4;
      var tmp$ret$7;
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.toUInt' call
      var tmp0_toUInt = result;
      var tmp$ret$5;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp0_toUInt);
      tmp$ret$5 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
      tmp$ret$6 = tmp$ret$5;
      var tmp1_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$6]));
      tmp$ret$7 = tmp1_uintArrayOf;
      return checkReciprocal(this, tmp, new Pair(new UIntArray(tmp$ret$7), requiredPrecision));
    } else {
      var base_0 = this.shl_2g7hbz_k$(this.ONE_1, requiredPrecision);
      var result_0 = this.div_qiku12_k$(base_0, operand);
      var tmp$ret$8;
      // Inline function 'kotlin.uintArrayOf' call
      tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([operand]));
      return checkReciprocal(this, tmp$ret$8, new Pair(new UIntArray(result_0), requiredPrecision));
    }
  };
  BigInteger32Arithmetic.prototype.reciprocal_wy3j0p_k$ = function (operand) {
    return this.d1ReciprocalRecursiveWordVersion_mbpm6_k$(operand);
  };
  BigInteger32Arithmetic.prototype.reciprocalDivision_oqyfnd_k$ = function (first, second) {
    var reciprocalExtension = _UIntArray___get_size__impl__r6l8ci(first) - _UIntArray___get_size__impl__r6l8ci(second) | 0;
    var precisionShift = imul(imul(reciprocalExtension, 2), this.wordSizeInBits_1);
    var secondHighPrecision = this.shl_2g7hbz_k$(second, precisionShift);
    var secondReciprocalWithRemainder = this.d1ReciprocalRecursiveWordVersion_mbpm6_k$(secondHighPrecision);
    var secondReciprocal = secondReciprocalWithRemainder.first_1.storage_1;
    var product = this.times_pw1zb4_k$(first, secondReciprocal);
    if (this.compareTo_1u7e51_k$(product, _UInt___init__impl__l7qpdl(0)) === 0) {
      return new Pair(new UIntArray(this.ZERO_1), new UIntArray(first));
    }
    if (_UIntArray___get_size__impl__r6l8ci(product) === 1) {
      var tmp = product;
      var tmp$ret$0;
      // Inline function 'kotlin.UInt.minus' call
      var tmp0_minus = this.baseMaskInt_1;
      tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_minus) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) | 0);
      if (this.compareTo_1u7e51_k$(tmp, tmp$ret$0) >= 0) {
        product = this.plus_tp68d0_k$(product, this.ONE_1);
      }
    } else {
      var importantWord = UIntArray__get_impl_gp5kza(product, _UIntArray___get_size__impl__r6l8ci(product) - _UIntArray___get_size__impl__r6l8ci(second) | 0);
      var tmp$ret$3;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp1_compareTo = this.baseMask_1;
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.compareTo' call
      var tmp$ret$1;
      // Inline function 'kotlin.UInt.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(importantWord)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp0_compareTo = tmp$ret$1;
      tmp$ret$2 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_compareTo), _ULong___get_data__impl__fggpzb(tmp1_compareTo));
      tmp$ret$3 = tmp$ret$2;
      if (tmp$ret$3 >= 0) {
        var tmp$ret$8;
        // Inline function 'kotlin.UIntArray' call
        var tmp2_UIntArray = _UIntArray___get_size__impl__r6l8ci(product);
        var tmp_0 = 0;
        var tmp_1 = tmp2_UIntArray;
        var tmp_2 = new Int32Array(tmp_1);
        while (tmp_0 < tmp_1) {
          var tmp_3 = tmp_0;
          var tmp$ret$7;
          // Inline function 'kotlin.UIntArray.<anonymous>' call
          var tmp$ret$6;
          // Inline function 'kotlin.UInt.toInt' call
          var tmp$ret$5;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.reciprocalDivision.<anonymous>' call
          var tmp0_subject = tmp_3;
          var tmp_4;
          if (tmp0_subject === (_UIntArray___get_size__impl__r6l8ci(product) - 1 | 0)) {
            var tmp$ret$4;
            // Inline function 'kotlin.UInt.plus' call
            var tmp0_plus = UIntArray__get_impl_gp5kza(product, _UIntArray___get_size__impl__r6l8ci(product) - 1 | 0);
            tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_plus) + _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) | 0);
            tmp_4 = tmp$ret$4;
          } else {
            tmp_4 = _UInt___init__impl__l7qpdl(0);
          }
          tmp$ret$5 = tmp_4;
          var tmp0_toInt = tmp$ret$5;
          tmp$ret$6 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
          tmp$ret$7 = tmp$ret$6;
          tmp_2[tmp_3] = tmp$ret$7;
          tmp_0 = tmp_0 + 1 | 0;
        }
        tmp$ret$8 = _UIntArray___init__impl__ghjpc6(tmp_2);
        product = tmp$ret$8;
      }
    }
    var numberOfWords = (_UIntArray___get_size__impl__r6l8ci(product) - imul(_UIntArray___get_size__impl__r6l8ci(secondReciprocal), 2) | 0) + imul(reciprocalExtension, 2) | 0;
    if (numberOfWords === 0) {
      numberOfWords = 1;
    }
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp3_copyOfRange = product;
    var tmp4_copyOfRange = _UIntArray___get_size__impl__r6l8ci(product) - numberOfWords | 0;
    var tmp5_copyOfRange = _UIntArray___get_size__impl__r6l8ci(product);
    tmp$ret$9 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(tmp3_copyOfRange), tmp4_copyOfRange, tmp5_copyOfRange));
    var result = tmp$ret$9;
    var remainder = this.minus_ove8ru_k$(first, this.times_pw1zb4_k$(result, second));
    return new Pair(new UIntArray(result), new UIntArray(remainder));
  };
  BigInteger32Arithmetic.prototype.sqrt_77bb1t_k$ = function (operand) {
    return reqursiveSqrt(this, operand);
  };
  BigInteger32Arithmetic.prototype.basecaseSqrt_5aqb3k_k$ = function (operand) {
    var sqrt = this.sqrtInt_iobktu_k$(operand);
    var remainder = this.minus_ove8ru_k$(operand, this.times_pw1zb4_k$(sqrt, sqrt));
    return new Pair(new UIntArray(sqrt), new UIntArray(remainder));
  };
  BigInteger32Arithmetic.prototype.sqrtInt_iobktu_k$ = function (operand) {
    var u = operand;
    var s;
    var tmp;
    do {
      s = u;
      tmp = this.plus_tp68d0_k$(s, this.basicDivide2_plcxxx_k$(operand, s).first_1.storage_1);
      u = this.shr_7qrbnd_k$(tmp, 1);
    }
     while (this.compareTo_bu7gq6_k$(u, s) < 0);
    return s;
  };
  BigInteger32Arithmetic.prototype.gcd_j9z4jw_k$ = function (first, second) {
    var tmp;
    if (_UIntArray___get_size__impl__r6l8ci(first) > 150 ? true : _UIntArray___get_size__impl__r6l8ci(second) > 150) {
      tmp = euclideanGcd(this, first, second);
    } else {
      tmp = binaryGcd(this, first, second);
    }
    return tmp;
  };
  BigInteger32Arithmetic.prototype.parseForBase_vokz6h_k$ = function (number, base) {
    var parsed = this.ZERO_1;
    // Inline function 'kotlin.text.forEach' call
    var indexedObject = number;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.parseForBase.<anonymous>' call
      var tmp = BigInteger32Arithmetic_getInstance();
      var tmp_0 = BigInteger32Arithmetic_getInstance();
      var tmp_1 = parsed;
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(base);
      var tmp_2 = tmp_0.times_wk9fwx_k$(tmp_1, tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt = toDigit(element, base);
      tmp$ret$1 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
      parsed = tmp.plus_18bngj_k$(tmp_2, tmp$ret$1);
    }
    return parsed;
  };
  BigInteger32Arithmetic.prototype.toString_k2asqk_k$ = function (operand, base) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = _UIntArray___get_storage__impl__92a0v0(operand);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp$ret$2 = _UIntArray___init__impl__ghjpc6(tmp$ret$1);
    var copy = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$3;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$3 = _UInt___init__impl__l7qpdl(base);
    var tmp0_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$3]));
    tmp$ret$4 = tmp0_uintArrayOf;
    var baseArray = tmp$ret$4;
    var stringBuilder = StringBuilder_init_$Create$();
    while (!equals(copy, this.ZERO_1)) {
      var divremResult = this.divrem_bodyxj_k$(copy, baseArray);
      if (UIntArray__isEmpty_impl_vd8j4n(divremResult.second_1.storage_1)) {
        stringBuilder.append_t8pm91_k$(0);
      } else {
        stringBuilder.append_ssq29y_k$(toString_0(UIntArray__get_impl_gp5kza(divremResult.second_1.storage_1, 0), base));
      }
      copy = divremResult.first_1.storage_1;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.text.reversed' call
    var tmp1_reversed = stringBuilder.toString();
    tmp$ret$5 = toString(reversed_0(isCharSequence(tmp1_reversed) ? tmp1_reversed : THROW_CCE()));
    return tmp$ret$5;
  };
  BigInteger32Arithmetic.prototype.numberOfDecimalDigits_y2qtdm_k$ = function (operand) {
    var bitLenght = this.bitLength_ti7g0u_k$(operand);
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = (bitLenght - 1 | 0) * Companion_getInstance_6().LOG_10_OF_2__1;
    tmp$ret$0 = Math.ceil(tmp0_ceil);
    var minDigit = tmp$ret$0;
    var tmp = this.div_mapn8r_k$(operand, this.pow_jek5yp_k$(this.TEN_1, numberToLong(minDigit)));
    var counter = new Long(0, 0);
    while (!(this.compare_u59uit_k$(tmp, this.ZERO_1) === 0)) {
      tmp = this.div_mapn8r_k$(tmp, this.TEN_1);
      var tmp0 = counter;
      counter = tmp0.inc_28ke_k$();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp1_plus = counter;
    var tmp2_plus = numberToInt(minDigit);
    tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
    return tmp$ret$1;
  };
  BigInteger32Arithmetic.prototype.and_tlzv1f_k$ = function (operand, mask) {
    var tmp$ret$4;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.and.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _UIntArray___get_size__impl__r6l8ci(mask)) {
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.and' call
        var tmp0_and = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var tmp1_and = UIntArray__get_impl_gp5kza(mask, tmp_2);
        tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(tmp1_and));
        tmp_3 = tmp$ret$0;
      } else {
        tmp_3 = _UInt___init__impl__l7qpdl(0);
      }
      tmp$ret$1 = tmp_3;
      var tmp0_toInt = tmp$ret$1;
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$3 = tmp$ret$2;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$4);
  };
  BigInteger32Arithmetic.prototype.or_sasgpd_k$ = function (operand, mask) {
    var tmp$ret$4;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.or.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _UIntArray___get_size__impl__r6l8ci(mask)) {
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.or' call
        var tmp0_or = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var tmp1_or = UIntArray__get_impl_gp5kza(mask, tmp_2);
        tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_or) | _UInt___get_data__impl__f0vqqw(tmp1_or));
        tmp_3 = tmp$ret$0;
      } else {
        tmp_3 = UIntArray__get_impl_gp5kza(operand, tmp_2);
      }
      tmp$ret$1 = tmp_3;
      var tmp0_toInt = tmp$ret$1;
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$3 = tmp$ret$2;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$4);
  };
  BigInteger32Arithmetic.prototype.xor_whzb4p_k$ = function (operand, mask) {
    var tmp$ret$5;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$4;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$2;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.xor.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _UIntArray___get_size__impl__r6l8ci(mask)) {
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.xor' call
        var tmp0_xor = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var tmp1_xor = UIntArray__get_impl_gp5kza(mask, tmp_2);
        tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_xor) ^ _UInt___get_data__impl__f0vqqw(tmp1_xor));
        tmp_3 = tmp$ret$0;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.UInt.xor' call
        var tmp2_xor = UIntArray__get_impl_gp5kza(operand, tmp_2);
        tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_xor) ^ _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0)));
        tmp_3 = tmp$ret$1;
      }
      tmp$ret$2 = tmp_3;
      var tmp0_toInt = tmp$ret$2;
      tmp$ret$3 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$4 = tmp$ret$3;
      tmp_1[tmp_2] = tmp$ret$4;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$5 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$5);
  };
  BigInteger32Arithmetic.prototype.not_13vx62_k$ = function (operand) {
    var tmp$ret$4;
    // Inline function 'kotlin.UIntArray' call
    var tmp0_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp = 0;
    var tmp_0 = tmp0_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.not.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.UInt.inv' call
      var tmp0_inv = UIntArray__get_impl_gp5kza(operand, tmp_2);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(tmp0_inv));
      tmp$ret$1 = tmp$ret$0;
      var tmp0_toInt = tmp$ret$1;
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$3 = tmp$ret$2;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_cj3f2k_k$(tmp$ret$4);
  };
  BigInteger32Arithmetic.prototype.shl_2g7hbz_k$ = function (_this__u8e3s4, places) {
    return this.shiftLeft_sb719h_k$(_this__u8e3s4, places);
  };
  BigInteger32Arithmetic.prototype.shr_7qrbnd_k$ = function (_this__u8e3s4, places) {
    return this.shiftRight_9rug46_k$(_this__u8e3s4, places);
  };
  BigInteger32Arithmetic.prototype.bitAt_t4gc2t_k$ = function (operand, position) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = position.div_9s1fi3_k$(new Long(63, 0));
    if (tmp$ret$0.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$1 = position.div_9s1fi3_k$(new Long(63, 0));
    var wordPosition = tmp$ret$1;
    if (wordPosition.compareTo_n4fqi2_k$(toLong(_UIntArray___get_size__impl__r6l8ci(operand))) >= 0) {
      return false;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.Long.rem' call
    tmp$ret$2 = position.rem_9rbcjo_k$(new Long(63, 0));
    var bitPosition = tmp$ret$2;
    var word = UIntArray__get_impl_gp5kza(operand, wordPosition.toInt_1tsl84_k$());
    var tmp$ret$4;
    // Inline function 'kotlin.UInt.and' call
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.shl' call
    var tmp0_shl = bitPosition.toInt_1tsl84_k$();
    tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) << tmp0_shl);
    var tmp1_and = tmp$ret$3;
    tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(word) & _UInt___get_data__impl__f0vqqw(tmp1_and));
    return tmp$ret$4 === _UInt___init__impl__l7qpdl(1);
  };
  BigInteger32Arithmetic.prototype.setBitAt_7g2nvb_k$ = function (operand, position, bit) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = position.div_9s1fi3_k$(new Long(63, 0));
    if (tmp$ret$0.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$1 = position.div_9s1fi3_k$(new Long(63, 0));
    var wordPosition = tmp$ret$1;
    if (wordPosition.compareTo_n4fqi2_k$(toLong(_UIntArray___get_size__impl__r6l8ci(operand))) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('Invalid position, addressed word ' + toString(wordPosition) + ' larger than number of words ' + _UIntArray___get_size__impl__r6l8ci(operand));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.Long.rem' call
    tmp$ret$2 = position.rem_9rbcjo_k$(new Long(63, 0));
    var bitPosition = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.shl' call
    var tmp0_shl = bitPosition.toInt_1tsl84_k$();
    tmp$ret$3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1)) << tmp0_shl);
    var setMask = tmp$ret$3;
    var tmp$ret$9;
    // Inline function 'kotlin.UIntArray' call
    var tmp1_UIntArray = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp = 0;
    var tmp_0 = tmp1_UIntArray;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$8;
      // Inline function 'kotlin.UIntArray.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.UInt.toInt' call
      var tmp$ret$6;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.setBitAt.<anonymous>' call
      var tmp_3;
      if (tmp_2 === wordPosition.toInt_1tsl84_k$()) {
        var tmp_4;
        if (bit) {
          var tmp$ret$4;
          // Inline function 'kotlin.UInt.or' call
          var tmp0_or = UIntArray__get_impl_gp5kza(operand, tmp_2);
          tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_or) | _UInt___get_data__impl__f0vqqw(setMask));
          tmp_4 = tmp$ret$4;
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.UInt.xor' call
          var tmp1_xor = UIntArray__get_impl_gp5kza(operand, tmp_2);
          tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_xor) ^ _UInt___get_data__impl__f0vqqw(setMask));
          tmp_4 = tmp$ret$5;
        }
        tmp_3 = tmp_4;
      } else {
        tmp_3 = UIntArray__get_impl_gp5kza(operand, tmp_2);
      }
      tmp$ret$6 = tmp_3;
      var tmp0_toInt = tmp$ret$6;
      tmp$ret$7 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
      tmp$ret$8 = tmp$ret$7;
      tmp_1[tmp_2] = tmp$ret$8;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$9 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return tmp$ret$9;
  };
  BigInteger32Arithmetic.prototype.plus_tp68d0_k$ = function (_this__u8e3s4, other) {
    return this.add_86n30z_k$(_this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.minus_ove8ru_k$ = function (_this__u8e3s4, other) {
    return this.subtract_hh11hc_k$(_this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.times_pw1zb4_k$ = function (_this__u8e3s4, other) {
    return this.multiply_of8lyo_k$(_this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.plus_18bngj_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.add_86n30z_k$(_this__u8e3s4, tmp$ret$0);
  };
  BigInteger32Arithmetic.prototype.minus_ltiz4p_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.subtract_hh11hc_k$(_this__u8e3s4, tmp$ret$0);
  };
  BigInteger32Arithmetic.prototype.times_wk9fwx_k$ = function (_this__u8e3s4, other) {
    return this.multiply_wo7wfz_k$(_this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.div_qiku12_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.divide_llsyav_k$(_this__u8e3s4, tmp$ret$0).first_1.storage_1;
  };
  BigInteger32Arithmetic.prototype.rem_yj2anx_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.divide_llsyav_k$(_this__u8e3s4, tmp$ret$0).second_1.storage_1;
  };
  BigInteger32Arithmetic.prototype.div_mapn8r_k$ = function (_this__u8e3s4, other) {
    return this.divide_llsyav_k$(_this__u8e3s4, other).first_1.storage_1;
  };
  BigInteger32Arithmetic.prototype.rem_e8q11w_k$ = function (_this__u8e3s4, other) {
    return this.divide_llsyav_k$(_this__u8e3s4, other).second_1.storage_1;
  };
  BigInteger32Arithmetic.prototype.divrem_bodyxj_k$ = function (_this__u8e3s4, other) {
    return this.divide_llsyav_k$(_this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.compareTo_bu7gq6_k$ = function (_this__u8e3s4, other) {
    return this.compare_u59uit_k$(_this__u8e3s4, other);
  };
  BigInteger32Arithmetic.prototype.compareTo_1u7e51_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.compare_u59uit_k$(_this__u8e3s4, tmp$ret$0);
  };
  BigInteger32Arithmetic.prototype.toUnsignedIntArrayCodeFormat_ce780j_k$ = function (array) {
    var tmp = new UIntArray(array);
    return joinToString$default(tmp, ', ', 'uintArrayOf(', ')', 0, null, BigInteger32Arithmetic$toUnsignedIntArrayCodeFormat$lambda, 24, null);
  };
  BigInteger32Arithmetic.prototype.fromULong_89rsag_k$ = function (uLong) {
    var tmp$ret$6;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.toUInt' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shr' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(uLong).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, -1)))));
    var tmp0_shr = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(32));
    var tmp1_toUInt = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp1_toUInt);
    tmp$ret$2 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.ULong.toUInt' call
    var tmp$ret$4;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(uLong);
    tmp$ret$4 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
    tmp$ret$5 = tmp$ret$4;
    var tmp2_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp, tmp$ret$5]));
    tmp$ret$6 = tmp2_uintArrayOf;
    return tmp$ret$6;
  };
  BigInteger32Arithmetic.prototype.fromUInt_kjev3s_k$ = function (uInt) {
    var tmp$ret$0;
    // Inline function 'kotlin.uintArrayOf' call
    tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([uInt]));
    return tmp$ret$0;
  };
  BigInteger32Arithmetic.prototype.fromUShort_8ql382_k$ = function (uShort) {
    var tmp$ret$1;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_UShort___get_data__impl__g0245(uShort) & 65535);
    var tmp0_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$0]));
    tmp$ret$1 = tmp0_uintArrayOf;
    return tmp$ret$1;
  };
  BigInteger32Arithmetic.prototype.fromUByte_qf4faw_k$ = function (uByte) {
    var tmp$ret$1;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(uByte) & 255);
    var tmp0_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$0]));
    tmp$ret$1 = tmp0_uintArrayOf;
    return tmp$ret$1;
  };
  BigInteger32Arithmetic.prototype.fromLong_73lgqs_k$ = function (long) {
    var tmp$ret$7;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.toUInt' call
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shr' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(long);
    var tmp0_and = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, -1)))));
    var tmp1_shr = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(32));
    var tmp2_toUInt = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp2_toUInt);
    tmp$ret$3 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
    tmp$ret$4 = tmp$ret$3;
    var tmp = tmp$ret$4;
    var tmp$ret$6;
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$5;
    // Inline function 'kotlin.math.absoluteValue' call
    tmp$ret$5 = abs(long);
    var tmp3_toUInt = tmp$ret$5;
    tmp$ret$6 = _UInt___init__impl__l7qpdl(tmp3_toUInt.toInt_1tsl84_k$());
    var tmp4_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp, tmp$ret$6]));
    tmp$ret$7 = tmp4_uintArrayOf;
    return tmp$ret$7;
  };
  BigInteger32Arithmetic.prototype.fromInt_mgseq0_k$ = function (int) {
    var tmp$ret$2;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    tmp$ret$0 = abs_0(int);
    var tmp0_toUInt = tmp$ret$0;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    var tmp1_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
    tmp$ret$2 = tmp1_uintArrayOf;
    return tmp$ret$2;
  };
  BigInteger32Arithmetic.prototype.fromShort_nv6ns8_k$ = function (short) {
    var tmp$ret$2;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = short;
    tmp$ret$0 = abs_0(tmp0__get_absoluteValue__nukmtt);
    var tmp1_toUInt = tmp$ret$0;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(tmp1_toUInt);
    var tmp2_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
    tmp$ret$2 = tmp2_uintArrayOf;
    return tmp$ret$2;
  };
  BigInteger32Arithmetic.prototype.fromByte_cdr8x8_k$ = function (byte) {
    var tmp$ret$2;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = byte;
    tmp$ret$0 = abs_0(tmp0__get_absoluteValue__nukmtt);
    var tmp1_toUInt = tmp$ret$0;
    tmp$ret$1 = _UInt___init__impl__l7qpdl(tmp1_toUInt);
    var tmp2_uintArrayOf = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
    tmp$ret$2 = tmp2_uintArrayOf;
    return tmp$ret$2;
  };
  BigInteger32Arithmetic.prototype.toULongExact_xpi7aa_k$ = function (operand) {
    if (_UIntArray___get_size__impl__r6l8ci(operand) > 2) {
      throw ArithmeticException_init_$Create$('Exact conversion not possible, operand size ' + _UIntArray___get_size__impl__r6l8ci(operand));
    }
    var result = _ULong___init__impl__c78o9k(new Long(0, 0));
    var inductionVariable = _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.ULong.plus' call
        var tmp3_plus = result;
        var tmp$ret$1;
        // Inline function 'kotlin.ULong.shl' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toULong' call
        var tmp0_toULong = UIntArray__get_impl_gp5kza(operand, i);
        tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp0_toULong)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp1_shl = tmp$ret$0;
        var tmp2_shl = imul(i, this.wordSizeInBits_1);
        tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).shl_po5ip6_k$(tmp2_shl));
        var tmp4_plus = tmp$ret$1;
        tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp4_plus)));
        result = tmp$ret$2;
      }
       while (0 <= inductionVariable);
    return result;
  };
  BigInteger32Arithmetic.prototype.toUIntArrayRepresentedAsTypedUByteArray_sumltp_k$ = function (operand, endianness) {
    var tmp$ret$36;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_subject = endianness;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        var index = 0;
        var tmp$ret$17;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp0_flatMap = reversed_1(operand);
        var tmp$ret$16;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_flatMap.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$().data_1;
          var tmp$ret$15;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsTypedUByteArray.<anonymous>' call
          var tmp_0;
          if (index === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
            tmp_0 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_4e4qx_k$(element) / 8 | 0;
          } else {
            tmp_0 = 0;
          }
          var leadingZeroBytes = tmp_0;
          var tmp$ret$3;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$1;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$0;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 24 | 0);
          var tmp0_and = tmp$ret$0;
          tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp1_toUByte = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte = _UInt___get_data__impl__f0vqqw(tmp1_toUByte);
          tmp$ret$2 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte));
          tmp$ret$3 = tmp$ret$2;
          var tmp_1 = new UByte(tmp$ret$3);
          var tmp$ret$7;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$5;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$4;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 16 | 0);
          var tmp2_and = tmp$ret$4;
          tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp3_toUByte = tmp$ret$5;
          var tmp$ret$6;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_0 = _UInt___get_data__impl__f0vqqw(tmp3_toUByte);
          tmp$ret$6 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_0));
          tmp$ret$7 = tmp$ret$6;
          var tmp_2 = new UByte(tmp$ret$7);
          var tmp$ret$11;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$9;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$8;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 8 | 0);
          var tmp4_and = tmp$ret$8;
          tmp$ret$9 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp5_toUByte = tmp$ret$9;
          var tmp$ret$10;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_1 = _UInt___get_data__impl__f0vqqw(tmp5_toUByte);
          tmp$ret$10 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_1));
          tmp$ret$11 = tmp$ret$10;
          var tmp_3 = new UByte(tmp$ret$11);
          var tmp$ret$14;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$12;
          // Inline function 'kotlin.UInt.and' call
          tmp$ret$12 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp6_toUByte = tmp$ret$12;
          var tmp$ret$13;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_2 = _UInt___get_data__impl__f0vqqw(tmp6_toUByte);
          tmp$ret$13 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_2));
          tmp$ret$14 = tmp$ret$13;
          var converted = listOf([tmp_1, tmp_2, tmp_3, new UByte(tmp$ret$14)]);
          var tmp0_0 = index;
          index = tmp0_0 + 1 | 0;
          tmp$ret$15 = drop(converted, leadingZeroBytes);
          var list = tmp$ret$15;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$16 = tmp0_flatMapTo;
        tmp$ret$17 = tmp$ret$16;

        var collected = tmp$ret$17;
        tmp = collected;
        break;
      case 1:
        var index_0 = 0;
        var tmp$ret$35;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp1_flatMap = reversed_1(operand);
        var tmp$ret$34;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = tmp1_flatMap.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
          var tmp$ret$33;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsTypedUByteArray.<anonymous>' call
          var tmp_4;
          if (index_0 === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
            tmp_4 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_4e4qx_k$(element_0) / 8 | 0;
          } else {
            tmp_4 = 0;
          }
          var leadingZeroBytes_0 = tmp_4;
          var tmp$ret$20;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$18;
          // Inline function 'kotlin.UInt.and' call
          tmp$ret$18 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp0_toUByte_3 = tmp$ret$18;
          var tmp$ret$19;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_4 = _UInt___get_data__impl__f0vqqw(tmp0_toUByte_3);
          tmp$ret$19 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_4));
          tmp$ret$20 = tmp$ret$19;
          var tmp_5 = new UByte(tmp$ret$20);
          var tmp$ret$24;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$22;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$21;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$21 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 8 | 0);
          var tmp1_and = tmp$ret$21;
          tmp$ret$22 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp2_toUByte = tmp$ret$22;
          var tmp$ret$23;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_5 = _UInt___get_data__impl__f0vqqw(tmp2_toUByte);
          tmp$ret$23 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_5));
          tmp$ret$24 = tmp$ret$23;
          var tmp_6 = new UByte(tmp$ret$24);
          var tmp$ret$28;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$26;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$25;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$25 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 16 | 0);
          var tmp3_and = tmp$ret$25;
          tmp$ret$26 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp3_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp4_toUByte = tmp$ret$26;
          var tmp$ret$27;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_6 = _UInt___get_data__impl__f0vqqw(tmp4_toUByte);
          tmp$ret$27 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_6));
          tmp$ret$28 = tmp$ret$27;
          var tmp_7 = new UByte(tmp$ret$28);
          var tmp$ret$32;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$30;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$29;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$29 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 24 | 0);
          var tmp5_and = tmp$ret$29;
          tmp$ret$30 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp6_toUByte_0 = tmp$ret$30;
          var tmp$ret$31;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_7 = _UInt___get_data__impl__f0vqqw(tmp6_toUByte_0);
          tmp$ret$31 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_7));
          tmp$ret$32 = tmp$ret$31;
          var converted_0 = listOf([tmp_5, tmp_6, tmp_7, new UByte(tmp$ret$32)]);
          var tmp0_1 = index_0;
          index_0 = tmp0_1 + 1 | 0;
          tmp$ret$33 = dropLast(converted_0, leadingZeroBytes_0);
          var list_0 = tmp$ret$33;
          addAll(tmp0_flatMapTo_0, list_0);
        }
        tmp$ret$34 = tmp0_flatMapTo_0;
        tmp$ret$35 = tmp$ret$34;

        var collected_0 = tmp$ret$35;
        tmp = collected_0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp2_toTypedArray = tmp;
    tmp$ret$36 = copyToArray(tmp2_toTypedArray);
    var corrected = tmp$ret$36;
    return dropLeadingZeros_1(corrected, this);
  };
  BigInteger32Arithmetic.prototype.toUIntArrayRepresentedAsUByteArray_bqtdno_k$ = function (operand, endianness) {
    var tmp0_subject = endianness;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        var index = 0;
        var tmp$ret$17;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp0_flatMap = reversed_1(operand);
        var tmp$ret$16;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_flatMap.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$().data_1;
          var tmp$ret$15;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsUByteArray.<anonymous>' call
          var tmp_0;
          if (index === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
            tmp_0 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_4e4qx_k$(element) / 8 | 0;
          } else {
            tmp_0 = 0;
          }
          var leadingZeroBytes = tmp_0;
          var tmp$ret$3;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$1;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$0;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 24 | 0);
          var tmp0_and = tmp$ret$0;
          tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp1_toUByte = tmp$ret$1;
          var tmp$ret$2;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte = _UInt___get_data__impl__f0vqqw(tmp1_toUByte);
          tmp$ret$2 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte));
          tmp$ret$3 = tmp$ret$2;
          var tmp_1 = new UByte(tmp$ret$3);
          var tmp$ret$7;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$5;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$4;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 16 | 0);
          var tmp2_and = tmp$ret$4;
          tmp$ret$5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp3_toUByte = tmp$ret$5;
          var tmp$ret$6;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_0 = _UInt___get_data__impl__f0vqqw(tmp3_toUByte);
          tmp$ret$6 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_0));
          tmp$ret$7 = tmp$ret$6;
          var tmp_2 = new UByte(tmp$ret$7);
          var tmp$ret$11;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$9;
          // Inline function 'kotlin.UInt.and' call
          var tmp$ret$8;
          // Inline function 'kotlin.UInt.shr' call
          tmp$ret$8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 8 | 0);
          var tmp4_and = tmp$ret$8;
          tmp$ret$9 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp5_toUByte = tmp$ret$9;
          var tmp$ret$10;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_1 = _UInt___get_data__impl__f0vqqw(tmp5_toUByte);
          tmp$ret$10 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_1));
          tmp$ret$11 = tmp$ret$10;
          var tmp_3 = new UByte(tmp$ret$11);
          var tmp$ret$14;
          // Inline function 'kotlin.UInt.toUByte' call
          var tmp$ret$12;
          // Inline function 'kotlin.UInt.and' call
          tmp$ret$12 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
          var tmp6_toUByte = tmp$ret$12;
          var tmp$ret$13;
          // Inline function 'kotlin.toUByte' call
          var tmp0_toUByte_2 = _UInt___get_data__impl__f0vqqw(tmp6_toUByte);
          tmp$ret$13 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_2));
          tmp$ret$14 = tmp$ret$13;
          var converted = listOf([tmp_1, tmp_2, tmp_3, new UByte(tmp$ret$14)]);
          var tmp0_0 = index;
          index = tmp0_0 + 1 | 0;
          tmp$ret$15 = drop(converted, leadingZeroBytes);
          var list = tmp$ret$15;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$16 = tmp0_flatMapTo;
        tmp$ret$17 = tmp$ret$16;

        var collected = tmp$ret$17;
        tmp = collected;
        break;
      case 1:
        var tmp$ret$38;
        // Inline function 'kotlin.collections.flatMap' call
        var tmp$ret$37;
        // Inline function 'kotlin.collections.flatMapTo' call
        var tmp0_flatMapTo_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = UIntArray__iterator_impl_tkdv7k(operand);
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
          var tmp$ret$36;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsUByteArray.<anonymous>' call
          var index_0 = 0;
          var tmp$ret$35;
          // Inline function 'kotlin.collections.flatMap' call
          var tmp0_flatMap_0 = reversed_1(operand);
          var tmp$ret$34;
          // Inline function 'kotlin.collections.flatMapTo' call
          var tmp0_flatMapTo_1 = ArrayList_init_$Create$();
          var tmp0_iterator_1 = tmp0_flatMap_0.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$().data_1;
            var tmp$ret$33;
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsUByteArray.<anonymous>.<anonymous>' call
            var tmp_4;
            if (index_0 === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
              tmp_4 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_4e4qx_k$(element_1) / 8 | 0;
            } else {
              tmp_4 = 0;
            }
            var leadingZeroBytes_0 = tmp_4;
            var tmp$ret$20;
            // Inline function 'kotlin.UInt.toUByte' call
            var tmp$ret$18;
            // Inline function 'kotlin.UInt.and' call
            tmp$ret$18 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
            var tmp0_toUByte_3 = tmp$ret$18;
            var tmp$ret$19;
            // Inline function 'kotlin.toUByte' call
            var tmp0_toUByte_4 = _UInt___get_data__impl__f0vqqw(tmp0_toUByte_3);
            tmp$ret$19 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_4));
            tmp$ret$20 = tmp$ret$19;
            var tmp_5 = new UByte(tmp$ret$20);
            var tmp$ret$24;
            // Inline function 'kotlin.UInt.toUByte' call
            var tmp$ret$22;
            // Inline function 'kotlin.UInt.and' call
            var tmp$ret$21;
            // Inline function 'kotlin.UInt.shr' call
            tmp$ret$21 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) >>> 8 | 0);
            var tmp1_and = tmp$ret$21;
            tmp$ret$22 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
            var tmp2_toUByte = tmp$ret$22;
            var tmp$ret$23;
            // Inline function 'kotlin.toUByte' call
            var tmp0_toUByte_5 = _UInt___get_data__impl__f0vqqw(tmp2_toUByte);
            tmp$ret$23 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_5));
            tmp$ret$24 = tmp$ret$23;
            var tmp_6 = new UByte(tmp$ret$24);
            var tmp$ret$28;
            // Inline function 'kotlin.UInt.toUByte' call
            var tmp$ret$26;
            // Inline function 'kotlin.UInt.and' call
            var tmp$ret$25;
            // Inline function 'kotlin.UInt.shr' call
            tmp$ret$25 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) >>> 16 | 0);
            var tmp3_and = tmp$ret$25;
            tmp$ret$26 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp3_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
            var tmp4_toUByte = tmp$ret$26;
            var tmp$ret$27;
            // Inline function 'kotlin.toUByte' call
            var tmp0_toUByte_6 = _UInt___get_data__impl__f0vqqw(tmp4_toUByte);
            tmp$ret$27 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_6));
            tmp$ret$28 = tmp$ret$27;
            var tmp_7 = new UByte(tmp$ret$28);
            var tmp$ret$32;
            // Inline function 'kotlin.UInt.toUByte' call
            var tmp$ret$30;
            // Inline function 'kotlin.UInt.and' call
            var tmp$ret$29;
            // Inline function 'kotlin.UInt.shr' call
            tmp$ret$29 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) >>> 24 | 0);
            var tmp5_and = tmp$ret$29;
            tmp$ret$30 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_and) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(255)));
            var tmp6_toUByte_0 = tmp$ret$30;
            var tmp$ret$31;
            // Inline function 'kotlin.toUByte' call
            var tmp0_toUByte_7 = _UInt___get_data__impl__f0vqqw(tmp6_toUByte_0);
            tmp$ret$31 = _UByte___init__impl__g9hnc4(toByte(tmp0_toUByte_7));
            tmp$ret$32 = tmp$ret$31;
            var converted_0 = listOf([tmp_5, tmp_6, tmp_7, new UByte(tmp$ret$32)]);
            var tmp0_1 = index_0;
            index_0 = tmp0_1 + 1 | 0;
            tmp$ret$33 = dropLast(converted_0, leadingZeroBytes_0);
            var list_0 = tmp$ret$33;
            addAll(tmp0_flatMapTo_1, list_0);
          }
          tmp$ret$34 = tmp0_flatMapTo_1;
          tmp$ret$35 = tmp$ret$34;
          var collected_0 = tmp$ret$35;
          tmp$ret$36 = collected_0;
          var list_1 = tmp$ret$36;
          addAll(tmp0_flatMapTo_0, list_1);
        }
        tmp$ret$37 = tmp0_flatMapTo_0;
        tmp$ret$38 = tmp$ret$37;

        var collected_1 = tmp$ret$38;
        tmp = new UByteArray(toUByteArray(collected_1));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var corrected = tmp;
    return toUByteArray(corrected);
  };
  BigInteger32Arithmetic.prototype.fromUByteArray_bw6700_k$ = function (source) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented yet');
  };
  BigInteger32Arithmetic.prototype.fromByteArray_dambr8_k$ = function (source) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented yet');
  };
  BigInteger32Arithmetic.prototype.toUByteArray_ugyvgf_k$ = function (operand) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented yet');
  };
  BigInteger32Arithmetic.prototype.toByteArray_mc99wl_k$ = function (operand) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented yet');
  };
  BigInteger32Arithmetic.$metadata$ = objectMeta('BigInteger32Arithmetic', [BigInteger32ArithmeticInterface]);
  var BigInteger32Arithmetic_instance;
  function BigInteger32Arithmetic_getInstance() {
    if (BigInteger32Arithmetic_instance == null)
      new BigInteger32Arithmetic();
    return BigInteger32Arithmetic_instance;
  }
  function possibleAdditionOverflow($this, largerLength, smallerLength, largerData, smallerData, largerStart, smallerStart) {
    var firstMostSignificant = ULongArray__get_impl_pr71q9(largerData, largerStart - 1 | 0);
    var secondMostSignificant = ULongArray__get_impl_pr71q9(smallerData, smallerStart - 1 | 0);
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = firstMostSignificant;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, 1610612736)))));
    if (!equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.and' call
      var tmp1_and = secondMostSignificant;
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, 1610612736)))));
      tmp = !equals(tmp$ret$1, _ULong___init__impl__c78o9k(new Long(0, 0)));
    }
    var possibleOverflow = tmp;
    return possibleOverflow;
  }
  function multiplyWithCorrectedSize($this, first, second, firstCorrectedSize, secondCorrectedSize) {
    if (isZero(first, $this) ? true : isZero(second, $this)) {
      return $this.ZERO_1;
    }
    if ((firstCorrectedSize >= 120 ? true : secondCorrectedSize >= 120) ? firstCorrectedSize <= 15000 ? true : secondCorrectedSize < 15000 : false) {
      return karatsubaMultiplyWithCorrectedSizes($this, first, second, firstCorrectedSize, secondCorrectedSize);
    }
    if (firstCorrectedSize >= 15000 ? secondCorrectedSize >= 15000 : false) {
      return $this.toomCook3Multiply_jbscej_k$(first, second);
    }
    return basecaseMultiplyWithCorrectedSize($this, first, second, firstCorrectedSize, secondCorrectedSize);
  }
  function basecaseMultiplyWithCorrectedSize($this, first, second, firstCorrectedSizeStart, secondCorrectedSizeStart) {
    var resultArray = $this.ZERO_1;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = ULongArray__iterator_impl_cq4d2h(second);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.basecaseMultiplyWithCorrectedSize.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      if (tmp0__anonymous__q1qw7t > secondCorrectedSizeStart) {
      } else {
        resultArray = BigInteger63Arithmetic_getInstance().plus_4jwzw9_k$(resultArray, BigInteger63Arithmetic_getInstance().shl_2fq1k7_k$(BigInteger63Arithmetic_getInstance().baseMultiply_mf6sff_k$(first, item), imul(tmp0__anonymous__q1qw7t, BigInteger63Arithmetic_getInstance().basePowerOfTwo_1)));
      }
    }
    return resultArray;
  }
  function karatsubaMultiplyWithCorrectedSizes($this, firstUnsigned, secondUnsigned, firstCorrectedSize, secondCorrectedSize) {
    var first = new SignedULongArray(firstUnsigned, true);
    var second = new SignedULongArray(secondUnsigned, true);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    tmp$ret$0 = Math.max(firstCorrectedSize, secondCorrectedSize);
    var halfLength = (tmp$ret$0 + 1 | 0) / 2 | 0;
    var mask = $this.minus_t9lm3m_k$($this.shl_2fq1k7_k$($this.ONE_1, imul(halfLength, $this.wordSizeInBits_1)), _ULong___init__impl__c78o9k(new Long(1, 0)));
    var firstLower = $this.and_ikmwah_k$(first, mask);
    var firstHigher = $this.shr_qnnzs_k$(first, imul(halfLength, $this.wordSizeInBits_1));
    var secondLower = $this.and_ikmwah_k$(second, mask);
    var secondHigher = $this.shr_qnnzs_k$(second, imul(halfLength, $this.wordSizeInBits_1));
    var higherProduct = $this.times_euzddc_k$(firstHigher, secondHigher);
    var lowerProduct = $this.times_euzddc_k$(firstLower, secondLower);
    var middleProduct = $this.times_euzddc_k$($this.plus_u2j0gs_k$(firstHigher, firstLower), $this.plus_u2j0gs_k$(secondHigher, secondLower));
    var result = $this.plus_u2j0gs_k$($this.plus_u2j0gs_k$($this.shl_u55if2_k$(higherProduct, imul(imul(2, $this.wordSizeInBits_1), halfLength)), $this.shl_u55if2_k$($this.minus_j3qgna_k$($this.minus_j3qgna_k$(middleProduct, higherProduct), lowerProduct), imul($this.wordSizeInBits_1, halfLength))), lowerProduct);
    return result.unsignedValue_1;
  }
  function unbalancedReciprocal($this, a, diff) {
    var n = (_ULongArray___get_size__impl__ju6dtr(a) - 1 | 0) - diff | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp0_copyOfRange = n + 1 | 0;
    var tmp1_copyOfRange = _ULongArray___get_size__impl__ju6dtr(a);
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), tmp0_copyOfRange, tmp1_copyOfRange));
    var a0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOfRange' call
    tmp$ret$1 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), 0, n));
    var a1 = tmp$ret$1;
    var tmp0_container = $this.d1ReciprocalRecursiveWordVersion_tlzxfd_k$(a0);
    var x = tmp0_container.component1_7eebsc_k$().storage_1;
    var r = tmp0_container.component2_7eebsb_k$().storage_1;
    if (equals(x, $this.shl_2fq1k7_k$($this.ONE_1, imul(n, 63)))) {
      if ($this.compareTo_55med6_k$(a1, $this.ZERO_1) === 0) {
        r = $this.ZERO_1;
      } else {
        x = $this.minus_ykez31_k$(x, $this.ONE_1);
        r = $this.minus_ykez31_k$(a, $this.shl_2fq1k7_k$(a1, imul(n, 63)));
      }
    } else {
      var rRhoD = $this.shl_2fq1k7_k$(r, diff);
      var a1x = $this.times_s4ejn7_k$(a1, x);
      if ($this.compareTo_55med6_k$(rRhoD, a1x) > 0) {
        r = $this.minus_ykez31_k$(rRhoD, a1x);
      } else {
        x = $this.minus_ykez31_k$(x, $this.ONE_1);
        r = $this.minus_ykez31_k$(rRhoD, $this.times_s4ejn7_k$(a1, x));
      }
    }
    return new Pair(new ULongArray(x), new ULongArray(r));
  }
  function reqursiveSqrt_0($this, operand) {
    var n = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = (n - 1 | 0) / 4;
    tmp$ret$0 = Math.floor(tmp0_floor);
    var l = numberToInt(tmp$ret$0);
    if (l === 0) {
      return $this.basecaseSqrt_wkcbg7_k$(operand);
    }
    var step = n / 4 | 0;
    var stepRemainder = n % 4 | 0;
    var baseLPowerShift = imul(63, l);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp1_copyOfRange = n - (imul(3, step) + stepRemainder | 0) | 0;
    var tmp2_copyOfRange = n - (imul(2, step) + stepRemainder | 0) | 0;
    tmp$ret$1 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), tmp1_copyOfRange, tmp2_copyOfRange));
    var a1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp3_copyOfRange = n - (imul(3, step) + stepRemainder | 0) | 0;
    tmp$ret$2 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), 0, tmp3_copyOfRange));
    var a0 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp4_copyOfRange = n - (imul(2, step) + stepRemainder | 0) | 0;
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), tmp4_copyOfRange, n));
    var a3a2 = tmp$ret$3;
    var tmp0_container = reqursiveSqrt_0($this, a3a2);
    var sPrim = tmp0_container.component1_7eebsc_k$().storage_1;
    var rPrim = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp1_container = $this.divrem_84hj6l_k$($this.plus_4jwzw9_k$($this.shl_2fq1k7_k$(rPrim, baseLPowerShift), a1), $this.shl_2fq1k7_k$(sPrim, 1));
    var q = tmp1_container.component1_7eebsc_k$().storage_1;
    var u = tmp1_container.component2_7eebsb_k$().storage_1;
    var s = $this.plus_4jwzw9_k$($this.shl_2fq1k7_k$(sPrim, baseLPowerShift), q);
    var r = $this.minus_ykez31_k$($this.plus_4jwzw9_k$($this.shl_2fq1k7_k$(u, baseLPowerShift), a0), $this.times_s4ejn7_k$(q, q));
    return new Pair(new ULongArray(s), new ULongArray(r));
  }
  function isZero(_this__u8e3s4, $this) {
    if (equals(_this__u8e3s4, $this.ZERO_1))
      return true;
    if (_ULongArray___get_size__impl__ju6dtr(_this__u8e3s4) === 1 ? equals(ULongArray__get_impl_pr71q9(_this__u8e3s4, 0), _ULong___init__impl__c78o9k(new Long(0, 0))) : false)
      return true;
    if ((_ULongArray___get_size__impl__ju6dtr(_this__u8e3s4) - $this.countLeadingZeroWords_3y4bmo_k$(_this__u8e3s4) | 0) === 0)
      return true;
    return false;
  }
  function euclideanGcd_0($this, first, second) {
    var u = first;
    var v = second;
    while (!isZero(v, $this)) {
      var tmpU = u;
      u = v;
      v = $this.rem_k0om2h_k$(tmpU, v);
    }
    return u;
  }
  function binaryGcd_0($this, first, second) {
    var $this_0 = $this;
    var first_0 = first;
    var second_0 = second;
    $l$1: do {
      $l$0: do {
        if (contentEquals_0(first_0, second_0)) {
          return first_0;
        }
        if (isZero(first_0, $this_0)) {
          return second_0;
        }
        if (isZero(second_0, $this_0)) {
          return first_0;
        }
        if (isZero($this_0.and_3oowga_k$(first_0, $this_0.ONE_1), $this_0)) {
          if (isZero($this_0.and_3oowga_k$(second_0, $this_0.ONE_1), $this_0)) {
            return $this_0.shl_2fq1k7_k$(binaryGcd_0($this_0, $this_0.shr_u05prh_k$(first_0, 1), $this_0.shr_u05prh_k$(second_0, 1)), 1);
          } else {
            var tmp0 = $this_0;
            var tmp1 = $this_0.shr_u05prh_k$(first_0, 1);
            var tmp2 = second_0;
            $this_0 = tmp0;
            first_0 = tmp1;
            second_0 = tmp2;
            continue $l$0;
          }
        }
        if (isZero($this_0.and_3oowga_k$(second_0, $this_0.ONE_1), $this_0)) {
          var tmp3 = $this_0;
          var tmp4 = first_0;
          var tmp5 = $this_0.shr_u05prh_k$(second_0, 1);
          $this_0 = tmp3;
          first_0 = tmp4;
          second_0 = tmp5;
          continue $l$0;
        }
        var tmp;
        if ($this_0.compare_h3oy0f_k$(first_0, second_0) === 1) {
          var tmp6 = $this_0;
          var tmp7 = $this_0.shr_u05prh_k$($this_0.subtract_jhqa8d_k$(first_0, second_0), 1);
          var tmp8 = second_0;
          $this_0 = tmp6;
          first_0 = tmp7;
          second_0 = tmp8;
          continue $l$0;
        } else {
          var tmp9 = $this_0;
          var tmp10 = $this_0.shr_u05prh_k$($this_0.subtract_jhqa8d_k$(second_0, first_0), 1);
          var tmp11 = first_0;
          $this_0 = tmp9;
          first_0 = tmp10;
          second_0 = tmp11;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function SignedULongArray(unsignedValue, sign) {
    this.unsignedValue_1 = unsignedValue;
    this.sign_1 = sign;
  }
  SignedULongArray.prototype.get_unsignedValue_1r2da2_k$ = function () {
    return this.unsignedValue_1;
  };
  SignedULongArray.prototype.get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  SignedULongArray.prototype.component1_cjz6yh_k$ = function () {
    return this.unsignedValue_1;
  };
  SignedULongArray.prototype.component2_7eebsb_k$ = function () {
    return this.sign_1;
  };
  SignedULongArray.prototype.copy_oq148f_k$ = function (unsignedValue, sign) {
    return new SignedULongArray(unsignedValue, sign);
  };
  SignedULongArray.prototype.copy$default_lgrts1_k$ = function (unsignedValue, sign, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unsignedValue = this.unsignedValue_1;
    if (!(($mask0 & 2) === 0))
      sign = this.sign_1;
    return this.copy_oq148f_k$(unsignedValue, sign);
  };
  SignedULongArray.prototype.toString = function () {
    return 'SignedULongArray(unsignedValue=' + new ULongArray(this.unsignedValue_1) + ', sign=' + this.sign_1 + ')';
  };
  SignedULongArray.prototype.hashCode = function () {
    var result = ULongArray__hashCode_impl_aze4wa(this.unsignedValue_1);
    result = imul(result, 31) + (this.sign_1 | 0) | 0;
    return result;
  };
  SignedULongArray.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignedULongArray))
      return false;
    var tmp0_other_with_cast = other instanceof SignedULongArray ? other : THROW_CCE();
    if (!equals(this.unsignedValue_1, tmp0_other_with_cast.unsignedValue_1))
      return false;
    if (!(this.sign_1 === tmp0_other_with_cast.sign_1))
      return false;
    return true;
  };
  SignedULongArray.$metadata$ = classMeta('SignedULongArray');
  function signedAdd_0($this, first, second) {
    var tmp;
    if (!!(first.sign_1 ^ second.sign_1)) {
      var tmp_0;
      if ($this.compareTo_55med6_k$(first.unsignedValue_1, second.unsignedValue_1) > 0) {
        tmp_0 = new SignedULongArray($this.minus_ykez31_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
      } else {
        tmp_0 = new SignedULongArray($this.minus_ykez31_k$(second.unsignedValue_1, first.unsignedValue_1), second.sign_1);
      }
      tmp = tmp_0;
    } else {
      tmp = new SignedULongArray($this.plus_4jwzw9_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
    }
    return tmp;
  }
  function signedSubtract_0($this, first, second) {
    return signedAdd_0($this, first, second.copy$default_lgrts1_k$(null, !second.sign_1, 1, null));
  }
  function signedMultiply_0($this, first, second) {
    return new SignedULongArray($this.times_s4ejn7_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedDivide_0($this, first, second) {
    return new SignedULongArray($this.div_j6cgqm_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedRemainder_0($this, first, second) {
    return new SignedULongArray($this.rem_k0om2h_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function debugOperandsCheck($this, first, second) {
    if (false ? ULongArray__isEmpty_impl_c3yngu(first) ? true : ULongArray__isEmpty_impl_c3yngu(second) : false) {
      throw RuntimeException_init_$Create$('Empty operands');
    }
  }
  function BigInteger63Arithmetic() {
    BigInteger63Arithmetic_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.longArrayOf' call
    tmp$ret$0 = longArrayOf([]);
    tmp._emitLongArray_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0))]));
    tmp_0.ZERO_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$2 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1, 0))]));
    tmp_1.ONE_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2, 0))]));
    tmp_2.TWO_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$4 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10, 0))]));
    tmp_3.TEN_1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$5 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1431655765, 715827882))]));
    tmp_4.reciprocalOf3In2ToThePowerOf63__1 = tmp$ret$5;
    this.basePowerOfTwo_1 = 63;
    this.wordSizeInBits_1 = 63;
    this.baseMask_1 = _ULong___init__impl__c78o9k(new Long(-1, 2147483647));
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$6 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1, 2147483647))]));
    tmp_5.baseMaskArray_1 = tmp$ret$6;
    this.lowMask_1 = _ULong___init__impl__c78o9k(new Long(-1, 0));
    this.highMask_1 = _ULong___init__impl__c78o9k(new Long(0, 2147483647));
    this.overflowMask_1 = _ULong___init__impl__c78o9k(new Long(0, -2147483648));
    this.karatsubaThreshold_1 = 120;
    this.toomCookThreshold_1 = 15000;
    this.debugEnabled_1 = false;
    this.SIGNED_POSITIVE_TWO_1 = new SignedULongArray(BigInteger63Arithmetic_getInstance().TWO_1, true);
    var tmp_6 = this;
    var tmp$ret$110;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$7;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$7 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_7 = new ULongArray(tmp$ret$7);
    var tmp$ret$8;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$8 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10, 0))]));
    var tmp_8 = new ULongArray(tmp$ret$8);
    var tmp$ret$9;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$9 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(100, 0))]));
    var tmp_9 = new ULongArray(tmp$ret$9);
    var tmp$ret$10;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$10 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1000, 0))]));
    var tmp_10 = new ULongArray(tmp$ret$10);
    var tmp$ret$11;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$11 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10000, 0))]));
    var tmp_11 = new ULongArray(tmp$ret$11);
    var tmp$ret$12;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$12 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(100000, 0))]));
    var tmp_12 = new ULongArray(tmp$ret$12);
    var tmp$ret$13;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$13 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1000000, 0))]));
    var tmp_13 = new ULongArray(tmp$ret$13);
    var tmp$ret$14;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$14 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10000000, 0))]));
    var tmp_14 = new ULongArray(tmp$ret$14);
    var tmp$ret$15;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$15 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(100000000, 0))]));
    var tmp_15 = new ULongArray(tmp$ret$15);
    var tmp$ret$16;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$16 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1000000000, 0))]));
    var tmp_16 = new ULongArray(tmp$ret$16);
    var tmp$ret$17;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$17 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1410065408, 2))]));
    var tmp_17 = new ULongArray(tmp$ret$17);
    var tmp$ret$18;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$18 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1215752192, 23))]));
    var tmp_18 = new ULongArray(tmp$ret$18);
    var tmp$ret$19;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$19 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-727379968, 232))]));
    var tmp_19 = new ULongArray(tmp$ret$19);
    var tmp$ret$20;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$20 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1316134912, 2328))]));
    var tmp_20 = new ULongArray(tmp$ret$20);
    var tmp$ret$21;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$21 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(276447232, 23283))]));
    var tmp_21 = new ULongArray(tmp$ret$21);
    var tmp$ret$22;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$22 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1530494976, 232830))]));
    var tmp_22 = new ULongArray(tmp$ret$22);
    var tmp$ret$23;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$23 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1874919424, 2328306))]));
    var tmp_23 = new ULongArray(tmp$ret$23);
    var tmp$ret$24;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$24 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1569325056, 23283064))]));
    var tmp_24 = new ULongArray(tmp$ret$24);
    var tmp$ret$25;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$25 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1486618624, 232830643))]));
    var tmp_25 = new ULongArray(tmp$ret$25);
    var tmp$ret$26;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$26 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1981284352, 180822788)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_26 = new ULongArray(tmp$ret$26);
    var tmp$ret$27;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$27 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1661992960, 1808227885)), _ULong___init__impl__c78o9k(new Long(10, 0))]));
    var tmp_27 = new ULongArray(tmp$ret$27);
    var tmp$ret$28;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$28 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-559939584, 902409669)), _ULong___init__impl__c78o9k(new Long(108, 0))]));
    var tmp_28 = new ULongArray(tmp$ret$28);
    var tmp$ret$29;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$29 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1304428544, 434162106)), _ULong___init__impl__c78o9k(new Long(1084, 0))]));
    var tmp_29 = new ULongArray(tmp$ret$29);
    var tmp$ret$30;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$30 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-159383552, 46653770)), _ULong___init__impl__c78o9k(new Long(10842, 0))]));
    var tmp_30 = new ULongArray(tmp$ret$30);
    var tmp$ret$31;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$31 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1593835520, 466537709)), _ULong___init__impl__c78o9k(new Long(108420, 0))]));
    var tmp_31 = new ULongArray(tmp$ret$31);
    var tmp$ret$32;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$32 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1241513984, 370409800)), _ULong___init__impl__c78o9k(new Long(1084202, 0))]));
    var tmp_32 = new ULongArray(tmp$ret$32);
    var tmp$ret$33;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$33 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-469762048, 1556614354)), _ULong___init__impl__c78o9k(new Long(10842021, 0))]));
    var tmp_33 = new ULongArray(tmp$ret$33);
    var tmp$ret$34;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$34 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-402653184, 533758012)), _ULong___init__impl__c78o9k(new Long(108420217, 0))]));
    var tmp_34 = new ULongArray(tmp$ret$34);
    var tmp$ret$35;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$35 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(268435456, 1042612833)), _ULong___init__impl__c78o9k(new Long(1084202172, 0))]));
    var tmp_35 = new ULongArray(tmp$ret$35);
    var tmp$ret$36;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$36 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1610612736, 1836193738)), _ULong___init__impl__c78o9k(new Long(-2042880164, 2))]));
    var tmp_36 = new ULongArray(tmp$ret$36);
    var tmp$ret$37;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$37 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1073741824, 1182068202)), _ULong___init__impl__c78o9k(new Long(1046034848, 25))]));
    var tmp_37 = new ULongArray(tmp$ret$37);
    var tmp$ret$38;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$38 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-2147483648, 1083263782)), _ULong___init__impl__c78o9k(new Long(1870413893, 252))]));
    var tmp_38 = new ULongArray(tmp$ret$38);
    var tmp$ret$39;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$39 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 95219585)), _ULong___init__impl__c78o9k(new Long(1524269751, 2524))]));
    var tmp_39 = new ULongArray(tmp$ret$39);
    var tmp$ret$40;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$40 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 952195850)), _ULong___init__impl__c78o9k(new Long(-1937171674, 25243))]));
    var tmp_40 = new ULongArray(tmp$ret$40);
    var tmp$ret$41;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$41 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 932023908)), _ULong___init__impl__c78o9k(new Long(2103119744, 252435))]));
    var tmp_41 = new ULongArray(tmp$ret$41);
    var tmp$ret$42;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$42 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 730304488)), _ULong___init__impl__c78o9k(new Long(-443639036, 2524354))]));
    var tmp_42 = new ULongArray(tmp$ret$42);
    var tmp$ret$43;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$43 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 860593936)), _ULong___init__impl__c78o9k(new Long(-141423061, 25243548))]));
    var tmp_43 = new ULongArray(tmp$ret$43);
    var tmp$ret$44;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$44 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 16004768)), _ULong___init__impl__c78o9k(new Long(-1414230606, 252435489))]));
    var tmp_44 = new ULongArray(tmp$ret$44);
    var tmp$ret$45;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$45 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 160047680)), _ULong___init__impl__c78o9k(new Long(-1257404172, 376871248)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_45 = new ULongArray(tmp$ret$45);
    var tmp$ret$46;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$46 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1600476800)), _ULong___init__impl__c78o9k(new Long(310860168, 1621228839)), _ULong___init__impl__c78o9k(new Long(11, 0))]));
    var tmp_46 = new ULongArray(tmp$ret$46);
    var tmp$ret$47;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$47 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 972382464)), _ULong___init__impl__c78o9k(new Long(-1186365609, 1179902854)), _ULong___init__impl__c78o9k(new Long(117, 0))]));
    var tmp_47 = new ULongArray(tmp$ret$47);
    var tmp$ret$48;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$48 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1133890048)), _ULong___init__impl__c78o9k(new Long(1021245802, 1061610307)), _ULong___init__impl__c78o9k(new Long(1175, 0))]));
    var tmp_48 = new ULongArray(tmp$ret$48);
    var tmp$ret$49;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$49 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 601482240)), _ULong___init__impl__c78o9k(new Long(1622523433, 2026168480)), _ULong___init__impl__c78o9k(new Long(11754, 0))]));
    var tmp_49 = new ULongArray(tmp$ret$49);
    var tmp$ret$50;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$50 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1719855104)), _ULong___init__impl__c78o9k(new Long(-954634852, 934331971)), _ULong___init__impl__c78o9k(new Long(117549, 0))]));
    var tmp_50 = new ULongArray(tmp$ret$50);
    var tmp$ret$51;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$51 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 18681856)), _ULong___init__impl__c78o9k(new Long(-956413920, 753385125)), _ULong___init__impl__c78o9k(new Long(1175494, 0))]));
    var tmp_51 = new ULongArray(tmp$ret$51);
    var tmp$ret$52;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$52 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 186818560)), _ULong___init__impl__c78o9k(new Long(-974204608, 1091400313)), _ULong___init__impl__c78o9k(new Long(11754943, 0))]));
    var tmp_52 = new ULongArray(tmp$ret$52);
    var tmp$ret$53;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$53 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1868185600)), _ULong___init__impl__c78o9k(new Long(-1152111488, 176584897)), _ULong___init__impl__c78o9k(new Long(117549435, 0))]));
    var tmp_53 = new ULongArray(tmp$ret$53);
    var tmp$ret$54;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$54 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1501986816)), _ULong___init__impl__c78o9k(new Long(1363787016, 1765848977)), _ULong___init__impl__c78o9k(new Long(1175494350, 0))]));
    var tmp_54 = new ULongArray(tmp$ret$54);
    var tmp$ret$55;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$55 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 2134966272)), _ULong___init__impl__c78o9k(new Long(752968278, 478620589)), _ULong___init__impl__c78o9k(new Long(-1129958380, 2))]));
    var tmp_55 = new ULongArray(tmp$ret$55);
    var tmp$ret$56;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$56 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 2022309888)), _ULong___init__impl__c78o9k(new Long(-1060251803, 491238595)), _ULong___init__impl__c78o9k(new Long(1585318090, 27))]));
    var tmp_56 = new ULongArray(tmp$ret$56);
    var tmp$ret$57;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$57 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 895746048)), _ULong___init__impl__c78o9k(new Long(-2012583429, 617418661)), _ULong___init__impl__c78o9k(new Long(-1326688282, 273))]));
    var tmp_57 = new ULongArray(tmp$ret$57);
    var tmp$ret$58;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$58 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 367525888)), _ULong___init__impl__c78o9k(new Long(1349002194, 1879219319)), _ULong___init__impl__c78o9k(new Long(-381980930, 2736))]));
    var tmp_58 = new ULongArray(tmp$ret$58);
    var tmp$ret$59;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$59 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1527775232)), _ULong___init__impl__c78o9k(new Long(605120053, 1612324009)), _ULong___init__impl__c78o9k(new Long(475158004, 27369))]));
    var tmp_59 = new ULongArray(tmp$ret$59);
    var tmp$ret$60;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$60 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 245366784)), _ULong___init__impl__c78o9k(new Long(1756233241, 1090854555)), _ULong___init__impl__c78o9k(new Long(456612751, 273691))]));
    var tmp_60 = new ULongArray(tmp$ret$60);
    var tmp$ret$61;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$61 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 306184192)), _ULong___init__impl__c78o9k(new Long(382463227, 171127314)), _ULong___init__impl__c78o9k(new Long(271160219, 2736911))]));
    var tmp_61 = new ULongArray(tmp$ret$61);
    var tmp$ret$62;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$62 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 914358272)), _ULong___init__impl__c78o9k(new Long(-470335025, 1711273140)), _ULong___init__impl__c78o9k(new Long(-1583365106, 27369110))]));
    var tmp_62 = new ULongArray(tmp$ret$62);
    var tmp$ret$63;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$63 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 553648128)), _ULong___init__impl__c78o9k(new Long(-408382950, 2080345872)), _ULong___init__impl__c78o9k(new Long(1346218131, 273691106))]));
    var tmp_63 = new ULongArray(tmp$ret$63);
    var tmp$ret$64;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1241513984)), _ULong___init__impl__c78o9k(new Long(211137798, 1476105897)), _ULong___init__impl__c78o9k(new Long(577279431, 589427415)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_64 = new ULongArray(tmp$ret$64);
    var tmp$ret$65;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$65 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1677721600)), _ULong___init__impl__c78o9k(new Long(2111377985, 1876157082)), _ULong___init__impl__c78o9k(new Long(1477827020, 1599306855)), _ULong___init__impl__c78o9k(new Long(12, 0))]));
    var tmp_65 = new ULongArray(tmp$ret$65);
    var tmp$ret$66;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$66 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1744830464)), _ULong___init__impl__c78o9k(new Long(-361056623, 1581701640)), _ULong___init__impl__c78o9k(new Long(1893368320, 960683017)), _ULong___init__impl__c78o9k(new Long(127, 0))]));
    var tmp_66 = new ULongArray(tmp$ret$66);
    var tmp$ret$67;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$67 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 268435456)), _ULong___init__impl__c78o9k(new Long(684401074, 784630873)), _ULong___init__impl__c78o9k(new Long(1753814023, 1016895582)), _ULong___init__impl__c78o9k(new Long(1274, 0))]));
    var tmp_67 = new ULongArray(tmp$ret$67);
    var tmp$ret$68;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$68 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 536870912)), _ULong___init__impl__c78o9k(new Long(-1745923851, 1403857787)), _ULong___init__impl__c78o9k(new Long(358271049, 1579021232)), _ULong___init__impl__c78o9k(new Long(12744, 0))]));
    var tmp_68 = new ULongArray(tmp$ret$68);
    var tmp$ret$69;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$69 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1073741824)), _ULong___init__impl__c78o9k(new Long(-279369324, 1153675987)), _ULong___init__impl__c78o9k(new Long(-712256800, 757826784)), _ULong___init__impl__c78o9k(new Long(127447, 0))]));
    var tmp_69 = new ULongArray(tmp$ret$69);
    var tmp$ret$70;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$70 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1501274061, 799341639)), _ULong___init__impl__c78o9k(new Long(1467366597, 1135816904)), _ULong___init__impl__c78o9k(new Long(1274473, 0))]));
    var tmp_70 = new ULongArray(tmp$ret$70);
    var tmp$ret$71;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$71 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(2127838722, 1550965449)), _ULong___init__impl__c78o9k(new Long(1788764085, 620750803)), _ULong___init__impl__c78o9k(new Long(12744735, 0))]));
    var tmp_71 = new ULongArray(tmp$ret$71);
    var tmp$ret$72;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$72 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-196449260, 477268958)), _ULong___init__impl__c78o9k(new Long(707771673, 1912540738)), _ULong___init__impl__c78o9k(new Long(127447352, 0))]));
    var tmp_72 = new ULongArray(tmp$ret$72);
    var tmp$ret$73;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$73 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1964492600, 477722293)), _ULong___init__impl__c78o9k(new Long(-1512217860, 1945538197)), _ULong___init__impl__c78o9k(new Long(1274473528, 0))]));
    var tmp_73 = new ULongArray(tmp$ret$73);
    var tmp$ret$74;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$74 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1829910480, 482255639)), _ULong___init__impl__c78o9k(new Long(2057690586, 128029144)), _ULong___init__impl__c78o9k(new Long(-140166599, 2))]));
    var tmp_74 = new ULongArray(tmp$ret$74);
    var tmp$ret$75;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$75 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1119235616, 527589098)), _ULong___init__impl__c78o9k(new Long(-897930618, 1280291444)), _ULong___init__impl__c78o9k(new Long(-1401665990, 29))]));
    var tmp_75 = new ULongArray(tmp$ret$75);
    var tmp$ret$76;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$76 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1692545728, 980923686)), _ULong___init__impl__c78o9k(new Long(-389371586, 2065496207)), _ULong___init__impl__c78o9k(new Long(-1131758007, 296))]));
    var tmp_76 = new ULongArray(tmp$ret$76);
    var tmp$ret$77;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$77 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(254411904, 1219302274)), _ULong___init__impl__c78o9k(new Long(401251440, 1327609247)), _ULong___init__impl__c78o9k(new Long(1567321827, 2967))]));
    var tmp_77 = new ULongArray(tmp$ret$77);
    var tmp$ret$78;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$78 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1750848256, 1455604500)), _ULong___init__impl__c78o9k(new Long(-282452891, 391190582)), _ULong___init__impl__c78o9k(new Long(-1506650908, 29673))]));
    var tmp_78 = new ULongArray(tmp$ret$78);
    var tmp$ret$79;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$79 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-328613376, 1671143117)), _ULong___init__impl__c78o9k(new Long(1470438392, 1764422181)), _ULong___init__impl__c78o9k(new Long(2113360105, 296736))]));
    var tmp_79 = new ULongArray(tmp$ret$79);
    var tmp$ret$80;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$80 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1008833536, 1679045643)), _ULong___init__impl__c78o9k(new Long(1819482039, 464352629)), _ULong___init__impl__c78o9k(new Long(-341235422, 2967364))]));
    var tmp_80 = new ULongArray(tmp$ret$80);
    var tmp$ret$81;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$81 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1498400768, 1758070896)), _ULong___init__impl__c78o9k(new Long(1014951213, 348558998)), _ULong___init__impl__c78o9k(new Long(882613078, 29673649))]));
    var tmp_81 = new ULongArray(tmp$ret$81);
    var tmp$ret$82;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$82 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(2099105792, 400839779)), _ULong___init__impl__c78o9k(new Long(1559577546, 1338106334)), _ULong___init__impl__c78o9k(new Long(236196189, 296736492))]));
    var tmp_82 = new ULongArray(tmp$ret$82);
    var tmp$ret$83;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$83 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-483778560, 1860914146)), _ULong___init__impl__c78o9k(new Long(-1584093723, 496161455)), _ULong___init__impl__c78o9k(new Long(-1933005400, 819881272)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_83 = new ULongArray(tmp$ret$83);
    var tmp$ret$84;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$84 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-542818304, 1429272284)), _ULong___init__impl__c78o9k(new Long(1338931962, 666647260)), _ULong___init__impl__c78o9k(new Long(2144782482, 1756361781)), _ULong___init__impl__c78o9k(new Long(13, 0))]));
    var tmp_84 = new ULongArray(tmp$ret$84);
    var tmp$ret$85;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$85 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1133215744, 1407820960)), _ULong___init__impl__c78o9k(new Long(504417738, 224021659)), _ULong___init__impl__c78o9k(new Long(-27011657, 383748630)), _ULong___init__impl__c78o9k(new Long(138, 0))]));
    var tmp_85 = new ULongArray(tmp$ret$85);
    var tmp$ret$86;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$86 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1552744448, 1193307719)), _ULong___init__impl__c78o9k(new Long(749210090, 92732943)), _ULong___init__impl__c78o9k(new Long(-270116569, 1690002661)), _ULong___init__impl__c78o9k(new Long(1381, 0))]));
    var tmp_86 = new ULongArray(tmp$ret$86);
    var tmp$ret$87;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$87 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1652424704, 1195658953)), _ULong___init__impl__c78o9k(new Long(-1097833687, 927329431)), _ULong___init__impl__c78o9k(new Long(1593801606, 1867641083)), _ULong___init__impl__c78o9k(new Long(13817, 0))]));
    var tmp_87 = new ULongArray(tmp$ret$87);
    var tmp$ret$88;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$88 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(655622144, 1219171296)), _ULong___init__impl__c78o9k(new Long(1906565023, 683359725)), _ULong___init__impl__c78o9k(new Long(-1241853120, 1496541649)), _ULong___init__impl__c78o9k(new Long(138178, 0))]));
    var tmp_88 = new ULongArray(tmp$ret$88);
    var tmp$ret$89;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$89 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-2033713152, 1454294721)), _ULong___init__impl__c78o9k(new Long(1885781051, 391146310)), _ULong___init__impl__c78o9k(new Long(466370691, 2080514609)), _ULong___init__impl__c78o9k(new Long(1381786, 0))]));
    var tmp_89 = new ULongArray(tmp$ret$89);
    var tmp$ret$90;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$90 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1137704960, 1658045327)), _ULong___init__impl__c78o9k(new Long(1677941332, 1763979456)), _ULong___init__impl__c78o9k(new Long(368739615, 1477793259)), _ULong___init__impl__c78o9k(new Long(13817869, 0))]));
    var tmp_90 = new ULongArray(tmp$ret$90);
    var tmp$ret$91;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$91 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1507852288, 1548067736)), _ULong___init__impl__c78o9k(new Long(-400455857, 459925379)), _ULong___init__impl__c78o9k(new Long(-607571138, 1893030702)), _ULong___init__impl__c78o9k(new Long(138178696, 0))]));
    var tmp_91 = new ULongArray(tmp$ret$91);
    var tmp$ret$92;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$92 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(2101346304, 448291830)), _ULong___init__impl__c78o9k(new Long(290408733, 304286503)), _ULong___init__impl__c78o9k(new Long(-1780744082, 1750437844)), _ULong___init__impl__c78o9k(new Long(1381786968, 0))]));
    var tmp_92 = new ULongArray(tmp$ret$92);
    var tmp$ret$93;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$93 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-461373440, 187951008)), _ULong___init__impl__c78o9k(new Long(-1390879964, 895381382)), _ULong___init__impl__c78o9k(new Long(-627571635, 324509261)), _ULong___init__impl__c78o9k(new Long(932967800, 3))]));
    var tmp_93 = new ULongArray(tmp$ret$93);
    var tmp$ret$94;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$94 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-318767104, 1879510088)), _ULong___init__impl__c78o9k(new Long(-1023897752, 363879234)), _ULong___init__impl__c78o9k(new Long(-1980749050, 1097608970)), _ULong___init__impl__c78o9k(new Long(739743409, 32))]));
    var tmp_94 = new ULongArray(tmp$ret$94);
    var tmp$ret$95;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$95 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1107296256, 1615231705)), _ULong___init__impl__c78o9k(new Long(-1649042920, 1491308699)), _ULong___init__impl__c78o9k(new Long(1667345981, 238671465)), _ULong___init__impl__c78o9k(new Long(-1192500497, 321))]));
    var tmp_95 = new ULongArray(tmp$ret$95);
    var tmp$ret$96;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$96 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1811939328, 1119931516)), _ULong___init__impl__c78o9k(new Long(689439991, 2028185108)), _ULong___init__impl__c78o9k(new Long(-506409368, 239231005)), _ULong___init__impl__c78o9k(new Long(959896919, 3217))]));
    var tmp_96 = new ULongArray(tmp$ret$96);
    var tmp$ret$97;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$97 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-939524096, 461896925)), _ULong___init__impl__c78o9k(new Long(-1695534677, 954498249)), _ULong___init__impl__c78o9k(new Long(-769126375, 244826410)), _ULong___init__impl__c78o9k(new Long(1009034599, 32172))]));
    var tmp_97 = new ULongArray(tmp$ret$97);
    var tmp$ret$98;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$98 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-805306368, 324001961)), _ULong___init__impl__c78o9k(new Long(224522416, 955047904)), _ULong___init__impl__c78o9k(new Long(898670846, 300780460)), _ULong___init__impl__c78o9k(new Long(1500411399, 321722))]));
    var tmp_98 = new ULongArray(tmp$ret$98);
    var tmp$ret$99;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$99 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(536870912, 1092535970)), _ULong___init__impl__c78o9k(new Long(-2049743135, 960544448)), _ULong___init__impl__c78o9k(new Long(396773872, 860320954)), _ULong___init__impl__c78o9k(new Long(2119212103, 3217223))]));
    var tmp_99 = new ULongArray(tmp$ret$99);
    var tmp$ret$100;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$100 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1073741824, 187941461)), _ULong___init__impl__c78o9k(new Long(977405135, 1015509893)), _ULong___init__impl__c78o9k(new Long(-327228572, 13274948)), _ULong___init__impl__c78o9k(new Long(-282715446, 32172234))]));
    var tmp_100 = new ULongArray(tmp$ret$100);
    var tmp$ret$101;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$101 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-2147483648, 1879414612)), _ULong___init__impl__c78o9k(new Long(1184116758, 1565164340)), _ULong___init__impl__c78o9k(new Long(1022681580, 132749489)), _ULong___init__impl__c78o9k(new Long(1467812836, 321722349))]));
    var tmp_101 = new ULongArray(tmp$ret$101);
    var tmp$ret$102;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$102 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1614276941)), _ULong___init__impl__c78o9k(new Long(-1043734300, 619257866)), _ULong___init__impl__c78o9k(new Long(1636881215, 1327494892)), _ULong___init__impl__c78o9k(new Long(1793226472, 1069739845)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_102 = new ULongArray(tmp$ret$102);
    var tmp$ret$103;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$103 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1110383874)), _ULong___init__impl__c78o9k(new Long(-1847408401, 1897611371)), _ULong___init__impl__c78o9k(new Long(-811057032, 390047035)), _ULong___init__impl__c78o9k(new Long(752395542, 2107463862)), _ULong___init__impl__c78o9k(new Long(14, 0))]));
    var tmp_103 = new ULongArray(tmp$ret$103);
    var tmp$ret$104;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$104 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 366420500)), _ULong___init__impl__c78o9k(new Long(-1294214821, 1796244531)), _ULong___init__impl__c78o9k(new Long(479364280, 1752986710)), _ULong___init__impl__c78o9k(new Long(-1065979171, 1747285789)), _ULong___init__impl__c78o9k(new Long(149, 0))]));
    var tmp_104 = new ULongArray(tmp$ret$104);
    var tmp$ret$105;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$105 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1516721352)), _ULong___init__impl__c78o9k(new Long(-57246321, 782576132)), _ULong___init__impl__c78o9k(new Long(498675512, 349997917)), _ULong___init__impl__c78o9k(new Long(-2069857110, 292988713)), _ULong___init__impl__c78o9k(new Long(1498, 0))]));
    var tmp_105 = new ULongArray(tmp$ret$105);
    var tmp$ret$106;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$106 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 134827984)), _ULong___init__impl__c78o9k(new Long(-572463203, 1383310385)), _ULong___init__impl__c78o9k(new Long(691787827, 1352495523)), _ULong___init__impl__c78o9k(new Long(776265381, 782403487)), _ULong___init__impl__c78o9k(new Long(14981, 0))]));
    var tmp_106 = new ULongArray(tmp$ret$106);
    var tmp$ret$107;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$107 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1348279840)), _ULong___init__impl__c78o9k(new Long(-1429664734, 948201970)), _ULong___init__impl__c78o9k(new Long(-1672056316, 640053343)), _ULong___init__impl__c78o9k(new Long(-827280776, 1381583927)), _ULong___init__impl__c78o9k(new Long(149813, 0))]));
    var tmp0_arrayOf = [tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, tmp_39, tmp_40, tmp_41, tmp_42, tmp_43, tmp_44, tmp_45, tmp_46, tmp_47, tmp_48, tmp_49, tmp_50, tmp_51, tmp_52, tmp_53, tmp_54, tmp_55, tmp_56, tmp_57, tmp_58, tmp_59, tmp_60, tmp_61, tmp_62, tmp_63, tmp_64, tmp_65, tmp_66, tmp_67, tmp_68, tmp_69, tmp_70, tmp_71, tmp_72, tmp_73, tmp_74, tmp_75, tmp_76, tmp_77, tmp_78, tmp_79, tmp_80, tmp_81, tmp_82, tmp_83, tmp_84, tmp_85, tmp_86, tmp_87, tmp_88, tmp_89, tmp_90, tmp_91, tmp_92, tmp_93, tmp_94, tmp_95, tmp_96, tmp_97, tmp_98, tmp_99, tmp_100, tmp_101, tmp_102, tmp_103, tmp_104, tmp_105, tmp_106, new ULongArray(tmp$ret$107)];
    var tmp$ret$109;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$108;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$108 = tmp0_arrayOf;
    tmp$ret$109 = tmp$ret$108;
    tmp$ret$110 = tmp$ret$109;
    tmp_6.powersOf10__1 = tmp$ret$110;
  }
  BigInteger63Arithmetic.prototype.get__emitLongArray_5zzln0_k$ = function () {
    return this._emitLongArray_1;
  };
  BigInteger63Arithmetic.prototype.get_ZERO_r1gpek_k$ = function () {
    return this.ZERO_1;
  };
  BigInteger63Arithmetic.prototype.get_ONE_qk94fk_k$ = function () {
    return this.ONE_1;
  };
  BigInteger63Arithmetic.prototype.get_TWO_2fvlu2_k$ = function () {
    return this.TWO_1;
  };
  BigInteger63Arithmetic.prototype.get_TEN_32vuwp_k$ = function () {
    return this.TEN_1;
  };
  BigInteger63Arithmetic.prototype.get_reciprocalOf3In2ToThePowerOf63_w991fa_k$ = function () {
    return this.reciprocalOf3In2ToThePowerOf63__1;
  };
  BigInteger63Arithmetic.prototype.get_basePowerOfTwo_4zvm3u_k$ = function () {
    return this.basePowerOfTwo_1;
  };
  BigInteger63Arithmetic.prototype.get_wordSizeInBits_q6hmfz_k$ = function () {
    return this.wordSizeInBits_1;
  };
  BigInteger63Arithmetic.prototype.get_baseMask_kf6d7k_k$ = function () {
    return this.baseMask_1;
  };
  BigInteger63Arithmetic.prototype.get_baseMaskArray_u4ii86_k$ = function () {
    return this.baseMaskArray_1;
  };
  BigInteger63Arithmetic.prototype.get_lowMask_5qt51t_k$ = function () {
    return this.lowMask_1;
  };
  BigInteger63Arithmetic.prototype.get_highMask_pj757z_k$ = function () {
    return this.highMask_1;
  };
  BigInteger63Arithmetic.prototype.get_overflowMask_qaxvox_k$ = function () {
    return this.overflowMask_1;
  };
  BigInteger63Arithmetic.prototype.get_karatsubaThreshold_iz6kh0_k$ = function () {
    return this.karatsubaThreshold_1;
  };
  BigInteger63Arithmetic.prototype.get_toomCookThreshold_rqmabj_k$ = function () {
    return this.toomCookThreshold_1;
  };
  BigInteger63Arithmetic.prototype.get_debugEnabled_751hl5_k$ = function () {
    return this.debugEnabled_1;
  };
  BigInteger63Arithmetic.prototype.numberOfLeadingZerosInAWord_3s80te_k$ = function (value) {
    var x = value;
    var y;
    var n = 63;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.shr' call
    var tmp0_shr = x;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(32));
    y = tmp$ret$0;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 32 | 0;
      x = y;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shr' call
    var tmp1_shr = x;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(16));
    y = tmp$ret$1;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 16 | 0;
      x = y;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shr' call
    var tmp2_shr = x;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shr).ushr_rr8rvr_k$(8));
    y = tmp$ret$2;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 8 | 0;
      x = y;
    }
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.shr' call
    var tmp3_shr = x;
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_shr).ushr_rr8rvr_k$(4));
    y = tmp$ret$3;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 4 | 0;
      x = y;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.shr' call
    var tmp4_shr = x;
    tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(2));
    y = tmp$ret$4;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 2 | 0;
      x = y;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.ULong.shr' call
    var tmp5_shr = x;
    tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_shr).ushr_rr8rvr_k$(1));
    y = tmp$ret$5;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      return n - 2 | 0;
    }
    var tmp = n;
    var tmp$ret$6;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp6_toInt = x;
    tmp$ret$6 = _ULong___get_data__impl__fggpzb(tmp6_toInt).toInt_1tsl84_k$();
    return tmp - tmp$ret$6 | 0;
  };
  BigInteger63Arithmetic.prototype.numberOfLeadingZeroesInA64BitWord_a16uc6_k$ = function (value) {
    var x = value;
    var y;
    var n = 64;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.shr' call
    var tmp0_shr = x;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(32));
    y = tmp$ret$0;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 32 | 0;
      x = y;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shr' call
    var tmp1_shr = x;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(16));
    y = tmp$ret$1;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 16 | 0;
      x = y;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shr' call
    var tmp2_shr = x;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shr).ushr_rr8rvr_k$(8));
    y = tmp$ret$2;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 8 | 0;
      x = y;
    }
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.shr' call
    var tmp3_shr = x;
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_shr).ushr_rr8rvr_k$(4));
    y = tmp$ret$3;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 4 | 0;
      x = y;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.shr' call
    var tmp4_shr = x;
    tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(2));
    y = tmp$ret$4;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 2 | 0;
      x = y;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.ULong.shr' call
    var tmp5_shr = x;
    tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_shr).ushr_rr8rvr_k$(1));
    y = tmp$ret$5;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      return n - 2 | 0;
    }
    var tmp = n;
    var tmp$ret$6;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp6_toInt = x;
    tmp$ret$6 = _ULong___get_data__impl__fggpzb(tmp6_toInt).toInt_1tsl84_k$();
    return tmp - tmp$ret$6 | 0;
  };
  BigInteger63Arithmetic.prototype.numberOfTrailingZerosInAWord_majgcs_k$ = function (value) {
    var x = value;
    var y;
    var n = 63;
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.shl' call
    var tmp0_shl = x;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).shl_po5ip6_k$(32));
    var tmp1_and = tmp$ret$0;
    var tmp2_and = this.baseMask_1;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
    y = tmp$ret$1;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 32 | 0;
      x = y;
    }
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shl' call
    var tmp3_shl = x;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_shl).shl_po5ip6_k$(16));
    var tmp4_and = tmp$ret$2;
    var tmp5_and = this.baseMask_1;
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp5_and)));
    y = tmp$ret$3;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 16 | 0;
      x = y;
    }
    var tmp$ret$5;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.shl' call
    var tmp6_shl = x;
    tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_shl).shl_po5ip6_k$(8));
    var tmp7_and = tmp$ret$4;
    var tmp8_and = this.baseMask_1;
    tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp8_and)));
    y = tmp$ret$5;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 8 | 0;
      x = y;
    }
    var tmp$ret$7;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$6;
    // Inline function 'kotlin.ULong.shl' call
    var tmp9_shl = x;
    tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_shl).shl_po5ip6_k$(4));
    var tmp10_and = tmp$ret$6;
    var tmp11_and = this.baseMask_1;
    tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp11_and)));
    y = tmp$ret$7;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 4 | 0;
      x = y;
    }
    var tmp$ret$9;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$8;
    // Inline function 'kotlin.ULong.shl' call
    var tmp12_shl = x;
    tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_shl).shl_po5ip6_k$(2));
    var tmp13_and = tmp$ret$8;
    var tmp14_and = this.baseMask_1;
    tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp13_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp14_and)));
    y = tmp$ret$9;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 2 | 0;
      x = y;
    }
    var tmp$ret$11;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$10;
    // Inline function 'kotlin.ULong.shl' call
    var tmp15_shl = x;
    tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_shl).shl_po5ip6_k$(1));
    var tmp16_and = tmp$ret$10;
    var tmp17_and = this.baseMask_1;
    tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp17_and)));
    y = tmp$ret$11;
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      return n - 2 | 0;
    }
    var tmp = n;
    var tmp$ret$12;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp18_toInt = x;
    tmp$ret$12 = _ULong___get_data__impl__fggpzb(tmp18_toInt).toInt_1tsl84_k$();
    return tmp - tmp$ret$12 | 0;
  };
  BigInteger63Arithmetic.prototype.bitLength_1nuydl_k$ = function (value) {
    if (isZero(value, this)) {
      return 0;
    }
    var start = (_ULongArray___get_size__impl__ju6dtr(value) - this.countLeadingZeroWords_3y4bmo_k$(value) | 0) - 1 | 0;
    var mostSignificant = ULongArray__get_impl_pr71q9(value, start);
    return this.bitLength_maytgw_k$(mostSignificant) + imul(start, 63) | 0;
  };
  BigInteger63Arithmetic.prototype.bitLengthFor64BitArray_ibba3u_k$ = function (value) {
    if (isZero(value, this)) {
      return 0;
    }
    var mostSignificant = ULongArray__get_impl_pr71q9(value, _ULongArray___get_size__impl__ju6dtr(value) - 1 | 0);
    return this.bitLengthFor64BitWord_hyqm3k_k$(mostSignificant) + imul(_ULongArray___get_size__impl__ju6dtr(value) - 1 | 0, 64) | 0;
  };
  BigInteger63Arithmetic.prototype.bitLength_maytgw_k$ = function (value) {
    return 63 - this.numberOfLeadingZerosInAWord_3s80te_k$(value) | 0;
  };
  BigInteger63Arithmetic.prototype.bitLengthFor64BitWord_hyqm3k_k$ = function (value) {
    return 64 - this.numberOfLeadingZeroesInA64BitWord_a16uc6_k$(value) | 0;
  };
  BigInteger63Arithmetic.prototype.trailingZeroBits_86u4kn_k$ = function (value) {
    return this.numberOfTrailingZerosInAWord_majgcs_k$(value);
  };
  BigInteger63Arithmetic.prototype.trailingZeroBits_21kjuo_k$ = function (value) {
    if (isZero(value, this)) {
      return 0;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.count' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.takeWhile' call
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = ULongArray__iterator_impl_cq4d2h(value);
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.trailingZeroBits.<anonymous>' call
      tmp$ret$0 = equals(item, _ULong___init__impl__c78o9k(new Long(0, 0)));
      if (!tmp$ret$0)
        break $l$loop;
      list.add_1j60pz_k$(new ULong(item));
    }
    tmp$ret$1 = list;
    var tmp0_count = tmp$ret$1;
    tmp$ret$2 = tmp0_count.get_size_woubt6_k$();
    var zeroWordsCount = tmp$ret$2;
    if (zeroWordsCount === _ULongArray___get_size__impl__ju6dtr(value)) {
      return 0;
    }
    return this.trailingZeroBits_86u4kn_k$(ULongArray__get_impl_pr71q9(value, zeroWordsCount)) + imul(zeroWordsCount, 63) | 0;
  };
  BigInteger63Arithmetic.prototype.removeLeadingZeros_u2w242_k$ = function (bigInteger) {
    var correctedSize = _ULongArray___get_size__impl__ju6dtr(bigInteger) - this.countLeadingZeroWords_3y4bmo_k$(bigInteger) | 0;
    if (correctedSize === 0) {
      return this.ZERO_1;
    }
    if (_ULongArray___get_size__impl__ju6dtr(bigInteger) === correctedSize) {
      return bigInteger;
    }
    if (false ? (_ULongArray___get_size__impl__ju6dtr(bigInteger) - correctedSize | 0) > 1000 : false) {
      println('RLZ original array : ' + _ULongArray___get_size__impl__ju6dtr(bigInteger) + ' contains: ' + ((_ULongArray___get_size__impl__ju6dtr(bigInteger) - correctedSize | 0) - 1 | 0) + ' zeros');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOfRange' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(bigInteger), 0, correctedSize));
    return tmp$ret$0;
  };
  BigInteger63Arithmetic.prototype.countLeadingZeroWords_3y4bmo_k$ = function (bigInteger) {
    var lastNonEmptyIndex = _ULongArray___get_size__impl__ju6dtr(bigInteger) - 1 | 0;
    if (lastNonEmptyIndex <= 0) {
      return 0;
    }
    var element = ULongArray__get_impl_pr71q9(bigInteger, lastNonEmptyIndex);
    while (equals(element, _ULong___init__impl__c78o9k(new Long(0, 0))) ? lastNonEmptyIndex > 0 : false) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
      element = ULongArray__get_impl_pr71q9(bigInteger, lastNonEmptyIndex);
    }
    if (equals(ULongArray__get_impl_pr71q9(bigInteger, lastNonEmptyIndex), _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
    }
    return (_ULongArray___get_size__impl__ju6dtr(bigInteger) - lastNonEmptyIndex | 0) - 1 | 0;
  };
  BigInteger63Arithmetic.prototype.shiftLeft_f3dma3_k$ = function (operand, places) {
    if (isZero(operand, this)) {
      return operand;
    }
    if (places === 0) {
      return operand;
    }
    if (ULongArray__isEmpty_impl_c3yngu(operand)) {
      return this.ZERO_1;
    }
    var leadingZeroWords = this.countLeadingZeroWords_3y4bmo_k$(operand);
    if (_ULongArray___get_size__impl__ju6dtr(operand) === leadingZeroWords) {
      return this.ZERO_1;
    }
    var originalSize = _ULongArray___get_size__impl__ju6dtr(operand) - leadingZeroWords | 0;
    var leadingZeros = this.numberOfLeadingZerosInAWord_3s80te_k$(ULongArray__get_impl_pr71q9(operand, originalSize - 1 | 0));
    var shiftWords = places / this.basePowerOfTwo_1 | 0;
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var tmp;
    if (shiftBits > leadingZeros) {
      tmp = shiftWords + 1 | 0;
    } else {
      tmp = shiftWords;
    }
    var wordsNeeded = tmp;
    if (shiftBits === 0) {
      var tmp$ret$3;
      // Inline function 'kotlin.ULongArray' call
      var tmp0_ULongArray = originalSize + wordsNeeded | 0;
      var tmp_0 = 0;
      var tmp_1 = tmp0_ULongArray;
      var tmp_2 = longArray(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        var tmp$ret$2;
        // Inline function 'kotlin.ULongArray.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.shiftLeft.<anonymous>' call
        var tmp0_subject = tmp_3;
        tmp$ret$0 = (0 <= tmp0_subject ? tmp0_subject < shiftWords : false) ? _ULong___init__impl__c78o9k(new Long(0, 0)) : ULongArray__get_impl_pr71q9(operand, tmp_3 - shiftWords | 0);
        var tmp0_toLong = tmp$ret$0;
        tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$2 = tmp$ret$1;
        tmp_2[tmp_3] = tmp$ret$2;
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_2);
      return tmp$ret$3;
    }
    var tmp$ret$14;
    // Inline function 'kotlin.ULongArray' call
    var tmp1_ULongArray = originalSize + wordsNeeded | 0;
    var tmp_4 = 0;
    var tmp_5 = tmp1_ULongArray;
    var tmp_6 = longArray(tmp_5);
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      var tmp$ret$13;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$12;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$11;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.shiftLeft.<anonymous>' call
      var tmp0_subject_0 = tmp_7;
      var tmp_8;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 < shiftWords : false) {
        tmp_8 = _ULong___init__impl__c78o9k(new Long(0, 0));
      } else {
        if (tmp0_subject_0 === shiftWords) {
          var tmp$ret$5;
          // Inline function 'kotlin.ULong.and' call
          var tmp$ret$4;
          // Inline function 'kotlin.ULong.shl' call
          var tmp0_shl = ULongArray__get_impl_pr71q9(operand, tmp_7 - shiftWords | 0);
          tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).shl_po5ip6_k$(shiftBits));
          var tmp1_and = tmp$ret$4;
          var tmp2_and = BigInteger63Arithmetic_getInstance().baseMask_1;
          tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
          tmp_8 = tmp$ret$5;
        } else {
          var containsLower = shiftWords + 1 | 0;
          if (tmp0_subject_0 < (originalSize + shiftWords | 0) ? containsLower <= tmp0_subject_0 : false) {
            var tmp$ret$9;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$7;
            // Inline function 'kotlin.ULong.and' call
            var tmp$ret$6;
            // Inline function 'kotlin.ULong.shl' call
            var tmp3_shl = ULongArray__get_impl_pr71q9(operand, tmp_7 - shiftWords | 0);
            tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_shl).shl_po5ip6_k$(shiftBits));
            var tmp4_and = tmp$ret$6;
            var tmp5_and = BigInteger63Arithmetic_getInstance().baseMask_1;
            tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp5_and)));
            var tmp8_or = tmp$ret$7;
            var tmp$ret$8;
            // Inline function 'kotlin.ULong.shr' call
            var tmp6_shr = ULongArray__get_impl_pr71q9(operand, (tmp_7 - shiftWords | 0) - 1 | 0);
            var tmp7_shr = BigInteger63Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
            tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_shr).ushr_rr8rvr_k$(tmp7_shr));
            var tmp9_or = tmp$ret$8;
            tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp9_or)));
            tmp_8 = tmp$ret$9;
          } else {
            if (tmp0_subject_0 === ((originalSize + wordsNeeded | 0) - 1 | 0)) {
              var tmp$ret$10;
              // Inline function 'kotlin.ULong.shr' call
              var tmp10_shr = ULongArray__get_impl_pr71q9(operand, tmp_7 - wordsNeeded | 0);
              var tmp11_shr = BigInteger63Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
              tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_shr).ushr_rr8rvr_k$(tmp11_shr));
              tmp_8 = tmp$ret$10;
            } else {
              throw RuntimeException_init_$Create$('Invalid case ' + tmp_7);
            }
          }
        }
      }
      tmp$ret$11 = tmp_8;
      var tmp0_toLong_0 = tmp$ret$11;
      tmp$ret$12 = _ULong___get_data__impl__fggpzb(tmp0_toLong_0);
      tmp$ret$13 = tmp$ret$12;
      tmp_6[tmp_7] = tmp$ret$13;
      tmp_4 = tmp_4 + 1 | 0;
    }
    tmp$ret$14 = _ULongArray___init__impl__twm1l3(tmp_6);
    return tmp$ret$14;
  };
  BigInteger63Arithmetic.prototype.shiftRight_tbmvgc_k$ = function (operand, places) {
    if (ULongArray__isEmpty_impl_c3yngu(operand) ? true : places === 0) {
      return operand;
    }
    var leadingZeroWords = this.countLeadingZeroWords_3y4bmo_k$(operand);
    var realOperandSize = _ULongArray___get_size__impl__ju6dtr(operand) - leadingZeroWords | 0;
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var wordsToDiscard = places / this.basePowerOfTwo_1 | 0;
    if (wordsToDiscard >= realOperandSize) {
      return this.ZERO_1;
    }
    if (shiftBits === 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOfRange' call
      var tmp0_copyOfRange = realOperandSize - wordsToDiscard | 0;
      tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), tmp0_copyOfRange, realOperandSize));
    }
    if (realOperandSize > 1 ? (realOperandSize - wordsToDiscard | 0) === 1 : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = ULongArray__get_impl_pr71q9(operand, realOperandSize - 1 | 0);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(shiftBits));
      var tmp2_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
      tmp$ret$2 = tmp2_ulongArrayOf;
      return tmp$ret$2;
    }
    var newLength = realOperandSize - wordsToDiscard | 0;
    if (newLength === 0) {
      return this.ZERO_1;
    }
    var tmp$ret$11;
    // Inline function 'kotlin.ULongArray' call
    var tmp3_ULongArray = realOperandSize - wordsToDiscard | 0;
    var tmp = 0;
    var tmp_0 = tmp3_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$10;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$9;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$8;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.shiftRight.<anonymous>' call
      var tmp0_subject = tmp_2;
      var tmp_3;
      if (0 <= tmp0_subject ? tmp0_subject < ((realOperandSize - 1 | 0) - wordsToDiscard | 0) : false) {
        var tmp$ret$6;
        // Inline function 'kotlin.ULong.or' call
        var tmp$ret$3;
        // Inline function 'kotlin.ULong.shr' call
        var tmp0_shr = ULongArray__get_impl_pr71q9(operand, tmp_2 + wordsToDiscard | 0);
        tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(shiftBits));
        var tmp5_or = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.ULong.and' call
        var tmp$ret$4;
        // Inline function 'kotlin.ULong.shl' call
        var tmp1_shl = ULongArray__get_impl_pr71q9(operand, (tmp_2 + wordsToDiscard | 0) + 1 | 0);
        var tmp2_shl = BigInteger63Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
        tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).shl_po5ip6_k$(tmp2_shl));
        var tmp3_and = tmp$ret$4;
        var tmp4_and = BigInteger63Arithmetic_getInstance().baseMask_1;
        tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp4_and)));
        var tmp6_or = tmp$ret$5;
        tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp6_or)));
        tmp_3 = tmp$ret$6;
      } else if (tmp0_subject === ((realOperandSize - 1 | 0) - wordsToDiscard | 0)) {
        var tmp$ret$7;
        // Inline function 'kotlin.ULong.shr' call
        var tmp7_shr = ULongArray__get_impl_pr71q9(operand, tmp_2 + wordsToDiscard | 0);
        tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_shr).ushr_rr8rvr_k$(shiftBits));
        tmp_3 = tmp$ret$7;
      } else {
        throw RuntimeException_init_$Create$('Invalid case ' + tmp_2);
      }
      tmp$ret$8 = tmp_3;
      var tmp0_toLong = tmp$ret$8;
      tmp$ret$9 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$10 = tmp$ret$9;
      tmp_1[tmp_2] = tmp$ret$10;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$11 = _ULongArray___init__impl__twm1l3(tmp_1);
    var result = tmp$ret$11;
    return result;
  };
  BigInteger63Arithmetic.prototype.compareWithStartIndexes_14iukr_k$ = function (first, second, firstStart, secondStart) {
    if (firstStart > secondStart) {
      return 1;
    }
    if (secondStart > firstStart) {
      return -1;
    }
    var counter = firstStart - 1 | 0;
    var firstIsLarger = false;
    var bothAreEqual = true;
    $l$loop_0: while (counter >= 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.compareTo' call
      var tmp0_compareTo = ULongArray__get_impl_pr71q9(first, counter);
      var tmp1_compareTo = ULongArray__get_impl_pr71q9(second, counter);
      tmp$ret$0 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_compareTo), _ULong___get_data__impl__fggpzb(tmp1_compareTo));
      if (tmp$ret$0 > 0) {
        firstIsLarger = true;
        bothAreEqual = false;
        break $l$loop_0;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.compareTo' call
      var tmp2_compareTo = ULongArray__get_impl_pr71q9(first, counter);
      var tmp3_compareTo = ULongArray__get_impl_pr71q9(second, counter);
      tmp$ret$1 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp2_compareTo), _ULong___get_data__impl__fggpzb(tmp3_compareTo));
      if (tmp$ret$1 < 0) {
        firstIsLarger = false;
        bothAreEqual = false;
        break $l$loop_0;
      }
      var tmp0 = counter;
      counter = tmp0 - 1 | 0;
    }
    if (bothAreEqual) {
      return 0;
    }
    if (firstIsLarger) {
      return 1;
    } else {
      return -1;
    }
  };
  BigInteger63Arithmetic.prototype.compare_h3oy0f_k$ = function (first, second) {
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    return this.compareWithStartIndexes_14iukr_k$(first, second, firstStart, secondStart);
  };
  BigInteger63Arithmetic.prototype.numberOfDecimalDigits_1abcfh_k$ = function (operand) {
    var bitLenght = this.bitLength_1nuydl_k$(operand);
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = (bitLenght - 1 | 0) * Companion_getInstance_6().LOG_10_OF_2__1;
    tmp$ret$0 = Math.ceil(tmp0_ceil);
    var minDigit = tmp$ret$0;
    var tmp = this.div_j6cgqm_k$(operand, this.pow_itc3bp_k$(this.TEN_1, numberToLong(minDigit)));
    var counter = new Long(0, 0);
    while (!(this.compare_h3oy0f_k$(tmp, this.ZERO_1) === 0)) {
      tmp = this.div_j6cgqm_k$(tmp, this.TEN_1);
      var tmp0 = counter;
      counter = tmp0.inc_28ke_k$();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp1_plus = counter;
    var tmp2_plus = numberToInt(minDigit);
    tmp$ret$1 = tmp1_plus.plus_u6jwas_k$(toLong(tmp2_plus));
    return tmp$ret$1;
  };
  BigInteger63Arithmetic.prototype.baseAddIntoArray_rey7j7_k$ = function (resultArray, resultArrayStart, first, second) {
    if (isZero(first, this)) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = _ULongArray___get_size__impl__ju6dtr(first);
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto_0 = _ULongArray___get_storage__impl__28e64j(first);
      var tmp1_copyInto = _ULongArray___get_storage__impl__28e64j(resultArray);
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyInto_0;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_copyInto;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, resultArrayStart, 0, tmp0_copyInto);
      tmp$ret$4 = tmp1_copyInto;
      tmp$ret$5 = resultArray;
      return Unit_getInstance();
    }
    if (isZero(second, this)) {
      var tmp$ret$11;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto_0 = _ULongArray___get_size__impl__ju6dtr(second);
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto_1 = _ULongArray___get_storage__impl__28e64j(second);
      var tmp1_copyInto_1 = _ULongArray___get_storage__impl__28e64j(resultArray);
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp0_copyInto_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_0 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = tmp1_copyInto_1;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_0, tmp$ret$9, resultArrayStart, 0, tmp1_copyInto_0);
      tmp$ret$10 = tmp1_copyInto_1;
      tmp$ret$11 = resultArray;
      return Unit_getInstance();
    }
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    var tmp_1;
    if (firstStart > secondStart) {
      tmp_1 = new Sextuple(_ULongArray___get_size__impl__ju6dtr(first), _ULongArray___get_size__impl__ju6dtr(second), new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp_1 = new Sextuple(_ULongArray___get_size__impl__ju6dtr(second), _ULongArray___get_size__impl__ju6dtr(first), new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp_1;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var largerStart = tmp0_container.component5_7eebs8_k$();
    var smallerStart = tmp0_container.component6_7eebs7_k$();
    var i = 0;
    var sum = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerStart) {
      var tmp$ret$13;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$12;
      // Inline function 'kotlin.ULong.plus' call
      var tmp2_plus = sum;
      var tmp3_plus = ULongArray__get_impl_pr71q9(largerData, i);
      tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp3_plus)));
      var tmp4_plus = tmp$ret$12;
      var tmp5_plus = ULongArray__get_impl_pr71q9(smallerData, i);
      tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp5_plus)));
      sum = tmp$ret$13;
      var tmp_2 = i + resultArrayStart | 0;
      var tmp$ret$14;
      // Inline function 'kotlin.ULong.and' call
      var tmp6_and = sum;
      var tmp7_and = this.baseMask_1;
      tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp7_and)));
      ULongArray__set_impl_z19mvh(resultArray, tmp_2, tmp$ret$14);
      var tmp$ret$15;
      // Inline function 'kotlin.ULong.shr' call
      var tmp8_shr = sum;
      tmp$ret$15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shr).ushr_rr8rvr_k$(63));
      sum = tmp$ret$15;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    while (true) {
      if (equals(sum, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
        while (i < largerStart) {
          ULongArray__set_impl_z19mvh(resultArray, i + resultArrayStart | 0, ULongArray__get_impl_pr71q9(largerData, i));
          var tmp2 = i;
          i = tmp2 + 1 | 0;
        }
        return Unit_getInstance();
      }
      if (i === largerLength) {
        ULongArray__set_impl_z19mvh(resultArray, largerLength + resultArrayStart | 0, sum);
        return Unit_getInstance();
      }
      var tmp$ret$16;
      // Inline function 'kotlin.ULong.plus' call
      var tmp9_plus = sum;
      var tmp10_plus = ULongArray__get_impl_pr71q9(largerData, i);
      tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp10_plus)));
      sum = tmp$ret$16;
      var tmp_3 = i;
      var tmp$ret$17;
      // Inline function 'kotlin.ULong.and' call
      var tmp11_and = sum;
      var tmp12_and = this.baseMask_1;
      tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp12_and)));
      ULongArray__set_impl_z19mvh(resultArray, tmp_3, tmp$ret$17);
      var tmp$ret$18;
      // Inline function 'kotlin.ULong.shr' call
      var tmp13_shr = sum;
      tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp13_shr).ushr_rr8rvr_k$(63));
      sum = tmp$ret$18;
      var tmp3 = i;
      i = tmp3 + 1 | 0;
    }
  };
  BigInteger63Arithmetic.prototype.add_kdhu68_k$ = function (first, second) {
    if (isZero(first, this))
      return second;
    if (isZero(second, this))
      return first;
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    var tmp;
    if (firstStart > secondStart) {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(first), _ULongArray___get_size__impl__ju6dtr(second), new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(second), _ULongArray___get_size__impl__ju6dtr(first), new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var largerStart = tmp0_container.component5_7eebs8_k$();
    var smallerStart = tmp0_container.component6_7eebs7_k$();
    var tmp$ret$2;
    // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.possibleAdditionOverflow' call
    var firstMostSignificant = ULongArray__get_impl_pr71q9(largerData, largerStart - 1 | 0);
    var secondMostSignificant = ULongArray__get_impl_pr71q9(smallerData, smallerStart - 1 | 0);
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = firstMostSignificant;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, 1610612736)))));
    if (!equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.and' call
      var tmp1_and = secondMostSignificant;
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, 1610612736)))));
      tmp_0 = !equals(tmp$ret$1, _ULong___init__impl__c78o9k(new Long(0, 0)));
    }
    var possibleOverflow = tmp_0;
    tmp$ret$2 = possibleOverflow;
    var possibleOverflow_0 = tmp$ret$2;
    var tmp_1;
    if (possibleOverflow_0) {
      var tmp$ret$6;
      // Inline function 'kotlin.ULongArray' call
      var tmp2_ULongArray = largerLength + 1 | 0;
      var tmp_2 = 0;
      var tmp_3 = tmp2_ULongArray;
      var tmp_4 = longArray(tmp_3);
      while (tmp_2 < tmp_3) {
        var tmp_5 = tmp_2;
        var tmp$ret$5;
        // Inline function 'kotlin.ULongArray.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp$ret$3;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.add.<anonymous>' call
        tmp$ret$3 = _ULong___init__impl__c78o9k(new Long(0, 0));
        var tmp0_toLong = tmp$ret$3;
        tmp$ret$4 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$5 = tmp$ret$4;
        tmp_4[tmp_5] = tmp$ret$5;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp$ret$6 = _ULongArray___init__impl__twm1l3(tmp_4);
      tmp_1 = tmp$ret$6;
    } else {
      var tmp$ret$10;
      // Inline function 'kotlin.ULongArray' call
      var tmp_6 = 0;
      var tmp_7 = largerLength;
      var tmp_8 = longArray(tmp_7);
      while (tmp_6 < tmp_7) {
        var tmp_9 = tmp_6;
        var tmp$ret$9;
        // Inline function 'kotlin.ULongArray.<anonymous>' call
        var tmp$ret$8;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp$ret$7;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.add.<anonymous>' call
        tmp$ret$7 = _ULong___init__impl__c78o9k(new Long(0, 0));
        var tmp0_toLong_0 = tmp$ret$7;
        tmp$ret$8 = _ULong___get_data__impl__fggpzb(tmp0_toLong_0);
        tmp$ret$9 = tmp$ret$8;
        tmp_8[tmp_9] = tmp$ret$9;
        tmp_6 = tmp_6 + 1 | 0;
      }
      tmp$ret$10 = _ULongArray___init__impl__twm1l3(tmp_8);
      tmp_1 = tmp$ret$10;
    }
    var result = tmp_1;
    this.baseAddIntoArray_rey7j7_k$(result, 0, first, second);
    var tmp_10;
    if (possibleOverflow_0) {
      tmp_10 = this.removeLeadingZeros_u2w242_k$(result);
    } else {
      tmp_10 = result;
    }
    return tmp_10;
  };
  BigInteger63Arithmetic.prototype.oldAdd_9qyhuv_k$ = function (first, second) {
    if (isZero(first, this))
      return second;
    if (isZero(second, this))
      return first;
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    var tmp;
    if (firstStart > secondStart) {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(first), _ULongArray___get_size__impl__ju6dtr(second), new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(second), _ULongArray___get_size__impl__ju6dtr(first), new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var largerStart = tmp0_container.component5_7eebs8_k$();
    var smallerStart = tmp0_container.component6_7eebs7_k$();
    var tmp$ret$3;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = largerStart + 1 | 0;
    var tmp_0 = 0;
    var tmp_1 = tmp0_ULongArray;
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.oldAdd.<anonymous>' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(new Long(0, 0));
      var tmp0_toLong = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$2 = tmp$ret$1;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_2);
    var result = tmp$ret$3;
    var i = 0;
    var sum = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerStart) {
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.plus' call
      var tmp1_plus = sum;
      var tmp2_plus = ULongArray__get_impl_pr71q9(largerData, i);
      tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp2_plus)));
      var tmp3_plus = tmp$ret$4;
      var tmp4_plus = ULongArray__get_impl_pr71q9(smallerData, i);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp4_plus)));
      sum = tmp$ret$5;
      var tmp_4 = i;
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp5_and = sum;
      var tmp6_and = this.baseMask_1;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp6_and)));
      ULongArray__set_impl_z19mvh(result, tmp_4, tmp$ret$6);
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.shr' call
      var tmp7_shr = sum;
      tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_shr).ushr_rr8rvr_k$(63));
      sum = tmp$ret$7;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    while (true) {
      if (equals(sum, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
        while (i < largerStart) {
          ULongArray__set_impl_z19mvh(result, i, ULongArray__get_impl_pr71q9(largerData, i));
          var tmp2 = i;
          i = tmp2 + 1 | 0;
        }
        var tmp_5;
        if (equals(ULongArray__get_impl_pr71q9(result, _ULongArray___get_size__impl__ju6dtr(result) - 1 | 0), _ULong___init__impl__c78o9k(new Long(0, 0)))) {
          if ((_ULongArray___get_size__impl__ju6dtr(result) - 1 | 0) === 0) {
            return this.ZERO_1;
          }
          var tmp$ret$8;
          // Inline function 'kotlin.collections.copyOfRange' call
          var tmp8_copyOfRange = _ULongArray___get_size__impl__ju6dtr(result) - 1 | 0;
          tmp$ret$8 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(result), 0, tmp8_copyOfRange));
          tmp_5 = tmp$ret$8;
        } else {
          tmp_5 = result;
        }
        var final = tmp_5;
        return final;
      }
      if (i === largerLength) {
        ULongArray__set_impl_z19mvh(result, largerLength, sum);
        return result;
      }
      var tmp$ret$9;
      // Inline function 'kotlin.ULong.plus' call
      var tmp9_plus = sum;
      var tmp10_plus = ULongArray__get_impl_pr71q9(largerData, i);
      tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp10_plus)));
      sum = tmp$ret$9;
      var tmp_6 = i;
      var tmp$ret$10;
      // Inline function 'kotlin.ULong.and' call
      var tmp11_and = sum;
      var tmp12_and = this.baseMask_1;
      tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp12_and)));
      ULongArray__set_impl_z19mvh(result, tmp_6, tmp$ret$10);
      var tmp$ret$11;
      // Inline function 'kotlin.ULong.shr' call
      var tmp13_shr = sum;
      tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp13_shr).ushr_rr8rvr_k$(63));
      sum = tmp$ret$11;
      var tmp3 = i;
      i = tmp3 + 1 | 0;
    }
  };
  BigInteger63Arithmetic.prototype.subtractWithStartIndexes_me7z9z_k$ = function (first, second, firstStart, secondStart) {
    var comparison = this.compareWithStartIndexes_14iukr_k$(first, second, firstStart, secondStart);
    var firstSize = firstStart + 1 | 0;
    var secondSize = secondStart + 1 | 0;
    var firstIsLarger = comparison === 1;
    if (comparison === 0)
      return this.ZERO_1;
    if (secondSize === 1 ? equals(ULongArray__get_impl_pr71q9(second, 0), _ULong___init__impl__c78o9k(new Long(0, 0))) : false) {
      return first;
    }
    if (!firstIsLarger) {
      throw RuntimeException_init_$Create$('subtract result less than zero');
    }
    var tmp;
    if (firstIsLarger) {
      tmp = new Quadruple(new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp = new Quadruple(new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp;
    var largerData = tmp0_container.component1_7eebsc_k$().storage_1;
    var smallerData = tmp0_container.component2_7eebsb_k$().storage_1;
    var largerStart = tmp0_container.component3_7eebsa_k$();
    var smallerStart = tmp0_container.component4_7eebs9_k$();
    var tmp$ret$3;
    // Inline function 'kotlin.ULongArray' call
    var tmp_0 = 0;
    var tmp_1 = largerStart;
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.subtractWithStartIndexes.<anonymous>' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(new Long(0, 0));
      var tmp0_toLong = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$2 = tmp$ret$1;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_2);
    var result = tmp$ret$3;
    var i = 0;
    var diff = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerStart) {
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.minus' call
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.minus' call
      var tmp0_minus = ULongArray__get_impl_pr71q9(largerData, i);
      var tmp1_minus = ULongArray__get_impl_pr71q9(smallerData, i);
      tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp1_minus)));
      var tmp2_minus = tmp$ret$4;
      var tmp3_minus = diff;
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp3_minus)));
      diff = tmp$ret$5;
      var tmp_4 = i;
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp4_and = diff;
      var tmp5_and = this.baseMask_1;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp5_and)));
      ULongArray__set_impl_z19mvh(result, tmp_4, tmp$ret$6);
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.shr' call
      var tmp6_shr = diff;
      tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_shr).ushr_rr8rvr_k$(63));
      diff = tmp$ret$7;
      var tmp1 = i;
      i = tmp1 + 1 | 0;
    }
    while (!equals(diff, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.minus' call
      var tmp7_minus = ULongArray__get_impl_pr71q9(largerData, i);
      var tmp8_minus = diff;
      tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp8_minus)));
      diff = tmp$ret$8;
      var tmp_5 = i;
      var tmp$ret$9;
      // Inline function 'kotlin.ULong.and' call
      var tmp9_and = diff;
      var tmp10_and = this.baseMask_1;
      tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp10_and)));
      ULongArray__set_impl_z19mvh(result, tmp_5, tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.ULong.shr' call
      var tmp11_shr = diff;
      tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shr).ushr_rr8rvr_k$(63));
      diff = tmp$ret$10;
      var tmp2 = i;
      i = tmp2 + 1 | 0;
    }
    while (i < largerStart) {
      ULongArray__set_impl_z19mvh(result, i, ULongArray__get_impl_pr71q9(largerData, i));
      var tmp3 = i;
      i = tmp3 + 1 | 0;
    }
    if (this.countLeadingZeroWords_3y4bmo_k$(result) === (_ULongArray___get_size__impl__ju6dtr(result) - 1 | 0) ? equals(ULongArray__get_impl_pr71q9(result, 0), _ULong___init__impl__c78o9k(new Long(0, 0))) : false) {
      return this.ZERO_1;
    }
    return this.removeLeadingZeros_u2w242_k$(result);
  };
  BigInteger63Arithmetic.prototype.subtract_jhqa8d_k$ = function (first, second) {
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    return this.subtractWithStartIndexes_me7z9z_k$(first, second, firstStart, secondStart);
  };
  BigInteger63Arithmetic.prototype.multiply_u6tj2b_k$ = function (first, second) {
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondCorrectedSize = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    return multiplyWithCorrectedSize(this, first, second, firstCorrectedSize, secondCorrectedSize);
  };
  BigInteger63Arithmetic.prototype.basecaseMultiply_hznqjo_k$ = function (first, second) {
    var firstCorrectedSizeStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    var secondCorrectedSizeStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_3y4bmo_k$(second) | 0;
    return basecaseMultiplyWithCorrectedSize(this, first, second, firstCorrectedSizeStart, secondCorrectedSizeStart);
  };
  BigInteger63Arithmetic.prototype.combaMultiply_u4u1gf_k$ = function (first, second) {
  };
  BigInteger63Arithmetic.prototype.karatsubaMultiply_kzjdkd_k$ = function (firstUnsigned, secondUnsigned) {
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(firstUnsigned) - this.countLeadingZeroWords_3y4bmo_k$(firstUnsigned) | 0;
    var secondCorrectedSize = _ULongArray___get_size__impl__ju6dtr(secondUnsigned) - this.countLeadingZeroWords_3y4bmo_k$(secondUnsigned) | 0;
    return karatsubaMultiplyWithCorrectedSizes(this, firstUnsigned, secondUnsigned, firstCorrectedSize, secondCorrectedSize);
  };
  BigInteger63Arithmetic.prototype.prependULongArray_sfjs0v_k$ = function (original, numberOfWords, value) {
    var tmp$ret$3;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = _ULongArray___get_size__impl__ju6dtr(original) + numberOfWords | 0;
    var tmp = 0;
    var tmp_0 = tmp0_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.prependULongArray.<anonymous>' call
      tmp$ret$0 = tmp_2 < numberOfWords ? value : ULongArray__get_impl_pr71q9(original, tmp_2 - numberOfWords | 0);
      var tmp0_toLong = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$2 = tmp$ret$1;
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_1);
    return tmp$ret$3;
  };
  BigInteger63Arithmetic.prototype.extendULongArray_339uct_k$ = function (original, numberOfWords, value) {
    var tmp$ret$3;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = _ULongArray___get_size__impl__ju6dtr(original) + numberOfWords | 0;
    var tmp = 0;
    var tmp_0 = tmp0_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.extendULongArray.<anonymous>' call
      tmp$ret$0 = tmp_2 < _ULongArray___get_size__impl__ju6dtr(original) ? ULongArray__get_impl_pr71q9(original, tmp_2) : value;
      var tmp0_toLong = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$2 = tmp$ret$1;
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_1);
    return tmp$ret$3;
  };
  BigInteger63Arithmetic.prototype.toomCook3Multiply_jbscej_k$ = function (firstUnchecked, secondUnchecked) {
    var tmp;
    if (!((_ULongArray___get_size__impl__ju6dtr(firstUnchecked) % 3 | 0) === 0)) {
      var tmp_0 = new ULongArray(firstUnchecked);
      var tmp$ret$4;
      // Inline function 'kotlin.collections.asIterable' call
      var tmp$ret$3;
      // Inline function 'kotlin.ULongArray' call
      var tmp0_ULongArray = imul((_ULongArray___get_size__impl__ju6dtr(firstUnchecked) + 2 | 0) / 3 | 0, 3) - _ULongArray___get_size__impl__ju6dtr(firstUnchecked) | 0;
      var tmp_1 = 0;
      var tmp_2 = tmp0_ULongArray;
      var tmp_3 = longArray(tmp_2);
      while (tmp_1 < tmp_2) {
        var tmp_4 = tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.ULongArray.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp$ret$0;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.toomCook3Multiply.<anonymous>' call
        tmp$ret$0 = _ULong___init__impl__c78o9k(new Long(0, 0));
        var tmp0_toLong = tmp$ret$0;
        tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$2 = tmp$ret$1;
        tmp_3[tmp_4] = tmp$ret$2;
        tmp_1 = tmp_1 + 1 | 0;
      }
      tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_3);
      var tmp1_asIterable = tmp$ret$3;
      tmp$ret$4 = new ULongArray(tmp1_asIterable);
      tmp = plus(tmp_0, tmp$ret$4);
    } else {
      tmp = new ULongArray(firstUnchecked);
    }
    var first = toULongArray(tmp);
    var tmp_5;
    if (!((_ULongArray___get_size__impl__ju6dtr(secondUnchecked) % 3 | 0) === 0)) {
      var tmp_6 = new ULongArray(secondUnchecked);
      var tmp$ret$9;
      // Inline function 'kotlin.collections.asIterable' call
      var tmp$ret$8;
      // Inline function 'kotlin.ULongArray' call
      var tmp2_ULongArray = imul((_ULongArray___get_size__impl__ju6dtr(secondUnchecked) + 2 | 0) / 3 | 0, 3) - _ULongArray___get_size__impl__ju6dtr(secondUnchecked) | 0;
      var tmp_7 = 0;
      var tmp_8 = tmp2_ULongArray;
      var tmp_9 = longArray(tmp_8);
      while (tmp_7 < tmp_8) {
        var tmp_10 = tmp_7;
        var tmp$ret$7;
        // Inline function 'kotlin.ULongArray.<anonymous>' call
        var tmp$ret$6;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp$ret$5;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.toomCook3Multiply.<anonymous>' call
        tmp$ret$5 = _ULong___init__impl__c78o9k(new Long(0, 0));
        var tmp0_toLong_0 = tmp$ret$5;
        tmp$ret$6 = _ULong___get_data__impl__fggpzb(tmp0_toLong_0);
        tmp$ret$7 = tmp$ret$6;
        tmp_9[tmp_10] = tmp$ret$7;
        tmp_7 = tmp_7 + 1 | 0;
      }
      tmp$ret$8 = _ULongArray___init__impl__twm1l3(tmp_9);
      var tmp3_asIterable = tmp$ret$8;
      tmp$ret$9 = new ULongArray(tmp3_asIterable);
      tmp_5 = plus(tmp_6, tmp$ret$9);
    } else {
      tmp_5 = new ULongArray(secondUnchecked);
    }
    var second = toULongArray(tmp_5);
    var firstLength = _ULongArray___get_size__impl__ju6dtr(first);
    var secondLength = _ULongArray___get_size__impl__ju6dtr(second);
    var tmp_11;
    if (firstLength > secondLength) {
      var prepared = this.extendULongArray_339uct_k$(second, firstLength - secondLength | 0, _ULong___init__impl__c78o9k(new Long(0, 0)));
      tmp_11 = new Pair(new ULongArray(first), new ULongArray(prepared));
    } else if (firstLength < secondLength) {
      var prepared_0 = this.extendULongArray_339uct_k$(first, secondLength - firstLength | 0, _ULong___init__impl__c78o9k(new Long(0, 0)));
      tmp_11 = new Pair(new ULongArray(prepared_0), new ULongArray(second));
    } else {
      tmp_11 = new Pair(new ULongArray(first), new ULongArray(second));
    }
    var tmp0_container = tmp_11;
    var firstPrepared = tmp0_container.component1_7eebsc_k$().storage_1;
    var secondPrepared = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp$ret$10;
    // Inline function 'kotlin.math.max' call
    var tmp4_max = _ULongArray___get_size__impl__ju6dtr(first);
    var tmp5_max = _ULongArray___get_size__impl__ju6dtr(second);
    tmp$ret$10 = Math.max(tmp4_max, tmp5_max);
    var longestLength = tmp$ret$10;
    var extendedDigit = (longestLength + 2 | 0) / 3 | 0;
    var m0 = new SignedULongArray(toULongArray(slice_0(firstPrepared, until(0, extendedDigit))), true);
    var m1 = new SignedULongArray(toULongArray(slice_0(firstPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var m2 = new SignedULongArray(toULongArray(slice_0(firstPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var n0 = new SignedULongArray(toULongArray(slice_0(secondPrepared, until(0, extendedDigit))), true);
    var n1 = new SignedULongArray(toULongArray(slice_0(secondPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var n2 = new SignedULongArray(toULongArray(slice_0(secondPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var p0 = this.plus_u2j0gs_k$(m0, m2);
    var pe0 = m0;
    var pe1 = this.plus_u2j0gs_k$(p0, m1);
    var pem1 = this.minus_j3qgna_k$(p0, m1);
    var doublePemM2 = this.times_euzddc_k$(this.plus_u2j0gs_k$(pem1, m2), this.SIGNED_POSITIVE_TWO_1);
    var pem2 = this.minus_j3qgna_k$(doublePemM2, m0);
    var pinf = m2;
    var q0 = this.plus_u2j0gs_k$(n0, n2);
    var qe0 = n0;
    var qe1 = this.plus_u2j0gs_k$(q0, n1);
    var qem1 = this.minus_j3qgna_k$(q0, n1);
    var doubleQemN2 = this.times_euzddc_k$(this.plus_u2j0gs_k$(qem1, n2), this.SIGNED_POSITIVE_TWO_1);
    var qem2 = this.minus_j3qgna_k$(doubleQemN2, n0);
    var qinf = n2;
    var re0 = this.times_euzddc_k$(pe0, qe0);
    var re1 = this.times_euzddc_k$(pe1, qe1);
    var rem1 = this.times_euzddc_k$(pem1, qem1);
    var rem2 = this.times_euzddc_k$(pem2, qem2);
    var rinf = this.times_euzddc_k$(pinf, qinf);
    var r0 = re0;
    var r4 = rinf;
    var rem2re1diff = this.minus_j3qgna_k$(rem2, re1);
    var tmp$ret$11;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$11 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(3, 0))]));
    var r3 = this.div_ixpecl_k$(rem2re1diff, new SignedULongArray(tmp$ret$11, true));
    var r1 = this.shr_qnnzs_k$(this.minus_j3qgna_k$(re1, rem1), 1);
    var r2 = this.minus_j3qgna_k$(rem1, r0);
    r3 = this.plus_u2j0gs_k$(this.shr_qnnzs_k$(this.minus_j3qgna_k$(r2, r3), 1), this.times_euzddc_k$(this.SIGNED_POSITIVE_TWO_1, rinf));
    r2 = this.minus_j3qgna_k$(this.plus_u2j0gs_k$(r2, r1), r4);
    r1 = this.minus_j3qgna_k$(r1, r3);
    var bShiftAmount = imul(extendedDigit, 63);
    var rb0 = r0;
    var rb1 = this.shl_u55if2_k$(r1, bShiftAmount);
    var rb2 = this.shl_u55if2_k$(r2, imul(bShiftAmount, 2));
    var rb3 = this.shl_u55if2_k$(r3, imul(bShiftAmount, 3));
    var rb4 = this.shl_u55if2_k$(r4, imul(bShiftAmount, 4));
    var rb = this.plus_u2j0gs_k$(this.plus_u2j0gs_k$(this.plus_u2j0gs_k$(this.plus_u2j0gs_k$(rb0, rb1), rb2), rb3), rb4);
    return rb.unsignedValue_1;
  };
  BigInteger63Arithmetic.prototype.toomCook3WithCorrectedSizes_eerg74_k$ = function (firstUnchecked, secondUnchecked) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: ');
  };
  BigInteger63Arithmetic.prototype.fftMultiply_eny8if_k$ = function (first, second) {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  BigInteger63Arithmetic.prototype.baseMultiply_mf6sff_k$ = function (first, second) {
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_3y4bmo_k$(first) | 0;
    return this.baseMultiplyWithCorrectedSize_26hcve_k$(first, second, firstCorrectedSize);
  };
  BigInteger63Arithmetic.prototype.baseMultiplyIntoArray_ttp2t6_k$ = function (result, resultStart, resultEnd, first, second) {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  BigInteger63Arithmetic.prototype.baseMultiplyWithCorrectedSize_26hcve_k$ = function (first, second, firstCorrectedSize) {
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = this.lowMask_1;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp0_and)));
    var secondLow = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shr' call
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).ushr_rr8rvr_k$(32));
    var secondHigh = tmp$ret$1;
    var requiredBits = this.bitLength_1nuydl_k$(first) + this.bitLength_maytgw_k$(second) | 0;
    var tmp;
    if (!((requiredBits % 63 | 0) === 0)) {
      tmp = (requiredBits / 63 | 0) + 1 | 0;
    } else {
      tmp = requiredBits / 63 | 0;
    }
    var requiredWords = tmp;
    var result = _ULongArray___init__impl__twm1l3_0(requiredWords);
    var carryIntoNextRound = _ULong___init__impl__c78o9k(new Long(0, 0));
    var i = 0;
    var j = 0;
    while (i < firstCorrectedSize) {
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp1_and = ULongArray__get_impl_pr71q9(first, i);
      var tmp2_and = this.lowMask_1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
      var firstLow = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shr' call
      var tmp3_shr = ULongArray__get_impl_pr71q9(first, i);
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_shr).ushr_rr8rvr_k$(32));
      var firstHigh = tmp$ret$3;
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.times' call
      tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(secondLow)));
      var lowerProduct = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).ushr_rr8rvr_k$(63));
      var lowerCarry = tmp$ret$5;
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.plus' call
      var tmp5_plus = carryIntoNextRound;
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp4_and = this.baseMask_1;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp4_and)));
      var tmp6_plus = tmp$ret$6;
      tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp6_plus)));
      var lowResult = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.ULong.plus' call
      var tmp8_plus = lowerCarry;
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.shr' call
      var tmp7_shr = lowResult;
      tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_shr).ushr_rr8rvr_k$(63));
      var tmp9_plus = tmp$ret$8;
      tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp9_plus)));
      lowerCarry = tmp$ret$9;
      var tmp$ret$10;
      // Inline function 'kotlin.ULong.and' call
      var tmp10_and = lowResult;
      var tmp11_and = this.baseMask_1;
      tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp11_and)));
      lowResult = tmp$ret$10;
      var tmp$ret$13;
      // Inline function 'kotlin.ULong.plus' call
      var tmp$ret$11;
      // Inline function 'kotlin.ULong.times' call
      tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
      var tmp12_plus = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.ULong.times' call
      tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(secondLow).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(firstHigh)));
      var tmp13_plus = tmp$ret$12;
      tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp13_plus)));
      var middleProduct = tmp$ret$13;
      var middleCarry = lowerCarry;
      var tmp$ret$15;
      // Inline function 'kotlin.ULong.plus' call
      var tmp14_plus = middleCarry;
      var tmp$ret$14;
      // Inline function 'kotlin.ULong.shr' call
      tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).ushr_rr8rvr_k$(31));
      var tmp15_plus = tmp$ret$14;
      tmp$ret$15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp14_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp15_plus)));
      middleCarry = tmp$ret$15;
      var tmp$ret$18;
      // Inline function 'kotlin.ULong.plus' call
      var tmp18_plus = lowResult;
      var tmp$ret$17;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$16;
      // Inline function 'kotlin.ULong.shl' call
      tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).shl_po5ip6_k$(32));
      var tmp16_and = tmp$ret$16;
      var tmp17_and = this.baseMask_1;
      tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp17_and)));
      var tmp19_plus = tmp$ret$17;
      tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp18_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp19_plus)));
      lowResult = tmp$ret$18;
      var tmp$ret$20;
      // Inline function 'kotlin.ULong.plus' call
      var tmp21_plus = middleCarry;
      var tmp$ret$19;
      // Inline function 'kotlin.ULong.shr' call
      var tmp20_shr = lowResult;
      tmp$ret$19 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shr).ushr_rr8rvr_k$(63));
      var tmp22_plus = tmp$ret$19;
      tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp22_plus)));
      middleCarry = tmp$ret$20;
      var tmp_0 = j;
      var tmp$ret$21;
      // Inline function 'kotlin.ULong.and' call
      var tmp23_and = lowResult;
      var tmp24_and = this.baseMask_1;
      tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp24_and)));
      ULongArray__set_impl_z19mvh(result, tmp_0, tmp$ret$21);
      var highResult = middleCarry;
      var tmp$ret$23;
      // Inline function 'kotlin.ULong.shl' call
      var tmp$ret$22;
      // Inline function 'kotlin.ULong.times' call
      tmp$ret$22 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstHigh).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
      var tmp25_shl = tmp$ret$22;
      tmp$ret$23 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp25_shl).shl_po5ip6_k$(1));
      var higherProduct = tmp$ret$23;
      var tmp$ret$24;
      // Inline function 'kotlin.ULong.plus' call
      var tmp26_plus = highResult;
      tmp$ret$24 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp26_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(higherProduct)));
      highResult = tmp$ret$24;
      carryIntoNextRound = highResult;
      var tmp1 = j;
      j = tmp1 + 1 | 0;
    }
    if (!equals(carryIntoNextRound, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      ULongArray__set_impl_z19mvh(result, j, carryIntoNextRound);
    }
    return result;
  };
  BigInteger63Arithmetic.prototype.multiply_ben03b_k$ = function (first, second) {
    if (equals(first, _ULong___init__impl__c78o9k(new Long(0, 0))) ? true : equals(second, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.ulongArrayOf' call
      tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0))]));
      return tmp$ret$0;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = this.lowMask_1;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(first).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp0_and)));
    var firstLow = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shr' call
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(first).ushr_rr8rvr_k$(32));
    var firstHigh = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.and' call
    var tmp1_and = this.lowMask_1;
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp1_and)));
    var secondLow = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.shr' call
    tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).ushr_rr8rvr_k$(32));
    var secondHigh = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.ULong.times' call
    tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(secondLow)));
    var lowerProduct = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.ULong.shr' call
    tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).ushr_rr8rvr_k$(63));
    var lowCarry = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.ULong.and' call
    var tmp2_and = this.baseMask_1;
    tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
    var lowResult = tmp$ret$7;
    var tmp$ret$10;
    // Inline function 'kotlin.ULong.plus' call
    var tmp$ret$8;
    // Inline function 'kotlin.ULong.times' call
    tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
    var tmp3_plus = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'kotlin.ULong.times' call
    tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(secondLow).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(firstHigh)));
    var tmp4_plus = tmp$ret$9;
    tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp4_plus)));
    var middleProduct = tmp$ret$10;
    var middleCarry = lowCarry;
    var tmp$ret$12;
    // Inline function 'kotlin.ULong.plus' call
    var tmp5_plus = middleCarry;
    var tmp$ret$11;
    // Inline function 'kotlin.ULong.shr' call
    tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).ushr_rr8rvr_k$(31));
    var tmp6_plus = tmp$ret$11;
    tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp6_plus)));
    middleCarry = tmp$ret$12;
    var tmp$ret$15;
    // Inline function 'kotlin.ULong.plus' call
    var tmp9_plus = lowResult;
    var tmp$ret$14;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$13;
    // Inline function 'kotlin.ULong.shl' call
    tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).shl_po5ip6_k$(32));
    var tmp7_and = tmp$ret$13;
    var tmp8_and = this.baseMask_1;
    tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp8_and)));
    var tmp10_plus = tmp$ret$14;
    tmp$ret$15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp10_plus)));
    lowResult = tmp$ret$15;
    var tmp$ret$17;
    // Inline function 'kotlin.ULong.plus' call
    var tmp12_plus = middleCarry;
    var tmp$ret$16;
    // Inline function 'kotlin.ULong.shr' call
    var tmp11_shr = lowResult;
    tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shr).ushr_rr8rvr_k$(63));
    var tmp13_plus = tmp$ret$16;
    tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(tmp13_plus)));
    middleCarry = tmp$ret$17;
    var highResult = middleCarry;
    var tmp$ret$19;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$18;
    // Inline function 'kotlin.ULong.times' call
    tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstHigh).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
    var tmp14_shl = tmp$ret$18;
    tmp$ret$19 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp14_shl).shl_po5ip6_k$(1));
    var higherProduct = tmp$ret$19;
    var tmp$ret$20;
    // Inline function 'kotlin.ULong.plus' call
    var tmp15_plus = highResult;
    tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(higherProduct)));
    highResult = tmp$ret$20;
    var tmp$ret$22;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$21;
    // Inline function 'kotlin.ULong.and' call
    var tmp16_and = lowResult;
    var tmp17_and = this.baseMask_1;
    tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp17_and)));
    var tmp18_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$21, highResult]));
    tmp$ret$22 = tmp18_ulongArrayOf;
    return this.removeLeadingZeros_u2w242_k$(tmp$ret$22);
  };
  BigInteger63Arithmetic.prototype.pow_itc3bp_k$ = function (base, exponent) {
    if (exponent.equals(new Long(0, 0))) {
      return this.ONE_1;
    }
    if (exponent.equals(new Long(1, 0))) {
      return base;
    }
    if ((_ULongArray___get_size__impl__ju6dtr(base) === 1 ? equals(ULongArray__get_impl_pr71q9(base, 0), _ULong___init__impl__c78o9k(new Long(10, 0))) : false) ? exponent.compareTo_n4fqi2_k$(toLong(this.powersOf10__1.length)) < 0 : false) {
      return this.powersOf10__1[exponent.toInt_1tsl84_k$()].storage_1;
    }
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(base) - this.countLeadingZeroWords_3y4bmo_k$(base) | 0;
    var helperVar = this.ONE_1;
    var exponentVar = exponent;
    var baseVar = base;
    while (exponentVar.compareTo_n4fqi2_k$(new Long(1, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.rem' call
      var tmp0_rem = exponentVar;
      tmp$ret$0 = tmp0_rem.rem_9rbcjo_k$(new Long(2, 0));
      if (tmp$ret$0.equals(new Long(0, 0))) {
        baseVar = this.times_s4ejn7_k$(baseVar, baseVar);
        var tmp$ret$1;
        // Inline function 'kotlin.Long.div' call
        var tmp1_div = exponentVar;
        tmp$ret$1 = tmp1_div.div_9s1fi3_k$(new Long(2, 0));
        exponentVar = tmp$ret$1;
      } else {
        helperVar = this.times_s4ejn7_k$(baseVar, helperVar);
        baseVar = this.times_s4ejn7_k$(baseVar, baseVar);
        var tmp$ret$3;
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        var tmp2_minus = exponentVar;
        tmp$ret$2 = tmp2_minus.minus_llf5ei_k$(new Long(1, 0));
        var tmp3_div = tmp$ret$2;
        tmp$ret$3 = tmp3_div.div_9s1fi3_k$(new Long(2, 0));
        exponentVar = tmp$ret$3;
      }
    }
    return this.times_s4ejn7_k$(helperVar, baseVar);
  };
  BigInteger63Arithmetic.prototype.normalize_wwwc1l_k$ = function (dividend, divisor) {
    var divisorSize = _ULongArray___get_size__impl__ju6dtr(divisor);
    var normalizationShift = this.numberOfLeadingZerosInAWord_3s80te_k$(ULongArray__get_impl_pr71q9(divisor, divisorSize - 1 | 0));
    var divisorNormalized = this.shl_2fq1k7_k$(divisor, normalizationShift);
    var dividendNormalized = this.shl_2fq1k7_k$(dividend, normalizationShift);
    return new Triple(new ULongArray(dividendNormalized), new ULongArray(divisorNormalized), normalizationShift);
  };
  BigInteger63Arithmetic.prototype.normalize_80hkn7_k$ = function (operand) {
    var normalizationShift = this.numberOfLeadingZerosInAWord_3s80te_k$(ULongArray__get_impl_pr71q9(operand, _ULongArray___get_size__impl__ju6dtr(operand) - 1 | 0));
    return new Pair(new ULongArray(this.shl_2fq1k7_k$(operand, normalizationShift)), normalizationShift);
  };
  BigInteger63Arithmetic.prototype.denormalize_t9wzrm_k$ = function (remainderNormalized, normalizationShift) {
    var remainder = this.shr_u05prh_k$(remainderNormalized, normalizationShift);
    return remainder;
  };
  BigInteger63Arithmetic.prototype.baseDivide_ipvnkm_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    if (this.compareTo_55med6_k$(unnormalizedDivisor, unnormalizedDividend) > 0) {
      return new Pair(new ULongArray(this.ZERO_1), new ULongArray(unnormalizedDividend));
    }
    if (_ULongArray___get_size__impl__ju6dtr(unnormalizedDivisor) === 1 ? _ULongArray___get_size__impl__ju6dtr(unnormalizedDividend) === 1 : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.div' call
      var tmp0_div = ULongArray__get_impl_pr71q9(unnormalizedDividend, 0);
      var tmp1_div = ULongArray__get_impl_pr71q9(unnormalizedDivisor, 0);
      tmp$ret$0 = ulongDivide(tmp0_div, tmp1_div);
      var tmp2_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
      tmp$ret$1 = tmp2_ulongArrayOf;
      var tmp = new ULongArray(this.removeLeadingZeros_u2w242_k$(tmp$ret$1));
      var tmp$ret$3;
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.rem' call
      var tmp3_rem = ULongArray__get_impl_pr71q9(unnormalizedDividend, 0);
      var tmp4_rem = ULongArray__get_impl_pr71q9(unnormalizedDivisor, 0);
      tmp$ret$2 = ulongRemainder(tmp3_rem, tmp4_rem);
      var tmp5_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$2]));
      tmp$ret$3 = tmp5_ulongArrayOf;
      return new Pair(tmp, new ULongArray(this.removeLeadingZeros_u2w242_k$(tmp$ret$3)));
    }
    var bitPrecision = this.bitLength_1nuydl_k$(unnormalizedDividend) - this.bitLength_1nuydl_k$(unnormalizedDivisor) | 0;
    if (bitPrecision === 0) {
      return new Pair(new ULongArray(this.ONE_1), new ULongArray(this.minus_ykez31_k$(unnormalizedDividend, unnormalizedDivisor)));
    }
    var tmp0_container = this.normalize_wwwc1l_k$(unnormalizedDividend, unnormalizedDivisor);
    var dividend = tmp0_container.component1_7eebsc_k$().storage_1;
    var divisor = tmp0_container.component2_7eebsb_k$().storage_1;
    var normalizationShift = tmp0_container.component3_7eebsa_k$();
    var dividendSize = _ULongArray___get_size__impl__ju6dtr(dividend);
    var divisorSize = _ULongArray___get_size__impl__ju6dtr(divisor);
    var divisorCorrectedSize = _ULongArray___get_size__impl__ju6dtr(divisor) - this.countLeadingZeroWords_3y4bmo_k$(divisor) | 0;
    var wordPrecision = dividendSize - divisorSize | 0;
    var qjhat;
    var reconstructedQuotient;
    var quotient = _ULongArray___init__impl__twm1l3_0(wordPrecision);
    var divisorTimesBaseToPowerOfM = this.shl_2fq1k7_k$(divisor, imul(wordPrecision, this.basePowerOfTwo_1));
    if (this.compareTo_55med6_k$(dividend, divisorTimesBaseToPowerOfM) >= 0) {
      quotient = _ULongArray___init__impl__twm1l3_0(wordPrecision + 1 | 0);
      ULongArray__set_impl_z19mvh(quotient, wordPrecision, _ULong___init__impl__c78o9k(new Long(1, 0)));
      dividend = this.minus_ykez31_k$(dividend, divisorTimesBaseToPowerOfM);
    }
    var inductionVariable = wordPrecision - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0;
        if ((divisorSize + j | 0) < _ULongArray___get_size__impl__ju6dtr(dividend)) {
          var tmp$ret$4;
          // Inline function 'kotlin.ulongArrayOf' call
          var tmp6_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(dividend, divisorSize + j | 0)]));
          tmp$ret$4 = tmp6_ulongArrayOf;
          tmp_0 = this.plus_ep83aw_k$(this.shl_2fq1k7_k$(tmp$ret$4, this.basePowerOfTwo_1), ULongArray__get_impl_pr71q9(dividend, (divisorSize + j | 0) - 1 | 0));
        } else {
          var tmp_1;
          if ((divisorSize + j | 0) === _ULongArray___get_size__impl__ju6dtr(dividend)) {
            var tmp$ret$5;
            // Inline function 'kotlin.ulongArrayOf' call
            var tmp7_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(dividend, (divisorSize + j | 0) - 1 | 0)]));
            tmp$ret$5 = tmp7_ulongArrayOf;
            tmp_1 = tmp$ret$5;
          } else {
            tmp_1 = this.ZERO_1;
          }
          tmp_0 = tmp_1;
        }
        var twoDigit = tmp_0;
        var tmp_2 = BigInteger32Arithmetic_getInstance();
        var tmp_3 = this.to32Bit_9nrd8j_k$(twoDigit);
        var tmp$ret$6;
        // Inline function 'kotlin.ulongArrayOf' call
        var tmp8_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(divisor, divisorSize - 1 | 0)]));
        tmp$ret$6 = tmp8_ulongArrayOf;
        var convertedResult = tmp_2.divide_llsyav_k$(tmp_3, this.to32Bit_9nrd8j_k$(tmp$ret$6));
        qjhat = this.from32Bit_q00nda_k$(convertedResult.first_1.storage_1);
        var tmp_4 = quotient;
        var tmp_5;
        var tmp_6 = qjhat;
        var tmp$ret$7;
        // Inline function 'kotlin.ULong.minus' call
        var tmp9_minus = this.baseMask_1;
        tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0)))));
        if (this.compareTo_d3mdnl_k$(tmp_6, tmp$ret$7) < 0) {
          tmp_5 = ULongArray__get_impl_pr71q9(qjhat, 0);
        } else {
          tmp_5 = this.baseMask_1;
        }
        ULongArray__set_impl_z19mvh(tmp_4, j, tmp_5);
        reconstructedQuotient = this.shl_2fq1k7_k$(this.baseMultiplyWithCorrectedSize_26hcve_k$(divisor, ULongArray__get_impl_pr71q9(quotient, j), divisorCorrectedSize), imul(j, this.basePowerOfTwo_1));
        while (this.compareTo_55med6_k$(reconstructedQuotient, dividend) > 0) {
          var tmp_7 = quotient;
          var tmp$ret$10;
          // Inline function 'kotlin.ULong.minus' call
          var tmp10_minus = ULongArray__get_impl_pr71q9(quotient, j);
          var tmp$ret$9;
          // Inline function 'kotlin.ULong.minus' call
          var tmp$ret$8;
          // Inline function 'kotlin.UInt.toULong' call
          tmp$ret$8 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1))).and_jhajnj_k$(new Long(-1, 0)));
          var tmp0_minus = tmp$ret$8;
          tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp0_minus)));
          tmp$ret$10 = tmp$ret$9;
          ULongArray__set_impl_z19mvh(tmp_7, j, tmp$ret$10);
          reconstructedQuotient = this.shl_2fq1k7_k$(this.baseMultiplyWithCorrectedSize_26hcve_k$(divisor, ULongArray__get_impl_pr71q9(quotient, j), divisorCorrectedSize), imul(j, this.basePowerOfTwo_1));
        }
        dividend = this.minus_ykez31_k$(dividend, reconstructedQuotient);
      }
       while (0 <= inductionVariable);
    while (this.compareTo_55med6_k$(dividend, divisor) >= 0) {
      quotient = this.plus_ep83aw_k$(quotient, _ULong___init__impl__c78o9k(new Long(1, 0)));
      dividend = this.minus_ykez31_k$(dividend, divisor);
    }
    var denormRemainder = this.denormalize_t9wzrm_k$(dividend, normalizationShift);
    return new Pair(new ULongArray(this.removeLeadingZeros_u2w242_k$(quotient)), new ULongArray(denormRemainder));
  };
  BigInteger63Arithmetic.prototype.basicDivide2_pr5f0p_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    var tmp0_container = this.normalize_wwwc1l_k$(unnormalizedDividend, unnormalizedDivisor);
    var a = tmp0_container.component1_7eebsc_k$().storage_1;
    var b = tmp0_container.component2_7eebsb_k$().storage_1;
    var shift = tmp0_container.component3_7eebsa_k$();
    var m = _ULongArray___get_size__impl__ju6dtr(a) - _ULongArray___get_size__impl__ju6dtr(b) | 0;
    var bmb = this.shl_2fq1k7_k$(b, imul(m, this.wordSizeInBits_1));
    var tmp$ret$3;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = m + 1 | 0;
    var tmp = 0;
    var tmp_0 = tmp0_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$2;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.basicDivide2.<anonymous>' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(new Long(0, 0));
      var tmp0_toLong = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$2 = tmp$ret$1;
      tmp_1[tmp_2] = tmp$ret$2;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_1);
    var q = tmp$ret$3;
    if (this.compareTo_55med6_k$(a, bmb) > 0) {
      ULongArray__set_impl_z19mvh(q, m, _ULong___init__impl__c78o9k(new Long(1, 0)));
      a = this.minus_ykez31_k$(a, bmb);
    }
    var qjhat = this.ZERO_1;
    var qjhatULong = this.ZERO_1;
    var bjb = this.ZERO_1;
    var delta = this.ZERO_1;
    var inductionVariable = m - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_3 = BigInteger32Arithmetic_getInstance();
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyOfRange' call
        var tmp1_copyOfRange = a;
        var tmp2_copyOfRange = _ULongArray___get_size__impl__ju6dtr(b) - 1 | 0;
        var tmp3_copyOfRange = _ULongArray___get_size__impl__ju6dtr(b) + 1 | 0;
        tmp$ret$4 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(tmp1_copyOfRange), tmp2_copyOfRange, tmp3_copyOfRange));
        var tmp_4 = this.to32Bit_9nrd8j_k$(tmp$ret$4);
        var tmp$ret$5;
        // Inline function 'kotlin.ulongArrayOf' call
        var tmp4_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(b, _ULongArray___get_size__impl__ju6dtr(b) - 1 | 0)]));
        tmp$ret$5 = tmp4_ulongArrayOf;
        qjhatULong = this.from32Bit_q00nda_k$(tmp_3.divide_llsyav_k$(tmp_4, this.to32Bit_9nrd8j_k$(tmp$ret$5)).first_1.storage_1);
        ULongArray__set_impl_z19mvh(q, j, ULongArray__get_impl_pr71q9(this.min_fvxai9_k$(qjhatULong, this.baseMaskArray_1), 0));
        bjb = this.shl_2fq1k7_k$(b, imul(j, BigInteger32Arithmetic_getInstance().wordSizeInBits_1));
        var qjBjb = this.shl_2fq1k7_k$(this.times_mx0vas_k$(b, ULongArray__get_impl_pr71q9(q, j)), imul(j, this.wordSizeInBits_1));
        if (this.compareTo_55med6_k$(qjBjb, a) > 0) {
          delta = this.minus_ykez31_k$(qjBjb, a);
          while (this.compareTo_55med6_k$(delta, qjBjb) > 0) {
            var tmp_5 = q;
            var tmp$ret$8;
            // Inline function 'kotlin.ULong.minus' call
            var tmp5_minus = ULongArray__get_impl_pr71q9(q, j);
            var tmp$ret$7;
            // Inline function 'kotlin.ULong.minus' call
            var tmp$ret$6;
            // Inline function 'kotlin.UInt.toULong' call
            tmp$ret$6 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1))).and_jhajnj_k$(new Long(-1, 0)));
            var tmp0_minus = tmp$ret$6;
            tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp0_minus)));
            tmp$ret$8 = tmp$ret$7;
            ULongArray__set_impl_z19mvh(tmp_5, j, tmp$ret$8);
            delta = this.minus_ykez31_k$(delta, bjb);
          }
          a = this.shl_2fq1k7_k$(this.minus_ykez31_k$(a, this.times_mx0vas_k$(b, ULongArray__get_impl_pr71q9(q, j))), imul(j, BigInteger32Arithmetic_getInstance().wordSizeInBits_1));
        } else {
          a = this.minus_ykez31_k$(a, qjBjb);
        }
      }
       while (0 <= inductionVariable);
    var denormRemainder = this.denormalize_t9wzrm_k$(a, shift);
    return new Pair(new ULongArray(this.removeLeadingZeros_u2w242_k$(q)), new ULongArray(denormRemainder));
  };
  BigInteger63Arithmetic.prototype.exactDivideBy3_m70sur_k$ = function (operand) {
    var base = Companion_getInstance_6().ONE_1.shl_po5ip6_k$(imul(_ULongArray___get_size__impl__ju6dtr(operand), 63));
    var creator = Companion_getInstance_7().creatorForModulo_czwz96_k$(base);
    var reciprocalOf3 = creator.fromInt_venwfw_k$(3).inverse_wevods_k$();
    var multipliedByInverse = this.multiply_u6tj2b_k$(operand, toULongArray(new ULongArray(reciprocalOf3.toBigInteger_xwiad5_k$().magnitude_1)));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.indices' call
    tmp$ret$0 = get_indices(_ULongArray___get_storage__impl__28e64j(operand));
    return toULongArray(slice_0(multipliedByInverse, tmp$ret$0));
  };
  BigInteger63Arithmetic.prototype.exactDivideBy3Better_ppj18j_k$ = function (operand) {
    return operand;
  };
  BigInteger63Arithmetic.prototype.reciprocal_gjjqls_k$ = function (operand) {
    return this.d1ReciprocalRecursiveWordVersion_tlzxfd_k$(operand);
  };
  BigInteger63Arithmetic.prototype.d1ReciprocalRecursive_m6ha01_k$ = function (a) {
    var fullBitLenght = this.bitLength_1nuydl_k$(a);
    var tmp;
    if (fullBitLenght > 63) {
      tmp = fullBitLenght - 63 | 0;
    } else {
      tmp = fullBitLenght;
    }
    var n = tmp;
    if (n <= 30) {
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shl' call
      var tmp0_shl = imul(n, 2);
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0))).shl_po5ip6_k$(tmp0_shl));
      var rhoPowered = tmp$ret$0;
      var longA = ULongArray__get_impl_pr71q9(a, 0);
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.div' call
      tmp$ret$1 = ulongDivide(rhoPowered, longA);
      var x = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.minus' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.times' call
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(x).times_2zfqpc_k$(_ULong___get_data__impl__fggpzb(longA)));
      var tmp1_minus = tmp$ret$2;
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(rhoPowered).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp1_minus)));
      var r = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.ulongArrayOf' call
      tmp$ret$4 = _ULongArray___init__impl__twm1l3(longArrayOf([x]));
      var tmp_0 = new ULongArray(tmp$ret$4);
      var tmp$ret$5;
      // Inline function 'kotlin.ulongArrayOf' call
      tmp$ret$5 = _ULongArray___init__impl__twm1l3(longArrayOf([r]));
      return new Pair(tmp_0, new ULongArray(tmp$ret$5));
    }
    var tmp$ret$6;
    // Inline function 'kotlin.math.floor' call
    var tmp2_floor = (n - 1 | 0) / 2;
    tmp$ret$6 = Math.floor(tmp2_floor);
    var l = numberToInt(tmp$ret$6);
    var h = n - l | 0;
    var mask = this.minus_ykez31_k$(this.shl_2fq1k7_k$(this.ONE_1, l), this.ONE_1);
    var ah = this.shr_u05prh_k$(a, l);
    var al = this.and_3oowga_k$(a, mask);
    var tmp0_container = this.d1ReciprocalRecursive_m6ha01_k$(ah);
    var xh = tmp0_container.component1_7eebsc_k$().storage_1;
    var rh = tmp0_container.component2_7eebsb_k$().storage_1;
    var s = this.times_s4ejn7_k$(al, xh);
    var rhRhoL = this.shl_2fq1k7_k$(rh, l);
    var tmp_1;
    if (this.compareTo_55med6_k$(rhRhoL, s) >= 0) {
      tmp_1 = this.minus_ykez31_k$(rhRhoL, s);
    } else {
      xh = this.minus_ykez31_k$(xh, this.ONE_1);
      tmp_1 = this.minus_ykez31_k$(this.plus_4jwzw9_k$(rhRhoL, a), s);
    }
    var t = tmp_1;
    var tm = this.shr_u05prh_k$(t, h);
    var d = this.shr_u05prh_k$(this.times_s4ejn7_k$(xh, tm), h);
    var x_0 = this.plus_4jwzw9_k$(this.shl_2fq1k7_k$(xh, l), d);
    var r_0 = this.minus_ykez31_k$(this.shl_2fq1k7_k$(t, l), this.times_s4ejn7_k$(a, d));
    if (this.compareTo_55med6_k$(r_0, a) >= 0) {
      x_0 = this.plus_4jwzw9_k$(x_0, this.ONE_1);
      r_0 = this.minus_ykez31_k$(r_0, a);
      if (this.compareTo_55med6_k$(r_0, a) >= 0) {
        x_0 = this.plus_4jwzw9_k$(x_0, this.ONE_1);
        r_0 = this.minus_ykez31_k$(r_0, a);
      }
    }
    return new Pair(new ULongArray(x_0), new ULongArray(r_0));
  };
  BigInteger63Arithmetic.prototype.d1ReciprocalRecursiveWordVersion_tlzxfd_k$ = function (a) {
    var n = _ULongArray___get_size__impl__ju6dtr(a) - 1 | 0;
    if (n <= 2) {
      var tmp;
      if (n === 0) {
        tmp = 1;
      } else {
        tmp = n;
      }
      var corrected = tmp;
      var rhoPowered = this.shl_2fq1k7_k$(this.ONE_1, imul(imul(corrected, 2), this.wordSizeInBits_1));
      var x = this.div_j6cgqm_k$(rhoPowered, a);
      var r = this.minus_ykez31_k$(rhoPowered, this.times_s4ejn7_k$(x, a));
      return new Pair(new ULongArray(x), new ULongArray(r));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = (n - 1 | 0) / 2;
    tmp$ret$0 = Math.floor(tmp0_floor);
    var l = numberToInt(tmp$ret$0);
    var h = n - l | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp1_copyOfRange = (_ULongArray___get_size__impl__ju6dtr(a) - h | 0) - 1 | 0;
    var tmp2_copyOfRange = _ULongArray___get_size__impl__ju6dtr(a);
    tmp$ret$1 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), tmp1_copyOfRange, tmp2_copyOfRange));
    var ah = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyOfRange' call
    tmp$ret$2 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), 0, l));
    var al = tmp$ret$2;
    var tmp0_container = this.d1ReciprocalRecursiveWordVersion_tlzxfd_k$(ah);
    var xh = tmp0_container.component1_7eebsc_k$().storage_1;
    var rh = tmp0_container.component2_7eebsb_k$().storage_1;
    var s = this.times_s4ejn7_k$(al, xh);
    var rhRhoL = this.shl_2fq1k7_k$(rh, imul(l, this.wordSizeInBits_1));
    var tmp_0;
    if (this.compareTo_55med6_k$(rhRhoL, s) >= 0) {
      tmp_0 = this.minus_ykez31_k$(rhRhoL, s);
    } else {
      xh = this.minus_ykez31_k$(xh, this.ONE_1);
      tmp_0 = this.minus_ykez31_k$(this.plus_4jwzw9_k$(rhRhoL, a), s);
    }
    var t = tmp_0;
    var tm = this.shr_u05prh_k$(t, imul(h, this.wordSizeInBits_1));
    var d = this.shr_u05prh_k$(this.times_s4ejn7_k$(xh, tm), imul(h, this.wordSizeInBits_1));
    var x_0 = this.plus_4jwzw9_k$(this.shl_2fq1k7_k$(xh, imul(l, this.wordSizeInBits_1)), d);
    var r_0 = this.minus_ykez31_k$(this.shl_2fq1k7_k$(t, imul(l, this.wordSizeInBits_1)), this.times_s4ejn7_k$(a, d));
    if (this.compareTo_55med6_k$(r_0, a) >= 0) {
      x_0 = this.plus_4jwzw9_k$(x_0, this.ONE_1);
      r_0 = this.minus_ykez31_k$(r_0, a);
      if (this.compareTo_55med6_k$(r_0, a) >= 0) {
        x_0 = this.plus_4jwzw9_k$(x_0, this.ONE_1);
        r_0 = this.minus_ykez31_k$(r_0, a);
      }
    }
    return new Pair(new ULongArray(x_0), new ULongArray(r_0));
  };
  BigInteger63Arithmetic.prototype.convertTo64BitRepresentation_lvag6v_k$ = function (operand) {
    if (isZero(operand, this))
      return this.ZERO_1;
    var length = this.bitLength_1nuydl_k$(operand);
    var tmp;
    if ((length % 64 | 0) === 0) {
      tmp = length / 64 | 0;
    } else {
      tmp = (length / 64 | 0) + 1 | 0;
    }
    var requiredLength = tmp;
    var wordStep;
    var shiftAmount;
    var result = _ULongArray___init__impl__twm1l3_0(requiredLength);
    var inductionVariable = 0;
    if (inductionVariable < requiredLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        wordStep = i / 63 | 0;
        shiftAmount = i % 63 | 0;
        if (((i + wordStep | 0) + 1 | 0) < _ULongArray___get_size__impl__ju6dtr(operand)) {
          var tmp$ret$2;
          // Inline function 'kotlin.ULong.or' call
          var tmp$ret$0;
          // Inline function 'kotlin.ULong.shr' call
          var tmp0_shr = ULongArray__get_impl_pr71q9(operand, i + wordStep | 0);
          var tmp1_shr = shiftAmount;
          tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(tmp1_shr));
          var tmp4_or = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.ULong.shl' call
          var tmp2_shl = ULongArray__get_impl_pr71q9(operand, (i + wordStep | 0) + 1 | 0);
          var tmp3_shl = 63 - shiftAmount | 0;
          tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).shl_po5ip6_k$(tmp3_shl));
          var tmp5_or = tmp$ret$1;
          tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp5_or)));
          ULongArray__set_impl_z19mvh(result, i, tmp$ret$2);
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.ULong.shr' call
          var tmp6_shr = ULongArray__get_impl_pr71q9(operand, i + wordStep | 0);
          var tmp7_shr = shiftAmount;
          tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_shr).ushr_rr8rvr_k$(tmp7_shr));
          ULongArray__set_impl_z19mvh(result, i, tmp$ret$3);
        }
      }
       while (inductionVariable < requiredLength);
    return this.removeLeadingZeros_u2w242_k$(result);
  };
  BigInteger63Arithmetic.prototype.convertTo32BitRepresentation_9h3j8v_k$ = function (operand) {
    var power64Representation = this.convertTo64BitRepresentation_lvag6v_k$(operand);
    var result = _UIntArray___init__impl__ghjpc6_0(imul(_ULongArray___get_size__impl__ju6dtr(power64Representation), 2));
    var inductionVariable = 0;
    var last = _ULongArray___get_size__impl__ju6dtr(power64Representation);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(2, i);
        var tmp$ret$3;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp$ret$1;
        // Inline function 'kotlin.ULong.and' call
        var tmp1_and = ULongArray__get_impl_pr71q9(power64Representation, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toULong' call
        var tmp0_toULong = BigInteger32Arithmetic_getInstance().base_1;
        tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp0_toULong)).and_jhajnj_k$(new Long(-1, 0)));
        var tmp2_and = tmp$ret$0;
        tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
        var tmp3_toUInt = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt = _ULong___get_data__impl__fggpzb(tmp3_toUInt);
        tmp$ret$2 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
        tmp$ret$3 = tmp$ret$2;
        UIntArray__set_impl_7f2zu2(result, tmp, tmp$ret$3);
        var tmp_0 = imul(2, i) + 1 | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.ULong.toUInt' call
        var tmp$ret$4;
        // Inline function 'kotlin.ULong.shr' call
        var tmp4_shr = ULongArray__get_impl_pr71q9(power64Representation, i);
        tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(32));
        var tmp5_toUInt = tmp$ret$4;
        var tmp$ret$5;
        // Inline function 'kotlin.toUInt' call
        var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp5_toUInt);
        tmp$ret$5 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
        tmp$ret$6 = tmp$ret$5;
        UIntArray__set_impl_7f2zu2(result, tmp_0, tmp$ret$6);
      }
       while (inductionVariable < last);
    return BigInteger32Arithmetic_getInstance().removeLeadingZeros_cj3f2k_k$(result);
  };
  BigInteger63Arithmetic.prototype.convertFrom32BitRepresentation_g6pgxy_k$ = function (operand) {
    if (_UIntArray___get_size__impl__r6l8ci(operand) === 0) {
      return this.ZERO_1;
    }
    if (_UIntArray___get_size__impl__r6l8ci(operand) === 1) {
      var tmp$ret$1;
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp$ret$0;
      // Inline function 'kotlin.UInt.toULong' call
      var tmp0_toULong = UIntArray__get_impl_gp5kza(operand, 0);
      tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp0_toULong)).and_jhajnj_k$(new Long(-1, 0)));
      var tmp1_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
      tmp$ret$1 = tmp1_ulongArrayOf;
      return tmp$ret$1;
    }
    var length = BigInteger32Arithmetic_getInstance().bitLength_ti7g0u_k$(operand);
    var tmp;
    if ((length % 63 | 0) === 0) {
      tmp = length / 63 | 0;
    } else {
      tmp = (length / 63 | 0) + 1 | 0;
    }
    var requiredLength = tmp;
    var result = _ULongArray___init__impl__twm1l3_0(requiredLength);
    var skipWordCount;
    var inductionVariable = 0;
    if (inductionVariable < requiredLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        skipWordCount = i / 32 | 0;
        var shiftAmount = i % 32 | 0;
        var position = imul(i, 2) - skipWordCount | 0;
        if (requiredLength === 2) {
          var tmp$ret$6;
          // Inline function 'kotlin.ULong.or' call
          var tmp$ret$2;
          // Inline function 'kotlin.UInt.toULong' call
          var tmp2_toULong = UIntArray__get_impl_gp5kza(operand, 0);
          tmp$ret$2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp2_toULong)).and_jhajnj_k$(new Long(-1, 0)));
          var tmp7_or = tmp$ret$2;
          var tmp$ret$5;
          // Inline function 'kotlin.ULong.and' call
          var tmp$ret$4;
          // Inline function 'kotlin.ULong.shl' call
          var tmp$ret$3;
          // Inline function 'kotlin.UInt.toULong' call
          var tmp3_toULong = UIntArray__get_impl_gp5kza(operand, 1);
          tmp$ret$3 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp3_toULong)).and_jhajnj_k$(new Long(-1, 0)));
          var tmp4_shl = tmp$ret$3;
          tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shl).shl_po5ip6_k$(32));
          var tmp5_and = tmp$ret$4;
          var tmp6_and = this.highMask_1;
          tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp6_and)));
          var tmp8_or = tmp$ret$5;
          tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp8_or)));
          ULongArray__set_impl_z19mvh(result, 0, tmp$ret$6);
          if (_UIntArray___get_size__impl__r6l8ci(operand) === 4) {
            var tmp$ret$14;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$11;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$8;
            // Inline function 'kotlin.ULong.shr' call
            var tmp$ret$7;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp9_toULong = UIntArray__get_impl_gp5kza(operand, 1);
            tmp$ret$7 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp9_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp10_shr = tmp$ret$7;
            tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_shr).ushr_rr8rvr_k$(31));
            var tmp13_or = tmp$ret$8;
            var tmp$ret$10;
            // Inline function 'kotlin.ULong.shl' call
            var tmp$ret$9;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp11_toULong = UIntArray__get_impl_gp5kza(operand, 2);
            tmp$ret$9 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp11_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp12_shl = tmp$ret$9;
            tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_shl).shl_po5ip6_k$(1));
            var tmp14_or = tmp$ret$10;
            tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp13_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp14_or)));
            var tmp17_or = tmp$ret$11;
            var tmp$ret$13;
            // Inline function 'kotlin.ULong.shl' call
            var tmp$ret$12;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp15_toULong = UIntArray__get_impl_gp5kza(operand, 3);
            tmp$ret$12 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp15_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp16_shl = tmp$ret$12;
            tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).shl_po5ip6_k$(33));
            var tmp18_or = tmp$ret$13;
            tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp18_or)));
            ULongArray__set_impl_z19mvh(result, 1, tmp$ret$14);
          } else {
            if (_UIntArray___get_size__impl__r6l8ci(operand) > 2) {
              var tmp$ret$19;
              // Inline function 'kotlin.ULong.or' call
              var tmp$ret$16;
              // Inline function 'kotlin.ULong.shr' call
              var tmp$ret$15;
              // Inline function 'kotlin.UInt.toULong' call
              var tmp19_toULong = UIntArray__get_impl_gp5kza(operand, 1);
              tmp$ret$15 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp19_toULong)).and_jhajnj_k$(new Long(-1, 0)));
              var tmp20_shr = tmp$ret$15;
              tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shr).ushr_rr8rvr_k$(31));
              var tmp23_or = tmp$ret$16;
              var tmp$ret$18;
              // Inline function 'kotlin.ULong.shl' call
              var tmp$ret$17;
              // Inline function 'kotlin.UInt.toULong' call
              var tmp21_toULong = UIntArray__get_impl_gp5kza(operand, 2);
              tmp$ret$17 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp21_toULong)).and_jhajnj_k$(new Long(-1, 0)));
              var tmp22_shl = tmp$ret$17;
              tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp22_shl).shl_po5ip6_k$(1));
              var tmp24_or = tmp$ret$18;
              tmp$ret$19 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp24_or)));
              ULongArray__set_impl_z19mvh(result, 1, tmp$ret$19);
            } else {
              var tmp$ret$21;
              // Inline function 'kotlin.ULong.shr' call
              var tmp$ret$20;
              // Inline function 'kotlin.UInt.toULong' call
              var tmp25_toULong = UIntArray__get_impl_gp5kza(operand, 1);
              tmp$ret$20 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp25_toULong)).and_jhajnj_k$(new Long(-1, 0)));
              var tmp26_shr = tmp$ret$20;
              tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp26_shr).ushr_rr8rvr_k$(31));
              ULongArray__set_impl_z19mvh(result, 1, tmp$ret$21);
            }
          }
        } else {
          var tmp1_subject = i;
          if (tmp1_subject === 0) {
            var tmp$ret$26;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$22;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp27_toULong = UIntArray__get_impl_gp5kza(operand, 0);
            tmp$ret$22 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp27_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp32_or = tmp$ret$22;
            var tmp$ret$25;
            // Inline function 'kotlin.ULong.and' call
            var tmp$ret$24;
            // Inline function 'kotlin.ULong.shl' call
            var tmp$ret$23;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp28_toULong = UIntArray__get_impl_gp5kza(operand, 1);
            tmp$ret$23 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp28_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp29_shl = tmp$ret$23;
            tmp$ret$24 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp29_shl).shl_po5ip6_k$(32));
            var tmp30_and = tmp$ret$24;
            var tmp31_and = this.highMask_1;
            tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp30_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp31_and)));
            var tmp33_or = tmp$ret$25;
            tmp$ret$26 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp32_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp33_or)));
            ULongArray__set_impl_z19mvh(result, i, tmp$ret$26);
          } else if (1 <= tmp1_subject ? tmp1_subject < (requiredLength - 1 | 0) : false) {
            var tmp$ret$35;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$31;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$28;
            // Inline function 'kotlin.ULong.shr' call
            var tmp$ret$27;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp34_toULong = UIntArray__get_impl_gp5kza(operand, position - 1 | 0);
            tmp$ret$27 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp34_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp35_shr = tmp$ret$27;
            var tmp36_shr = 32 - shiftAmount | 0;
            tmp$ret$28 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp35_shr).ushr_rr8rvr_k$(tmp36_shr));
            var tmp39_or = tmp$ret$28;
            var tmp$ret$30;
            // Inline function 'kotlin.ULong.shl' call
            var tmp$ret$29;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp37_toULong = UIntArray__get_impl_gp5kza(operand, position);
            tmp$ret$29 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp37_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp38_shl = tmp$ret$29;
            tmp$ret$30 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp38_shl).shl_po5ip6_k$(shiftAmount));
            var tmp40_or = tmp$ret$30;
            tmp$ret$31 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp39_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp40_or)));
            var tmp46_or = tmp$ret$31;
            var tmp$ret$34;
            // Inline function 'kotlin.ULong.and' call
            var tmp$ret$33;
            // Inline function 'kotlin.ULong.shl' call
            var tmp$ret$32;
            // Inline function 'kotlin.UInt.toULong' call
            var tmp41_toULong = UIntArray__get_impl_gp5kza(operand, position + 1 | 0);
            tmp$ret$32 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp41_toULong)).and_jhajnj_k$(new Long(-1, 0)));
            var tmp42_shl = tmp$ret$32;
            var tmp43_shl = 32 + shiftAmount | 0;
            tmp$ret$33 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp42_shl).shl_po5ip6_k$(tmp43_shl));
            var tmp44_and = tmp$ret$33;
            var tmp45_and = this.highMask_1;
            tmp$ret$34 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp44_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp45_and)));
            var tmp47_or = tmp$ret$34;
            tmp$ret$35 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp46_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp47_or)));
            ULongArray__set_impl_z19mvh(result, i, tmp$ret$35);
          } else if (tmp1_subject === (requiredLength - 1 | 0)) {
            if (position < _UIntArray___get_size__impl__r6l8ci(operand)) {
              var tmp$ret$40;
              // Inline function 'kotlin.ULong.or' call
              var tmp$ret$37;
              // Inline function 'kotlin.ULong.shr' call
              var tmp$ret$36;
              // Inline function 'kotlin.UInt.toULong' call
              var tmp48_toULong = UIntArray__get_impl_gp5kza(operand, position - 1 | 0);
              tmp$ret$36 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp48_toULong)).and_jhajnj_k$(new Long(-1, 0)));
              var tmp49_shr = tmp$ret$36;
              var tmp50_shr = 32 - shiftAmount | 0;
              tmp$ret$37 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp49_shr).ushr_rr8rvr_k$(tmp50_shr));
              var tmp53_or = tmp$ret$37;
              var tmp$ret$39;
              // Inline function 'kotlin.ULong.shl' call
              var tmp$ret$38;
              // Inline function 'kotlin.UInt.toULong' call
              var tmp51_toULong = UIntArray__get_impl_gp5kza(operand, position);
              tmp$ret$38 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp51_toULong)).and_jhajnj_k$(new Long(-1, 0)));
              var tmp52_shl = tmp$ret$38;
              tmp$ret$39 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp52_shl).shl_po5ip6_k$(shiftAmount));
              var tmp54_or = tmp$ret$39;
              tmp$ret$40 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp53_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp54_or)));
              ULongArray__set_impl_z19mvh(result, i, tmp$ret$40);
            } else {
              var tmp$ret$42;
              // Inline function 'kotlin.ULong.shr' call
              var tmp$ret$41;
              // Inline function 'kotlin.UInt.toULong' call
              var tmp55_toULong = UIntArray__get_impl_gp5kza(operand, position - 1 | 0);
              tmp$ret$41 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(tmp55_toULong)).and_jhajnj_k$(new Long(-1, 0)));
              var tmp56_shr = tmp$ret$41;
              var tmp57_shr = 32 - shiftAmount | 0;
              tmp$ret$42 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp56_shr).ushr_rr8rvr_k$(tmp57_shr));
              ULongArray__set_impl_z19mvh(result, i, tmp$ret$42);
            }
          }
        }
      }
       while (inductionVariable < requiredLength);
    return result;
  };
  BigInteger63Arithmetic.prototype.convertFrom64BitRepresentation_jn2lw8_k$ = function (operand) {
    if (_ULongArray___get_size__impl__ju6dtr(operand) === 0) {
      return this.ZERO_1;
    }
    if (_ULongArray___get_size__impl__ju6dtr(operand) === 1) {
      var result = _ULongArray___init__impl__twm1l3_0(2);
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.and' call
      var tmp0_and = ULongArray__get_impl_pr71q9(operand, 0);
      var tmp1_and = this.baseMask_1;
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp1_and)));
      ULongArray__set_impl_z19mvh(result, 0, tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp2_shr = ULongArray__get_impl_pr71q9(operand, 0);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shr).ushr_rr8rvr_k$(63));
      ULongArray__set_impl_z19mvh(result, 1, tmp$ret$1);
      return result;
    }
    var length = this.bitLengthFor64BitArray_ibba3u_k$(operand);
    var tmp;
    if ((length % 63 | 0) === 0) {
      tmp = length / 63 | 0;
    } else {
      tmp = (length / 63 | 0) + 1 | 0;
    }
    var requiredLength = tmp;
    if (requiredLength === 2) {
      var result_0 = _ULongArray___init__impl__twm1l3_0(2);
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp3_and = ULongArray__get_impl_pr71q9(operand, 0);
      var tmp4_and = this.baseMask_1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp4_and)));
      ULongArray__set_impl_z19mvh(result_0, 0, tmp$ret$2);
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.or' call
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      var tmp5_shl = ULongArray__get_impl_pr71q9(operand, 1);
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_shl).shl_po5ip6_k$(1));
      var tmp7_or = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.shr' call
      var tmp6_shr = ULongArray__get_impl_pr71q9(operand, 0);
      tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp6_shr).ushr_rr8rvr_k$(63));
      var tmp8_or = tmp$ret$4;
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp8_or)));
      ULongArray__set_impl_z19mvh(result_0, 1, tmp$ret$5);
      return result_0;
    }
    var result_1 = _ULongArray___init__impl__twm1l3_0(requiredLength);
    var skipWordCount;
    var inductionVariable = 0;
    if (inductionVariable < requiredLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        skipWordCount = i / 64 | 0;
        var shiftAmount = i % 64 | 0;
        var position = i - skipWordCount | 0;
        var tmp1_subject = i;
        if (tmp1_subject === 0) {
          var tmp$ret$6;
          // Inline function 'kotlin.ULong.and' call
          var tmp9_and = ULongArray__get_impl_pr71q9(operand, 0);
          var tmp10_and = this.baseMask_1;
          tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp10_and)));
          ULongArray__set_impl_z19mvh(result_1, i, tmp$ret$6);
        } else if (1 <= tmp1_subject ? tmp1_subject < (requiredLength - 1 | 0) : false) {
          var tmp_0;
          if (shiftAmount > 0) {
            var tmp$ret$10;
            // Inline function 'kotlin.ULong.and' call
            var tmp$ret$9;
            // Inline function 'kotlin.ULong.or' call
            var tmp$ret$7;
            // Inline function 'kotlin.ULong.shr' call
            var tmp11_shr = ULongArray__get_impl_pr71q9(operand, position - 1 | 0);
            var tmp12_shr = 64 - shiftAmount | 0;
            tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shr).ushr_rr8rvr_k$(tmp12_shr));
            var tmp14_or = tmp$ret$7;
            var tmp$ret$8;
            // Inline function 'kotlin.ULong.shl' call
            var tmp13_shl = ULongArray__get_impl_pr71q9(operand, position);
            tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp13_shl).shl_po5ip6_k$(shiftAmount));
            var tmp15_or = tmp$ret$8;
            tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp14_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp15_or)));
            var tmp16_and = tmp$ret$9;
            var tmp17_and = this.baseMask_1;
            tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp17_and)));
            tmp_0 = tmp$ret$10;
          } else {
            var tmp$ret$12;
            // Inline function 'kotlin.ULong.and' call
            var tmp$ret$11;
            // Inline function 'kotlin.ULong.shl' call
            var tmp18_shl = ULongArray__get_impl_pr71q9(operand, position);
            tmp$ret$11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp18_shl).shl_po5ip6_k$(shiftAmount));
            var tmp19_and = tmp$ret$11;
            var tmp20_and = this.baseMask_1;
            tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp20_and)));
            tmp_0 = tmp$ret$12;
          }
          ULongArray__set_impl_z19mvh(result_1, i, tmp_0);
        } else if (tmp1_subject === (requiredLength - 1 | 0)) {
          if (position < _ULongArray___get_size__impl__ju6dtr(operand)) {
            var tmp_1;
            if (shiftAmount > 0) {
              var tmp$ret$16;
              // Inline function 'kotlin.ULong.and' call
              var tmp$ret$15;
              // Inline function 'kotlin.ULong.or' call
              var tmp$ret$13;
              // Inline function 'kotlin.ULong.shr' call
              var tmp21_shr = ULongArray__get_impl_pr71q9(operand, position - 1 | 0);
              var tmp22_shr = 64 - shiftAmount | 0;
              tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_shr).ushr_rr8rvr_k$(tmp22_shr));
              var tmp24_or = tmp$ret$13;
              var tmp$ret$14;
              // Inline function 'kotlin.ULong.shl' call
              var tmp23_shl = ULongArray__get_impl_pr71q9(operand, position);
              tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_shl).shl_po5ip6_k$(shiftAmount));
              var tmp25_or = tmp$ret$14;
              tmp$ret$15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp25_or)));
              var tmp26_and = tmp$ret$15;
              var tmp27_and = this.baseMask_1;
              tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp26_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp27_and)));
              tmp_1 = tmp$ret$16;
            } else {
              var tmp$ret$18;
              // Inline function 'kotlin.ULong.and' call
              var tmp$ret$17;
              // Inline function 'kotlin.ULong.shl' call
              var tmp28_shl = ULongArray__get_impl_pr71q9(operand, position);
              tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp28_shl).shl_po5ip6_k$(shiftAmount));
              var tmp29_and = tmp$ret$17;
              var tmp30_and = this.baseMask_1;
              tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp29_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp30_and)));
              tmp_1 = tmp$ret$18;
            }
            ULongArray__set_impl_z19mvh(result_1, i, tmp_1);
          } else {
            var tmp_2;
            if (shiftAmount > 0) {
              var tmp$ret$19;
              // Inline function 'kotlin.ULong.shr' call
              var tmp31_shr = ULongArray__get_impl_pr71q9(operand, position - 1 | 0);
              var tmp32_shr = 64 - shiftAmount | 0;
              tmp$ret$19 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp31_shr).ushr_rr8rvr_k$(tmp32_shr));
              tmp_2 = tmp$ret$19;
            } else {
              tmp_2 = _ULong___init__impl__c78o9k(new Long(0, 0));
            }
            ULongArray__set_impl_z19mvh(result_1, i, tmp_2);
          }
        }
      }
       while (inductionVariable < requiredLength);
    return result_1;
  };
  BigInteger63Arithmetic.prototype.divide_talz8b_k$ = function (first, second) {
    return this.baseDivide_ipvnkm_k$(first, second);
  };
  BigInteger63Arithmetic.prototype.reciprocalDivision_4hwb0z_k$ = function (first, second) {
    if (_ULongArray___get_size__impl__ju6dtr(first) < _ULongArray___get_size__impl__ju6dtr(second)) {
      throw RuntimeException_init_$Create$('Invalid division: ' + _ULongArray___get_size__impl__ju6dtr(first) + ' words / ' + _ULongArray___get_size__impl__ju6dtr(second) + ' words');
    }
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(second) === 1) {
      tmp = 1;
    } else {
      tmp = _ULongArray___get_size__impl__ju6dtr(second) - 1 | 0;
    }
    var shift = tmp;
    var precisionExtension = (_ULongArray___get_size__impl__ju6dtr(first) - _ULongArray___get_size__impl__ju6dtr(second) | 0) + 1 | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = _ULongArray___get_size__impl__ju6dtr(second) + precisionExtension | 0;
    var tmp_0 = 0;
    var tmp_1 = tmp0_ULongArray;
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.reciprocalDivision.<anonymous>' call
      tmp$ret$0 = tmp_3 >= precisionExtension ? ULongArray__get_impl_pr71q9(second, tmp_3 - precisionExtension | 0) : _ULong___init__impl__c78o9k(new Long(0, 0));
      var tmp0_toLong = tmp$ret$0;
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$2 = tmp$ret$1;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_2);
    var secondHigherPrecision = tmp$ret$3;
    var secondReciprocalWithRemainder = this.d1ReciprocalRecursiveWordVersion_tlzxfd_k$(secondHigherPrecision);
    var secondReciprocal = secondReciprocalWithRemainder.first_1.storage_1;
    var product = this.times_s4ejn7_k$(first, secondReciprocal);
    if (this.compareTo_d3mdnl_k$(product, _ULong___init__impl__c78o9k(new Long(0, 0))) === 0) {
      return new Pair(new ULongArray(this.ZERO_1), new ULongArray(first));
    }
    if (_ULongArray___get_size__impl__ju6dtr(product) === 1) {
      var tmp_4 = product;
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.minus' call
      var tmp1_minus = this.baseMask_1;
      tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0)))));
      if (this.compareTo_d3mdnl_k$(tmp_4, tmp$ret$4) >= 0) {
        product = this.plus_4jwzw9_k$(product, this.ONE_1);
      }
    } else {
      var importantWord = ULongArray__get_impl_pr71q9(product, _ULongArray___get_size__impl__ju6dtr(product) - _ULongArray___get_size__impl__ju6dtr(second) | 0);
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.compareTo' call
      var tmp2_compareTo = this.baseMask_1;
      tmp$ret$5 = ulongCompare(_ULong___get_data__impl__fggpzb(importantWord), _ULong___get_data__impl__fggpzb(tmp2_compareTo));
      if (tmp$ret$5 >= 0) {
        var tmp$ret$10;
        // Inline function 'kotlin.ULongArray' call
        var tmp3_ULongArray = _ULongArray___get_size__impl__ju6dtr(product);
        var tmp_5 = 0;
        var tmp_6 = tmp3_ULongArray;
        var tmp_7 = longArray(tmp_6);
        while (tmp_5 < tmp_6) {
          var tmp_8 = tmp_5;
          var tmp$ret$9;
          // Inline function 'kotlin.ULongArray.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'kotlin.ULong.toLong' call
          var tmp$ret$7;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.reciprocalDivision.<anonymous>' call
          var tmp0_subject = tmp_8;
          var tmp_9;
          if (tmp0_subject === (_ULongArray___get_size__impl__ju6dtr(product) - 1 | 0)) {
            var tmp$ret$6;
            // Inline function 'kotlin.ULong.plus' call
            var tmp0_plus = ULongArray__get_impl_pr71q9(product, _ULongArray___get_size__impl__ju6dtr(product) - 1 | 0);
            tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_plus).plus_u6jwas_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0)))));
            tmp_9 = tmp$ret$6;
          } else {
            tmp_9 = _ULong___init__impl__c78o9k(new Long(0, 0));
          }
          tmp$ret$7 = tmp_9;
          var tmp0_toLong_0 = tmp$ret$7;
          tmp$ret$8 = _ULong___get_data__impl__fggpzb(tmp0_toLong_0);
          tmp$ret$9 = tmp$ret$8;
          tmp_7[tmp_8] = tmp$ret$9;
          tmp_5 = tmp_5 + 1 | 0;
        }
        tmp$ret$10 = _ULongArray___init__impl__twm1l3(tmp_7);
        product = tmp$ret$10;
      }
    }
    var tmp$ret$11;
    // Inline function 'kotlin.collections.copyOfRange' call
    var tmp4_copyOfRange = product;
    var tmp5_copyOfRange = imul(2, shift) + precisionExtension | 0;
    var tmp6_copyOfRange = _ULongArray___get_size__impl__ju6dtr(product);
    tmp$ret$11 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(tmp4_copyOfRange), tmp5_copyOfRange, tmp6_copyOfRange));
    var result = tmp$ret$11;
    var remainder = this.minus_ykez31_k$(first, this.times_s4ejn7_k$(result, second));
    return new Pair(new ULongArray(result), new ULongArray(remainder));
  };
  BigInteger63Arithmetic.prototype.sqrt_klb7yu_k$ = function (operand) {
    return reqursiveSqrt_0(this, operand);
  };
  BigInteger63Arithmetic.prototype.basecaseSqrt_wkcbg7_k$ = function (operand) {
    var sqrt = this.sqrtInt_uzqunc_k$(operand);
    var remainder = this.minus_ykez31_k$(operand, this.times_s4ejn7_k$(sqrt, sqrt));
    return new Pair(new ULongArray(sqrt), new ULongArray(remainder));
  };
  BigInteger63Arithmetic.prototype.sqrtInt_uzqunc_k$ = function (operand) {
    var u = operand;
    var s = this.ZERO_1;
    var tmp = this.ZERO_1;
    do {
      s = u;
      tmp = this.plus_4jwzw9_k$(s, this.div_j6cgqm_k$(operand, s));
      u = this.shr_u05prh_k$(tmp, 1);
    }
     while (this.compareTo_55med6_k$(u, s) < 0);
    return s;
  };
  BigInteger63Arithmetic.prototype.gcd_48x9rb_k$ = function (first, second) {
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(first) > 150 ? true : _ULongArray___get_size__impl__ju6dtr(second) > 150) {
      tmp = euclideanGcd_0(this, first, second);
    } else {
      tmp = binaryGcd_0(this, first, second);
    }
    return tmp;
  };
  BigInteger63Arithmetic.prototype.get_SIGNED_POSITIVE_TWO_icygcg_k$ = function () {
    return this.SIGNED_POSITIVE_TWO_1;
  };
  BigInteger63Arithmetic.prototype.plus_u2j0gs_k$ = function (_this__u8e3s4, other) {
    return signedAdd_0(this, _this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.minus_j3qgna_k$ = function (_this__u8e3s4, other) {
    return signedSubtract_0(this, _this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.times_euzddc_k$ = function (_this__u8e3s4, other) {
    return signedMultiply_0(this, _this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.div_ixpecl_k$ = function (_this__u8e3s4, other) {
    return signedDivide_0(this, _this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.rem_gw4isc_k$ = function (_this__u8e3s4, other) {
    return signedRemainder_0(this, _this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.shr_qnnzs_k$ = function (_this__u8e3s4, places) {
    return new SignedULongArray(this.shr_u05prh_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  BigInteger63Arithmetic.prototype.shl_u55if2_k$ = function (_this__u8e3s4, places) {
    return new SignedULongArray(this.shl_2fq1k7_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  BigInteger63Arithmetic.prototype.and_ikmwah_k$ = function (_this__u8e3s4, operand) {
    return new SignedULongArray(this.and_3oowga_k$(_this__u8e3s4.unsignedValue_1, operand), _this__u8e3s4.sign_1);
  };
  BigInteger63Arithmetic.prototype.min_fvxai9_k$ = function (first, second) {
    var tmp;
    if (this.compareTo_55med6_k$(first, second) < 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  BigInteger63Arithmetic.prototype.max_m4p799_k$ = function (first, second) {
    var tmp;
    if (this.compareTo_55med6_k$(first, second) > 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  BigInteger63Arithmetic.prototype.parseForBase_1vllqq_k$ = function (number, base) {
    var parsed = this.ZERO_1;
    // Inline function 'kotlin.text.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.toLowerCase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = number;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var tmp0_forEach = tmp$ret$1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.parseForBase.<anonymous>' call
      var tmp = BigInteger63Arithmetic_getInstance();
      var tmp_0 = BigInteger63Arithmetic_getInstance();
      var tmp_1 = parsed;
      var tmp$ret$2;
      // Inline function 'kotlin.toULong' call
      tmp$ret$2 = _ULong___init__impl__c78o9k(toLong(base));
      var tmp_2 = tmp_0.times_mx0vas_k$(tmp_1, tmp$ret$2);
      var tmp$ret$3;
      // Inline function 'kotlin.toULong' call
      var tmp0_toULong = toDigit(element, base);
      tmp$ret$3 = _ULong___init__impl__c78o9k(toLong(tmp0_toULong));
      parsed = tmp.plus_ep83aw_k$(tmp_2, tmp$ret$3);
    }
    return this.removeLeadingZeros_u2w242_k$(parsed);
  };
  BigInteger63Arithmetic.prototype.toString_2sf9en_k$ = function (operand, base) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyOf' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf(_ULongArray___get_storage__impl__28e64j(operand)));
    var copy = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toULong' call
    tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(base));
    var tmp0_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
    tmp$ret$2 = tmp0_ulongArrayOf;
    var baseArray = tmp$ret$2;
    var stringBuilder = StringBuilder_init_$Create$();
    while (!equals(copy, this.ZERO_1)) {
      var divremResult = this.divrem_84hj6l_k$(copy, baseArray);
      if (ULongArray__isEmpty_impl_c3yngu(divremResult.second_1.storage_1)) {
        stringBuilder.append_t8pm91_k$(0);
      } else {
        stringBuilder.append_ssq29y_k$(toString_1(ULongArray__get_impl_pr71q9(divremResult.second_1.storage_1, 0), base));
      }
      copy = divremResult.first_1.storage_1;
    }
    var tmp$ret$3;
    // Inline function 'kotlin.text.reversed' call
    var tmp1_reversed = stringBuilder.toString();
    tmp$ret$3 = toString(reversed_0(isCharSequence(tmp1_reversed) ? tmp1_reversed : THROW_CCE()));
    return tmp$ret$3;
  };
  BigInteger63Arithmetic.prototype.and_3oowga_k$ = function (operand, mask) {
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(operand) > _ULongArray___get_size__impl__ju6dtr(mask)) {
      tmp = new Pair(new ULongArray(operand), new ULongArray(mask));
    } else {
      tmp = new Pair(new ULongArray(mask), new ULongArray(operand));
    }
    var tmp0_container = tmp;
    var bigger = tmp0_container.component1_7eebsc_k$().storage_1;
    var smaller = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp$ret$4;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = _ULongArray___get_size__impl__ju6dtr(smaller);
    var tmp_0 = 0;
    var tmp_1 = tmp0_ULongArray;
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$3;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.and.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.and' call
      var tmp0_and = ULongArray__get_impl_pr71q9(operand, tmp_3);
      var tmp1_and = ULongArray__get_impl_pr71q9(mask, tmp_3);
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp1_and)));
      tmp$ret$1 = tmp$ret$0;
      var tmp0_toLong = tmp$ret$1;
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$3 = tmp$ret$2;
      tmp_2[tmp_3] = tmp$ret$3;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp$ret$4 = _ULongArray___init__impl__twm1l3(tmp_2);
    return tmp$ret$4;
  };
  BigInteger63Arithmetic.prototype.or_gocrlu_k$ = function (operand, mask) {
    var tmp$ret$4;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp = 0;
    var tmp_0 = tmp0_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.or.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _ULongArray___get_size__impl__ju6dtr(mask)) {
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.or' call
        var tmp0_or = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var tmp1_or = ULongArray__get_impl_pr71q9(mask, tmp_2);
        tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp1_or)));
        tmp_3 = tmp$ret$0;
      } else {
        tmp_3 = ULongArray__get_impl_pr71q9(operand, tmp_2);
      }
      tmp$ret$1 = tmp_3;
      var tmp0_toLong = tmp$ret$1;
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$3 = tmp$ret$2;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$4 = _ULongArray___init__impl__twm1l3(tmp_1);
    return this.removeLeadingZeros_u2w242_k$(tmp$ret$4);
  };
  BigInteger63Arithmetic.prototype.xor_pqjm4m_k$ = function (operand, mask) {
    if (_ULongArray___get_size__impl__ju6dtr(operand) < _ULongArray___get_size__impl__ju6dtr(mask))
      return this.xor_pqjm4m_k$(mask, operand);
    var tmp$ret$5;
    // Inline function 'kotlin.ULongArray' call
    var tmp0_ULongArray = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp = 0;
    var tmp_0 = tmp0_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$4;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$2;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.xor.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _ULongArray___get_size__impl__ju6dtr(mask)) {
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.xor' call
        var tmp0_xor = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var tmp1_xor = ULongArray__get_impl_pr71q9(mask, tmp_2);
        tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_xor).xor_jjua9n_k$(_ULong___get_data__impl__fggpzb(tmp1_xor)));
        tmp_3 = tmp$ret$0;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.ULong.xor' call
        var tmp2_xor = ULongArray__get_impl_pr71q9(operand, tmp_2);
        tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_xor).xor_jjua9n_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(0, 0)))));
        tmp_3 = tmp$ret$1;
      }
      tmp$ret$2 = tmp_3;
      var tmp0_toLong = tmp$ret$2;
      tmp$ret$3 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$4 = tmp$ret$3;
      tmp_1[tmp_2] = tmp$ret$4;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$5 = _ULongArray___init__impl__twm1l3(tmp_1);
    return this.removeLeadingZeros_u2w242_k$(tmp$ret$5);
  };
  BigInteger63Arithmetic.prototype.not_6prkas_k$ = function (operand) {
    var leadingZeros = this.numberOfLeadingZerosInAWord_3s80te_k$(ULongArray__get_impl_pr71q9(operand, _ULongArray___get_size__impl__ju6dtr(operand) - 1 | 0));
    var tmp$ret$5;
    // Inline function 'kotlin.ULong.inv' call
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.minus' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.shl' call
    var tmp0_shl = leadingZeros + 1 | 0;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0))).shl_po5ip6_k$(tmp0_shl));
    var tmp1_minus = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.minus' call
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.toULong' call
    tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1))).and_jhajnj_k$(new Long(-1, 0)));
    var tmp0_minus = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_minus).minus_llf5ei_k$(_ULong___get_data__impl__fggpzb(tmp0_minus)));
    tmp$ret$3 = tmp$ret$2;
    var tmp2_shl = tmp$ret$3;
    var tmp3_shl = this.basePowerOfTwo_1 - leadingZeros | 0;
    tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).shl_po5ip6_k$(tmp3_shl));
    var tmp4_inv = tmp$ret$4;
    tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_inv).inv_28kx_k$());
    var cleanupMask = tmp$ret$5;
    var tmp$ret$13;
    // Inline function 'kotlin.ULongArray' call
    var tmp5_ULongArray = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp = 0;
    var tmp_0 = tmp5_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$12;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$10;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.not.<anonymous>' call
      var tmp_3;
      if (tmp_2 < (_ULongArray___get_size__impl__ju6dtr(operand) - 2 | 0)) {
        var tmp$ret$7;
        // Inline function 'kotlin.ULong.and' call
        var tmp$ret$6;
        // Inline function 'kotlin.ULong.inv' call
        var tmp0_inv = ULongArray__get_impl_pr71q9(operand, tmp_2);
        tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_inv).inv_28kx_k$());
        var tmp1_and = tmp$ret$6;
        var tmp2_and = BigInteger63Arithmetic_getInstance().baseMask_1;
        tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
        tmp_3 = tmp$ret$7;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.ULong.and' call
        var tmp$ret$8;
        // Inline function 'kotlin.ULong.inv' call
        var tmp3_inv = ULongArray__get_impl_pr71q9(operand, tmp_2);
        tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp3_inv).inv_28kx_k$());
        var tmp4_and = tmp$ret$8;
        tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(cleanupMask)));
        tmp_3 = tmp$ret$9;
      }
      tmp$ret$10 = tmp_3;
      var tmp0_toLong = tmp$ret$10;
      tmp$ret$11 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$12 = tmp$ret$11;
      tmp_1[tmp_2] = tmp$ret$12;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$13 = _ULongArray___init__impl__twm1l3(tmp_1);
    var inverted = tmp$ret$13;
    return inverted;
  };
  BigInteger63Arithmetic.prototype.shl_2fq1k7_k$ = function (_this__u8e3s4, places) {
    return this.shiftLeft_f3dma3_k$(_this__u8e3s4, places);
  };
  BigInteger63Arithmetic.prototype.shr_u05prh_k$ = function (_this__u8e3s4, places) {
    return this.shiftRight_tbmvgc_k$(_this__u8e3s4, places);
  };
  BigInteger63Arithmetic.prototype.bitAt_3y3268_k$ = function (operand, position) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = position.div_9s1fi3_k$(new Long(63, 0));
    if (tmp$ret$0.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$1 = position.div_9s1fi3_k$(new Long(63, 0));
    var wordPosition = tmp$ret$1;
    if (wordPosition.compareTo_n4fqi2_k$(toLong(_ULongArray___get_size__impl__ju6dtr(operand))) >= 0) {
      return false;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.Long.rem' call
    tmp$ret$2 = position.rem_9rbcjo_k$(new Long(63, 0));
    var bitPosition = tmp$ret$2;
    var word = ULongArray__get_impl_pr71q9(operand, wordPosition.toInt_1tsl84_k$());
    var tmp$ret$4;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.shl' call
    var tmp0_shl = bitPosition.toInt_1tsl84_k$();
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0))).shl_po5ip6_k$(tmp0_shl));
    var tmp1_and = tmp$ret$3;
    tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(word).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp1_and)));
    return !equals(tmp$ret$4, _ULong___init__impl__c78o9k(new Long(0, 0)));
  };
  BigInteger63Arithmetic.prototype.setBitAt_13j0kv_k$ = function (operand, position, bit) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = position.div_9s1fi3_k$(new Long(63, 0));
    if (tmp$ret$0.compareTo_n4fqi2_k$(toLong(IntCompanionObject_getInstance().MAX_VALUE_1)) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    var tmp$ret$1;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$1 = position.div_9s1fi3_k$(new Long(63, 0));
    var wordPosition = tmp$ret$1;
    if (wordPosition.compareTo_n4fqi2_k$(toLong(_ULongArray___get_size__impl__ju6dtr(operand))) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('Invalid position, addressed word ' + toString(wordPosition) + ' larger than number of words ' + _ULongArray___get_size__impl__ju6dtr(operand));
    }
    var tmp$ret$2;
    // Inline function 'kotlin.Long.rem' call
    tmp$ret$2 = position.rem_9rbcjo_k$(new Long(63, 0));
    var bitPosition = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.shl' call
    var tmp0_shl = bitPosition.toInt_1tsl84_k$();
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0))).shl_po5ip6_k$(tmp0_shl));
    var setMask = tmp$ret$3;
    var tmp$ret$9;
    // Inline function 'kotlin.ULongArray' call
    var tmp1_ULongArray = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp = 0;
    var tmp_0 = tmp1_ULongArray;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$8;
      // Inline function 'kotlin.ULongArray.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$6;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.setBitAt.<anonymous>' call
      var tmp_3;
      if (tmp_2 === wordPosition.toInt_1tsl84_k$()) {
        var tmp_4;
        if (bit) {
          var tmp$ret$4;
          // Inline function 'kotlin.ULong.or' call
          var tmp0_or = ULongArray__get_impl_pr71q9(operand, tmp_2);
          tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(setMask)));
          tmp_4 = tmp$ret$4;
        } else {
          var tmp$ret$5;
          // Inline function 'kotlin.ULong.xor' call
          var tmp1_xor = ULongArray__get_impl_pr71q9(operand, tmp_2);
          tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_xor).xor_jjua9n_k$(_ULong___get_data__impl__fggpzb(setMask)));
          tmp_4 = tmp$ret$5;
        }
        tmp_3 = tmp_4;
      } else {
        tmp_3 = ULongArray__get_impl_pr71q9(operand, tmp_2);
      }
      tmp$ret$6 = tmp_3;
      var tmp0_toLong = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
      tmp$ret$8 = tmp$ret$7;
      tmp_1[tmp_2] = tmp$ret$8;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$9 = _ULongArray___init__impl__twm1l3(tmp_1);
    return tmp$ret$9;
  };
  BigInteger63Arithmetic.prototype.plus_4jwzw9_k$ = function (_this__u8e3s4, other) {
    return this.add_kdhu68_k$(_this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.minus_ykez31_k$ = function (_this__u8e3s4, other) {
    return this.subtract_jhqa8d_k$(_this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.times_s4ejn7_k$ = function (_this__u8e3s4, other) {
    return this.multiply_u6tj2b_k$(_this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.plus_ep83aw_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.add_kdhu68_k$(_this__u8e3s4, tmp$ret$0);
  };
  BigInteger63Arithmetic.prototype.minus_t9lm3m_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.subtract_jhqa8d_k$(_this__u8e3s4, tmp$ret$0);
  };
  BigInteger63Arithmetic.prototype.times_mx0vas_k$ = function (_this__u8e3s4, other) {
    return this.baseMultiply_mf6sff_k$(_this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.div_i3xjq7_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.divide_talz8b_k$(_this__u8e3s4, tmp$ret$0).first_1.storage_1;
  };
  BigInteger63Arithmetic.prototype.rem_cmq2x4_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.divide_talz8b_k$(_this__u8e3s4, tmp$ret$0).second_1.storage_1;
  };
  BigInteger63Arithmetic.prototype.div_j6cgqm_k$ = function (_this__u8e3s4, other) {
    return this.divide_talz8b_k$(_this__u8e3s4, other).first_1.storage_1;
  };
  BigInteger63Arithmetic.prototype.rem_k0om2h_k$ = function (_this__u8e3s4, other) {
    return this.divide_talz8b_k$(_this__u8e3s4, other).second_1.storage_1;
  };
  BigInteger63Arithmetic.prototype.divrem_84hj6l_k$ = function (_this__u8e3s4, other) {
    return this.divide_talz8b_k$(_this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.compareTo_55med6_k$ = function (_this__u8e3s4, other) {
    return this.compare_h3oy0f_k$(_this__u8e3s4, other);
  };
  BigInteger63Arithmetic.prototype.compareTo_d3mdnl_k$ = function (_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.compare_h3oy0f_k$(_this__u8e3s4, tmp$ret$0);
  };
  BigInteger63Arithmetic.prototype.to32Bit_9nrd8j_k$ = function (_this__u8e3s4) {
    return this.convertTo32BitRepresentation_9h3j8v_k$(_this__u8e3s4);
  };
  BigInteger63Arithmetic.prototype.from32Bit_q00nda_k$ = function (_this__u8e3s4) {
    return this.convertFrom32BitRepresentation_g6pgxy_k$(_this__u8e3s4);
  };
  BigInteger63Arithmetic.prototype.fromULong_hblzkh_k$ = function (uLong) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = this.overflowMask_1;
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(uLong).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp0_and)));
    if (!equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$2;
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.and' call
      var tmp1_and = this.baseMask_1;
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(uLong).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp1_and)));
      var tmp2_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1, _ULong___init__impl__c78o9k(new Long(1, 0))]));
      tmp$ret$2 = tmp2_ulongArrayOf;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.ulongArrayOf' call
      tmp$ret$3 = _ULongArray___init__impl__twm1l3(longArrayOf([uLong]));
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  BigInteger63Arithmetic.prototype.fromUInt_cy4kv3_k$ = function (uInt) {
    var tmp$ret$1;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(uInt)).and_jhajnj_k$(new Long(-1, 0)));
    var tmp0_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
    tmp$ret$1 = tmp0_ulongArrayOf;
    return tmp$ret$1;
  };
  BigInteger63Arithmetic.prototype.fromUShort_nm7bax_k$ = function (uShort) {
    var tmp$ret$1;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UShort___get_data__impl__g0245(uShort)).and_jhajnj_k$(new Long(65535, 0)));
    var tmp0_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
    tmp$ret$1 = tmp0_ulongArrayOf;
    return tmp$ret$1;
  };
  BigInteger63Arithmetic.prototype.fromUByte_mymlzl_k$ = function (uByte) {
    var tmp$ret$1;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UByte___get_data__impl__jof9qr(uByte)).and_jhajnj_k$(new Long(255, 0)));
    var tmp0_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
    tmp$ret$1 = tmp0_ulongArrayOf;
    return tmp$ret$1;
  };
  BigInteger63Arithmetic.prototype.fromLong_he24gz_k$ = function (long) {
    Companion_getInstance();
    if (long.equals(new Long(0, -2147483648))) {
      var tmp$ret$0;
      // Inline function 'kotlin.ulongArrayOf' call
      tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
      return tmp$ret$0;
    }
    var tmp$ret$4;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$3;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$2;
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.absoluteValue' call
    tmp$ret$1 = abs(long);
    var tmp0_toULong = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(tmp0_toULong);
    var tmp1_and = tmp$ret$2;
    var tmp2_and = this.baseMask_1;
    tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(tmp2_and)));
    var tmp3_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$3]));
    tmp$ret$4 = tmp3_ulongArrayOf;
    return tmp$ret$4;
  };
  BigInteger63Arithmetic.prototype.fromInt_o8kqpb_k$ = function (int) {
    var tmp$ret$2;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = toLong(int);
    tmp$ret$0 = abs(tmp0__get_absoluteValue__nukmtt);
    var tmp1_toULong = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(tmp1_toULong);
    var tmp2_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
    tmp$ret$2 = tmp2_ulongArrayOf;
    return tmp$ret$2;
  };
  BigInteger63Arithmetic.prototype.fromShort_j5p27l_k$ = function (short) {
    var tmp$ret$2;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = short;
    tmp$ret$0 = abs_0(tmp0__get_absoluteValue__nukmtt);
    var tmp1_toULong = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(tmp1_toULong));
    var tmp2_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
    tmp$ret$2 = tmp2_ulongArrayOf;
    return tmp$ret$2;
  };
  BigInteger63Arithmetic.prototype.fromByte_vyarwl_k$ = function (byte) {
    var tmp$ret$2;
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = byte;
    tmp$ret$0 = abs_0(tmp0__get_absoluteValue__nukmtt);
    var tmp1_toULong = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(tmp1_toULong));
    var tmp2_ulongArrayOf = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
    tmp$ret$2 = tmp2_ulongArrayOf;
    return tmp$ret$2;
  };
  BigInteger63Arithmetic.prototype.fromUByteArray_2uik0t_k$ = function (source) {
    var padLength = 8 - (_UByteArray___get_size__impl__h6pkdv(source) % 8 | 0) | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.plus' call
    var tmp0_plus = _UByteArray___init__impl__ip4y9n_0(padLength);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.plus' call
    var tmp0_plus_0 = _UByteArray___get_storage__impl__d4kctt(tmp0_plus);
    var tmp1_plus = _UByteArray___get_storage__impl__d4kctt(source);
    tmp$ret$0 = primitiveArrayConcat([tmp0_plus_0, tmp1_plus]);
    tmp$ret$1 = _UByteArray___init__impl__ip4y9n(tmp$ret$0);
    var paddedSource = tmp$ret$1;
    var trimmedSource = toUByteArray(flatten(reversed(chunked(new UByteArray(paddedSource), 8))));
    var ulongsCount = _UByteArray___get_size__impl__h6pkdv(trimmedSource) / 8 | 0;
    var ulongRest = _UByteArray___get_size__impl__h6pkdv(trimmedSource) % 8 | 0;
    var ulongArray = _ULongArray___init__impl__twm1l3_0(ulongsCount + 1 | 0);
    var inductionVariable = 0;
    if (inductionVariable < ulongsCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 8)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$4;
            // Inline function 'kotlin.ULong.or' call
            var tmp4_or = ULongArray__get_impl_pr71q9(ulongArray, i);
            var tmp$ret$3;
            // Inline function 'kotlin.ULong.shl' call
            var tmp$ret$2;
            // Inline function 'kotlin.UByte.toULong' call
            var tmp1_toULong = UByteArray__get_impl_t5f3hv(trimmedSource, imul(i, 8) + j | 0);
            tmp$ret$2 = _ULong___init__impl__c78o9k(toLong(_UByte___get_data__impl__jof9qr(tmp1_toULong)).and_jhajnj_k$(new Long(255, 0)));
            var tmp2_shl = tmp$ret$2;
            var tmp3_shl = 56 - imul(j, 8) | 0;
            tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).shl_po5ip6_k$(tmp3_shl));
            var tmp5_or = tmp$ret$3;
            tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp5_or)));
            ULongArray__set_impl_z19mvh(ulongArray, i, tmp$ret$4);
          }
           while (inductionVariable_0 < 8);
      }
       while (inductionVariable < ulongsCount);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < ulongRest)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp = _ULongArray___get_size__impl__ju6dtr(ulongArray) - 1 | 0;
        var tmp$ret$7;
        // Inline function 'kotlin.ULong.or' call
        var tmp9_or = ULongArray__get_impl_pr71q9(ulongArray, _ULongArray___get_size__impl__ju6dtr(ulongArray) - 1 | 0);
        var tmp$ret$6;
        // Inline function 'kotlin.ULong.shl' call
        var tmp$ret$5;
        // Inline function 'kotlin.UByte.toULong' call
        var tmp6_toULong = UByteArray__get_impl_t5f3hv(trimmedSource, imul(ulongsCount, 8) + i_0 | 0);
        tmp$ret$5 = _ULong___init__impl__c78o9k(toLong(_UByte___get_data__impl__jof9qr(tmp6_toULong)).and_jhajnj_k$(new Long(255, 0)));
        var tmp7_shl = tmp$ret$5;
        var tmp8_shl = imul(ulongRest - 1 | 0, 8) - imul(i_0, 8) | 0;
        tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_shl).shl_po5ip6_k$(tmp8_shl));
        var tmp10_or = tmp$ret$6;
        tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp10_or)));
        ULongArray__set_impl_z19mvh(ulongArray, tmp, tmp$ret$7);
      }
       while (inductionVariable_1 < ulongRest);
    var tmp$ret$10;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      var tmp$ret$8;
      // Inline function 'kotlin.collections.lastIndex' call
      tmp$ret$8 = get_lastIndex_1(_ULongArray___get_storage__impl__28e64j(ulongArray));
      var inductionVariable_2 = tmp$ret$8;
      if (0 <= inductionVariable_2)
        do {
          var index = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + -1 | 0;
          var tmp$ret$9;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.fromUByteArray.<anonymous>' call
          var tmp11__anonymous__tkubxh = ULongArray__get_impl_pr71q9(ulongArray, index);
          tmp$ret$9 = equals(tmp11__anonymous__tkubxh, _ULong___init__impl__c78o9k(new Long(0, 0)));
          if (!tmp$ret$9) {
            tmp$ret$10 = take_0(ulongArray, index + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable_2);
      tmp$ret$10 = emptyList();
    }
    var result = this.convertFrom64BitRepresentation_jn2lw8_k$(toULongArray(tmp$ret$10));
    return result;
  };
  BigInteger63Arithmetic.prototype.fromByteArray_eoj773_k$ = function (source) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.asUByteArray' call
    tmp$ret$0 = _UByteArray___init__impl__ip4y9n(source);
    return this.fromUByteArray_2uik0t_k$(tmp$ret$0);
  };
  BigInteger63Arithmetic.prototype.toUByteArray_kay110_k$ = function (operand) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.reversedArray' call
    var tmp0_reversedArray = this.convertTo64BitRepresentation_lvag6v_k$(operand);
    tmp$ret$0 = _ULongArray___init__impl__twm1l3(reversedArray(_ULongArray___get_storage__impl__28e64j(tmp0_reversedArray)));
    var as64Bit = tmp$ret$0;
    var result = _UByteArray___init__impl__ip4y9n_0(imul(_ULongArray___get_size__impl__ju6dtr(as64Bit), 8));
    var inductionVariable = 0;
    var last = _ULongArray___get_size__impl__ju6dtr(as64Bit);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = toBigEndianUByteArray(ULongArray__get_impl_pr71q9(as64Bit, i));
        var tmp2_copyInto = imul(i, 8);
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = _UByteArray___get_storage__impl__d4kctt(tmp1_copyInto);
        var tmp1_copyInto_0 = _UByteArray___get_storage__impl__d4kctt(result);
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp0_copyInto;
        tmp$ret$2 = tmp$ret$1;
        var tmp = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = tmp1_copyInto_0;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp, tmp$ret$4, tmp2_copyInto, 0, 8);
        tmp$ret$5 = tmp1_copyInto_0;
        tmp$ret$6 = result;
      }
       while (inductionVariable < last);
    var tmp$ret$9;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = UByteArray__iterator_impl_509y1p(result);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      if (yielding) {
        list.add_1j60pz_k$(new UByte(item));
      } else {
        var tmp$ret$8;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.toUByteArray.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.UByte.toUInt' call
        tmp$ret$7 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(item) & 255);
        tmp$ret$8 = tmp$ret$7 === _UInt___init__impl__l7qpdl(0);
        if (!tmp$ret$8) {
          list.add_1j60pz_k$(new UByte(item));
          yielding = true;
        }
      }
    }
    tmp$ret$9 = list;
    return toUByteArray(tmp$ret$9);
  };
  BigInteger63Arithmetic.prototype.toByteArray_s51w18_k$ = function (operand) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.asByteArray' call
    var tmp0_asByteArray = this.toUByteArray_kay110_k$(operand);
    tmp$ret$0 = _UByteArray___get_storage__impl__d4kctt(tmp0_asByteArray);
    return tmp$ret$0;
  };
  BigInteger63Arithmetic.prototype.get_powersOf10_cldtlf_k$ = function () {
    return this.powersOf10__1;
  };
  BigInteger63Arithmetic.$metadata$ = objectMeta('BigInteger63Arithmetic', [BigIntegerArithmetic]);
  var BigInteger63Arithmetic_instance;
  function BigInteger63Arithmetic_getInstance() {
    if (BigInteger63Arithmetic_instance == null)
      new BigInteger63Arithmetic();
    return BigInteger63Arithmetic_instance;
  }
  function toBigEndianUByteArray(_this__u8e3s4) {
    var tmp$ret$7;
    // Inline function 'kotlin.UByteArray' call
    var tmp = 0;
    var tmp_0 = 8;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$6;
      // Inline function 'kotlin.UByteArray.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'kotlin.UByte.toByte' call
      var tmp$ret$4;
      // Inline function 'com.ionspin.kotlin.bignum.integer.util.toBigEndianUByteArray.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toUByte' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$0;
      // Inline function 'kotlin.ULong.shr' call
      var tmp0_shr = 56 - imul(tmp_2, 8) | 0;
      tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_this__u8e3s4).ushr_rr8rvr_k$(tmp0_shr));
      var tmp1_and = tmp$ret$0;
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp2_toUByte = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.toUByte' call
      var tmp0_toUByte = _ULong___get_data__impl__fggpzb(tmp2_toUByte);
      tmp$ret$2 = _UByte___init__impl__g9hnc4(tmp0_toUByte.toByte_edm0nx_k$());
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      var tmp0_toByte = tmp$ret$4;
      tmp$ret$5 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
      tmp$ret$6 = tmp$ret$5;
      tmp_1[tmp_2] = tmp$ret$6;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$7 = _UByteArray___init__impl__ip4y9n(tmp_1);
    return tmp$ret$7;
  }
  function toDigit(_this__u8e3s4, base) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) {
      tmp = Char__toInt_impl_vasixd(Char__minus_impl_a2frrh_0(_this__u8e3s4, 48));
    } else if (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(122) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(97)) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65)) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65313) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(65338) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65313)) - 10 | 0;
    } else if (_Char___init__impl__6a9atx(65345) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(65370) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65345)) - 10 | 0;
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(46)))) {
      throw NumberFormatException_init_$Create$('Invalid digit for radix ' + new Char(_this__u8e3s4) + ' (Possibly a decimal value, which is not supported by BigInteger parser');
    } else {
      throw NumberFormatException_init_$Create$('Invalid digit for radix ' + new Char(_this__u8e3s4));
    }
    var digit = tmp;
    if (digit < 0 ? true : digit >= base) {
      throw NumberFormatException_init_$Create$('' + new Char(_this__u8e3s4) + ' is not a valid digit for number system with base ' + base);
    }
    return digit;
  }
  function toDigit$default(_this__u8e3s4, base, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      base = 10;
    return toDigit(_this__u8e3s4, base);
  }
  function times_4(_this__u8e3s4, count) {
    var stringBuilder = StringBuilder_init_$Create$();
    var inductionVariable = new Long(0, 0);
    if (inductionVariable.compareTo_n4fqi2_k$(count) < 0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
        stringBuilder.append_t8oh9e_k$(_this__u8e3s4);
      }
       while (inductionVariable.compareTo_n4fqi2_k$(count) < 0);
    return stringBuilder.toString();
  }
  function prep(_this__u8e3s4, $this) {
    var result = _this__u8e3s4.rem_jqghgr_k$($this.$modulo_1);
    var tmp0_subject = result.sign_1;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = result;
        break;
      case 1:
        tmp = result.plus_o9al5h_k$($this.$modulo_1);
        break;
      case 2:
        tmp = Companion_getInstance_6().ZERO_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ModularBigInteger$Companion$creatorForModulo$1($modulo) {
    this.$modulo_1 = $modulo;
    this.ZERO_1 = new ModularBigInteger(Companion_getInstance_6().ZERO_1, $modulo, this);
    this.ONE_1 = new ModularBigInteger(Companion_getInstance_6().ONE_1, $modulo, this);
    this.TWO_1 = new ModularBigInteger(Companion_getInstance_6().TWO_1, $modulo, this);
    this.TEN_1 = new ModularBigInteger(Companion_getInstance_6().TEN_1, $modulo, this);
  }
  ModularBigInteger$Companion$creatorForModulo$1.prototype.get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.get_ONE_18jnkz_k$ = function () {
    return this.ONE_1;
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.get_TWO_18jjnh_k$ = function () {
    return this.TWO_1;
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.get_TEN_18jk30_k$ = function () {
    return this.TEN_1;
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromBigInteger_30ftd_k$ = function (bigInteger) {
    return new ModularBigInteger(prep(bigInteger, this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.parseString_d68ls2_k$ = function (string, base) {
    return new ModularBigInteger(prep(Companion_getInstance_6().parseString_d68ls2_k$(string, base), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromULong_6igdxg_k$ = function (uLong) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromULong_6igdxg_k$(uLong), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromUInt_vesuxg_k$ = function (uInt) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromUInt_vesuxg_k$(uInt), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromUShort_puylkq_k$ = function (uShort) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromUShort_puylkq_k$(uShort), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromUByte_6dwq2s_k$ = function (uByte) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromUByte_6dwq2s_k$(uByte), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromLong_adx1cg_k$ = function (long) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromLong_adx1cg_k$(long), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromInt_venwfw_k$ = function (int) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromInt_venwfw_k$(int), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromShort_4vs6zg_k$ = function (short) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromShort_4vs6zg_k$(short), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.fromByte_17zj7c_k$ = function (byte) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromByte_17zj7c_k$(byte), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.tryFromFloat_2gb71f_k$ = function (float, exactRequired) {
    return new ModularBigInteger(prep(Companion_getInstance_6().tryFromFloat_2gb71f_k$(float, exactRequired), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.prototype.tryFromDouble_qi6grp_k$ = function (double, exactRequired) {
    return new ModularBigInteger(prep(Companion_getInstance_6().tryFromDouble_qi6grp_k$(double, exactRequired), this), this.$modulo_1, this);
  };
  ModularBigInteger$Companion$creatorForModulo$1.$metadata$ = classMeta(undefined, [Creator]);
  function _get_creator__5ri6cb($this) {
    return $this.creator_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.creatorForModulo_aa2guo_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromULong_6igdxg_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_pjavd1_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromUInt_vesuxg_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_yfy660_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromUShort_puylkq_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_aa8n5w_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromUByte_6dwq2s_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_pjfu2r_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromLong_adx1cg_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_odp93i_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromInt_venwfw_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_aao6at_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromShort_4vs6zg_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_pjm0dz_k$ = function (modulo) {
    return this.creatorForModulo_czwz96_k$(Companion_getInstance_6().fromByte_17zj7c_k$(modulo));
  };
  Companion_2.prototype.creatorForModulo_czwz96_k$ = function (modulo) {
    return new ModularBigInteger$Companion$creatorForModulo$1(modulo);
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function assertSameModulo($this, other) {
    if (!$this.modulus_1.equals(other.modulus_1)) {
      throw RuntimeException_init_$Create$('Different moduli! This ' + $this.modulus_1 + '\n Other ' + other.modulus_1);
    }
  }
  function checkIfDivisible($this, other) {
    if (!other.residue_1.gcd_832ohd_k$($this.modulus_1).equals(Companion_getInstance_6().ONE_1)) {
      throw ArithmeticException_init_$Create$('BigInteger is not invertible. Operand and modulus are not relatively prime (coprime)');
    }
  }
  function ModularBigInteger(signedResidue, modulus, creator) {
    Companion_getInstance_7();
    this.modulus_1 = modulus;
    this.creator_1 = creator;
    var tmp = this;
    var tmp0_subject = signedResidue.sign_1;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp_0;
    switch (tmp0) {
      case 0:
        tmp_0 = signedResidue;
        break;
      case 1:
        tmp_0 = signedResidue.plus_o9al5h_k$(this.modulus_1);
        break;
      case 2:
        tmp_0 = Companion_getInstance_6().ZERO_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.residue_1 = tmp_0;
    if (this.modulus_1.sign_1.equals(Sign_NEGATIVE_getInstance())) {
      throw ArithmeticException_init_$Create$('Modulus must be a positive number');
    }
  }
  ModularBigInteger.prototype.get_modulus_lkc4ge_k$ = function () {
    return this.modulus_1;
  };
  ModularBigInteger.prototype.get_residue_jescrm_k$ = function () {
    return this.residue_1;
  };
  ModularBigInteger.prototype.getCreator_y5p0ja_k$ = function () {
    return this.creator_1;
  };
  ModularBigInteger.prototype.getInstance_rhh4hh_k$ = function () {
    return this;
  };
  ModularBigInteger.prototype.add_ui579i_k$ = function (other) {
    assertSameModulo(this, other);
    return new ModularBigInteger(this.residue_1.plus_o9al5h_k$(other.residue_1).rem_jqghgr_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.add_nl3k2s_k$ = function (other) {
    return this.add_ui579i_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.subtract_ao0vsd_k$ = function (other) {
    assertSameModulo(this, other);
    return new ModularBigInteger(this.residue_1.minus_as3vyt_k$(other.residue_1).rem_jqghgr_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.subtract_ogq3v3_k$ = function (other) {
    return this.subtract_ao0vsd_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.multiply_ul4nb7_k$ = function (other) {
    assertSameModulo(this, other);
    return new ModularBigInteger(this.residue_1.times_y2637j_k$(other.residue_1).rem_jqghgr_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.multiply_cwkmht_k$ = function (other) {
    return this.multiply_ul4nb7_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.divide_uvpqky_k$ = function (other) {
    assertSameModulo(this, other);
    var modInverse = other.residue_1.modInverse_3t6357_k$(this.modulus_1);
    var result = modInverse.times_y2637j_k$(this.residue_1).rem_jqghgr_k$(this.modulus_1);
    return new ModularBigInteger(result, this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.divide_zbvjws_k$ = function (other) {
    return this.divide_uvpqky_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.remainder_izrgci_k$ = function (other) {
    assertSameModulo(this, other);
    checkIfDivisible(this, other);
    var remainder = this.residue_1.rem_jqghgr_k$(other.residue_1);
    var result = remainder.rem_jqghgr_k$(this.modulus_1);
    return new ModularBigInteger(result, this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.remainder_px8lk0_k$ = function (other) {
    return this.remainder_izrgci_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.divideAndRemainder_nx2veo_k$ = function (other) {
    assertSameModulo(this, other);
    checkIfDivisible(this, other);
    var quotientAndRemainder = this.residue_1.divrem_n4lz8w_k$(other.residue_1);
    var quotient = quotientAndRemainder.quotient_1.rem_jqghgr_k$(this.modulus_1);
    var remainder = quotientAndRemainder.remainder_1.rem_jqghgr_k$(this.modulus_1);
    return new Pair(new ModularBigInteger(quotient, this.modulus_1, this.creator_1), new ModularBigInteger(remainder, this.modulus_1, this.creator_1));
  };
  ModularBigInteger.prototype.divideAndRemainder_lbgxlu_k$ = function (other) {
    return this.divideAndRemainder_nx2veo_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.inverse_wevods_k$ = function () {
    var inverse = this.residue_1.modInverse_3t6357_k$(this.modulus_1);
    return new ModularBigInteger(inverse, this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.compare_p202pu_k$ = function (other) {
    assertSameModulo(this, other);
    return this.residue_1.compareTo_m610zm_k$(other.residue_1);
  };
  ModularBigInteger.prototype.isZero_jihrta_k$ = function () {
    return this.residue_1.isZero_jihrta_k$();
  };
  ModularBigInteger.prototype.negate_hcqk8u_k$ = function () {
    return this;
  };
  ModularBigInteger.prototype.abs_22cy_k$ = function () {
    return this;
  };
  ModularBigInteger.prototype.pow_spfetr_k$ = function (exponent) {
    return this.pow_tnf9r5_k$(exponent.residue_1);
  };
  ModularBigInteger.prototype.pow_tnf9r5_k$ = function (exponent) {
    var e = exponent;
    var tmp;
    if (this.modulus_1.equals(Companion_getInstance_6().ONE_1)) {
      tmp = this.creator_1.get_ZERO_wodlgx_k$();
    } else {
      var residue = Companion_getInstance_6().ONE_1;
      var base = this.residue_1;
      while (e.compareTo_m610zm_k$(0) > 0) {
        if (e.rem_kb2195_k$(2).equals(Companion_getInstance_6().ONE_1)) {
          residue = residue.times_y2637j_k$(base).rem_jqghgr_k$(this.modulus_1);
        }
        e = e.shr_wjue3g_k$(1);
        base = base.pow_urdtnb_k$(2).rem_jqghgr_k$(this.modulus_1);
      }
      tmp = new ModularBigInteger(residue, this.modulus_1, this.creator_1);
    }
    return tmp;
  };
  ModularBigInteger.prototype.pow_u6dvr2_k$ = function (exponent) {
    return new ModularBigInteger(this.residue_1.pow_u6dvr2_k$(exponent).rem_jqghgr_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.pow_urdtnb_k$ = function (exponent) {
    return new ModularBigInteger(this.residue_1.pow_urdtnb_k$(exponent).rem_jqghgr_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  ModularBigInteger.prototype.signum_exb08b_k$ = function () {
    return this.residue_1.signum_exb08b_k$();
  };
  ModularBigInteger.prototype.numberOfDecimalDigits_wouqvd_k$ = function () {
    return this.residue_1.numberOfDecimalDigits_wouqvd_k$();
  };
  ModularBigInteger.prototype.unaryMinus_6uz0qp_k$ = function () {
    return this.negate_hcqk8u_k$();
  };
  ModularBigInteger.prototype.secureOverwrite_5be265_k$ = function () {
    this.residue_1.secureOverwrite_5be265_k$();
  };
  ModularBigInteger.prototype.rem_r580vn_k$ = function (other) {
    return this.remainder_izrgci_k$(other);
  };
  ModularBigInteger.prototype.rem_jqghgr_k$ = function (other) {
    return this.rem_r580vn_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  ModularBigInteger.prototype.compareTo_m610zm_k$ = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof ModularBigInteger) {
      tmp = this.compare_p202pu_k$(other);
    } else {
      if (tmp0_subject instanceof BigInteger) {
        tmp = this.residue_1.compare_5f4790_k$(other);
      } else {
        if (tmp0_subject instanceof Long) {
          tmp = this.compare_p202pu_k$(this.creator_1.fromLong_adx1cg_k$(other));
        } else {
          if (typeof tmp0_subject === 'number') {
            tmp = this.compare_p202pu_k$(this.creator_1.fromInt_venwfw_k$(other));
          } else {
            if (typeof tmp0_subject === 'number') {
              tmp = this.compare_p202pu_k$(this.creator_1.fromShort_4vs6zg_k$(other));
            } else {
              if (typeof tmp0_subject === 'number') {
                tmp = this.compare_p202pu_k$(this.creator_1.fromByte_17zj7c_k$(other));
              } else {
                throw RuntimeException_init_$Create$('Invalid comparison type for BigInteger: ' + toString(other));
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  ModularBigInteger.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = false;
    } else {
      tmp = this.compareTo_m610zm_k$(other) === 0;
    }
    return tmp;
  };
  ModularBigInteger.prototype.toString = function () {
    return this.residue_1.toString();
  };
  ModularBigInteger.prototype.toString_flfcob_k$ = function (base) {
    return this.residue_1.toString_flfcob_k$(base);
  };
  ModularBigInteger.prototype.toStringWithModulo_goi7q1_k$ = function (base) {
    return this.residue_1.toString_flfcob_k$(base) + ' mod ' + this.modulus_1.toString_flfcob_k$(base);
  };
  ModularBigInteger.prototype.toStringWithModulo$default_8ycppi_k$ = function (base, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      base = 10;
    return this.toStringWithModulo_goi7q1_k$(base);
  };
  ModularBigInteger.prototype.divrem_smvbuq_k$ = function (other) {
    var result = this.divideAndRemainder_nx2veo_k$(other);
    return new ModularQuotientAndRemainder(result.first_1, result.second_1);
  };
  ModularBigInteger.prototype.toBigInteger_xwiad5_k$ = function () {
    return this.residue_1;
  };
  ModularBigInteger.prototype.checkIfDivisibleBoolean_odlqa6_k$ = function (first, second) {
    return second.residue_1.gcd_832ohd_k$(first.modulus_1).equals(Companion_getInstance_6().ONE_1);
  };
  ModularBigInteger.prototype.intValue_6699zc_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt = IntCompanionObject_getInstance().MAX_VALUE_1;
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to int and provide exact value');
    }
    return this.residue_1.intValue_6699zc_k$(exactRequired);
  };
  ModularBigInteger.prototype.longValue_n92i4l_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      Companion_getInstance();
      var tmp0_toUInt = new Long(-1, 2147483647);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to long and provide exact value');
    }
    return this.residue_1.longValue_n92i4l_k$(exactRequired);
  };
  ModularBigInteger.prototype.byteValue_uywx5d_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt = ByteCompanionObject_getInstance().MAX_VALUE_1;
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to byte and provide exact value');
    }
    return this.residue_1.byteValue_uywx5d_k$(exactRequired);
  };
  ModularBigInteger.prototype.shortValue_yl9ynv_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt = ShortCompanionObject_getInstance().MAX_VALUE_1;
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to short and provide exact value');
    }
    return this.residue_1.shortValue_yl9ynv_k$(exactRequired);
  };
  ModularBigInteger.prototype.uintValue_p7sneg_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.UInt.toUInt' call
      Companion_getInstance_0();
      var tmp0_toUInt = _UInt___init__impl__l7qpdl(-1);
      tmp$ret$0 = tmp0_toUInt;
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned int and provide exact value');
    }
    return this.residue_1.uintValue_p7sneg_k$(exactRequired);
  };
  ModularBigInteger.prototype.ulongValue_xcqapg_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toUInt' call
      Companion_getInstance_1();
      var tmp0_toUInt = _ULong___init__impl__c78o9k(new Long(-1, -1));
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      var tmp0_toUInt_0 = _ULong___get_data__impl__fggpzb(tmp0_toUInt);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt_0.toInt_1tsl84_k$());
      tmp$ret$1 = tmp$ret$0;
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$1)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned long and provide exact value');
    }
    return this.residue_1.ulongValue_xcqapg_k$(exactRequired);
  };
  ModularBigInteger.prototype.ubyteValue_rrikek_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.UByte.toUInt' call
      Companion_getInstance_2();
      var tmp0_toUInt = _UByte___init__impl__g9hnc4(-1);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(tmp0_toUInt) & 255);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned byte and provide exact value');
    }
    return this.residue_1.ubyteValue_rrikek_k$(exactRequired);
  };
  ModularBigInteger.prototype.ushortValue_dp7rvm_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp$ret$0;
      // Inline function 'kotlin.UShort.toUInt' call
      Companion_getInstance_3();
      var tmp0_toUInt = _UShort___init__impl__jigrne(-1);
      tmp$ret$0 = _UInt___init__impl__l7qpdl(_UShort___get_data__impl__g0245(tmp0_toUInt) & 65535);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned short and provide exact value');
    }
    return this.residue_1.ushortValue_dp7rvm_k$(exactRequired);
  };
  ModularBigInteger.prototype.floatValue_dv7hej_k$ = function (exactRequired) {
    return this.residue_1.floatValue$default_hj7b6u_k$(false, 1, null);
  };
  ModularBigInteger.prototype.doubleValue_lwfwgq_k$ = function (exactRequired) {
    return this.residue_1.doubleValue$default_14iozf_k$(false, 1, null);
  };
  ModularBigInteger.prototype.toUByteArray_201ts2_k$ = function () {
    return this.residue_1.toUByteArray_201ts2_k$();
  };
  ModularBigInteger.prototype.toByteArray_qczt2u_k$ = function () {
    return this.residue_1.toByteArray_qczt2u_k$();
  };
  ModularBigInteger.$metadata$ = classMeta('ModularBigInteger', [BigNumber, CommonBigNumberOperations, NarrowingOperations, ByteArraySerializable]);
  function RuntimePlatform() {
    RuntimePlatform_instance = this;
  }
  RuntimePlatform.prototype.currentPlatform_2rav3o_k$ = function () {
    return Platform_JS_getInstance();
  };
  RuntimePlatform.$metadata$ = objectMeta('RuntimePlatform');
  var RuntimePlatform_instance;
  function RuntimePlatform_getInstance() {
    if (RuntimePlatform_instance == null)
      new RuntimePlatform();
    return RuntimePlatform_instance;
  }
  //region block: post-declaration
  Companion.prototype.tryFromFloat$default_y9ccu6_k$ = tryFromFloat$default;
  Companion.prototype.tryFromDouble$default_s0s596_k$ = tryFromDouble$default;
  Companion.prototype.parseString$default_thoqxr_k$ = parseString$default;
  BigDecimal.prototype.intValue$default_s02x47_k$ = intValue$default;
  BigDecimal.prototype.longValue$default_834cqi_k$ = longValue$default;
  BigDecimal.prototype.byteValue$default_xgpyem_k$ = byteValue$default;
  BigDecimal.prototype.shortValue$default_w5822u_k$ = shortValue$default;
  BigDecimal.prototype.uintValue$default_t6sbwh_k$ = uintValue$default;
  BigDecimal.prototype.ulongValue$default_e3m6f5_k$ = ulongValue$default;
  BigDecimal.prototype.ubyteValue$default_ukvndl_k$ = ubyteValue$default;
  BigDecimal.prototype.ushortValue$default_7e0s4f_k$ = ushortValue$default;
  BigDecimal.prototype.floatValue$default_hj7b6u_k$ = floatValue$default;
  BigDecimal.prototype.doubleValue$default_14iozf_k$ = doubleValue$default;
  BigDecimal.prototype.get_isNegative_i24zqw_k$ = get_isNegative;
  BigDecimal.prototype.get_isPositive_kxbjuc_k$ = get_isPositive;
  BigDecimal.prototype.plus_crvk61_k$ = plus_1;
  BigDecimal.prototype.plus_u6jwas_k$ = plus_2;
  BigDecimal.prototype.plus_cce7xw_k$ = plus_3;
  BigDecimal.prototype.plus_u6dpzk_k$ = plus_4;
  BigDecimal.prototype.minus_c5ihzl_k$ = minus_0;
  BigDecimal.prototype.minus_llf5ei_k$ = minus_1;
  BigDecimal.prototype.minus_u9ra1q_k$ = minus_2;
  BigDecimal.prototype.minus_ll8z3a_k$ = minus_3;
  BigDecimal.prototype.times_vzczyd_k$ = times_0;
  BigDecimal.prototype.times_2zfqpc_k$ = times_1;
  BigDecimal.prototype.times_ll626g_k$ = times_2;
  BigDecimal.prototype.times_2z9ke4_k$ = times_3;
  BigDecimal.prototype.div_pipt5c_k$ = div_0;
  BigDecimal.prototype.div_9s1fi3_k$ = div_1;
  BigDecimal.prototype.div_j4i90d_k$ = div_2;
  BigDecimal.prototype.div_9rv96v_k$ = div_3;
  BigDecimal.prototype.rem_kb2195_k$ = rem_0;
  BigDecimal.prototype.rem_9rbcjo_k$ = rem_1;
  BigDecimal.prototype.rem_ii1pdg_k$ = rem_2;
  BigDecimal.prototype.rem_9r568g_k$ = rem_3;
  Companion_1.prototype.parseString$default_thoqxr_k$ = parseString$default;
  Companion_1.prototype.tryFromFloat$default_y9ccu6_k$ = tryFromFloat$default;
  Companion_1.prototype.tryFromDouble$default_s0s596_k$ = tryFromDouble$default;
  BigIntegerRange.prototype.contains_2ehdtg_k$ = contains_0;
  BigIntegerRange.prototype.isEmpty_y1axqb_k$ = isEmpty;
  BigInteger.prototype.intValue$default_s02x47_k$ = intValue$default;
  BigInteger.prototype.longValue$default_834cqi_k$ = longValue$default;
  BigInteger.prototype.byteValue$default_xgpyem_k$ = byteValue$default;
  BigInteger.prototype.shortValue$default_w5822u_k$ = shortValue$default;
  BigInteger.prototype.uintValue$default_t6sbwh_k$ = uintValue$default;
  BigInteger.prototype.ulongValue$default_e3m6f5_k$ = ulongValue$default;
  BigInteger.prototype.ubyteValue$default_ukvndl_k$ = ubyteValue$default;
  BigInteger.prototype.ushortValue$default_7e0s4f_k$ = ushortValue$default;
  BigInteger.prototype.floatValue$default_hj7b6u_k$ = floatValue$default;
  BigInteger.prototype.doubleValue$default_14iozf_k$ = doubleValue$default;
  BigInteger.prototype.get_isNegative_i24zqw_k$ = get_isNegative;
  BigInteger.prototype.get_isPositive_kxbjuc_k$ = get_isPositive;
  BigInteger.prototype.plus_o9al5h_k$ = plus_0;
  BigInteger.prototype.plus_crvk61_k$ = plus_1;
  BigInteger.prototype.plus_u6jwas_k$ = plus_2;
  BigInteger.prototype.plus_cce7xw_k$ = plus_3;
  BigInteger.prototype.plus_u6dpzk_k$ = plus_4;
  BigInteger.prototype.minus_as3vyt_k$ = minus;
  BigInteger.prototype.minus_c5ihzl_k$ = minus_0;
  BigInteger.prototype.minus_llf5ei_k$ = minus_1;
  BigInteger.prototype.minus_u9ra1q_k$ = minus_2;
  BigInteger.prototype.minus_ll8z3a_k$ = minus_3;
  BigInteger.prototype.times_y2637j_k$ = times;
  BigInteger.prototype.times_vzczyd_k$ = times_0;
  BigInteger.prototype.times_2zfqpc_k$ = times_1;
  BigInteger.prototype.times_ll626g_k$ = times_2;
  BigInteger.prototype.times_2z9ke4_k$ = times_3;
  BigInteger.prototype.div_rro038_k$ = div;
  BigInteger.prototype.div_pipt5c_k$ = div_0;
  BigInteger.prototype.div_9s1fi3_k$ = div_1;
  BigInteger.prototype.div_j4i90d_k$ = div_2;
  BigInteger.prototype.div_9rv96v_k$ = div_3;
  BigInteger.prototype.rem_jqghgr_k$ = rem;
  BigInteger.prototype.rem_kb2195_k$ = rem_0;
  BigInteger.prototype.rem_9rbcjo_k$ = rem_1;
  BigInteger.prototype.rem_ii1pdg_k$ = rem_2;
  BigInteger.prototype.rem_9r568g_k$ = rem_3;
  BigInteger32Arithmetic.prototype.toUIntArrayRepresentedAsTypedUByteArray$default_6knwvx_k$ = toUIntArrayRepresentedAsTypedUByteArray$default;
  BigInteger32Arithmetic.prototype.toUIntArrayRepresentedAsUByteArray$default_21zhk4_k$ = toUIntArrayRepresentedAsUByteArray$default;
  ModularBigInteger$Companion$creatorForModulo$1.prototype.parseString$default_thoqxr_k$ = parseString$default;
  ModularBigInteger$Companion$creatorForModulo$1.prototype.tryFromFloat$default_y9ccu6_k$ = tryFromFloat$default;
  ModularBigInteger$Companion$creatorForModulo$1.prototype.tryFromDouble$default_s0s596_k$ = tryFromDouble$default;
  ModularBigInteger.prototype.intValue$default_s02x47_k$ = intValue$default;
  ModularBigInteger.prototype.longValue$default_834cqi_k$ = longValue$default;
  ModularBigInteger.prototype.byteValue$default_xgpyem_k$ = byteValue$default;
  ModularBigInteger.prototype.shortValue$default_w5822u_k$ = shortValue$default;
  ModularBigInteger.prototype.uintValue$default_t6sbwh_k$ = uintValue$default;
  ModularBigInteger.prototype.ulongValue$default_e3m6f5_k$ = ulongValue$default;
  ModularBigInteger.prototype.ubyteValue$default_ukvndl_k$ = ubyteValue$default;
  ModularBigInteger.prototype.ushortValue$default_7e0s4f_k$ = ushortValue$default;
  ModularBigInteger.prototype.floatValue$default_hj7b6u_k$ = floatValue$default;
  ModularBigInteger.prototype.doubleValue$default_14iozf_k$ = doubleValue$default;
  ModularBigInteger.prototype.get_isNegative_i24zqw_k$ = get_isNegative;
  ModularBigInteger.prototype.get_isPositive_kxbjuc_k$ = get_isPositive;
  ModularBigInteger.prototype.plus_o9al5h_k$ = plus_0;
  ModularBigInteger.prototype.plus_crvk61_k$ = plus_1;
  ModularBigInteger.prototype.plus_u6jwas_k$ = plus_2;
  ModularBigInteger.prototype.plus_cce7xw_k$ = plus_3;
  ModularBigInteger.prototype.plus_u6dpzk_k$ = plus_4;
  ModularBigInteger.prototype.minus_as3vyt_k$ = minus;
  ModularBigInteger.prototype.minus_c5ihzl_k$ = minus_0;
  ModularBigInteger.prototype.minus_llf5ei_k$ = minus_1;
  ModularBigInteger.prototype.minus_u9ra1q_k$ = minus_2;
  ModularBigInteger.prototype.minus_ll8z3a_k$ = minus_3;
  ModularBigInteger.prototype.times_y2637j_k$ = times;
  ModularBigInteger.prototype.times_vzczyd_k$ = times_0;
  ModularBigInteger.prototype.times_2zfqpc_k$ = times_1;
  ModularBigInteger.prototype.times_ll626g_k$ = times_2;
  ModularBigInteger.prototype.times_2z9ke4_k$ = times_3;
  ModularBigInteger.prototype.div_rro038_k$ = div;
  ModularBigInteger.prototype.div_pipt5c_k$ = div_0;
  ModularBigInteger.prototype.div_9s1fi3_k$ = div_1;
  ModularBigInteger.prototype.div_j4i90d_k$ = div_2;
  ModularBigInteger.prototype.div_9rv96v_k$ = div_3;
  ModularBigInteger.prototype.rem_kb2195_k$ = rem_0;
  ModularBigInteger.prototype.rem_9rbcjo_k$ = rem_1;
  ModularBigInteger.prototype.rem_ii1pdg_k$ = rem_2;
  ModularBigInteger.prototype.rem_9r568g_k$ = rem_3;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=KotlinBigInteger-bignum-js-ir.js.map
