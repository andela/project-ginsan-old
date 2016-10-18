/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Question Schema
 */
var NotificationSchema = new Schema({
    forUser: String,
    message: String,
    link:String
});


mongoose.model('Notification', NotificationSchema);