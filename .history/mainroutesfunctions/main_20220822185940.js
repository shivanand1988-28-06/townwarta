const express = require("express");
const {News,User} = require("../Model/model");
// const User = require('../Model/model');
const mongoose = require("mongoose");

const getAllNews =  async(req,res) =>{
    const allNews = await News.find();

    await res.status(200).json({msg:`hi this testing is successfull`,data:allNews});
           
  }
const getUsers = async(req,res)=>{
  const users = await User.find({});
  res.status(200).json({msg:`hi this testing is successfull`,allusers:users
});
};

const createNews = async(req,res)=>{
   const news = await News.create(req.body);
    res.status(200).json({news});
    };

const createUser = async(req,res)=>{
    
    const {username,password} = req.body;
    const user = await User.create({username:username,password});
 
    res.status(200).json({user});
}



const updateSingleNews = (req,res)=>{

    res.status(200).send(`to upate the newsdata`);
}

const deleteSingleNews = (req,res)=>{
    res.status(200).send(`to delete the whole news`);
}
const getSingleNews = async(req,res)=>{
   const tag = req.params.name
    console.log(tag);
    const news = await News.findOne({tags: tag });
    res.status(200).json({news});
}

module.exports = {getAllNews,createNews,updateSingleNews,deleteSingleNews,getSingleNews,createUser,getUsers};