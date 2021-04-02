const express = require('express');
const Users = require('../models/dbUsersHelpers');
const Articles = require('../models/dbArticlesHelpers');
const usersController = require('../controllers/usersController');

const router = express.Router();
const controller = usersController();
const { validateUser } = require('../middlewares/validator/usersValidator');

// endpoint /api/users
router.route('/').post(validateUser, controller.post).get(controller.get);

// endpoint /api/users/:id
//Find by id before executing CRUD operation
router.use('/:id', (req, res, next) => {
    const { id } = req.params;
    Users.findById(id)
        .then((user) => {
            if (user) {
                req.user = user;
                return next();
            } else {
                return res.status(404).json({ message: `User with id '${id}' not found` });
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: `Unable to perform operation` });
        });
});
router
    .route('/:id')
    .get((req, res) => {
        res.status(200).json(req.user);
    })
    .delete((req, res) => {
        const { user } = req;
        Users.remove(user.userId)
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
        const { user } = req;
        const changes = req.body;
        Users.update(user.userId, changes)
            .then((user) => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: 'Record not found' });
                }
            })
            .catch((err) => {
                res.status(500).json({ message: `Unable to perform update` });
            });
    });

// endpoint /api/users/:id/articles
router.route('/:id/articles').get((req, res) => {
    Articles.findByUser(id)
        .then((articles) => {
            res.status(200).json(articles);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Unable to perform operation' });
        });
});

module.exports = router;
