const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    user : "string",
    password : "string",
    createdAt:{type:Date,default:Date.now}

});

module.exports = mongoose.model("User", userSchema )