const express = require("express");
const userRouter = express.Router();

const User = require("./../models/user");

userRouter.post("/user" , async(req,res)=>{
    const userdetails = req.body
    console.log(userdetails);
   res.render("articles/user" );
  });


  module.exports = userRouter