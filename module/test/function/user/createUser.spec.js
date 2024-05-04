import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'
import userData from '../../../testData/userCreate.json' assert { type: 'json' };

export async function addUser(token){
    const response = await request (baseUrl)
        .post('/users')
        .send(userData)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const user = (await response)
    return user
}