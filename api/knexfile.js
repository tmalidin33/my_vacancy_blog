// Update with your config settings.

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/blog_project.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run('PRAGMA foreign_keys = ON', done);
            },
        },
    },

    // test: {
    //     client: "sqlite3",
    //     connection: ":memory:",
    //     useNullAsDefault: true,
    //     migrations: {
    //       directory: './data/migrations',
    //     },
    //     seeds: {
    //       directory:'./data/seeds',
    //     }
    //   },
};
