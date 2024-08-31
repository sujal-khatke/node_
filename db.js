const { concat } = require("lodash");
const mongoose = require("mongoose");

//Define yhe mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'


//Set mongodb connection
mongoose.connect(mongoURL);

//Get default connection
//Mongoose maintains a default connection object represnting the Mongodb connection.

const db = mongoose.connection;

//Define Event listeners for database connection

db.on('connected', () => {
    console.log("Connected to Mongodb server");
})
db.on('error', () => {
    console.log("Mongodb connection error");
})
db.on('disconnected', () => {
    console.log("Mongodb disconnected");
})

// Export the database connection 
module.exports = db;