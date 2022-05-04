const express = require('express');
const router = express.Router();
const controller = require("../controller/webscrapping.controller")

router.get("/getTimeStories", controller.webScrapper)

module.exports = router;