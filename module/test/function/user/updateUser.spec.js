import request from 'supertest'
import { baseUrl } from '../../../testData/config.js'
import userDataUpdate from '../../../testData/userUpdate.json' assert { type: 'json' };

export async function updateUser(token, id){
    const response = await request (baseUrl)
        .put('/users/' + id)
        .send(userDataUpdate)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    
    const user = (await response)
    return user
}