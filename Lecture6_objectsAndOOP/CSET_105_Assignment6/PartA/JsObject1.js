//declaring a simple object, calling values, changing values, using values in the object to declare new variables

//declaring an object
let simpleObject = {
    item1 : "Brick",
    food : "Rice Bowl",
    animal : "Tiger",
    person : "Juan"
}

//calling and printing different values

console.log(simpleObject.item1);
//Brick

console.log(simpleObject.food);
//Rice Bowl

console.log(simpleObject.person);
//Juan

// changing object values

simpleObject.item1 = "Football";
console.log(simpleObject.item1);
// Football

simpleObject.person = "Mohammad";
console.log(simpleObject.person);
//Mohammad

//setting the values back to how they were
simpleObject = {
    item1 : "Brick",
    food : "Rice Bowl",
    animal : "Tiger",
    person : "Juan"
}

// using values in the object to declare new variables
const name = simpleObject.person;
console.log(name);
//Juan

let itemFood = simpleObject.item1 + " " + simpleObject.food;
console.log(itemFood);
//Brick Rice Bowl

