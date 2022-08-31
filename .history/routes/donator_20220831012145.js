const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator", (req,res) => {

  

console.log(req.body);
res.redirect("/donator");
} );

donatorRouter.get("/donator" , (req,res)=>{
    
    res.render("articles/donator" );
})

module.exports = donatorRouter