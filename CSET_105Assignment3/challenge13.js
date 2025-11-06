const prompt = require("prompt-sync")();

function mTablePlus(x, y, a, b) {
    while (x != undefined && y != undefined && a != undefined && b != undefined && !isNaN(x) && !isNaN(a)&& !isNaN(y) && !isNaN(b)) {
        if (a > b || x > y) {
            console.log("Your end is out of bounds from the start. Program closed.");
            break;
        }
        for (let j = x; j < y; j++) {
            for (let i = a; i <= b; i++) {
                console.log(j*i);
            }
            console.log("\n");
        }
 
        x = prompt("Enter the start base table value: ");
        y = prompt("Enter the end base table value: ")
        a = prompt("Enter the start table number: ");
        b = prompt("Enter the end table number: ");
    }
    console.log("Invalid number was entered so the program broke.");
}

mTablePlus(4, 9, 1, 2);