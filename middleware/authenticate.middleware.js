const jwt=require("jsonwebtoken")

const authenticae=(req,res,next)=>{
    const token=req.headers.authorization
     if(token){
        jwt.verify(token,"key",(err,decoded)=>{
            if(decoded){
                req.body.userID=decoded.userID
                next()
            }else{
                res.send("Pleage login")
            }
        })
     }else{
        res.send("please login")
     }

}

module.exports={authenticae}