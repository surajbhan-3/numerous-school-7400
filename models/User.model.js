const mongoose=require("mongoose")


const UserSchema=mongoose.Schema({

name : String,
email : String,
gender : String,
password : String,
age : Number,
city: String,

})


const UserModel=mongoose.model("lusers",UserSchema)


module.exports={UserModel}