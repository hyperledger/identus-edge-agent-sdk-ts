# SDK Package Release

- Status: Approved
- Deciders: [Javier Ribó](https://github.com/elribonazo) + [Gonçalo](https://github.com/goncalo-frade-iohk)
- Date: 2023-11-10

Technical Story: https://input-output.atlassian.net/browse/ATL-6147

## Context and Problem Statement

The package is now publicly available in the @atala npm organisation, removing the need of using a custom npmrc and a token with permissions to fetch from github repository.

Our current release process for all atala is to do monthly releases, before they close we choose what versions go in and which ones don't. During the month we also make new releases causing a lot of confusion with our users.
Further to this, the current master HEAD is deployed as the latest package, which removes our control over the release of breaking changes etc, and causes friction for developers.

We propose to publish the package in the Atala-Prism and use a release-candidate or nightly build for the latest changes.


## Decision Drivers

- Developer friction when releasing unstable changes.

## Considered Options

All the proposed options split the RC and production releases in 2 so this issues are better addressed.

### [option 1] Github packages for RC + NPM for production
Releasing @atala packages into npm for official releases and use github packages for release-candidates.

### [option 2] NPM for everything
Releasing @atala packages in official NPM repo as RC and Production packages.

This will have some side effects, semantic-release npm package will check what is the latest published version and trigger the semantic-publishing based on that. If we release a package as RC and then without changes we just want to release as production package without RC, this maybe needs to be done manually (another CI action).

## Decision Outcome

Chosen option: "[option 2]", because we don't want to make anyone go back to using a RC package with a github token and is really the best option.

We will have master and an RC branch and will follow normal expected [semantic-release-process](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels)

Releasing packages:

Master branch is our development branch and we will / can always merge changes in master.
In order to release a package, a new branch must be created, it does not matter if its a maintenance-release in a previous package, a release candidate or a production release.

For maintenance release, the engineer is going to create a branch representing the Maintenance (also RC) by creating "release/v2.0.0". The changes will then be either cherry-picked or implemented in a PR that will merge directly into "release/v2.0.0".

For release candidates, in normal development flow all the changes will be available in Master and each time we want to release a new RC package, we will create a branch called "release/v3.0.0" and cherry-pick those changes ready to release.

Production, can just be deployed from the release/* candidate branch by running the task "Release" which will set the version to be released without the RC.