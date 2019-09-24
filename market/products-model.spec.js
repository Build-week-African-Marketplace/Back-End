const request = require('supertest');

const Products = require('./products-model');

const db = require('../database/dbConfig');

describe('products model', () => {
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