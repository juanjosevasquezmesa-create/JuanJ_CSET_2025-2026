
//with Higher-Order Functions
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);//instead of creations a sole function for the doubling of each item you can do it inside of the map function's parameters
//using the "=>" will make it smaller, the inital variable will be the parameter and the return will be whatever is after the "=>"
console.log(arr2);


const birthYear = [1975, 1997, 2002, 1995, 1985];

const ages = birthYear.map(year => 2018 - year);//this will run through each item in the array, while doingso i will assign the element as year and entering it into the funtion and returing after the amth has been done

console.log(ages);
