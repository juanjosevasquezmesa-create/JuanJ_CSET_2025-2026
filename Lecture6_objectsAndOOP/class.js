let book = {
    title : "JavaScript Essentials",
    author : "Mary Jane",
    pages : 30,
    publisher : "Tech Books Publishing",
    read : function () {
        console.log("Reading " + this.title + " by " + this.author);
    }
}

console.log("Book: ", book.title);
console.log("Author ", book.author);
console.log("Pages ", book.pages);
book.read();

book.pages = 400;
console.log("Updated pages: ", book.pages);

//declaring a new variable
book.genre = "Programming";
console.log("Genre is ", book.genre);

let reader = book.read.bind(book);//usually this would cause an error becuase if i assigned the fucntion tot he new variable the new fucntion would'nt have the needed information from the object but if you bind the data inside of the object to he variabel allowing this. to work as intended

reader();


// console.log(true == 1); // true

class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        console.log(`${this.brand} ${this.model} (${this.year})`);
    }
}

let myCar = new Car("Toyota", "Corolla", 2025);

myCar.displayInfo();


class Animal {
    constructor(name) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}
class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} barks.`);
        
    }
    fetch(item){
        console.log(`${this.name} fetches the ${item}`);
        
    }
}

let myDog = new Dog("Rex", "German Shepered");
myDog.speak();

myDog.fetch("ball");