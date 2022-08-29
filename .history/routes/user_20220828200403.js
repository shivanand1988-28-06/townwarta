const express = require("express");
const userRouter = express.Router();

const User = require("../models/user");

userRouter.post("/user" , async(req,res)=>{
    const {username,password} = req.body
    const user = await User.create({username : user , password : password})
     
   res.redirect("/user");
  });
 

  userRouter.get("/user" , (req,res)=>{
     res.render("articles/user");
    });

  module.exports = userRouter