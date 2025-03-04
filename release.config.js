/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    'main',
    '+([0-9])?(.{+([0-9]),x}).x',
    { name: 'beta', prerelease: 'rc' } // make a branch 'beta' a pre-release branch as '6.6.0-rc1'
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: "conventionalcommits" }],
    ['@semantic-release/release-notes-generator', { preset: "conventionalcommits" }],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/exec', { "prepareCmd": './publish.sh --version ${nextRelease.version}' }],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'CHANGELOG.md',
          'docs/**/*',
        ],
        message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
