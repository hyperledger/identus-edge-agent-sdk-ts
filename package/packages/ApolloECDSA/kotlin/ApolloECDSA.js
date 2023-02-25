(function (_, $module$elliptic, kotlin_kotlin, kotlin_io_iohk_atala_prism_hashing, kotlin_io_iohk_atala_prism_base_asymmetric_encryption, kotlin_io_iohk_atala_prism_utils) {
  'use strict';
  //region block: imports
  var ec = $module$elliptic.ec;
  var THROW_ISE = kotlin_kotlin.$_$.j8;
  var Unit_getInstance = kotlin_kotlin.$_$.h3;
  var Enum = kotlin_kotlin.$_$.b8;
  var classMeta = kotlin_kotlin.$_$.d6;
  var SHA256 = kotlin_io_iohk_atala_prism_hashing.$_$.b;
  var SHA384 = kotlin_io_iohk_atala_prism_hashing.$_$.c;
  var SHA512 = kotlin_io_iohk_atala_prism_hashing.$_$.d;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.v8;
  var toHexString = kotlin_io_iohk_atala_prism_hashing.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var numberToByte = kotlin_kotlin.$_$.p6;
  var ECConfig_getInstance = kotlin_io_iohk_atala_prism_base_asymmetric_encryption.$_$.a;
  var plus = kotlin_kotlin.$_$.j4;
  var decodeHex = kotlin_io_iohk_atala_prism_utils.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.t6;
  //endregion
  //region block: pre-declaration
  ECDSAType.prototype = Object.create(Enum.prototype);
  ECDSAType.prototype.constructor = ECDSAType;
  //endregion
  var ECDSAType_ECDSA_SHA256_instance;
  var ECDSAType_ECDSA_SHA384_instance;
  var ECDSAType_ECDSA_SHA512_instance;
  function values() {
    return [ECDSAType_ECDSA_SHA256_getInstance(), ECDSAType_ECDSA_SHA384_getInstance(), ECDSAType_ECDSA_SHA512_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ECDSA_SHA256':
        return ECDSAType_ECDSA_SHA256_getInstance();
      case 'ECDSA_SHA384':
        return ECDSAType_ECDSA_SHA384_getInstance();
      case 'ECDSA_SHA512':
        return ECDSAType_ECDSA_SHA512_getInstance();
      default:
        ECDSAType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ECDSAType_entriesInitialized;
  function ECDSAType_initEntries() {
    if (ECDSAType_entriesInitialized)
      return Unit_getInstance();
    ECDSAType_entriesInitialized = true;
    ECDSAType_ECDSA_SHA256_instance = new ECDSAType('ECDSA_SHA256', 0);
    ECDSAType_ECDSA_SHA384_instance = new ECDSAType('ECDSA_SHA384', 1);
    ECDSAType_ECDSA_SHA512_instance = new ECDSAType('ECDSA_SHA512', 2);
  }
  function ECDSAType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ECDSAType.$metadata$ = classMeta('ECDSAType', undefined, undefined, undefined, undefined, Enum.prototype);
  function ECDSAType_ECDSA_SHA256_getInstance() {
    ECDSAType_initEntries();
    return ECDSAType_ECDSA_SHA256_instance;
  }
  function ECDSAType_ECDSA_SHA384_getInstance() {
    ECDSAType_initEntries();
    return ECDSAType_ECDSA_SHA384_instance;
  }
  function ECDSAType_ECDSA_SHA512_getInstance() {
    ECDSAType_initEntries();
    return ECDSAType_ECDSA_SHA512_instance;
  }
  function KMMECDSA() {
    KMMECDSA_instance = this;
  }
  KMMECDSA.prototype.sign_vldxba_k$ = function (type, data, privateKey) {
    var tmp0_subject = type;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = (new SHA256()).digest_g3p5dr_k$(data);
        break;
      case 1:
        tmp = (new SHA384()).digest_g3p5dr_k$(data);
        break;
      case 2:
        tmp = (new SHA512()).digest_g3p5dr_k$(data);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var hashedData = toHexString(tmp);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = privateKey.nativeValue_1.toArray();
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
      // Inline function 'io.iohk.atala.prism.apollo.ecdsa.KMMECDSA.sign.<anonymous>' call
      tmp$ret$0 = numberToByte(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var byteList = tmp$ret$2;
    var tmp_0 = 0;
    var tmp_1 = ECConfig_getInstance().PRIVATE_KEY_BYTE_SIZE_1 - byteList.get_size_woubt6_k$() | 0;
    var tmp_2 = new Int8Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$3;
      // Inline function 'io.iohk.atala.prism.apollo.ecdsa.KMMECDSA.sign.<anonymous>' call
      tmp$ret$3 = 0;
      tmp_2[tmp_3] = tmp$ret$3;
      tmp_0 = tmp_0 + 1 | 0;
    }
    var padding = tmp_2;
    var privateKeyBytes = toHexString(plus(padding, byteList));
    var ecjs = new ec('secp256k1');
    var signature = ecjs.sign(hashedData, privateKeyBytes, 'hex');
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp1_unsafeCast = signature.toDER('hex');
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = tmp1_unsafeCast;
    tmp$ret$5 = tmp$ret$4;
    var value = tmp$ret$5;
    return decodeHex(value);
  };
  KMMECDSA.prototype.verify_rrxlp7_k$ = function (type, data, publicKey, signature) {
    var tmp0_subject = type;
    var tmp0 = tmp0_subject.ordinal_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = (new SHA256()).digest_g3p5dr_k$(data);
        break;
      case 1:
        tmp = (new SHA384()).digest_g3p5dr_k$(data);
        break;
      case 2:
        tmp = (new SHA512()).digest_g3p5dr_k$(data);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var hashedData = toHexString(tmp);
    var ecjs = new ec('secp256k1');
    return ecjs.verify(hashedData, toHexString(signature), toHexString(publicKey.getEncoded_9fny20_k$()), 'hex');
  };
  KMMECDSA.$metadata$ = objectMeta('KMMECDSA');
  var KMMECDSA_instance;
  function KMMECDSA_getInstance() {
    if (KMMECDSA_instance == null)
      new KMMECDSA();
    return KMMECDSA_instance;
  }
  //region block: exports
  kotlin_io_iohk_atala_prism_utils.$jsExportAll$(_);
  kotlin_io_iohk_atala_prism_base_asymmetric_encryption.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('elliptic'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ApolloHashing.js'), require('./ApolloBaseAsymmetricEncryption.js'), require('./ApolloUtils.js')));

//# sourceMappingURL=ApolloECDSA.js.map
