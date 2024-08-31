console.log("Sever file is running");
//1st way to declare function
function add(a,b){
  return a+b;
}
var result = add(2,6);
console.log(result);

//2nd way to declare function
var add = function(a,b){
  return a*b;
}
var result = add(3,4);
console.log(result);

//3rd way or modified version of second to declare function
// Basically speak Aero function
var add = (a,b) => {return a-b;}
var result = add(8 ,4);
console.log(result);

// 4th Other way of modified version of third

var add = (a,b) => a/b;
var result= add(20, 4);
console.log(result);

// 5th way jo likhte ke sath hee run ho jaye
(function() {
  console.log("Sujal is a developer");
})();
