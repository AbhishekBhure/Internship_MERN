const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
// const bodyParser = require("body-parser ")

const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser())
// app.use(bodyParser.urlencoded({ extends: true }));

//Route imports
const courses = require("./routes/courseRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", courses)
app.use("/api/v1", user)

// Middleware for error
app.use(errorMiddleware);

module.exports = app