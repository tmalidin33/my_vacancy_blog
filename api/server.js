/** @format */
const express = require('express');
const Articles = require('./models/dbHelpers');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res) => {
    const string = `
	<h1>Welcome to the Blog server</h1>
	`;
    res.send(string);
});

server.post('/api/articles', (req, res) => {
    Articles.add(req.body)
        .then((article) => {
            res.status(200).json(article);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Cannot insert article' });
        });
});
server.get('/api/articles', (req, res) => {
    Articles.find(req.body)
        .then((articles) => {
            res.status(200).json(articles);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Cannot retrived articles' });
        });
});
server.get('/api/articles/:id', (req, res) => {
    const { id } = req.params;
    Articles.findById(id)
        .then((article) => {
            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: `Unable to perform operation` });
        });
});
server.delete('/api/articles/:id', (req, res) => {
    const { id } = req.params;
    Articles.remove(id)
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
});
server.patch('/api/articles/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Articles.update(id, changes)
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

module.exports = server;
