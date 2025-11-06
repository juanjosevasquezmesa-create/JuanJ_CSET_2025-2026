console.log("all numbers from 1 - 50");
for (let i = 50; i >= 0; i--) {
    console.log(i);
}

console.log("All non negative numbers less than 25");
for (let i = 25; i >= 0; i--) {
    console.log(i);
}

console.log("All non negative odd numbers less than 25: ");
for (let i = 25; i >= 0; i--) {
    if (i % 2 != 0) {
      console.log(i);  
    } 
}
console.log("All non negative numbers divisable by 3 that are less than 25: ");
for (let i = 25; i >= 0; i--) {
    if (i % 3 == 0) {
      console.log(i);  
    } 
}

console.log("the multiples of 5 from 0-50: ");
for (let i = 50; i >= 0; i--) {
    if (i % 5 == 0) {
      console.log(i);  
    } 
}

console.log("Multiples of 2 or multiples of 3, but not multiples of both 2 and 3: ");
for (let i = 50; i >= 0; i--) {
    if (i % 2 == 0 || i % 3 == 0) {
        if (i % 2 != 0 || i % 3 != 0) {
            console.log(i); 
        }
    } 
}

console.log("Multiples of 2 and 3, but not multiples of 12 (up to 100).: ");
for (let i = 100; i >= 0; i--) {
    if (i % 2 == 0 || i % 3 == 0) {
        if (i % 12 != 0) {
            console.log(i); 
        }
    } 
}