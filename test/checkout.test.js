import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkoutTotal, checkoutButtonLabel } from '../src/checkout.js';

// Checkout flags are all on in production today.
const prod = { isFeatureEnabled: () => true };

test('free shipping over 50', () => assert.equal(checkoutTotal([{ price: 60, qty: 1 }], prod), 60));
test('shipping under 50', () => assert.equal(checkoutTotal([{ price: 10, qty: 2 }], prod), 25));
test('button label', () => assert.equal(checkoutButtonLabel(prod), 'Pay now'));
