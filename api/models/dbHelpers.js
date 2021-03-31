const knex = require('knex');
const config = require('../knexfile');
// let db = null;
// if (process.env.NODE_ENV === 'test') {
//     db = knex(config.test);
// } else {
//     db = knex(config.development);
// }
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findCommentById,
    addComment,
    // addCommentToComment,
    findCommentByArticle,
    removeComment,
};

function find() {
    return db('articles');
}
function findById(id) {
    return db('articles')
        .where({ id: Number(id) })
        .first();
}
async function add(post) {
    const [id] = await db('articles').insert(post);
    return findById(id);
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
function findCommentById(id) {
    return db('comments')
        .where({ id: Number(id) })
        .first();
}
function findCommentByArticle(article_id) {
    return db('comments').where({ article_id });
}
async function addComment(newComment, article_id) {
    const [id] = await db('comments').where({ article_id }).insert(newComment);
    return findCommentById(id);
}

function removeComment(id) {
    return db('comments')
        .where({ id: Number(id) })
        .del();
}
// async function addCommentToComment(newComment, article_id, comment_id) {
//     const [id] = await db('comments').where({ article_id, comment_id }).insert(newComment);
//     return findCommentById(id);
// }
