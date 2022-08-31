const mongoose = require("mongoose");


// const marked = require('marked')
// const slugify = require('slugify')
// const createDomPurify = require('dompurify')
// const { JSDOM } = require('jsdom')
// const dompurify = createDomPurify(new JSDOM().window)



const articleSchema = new mongoose.Schema({
 __id : {type:Object},
 
title : {type:String},

description : {type:String},

markdown : {type : String},

createdAt : {type : Date,default : Date.now},

likes : {type : Number,default:0},

// imagename:{type : String},

tags : {type : String}

});






module.exports =  mongoose.model("Article",articleSchema) ;