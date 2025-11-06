function adding(index, element, array) {
    array.splice(index, 0, element);
    
    return array;
}

// var array = [0, 1, 2, 3, 4, 5, 6, 7];

// console.log(adding(4, "bear", array));