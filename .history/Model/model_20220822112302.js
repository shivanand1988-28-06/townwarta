const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
title:String,
body:String,
newsarticle:String,
comments:String,
date:{type:Date,default:Date.now},
meta:{votes:Number,likes:Number},
images:{type:Boolean,default:true},
tags:String
});


const UserSchema = new mongoose.Schema({
    username:Object,
    password:Object
});

const News = mongoose.model("News",NewsSchema) ;
const User = mongoose.model("User",UserSchema);

module.exports = {
News,User
};
