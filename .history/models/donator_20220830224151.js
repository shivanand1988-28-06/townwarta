const mongoose = require("mongoose");


const donatorSchema = mongoose.Schema({

    name : {type : String},
  
    address : {
        street: String , 
        city : String , 
        landmark : String ,
        mobile:String,
        postalcode : Number ,
        state
    },
     createdAt : {type : Date , default : new Date} 
})

module.exports = mongoose.model("Donator", donatorSchema);