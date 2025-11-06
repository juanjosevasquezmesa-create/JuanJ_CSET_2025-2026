const prompt = require("prompt-sync")();
function allCaps(string) {
    let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let beta = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let stringArray = string.split("");
    console.log(stringArray);
    for (let i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (stringArray[i] == alpha[j]) {//the string element is equal to the uppercase letter
                stringArray[i] = beta[j];//this will make it lowercase when the letter is uppercase
            } else {
                if (stringArray[i] == beta[j]) {// the string element is equal to the lowecase
                    stringArray[i] = alpha[j];//this will make it uppercase when the letter is lowercase
                }
            }
        }
        
    }
    string = stringArray.join("");
    return string;
    
}
console.log(allCaps("Hey Everybody!"));