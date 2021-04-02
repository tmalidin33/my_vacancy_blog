const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    findByUser,
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
function findByUser(user_id) {
    return db('articles').where({ author: user_id });
}
async function add(post) {
    const [id] = await db('articles').insert(post);
    return findById(id);
}
function update(id, post) {
    return db('articles')
        .where({ id })
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
