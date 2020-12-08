import axios from 'axios'
const BASE_URL = 'http://localhost:8080'

export const URL_AUTH = '/auth'
export const URL_ADDRESS = '/address'
export const URL_EMPLOYEE = '/employee'
export const URL_PAYSLIP = '/payslip'
export const URL_VACTION = '/vacation'
export const URL_USER = '/user'

export const api = axios.create({
    baseURL: BASE_URL

})

