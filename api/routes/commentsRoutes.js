const express = require('express');
const Comments = require('../models/dbCommentsHelpers');

const router = express.Router();

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Comments.remove(id)
        .then((count) => {
            if (count > 0) {
                res.status(204).json({ message: `Message with id ${id} successfully deleted` });
            } else {
                res.status(404).json({ message: 'Unable to locate record' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: `Unable to perform deletion` });
        });
});

module.exports = router;
