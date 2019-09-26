
const server = require('../api/server');
const request = require('supertest');

const prepTestDB= require('../config/prepTestDB')

const Products = require('./products-model');
const db = require('../database/dbConfig');

const restrict= require('../config/test/test-middleware');
jest.mock('../config/test/test-middleware');


beforeEach(prepTestDB);

describe('products router', async () => {
    it('post /', async () => {
        const item = {
            id:1,
            productName: "Eggs",
            description: "Beautiful fresh farmed brown eggs.",
            price: 3,
        }

        const res = await request(server)
            .post('/post')
            .send(item)
        expect(res.status).toBe(404)
    })

    it('get /', restrict, async () => {
        const res = await request(server)
            .get('/products')
        expect(res.status).toBe(200)
        expect(res.body[1]).toEqual(item)
        expect(res.type).toMatch(/json/)
    })

})

describe('products router', () => {
    beforeEach(async () => {
        await db('products').truncate();
    });

    it('should set the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    describe('add()', () => {

        it('should add a product to the database', async() => {
            await Products
                .add({
                        productName: "Milk", 
                        description:"Beautiful fresh farmed brown eggs.",
                        price:3,
                        user_id:2
                    });
            let product = await db('products');

            // expect(product).toHaveLength(2)
            expect(product).toHaveLength(1)
        });

        it('should add a product with the right name', async() => {
            const productName = await Products.add({
                productName: "Milk", 
                description:"Beautiful fresh farmed brown eggs.",
                price:3,
                user_id:2
            })

            let product = await db('products')
                .where(productName)
                .first()

            // expect(product.productName).toBe("Chicken")
            expect(product.productName).toBe("Milk")
        });

    })
})