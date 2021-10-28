const mongoose=require("mongoose");

const postschema=mongoose.Schema({
    title:{type:"string",require:true},
    body:{type:"string"},
    image:{type:"string",require:true},
    place:{type:"string",rquire:true},
    user:{type:mongoose.Types.ObjectId,ref:"User"}
});

const Post=mongoose.model("Post",postschema);

module.exports=Post;