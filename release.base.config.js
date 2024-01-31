module.exports = (extraConfig = {}) => (
    {
        ...extraConfig,
        plugins: [
            '@semantic-release/commit-analyzer',
            '@semantic-release/release-notes-generator',
            ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
            ['@semantic-release/exec', { "prepareCmd": './publish.sh ${nextRelease.version}' }],
            [
                '@semantic-release/git',
                {
                    assets: [
                        'package.json',
                        'package-lock.json',
                        'CHANGELOG.md',
                        'integration-tests/e2e-tests/package.json',
                        'integration-tests/e2e-tests/yarn.lock',
                        'docs/**/*',
                    ],
                    message: 'chore(release): release ${nextRelease.version}\n\n${nextRelease.notes}',
                },
            ],
            [
                'semantic-release-slack-bot',
                {
                    notifyOnSuccess: true,
                    notifyOnFail: true,
                    markdownReleaseNotes: true,
                    onSuccessTemplate: {
                        text:
                            "A new version of `$package_name` successfully released!\nVersion: `$npm_package_version`\nTag: $repo_url/releases/tag/v$npm_package_version\n\nRelease notes:\n$release_notes",
                    },
                },
            ],
        ],
    }
);
