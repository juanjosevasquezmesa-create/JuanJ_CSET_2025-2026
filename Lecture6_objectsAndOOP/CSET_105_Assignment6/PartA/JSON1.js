//Basic JSON strinification and what it looks like
let human = {
    "firstName": "Juan",
    "lastName": "Vasquez"
};

//making an object into a string
let string = JSON.stringify(human);
console.log(string);
//'{"firstName":"Juan","lastName":"Vasquez"}'

//you can do this without declaring an object to a variable
let freeString = JSON.stringify({ item1 : "Brick", food : "Rice Bowl", animal : "Tiger", person : "Juan"});
console.log(freeString);
//'{"item1":"Brick","food":"Rice Bowl","animal":"Tiger","person":"Juan"}'




