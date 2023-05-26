
import AccessController from 'orbit-db-access-controllers/interface'

export default class Secp256k1AccessController extends AccessController{
    constructor(keys = []) {
        super();

        this.keys = keys;
    }

    static get type () { 
         return 'Secp256k1AccessControll'
     } // Return the type for this controller
  
    async canAppend(entry, identityProvider) {
      if (this.keys.includes(entry.identity.id) && await identityProvider.verifyIdentity(entry.identity))
        return true
  
      return false
    }
    async grant (access, identity) {
        return true
    } // Logic for granting access to identity

    async save () {
        // return parameters needed for loading
        return { parameter: 'some-parameter-needed-for-loading' }
      }
  
      static async create (orbitdb, options) {
        return new Secp256k1AccessController(options.write)
      }
  }