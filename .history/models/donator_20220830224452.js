const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    street: String , 
    city : String , 
    landmark : String , 
    postalcode : Number ,
    state : String, 
    mobile:String,

});

const donatorSchema = mongoose.Schema({

    name : {type : String},
  
    address : addressSchema
        
    
     createdAt : {type : Date , default : new Date} 
})

module.exports = mongoose.model("Donator", donatorSchema);