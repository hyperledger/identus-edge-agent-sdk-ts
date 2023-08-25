import * as SDK from "@input-output-hk/atala-prism-wallet-sdk";
import * as Pluto from "@input-output-hk/atala-prism-wallet-sdk/build/pluto-sqljs/Pluto.js";

const plutoConfig = {
  type: "sqljs",
};

const pluto = new Pluto(plutoConfig);
const apollo = new SDK.Apollo();
const castor = new SDK.Castor(apollo);

(async () => {
  await pluto.start();
  console.log("Pluto started");

  let creds = await pluto.getAllCredentials();
  console.log("GEt all credentials", creds);

  const publicKeys = [];
  const keyAgreementPrivateKey = apollo.createPrivateKey({
    type: SDK.Domain.KeyTypes.Curve25519,
    curve: SDK.Domain.Curve.X25519,
  });

  const authenticationPrivateKey = apollo.createPrivateKey({
    type: SDK.Domain.KeyTypes.EC,
    curve: SDK.Domain.Curve.ED25519,
  });

  publicKeys.push(keyAgreementPrivateKey.publicKey());
  publicKeys.push(authenticationPrivateKey.publicKey());

  const did = await castor.createPeerDID(publicKeys, []);

  await pluto.storePeerDID(did, [
    keyAgreementPrivateKey,
    authenticationPrivateKey,
  ]);
  const storedDids = await pluto.getAllPeerDIDs();

  console.log("storedDids", storedDids);
})();
