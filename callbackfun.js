// callback Function

/*function callback(){
    console.log("Sujal calling callback function Now adding succesfully complete");
}*/

var add = function(a,b,ghansu){
    let result = a+b;
    console.log('Result: '+result); // main functio work complete
    ghansu();
}

// add(2,16738798,function(){
//     console.log("Add fun completed");
// })

// simple way that useed developer

add(2,6,()=> console.log('Add Completed'));
