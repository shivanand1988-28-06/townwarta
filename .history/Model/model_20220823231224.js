const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
title:{type:String},
description:{type:String},
markdown:{type:String},

createdAt:{type:Date,default:Date.now},
meta:{votes:Number,likes:Number},
slug:{type:string,required:true,unique:true},
imagename:{type:string},
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
