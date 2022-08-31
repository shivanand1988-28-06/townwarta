const mongoose = require("mongoose");


const denotorSchema = mongoose.Schema({

    name : {type : String},
    createdAt : {type :String , default : new Date}

})

module.exports = mongoose.model("Donator", donatorSchema);