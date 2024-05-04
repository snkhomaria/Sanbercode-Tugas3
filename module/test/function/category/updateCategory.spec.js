import request from "supertest";
import { baseUrl } from '../../../testData/config.js'
import categoryDataUpdate from '../../../testData/categoryUpdate.json' assert { type: 'json' };

export async function updateCategory(token, id){
    const response = await request (baseUrl)
        .put('/categories/' + id)
        .send(categoryDataUpdate)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const category = (await response)
    return category
}