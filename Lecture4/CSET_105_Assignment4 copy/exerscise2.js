const prompt = require("prompt-sync")();

function fib_series(times) {
    let i = 0;
    let startNum = 1;
    let preNumber = 0;

    let array = []
    for (let i = 0; i < times; i++) {
        array[i] = startNum;
        let nextNumber = preNumber+startNum;
        preNumber = startNum;
        startNum = nextNumber;
        
    }
    return array[times-1];
}

let times = prompt("Which number place do you want to find?: ");
console.log(fib_series(times));