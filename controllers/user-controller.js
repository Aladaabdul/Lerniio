const userModel = require("../model/User");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.JWT_TOKEN


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
        return res.status(400).json({ error: "User already exist! Login instead" })
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

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_TOKEN, { expiresIn: '1h' });

    return res.status(201).json({ user: user.username, token, message: "User created Successfully" })
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
        return res.status(400).json({ error: "No user found by this email! Signup" })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)

    if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Incorrect password or email! Try again" })
    }

    const token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, process.env.JWT_TOKEN, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'lax' });

    return res.status(200).json({ name: existingUser.username, token, message: "Login Successfully" })
}


async function forgotPassword(req, res) {
    const { email } = req.body;

    try {
        const existingUser = await userModel.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ error: "No user found by this email!" })
        }
        if (existingUser) {
            const token = uuid.v4();
            existingUser.resetToken = token;
            existingUser.resetTokenExpires = Date.now() + 3600000;
            const data = await existingUser.save();
            if (data) {
                res.status(200).json({ message: "Password reset email sent successfully" })

            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            });

            const mailOptions = {
                from: process.env.EMAIL,
                to: existingUser.email,
                subject: 'Password Reset Request',
                text: `Click on the following link to reset your password: http://localhost:8000/v1/api/user/resetpassword?token=${token}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: "Failed to send password reset email" });
                }
                return res.status(200).json({ message: 'Password reset email sent successfully' });
            });
        }

    } catch (error) {
        return console.log(error)
    }


}


async function resetPassword(req, res, next) {
    const { token, newPassword } = req.body;
    console.log(req.body);
    if (!newPassword) {
        return res.status(400).json({ error: " password is required" });
    }
    try {
        const existingUser = await userModel.findOne({
            resetToken: token,
            resetTokenExpires: { $gt: Date.now() }
        });

        if (!existingUser) {
            return res.status(400).json({ error: "Invalid or expired token" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        existingUser.password = hashedPassword;
        existingUser.resetToken = undefined;
        existingUser.resetTokenExpires = undefined;

        const savedUser = await existingUser.save();
        if (savedUser) {
            return res.status(200).json({ message: 'Password reset successful' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong, please try again" });
    }
}


module.exports = {
    getAllUser,
    createUser,
    Login,
    forgotPassword,
    resetPassword
}