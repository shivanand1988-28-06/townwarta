const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
title:String,
body:String,
// comments:[{body:String,date:Date}],
// date:{type:Date,default:Date.now},
// meta:{votes:Number,likes:Number},
// images:{type:Boolean,default:true},
tags:String
});


const UserSchema = new mongoose.Schema({
    username:Object,
    passsword:Object
});

const News = mongoose.model("News",NewsSchema) ;
const User = mongoose.model("User",UserSchema);

module.exports = {
News,User
};
