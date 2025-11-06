let car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    print: console.log("print"),    
    start() {
        console.log("Car has started");
    },
    drive(){
        console.log("Drive mode activated");
    },
    brake() {
        console.log("Brakes are on");
    },
    stop() {
        console.log("Car has currently stopped");
    },
    identify : function () {
        return this.name + " " + this.color;// this is a keyword, it refers to the owner of the function ie it refers to the variable that is it declaring
        //in this case this.name is refering to the name varibale in the object 
    }
};

car.print;//this will run the console.log function attributed to the print variable

console.log(car.name);//this will print the variable "name" in the 'car' object (ie. "Fiat")


car.brake();//this will run the function in the array

console.log(car.identify()); //this is another way to create a function that will return a value 

//you can also assign new variables with new values in the object ie
car.fly = false; //this will create a variable (fly) in the object (car) with the Boolean value of flase

console.log(car.fly);// returns false

//you can also change the value of a variable in the fucntion 

car.name = "honda"; //this will change the value of the name variable to "honda"

console.log(car.name);// returns "honda"

//
//you can also call values by doing this (object["varName"])


//this can be helpful so the user can enter what variable they want to extract, change or do something with 
car["print"];//this will act like car.print


//you can define new variables to values in objects
let newCar = car.name;

//this works with methods (functions) too

let method = car.identify;

console.log(method());//method has the same data as car.identify() but becuase the method has no object to refrence the this.name and this.color it will return undefined undefined

let method2 = car.start();

method2;//this will act like car.start()

//
//Adding Arrays to Objects

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    gender: "male",
    interests: ['music', 'skiing'],
    random : this.age,
    family: {
        mom: "mother",
        dad: "father"
    },
    bio: function () {
        console.log(person.name[0] + ' ' + person.name[1] + " is " + person.age)
        //by calling the object name it will act like this.
        //this. just works like calling the name of the object name but you can also call outside objects
         /* name is an array in this object so we have to indetify what index we are talking about*/
         /* this. is still needed though fot this function to see it*/
    },
    greeting : function () {
        console.log('Hi I\'m ' + this.name[0] + '.');
        //this is calling index 0 of the name variable
    }
}

console.log(person.random);//this will be undefined becuase calling a this.var will not work

person.random = person.age;

console.log(person.random);// the age of the guy

person.bio();

let hello = person.bio;// without paranthesis this will assign the block code to the new variable ie the code of (person.bio) to the new (hello) function

let greet = person.bio();//this will assign the returned value of the function 

console.log(greet);

hello();

//you can also change an array in the object
person.name = ["Juan", "J."];
console.log(person.name);//[ 'Juan', 'J.' ]

//you can also make an object in an object
console.log(person.family.mom);

//you can also add an object to an object

person.games = {survival: "Minecraft", FPS: "Fortnite", indie: "Limbus Company"};

// you can also do it like this

person.family.mom = "Brigida";
person.family.dad = "Juan";

console.log(person);

let human = {
    "firstName": "Juan",
    "lastName": "Vasquez"
};

person.species = human;

console.log(person);
