require('dotenv').config();
const server = require('./server.js');

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`\n****_Server running on port: ${port}_****\n`);
});
