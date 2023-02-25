(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var objectMeta = kotlin_kotlin.$_$.n8;
  var interfaceMeta = kotlin_kotlin.$_$.u7;
  var asList = kotlin_kotlin.$_$.j4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.i7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.x;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.b1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ca;
  var classMeta = kotlin_kotlin.$_$.o7;
  var Long = kotlin_kotlin.$_$.da;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.ha;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var THROW_ISE = kotlin_kotlin.$_$.ia;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var Enum = kotlin_kotlin.$_$.aa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var indexOf$default = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.m7;
  var charSequenceGet = kotlin_kotlin.$_$.l7;
  var Char = kotlin_kotlin.$_$.y9;
  var equals = kotlin_kotlin.$_$.p7;
  var toLong = kotlin_kotlin.$_$.p8;
  var ArithmeticException = kotlin_kotlin.$_$.x9;
  var numberToLong = kotlin_kotlin.$_$.m8;
  var numberToInt = kotlin_kotlin.$_$.l8;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.o1;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.p1;
  var numberToDouble = kotlin_kotlin.$_$.k8;
  var Duration__unaryMinus_impl_x2k1y0 = kotlin_kotlin.$_$.r1;
  var Companion_getInstance = kotlin_kotlin.$_$.u3;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.v9;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.d;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.q1;
  var Comparable = kotlin_kotlin.$_$.z9;
  var toString = kotlin_kotlin.$_$.r8;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.u;
  //endregion
  //region block: pre-declaration
  DateTimeFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  DateTimeFormatException.prototype.constructor = DateTimeFormatException;
  DayOfWeek.prototype = Object.create(Enum.prototype);
  DayOfWeek.prototype.constructor = DayOfWeek;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  //endregion
  function System() {
    System_instance = this;
  }
  System.prototype.now_2cba_k$ = function () {
    return Companion_getInstance_1().now_2cba_k$();
  };
  System.$metadata$ = objectMeta('System', [Clock_0]);
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Clock_0() {
    Companion_getInstance_0();
  }
  Clock_0.$metadata$ = interfaceMeta('Clock');
  function get_allDaysOfWeek() {
    init_properties_DayOfWeek_kt_4b8zo3();
    return allDaysOfWeek;
  }
  var allDaysOfWeek;
  var properties_initialized_DayOfWeek_kt_chtv49;
  function init_properties_DayOfWeek_kt_4b8zo3() {
    if (properties_initialized_DayOfWeek_kt_chtv49) {
    } else {
      properties_initialized_DayOfWeek_kt_chtv49 = true;
      allDaysOfWeek = asList(values());
    }
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(Object.create(DateTimeFormatException.prototype));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, Object.create(DateTimeFormatException.prototype));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, Object.create(DateTimeFormatException.prototype));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, Object.create(DateTimeFormatException.prototype));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  DateTimeFormatException.$metadata$ = classMeta('DateTimeFormatException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function get_allMonths() {
    init_properties_Month_kt_xpj2lw();
    return allMonths;
  }
  var allMonths;
  var properties_initialized_Month_kt_gieo9c;
  function init_properties_Month_kt_xpj2lw() {
    if (properties_initialized_Month_kt_gieo9c) {
    } else {
      properties_initialized_Month_kt_gieo9c = true;
      allMonths = asList(values_0());
    }
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function get_MILLIS_PER_ONE() {
    return MILLIS_PER_ONE;
  }
  var MILLIS_PER_ONE;
  function get_NANOS_PER_ONE() {
    return NANOS_PER_ONE;
  }
  var NANOS_PER_ONE;
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  InstantIso8601Serializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  InstantIso8601Serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_1().parse_4mmrzm_k$(decoder.decodeString_x3hxsx_k$());
  };
  InstantIso8601Serializer.prototype.serialize_pxaiqm_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString());
  };
  InstantIso8601Serializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_pxaiqm_k$(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  InstantIso8601Serializer.$metadata$ = objectMeta('InstantIso8601Serializer', [KSerializer]);
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MONDAY':
        return DayOfWeek_MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek_THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek_FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek_SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek_SUNDAY_getInstance();
      default:
        DayOfWeek_initEntries();
        THROW_ISE();
        break;
    }
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_getInstance();
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek('SUNDAY', 6);
  }
  function DayOfWeek(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  DayOfWeek.$metadata$ = classMeta('DayOfWeek', undefined, undefined, undefined, undefined, Enum.prototype);
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var tmp = _Char___init__impl__6a9atx(84);
    var time = indexOf$default(isoString, tmp, 0, true, 2, null);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(isoString, index);
          tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(45)));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var tmp_0 = _Char___init__impl__6a9atx(58);
    var separator = indexOf$default(isoString, tmp_0, offset, false, 4, null);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.DISTANT_PAST_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.DISTANT_FUTURE_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.MIN_1 = new Instant_0(Instant.MIN);
    this.MAX_1 = new Instant_0(Instant.MAX);
  }
  Companion_0.prototype.now_2cba_k$ = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  Companion_0.prototype.fromEpochMilliseconds_tgp1r9_k$ = function (epochMilliseconds) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_MILLIS_PER_ONE();
      tmp$ret$0 = epochMilliseconds.div_9s1fi3_k$(toLong(tmp0_div));
      var tmp_0 = tmp$ret$0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$1;
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_MILLIS_PER_ONE();
      tmp$ret$1 = epochMilliseconds.rem_9rbcjo_k$(toLong(tmp1_rem));
      var tmp2_times = tmp$ret$1;
      var tmp3_times = get_NANOS_PER_MILLI();
      tmp$ret$2 = tmp2_times.times_2zfqpc_k$(toLong(tmp3_times));
      tmp = this.fromEpochSeconds_fot8oc_k$(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        if (!isJodaDateTimeException($p))
          throw $p;
        tmp_1 = epochMilliseconds.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  Companion_0.prototype.parse_4mmrzm_k$ = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeParseException($p))
          throw DateTimeFormatException_init_$Create$_1($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_0.prototype.fromEpochSeconds_fot8oc_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.floorDiv' call
      var tmp0_floorDiv = toLong(get_NANOS_PER_ONE());
      var q = nanosecondAdjustment.div_9s1fi3_k$(tmp0_floorDiv);
      if (nanosecondAdjustment.xor_jjua9n_k$(tmp0_floorDiv).compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? !q.times_2zfqpc_k$(tmp0_floorDiv).equals(nanosecondAdjustment) : false) {
        var tmp0 = q;
        q = tmp0.dec_24n6_k$();
      }
      tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.mod' call
      var tmp1_mod = toLong(get_NANOS_PER_ONE());
      var r = nanosecondAdjustment.rem_9rbcjo_k$(tmp1_mod);
      tmp$ret$1 = r.plus_u6jwas_k$(tmp1_mod.and_jhajnj_k$(r.xor_jjua9n_k$(tmp1_mod).and_jhajnj_k$(r.or_s401rn_k$(r.unaryMinus_6uz0qp_k$())).shr_wjue3g_k$(63)));
      var nos = tmp$ret$1.toInt_1tsl84_k$();
      tmp = new Instant_0(Instant.ofEpochSecond(secs, nos));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp_1;
        if (!isJodaDateTimeException($p)) {
          tmp_1 = !($p instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw $p;
        tmp_0 = epochSeconds.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_0.prototype.fromEpochSeconds$default_ejdnnz_k$ = function (epochSeconds, nanosecondAdjustment, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      nanosecondAdjustment = new Long(0, 0);
    return this.fromEpochSeconds_fot8oc_k$(epochSeconds, nanosecondAdjustment);
  };
  Companion_0.prototype.fromEpochSeconds_xv3a1j_k$ = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      tmp = new Instant_0(Instant.ofEpochSecond(epochSeconds, nanosecondAdjustment));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (!isJodaDateTimeException($p))
          throw $p;
        tmp_0 = epochSeconds.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? this.MAX_1 : this.MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion_0.prototype.get_DISTANT_PAST_yzdqbd_k$ = function () {
    return this.DISTANT_PAST_1;
  };
  Companion_0.prototype.get_DISTANT_FUTURE_gftwmi_k$ = function () {
    return this.DISTANT_FUTURE_1;
  };
  Companion_0.prototype.get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  Companion_0.prototype.get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  Companion_0.prototype.serializer_9w0wvi_k$ = function () {
    return InstantIso8601Serializer_getInstance();
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Instant_0(value) {
    Companion_getInstance_1();
    this.value_1 = value;
  }
  Instant_0.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Instant_0.prototype.get_epochSeconds_w76ght_k$ = function () {
    return numberToLong(this.value_1.epochSecond());
  };
  Instant_0.prototype.get_nanosecondsOfSecond_n2ey8j_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  Instant_0.prototype.toEpochMilliseconds_82cfls_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.times' call
    var tmp0_times = this.get_epochSeconds_w76ght_k$();
    var tmp1_times = get_MILLIS_PER_ONE();
    tmp$ret$0 = tmp0_times.times_2zfqpc_k$(toLong(tmp1_times));
    var tmp2_plus = tmp$ret$0;
    var tmp3_plus = this.get_nanosecondsOfSecond_n2ey8j_k$() / get_NANOS_PER_MILLI() | 0;
    tmp$ret$1 = tmp2_plus.plus_u6jwas_k$(toLong(tmp3_plus));
    return tmp$ret$1;
  };
  Instant_0.prototype.plus_bswwzx_k$ = function (duration) {
    var tmp$ret$0;
    // Inline function 'kotlin.time.Duration.toComponents' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp0__anonymous__q1qw7t = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var tmp1__anonymous__uwfjfc = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.plusFix_dvs02v_k$(tmp0__anonymous__q1qw7t.toDouble_ygsx0s_k$(), tmp1__anonymous__uwfjfc));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (!isJodaDateTimeException($p))
          throw $p;
        tmp_0 = tmp0__anonymous__q1qw7t.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? Companion_getInstance_1().MAX_1 : Companion_getInstance_1().MIN_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
    return tmp$ret$0;
  };
  Instant_0.prototype.plusFix_dvs02v_k$ = function (seconds, nanos) {
    var newSeconds = numberToDouble(this.value_1.epochSecond()) + seconds;
    var newNanos = numberToDouble(this.value_1.nano()) + nanos;
    return Instant.ofEpochSecond(newSeconds, newNanos);
  };
  Instant_0.prototype.minus_luqxh3_k$ = function (duration) {
    return this.plus_bswwzx_k$(Duration__unaryMinus_impl_x2k1y0(duration));
  };
  Instant_0.prototype.minus_q82skq_k$ = function (other) {
    var diff = Duration.between(other.value_1, this.value_1);
    var tmp$ret$0;
    // Inline function 'kotlin.time.Companion.seconds' call
    var tmp0__get_seconds__yb22lo = Companion_getInstance();
    var tmp1__get_seconds__bshwyb = numberToDouble(diff.seconds());
    tmp$ret$0 = toDuration(tmp1__get_seconds__bshwyb, DurationUnit_SECONDS_getInstance());
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var tmp2__get_nanoseconds__p8v23m = Companion_getInstance();
    var tmp3__get_nanoseconds__ba33fn = numberToDouble(diff.nano());
    tmp$ret$1 = toDuration(tmp3__get_nanoseconds__ba33fn, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  Instant_0.prototype.compareTo_qie524_k$ = function (other) {
    return numberToInt(this.value_1.compareTo(other.value_1));
  };
  Instant_0.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_qie524_k$(other instanceof Instant_0 ? other : THROW_CCE());
  };
  Instant_0.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.value_1, other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Instant_0.prototype.hashCode = function () {
    return numberToInt(this.value_1.hashCode());
  };
  Instant_0.prototype.toString = function () {
    return this.value_1.toString();
  };
  Instant_0.$metadata$ = classMeta('Instant', [Comparable], undefined, {0: InstantIso8601Serializer_getInstance});
  function isJodaDateTimeException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeParseException';
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0);
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1);
    Month_MARCH_instance = new Month('MARCH', 2);
    Month_APRIL_instance = new Month('APRIL', 3);
    Month_MAY_instance = new Month('MAY', 4);
    Month_JUNE_instance = new Month('JUNE', 5);
    Month_JULY_instance = new Month('JULY', 6);
    Month_AUGUST_instance = new Month('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month('DECEMBER', 11);
  }
  function Month(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Month.$metadata$ = classMeta('Month', undefined, undefined, undefined, undefined, Enum.prototype);
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function safeAdd(a, b) {
    var sum = a.plus_u6jwas_k$(b);
    if (a.xor_jjua9n_k$(sum).compareTo_n4fqi2_k$(new Long(0, 0)) < 0 ? a.xor_jjua9n_k$(b).compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 : false) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + toString(a) + ' + ' + toString(b));
    }
    return sum;
  }
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_ONE = 1000000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = System_getInstance;
  _.$_$.b = Companion_getInstance_1;
  //endregion
  return _;
}(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js')));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
