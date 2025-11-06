let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let rand_aplha = ['x', 'm', 'd', 'a', 'p', 't', 'z', 'q', 'r', 'b', 'w', 'h', 'n', 'k', 'j', 'v', 'o', 'c', 's', 'g', 'f', 'e', 'y', 'u', 'i', 'l'];

function fnFindIndex(array, element, logic) {
    for (let i = 0; i < array.length; i++) {
        switch (logic) {
            case 1:
                return lessThanFI(array, element);
            case 2:
                return greaterThanFI(array, element);
            case 3:
                return equalFI(array, element);
            default:
                if (logic == undefined) {
                    console.log("\nNo logic argument was entered");
                    return equalFI(array, element);//this will be the default becuase often people want to find the exact index of a value in an array
                }
                return equalFI(array, element);
        }
    }
}

function lessThanFI(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < element) {
            return i;
        }
    }
    return -1;
}

function greaterThanFI(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > element) {//when the array is
            return i;
        }
    }
    return -1;
}

function equalFI(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {//when the array is
            return i;
        }
    }
    return -1;
}

console.log(fnFindIndex(alphabet, 'i', 3));//this will print 8 becuase in the array alphabet the string 'i' is in index 8
console.log(fnFindIndex(alphabet, 't', 1));//this will print out 0 becuase index 0 has a value that is less than 't' (ie 'a' (which is less than the binary value of 't'))
console.log(fnFindIndex(alphabet, 'x', 2));//this will print out 24 becuase the index following the letter x is y which is index 24 (y)
console.log(fnFindIndex(alphabet, '1'));//this will print -1 because 1 is not an element in the array 
console.log();

//lets try this with a random alphabet
console.log("Random Alphabet");

console.log(fnFindIndex(rand_aplha, 'j', 3));// this will return j bc j is in the random array is at index 14
console.log(fnFindIndex(rand_aplha, 'h', 1));// this will print 2 becuase at index 2 is the letter 'd' which has a binary value less than h's
console.log(fnFindIndex(rand_aplha, 'q', 2));// this will print 0 becuase x is greater than q and x is the first index of the array


