// `flags` is the Flagsmith flags object (flagsmith-nodejs getEnvironmentFlags()).
export function checkoutTotal(cart, flags) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  // new checkout: free shipping over 50
  return subtotal >= 50 ? subtotal : subtotal + 5;
}

export function checkoutButtonLabel(flags) {
  return 'Pay now';
}
