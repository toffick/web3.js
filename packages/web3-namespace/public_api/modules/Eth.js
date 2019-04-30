import Web3Namespace from '../src/Web3Namespace.js';
import {Eth} from 'web3-eth';

export default class NamespaceEth extends Eth {
    /**
     * @param {Context} context
     *
     * @constructor
     */
    constructor(context = null) {
        if (context !== null) {
            super(context.provider, null, context.options);
        }

        super(Web3Namespace.provider, null, Web3Namespace.options);
    }
}
