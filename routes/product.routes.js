const express=require("express")
const productRouter=express.Router()
const {UserModel, ProductModel}=require("../models/product.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")





productRouter.get("/", async(req,res)=>{


      const allProduct= await ProductModel.find()

      res.send(allProduct)
      
})