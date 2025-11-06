let num = 25;

let binaryNum = num.toString(2); // this will return the variable num as string representation (usually we use 10 becuase we use base 10 when thinking of normal numbers)(but in this case we will use 2 becuase base 2 is binary)

let returnString = "";

if (binaryNum[0] != '-') {
    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] == 0) {
            returnString += "false "
        } else {
            returnString += "true "
        }
    }
} else {
    for (let i = 1; i < binaryNum.length; i++) {
        if (binaryNum[i] == 0) {
            returnString += "false "
        } else {
            returnString += "true "
        }
    }
}

console.log(returnString);
