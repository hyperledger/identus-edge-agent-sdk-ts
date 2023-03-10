
import { expect } from "chai"
import Castor from "../../../castor/Castor";
import * as Domain from "../../../domain";
import { DIDCommDIDResolver } from "../../../mercury/didcomm/DIDResolver";
import { PeerDIDService } from "../../../peer-did/PeerDID";

describe("Mercury DIDComm DIDResolver", () => {
  describe("resolve", () => {
    it("should transform Domain.DIDDocument into DIDComm.DIDDoc", async () => {
      const idDid = Domain.DID.fromString("did:test:id");
      const vmAuthentication = new Domain.VerificationMethod("vm-ED25519", "1", Domain.Curve.ED25519);
      const vmKeyAgreements = new Domain.VerificationMethod("vm-X25519", "2", Domain.Curve.X25519);
      const vmOther = new Domain.VerificationMethod("vm-SECP256K1", "3", Domain.Curve.SECP256K1);
      const service = new Domain.Service("", [PeerDIDService.DIDCommMessagingKey], new Domain.ServiceEndpoint(""));

      const castor: Pick<Castor, "resolveDID"> = {
        resolveDID: async (): Promise<Domain.DIDDocument> => new Domain.DIDDocument(
          idDid,
          [
            service,
            new Domain.Authentication([], [
              vmAuthentication,
              vmKeyAgreements,
              vmOther,
            ]),
          ]
        )
      };

      const sut = new DIDCommDIDResolver(castor as any);
      const result = await sut.resolve(idDid.toString());

      expect(result).not.to.be.null;
      expect(result?.id).to.equal(idDid.toString());
      expect(result?.authentication).to.contain(vmAuthentication.id);
      expect(result?.keyAgreement).to.contain(vmKeyAgreements.id);
      expect(result?.verificationMethod).to.deep.contain({
        controller: vmOther.controller,
        id: vmOther.id,
        type: "JsonWebKey2020",
        publicKeyJwk: vmOther.publicKeyJwk
      });
      expect(result?.service).to.deep.contain({
        id: service.id,
        type: PeerDIDService.DIDCommMessagingKey,
        serviceEndpoint: {
          uri: service.serviceEndpoint.uri,
          accept: service.serviceEndpoint.accept,
          routing_keys: service.serviceEndpoint.routingKeys
        }
      });
    });
  });
});