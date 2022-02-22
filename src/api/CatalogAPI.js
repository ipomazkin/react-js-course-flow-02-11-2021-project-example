import { http } from "../services/http";

export function getCatalogCategories() {
  return http.get('/categories/');
}

export function getCatalogProducts() {
  return http.get('/products/');
}

export function createCatalogProduct(product = {}) {
  return http.post('/products/', product);
}
