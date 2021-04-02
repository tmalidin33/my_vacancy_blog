const Users = require('../models/dbUsersHelpers');

function usersController() {
    function post(req, res) {
        Users.add(req.body)
            .then((user) => {
                return res.status(201).json(user);
            })
            .catch((err) => {
                return res.status(500).json({ message: 'Cannot insert user' });
            });
    }
    function get(req, res) {
        Users.find(req.body)
            .then((users) => {
                const returnUsers = users.map((user) => {
                    const newUser = user;
                    newUser.links = {};
                    newUser.links.self = `http://${req.headers.host}/api/users/${user.userId}`;
                    return newUser;
                });
                return res.status(200).json(returnUsers);
            })
            .catch((err) => {
                return res.status(500).json({ message: 'Cannot retrived users' });
            });
    }
    return { get, post };
}
module.exports = usersController;
