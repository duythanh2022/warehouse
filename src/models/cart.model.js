const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId:Number,
    status:{type:String, default:"active"},
    modifiedOn:{
        type:Date,
        default:Date.now()
    },
    quantity:{
        type:Number,
    },
    products:Array
},{
    collection:'cart',
    timestamps:true,
})
module.exports = mongoose.model('Cart',cartSchema)