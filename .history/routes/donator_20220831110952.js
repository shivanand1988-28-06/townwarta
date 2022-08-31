const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator", async(req,res) => {

let { name,street,city,landmark,zip,state,mobile } = req.body
  let donator = await Donator.create({name , street , city , landmark , zip , state ,mobile})
    res.redirect("/donator");

} );

donatorRouter.get("/donator" , (req,res)=>{
    
    res.render("articles/donator" );
})

module.exports = donatorRouter