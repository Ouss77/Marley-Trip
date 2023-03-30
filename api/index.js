import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser  from 'cookie-parser'

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to Mongodb");
    } catch (err) {
        throw err
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
})
mongoose.connection.on("connected", () => {
    console.log("Mongodb connected");
})

//Midleware
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
    //console.log("hi i am a middle")
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})


app.listen(8800, () => {
    connect()
    console.log("connected tp the port http://127.0.0.1:8800");
})