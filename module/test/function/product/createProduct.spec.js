import request from 'supertest'
import { expect } from 'chai'
import { baseUrl } from '../../../testData/config.js'
import productData from '../../../testData/productCreate.json' assert { type: 'json' };

export async function addProduct(token){
    const response = await request (baseUrl)
        .post('/products')
        .send(productData)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const product = (await response)
    return product
}