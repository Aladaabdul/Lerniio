const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserModelSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is  required"]
    },

    email: {
        type: String,
        unique: true,
        required: [true, "  email  is  required"]
    },

    password: {
        type: String,
        required: true
    },

    resetToken: {
        type: String,
        default: null
    },

    resetTokenExpires: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model("User", UserModelSchema);