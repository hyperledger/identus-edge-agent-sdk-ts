# Edge SDK Connectionless Credential Offer

## Flow
1. Obtain a Connectionless Credential Offer from an Issuer.

A Credential Offer should be a URI with a single query parameter `credential_offer`, which is an encoded JSON.
It should look similar to:

```
openid-credential-offer://?credential_offer=%7B%22credential_issuer%22%3A%22http%3A%2F%2Flocalhost%3A8090%2Foid4vci%2Fissuers%2F59104e60-3bf1-4e38-be58-4a219acf561b%22%2C%22credential_configuration_ids%22%3A%5B%22Example%22%5D%2C%22grants%22%3A%7B%22authorization_code%22%3A%7B%22issuer_state%22%3A%22aa10127f-c27e-4130-a0ed-659e3e1ad6ae%22%7D%7D%7D
```


2. Ensure the validity of the Offer with `Agent.parseCredentialOffer`

`parseCredentialOffer` decodes and validates the encoded credential_offer returning the JSON on success.

```
const offer = await Agent.parseCredentialOffer(rawOffer);
```

3. Create an AuthorizationRequest with `Agent.resolveCredentialOffer`

`resolveCredentialOffer` takes the parsed Offer, relevant client id and the desired redirect url,
and constructs an AuthorizationRequest. This AuthorizationRequest contains a url that goes to the Authorization Server
where the user can authorize the client to gain an access token.

```
const authRequest = await Agent.resolveCredentialOffer(offer, CLIENT_ID, REDIRECT_URL);
const urlString = authRequest.url.href;
```

4. Retrieve the Credential with `Agent.resolveCredentialRequest`

After successfully authorizing, the user will be redirected to the given redirect url.
Once there we use the full URL plus query parameters, the Offer and the AuthorizationRequest
to gain an access token and request the Credential (these steps are handled by `resolveCredentialRequest`).

```
const credential = await oidcAgent.resolveCredentialRequest(offer, authRequest, { callbackUrl: url });
```
