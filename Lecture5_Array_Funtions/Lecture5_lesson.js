// function sumOfTwoNumbers() {
//     let sum = 4+5;
//     return(sum);
// }
// const result = sumOfTwoNumbers();

// console.log("Sum of two numbers is: ", result)

// //concept 2
// function runFunction(f) {
//     f();
// }

// function hello() {
//     console.log("Hello World!");
// }

// function bye() {
//     console.log("Goodbye Class!");
    
// }

// runFunction(hello);
// runFunction(bye);

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCase(str) {
    return str.toUpperCase();
}

function lowerCase(str) {
    return str.toLowercase();
}

console.log(greet("Juan", upperCase))

let nums = [5, 10, 15];
let result = nums.map((item, index, arr) => {//the item is the element being call each iteration starting from 0 and going up by 1 (liek a for loop) index is to show the acual index of the element and the arr in this case is the arrray that is called before the .map function (this parameter will always be the last arguement)
    return item * index;
});

console.log(result);
//[0, 10, 30]

function op(item, i, arr) {
    if (arr.length < 5) {
        return item * i;
    } else {
        return item;
    }
}

let arr1 = [0, 1, 2, 3];
let arr2 = arr1.map(op);

let arr3 = [0, 1, 2, 3, 4];
let arr4 = arr3.map(op);

console.log(arr2);
//0, 1, 4, 9
console.log(arr4);
//0, 1, 2, 3, 4

let numbers1 = [0, 1, 2, 3, 4, 5, 6];
let evens = numbers1.filter((num) => num%2 === 0); //this will only return numbers if they meet the condition

console.log(evens);

let words = ["apple", "bat", "banana", "dog"];

let longWords = words.filter(word => word.length > 3);

console.log(longWords);

