exports.up = function (knex) {
    return knex.schema
        .createTable('articles', (tbl) => {
            tbl.increments(); //'id' field
            tbl.text('title', 128).notNullable();
            tbl.text('subtitle', 128);
            tbl.text('genre', 30);
            tbl.text('desc', 5000).notNullable();
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
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
    return knex.schema.dropTable('articles').dropTable('comments');
};
