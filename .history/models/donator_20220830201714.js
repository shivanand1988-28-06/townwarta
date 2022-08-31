const mongoose = require("mongoose");


const denotorSchema = mongoose.Schema({

    name : {type : String},
    createdAt : {type :String , default : new Date} ,
    address : {building : String , 
        street: String , 
        city : String , 
        lane : String , 
        postalcode : Number},

})

module.exports = mongoose.model("Donator", donatorSchema);