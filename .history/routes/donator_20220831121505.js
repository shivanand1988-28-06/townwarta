const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");



donatorRouter.post("/donator", async(req,res) => {

let { name } = req.body.name
const address = {street,city,landmark,zip,state,mobile};
const address = req.body
console.log(address);
  let donator = await Donator.create({name , address});
    res.redirect("/donator");

} );

   donatorRouter.get("/donator" , (req,res)=>{
     res.render("articles/donator" );
});

module.exports = donatorRouter