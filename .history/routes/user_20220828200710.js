const express = require("express");
const userRouter = express.Router();

const User = require("../models/user");

userRouter.post("/user" , async(req,res)=>{
    const {username,password} = req.body
    const user = await User.create({user : user , password })
     
   res.redirect("/user");
  });
 

  userRouter.get("/user" , (req,res)=>{
     res.render("articles/user");
    });

  module.exports = userRouter