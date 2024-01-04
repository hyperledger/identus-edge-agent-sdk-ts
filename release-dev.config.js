const baseConfig = require('./release.base.config');
module.exports = baseConfig({
    branches: [
        'master',
        {
            name: 'release/*',
            prerelease: 'rc'
        }
    ],
});
