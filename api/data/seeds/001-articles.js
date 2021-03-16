exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('articles')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('articles').insert([
                {
                    id: 1,
                    title: 'My first Article',
                    subtitle: 'Subtitle',
                    genre: 'Fiction',
                    desc: 'Lorem Ipsum ...',
                },
                {
                    id: 2,
                    title: 'My second Article',
                    subtitle: 'Subtitle',
                    genre: 'Fiction',
                    desc: 'Lorem Ipsum ...',
                },
                {
                    id: 3,
                    title: 'My third Article',
                    subtitle: 'Subtitle',
                    genre: 'Fiction',
                    desc: 'Lorem Ipsum ...',
                },
            ]);
        });
};
