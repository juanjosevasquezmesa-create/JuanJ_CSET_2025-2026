const prompt = require("prompt-sync")();

let first_num = Number(prompt("please enter a number: "));
//Number will convert the string into a number if all characters are numeric values
//if they are not all numeric values it will become a NaN (not a number)

let second_num = Number(prompt("A second number, please: "));

if (!isNaN(first_num) && !isNaN(second_num)) {
    console.log(`The sum is, ${first_num + second_num}`);
} else {
    console.log("Boht values have to a be a number!");
}

//becuase both of the values are numeric values they'll add like numbers and combine in value
