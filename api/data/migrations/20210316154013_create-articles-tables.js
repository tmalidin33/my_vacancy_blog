exports.up = function (knex) {
    return knex.schema
        .createTable('users', (tbl) => {
            tbl.increments('userId');
            tbl.string('first_name').notNullable();
            tbl.string('last_name').notNullable();
            tbl.string('picture');
            tbl.text('profession');
            tbl.date('birthday').notNullable();
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('articles', (tbl) => {
            tbl.increments(); //'id' field
            tbl.text('title', 128).notNullable();
            tbl.text('subtitle', 128);
            tbl.text('genre', 30);
            tbl.text('desc', 5000).notNullable();
            tbl.string('image_url');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
            tbl.integer('author')
                .unsigned()
                .notNullable()
                .references('userId')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

        .createTable('comments', (tbl) => {
            tbl.increments(); //'id' field
            tbl.string('sender').notNullable().index();
            tbl.text('text').notNullable();
            tbl.timestamp('created_at').defaultTo(knex.fn.now());

            //Foreign key info to 'articles' table
            tbl.integer('article_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('articles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('comment_id')
                .unsigned()
                .references('id')
                .inTable('comments')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('articles')
        .dropTableIfExists('comments');
};
