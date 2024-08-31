//Express
const express = require('express'); // app.get(route , function)  // hum import kar rahe hai express npm
const app = express();

app.use(function(req, res, next){
  console.log("Hello from middleware");
  next();  // push req from bucket
});

app.use(function(req, res, next){
  console.log("Hello from middleware2");
  next();
});

app.get("/", function(req , res){
  res.send("My First Server in Node js today");
});

app.get("/profile",function(req , res){
  res.send("My Profile");
});
 
app.listen(3000); //Create Server


