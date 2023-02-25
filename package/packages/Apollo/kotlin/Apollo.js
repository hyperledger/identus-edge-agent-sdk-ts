(function (_, kotlin_kotlin, kotlin_io_iohk_atala_prism_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_iohk_atala_prism_hashing) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var toString = kotlin_kotlin.$_$.ka;
  var hashCode = kotlin_kotlin.$_$.j9;
  var THROW_CCE = kotlin_kotlin.$_$.qc;
  var equals = kotlin_kotlin.$_$.f9;
  var classMeta = kotlin_kotlin.$_$.e9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Valid = kotlin_io_iohk_atala_prism_utils.$_$.c;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var decodeHex = kotlin_io_iohk_atala_prism_utils.$_$.d;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit_getInstance = kotlin_kotlin.$_$.r4;
  var Applicative_getInstance = kotlin_io_iohk_atala_prism_utils.$_$.a;
  var Companion_getInstance = kotlin_io_iohk_atala_prism_utils.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var get_indices = kotlin_kotlin.$_$.q6;
  var toHexString = kotlin_io_iohk_atala_prism_hashing.$_$.a;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var Pair = kotlin_kotlin.$_$.nc;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var mapOf = kotlin_kotlin.$_$.z6;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var emptyList = kotlin_kotlin.$_$.i6;
  var SHA256 = kotlin_io_iohk_atala_prism_hashing.$_$.b;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var reversed = kotlin_kotlin.$_$.e7;
  var listOf = kotlin_kotlin.$_$.w6;
  var plus = kotlin_kotlin.$_$.b7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ld;
  //endregion
  //region block: pre-declaration
  MerkleNode.prototype = Object.create(MerkleTree.prototype);
  MerkleNode.prototype.constructor = MerkleNode;
  MerkleLeaf.prototype = Object.create(MerkleTree.prototype);
  MerkleLeaf.prototype.constructor = MerkleLeaf;
  //endregion
  function MerkleRoot(hash) {
    this.hash_1 = hash;
  }
  MerkleRoot.prototype.get_hash_won4uv_k$ = function () {
    return this.hash_1;
  };
  MerkleRoot.prototype.component1 = function () {
    return this.hash_1;
  };
  MerkleRoot.prototype.copy = function (hash) {
    return this.copy_ouxzou_k$(hash === void 1 ? this.hash_1 : hash);
  };
  MerkleRoot.prototype.copy_ouxzou_k$ = function (hash) {
    return new MerkleRoot(hash);
  };
  MerkleRoot.prototype.copy$default_ik4jho_k$ = function (hash, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      hash = this.hash_1;
    return this.copy_ouxzou_k$(hash);
  };
  MerkleRoot.prototype.toString = function () {
    return 'MerkleRoot(hash=' + toString(this.hash_1) + ')';
  };
  MerkleRoot.prototype.hashCode = function () {
    return hashCode(this.hash_1);
  };
  MerkleRoot.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MerkleRoot))
      return false;
    var tmp0_other_with_cast = other instanceof MerkleRoot ? other : THROW_CCE();
    if (!equals(this.hash_1, tmp0_other_with_cast.hash_1))
      return false;
    return true;
  };
  MerkleRoot.$metadata$ = classMeta('MerkleRoot');
  Object.defineProperty(MerkleRoot.prototype, 'hash', {
    configurable: true,
    get: MerkleRoot.prototype.get_hash_won4uv_k$
  });
  function MerkleInclusionProof$Companion$decode$lambda(it) {
    return IllegalArgumentException_init_$Create$(it);
  }
  function MerkleInclusionProof$Companion$decodeJson$lambda(hash, index, siblings) {
    return new Valid(new MerkleInclusionProof(hash, index, siblings));
  }
  function Companion() {
    Companion_instance = this;
    this.hashField_1 = 'hash';
    this.indexField_1 = 'index';
    this.siblingsField_1 = 'siblings';
  }
  Companion.prototype.get_hashField_d8xjvn_k$ = function () {
    return this.hashField_1;
  };
  Companion.prototype.get_indexField_87d1kf_k$ = function () {
    return this.indexField_1;
  };
  Companion.prototype.get_siblingsField_adficg_k$ = function () {
    return this.siblingsField_1;
  };
  Companion.prototype.decode = function (encodedMerkleInclusionProof) {
    var tmp = this.decodeJson(get_jsonObject(Default_getInstance().parseToJsonElement_lw2h4r_k$(encodedMerkleInclusionProof)));
    return tmp.getElseThrow_v06cix_k$(MerkleInclusionProof$Companion$decode$lambda);
  };
  Companion.prototype.decodeJson = function (encodedMerkleInclusionProof) {
    var tmp0_safe_receiver = encodedMerkleInclusionProof.get_4u8u51_k$('hash');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    var maybeHash = tmp2_safe_receiver == null ? null : decodeHex(tmp2_safe_receiver);
    var tmp3_safe_receiver = encodedMerkleInclusionProof.get_4u8u51_k$('index');
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
    var maybeIndex = tmp4_safe_receiver == null ? null : get_int(tmp4_safe_receiver);
    var tmp5_safe_receiver = encodedMerkleInclusionProof.get_4u8u51_k$('siblings');
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonArray(tmp5_safe_receiver);
    var tmp;
    if (tmp6_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp6_safe_receiver, 10));
      var tmp0_iterator = tmp6_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'io.iohk.atala.prism.apollo.Companion.decodeJson.<anonymous>' call
        tmp$ret$0 = get_jsonPrimitive(item).get_content_h02jrk_k$();
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var tmp7_safe_receiver = tmp;
    var tmp_0;
    if (tmp7_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp7_safe_receiver, 10));
      var tmp0_iterator_0 = tmp7_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'io.iohk.atala.prism.apollo.Companion.decodeJson.<anonymous>' call
        tmp$ret$3 = decodeHex(item_0);
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      tmp_0 = tmp$ret$5;
    }
    var maybeSiblings = tmp_0;
    var tmp_1 = Applicative_getInstance();
    var tmp_2 = Companion_getInstance().getOrError_l7gwe1_k$(maybeHash, 'hash field is missing from encoded MerkleInclusionProof. encodedMerkleInclusionProof=' + encodedMerkleInclusionProof);
    var tmp_3 = Companion_getInstance().getOrError_l7gwe1_k$(maybeIndex, 'index field is missing from encoded MerkleInclusionProof. encodedMerkleInclusionProof=' + encodedMerkleInclusionProof);
    var tmp_4 = Companion_getInstance().getOrError_l7gwe1_k$(maybeSiblings, 'siblings field is missing from encoded MerkleInclusionProof. encodedMerkleInclusionProof=' + encodedMerkleInclusionProof);
    return tmp_1.apply_on2zsl_k$(tmp_2, tmp_3, tmp_4, MerkleInclusionProof$Companion$decodeJson$lambda);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MerkleInclusionProof(hash, index, siblings) {
    Companion_getInstance_0();
    this.hash_1 = hash;
    this.index_1 = index;
    this.siblings_1 = siblings;
  }
  MerkleInclusionProof.prototype.get_hash_won4uv_k$ = function () {
    return this.hash_1;
  };
  MerkleInclusionProof.prototype.get_index_it478p_k$ = function () {
    return this.index_1;
  };
  MerkleInclusionProof.prototype.get_siblings_t1j32e_k$ = function () {
    return this.siblings_1;
  };
  MerkleInclusionProof.prototype.derivedRoot = function () {
    var n = this.siblings_1.get_size_woubt6_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var tmp0_fold = get_indices(this.siblings_1);
    var tmp1_fold = prefixHash(this.hash_1);
    var accumulator = tmp1_fold;
    var inductionVariable = tmp0_fold.first_1;
    var last = tmp0_fold.last_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.iohk.atala.prism.apollo.MerkleInclusionProof.derivedRoot.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = accumulator;
        var tmp;
        if ((this.index_1 & 1 << ((n - element | 0) - 1 | 0)) === 0) {
          tmp = combineHashes(tmp2__anonymous__z9zvc9, this.siblings_1.get_fkrdnv_k$(element));
        } else {
          tmp = combineHashes(this.siblings_1.get_fkrdnv_k$(element), tmp2__anonymous__z9zvc9);
        }
        tmp$ret$0 = tmp;
        accumulator = tmp$ret$0;
      }
       while (!(element === last));
    tmp$ret$1 = accumulator;
    var root = tmp$ret$1;
    return new MerkleRoot(root);
  };
  MerkleInclusionProof.prototype.toJson = function () {
    Companion_getInstance_0();
    var tmp = new Pair('hash', JsonPrimitive(toHexString(this.hash_1)));
    Companion_getInstance_0();
    var tmp_0 = new Pair('index', JsonPrimitive_0(this.index_1));
    Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.siblings_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.iohk.atala.prism.apollo.MerkleInclusionProof.toJson.<anonymous>' call
      tmp$ret$0 = JsonPrimitive(toHexString(item));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new JsonObject(mapOf([tmp, tmp_0, new Pair('siblings', new JsonArray(tmp$ret$2))]));
  };
  MerkleInclusionProof.prototype.encode = function () {
    return this.toJson().toString();
  };
  MerkleInclusionProof.prototype.component1 = function () {
    return this.hash_1;
  };
  MerkleInclusionProof.prototype.component2 = function () {
    return this.index_1;
  };
  MerkleInclusionProof.prototype.component3 = function () {
    return this.siblings_1;
  };
  MerkleInclusionProof.prototype.copy = function (hash, index, siblings) {
    return this.copy_9d528a_k$(hash === void 1 ? this.hash_1 : hash, index === void 1 ? this.index_1 : index, siblings === void 1 ? this.siblings_1 : siblings);
  };
  MerkleInclusionProof.prototype.copy_9d528a_k$ = function (hash, index, siblings) {
    return new MerkleInclusionProof(hash, index, siblings);
  };
  MerkleInclusionProof.prototype.copy$default_bb24mb_k$ = function (hash, index, siblings, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      hash = this.hash_1;
    if (!(($mask0 & 2) === 0))
      index = this.index_1;
    if (!(($mask0 & 4) === 0))
      siblings = this.siblings_1;
    return this.copy_9d528a_k$(hash, index, siblings);
  };
  MerkleInclusionProof.prototype.toString = function () {
    return 'MerkleInclusionProof(hash=' + toString(this.hash_1) + ', index=' + this.index_1 + ', siblings=' + this.siblings_1 + ')';
  };
  MerkleInclusionProof.prototype.hashCode = function () {
    var result = hashCode(this.hash_1);
    result = imul(result, 31) + this.index_1 | 0;
    result = imul(result, 31) + hashCode(this.siblings_1) | 0;
    return result;
  };
  MerkleInclusionProof.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MerkleInclusionProof))
      return false;
    var tmp0_other_with_cast = other instanceof MerkleInclusionProof ? other : THROW_CCE();
    if (!equals(this.hash_1, tmp0_other_with_cast.hash_1))
      return false;
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    if (!equals(this.siblings_1, tmp0_other_with_cast.siblings_1))
      return false;
    return true;
  };
  MerkleInclusionProof.$metadata$ = classMeta('MerkleInclusionProof');
  Object.defineProperty(MerkleInclusionProof.prototype, 'hash', {
    configurable: true,
    get: MerkleInclusionProof.prototype.get_hash_won4uv_k$
  });
  Object.defineProperty(MerkleInclusionProof.prototype, 'index', {
    configurable: true,
    get: MerkleInclusionProof.prototype.get_index_it478p_k$
  });
  Object.defineProperty(MerkleInclusionProof.prototype, 'siblings', {
    configurable: true,
    get: MerkleInclusionProof.prototype.get_siblings_t1j32e_k$
  });
  function generateProofs(hashes) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !hashes.isEmpty_y1axqb_k$();
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(hashes, 10));
    var tmp0_iterator = hashes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'io.iohk.atala.prism.apollo.generateProofs.<anonymous>' call
      tmp$ret$2 = new MerkleLeaf(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var merkleTree = generateProofs$buildMerkleTree(tmp$ret$4, emptyList());
    var merkleProofs = generateProofs$buildProofs(merkleTree, 0, emptyList());
    return new MerkleProofs(new MerkleRoot(merkleTree.get_hash_won4uv_k$()), merkleProofs);
  }
  function verifyProof(root, proof) {
    return proof.siblings_1.get_size_woubt6_k$() < 31 ? proof.derivedRoot().equals(root) : false;
  }
  function get_LeafPrefix() {
    return LeafPrefix;
  }
  var LeafPrefix;
  function get_NodePrefix() {
    return NodePrefix;
  }
  var NodePrefix;
  function MerkleTree() {
  }
  MerkleTree.$metadata$ = classMeta('MerkleTree');
  function MerkleNode(left, right) {
    MerkleTree.call(this);
    this.left_1 = left;
    this.right_1 = right;
    this.hash_1 = combineHashes(this.left_1.get_hash_won4uv_k$(), this.right_1.get_hash_won4uv_k$());
  }
  MerkleNode.prototype.get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  MerkleNode.prototype.get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  MerkleNode.prototype.get_hash_won4uv_k$ = function () {
    return this.hash_1;
  };
  MerkleNode.prototype.component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  MerkleNode.prototype.component2_7eebsb_k$ = function () {
    return this.right_1;
  };
  MerkleNode.prototype.copy_vwrasb_k$ = function (left, right) {
    return new MerkleNode(left, right);
  };
  MerkleNode.prototype.copy$default_8hiq0g_k$ = function (left, right, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = this.left_1;
    if (!(($mask0 & 2) === 0))
      right = this.right_1;
    return this.copy_vwrasb_k$(left, right);
  };
  MerkleNode.prototype.toString = function () {
    return 'MerkleNode(left=' + this.left_1 + ', right=' + this.right_1 + ')';
  };
  MerkleNode.prototype.hashCode = function () {
    var result = hashCode(this.left_1);
    result = imul(result, 31) + hashCode(this.right_1) | 0;
    return result;
  };
  MerkleNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MerkleNode))
      return false;
    var tmp0_other_with_cast = other instanceof MerkleNode ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    return true;
  };
  MerkleNode.$metadata$ = classMeta('MerkleNode', undefined, undefined, undefined, undefined, MerkleTree.prototype);
  function MerkleLeaf(data) {
    MerkleTree.call(this);
    this.data_1 = data;
    this.hash_1 = prefixHash(this.data_1);
  }
  MerkleLeaf.prototype.get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  MerkleLeaf.prototype.get_hash_won4uv_k$ = function () {
    return this.hash_1;
  };
  MerkleLeaf.prototype.component1_7eebsc_k$ = function () {
    return this.data_1;
  };
  MerkleLeaf.prototype.copy_ouxzou_k$ = function (data) {
    return new MerkleLeaf(data);
  };
  MerkleLeaf.prototype.copy$default_ik4jho_k$ = function (data, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      data = this.data_1;
    return this.copy_ouxzou_k$(data);
  };
  MerkleLeaf.prototype.toString = function () {
    return 'MerkleLeaf(data=' + toString(this.data_1) + ')';
  };
  MerkleLeaf.prototype.hashCode = function () {
    return hashCode(this.data_1);
  };
  MerkleLeaf.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MerkleLeaf))
      return false;
    var tmp0_other_with_cast = other instanceof MerkleLeaf ? other : THROW_CCE();
    if (!equals(this.data_1, tmp0_other_with_cast.data_1))
      return false;
    return true;
  };
  MerkleLeaf.$metadata$ = classMeta('MerkleLeaf', undefined, undefined, undefined, undefined, MerkleTree.prototype);
  function combineHashes(left, right) {
    var tmp = new SHA256();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp0_byteArrayOf = new Int8Array([1]);
    tmp$ret$0 = tmp0_byteArrayOf;
    var tmp1_plus = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.plus' call
    tmp$ret$1 = primitiveArrayConcat([left, right]);
    var tmp2_plus = tmp$ret$1;
    tmp$ret$2 = primitiveArrayConcat([tmp1_plus, tmp2_plus]);
    return tmp.digest_g3p5dr_k$(tmp$ret$2);
  }
  function prefixHash(data) {
    var tmp = new SHA256();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp0_byteArrayOf = new Int8Array([0]);
    tmp$ret$0 = tmp0_byteArrayOf;
    var tmp1_plus = tmp$ret$0;
    tmp$ret$1 = primitiveArrayConcat([tmp1_plus, data]);
    return tmp.digest_g3p5dr_k$(tmp$ret$1);
  }
  function MerkleProofs(root, proofs) {
    this.root_1 = root;
    this.proofs_1 = proofs;
  }
  MerkleProofs.prototype.get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  MerkleProofs.prototype.get_proofs_i7fjqw_k$ = function () {
    return this.proofs_1;
  };
  MerkleProofs.prototype.component1_7eebsc_k$ = function () {
    return this.root_1;
  };
  MerkleProofs.prototype.component2_7eebsb_k$ = function () {
    return this.proofs_1;
  };
  MerkleProofs.prototype.copy_b3cfeb_k$ = function (root, proofs) {
    return new MerkleProofs(root, proofs);
  };
  MerkleProofs.prototype.copy$default_kkge08_k$ = function (root, proofs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      root = this.root_1;
    if (!(($mask0 & 2) === 0))
      proofs = this.proofs_1;
    return this.copy_b3cfeb_k$(root, proofs);
  };
  MerkleProofs.prototype.toString = function () {
    return 'MerkleProofs(root=' + this.root_1 + ', proofs=' + this.proofs_1 + ')';
  };
  MerkleProofs.prototype.hashCode = function () {
    var result = this.root_1.hashCode();
    result = imul(result, 31) + hashCode(this.proofs_1) | 0;
    return result;
  };
  MerkleProofs.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MerkleProofs))
      return false;
    var tmp0_other_with_cast = other instanceof MerkleProofs ? other : THROW_CCE();
    if (!this.root_1.equals(tmp0_other_with_cast.root_1))
      return false;
    if (!equals(this.proofs_1, tmp0_other_with_cast.proofs_1))
      return false;
    return true;
  };
  MerkleProofs.$metadata$ = classMeta('MerkleProofs');
  function generateProofs$buildMerkleTree(currentLevel, nextLevel) {
    var currentLevel_0 = currentLevel;
    var nextLevel_0 = nextLevel;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (currentLevel_0.get_size_woubt6_k$() >= 2) {
          var tmp0 = currentLevel_0.subList_d153ha_k$(2, currentLevel_0.get_size_woubt6_k$());
          var tmp1 = plus(listOf(new MerkleNode(currentLevel_0.get_fkrdnv_k$(0), currentLevel_0.get_fkrdnv_k$(1))), nextLevel_0);
          currentLevel_0 = tmp0;
          nextLevel_0 = tmp1;
          continue $l$0;
        } else if (currentLevel_0.get_size_woubt6_k$() === 1) {
          var tmp2 = emptyList();
          var tmp3 = plus(listOf(currentLevel_0.get_fkrdnv_k$(0)), nextLevel_0);
          currentLevel_0 = tmp2;
          nextLevel_0 = tmp3;
          continue $l$0;
        } else if (nextLevel_0.get_size_woubt6_k$() === 1) {
          tmp = nextLevel_0.get_fkrdnv_k$(0);
        } else {
          var tmp4 = reversed(nextLevel_0);
          var tmp5 = emptyList();
          currentLevel_0 = tmp4;
          nextLevel_0 = tmp5;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function generateProofs$buildProofs(tree, currentIndex, currentPath) {
    var tmp0_subject = tree;
    var tmp;
    if (tmp0_subject instanceof MerkleLeaf) {
      tmp = listOf(new MerkleInclusionProof(tree.data_1, currentIndex, currentPath));
    } else {
      if (tmp0_subject instanceof MerkleNode) {
        var first = generateProofs$buildProofs(tree.left_1, currentIndex, plus(listOf(tree.right_1.get_hash_won4uv_k$()), currentPath));
        var second = generateProofs$buildProofs(tree.right_1, currentIndex | 1 << currentPath.get_size_woubt6_k$(), plus(listOf(tree.left_1.get_hash_won4uv_k$()), currentPath));
        tmp = plus(first, second);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function MerkleInclusionProofCompanion() {
    MerkleInclusionProofCompanion_instance = this;
  }
  MerkleInclusionProofCompanion.prototype.decode = function (encoded) {
    return Companion_getInstance_0().decode(encoded);
  };
  MerkleInclusionProofCompanion.$metadata$ = objectMeta('MerkleInclusionProofCompanion');
  var MerkleInclusionProofCompanion_instance;
  function MerkleInclusionProofCompanion_getInstance() {
    if (MerkleInclusionProofCompanion_instance == null)
      new MerkleInclusionProofCompanion();
    return MerkleInclusionProofCompanion_instance;
  }
  function Platform() {
    Platform_instance = this;
    this.OS_1 = 'JS';
  }
  Platform.prototype.get_OS_kntok3_k$ = function () {
    return this.OS_1;
  };
  Platform.$metadata$ = objectMeta('Platform');
  var Platform_instance;
  function Platform_getInstance() {
    if (Platform_instance == null)
      new Platform();
    return Platform_instance;
  }
  //region block: init
  LeafPrefix = 0;
  NodePrefix = 1;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    $io$iohk$atala$prism$apollo.MerkleRoot = MerkleRoot;
    $io$iohk$atala$prism$apollo.MerkleInclusionProof = MerkleInclusionProof;
    Object.defineProperty($io$iohk$atala$prism$apollo.MerkleInclusionProof, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    $io$iohk$atala$prism$apollo.generateProofs = generateProofs;
    $io$iohk$atala$prism$apollo.verifyProof = verifyProof;
    var $io = _.io || (_.io = {});
    var $io$iohk = $io.iohk || ($io.iohk = {});
    var $io$iohk$atala = $io$iohk.atala || ($io$iohk.atala = {});
    var $io$iohk$atala$prism = $io$iohk$atala.prism || ($io$iohk$atala.prism = {});
    var $io$iohk$atala$prism$apollo = $io$iohk$atala$prism.apollo || ($io$iohk$atala$prism.apollo = {});
    Object.defineProperty($io$iohk$atala$prism$apollo, 'MerkleInclusionProofCompanion', {
      configurable: true,
      get: MerkleInclusionProofCompanion_getInstance
    });
  }
  $jsExportAll$(_);
  kotlin_io_iohk_atala_prism_utils.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ApolloUtils.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ApolloHashing.js')));

//# sourceMappingURL=Apollo.js.map
