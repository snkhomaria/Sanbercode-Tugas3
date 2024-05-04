import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'

export async function deleteCUstomer(token, id){
    const response = await request (baseUrl)
        .delete('/customers/' + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const customer = (await response)
    return customer
}