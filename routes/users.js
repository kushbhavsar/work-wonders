const express = require('express');
const router = require("express").Router();
const usersController = require("../controllers/usersController");
const passport = require('passport');
const User = require('../models/user');
//require('../config/passport')(passport);

router.post('/users', (req, res) => {
  console.log('user signup');

  const { email, password } = req.body
  console.log(req.body);
  // ADD VALIDATION
  User.findOne({ username: email }, (err, user) => {
      if (err) {
          console.log('User.js post error: ', err)
      } else if (user) {
          res.json({
              error: `Sorry, already a user with the username: ${username}`
          })
      }
      else {
          console.log('creating new user...');
          usersController.create(req, res);
          const newUser = new User({
              username: email,
              password: password
          })
          newUser.save((err, savedUser) => {
              if (err) return res.json(err)
              res.json(savedUser)
          })

      }
  })
})

router.post(
  'users/login',
  function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      username:req.user.email
    };
    res.send(userInfo);
  }
)

router.get('/users/login', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

// router.route("/users")
//   .get(usersController.findAll)
//   .post(usersController.create);


// router
//   .route("/users")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);


// router.get("/user", function(req, res) {
//   db.user.find({})
//     .then(function(dbuser) {
    
//       res.json(dbuser);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });

module.exports = router;
