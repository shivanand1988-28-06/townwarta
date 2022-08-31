const mongoose = require("mongoose");


const denotorSchema = mongoose.Schema({

    name : {type : String},
  
    address : {building : String , 
        street: String , 
        city : String , 
        lane : String , 
        postalcode : Number},
     createdAt : {type : Date , default : new Date} 
})

module.exports = mongoose.model("Donator", donatorSchema);