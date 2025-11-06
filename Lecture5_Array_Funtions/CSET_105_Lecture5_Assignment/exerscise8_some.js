//some checks if atlest 1 value in the array check the condition asked
let array = [1, 2, 3, 4, 5, 6];
let equalArray = [10, 10, 10, 10];


function fnSome(array, num, condition) {
    switch (condition) {
        case 1:
            return lesserSome(array, num);
    
        case 2:
            return greaterSome(array, num);

        case 3:
            return equalSome(array, num);
        default:
            break;
    }
    
}

function lesserSome(array, num) {//this checks if atleast 1 element in the array is less than the number compared
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < num) {
            result = true;
        }        
    }
    return result;
}

function greaterSome(array, num) {//this checks if atleast 1 element in the array is greater than the number compared
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            result = true;
        }        
    }
    return result;
}

function equalSome(array, num) {//this checks if atleast 1 element in the array is equal to the number compared
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            result = true;
        }        
    }
    return result;
}

console.log(fnSome(array, 4, 1));//this will return true becuase element 1, 2, 3 are all less than 4
console.log(fnSome(array, 10, 2));//this will return false becuase no element in the array is greater than 10

console.log(fnSome(array, 3, 3));//this will return true becuase there is an element with the value true in the array

console.log(fnSome(equalArray, 10, 3));//this will run true becuase there is an element with the number 10
