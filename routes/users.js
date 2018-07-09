const express = require('express');
const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');
require('../config/passport')(passport);






router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
