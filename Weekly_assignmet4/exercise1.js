const prompt = require("prompt-sync")();

let x = prompt("Enter intial digit: ");
let num = prompt("Enter digit place you want to find: ");

returnNum(x, num);

function returnNum(x, num) {
    if (x.length >= num) {
        num = x.length-num;
        x = x[num];
        console.log(x);

    } else{
        console.log("NaN");
    }    
}


