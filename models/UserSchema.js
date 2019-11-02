const Follow = require('../models/FollowSchema');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String
}, {collection: 'userCollection'});

UserSchema.methods.getFollowers = function() {
    var db = mongoose.connection;
    db.on('error'), console.error.bind(console, 'connection error: ');
    db.once('open', function () {
        
    });
};

UserSchema.methods.getFollowing = function() {
    var db = mongoose.connection;
    db.on('error'), console.error.bind(console, 'connection error: ');
    db.once('open', function () {

    });
}

module.exports = mongoose.model('userCollection', UserSchema);