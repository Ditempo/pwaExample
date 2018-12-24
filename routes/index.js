const express = require("express"),
  router = express.Router();
const controller = require("./Api.controller");
router.route("/course").get(controller.getCourse);
module.exports = router;
