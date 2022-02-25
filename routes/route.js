const express = require("express");

const router = express.Router();
const dataController = require("../controller/data");

router.get("/data", dataController.fetchData);

module.exports = router;
