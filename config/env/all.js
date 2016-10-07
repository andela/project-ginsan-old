var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');
var keys = rootPath + '/keys.txt';
module.exports = {
	root: rootPath,
	port: process.env.PORT || 3001,
    db: process.env.DB_URL || 'mongodb://localhost:27017/cfh'
};
