const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = requires('cors')

const app = express()

// Req and Res with Json
app.use(express.json())

// Access extern ours API
app.use(cors())

//Connection wit DB
mongoose.connect(
    'mongodb+srv://ziegler:1405Lucas@firstcluster-jl3a2.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
    )

requireDir('./src/models/')


//Ready Routes.js
app.use('/api', require('./src/routes'))

//Listing Port localhost:3009
app.listen(3009)

