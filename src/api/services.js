import axios from 'axios'
const BASE_URL = 'https://brecho-md-api.herokuapp.com'

export const URL_AUTH = '/auth'
export const URL_PRODUCT = '/product'
export const URL_CLIENT = '/client'
export const URL_SALES_ORDER = '/sales-order'
export const URL_PURCHASE_ORDER = '/purchase-order'

export const URL_SALES_SUMARY = '/sales-order/sumary'
export const URL_PURCHASE_SUMARY = '/purchase-order/sumary'
export const URL_PRODUCT_SUMARY = '/product/sumary'
export const URL_CLIENT_SUMARY = '/client/sumary'

export const api = axios.create({
    baseURL: BASE_URL

})

