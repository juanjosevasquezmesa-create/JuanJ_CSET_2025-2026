const prompt = require("prompt-sync")();

let x = Number(prompt("enter num: "));

// console.log(x);typeof x == 'number'
if (x < 0 || x >= 0) {//becuase the typeof logic still sees NaN as a number data type it'll allow it to pass the check
    //but if you check if it has a numberic value ie comparring it to  be greater, less than or equal to 0 itll then be able to check if it is a numeric value bc NaN does not hold a numbr value so it'll show as false
    console.log("You entered a number!");
}else {
    console.log("You did not enter a number");
}
