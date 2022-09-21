const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    productId:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    reservation:{
        type:Array
    },
    create_at:{
        type:Date,
        default:Date.now()
    }
},{
    collection:"inventory",
    timestamps:true,
})
module.exports = mongoose.model('Inventory', inventorySchema)