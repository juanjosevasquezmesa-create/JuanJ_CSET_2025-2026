function isEven(input) {
    if (input > 1) {
        input -= 2;
        return isEven(input);
    } else {
        if (input == 0) {
            return "Zero is even.";
        } else {
            return "One is odd";
        }
    }
}

console.log(isEven(50));
console.log(isEven(75));