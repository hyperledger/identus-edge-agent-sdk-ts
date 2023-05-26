import IdentityProvider from 'orbit-db-identity-provider/interface'
import * as SDK from '@input-output-hk/atala-prism-wallet-sdk'

const apollo = new SDK.Apollo();

export default class Secp256k1IdentityProvider extends IdentityProvider {
    static curve = SDK.Domain.Curve.SECP256K1

    constructor(options) {
        super(options);
        this.options = options;
    }
    static get type () { 
        return 'Secp256k1IdentityProvider'
    }
    async getId () { 
        return Buffer.from(this.options.keyPair.publicKey.value).toString('hex');
    } 
    async signIdentity (data) {
        const signature = Buffer.from(apollo.signStringMessage(this.options.keyPair.privateKey, data).value).toString('hex')
        return signature
     } 
     static async verifyIdentity (identity) {
        const publicKey = SDK.Secp256k1PublicKey.secp256k1FromBytes(Buffer.from(identity.id, 'hex'))
        const challenge = Buffer.from(`${identity.publicKey}${identity.signatures.id}`)
        const signature = Buffer.from(identity.signatures.publicKey, 'hex')
        return publicKey.verify(challenge, signature);
     } 
  }
