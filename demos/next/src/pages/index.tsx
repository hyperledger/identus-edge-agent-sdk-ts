import React, { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-edge-agent-sdk";
import { Box } from "../app/Box";
import '../app/index.css'
import { DBConnect } from "@/components/DBConnect";
import { useMountedApp } from "@/reducers/store";
import { Message } from "@/components/Message";
import { PageHeader } from "@/components/PageHeader";

import { Cip30Wallet } from '@cardano-sdk/dapp-connector';

let instance: typeof import("@emurgo/cardano-serialization-lib-browser");

async function loadSerialization() {
  instance ??= await import("@emurgo/cardano-serialization-lib-browser");
  return instance
}

const ListenerKey = SDK.ListenerKey;
const Agent: React.FC<{}> = props => {
  const app = useMountedApp();
  const { db, mediatorDID, initAgent } = app;

  const agent = app.agent.instance;

  const [state, setState] = useState<string>(agent && agent.state !== undefined ? agent.state : "loading");

  const [walletState, setWalletState] = useState<any>({});

  const [error] = React.useState<any>();

  const [messages, setNewMessage] = React.useState<SDK.Domain.Message[]>([]);

  const handleMessages = async (
    newMessages: SDK.Domain.Message[]
  ) => {
    setNewMessage([
      ...newMessages,
      ...messages,
    ])
  };

  useEffect(() => {
    setNewMessage([
      ...messages
        .filter(({ id }) => app.messages.find((appMessage) => appMessage.id === id) !== undefined)
        .map(({ id }) => app.messages.find((appMessage) => appMessage.id === id)!)
    ])
  }, [app.messages]);

  useEffect(() => {
    if (!app.agent.instance && db.instance) {
      initAgent({ mediatorDID, pluto: db.instance, defaultSeed: app.defaultSeed })
    }
    if (app.agent && app.agent.instance) {
      setState(app.agent.instance.state)
    }
  }, [app.agent, db]);



  useEffect(() => {
    if (walletState && walletState.wallets && walletState.wallets.length > 0) {

      // Build Metadata
      const apollo = new SDK.Apollo();
      const castor = new SDK.Castor(apollo);
      const masterSeed = apollo.createRandomSeed().seed;
      const masterSK = apollo.createPrivateKey({
        type: SDK.Domain.KeyTypes.EC,
        curve: SDK.Domain.Curve.SECP256K1,
        seed: Buffer.from(masterSeed.value).toString("hex"),
      });
      const walletName = walletState.wallets[0];
      const walletInstance: Cip30Wallet = (window as any).cardano[walletName];

      // Replace with current protocol parameters or fetch them dynamically
      const protocolParams = {
        linearFee: {
          minFeeA: "44",
          minFeeB: "155381",
        },
        minUtxo: "34482",
        poolDeposit: "500000000",
        keyDeposit: "2000000",
        maxValSize: 5000,
        maxTxSize: 16384,
        coinsPerUtxoByte: "4310", // Updated value based on current network parameters
      };

      walletInstance.enable().then(async (API) => {
        const {
          Value,
          TransactionBuilder,
          TransactionBuilderConfigBuilder,
          TransactionOutput,
          Address,
          LinearFee,
          BigNum,
          encode_json_str_to_metadatum,
          encode_arbitrary_bytes_as_metadatum,
          MetadataJsonSchema,
          TransactionUnspentOutput,
          ChangeConfig,
          CoinSelectionStrategyCIP2,
          TransactionUnspentOutputs
        } = await loadSerialization();


        const changeAddressHex = await API.getChangeAddress();
        const changeAddress = Address.from_bytes(
          Buffer.from(changeAddressHex, 'hex')
        );

        // Initialize Transaction Builder
        const txBuilderConfig = TransactionBuilderConfigBuilder.new()
          .coins_per_utxo_byte(BigNum.from_str(protocolParams.coinsPerUtxoByte))
          .fee_algo(
            LinearFee.new(
              BigNum.from_str(protocolParams.linearFee.minFeeA),
              BigNum.from_str(protocolParams.linearFee.minFeeB)
            )
          )
          .pool_deposit(BigNum.from_str(protocolParams.poolDeposit))
          .key_deposit(BigNum.from_str(protocolParams.keyDeposit))
          .max_value_size(protocolParams.maxValSize)
          .max_tx_size(protocolParams.maxTxSize)
          .prefer_pure_change(true)
          .build();

        const txBuilder = TransactionBuilder.new(txBuilderConfig);
        const {
          metadataBody,
          operationHex,
          did
        } = await castor.createOperation(masterSK);

        const metadataId = BigNum.from_str('21325');

        const metadata = encode_json_str_to_metadatum(
          JSON.stringify(metadataBody),
          MetadataJsonSchema.NoConversions
        );
        const encoded = encode_arbitrary_bytes_as_metadatum(Buffer.from(operationHex));

        debugger;



        // Add Metadata to the Transaction
        txBuilder.add_metadatum(metadataId, metadata);
        debugger;
        // Fetch UTXOs from the wallet
        const utxosHex = await API.getUtxos() ?? [];
        debugger;
        // Build the output you want to send
        const outputValue = Value.new(
          BigNum.from_str('1000000')
        );
        const output = TransactionOutput.new(
          changeAddress,
          outputValue
        );

        // Add the output to the transaction
        txBuilder.add_output(output);
        debugger;

        const wasmUtxos = TransactionUnspentOutputs.new();
        for (let i = 0; i < utxosHex.length; i++) {
          wasmUtxos.add(TransactionUnspentOutput.from_hex(utxosHex[i]));
        }
        debugger;
        const wasmChangeConfig = ChangeConfig.new(
          changeAddress
        )
        debugger;
        txBuilder.add_inputs_from_and_change(wasmUtxos, CoinSelectionStrategyCIP2.LargestFirstMultiAsset, wasmChangeConfig)
        debugger;
        // Get the witnesses from the wallet
        const tx = txBuilder.build_tx();

        console.log(tx.to_json())
        debugger;

        const txHex = Buffer.from(tx.to_bytes()).toString('hex');

        // Sign the transaction
        const signedTxHex = await API.signTx(txHex, true); // Set 'true' to include the metadata in the witness set

        // Submit the transaction
        const txHash = await API.submitTx(signedTxHex);
        debugger;
        console.log('Transaction submitted, hash:', txHash, did);


      }).catch((error) => {
        console.error('Error during transaction:', error);
      });
    }
  }, [walletState])

  useEffect(() => {
    const pollWallets = (count = 0) => {
      const wallets: string[] = [];
      for (const key in (window as any).cardano) {
        if ((window as any).cardano[key].enable && wallets.indexOf(key) === -1) {
          wallets.push(key);
        }
      }
      if (wallets.length === 0 && count < 3) {
        setTimeout(() => {
          pollWallets(count + 1);
        }, 1000);
        return;
      }
      setWalletState({
        wallets,
        whichWalletSelected: wallets[0]
      });
    }

    pollWallets()

    if (agent) {
      agent.addListener(ListenerKey.MESSAGE, handleMessages);
    }

    return () => {
      if (agent) {
        agent.removeListener(ListenerKey.MESSAGE, handleMessages);
      }
    }
  }, [agent])

  return (
    <>
      <div className="mx-10 mt-5 mb-30">
        <PageHeader>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Edge Agent
          </h1>
        </PageHeader>
        <DBConnect>
          <Box>
            <div>
              {state === "running" && (
                <>

                  {messages.length > 0 ? messages.reverse().map((message, i) => {
                    return <Message message={message} key={`index_message${message.id}_${i}`} />
                  }) : <>Listening for new messages</>}
                </>
              )}
              {state !== "running" && <>Start the agent first</>}
            </div>
            {error instanceof Error && (
              <pre>
                Error: {error.message}
              </pre>
            )}
          </Box>
        </DBConnect>
      </div>
    </>

  );
};

export default Agent