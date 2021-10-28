const bodyParser=require("body-parser");
const express=require("express")
const mongoose=require("mongoose");
const app=express();
const indexroutes=require("./routes/index");
const postroutes=require("./routes/post");
const jwt=require("jsonwebtoken");
const cors = require('cors');



// const post=require("./model/post")

mongoose.connect("mongodb://localhost/instaclone");
app.use(cors())

app.get("/",function(req,res){
    res.json({
        status:"success"
    })
});

app.use("/posts",function(req,res,next){
    try{
        const token=req.headers.authorization?.split(" ")[1];
    console.log(token)
    if(!token){
        return res.status(401).json({
            status:"failed",
            message:"not authenticated"
        })
    }
    const decoded=jwt.verify(token,'secret');
    if(!decoded){
        return res.status(401).json({
            status:"failed",
            message:"token invalid"
        })
    }
    req.user=decoded.data
    }catch(e){
        return res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
    
    next();
})
app.use(bodyParser())

app.use("/",indexroutes);
app.use("/posts",postroutes);
app.listen("5000",()=>console.log("sever listening at localhost:5000"));