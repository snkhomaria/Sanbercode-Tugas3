import { expect } from "chai"
import { createToken } from "../function/token.spec.js"
import { addCategory } from "../function/category/createCategory.spec.js"
import { getCategory } from "../function/category/detailCategory.spec.js";
import { updateCategory } from "../function/category/updateCategory.spec.js";
import { deleteCategory } from "../function/category/deleteCategory.spec.js";
import categoryData from '../../testData/categoryCreate.json' assert { type: 'json' };
import categoryDataUpdate from '../../testData/categoryUpdate.json' assert { type: 'json'};

describe('End to End - Category', () => {
    let token
    let response
    let categoryId

    describe('Success Create Category', () => {
        it('Status code is 201', async () => {
            token = await createToken()
            response =  await addCategory(token)
            categoryId = (await response).body.data.categoryId
            expect((await response).status).to.equal(201)
        })

        it('Verify response message equal "Category berhasil ditambahkan"', async () => {
            expect((await response).body.message).to.equal('Category berhasil ditambahkan')
        })

        it('Verify response category name equal ' + categoryData.name, async () => {
            expect((await response).body.data.name).to.equal(categoryData.name)
        })
    })

    describe('Success Show List Category', () => {
        it('Status code is 200', async () => {
            response = await getCategory(token, categoryId)
            expect((await response).status).to.equal(200)
        })

        it('Verify response has category name', async () => {
            expect((await response).body.data.category).to.have.property('name')
        })

        it('Verify response has category description', async () => {
            expect((await response).body.data.category).to.have.property('description')
        })

        it('Verify response category name equal ' + categoryData.name, async () => {
            expect((await response).body.data.category.name).to.equal(categoryData.name)
        })
    })

    describe('Success Update Category', () => {
        it('Status code is 200', async () => {
            response = await updateCategory(token, categoryId)
            expect((await response).status).to.equal(200)
        })

        it('Verify response category name equal ' + categoryDataUpdate.name, async () => {
            expect((await response).body.data.name).to.equal(categoryDataUpdate.name)
        })
    })

    describe('Success Delete Category', () => { 
        it('Status code is 200', async () => {
            response = await deleteCategory(token, categoryId)
            expect((await response).status).to.equal(200)
        })
    })
})