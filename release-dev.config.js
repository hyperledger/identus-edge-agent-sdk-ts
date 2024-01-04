const baseConfig = require('./release.base.config');
module.exports = baseConfig({
    branches: [
        'master',
        {
            name: 'release/*',
            prerelease: '${name.replace(/release\\/v/, "") + "-rc"}'
        }
    ],
});
