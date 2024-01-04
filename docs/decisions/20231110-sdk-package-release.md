# SDK Package Release

- Status: Approved
- Deciders: Javier Ribó + Gonçalo
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

1. Updating old versions of npm package
Imagine we have v1.0.0 and v2.0.0, but we want to add an improvement to 1.0.1, without affecting v2.0.0.

We will do so by adding a branch from the v1.0.0 git tag as follows:

```bash
git checkout -b 1.x v1.0.0
```

We'd just need to add semantic release commit and the release process will handle npm package publishing for the user without trouble.

2. Releasing RC versions
We now will have an RC branch where we can merge chances as usual, everything that is approved and merged into that branch is automatically released as vX.X.X-RC in npm.

When changes are moved to master branch, semantic-release will commit the corresponding version without RC.

3. Production releases
Work as they work now literally.