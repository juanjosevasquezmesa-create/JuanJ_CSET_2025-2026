function comparason(...nums) {
    let numArray = [];//this is to declare an array
    let minNum;// this will be the value that will 
    for (const num of nums) {//this will run as mant times as there are agruguments inputted into the function 
        numArray.push(num);//this will assign every argument value into the array
    }
    minNum = numArray[0];//this will assign the starting value to the first record of the array
    for (let i = 0; i < numArray.length-1; i++) {//this will run through every array record 
        minNum = Math.min(minNum, numArray[i+1]);//this will compare the current record to the next record and will assign the lowest value t the variable comparing that lower value to the next and doing so over and over again til the lowest value is assigned to the variable
        
    }
    return minNum;//this will return the lowest value
}
console.log(comparason(2,9,3,1,5));