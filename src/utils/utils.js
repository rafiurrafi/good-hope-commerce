export function getProductFromId(id, products) {
  return products.find((product) => product.id === +id);
}
