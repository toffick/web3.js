import {Web3Namespace} from '../src/Web3Namespace.js';

const throwError = () => {
    throw new Error('Not allowed action!');
};

export const web3 = new Proxy(
    Web3Namespace,
    {
        set: throwError,
        defineProperty: throwError,
        deleteProperty: throwError,
        preventExtensions: throwError,
        setPrototypeOf: throwError
    }
);

export {NamespaceEth as Eth} from 'modules/Eth.js';

