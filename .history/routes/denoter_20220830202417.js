const express = require("express");
const donatorRouter = express.Router();
const Donator = require("./../models/donator");



donatorRouter.post("/donator", async(req,res) => {
    let {name , createdAt , address} = await 
} )