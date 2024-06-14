const express = require("express")
const userController = require("../controllers/user-controller");

const userRouter = express.Router();


// Get all users route
userRouter.get("/", userController.getAllUser);

// Create a new user route
userRouter.post("/register", userController.createUser);

// Login a existing User
userRouter.post("/login", userController.Login);

module.exports = userRouter