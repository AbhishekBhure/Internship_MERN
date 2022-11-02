const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const { connectPassport } = require("./utils/Provider");
const session = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");

app.use(express.json());

//config
dotenv.config({
  path: "backend/config/config.env",
});

// Middleware for error
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

//Route imports
const courses = require("./routes/courseRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", courses);
app.use("/api/v1", user);

app.use(errorMiddleware);
module.exports = app;
