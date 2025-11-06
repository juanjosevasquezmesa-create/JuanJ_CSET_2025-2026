let array = [1, 2, 3, 4, 5, 6];

function fnInclude(array, search) {
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == search) {
            result = true;
        }
        
    }
    return result;
}

console.log(fnInclude(array, 3));// returns true becuase the array has an element with the value of 3

console.log(fnInclude(array, 10));// returns false becuase there is no array element with the value of 10

