const notes = require('./notes.js');
console.log("Server is available ");


var age = notes.age;
console.log(age);
var addnumber = notes.addnumber(age+4,10);
console.log(addnumber);



var _ = require('lodash');

var array = ['person', 'person', 1,2,1,2,4,'#'];
var filter = _.uniq(array);
console.log(filter);

var data = "String string hii hii"
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString(data));

