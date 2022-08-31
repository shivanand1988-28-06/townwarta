const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator", (req,res) => {

let { name,street,city,landmark,zip,state,mobile } = req.body
  console.log(req.body);
res.redirect("/donator");

} );

donatorRouter.get("/donator" , (req,res)=>{
    
    res.render("articles/donator" );
})

module.exports = donatorRouter