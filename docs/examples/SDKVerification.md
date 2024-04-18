# Cross-Platform Edge SDK Verification
## Requirements
1. A working Identus Mediator and an Identus Cloud Agent.
2. A holder which already has a JWT Credential issued by a known issuer (prism:did) [Holder A]
3. A holder which does not have credential but aims to start the Verification [Holder B (verifier)]
4. Holder A shares its peerDID with holder B.
5. Holder B will initiate a presentation request

> NOTE:
>
> Please follow the [Quick started guide](../../docs/quick-start) to complete steps 1, 2, 3

## Specification
> NOTE:
> It follows the [Identity Foundation Presentation-exchange V2 protocol](https://identity.foundation/presentation-exchange/spec/v2.0.0/#input-descriptor) 
> 
> Claims can be 
> ```javascript
> export type PredicateType = string | number
> export type InputFieldFilter = {
>   type: string,
>   pattern?: string,
>   enum?: PredicateType[],
>   const?: PredicateType[],
>   value?: PredicateType
> }
> export type Claims = {
>  [name: string]: InputFieldFilter
> }
> ```

## Flow
1. Holder B Initiates the Presentation Request: creating a PresentationDefinitionRequest with specified requirements.
2. Holder A, will then create a Presentation Submission which contains the requested credential together with a randomised challenge.
3. Holder B, will receive the Presentation Submission and verify the following
    *  Holder A signed the JWT presentation with the correct signatures.
    * Holder A signed the random challenge that we required him with the correct keys.
    * Holder A is including his credential and not somebody else's.
    * Holder A is including a credential with valid signatures, matching the issuer through the specified DID.
    * (optional) Holder A has included a credential that has been issued by the requested issuer.
    * (optional) Holder A has included a credential that satisfies the requested claims.
4. Holder B, can then verify at any point in time that presentation request and show feedback in UI.

## Code Reference
* toDID is the peer did of holder A which has the credential that we aim to verify
* claims contains an object with all the claims that we  aim to validate, setting claims is internally used to help the Holder A to choose the right credential and to verify the fields correctly when Holder B receives the presentation.
Example 
```javascript
const claims: Claims = {
    email: {
        type: 'string', pattern:'email@email.com'
    }
}
const options:PresentationClaims = { 
    issuer: Domain.DID.fromString("did:peer:12345"),
    claims: claims
}

agent.initiatePresentationRequest(
    Domain.CredentialType.JWT,
    toDID,
    options
);
```



