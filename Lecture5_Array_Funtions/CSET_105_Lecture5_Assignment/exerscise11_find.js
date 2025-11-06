
let array = [1, 2, 3, 4, 5, 6];

function fnFind(array, num, condition) {
    switch (condition) {
        case 1:
            return lesserFind(array, num);
    
        case 2:
            return greaterFind(array, num);

        case 3:
            return equalFind(array, num);
        default:
            if (condition == undefined) {
                console.log("\nNo logic argument was entered");
                return equalFind(array, num);
            }
            return equalFind(array, num);
    }
}

function lesserFind(array, num) {//this checks if atleast 1 element in the array is less than the number compared
    for (let i = 0; i < array.length; i++) {
        if (array[i] < num) {
            return array[i];
        }        
    }
    return -1;
}

function greaterFind(array, num) {//this checks if atleast 1 element in the array is greater than the number compared
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            return array[i];
        }        
    }
    return -1;
}

function equalFind(array, num) {//this checks if atleast 1 element in the array is equal to the number compared
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            return array[i];
        }        
    }
    return -1;
}

console.log(fnFind(array, 0, 1));
