const prompt = require("prompt-sync")();

function mTable(x, a, b) {
    while (x != undefined && a != undefined && b != undefined && !isNaN(x) && !isNaN(a) && !isNaN(b)) {
        if (a > b) {//this is to make sure that the user does not enter an end value that is less than the start value whch should cause an error
            console.log("Your end is out of bounds from the start. Program closed.");
            break;
        }
        for (let i = a; i <= b; i++) {
            console.log(x*i);
        } 
        x = prompt("Enter the base table value: ");
        a = prompt("Enter the start table number: ");
        b = prompt("Enter the end table number: ");
        
    }
    console.log("Invalid number was entered so the program broke.");
}

mTable(12, 4, 6)