import axios from 'axios'
const BASE_URL = 'https://brecho-md-api.herokuapp.com'

export const URL_AUTH = '/auth'
export const URL_PRODUCT = '/product'
export const URL_CLIENT = '/client'
export const URL_ORDER = '/order'
export const URL_PURCHASE_ORDER = '/purchase-order'

export const api = axios.create({
    baseURL: BASE_URL

})

