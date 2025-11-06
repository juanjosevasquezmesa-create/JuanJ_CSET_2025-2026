//OOP stands for object oriented programming
//OOJS (Object Orientated JavaScript)

//btw abstraction maeans to create a simple model of a complicated thing

//constructor function - instantiaion (the object instance is instantiated from the class)

//defining a person with a normal function

// function createNewPerson(name) {
//     const obj = {};//this declares an ampty object
//     obj.name = name;//this will asign the parameter name as the value assigned to the variable inside the empty object obj
//     obj.greeting = function () {
//         console.log('Hi! I\'m  ' + obj.name + '.');
//     }
//     return obj;
// };

// const salva = createNewPerson('Salva');
// console.log(salva.name);
// salva.greeting();

class Person {
    constructor(name){//constructor - this will take the arguements thrown into the Person class
        this.name = name;//this will make a name variable in the temporary object with the value of the parameter name declared above
    }

    //this will also add a function to the 
    greeting() {
        console.log('Hi! I\'m  ' + this.name + '.');
    }
};

let p = new Person("James");
p.greeting();


/*
The constructor is a special function that is called whenever an object is 
instantiated using the ‘new’ keyword. After that, the function can never 
be called again.
*/