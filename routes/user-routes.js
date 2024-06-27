const express = require("express")
const userController = require("../controllers/user-controller.js");

const userRouter = express.Router();


// Get all users route
userRouter.get("/", userController.getAllUser);

// Create a new user route
userRouter.post("/register", userController.createUser);

// Login a existing User
userRouter.post("/login", userController.Login);

userRouter.post("/forgotpassword", userController.forgotPassword);
userRouter.post("/resetpassword", userController.resetPassword);

module.exports = userRouter