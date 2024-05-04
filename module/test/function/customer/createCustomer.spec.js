import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'
import customerData from '../../../testData/customerCreate.json' assert { type: 'json' };

export async function addCustomer(token){
    const response = await request (baseUrl)
        .post('/customers')
        .send(customerData)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const customer = (await response)
    return customer
}