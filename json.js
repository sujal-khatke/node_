// convert json string to object
const jsonString = '{"name" : "Jhon", "age" : 30, "city" : "New York"}' 
// JSON data is in string format beacaue it is poratbale to transport one place to another place.
const jsonobject = JSON.parse(jsonString); // convert json to object
console.log(jsonobject.name);


// convert object to json string 

const objecttojson = {
    "nmae": "Sujal",
     "age" : 20 ,
     "city" : "indore" 
    };

    const json = JSON.stringify(objecttojson); //convert object to json string
    console.log(json);
    console.log(typeof json);

