## [6.5.1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.5.0...v6.5.1) (2025-02-06)


### Bug Fixes

* adding backwards compatibility to manage key curve Secp256k1 and… ([#372](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/372)) ([f328fbc](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/f328fbc28a896d939d57a72d6eb2771cd38a1d1d))

# [6.5.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.4.0...v6.5.0) (2025-02-03)


### Features

* castor create signed prism did operation ([#347](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/347)) ([1a3abf6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/1a3abf65a2f89b4ecd0f28af600329805573d6fc))

# [6.4.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.3.3...v6.4.0) (2025-01-16)


### Bug Fixes

* add information for GHRC ([#337](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/337)) ([01105a0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/01105a0950c8202a4339f96c04423ff939e482e8))
* add listener async + wait time for presentation verified ([#336](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/336)) ([80f3370](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/80f33700fe20d22919b7cd476fea79ee2862ea97))
* commonJs default export ([#339](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/339)) ([00ddc08](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/00ddc08e461ab83b62fa15edea4a34a8560c8d78))
* set requirements for workshop ([#335](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/335)) ([eff3cf3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/eff3cf3284335f3af73d70294a9b26623ee0298d))


### Features

* **backup:** introduce new schema to minimize backup length ([#333](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/333)) ([2aa27f8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2aa27f855168ba65bc7db2d6f29bd24827feb181))
* implementing Startable and propagating stop() ([#309](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/309)) ([9e459c5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/9e459c504f075ac4ea839fd3d5bb36dc6579da18))

# [4.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v3.1.0...v4.0.0) (2024-02-02)

* fix: removing terser to allow an unminified build that is easier to d… by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/127
* feat: Integrate Apollo back + make secp256k1 keys part of derivable abstraction by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/110
* test: update e2e env vars by @amagyar-iohk in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/122
* docs: remove the github authentication token notice from the demos an… by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/125
* fix: Update demos to use the new Mediator peer did by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/128
* fix: Change the demo mediator ID for the beta one. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/135
* feat(ExportableKey): adding ExportableKey protocol and implementation by @curtis-h in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/131
* fix: Integrate rust auto-generated code through submodules. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/136
* fix: wrong CI pipelines for git submodules. Missing With. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/139
* refactor: PrivateKey.index to return an integer | undefined by @curtis-h in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/140
* fix: merging multiple PeerDID classes by @curtis-h in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/130
* docs: ADR sdk package release + docs generation in MD by @curtis-h in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/120
* fix: add docusaurus sidebar by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/143
* feat: release hybrid browser-nodejs as commonjs and module dependency by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/142
* fix: update apollo dependency. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/145
* fix: typos InvalidBasicMEssageBodyError and signasture by @curtis-h in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/144
* fix: approve the ADR + implement the CI changes to release RC packages. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/146
* fix: CI fix, make sure that we build package before publishing into npm by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/147
* fix: try to set the prerelease property through env vars the current … by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/149
* fix: adding the right variables to the ci pipeline. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/151
* fix: Releasing with semantic-release -e extending a js configuration … by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/152
* fix: build script not able to find file. by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/153
* fix: replace rc and release with correct configuration files in relea… by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/154
* fix: package name update by @elribonazo in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/155
* feat(Pollux)!: Adding Anoncreds presentation by @curtis-h in https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/pull/137

BREAKING CHANGE: 
* PrivateKey.index now returns number | undefined
PrivateKey.index was returning a string it's possible where that's being used (ie Pluto) will need to handle the new number | undefined type
* The SDK is now exportes as default, in order to import it use import sdk from '@atala/prism-wallet-sdk', vs import * as sdk from '@atala/prism-wallet-sdk'. Browsers now also don't need to build complex webpack configuration, check the demos for more info.
* Pollux requires a new function: createPresentationProof to handle creating a Presentation for the relevant Request and Credential.


# [3.1.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v3.0.0...v3.1.0) (2023-11-13)


### Bug Fixes

* CI pipeline issues. ([#121](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/121)) ([28b5a8f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/28b5a8f4492f4972ff4848e8a2d35f333872bfeb))


### Features

* extending Agent.acceptInvitation to handle OOB + Prism ([#111](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/111)) ([ce8326b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/ce8326b0cf9c0b9090b4e5df88f6e37601bbcc95))

# [3.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.5.0...v3.0.0) (2023-11-07)


* docs!: Introduced breaking changes in Pluto as we are intro… (#116) ([be8c6e8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/be8c6e835debed7b867afe30a5c66e6d196fd716)), closes [#116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/116)


### Features

* **Agent:** add initialize function ([#107](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/107)) ([14389a1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/14389a169b3580b1ff334a9130bf0776807ba0a2))


### BREAKING CHANGES

* Introduced breaking changes in Pluto as we are introducing credential abstraction and anoncred issuing functionality.
- X25519 keys were wrongly set as EC (elliptic) key types which is wrong. EC25519 + Secp256k1 belong to EC key type, X25519 should have Curve25519 instead to be valid. If you previously had a key stored as EC (x25519) changing that keyType to KeyTypes.X25519 (Curve25519).
- As we have introduced new credential types we have also built a credential abstraction so storing and fetching credentials becomes easier.

# [2.5.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.4.1...v2.5.0) (2023-10-31)


### Bug Fixes

* adding resolution for yarn ([#108](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/108)) ([da60285](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/da6028520a89c83257919685c41a88071ac6a59b))
* Integrate Apollo in Single branch. ([#94](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/94)) ([bdc26e6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/bdc26e61b64419991ee34c3e07a897e707cdcb62))
* remove unused packages and fix node demo ([#99](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/99)) ([f9406d7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f9406d7a3c43e7fef8aa1d0c6893069ce8a4fd13))
* rollup config to handle anoncreds in node ([#109](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/109)) ([0aa7fbc](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/0aa7fbc1b2cd813d6e2259e2594bee266207e4de))


### Features

* adding anoncreds for ZKP ([#69](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/69)) ([d57be19](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/d57be192542c4094fcacf85cdc7869abb6153e3a))
* Rollback Apollo integration ([#106](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/106)) ([854379a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/854379a2d4e6bb89aff8dcf2bbf65eba110682eb))

## [2.4.1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.4.0...v2.4.1) (2023-10-03)


### Bug Fixes

* add Mediator Peer did field to the sample application ([#90](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/90)) ([78f6127](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/78f6127b774494f0a8a85aad1bee6559a95c0a4f))
* Improve package json licence and specs. ([#93](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/93)) ([8626003](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8626003b36c2086e2cc593749eeac54cfb1ac64a))
* Improve the Typescript demo and make it easier to go through the qsg ([#92](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/92)) ([6e331e8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6e331e87b45f9c315666f3f50787c5b44609f508))

# [2.4.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.3.0...v2.4.0) (2023-08-30)


### Bug Fixes

* **mercury:** Add return route with value all to async messages that are initiated by the holder. ([#85](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/85)) ([5e56675](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/5e56675292ea2f824f3c685d87411540493cb85b))


### Features

* **Apollo:** MnemonicWordList must be 24 or 12 words long ([#81](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/81)) ([fbe5678](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/fbe5678e5c61486c009fa3121c6a1d7a72e5212d))
* **Sec:** updating package dependencies ([#83](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/83)) ([460e123](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/460e1238a6f2e709e7645dd4aa33d8c98acd0f33))

# [2.3.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.2.0...v2.3.0) (2023-08-28)


### Bug Fixes

* **docs:** Add static reference to the docs. ([#82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/82)) ([3dda29d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/3dda29d13efd2c44f9d87ffa1ab3c7467e5a8088))


### Features

* **Mercury:** adding return_route: all to didcomm Message ([#80](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/80)) ([1972a9e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/1972a9e708bbad5a2d39fcd5763f46bba5313d1a))

# [2.2.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.1.0...v2.2.0) (2023-08-23)


### Bug Fixes

* **Pluto:** encoding / decoding PrivateKeys ([#78](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/78)) ([b9133ac](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/b9133acbcb9cbd883fffec05feb58ecbe24600fc))


### Features

* **Castor:** extending createPrismDID to accept a KeyPair or PublicKey ([#70](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/70)) ([d06871c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/d06871caadaf1b1f43cedfb1390ea58558b3fce8))
* **Demo:** Update Mediator DID for demo apps ([#73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/73)) ([7f3c98e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7f3c98ec77d2cd8cf862d91515c139ff76270f03))

# [2.1.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.3...v2.1.0) (2023-08-17)


### Bug Fixes

* update dates parsing from JWT credentials ([#66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/66)) ([24562f7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/24562f77b19f84c2acd6a485368c06d836531672))


### Features

* Add Cryptography key abstraction for signable, verifiable keys, and also private and public base impls ([#67](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/67)) ([61d9dbd](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/61d9dbd2f13c4f21540500fff337c7bc4ff5b527))

## [2.0.3](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.2...v2.0.3) (2023-06-27)


### Bug Fixes

* Listener Key must be exported not as a type. ([#68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/68)) ([61d898b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/61d898b23459e9d47550de997d927ab1513070c6))

## [2.0.2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.1...v2.0.2) (2023-06-22)


### Bug Fixes

* **docs:** Correct the required commands to run the nodejs + browser … ([#64](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/64)) ([fec65fe](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/fec65fe0f77657fab99c6e817c8ed31d729f0d2a))
* **docs:** Improve Generated documentation ([#65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/65)) ([db3c20e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/db3c20eeb081256dbe6931c3b34e4cc53c2039f7))
* Documentation improvements ([#62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/62)) ([6d43d03](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6d43d033d2bb3019c9fe4fa000cde6afbdccc8e2))

## [2.0.1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.0...v2.0.1) (2023-05-31)


### Bug Fixes

* add support for Base64 in PickupRunner ([#52](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/52)) ([4d81061](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/4d81061a763de1b435693955f1e5aeaaec179c65))
* **agent:** Improve unit testing for protocols. ([#56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/56)) ([4049258](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/4049258549b49ec344ed6d69e1bcd2b876496125))
* **apollo:** Create keyPair from privateKey, support ed25519 and x25519 keyCurves. ([#57](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/57)) ([29b655e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/29b655eb29487f0143d99460e63873279de773d4))
* **apollo:** createKeyPairFromPrivateKey update impl to not use the seed and fix mercury secretResolver impl ([#50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/50)) ([8db08b3](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8db08b33fb3202650ca9ebe8a3973722f936a985))
* browser sqlite storage issue ([#49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/49)) ([a535882](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a53588221f6f713c669309a948ceb114e52fab0c))
* **didcomm:** Add didcomm packages as dependencies  ([#60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/60)) ([a0ba3b6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a0ba3b69409fbfa426526b85f23c2ce7bbf076f6))
* **docs:** polishing documentation ([#48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/48)) ([19fa64d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/19fa64d6f4b9fa15cae17b3339483b123a60b410))
* improve build process and readme ([#61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/61)) ([a090f9c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a090f9cc77a2b22c8f09f7d6fb3fe2d462f9b970))
* Index access. ([#44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/44)) ([2d47c50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2d47c50582a7deeab456fb1ec8db3af982221783))
* pluto module finding namespace ([#55](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/55)) ([5b23f7c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/5b23f7c50e44c50f1993c250dc9c3c4ac9733255))
* pluto sqljs loader in nodejs ([#54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/54)) ([11afc4f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/11afc4f7e474bb2a5e68c50f832becf47e18a559))
* **sdk:** Add Proper Nodejs support + refactor into SRC ([#58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/58)) ([7f04024](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7f040246302a4c969d05669b0aa78a6fd2aea9d5))
* **sdk:** Adding full support for browsers and nodejs platforms. ([#59](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/59)) ([2e83cba](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2e83cbaf445f636c69f204e7342cc7e2ce0d2fea))

# [2.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v1.0.0...v2.0.0) (2023-04-04)


### Bug Fixes

* **apollo:** fix typo in public method ([#15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/15)) ([59cd862](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/59cd862e3ab66fcbf802151ce3b2618a6d1584db))
* **apollo:** throw error when signing with x25519 ([#16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/16)) ([6371d27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6371d27b255868775b6c30d57d780d76989c69c0))
* browser webpack issue ([#29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/29)) ([02d186e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/02d186e5daf715232507fabda1c5e010a7f377c6))
* Browser webpack issue ([#30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/30)) ([8c59450](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8c59450d841bf1bd0394037cbdf10ce574fcaded))
* move required libs to dependencies instead of devDependencies ([#39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/39)) ([7a7716f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7a7716faf2db6d590d36850b4947d2ba71be3ced))
* parse timestamp to date ([#43](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/43)) ([0eb0cc6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/0eb0cc681baedbf2c3052109e4a25b3a8bf775fb))
* pluto table recreate attempt ([#34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/34)) ([3a011cb](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/3a011cb223a96c8eb5d0575d507a56a2dfe58479))
* **pluto:** usage on agent & other minor updates ([#27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/27)) ([2a18d14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2a18d14e2c4777795e5e515f8af1906dc2e36a76))
* react-native-sqlite-storage complain ([#32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/32)) ([9ca0ad3](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9ca0ad39e4b354dcd496c75c93a0ce639f341bba))
* typeorm cleanup ([#40](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/40)) ([f8765a9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f8765a96dcf214d82e53fdc1fcddd7425d239f4e))
* Webpack dev server infinite loop ([#33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/33)) ([94eb991](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/94eb991f93975ea2a177b8db0f040541040e7f1e))


### Continuous Integration

* add semantic-release ([617c64a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/617c64a36c46f17b7f818ca8e356b81ad41e3a01))


### Features

* **agent:** Implement agent with basic mediation protocol, with examples ([#23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/23)) ([b0104b2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/b0104b286c8a1338295b587d647944538845f7be))
* **agent:** Implementing DIDComm V2 Protocols + Demo showcasing ([#36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/36)) ([515d835](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/515d835f7c0d592756e63d507f2fd2a51c5a80be))
* **apollo:** Implementing PeerDID ED25519 and X25519 algorithms for KeyAgreement and Authentication. ([#13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/13)) ([f6eabef](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f6eabefa908bae8e636a97d67de4ff78f84543f2))
* ATL 3641 - Pluto in wallet implementation ([#17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/17)) ([54579e5](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/54579e562c8327ab8fa7851e91532f12458dbe34))
* **examples:** add browser sdk integration example - keys and dids ([#14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/14)) ([4cd0e75](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/4cd0e758ff5c580e7bce65cc22c59ac261220405))
* **examples:** adding agent control buttons to browser demo ([#24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/24)) ([696309d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/696309d992269aa263250acc0ade6f8c56ac1e44))
* **examples:** initial examples setup + build config update ([#8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/8)) ([0b6ec28](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/0b6ec2842a339c2b443d8cd65021fd0fab36f1a4))
* Pluto typeorm migration. ([#22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/22)) ([6107ef2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6107ef2127d471bc27a3220eff2ddd842de91a6b))
* **Pollux:** Implementing Pollux.parseVerifiableCredential with tests ([#4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/4)) ([da05e65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/da05e654b2132772e85c4e37b970d50a4080d741))
* **testing:** Add Karma testing for browser ([#9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/9)) ([b15f148](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/b15f14849f1677c89b1ed6b2c73a83240784164f))


### BREAKING CHANGES

* release Atala V2
