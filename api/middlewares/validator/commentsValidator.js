const { check, validationResult } = require('express-validator');

exports.validateComments = [
    check('sender').isLength({ min: 1 }).withMessage('Sender cannot be empty'),
    check('text').isLength({ min: 1 }).withMessage('Comment cannot be empty'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
        next();
    },
];
