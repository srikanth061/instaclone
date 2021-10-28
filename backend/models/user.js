const mongoose=require("mongoose");

const userschema=mongoose.Schema({
    name:{type:"string",require:true},
    email:{type:"string",require:true,unique:true},
    password:{type:"string",require:true}
});

const User=mongoose.model("User",userschema);

module.exports=User;