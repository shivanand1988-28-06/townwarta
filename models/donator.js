const mongoose = require("mongoose");



const donatorSchema = new mongoose.Schema({
   

    name : String ,
  
    street: String , 

    city : String , 
    landmark : String , 
    zip : Number ,
    state : String, 
    mobile:Number,

    
    createdAt : {type : Date , default : new Date} 

})

module.exports = mongoose.model("Donator", donatorSchema);