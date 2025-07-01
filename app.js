const express = require("express")

const cors = require('cors');
const userRouter = require("./routers/userRouter")
const app =express()


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/user', userRouter)
exports.app=app
