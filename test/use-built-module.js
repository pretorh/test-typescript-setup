const assert = require('node:assert');
const example = require('../out/src'); // load from ts compiled outputs (and run from here)

assert(example.sum(1, 2) === 3);
assert(example.subtract(1, 2) === -1);
assert(example.multiply(3, 2) === 6);
