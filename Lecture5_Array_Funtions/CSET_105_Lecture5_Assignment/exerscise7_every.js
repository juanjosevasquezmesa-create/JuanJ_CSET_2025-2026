let array = [1, 2, 3, 4, 5, 6];
let equalArray = [10, 10, 10, 10];


function fnEvery(array, num, condition) {//array is the input array, num is the number being compared
    switch (condition) {
        case 1:
            return lesserEvery(array, num);
    
        case 2:
            return greaterEvery(array, num);

        case 3:
            return equalEvery(array, num);
        default:
            break;
    }
    
}

function lesserEvery(array, num) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= num) {//this checks the opposite of less than (<) which is (>=) so instead of checking if every number is less than the num condition you can just check if its the opposite, so this is pretty much the else statement without the if or reverse if statements
            result = false;
        }        
    }
    return result;
}

function greaterEvery(array, num) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= num) {//this checks the opposite of greater than (>) which is (<=) so instead of checking if every number is greater than the num condition you can just check if its the opposite, so this is pretty much the else statement without the if or reverse if statements
            result = false;
        }        
    }
    return result;
}

function equalEvery(array, num) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != num) {//this checks the opposite of not equal to the conditional number so it just check if atleast 1 number is not the same as the asked for value
            result = false;
        }        
    }
    return result;
}

console.log(fnEvery(array, 9, 1));//para 1 is the array, para 2 is the number being compared  1 = less than, 2 = greater than (not less than or equal to but mighht change) 3 = see if all the values are equal to the asked number
console.log(fnEvery(equalArray, 10, 3));// returns true becuase all of the elements in the array are equal to 10

