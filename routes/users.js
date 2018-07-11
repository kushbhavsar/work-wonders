const express = require('express');
const router = require("express").Router();
const usersController = require("../controllers/usersController");
const passport = require('passport');
require('../config/passport')(passport);






router.route("/users")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);


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
