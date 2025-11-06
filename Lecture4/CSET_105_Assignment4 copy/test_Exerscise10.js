const prompt = require("prompt-sync")();
function allCaps(string) {
    let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let stringArray = string.split("");
    console.log(stringArray);
    for (let i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (stringArray[i].toLowerCase() == alpha[j].toLowerCase()) {
                stringArray[i] = alpha[j];
            } 
        }
        
    }
    string = stringArray.join("");
    return string;
    
}
console.log(allCaps("Hey Everybody!"));