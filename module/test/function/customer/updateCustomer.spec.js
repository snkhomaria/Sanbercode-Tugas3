import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'
import customerDataUpdate from '../../../testData/customerUpdate.json' assert { type: 'json' };

export async function updateCustomer(token, id){
    const response = await request (baseUrl)
        .put('/customers/' + id)
        .send(customerDataUpdate)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const customer = (await response)
    return customer
}