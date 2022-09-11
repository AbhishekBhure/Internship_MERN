const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should be atleast more than 4 characters"],
    },

    email: {
        type: String,
        required: [true, "Please Enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid email"]
    },

    password: {
        type: String,
        required: [true, "Please Enter your Password"],
        minLength: [8, "Password should be atleast 8 characters"],
        select: false,
    },
})

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//Compare Password
userSchema.methods.comparePassword = async function (password) {
    return await (password, this.password);
};

module.exports = mongoose.model("User", userSchema);