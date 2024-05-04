import request from "supertest";
import { expect } from "chai";
import { baseUrl } from '../../../testData/config.js';
import categoryData from '../../../testData/categoryCreate.json' assert { type: 'json' };

export async function addCategory(token){
    const response = await request (baseUrl)
        .post('/categories')
        .send(categoryData)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const category = (await response)
    return category
}