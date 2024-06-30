const express = require("express");
const PORT = process.env.PORT || 8000
const cookieParser = require('cookie-parser');
const cors = require('cors')
const { connectTomongo } = require("./db")
const userRouter = require("./routes/user-routes")
const schoolRouter = require("./routes/school-routes")

const app = express()

connectTomongo();

const corsOrigin = {
    origin: 'https://cute-mint-shrill-sun-production.pipeops.app', //process.env.FRONTEND_URL,    //['http://localhost:5173'], //or whatever port your frontend is using
    credentials: true,
}
app.use(cors(corsOrigin));

//app.use(cors())
app.use(cookieParser())
app.use(express.json())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use("/v1/api/user", userRouter);
app.use("/v1/api/school", schoolRouter);





app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})