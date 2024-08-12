# Contributing to Edge Agent SDK TS

:rocket::tada: First off, thanks for taking the time to contribute! :tada::rocket:
The following guidelines are for contributing to Edge Agent SDK TS. These are mostly guidelines. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Identus](#identus)
  * [Edge Agent SDK TS](#edge-agent-sdk-ts)

[How Can I Contribute?](#how-can-i-contribute)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  

## What should I know before I get started?

### Identus

Identus is a self-sovereign identity (SSI) platform and service suite for verifiable data and digital identity. Built on Cardano, as a distributed ledger, it offers the core infrastructure for issuing DIDs (Decentralized identifiers) and verifiable credentials alongside tools and frameworks to help expand your ecosystem.
The complete platform is separated into multiple repositories:

* [Cloud Agent](https://github.com/hyperledger/identus-cloud-agent) - Repo that contains the cloud agent that provides self-sovereign identity services to build products and solutions.
* [Mediator](https://github.com/input-output-hk/atala-prism-mediator) - Repo for the DIDComm V2 Mediator.
* [Edge Agent SDK Swift](https://github.com/input-output-hk/atala-prism-wallet-sdk-swift) - Repo for the Swift version of the SDK.
* [Edge Agent SDK KMP](https://github.com/input-output-hk/atala-prism-wallet-sdk-kmm) - Repo for the Kotlin Multi-Platform version of the SDK.

### Edge Agent SDK TS

Edge Agent SDK TS software development kit will help adoption within TS platforms (Browser/Node) by providing key functionalities. For more information about the SDK, please have a look at the [Readme](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/master/README.md)

### Your First Code Contribution

Unsure where to begin contributing to Edge Agent SDK TS? You can start by looking through the [Readme](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/master/README.md) that provides all the steps to setup your environment.

### Commit Signing

As part of the Hyperledger project, all commits to Identus repos must by signed (cryptographically) and signed-off.

Getting started:

1. [Generate a gpg key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) (if you've not already done so)
2. [Tell git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
3. [Add your signing key to your Github account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)
4. Set your sign-off signature
  ```shell
  git config user.name "FIRST_NAME LAST_NAME" --global
  git config user.email "MY_NAME@example.com" --global
  ```

From here you can add `-sS` to many commit related commands to sign your commits:

```shell
git commit -sS -m 'docs: add commit signing notes to CONTRIBUTING'
```

Missed signing some commits? You can rebase + sign:

```shell
git rebase origin/main -sS
```


Other resources:

 * [Git Tools - Signing Your Work](https://git-scm.c(om/book/en/v2/Git-Tools-Signing-Your-Work)


### Pull Requests

The process described here has several goals:

- Maintain the SDK quality
- Fix problems that are important to users
- Engage the community in working toward the best possible product
- Enable a sustainable system for the SDK maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Sign your commits (see [more info](#commit-signing))
2. Follow all instructions in [the template](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
3. Follow the [styleguides](#styleguides)
4. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied before your pull request is reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be accepted.

### Reporting Bugs

This section guides you through submitting a bug report for Edge Agent SDK TS. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behaviour:computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report), as you might not need to create one. When creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/master/.github/ISSUE_TEMPLATE/1-bug-report.yaml), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like the same thing you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

* **You might be able to find the cause of the problem and fix things yourself by Debugging**. Most importantly, check if you can reproduce the problem in the latest version.
* **Check the [Readme](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/master/README.md) ** if you have problems with the setup and the [discussions](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/discussions)** for a list of common questions and problems.
* **Perform a cursory search to see if the problem has already been reported**. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information by filling in [the template](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/issues/new/choose).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects or copy/pasteable snippets which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behaviour you observed after following the steps** and point out what exactly the problem is with that behaviour.
* **Explain which behaviour you expected to see instead and why.**
* **If you're reporting that the SDK crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of the SDK), or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of the SDK?** What's the most recent version in which the problem doesn't happen?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it usually happens.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for the SDK, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion), as you might find out that you don't need to create one. When creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/master/.github/ISSUE_TEMPLATE/2-feature-request.yaml), including the steps that you imagine you would take if the feature you're requesting existed.

* Most importantly, **check if you're using the latest version.** 
* **Perform a cursory search** to see if the enhancement has already been suggested. If it has, comment on the existing issue instead of opening a new one.

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets you use in those examples as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behaviour** and **explain which behaviour you expected to see instead** and why.
* **Explain why this enhancement would be useful**.
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of the SDK you're using.**
* **Specify the name and version of the OS you're using.**

## Styleguides

### Git Commit Messages

Identus uses [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification). Please always provide a commit following these specifications.

#### Commit Message Format

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except those of type "docs".
When the body is present, it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.


#### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: apollo|castor|pollux|mercury|pluto|domain|experience
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies
* **ci**: Changes to the CI configuration files and scripts
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


##### Scope
The scope should be the name of the affected module or building block
(as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* `castor`
* `pollux`
* `mercury`
* `pluto`
* `domain`
* `experience`

##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix", not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behaviour with the new behaviour to illustrate the impact of the change.


#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes ATL-<issue number>
```

or

```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Related to ATL-<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that includes migration instructions.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.
