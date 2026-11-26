import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shippingOptions, shippingCost } from '../src/shipping.js';

test('offers standard and express shipping', () => {
  assert.deepEqual(shippingOptions(), ['standard', 'express']);
});

test('express costs 12, standard 4', () => {
  assert.equal(shippingCost('express'), 12);
  assert.equal(shippingCost('standard'), 4);
});
