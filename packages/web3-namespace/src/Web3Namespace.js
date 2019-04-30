let contextList = {};
let currentContext = null;

/**
 * ToDo's:
 *  - Add provider initiating
 *  - Add context inheritance
 *  - Add Eth Module as test
 *  - Check security
 */
export default class Web3Namespace {

    /**
     * Getter for the current context
     *
     * @property current
     *
     * @returns {Context}
     */
    static get current() {
        return currentContext;
    }

    /**
     * Sets the default context of Web3
     *
     * @method init
     *
     * @param {Context} context
     *
     * @returns {Boolean}
     */
    static init(name, context) {
        contextList[name] = context;
        currentContext = contextList[name];
    }

    /**
     * Returns the correct context by the given name
     *
     * @method get
     *
     * @param {String} name
     *
     * @returns {Context}
     */
    static get(name) {
        return contextList[name];
    }

    /**
     * Sets the current context
     *
     * @method
     *
     *
     * @param name
     */
    static set(name) {
        currentContext = contextList[name];
    }

    /**
     * Add's a context to the Web3 namespace
     *
     * @method add
     *
     * @param {String} name
     * @param {Context} context
     */
    static add(name, context) {
        contextList[name] = context;
    }

    /**
     * Removes a context by the given name.
     *
     * @method remove
     *
     * @param {String} name
     */
    static remove(name) {
        delete contextList[name];
    }

    /**
     * Returns the current provider
     *
     * @method getProvider
     *
     * @returns {AbstractSocketProvider | HttpProvider | CustomProvider}
     */
    static get provider() {
        if (!currentContext.provider) {
            if (currentContext.parent.provider) {
                return currentContext.parent.provider;
            }

            throw new Error('Web3Namespace: No provider found!');
        }

        return currentContext.provider;
    }

    /**
     * Returns the current options
     *
     * @method getOptions
     *
     * @returns {Web3ModuleOptions}
     */
    static get options() {
        if (!currentContext.options) {
            if (currentContext.parent && currentContext.parent.options) {
                return currentContext.parent.options;
            }

            return {};
        }

        if (currentContext.parent && currentContext.parent.options) {
            return Object.assign(currentContext.parent.options, currentContext.options);
        }

        return currentContext.options;
    }
}
