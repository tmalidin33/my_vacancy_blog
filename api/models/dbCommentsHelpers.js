const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findByArticle,
    // addCommentToComment,
};
function find() {
    return db('comments');
}
function findById(id) {
    return db('comments')
        .where({ id: Number(id) })
        .first();
}
function findByArticle(article_id) {
    return db('comments').where({ article_id });
}
async function add(newComment, article_id) {
    const [id] = await db('comments').where({ article_id }).insert(newComment);
    return findCommentById(id);
}
function update(id, post) {
    return db('comments')
        .where({ id })
        .update(post)
        .then(() => {
            return findById(id);
        });
}
function remove(id) {
    return db('comments')
        .where({ id: Number(id) })
        .del();
}
// async function addCommentToComment(newComment, article_id, comment_id) {
//     const [id] = await db('comments').where({ article_id, comment_id }).insert(newComment);
//     return findCommentById(id);
// }
