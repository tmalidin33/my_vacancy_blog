const express = require('express');
const Articles = require('../models/dbHelpers');
const articlesController = require('../controllers/articlesController');
const { check, validationResult } = require('express-validator');

const router = express.Router();
const controller = articlesController();
const { validateArticle } = require('../middlewares/validator/articlesValidator');
const { validateComments } = require('../middlewares/validator/commentsValidator');

// endpoint /api/articles
router.route('/').post(validateArticle, controller.post).get(controller.get);

// endpoint /api/articles/:id
//Find by id before executing CRUD operation
router.use('/:id', (req, res, next) => {
    const { id } = req.params;
    Articles.findById(id)
        .then((article) => {
            if (article) {
                req.article = article;
                return next();
            } else {
                return res.status(404).json({ message: `Article with id '${id}' not found` });
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: `Unable to perform operation` });
        });
});
router
    .route('/:id')
    .get((req, res) => {
        res.status(200).json(req.article);
    })
    .delete((req, res) => {
        const { article } = req;
        Articles.remove(article.id)
            .then((count) => {
                if (count > 0) {
                    res.status(204).json({ message: 'Successfully deleted' });
                } else {
                    res.status(404).json({ message: 'Unable to locate record' });
                }
            })
            .catch((err) => {
                res.status(500).json({ message: `Unable to perform deletion` });
            });
    })
    .patch((req, res) => {
        const { article } = req;
        const changes = req.body;
        Articles.update(article.id, changes)
            .then((article) => {
                if (article) {
                    res.status(200).json(article);
                } else {
                    res.status(404).json({ message: 'Record not found' });
                }
            })
            .catch((err) => {
                res.status(500).json({ message: `Unable to perform update` });
            });
    });

// endpoint /api/articles/:id/comments
router
    .route('/:id/comments')
    .post(validateComments, (req, res) => {
        const { id } = req.params;
        const comment = req.body;

        if (!comment.article_id) {
            comment['article_id'] = parseInt(id, 10);
        }

        Articles.addComment(comment, id)
            .then((comment) => {
                res.status(200).json(comment);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Failed to add message' });
            });
    })
    .get((req, res) => {
        const { id } = req.params;
        Articles.findCommentByArticle(id)
            .then((comments) => {
                res.status(200).json(comments);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Unable to perform operation' });
            });
    });

module.exports = router;
