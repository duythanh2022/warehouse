const express = require("express")
const dotenv = require("dotenv")
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/user.router')
const routerProducts = require('./routes/product.router')
const routerInventory = require('./routes/inventory.router')
const routerCart = require('./routes/cart.router')

app.use(express.json())
dotenv.config()
const PORT = 3000;

//connecting mongoose
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Successfully connected to database");
}).catch((error)=>{
    console.log("database connection failed. exiting now...");
    console.error(error)
})

app.use('/api/auth',routes)
app.use('/api',routerProducts)
app.use('/api/dashboard',routerInventory)
app.use('/api',routerCart)

app.listen(PORT,()=>console.log(`Server start ${PORT}`))