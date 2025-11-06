let array1 = ["Danny", "Mandeep", "John", "Ruby"];

function fnUnshift(array, value) {
    //becuase I'm calling array1 into the fucntion it the chnages that occur in the function happen outside of the function as well
    array.splice(0, 0, value);//splice effects on a global scope so becuase it's changed here its be effect outisde of it
    //(ie adding the value at the beggining and this will effect the value outside fo the function)
    return array.length;
}

console.log(fnUnshift(array1, "hello"));
console.log(array1);
