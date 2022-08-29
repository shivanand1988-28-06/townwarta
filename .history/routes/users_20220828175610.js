
const express = Express.router();


const User = require("./../models/user")



router.post("/user" , async(req,res)=>{
    const userdetails = req.body
    console.log(userdetails);
   res.render("articles/user" );
  });