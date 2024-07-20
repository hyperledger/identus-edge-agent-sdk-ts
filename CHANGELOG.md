# [6.0.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v5.0.0...v6.0.0) (2024-07-20)


### Bug Fixes

*  Rename the documentation file accordingly. ([#204](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/204)) ([90c1f54](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/90c1f54d18e0164c68a858f9f214ecb0e18b04a8))
* add compliant dates not in ms, but in seconds. ([#206](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/206)) ([76f4f48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/76f4f482bf31f3abe5695fb6d319561ca3c50f13))
* add e2e tests for jwt revocation, sdk verification for jwt and anoncreds ([#244](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/244)) ([5c2519b](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/5c2519b6285cba24d4194f2e7816aacb60e05fd5))
* add missing files in package to clean rxdb vulnerabilities to fix e2e  ([#233](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/233)) ([8b4c9e8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/8b4c9e85f7894d4fbf670715153334d18cb8d924))
* Agent.createNewPrismDID to use derivationPath ([#158](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/158)) ([06bc2cc](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/06bc2cc672d3f432b9add9413af603c4a834dad1))
* attachment descriptor parameters ([#240](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/240)) ([2391f01](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2391f013d79f8505f1287ee1531b7c647775d18d))
* attachment encoding fallback base64 + base64url by default ([#239](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/239)) ([78cd8f7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/78cd8f71056713d42bc944877c0cc196a34b30d5))
* build node wasm not bundled up ([#226](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/226)) ([48e78e3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/48e78e3e446df5ea10b01ace04315e446aec6126))
* **Castor:** createPrismDID and resolveDID key id conflicts ([#243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/243)) ([5024818](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/5024818d59a470637df4d39d9b96bc270f2451d9))
* Compatibility issues with osx and unix platforms around the sed ([#217](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/217)) ([8287eed](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/8287eed3648f413a7ecb0388f53535d8d8a90cd7))
* ConnectionManager emit Messages ([#190](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/190)) ([776e55a](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/776e55abea0a52e5e1989e9633357cc0a14cba77))
* create custom class to verify bitstring position more precisely. ([#234](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/234)) ([255184b](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/255184b9635a8714ca5118e5108cc650d636468a))
* db cannot be created twice with the same name which crashes demos ([#193](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/193)) ([27f771c](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/27f771c47fb5ba0efc96919a3223a64d370d916a))
* deprecate browser demos ([#221](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/221)) ([a6f9bdb](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/a6f9bdb0c877476c1189ae3204df3e49270b35bd))
* e2e issues fix ([#236](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/236)) ([12019b9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/12019b9fcac8d2be4f2fd929c0cedeae07c41dea))
* e2e issues with latest websocket changes ([#200](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/200)) ([969fc06](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/969fc06cd375d0bcec833691f161bbcd6d61e885))
* escape the `<->` sequence to fix the build error in the identus-… ([#248](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/248)) ([15cf694](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/15cf6947da1ad4342c46e228c277754f023fa38e))
* generate docs after releasing as we cannot access a package that… ([#255](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/255)) ([70efa8b](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/70efa8b16122ab132f36ab1c9f2ac30b3a4b3176))
* issue with build script not replacing some files that have been … ([#191](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/191)) ([c26f014](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/c26f01411019399e8a308195fb6a66cabcfc63f6))
* jwe rust library for backup encryption not including the node wa… ([#237](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/237)) ([b1177a6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/b1177a6697fa12900839f40581b80a16c93f016d))
* Message properties body, createdTime, expiresTimePlus ([#232](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/232)) ([cf7db9f](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/cf7db9f82e9721357b2a59dd2b4b21bcc3ae3352))
* moving to hyperledger namespace ([#245](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/245)) ([2139a78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2139a78a81aaf07f0526694b87636dbb615c06cb))
* optin to websockets for the mediator live mode as an experiment,… ([#199](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/199)) ([950bc76](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/950bc76b7affb1cf804be32199ee5b32f27e62fa))
* prevent broken links to exist in order for docs site to build pr… ([#205](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/205)) ([f33f029](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/f33f029fe459a1a9b092096d21baa514144d10d4))
* releasing to HL ([#253](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/253)) ([ed0fdf3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/ed0fdf3a30cd36364010524dc48273c47f5ee5c8))
* remove typo in release pipeline ([#254](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/254)) ([34597e1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/34597e138b98eee1798b1d0da4be7a1ff0d6e951))
* Removing the if condition in CI pipeline for release branches ([#179](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/179)) ([a8c4ebc](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/a8c4ebcbb788422cc993701124eb939ecbc7ccf1))
* rename prism-agent into edge-agent ([#203](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/203)) ([2a1fa1e](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2a1fa1e7f5ff3f40ee309d9ae09abad3ac251a2a))
* rename references ([#218](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/218)) ([7d79d6f](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/7d79d6fad55356ed898aacf79cebc4558892867e))
* type references are lost in the package. ([#202](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/202)) ([86ea42e](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/86ea42e70d4e74392102dc5c013b43676c09f08f))
* update event callback argument type ([#216](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/216)) ([ec92fcb](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/ec92fcb35f66944b75d7bafbfc1748cc5e01bdca))
* updating references to Identus ([#197](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/197)) ([8fcb792](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/8fcb792a50b8086a801c8f3c51517dff34a9c88b))
* using rust dependency for jwe ([#235](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/235)) ([0a35296](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/0a352962816f5f889c603bf0b46438002f85eeee))
* wasm build folder change ([#186](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/186)) ([11ad81f](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/11ad81fae0cb446a3bdf054b682d6117727851b4))


### Features

* add sdk jwt revocation verification ([#231](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/231)) ([115c2c6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/115c2c63b42db55abcae26b534880be6455b381c))
* Backup and Restore ([#215](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/215)) ([bf15325](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/bf15325720db79399338adc64fee26fcc30681a2))
* Implement sd+jwt for issuance and verification flows with cloud agent ([#228](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/228)) ([a8c0b21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/a8c0b21ef51a5aab07f44187b1514613de84ad75))
* Implementing JWT Credential revocation notification ([#184](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/184)) ([9aa8b8b](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/9aa8b8b90e7bd814cbe079db2310d30d98f80a48))
* implementing SDK Verification Phase2 Anoncreds ([#219](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/219)) ([e80549c](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/e80549cb08082ccc72b0a4abc6ba2e539d9e6fb7))
* updating Anoncreds to io fork ([#157](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/157)) ([8987de2](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/8987de20f2717b328e02dd0f391dbb347856c526))


### BREAKING CHANGES

* Pollux instance now requires to have Apollo first constructor parameter (used internally)
Deprecated internal function processJWTCredential, processAnoncredsCredential and extractCredentialFormatFromMessage. Internally, in order to process any type of credential offer just call pollux.processCredentialOffer instead. In order to extract the credentialFormat from a DIDComm message if available, use message.credentialFormat (will return known CredentialType or unknown) In order to extract the payload of whatever DIDComm message, use message.payload which will decode it into the right object instance
JWT class now needs apollo and castor in constructor as they now instantiate from JWTCore (used internally)
Derivable Private key is not deriving using the derivationPath as a string not the DerivationPath class (used internally)

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
