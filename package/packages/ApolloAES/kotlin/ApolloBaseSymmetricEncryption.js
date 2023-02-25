(function (_, kotlin_io_iohk_atala_prism_base64, kotlin_kotlin, kotlin_io_iohk_atala_prism_secure_random) {
  'use strict';
  //region block: imports
  var get_base64PadEncoded = kotlin_io_iohk_atala_prism_base64.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.z5;
  var get_base64PadDecodedBytes = kotlin_io_iohk_atala_prism_base64.$_$.a;
  var SecureRandom_init_$Create$ = kotlin_io_iohk_atala_prism_secure_random.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var classMeta = kotlin_kotlin.$_$.u5;
  var THROW_ISE = kotlin_kotlin.$_$.t7;
  var Unit_getInstance = kotlin_kotlin.$_$.g3;
  var Enum = kotlin_kotlin.$_$.m7;
  //endregion
  //region block: pre-declaration
  function exportToBase64(iv) {
    return get_base64PadEncoded(iv);
  }
  function createIVFromBase64(base64Encoded) {
    return get_base64PadDecodedBytes(base64Encoded);
  }
  function createRandomIV(size) {
    return SecureRandom_init_$Create$(null, 1, null).nextBytes_oxmcdz_k$(size);
  }
  SymmetricKeyType.prototype = Object.create(Enum.prototype);
  SymmetricKeyType.prototype.constructor = SymmetricKeyType;
  //endregion
  function IVBase64Export() {
  }
  IVBase64Export.$metadata$ = interfaceMeta('IVBase64Export');
  function IVBase64Import() {
  }
  IVBase64Import.$metadata$ = interfaceMeta('IVBase64Import');
  function IVGeneration() {
  }
  IVGeneration.$metadata$ = interfaceMeta('IVGeneration');
  function SymmetricKeyBase64Export() {
  }
  SymmetricKeyBase64Export.$metadata$ = interfaceMeta('SymmetricKeyBase64Export');
  function SymmetricKeyBase64Import() {
  }
  SymmetricKeyBase64Import.$metadata$ = interfaceMeta('SymmetricKeyBase64Import');
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.createKeyFromBase64_b0d4o5_k$ = function (base64Encoded, algorithm) {
    return new KMMSymmetricKey(get_base64PadDecodedBytes(base64Encoded));
  };
  Companion.$metadata$ = objectMeta('Companion', [SymmetricKeyBase64Import, IVBase64Import, IVBase64Export, IVGeneration]);
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KMMSymmetricKey(nativeValue) {
    Companion_getInstance();
    this.nativeValue_1 = nativeValue;
  }
  KMMSymmetricKey.prototype.get_nativeValue_sbm4lr_k$ = function () {
    return this.nativeValue_1;
  };
  KMMSymmetricKey.prototype.exportToBase64_kn6qny_k$ = function () {
    return get_base64PadEncoded(this.nativeValue_1);
  };
  KMMSymmetricKey.$metadata$ = classMeta('KMMSymmetricKey', [SymmetricKeyBase64Export]);
  Object.defineProperty(KMMSymmetricKey.prototype, 'nativeValue', {
    configurable: true,
    get: KMMSymmetricKey.prototype.get_nativeValue_sbm4lr_k$
  });
  var SymmetricKeyType_AES_instance;
  function values() {
    return [SymmetricKeyType_AES_getInstance()];
  }
  function valueOf(value) {
    if ('AES' === value)
      return SymmetricKeyType_AES_getInstance();
    else {
      SymmetricKeyType_initEntries();
      THROW_ISE();
    }
  }
  var SymmetricKeyType_entriesInitialized;
  function SymmetricKeyType_initEntries() {
    if (SymmetricKeyType_entriesInitialized)
      return Unit_getInstance();
    SymmetricKeyType_entriesInitialized = true;
    SymmetricKeyType_AES_instance = new SymmetricKeyType('AES', 0);
  }
  function SymmetricKeyType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SymmetricKeyType.$metadata$ = classMeta('SymmetricKeyType', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(SymmetricKeyType.prototype, 'name', {
    configurable: true,
    get: SymmetricKeyType.prototype.get_name_woqyms_k$
  });
  Object.defineProperty(SymmetricKeyType.prototype, 'ordinal', {
    configurable: true,
    get: SymmetricKeyType.prototype.get_ordinal_ip24qg_k$
  });
  function SymmetricKeyType_AES_getInstance() {
    SymmetricKeyType_initEntries();
    return SymmetricKeyType_AES_instance;
  }
  //region block: post-declaration
  Companion.prototype.createIVFromBase64_kdthcv_k$ = createIVFromBase64;
  Companion.prototype.exportToBase64_ncpla3_k$ = exportToBase64;
  Companion.prototype.createRandomIV_l2beph_k$ = createRandomIV;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.KMMSymmetricKey = KMMSymmetricKey;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.KMMSymmetricKey, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    var $io$iohk$atala$prism$apollo$utils = $io$iohk$atala$prism$apollo.utils || ($io$iohk$atala$prism$apollo.utils = {});
    $io$iohk$atala$prism$apollo$utils.SymmetricKeyType = SymmetricKeyType;
    $io$iohk$atala$prism$apollo$utils.SymmetricKeyType.values = values;
    $io$iohk$atala$prism$apollo$utils.SymmetricKeyType.valueOf = valueOf;
    Object.defineProperty($io$iohk$atala$prism$apollo$utils.SymmetricKeyType, 'AES', {
      configurable: true,
      get: SymmetricKeyType_AES_getInstance
    });
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = KMMSymmetricKey;
  //endregion
  return _;
}(module.exports, require('./ApolloBase64.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ApolloSecureRandom.js')));

//# sourceMappingURL=ApolloBaseSymmetricEncryption.js.map
