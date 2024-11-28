import * as Domain from "../../../domain";
import { Pollux } from "../../types";
import { ACContext } from "./Plugin";
import * as Types from "./types";

interface Args {
  claims: Types.Claims;
}

export class CreatePresentationRequest extends Pollux.CreatePresentationRequest<Args> {
  async run(ctx: ACContext) {
    const presentationClaims = this.args.claims;

    if (!this.validate(presentationClaims)) {
      throw new Domain.PolluxError.InvalidPresentationDefinitionError("Presentation claims are invalid.");
    }

    // if (!(options instanceof Domain.AnoncredsPresentationOptions)) {
    //   throw new Domain.PolluxError.InvalidPresentationDefinitionError("Required field options is undefined, should be AnoncredsPresentationOptions")
    // }

    // if (!validatePresentationClaims(presentationClaims, CredentialType.AnonCreds)) {
    //   throw new Domain.PolluxError.InvalidPresentationDefinitionError("Presentation claims are invalid for anoncreds.")
    // }

    const predicatePaths = Object.keys(presentationClaims.predicates ?? {});

    const requestedPredicates = predicatePaths.reduce<Types.RequestedPredicates>((all, predicateName, i) => {
      const claimPredicate = (presentationClaims.predicates ?? {})[predicateName];

      const pType = claimPredicate.$gt ? '>' :
        claimPredicate.$gte ? '>=' :
          claimPredicate.$lt ? '<' :
            claimPredicate.$lte ? '<=' :
              undefined;

      const pValue = claimPredicate.$gt ? claimPredicate.$gt :
        claimPredicate.$gte ? claimPredicate.$gte :
          claimPredicate.$lt ? claimPredicate.$lt :
            claimPredicate.$lte ? claimPredicate.$lte :
              undefined;

      if (!pType || !pValue) {
        throw new Error("TODO improve, should return valid ptype");
      }

      return {
        ...all,
        [`${claimPredicate.name}${i > 0 ? '_' + i : ''}`]: {
          name: claimPredicate.name,
          p_type: pType,
          p_value: pValue
        }
      };
    }, {});

    const presentationDefinitionRequest: Types.PresentationRequest = {
      nonce: ctx.Anoncreds.createNonce(),
      name: "anoncreds_presentation_request",
      version: "0.1",
      requested_attributes: presentationClaims.attributes ?? {},
      requested_predicates: requestedPredicates
    };

    return presentationDefinitionRequest;
  }

  private validate(claims: unknown): claims is Types.Claims {
    // TODO
    return true;
  }
}
