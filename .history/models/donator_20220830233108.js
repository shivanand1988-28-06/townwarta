const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String , 
    city : String , 
    landmark : String , 
    zip : Number ,
    state : String, 
    mobile:Number,

});

const donatorSchema = new mongoose.Schema({
     _id : mongoose.Schema.ObjectId ,
    name : {type : String} ,
  
    address : addressSchema ,
        
    createdAt : {type : Date , default : new Date} 

})

module.exports = mongoose.model("Donator", donatorSchema);