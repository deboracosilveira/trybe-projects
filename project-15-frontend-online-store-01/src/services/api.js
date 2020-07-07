export async function getCategories() {
  const request = fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((response) => response.json());
  return request;
}

export async function getProductsFromCategoryAndQuery(
  query,
  categoryId,
  productId,
) {
  if (!query && !categoryId) {
    return fetch(
      `https://api.mercadolibre.com/items/${productId}`,
    ).then((response) => response.json());
  }
  if (!categoryId) {
    return fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
    ).then((response) => response.json());
  }
  if (!query) {
    return fetch(
      ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
    ).then((response) => response.json());
  }
  return fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  ).then((response) => response.json());
}
