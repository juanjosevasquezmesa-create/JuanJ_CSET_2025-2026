const prompt = require("prompt-sync")();

let name = prompt("Please enter your name: \n");
// having a '\n' will make it so that each letter the user types will be added to the base word and it will prompt the user to type the next letter

//pretty much itll have the user type the word letter by letter and this happens because of the \n

//when the user clicks 'enter' it'll stop running the propt message and move onto the console.log 

console.log("Hello " + name);