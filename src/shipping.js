// Shipping options shown at checkout.
export function shippingOptions(flags) {
  const options = ['standard'];
  options.push('express');
  return options;
}

export function shippingCost(option, flags) {
  if (option === 'express') {
    return 12;
  }
  return 4;
}
