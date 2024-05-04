import { expect } from "chai"
import request from "supertest";
import { createToken } from "../function/token.spec.js"
import { addCustomer } from "../function/customer/createCustomer.spec.js"
import { deleteCUstomer } from "../function/customer/deleteCustomer.spec.js"
import { getCustomer } from "../function/customer/detailCustomer.spec.js"
import { updateCustomer } from "../function/customer/updateCustomer.spec.js"
import customerData from '../../testData/customerCreate.json' assert { type: 'json' };
import customerDataUpdate from '../../testData/customerUpdate.json' assert { type: 'json' };

describe('End to End - Customer', () => {
    let token
    let response
    let customerId
    describe('Success Create Customer', () => {
        it('Status code is 201', async () => {
            token = await createToken()
            response =  await addCustomer(token)
            customerId = (await response).body.data.customerId
            expect((await response).status).to.equal(201)
        })

        it('Verify the response has customer ID', async () => {
            expect((await response).body.data).to.have.property('customerId')
        })
    })

    describe('Success Show List Customer', () => {
        it('Status code is 200', async () => {
            response = await getCustomer(token, customerId)
            expect((await response).status).to.equal(200)
        })

        it('Verify response customer name equal ' + customerData.name, async () => {
            expect((await response).body.data.customer.name).to.equal(customerData.name)
        })
    })

    describe('Success Update Customer', () => {
        it('Status code is 200', async () =>{
            response = await updateCustomer(token, customerId)
            expect((await response).status).to.equal(200)
        })

        it('Verify the response name equal ' + customerDataUpdate.name, async () =>{
            expect((await response).body.data.name).to.equal(customerDataUpdate.name)
        })
    })

    describe('Success Delete Customer', () => {
        it('Status code is 200', async () => {
            response = await deleteCUstomer(token, customerId)
            expect((await response).status).to.equal(200)
        })
    })
})