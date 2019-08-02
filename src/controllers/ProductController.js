const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    //List of Products with pagination -> url
    async index(req,res){
      const {page = 1} = req.query
      const products = await Product.paginate({},{ page:page, limit:10});

      return res.json(products)
    },
    //Create new Product
    async store(req,res){
        const product = await Product.create(
            req.body
        );

        return res.json(product)
    },

    // Find Product with ID
    async show(req,res){

        const product = await Product.findById(req.params.id)

        return res.json(product)
    },
    // Find Product and Update with body content and return Product updated
    async update(req,res){

        const product = await Product.findOneAndUpdate(req.params.id,req.body, {new:true})

        return res.json(product)
    },
    // Delete Product with ID
    async destroy(req,res){
        await Product.findOneAndRemove(req.params.id)

        return res.send('Product has deleted!')
    }
}