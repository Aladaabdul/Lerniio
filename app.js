const express = require("express");
const PORT = process.env.PORT || 8000
const cookieParser = require('cookie-parser');
const { connectTomongo } = require("./db")
const userRouter = require("./routes/user-routes")
const schoolRouter = require("./routes/school-routes")

const app = express()

connectTomongo();
app.use(cookieParser())
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/v1/api/user", userRouter);
app.use("/v1/api/school", schoolRouter);





app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})