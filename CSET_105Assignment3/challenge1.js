const prompt = require("prompt-sync")();

function retry() {
    let num = Number(prompt("Enter a number: "));
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}

console.log(retry());