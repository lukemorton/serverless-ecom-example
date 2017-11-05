import Product from './Product'

export function fetch (id: String): Product {
  if (id === 'product-id') {
    return {
      id,
      name: 'Great T-Shirt'
    }
  }
}
