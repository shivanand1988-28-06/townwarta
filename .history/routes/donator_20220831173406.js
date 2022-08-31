const express = require("express");
const donatorRouter = express.Router();
const Donator = require("../models/donator");
 


donatorRouter.post("/donator", async(req,res) => {

let { name , street , city , state , mobile , zip} = req.body



  let donator = await Donator.create({name : name , street : street ,city ,state,mobile,zip});
    res.redirect("/donator");

} );

   donatorRouter.get("/donator" , (req,res)=>{
     res.render("articles/donator" );
});

module.exports = donatorRouter