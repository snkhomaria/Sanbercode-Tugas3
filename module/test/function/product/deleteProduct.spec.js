import request from 'supertest'
import { expect } from 'chai'
import { baseUrl } from '../../../testData/config.js'

export async function deleteProduct(token, id){
    const response = await request (baseUrl)
        .delete('/products/' + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const product = (await response)
    return product
}