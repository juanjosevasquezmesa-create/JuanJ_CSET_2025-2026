function chicken() {
    return egg();
}

function egg() {
    return chicken();
}
console.log(chicken() + " came first.");
// -> ?? 
//this will overload the memory by constantly running the other function and cause an error