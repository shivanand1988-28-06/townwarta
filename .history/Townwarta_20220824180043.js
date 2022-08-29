
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/mainroutes");
const connectDB = require("./db/connect");
const app = express();
const News = require("./Model/model");
const methodOverride = require("method-override")
const port = process.env.PORT || 3000
app.set("view engine", "ejs");
// app.use(express.json());


 app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
 app.use("/api/v1", router);

  app.get("/", async (req,res)=>{
    const news = await News.find();
    res.render("news/index" , {news:news});
  });

console.log(News);
const start = async () =>{
    
try{
     
    await connectDB(process.env.MONGO_URI);
    app.listen(port,()=>{ console.log(`app is running over port ${port}`)});

}catch(error) {

    console.log(error);

}

}

start();
