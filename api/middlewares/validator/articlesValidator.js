const { check, validationResult } = require('express-validator');

exports.validateArticle = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('Title can not be empty!')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Minimum 3 characters required!')
        .bail(),
    check('genre').isAlpha().withMessage('Genre must contains alpha caracters!').bail(),
    check('desc').not().isEmpty().withMessage('Article text cannot be empty!').bail(),
    check('author').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
        next();
    },
];
