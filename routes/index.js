var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
const  jwt  =  require('jsonwebtoken');

const SECRET_KEY = 'secretkey23456';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userslist', function(req, res, next) {
  var db = require('../db');
  var users = db.Mongoose.model('userCollection', db.UserSchema, 'userCollection');
  users.find({}).lean().exec(
    function (e, docs) {
      res.render('userlist', { "userlist": docs});
    }
  )
});

router.get('/searchUser/:term', function(req, res, next) {
  var db = require('../db');
  var term = req.query.term;
  var users = db.Mongoose.model('userCollection', db.UserSchema, 'userCollection');
  users.find({ name: term }).lean().exec(
    function (e, docs) {
      res.render('userlist', { "userlist": docs});
    }
  )
});

router.post('/register', function (req, res) {

  var db = require('../db');
  var userName = req.body.username;
  var email = req.body.email;

  var Users = db.Mongoose.model('userCollection', db.UserSchema, 'userCollection');
  var user = new Users({ username: userName, email: userEmail });
  
  user.save(function (err) {
    if (err) return res.status(500).send("Server error!");
    
    findUserByEmail(email, (err, user) => {
       if (err) return res.status(500).send("Server error!");

       var expiresIn = 24 * 60 * 60;
       var accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
         expiresIn: expiresIn
       });
       
       res.status(200).send({ "user": user, "access_token": accessToken, "expiresIn": expiresIn });
    });
  })

});

router.post('/follow', function (req, res) {
  var db = require('../db');
  var follower_id = req.body.follower_id;
  var following_id = req.body.following_id;
  var follow = req.body.follow;

  var Follows = db.Mongoose.model('followCollection', db.FollowSchema, 'followCollection');
  var newFollow = new Follows({ follower_id: follower_id, following_id: following_id });
 
  follow.save(function(err) {
    if (err) return res.status(500).send('Server error!');

    res.status(200).send({ 'message': 'follow/unfollow mande sucessfully' });
  });

});

router.post('/login', function(req, res) {
  var db = require('../db');
  var login = req.body.login;
  var password = bcrypt.hashSync(req.body.password);

  findUserByEmail(email, (err, user) => {
    if (err) return res.status(500).send('Server error!');
    if (!user) return res.status(500).send('User not found!');

    var result = bcrypt.compareSync(password, user.password);

    if (!result) return res.status(401).send('Password is not valid');

    var expiresIn = 24 * 60 * 60;
    var accessToken = jwt.sign({ id: user, 'access_token': accessToken, 'expires_in': expiresIn });
  });

  res.status(200).send({ 'user': user, 'access_token': accessToken, 'expires_in': expiresIn });

});

findUserByEmail = (email, cb) => {
  return () => {
    cb(err, row);
  }
};

module.exports = router;
