exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('articles')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('articles').insert([
                {
                    id: 1,
                    title: 'Bride Flight',
                    subtitle: 'Nunc rhoncus dui vel sem.',
                    genre: 'Drama',
                    desc:
                        'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 10,
                },
                {
                    id: 2,
                    title: 'Afterschool',
                    subtitle: 'Nulla facilisi.',
                    genre: 'Drama',
                    desc: 'Curabitur convallis.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 3,
                },
                {
                    id: 3,
                    title: "It's a Wonderful Life",
                    subtitle: 'Nulla ac enim.',
                    genre: 'Fantasy',
                    desc:
                        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 3,
                },
                {
                    id: 4,
                    title: 'Delta',
                    subtitle: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
                    genre: 'Drama',
                    desc:
                        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 6,
                },
                {
                    id: 5,
                    title: 'My Name Is Nobody (Il Mio nome è Nessuno)',
                    subtitle:
                        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
                    genre: 'Western',
                    desc:
                        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 8,
                },
                {
                    id: 6,
                    title: 'How to Be',
                    subtitle: 'Donec semper sapien a libero.',
                    genre: 'Comedy',
                    desc:
                        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 4,
                },
                {
                    id: 7,
                    title: 'Ripe',
                    subtitle: 'Maecenas pulvinar lobortis est.',
                    genre: 'Drama',
                    desc:
                        'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 9,
                },
                {
                    id: 8,
                    title: 'Asfalttilampaat',
                    subtitle: 'Etiam vel augue.',
                    genre: 'Drama',
                    desc:
                        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 10,
                },
                {
                    id: 9,
                    title: 'Broadway Bill',
                    subtitle: 'Curabitur convallis.',
                    genre: 'Comedy',
                    desc:
                        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 5,
                },
                {
                    id: 10,
                    title: 'Welcome Mr. Marshall (Bienvenido Mister Marshall)',
                    subtitle:
                        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
                    genre: 'Comedy',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 7,
                },
                {
                    id: 11,
                    title: 'Pussy Riot: A Punk Prayer',
                    subtitle: 'Sed vel enim sit amet nunc viverra dapibus.',
                    genre: 'Documentary',
                    desc: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 2,
                },
                {
                    id: 12,
                    title: 'Lap Dance',
                    subtitle: 'Mauris lacinia sapien quis libero.',
                    genre: 'Drama',
                    desc: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 8,
                },
                {
                    id: 13,
                    title: 'Great Sinner, The',
                    subtitle: 'Etiam justo.',
                    genre: 'Drama',
                    desc: 'Suspendisse potenti.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 9,
                },
                {
                    id: 14,
                    title: 'Zoot Suit',
                    subtitle: 'Donec semper sapien a libero.',
                    genre: 'Musical',
                    desc:
                        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 7,
                },
                {
                    id: 15,
                    title: 'Tokyo Chorus (Tôkyô no kôrasu)',
                    subtitle: 'Morbi quis tortor id nulla ultrices aliquet.',
                    genre: 'Comedy',
                    desc:
                        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 4,
                },
                {
                    id: 16,
                    title: 'Turandot Project, The',
                    subtitle: 'Morbi a ipsum.',
                    genre: 'Documentary',
                    desc:
                        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 8,
                },
                {
                    id: 17,
                    title: 'Public Sex',
                    subtitle: 'Quisque porta volutpat erat.',
                    genre: 'Comedy',
                    desc:
                        'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 10,
                },
                {
                    id: 18,
                    title: 'Bob le Flambeur',
                    subtitle: 'Integer non velit.',
                    genre: 'Crime',
                    desc:
                        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 6,
                },
                {
                    id: 19,
                    title: 'Follow Me Quietly',
                    subtitle:
                        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
                    genre: 'Film-Noir',
                    desc: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 9,
                },
                {
                    id: 20,
                    title: 'Get Crazy',
                    subtitle:
                        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
                    genre: 'Comedy',
                    desc:
                        'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
                    image_url: 'https://source.unsplash.com/1600x900/?nature',
                    author: 7,
                },
            ]);
        });
};
