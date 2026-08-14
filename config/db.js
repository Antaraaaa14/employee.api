const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://2025antaray_db_user:NxlPIJNwU0jSHyaK@cluster0.xb0to2.mongodb.net/?appName=Cluster0')

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});

db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
});

db.on("error",(err)=>{
    console.log("MongoDB connection error: ",err);
});

module.exports = db; 