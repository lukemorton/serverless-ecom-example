import ProductGateway from './ProductGateway'

interface Request {
  id: String
}

interface Response {
  id: String,
  name: String
}

export default function fetchProductById (productGateway: ProductGateway, req: Request): Response {
  return productGateway.fetch(req.id)
}
