//instll
//nmp i

// Use

// Figlet
// var figlet = require("figlet");

// figlet("Node Js!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//Express
const express = require('express'); // app.get(route , function)  // hum import kar rahe hai express npm
const app = express();

app.get("/", function(req , res){
  res.send("My First Server in Node js today");
});

app.get("/profile",function(req , res){
  res.send("My Profile");
});
 
app.listen(3000); //Create Server



var s = 23;
module.exports = s;