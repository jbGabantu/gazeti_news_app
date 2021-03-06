const express = require("express");
const router = express.Router();

const weatherController = require("../controllers/weather.controller");

router.get("/", weatherController);

module.exports = router;
