//reduce function will add all the items in an array and return it

//Non-Higher-Order Function
const arr_simple = [5, 7, 1, 8, 4];

let sum_simple = 0;

for (let i = 0; i < arr_simple.length; i++) {
    sum_simple += arr_simple[i];
}
console.log(sum_simple);
//25

//Higher-Order Function
const arr = [5, 7, 1, 8, 4];

const sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum);
//25

const arr_Fixed = [5, 7, 1, 8, 4];

const sum_Fixed = arr_Fixed.reduce(function (accumulator, currentValue) {// this callback function has 2 parameters (accumulator and currentValue) and the accumulator will take the value of all the past values combined and the current value will be equal to the current array to be added to the next number
    return accumulator + currentValue;
}, 10);// 10 will be the starting value of the funtions (fixed value)

console.log(sum_Fixed);
//35

