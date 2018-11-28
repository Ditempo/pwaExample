const express = require("express"),
  router = express.Router();
const testApi = require("./testApi.controller");
router.route("/course").get(testApi.getCourse);
module.exports = router;
