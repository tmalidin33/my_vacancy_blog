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
    return db('users');
}
function findById(id) {
    return db('users')
        .where({ userId: Number(id) })
        .first();
}
async function add(post) {
    const [id] = await db('users').insert(post);
    return findById(id);
}
function update(id, post) {
    return db('users')
        .where({ userId: Number(id) })
        .update(post)
        .then(() => {
            return findById(id);
        });
}
function remove(id) {
    return db('users')
        .where({ userId: Number(id) })
        .del();
}
