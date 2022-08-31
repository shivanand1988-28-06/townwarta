const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/", (req,res) => {
  const don = req.body ;

console.log(don);
res.redirect("/donator")
} );

donatorRouter.get("/" , (req,res)=>{
    res.render("articles/donator");
})

module.exports = donatorRouter