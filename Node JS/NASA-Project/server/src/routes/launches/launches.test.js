const request = require('supertest');
const app = require('../../app')

describe('launches GET /launches', () => {
    test('It should respond with 200 status', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('launches POST /launches', () => {

    const completeLaunchData = {
        mission: 'USS',
        rocket: 'NIK 7',
        target: 'kepler-186 f',
        launchDate: 'January 2, 2028'
    }

    const launchDataWuthoutDate = {
        mission: 'USS',
        rocket: 'NIK 7',
        target: 'kepler-186 f'
    }
    test('It should respond with 201 status', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201)

        const requestDate =new Date (completeLaunchData.launchDate).valueOf();
        const responseDate = new Date (response.body.launchDate).valueOf();

        expect(responseDate).toBe(requestDate)
            expect(response.body).toMatchObject(launchDataWuthoutDate)
    })
})