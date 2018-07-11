const express = require('express');
const router = require("express").Router();
// const db = require("../models");
const jobsController = require("../controllers/jobsController");

router.route("/jobs")
  .get(jobsController.findAll)
  .post(jobsController.create);

router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

// router.get("/jobs", (req, res) => {
//   db.Jobs.find({})
//     .then (dbjobs => {
    
//       res.json(dbjobs);
//     })
//     .catch (err => {
//       res.json(err);
//     });
// });


module.exports = router;
