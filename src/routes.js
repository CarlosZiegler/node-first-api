const express = require('express')
const routes = express.Router()
const Productcontroller = require('./controllers/ProductController')

//Primeira rota
routes.get('/products', Productcontroller.index)

module.exports=routes
