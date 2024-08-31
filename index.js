
// console.log("My First Node Js Script");
// var a =3;
// var b = 8;
// var c =10;
// console.log(a+b+c);
// console.warn(a+b);

//Contol Statement 

var x = '20';
if (x === 20){
    console.log("Matched");
}
else{
    console.log("Does'nt Matched");

}
//Loops

for(i = 0; i <= 10; i++){
    console.log(i);
}

// Array
const arr =[2,3,4,5,6,7,8,9,0];
console.log(arr);
console.log(arr[2]);


const npm = require("./server");
console.log("S is "+ npm);