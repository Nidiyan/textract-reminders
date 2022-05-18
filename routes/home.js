const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    console.log("Hey");
    res.send("Hi");
});

module.exports = router;