
import React, { useState } from "react";
import SDK from "@hyperledger/identus-edge-agent-sdk";
import '../app/index.css';
import { FooterNavigation } from "@/components/FooterNavigation";
import { Mnemonics } from "@/components/Mnemonics";
import { KeyPair } from "@/components/Keypair";
import { Dids } from "@/components/Dids";
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { PageHeader } from "@/components/PageHeader";
import { BackupRestore } from "@/components/BackupRestore";
import { reduxActions } from "@/reducers/app";


export default function App() {
  const app = useMountedApp();
  const [mediatorDID, setMediatorDID] = useState<string>(app.mediatorDID.toString());

  function onChangeMediatorDID(e) {
    setMediatorDID(e.target.value)
    app.dispatch(reduxActions.updateMediator({
      mediator: e.target.value
    }))
  }

  return (
    <>
      <div className="mx-10 mt-5 mb-30">
        <PageHeader>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Debug
          </h1>
        </PageHeader>
        <Box>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Settings
          </h1>

          <label htmlFor="mediatordid">MediatorDID</label>
          <input
            id="mediatordid"
            value={mediatorDID}
            onChange={onChangeMediatorDID}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </Box>
        <Mnemonics />
        <BackupRestore />
        <KeyPair curve={SDK.Domain.Curve.SECP256K1} />
        <KeyPair curve={SDK.Domain.Curve.ED25519} />
        <KeyPair curve={SDK.Domain.Curve.X25519} />
        <Dids />
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </>
  );
}
