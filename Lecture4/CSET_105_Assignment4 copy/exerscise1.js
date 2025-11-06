const prompt = require("prompt-sync")();

function retry() {
    let num = Number(prompt("Enter a number: "));
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}
function retryFirst() {
    let num = Number(prompt("How many numers do you want to add?: "));
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}

function sumTotal(nums) {
    let num = 0;//starting value for the counting
    for (let i = 0; i < nums.length; i++) {
        num += nums[i];
    }
    return num;
}

let numOfNums = retryFirst();

let array = [];
for (let i = 0; i < numOfNums; i++) {
    array[i] = retry();
    
}

console.log(sumTotal(array));