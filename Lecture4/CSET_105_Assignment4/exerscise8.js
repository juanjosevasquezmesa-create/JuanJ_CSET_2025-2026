const prompt = require("prompt-sync")();

function retry(num) {
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}

function max(numbers) {
    let result = -Infinity;//infinite is a cosntant value being the lowest possible number
    for (let number of numbers) {//this will run though every element in the array
        if (number > result){//this will check if the new number is less than the previous number
            result = number;//if the number is greater then the previous then it will updaye result with the new highest value, then it will run the loop again
        }
        
    }
    return result;//prints out the highest number
}

function start() {
    let choice = Number(prompt("Enter how many numbers you want to compare: "));
    let numOfNums = retry(choice);

    let array = [];

    for (let i = 0; i < numOfNums; i++) {
        choice = Number(prompt("Enter the number you want to add: "));
        array[i] = retry(choice);
        
    }

    console.log(max(array));
}

start();
// console.log(max(4, 1, 9, -2));
// // 9
