const express = require("express");
const router = express.Router();

const tourController = require("../controllers/tourControllers");

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router.route("/:id").get(tourController.getTour);

module.exports = router;
