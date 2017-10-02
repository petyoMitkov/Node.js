const path = require('path');

let rootPath = path.normalize(path.join(__dirname, '/../'));

module.exports = {
        url: "mongodb://localhost:27017/example-mongodb",
        port: 1337
    };