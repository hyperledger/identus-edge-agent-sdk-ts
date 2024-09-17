# Wallet SDK - Typescript E2E

## How to run

This guide shows you how to run the end-to-end tests

### Setting up the environment variables

- Copy `.env.example` to `.env`
- Fill the required properties

| Property                 | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| MEDIATOR_OOB_URL         | URL that returns the OOB url                                |
| AGENT_URL                | URL for Cloud Agent - should end with a forward slash ("/") |
| APIKEY                   | (Optional) Apikey authentication                            |
| PUBLISHED_DID            | (Optional) Existing DID                                     |
| JWT_SCHEMA_GUID          | (Optional) Existing jwt schema guid                         |
| ANONCRED_DEFINITION_GUID | (Optional) Existing anoncred definition guid                |

### Compile the SDK

To test the changes you'll need to build the SDK. Refer to [README](/../../README.md#building-from-source) for
further instructions.

### Installing dependencies

```bash
yarn install
```

### Running the tests

To run the full end-to-end regression test suite

```bash
yarn test:sdk
```

To run a specific tagged scenario

```bash
yarn test:sdk --tags "@mytag and @anothertag"
```

After the execution is done, it will generate the report inside the `target` folder.