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
        if (array[i].toLowerCase() == element) {
            return console.log("\n\nFound");
        }
    }
    return console.log("\n\nNot Found");
}

function options() {
    console.log(`
        Choose one of the options;
                    1. Add grocery items
                    2. Search grocery items
                    3. Remove grocery items
                    4. Print the entire list
                    5. Exit program`);
    let run = prompt("Enter here: ");
    if (run > 0 && run <= 5) {
        if (run == 5) {
            return 'exit';
        }
        return run;
    } else{
        console.log("\n\nYou entered an Invalid Number!");
        options();
    }
}

function adding(groceries) {
    let newElement = prompt("Enter the Item in which you want to add?: ");

    let check = 0;
    for (let i = 0; i < groceries.length; i++) {
        if (newElement.toLowerCase() == groceries[i].toLowerCase()) {
            check++;
        }
    }
    if (check == 0) {
        groceries.push(newElement);
        console.log(`\n\n${newElement} has been added to the list.`);
    } else {
        console.log("\n\nYou already have this item in the list.");
    }
}

function removal(groceries) {
    let newElement = prompt("Enter the Item in which you want to remove?: ");

    let check = 0;
    let index;
    for (let i = 0; i < groceries.length; i++) {
        if (newElement.toLowerCase() == groceries[i].toLowerCase()) {
            check++;
            index = i;
        }
    }
    if (check != 0) {
        groceries.splice(index, 1);
        console.log(`\n\n${newElement} has been removed to the list.`);
    } else {
        console.log("\n\nYou already did not have this item in the list.");
    }
}

function display(groceries) {
    for (let i = 0; i < groceries.length; i++) {
    console.log(`${i+1}. ${groceries[i]}`);
    }
}

let numOfNums = retryFirst();

let groceries = [];
for (let i = 0; i < numOfNums; i++) {
    groceries[i] = prompt("Enter name of Grocery Item: ");
}

console.log(groceries);//just so the user knows what they first entered

let choice = options();

while (choice != 'exit') {
    choice = Number(choice);
    switch (choice) {
        case 1:
            adding(groceries);
            choice = options();
            break;
    
        case 2:
            finder(groceries);
            choice = options();
            break;

        case 3:
            removal(groceries);
            choice = options();
            break;

        case 4:
            display(groceries);
            choice = options();
            break;

        default:
            break;
    }
}
console.log("You have chosen to skip, Thank You!");
