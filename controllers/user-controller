const userModel = require("../model/User");
const bcrypt = require("bcryptjs");


// get all users logic
async function getAllUser(req, res) {

    let users
    try {
        users = await userModel.find()
    } catch (error) {
        return console.log(error)
    }

    if (!users) {
        return res.status(404).json({ message: "No user found" })
    }

    return res.status(200).json({ users })
}

// Create a new user
async function createUser(req, res) {
    const { username, email, password } = req.body;

    let existingUser;

    // Check if user already exist using Email. Email field is set to Unique
    try {
        existingUser = await userModel.findOne({ email })
    } catch (error) {
        return console.log(error)
    }

    if (existingUser) {
        return res.status(400).json({ message: "User already exist! Login instead" })
    }

    //Users password are hashed in database
    const hashedpassword = bcrypt.hashSync(password)

    const user = new userModel({
        username,
        email,
        password: hashedpassword,
    });

    try {
        await user.save()
    } catch (error) {
        return console.log(error)
    }

    return res.status(201).json({ user, message: "User created Successfully" })
}


// Login logic
async function Login(req, res) {
    const { email, password } = req.body

    let existingUser;
    try {
        existingUser = await userModel.findOne({ email })
    } catch (error) {
        return console.log(error)
    }

    if (!existingUser) {
        return res.status(400).json({ message: "No user found by this email! Signup" })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect password or email! Try again" })
    }

    return res.status(200).json({ message: "Login Successfully" })
}



module.exports = {
    getAllUser,
    createUser,
    Login
}