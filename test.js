const EventEmitter = require('./code.js');
const assert = require('assert');
const mustCall = require('must-call');

const ee = new EventEmitter();

const onChange = mustCall(function () { }, 2);

ee.on('change', onChange);

ee.trigger('change');

const onChangeAgain = mustCall(function () { }, 1);

ee.on('change', onChangeAgain);

ee.trigger('change');

ee.off('change');

ee.trigger('change');

const onEventWithArgs = mustCall(function () {
    assert.strictEqual(arguments[0], 1);
    assert.strictEqual(arguments[1], 2);
    assert.strictEqual(arguments[2], true);
    assert.strictEqual(arguments[3], false);
});

ee.on('eventWithArgs', onEventWithArgs);

ee.trigger('eventWithArgs', 1, 2, true, false);
