const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator", async(req,res) => {
    let {name , createdAt , address} = req.body ;
    let donator = await Donator.create({name : name , createdAt : createdAt , address : address});
   
} );

donatorRouter.get("/donator" , (req,res)=>{
    res.render("articles/donator");
})

module.exports = donatorRouter