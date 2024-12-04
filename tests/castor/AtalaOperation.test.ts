import { describe, it, beforeEach, expect } from 'vitest';
import { Domain } from "../../src";
import Apollo from "../../src/apollo/Apollo";
import Castor from "../../src/castor/Castor";

import * as Protos from "../../src/castor/protos/node_models";
import { PrismDIDPublicKey } from '../../src/castor/did/prismDID/PrismDIDPublicKey';
import { PublicKey, VerifiableKey } from '../../src/domain';

let apollo: Apollo;
let castor: Castor;


describe("AtalaOperation", () => {
    beforeEach(() => {
        apollo = new Apollo()
        castor = new Castor(apollo);
    });

    it("Should be able to verify a created AtalaObject", async () => {
        const randomSeed = apollo.createRandomSeed().seed.value;
        const masterSK = apollo.createPrivateKey({
            type: Domain.KeyTypes.EC,
            curve: Domain.Curve.SECP256K1,
            seed: Buffer.from(randomSeed).toString("hex"),
        });
        const { atalaObjectHex } = await castor.createOperation(
            masterSK
        )
        const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserialize(
            Buffer.from(atalaObjectHex, 'hex')
        )
        expect(atalaObject).toHaveProperty("block_content")
        expect(atalaObject.block_content).toBeInstanceOf(Protos.io.iohk.atala.prism.protos.AtalaBlock)
        const atalaBlock = atalaObject.block_content;
        expect(atalaBlock).toHaveProperty("operations");
        expect(atalaBlock.operations).toBeInstanceOf(Array)
        const signedOperations = atalaBlock.operations;
        expect(signedOperations.length).toBe(1)
        const signedOperation = signedOperations[0];
        expect(signedOperation).toHaveProperty('operation');
        expect(signedOperation).toHaveProperty('signature');
        const signature = Buffer.from(signedOperation.signature);
        const keyId = signedOperation.signed_with;
        const operation = signedOperation.operation;
        const pkProto = operation.create_did.did_data.public_keys.find((key) => {
            return key.id === keyId
        })!
        expect(pkProto).to.not.toBeUndefined()
        const serializedOperation = operation.serializeBinary();
        const prismDIDPublicKey = PrismDIDPublicKey.fromProto(apollo, pkProto);
        expect(prismDIDPublicKey).toHaveProperty("keyData")
        const masterPk = prismDIDPublicKey.keyData;
        expect(masterPk.canVerify()).toBe(true)
        const verifiableKey = masterPk as PublicKey & VerifiableKey;
        const verify = verifiableKey.verify(Buffer.from(serializedOperation), signature)
        expect(verify).toBe(true)
    })

    it("Should be able to recover a valid operations and verify its signatures", async () => {
        const atalaObjects = [
            [
                "22b40112b1010a086d61737465722d301240cec0520059c15b6c18197d4ac0fe",
                "2e74969787286acf4a15329061919f24ea53223cfeeaccf624df5f8a8d1874ec",
                "b619ea6c717d42cf2f432392888e6b10e0ca1a630a610a5f125d0a086d617374",
                "65722d301001424f0a09736563703235366b3112203a7c4e0a1edc7641fbae67",
                "10d3f99fd5a060d5c36a9bc6ea6342f7b72e596a241a2097503dfd1626a50c90",
                "3db9e0126e78c076eeb38d84d700e82473b77609538465"
            ],
            [
                "22bb0112b8010a086d61737465722d3012473045022100db0af9deac06669eef",
                "3842fc97c714f7438a1025ce3f6be21662be011324465b02206ca0e0d96790c4",
                "e662e534cdb5b069be2b73e4e8a434681ebc82ab28be03d89d1a630a610a5f12",
                "5d0a086d61737465722d301001424f0a09736563703235366b31122062cf8f70",
                "49e88e77440bc0a87f9028cc8bd8c01ee7443e5b7f172b04857bf9811a20f87b",
                "bc103262d192be587d86095245ed7ee7a5755299abc8ae30aa492fb3cc60"
            ],
            [
                "22b40112b1010a086d61737465722d301240c5eb814e40bea9eaa5a565578409",
                "a373bb89c3f2ae90bafdf6d790bf29a71e947f63f8ee7b9ff84fe179ca929cfe",
                "7a15467f13ddbe53288c49e6b83c1de693e71a630a610a5f125d0a086d617374",
                "65722d301001424f0a09736563703235366b311220f37ca1aae1630e0af82a06",
                "83118aa44f1218d3c3eaa992f8a7e4d86e36e7d9bf1a205a194a9bbf69090729",
                "305b3368638cf1b3cc010a12d24565c44733b1e1199b4a"
            ]
        ]

        for (let objectHexSplit of atalaObjects) {
            const atalaObjectHex = objectHexSplit.join("")
            const atalaObjectRaw = Buffer.from(atalaObjectHex, 'hex');
            const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserializeBinary(
                atalaObjectRaw
            )

            expect(atalaObject).toHaveProperty("block_content")
            expect(atalaObject.block_content).toBeInstanceOf(Protos.io.iohk.atala.prism.protos.AtalaBlock)
            const atalaBlock = atalaObject.block_content;
            expect(atalaBlock).toHaveProperty("operations");
            expect(atalaBlock.operations).toBeInstanceOf(Array)
            const signedOperations = atalaBlock.operations;
            expect(signedOperations.length).toBe(1)
            const signedOperation = signedOperations[0];
            expect(signedOperation).toHaveProperty('operation');
            expect(signedOperation).toHaveProperty('signature');
            const signature = Buffer.from(signedOperation.signature);
            const keyId = signedOperation.signed_with;
            const operation = signedOperation.operation;
            const pkProto = operation.create_did.did_data.public_keys.find((key) => {
                return key.id === keyId
            })!
            expect(pkProto).to.not.toBeUndefined()
            const serializedOperation = operation.serializeBinary();
            const prismDIDPublicKey = PrismDIDPublicKey.fromProto(apollo, pkProto);
            expect(prismDIDPublicKey).toHaveProperty("keyData")
            const masterPk = prismDIDPublicKey.keyData;
            expect(masterPk.canVerify()).toBe(true)
            const verifiableKey = masterPk as PublicKey & VerifiableKey;
            const verify = verifiableKey.verify(Buffer.from(serializedOperation), signature)
            expect(verify).toBe(true)
        }
    })

})