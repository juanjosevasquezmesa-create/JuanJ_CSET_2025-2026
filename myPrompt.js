const prompt = require("prompt-sync")();

let person = prompt("Please enter your name ", "EXAMPLE");//harry potter is the base option so if the user decides to just click ok without chaging whats in the box 'Harry Potter' will print out

console.log("hello, " + person);
//if (person != null) {
//  document.getElementById("demo").innerHTML =
//  "Hello " + person + "! How are you today?";
//}
//check : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt1
//https://www.w3schools.com/jsref/met_win_prompt.asp