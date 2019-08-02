const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()

// Req and Res with Json
app.use(express.json())

// Access extern ours API
app.use(cors())

//Connection wit DB
mongoose.connect(
    'mongodb+srv://test:test@firstcluster-jl3a2.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
    )
//import all of Path
requireDir('./src/models/')


//Ready Routes.js
app.use('/api', require('./src/routes'))

//Listing Port localhost:3009
app.listen(3009)

