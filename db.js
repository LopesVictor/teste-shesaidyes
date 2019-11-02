var mongoose = require('mongoose');
var userSchema = require('../models/UserSchema')
var followSchema = require('../models/FollowSchema')

mongoose.connect('mongodb://localhost:27017/shesaidyesdb');

module.exports = { Mongoose: mongoose, UserSchema: userSchema, FollowSchema: followSchema };