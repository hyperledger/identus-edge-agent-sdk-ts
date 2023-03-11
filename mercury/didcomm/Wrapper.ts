import * as DIDComm from "didcomm";
import { base64url } from "multiformats/bases/base64";
import * as Domain from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";
import Pluto from "../../pluto/Pluto";
import { DIDCommDIDResolver } from "./DIDResolver";
import { DIDCommSecretsResolver } from "./SecretsResolver";
import { DIDCommProtocol } from "../DIDCommProtocol";
import { MercuryError } from "../../domain/models/Errors";

export class DIDCommWrapper implements DIDCommProtocol {
  private readonly didResolver: DIDComm.DIDResolver;
  private readonly secretsResolver: DIDComm.SecretsResolver;

  constructor(
    readonly apollo: Apollo,
    readonly castor: Castor,
    readonly pluto: Pluto
  ) {
    this.didResolver = new DIDCommDIDResolver(castor);
    this.secretsResolver = new DIDCommSecretsResolver(apollo, castor, pluto);
  }

  async packEncrypted(
    message: Domain.Message,
    toDid: Domain.DID,
    fromDid: Domain.DID
  ): Promise<string> {
    const to = toDid.toString();
    const from = fromDid.toString();
    const didcommMsg = new DIDComm.Message({
      id: message.id,
      typ: "application/didcomm-plain+json",
      type: message.piuri,
      body: message.body ?? "{}",
      to: [to],
      from: from,
      from_prior: message.fromPrior,
      attachments: this.parseAttachments(message.attachments),
      created_time: Number(message.createdTime),
      expires_time: Number(message.expiresTimePlus),
      thid: message.thid,
      pthid: message.pthid,
    });

    const [encryptedMsg] = await didcommMsg.pack_encrypted(
      to,
      from,
      null,
      this.didResolver,
      this.secretsResolver,
      {
        enc_alg_anon: "Xc20pEcdhEsA256kw",
        enc_alg_auth: "A256cbcHs512Ecdh1puA256kw",
        forward: false,
        protect_sender: false,
      }
    );

    return encryptedMsg;
  }

  async unpack(message: string): Promise<Domain.Message> {
    const [didcommMsg] = await DIDComm.Message.unpack(
      message,
      this.didResolver,
      this.secretsResolver,
      {
        expect_decrypt_by_all_keys: false,
        unwrap_re_wrapping_forward: false,
      }
    );

    const msgObj = didcommMsg.as_value();

    const domainMessage = new Domain.Message(
      msgObj.body, // parse
      msgObj.id,
      msgObj.type,
      typeof msgObj.from === "string"
        ? Domain.DID.fromString(msgObj.from)
        : undefined,
      typeof msgObj.to === "string"
        ? Domain.DID.fromString(msgObj.to)
        : undefined,
      this.parseAttachmentsToDomain(msgObj.attachments),
      msgObj.thid,
      msgObj.extraHeaders,
      msgObj.created_time?.toString(),
      msgObj.expires_time?.toString(),
      [],
      undefined,
      msgObj.from_prior,
      msgObj.pthid
    );

    return domainMessage;
  }

  private parseAttachmentsToDomain(
    attachments?: DIDComm.Attachment[]
  ): Domain.AttachmentDescriptor[] {
    return (attachments ?? []).reduce<Domain.AttachmentDescriptor[]>(
      (acc, x) => {
        try {
          const parsed = this.parseAttachmentToDomain(x);
          return acc.concat(parsed);
        } catch {
          return acc;
        }
      },
      []
    );
  }

  private parseAttachmentToDomain(
    attachment: DIDComm.Attachment
  ): Domain.AttachmentDescriptor {
    if (typeof attachment.id !== "string" || attachment.id.length === 0)
      throw new MercuryError.MessageAttachmentWithoutIDError();

    return {
      id: attachment.id,
      data: this.parseAttachmentDataToDomain(attachment.data),
      byteCount: attachment.byte_count,
      description: attachment.description,
      filename: attachment.filename?.split("/"),
      format: attachment.format,
      lastModTime: attachment.lastmod_time?.toString(),
      mediaType: attachment.media_type,
    };
  }

  private parseAttachmentDataToDomain(
    data: DIDComm.AttachmentData
  ): Domain.AttachmentData {
    if ("base64" in data) {
      const parsed: Domain.AttachmentBase64 = {
        base64: data.base64,
      };

      return parsed;
    }

    if ("json" in data) {
      const parsed: Domain.AttachmentJsonData = {
        data: Buffer.from(base64url.decode(data.json)).toString(),
      };

      return parsed;
    }

    if ("links" in data) {
      const parsed: Domain.AttachmentLinkData = {
        hash: data.hash,
        links: data.links,
      };

      return parsed;
    }

    throw new MercuryError.UnknownAttachmentDataError();
  }

  private parseAttachments(
    attachments?: Domain.AttachmentDescriptor[]
  ): DIDComm.Attachment[] | undefined {
    return attachments?.reduce<DIDComm.Attachment[]>((acc, x) => {
      try {
        const parsed = this.parseAttachment(x);
        return acc.concat(parsed);
      } catch {
        return acc;
      }
    }, []);
  }

  private parseAttachment(
    attachment: Domain.AttachmentDescriptor
  ): DIDComm.Attachment {
    return {
      data: this.parseAttachmentData(attachment.data),
      id: attachment.id,
      byte_count: attachment.byteCount ?? undefined,
      description: attachment.description ?? undefined,
      filename: attachment.filename?.join("/"),
      format: attachment.format ?? undefined,
      lastmod_time:
        typeof attachment.lastModTime === "string"
          ? Number(attachment.lastModTime)
          : undefined,
      media_type: attachment.mediaType ?? undefined,
    };
  }

  private parseAttachmentData(
    data: Domain.AttachmentData
  ): DIDComm.AttachmentData {
    if ("base64" in data) {
      const parsed: DIDComm.Base64AttachmentData = {
        base64: data.base64,
        jws: "jws" in data ? data.jws.signature : undefined,
      };

      return parsed;
    }

    if ("data" in data) {
      const parsed: DIDComm.JsonAttachmentData = {
        json: base64url.encode(Buffer.from(data.data)),
      };

      return parsed;
    }

    if ("links" in data) {
      const parsed: DIDComm.LinksAttachmentData = {
        hash: data.hash,
        links: data.links,
      };

      return parsed;
    }

    throw new MercuryError.UnknownAttachmentDataError();
  }
}