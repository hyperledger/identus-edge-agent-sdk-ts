## [6.4.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.3.3...v6.4.0) (2025-01-13)

### Features

* **backup:** introduce new schema to minimize backup length ([#333](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/333)) ([2aa27f8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2aa27f855168ba65bc7db2d6f29bd24827feb181))
* implementing Startable and propagating stop() ([#309](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/309)) ([9e459c5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/9e459c504f075ac4ea839fd3d5bb36dc6579da18))

### Bug Fixes

* add information for GHRC ([#337](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/337)) ([01105a0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/01105a0950c8202a4339f96c04423ff939e482e8))
* add listener async + wait time for presentation verified ([#336](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/336)) ([80f3370](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/80f33700fe20d22919b7cd476fea79ee2862ea97))
* commonJs default export ([#339](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/339)) ([00ddc08](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/00ddc08e461ab83b62fa15edea4a34a8560c8d78))
* set requirements for workshop ([#335](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/335)) ([eff3cf3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/eff3cf3284335f3af73d70294a9b26623ee0298d))
## [6.3.3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.3.2...v6.3.3) (2024-11-13)

### Bug Fixes

* force in memory for all workshop ([#334](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/334)) ([de51db2](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/de51db26dd9853d25b6837070e0ac2c53b83e068))
## [6.3.2](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.3.1...v6.3.2) (2024-11-12)

### Bug Fixes

* export Pluto models ([#332](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/332)) ([0613bfc](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/0613bfcee17b106c8768b6f7a8d27076925634e0))
* implementing the Hyperledger Identus SDJWT workshop ([#323](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/323)) ([8b0a7be](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/8b0a7be2c1447ca727df72ac1ad4a859a1c0a957))
## [6.3.1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.3.0...v6.3.1) (2024-11-06)

### Bug Fixes

* adding esbuild also as optional missing dependency ([#324](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/324)) ([bd3d946](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/bd3d946d826beb78d75f0385831dc64ad61b189d))
## [6.3.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.2.2...v6.3.0) (2024-11-04)

### Features

* sdk to sdk sdjwt holder verification ([#292](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/292)) ([1d841f4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/1d841f42bb311d696ed7d2c9aff2cf9293aa8217))

### Bug Fixes

* anoncreds rust build failing, enable bulk-memory c flag on compilation ([#307](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/307)) ([7481938](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/74819386e633ea9d6c0cf31f2afb6776d4fc738b))
* build single commonjs output while keeping ability to use import or require ([#320](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/320)) ([2cdbf1e](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2cdbf1ede368164be3dd56f3e362e76e94d48b48))
* e2e workflows misnamed package ([#317](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/317)) ([7c152bf](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/7c152bffe0de1de68ac1c06f96d49ebc38b64391))
* enable building from docker ([#303](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/303)) ([e6d0008](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/e6d0008dafe5db8d87f683665509722ad60a6acd))
## [6.2.2](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.2.0...v6.2.2) (2024-10-04)

### Bug Fixes

* remove rollup dependency ([#300](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/300)) ([ff6740e](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/ff6740e2d5f62262b1db65f517410af2ddc11448))
## [6.2.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.1.0...v6.2.0) (2024-10-04)

### Features

* Connectionless Offer ([#293](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/293)) ([97e05e7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/97e05e7ae6b07162dfb48222ba1f42beba97fd2c))
* integrating error reporting protocol  ([#289](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/289)) ([02430db](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/02430dbd5158607f9f9c227bb9428f3733e0388f))
* OIDC Agent ([#278](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/278)) ([295e14f](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/295e14fdcec839ecfad1190c4644a489a3d56014))
* separate DIDCommAgent and adding Tasks ([#277](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/277)) ([3a8fd66](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/3a8fd6661fae80b05e3fc98154488fc98be504a5))

### Bug Fixes

* e2e cucumber import ([#291](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/291)) ([e569d79](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/e569d799dd50c1bdc5abe26cc9e1471422c0d252))
* next generation building tools and testing framework ([#258](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/258)) ([54ead35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/54ead350b06df8bbe53212e7189e5762e1e9eb33))
* sdk module resolution issues ([#290](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/290)) ([f53d728](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/f53d72829dbb64b64b6998fdcbfcbb47c6b4361a))
## [6.1.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.0.1...v6.1.0) (2024-09-12)

### Features

* Connectionless presentation ([#272](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/272)) ([d43ec60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/d43ec604b24b2b5b18a80d714a7188223f58a4bb))
* decoupling JWT from Pollux and adding KID header to JWTs ([#271](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/271)) ([8a1ed3f](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/8a1ed3fb7d3df5e627c1bdaf56434ca799ab01f7))
* errors introducing error codes and refactoring Apollo errors ([#265](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/265)) ([f99c565](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/f99c565c8c0d2f97e78c8bba6a64e07e22d5a0b6))

### Bug Fixes

* bitstring improvement and test coverage ([#270](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/270)) ([dce65b5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/dce65b56affd5ed2a17d5d82dbab3efcfb8475bb))
* external build update for new generated code ([#264](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/264)) ([460102a](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/460102ac442a2b7aa41f73d91a7f1301b9686db7))
* main branchname in semantic release config ([#279](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/279)) ([a6a72ff](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/a6a72ff6f9ce61f383485202cf2349f473bbd1f4))
* make mediator updateable in the nextjs demo ([#262](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/262)) ([99df3c0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/99df3c042cf722c9137bcd576e1ac71c44bea6db))
* nextjs demo safeBody ([#263](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/263)) ([0d09ea7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/0d09ea79d9c044a9b672b0543b1c1a4bf08e4d70))
* noble-ciphers dependency ([#284](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/284)) ([fabcc2c](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/fabcc2c636b237414ad4d0b27717c9994bd1b9ca))
* package dependencies found by mixmix ([#273](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/273)) ([#275](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/275)) ([82a50d3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/82a50d36f80116f8047b6e83b9efb82690de97d6))
* rollup is not a optionalDependency, and is not included in our m… ([#269](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/269)) ([9ea9d42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/9ea9d424eb95627fdfe90c7f6337b04b9afd47ac))
* update code-owners ([#281](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/281)) ([b8409af](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/b8409af57ed0bb987499ad5cfb1cbbef14e22b53))
## [6.0.1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v6.0.0...v6.0.1) (2024-08-12)

### Bug Fixes

* use for-loops in Pluto persistence methods ([#261](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/261)) ([2ad0d8a](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2ad0d8a505e64ef956a91678df0f2a5b4ec94eec))
## [6.0.0](https://github.com/hyperledger/identus-edge-agent-sdk-ts/compare/v5.2.0...v6.0.0) (2024-07-19)

### ⚠ BREAKING CHANGES

* Pollux instance now requires to have Apollo first constructor parameter (used internally)
Deprecated internal function processJWTCredential, processAnoncredsCredential and extractCredentialFormatFromMessage. Internally, in order to process any type of credential offer just call pollux.processCredentialOffer instead. In order to extract the credentialFormat from a DIDComm message if available, use message.credentialFormat (will return known CredentialType or unknown) In order to extract the payload of whatever DIDComm message, use message.payload which will decode it into the right object instance
JWT class now needs apollo and castor in constructor as they now instantiate from JWTCore (used internally)
Derivable Private key is not deriving using the derivationPath as a string not the DerivationPath class (used internally)

### Features

* add sdk jwt revocation verification ([#231](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/231)) ([197c40b](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/197c40b3fbdddaa63c46d9bb71109b8be540e8f7))
* Backup and Restore ([#215](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/215)) ([6bcf0ea](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/6bcf0ea5cd596f818298276f1194edd2176e762f))
* Implement sd+jwt for issuance and verification flows with cloud agent ([#228](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/228)) ([9ba1950](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/9ba19504982fb09bb97bfae86747b5c7b89ef97d))

### Bug Fixes

* add e2e tests for jwt revocation, sdk verification for jwt and anoncreds ([#244](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/244)) ([d464697](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/d46469705718defff318290c49704215d048242e))
* add missing files in package to clean rxdb vulnerabilities to fix e2e  ([#233](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/233)) ([9891707](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/98917074d6acc88eebc75b677512a06227e80a5e))
* attachment descriptor parameters ([#240](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/240)) ([c83d74d](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/c83d74dd7b8d72de91a105a5fb9d3c249d9f33e7))
* attachment encoding fallback base64 + base64url by default ([#239](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/239)) ([a22d3dd](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/a22d3dd118965de2b910414d4769b7701cd5dd71))
* build node wasm not bundled up ([#226](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/226)) ([48e78e3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/48e78e3e446df5ea10b01ace04315e446aec6126))
* **Castor:** createPrismDID and resolveDID key id conflicts ([#243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/243)) ([f165531](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/f165531f62a651e70f38dc98069314438b096cdf))
* create custom class to verify bitstring position more precisely. ([#234](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/234)) ([efb771d](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/efb771d4917902500a745eb38203dd4b81c898a2))
* e2e issues fix ([#236](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/236)) ([ba908b1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/ba908b15338e9dd52c2d88597f0a1a86c827d198))
* escape the `<->` sequence to fix the build error in the identus-… ([#248](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/248)) ([0a32269](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/0a32269b0a753f95fd12dd220aca552a0796941a))
* generate docs after releasing as we cannot access a package that… ([#255](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/255)) ([2be9710](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/2be9710b3d0f8e8b98bb990f47462c1a88654948))
* jwe rust library for backup encryption not including the node wa… ([#237](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/237)) ([6721d8f](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/6721d8f1b28fbbd4dd82e1429295cdcc0c9ad4a8))
* Message properties body, createdTime, expiresTimePlus ([#232](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/232)) ([38de286](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/38de286227c71ce49247752430475974185f837d))
* moving to hyperledger namespace ([#245](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/245)) ([cc83358](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/cc83358cb77ae018cfede03335c4a205f4ef8741))
* releasing to HL ([#253](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/253)) ([abb65a3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/abb65a336ae986ad2d94d5b3964d499833f66c0d))
* remove typo in release pipeline ([#254](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/254)) ([c2d2e87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/c2d2e87a1b4e91cf8a47e592418d4075e5c1d7ee))
* using rust dependency for jwe ([#235](https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/235)) ([5bbfdf5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/commit/5bbfdf59e271b7a07a84b186f1e4e99f74f34a65))
## [5.2.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v5.1.1...v5.2.0) (2024-05-29)

### Features

* implementing SDK Verification Phase2 Anoncreds ([#219](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/219)) ([e80549c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/e80549cb08082ccc72b0a4abc6ba2e539d9e6fb7))

### Bug Fixes

* deprecate browser demos ([#221](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/221)) ([a6f9bdb](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a6f9bdb0c877476c1189ae3204df3e49270b35bd))
* rename references ([#218](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/218)) ([7d79d6f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7d79d6fad55356ed898aacf79cebc4558892867e))
* update event callback argument type ([#216](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/216)) ([ec92fcb](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/ec92fcb35f66944b75d7bafbfc1748cc5e01bdca))
## [5.1.1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v5.1.0...v5.1.1) (2024-05-17)

### Bug Fixes

* Compatibility issues with osx and unix platforms around the sed ([#217](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/217)) ([8287eed](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8287eed3648f413a7ecb0388f53535d8d8a90cd7))
## [5.1.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v5.0.0...v5.1.0) (2024-05-02)

### ⚠ BREAKING CHANGES

* **sdk-verification:** Implementing DIF Presentation exchange protocol 2.0 for SDK to SDK OOB verification (#196)

### Features

* Implementing JWT Credential revocation notification ([#184](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/184)) ([9aa8b8b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9aa8b8b90e7bd814cbe079db2310d30d98f80a48))
* **sdk-verification:** Implementing DIF Presentation exchange protocol 2.0 for SDK to SDK OOB verification ([#196](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/196)) ([68c9db8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/68c9db8fc9559fddeeda68f7ac60a411c4a1cf4d))
* updating Anoncreds to io fork ([#157](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/157)) ([8987de2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8987de20f2717b328e02dd0f391dbb347856c526))

### Bug Fixes

*  Rename the documentation file accordingly. ([#204](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/204)) ([90c1f54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/90c1f54d18e0164c68a858f9f214ecb0e18b04a8))
* add compliant dates not in ms, but in seconds. ([#206](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/206)) ([76f4f48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/76f4f482bf31f3abe5695fb6d319561ca3c50f13))
* Agent.createNewPrismDID to use derivationPath ([#158](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/158)) ([06bc2cc](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/06bc2cc672d3f432b9add9413af603c4a834dad1))
* ConnectionManager emit Messages ([#190](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/190)) ([776e55a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/776e55abea0a52e5e1989e9633357cc0a14cba77))
* db cannot be created twice with the same name which crashes demos ([#193](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/193)) ([27f771c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/27f771c47fb5ba0efc96919a3223a64d370d916a))
* e2e issues with latest websocket changes ([#200](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/200)) ([969fc06](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/969fc06cd375d0bcec833691f161bbcd6d61e885))
* issue with build script not replacing some files that have been … ([#191](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/191)) ([c26f014](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/c26f01411019399e8a308195fb6a66cabcfc63f6))
* optin to websockets for the mediator live mode as an experiment,… ([#199](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/199)) ([950bc76](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/950bc76b7affb1cf804be32199ee5b32f27e62fa))
* prevent broken links to exist in order for docs site to build pr… ([#205](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/205)) ([f33f029](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f33f029fe459a1a9b092096d21baa514144d10d4))
* Removing the if condition in CI pipeline for release branches ([#179](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/179)) ([a8c4ebc](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a8c4ebcbb788422cc993701124eb939ecbc7ccf1))
* rename prism-agent into edge-agent ([#203](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/203)) ([2a1fa1e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2a1fa1e7f5ff3f40ee309d9ae09abad3ac251a2a))
* type references are lost in the package. ([#202](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/202)) ([86ea42e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/86ea42e70d4e74392102dc5c013b43676c09f08f))
* updating references to Identus ([#197](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/197)) ([8fcb792](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8fcb792a50b8086a801c8f3c51517dff34a9c88b))
* wasm build folder change ([#186](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/186)) ([11ad81f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/11ad81fae0cb446a3bdf054b682d6117727851b4))
## [5.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v4.0.2...v5.0.0) (2024-05-02)

### Features

* Implementing Pluto Repositories ([#160](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/160)) ([71bd0c6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/71bd0c69e1d9143bb6d96a071aaee9babc8c9e48))

### Bug Fixes

* add reference app + mediator live mode ([#177](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/177)) ([14dd42d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/14dd42d6a08ece197f8945e7b6f00ed1efe84343))
* e2e tests improvement ([#178](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/178)) ([46381e4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/46381e4473fefc7dd6647948ed7174932c149c05))
## [4.0.2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v4.0.0...v4.0.2) (2024-05-02)

### Bug Fixes

* key's id name according to the DID Peer new specs [#126](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/126) ([#148](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/148)) ([09cab81](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/09cab819b19be948edd30b7aa9edc641f9add0d7))
* Manually generating the missing changelog and breaking changes b… ([#167](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/167)) ([9a8e3bb](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9a8e3bb03750338a9df4306d94b35c208fefd8d9))
* Recover JTI field correctly. Allowing to regenerate the original JWT string ([#171](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/171)) ([9129387](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9129387b231da84dc7e82a6518e8b2fdd7de2890))
## [4.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v3.1.0...v4.0.0) (2024-05-02)

### ⚠ BREAKING CHANGES

* **Pollux:** Pollux requires a new function: createPresentationProof to handle creating a Presentation for the relevant Request and Credential.

Signed-off-by: Francisco Javier Ribó Labrador <elribonazo@gmail.com>
* The SDK is now exportes as default, in order to import it use import sdk from '@atala/prism-wallet-sdk', vs import * as sdk from '@atala/prism-wallet-sdk'. Browsers now also don't need to build complex webpack configuration, check the demos for more info.

Signed-off-by: Francisco Javier Ribó Labrador <elribonazo@gmail.com>
* If you have imported Domain.PeerDID in your typescript application, you will need to re-import from PeerDID directly

Signed-off-by: Francisco Javier Ribó Labrador <elribonazo@gmail.com>
* PrivateKey.index now returns number | undefined
PrivateKey.index was returning a string it's possible where that's being used (ie Pluto) will need to handle the new number | undefined type

Signed-off-by: Francisco Javier Ribó Labrador <elribonazo@gmail.com>

### Features

* **ExportableKey:** adding ExportableKey protocol and implementation ([#131](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/131)) ([474e7ec](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/474e7ec26b8a8dcaa706846575a189e43230addd))
* Integrate Apollo back + make secp256k1 keys part of derivable abstraction ([#110](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/110)) ([eb0a636](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/eb0a636a5a37b886538587bfd48f8b4f4f1658c5))
* **Pollux:** Adding Anoncreds presentation ([#137](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/137)) ([f6678b4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f6678b49f80b7b0d088aaab795ecab6850651e73))
* PrivateKey.index to return an integer | undefined ([#140](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/140)) ([f0931bc](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f0931bc24d9fefcdcebcba2b27dbc5c6374899fd))
* release hybrid browser-nodejs as commonjs and module dependency ([#142](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/142)) ([dc6b733](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/dc6b7339789b79078b5c982ae431bd027265a673))

### Bug Fixes

* add docusaurus sidebar ([#143](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/143)) ([10134fa](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/10134fafcec50ba37b71cf7e220d559a7612a5d8))
* adding the right variables to the ci pipeline. ([#151](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/151)) ([ce16926](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/ce1692615687bc0c84b20d5a175a185158a59cb4))
* approve the ADR + implement the CI changes to release RC packages. ([#146](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/146)) ([cb07ca6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/cb07ca68786f693a2b864848346d35dac3851cec))
* build script not able to find file. ([#153](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/153)) ([923d148](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/923d1484a0912618fbb1ab234e8d81e72365078a))
* Change the demo mediator ID for the beta one. ([#135](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/135)) ([fd8c4ef](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/fd8c4ef2cbf3c5ebb3bba23bcfedc6f782880e61))
* CI fix, make sure that we build package before publishing into npm ([#147](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/147)) ([67daf33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/67daf332c4458e4830d5ac489fb038f08f03b56a))
* Integrate rust auto-generated code through submodules. ([#136](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/136)) ([69dde8e](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/69dde8e5f3486b75404627c3dbbf717d77b4c6aa))
* merging multiple PeerDID classes ([#130](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/130)) ([9d5dbf6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9d5dbf66ec63dc6077b10b7e99c57d2d0e923971))
* package npm package name ([#155](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/155)) ([03abdca](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/03abdca7b410af44a7e8944100fe1d013d4576b1))
* Releasing with semantic-release -e extending a js configuration … ([#152](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/152)) ([7354b0c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7354b0cb605bee320993efa51789e234e3287866))
* removing terser to allow an unminified build that is easier to d… ([#127](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/127)) ([e7ee7f7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/e7ee7f7ce9b2a8616254c0e766233816bf4cd20f))
* replace rc and release with correct configuration files in relea… ([#154](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/154)) ([7628a53](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7628a53afbaf382d546d181d3ef16b823b24e2e1))
* try to set the prerelease property through env vars the current … ([#149](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/149)) ([d5abb22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/d5abb22dd216b7bebd4033b98586317bdcce6a9d))
* typos InvalidBasicMEssageBodyError and signasture ([#144](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/144)) ([b8e77e6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/b8e77e63fdcd3cde556833277efb5580081f1ae1))
* update apollo dependency. ([#145](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/145)) ([a7de633](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a7de6331cc875d0173ff21c9fcf077130b0ed7c0))
* Update demos to use the new Mediator peer did ([#128](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/128)) ([8612f73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8612f7376dea388f1aae611ffb982b9938b8d5ac))
* wrong CI pipelines for git submodules. Missing With. ([#139](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/139)) ([9e8ebb7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9e8ebb7a6248c63ec6e03676649a7c27aa8adfe8))
## [3.1.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v3.0.0...v3.1.0) (2024-05-02)

### Features

* extending Agent.acceptInvitation to handle OOB + Prism ([#111](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/111)) ([31b02f0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/31b02f01eb2e4ce54ede938d7fbaf73419d9e377))

### Bug Fixes

* CI pipeline issues. ([#121](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/121)) ([7a584ff](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/7a584fff5ac8c5492cfbcac4b9377b9723b0cbcc))
## [3.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.5.0...v3.0.0) (2024-05-02)

### ⚠ BREAKING CHANGES

* Introduced breaking changes in Pluto as we are introducing credential abstraction and anoncred issuing functionality.
- X25519 keys were wrongly set as EC (elliptic) key types which is wrong. EC25519 + Secp256k1 belong to EC key type, X25519 should have Curve25519 instead to be valid. If you previously had a key stored as EC (x25519) changing that keyType to KeyTypes.X25519 (Curve25519).
- As we have introduced new credential types we have also built a credential abstraction so storing and fetching credentials becomes easier.

Signed-off-by: Francisco Javier Ribó Labrador <elribonazo@gmail.com>

### Features

* **Agent:** add initialize function ([#107](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/107)) ([a06186b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a06186bd682f2fdc4f88d68bc6c9bd5ae62e1f12))

### Documentation

* Introduced breaking changes in Pluto as we are intro… ([#116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/116)) ([c3852ab](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/c3852ab6076e30c216113b3594a35403b82f3d82))
## [2.5.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.4.1...v2.5.0) (2024-05-02)

### ⚠ BREAKING CHANGES

* add npm audit action (#102)

### Features

* add npm audit action ([#102](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/102)) ([827edb9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/827edb92272f48b2e209ee7137657288aaa68590))
* adding anoncreds for ZKP ([#69](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/69)) ([6164421](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6164421a6cfe87740d52bdabfe88e5b23ed24d4c))
* Rollback Apollo integration ([#106](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/106)) ([5458b6d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/5458b6dce264ce36da6a84005339fe24d32139e9))

### Bug Fixes

* adding resolution for yarn ([#108](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/108)) ([edc949a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/edc949a493103c1a121cf43a9bda4d7bec27bf5e))
* Integrate Apollo in Single branch. ([#94](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/94)) ([9c7c61f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/9c7c61f898a1ef18892cf66a05a37bf1b26b99d7))
* remove unused packages and fix node demo ([#99](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/99)) ([6a10c22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6a10c22983264eacf6696f402e3bd6ed8ca15a96))
* rollup config to handle anoncreds in node ([#109](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/109)) ([4dbb2fb](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/4dbb2fbc5da6b2e40b1b36f06cd4812655f40707))
## [2.4.1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.4.0...v2.4.1) (2024-05-02)

### Bug Fixes

* add Mediator Peer did field to the sample application ([#90](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/90)) ([1bf28be](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/1bf28be2b69de9fb04f118ea53b4aceb94958641))
* Improve package json licence and specs. ([#93](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/93)) ([1e1369a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/1e1369a97d18247ddfc4335321c150d2f716920d))
* Improve the Typescript demo and make it easier to go through the qsg ([#92](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/92)) ([e050be8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/e050be8ccd8592b592b5764c28d1c8d507809a06))
## [2.4.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.3.0...v2.4.0) (2024-05-02)

### ⚠ BREAKING CHANGES

* removing Pluto implementation from main bundle (#84)

### Features

* **Apollo:** MnemonicWordList must be 24 or 12 words long ([#81](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/81)) ([25664e5](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/25664e5f4c344b99cd1dff3e46e49234dcb57ab0))
* **Sec:** updating package dependencies ([#83](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/83)) ([cf1e4f3](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/cf1e4f3a9142a03c408f91cb46317f7dc130aa20))

### Bug Fixes

* **mercury:** Add return route with value all to async messages that are initiated by the holder. ([#85](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/85)) ([4755241](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/4755241755f7a5f4fc508079d67cb6ec2b8dfd32))

### Code Refactoring

* removing Pluto implementation from main bundle ([#84](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/84)) ([c51b8a1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/c51b8a1ded81c763ddc29c6165c5b87919c20835))
## [2.3.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.2.0...v2.3.0) (2024-05-02)

### Features

* **Mercury:** adding return_route: all to didcomm Message ([#80](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/80)) ([2cb1682](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2cb168215828f430eabd8d071d9362119a9d1fa3))

### Bug Fixes

* **docs:** Add static reference to the docs. ([#82](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/82)) ([aedbeb7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/aedbeb7e8698d4f13bfe20f6f368a1e365371ef2))
## [2.2.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.1.0...v2.2.0) (2024-05-02)

### Features

* **Castor:** extending createPrismDID to accept a KeyPair or PublicKey ([#70](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/70)) ([522f6eb](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/522f6ebc79927ce08ff75276d5d410b08d14e3f7))
* **Demo:** Update Mediator DID for demo apps ([#73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/73)) ([45203bd](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/45203bd00206a633e88bfd1bb4946a9cbcabdff0))

### Bug Fixes

* **Pluto:** encoding / decoding PrivateKeys ([#78](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/78)) ([8a49b9d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/8a49b9da2909f0df05899db18088deac68563e44))
## [2.1.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.3...v2.1.0) (2024-05-02)

### Features

* Add Cryptography key abstraction for signable, verifiable keys, and also private and public base impls ([#67](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/67)) ([fedd636](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/fedd636661781cd062ed49a11d02c29c3c029afb))

### Bug Fixes

* update dates parsing from JWT credentials ([#66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/66)) ([f2b073d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f2b073d3268b9d714bb26efb077f56b9903a2cd0))
## [2.0.3](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.2...v2.0.3) (2024-05-02)

### Bug Fixes

* Listener Key must be exported not as a type. ([#68](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/68)) ([6042093](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/604209341e5154eb18ead4b70f653f662f057b63))
## [2.0.2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.1...v2.0.2) (2024-05-02)

### Bug Fixes

* **docs:** Correct the required commands to run the nodejs + browser … ([#64](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/64)) ([2ff9bce](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2ff9bcec3edb805df221de19b91cf0f598761d9f))
* **docs:** Improve Generated documentation ([#65](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/65)) ([a475e05](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a475e0583b6796312346996e21f62e0b301d3e2a))
* Documentation improvements ([#62](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/62)) ([93adf73](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/93adf732c3565aeecb93bc7513247f9eab83a175))
## [2.0.1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v2.0.0...v2.0.1) (2024-05-02)

### Bug Fixes

* add support for Base64 in PickupRunner ([#52](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/52)) ([67ab3e4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/67ab3e416d695bf2197dc84499d55a9c6ac2f82e))
* **agent:** Improve unit testing for protocols. ([#56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/56)) ([41c67e3](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/41c67e37346fbd09617a0634e8d9926c5830968d))
* **apollo:** Create keyPair from privateKey, support ed25519 and x25519 keyCurves. ([#57](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/57)) ([769145a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/769145ae8041ea757267ef56c556ed843a714ea1))
* **apollo:** createKeyPairFromPrivateKey update impl to not use the seed and fix mercury secretResolver impl ([#50](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/50)) ([6baeb13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6baeb1394386b237a265b0582d6678a821a4376f))
* browser sqlite storage issue ([#49](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/49)) ([6770116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/6770116019de278763ed214cbc16d045c4b4a6a5))
* **didcomm:** Add didcomm packages as dependencies  ([#60](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/60)) ([dd80f8c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/dd80f8c1d3faf93d31520dd88061c97564d0e5cb))
* **docs:** polishing documentation ([#48](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/48)) ([597ad17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/597ad17161479a0462affaf9db39d5a80d1eb339))
* improve build process and readme ([#61](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/61)) ([111b916](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/111b916a1fc3ce0436bcdc54f6a20564db4ffda3))
* Index access. ([#44](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/44)) ([815d8b6](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/815d8b6430243b5d7abd16f10459575335b0a21b))
* pluto module finding namespace ([#55](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/55)) ([5d56f88](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/5d56f885df51a1ab469d4d3d7bab2568c861ea57))
* pluto sqljs loader in nodejs ([#54](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/54)) ([c295863](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/c295863780199448e18526e8d87b13c6eb775d3e))
* **sdk:** Add Proper Nodejs support + refactor into SRC ([#58](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/58)) ([07df69b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/07df69bdc61715422060757d573e1f7cf38046d3))
* **sdk:** Adding full support for browsers and nodejs platforms. ([#59](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/59)) ([60237e0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/60237e05ca230c9e98ee90e06e38c92960d291d5))
## [2.0.0](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/compare/v1.0.0...v2.0.0) (2024-05-02)

### ⚠ BREAKING CHANGES

* release Atala V2

Signed-off-by: Francisco Javier Ribó Labrador <elribonazo@gmail.com>

### Features

* **agent:** Implement agent with basic mediation protocol, with examples ([#23](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/23)) ([a64f779](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/a64f7790ce9038c3544ddc3ea33c99861dfb5b18))
* **agent:** Implementing DIDComm V2 Protocols + Demo showcasing ([#36](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/36)) ([36e5efe](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/36e5efe17d95fd97ae037283a222f0759420df54))
* **apollo:** Implementing PeerDID ED25519 and X25519 algorithms for KeyAgreement and Authentication. ([#13](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/13)) ([256ea6f](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/256ea6f9d1b49c3886858c0fbe88f7e8e8bdd4b2))
* ATL 3641 - Pluto in wallet implementation ([#17](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/17)) ([56fd32b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/56fd32b11366fc0d04b58dd6df42f31651445f37))
* **examples:** add browser sdk integration example - keys and dids ([#14](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/14)) ([45bba1a](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/45bba1a0dbd446eb65f2cb72706ebd79565f2a52))
* **examples:** adding agent control buttons to browser demo ([#24](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/24)) ([5a0fa86](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/5a0fa86eeb86a281d529a44f1b601504e80169d4))
* **examples:** initial examples setup + build config update ([#8](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/8)) ([856ad06](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/856ad0660b938669b7bd1a132ea53064f9fbd377))
* Pluto typeorm migration. ([#22](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/22)) ([2640a6c](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2640a6c7100b9a53cb3f125d39e4b9c75bc06c51))
* **Pollux:** Implementing Pollux.parseVerifiableCredential with tests ([#4](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/4)) ([2b1521b](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/2b1521b7b863b9fa3060a613c28d32b848486736))
* **testing:** Add Karma testing for browser ([#9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/9)) ([d0d2117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/d0d21178fc31994d1a228e62901cb0488bfb8fd2))

### Bug Fixes

* **apollo:** fix typo in public method ([#15](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/15)) ([d7f09d9](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/d7f09d99deb68b9a97130fd5a5a06201a4ffdbd1))
* **apollo:** throw error when signing with x25519 ([#16](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/16)) ([5a4e0d1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/5a4e0d16c1d7ba00604e31a15109b4a42c3be680))
* browser webpack issue ([#29](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/29)) ([e332996](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/e332996fe27a8be6799c3037072b412eb33ce556))
* Browser webpack issue ([#30](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/30)) ([47689e2](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/47689e2a8c8710c74cddb548fc828c6ca5dc89f9))
* move required libs to dependencies instead of devDependencies ([#39](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/39)) ([f8b7c38](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/f8b7c385402b54e911e47720721bb388dead2f0a))
* parse timestamp to date ([#43](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/43)) ([882ef4d](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/882ef4d76dfe3a162305ce372d8a29f1fb8b15f0))
* pluto table recreate attempt ([#34](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/34)) ([624b302](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/624b302c7c6c047bc9fe719be894aaa85aa9281a))
* **pluto:** usage on agent & other minor updates ([#27](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/27)) ([2705262](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/27052620828e9fc90ec7a9c21581e293899c5955))
* react-native-sqlite-storage complain ([#32](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/32)) ([1419272](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/1419272fa15d35c8f2da0adc6014c5fcd8d3d844))
* typeorm cleanup ([#40](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/40)) ([aff7000](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/aff70009a798b78316c0c0b03aa74cfecebd262c))
* Webpack dev server infinite loop ([#33](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/33)) ([48c2ea1](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/48c2ea108ee86910e9a4b41a07bcf2e99990d261))

### Continuous Integration

* add semantic-release ([1048eb7](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/commit/1048eb7be83076fb617300188137dea945a13f07))
