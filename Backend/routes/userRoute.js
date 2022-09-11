const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout, googleLoginUser } = require("../controllers/userController");

// router.route("/users").get(getAllUsers);


router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/googleLogin").post(googleLoginUser);

router.route("/logout").get(logout);




module.exports = router