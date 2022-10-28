const { Router } = require("express");
// const expenseRouter = require("./expenseRoutes");
const trackOneRouter = require("./trackOneRoutes");
// const userRouter = require("./userRoutes");
const router = Router();

// router.use("/user", userRouter);
// router.use("/expense", expenseRouter);
router.use("/getdata", trackOneRouter);

module.exports = router;
