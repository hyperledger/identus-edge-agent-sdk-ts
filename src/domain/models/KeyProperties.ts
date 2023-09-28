export enum KeyProperties {
  /**
   * The 'algorithm' corresponds to the cryptographic algorithm associated with the key.
   */
  algorithm = "algorithm",

  /**
   * The 'curve' represents the elliptic curve used for an elliptic-curve key.
   */
  curve = "curve",

  /**
   * The 'seed' corresponds to the seed value from which a key is derived.
   */
  seed = "seed",

  /**
   * The 'rawKey' refers to the raw binary form of the key.
   */
  rawKey = "raw",

  /**
   * The 'derivationPath' refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme.
   */
  derivationPath = "derivationPath",
  index = "index",

  /**
   * The 'type' denotes the type of the key.
   */
  type = "type",

  /**
   * The 'curvePointX' represents the x-coordinate of a curve point for an elliptic-curve key.
   */
  curvePointX = "curvePoint.x",

  /**
   * The 'curvePointY' represents the y-coordinate of a curve point for an elliptic-curve key.
   */
  curvePointY = "curvePoint.y",
}
