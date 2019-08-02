const express = require('express')
const routes = express.Router()
const Productcontroller = require('./controllers/ProductController')

//get Products
routes.get('/products', Productcontroller.index)

// Create new Product
routes.post('/products', Productcontroller.store)

// Update Product
routes.put('/products/:id', Productcontroller.update)

// Find Product by ID
routes.get('/products/:id', Productcontroller.show)

// Update Product
routes.delete('/products/:id', Productcontroller.destroy)



module.exports=routes
