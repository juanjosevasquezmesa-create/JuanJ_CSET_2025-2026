for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {//this is to make sure that anything that goes into the next block is either divisable by 3 or 5
        if (i % 5 != 0) {//this will remove any number divisable by 5 
            console.log("Fizz");//if the num is only diviable by 3
        } else {
            if (i % 3 != 0) {// and this for anything diviable by 3
                console.log("Buzz");//if the num is only diviable by 5
            } else {
                console.log("FizzBuzz");//this will have any number that bypasses the previous conditions
            }
        }
    } else {
        console.log(i);
    }
}