import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';

import Castor from "../../../castor/Castor";
import * as Domain from "../../../src/domain";
import { DIDCommDIDResolver } from "../../../src/mercury/didcomm/DIDResolver";
import { PeerDIDService } from "../../../src/peer-did/PeerDID";

describe("Mercury DIDComm DIDResolver", () => {
  describe("resolve", () => {
    it("should transform Domain.DIDDocument into DIDComm.DIDDoc", async () => {
      const idDid = Domain.DID.fromString("did:test:id");
      const vmAuthentication = new Domain.VerificationMethod(
        "vm-ED25519",
        "1",
        "type",
        { crv: Domain.Curve.ED25519, kid: "kid", x: "xData" } as any
      );
      const vmKeyAgreements = new Domain.VerificationMethod(
        "vm-X25519",
        "2",
        "type",
        { crv: Domain.Curve.X25519, kid: "kid", x: "xData" } as any
      );
      const vmOther = new Domain.VerificationMethod(
        "vm-SECP256K1",
        "3",
        "type",
        { crv: Domain.Curve.SECP256K1, kid: "kid", x: "xData" } as any
      );
      const service = new Domain.Service(
        "",
        [PeerDIDService.DIDCommMessagingKey],
        new Domain.ServiceEndpoint("")
      );

      const castor: Pick<Castor, "resolveDID"> = {
        resolveDID: async (): Promise<Domain.DIDDocument> =>
          new Domain.DIDDocument(idDid, [
            service,
            new Domain.Authentication(
              [],
              [vmAuthentication, vmKeyAgreements, vmOther]
            ),
          ]),
      };

      const sut = new DIDCommDIDResolver(castor as any);
      const result = await sut.resolve(idDid.toString());

      expect(result).not.to.be.null;
      expect(result?.id).to.equal(idDid.toString());
      expect(result?.authentication).to.contain(vmAuthentication.id);
      expect(result?.keyAgreement).to.contain(vmKeyAgreements.id);
      expect(result?.verificationMethod).to.deep.include.members([
        {
          controller: vmAuthentication.controller,
          id: vmAuthentication.id,
          type: "JsonWebKey2020",
          publicKeyJwk: {
            crv: vmAuthentication.publicKeyJwk?.crv,
            kid: (vmAuthentication.publicKeyJwk as any)?.kid,
            kty: "OKP",
            x: vmAuthentication.publicKeyJwk?.x as any,
          },
        },
        {
          controller: vmKeyAgreements.controller,
          id: vmKeyAgreements.id,
          type: "JsonWebKey2020",
          publicKeyJwk: {
            crv: vmKeyAgreements.publicKeyJwk?.crv,
            kid: (vmKeyAgreements.publicKeyJwk as any)?.kid,
            kty: "OKP",
            x: vmKeyAgreements.publicKeyJwk?.x as any,
          },
        },
        {
          controller: vmOther.controller,
          id: vmOther.id,
          type: "JsonWebKey2020",
          publicKeyJwk: {
            crv: vmOther.publicKeyJwk?.crv,
            kid: (vmOther.publicKeyJwk as any)?.kid,
            kty: "OKP",
            x: vmOther.publicKeyJwk?.x as any,
          },
        },
      ]);
      expect(result?.service).to.deep.contain({
        id: service.id,
        type: PeerDIDService.DIDCommMessagingKey,
        serviceEndpoint: {
          uri: service.serviceEndpoint.uri,
          accept: service.serviceEndpoint.accept,
          routing_keys: service.serviceEndpoint.routingKeys,
        },
      });
    });
  });
});
