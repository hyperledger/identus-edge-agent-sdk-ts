import * as Domain from "../../../../domain";
import { SDJWT as SDJWTHelper } from "../../../utils/SDJWT";
import { Pollux } from "../../../types";
import { Task } from "../../../../utils";
import { CreatePresentationProof } from "./CreatePresentationProof";
import { CreatePresentationRequest } from "./CreatePresentationRequest";
import { CreatePresentationSubmission } from "./CreatePresentationSubmission";
import { ParseCredential } from "./ParseCredential";
import { RevealCredentialFields } from "./RevealCredentialFields";
import { VerifyPresentationSubmission } from "./VerifyPresentationSubmission";

export class SDJWTContext extends Task.Context {
  public readonly SDJWT: SDJWTHelper;

  constructor(opts: Task.Context.Options) {
    super(opts);
    this.SDJWT = new SDJWTHelper(this.Apollo, this.Castor);
  }
}

export const Plugin: Pollux.Plugin = {
  type: Domain.CredentialType.SDJWT,
  // version: "0.0.1"
  context: SDJWTContext,
  tasks: [
    CreatePresentationProof,
    CreatePresentationRequest,
    CreatePresentationSubmission,
    ParseCredential,
    RevealCredentialFields,
    VerifyPresentationSubmission,
  ],
  // contextProps: {},
};
