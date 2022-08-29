
const mongoose = require('mongoose');


const connectDB = (URI) => {
  return mongoose.connect(URI  ).then((client) => {
    
    const connect = client.db.collection("Townwarta.articles");
    connect.listCollections().toArray(function(err, names) {   
        if(!err) {
            console.log(names)
        }
    });
 }).catch((err) => {
  
    // Printing the error message
    console.log(err.Message);
 })
}

module.exports = connectDB
