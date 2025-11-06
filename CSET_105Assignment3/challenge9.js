function GCF(num1, num2) {
    let minimum;
    let GCfactor;
    if (num1 > num2){
        minimum = num2;
    } else {
        minimum = num1;
    }
    for (let i = 0; i <= minimum; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            GCfactor = i;
        }
    }
    return console.log(GCfactor);
}
GCF(12, 18);
// -> 6