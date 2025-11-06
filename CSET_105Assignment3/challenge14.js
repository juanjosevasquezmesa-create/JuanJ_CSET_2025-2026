function countBs(word) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "B") {
           counter++; 
        }
    }
    return counter;
}

console.log(countBs("Bumble Bee"));