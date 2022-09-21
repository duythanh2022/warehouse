const Cart = require("../models/cart.model");
const Inventory = require("../models/inventories.model")
const cartCtrl = {
  addToCart: async (req, res) => {
    const { productId, quantity } = req.body;
    try {
      const stock = await Inventory.updateOne(
        {
          productId,
          quantity: { $gt: quantity },
        },
        {
          $inc: {
            quantity: -quantity,
          },
          $push: {
            reservation: {
              quantity,
              productId,
            },
          },
        }
      );
      console.log("wwww",stock);
      if(stock.modifiedCount){
        // addd to cart
        const addToCart = await Cart.findOneAndUpdate({
            productId
        },{
            $push:{
                productId,
                quantity
            }
        })
        console.log("momo",addToCart)
        return 1
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server Error" });
    }
  },
};
module.exports = cartCtrl