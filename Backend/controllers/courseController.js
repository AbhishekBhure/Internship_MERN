const Course = require("../models/cousreModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
// const error = require("../middleware/error")



//create Course
exports.createCourse = catchAsyncErrors(
    async (req, res, next) => {

        const course = await Course.create(req.body);
        res.status(201).json({
            success: true,
            course
        })
    }
)



//get ALL COURSES
exports.getAllCourses = catchAsyncErrors(
    async (req, res) => {
        const courses = await Course.find();
        res.status(200).json({
            success: true,
            courses
        })
    }
)