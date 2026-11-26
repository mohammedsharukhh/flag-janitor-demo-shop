import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shippingOptions, shippingCost } from '../src/shipping.js';

const flags = { isFeatureEnabled: (name) => name === 'express_shipping' };

test('offers standard and express shipping', () => {
  assert.deepEqual(shippingOptions(flags), ['standard', 'express']);
});

test('express costs 12, standard 4', () => {
  assert.equal(shippingCost('express', flags), 12);
  assert.equal(shippingCost('standard', flags), 4);
});
