const request = require('supertest');
const server = require('../api/server')

const db = require('../database/dbConfig');

describe('auth-router', () => {
   
})

 // beforeEach(async () => {
    //     await db('users').truncate()
    // })

    // describe('POST api/login', () => {
    //     it('returns status 404', () => {
    //         const user = {
    //             username: "admin",
    //             password: "password"
    //         }

    //         return request(server)
    //             .post('/login')
    //             .send(user)
    //             .then(res => expect(res.status).toBe(404))

    //     })

    //     it('returns status 500', () => {
    //         return request(server)
    //             .post('/api/signup')
    //             .then(res => expect(res.status).toBe(500))
    //     })

    //     it('returns JSON', () => {
    //         const user = {
    //             username: "jade",
    //             password: "jpassword"
    //         }

    //         return request(server)
    //         .post('/login')
    //         .send(user)
    //         .then(res => expect(res.type).toMatch(/json/i))
    //     })
    // })