import * as Domain from "../../../../domain";
import { Pollux } from "../../../types";
import { Task } from "../../../../utils";
import { JWT as JWTHelper } from "../../../utils/JWT";
import { CreatePresentationProof } from "./CreatePresentationProof";
import { CreatePresentationRequest } from "./CreatePresentationRequest";
import { CreatePresentationSubmission } from "./CreatePresentationSubmission";
import { IsCredentialRevoked } from "./IsCredentialRevoked";
import { ParseCredential } from "./ParseCredential";
import { RevealCredentialFields } from "./RevealCredentialFields";
import { VerifyPresentationSubmission } from "./VerifyPresentationSubmission";

export class JWTContext extends Task.Context {
  public readonly JWT: JWTHelper;

  constructor(opts: Task.Context.Options) {
    super(opts);
    this.JWT = new JWTHelper(this.Apollo, this.Castor);
  }
}

export const Plugin: Pollux.Plugin = {
  type: Domain.CredentialType.JWT,
  // version: "0.0.1"
  context: JWTContext,
  tasks: [
    IsCredentialRevoked,
    CreatePresentationProof,
    CreatePresentationRequest,
    CreatePresentationSubmission,
    ParseCredential,
    RevealCredentialFields,
    VerifyPresentationSubmission,
  ],
  // contextProps: {},
  // metadata: { describe plugin }
};
