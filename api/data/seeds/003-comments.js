exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('comments')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('comments').insert([
                {
                    id: 1,
                    sender: 'Brook Slograve',
                    text: 'Nullam varius.',
                    article_id: 12,
                },
                {
                    id: 2,
                    sender: 'Ernesto Cowap',
                    text:
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    article_id: 2,
                },
                {
                    id: 3,
                    sender: 'Rosene Cavnor',
                    text:
                        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
                    article_id: 17,
                },
                {
                    id: 4,
                    sender: 'Ricardo Barnhill',
                    text:
                        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
                    article_id: 14,
                },
                {
                    id: 5,
                    sender: 'Magdaia Dupoy',
                    text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
                    article_id: 17,
                },
                {
                    id: 6,
                    sender: 'Binnie Barlas',
                    text: 'Nam tristique tortor eu pede.',
                    article_id: 19,
                },
                {
                    id: 7,
                    sender: 'Suzie Gaunt',
                    text:
                        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
                    article_id: 1,
                },
                {
                    id: 8,
                    sender: 'Jonah Ary',
                    text: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
                    article_id: 6,
                },
                {
                    id: 9,
                    sender: 'Ode McGeagh',
                    text: 'Proin interdum mauris non ligula pellentesque ultrices.',
                    article_id: 3,
                },
                {
                    id: 10,
                    sender: 'Livvie Atkinson',
                    text: 'Ut tellus. Nulla ut erat id mauris vulputate elementum.',
                    article_id: 14,
                },
                {
                    id: 11,
                    sender: 'Giacopo Eastwell',
                    text: 'Cras pellentesque volutpat dui.',
                    article_id: 9,
                },
                {
                    id: 12,
                    sender: 'Hussein Norrie',
                    text:
                        'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    article_id: 16,
                },
                {
                    id: 13,
                    sender: 'Teodora Stretton',
                    text:
                        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
                    article_id: 12,
                },
                {
                    id: 14,
                    sender: 'Mariann Vasilov',
                    text:
                        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
                    article_id: 13,
                },
                {
                    id: 15,
                    sender: 'Oralie Pemble',
                    text: 'Integer tincidunt ante vel ipsum.',
                    article_id: 8,
                },
                {
                    id: 16,
                    sender: 'Josey Winstone',
                    text: 'In sagittis dui vel nisl.',
                    article_id: 15,
                },
                {
                    id: 17,
                    sender: 'Dagny Gueny',
                    text: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
                    article_id: 15,
                },
                {
                    id: 18,
                    sender: 'Darci Larman',
                    text: 'Donec semper sapien a libero. Nam dui.',
                    article_id: 9,
                },
                {
                    id: 19,
                    sender: 'Cybil Hanselmann',
                    text:
                        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
                    article_id: 2,
                },
                {
                    id: 20,
                    sender: 'Myrle Votier',
                    text: 'Morbi non quam nec dui luctus rutrum.',
                    article_id: 16,
                },
                {
                    id: 21,
                    sender: 'Jsandye Curryer',
                    text: 'Pellentesque at nulla. Suspendisse potenti.',
                    article_id: 18,
                },
                {
                    id: 22,
                    sender: 'Ariel Musselwhite',
                    text:
                        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
                    article_id: 10,
                },
                {
                    id: 23,
                    sender: 'Leonie Castletine',
                    text:
                        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
                    article_id: 19,
                },
                {
                    id: 24,
                    sender: 'Ianthe Itzkin',
                    text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                    article_id: 4,
                },
                {
                    id: 25,
                    sender: 'Roxie Truluck',
                    text:
                        'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
                    article_id: 9,
                },
                {
                    id: 26,
                    sender: 'Ivy Cudiff',
                    text: 'Fusce posuere felis sed lacus.',
                    article_id: 14,
                },
                {
                    id: 27,
                    sender: 'Amber Tubridy',
                    text: 'Proin risus. Praesent lectus.',
                    article_id: 1,
                },
                {
                    id: 28,
                    sender: 'Angy Haps',
                    text:
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    article_id: 2,
                },
                {
                    id: 29,
                    sender: 'Nickolai Kimblen',
                    text:
                        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
                    article_id: 15,
                },
                {
                    id: 30,
                    sender: 'Merl Renols',
                    text:
                        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
                    article_id: 15,
                },
                {
                    id: 31,
                    sender: 'Alfie Feaver',
                    text: 'In eleifend quam a odio. In hac habitasse platea dictumst.',
                    article_id: 6,
                },
                {
                    id: 32,
                    sender: 'Kristel Paraman',
                    text:
                        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
                    article_id: 20,
                },
                {
                    id: 33,
                    sender: 'Guglielmo Heinle',
                    text: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
                    article_id: 18,
                },
                {
                    id: 34,
                    sender: 'Issiah Jeynes',
                    text: 'Curabitur at ipsum ac tellus semper interdum.',
                    article_id: 13,
                },
                {
                    id: 35,
                    sender: 'Lonny Sherborn',
                    text: 'Morbi non lectus.',
                    article_id: 4,
                },
                {
                    id: 36,
                    sender: 'Nathaniel Addicote',
                    text:
                        'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
                    article_id: 12,
                },
                {
                    id: 37,
                    sender: 'Buffy Eskell',
                    text:
                        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
                    article_id: 16,
                },
                {
                    id: 38,
                    sender: 'Franchot Langran',
                    text: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
                    article_id: 6,
                },
                {
                    id: 39,
                    sender: 'Zack Salvage',
                    text:
                        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
                    article_id: 6,
                },
                {
                    id: 40,
                    sender: 'Kerwin Boswood',
                    text: 'Quisque id justo sit amet sapien dignissim vestibulum.',
                    article_id: 6,
                },
                {
                    id: 41,
                    sender: 'Reinhold Costy',
                    text: 'Aliquam quis turpis eget elit sodales scelerisque.',
                    article_id: 3,
                },
                {
                    id: 42,
                    sender: 'Gena Eccott',
                    text:
                        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                    article_id: 4,
                },
                {
                    id: 43,
                    sender: 'Farleigh Oiller',
                    text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                    article_id: 12,
                },
                {
                    id: 44,
                    sender: 'Annette Curme',
                    text: 'Nunc purus. Phasellus in felis.',
                    article_id: 9,
                },
                {
                    id: 45,
                    sender: 'Eolande Gosney',
                    text:
                        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
                    article_id: 14,
                },
                {
                    id: 46,
                    sender: 'Amby Ellesmere',
                    text: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
                    article_id: 8,
                },
                {
                    id: 47,
                    sender: 'Guilbert Kenwell',
                    text:
                        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
                    article_id: 2,
                },
                {
                    id: 48,
                    sender: 'Graeme Pinch',
                    text: 'Etiam vel augue.',
                    article_id: 7,
                },
                {
                    id: 49,
                    sender: 'Hertha Magrane',
                    text: 'Curabitur at ipsum ac tellus semper interdum.',
                    article_id: 8,
                },
                {
                    id: 50,
                    sender: 'Corrine Sides',
                    text: 'Ut at dolor quis odio consequat varius.',
                    article_id: 3,
                },
            ]);
        });
};
