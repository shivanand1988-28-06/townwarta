const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator/dontor", (req,res) => {
  const don = req.body ;

console.log(don);
res.redirect("/donator");
} );

donatorRouter.get("/donator" , (req,res)=>{
    res.render("articles/donator");
})

module.exports = donatorRouter