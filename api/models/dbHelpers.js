const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('articles');
}
function findById(id) {
    return db('articles')
        .where({ id: Number(id) })
        .first();
}
function add(post) {
    return db('articles')
        .insert(post)
        .then((ids) => ({ id: ids[0] }));
}
function update(id, post) {
    return db('articles')
        .where({ id })
        .update('updated_at', knex.fn.now())
        .update(post)
        .then(() => {
            return findById(id);
        });
}
function remove(id) {
    return db('articles')
        .where({ id: Number(id) })
        .del();
}
