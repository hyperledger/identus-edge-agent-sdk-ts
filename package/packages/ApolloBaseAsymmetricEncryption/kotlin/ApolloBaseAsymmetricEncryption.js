(function (_, $module$bip39, $module$bip32, $module$elliptic, io_iohk_atala_prism_apollo_utils_external_BN_kz3vc8, kotlin_kotlin, kotlin_com_ionspin_kotlin_bignum, kotlin_io_iohk_atala_prism_utils, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var generateMnemonic = $module$bip39.generateMnemonic;
  var validateMnemonic = $module$bip39.validateMnemonic;
  var mnemonicToSeedSync = $module$bip39.mnemonicToSeedSync;
  var fromSeed = $module$bip32.fromSeed;
  var ec = $module$elliptic.ec;
  var Coordinates = $module$elliptic.Coordinates;
  var Unit_getInstance = kotlin_kotlin.$_$.g3;
  var toString = kotlin_kotlin.$_$.y6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t;
  var objectMeta = kotlin_kotlin.$_$.u6;
  var classMeta = kotlin_kotlin.$_$.e6;
  var endsWith$default = kotlin_kotlin.$_$.f;
  var toInt = kotlin_kotlin.$_$.q7;
  var emptyList = kotlin_kotlin.$_$.z3;
  var split$default = kotlin_kotlin.$_$.h;
  var firstOrNull = kotlin_kotlin.$_$.a4;
  var THROW_CCE = kotlin_kotlin.$_$.h8;
  var isCharSequence = kotlin_kotlin.$_$.k6;
  var trim = kotlin_kotlin.$_$.w7;
  var drop = kotlin_kotlin.$_$.y3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var plus = kotlin_kotlin.$_$.k4;
  var listOf = kotlin_kotlin.$_$.g4;
  var plus_0 = kotlin_kotlin.$_$.j4;
  var joinToString$default = kotlin_kotlin.$_$.d;
  var hashCode = kotlin_kotlin.$_$.i6;
  var equals = kotlin_kotlin.$_$.f6;
  var listOf_0 = kotlin_kotlin.$_$.h4;
  var Exception = kotlin_kotlin.$_$.c8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s;
  var captureStack = kotlin_kotlin.$_$.z5;
  var Companion_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.c;
  var BigInteger_init_$Create$ = kotlin_com_ionspin_kotlin_bignum.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.j6;
  var padStart = kotlin_io_iohk_atala_prism_utils.$_$.d;
  var Sign_POSITIVE_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.a;
  var toByte = kotlin_kotlin.$_$.v6;
  var arrayCopy = kotlin_kotlin.$_$.l3;
  var copyOfRange = kotlin_kotlin.$_$.u3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var toByteArray = kotlin_kotlin.$_$.t4;
  var THROW_ISE = kotlin_kotlin.$_$.i8;
  var Enum = kotlin_kotlin.$_$.a8;
  var ensureNotNull = kotlin_kotlin.$_$.t8;
  var toByteArray_0 = kotlin_io_iohk_atala_prism_utils.$_$.e;
  var copyToArray = kotlin_kotlin.$_$.w3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var charArrayOf = kotlin_kotlin.$_$.a6;
  var split$default_0 = kotlin_kotlin.$_$.g;
  var toTypedArray = kotlin_kotlin.$_$.x4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u8;
  var NativeTypeInterface = kotlin_io_iohk_atala_prism_utils.$_$.a;
  var NotImplementedError = kotlin_kotlin.$_$.e8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var numberToByte = kotlin_kotlin.$_$.q6;
  var plus_1 = kotlin_kotlin.$_$.i4;
  var contentEquals = kotlin_kotlin.$_$.q3;
  var toHex = kotlin_io_iohk_atala_prism_utils.$_$.f;
  var asUint8Array = kotlin_io_iohk_atala_prism_utils.$_$.b;
  var decodeHex = kotlin_io_iohk_atala_prism_utils.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.t5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.l6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d5;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var SuspendFunction1 = kotlin_kotlin.$_$.u5;
  //endregion
  //region block: pre-declaration
  MnemonicException.prototype = Object.create(Exception.prototype);
  MnemonicException.prototype.constructor = MnemonicException;
  MnemonicLengthException.prototype = Object.create(MnemonicException.prototype);
  MnemonicLengthException.prototype.constructor = MnemonicLengthException;
  MnemonicWordException.prototype = Object.create(MnemonicException.prototype);
  MnemonicWordException.prototype.constructor = MnemonicWordException;
  MnemonicChecksumException.prototype = Object.create(MnemonicException.prototype);
  MnemonicChecksumException.prototype.constructor = MnemonicChecksumException;
  ECPrivateKeyException.prototype = Object.create(Exception.prototype);
  ECPrivateKeyException.prototype.constructor = ECPrivateKeyException;
  ECPrivateKeyInitializationException.prototype = Object.create(ECPrivateKeyException.prototype);
  ECPrivateKeyInitializationException.prototype.constructor = ECPrivateKeyInitializationException;
  ECPrivateKeyDecodingException.prototype = Object.create(ECPrivateKeyException.prototype);
  ECPrivateKeyDecodingException.prototype.constructor = ECPrivateKeyDecodingException;
  ECPublicKeyException.prototype = Object.create(Exception.prototype);
  ECPublicKeyException.prototype.constructor = ECPublicKeyException;
  ECPublicKeyInitializationException.prototype = Object.create(ECPublicKeyException.prototype);
  ECPublicKeyInitializationException.prototype.constructor = ECPublicKeyInitializationException;
  function secp256k1FromBytes(encoded) {
    if (!(encoded.length === ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1)) {
      throw new ECPrivateKeyDecodingException('Expected encoded byte length to be ' + ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1 + ', but got ' + encoded.length);
    }
    return this.secp256k1FromBigInteger_uao253_k$(Companion_getInstance().fromByteArray_9bkqas_k$(encoded, Sign_POSITIVE_getInstance()));
  }
  function getEncodedCompressed() {
    var size = ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1;
    var curvePoint = this.getCurvePoint_zbe28n_k$();
    var yArr = curvePoint.y_1.bytes();
    var xArr = curvePoint.x_1.bytes();
    var tmp$ret$0;
    // Inline function 'kotlin.experimental.and' call
    var tmp0_and = yArr[yArr.length - 1 | 0];
    tmp$ret$0 = toByte(tmp0_and & 1);
    var prefix = 2 + tmp$ret$0 | 0;
    var arr = new Int8Array(1 + size | 0);
    arr[0] = toByte(prefix);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = xArr.length;
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = xArr;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = arr;
    tmp$ret$4 = tmp$ret$3;
    arrayCopy(tmp, tmp$ret$4, 1, 0, tmp1_copyInto);
    tmp$ret$5 = arr;
    return arr;
  }
  function isPointOnSecp256k1Curve(point) {
    var x = point.x_1.coordinate_1;
    var y = point.y_1.coordinate_1;
    return y.times_y2637j_k$(y).minus_as3vyt_k$(x.times_y2637j_k$(x).times_y2637j_k$(x)).minus_as3vyt_k$(ECConfig_getInstance().b_1).mod_1rrww9_k$(ECConfig_getInstance().p_1).equals(Companion_getInstance().ZERO_1);
  }
  function secp256k1FromBytes_0(encoded) {
    var expectedLength = 1 + imul(2, ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1) | 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = encoded.length === expectedLength;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface.secp256k1FromBytes.<anonymous>' call
      tmp$ret$0 = "Encoded byte array's expected length is " + expectedLength + ', but got ' + encoded.length + ' bytes';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = encoded[0] === 4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface.secp256k1FromBytes.<anonymous>' call
      tmp$ret$1 = 'First byte was expected to be 0x04, but got ' + encoded[0];
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var xBytes = copyOfRange(encoded, 1, 1 + ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1 | 0);
    var yBytes = copyOfRange(encoded, 1 + ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1 | 0, encoded.length);
    return this.secp256k1FromByteCoordinates_a08mcv_k$(xBytes, yBytes);
  }
  function secp256k1FromByteCoordinates(x, y) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$_0();
    var indexedObject = x;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (yielding) {
        list.add_1j60pz_k$(item);
      } else {
        var tmp$ret$0;
        // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface.secp256k1FromByteCoordinates.<anonymous>' call
        tmp$ret$0 = item === 0;
        if (!tmp$ret$0) {
          list.add_1j60pz_k$(item);
          yielding = true;
        }
      }
    }
    tmp$ret$1 = list;
    var xTrimmed = toByteArray(tmp$ret$1);
    // Inline function 'kotlin.require' call
    var tmp0_require = xTrimmed.length <= ECConfig_getInstance().PUBLIC_KEY_COORDINATE_BYTE_SIZE_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$2;
      // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface.secp256k1FromByteCoordinates.<anonymous>' call
      tmp$ret$2 = 'Expected x coordinate byte length to be less than or equal ' + ECConfig_getInstance().PUBLIC_KEY_COORDINATE_BYTE_SIZE_1 + ', but got ' + x.length + ' bytes';
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding_0 = false;
    var list_0 = ArrayList_init_$Create$_0();
    var indexedObject_0 = y;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      if (yielding_0) {
        list_0.add_1j60pz_k$(item_0);
      } else {
        var tmp$ret$3;
        // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface.secp256k1FromByteCoordinates.<anonymous>' call
        tmp$ret$3 = item_0 === 0;
        if (!tmp$ret$3) {
          list_0.add_1j60pz_k$(item_0);
          yielding_0 = true;
        }
      }
    }
    tmp$ret$4 = list_0;
    var yTrimmed = toByteArray(tmp$ret$4);
    // Inline function 'kotlin.require' call
    var tmp1_require = yTrimmed.length <= ECConfig_getInstance().PUBLIC_KEY_COORDINATE_BYTE_SIZE_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$5;
      // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PublicKeyCommonStaticInterface.secp256k1FromByteCoordinates.<anonymous>' call
      tmp$ret$5 = 'Expected y coordinate byte length to be less than or equal ' + ECConfig_getInstance().PUBLIC_KEY_COORDINATE_BYTE_SIZE_1 + ', but got ' + y.length + ' bytes';
      var message_0 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var xInteger = Companion_getInstance().fromByteArray_9bkqas_k$(xTrimmed, Sign_POSITIVE_getInstance());
    var yInteger = Companion_getInstance().fromByteArray_9bkqas_k$(yTrimmed, Sign_POSITIVE_getInstance());
    return this.secp256k1FromBigIntegerCoordinates_alwxd3_k$(xInteger, yInteger);
  }
  KMMEllipticCurve.prototype = Object.create(Enum.prototype);
  KMMEllipticCurve.prototype.constructor = KMMEllipticCurve;
  JsHashType.prototype = Object.create(Enum.prototype);
  JsHashType.prototype.constructor = JsHashType;
  KMMECSecp256k1PrivateKey.prototype = Object.create(KMMECPrivateKey.prototype);
  KMMECSecp256k1PrivateKey.prototype.constructor = KMMECSecp256k1PrivateKey;
  KMMECSecp256k1PublicKey.prototype = Object.create(KMMECPublicKey.prototype);
  KMMECSecp256k1PublicKey.prototype.constructor = KMMECSecp256k1PublicKey;
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype = Object.create(CoroutineImpl.prototype);
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype.constructor = KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda;
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype = Object.create(CoroutineImpl.prototype);
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype.constructor = KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda;
  RSAAsymmetricAlgorithm.prototype = Object.create(Enum.prototype);
  RSAAsymmetricAlgorithm.prototype.constructor = RSAAsymmetricAlgorithm;
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.normal = function (num) {
    // Inline function 'kotlin.require' call
    var tmp0_require = num >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DerivationAxis(num);
  };
  Companion.prototype.hardened = function (num) {
    // Inline function 'kotlin.require' call
    var tmp0_require = num >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DerivationAxis(num | -2147483648);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DerivationAxis(i) {
    Companion_getInstance_0();
    this.i_1 = i;
  }
  DerivationAxis.prototype.get_i_1mhr5s_k$ = function () {
    return this.i_1;
  };
  DerivationAxis.prototype.get_hardened_tvn744_k$ = function () {
    return (this.i_1 >> 31 & 1) === 1;
  };
  DerivationAxis.prototype.get_number_hay53m_k$ = function () {
    return this.i_1 & 2147483647;
  };
  DerivationAxis.prototype.toString = function () {
    var tmp;
    if (this.hardened) {
      tmp = '' + this.number + "'";
    } else {
      tmp = this.i_1.toString();
    }
    return tmp;
  };
  DerivationAxis.prototype.hashCode = function () {
    return this.i_1;
  };
  DerivationAxis.prototype.equals = function (other) {
    var tmp;
    if (other instanceof DerivationAxis) {
      tmp = this.number === other.number;
    } else {
      tmp = false;
    }
    return tmp;
  };
  DerivationAxis.$metadata$ = classMeta('DerivationAxis');
  Object.defineProperty(DerivationAxis.prototype, 'i', {
    configurable: true,
    get: DerivationAxis.prototype.get_i_1mhr5s_k$
  });
  Object.defineProperty(DerivationAxis.prototype, 'hardened', {
    configurable: true,
    get: DerivationAxis.prototype.get_hardened_tvn744_k$
  });
  Object.defineProperty(DerivationAxis.prototype, 'number', {
    configurable: true,
    get: DerivationAxis.prototype.get_number_hay53m_k$
  });
  function parseAxis($this, axis) {
    var hardened = endsWith$default(axis, "'", false, 2, null);
    var tmp;
    if (hardened) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = axis.length - 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = axis;
      tmp$ret$1 = tmp$ret$0.substring(0, tmp0_substring);
      tmp = tmp$ret$1;
    } else {
      tmp = axis;
    }
    var axisNumStr = tmp;
    var axisNum = toInt(axisNumStr);
    return hardened ? Companion_getInstance_0().hardened(axisNum) : Companion_getInstance_0().normal(axisNum);
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.empty = function () {
    return new DerivationPath(emptyList());
  };
  Companion_0.prototype.fromPath = function (path) {
    var splitPath = split$default(path, ['/'], false, 0, 6, null);
    var tmp0_safe_receiver = firstOrNull(splitPath);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim((!(tmp0_safe_receiver == null) ? isCharSequence(tmp0_safe_receiver) : false) ? tmp0_safe_receiver : THROW_CCE()));
      tmp = tmp$ret$0;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_safe_receiver;
      tmp$ret$2 = tmp$ret$1.toLowerCase();
      tmp_0 = tmp$ret$2;
    }
    if (!(tmp_0 === 'm')) {
      throw IllegalArgumentException_init_$Create$('Path needs to start with m or M');
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = drop(splitPath, 1);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        tmp0_mapTo.add_1j60pz_k$(parseAxis(this, item));
      }
      tmp$ret$3 = tmp0_mapTo;
      tmp$ret$4 = tmp$ret$3;
      return new DerivationPath(tmp$ret$4);
    }
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DerivationPath(axes) {
    Companion_getInstance_1();
    this.axes_1 = axes;
  }
  DerivationPath.prototype.get_axes_woj4oe_k$ = function () {
    return this.axes_1;
  };
  DerivationPath.prototype.derive = function (axis) {
    return this.copy_8meumv_k$(plus(this.axes_1, axis));
  };
  DerivationPath.prototype.toString = function () {
    var tmp = listOf('m');
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.axes_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.derivation.DerivationPath.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = plus_0(tmp, tmp$ret$2);
    return joinToString$default(tmp_0, '/', null, null, 0, null, null, 62, null);
  };
  DerivationPath.prototype.component1 = function () {
    return this.axes_1;
  };
  DerivationPath.prototype.copy = function (axes) {
    return this.copy_8meumv_k$(axes === void 1 ? this.axes_1 : axes);
  };
  DerivationPath.prototype.copy_8meumv_k$ = function (axes) {
    return new DerivationPath(axes);
  };
  DerivationPath.prototype.copy$default_o6a8qr_k$ = function (axes, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      axes = this.axes_1;
    return this.copy_8meumv_k$(axes);
  };
  DerivationPath.prototype.hashCode = function () {
    return hashCode(this.axes_1);
  };
  DerivationPath.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DerivationPath))
      return false;
    var tmp0_other_with_cast = other instanceof DerivationPath ? other : THROW_CCE();
    if (!equals(this.axes_1, tmp0_other_with_cast.axes_1))
      return false;
    return true;
  };
  DerivationPath.$metadata$ = classMeta('DerivationPath');
  Object.defineProperty(DerivationPath.prototype, 'axes', {
    configurable: true,
    get: DerivationPath.prototype.get_axes_woj4oe_k$
  });
  function MnemonicCode(words) {
    this.words_1 = words;
    if (!((this.words_1.get_size_woubt6_k$() % 3 | 0) === 0)) {
      throw MnemonicLengthException_init_$Create$("Can't create a DID from mnemonic that is not dividable by 3", null, 2, null);
    }
  }
  MnemonicCode.prototype.get_words_j0u8w0_k$ = function () {
    return this.words_1;
  };
  MnemonicCode.prototype.component1 = function () {
    return this.words_1;
  };
  MnemonicCode.prototype.copy = function (words) {
    return this.copy_7lypfm_k$(words === void 1 ? this.words_1 : words);
  };
  MnemonicCode.prototype.copy_7lypfm_k$ = function (words) {
    return new MnemonicCode(words);
  };
  MnemonicCode.prototype.copy$default_ns4pou_k$ = function (words, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      words = this.words_1;
    return this.copy_7lypfm_k$(words);
  };
  MnemonicCode.prototype.toString = function () {
    return 'MnemonicCode(words=' + this.words_1 + ')';
  };
  MnemonicCode.prototype.hashCode = function () {
    return hashCode(this.words_1);
  };
  MnemonicCode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MnemonicCode))
      return false;
    var tmp0_other_with_cast = other instanceof MnemonicCode ? other : THROW_CCE();
    if (!equals(this.words_1, tmp0_other_with_cast.words_1))
      return false;
    return true;
  };
  MnemonicCode.$metadata$ = classMeta('MnemonicCode');
  Object.defineProperty(MnemonicCode.prototype, 'words', {
    configurable: true,
    get: MnemonicCode.prototype.get_words_j0u8w0_k$
  });
  function MnemonicCodeEnglish() {
    MnemonicCodeEnglish_instance = this;
    this.wordList_1 = listOf_0(['abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act', 'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent', 'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert', 'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha', 'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount', 'amused', 'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal', 'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique', 'anxiety', 'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around', 'arrange', 'arrest', 'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset', 'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction', 'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake', 'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge', 'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base', 'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become', 'beef', 'before', 'begin', 'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit', 'best', 'betray', 'better', 'between', 'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black', 'blade', 'blame', 'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush', 'board', 'boat', 'body', 'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow', 'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread', 'breeze', 'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother', 'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb', 'bulk', 'bullet', 'bundle', 'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy', 'butter', 'buyer', 'buzz', 'cabbage', 'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can', 'canal', 'cancel', 'candy', 'cannon', 'canoe', 'canvas', 'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card', 'cargo', 'carpet', 'carry', 'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch', 'category', 'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census', 'century', 'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge', 'chase', 'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child', 'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle', 'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk', 'clever', 'click', 'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close', 'cloth', 'cloud', 'clown', 'club', 'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut', 'code', 'coffee', 'coil', 'coin', 'collect', 'color', 'column', 'combine', 'come', 'comfort', 'comic', 'common', 'company', 'concert', 'conduct', 'confirm', 'congress', 'connect', 'consider', 'control', 'convince', 'cook', 'cool', 'copper', 'copy', 'coral', 'core', 'corn', 'correct', 'cost', 'cotton', 'couch', 'country', 'couple', 'course', 'cousin', 'cover', 'coyote', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy', 'cream', 'credit', 'creek', 'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch', 'crowd', 'crucial', 'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture', 'cup', 'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad', 'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate', 'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense', 'define', 'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny', 'depart', 'depend', 'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk', 'despair', 'destroy', 'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond', 'diary', 'dice', 'diesel', 'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur', 'direct', 'dirt', 'disagree', 'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance', 'divert', 'divide', 'divorce', 'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain', 'donate', 'donkey', 'donor', 'door', 'dose', 'double', 'dove', 'draft', 'dragon', 'drama', 'drastic', 'draw', 'dream', 'dress', 'drift', 'drill', 'drink', 'drip', 'drive', 'drop', 'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty', 'dwarf', 'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo', 'ecology', 'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow', 'elder', 'electric', 'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody', 'embrace', 'emerge', 'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless', 'endorse', 'enemy', 'energy', 'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough', 'enrich', 'enroll', 'ensure', 'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip', 'era', 'erase', 'erode', 'erosion', 'error', 'erupt', 'escape', 'essay', 'essence', 'estate', 'eternal', 'ethics', 'evidence', 'evil', 'evoke', 'evolve', 'exact', 'example', 'excess', 'exchange', 'excite', 'exclude', 'excuse', 'execute', 'exercise', 'exhaust', 'exhibit', 'exile', 'exist', 'exit', 'exotic', 'expand', 'expect', 'expire', 'explain', 'expose', 'express', 'extend', 'extra', 'eye', 'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith', 'fall', 'false', 'fame', 'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal', 'father', 'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female', 'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file', 'film', 'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fiscal', 'fish', 'fit', 'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor', 'flee', 'flight', 'flip', 'float', 'flock', 'floor', 'flower', 'fluid', 'flush', 'fly', 'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food', 'foot', 'force', 'forest', 'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found', 'fox', 'fragile', 'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown', 'frozen', 'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy', 'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp', 'gate', 'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture', 'ghost', 'giant', 'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance', 'glare', 'glass', 'glide', 'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue', 'goat', 'goddess', 'gold', 'good', 'goose', 'gorilla', 'gospel', 'gossip', 'govern', 'gown', 'grab', 'grace', 'grain', 'grant', 'grape', 'grass', 'gravity', 'great', 'green', 'grid', 'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess', 'guide', 'guilt', 'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy', 'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health', 'heart', 'heavy', 'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden', 'high', 'hill', 'hint', 'hip', 'hire', 'history', 'hobby', 'hockey', 'hold', 'hole', 'holiday', 'hollow', 'home', 'honey', 'hood', 'hope', 'horn', 'horror', 'horse', 'hospital', 'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble', 'humor', 'hundred', 'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea', 'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune', 'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate', 'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury', 'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install', 'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue', 'item', 'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join', 'joke', 'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior', 'junk', 'just', 'kangaroo', 'keen', 'keep', 'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten', 'kiwi', 'knee', 'knife', 'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp', 'language', 'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit', 'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal', 'legend', 'leisure', 'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level', 'liar', 'liberty', 'library', 'license', 'life', 'lift', 'light', 'like', 'limb', 'limit', 'link', 'lion', 'liquid', 'list', 'little', 'live', 'lizard', 'load', 'loan', 'lobster', 'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery', 'loud', 'lounge', 'love', 'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics', 'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage', 'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market', 'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum', 'maze', 'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt', 'member', 'memory', 'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message', 'metal', 'method', 'middle', 'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor', 'minute', 'miracle', 'mirror', 'misery', 'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile', 'model', 'modify', 'mom', 'moment', 'monitor', 'monkey', 'monster', 'month', 'moon', 'moral', 'more', 'morning', 'mosquito', 'mother', 'motion', 'motor', 'mountain', 'mouse', 'move', 'movie', 'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom', 'music', 'must', 'mutual', 'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty', 'nation', 'nature', 'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest', 'net', 'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee', 'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now', 'nuclear', 'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious', 'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often', 'oil', 'okay', 'old', 'olive', 'olympic', 'omit', 'once', 'one', 'onion', 'online', 'only', 'open', 'opera', 'opinion', 'oppose', 'option', 'orange', 'orbit', 'orchard', 'order', 'ordinary', 'organ', 'orient', 'original', 'orphan', 'ostrich', 'other', 'outdoor', 'outer', 'output', 'outside', 'oval', 'oven', 'over', 'own', 'owner', 'oxygen', 'oyster', 'ozone', 'pact', 'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic', 'panther', 'paper', 'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient', 'patrol', 'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen', 'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo', 'phrase', 'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot', 'pink', 'pioneer', 'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate', 'play', 'please', 'pledge', 'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar', 'pole', 'police', 'pond', 'pony', 'pool', 'popular', 'portion', 'position', 'possible', 'post', 'potato', 'pottery', 'poverty', 'powder', 'power', 'practice', 'praise', 'predict', 'prefer', 'prepare', 'present', 'pretty', 'prevent', 'price', 'pride', 'primary', 'print', 'priority', 'prison', 'private', 'prize', 'problem', 'process', 'produce', 'profit', 'program', 'project', 'promote', 'proof', 'property', 'prosper', 'protect', 'proud', 'provide', 'public', 'pudding', 'pull', 'pulp', 'pulse', 'pumpkin', 'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose', 'purse', 'push', 'put', 'puzzle', 'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit', 'quiz', 'quote', 'rabbit', 'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally', 'ramp', 'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor', 'ready', 'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle', 'reduce', 'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release', 'relief', 'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen', 'repair', 'repeat', 'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response', 'result', 'retire', 'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib', 'ribbon', 'rice', 'rich', 'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot', 'ripple', 'risk', 'ritual', 'rival', 'river', 'road', 'roast', 'robot', 'robust', 'rocket', 'romance', 'roof', 'rookie', 'room', 'rose', 'rotate', 'rough', 'round', 'route', 'royal', 'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad', 'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand', 'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter', 'scene', 'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script', 'scrub', 'sea', 'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed', 'seek', 'segment', 'select', 'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service', 'session', 'settle', 'setup', 'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell', 'sheriff', 'shield', 'shift', 'shine', 'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop', 'short', 'shoulder', 'shove', 'shrimp', 'shrug', 'shuffle', 'shy', 'sibling', 'sick', 'side', 'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'since', 'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski', 'skill', 'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight', 'slim', 'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth', 'snack', 'snake', 'snap', 'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda', 'soft', 'solar', 'soldier', 'solid', 'solution', 'solve', 'someone', 'song', 'soon', 'sorry', 'sort', 'soul', 'sound', 'soup', 'source', 'south', 'space', 'spare', 'spatial', 'spawn', 'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice', 'spider', 'spike', 'spin', 'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray', 'spread', 'spring', 'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs', 'stamp', 'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick', 'still', 'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street', 'strike', 'strong', 'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway', 'success', 'such', 'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny', 'sunset', 'super', 'supply', 'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey', 'suspect', 'sustain', 'swallow', 'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim', 'swing', 'switch', 'sword', 'symbol', 'symptom', 'syrup', 'system', 'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target', 'task', 'taste', 'tattoo', 'taxi', 'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term', 'test', 'text', 'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought', 'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber', 'time', 'tiny', 'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler', 'toe', 'together', 'toilet', 'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool', 'tooth', 'top', 'topic', 'topple', 'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist', 'toward', 'tower', 'town', 'toy', 'track', 'trade', 'traffic', 'tragic', 'train', 'transfer', 'trap', 'trash', 'travel', 'tray', 'treat', 'tree', 'trend', 'trial', 'tribe', 'trick', 'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true', 'truly', 'trumpet', 'trust', 'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey', 'turn', 'turtle', 'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly', 'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy', 'uniform', 'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update', 'upgrade', 'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful', 'useless', 'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor', 'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue', 'verb', 'verify', 'version', 'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory', 'video', 'view', 'village', 'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual', 'vital', 'vivid', 'vocal', 'voice', 'void', 'volcano', 'volume', 'vote', 'voyage', 'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want', 'warfare', 'warm', 'warrior', 'wash', 'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear', 'weasel', 'weather', 'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what', 'wheat', 'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will', 'win', 'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise', 'wish', 'witness', 'wolf', 'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world', 'worry', 'worth', 'wrap', 'wreck', 'wrestle', 'wrist', 'write', 'wrong', 'yard', 'year', 'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo']);
  }
  MnemonicCodeEnglish.prototype.get_wordList_vc6nvz_k$ = function () {
    return this.wordList_1;
  };
  MnemonicCodeEnglish.$metadata$ = objectMeta('MnemonicCodeEnglish');
  var MnemonicCodeEnglish_instance;
  function MnemonicCodeEnglish_getInstance() {
    if (MnemonicCodeEnglish_instance == null)
      new MnemonicCodeEnglish();
    return MnemonicCodeEnglish_instance;
  }
  function MnemonicException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, MnemonicException);
  }
  MnemonicException.$metadata$ = classMeta('MnemonicException', undefined, undefined, undefined, undefined, Exception.prototype);
  function MnemonicLengthException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    MnemonicLengthException.call($this, message, cause);
    return $this;
  }
  function MnemonicLengthException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = MnemonicLengthException_init_$Init$(message, cause, $mask0, $marker, Object.create(MnemonicLengthException.prototype));
    captureStack(tmp, MnemonicLengthException_init_$Create$);
    return tmp;
  }
  function MnemonicLengthException(message, cause) {
    var cause_0 = cause === void 1 ? null : cause;
    MnemonicException.call(this, message, cause_0);
    captureStack(this, MnemonicLengthException);
  }
  MnemonicLengthException.$metadata$ = classMeta('MnemonicLengthException', undefined, undefined, undefined, undefined, MnemonicException.prototype);
  function MnemonicWordException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    MnemonicWordException.call($this, message, cause);
    return $this;
  }
  function MnemonicWordException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = MnemonicWordException_init_$Init$(message, cause, $mask0, $marker, Object.create(MnemonicWordException.prototype));
    captureStack(tmp, MnemonicWordException_init_$Create$);
    return tmp;
  }
  function MnemonicWordException(message, cause) {
    var cause_0 = cause === void 1 ? null : cause;
    MnemonicException.call(this, message, cause_0);
    captureStack(this, MnemonicWordException);
  }
  MnemonicWordException.$metadata$ = classMeta('MnemonicWordException', undefined, undefined, undefined, undefined, MnemonicException.prototype);
  function MnemonicChecksumException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    MnemonicChecksumException.call($this, message, cause);
    return $this;
  }
  function MnemonicChecksumException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = MnemonicChecksumException_init_$Init$(message, cause, $mask0, $marker, Object.create(MnemonicChecksumException.prototype));
    captureStack(tmp, MnemonicChecksumException_init_$Create$);
    return tmp;
  }
  function MnemonicChecksumException(message, cause) {
    var cause_0 = cause === void 1 ? null : cause;
    MnemonicException.call(this, message, cause_0);
    captureStack(this, MnemonicChecksumException);
  }
  MnemonicChecksumException.$metadata$ = classMeta('MnemonicChecksumException', undefined, undefined, undefined, undefined, MnemonicException.prototype);
  function ECConfig() {
    ECConfig_instance = this;
    this.PRIVATE_KEY_BYTE_SIZE_1 = 32;
    this.PUBLIC_KEY_COORDINATE_BYTE_SIZE_1 = 32;
    this.PUBLIC_KEY_COMPRESSED_BYTE_SIZE_1 = this.PUBLIC_KEY_COORDINATE_BYTE_SIZE_1 + 1 | 0;
    this.SIGNATURE_MAX_BYTE_SIZE_1 = 72;
    this.PUBLIC_KEY_BYTE_SIZE_1 = imul(this.PUBLIC_KEY_COORDINATE_BYTE_SIZE_1, 2) + 1 | 0;
    this.p_1 = Companion_getInstance().parseString_d68ls2_k$('115792089237316195423570985008687907853269984665640564039457584007908834671663', 10);
    this.b_1 = BigInteger_init_$Create$(7);
    this.n_1 = Companion_getInstance().parseString_d68ls2_k$('115792089237316195423570985008687907852837564279074904382605163141518161494337', 10);
  }
  ECConfig.prototype.get_PRIVATE_KEY_BYTE_SIZE_2watoz_k$ = function () {
    return this.PRIVATE_KEY_BYTE_SIZE_1;
  };
  ECConfig.prototype.get_PUBLIC_KEY_COORDINATE_BYTE_SIZE_7bzqpq_k$ = function () {
    return this.PUBLIC_KEY_COORDINATE_BYTE_SIZE_1;
  };
  ECConfig.prototype.get_PUBLIC_KEY_COMPRESSED_BYTE_SIZE_1bh8ef_k$ = function () {
    return this.PUBLIC_KEY_COMPRESSED_BYTE_SIZE_1;
  };
  ECConfig.prototype.get_SIGNATURE_MAX_BYTE_SIZE_dfwmrx_k$ = function () {
    return this.SIGNATURE_MAX_BYTE_SIZE_1;
  };
  ECConfig.prototype.get_PUBLIC_KEY_BYTE_SIZE_eiiq7p_k$ = function () {
    return this.PUBLIC_KEY_BYTE_SIZE_1;
  };
  ECConfig.prototype.get_p_1mhr5z_k$ = function () {
    return this.p_1;
  };
  ECConfig.prototype.get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  ECConfig.prototype.get_n_1mhr5x_k$ = function () {
    return this.n_1;
  };
  ECConfig.$metadata$ = objectMeta('ECConfig');
  Object.defineProperty(ECConfig.prototype, 'PRIVATE_KEY_BYTE_SIZE', {
    configurable: true,
    get: ECConfig.prototype.get_PRIVATE_KEY_BYTE_SIZE_2watoz_k$
  });
  Object.defineProperty(ECConfig.prototype, 'SIGNATURE_MAX_BYTE_SIZE', {
    configurable: true,
    get: ECConfig.prototype.get_SIGNATURE_MAX_BYTE_SIZE_dfwmrx_k$
  });
  Object.defineProperty(ECConfig.prototype, 'PUBLIC_KEY_BYTE_SIZE', {
    configurable: true,
    get: ECConfig.prototype.get_PUBLIC_KEY_BYTE_SIZE_eiiq7p_k$
  });
  var ECConfig_instance;
  function ECConfig_getInstance() {
    if (ECConfig_instance == null)
      new ECConfig();
    return ECConfig_instance;
  }
  function ECPrivateKeyException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ECPrivateKeyException);
  }
  ECPrivateKeyException.$metadata$ = classMeta('ECPrivateKeyException', undefined, undefined, undefined, undefined, Exception.prototype);
  function ECPrivateKeyInitializationException(message) {
    ECPrivateKeyException.call(this, message, null);
    captureStack(this, ECPrivateKeyInitializationException);
  }
  ECPrivateKeyInitializationException.$metadata$ = classMeta('ECPrivateKeyInitializationException', undefined, undefined, undefined, undefined, ECPrivateKeyException.prototype);
  function ECPrivateKeyDecodingException(message) {
    ECPrivateKeyException.call(this, message, null);
    captureStack(this, ECPrivateKeyDecodingException);
  }
  ECPrivateKeyDecodingException.$metadata$ = classMeta('ECPrivateKeyDecodingException', undefined, undefined, undefined, undefined, ECPrivateKeyException.prototype);
  function ECPublicKeyException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ECPublicKeyException);
  }
  ECPublicKeyException.$metadata$ = classMeta('ECPublicKeyException', undefined, undefined, undefined, undefined, Exception.prototype);
  function ECPublicKeyInitializationException(message) {
    ECPublicKeyException.call(this, message, null);
    captureStack(this, ECPublicKeyInitializationException);
  }
  ECPublicKeyInitializationException.$metadata$ = classMeta('ECPublicKeyInitializationException', undefined, undefined, undefined, undefined, ECPublicKeyException.prototype);
  function ECKeyPairGeneration() {
  }
  ECKeyPairGeneration.$metadata$ = interfaceMeta('ECKeyPairGeneration');
  function Encodable() {
  }
  Encodable.$metadata$ = interfaceMeta('Encodable');
  function Companion_1() {
    Companion_instance_1 = this;
    this.PRIVATE_KEY_BYTE_SIZE_1 = 32;
  }
  Companion_1.prototype.get_PRIVATE_KEY_BYTE_SIZE_2watoz_k$ = function () {
    return this.PRIVATE_KEY_BYTE_SIZE_1;
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function KMMECCoordinate(coordinate) {
    Companion_getInstance_2();
    this.coordinate_1 = coordinate;
  }
  KMMECCoordinate.prototype.get_coordinate_gvt9tr_k$ = function () {
    return this.coordinate_1;
  };
  KMMECCoordinate.prototype.bytes = function () {
    return padStart(this.coordinate_1.toByteArray_qczt2u_k$(), Companion_getInstance_2().PRIVATE_KEY_BYTE_SIZE_1, 0);
  };
  KMMECCoordinate.prototype.component1 = function () {
    return this.coordinate_1;
  };
  KMMECCoordinate.prototype.copy = function (coordinate) {
    return this.copy_5mtb6k_k$(coordinate === void 1 ? this.coordinate_1 : coordinate);
  };
  KMMECCoordinate.prototype.copy_5mtb6k_k$ = function (coordinate) {
    return new KMMECCoordinate(coordinate);
  };
  KMMECCoordinate.prototype.copy$default_hyl0cq_k$ = function (coordinate, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      coordinate = this.coordinate_1;
    return this.copy_5mtb6k_k$(coordinate);
  };
  KMMECCoordinate.prototype.toString = function () {
    return 'KMMECCoordinate(coordinate=' + this.coordinate_1 + ')';
  };
  KMMECCoordinate.prototype.hashCode = function () {
    return this.coordinate_1.hashCode();
  };
  KMMECCoordinate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KMMECCoordinate))
      return false;
    var tmp0_other_with_cast = other instanceof KMMECCoordinate ? other : THROW_CCE();
    if (!this.coordinate_1.equals(tmp0_other_with_cast.coordinate_1))
      return false;
    return true;
  };
  KMMECCoordinate.$metadata$ = classMeta('KMMECCoordinate');
  Object.defineProperty(KMMECCoordinate.prototype, 'coordinate', {
    configurable: true,
    get: KMMECCoordinate.prototype.get_coordinate_gvt9tr_k$
  });
  function KMMECPoint_init_$Init$(x, y, $this) {
    var tmp = Companion_getInstance();
    var tmp_0 = new KMMECCoordinate(tmp.parseString$default_thoqxr_k$(x, 0, 2, null));
    var tmp_1 = Companion_getInstance();
    KMMECPoint.call($this, tmp_0, new KMMECCoordinate(tmp_1.parseString$default_thoqxr_k$(y, 0, 2, null)));
    return $this;
  }
  function fromBigIntegersStrings(x, y) {
    return KMMECPoint_init_$Init$(x, y, Object.create(KMMECPoint.prototype));
  }
  function KMMECPoint_init_$Init$_0(x, y, $this) {
    KMMECPoint.call($this, new KMMECCoordinate(x), new KMMECCoordinate(y));
    return $this;
  }
  function fromBigIntegers(x, y) {
    return KMMECPoint_init_$Init$_0(x, y, Object.create(KMMECPoint.prototype));
  }
  function KMMECPoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  KMMECPoint.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  KMMECPoint.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  KMMECPoint.prototype.component1 = function () {
    return this.x_1;
  };
  KMMECPoint.prototype.component2 = function () {
    return this.y_1;
  };
  KMMECPoint.prototype.copy = function (x, y) {
    return this.copy_nq0thx_k$(x === void 1 ? this.x_1 : x, y === void 1 ? this.y_1 : y);
  };
  KMMECPoint.prototype.copy_nq0thx_k$ = function (x, y) {
    return new KMMECPoint(x, y);
  };
  KMMECPoint.prototype.copy$default_asht0_k$ = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this.x_1;
    if (!(($mask0 & 2) === 0))
      y = this.y_1;
    return this.copy_nq0thx_k$(x, y);
  };
  KMMECPoint.prototype.toString = function () {
    return 'KMMECPoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  KMMECPoint.prototype.hashCode = function () {
    var result = this.x_1.hashCode();
    result = imul(result, 31) + this.y_1.hashCode() | 0;
    return result;
  };
  KMMECPoint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KMMECPoint))
      return false;
    var tmp0_other_with_cast = other instanceof KMMECPoint ? other : THROW_CCE();
    if (!this.x_1.equals(tmp0_other_with_cast.x_1))
      return false;
    if (!this.y_1.equals(tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  KMMECPoint.$metadata$ = classMeta('KMMECPoint');
  Object.defineProperty(KMMECPoint.prototype, 'x', {
    configurable: true,
    get: KMMECPoint.prototype.get_x_1mhr67_k$
  });
  Object.defineProperty(KMMECPoint.prototype, 'y', {
    configurable: true,
    get: KMMECPoint.prototype.get_y_1mhr68_k$
  });
  function KMMECSecp256k1PrivateKeyCommonStaticInterface() {
  }
  KMMECSecp256k1PrivateKeyCommonStaticInterface.$metadata$ = interfaceMeta('KMMECSecp256k1PrivateKeyCommonStaticInterface');
  function KMMECSecp256k1PublicKeyCommon() {
  }
  KMMECSecp256k1PublicKeyCommon.$metadata$ = interfaceMeta('KMMECSecp256k1PublicKeyCommon');
  function KMMECSecp256k1PublicKeyCommonStaticInterface() {
  }
  KMMECSecp256k1PublicKeyCommonStaticInterface.$metadata$ = interfaceMeta('KMMECSecp256k1PublicKeyCommonStaticInterface');
  var KMMEllipticCurve_SECP256k1_instance;
  var KMMEllipticCurve_SECP256r1_instance;
  function values() {
    return [KMMEllipticCurve_SECP256k1_getInstance(), KMMEllipticCurve_SECP256r1_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SECP256k1':
        return KMMEllipticCurve_SECP256k1_getInstance();
      case 'SECP256r1':
        return KMMEllipticCurve_SECP256r1_getInstance();
      default:
        KMMEllipticCurve_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KMMEllipticCurve_entriesInitialized;
  function KMMEllipticCurve_initEntries() {
    if (KMMEllipticCurve_entriesInitialized)
      return Unit_getInstance();
    KMMEllipticCurve_entriesInitialized = true;
    KMMEllipticCurve_SECP256k1_instance = new KMMEllipticCurve('SECP256k1', 0, 'secp256k1');
    KMMEllipticCurve_SECP256r1_instance = new KMMEllipticCurve('SECP256r1', 1, 'secp256r1');
  }
  function KMMEllipticCurve(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  KMMEllipticCurve.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  KMMEllipticCurve.$metadata$ = classMeta('KMMEllipticCurve', undefined, undefined, undefined, undefined, Enum.prototype);
  function KMMEllipticCurve_SECP256k1_getInstance() {
    KMMEllipticCurve_initEntries();
    return KMMEllipticCurve_SECP256k1_instance;
  }
  function KMMEllipticCurve_SECP256r1_getInstance() {
    KMMEllipticCurve_initEntries();
    return KMMEllipticCurve_SECP256r1_instance;
  }
  function Secp256k1KeyPairGeneration() {
  }
  Secp256k1KeyPairGeneration.$metadata$ = interfaceMeta('Secp256k1KeyPairGeneration');
  function _get_bip32__jgkggn($this) {
    return $this.bip32__1;
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function ExtendedKey(bip32, path) {
    this.bip32__1 = bip32;
    this.path_1 = path;
  }
  ExtendedKey.prototype.path = function () {
    return this.path_1;
  };
  ExtendedKey.prototype.publicKey = function () {
    return this.privateKey().getPublicKey();
  };
  ExtendedKey.prototype.privateKey = function () {
    return Companion_getInstance_6().secp256k1FromBytes_vz6078_k$(toByteArray_0(ensureNotNull(this.bip32__1.privateKey)));
  };
  ExtendedKey.prototype.keyPair = function () {
    return new KMMECKeyPair(this.privateKey(), this.publicKey());
  };
  ExtendedKey.prototype.derive = function (axis) {
    var tmp;
    if (axis.hardened) {
      tmp = this.bip32__1.deriveHardened(axis.number);
    } else {
      tmp = this.bip32__1.derive(axis.number);
    }
    var derivedBip32 = tmp;
    return new ExtendedKey(derivedBip32, this.path_1.derive(axis));
  };
  ExtendedKey.$metadata$ = classMeta('ExtendedKey');
  function _get_SEED_ENTROPY_BITS_24_WORDS__u92xvm($this) {
    return $this.SEED_ENTROPY_BITS_24_WORDS_1;
  }
  function _get_wordArray__5p24ou($this) {
    return $this.wordArray_1;
  }
  function KeyDerivation() {
    KeyDerivation_instance = this;
    this.SEED_ENTROPY_BITS_24_WORDS_1 = 256;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = MnemonicCodeEnglish_getInstance().wordList_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.wordArray_1 = tmp$ret$0;
  }
  KeyDerivation.prototype.randomMnemonicCode = function () {
    var words = generateMnemonic(256, void 1, this.wordArray_1);
    var tmp = charArrayOf([_Char___init__impl__6a9atx(32)]);
    return new MnemonicCode(split$default_0(words, tmp, false, 0, 6, null));
  };
  KeyDerivation.prototype.isValidMnemonicWord = function (word) {
    return MnemonicCodeEnglish_getInstance().wordList_1.contains_2ehdt1_k$(word);
  };
  KeyDerivation.prototype.getValidMnemonicWords = function () {
    return MnemonicCodeEnglish_getInstance().wordList_1;
  };
  KeyDerivation.prototype.binarySeed = function (seed, passphrase) {
    var mnemonic = joinToString$default(seed.words_1, ' ', null, null, 0, null, null, 62, null);
    if (!((seed.words_1.get_size_woubt6_k$() % 3 | 0) === 0)) {
      throw MnemonicLengthException_init_$Create$('Word list size must be multiple of three words', null, 2, null);
    } else if (seed.words_1.isEmpty_y1axqb_k$()) {
      throw MnemonicLengthException_init_$Create$('Word list is empty', null, 2, null);
    }
    var tmp0_iterator = seed.words_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var word = tmp0_iterator.next_20eer_k$();
      if (!this.isValidMnemonicWord(word)) {
        var tmp = 'Invalid mnemonic word: ' + word;
        throw MnemonicWordException_init_$Create$(tmp, null, 2, null);
      }
    }
    if (!validateMnemonic(mnemonic, this.wordArray_1)) {
      throw MnemonicChecksumException_init_$Create$('Invalid mnemonic checksum', null, 2, null);
    }
    return toByteArray_0(mnemonicToSeedSync(mnemonic, passphrase));
  };
  KeyDerivation.prototype.derivationRoot = function (seed) {
    var bip32 = fromSeed(Buffer.from(toTypedArray(seed)));
    return new ExtendedKey(bip32, Companion_getInstance_1().empty());
  };
  KeyDerivation.prototype.deriveKey = function (seed, path) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = path.axes_1;
    var tmp1_fold = this.derivationRoot(seed);
    var accumulator = tmp1_fold;
    var tmp0_iterator = tmp0_fold.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.derivation.KeyDerivation.deriveKey.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = accumulator;
      tmp$ret$0 = tmp2__anonymous__z9zvc9.derive(element);
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    return tmp$ret$1;
  };
  KeyDerivation.$metadata$ = objectMeta('KeyDerivation');
  var KeyDerivation_instance;
  function KeyDerivation_getInstance() {
    if (KeyDerivation_instance == null)
      new KeyDerivation();
    return KeyDerivation_instance;
  }
  var JsHashType_SHA256_instance;
  var JsHashType_SHA384_instance;
  var JsHashType_SHA512_instance;
  function values_0() {
    return [JsHashType_SHA256_getInstance(), JsHashType_SHA384_getInstance(), JsHashType_SHA512_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SHA256':
        return JsHashType_SHA256_getInstance();
      case 'SHA384':
        return JsHashType_SHA384_getInstance();
      case 'SHA512':
        return JsHashType_SHA512_getInstance();
      default:
        JsHashType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var JsHashType_entriesInitialized;
  function JsHashType_initEntries() {
    if (JsHashType_entriesInitialized)
      return Unit_getInstance();
    JsHashType_entriesInitialized = true;
    JsHashType_SHA256_instance = new JsHashType('SHA256', 0);
    JsHashType_SHA384_instance = new JsHashType('SHA384', 1);
    JsHashType_SHA512_instance = new JsHashType('SHA512', 2);
  }
  function JsHashType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  JsHashType.prototype.nativeValue = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 'SHA-256';
        break;
      case 1:
        tmp = 'SHA-384';
        break;
      case 2:
        tmp = 'SHA-512';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  JsHashType.$metadata$ = classMeta('JsHashType', [NativeTypeInterface], undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(JsHashType.prototype, 'name', {
    configurable: true,
    get: JsHashType.prototype.get_name_woqyms_k$
  });
  Object.defineProperty(JsHashType.prototype, 'ordinal', {
    configurable: true,
    get: JsHashType.prototype.get_ordinal_ip24qg_k$
  });
  function JsHashType_SHA256_getInstance() {
    JsHashType_initEntries();
    return JsHashType_SHA256_instance;
  }
  function JsHashType_SHA384_getInstance() {
    JsHashType_initEntries();
    return JsHashType_SHA384_instance;
  }
  function JsHashType_SHA512_getInstance() {
    JsHashType_initEntries();
    return JsHashType_SHA512_instance;
  }
  function KMMECKeyPair_init_$Init$(privateNative, publicNative, $this) {
    KMMECKeyPair.call($this, new KMMECPrivateKey(privateNative), new KMMECPublicKey(publicNative));
    return $this;
  }
  function KMMECKeyPair_init_$Create$(privateNative, publicNative) {
    return KMMECKeyPair_init_$Init$(privateNative, publicNative, Object.create(KMMECKeyPair.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.generateECKeyPair_yxtp52_k$ = function () {
    throw new NotImplementedError('Yet to be decided on Default Curve. Please use `generateSecp256k1KeyPair`');
  };
  Companion_2.$metadata$ = objectMeta('Companion', [ECKeyPairGeneration]);
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function KMMECKeyPair(privateKey, publicKey) {
    Companion_getInstance_3();
    this.privateKey_1 = privateKey;
    this.publicKey_1 = publicKey;
  }
  KMMECKeyPair.prototype.get_privateKey_jtw9r9_k$ = function () {
    return this.privateKey_1;
  };
  KMMECKeyPair.prototype.get_publicKey_wfyw0d_k$ = function () {
    return this.publicKey_1;
  };
  KMMECKeyPair.$metadata$ = classMeta('KMMECKeyPair');
  Object.defineProperty(KMMECKeyPair.prototype, 'privateKey', {
    configurable: true,
    get: KMMECKeyPair.prototype.get_privateKey_jtw9r9_k$
  });
  Object.defineProperty(KMMECKeyPair.prototype, 'publicKey', {
    configurable: true,
    get: KMMECKeyPair.prototype.get_publicKey_wfyw0d_k$
  });
  function KMMECPrivateKey(nativeValue) {
    this.nativeValue_1 = nativeValue;
  }
  KMMECPrivateKey.prototype.get_nativeValue_sbm4lr_k$ = function () {
    return this.nativeValue_1;
  };
  KMMECPrivateKey.$metadata$ = classMeta('KMMECPrivateKey');
  Object.defineProperty(KMMECPrivateKey.prototype, 'nativeValue', {
    configurable: true,
    get: KMMECPrivateKey.prototype.get_nativeValue_sbm4lr_k$
  });
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.computeCurvePoint = function (basePoint) {
    var tmp = Companion_getInstance();
    var tmp_0 = basePoint.getX().toString();
    var x = tmp.parseString$default_thoqxr_k$(tmp_0, 0, 2, null);
    var tmp_1 = Companion_getInstance();
    var tmp_2 = basePoint.getY().toString();
    var y = tmp_1.parseString$default_thoqxr_k$(tmp_2, 0, 2, null);
    return fromBigIntegers(x, y);
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function KMMECPublicKey(nativeValue) {
    Companion_getInstance_4();
    this.nativeValue_1 = nativeValue;
  }
  KMMECPublicKey.prototype.get_nativeValue_sbm4lr_k$ = function () {
    return this.nativeValue_1;
  };
  KMMECPublicKey.prototype.getEncoded_9fny20_k$ = function () {
    var size = ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1;
    var basePoint = Companion_getInstance_4().computeCurvePoint(this.nativeValue_1);
    var xArr = basePoint.x_1.bytes();
    var yArr = basePoint.y_1.bytes();
    if (xArr.length === size ? yArr.length === size : false) {
      var tmp = 0;
      var tmp_0 = 1 + imul(2, size) | 0;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECPublicKey.getEncoded.<anonymous>' call
        tmp$ret$0 = 0;
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var arr = tmp_1;
      arr[0] = 4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = (size - xArr.length | 0) + 1 | 0;
      var tmp1_copyInto = xArr.length;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = xArr;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = arr;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_3, tmp$ret$4, tmp0_copyInto, 0, tmp1_copyInto);
      tmp$ret$5 = arr;
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = arr.length - yArr.length | 0;
      var tmp3_copyInto = yArr.length;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = yArr;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = arr;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_4, tmp$ret$9, tmp2_copyInto, 0, tmp3_copyInto);
      tmp$ret$10 = arr;
      return arr;
    } else {
      throw IllegalStateException_init_$Create$('Point coordinates do not match field size');
    }
  };
  KMMECPublicKey.$metadata$ = classMeta('KMMECPublicKey', [Encodable]);
  Object.defineProperty(KMMECPublicKey.prototype, 'nativeValue', {
    configurable: true,
    get: KMMECPublicKey.prototype.get_nativeValue_sbm4lr_k$
  });
  function KMMECSecp256k1KeyPair_init_$Init$(privateNative, publicNative, $this) {
    KMMECSecp256k1KeyPair.call($this, new KMMECSecp256k1PrivateKey(privateNative), new KMMECSecp256k1PublicKey(publicNative));
    return $this;
  }
  function KMMECSecp256k1KeyPair_init_$Create$(privateNative, publicNative) {
    return KMMECSecp256k1KeyPair_init_$Init$(privateNative, publicNative, Object.create(KMMECSecp256k1KeyPair.prototype));
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.generateSecp256k1KeyPair_sfbx70_k$ = function () {
    var ecjs = new ec('secp256k1');
    var keyPair = ecjs.genKeyPair();
    var bigNumber = keyPair.getPrivate();
    var basePoint = keyPair.getPublic();
    return KMMECSecp256k1KeyPair_init_$Create$(bigNumber, basePoint);
  };
  Companion_4.$metadata$ = objectMeta('Companion', [Secp256k1KeyPairGeneration]);
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function KMMECSecp256k1KeyPair(privateKey, publicKey) {
    Companion_getInstance_5();
    this.privateKey_1 = privateKey;
    this.publicKey_1 = publicKey;
  }
  KMMECSecp256k1KeyPair.prototype.get_privateKey_jtw9r9_k$ = function () {
    return this.privateKey_1;
  };
  KMMECSecp256k1KeyPair.prototype.get_publicKey_wfyw0d_k$ = function () {
    return this.publicKey_1;
  };
  KMMECSecp256k1KeyPair.$metadata$ = classMeta('KMMECSecp256k1KeyPair');
  Object.defineProperty(KMMECSecp256k1KeyPair.prototype, 'privateKey', {
    configurable: true,
    get: KMMECSecp256k1KeyPair.prototype.get_privateKey_jtw9r9_k$
  });
  Object.defineProperty(KMMECSecp256k1KeyPair.prototype, 'publicKey', {
    configurable: true,
    get: KMMECSecp256k1KeyPair.prototype.get_publicKey_wfyw0d_k$
  });
  function privateKeyD($this, privateKey) {
    var tmp = Companion_getInstance();
    var tmp_0 = privateKey.toString();
    return tmp.parseString$default_thoqxr_k$(tmp_0, 0, 2, null);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.secp256k1FromBigInteger_uao253_k$ = function (d) {
    return new KMMECSecp256k1PrivateKey(new io_iohk_atala_prism_apollo_utils_external_BN_kz3vc8(d.toString()));
  };
  Companion_5.$metadata$ = objectMeta('Companion', [KMMECSecp256k1PrivateKeyCommonStaticInterface]);
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function KMMECSecp256k1PrivateKey(nativeValue) {
    Companion_getInstance_6();
    KMMECPrivateKey.call(this, nativeValue);
    if (this.d.compareTo_m610zm_k$(Companion_getInstance().TWO_1) < 0 ? true : this.d.compareTo_m610zm_k$(ECConfig_getInstance().n_1) >= 0) {
      throw new ECPrivateKeyInitializationException('Private key D should be in range [2; ' + ECConfig_getInstance().n_1 + ')');
    }
  }
  KMMECSecp256k1PrivateKey.prototype.get_d_1mhr5n_k$ = function () {
    return privateKeyD(Companion_getInstance_6(), this.nativeValue_1);
  };
  KMMECSecp256k1PrivateKey.prototype.getPublicKey = function () {
    var ecjs = new ec('secp256k1');
    var keyPair = ecjs.keyFromPrivate(this.nativeValue_1.toString('hex'));
    return new KMMECSecp256k1PublicKey(keyPair.getPublic());
  };
  KMMECSecp256k1PrivateKey.prototype.getEncoded_9fny20_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.nativeValue_1.toArray();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
    var indexedObject = tmp0_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PrivateKey.getEncoded.<anonymous>' call
      tmp$ret$0 = numberToByte(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var byteList = tmp$ret$2;
    var tmp = 0;
    var tmp_0 = ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1 - byteList.get_size_woubt6_k$() | 0;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'io.iohk.atala.prism.apollo.utils.KMMECSecp256k1PrivateKey.getEncoded.<anonymous>' call
      tmp$ret$3 = 0;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    var padding = tmp_1;
    return plus_1(padding, byteList);
  };
  KMMECSecp256k1PrivateKey.prototype.hashCode = function () {
    return hashCode(this.getEncoded_9fny20_k$());
  };
  KMMECSecp256k1PrivateKey.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof KMMECSecp256k1PrivateKey) {
      tmp = contentEquals(this.getEncoded_9fny20_k$(), other.getEncoded_9fny20_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  KMMECSecp256k1PrivateKey.$metadata$ = classMeta('KMMECSecp256k1PrivateKey', [Encodable], undefined, undefined, undefined, KMMECPrivateKey.prototype);
  Object.defineProperty(KMMECSecp256k1PrivateKey.prototype, 'd', {
    configurable: true,
    get: KMMECSecp256k1PrivateKey.prototype.get_d_1mhr5n_k$
  });
  function KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1($xCoord, $yCoord) {
    this.x_1 = toHex($xCoord);
    this.y_1 = toHex($yCoord);
  }
  KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.prototype.set_x_wypjw7_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.prototype.set_y_r5uoxi_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.$metadata$ = classMeta();
  Object.defineProperty(KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.prototype, 'x', {
    configurable: true,
    get: function () {
      return this.get_x_1mhr67_k$();
    },
    set: function (value) {
      this.set_x_wypjw7_k$(value);
    }
  });
  Object.defineProperty(KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1.prototype, 'y', {
    configurable: true,
    get: function () {
      return this.get_y_1mhr68_k$();
    },
    set: function (value) {
      this.set_y_r5uoxi_k$(value);
    }
  });
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.secp256k1FromBigIntegerCoordinates_alwxd3_k$ = function (x, y) {
    var xCoord = x.toByteArray_qczt2u_k$();
    var yCoord = y.toByteArray_qczt2u_k$();
    var ecjs = new ec('secp256k1');
    var keyPair = ecjs.keyFromPublic(new KMMECSecp256k1PublicKey$Companion$secp256k1FromBigIntegerCoordinates$keyPair$1(xCoord, yCoord));
    return new KMMECSecp256k1PublicKey(keyPair.getPublic());
  };
  Companion_6.prototype.secp256k1FromCompressed_49arj6_k$ = function (compressed) {
    // Inline function 'kotlin.require' call
    var tmp0_require = compressed.length === ECConfig_getInstance().PUBLIC_KEY_COMPRESSED_BYTE_SIZE_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.utils.Companion.secp256k1FromCompressed.<anonymous>' call
      tmp$ret$0 = "Compressed byte array's expected length is " + ECConfig_getInstance().PUBLIC_KEY_COMPRESSED_BYTE_SIZE_1 + ', but got ' + compressed.length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var ecjs = new ec('secp256k1');
    var point = ecjs.curve.decodePoint(asUint8Array(compressed));
    var uncompressedEncoding = decodeHex(point.encode('hex'));
    return this.secp256k1FromBytes_vz6078_k$(uncompressedEncoding);
  };
  Companion_6.$metadata$ = objectMeta('Companion', [KMMECSecp256k1PublicKeyCommonStaticInterface]);
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function KMMECSecp256k1PublicKey(nativeValue) {
    Companion_getInstance_7();
    KMMECPublicKey.call(this, nativeValue);
    if (!Companion_getInstance_7().isPointOnSecp256k1Curve_e1y10p_k$(this.ecPoint)) {
      throw new ECPublicKeyInitializationException("ECPoint corresponding to a public key doesn't belong to Secp256k1 curve");
    }
  }
  KMMECSecp256k1PublicKey.prototype.get_ecPoint_utdc9j_k$ = function () {
    return Companion_getInstance_4().computeCurvePoint(this.nativeValue_1);
  };
  KMMECSecp256k1PublicKey.prototype.getCurvePoint_zbe28n_k$ = function () {
    return this.ecPoint;
  };
  KMMECSecp256k1PublicKey.prototype.hashCode = function () {
    return hashCode(this.getEncoded_9fny20_k$());
  };
  KMMECSecp256k1PublicKey.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof KMMECSecp256k1PublicKey) {
      tmp = contentEquals(this.getEncoded_9fny20_k$(), other.getEncoded_9fny20_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  KMMECSecp256k1PublicKey.$metadata$ = classMeta('KMMECSecp256k1PublicKey', [KMMECSecp256k1PublicKeyCommon], undefined, undefined, undefined, KMMECPublicKey.prototype);
  Object.defineProperty(KMMECSecp256k1PublicKey.prototype, 'ecPoint', {
    configurable: true,
    get: KMMECSecp256k1PublicKey.prototype.get_ecPoint_utdc9j_k$
  });
  function getRsaHashedKeyGenParams($this, algorithm, hashType, keySize) {
    var algorithmNativeValue = algorithm.nativeValue();
    var keySizeNativeValue = keySize;
    var hashTypeNativeValue = hashType.nativeValue();
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = {name: algorithmNativeValue, modulusLength: keySizeNativeValue, publicExponent: new Uint8Array([1, 0, 1]), hash: hashTypeNativeValue};
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda($algorithm, $hash, $keySize, resultContinuation) {
    this.$algorithm_1 = $algorithm;
    this.$hash_1 = $hash;
    this.$keySize_1 = $keySize;
    CoroutineImpl.call(this, resultContinuation);
  }
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype.invoke_i2lf9s_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_i2lf9s_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = crypto.subtle;
            var tmp_1 = getRsaHashedKeyGenParams(Companion_getInstance_8(), this.$algorithm_1, this.$hash_1, this.$keySize_1);
            var tmp_2 = this;
            tmp_2.tmp0_arrayOf0__1 = [(/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).sign, (/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).verify];
            suspendResult = await_0(tmp_0.generateKey(tmp_1, true, this.tmp0_arrayOf0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var keyPair = suspendResult;
            return new KMMRSAKeyPair(new KMMRSAPrivateKey(keyPair.privateKey), new KMMRSAPublicKey(keyPair.publicKey));
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
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda(this.$algorithm_1, this.$hash_1, this.$keySize_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda.$metadata$ = classMeta('KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda_0($algorithm, $hash, $keySize, resultContinuation) {
    var i = new KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda($algorithm, $hash, $keySize, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_i2lf9s_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda($algorithm, $hash, $keySize, resultContinuation) {
    this.$algorithm_1 = $algorithm;
    this.$hash_1 = $hash;
    this.$keySize_1 = $keySize;
    CoroutineImpl.call(this, resultContinuation);
  }
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype.invoke_i2lf9s_k$ = function ($this$promise, $cont) {
    var tmp = this.create_b6qu53_k$($this$promise, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_i2lf9s_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = crypto.subtle;
            var tmp_1 = getRsaHashedKeyGenParams(Companion_getInstance_8(), this.$algorithm_1, this.$hash_1, this.$keySize_1);
            var tmp_2 = this;
            tmp_2.tmp0_arrayOf0__1 = [(/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).sign, (/*union*/{decrypt: 'decrypt', deriveBits: 'deriveBits', deriveKey: 'deriveKey', encrypt: 'encrypt', sign: 'sign', unwrapKey: 'unwrapKey', verify: 'verify', wrapKey: 'wrapKey'}/*union*/).verify];
            suspendResult = await_0(tmp_0.generateKey(tmp_1, true, this.tmp0_arrayOf0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var keyPair = suspendResult;
            return new KMMRSAKeyPair(new KMMRSAPrivateKey(keyPair.privateKey), new KMMRSAPublicKey(keyPair.publicKey));
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
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype.create_b6qu53_k$ = function ($this$promise, completion) {
    var i = new KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda(this.$algorithm_1, this.$hash_1, this.$keySize_1, completion);
    i.$this$promise_1 = $this$promise;
    return i;
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda.$metadata$ = classMeta('KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda_0($algorithm, $hash, $keySize, resultContinuation) {
    var i = new KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda($algorithm, $hash, $keySize, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.invoke_i2lf9s_k$($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.prototype.generateRSAKeyPair_qc6oqg_k$ = function (algorithm, hash, keySize, $cont) {
    var tmp = MainScope();
    return await_0(promise$default(tmp, null, null, KMMRSAKeyPair$Companion$generateRSAKeyPair$slambda_0(algorithm, hash, keySize, null), 3, null), $cont);
  };
  Companion_7.prototype.generateRSAKeyPairFrom_ieyo6d_k$ = function (seed, algorithm, hash, keySize, $cont) {
    var tmp = MainScope();
    return await_0(promise$default(tmp, null, null, KMMRSAKeyPair$Companion$generateRSAKeyPairFrom$slambda_0(algorithm, hash, keySize, null), 3, null), $cont);
  };
  Companion_7.$metadata$ = objectMeta('Companion', [RSAKeyPairGeneration]);
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function KMMRSAKeyPair(privateKey, publicKey) {
    Companion_getInstance_8();
    this.privateKey_1 = privateKey;
    this.publicKey_1 = publicKey;
  }
  KMMRSAKeyPair.prototype.get_privateKey_jtw9r9_k$ = function () {
    return this.privateKey_1;
  };
  KMMRSAKeyPair.prototype.get_publicKey_wfyw0d_k$ = function () {
    return this.publicKey_1;
  };
  KMMRSAKeyPair.$metadata$ = classMeta('KMMRSAKeyPair');
  function KMMRSAPrivateKey(nativeType) {
    this.nativeType_1 = nativeType;
  }
  KMMRSAPrivateKey.prototype.get_nativeType_v5wupm_k$ = function () {
    return this.nativeType_1;
  };
  KMMRSAPrivateKey.$metadata$ = classMeta('KMMRSAPrivateKey');
  function KMMRSAPublicKey(nativeType) {
    this.nativeType_1 = nativeType;
  }
  KMMRSAPublicKey.prototype.get_nativeType_v5wupm_k$ = function () {
    return this.nativeType_1;
  };
  KMMRSAPublicKey.$metadata$ = classMeta('KMMRSAPublicKey');
  var RSAAsymmetricAlgorithm_RSA_instance;
  var RSAAsymmetricAlgorithm_RSAPSS_instance;
  function values_1() {
    return [RSAAsymmetricAlgorithm_RSA_getInstance(), RSAAsymmetricAlgorithm_RSAPSS_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'RSA':
        return RSAAsymmetricAlgorithm_RSA_getInstance();
      case 'RSAPSS':
        return RSAAsymmetricAlgorithm_RSAPSS_getInstance();
      default:
        RSAAsymmetricAlgorithm_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RSAAsymmetricAlgorithm_entriesInitialized;
  function RSAAsymmetricAlgorithm_initEntries() {
    if (RSAAsymmetricAlgorithm_entriesInitialized)
      return Unit_getInstance();
    RSAAsymmetricAlgorithm_entriesInitialized = true;
    RSAAsymmetricAlgorithm_RSA_instance = new RSAAsymmetricAlgorithm('RSA', 0);
    RSAAsymmetricAlgorithm_RSAPSS_instance = new RSAAsymmetricAlgorithm('RSAPSS', 1);
  }
  function RSAAsymmetricAlgorithm(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RSAAsymmetricAlgorithm.prototype.nativeValue = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = 'RSASSA-PKCS1-v1_5';
        break;
      case 1:
        tmp = 'RSA-PSS';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  RSAAsymmetricAlgorithm.$metadata$ = classMeta('RSAAsymmetricAlgorithm', [NativeTypeInterface], undefined, undefined, undefined, Enum.prototype);
  function RSAAsymmetricAlgorithm_RSA_getInstance() {
    RSAAsymmetricAlgorithm_initEntries();
    return RSAAsymmetricAlgorithm_RSA_instance;
  }
  function RSAAsymmetricAlgorithm_RSAPSS_getInstance() {
    RSAAsymmetricAlgorithm_initEntries();
    return RSAAsymmetricAlgorithm_RSAPSS_instance;
  }
  function RSAKeyPairGeneration() {
  }
  RSAKeyPairGeneration.$metadata$ = interfaceMeta('RSAKeyPairGeneration');
  //region block: post-declaration
  Companion_5.prototype.secp256k1FromBytes_vz6078_k$ = secp256k1FromBytes;
  Companion_6.prototype.isPointOnSecp256k1Curve_e1y10p_k$ = isPointOnSecp256k1Curve;
  Companion_6.prototype.secp256k1FromBytes_vz6078_k$ = secp256k1FromBytes_0;
  Companion_6.prototype.secp256k1FromByteCoordinates_a08mcv_k$ = secp256k1FromByteCoordinates;
  KMMECSecp256k1PublicKey.prototype.getEncodedCompressed_zfcpzb_k$ = getEncodedCompressed;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$derivation = $io$iohk$atala$prism$apollo.derivation || ($io$iohk$atala$prism$apollo.derivation = {});
    $io$iohk$atala$prism$apollo$derivation.DerivationAxis = DerivationAxis;
    Object.defineProperty($io$iohk$atala$prism$apollo$derivation.DerivationAxis, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$derivation = $io$iohk$atala$prism$apollo.derivation || ($io$iohk$atala$prism$apollo.derivation = {});
    $io$iohk$atala$prism$apollo$derivation.DerivationPath = DerivationPath;
    Object.defineProperty($io$iohk$atala$prism$apollo$derivation.DerivationPath, 'Companion', {
      configurable: true,
      get: Companion_getInstance_1
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$derivation = $io$iohk$atala$prism$apollo.derivation || ($io$iohk$atala$prism$apollo.derivation = {});
    $io$iohk$atala$prism$apollo$derivation.MnemonicCode = MnemonicCode;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$derivation = $io$iohk$atala$prism$apollo.derivation || ($io$iohk$atala$prism$apollo.derivation = {});
    $io$iohk$atala$prism$apollo$derivation.MnemonicException = MnemonicException;
    $io$iohk$atala$prism$apollo$derivation.MnemonicLengthException = MnemonicLengthException;
    $io$iohk$atala$prism$apollo$derivation.MnemonicWordException = MnemonicWordException;
    $io$iohk$atala$prism$apollo$derivation.MnemonicChecksumException = MnemonicChecksumException;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    Object.defineProperty($io$iohk$atala$prism$apollo$utils, 'ECConfig', {
      configurable: true,
      get: ECConfig_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.ECPrivateKeyException = ECPrivateKeyException;
    $io$iohk$atala$prism$apollo$utils.ECPrivateKeyInitializationException = ECPrivateKeyInitializationException;
    $io$iohk$atala$prism$apollo$utils.ECPrivateKeyDecodingException = ECPrivateKeyDecodingException;
    $io$iohk$atala$prism$apollo$utils.ECPublicKeyException = ECPublicKeyException;
    $io$iohk$atala$prism$apollo$utils.ECPublicKeyInitializationException = ECPublicKeyInitializationException;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECCoordinate = KMMECCoordinate;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMECCoordinate, 'Companion', {
      configurable: true,
      get: Companion_getInstance_2
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECPoint = KMMECPoint;
    $io$iohk$atala$prism$apollo$utils.KMMECPoint.fromBigIntegersStrings = fromBigIntegersStrings;
    $io$iohk$atala$prism$apollo$utils.KMMECPoint.fromBigIntegers = fromBigIntegers;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$derivation = $io$iohk$atala$prism$apollo.derivation || ($io$iohk$atala$prism$apollo.derivation = {});
    $io$iohk$atala$prism$apollo$derivation.ExtendedKey = ExtendedKey;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$derivation = $io$iohk$atala$prism$apollo.derivation || ($io$iohk$atala$prism$apollo.derivation = {});
    Object.defineProperty($io$iohk$atala$prism$apollo$derivation, 'KeyDerivation', {
      configurable: true,
      get: KeyDerivation_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.JsHashType = JsHashType;
    $io$iohk$atala$prism$apollo$utils.JsHashType.values = values_0;
    $io$iohk$atala$prism$apollo$utils.JsHashType.valueOf = valueOf_0;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.JsHashType, 'SHA256', {
      configurable: true,
      get: JsHashType_SHA256_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.JsHashType, 'SHA384', {
      configurable: true,
      get: JsHashType_SHA384_getInstance
    });
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.JsHashType, 'SHA512', {
      configurable: true,
      get: JsHashType_SHA512_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECKeyPair = KMMECKeyPair;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMECKeyPair, 'Companion', {
      configurable: true,
      get: Companion_getInstance_3
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECPrivateKey = KMMECPrivateKey;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECPublicKey = KMMECPublicKey;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMECPublicKey, 'Companion', {
      configurable: true,
      get: Companion_getInstance_4
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECSecp256k1KeyPair = KMMECSecp256k1KeyPair;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMECSecp256k1KeyPair, 'Companion', {
      configurable: true,
      get: Companion_getInstance_5
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECSecp256k1PrivateKey = KMMECSecp256k1PrivateKey;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMECSecp256k1PrivateKey, 'Companion', {
      configurable: true,
      get: Companion_getInstance_6
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMECSecp256k1PublicKey = KMMECSecp256k1PublicKey;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMECSecp256k1PublicKey, 'Companion', {
      configurable: true,
      get: Companion_getInstance_7
    });
  }
  $jsExportAll$(_);
  kotlin_io_iohk_atala_prism_utils.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('bip39'), require('bip32'), require('elliptic'), require('bn.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./KotlinBigInteger-bignum-js-ir.js'), require('./ApolloUtils.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js')));

//# sourceMappingURL=ApolloBaseAsymmetricEncryption.js.map
