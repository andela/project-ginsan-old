var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');
var keys = rootPath + '/keys.txt';
var localDb = 'mongodb://localhost:27017/cfh';
module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
<<<<<<< HEAD
    db: process.env.DB
=======
    db: process.env.MONGOHQ_URL || localDb
>>>>>>> 7b1a1f8ef42141677b28ff5d097ff8e4e8b9578c
};
