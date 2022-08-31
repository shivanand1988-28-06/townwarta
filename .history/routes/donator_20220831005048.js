const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator", async(req,res) => {
  
   
    // let donator = await Donator.create({name : name , createdAt : createdAt , address : address});
   console.log(req.body);
} );

donatorRouter.get("/donator" , (req,res)=>{
    res.render("articles/donator");
})

module.exports = donatorRouter