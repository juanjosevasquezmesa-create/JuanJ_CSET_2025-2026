const prompt = require("prompt-sync")();

//My take

// function Difference(x, y) {
//     return console.log((x*x)-(y*y));
// }
// function numChecker(num) {
//     num = Number(num);
//     if (num < 0 || num >= 0) {
//         console.log("Thank you.");
//         return false;
//     }else{
//         console.log("Invalid number, Please enter a number.");
//         return true;
//     }
// }

// let run = true;
// let num1;
// let num2;

// while (run) {
//     num1 = prompt("Enter the first number: ");
//     run = numChecker(num1);
// }
// run = true;

// while (run) {
//     num2 = prompt("Enter Second number:");
//     run = numChecker(num2);
// }

// Difference(num1, num2);

function inputNum() {
    let input = prompt("Enter a number: ");
    let num = Number(input);
    while (isNaN(num)) {
        console.log("Invalid Value");
        input = prompt("Enter a number: ");
        num = Number(input);
    }
    return num;
}

let num1 = inputNum();
console.log("Thank you!");
let num2 = inputNum();
console.log(num1*num1 - num2 * num2);
