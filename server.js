/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    passport = require('passport'),
    logger = require('mean-logger'),
    io = require('socket.io');


//Load configurations
require('dotenv').config();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose');

//Bootstrap db connection
var dbOptions = {
    server: {
        auto_reconnect: true,
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    autoReconnect: true,
};

//
mongoose.connect(config.db, dbOptions);

//Bootstrap models
(function walk(path) {
    fs.readdirSync(path).forEach(function (file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js|coffee)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
}(__dirname + '/app/models'));

//bootstrap passport config
require('./config/passport')(passport);

//express settings
var app = express();

//
require('./config/express')(app, passport, mongoose);

//Bootstrap routes
require('./config/routes')(app, passport, auth);

//Server contract that supports angular2 html5mode
app.use(function(req  , res, next) {
    var filePath = path.join(__dirname, 'public/index.html');
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

//Start the app by listening on <port>
var port = config.port;
var server = app.listen(port);
var ioObj = io.listen(server, {
    log: false
});

//game logic handled here
require('./config/socket/socket')(ioObj);
console.log('Express app started on port ' + port);

//Initializing logger
logger.init(app, passport, mongoose);