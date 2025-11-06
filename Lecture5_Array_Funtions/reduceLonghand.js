const nums = [1, 2, 3, 4, 5];

function reduceCustom(arr, fn, intialValue) {
    let accumulator = intialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i]);
    }
    return accumulator;
}

//sum all numbers
const sum = reduceCustom(nums, function (total, num) {
    return total + num;
}, 0);

console.log(sum);