import Product from './Product'

export default interface ProductGateway {
  fetch (id: String): Product
}
