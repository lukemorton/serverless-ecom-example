import { handler, json } from '../serverless'
import { fetchProductById } from '../products'

export const fetch = handler (async function (event) {
  const product = fetchProductById(event)

  if (product) {
    return json(200, product)
  } else {
    return json(404, {})
  }
})
