<p align="center">
  <a href="https://www.hyperledger.org/projects/identus">
    <img src="https://cdn.jsdelivr.net/gh/hyperledger/identus@v2.13/resources/images/hyperledger-identus.svg" alt="identus-logo" width="513px" height="99px" />
  </a>
  <i> <font size="18">Issuer DID Tutorial</font> </i>
</p>

# What will u learn in this tutorial?

1. Integrating the [CIP-30](https://cips.cardano.org/cip/CIP-30) Protol to interact with existing Cardano Web Wallets in Browsers extensions.

2. Create an internal transaction metadata using [Cardano serialisation lib](https://github.com/Emurgo/cardano-serialization-lib/tree/master)

3. Submit the Transaction on Cardano

4. Resolve the DID we just created using the [Prism resolver](https://neoprism.patlo.dev/resolver)

## Pre requisites

This tutorial is developed using React application and nextJS + Typescript.

You will need to create a [blockfrost](https://blockfrost.io/dashboard) API token and a project.

Install the following packages into your project

```
npm i @hyperledger/identus-edge-agent-sdk -S
npm i @cardano-sdk/dapp-connector -S
npm i @emurgo/cardano-serialization-lib-browser -S
```

## Getting started

First configure your environmnet, create a .env.local file in the app directory and add:

```
NEXT_PUBLIC_BLOCKFROST_API_KEY=[[ your blockfrost api key]]
```

You can see this in realtime working in our [next js demo](https://github.com/hyperledger-identus/sdk-ts/tree/main/demos/next) follow the required steps in the README.md file.

Once you load the website using the menu, click "DIDS". You will be able to select the Wallet of your choice to create the Cardano transaction for a published did. You can do by following the UI/UX steps or by checking the following example source-code:

```typescript
import React, { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-edge-agent-sdk";
import '../app/index.css'
import { PageHeader } from "@/components/PageHeader";
import { Cip30Wallet, Cip30WalletApiWithPossibleExtensions } from '@cardano-sdk/dapp-connector';
import { TransactionUnspentOutput as TransactionUnspentOutputType } from "@emurgo/cardano-serialization-lib-browser";

let instance: typeof import("@emurgo/cardano-serialization-lib-browser");

async function loadSerialization() {
    instance ??= await import("@emurgo/cardano-serialization-lib-browser");
    return instance
}

async function fetchNetworkParams() {
    const response = await fetch(
        "https://cardano-mainnet.blockfrost.io/api/v0/epochs/latest/parameters",
        {
            headers: {
                project_id: process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!,
            },
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
        linearFee: {
            minFeeA: data.min_fee_a.toString(),
            minFeeB: data.min_fee_b.toString(),
        },
        poolDeposit: data.pool_deposit,
        keyDeposit: data.key_deposit,
        coinsPerUtxoWord: data.coins_per_utxo_word,
        maxValSize: data.max_val_size,
        priceMem: data.price_mem,
        priceStep: data.price_step,
        maxTxSize: parseInt(data.max_tx_size),
    };
}

async function getUtxos(API: Cip30WalletApiWithPossibleExtensions) {
    const {
        TransactionUnspentOutput
    } = await loadSerialization();
    const utxosHex = await API.getUtxos("10", {
        page: 1,
        limit: 100
    }) ?? [];
    const validUtxos = utxosHex
        .map((hex) => {
            if (!hex) return null;
            try {
                return TransactionUnspentOutput.from_bytes(
                    Uint8Array.from(Buffer.from(hex, 'hex'))
                );
            } catch (error) {
                console.error('Error parsing UTXO:', error);
                return null;
            }
        })
        .filter((utxo): utxo is TransactionUnspentOutputType => utxo !== null);
    return validUtxos;
}

async function fetchCurrentSlot() {
    const response = await fetch(
        "https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest",
        {
            headers: {
                project_id: process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!,
            },
        }
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch current slot: ${response.status}`);
    }
    const data = await response.json();
    console.log('Current slot:', data.slot);
    return data.slot; // Use the `slot` field from the API response
}

async function buildTransactionHex(
    API: Cip30WalletApiWithPossibleExtensions,
    operation: any
): Promise<string> {
    const {
        TransactionBuilder,
        TransactionBuilderConfigBuilder,
        Address,
        LinearFee,
        BigNum,
        encode_json_str_to_metadatum,
        MetadataJsonSchema,
        GeneralTransactionMetadata,
        TransactionUnspentOutputs,
        CoinSelectionStrategyCIP2,
        TransactionWitnessSet,
        Transaction
    } = await loadSerialization();
    const protocolParams = await fetchNetworkParams();
    const currentSlot = await fetchCurrentSlot();
    const ttl = currentSlot + 3600; // Current time + 1 hour  
    const changeAddressHex = await API.getChangeAddress();
    const changeAddress = Address.from_bytes(
        Uint8Array.from(
            Buffer.from(changeAddressHex, 'hex')
        )
    );
    const txBuilderConfig = TransactionBuilderConfigBuilder.new()
        .coins_per_utxo_byte(BigNum.from_str(protocolParams.coinsPerUtxoWord))
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
    txBuilder.set_ttl(ttl);
    const utxos = await getUtxos(API);
    const txInputs = TransactionUnspentOutputs.new();
    utxos.forEach((utxo) => {
        txInputs.add(utxo)
    });
    txBuilder.add_inputs_from(txInputs, CoinSelectionStrategyCIP2.LargestFirstMultiAsset);
    const metadataId = BigNum.from_str('21325');
    const metadatum = encode_json_str_to_metadatum(
        JSON.stringify(operation),
        MetadataJsonSchema.NoConversions
    );
    const metadata = GeneralTransactionMetadata.new();
    metadata.insert(metadataId, metadatum);
    txBuilder.set_metadata(metadata);
    txBuilder.add_change_if_needed(changeAddress);
    const transaction = txBuilder.build_tx();
    const txBody = transaction.body();
    const txHex = transaction.to_hex();
    const witnessSetHex = await API.signTx(txHex, true);
    const witnessSet = TransactionWitnessSet.from_bytes(
        Uint8Array.from(
            Buffer.from(witnessSetHex, 'hex')
        )
    );
    const auxiliaryData = transaction.auxiliary_data();
    const signedTransaction = Transaction.new(
        txBody,
        witnessSet,
        auxiliaryData
    );
    const signedTxHex = Buffer.from(signedTransaction.to_bytes()).toString('hex');
    return signedTxHex;
}

const Agent: React.FC<{}> = props => {
    const [walletState, setWalletState] = useState<any>({
        wallets: [] as Array<{ key: string; name: string; icon: string; api: Cip30Wallet }>,
        whichWalletSelected: ''
    });
    const [error] = React.useState<any>();
    const [masterKey, setMasterKey] = useState<SDK.Domain.PrivateKey>();
    const [publishStatus, setPublishStatus] = useState<{
        status: 'idle' | 'publishing' | 'confirming' | 'completed' | 'error';
        message?: string;
        txHash?: string;
    }>({ status: 'idle' });

    useEffect(() => {
        let timeout;
        const pollWallets = (count = 0) => {
            const wallets: any[] = [];
            if ((window as any).cardano) {
                for (const key in (window as any).cardano) {
                    const walletApi = (window as any).cardano[key];
                    if (walletApi && walletApi.enable && wallets.findIndex(w => w.key === key) === -1) {
                        wallets.push({
                            key,
                            name: walletApi.name || key,
                            icon: walletApi.icon,
                            api: walletApi
                        });
                    }
                }
            }
            if (wallets.length === 0 && count < 3) {
                timeout = setTimeout(() => {
                    pollWallets(count + 1);
                }, 1000);
                return;
            }
            setWalletState({
                wallets,
                whichWalletSelected: ''
            });
        };

        pollWallets();

        return () => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        };
    }, []);

    function onCreateMasterKey() {
        const apollo = new SDK.Apollo();
        const masterSK = apollo.createPrivateKey({
            type: SDK.Domain.KeyTypes.EC,
            curve: SDK.Domain.Curve.SECP256K1,
            seed: Buffer.from(apollo.createRandomSeed().seed.value).toString("hex"),
        });
        setMasterKey(masterSK);
    }

    async function checkTransactionConfirmation(txHash: string) {
        try {
            const response = await fetch(
                `https://cardano-mainnet.blockfrost.io/api/v0/txs/${txHash}`,
                {
                    headers: {
                        project_id: process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!,
                    },
                }
            );
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    async function onConnectWallet(masterKey: SDK.Domain.PrivateKey) {
        const selectedWallet = walletState.wallets.find(wallet => wallet.key === walletState.whichWalletSelected);
        if (selectedWallet) {
            try {
                setPublishStatus({ status: 'publishing', message: 'Creating DID operation...' });
                const apollo = new SDK.Apollo();
                const castor = new SDK.Castor(apollo);
                const walletInstance: Cip30Wallet = selectedWallet.api;
                const API = await walletInstance.enable();

                const { metadataBody, did } = await castor.createOperation(masterKey);
                console.log('Transaction DID:', did.toString());

                setPublishStatus({ status: 'publishing', message: 'Building and signing transaction...' });
                const signedTxHex = await buildTransactionHex(API, metadataBody);

                setPublishStatus({ status: 'publishing', message: 'Submitting transaction...' });
                const txHash = await API.submitTx(signedTxHex);

                setPublishStatus({
                    status: 'confirming',
                    message: 'Transaction submitted. Waiting for confirmation...',
                    txHash
                });

                // Poll for transaction confirmation
                const checkConfirmation = async () => {
                    const isConfirmed = await checkTransactionConfirmation(txHash);
                    if (isConfirmed) {
                        setPublishStatus({
                            status: 'completed',
                            message: 'DID successfully published!',
                            txHash
                        });
                    } else {
                        await new Promise<void>((resolve) => {
                            setTimeout(async () => {
                                await checkConfirmation()
                                resolve();
                            }, 15000)
                        })
                    }
                };

                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await checkConfirmation()
                        resolve();
                    }, 15000)
                })


            } catch (error) {
                console.error('Error during transaction:', error);
                setPublishStatus({
                    status: 'error',
                    message: error instanceof Error ? error.message : 'Unknown error occurred'
                });
            }
        } else {
            alert('Please select a wallet');
        }
    }

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <PageHeader>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Edge Agent
                    </h1>
                </PageHeader>
                <div
                    className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 "
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900  dark:text-white">
                        Create and Publish Prism DID
                    </h2>
                    <p className="text-xl font-semibold mb-4">Select a wallet:</p>
                    {walletState.wallets && walletState.wallets.length > 0 ? (
                        <div className="flex flex-wrap">
                            {walletState.wallets.map(wallet => (
                                <div
                                    key={wallet.key}
                                    className={`p-4 m-2  rounded cursor-pointer flex items-center w-48 hover:bg-gray-900 ${wallet.key === walletState.whichWalletSelected ? ' bg-gray-900' : ''}`}
                                    onClick={() => setWalletState({ ...walletState, whichWalletSelected: wallet.key })}
                                >
                                    {wallet.icon && (
                                        <img src={wallet.icon} alt={`${wallet.name} icon`} className="h-8 w-8 mr-2" />
                                    )}
                                    <p className="text-lg font-medium">{wallet.name}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No wallets found. Please install a Cardano wallet extension.</p>
                    )}

                    <div className="mt-8">
                        <p className="text-xl font-semibold mb-2">Create your Prism DID master key</p>
                        <button
                            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={onCreateMasterKey}
                        >
                            Create Master Key
                        </button>
                        {masterKey && <p className="mt-4">Master key created: {masterKey.to.String("hex")}</p>}
                    </div>
                    {walletState.whichWalletSelected && masterKey && (
                        <button
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => onConnectWallet(masterKey)}
                        >
                            Publish Prism DID
                        </button>
                    )}
                    {error instanceof Error && (
                        <pre className="text-red-500">
                            Error: {error.message}
                        </pre>
                    )}
                    {publishStatus.status !== 'idle' && (
                        <div className="mt-4 p-4 rounded">
                            {publishStatus.status === 'publishing' && (
                                <div className="flex items-center text-yellow-500">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    {publishStatus.message}
                                </div>
                            )}
                            {publishStatus.status === 'confirming' && (
                                <div className="flex items-center text-blue-500">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    {publishStatus.message}
                                    <a
                                        href={`https://cardanoscan.io/transaction/${publishStatus.txHash}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 text-blue-500 hover:text-blue-700 underline"
                                    >
                                        View transaction
                                    </a>
                                </div>
                            )}
                            {publishStatus.status === 'completed' && (
                                <div className="text-green-500">
                                    ✓ {publishStatus.message}
                                    <a
                                        href={`https://cardanoscan.io/transaction/${publishStatus.txHash}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 text-blue-500 hover:text-blue-700 underline"
                                    >
                                        View transaction
                                    </a>
                                </div>
                            )}
                            {publishStatus.status === 'error' && (
                                <div className="text-red-500">
                                    ✗ {publishStatus.message}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Agent;
```
