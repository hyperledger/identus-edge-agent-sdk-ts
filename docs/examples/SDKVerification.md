# Cross-Platform Edge SDK Verification
## Requirements
1. A working Identus Mediator and an Identus Cloud Agent.
2. A holder who already has a JWT Credential issued by a known issuer (prism:did) [Holder A]
3. A holder who does not have credentials but aims to start the Verification [Holder B (verifier)]
4. Holder A shares its peerDID with holder B.
5. Holder B will initiate a presentation request

> NOTE:
>
> Please follow the [Quick started guide](/home/quick-start) to complete steps 1, 2, 3

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
    * Holder A signed the JWT presentation with the correct signatures.
    * Holder A signed the random challenge that required him to have the correct keys.
    * Holder A is including a credentials it owns and not somebody else's.
    * Holder A is includes a credential with valid signatures, matching the issuer through the specified DID.
    * (optional) Holder A has included a credential that the requested issuer has issued.
    * (optional) Holder A has included a credential that satisfies the requested claims.
4. Holder B can then verify at any point in time that presentation request and show feedback in UI.

## Code Reference
* toDID is the peer did of holder A, which has the credential that we aim to verify
* claims contain an object with all the claims we aim to validate; setting claims is internally used to help Holder A choose the proper credential and correctly verify the fields when Holder B receives the presentation.

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

* The Edge Agent Verifier (SDK) will then send the Presentation Request to the desired holder
* The Edge Agent Holder will be asked to choose what credential wants to be used for that Presentation Request
* The Edge Agent Verifier (SDK) will then receive and validate the Credential as follows

Example
```javascript
//Presentation is the message sent by the holder back to the verifier
const message = SDK.Presentation.fromMessage(message);
agent.handlePresentation(message)
```




