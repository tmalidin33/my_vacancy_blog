/** @format */
const express = require('express');
const articlesRouter = require('./routes/articlesRoutes');
const commentsRouter = require('./routes/commentsRoutes');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Blog server</h1>');
});

server.use('/api/articles', articlesRouter);
server.use('/api/comments', commentsRouter);

module.exports = server;
