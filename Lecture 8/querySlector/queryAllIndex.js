//a function to count the amount of tags asked by the user
function count(selector) {
    return document.querySelectorAll(selector).length; //this checks the whole document to see how many instances of the selector there are
}


console.log(count("p"));
// -> 4
console.log(count(".animal"));// calling a class called 'animal'
// -> 2
console.log(count("p .animal"));// calling each instance of an animal class inside of a p tag
// -> 2
console.log(count("p > .animal"));// Direct children of a <p> tag
// -> 1



