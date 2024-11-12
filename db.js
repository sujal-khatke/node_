const { concat } = require("lodash");
const mongoose = require("mongoose");

//Define yhe mongodb connection url
const mongoURL = process.env.MONGODB_URL_LOCAL ;
/*const mongoURL = process.env.MONGODB_URL;
if (!mongoURL) {
    throw new Error('MONGODB_URL environment variable is not defined');
} */

//Set mongodb connection with options
//mongoose.connect(mongoURL);
mongoose.connect(mongoURL)
    .then(() => console.log("Connected to MongoDB server"))
    .catch(err => console.error("Mongodb connection error:", err));


//Get default connection
//Mongoose maintains a default connection object represnting the Mongodb connection.

const db = mongoose.connection;

//Define Event listeners for database connection

db.on('connected', () => {
    console.log("Connected to Mongodb server");
})
db.on('error', () => {
    console.error("Mongodb connection error");
})
db.on('disconnected', () => {
    console.log("Mongodb disconnected");
})

// Export the database connection 
module.exports = db;