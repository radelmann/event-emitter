class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, cb) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(cb);
    }

    trigger(eventName, ...rest) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (cb) {
                cb.apply(null, rest);
            });
        }
    }

    off(eventName) {
        this.events[eventName] = null;
        delete this[eventName];
    }
}

module.exports = EventEmitter;
