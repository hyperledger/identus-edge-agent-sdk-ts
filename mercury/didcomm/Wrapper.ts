import * as DIDComm from 'didcomm';
import * as Domain from "../../domain";
import Apollo from 'apollo/Apollo';
import Castor from 'castor/Castor';
import Pluto from 'pluto/Pluto';
import { DIDCommDIDResolver } from './DIDResolver';
import { DIDCommSecretsResolver } from './SecretsResolver';
import { DIDCommProtocol } from '../DIDCommProtocol';

export class DIDCommWrapper implements DIDCommProtocol {
  private readonly didResolver: DIDComm.DIDResolver;
  private readonly secretsResolver: DIDComm.SecretsResolver;

  constructor(
    readonly apollo: Apollo,
    readonly castor: Castor,
    readonly pluto: Pluto,
  ) {
    this.didResolver = new DIDCommDIDResolver(castor);
    this.secretsResolver = new DIDCommSecretsResolver(apollo, castor, pluto);
  }

  async packEncrypted(message: Domain.Message, toDid: Domain.DID, fromDid: Domain.DID): Promise<string> {
    const to = toDid.toString();
    const from = fromDid.toString();
    const didcommMsg = new DIDComm.Message({
      id: message.id,
      typ: "application/didcomm-plain+json",
      type: message.piuri,
      // swift has sanity checks for body
      body: message.body,
      to: [to],
      from: from,
      from_prior: message.fromPrior,

      // attachments: msg.attachments.map(toDidCommAttachment)
      attachments: undefined,

      created_time: Number(message.createdTime),
      expires_time: Number(message.expiresTimePlus),

      thid: message.thid,
      pthid: message.pthid,
    });

    const [encryptedMsg, metadata] = await didcommMsg.pack_encrypted(
      to,
      from,
      null,
      this.didResolver,
      this.secretsResolver,
      {
        enc_alg_anon: "Xc20pEcdhEsA256kw",
        enc_alg_auth: "A256cbcHs512Ecdh1puA256kw",
        forward: false,
        protect_sender: false
      }
    );

    return encryptedMsg;
  }

  async unpack(message: string): Promise<Domain.Message> {
    const [didcommMsg, metadata] = await DIDComm.Message.unpack(message, this.didResolver, this.secretsResolver, {
      expect_decrypt_by_all_keys: false,
      unwrap_re_wrapping_forward: false
    });

    const msgObj = didcommMsg.as_value();

    const domainMessage = new Domain.Message(
      msgObj.type,
      msgObj.id,
      undefined,
      [],
      msgObj.body, // parse
      msgObj.extraHeaders,
      msgObj.created_time?.toString(),
      msgObj.expires_time?.toString(),
      [], // msgObj.attachments,
      typeof msgObj.from === "string" ? Domain.DID.fromString(msgObj.from) : undefined,
      typeof msgObj.to === "string" ? Domain.DID.fromString(msgObj.to) : undefined,
      msgObj.from_prior,
      msgObj.thid,
      msgObj.pthid
    );

    return domainMessage;
  }
}