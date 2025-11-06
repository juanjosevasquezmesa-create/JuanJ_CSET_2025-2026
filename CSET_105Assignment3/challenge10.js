function LCM(num1, num2) {
    let multiple;
    let num1Multiple;
    let num1Check;
    let num2Multiple;
    let num2Check;
    for (let i = num2; i > 0; i--) {
        num1Multiple = num1 * i;
        if (num1Multiple % num2 == 0) {
            num1Check = num1Multiple;
        }
    }
    for (let i = num1; i > 0; i--) {
        num2Multiple = num2 * i;
        if (num2Multiple % num1 == 0) {
            num2Check = num2Multiple;
        }
        
    }
    if (num1Check > num2Check) {
        multiple = num2Check;
    }else{
        multiple = num1Check;
    }
    return multiple;
}

console.log(LCM(5, 7));
// -> 35