const express = require("express");
const userRouter = express.Router();

const User = require("../models/user");

userRouter.post("/user" , async(req,res)=>{
    const {username,password} = req.body
    const townuser = await User.create({user  , password })
     
   res.redirect("/user");
  });
 

  userRouter.get("/user" , (req,res)=>{
     res.render("articles/user");
    });

  module.exports = userRouter