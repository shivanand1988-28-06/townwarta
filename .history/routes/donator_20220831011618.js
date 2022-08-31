const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/", (req,res) => {

  const {don} = req.body.name ;

console.log({don});

} );

donatorRouter.get("/donator" , (req,res)=>{
    res.render("articles/donator");
})

module.exports = donatorRouter