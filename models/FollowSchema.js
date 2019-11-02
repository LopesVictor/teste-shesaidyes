const User = require('../models/UserSchema');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

var followSchema = new mongoose.Schema({
    follower_id: { type: Schema.Types.ObjectId, ref: 'userCollection' },
    following_id: { type: Schema.Types.ObjectId, ref: 'userCollection' }
}, {collection: 'followSchema'});



module.exports = mongoose.model('followSchema', UserSchema);