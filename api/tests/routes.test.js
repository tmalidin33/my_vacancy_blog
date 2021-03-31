const config = {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: {
        directory: './data/migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
};
const knex = require('knex')(config);
const request = require('supertest');
const app = require('../server');
const assert = require('assert');

describe('Test Endpoints', () => {
    beforeAll(() => {
        return knex.migrate.latest().then(() => {
            knex.seed.run();
        });
        // you can here also seed your tables, if you have any seeding files
    });
    afterAll(() => {
        return knex.migrate.rollback().then(() => knex.destroy());
    });
    describe('Get endpoints', () => {
        it('should get articles', (done) => {
            request(app)
                .get('/api/articles')
                .set('Accept', 'application/json')
                .expect(200)
                .then((response) => {
                    assert(response.body.length, 20);
                    done();
                })
                .catch((err) => done(err));
        });
        it('should get article by id 1 ', (done) => {
            request(app).get('/api/articles/1').set('Accept', 'application/json').expect(200, done);
        });
        it('should not return an article with id unknown', (done) => {
            request(app)
                .get('/api/articles/sdfsdf')
                .set('Accept', 'application/json')
                .expect(404)
                .expect({ message: `Article with id 'sdfsdf' not found` })
                .catch((err) => done(err));
            done();
        });
    });
});
