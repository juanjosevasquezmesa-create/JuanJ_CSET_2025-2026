let nums = [1, 3, 4, 5, 6, 7, 8, 9];
let letters = ["m", "a", "n", "d", "e", "e", "p"];

function fnShift(array) {
    let temp = array[0];
    for (let i = 1; i < array.length; i++) {
        array[i-1] = array[i];
    }
    return temp;
}

console.log(fnShift(nums));
console.log(fnShift(letters));

