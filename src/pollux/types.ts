import * as Domain from "../domain";
import { Ctor, JsonObj } from "../utils";
import { Task } from "../utils/tasks";

export namespace Pollux {
  export interface Plugin {
    type: Domain.CredentialType;
    version?: string;
    tasks: Ctor<Task<any>>[];
    context?: Ctor<Task.Context>;
    // contextProps?: JsonObj;
  }

  // interface PluginV2 {
  //   id: string;
  //   task: Ctor<Task<any>>;
  // }

  export abstract class CreatePresentationProof<T> extends Task<string, T> {}
  export abstract class CreatePresentationRequest<T> extends Task<JsonObj, T> {}
  export abstract class CreatePresentationSubmission<T> extends Task<unknown, T> {}

  export abstract class IsCredentialRevoked extends Task<boolean, IsCredentialRevoked.Args> {}
  export namespace IsCredentialRevoked {
    export interface Args {
      credential: Domain.Credential;
    }
  }

  export abstract class ParseCredential<T> extends Task<Domain.Credential, T> {}
  export abstract class ProcessCredentialOffer<T> extends Task<any, T> {}
  // export abstract class ProcessCredentialOffer<T> extends Task<string, T> {}
  export abstract class RevealCredentialFields extends Task<JsonObj, RevealCredentialFields.Args> {}
  export namespace RevealCredentialFields {
    export interface Args {
      credential: Domain.Credential;
      fields: string[];
    }
  }
  export abstract class VerifyPresentationSubmission<T> extends Task<boolean, T> {}
}
