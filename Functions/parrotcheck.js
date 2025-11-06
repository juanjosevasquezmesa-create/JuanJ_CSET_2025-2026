const prompt = require("prompt-sync")();

function numCheck(num) {
    if (num < 0 || num >= 0) {
        console.log(`\nYou entered the number ${num}\n`);
        return false;
    }else {
        console.log(`\nInvalid number, ${num} is not a number\n`);
        return true;
    }
}

let run = true;

while (run) {
    run = numCheck(prompt("Please enter a number: "));
}