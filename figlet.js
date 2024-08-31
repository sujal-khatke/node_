//Figlet
var figlet = require("figlet");  // import kar kare hai npm figlet ko figlet naam ke variable ke under

figlet("Node Js!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});