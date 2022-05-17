const express = require("express");
var router = express.Router();

// Routes to use
const home = require("../routes/home");

router.use(home);

module.exports = router;