(function (_, kotlin_kotlin, kotlin_io_iohk_atala_prism_utils) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.u7;
  var toByteArray = kotlin_io_iohk_atala_prism_utils.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.n8;
  var classMeta = kotlin_kotlin.$_$.o7;
  //endregion
  //region block: pre-declaration
  //endregion
  function SecureRandomInterface() {
  }
  SecureRandomInterface.$metadata$ = interfaceMeta('SecureRandomInterface');
  function SecureRandomStaticInterface() {
  }
  SecureRandomStaticInterface.$metadata$ = interfaceMeta('SecureRandomStaticInterface');
  function SecureRandom_init_$Init$(seed, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      seed = new Int8Array(0);
    SecureRandom.call($this, seed);
    return $this;
  }
  function SecureRandom_init_$Create$(seed, $mask0, $marker) {
    return SecureRandom_init_$Init$(seed, $mask0, $marker, Object.create(SecureRandom.prototype));
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.generateSeed_vgqocb_k$ = function (numBytes) {
    var arr = new Uint8Array(numBytes);
    return toByteArray(crypto.getRandomValues(arr).buffer);
  };
  Companion.$metadata$ = objectMeta('Companion', [SecureRandomStaticInterface]);
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SecureRandom(seed) {
    Companion_getInstance();
    this.seed_1 = seed;
  }
  SecureRandom.prototype.get_seed_wou8ca_k$ = function () {
    return this.seed_1;
  };
  SecureRandom.prototype.nextBytes_oxmcdz_k$ = function (size) {
    var arr = new Uint8Array(size);
    return toByteArray(crypto.getRandomValues(arr).buffer);
  };
  SecureRandom.$metadata$ = classMeta('SecureRandom', [SecureRandomInterface]);
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SecureRandom_init_$Create$;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ApolloUtils.js')));

//# sourceMappingURL=ApolloSecureRandom.js.map
