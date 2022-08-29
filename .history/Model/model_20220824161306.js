const mongoose = require("mongoose");
const slugify = require("slugify");

const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)



const NewsSchema = new mongoose.Schema({
title:{type:String},
description:{type:String},
markdown:{type:String},

createdAt:{type:Date,default:Date.now},
meta:{votes:Number,likes:Number,default:0},
slug:{type:String,required:true,unique:true},
imagename:{type:String},
tags:{type:String}
});







module.exports =  mongoose.model("News",NewsSchema) ;