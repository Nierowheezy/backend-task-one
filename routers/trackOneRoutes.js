const { Router } = require("express");
const { getData } = require("../controllers/trackOneController");

const authRouter = Router();

authRouter.get("/", getData);

module.exports = authRouter;
