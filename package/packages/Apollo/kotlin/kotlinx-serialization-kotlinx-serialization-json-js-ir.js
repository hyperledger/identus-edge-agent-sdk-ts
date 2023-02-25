(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var classMeta = kotlin_kotlin.$_$.e9;
  var Unit_getInstance = kotlin_kotlin.$_$.r4;
  var equals = kotlin_kotlin.$_$.f9;
  var THROW_CCE = kotlin_kotlin.$_$.qc;
  var getStringHashCode = kotlin_kotlin.$_$.i9;
  var Annotation = kotlin_kotlin.$_$.dc;
  var contentEquals = kotlin_kotlin.$_$.o5;
  var hashCode = kotlin_kotlin.$_$.j9;
  var toString = kotlin_kotlin.$_$.ka;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var Map = kotlin_kotlin.$_$.d5;
  var List = kotlin_kotlin.$_$.b5;
  var toInt = kotlin_kotlin.$_$.ob;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.jd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var toLongOrNull = kotlin_kotlin.$_$.qb;
  var toDoubleOrNull = kotlin_kotlin.$_$.lb;
  var toLong = kotlin_kotlin.$_$.rb;
  var toDouble = kotlin_kotlin.$_$.mb;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.h4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var toULongOrNull = kotlin_kotlin.$_$.yb;
  var Companion_getInstance = kotlin_kotlin.$_$.p4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.e3;
  var ULong = kotlin_kotlin.$_$.yc;
  var isInterface = kotlin_kotlin.$_$.t9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var lazy_0 = kotlin_kotlin.$_$.kd;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.h9;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong_0 = kotlin_kotlin.$_$.ia;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.r2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.t2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.d3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.g3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.h2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.j2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.s3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.y8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var charSequenceLength = kotlin_kotlin.$_$.c9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.d9;
  var coerceAtLeast = kotlin_kotlin.$_$.qa;
  var coerceAtMost = kotlin_kotlin.$_$.ra;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var arrayIterator = kotlin_kotlin.$_$.w8;
  var ensureNotNull = kotlin_kotlin.$_$.fd;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var getValue = kotlin_kotlin.$_$.m6;
  var toString_0 = kotlin_kotlin.$_$.rd;
  var copyOf = kotlin_kotlin.$_$.c6;
  var copyOf_0 = kotlin_kotlin.$_$.d6;
  var fillArrayVal = kotlin_kotlin.$_$.g9;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.gc;
  var invoke = kotlin_kotlin.$_$.gd;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.hc;
  var Unit = kotlin_kotlin.$_$.bd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.b8;
  var SuspendFunction2 = kotlin_kotlin.$_$.t8;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var getKClass = kotlin_kotlin.$_$.c;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var isObject = kotlin_kotlin.$_$.w9;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var polymorphicDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var plus = kotlin_kotlin.$_$.md;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IllegalArgumentException = kotlin_kotlin.$_$.kc;
  var isFinite = kotlin_kotlin.$_$.id;
  var isFinite_0 = kotlin_kotlin.$_$.hd;
  var charSequenceGet = kotlin_kotlin.$_$.b9;
  var decodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var decodeNullableSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var toUInt = kotlin_kotlin.$_$.xb;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.s2;
  var toULong = kotlin_kotlin.$_$.zb;
  var toUByte = kotlin_kotlin.$_$.wb;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.i2;
  var toUShort = kotlin_kotlin.$_$.ac;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var Char = kotlin_kotlin.$_$.ec;
  var toString_1 = kotlin_kotlin.$_$.c2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var setOf = kotlin_kotlin.$_$.g7;
  var numberToChar = kotlin_kotlin.$_$.ca;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.b2;
  var equals_0 = kotlin_kotlin.$_$.cb;
  var toByte = kotlin_kotlin.$_$.ha;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ld;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.c4;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.g4;
  var toShort = kotlin_kotlin.$_$.ja;
  var single = kotlin_kotlin.$_$.ib;
  var emptySet = kotlin_kotlin.$_$.k6;
  var plus_0 = kotlin_kotlin.$_$.a7;
  var toList = kotlin_kotlin.$_$.r7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qd;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var shouldEncodeElementDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var THROW_ISE = kotlin_kotlin.$_$.rc;
  var Enum = kotlin_kotlin.$_$.ic;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var indexOf$default = kotlin_kotlin.$_$.i;
  var last = kotlin_kotlin.$_$.v6;
  var removeLast = kotlin_kotlin.$_$.c7;
  var lastIndexOf$default = kotlin_kotlin.$_$.j;
  var Long = kotlin_kotlin.$_$.lc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.l4;
  var charArray = kotlin_kotlin.$_$.a9;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonPrimitiveDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonPrimitiveDecoder.prototype.constructor = JsonPrimitiveDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  AbstractJsonTreeEncoder.prototype = Object.create(NamedValueEncoder.prototype);
  AbstractJsonTreeEncoder.prototype.constructor = AbstractJsonTreeEncoder;
  JsonTreeEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeEncoder.prototype.constructor = JsonTreeEncoder;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype = Object.create(AbstractEncoder.prototype);
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.constructor = AbstractJsonTreeEncoder$encodeTaggedInline$1;
  JsonPrimitiveEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonPrimitiveEncoder.prototype.constructor = JsonPrimitiveEncoder;
  JsonTreeListEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeListEncoder.prototype.constructor = JsonTreeListEncoder;
  JsonTreeMapEncoder.prototype = Object.create(JsonTreeEncoder.prototype);
  JsonTreeMapEncoder.prototype.constructor = JsonTreeMapEncoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.configuration_1 = configuration;
    this.serializersModule_1 = serializersModule;
    this._schemaCache_1 = new DescriptorSchemaCache();
  }
  Json.prototype.get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  Json.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  Json.prototype.get__schemaCache_mw4zkl_k$ = function () {
    return this._schemaCache_1;
  };
  Json.prototype.encodeToString_pl8vu2_k$ = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.release_wtm6d2_k$();
    }
  };
  Json.prototype.decodeFromString_ink0ik_k$ = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.get_descriptor_wjt6a0_k$(), null);
    var result = input.decodeSerializableValue_xpp80o_k$(deserializer);
    lexer.expectEof_2xcy36_k$();
    return result;
  };
  Json.prototype.encodeToJsonElement_cdthrp_k$ = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  Json.prototype.decodeFromJsonElement_96mzou_k$ = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  Json.prototype.parseToJsonElement_lw2h4r_k$ = function (string) {
    return this.decodeFromString_ink0ik_k$(JsonElementSerializer_getInstance(), string);
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function validateConfiguration($this) {
    if (equals($this.get_serializersModule_piitvg_k$(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.configuration_1.useArrayPolymorphism_1, $this.configuration_1.classDiscriminator_1);
    $this.get_serializersModule_piitvg_k$().dumpTo_q6va1n_k$(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator(discriminator) {
    this.discriminator_1 = discriminator;
  }
  JsonClassDiscriminator.prototype.get_discriminator_wfz2j1_k$ = function () {
    return this.discriminator_1;
  };
  JsonClassDiscriminator.prototype.equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.discriminator_1 === tmp0_other_with_cast.discriminator_1))
      return false;
    return true;
  };
  JsonClassDiscriminator.prototype.hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.discriminator_1);
  };
  JsonClassDiscriminator.prototype.toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(discriminator=' + this.discriminator_1 + ')';
  };
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames(names) {
    this.names_1 = names;
  }
  JsonNames.prototype.get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  JsonNames.prototype.equals = function (other) {
    if (!(other instanceof JsonNames))
      return false;
    var tmp0_other_with_cast = other instanceof JsonNames ? other : THROW_CCE();
    if (!contentEquals(this.names_1, tmp0_other_with_cast.names_1))
      return false;
    return true;
  };
  JsonNames.prototype.hashCode = function () {
    return imul(getStringHashCode('names'), 127) ^ hashCode(this.names_1);
  };
  JsonNames.prototype.toString = function () {
    return '@kotlinx.serialization.json.JsonNames(names=' + toString(this.names_1) + ')';
  };
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.encodeDefaults_1 = encodeDefaults;
    this.ignoreUnknownKeys_1 = ignoreUnknownKeys;
    this.isLenient_1 = isLenient;
    this.allowStructuredMapKeys_1 = allowStructuredMapKeys;
    this.prettyPrint_1 = prettyPrint;
    this.explicitNulls_1 = explicitNulls;
    this.prettyPrintIndent_1 = prettyPrintIndent;
    this.coerceInputValues_1 = coerceInputValues;
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.classDiscriminator_1 = classDiscriminator;
    this.allowSpecialFloatingPointValues_1 = allowSpecialFloatingPointValues;
    this.useAlternativeNames_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  JsonConfiguration.prototype.get_ignoreUnknownKeys_kvp19_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  JsonConfiguration.prototype.get_isLenient_1g1x8_k$ = function () {
    return this.isLenient_1;
  };
  JsonConfiguration.prototype.get_allowStructuredMapKeys_fk21t_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  JsonConfiguration.prototype.get_prettyPrint_y7fmum_k$ = function () {
    return this.prettyPrint_1;
  };
  JsonConfiguration.prototype.get_explicitNulls_ppiuof_k$ = function () {
    return this.explicitNulls_1;
  };
  JsonConfiguration.prototype.get_prettyPrintIndent_5z3eey_k$ = function () {
    return this.prettyPrintIndent_1;
  };
  JsonConfiguration.prototype.get_coerceInputValues_gdasvc_k$ = function () {
    return this.coerceInputValues_1;
  };
  JsonConfiguration.prototype.get_useArrayPolymorphism_teidaa_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  JsonConfiguration.prototype.get_classDiscriminator_x3y365_k$ = function () {
    return this.classDiscriminator_1;
  };
  JsonConfiguration.prototype.get_allowSpecialFloatingPointValues_1eu5hp_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  JsonConfiguration.prototype.get_useAlternativeNames_c5maqh_k$ = function () {
    return this.useAlternativeNames_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.encodeDefaults_1 + ', ignoreUnknownKeys=' + this.ignoreUnknownKeys_1 + ', isLenient=' + this.isLenient_1 + ', ' + ('allowStructuredMapKeys=' + this.allowStructuredMapKeys_1 + ', prettyPrint=' + this.prettyPrint_1 + ', explicitNulls=' + this.explicitNulls_1 + ', ') + ("prettyPrintIndent='" + this.prettyPrintIndent_1 + "', coerceInputValues=" + this.coerceInputValues_1 + ', useArrayPolymorphism=' + this.useArrayPolymorphism_1 + ', ') + ("classDiscriminator='" + this.classDiscriminator_1 + "', allowSpecialFloatingPointValues=" + this.allowSpecialFloatingPointValues_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function _get_content__ps04ag($this) {
    return $this.content_1;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return JsonObjectSerializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_key_18j28a_k$();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_value_j01efc_k$();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(58));
    tmp0_apply.append_t8pm91_k$(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_5();
    JsonElement.call(this);
    this.content_1 = content;
  }
  JsonObject.prototype.get_entries_p20ztl_k$ = function () {
    return this.content_1.get_entries_p20ztl_k$();
  };
  JsonObject.prototype.get_keys_wop4xp_k$ = function () {
    return this.content_1.get_keys_wop4xp_k$();
  };
  JsonObject.prototype.get_size_woubt6_k$ = function () {
    return this.content_1.get_size_woubt6_k$();
  };
  JsonObject.prototype.get_values_ksazhn_k$ = function () {
    return this.content_1.get_values_ksazhn_k$();
  };
  JsonObject.prototype.containsKey_mw51tt_k$ = function (key) {
    return this.content_1.containsKey_wgk31w_k$(key);
  };
  JsonObject.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.containsValue_eu7wk0_k$ = function (value) {
    return this.content_1.containsValue_5viga1_k$(value);
  };
  JsonObject.prototype.containsValue_5viga1_k$ = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.containsValue_eu7wk0_k$(value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonObject.prototype.get_4u8u51_k$ = function (key) {
    return this.content_1.get_1mhr4y_k$(key);
  };
  JsonObject.prototype.get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.content_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.content_1.get_entries_p20ztl_k$();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer_9w0wvi_k$ = function () {
    return JsonElementSerializer_getInstance();
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonElement() {
    Companion_getInstance_6();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.serializer_9w0wvi_k$ = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    Companion_getInstance_7();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.get_content_h02jrk_k$();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonPrimitive_1(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function _get_content__ps04ag_0($this) {
    return $this.content_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer_9w0wvi_k$ = function () {
    return JsonArraySerializer_getInstance();
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
    JsonElement.call(this);
    this.content_1 = content;
  }
  JsonArray.prototype.get_size_woubt6_k$ = function () {
    return this.content_1.get_size_woubt6_k$();
  };
  JsonArray.prototype.contains_kpaesj_k$ = function (element) {
    return this.content_1.contains_2ehdt1_k$(element);
  };
  JsonArray.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.contains_kpaesj_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.containsAll_o6wx2e_k$ = function (elements) {
    return this.content_1.containsAll_jr3fla_k$(elements);
  };
  JsonArray.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_o6wx2e_k$(elements);
  };
  JsonArray.prototype.get_fkrdnv_k$ = function (index) {
    return this.content_1.get_fkrdnv_k$(index);
  };
  JsonArray.prototype.indexOf_7jcirr_k$ = function (element) {
    return this.content_1.indexOf_dcv8dt_k$(element);
  };
  JsonArray.prototype.indexOf_dcv8dt_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.indexOf_7jcirr_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  JsonArray.prototype.iterator_jk1svi_k$ = function () {
    return this.content_1.iterator_jk1svi_k$();
  };
  JsonArray.prototype.lastIndexOf_mrbxe9_k$ = function (element) {
    return this.content_1.lastIndexOf_rzx8t5_k$(element);
  };
  JsonArray.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.lastIndexOf_mrbxe9_k$(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.listIterator_xjshxw_k$ = function () {
    return this.content_1.listIterator_xjshxw_k$();
  };
  JsonArray.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.content_1.listIterator_5hanv9_k$(index);
  };
  JsonArray.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    return this.content_1.subList_d153ha_k$(fromIndex, toIndex);
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.content_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.content_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function get_jsonObject(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_jsonArray(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonArray');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.isString_1 = isString;
    this.content_1 = toString(body);
  }
  JsonLiteral.prototype.get_isString_zep7bw_k$ = function () {
    return this.isString_1;
  };
  JsonLiteral.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.isString_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.content_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.content_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.isString_1 === other.isString_1))
      return false;
    if (!(this.content_1 === other.content_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.isString_1 | 0;
    result = imul(31, result) + getStringHashCode(this.content_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function _get_$cachedSerializer$delegate__hyykxm($this) {
    return $this.$cachedSerializer$delegate_1;
  }
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.content_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.get_isString_zep7bw_k$ = function () {
    return false;
  };
  JsonNull.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  JsonNull.prototype.serializer_9w0wvi_k$ = function () {
    return this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  };
  JsonNull.prototype.serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function JsonPrimitive_2(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.get_content_h02jrk_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.get_content_h02jrk_k$());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.get_content_h02jrk_k$();
    }
    return tmp;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.$$delegate_0__1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).get_descriptor_wjt6a0_k$();
    this.serialName_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.get_annotations_20dirp_k$ = function () {
    return this.$$delegate_0__1.get_annotations_20dirp_k$();
  };
  JsonObjectDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.$$delegate_0__1.get_elementsCount_288r0x_k$();
  };
  JsonObjectDescriptor.prototype.get_isInline_usk17w_k$ = function () {
    return this.$$delegate_0__1.get_isInline_usk17w_k$();
  };
  JsonObjectDescriptor.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.$$delegate_0__1.get_isNullable_67sy7o_k$();
  };
  JsonObjectDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return this.$$delegate_0__1.get_kind_wop7ml_k$();
  };
  JsonObjectDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  JsonObjectDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  JsonObjectDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  JsonObjectDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  JsonObjectDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  JsonObjectDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  JsonObjectSerializer.prototype.serialize_wwmfvn_k$ = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  JsonObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wwmfvn_k$(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.element$default_m7h690_k$('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.element$default_m7h690_k$('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.element$default_m7h690_k$('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.element$default_m7h690_k$('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.element$default_m7h690_k$('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().descriptor_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  JsonElementSerializer.prototype.serialize_j52v1g_k$ = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.encodeSerializableValue_bps9ot_k$(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.encodeSerializableValue_bps9ot_k$(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.encodeSerializableValue_bps9ot_k$(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_j52v1g_k$(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement_6lz9ye_k$();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  JsonPrimitiveSerializer.prototype.serialize_b1s4xz_k$ = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.encodeSerializableValue_bps9ot_k$(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.encodeSerializableValue_bps9ot_k$(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_b1s4xz_k$(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.$$delegate_0__1 = ListSerializer(JsonElementSerializer_getInstance()).get_descriptor_wjt6a0_k$();
    this.serialName_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.get_annotations_20dirp_k$ = function () {
    return this.$$delegate_0__1.get_annotations_20dirp_k$();
  };
  JsonArrayDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.$$delegate_0__1.get_elementsCount_288r0x_k$();
  };
  JsonArrayDescriptor.prototype.get_isInline_usk17w_k$ = function () {
    return this.$$delegate_0__1.get_isInline_usk17w_k$();
  };
  JsonArrayDescriptor.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.$$delegate_0__1.get_isNullable_67sy7o_k$();
  };
  JsonArrayDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return this.$$delegate_0__1.get_kind_wop7ml_k$();
  };
  JsonArrayDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  JsonArrayDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  JsonArrayDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  JsonArrayDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  JsonArrayDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  JsonArrayDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  JsonArraySerializer.prototype.serialize_vr3ymf_k$ = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).serialize_32qylj_k$(encoder, value);
  };
  JsonArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_vr3ymf_k$(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  JsonNullSerializer.prototype.serialize_e8ms6d_k$ = function (encoder, value) {
    verify(encoder);
    encoder.encodeNull_ek2hec_k$();
  };
  JsonNullSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_e8ms6d_k$(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify_0(decoder);
    if (decoder.decodeNotNullMark_us4ba1_k$()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.decodeNull_jzrmuj_k$();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  JsonLiteralSerializer.prototype.serialize_qqh0j5_k$ = function (encoder, value) {
    verify(encoder);
    if (value.isString_1) {
      return encoder.encodeString_90sumj_k$(value.content_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.encodeLong_rk3ab9_k$(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.content_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.encodeInline_8gn4q6_k$(serializer_0(Companion_getInstance()).get_descriptor_wjt6a0_k$());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.encodeLong_rk3ab9_k$(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.encodeDouble_79ztsb_k$(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.encodeBoolean_6cztl5_k$(tmp3_safe_receiver);
    }
    encoder.encodeString_90sumj_k$(value.content_1);
  };
  JsonLiteralSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_qqh0j5_k$(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.original$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.original$delegate_1 = lazy_0($deferred);
  }
  defer$1.prototype.get_serialName_u2rqhk_k$ = function () {
    return _get_original__l7ku1m(this).get_serialName_u2rqhk_k$();
  };
  defer$1.prototype.get_kind_wop7ml_k$ = function () {
    return _get_original__l7ku1m(this).get_kind_wop7ml_k$();
  };
  defer$1.prototype.get_elementsCount_288r0x_k$ = function () {
    return _get_original__l7ku1m(this).get_elementsCount_288r0x_k$();
  };
  defer$1.prototype.getElementName_ykpypc_k$ = function (index) {
    return _get_original__l7ku1m(this).getElementName_ykpypc_k$(index);
  };
  defer$1.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return _get_original__l7ku1m(this).getElementIndex_2hwbkl_k$(name);
  };
  defer$1.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return _get_original__l7ku1m(this).getElementAnnotations_a57oar_k$(index);
  };
  defer$1.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return _get_original__l7ku1m(this).getElementDescriptor_sqz94k_k$(index);
  };
  defer$1.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return _get_original__l7ku1m(this).isElementOptional_c3hgb3_k$(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(writer) {
    this.writer_1 = writer;
    this.writingFirst_1 = true;
  }
  Composer.prototype.get_writer_lin69o_k$ = function () {
    return this.writer_1;
  };
  Composer.prototype.set_writingFirst_uixpuw_k$ = function (_set____db54di) {
    this.writingFirst_1 = _set____db54di;
  };
  Composer.prototype.get_writingFirst_pt5bb1_k$ = function () {
    return this.writingFirst_1;
  };
  Composer.prototype.indent_cv7m3p_k$ = function () {
    this.writingFirst_1 = true;
  };
  Composer.prototype.unIndent_456c0k_k$ = function () {
    return Unit_getInstance();
  };
  Composer.prototype.nextItem_403h3p_k$ = function () {
    this.writingFirst_1 = false;
  };
  Composer.prototype.space_pnmf91_k$ = function () {
    return Unit_getInstance();
  };
  Composer.prototype.print_kq9ffk_k$ = function (v) {
    return this.writer_1.writeChar_g0rcso_k$(v);
  };
  Composer.prototype.print_mp71d1_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v);
  };
  Composer.prototype.print_hp9wj4_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v.toString());
  };
  Composer.prototype.print_xvzbiz_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v.toString());
  };
  Composer.prototype.print_wuq48e_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(toLong_0(v));
  };
  Composer.prototype.print_cg84b4_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(toLong_0(v));
  };
  Composer.prototype.print_p8se77_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(toLong_0(v));
  };
  Composer.prototype.print_u73at6_k$ = function (v) {
    return this.writer_1.writeLong_91l7mc_k$(v);
  };
  Composer.prototype.print_8kbg64_k$ = function (v) {
    return this.writer_1.write_wmqgwd_k$(v.toString());
  };
  Composer.prototype.printQuoted_vsh1i5_k$ = function (value) {
    return this.writer_1.writeQuoted_xlksdn_k$(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.configuration_1.prettyPrint_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function _get_forceQuoting__rl6hq5($this) {
    return $this.forceQuoting_1;
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.forceQuoting_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.print_p8se77_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.printQuoted_vsh1i5_k$(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.print_mp71d1_k$(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.print_u73at6_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.printQuoted_vsh1i5_k$(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.print_mp71d1_k$(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.print_wuq48e_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.printQuoted_vsh1i5_k$(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.print_mp71d1_k$(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.print_cg84b4_k$ = function (v) {
    if (this.forceQuoting_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.printQuoted_vsh1i5_k$(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.print_mp71d1_k$(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function _get_json__d8whur($this) {
    return $this.json_1;
  }
  function _set_level__h8xxz5($this, _set____db54di) {
    $this.level_1 = _set____db54di;
  }
  function _get_level__es6iib($this) {
    return $this.level_1;
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.json_1 = json;
    this.level_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.indent_cv7m3p_k$ = function () {
    this.writingFirst_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.unIndent_456c0k_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.nextItem_403h3p_k$ = function () {
    this.writingFirst_1 = false;
    this.print_mp71d1_k$('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.level_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.print_mp71d1_k$(this.json_1.configuration_1.prettyPrintIndent_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.space_pnmf91_k$ = function () {
    this.print_kq9ffk_k$(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _set_isUnmarkedNull__eo66w1($this, _set____db54di) {
    $this.isUnmarkedNull_1 = _set____db54di;
  }
  function readIfAbsent($this, descriptor, index) {
    $this.isUnmarkedNull_1 = !descriptor.isElementOptional_c3hgb3_k$(index) ? descriptor.getElementDescriptor_sqz94k_k$(index).get_isNullable_67sy7o_k$() : false;
    return $this.isUnmarkedNull_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.origin_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.isUnmarkedNull_1 = false;
  }
  JsonElementMarker.prototype.get_isUnmarkedNull_320qrj_k$ = function () {
    return this.isUnmarkedNull_1;
  };
  JsonElementMarker.prototype.mark_xwbrr1_k$ = function (index) {
    this.origin_1.mark_xwbrr1_k$(index);
  };
  JsonElementMarker.prototype.nextUnmarkedIndex_u6mxd2_k$ = function () {
    return this.origin_1.nextUnmarkedIndex_u6mxd2_k$();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.fail$default_p0pca1_k$(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.get_serialName_u2rqhk_k$() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.get_kind_wop7ml_k$() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function InvalidFloatingPointEncoded(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function InvalidFloatingPointEncoded_0(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.get_isNullable_67sy7o_k$() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.get_kind_wop7ml_k$(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.getElementIndex_2hwbkl_k$(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.configuration_1.useAlternativeNames_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.getOrPut_2oe0zz_k$(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.get_1mhr4y_k$(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    Companion_getInstance_0();
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.get_serialName_u2rqhk_k$() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonNameIndexOrThrow$default(_this__u8e3s4, json, name, suffix, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      suffix = '';
    return getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix);
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.getElementAnnotations_a57oar_k$(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.names_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.get_elementsCount_288r0x_k$());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).containsKey_wgk31w_k$(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.getElementName_ykpypc_k$(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.getElementName_ykpypc_k$(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.put_3mhbri_k$(name, index);
  }
  function tryCoerceValue$lambda() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return Unit_getInstance();
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function _set_currentObjectPath__tmh5hk($this, _set____db54di) {
    $this.currentObjectPath_1 = _set____db54di;
  }
  function _get_currentObjectPath__7wo978($this) {
    return $this.currentObjectPath_1;
  }
  function _set_indicies__pjdcbd($this, _set____db54di) {
    $this.indicies_1 = _set____db54di;
  }
  function _get_indicies__cqh0ul($this) {
    return $this.indicies_1;
  }
  function _set_currentDepth__9x14gd($this, _set____db54di) {
    $this.currentDepth_1 = _set____db54di;
  }
  function _get_currentDepth__pgrv0h($this) {
    return $this.currentDepth_1;
  }
  function prettyString($this, it) {
    var tmp0_safe_receiver = (!(it == null) ? isInterface(it, SerialDescriptor) : false) ? it : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_serialName_u2rqhk_k$();
    return tmp1_elvis_lhs == null ? toString_0(it) : tmp1_elvis_lhs;
  }
  function resize($this) {
    var newSize = imul($this.currentDepth_1, 2);
    $this.currentObjectPath_1 = copyOf($this.currentObjectPath_1, newSize);
    $this.indicies_1 = copyOf_0($this.indicies_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.currentObjectPath_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.indicies_1 = tmp_3;
    this.currentDepth_1 = -1;
  }
  JsonPath.prototype.pushDescriptor_yqld09_k$ = function (sd) {
    var tmp0_this = this;
    tmp0_this.currentDepth_1 = tmp0_this.currentDepth_1 + 1 | 0;
    var depth = tmp0_this.currentDepth_1;
    if (depth === this.currentObjectPath_1.length) {
      resize(this);
    }
    this.currentObjectPath_1[depth] = sd;
  };
  JsonPath.prototype.updateDescriptorIndex_64kjsa_k$ = function (index) {
    this.indicies_1[this.currentDepth_1] = index;
  };
  JsonPath.prototype.updateCurrentMapKey_rvnz6l_k$ = function (key) {
    var tmp;
    if (!(this.indicies_1[this.currentDepth_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.currentDepth_1 = tmp0_this.currentDepth_1 + 1 | 0;
      tmp = tmp0_this.currentDepth_1 === this.currentObjectPath_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.currentObjectPath_1[this.currentDepth_1] = key;
    this.indicies_1[this.currentDepth_1] = -2;
  };
  JsonPath.prototype.resetCurrentMapKey_1lk2sk_k$ = function () {
    if (this.indicies_1[this.currentDepth_1] === -2) {
      this.currentObjectPath_1[this.currentDepth_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.popDescriptor_wfdf7z_k$ = function () {
    var depth = this.currentDepth_1;
    if (this.indicies_1[depth] === -2) {
      this.indicies_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentDepth_1;
      tmp0_this.currentDepth_1 = tmp1 - 1 | 0;
    }
    if (!(this.currentDepth_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.currentDepth_1;
      tmp2_this.currentDepth_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.getPath_18su3p_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.currentDepth_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.currentObjectPath_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.get_kind_wop7ml_k$(), LIST_getInstance())) {
            if (!(this.indicies_1[index] === -1)) {
              tmp0_apply.append_ssq29y_k$('[');
              tmp0_apply.append_t8pm91_k$(this.indicies_1[index]);
              tmp0_apply.append_ssq29y_k$(']');
            }
          } else {
            var idx = this.indicies_1[index];
            if (idx >= 0) {
              tmp0_apply.append_ssq29y_k$('.');
              tmp0_apply.append_ssq29y_k$(element.getElementName_ykpypc_k$(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.append_ssq29y_k$('[');
            tmp0_apply.append_ssq29y_k$("'");
            tmp0_apply.append_t8pm91_k$(element);
            tmp0_apply.append_ssq29y_k$("'");
            tmp0_apply.append_ssq29y_k$(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.getPath_18su3p_k$();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.encodeSerializableValue_bps9ot_k$(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function _get_lexer__es58e3($this) {
    return $this.lexer_1;
  }
  function _get_isLenient__2p6q64($this) {
    return $this.isLenient_1;
  }
  function _set_stackDepth__ki8ycc($this, _set____db54di) {
    $this.stackDepth_1 = _set____db54di;
  }
  function _get_stackDepth__5g0d74($this) {
    return $this.stackDepth_1;
  }
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_BEGIN_OBJ());
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var key = $this.isLenient_1 ? $this.lexer_1.consumeStringLenient_9oypvu_k$() : $this.lexer_1.consumeString_j3j2z7_k$();
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.read_22xsm_k$();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.put_3mhbri_k$(key, element);
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.lexer_1.fail$default_p0pca1_k$('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function readObjectImpl($this, reader) {
    var lastToken = $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_BEGIN_OBJ());
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var key = $this.isLenient_1 ? $this.lexer_1.consumeStringLenient_9oypvu_k$() : $this.lexer_1.consumeString_j3j2z7_k$();
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_COLON());
      var element = reader();
      // Inline function 'kotlin.collections.set' call
      result.put_3mhbri_k$(key, element);
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.lexer_1.fail$default_p0pca1_k$('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonObject(result);
  }
  function readArray($this) {
    var lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var element = $this.read_22xsm_k$();
      result.add_1j60pz_k$(element);
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.lexer_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.currentPosition_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.fail$default_p0pca1_k$(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.isLenient_1 ? true : !isString) {
      tmp = $this.lexer_1.consumeStringLenient_9oypvu_k$();
    } else {
      tmp = $this.lexer_1.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.invoke_3bmcpd_k$ = function ($this$$receiver, it, $cont) {
    var tmp = this.create_mx6x0i_k$($this$$receiver, it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.invoke_3bmcpd_k$(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.tmp0_subject0__1 = this.this$0__1.lexer_1.peekNextToken_1gqwr9_k$();
            if (this.tmp0_subject0__1 === get_TC_STRING()) {
              this.WHEN_RESULT1__1 = readValue(this.this$0__1, true);
              this.state_1 = 2;
              continue $sm;
            } else {
              if (this.tmp0_subject0__1 === get_TC_OTHER()) {
                this.WHEN_RESULT1__1 = readValue(this.this$0__1, false);
                this.state_1 = 2;
                continue $sm;
              } else {
                if (this.tmp0_subject0__1 === get_TC_BEGIN_OBJ()) {
                  this.state_1 = 1;
                  suspendResult = readObject_0(this.$this$$receiver_1, this.this$0__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.tmp0_subject0__1 === get_TC_BEGIN_LIST()) {
                    this.WHEN_RESULT1__1 = readArray(this.this$0__1);
                    this.state_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.this$0__1.lexer_1.fail$default_p0pca1_k$("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.create_mx6x0i_k$ = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.this$0__1, completion);
    i.$this$$receiver_1 = $this$$receiver;
    i.it_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.invoke_3bmcpd_k$($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            this.lastToken0__1 = this._this__u8e3s4__1.lexer_1.consumeNextToken_trhodc_k$(get_TC_BEGIN_OBJ());
            if (this._this__u8e3s4__1.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
              this._this__u8e3s4__1.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.result1__1 = LinkedHashMap_init_$Create$();
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!this._this__u8e3s4__1.lexer_1.canConsumeValue_oljqd7_k$()) {
              this.state_1 = 4;
              continue $sm;
            }

            this.key2__1 = this._this__u8e3s4__1.isLenient_1 ? this._this__u8e3s4__1.lexer_1.consumeStringLenient_9oypvu_k$() : this._this__u8e3s4__1.lexer_1.consumeString_j3j2z7_k$();
            this._this__u8e3s4__1.lexer_1.consumeNextToken_trhodc_k$(get_TC_COLON());
            ;
            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__2.callRecursive_6euk1h_k$(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.result1__1.put_3mhbri_k$(this.key2__1, element);
            ;
            this.lastToken0__1 = this._this__u8e3s4__1.lexer_1.consumeNextToken_uf1vsa_k$();
            var tmp0_subject = this.lastToken0__1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.state_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.state_1 = 4;
                continue $sm;
              } else {
                this._this__u8e3s4__1.lexer_1.fail$default_p0pca1_k$('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.state_1 = 1;
            continue $sm;
          case 4:
            if (this.lastToken0__1 === get_TC_BEGIN_OBJ()) {
              this._this__u8e3s4__1.lexer_1.consumeNextToken_trhodc_k$(get_TC_END_OBJ());
            } else if (this.lastToken0__1 === get_TC_COMMA()) {
              this._this__u8e3s4__1.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.result1__1);
          case 5:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 5) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.lexer_1 = lexer;
    this.isLenient_1 = configuration.isLenient_1;
    this.stackDepth_1 = 0;
  }
  JsonTreeReader.prototype.read_22xsm_k$ = function () {
    var token = this.lexer_1.peekNextToken_1gqwr9_k$();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.stackDepth_1 = tmp0_this.stackDepth_1 + 1 | 0;
      if (tmp0_this.stackDepth_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.stackDepth_1 = tmp1_this.stackDepth_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.lexer_1.fail$default_p0pca1_k$(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.get_annotations_20dirp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var annotation = tmp0_iterator.next_20eer_k$();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.discriminator_1;
    }
    return json.configuration_1.classDiscriminator_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.get_json_woos35_k$().configuration_1.useArrayPolymorphism_1;
    }
    if (tmp) {
      return deserializer.deserialize_2t41fm_k$(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.get_descriptor_wjt6a0_k$(), _this__u8e3s4.get_json_woos35_k$());
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.decodeJsonElement_6lz9ye_k$();
    var tmp1_cast = deserializer.get_descriptor_wjt6a0_k$();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.get_4u8u51_k$(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    var tmp2_elvis_lhs = deserializer.findPolymorphicSerializerOrNull_e7t5h9_k$(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.get_json_woos35_k$();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.get_json_woos35_k$().configuration_1.useArrayPolymorphism_1;
    }
    if (tmp) {
      serializer.serialize_32qylj_k$(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$(), _this__u8e3s4.get_json_woos35_k$());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.serialize_32qylj_k$(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.get_descriptor_wjt6a0_k$()).contains_2ehdt1_k$(classDiscriminator)) {
      var baseName = serializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      var actualName = actualSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function _get_useArrayPolymorphism__kxw5q($this) {
    return $this.useArrayPolymorphism_1;
  }
  function _get_discriminator__z1a3lh($this) {
    return $this.discriminator_1;
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.get_kind_wop7ml_k$();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.get_simpleName_r6f8py_k$() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.useArrayPolymorphism_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.get_simpleName_r6f8py_k$() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.getElementName_ykpypc_k$(i);
        if (name === $this.discriminator_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.discriminator_1 = discriminator;
  }
  PolymorphismValidator.prototype.contextual_e1eobl_k$ = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.polymorphic_2hf1qx_k$ = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.get_descriptor_wjt6a0_k$();
    checkKind_0(this, descriptor, actualClass);
    if (!this.useArrayPolymorphism_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.polymorphicDefaultSerializer_mjilks_k$ = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.polymorphicDefaultDeserializer_1n0ayq_k$ = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.map_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.set_h659ud_k$ = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.map_1;
    var value_0 = tmp0_getOrPut.get_1mhr4y_k$(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.put_3mhbri_k$(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.getOrPut_2oe0zz_k$ = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.get_eg3l1p_k$(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.set_h659ud_k$(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.get_eg3l1p_k$ = function (descriptor, key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.get_1mhr4y_k$(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function _get_mode__dah3bc($this) {
    return $this.mode_1;
  }
  function DiscriminatorHolder(discriminatorToSkip) {
    this.discriminatorToSkip_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.prototype.set_discriminatorToSkip_5dl0ju_k$ = function (_set____db54di) {
    this.discriminatorToSkip_1 = _set____db54di;
  };
  DiscriminatorHolder.prototype.get_discriminatorToSkip_kn0fl9_k$ = function () {
    return this.discriminatorToSkip_1;
  };
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.discriminatorToSkip_1 === unknownKey) {
      _this__u8e3s4.discriminatorToSkip_1 = null;
      return true;
    }
    return false;
  }
  function _set_currentIndex__cezf6m($this, _set____db54di) {
    $this.currentIndex_1 = _set____db54di;
  }
  function _get_currentIndex__ryq5qq($this) {
    return $this.currentIndex_1;
  }
  function _set_discriminatorHolder__9fc1gj($this, _set____db54di) {
    $this.discriminatorHolder_1 = _set____db54di;
  }
  function _get_discriminatorHolder__3ve7ft($this) {
    return $this.discriminatorHolder_1;
  }
  function _get_configuration__557qfv($this) {
    return $this.configuration_1;
  }
  function _get_elementMarker__200cvv($this) {
    return $this.elementMarker_1;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.decodeElementIndex_nk5a2l_k$(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === get_TC_COMMA()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.currentIndex_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.currentIndex_1 === -1)) {
        hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
      }
    } else {
      $this.lexer_1.consumeNextToken_ev7fkz_k$(get_COLON());
    }
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (decodingKey) {
        if ($this.currentIndex_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.lexer_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.currentPosition_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.fail$default_p0pca1_k$(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.lexer_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.currentPosition_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.fail$default_p0pca1_k$(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_p0pca1_k$("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.json_1;
      var tmp1_tryCoerceValue = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue.get_isNullable_67sy7o_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.lexer_1.tryConsumeNotNull_blklc7_k$();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.get_kind_wop7ml_k$(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.lexer_1.peekString_9klnyq_k$($this.configuration_1.isLenient_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.lexer_1.consumeString_j3j2z7_k$();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.lexer_1.consumeNextToken_ev7fkz_k$(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.json_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.configuration_1.coerceInputValues_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.elementMarker_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.mark_xwbrr1_k$(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.elementMarker_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nextUnmarkedIndex_u6mxd2_k$();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.configuration_1.ignoreUnknownKeys_1 ? true : trySkip($this.discriminatorHolder_1, $this, key)) {
      $this.lexer_1.skipElement_wcp1ak_k$($this.configuration_1.isLenient_1);
    } else {
      $this.lexer_1.failOnUnknownKey_6lfa5c_k$(key);
    }
    return $this.lexer_1.tryConsumeComma_9n2ve4_k$();
  }
  function decodeListIndex($this) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (!($this.currentIndex_1 === -1) ? !hasComma : false) {
        $this.lexer_1.fail$default_p0pca1_k$('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.configuration_1.isLenient_1) {
      tmp = $this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = $this.lexer_1.consumeKeyString_mfa3ws_k$();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.json_1 = json;
    this.mode_1 = mode;
    this.lexer_1 = lexer;
    this.serializersModule_1 = this.json_1.get_serializersModule_piitvg_k$();
    this.currentIndex_1 = -1;
    this.discriminatorHolder_1 = discriminatorHolder;
    this.configuration_1 = this.json_1.configuration_1;
    this.elementMarker_1 = this.configuration_1.explicitNulls_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.get_json_woos35_k$ = function () {
    return this.json_1;
  };
  StreamingJsonDecoder.prototype.get_lexer_ium8yr_k$ = function () {
    return this.lexer_1;
  };
  StreamingJsonDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  StreamingJsonDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return (new JsonTreeReader(this.json_1.configuration_1, this.lexer_1)).read_22xsm_k$();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.json_1.configuration_1.useArrayPolymorphism_1;
      }
      if (tmp) {
        return deserializer.deserialize_2t41fm_k$(this);
      }
      var discriminator = classDiscriminator(deserializer.get_descriptor_wjt6a0_k$(), this.json_1);
      var type = this.lexer_1.consumeLeadingMatchingValue_hqrr8x_k$(discriminator, this.configuration_1.isLenient_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.findPolymorphicSerializerOrNull_e7t5h9_k$(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.discriminatorHolder_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.deserialize_2t41fm_k$(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.missingFields_1, plus($p.message, ' at path: ') + this.lexer_1.path_1.getPath_18su3p_k$(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    this.lexer_1.path_1.pushDescriptor_yqld09_k$(descriptor);
    this.lexer_1.consumeNextToken_ev7fkz_k$(newMode.begin_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1, descriptor, this.discriminatorHolder_1);
        break;
      default:
        var tmp_0;
        if (this.mode_1.equals(newMode) ? this.json_1.configuration_1.explicitNulls_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1, descriptor, this.discriminatorHolder_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    if (this.json_1.configuration_1.ignoreUnknownKeys_1 ? descriptor.get_elementsCount_288r0x_k$() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.lexer_1.consumeNextToken_ev7fkz_k$(this.mode_1.end_1);
    this.lexer_1.path_1.popDescriptor_wfdf7z_k$();
  };
  StreamingJsonDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.elementMarker_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.isUnmarkedNull_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.lexer_1.tryConsumeNotNull_blklc7_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.decodeSerializableElement_5lsbxj_k$ = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.mode_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.lexer_1.path_1.resetCurrentMapKey_1lk2sk_k$();
    }
    var value = AbstractDecoder.prototype.decodeSerializableElement_5lsbxj_k$.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.lexer_1.path_1.updateCurrentMapKey_rvnz6l_k$(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject.ordinal_1;
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.mode_1.equals(WriteMode_MAP_getInstance())) {
      this.lexer_1.path_1.updateDescriptorIndex_64kjsa_k$(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    var tmp;
    if (this.configuration_1.isLenient_1) {
      tmp = this.lexer_1.consumeBooleanLenient_iqeqb9_k$();
    } else {
      tmp = this.lexer_1.consumeBoolean_8eci30_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toByte_edm0nx_k$()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return value.toByte_edm0nx_k$();
  };
  StreamingJsonDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toShort_ja8oqn_k$()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return value.toShort_ja8oqn_k$();
  };
  StreamingJsonDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toInt_1tsl84_k$()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return value.toInt_1tsl84_k$();
  };
  StreamingJsonDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return this.lexer_1.consumeNumericLiteral_rdea66_k$();
  };
  StreamingJsonDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.json_1.configuration_1.allowSpecialFloatingPointValues_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.json_1.configuration_1.allowSpecialFloatingPointValues_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  StreamingJsonDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    var string = this.lexer_1.consumeStringLenient_9oypvu_k$();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    var tmp;
    if (this.configuration_1.isLenient_1) {
      tmp = this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = this.lexer_1.consumeString_j3j2z7_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeInline_k1q7ba_k$ = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.lexer_1, this.json_1) : AbstractDecoder.prototype.decodeInline_k1q7ba_k$.call(this, descriptor);
  };
  StreamingJsonDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.json_1, this.decodeString_x3hxsx_k$(), ' at path ' + this.lexer_1.path_1.getPath_18su3p_k$());
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.consumeStringLenient_9oypvu_k$();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function _get_lexer__es58e3_0($this) {
    return $this.lexer_1;
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.lexer_1 = lexer;
    this.serializersModule_1 = json.get_serializersModule_piitvg_k$();
  }
  JsonDecoderForUnsignedTypes.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeLong_jzt186_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.lexer_1;
      var input = tmp0_parseString.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function _get_composer__1cv6i3($this) {
    return $this.composer_1;
  }
  function _get_mode__dah3bc_0($this) {
    return $this.mode_1;
  }
  function _get_modeReuseCache__1wg056($this) {
    return $this.modeReuseCache_1;
  }
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function _get_configuration__557qfv_0($this) {
    return $this.configuration_1;
  }
  function _set_forceQuoting__c1fr61($this, _set____db54di) {
    $this.forceQuoting_1 = _set____db54di;
  }
  function _get_forceQuoting__rl6hq5_0($this) {
    return $this.forceQuoting_1;
  }
  function _set_polymorphicDiscriminator__uwj3yn($this, _set____db54di) {
    $this.polymorphicDiscriminator_1 = _set____db54di;
  }
  function _get_polymorphicDiscriminator__qe5wbf($this) {
    return $this.polymorphicDiscriminator_1;
  }
  function encodeTypeInfo($this, descriptor) {
    $this.composer_1.nextItem_403h3p_k$();
    $this.encodeString_90sumj_k$(ensureNotNull($this.polymorphicDiscriminator_1));
    $this.composer_1.print_kq9ffk_k$(get_COLON());
    $this.composer_1.space_pnmf91_k$();
    $this.encodeString_90sumj_k$(descriptor.get_serialName_u2rqhk_k$());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.composer_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.composer_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.composer_1.writer_1, $this.forceQuoting_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.composer_1 = composer;
    this.json_1 = json;
    this.mode_1 = mode;
    this.modeReuseCache_1 = modeReuseCache;
    this.serializersModule_1 = this.json_1.get_serializersModule_piitvg_k$();
    this.configuration_1 = this.json_1.configuration_1;
    this.forceQuoting_1 = false;
    this.polymorphicDiscriminator_1 = null;
    var i = this.mode_1.ordinal_1;
    if (!(this.modeReuseCache_1 == null)) {
      if (!(this.modeReuseCache_1[i] === null) ? true : !(this.modeReuseCache_1[i] === this)) {
        this.modeReuseCache_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.get_json_woos35_k$ = function () {
    return this.json_1;
  };
  StreamingJsonEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  StreamingJsonEncoder.prototype.encodeJsonElement_javf71_k$ = function (element) {
    this.encodeSerializableValue_bps9ot_k$(JsonElementSerializer_getInstance(), element);
  };
  StreamingJsonEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.configuration_1.encodeDefaults_1;
  };
  StreamingJsonEncoder.prototype.encodeSerializableValue_bps9ot_k$ = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.get_json_woos35_k$().configuration_1.useArrayPolymorphism_1;
      }
      if (tmp) {
        serializer.serialize_32qylj_k$(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$(), this.get_json_woos35_k$());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.polymorphicDiscriminator_1 = baseClassDiscriminator;
      actualSerializer.serialize_32qylj_k$(this, value);
    }
  };
  StreamingJsonEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    if (!equals(new Char(newMode.begin_1), new Char(get_INVALID()))) {
      this.composer_1.print_kq9ffk_k$(newMode.begin_1);
      this.composer_1.indent_cv7m3p_k$();
    }
    if (!(this.polymorphicDiscriminator_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.polymorphicDiscriminator_1 = null;
    }
    if (this.mode_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.modeReuseCache_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.ordinal_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.composer_1, this.json_1, newMode, this.modeReuseCache_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    if (!equals(new Char(this.mode_1.end_1), new Char(get_INVALID()))) {
      this.composer_1.unIndent_456c0k_k$();
      this.composer_1.nextItem_403h3p_k$();
      this.composer_1.print_kq9ffk_k$(this.mode_1.end_1);
    }
  };
  StreamingJsonEncoder.prototype.encodeElement_gaiom2_k$ = function (descriptor, index) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject.ordinal_1;
    switch (tmp0) {
      case 1:
        if (!this.composer_1.writingFirst_1) {
          this.composer_1.print_kq9ffk_k$(get_COMMA());
        }

        this.composer_1.nextItem_403h3p_k$();
        ;
        break;
      case 2:
        if (!this.composer_1.writingFirst_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.composer_1.print_kq9ffk_k$(get_COMMA());
            this.composer_1.nextItem_403h3p_k$();
            tmp_0 = true;
          } else {
            this.composer_1.print_kq9ffk_k$(get_COLON());
            this.composer_1.space_pnmf91_k$();
            tmp_0 = false;
          }
          tmp.forceQuoting_1 = tmp_0;
        } else {
          this.forceQuoting_1 = true;
          this.composer_1.nextItem_403h3p_k$();
        }

        break;
      case 3:
        if (index === 0)
          this.forceQuoting_1 = true;
        if (index === 1) {
          this.composer_1.print_kq9ffk_k$(get_COMMA());
          this.composer_1.space_pnmf91_k$();
          this.forceQuoting_1 = false;
        }

        break;
      default:
        if (!this.composer_1.writingFirst_1) {
          this.composer_1.print_kq9ffk_k$(get_COMMA());
        }

        this.composer_1.nextItem_403h3p_k$();
        this.encodeString_90sumj_k$(descriptor.getElementName_ykpypc_k$(index));
        this.composer_1.print_kq9ffk_k$(get_COLON());
        this.composer_1.space_pnmf91_k$();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$ = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.configuration_1.explicitNulls_1) {
      AbstractEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.encodeInline_8gn4q6_k$ = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.json_1, this.mode_1, null) : AbstractEncoder.prototype.encodeInline_8gn4q6_k$.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    this.composer_1.print_mp71d1_k$(get_NULL());
  };
  StreamingJsonEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_8kbg64_k$(value);
    }
  };
  StreamingJsonEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_wuq48e_k$(value);
    }
  };
  StreamingJsonEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_cg84b4_k$(value);
    }
  };
  StreamingJsonEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_p8se77_k$(value);
    }
  };
  StreamingJsonEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_u73at6_k$(value);
    }
  };
  StreamingJsonEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_hp9wj4_k$(value);
    }
    if (!this.configuration_1.allowSpecialFloatingPointValues_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.composer_1.writer_1));
    }
  };
  StreamingJsonEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    if (this.forceQuoting_1) {
      this.encodeString_90sumj_k$(value.toString());
    } else {
      this.composer_1.print_xvzbiz_k$(value);
    }
    if (!this.configuration_1.allowSpecialFloatingPointValues_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.composer_1.writer_1));
    }
  };
  StreamingJsonEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    this.encodeString_90sumj_k$(toString_1(value));
  };
  StreamingJsonEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.composer_1.printQuoted_vsh1i5_k$(value);
  };
  StreamingJsonEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    this.encodeString_90sumj_k$(enumDescriptor.getElementName_ykpypc_k$(index));
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.get_isInline_usk17w_k$() ? get_unsignedNumberDescriptors().contains_2ehdt1_k$(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).get_descriptor_wjt6a0_k$(), serializer_0(Companion_getInstance()).get_descriptor_wjt6a0_k$(), serializer_2(Companion_getInstance_2()).get_descriptor_wjt6a0_k$(), serializer_3(Companion_getInstance_3()).get_descriptor_wjt6a0_k$()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  function get_ESCAPE_MARKERS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_MARKERS;
  }
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.append_t8oh9e_k$(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.append_tbojcw_k$(value, lastPos, i);
          _this__u8e3s4.append_ssq29y_k$(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.append_tbojcw_k$(value, lastPos, value.length);
    } else {
      _this__u8e3s4.append_ssq29y_k$(value);
    }
    _this__u8e3s4.append_t8oh9e_k$(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function SuppressAnimalSniffer() {
  }
  SuppressAnimalSniffer.prototype.equals = function (other) {
    if (!(other instanceof SuppressAnimalSniffer))
      return false;
    var tmp0_other_with_cast = other instanceof SuppressAnimalSniffer ? other : THROW_CCE();
    return true;
  };
  SuppressAnimalSniffer.prototype.hashCode = function () {
    return 0;
  };
  SuppressAnimalSniffer.prototype.toString = function () {
    return '@kotlinx.serialization.json.internal.SuppressAnimalSniffer()';
  };
  SuppressAnimalSniffer.$metadata$ = classMeta('SuppressAnimalSniffer', [Annotation]);
  function readJson(_this__u8e3s4, element, deserializer) {
    var tmp0_subject = element;
    var tmp;
    if (tmp0_subject instanceof JsonObject) {
      tmp = JsonTreeDecoder_init_$Create$(_this__u8e3s4, element, null, null, 12, null);
    } else {
      if (tmp0_subject instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(_this__u8e3s4, element);
      } else {
        var tmp_0;
        if (tmp0_subject instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(tmp0_subject, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(_this__u8e3s4, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.decodeSerializableValue_xpp80o_k$(deserializer);
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.get_currentTagOrNull_yhyzw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.currentElement_sx22im_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.get_value_j01efc_k$() : tmp1_elvis_lhs;
  }
  function primitive(_this__u8e3s4, $this, primitive, block) {
    try {
      var tmp0_elvis_lhs = block(_this__u8e3s4);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive($this, primitive);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        unparsedPrimitive($this, primitive);
      } else {
        throw $p;
      }
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.json_1 = json;
    this.value_1 = value;
    this.configuration_1 = this.get_json_woos35_k$().configuration_1;
  }
  AbstractJsonTreeDecoder.prototype.get_json_woos35_k$ = function () {
    return this.json_1;
  };
  AbstractJsonTreeDecoder.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  AbstractJsonTreeDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.get_json_woos35_k$().get_serializersModule_piitvg_k$();
  };
  AbstractJsonTreeDecoder.prototype.get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  AbstractJsonTreeDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.get_json_woos35_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.get_json_woos35_k$();
        var keyDescriptor = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode.get_serializersModule_piitvg_k$());
        var keyKind = keyDescriptor.get_kind_wop7ml_k$();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.get_json_woos35_k$();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.configuration_1.allowStructuredMapKeys_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.get_json_woos35_k$();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.get_json_woos35_k$();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.get_serialName_u2rqhk_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.getPrimitiveValue_r7a8w1_k$ = function (tag) {
    var currentElement = this.currentElement_sx22im_k$(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_pfrl5l_k$ = function (tag, enumDescriptor) {
    var tmp = this.get_json_woos35_k$();
    var tmp_0 = this.getPrimitiveValue_r7a8w1_k$(tag).get_content_h02jrk_k$();
    return getJsonNameIndexOrThrow$default(enumDescriptor, tmp, tmp_0, null, 4, null);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_jxsvth_k$ = function (tag, enumDescriptor) {
    return this.decodeTaggedEnum_pfrl5l_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNull_9cvjhc_k$ = function (tag) {
    return null;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNull_x1ibl0_k$ = function (tag) {
    return this.decodeTaggedNull_9cvjhc_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_o4mjck_k$ = function (tag) {
    return !(this.currentElement_sx22im_k$(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return this.decodeTaggedNotNullMark_o4mjck_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_69nto3_k$ = function (tag) {
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this.get_json_woos35_k$().configuration_1.isLenient_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.isString_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    return this.decodeTaggedBoolean_69nto3_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_z232qn_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().MIN_VALUE_1;
        if (result <= ByteCompanionObject_getInstance().MAX_VALUE_1 ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_weg8ir_k$ = function (tag) {
    return this.decodeTaggedByte_z232qn_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_d78pwf_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().MIN_VALUE_1;
        if (result <= ShortCompanionObject_getInstance().MAX_VALUE_1 ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_9lw2oz_k$ = function (tag) {
    return this.decodeTaggedShort_d78pwf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_g5h384_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_rqx040_k$ = function (tag) {
    return this.decodeTaggedInt_g5h384_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_vws05x_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_z7jgpd_k$ = function (tag) {
    return this.decodeTaggedLong_vws05x_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_wuaksh_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.get_json_woos35_k$().configuration_1.allowSpecialFloatingPointValues_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_azhupv_k$ = function (tag) {
    return this.decodeTaggedFloat_wuaksh_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_c9vp4a_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.get_json_woos35_k$().configuration_1.allowSpecialFloatingPointValues_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_qq3qze_k$ = function (tag) {
    return this.decodeTaggedDouble_c9vp4a_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_ouxcj4_k$ = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.get_content_h02jrk_k$());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_xsxsj0_k$ = function (tag) {
    return this.decodeTaggedChar_ouxcj4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_9404dm_k$ = function (tag) {
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this.get_json_woos35_k$().configuration_1.isLenient_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.isString_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.get_content_h02jrk_k$();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_5es7hi_k$ = function (tag) {
    return this.decodeTaggedString_9404dm_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInline_qtikgf_k$ = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.getPrimitiveValue_r7a8w1_k$(tag).get_content_h02jrk_k$()), this.get_json_woos35_k$()) : NamedValueDecoder.prototype.decodeTaggedInline_lzvm4z_k$.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInline_lzvm4z_k$ = function (tag, inlineDescriptor) {
    return this.decodeTaggedInline_qtikgf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function _get_polyDiscriminator__o5721t($this) {
    return $this.polyDiscriminator_1;
  }
  function _get_polyDescriptor__k5x0cw($this) {
    return $this.polyDescriptor_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function _get_position__iahqv2($this) {
    return $this.position_1;
  }
  function _set_forceNull__m2khrn($this, _set____db54di) {
    $this.forceNull_1 = _set____db54di;
  }
  function _get_forceNull__jnp3sx($this) {
    return $this.forceNull_1;
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.get_json_woos35_k$();
      var tmp1_tryCoerceValue = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue.get_isNullable_67sy7o_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.currentElement_sx22im_k$(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.get_kind_wop7ml_k$(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.currentElement_sx22im_k$(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.forceNull_1 = (!$this.get_json_woos35_k$().configuration_1.explicitNulls_1 ? !descriptor.isElementOptional_c3hgb3_k$(index) : false) ? descriptor.getElementDescriptor_sqz94k_k$(index).get_isNullable_67sy7o_k$() : false;
    return $this.forceNull_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.polyDiscriminator_1 = polyDiscriminator;
    this.polyDescriptor_1 = polyDescriptor;
    this.position_1 = 0;
    this.forceNull_1 = false;
  }
  JsonTreeDecoder.prototype.get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  JsonTreeDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_1 < descriptor.get_elementsCount_288r0x_k$()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_1;
      tmp0_this.position_1 = tmp1 + 1 | 0;
      var name = this.getTag_8zycz2_k$(descriptor, tmp1);
      var index = this.position_1 - 1 | 0;
      this.forceNull_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.get_value_j01efc_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.configuration_1.coerceInputValues_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return !this.forceNull_1 ? AbstractJsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$.call(this) : false;
  };
  JsonTreeDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    var mainName = desc.getElementName_ykpypc_k$(index);
    if (!this.configuration_1.useAlternativeNames_1)
      return mainName;
    if (this.get_value_j01efc_k$().get_keys_wop4xp_k$().contains_2ehdt1_k$(mainName))
      return mainName;
    var tmp = get_schemaCache(this.get_json_woos35_k$());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.getOrPut_2oe0zz_k$(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.get_value_j01efc_k$().get_keys_wop4xp_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.get_1mhr4y_k$(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return getValue(this.get_value_j01efc_k$(), tag);
  };
  JsonTreeDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    if (descriptor === this.polyDescriptor_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.beginStructure_dv3yt3_k$.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    var tmp;
    if (this.configuration_1.ignoreUnknownKeys_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.get_kind_wop7ml_k$();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.configuration_1.useAlternativeNames_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.get_json_woos35_k$()).get_eg3l1p_k$(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_keys_wop4xp_k$();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.get_value_j01efc_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var key = tmp1_iterator.next_20eer_k$();
      if (!names.contains_2ehdt1_k$(key) ? !(key === this.polyDiscriminator_1) : false) {
        throw UnknownKeyException(key, this.get_value_j01efc_k$().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_currentIndex__cezf6m_0($this, _set____db54di) {
    $this.currentIndex_1 = _set____db54di;
  }
  function _get_currentIndex__ryq5qq_0($this) {
    return $this.currentIndex_1;
  }
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.size_1 = this.value_2.get_size_woubt6_k$();
    this.currentIndex_1 = -1;
  }
  JsonTreeListDecoder.prototype.get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  JsonTreeListDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return this.value_2.get_fkrdnv_k$(toInt(tag));
  };
  JsonTreeListDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.currentIndex_1 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentIndex_1;
      tmp0_this.currentIndex_1 = tmp1 + 1 | 0;
      return this.currentIndex_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.pushTag_2jen4a_k$(get_PRIMITIVE_TAG());
  }
  JsonPrimitiveDecoder.prototype.get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  JsonPrimitiveDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    return 0;
  };
  JsonPrimitiveDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    // Inline function 'kotlin.require' call
    var tmp0_require = tag === get_PRIMITIVE_TAG();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      tmp$ret$0 = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.value_2;
  };
  JsonPrimitiveDecoder.$metadata$ = classMeta('JsonPrimitiveDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function _get_keys__d97k5z($this) {
    return $this.keys_1;
  }
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_2 = _set____db54di;
  }
  function _get_position__iahqv2_0($this) {
    return $this.position_2;
  }
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.value_3 = value;
    this.keys_1 = toList(this.value_3.get_keys_wop4xp_k$());
    this.size_1 = imul(this.keys_1.get_size_woubt6_k$(), 2);
    this.position_2 = -1;
  }
  JsonTreeMapDecoder.prototype.get_value_j01efc_k$ = function () {
    return this.value_3;
  };
  JsonTreeMapDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    var i = index / 2 | 0;
    return this.keys_1.get_fkrdnv_k$(i);
  };
  JsonTreeMapDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_2 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_2;
      tmp0_this.position_2 = tmp1 + 1 | 0;
      return this.position_2;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return (this.position_2 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.value_3, tag);
  };
  JsonTreeMapDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.get_descriptor_wjt6a0_k$())).decodeSerializableValue_xpp80o_k$(deserializer);
  }
  function writeJson(_this__u8e3s4, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(_this__u8e3s4, writeJson$lambda(result));
    encoder.encodeSerializableValue_bps9ot_k$(serializer, value);
    var tmp;
    if (result._v == null) {
      throwUninitializedPropertyAccessException('result');
    } else {
      tmp = result._v;
    }
    return tmp;
  }
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.content_1 = tmp$ret$0;
  }
  JsonTreeEncoder.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  JsonTreeEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.content_1;
    tmp0_set.put_3mhbri_k$(key, element);
  };
  JsonTreeEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$ = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.configuration_1.explicitNulls_1) {
      AbstractJsonTreeEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$.call(this, descriptor, index, serializer, value);
    }
  };
  JsonTreeEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    return new JsonObject(this.content_1);
  };
  JsonTreeEncoder.$metadata$ = classMeta('JsonTreeEncoder', undefined, undefined, undefined, undefined, AbstractJsonTreeEncoder.prototype);
  function _get_nodeConsumer__ng80ct($this) {
    return $this.nodeConsumer_1;
  }
  function _set_polymorphicDiscriminator__uwj3yn_0($this, _set____db54di) {
    $this.polymorphicDiscriminator_1 = _set____db54di;
  }
  function _get_polymorphicDiscriminator__qe5wbf_0($this) {
    return $this.polymorphicDiscriminator_1;
  }
  function AbstractJsonTreeEncoder$encodeTaggedInline$1(this$0, $tag) {
    this.this$0__1 = this$0;
    this.$tag_1 = $tag;
    AbstractEncoder.call(this);
    this.serializersModule_1 = this$0.json_1.get_serializersModule_piitvg_k$();
  }
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.putUnquotedString_bv71rl_k$ = function (s) {
    return this.this$0__1.putElement_q1lsnv_k$(this.$tag_1, new JsonLiteral(s, false));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeInt_5vxmon_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.putUnquotedString_bv71rl_k$(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeLong_rk3ab9_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.putUnquotedString_bv71rl_k$(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeByte_gpyndp_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.putUnquotedString_bv71rl_k$(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeShort_rh3vxz_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.putUnquotedString_bv71rl_k$(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  AbstractJsonTreeEncoder$encodeTaggedInline$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, AbstractEncoder.prototype);
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.putElement_q1lsnv_k$(this$0.get_currentTag_wui9re_k$(), node);
      return Unit_getInstance();
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.json_1 = json;
    this.nodeConsumer_1 = nodeConsumer;
    this.configuration_1 = this.json_1.configuration_1;
    this.polymorphicDiscriminator_1 = null;
  }
  AbstractJsonTreeEncoder.prototype.get_json_woos35_k$ = function () {
    return this.json_1;
  };
  AbstractJsonTreeEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.json_1.get_serializersModule_piitvg_k$();
  };
  AbstractJsonTreeEncoder.prototype.get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  AbstractJsonTreeEncoder.prototype.encodeJsonElement_javf71_k$ = function (element) {
    this.encodeSerializableValue_bps9ot_k$(JsonElementSerializer_getInstance(), element);
  };
  AbstractJsonTreeEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.configuration_1.encodeDefaults_1;
  };
  AbstractJsonTreeEncoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeEncoder.prototype.encodeNotNullMark_40lhgg_k$ = function () {
  };
  AbstractJsonTreeEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.nodeConsumer_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.encodeTaggedNull_7uuv7t_k$(tag);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedNull_7uuv7t_k$ = function (tag) {
    return this.putElement_q1lsnv_k$(tag, JsonNull_getInstance());
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedNull_qi5bv1_k$ = function (tag) {
    return this.encodeTaggedNull_7uuv7t_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInt_bsahq4_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInt_ndzaig_k$ = function (tag, value) {
    return this.encodeTaggedInt_bsahq4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedByte_hkv08e_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedByte_e5naty_k$ = function (tag, value) {
    return this.encodeTaggedByte_hkv08e_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedShort_drdhss_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedShort_4ro7mw_k$ = function (tag, value) {
    return this.encodeTaggedShort_drdhss_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedLong_kg8soa_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedLong_68sg4u_k$ = function (tag, value) {
    return this.encodeTaggedLong_kg8soa_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedFloat_px6isk_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
    if (!this.configuration_1.allowSpecialFloatingPointValues_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.getCurrent_z8uawt_k$()));
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedFloat_xhp5co_k$ = function (tag, value) {
    return this.encodeTaggedFloat_px6isk_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeSerializableValue_bps9ot_k$ = function (serializer, value) {
    if (!(this.get_currentTagOrNull_yhyzw_k$() == null) ? true : !get_requiresTopLevelTag(carrierDescriptor(serializer.get_descriptor_wjt6a0_k$(), this.get_serializersModule_piitvg_k$()))) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        var tmp;
        if (!(serializer instanceof AbstractPolymorphicSerializer)) {
          tmp = true;
        } else {
          tmp = this.get_json_woos35_k$().configuration_1.useArrayPolymorphism_1;
        }
        if (tmp) {
          serializer.serialize_32qylj_k$(this, value);
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        var baseClassDiscriminator = classDiscriminator(serializer.get_descriptor_wjt6a0_k$(), this.get_json_woos35_k$());
        var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
        validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
        checkKind(actualSerializer.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$());
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.encodeSerializableValue.<anonymous>' call
        this.polymorphicDiscriminator_1 = baseClassDiscriminator;
        actualSerializer.serialize_32qylj_k$(this, value);
      }
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new JsonPrimitiveEncoder(this.json_1, this.nodeConsumer_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.encodeSerializableValue.<anonymous>' call
      tmp0_apply.encodeSerializableValue_bps9ot_k$(serializer, value);
      tmp0_apply.endEncode_2disap_k$(serializer.get_descriptor_wjt6a0_k$());
      tmp$ret$1 = tmp0_apply;
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedDouble_8ug3sw_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_1(value));
    if (!this.configuration_1.allowSpecialFloatingPointValues_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.getCurrent_z8uawt_k$()));
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedDouble_dgqq9w_k$ = function (tag, value) {
    return this.encodeTaggedDouble_8ug3sw_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedBoolean_mejn8k_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_2(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedBoolean_wlumqg_k$ = function (tag, value) {
    return this.encodeTaggedBoolean_mejn8k_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedChar_q2imt2_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(toString_1(value)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedChar_2dcv0m_k$ = function (tag, value) {
    return this.encodeTaggedChar_q2imt2_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedString_tybxa8_k$ = function (tag, value) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedString_ault6k_k$ = function (tag, value) {
    return this.encodeTaggedString_tybxa8_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedEnum_x78vv5_k$ = function (tag, enumDescriptor, ordinal) {
    return this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(enumDescriptor.getElementName_ykpypc_k$(ordinal)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedEnum_j126tp_k$ = function (tag, enumDescriptor, ordinal) {
    return this.encodeTaggedEnum_x78vv5_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedValue_vuddkv_k$ = function (tag, value) {
    this.putElement_q1lsnv_k$(tag, JsonPrimitive_0(toString(value)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedValue_rik3ib_k$ = function (tag, value) {
    return this.encodeTaggedValue_vuddkv_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInline_n78nx5_k$ = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      tmp = new AbstractJsonTreeEncoder$encodeTaggedInline$1(this, tag);
    } else {
      tmp = NamedValueEncoder.prototype.encodeTaggedInline_nljf4l_k$.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInline_nljf4l_k$ = function (tag, inlineDescriptor) {
    return this.encodeTaggedInline_n78nx5_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var tmp;
    if (this.get_currentTagOrNull_yhyzw_k$() == null) {
      tmp = this.nodeConsumer_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.json_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.json_1;
        var keyDescriptor = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode.get_serializersModule_piitvg_k$());
        var keyKind = keyDescriptor.get_kind_wop7ml_k$();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.beginStructure.<anonymous>' call
          tmp$ret$0 = new JsonTreeMapEncoder(this.json_1, consumer);
          tmp_2 = tmp$ret$0;
        } else {
          if (tmp0_selectMapMode.configuration_1.allowStructuredMapKeys_1) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeEncoder.beginStructure.<anonymous>' call
            tmp$ret$1 = new JsonTreeListEncoder(this.json_1, consumer);
            tmp_2 = tmp$ret$1;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$2 = tmp_2;
        tmp_0 = tmp$ret$2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.json_1, consumer);
      }
    }
    var encoder = tmp_0;
    if (!(this.polymorphicDiscriminator_1 == null)) {
      encoder.putElement_q1lsnv_k$(ensureNotNull(this.polymorphicDiscriminator_1), JsonPrimitive_0(descriptor.get_serialName_u2rqhk_k$()));
      this.polymorphicDiscriminator_1 = null;
    }
    return encoder;
  };
  AbstractJsonTreeEncoder.prototype.endEncode_2disap_k$ = function (descriptor) {
    this.nodeConsumer_1(this.getCurrent_z8uawt_k$());
  };
  AbstractJsonTreeEncoder.$metadata$ = classMeta('AbstractJsonTreeEncoder', [JsonEncoder], undefined, undefined, undefined, NamedValueEncoder.prototype);
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.get_kind_wop7ml_k$();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.get_kind_wop7ml_k$() === ENUM_getInstance();
    }
    return tmp;
  }
  function _set_content__jmvnbo($this, _set____db54di) {
    $this.content_1 = _set____db54di;
  }
  function _get_content__ps04ag_1($this) {
    return $this.content_1;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_1 = null;
    this.pushTag_2jen4a_k$('primitive');
  }
  JsonPrimitiveEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    // Inline function 'kotlin.require' call
    var tmp0_require = key === 'primitive';
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveEncoder.putElement.<anonymous>' call
      tmp$ret$0 = "This output can only consume primitives with 'primitive' tag";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = this.content_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveEncoder.putElement.<anonymous>' call
      tmp$ret$1 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.content_1 = element;
  };
  JsonPrimitiveEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var tmp0_requireNotNull = this.content_1;
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_requireNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveEncoder.getCurrent.<anonymous>' call
        tmp$ret$0 = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_requireNotNull;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  JsonPrimitiveEncoder.$metadata$ = classMeta('JsonPrimitiveEncoder', undefined, undefined, undefined, undefined, AbstractJsonTreeEncoder.prototype);
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.array_1 = tmp$ret$0;
  }
  JsonTreeListEncoder.prototype.elementName_9sehmv_k$ = function (descriptor, index) {
    return index.toString();
  };
  JsonTreeListEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    var idx = toInt(key);
    this.array_1.add_ydlf05_k$(idx, element);
  };
  JsonTreeListEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    return new JsonArray(this.array_1);
  };
  JsonTreeListEncoder.$metadata$ = classMeta('JsonTreeListEncoder', undefined, undefined, undefined, undefined, AbstractJsonTreeEncoder.prototype);
  function _set_tag__4wejl7($this, _set____db54di) {
    $this.tag_1 = _set____db54di;
  }
  function _get_tag__e6h4qf($this) {
    var tmp = $this.tag_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function _set_isKey__g0qqz4($this, _set____db54di) {
    $this.isKey_1 = _set____db54di;
  }
  function _get_isKey__g0dpic($this) {
    return $this.isKey_1;
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.isKey_1 = true;
  }
  JsonTreeMapEncoder.prototype.putElement_q1lsnv_k$ = function (key, element) {
    if (this.isKey_1) {
      var tmp = this;
      var tmp0_subject = element;
      var tmp_0;
      if (tmp0_subject instanceof JsonPrimitive) {
        tmp_0 = element.get_content_h02jrk_k$();
      } else {
        if (tmp0_subject instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().descriptor_1);
        } else {
          if (tmp0_subject instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().descriptor_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.tag_1 = tmp_0;
      this.isKey_1 = false;
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.content_1;
      var tmp1_set = _get_tag__e6h4qf(this);
      tmp0_set.put_3mhbri_k$(tmp1_set, element);
      this.isKey_1 = true;
    }
  };
  JsonTreeMapEncoder.prototype.getCurrent_z8uawt_k$ = function () {
    return new JsonObject(this.content_1);
  };
  JsonTreeMapEncoder.$metadata$ = classMeta('JsonTreeMapEncoder', undefined, undefined, undefined, undefined, JsonTreeEncoder.prototype);
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_getInstance();
    };
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'OBJ':
        return WriteMode_OBJ_getInstance();
      case 'LIST':
        return WriteMode_LIST_getInstance();
      case 'MAP':
        return WriteMode_MAP_getInstance();
      case 'POLY_OBJ':
        return WriteMode_POLY_OBJ_getInstance();
      default:
        WriteMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.begin_1 = begin;
    this.end_1 = end;
  }
  WriteMode.prototype.get_begin_15e7lr_k$ = function () {
    return this.begin_1;
  };
  WriteMode.prototype.get_end_l5tfxv_k$ = function () {
    return this.end_1;
  };
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.get_kind_wop7ml_k$();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.getElementDescriptor_sqz94k_k$(0), _this__u8e3s4.get_serializersModule_piitvg_k$());
          var keyKind = keyDescriptor.get_kind_wop7ml_k$();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.configuration_1.allowStructuredMapKeys_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.getElementDescriptor_sqz94k_k$(0), _this__u8e3s4.get_serializersModule_piitvg_k$());
    var keyKind = keyDescriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.configuration_1.allowStructuredMapKeys_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.get_kind_wop7ml_k$(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.get_isInline_usk17w_k$()) {
      tmp = carrierDescriptor(_this__u8e3s4.getElementDescriptor_sqz94k_k$(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function _set_peekedString__1ptzck($this, _set____db54di) {
    $this.peekedString_1 = _set____db54di;
  }
  function _get_peekedString__dtwr7k($this) {
    return $this.peekedString_1;
  }
  function appendEscape($this, lastPosition, current) {
    $this.appendRange_nm7sha_k$(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.appendRange_nm7sha_k$(lastPosition, currentPosition);
    var result = $this.escapedString_1.toString();
    $this.escapedString_1.setLength_kzn4fs_k$(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.peekedString_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.peekedString_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.get_source_jl0x7o_k$(), $this.currentPosition_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.prefetchOrEof_yw6lb3_k$(currentPosition);
    if (currentPosition === -1) {
      $this.fail$default_p0pca1_k$('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.get_source_jl0x7o_k$();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.get_source_jl0x7o_k$(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
    }
    $this.escapedString_1.append_t8oh9e_k$(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.currentPosition_1 = startPos;
      $this.ensureHaveChars_2ohzs6_k$();
      if (($this.currentPosition_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.fail$default_p0pca1_k$('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.currentPosition_1);
    }
    $this.escapedString_1.append_t8oh9e_k$(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.fail$default_p0pca1_k$(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.prefetchOrEof_yw6lb3_k$(start);
    if (current >= charSequenceLength($this.get_source_jl0x7o_k$()) ? true : current === -1) {
      $this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.get_source_jl0x7o_k$();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'";
        $this.fail$default_p0pca1_k$(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.get_source_jl0x7o_k$()) - current | 0) < literalSuffix.length) {
      $this.fail$default_p0pca1_k$('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.get_source_jl0x7o_k$(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'";
          $this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.currentPosition_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.currentPosition_1 = 0;
    this.path_1 = new JsonPath();
    this.peekedString_1 = null;
    this.escapedString_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.set_currentPosition_b6llm3_k$ = function (_set____db54di) {
    this.currentPosition_1 = _set____db54di;
  };
  AbstractJsonLexer.prototype.get_currentPosition_ic997d_k$ = function () {
    return this.currentPosition_1;
  };
  AbstractJsonLexer.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  AbstractJsonLexer.prototype.ensureHaveChars_2ohzs6_k$ = function () {
  };
  AbstractJsonLexer.prototype.isNotEof_61q0b1_k$ = function () {
    return !(this.peekNextToken_1gqwr9_k$() === 10);
  };
  AbstractJsonLexer.prototype.isValidValueStart_3nntvd_k$ = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.expectEof_2xcy36_k$ = function () {
    var nextToken = this.consumeNextToken_uf1vsa_k$();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.get_source_jl0x7o_k$(), this.currentPosition_1 - 1 | 0)) + ' instead';
      this.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.set_escapedString_7uc22r_k$ = function (_set____db54di) {
    this.escapedString_1 = _set____db54di;
  };
  AbstractJsonLexer.prototype.get_escapedString_g03bxx_k$ = function () {
    return this.escapedString_1;
  };
  AbstractJsonLexer.prototype.consumeNextToken_trhodc_k$ = function (expected) {
    var token = this.consumeNextToken_uf1vsa_k$();
    if (!(token === expected)) {
      this.fail_pcesvg_k$(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.consumeNextToken_ev7fkz_k$ = function (expected) {
    this.ensureHaveChars_2ohzs6_k$();
    var source = this.get_source_jl0x7o_k$();
    var cpos = this.currentPosition_1;
    $l$loop_0: while (true) {
      cpos = this.prefetchOrEof_yw6lb3_k$(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.currentPosition_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.unexpectedToken_v8110b_k$(expected);
    }
    this.currentPosition_1 = cpos;
    this.unexpectedToken_v8110b_k$(expected);
  };
  AbstractJsonLexer.prototype.unexpectedToken_v8110b_k$ = function (expected) {
    var tmp0_this = this;
    tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 - 1 | 0;
    if ((this.currentPosition_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.consumeStringLenient_9oypvu_k$() === 'null' : false) {
      this.fail_icoaf1_k$("Expected string literal but 'null' literal was found", this.currentPosition_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.fail_pcesvg_k$(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.fail_pcesvg_k$ = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.currentPosition_1 === charSequenceLength(this.get_source_jl0x7o_k$()) ? true : this.currentPosition_1 <= 0) ? 'EOF' : toString_1(charSequenceGet(this.get_source_jl0x7o_k$(), this.currentPosition_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.currentPosition_1 - 1 | 0;
    this.fail$default_p0pca1_k$(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.peekNextToken_1gqwr9_k$ = function () {
    var source = this.get_source_jl0x7o_k$();
    var cpos = this.currentPosition_1;
    $l$loop_0: while (true) {
      cpos = this.prefetchOrEof_yw6lb3_k$(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.currentPosition_1 = cpos;
      return charToTokenClass(ch);
    }
    this.currentPosition_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.tryConsumeNotNull_blklc7_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    current = this.prefetchOrEof_yw6lb3_k$(current);
    var len = charSequenceLength(this.get_source_jl0x7o_k$()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.get_source_jl0x7o_k$(), current + 4 | 0)) === 0 : false)
      return true;
    this.currentPosition_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.skipWhitespaces_ox013r_k$ = function () {
    var current = this.currentPosition_1;
    $l$loop_0: while (true) {
      current = this.prefetchOrEof_yw6lb3_k$(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.get_source_jl0x7o_k$(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.currentPosition_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.peekString_9klnyq_k$ = function (isLenient) {
    var token = this.peekNextToken_1gqwr9_k$();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.consumeStringLenient_9oypvu_k$();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    this.peekedString_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.indexOf_qdephw_k$ = function (char, startPos) {
    var tmp = this.get_source_jl0x7o_k$();
    return indexOf$default(tmp, char, startPos, false, 4, null);
  };
  AbstractJsonLexer.prototype.substring_8we4nj_k$ = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.get_source_jl0x7o_k$();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.consumeString_j3j2z7_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    return this.consumeKeyString_mfa3ws_k$();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.prefetchOrEof_yw6lb3_k$(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.fail$default_p0pca1_k$('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.appendRange_nm7sha_k$(lastPosition, currentPosition);
          currentPosition = this.prefetchOrEof_yw6lb3_k$(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.fail$default_p0pca1_k$('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.substring_8we4nj_k$(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.currentPosition_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.consumeStringLenientNotNull_m2rgts_k$ = function () {
    var result = this.consumeStringLenient_9oypvu_k$();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.fail$default_p0pca1_k$("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.consumeStringLenient_9oypvu_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    var current = this.skipWhitespaces_ox013r_k$();
    if (current >= charSequenceLength(this.get_source_jl0x7o_k$()) ? true : current === -1) {
      var tmp = current;
      this.fail$default_p0pca1_k$('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.get_source_jl0x7o_k$(), current));
    if (token === 1) {
      return this.consumeString_j3j2z7_k$();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current));
      this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.get_source_jl0x7o_k$(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.get_source_jl0x7o_k$())) {
        usedAppend = true;
        this.appendRange_nm7sha_k$(this.currentPosition_1, current);
        var eof = this.prefetchOrEof_yw6lb3_k$(current);
        if (eof === -1) {
          this.currentPosition_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.substring_8we4nj_k$(this.currentPosition_1, current);
    } else {
      tmp_1 = decodedString(this, this.currentPosition_1, current);
    }
    var result = tmp_1;
    this.currentPosition_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.appendRange_nm7sha_k$ = function (fromIndex, toIndex) {
    this.escapedString_1.append_tbojcw_k$(this.get_source_jl0x7o_k$(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.require_6c485v_k$ = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.fail$default_p0pca1_k$(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.skipElement_wcp1ak_k$ = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.peekNextToken_1gqwr9_k$();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.consumeStringLenient_9oypvu_k$();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.peekNextToken_1gqwr9_k$();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.consumeStringLenient_9oypvu_k$();
        } else {
          this.consumeKeyString_mfa3ws_k$();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.add_1j60pz_k$(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.currentPosition_1, 'found ] instead of } at path: ' + this.path_1, this.get_source_jl0x7o_k$());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.currentPosition_1, 'found } instead of ] at path: ' + this.path_1, this.get_source_jl0x7o_k$());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.fail$default_p0pca1_k$('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.consumeNextToken_uf1vsa_k$();
      if (tokenStack.get_size_woubt6_k$() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.get_source_jl0x7o_k$() + "', currentPosition=" + this.currentPosition_1 + ')';
  };
  AbstractJsonLexer.prototype.failOnUnknownKey_6lfa5c_k$ = function (key) {
    var processed = this.substring_8we4nj_k$(0, this.currentPosition_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.fail_icoaf1_k$("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.fail_icoaf1_k$ = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.path_1.getPath_18su3p_k$() + hintMessage, this.get_source_jl0x7o_k$());
  };
  AbstractJsonLexer.prototype.fail$default_p0pca1_k$ = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.currentPosition_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.fail_icoaf1_k$(message, position, hint);
  };
  AbstractJsonLexer.prototype.consumeNumericLiteral_rdea66_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    current = this.prefetchOrEof_yw6lb3_k$(current);
    if (current >= charSequenceLength(this.get_source_jl0x7o_k$()) ? true : current === -1) {
      this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.get_source_jl0x7o_k$())) {
        this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.get_source_jl0x7o_k$(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.fail$default_p0pca1_k$("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.get_source_jl0x7o_k$()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.times_2zfqpc_k$(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.minus_llf5ei_k$(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        this.fail$default_p0pca1_k$('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.fail$default_p0pca1_k$('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.fail$default_p0pca1_k$('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.currentPosition_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.unaryMinus_6uz0qp_k$();
      } else {
        this.fail$default_p0pca1_k$('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.consumeBoolean_8eci30_k$ = function () {
    return consumeBoolean(this, this.skipWhitespaces_ox013r_k$());
  };
  AbstractJsonLexer.prototype.consumeBooleanLenient_iqeqb9_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    if (current === charSequenceLength(this.get_source_jl0x7o_k$())) {
      this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.currentPosition_1 === charSequenceLength(this.get_source_jl0x7o_k$())) {
        this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.get_source_jl0x7o_k$(), this.currentPosition_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.fail$default_p0pca1_k$('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().CHAR_TO_TOKEN_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_coerceInputValuesHint() {
    return coerceInputValuesHint;
  }
  var coerceInputValuesHint;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function get_UNICODE_ESC() {
    return UNICODE_ESC;
  }
  var UNICODE_ESC;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().ESCAPE_2_CHAR_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function get_asciiCaseMask() {
    return asciiCaseMask;
  }
  var asciiCaseMask;
  function get_CTC_MAX() {
    return CTC_MAX;
  }
  var CTC_MAX;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.ESCAPE_2_CHAR_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.CHAR_TO_TOKEN_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.ESCAPE_2_CHAR_1 = charArray(117);
    this.CHAR_TO_TOKEN_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.prototype.get_ESCAPE_2_CHAR_5c0exk_k$ = function () {
    return this.ESCAPE_2_CHAR_1;
  };
  CharMappings.prototype.get_CHAR_TO_TOKEN_kwe4p7_k$ = function () {
    return this.CHAR_TO_TOKEN_1;
  };
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_ESC2C_MAX() {
    return ESC2C_MAX;
  }
  var ESC2C_MAX;
  function get_TC_INVALID() {
    return TC_INVALID;
  }
  var TC_INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_TC_STRING_ESC() {
    return TC_STRING_ESC;
  }
  var TC_STRING_ESC;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.source_1 = source;
  }
  StringJsonLexer.prototype.get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  StringJsonLexer.prototype.prefetchOrEof_yw6lb3_k$ = function (position) {
    return position < this.source_1.length ? position : -1;
  };
  StringJsonLexer.prototype.consumeNextToken_uf1vsa_k$ = function () {
    var source = this.source_1;
    $l$loop: while (!(this.currentPosition_1 === -1) ? this.currentPosition_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentPosition_1;
      tmp0_this.currentPosition_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.tryConsumeComma_9n2ve4_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    if (current === this.source_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.canConsumeValue_oljqd7_k$ = function () {
    var current = this.currentPosition_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.currentPosition_1 = current;
      return this.isValidValueStart_3nntvd_k$(c);
    }
    this.currentPosition_1 = current;
    return false;
  };
  StringJsonLexer.prototype.skipWhitespaces_ox013r_k$ = function () {
    var current = this.currentPosition_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.currentPosition_1 = current;
    return current;
  };
  StringJsonLexer.prototype.consumeNextToken_ev7fkz_k$ = function (expected) {
    if (this.currentPosition_1 === -1) {
      this.unexpectedToken_v8110b_k$(expected);
    }
    var source = this.source_1;
    $l$loop: while (this.currentPosition_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentPosition_1;
      tmp0_this.currentPosition_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.unexpectedToken_v8110b_k$(expected);
    }
    this.unexpectedToken_v8110b_k$(expected);
  };
  StringJsonLexer.prototype.consumeKeyString_mfa3ws_k$ = function () {
    this.consumeNextToken_ev7fkz_k$(get_STRING());
    var current = this.currentPosition_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.source_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.fail_pcesvg_k$(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.source_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.source_1, this.currentPosition_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.currentPosition_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.source_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.consumeLeadingMatchingValue_hqrr8x_k$ = function (keyToMatch, isLenient) {
    var positionSnapshot = this.currentPosition_1;
    try {
      if (!(this.consumeNextToken_uf1vsa_k$() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.consumeKeyString_mfa3ws_k$() : this.consumeStringLenientNotNull_m2rgts_k$();
      if (firstKey === keyToMatch) {
        if (!(this.consumeNextToken_uf1vsa_k$() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.consumeString_j3j2z7_k$() : this.consumeStringLenientNotNull_m2rgts_k$();
        return result;
      }
      return null;
    }finally {
      this.currentPosition_1 = positionSnapshot;
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4._schemaCache_1;
  }
  function _get_sb__ndcaho($this) {
    return $this.sb_1;
  }
  function JsonToStringWriter() {
    this.sb_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.writeLong_91l7mc_k$ = function (value) {
    this.sb_1.append_t8pm91_k$(value);
  };
  JsonToStringWriter.prototype.writeChar_g0rcso_k$ = function (char) {
    this.sb_1.append_t8oh9e_k$(char);
  };
  JsonToStringWriter.prototype.write_wmqgwd_k$ = function (text) {
    this.sb_1.append_ssq29y_k$(text);
  };
  JsonToStringWriter.prototype.writeQuoted_xlksdn_k$ = function (text) {
    printQuoted(this.sb_1, text);
  };
  JsonToStringWriter.prototype.release_wtm6d2_k$ = function () {
    this.sb_1.clear_1keqml_k$();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.sb_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  defer$1.prototype.get_isInline_usk17w_k$ = get_isInline;
  defer$1.prototype.get_annotations_20dirp_k$ = get_annotations;
  PolymorphismValidator.prototype.contextual_7ekeez_k$ = contextual;
  PolymorphismValidator.prototype.polymorphicDefault_fpe08l_k$ = polymorphicDefault;
  StreamingJsonDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  StreamingJsonDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  StreamingJsonDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  StreamingJsonEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  StreamingJsonEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  StreamingJsonEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeListDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeListDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeListDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonPrimitiveDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonPrimitiveDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonPrimitiveDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonPrimitiveDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  JsonTreeMapDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeMapDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractJsonTreeEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractJsonTreeEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractJsonTreeEncoder$encodeTaggedInline$1.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  JsonPrimitiveEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonPrimitiveEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeListEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeListEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  JsonTreeMapEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  JsonTreeMapEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  //endregion
  //region block: init
  PRIMITIVE_TAG = 'primitive';
  STRING = _Char___init__impl__6a9atx(34);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  NULL = 'null';
  coerceInputValuesHint = "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.";
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  UNICODE_ESC = _Char___init__impl__6a9atx(117);
  INVALID = _Char___init__impl__6a9atx(0);
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  asciiCaseMask = 32;
  CTC_MAX = 126;
  ESC2C_MAX = 117;
  TC_INVALID = 127;
  COMMA = _Char___init__impl__6a9atx(44);
  TC_STRING_ESC = 2;
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = JsonArray;
  _.$_$.c = JsonObject;
  _.$_$.d = JsonPrimitive_0;
  _.$_$.e = JsonPrimitive_1;
  _.$_$.f = get_int;
  _.$_$.g = get_jsonArray;
  _.$_$.h = get_jsonObject;
  _.$_$.i = get_jsonPrimitive;
  //endregion
  return _;
}(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
