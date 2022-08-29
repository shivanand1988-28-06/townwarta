const express = require("express");
const userRouter = express.Router();

const User = require("./../models/user");

userRouter.post("/user" , (req,res)=>{
    const userdetails = req.body
    console.log(userdetails);
   res.send("articles/user" );
  });
 
  userRouter.get("/user" , (req,res)=>{
  
    if (error){
        res.send(error)
    }
    else{
        res.send('<h1>hiiii</h1>');
    }
  });

  module.exports = userRouter