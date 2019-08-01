const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

//iniciando o DB
mongoose.connect(
    'mongodb+srv://ziegler:1405Lucas@firstcluster-jl3a2.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
    )

requireDir('./src/models/')


//Rotas
app.use('/api', require('./src/routes'))

//Ouvindo a porta servidor
app.listen(3009)

