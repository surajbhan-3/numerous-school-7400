const mongoose=require("mongoose")


const ProductSchema=mongoose.Schema({

Title : String,
Price :String,
Material :String,
Care :String,
Deatails :Array,
Size: String


})


const ProductModel=mongoose.model("products",ProductSchema)


module.exports={ProductModel}