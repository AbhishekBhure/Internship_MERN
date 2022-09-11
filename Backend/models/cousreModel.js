const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Course Title"],
        trim: true
    },

    duration: {
        type: String,
        required: [true, "Please Enter Course Duration"]
    },

})

module.exports = mongoose.model("Course", courseSchema);