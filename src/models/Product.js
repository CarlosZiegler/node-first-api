const mongoose = require('mongoose')
const mongoosePaginate =  require('mongoose-paginate')

//Mongoose create Schema in DB
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    createdAT:{
        type: Date,
        default:Date.now,

    }

})

// Pagination of index
ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)