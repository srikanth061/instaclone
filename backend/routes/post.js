const express=require("express");
const Post=require("../models/post");


const router=express.Router();





router.get("/",async function(req,res){
    try{
        const posts=await Post.find()
        return res.json({
            status:"successfully added post",
            message:"nhjvAJKBCVJHWSVC",
            posts
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message,
            
        })
    }
})

router.post("/",async function(req,res){
    const{title,body,pic,place}=req.body;
    const post=await Post.create({
        title,body,image:pic,place,user:req.user
    });
    res.json({
        status:"success",
        message:"successfully created post",
        data:{
            post
        }
    })
})


router.put("/:id",async function(req,res){
    const{title}=req.body;
    const post=await Post.findOne({_id:req.params.id});
    if(!post){
        return res.status(404).json({
            status:"failed",
            message:"post not found"
        })
    }
    if(String(post.user)!=req.user){
        return res.status(403).json({
            status:"failed",
            message:"you are not authorised to edit this post"
        })
    }
    await Post.updateOne({_id:req.params.id},{
        title
    });

    res.json({
        status:"successfully updated the post"
    })
})


router.delete("/:id",async function(req,res){
    const{title}=req.body;
    const post=await Post.findOne({_id:req.params.id});
    if(!post){
        return res.status(404).json({
            status:"failed",
            message:"post not found"
        })
    }
    if(String(post.user)!=req.user){
        return res.status(403).json({
            status:"failed",
            message:"you are not authorised to delete this post"
        })
    }
    await Post.deleteOne({_id:req.params.id},{
        title
    });

    res.json({
        status:"successfully deleted"
    })
    
})
module.exports=router

