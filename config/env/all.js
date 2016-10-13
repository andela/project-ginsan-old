var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');
var keys = rootPath + '/keys.txt';
<<<<<<< HEAD
=======
var localDb = '';
>>>>>>> 663c66ad9289974562ba12fd66cfc1a54fd241c3
module.exports = {
	root: rootPath,
	port: process.env.PORT || 3001,
    db: process.env.DB_URL || 'mongodb://localhost:27017/cfh'
};
