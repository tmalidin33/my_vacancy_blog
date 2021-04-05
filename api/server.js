/** @format */
const express = require('express');
const articlesRouter = require('./routes/articlesRoutes');
const commentsRouter = require('./routes/commentsRoutes');
const usersRouter = require('./routes/usersRoutes');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the Blog server !</h1>');
});

server.use('/api/articles', articlesRouter);
server.use('/api/comments', commentsRouter);
server.use('/api/users', usersRouter);

module.exports = server;
