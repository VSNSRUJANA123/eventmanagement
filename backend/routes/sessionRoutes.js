const express = require("express");
const { getSessions } = require("../controllers/sessionController");
const router = express.Router();

router.get("/sessions", getSessions);

module.exports = router;
