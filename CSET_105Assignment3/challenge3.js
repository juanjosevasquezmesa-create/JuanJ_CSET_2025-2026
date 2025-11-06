function factorial(num) {
    
    if (num > 1) {
            let check = num;
        for (let i = 1; i < check; i++) {
            num = num*(check-i);
        }
        return num;
    }else{
        return 1;
    }
    
}
console.log(factorial(5));