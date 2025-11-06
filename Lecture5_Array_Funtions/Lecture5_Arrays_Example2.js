
//with Higher-Order Functions
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
    return item * 2;
});//instead of creations a sole function for the doubling of each item you can do it inside of the map function's parameters
console.log(arr2);

const birthYear = [1975, 1997, 2002, 1995, 1985];

const ages = birthYear.map(function (year) {
    return (2018 - year);
});

console.log(ages);