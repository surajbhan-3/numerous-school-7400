const mongoose=require("mongoose")


const ProductSchema=mongoose.Schema({

Title : {Type:String,required:true},
Price :{Type:Number,required:true},
Material : {Type:String,required:true},
Care : {Type:String,required:true},
Deatails :{Type:Array,required:true},
Size: {Type:String,required:true},


})


const ProductModel=mongoose.model("lusers",ProductSchema)


module.exports={ProductModel}