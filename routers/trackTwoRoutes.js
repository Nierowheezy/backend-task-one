const { Router } = require("express");
const { calculate } = require("../controllers/trackTwoController");

const router = Router();

router.post("/", calculate);

module.exports = router;
