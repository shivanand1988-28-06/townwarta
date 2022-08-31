
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const userRouter = require("./routes/user");
const connectDB = require("./db/connect");
const app = express();
const Article= require("./models/article");
const methodOverride = require("method-override")
const port = process.env.PORT || 3000
const path = require("path");
const donatorRouter = require("./routes/donator")

app.set("views" , path.join(__dirname , "views"))
app.set("view engine", "ejs");
// app.use(express.json());
 app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
 
  app.get("/", async (req,res)=>{
    const articles = await Article.find();
    res.render("articles/index" , {articles:articles});
  });

  app.use("/" , userRouter);

app.use("/articles" , articleRouter );

app.use("/donator" , )
console.log(Article)


const start = async () =>{
    
try{
     
    await connectDB( process.env.MONGO_URI );
    app.listen(port,()=>{ console.log(`app is running over port ${port}`)});

}catch(error) {

    console.log(error);

}

}

start();
