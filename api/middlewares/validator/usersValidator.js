const { check, validationResult } = require('express-validator');

exports.validateUser = [
    check('first_name')
        .not()
        .isEmpty()
        .withMessage('First Name can not be empty!')
        .bail()
        .isAlpha()
        .withMessage('First Name must be alpha!')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Minimum 3 characters required!')
        .bail(),
    check('last_name')
        .not()
        .isEmpty()
        .withMessage('Last Name can not be empty!')
        .bail()
        .isAlpha()
        .withMessage('Last Name must be alpha!')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Minimum 3 characters required!')
        .bail(),
    check('birthday').not().isEmpty().withMessage('Birthday can not be empty!').bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
        next();
    },
];
