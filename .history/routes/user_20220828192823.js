const express = require("express");
const userRouter = express.Router();

const User = require("../models/user");

userRouter.post("/user" , async(req,res)=>{
    const userdetails = await req.body
    console.log(userdetails.user,userdetails.password);
   
  });
 

  userRouter.get("/user" , (req,res)=>{
     res.render("articles/user");
    });

  module.exports = userRouter