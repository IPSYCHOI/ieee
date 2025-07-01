const express = require("express")

const cors = require('cors');
const app =express()


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
exports.app=app
