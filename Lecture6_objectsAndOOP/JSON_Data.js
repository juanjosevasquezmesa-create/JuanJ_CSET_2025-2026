//JSON data is written as name/value pairs
//A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

let human = {
    "firstName": "Juan",
    "lastName": "Vasquez"
};

let text = '{ "type": "laptop", "model": "Macbook Pro"}';

//An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
//to convert this string that looks to be a JS object into a functioning one
let object = JSON.parse(text);

console.log(object);
//{ type: 'laptop', model: 'Macbook Pro' }

console.log(object.type);
//laptop

console.log(object['model']);
//Macbook Pro

//{"squirrel" : false, "events" : ["work", "touched tree", "pizza", "running"]};

let string = JSON.stringify({"squirrel" : false, "events" : ["work", "touched tree", "pizza", "running"]});
// returns '{"squirrel" : false, "events" : ["work", "touched tree", "pizza", "running"]}'

console.log(JSON.parse(string).events);

//[ 'work', 'touched tree', 'pizza', 'running' ]

console.table(object);