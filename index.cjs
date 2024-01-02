module.exports =
    (typeof window !== 'undefined') ?
        require('./build/browser/index.cjs')
        :
        require('./build/node/index.cjs')
