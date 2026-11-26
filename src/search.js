export function search(products, query, flags) {
  return products.filter((p) => p.name.startsWith(query));
}
