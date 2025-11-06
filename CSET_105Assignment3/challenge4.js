const prompt = require("prompt-sync")();

function retry() {
    let num = Number(prompt("Enter a number: "));
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}


function comparason(...num) {//nums will be an array that will hold every arguemt entered into the function.
    //becuase the argument is an array itlls become a 2d array so the following calling of num is as a 2d array
    let number = [];
    
    for (let i = 0; i < num[0].length; i++) {
        number[i] = num[0][i];
        console.log(number);
    }
    let minNum;// this will be the value that will hold the lowest number

    minNum = number[0];//this will assign the starting value to the first record of the array
    for (let i = 0; i < number.length-1; i++) {//this will run through every array record 
        minNum = Math.min(minNum, number[i+1]);//this will compare the current record to the next record and will assign the lowest value t the variable comparing that lower value to the next and doing so over and over again til the lowest value is assigned to the variable
        
    }
    return minNum;//this will return the lowest value
}

let count = 0;
let array = [];
let run = true;
while (run) {
    let choice = prompt("Do you want to enter a number? (y/n): ");
    choice = choice.toLowerCase();
    switch (choice) {
        case "y":
            array[count] = retry();
            count++;
            break;

        case "n":
            run = false;
            if (array.length > 0) {
                console.log(comparason(array));
            }
            break;
        default:
            console.log("You entered an incorrect value.")
            break;
    }
    
}
// -> 1