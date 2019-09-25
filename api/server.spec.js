const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    //Testing Server GET Request
    describe('GET /', () => {

        it('returns 200 OK', () => {//testing router http status
            return request(server)
                .get('/')
                .then(res => {
                // expect(res.status).toBe(500);
                expect(res.status).toBe(200);
            });
        });
        
        it("should return { api: 'up' } ", () => {//body request type
            return request(server)
                .get('/')
                .then(res => {
                    // expect(res.body.api).toBe('done')
                    expect(res.body.api).toBe('up')
                    expect(res.body).toEqual({ api: 'up' })
                })
        });

        it('returns JSON', done => {//testing data type being returned
            return request(server)
                .get('/')
                .then(res => {
                // expect(res.type).toMatch(/xml/i);
                expect(res.type).toMatch(/json/i);
                done();
            });
        });
    });
});
