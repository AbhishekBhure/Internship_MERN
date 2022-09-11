const express = require("express");
const { getAllCourses, createCourse } = require("../controllers/courseController");
const router = express.Router();

router.route("/courses").get(getAllCourses);


router.route("/course/new").post(createCourse);





module.exports = router