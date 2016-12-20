const EventEmitter = require('./code.js');
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