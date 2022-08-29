
const mongoose = require('mongoose');


const connectDB = (URI) => {
  return mongoose.connect(URI).then((client) => {
    
    const connect = client.db.collection("Townwarta");
    connect.listCollections().toArray(function(err, names) {   
        if(!err) {
            console.log(names,"connected successfully");
        }
    });
 }).catch((err) => {
  
    // Printing the error message
    console.log(err.Message);
 })
}

module.exports = connectDB