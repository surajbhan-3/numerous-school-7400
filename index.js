const express=require('express')
const {connection}=require("./config/db")
require("dotenv").config()
const {userRouter}=require("./routes/User.routes")
 const {productRouter}=require("./routes/product.routes")
const {authenticate}=require("./middleware/authenticate.middleware")
const cors=require("cors")
const bodyParser=require("body-parser")



const app=express()
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())

app.get("/",(req,res)=>{
     res.send("Welcome to homepage")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/items",productRouter)




app.listen(process.env.port, async(req,res)=>{

    try {
      await connection
      console.log("mongodb is connected")
    } catch (error) {
      res.send(err)
    }
console.log("Server is Running")
})