const mongoose = require("mongoose");


const marked = require('marked')
const slugify = require('slugify')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')
// const dompurify = createDomPurify(new JSDOM().window)



const articleSchema = new mongoose.Schema({
    
title:{type:String},
description:{type:String},
markdown:{type:String},
slug:{type:String,required:true,unique:true},
createdAt:{type:Date,default:Date.now},
// meta:{votes:Number,likes:Number,default:0},

// imagename:{type:String},
// tags:{type:String}
});


const userSchema = new mongoose.Schema({

    user : "string",
    password : "string",
    createdAt:{type:Date,default:Date.now},

})




module.exports =  mongoose.model("Article",articleSchema) ;
module.exports = mongoose.model("User", userSchema )