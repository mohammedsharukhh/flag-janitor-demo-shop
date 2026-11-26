export function search(products, query, flags) {
  if (flags.isFeatureEnabled('old_search')) {
    return products.filter((p) => p.name.startsWith(query));
  }
  return products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
}
