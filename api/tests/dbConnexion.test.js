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

describe('test suite description', () => {
    beforeAll(() => {
        return knex.migrate.latest();
        // you can here also seed your tables, if you have any seeding files
    });
    afterAll(() => {
        return knex.migrate.rollback().then(() => knex.destroy());
    });
    test('select users', async () => {
        let articles = await knex.from('articles').select('title');
        expect(articles.length).toEqual(0);
    });
});
