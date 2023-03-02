import Apollo from "../domain/buildingBlocks/Apollo";
import {
  Service as DIDDocumentService,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  VerificationMethod as DIDDocumentVerificationMethod,
  VerificationMethods as DIDDocumentVerificationMethods,
  Seed,
  Signature,
  DID,
  Curve,
} from "../domain";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import Mercury from "../domain/buildingBlocks/Mercury";
import { MediationHandler } from "./mediation/types/MediationHandler";
import { Api } from "./helpers/Api";
import { ApiImpl } from "./helpers/ApiImpl";
import { ConnectionManager } from "./ConnectionManager";
import { NullableType } from "../domain/models/NullableType";
import {
  InvitationType,
  OutOfBandInvitation,
  PrismOnboardingInvitation,
} from "./types";
import { AgentError } from "../domain/models/Errors";
import {
  findProtocolTypeByValue,
  ProtocolType,
} from "./protocols/ProtocolTypes";

enum AgentState {
  STOPPED,
  STARTING,
  RUNNING,
  STOPPING,
}

export default class Agent {
  private state: AgentState = AgentState.STOPPED;

  constructor(
    private apollo: Apollo,
    private castor: Castor,
    private pluto: Pluto,
    private mercury: Mercury,
    private mediationHandler: MediationHandler,
    private connectionManager: ConnectionManager = new ConnectionManager(
      mercury,
      castor,
      pluto,
      mediationHandler
    ),
    private seed: Seed = apollo.createRandomSeed().seed,
    private api: Api = new ApiImpl()
  ) {}

