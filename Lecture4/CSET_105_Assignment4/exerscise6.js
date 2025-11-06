const prompt = require("prompt-sync")();

//This is the same becuase my goal with exerscie 5 was to make sure any element the user entered was able to be understood by the machine

function retryFirst() {
    let num = Number(prompt("How many Items do you want to add?: "));
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}
function finder(array) {
    let element = prompt("Enter item you are looking for: ").toLowerCase();
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() == element) {//so appearently to avoid an error you have to convert each check of the array element into a String 
            return console.log("Found");
        }
    }
    return console.log("Not Found");
}
function chooser() {
    let choice = prompt("Do you wish to search for an item? (if no type 'skip'): ").toLowerCase();
    return choice;
}

let numOfNums = retryFirst();

let groceries = [];
for (let i = 0; i < numOfNums; i++) {
    groceries[i] = prompt("Enter name of Grocery Item: ");
    
}

console.log(groceries);

let choice = prompt("Do you wish to search for an item? (if no type 'skip'): ").toLowerCase();
while (choice != 'skip' ) {
    console.log("Thank you!");
    
    finder(groceries);
    choice = chooser();
}
console.log("You have chosen to skip, Thank You!");
