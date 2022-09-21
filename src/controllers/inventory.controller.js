const Inventory = require("../models/inventories.model")

const inventorySchema = {
    addInventory: async (req,res)=>{
        const {productId,quantity,reservation} = req.body
        try {
            const newInventory =  new Inventory({productId,quantity,reservation})
            await newInventory.save()
            res.status(200).json({success:true,message:"put success",newInventory})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false, message:"Internal server Error"})
        }
    }
}
module.exports = inventorySchema