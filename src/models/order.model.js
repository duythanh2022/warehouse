const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    cartId:Number,
    orderId:Number,
    userId:Number,
    shipping:Object,
    payment:Object,
    products:Array,
},{
    collection:"order",
    timestamps:true,
}
)
module.exports = mongoose.model('Order', orderSchema)