  static instanceFromConnectionManager(
    apollo: Apollo,
    castor: Castor,
    pluto: Pluto,
    mercury: Mercury,
    connectionManager: ConnectionManager,
    seed?: Seed,
    api?: Api
  ) {
    return new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      connectionManager.mediationHandler,
      connectionManager,
      seed ? seed : apollo.createRandomSeed().seed,
      api ? api : new ApiImpl()
    );
  }

  async start(): Promise<AgentState> {
    if (this.state !== AgentState.STOPPED) {
      return this.state;
    }
    this.state = AgentState.STARTING;
    try {
      await this.pluto.start();
      await this.connectionManager.startMediator();
    } catch (e) {
      if (e instanceof AgentError.NoMediatorAvailableError) {
        const hostDID = await this.createNewPeerDID(
          [
            new DIDDocumentService(
              "#didcomm-1",
              ["DIDCommMessaging"],
              new DIDDocumentServiceEndpoint(
                this.connectionManager.mediationHandler.mediatorDID.toString()
              )
            ),
          ],
          false
        );
        await this.connectionManager.registerMediator(hostDID);
      } else throw e;
    }
    if (this.connectionManager.mediationHandler.mediator !== undefined) {
      this.state = AgentState.RUNNING;
    } else {
      throw new AgentError.MediationRequestFailedError();
    }
    return this.state;
  }

  async createNewPrismDID(
    keyPathIndex: NullableType<number>,
    alias: NullableType<string>,
    services: DIDDocumentService[] = []
  ): Promise<DID> {
    const index = keyPathIndex
      ? keyPathIndex
      : this.pluto.getPrismLastKeyPathIndex();
    const keyPair = this.apollo.createKeyPairFromKeyCurve(this.seed, {
      curve: Curve.SECP256K1,
      index: index,
    });
    const did = await this.castor.createPrismDID(keyPair.publicKey, services);
    this.pluto.storePrivateKeys(keyPair.privateKey, did, index, null);
    this.pluto.storePrismDID(did, index, alias);
    return did;
  }

  async createNewPeerDID(
    services: DIDDocumentService[] = [],
    updateMediator = true
  ): Promise<DID> {
    const index = this.pluto.getPrismLastKeyPathIndex();
    const keyAgreementKeyPair = this.apollo.createKeyPairFromKeyCurve(
      this.seed,
      {
        curve: Curve.X25519,
        index: index,
      }
    );
    const authenticationKeyPair = this.apollo.createKeyPairFromKeyCurve(
      this.seed,
      {
        curve: Curve.ED25519,
        index: index,
      }
    );

    const did = await this.castor.createPeerDID(
      [keyAgreementKeyPair, authenticationKeyPair],
      services
    );

    if (updateMediator) {
      //TODO(): This still needs to be done update the key List
    }

    this.pluto.storePeerDID(did, [
      keyAgreementKeyPair.privateKey,
      authenticationKeyPair.privateKey,
    ]);

    // The next logic is a bit tricky, so it's not forgotten this is a reminder.
    // The next few lines are needed because of DIDComm library, the library will need
    // to get the secret(private key) that is pair of the public key within the DIDPeer Document
    // to this end the library will give you the id of the public key that is `did:{method}:{methodId}#ecnumbasis`.
    // So the code below after the did is created, it will retrieve the document and
    // and store the private keys with the corresponding `id` of the one created on the document.
    // So when the secret resolver asks for the secret we can identify it.
    const didDocument = await this.castor.resolveDID(did.toString());

    const verificationMethods = didDocument.coreProperties.reduce<
      DIDDocumentVerificationMethod[]
    >((result, property) => {
      if (property instanceof DIDDocumentVerificationMethods) {
        result.push(...property.values);
      }
      return result;
    }, []);

    verificationMethods.forEach((verificationMethod, i) => {
      const privateKey =
        verificationMethod.type.indexOf("X25519") !== -1
          ? keyAgreementKeyPair.privateKey
          : authenticationKeyPair.privateKey;

      this.pluto.storePrivateKeys(privateKey, did, i, verificationMethod.id);
    });

    return did;
  }
  async parseInvitation(str: string): Promise<InvitationType> {
    const json = JSON.parse(str);
    const typeString = findProtocolTypeByValue(json.type);

    switch (typeString) {
      case ProtocolType.PrismOnboarding:
        return this.parsePrismInvitation(str);
      case ProtocolType.Didcomminvitation:
        return this.parseOOBInvitation(str);
    }

    throw new AgentError.UnknownInvitationTypeError();
  }
  async acceptInvitation(invitation: PrismOnboardingInvitation): Promise<void> {
    if (!invitation.from) {
      throw new AgentError.UnknownInvitationTypeError();
    }
    interface SendDID {
      did: string;
    }
    const body: SendDID = {
      did: invitation.from.toString(),
    };
    const response = await this.api.request(
      "POST",
      invitation.onboardEndpoint,
      new Map(),
      new Map(),
      body
    );
    if (response.httpStatus != 200) {
      throw new AgentError.FailedToOnboardError();
    }
  }
  async signWith(did: DID, message: Uint8Array): Promise<Signature> {
    const privateKeys = this.pluto.getDIDPrivateKeysByDID(did);
    if (!privateKeys || privateKeys.length <= 0) {
      throw new AgentError.CannotFindDIDPrivateKey();
    }
    const [privateKey] = privateKeys;
    return this.apollo.signByteArrayMessage(privateKey, message);
  }
  async parsePrismInvitation(str: string): Promise<PrismOnboardingInvitation> {
    try {
      const prismOnboarding =
        PrismOnboardingInvitation.parsePrismOnboardingInvitationFromJson(str);
      const url = prismOnboarding.onboardEndpoint;
      const services: DIDDocumentService[] = [
        new DIDDocumentService(
          "#didcomm-1",
          ["DIDCommMessaging"],
          new DIDDocumentServiceEndpoint(url, ["DIDCommMessaging"])
        ),
      ];
      const updateMediator = true;
      const did = await this.createNewPeerDID(services, updateMediator);
      prismOnboarding.from = did;
      return prismOnboarding;
    } catch (e) {
      if (e instanceof Error) {
        throw new AgentError.UnknownInvitationTypeError(e.message);
      } else {
        throw e;
      }
    }
  }
  async parseOOBInvitation(str: string): Promise<OutOfBandInvitation> {
    return OutOfBandInvitation.parseOutOfBandInvitationFromJson(str);
  }
}
