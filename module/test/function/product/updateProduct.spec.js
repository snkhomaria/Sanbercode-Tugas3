import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'
import productDataUpdate from '../../../testData/productUpdate.json' assert { type: 'json' };

export async function updateProduct(token, id){
    const response = await request (baseUrl)
        .put('/products/' + id)
        .send(productDataUpdate)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const product = (await response)
    return product
}