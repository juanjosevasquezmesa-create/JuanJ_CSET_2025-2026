//the name of the class will also be the name of any obj decalred based off of this, but the variable name of the obj will not change tho
class Nums {
    //the constructor will take all of the variables thrown into the class kinda like a method
    constructor(name, numbers, idea){//constructor - this will take the arguements thrown into the nums class
        this.name = name;//this will make a name variable in the temporary object with the value of the parameter name declared above
        this.num = numbers;
        this.idea = idea;
    }

    //this will also add a method into the new object as well
    greeting() {
        console.log('Hi! I\'m  ' + this.name + '.');
    }
};

let p = new Nums("James", [0, 1, 2, 3, 4, 5, 6, 7], {concept1 : "Beans", concept2 : "Cooler"});
console.log(p);

p.greeting();


/*
The constructor is a special function that is called whenever an object is 
instantiated using the ‘new’ keyword. After that, the function can never 
be called again.
*/

class Person {
    constructor(name){//constructor - this will take the arguements thrown into the Person class
        this.name = name;//this will make a name variable in the temporary object with the value of the parameter name declared above
    }

    //this will also add a function to the 
    greeting() {
        console.log('Hi! I\'m  ' + this.name + '.');
    }
};

let person1 = new Person("Bob");
let person2 = new Person("Sarah");

console.log(person1.name);
person1.greeting();

console.log(person2.name);
person2.greeting();

/*

person1 = {
    name: "Bob",
    greeting(){
        console.log('Hi! I\'m ' + this.name + '.');
    }
}

person2 = {
    name: "Sarah",
    greeting(){
        console.log('Hi! I\'m ' + this.name + '.');
    }
}

*/