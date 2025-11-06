function removal(index, array) {// because you are using the array parameter as an array you should not use the ...array as a parameter
    array.splice(index, 1); // this will delete 4 elements starting at the specified index
    return array;
}

// var array = [0, 1, 2, 3, 4, 5, 6, 7];

// console.log(removal(3, array));