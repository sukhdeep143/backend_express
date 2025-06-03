const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!!!"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Please enter your email id"],
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
});


module.exports = mongoose.model("User", userSchema);
