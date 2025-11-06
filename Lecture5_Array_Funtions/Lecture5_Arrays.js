//Without Higher-Order Function

// let arr1 = [1, 2, 3];
// let arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);
// }
// console.log(arr2);
// //prints [2,4,6];

//with Higher-Order Functions

//Map will change all elements in a fucntion based on the function you put inside of the function/ block, this will effect all elements in the function you call and you can aply the changed elements to a new array 
function doubleItem(item) {
    return item * 2;
}

let arr1 = [1, 2, 3];
let arr2 = arr1.map(doubleItem);//this will double
console.log(arr2);

let birthYear = [1975, 1997, 2002, 1995, 1985];
let ages = [];

for (let i = 0; i < birthYear.length; i++) {//runs through yevery birth year and finds how old they would be in 2018
    let age = 2018 - birthYear[i];
    ages.push(age);
}

//prints [43, 21, 16, 23, 33]
console.log(ages);

let persons = [
    { name: 'Ashraf', age: 43 },
    { name: 'Awwab', age: 11 },
    { name: 'Mardiyyah', age: 7},
    { name: 'Mothimanna', age: 38 }
];

let fullAge = [];// you have to declare the variable to an array becuase javaScript does not assume this 

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {//this looks in each {} but to call the intger associated with the "age" variable you have you call (arrayName[indexOfContainer].variableName)
        fullAge.push(persons[i]);//if you call the index of the whole conatiner it will add the matched variable and value ie if you call index 0 it will return { name: 'Ashraf', age: 43 }
    }
    
}

console.log(fullAge);
//[ { name: 'Ashraf', age: 43 }, { name: 'Mothimanna', age: 38 } ]

//Filter which acts like map but you can add a condition to highlight/ return an element instead of changing an element and returnign all of them into a new array

let fullAge2 = persons.filter(person => person.age >= 18);//this runs through every element and checks the .age variable to see if it is 18 and if it is it is added to the temperary array list then it is assigned to the final new array ie (fullAge2)

let arr_Fixed = [5, 7, 1, 8, 4];

let sum_Fixed = arr_Fixed.reduce(function (accumulator, currentValue) {// this callback function has 2 parameters (accumulator and currentValue) and the accumulator will take the value of all the past values combined and the current value will be equal to the current array to be added to the next number
    return accumulator + currentValue;
}, 10);// 10 will be the starting value of the funtions (fixed value)

console.log(sum_Fixed);
//35

let strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    let newArray = [];//this will hold the length number of all of the strings
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));//this will run the fn function
    }
    return newArray;
}

let lenArray = mapForEach(strArray, function (item) {
    return item.length;
});

console.log(lenArray);

//same thing as the top but using the premade high order function
function print(item) {
    return item.length;
}
let lenArray2 = strArray.map(print);

console.log(lenArray2);

let arr_filter = [1, 2, 3, 4, 5, 6];

let arr_filtered = arr_filter.filter(element => element === 2 || element === 4);
console.log(arr_filtered);

//sort() sorts the array from largest to smallest 

let arr_sort = [1, 2, 3, 4, 5, 6];
let alphabet = ["f", "a", "c", "v", "z"];

//sorting in decending order
let decend = arr_sort.sort((a, b) => a > b ? -1 : 1);// becuase the -1 occurs of the condition (current number is greater than the next number) this number is moved the the left of the array to keep the higher number on the left and if the condition is false the current vlaue is moved left to have that lesser number be checked with the next condition
//this logic is called tenary logic ((condition) ? expressionIfTrue : expressionIfFalse; ) is 
console.log(decend);
 
//sort in ascending order
let ascend = alphabet.sort((a, b) => a > b ? 1 : -1);//this, 1 (move right) if current letter is greater than the following letter -1 (move left) if the current letter is less than the second letter
console.log(ascend);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();//this sorts the list of words in acending order

console.log(fruits);

let arr = [1, 2, 3];
arr.forEach(element => {
    console.log(element);
});
// returns the function and runs as many times as there is elements
// pretty 
// 1
// 2
// 3

arr1 = ["a", "b", "c"];
arr2 = ["d", "e", "f"];

console.log(arr1.concat(arr2)); //["a", "b", "c", "d", "e", "f"] combines the first array with the second array (arr1)
console.log(arr1);//["a", "b", "c"]
console.log(arr2);//["d", "e", "f"]

arr = [1, 2, 3, 4, 5, 6, 7];

//.every returns a boolean depending if the condition is met for ATLEAST ONE of the array elements
//.every depends on a functions that compares elements

// This one checks every element to see if ALL of the elements are greater than 5 (so if all are not greater than 5 it will return false)
let greaterFive = arr.every(num => num > 5);
console.log(greaterFive); // false

//this one checks if every element is less than 9
let lessNum = arr.every(num => num < 9);
console.log(lessNum);// true

//this one checks if atleast 1 num is true
greaterFive = arr.some(num => num > 5);
console.log(greaterFive); // true

// This one checks every element to see if there is atleast 1 element less then or equal to 0
lessNum = arr.some(num => num <= 0);
console.log(lessNum);// false

//.inlcude checks if an array inlcludes the value/element that is in the paranthesis
//this works like an for loop with an if statement that checks if element === searchedValue

arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(2));// true //bc this array has the number 2
console.log(arr.includes(7));// flase // bc this array does not have the number 7

//.join you alr know
arr = ["m", "a", "n", "d", "e", "e", "p"]
console.log(arr.join(''));//mandeep //joins all the elements together with the string inside of the paranthesis in between each elemetn
console.log(arr.join(' '));//m a n d e e p
console.log(arr.join('r'));//mrarnrdrererp

//reduce you alr know
arr = [1, 2, 3, 4, 5, 6];
let reduced = arr.reduce((total, current) => total + current);
console.log(reduced);// 21

//.find searched the array and finds the first element that passes the condition specified in the function
arr = [1, 2, 3, 10, 4, 5, 6, 7, 8, 9, 10];
let found = arr.find(element => element > 5); //returns
console.log(found);// 10

arr = [1, 2, 3, 4, 5, 6];
found = arr.find(element => element > 5); //returns
console.log(found);// 6

//findIndex will search through the whole array to find the first element that passes the condition and prints out the INDEX
arr = ["Danny", "Mandeep", "John", "Ruby"];
let indexFinder = arr.findIndex(element => element === "Mandeep");
console.log(indexFinder);// 1

indexFinder = arr.findIndex(element => element === "Hello");
console.log(indexFinder);// -1 (not found)

//indexOf is the same as find index but a lot easier
arr = ["Danny", "Mandeep", "John", "Ruby"];
indexFinder = arr.indexOf("Mandeep"); // index 1
indexFinder = arr.indexOf("Mandeep"); // -1 not found
 //.fill
arr = new Array(3); //makes an empty array will 3 possible elements but all slots are empty
console.log(arr);// [ <3 empty items> ] // [empty, empty, empty]

console.log(arr.fill(10));//fills all of the empty elements wil the valeue 10
//[10, 10, 10]

//.slice
arr = ["a", "b", "c", "d", "e"];
let sliced = arr.slice(2, 4);
console.log(sliced); //["c", "d"]
console.log(arr);//["a", "b", "c", "d", "e"]

//.reverse will reverse the order of all teh elements in the array
arr = [1, 2, 3];
arr.reverse();
console.log(arr);


