const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required:true
    },
    name:{
        require:true,
        type:String
    },
    brand:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    dateAdded:{
        type:Date,
        default:Date.now
    }
},{
    collection:'products',
    timestamps:true,
})
module.exports = mongoose.model("Product",productSchema)