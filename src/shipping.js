// Shipping options shown at checkout.
export function shippingOptions(flags) {
  const options = ['standard'];
  if (flags.isFeatureEnabled('express_shipping')) {
    options.push('express');
  }
  return options;
}

export function shippingCost(option, flags) {
  if (option === 'express') {
    return flags.isFeatureEnabled('express_shipping') ? 12 : null;
  }
  return 4;
}
