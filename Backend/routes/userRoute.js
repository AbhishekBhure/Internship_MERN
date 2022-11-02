const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  googleLoginUser,
} = require("../controllers/userController");
const passport = require("passport");

// router.route("/users").get(getAllUsers);

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
// router.route("/googleLogin").post(googleLoginUser);

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// router.get(
// "/login",
//   passport.authenticate("google"),
//   (req, res, next) => {
//     res.send("logged in");
//   }
//   passport.authenticate("google", {
//     scope: ["profile"],
//     successRedirect: process.env.FRONTEND_URL,
//   })
// );

router.route("/logout").get(logout);

module.exports = router;
