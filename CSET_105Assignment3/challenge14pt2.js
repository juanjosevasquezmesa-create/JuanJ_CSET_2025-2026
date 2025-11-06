function countBs(word, char) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
           counter++; 
        }
    }
    return counter;
}

console.log(countBs("Hello Everyone", "e"));