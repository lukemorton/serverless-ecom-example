import * as partial from 'lodash.partial'

import * as fakeProductGateway from './fakeProductGateway'

import _fetchProductById from './fetchProductById'
export const fetchProductById = partial(_fetchProductById, fakeProductGateway)
