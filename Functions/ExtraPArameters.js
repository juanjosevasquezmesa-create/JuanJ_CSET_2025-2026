function addSelf(x) {//this function has a single parameter
    return x+x;
}

console.log(addSelf(2, 5, 6, 7));//although I added many arguements it'll only look at the first one and ignore the others and this applies to functions with multiple parameters and itll only take the values with the corrresponding arguemnts/parameters 

function hi(name, password) {
    console.log("Hello, " + name + " your password is " + password);
}

hi("JJ");//although the second parameter is missing it'll make it's value as 'undefined'