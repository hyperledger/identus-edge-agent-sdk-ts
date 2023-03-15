import React, {FormEventHandler, useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Domain, Pluto} from "@input-output-hk/atala-prism-wallet-sdk";
import './App.css';
import {PrismDIDInfo} from '../../../domain/models/PrismDIDInfo';

// (async () => {
//   const instance = new Pluto({
//     type: 'sqljs',
//     synchronize: true,
//     location: "test",
//     sqlJsConfig: {
//       locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${filename}`
//     },
//     dropSchema: true,
//     useLocalForage: true,
//     autoSave: true,
//   });
//   await instance.start();
// })();


function usePluto() {
  const [pluto, set] = useState<Pluto | null>(null);
  useEffect(() => {
    (async () => {
      const instance = new Pluto({
        type: 'sqljs',
        synchronize: true,
        location: "pluto",
        // dropSchema: true,
        sqlJsConfig: {
          locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${filename}`
        },
        autoSave: true,
        useLocalForage: true,
      });
      try {
        await instance.start();
        console.log("Started pluto");
        set(instance);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return pluto;
}

function App() {
  const pluto = usePluto();
  const [dids, setDids] = useState<PrismDIDInfo[] | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const createDid = useCallback<FormEventHandler>(async (event) => {
    event.preventDefault();
    if (!pluto) {
      return;
    }
    // @ts-ignore
    const did = Domain.DID.fromString(value);
    const keyPathIndex = await pluto.getPrismLastKeyPathIndex();
    const privateKey: Domain.PrivateKey = {
      value: Buffer.from(`some value ${Math.random() * 100}`),
      keyCurve: Domain.getKeyCurveByNameAndIndex(Domain.Curve.X25519, keyPathIndex),
    };
    try {
      await pluto.storePrismDID(did, keyPathIndex + 1, privateKey, null, `alias: ${Math.random() * 100}`);

    } catch (error) {
      setError((error as Error).message);
    }
    const data = await pluto.getAllPrismDIDs();
    if (!data) {
      return;
    }

    setValue("");
    setError("");
    setDids(data);
  }, [pluto, value, setValue]);

  const handleInputChange = useCallback<FormEventHandler<HTMLInputElement>>((event) => {
    const {value} = event.currentTarget;
    setValue(value);
  }, []);
  useLayoutEffect(() => {
    if (!pluto || Array.isArray(dids)) {
      return;
    }
    (async () => {

      const prismDids = await pluto.getAllPrismDIDs();
      setDids(prismDids);
    })();
  }, [pluto, dids]);
  return (
      <div className="App">
        <form onSubmit={createDid}>
          <input type="text" name="did" onChange={handleInputChange} value={value}/>
        </form>
        <button onClick={createDid}>Create DID</button>
        {error}
        {
            dids?.map((item, index) => (
                <div key={index}>{item.did.toString()}</div>
            )) ?? null
        }
      </div>
  );
}

export default App;
