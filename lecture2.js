const prompt = require("prompt-sync")();

let yourName = null;
do {
    yourName = prompt("Who are you?: ");
    if (typeof yourName !== 'number') {
        break;
    } else {
        console.log("PLease enter a number please.");
        yourName = null;
    }
} while (yourName = null);

console.log(yourName);