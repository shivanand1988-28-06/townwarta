
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/mainroutes");
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 3000

app.use(express.json());

 app.use("/api/v1",router);
 app.use (express.urlencoded({extended:false}));
 app.use(express.static("./public"));

const start = async () =>{
    
try{
     
    await connectDB(process.env.MONGO_URI);
    app.listen(port,()=>{ console.log(`app is running over port ${port}`)});

}catch(error) {

    console.log(error);

}

}

start();
