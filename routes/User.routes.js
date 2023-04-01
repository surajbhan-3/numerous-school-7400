const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../models/User.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


userRouter.post("/register",async(req,res)=>{

    const {name ,email,gender,password,age,city,is_married}=req.body;

    console.log(req.body)
  // const findEamil=0;
     const findEamil= await UserModel.find({"email":email})
       if(findEamil.length>0){
        res.send({"msg":"user already exits try login"})
       }else{

            try {
                bcrypt.hash(password,5,async(err,hash)=>{
                if(err){
                    res.send("login error")
                }else{
                    const user =new UserModel({ name,email,gender,password:hash,age,city,is_married})
                    await user.save()
                    res.send({"msg":"user register successfuly"})
                }
                })
            } catch (error) {
                res.send({"msg":error.message})

            }
       }
})


userRouter.post("/login",async(req,res)=>{

   const {email,password}=req.body
try {
    const user =await UserModel.find({email})
    if(user.length>0){

        bcrypt.compare(password,user[0].password,(err,result)=>{

            if(result){
                let token=jwt.sign({userID:user[0]._id},"key")
                res.send({"msg":"user logedin",token:token})

            }
            else{
                res.send("wrong credetials")
            }
        })
    }
    
} catch (error) {
    
    res.send({"msg":"something went wrong"})

}     
})





module.exports={userRouter}


