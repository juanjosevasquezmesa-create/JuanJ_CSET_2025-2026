const prompt = require("prompt-sync")();

let fName = prompt("Please enter your first name: ");

let sName = prompt("And your last name, please?: ");

console.log(`It is nice to meet you, ${fName+ " " + sName}!`);// using back tick will act like printf and to call a function in text use 
// you can add string inside of these brackets like the space string 