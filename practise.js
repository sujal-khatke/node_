// 1. Make a sum of function of two number
function sumOfTwonumber(a,b){
    // console.log(a+b);
    return a + b;
}

sumOfTwonumber(2,3);

let result = sumOfTwonumber(2,3);
console.log(result);

// 2. Write a JavaScript program to find the maximum number in an array. 

function findmaxnum(array){
return Math.max(...array);  //... Sapared operator use to sapare t array and take a Math fun
}
let array = [2,4,3,1];
let maxnum = findmaxnum(array);
console.log(maxnum);

const age =[43,22,55,16,23,17];
const out = age.filter(checkage);

function checkage(age) {
    return age < 18;
    
}
console.log(out);

// How to take user input in js
var prompt = require('prompt-sync')();
const Age = prompt("Please enter your age :");
if(Age < 18){
    console.log("You are discount is 20%");
}
else{
    console.log("You are senior citizan discount is 30%");
}


  