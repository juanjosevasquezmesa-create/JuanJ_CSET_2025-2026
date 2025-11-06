console.log("All numbers from 1-50: ");
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log("All non negative numbers less than 25: ");
for (let i = 0; i < 25; i++) {
    console.log(i);
}
console.log("All non negative odd numbers less than 25: ");
for (let i = 0; i < 25; i++) {
    if (i % 2 != 0) {
      console.log(i);  
    } 
}
console.log("All non negative numbers divisable by 3 that are less than 25: ");
for (let i = 1; i < 25; i++) {
    if (i % 3 == 0) {
      console.log(i);  
    } 
}

console.log("the multiples of 5 from 0-50: ");
for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
      console.log(i);  
    } 
}

console.log("Multiples of 2 or multiples of 3, but not multiples of both 2 and 3: ");
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0 || i % 3 == 0) {//this only allows numbers that are multiple of 2 or 3 
        if (i % 2 != 0 || i % 3 != 0) {//this makes sure that the value is not simutaniously a multiple of both
            console.log(i); 
        }
    } 
}

console.log("Multiples of 2 and 3, but not multiples of 12 (up to 100).: ");
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0 || i % 3 == 0) {//this only allows numbers that are multiple of 2 or 3 
        if (i % 12 != 0) {//this makes sure that the value is not a multiple of 12
            console.log(i); 
        }
    } 
}