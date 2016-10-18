/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
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