// Core module in nodjs

// //Ther are two types - 1. Global Module 2. Non-global module

// var a =34;
// console.log(a);   // global module

// const fs = require('fs');  // fs mai hume fs ko import karna padhta hai
// fs.writeFileSync("hello2.text", "Hii I am non global module and like and subscribe");  // non global module

// const gs = require('fs').writeFileSync;
// gs("hii.html", "I ma html file");


// console.log("-->" + __dirname);
// console.log("-->" + __filename);

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFileSync('greeting.txt', 'Hi I am Sujal' + user.username + '!\n', () => console.log('File is created'));

console.log(fs);
console.log(os);
