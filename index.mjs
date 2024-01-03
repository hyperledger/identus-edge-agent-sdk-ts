import * as browserSDK from './build/browser/index.mjs';
import * as nodeSDK from './build/node/index.mjs';

export default (typeof window !== 'undefined') ?
    browserSDK
    :
    nodeSDK