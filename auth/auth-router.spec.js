const server = require('../api/server')
const request = require('supertest');

const prepTestDB= require('../config/prepTestDB')
const restrict= require('../config/test/test-middleware');
jest.mock('../config/test/test-middleware');


beforeEach(prepTestDB);

describe('Auth router', () => {
    it('Post /api/signup', restrict, async () => {
        const signup = {
            username: 'admin',
            password: ("password"),
            first_name: 'admin',
            last_name: 'password',
            email: 'admin@password.com'
        }

        const res = await request(server)
            .post('/users/login')
            .send(signup)
        expect(res.status).toBe(404)
    })

    it('get /api',restrict, async () => {
        const signup = {
            username: 'admin',
            password: ("password"),
            first_name: 'admin',
            last_name: 'password',
            email: 'admin@password.com'
        }
        const res = await request(server)
            .get('users')
        expect(res.status).toBe(200)
        expect(res.body[1]).toEqual(signup)
        expect(res.type).toMatch(/json/)
    })

})