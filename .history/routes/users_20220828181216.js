const express = require("express");
const userRouter = express.Router();

const User = require("./../models/user");

// userRouter.post("/user" , (req,res)=>{
//     const userdetails = req.body
//     console.log(userdetails);
//    res.send("articles/user" );
//   });
 
  userRouter.get("/user" , (req,res)=>{
    res.render("articles/user" );
  });

  module.exports = userRouter