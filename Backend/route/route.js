
const express = require("express");
// const tokenRoutes = require("./token.route");
const userRoute = require("./user/userRoute");


const router = express.Router();

// router.use("/token", tokenRoutes);
router.use("/user", userRoute);


module.exports = router;
