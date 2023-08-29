import assert = require('node:assert');
import * as example from '../src'; // load from src. in output, this resolves relative

assert(example.sum(1, 2) === 3);
assert(example.subtract(1, 2) === -1);
assert(example.multiply(3, 2) === 6);
