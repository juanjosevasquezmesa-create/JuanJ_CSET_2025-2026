const prompt = require("prompt-sync")();

function Difference(x, y) {
    return console.log((x*x)-(y*y));
}
function numChecker(num) {
    num = Number(num);
    if (num < 0 || num >= 0) {
        console.log("Thank you.");
        return false;
    }else{
        console.log("Invalid number, Please enter a number.");
        return true;
    }
}

let run = true;
let num1;
let num2;

while (run) {
    num1 = prompt("Enter the first number: ");
    run = numChecker(num1);
}
run = true;

while (run) {
    num2 = prompt("Enter Second number:");
    run = numChecker(num2);
}

Difference(num1, num2);
