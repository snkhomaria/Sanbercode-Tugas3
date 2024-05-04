import request from "supertest";
import { baseUrl } from '../../../testData/config.js'

export async function getCategory(token, id){
    const response = await request (baseUrl)
        .get('/categories/' + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const category = (await response)
    return category
}