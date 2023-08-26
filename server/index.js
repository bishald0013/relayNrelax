import dotenv from 'dotenv'
import express from 'express';
import connectDB from './config/config.js';
import userRouter from './route/userRoute.js';
dotenv.config()

const app = express()

connectDB()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.json());


app.use('/api/user', userRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
})