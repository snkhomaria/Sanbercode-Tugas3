import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'

export async function getUser(token, id){     
    const response = await request (baseUrl)
        .get('/users/' + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const user = (await response)
    return user
}