// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

export default class EventEmitter {
    constructor() {
        this.events = [];
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
        const event = this.events.find((el) => el.eventName === eventName);
        if (event) {
            event.listeners = [...event.listeners, listener];
        } else {
            this.events.push({ eventName, listeners: [listener] });
        }

        return this
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
        const event = this.events.find((el) => el.eventName === eventName);
        event.listeners = event.listeners.filter((el) => el !== listener);
    }

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        const event = this.events.find(el => el.eventName === eventName);
        event.listeners.map((el) => el(...args));
        return true
    }
}
