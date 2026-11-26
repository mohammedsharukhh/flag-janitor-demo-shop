// `flags` is the Flagsmith flags object (flagsmith-nodejs getEnvironmentFlags()).
export function checkoutTotal(cart, flags) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (flags.isFeatureEnabled('new_checkout')) {
    // new checkout: free shipping over 50
    return subtotal >= 50 ? subtotal : subtotal + 5;
  } else {
    // legacy checkout: flat shipping
    return subtotal + 7;
  }
}

export function checkoutButtonLabel(flags) {
  const useNewCheckout = flags.isFeatureEnabled('new_checkout');
  return useNewCheckout ? 'Pay now' : 'Proceed to checkout';
}
