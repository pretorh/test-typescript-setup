import assert = require('node:assert');
import * as example from '../dist'; // load from dist, in order to not compile src in tests again

assert(example.sum(1, 2) === 3);
assert(example.subtract(1, 2) === -1);
assert(example.multiply(3, 2) === 6);
