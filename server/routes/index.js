const express = require("express"),
  router = express.Router();
const test = require("./testApi");
console.log("api");
router.use("/test", test);
module.exports = router;
