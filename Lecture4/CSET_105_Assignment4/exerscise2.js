const prompt = require("prompt-sync")();

function fib_series(times) {
    let startNum = 1;
    let preNumber = 0;

    let array = []
    for (let i = 0; i < times; i++) {
        //array[i] = startNum;// starts at 1
        array[i] = preNumber;//this will start from 0//bc the sequence starts at 0 instead of 1
        let nextNumber = preNumber+startNum;
        preNumber = startNum;
        startNum = nextNumber;
        
    }
    return array[times-1];
}

let times = prompt("Which number place do you want to find?: ");
console.log(fib_series(times));