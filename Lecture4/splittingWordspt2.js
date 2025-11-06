let sentence = `According to all known laws ;, of aviation, 
there is no way a bee should be able to fly.\n`;

let word_Array = sentence.split(/[;, \n]+/); //this will speperate things based on if they have any of these (";" or ","" or " " or "\n")
/*
For example, to split by commas (,), semicolons (;), and spaces (` `),
the regular expression would be /[;, ]+/. 
The + quantifier indicates one or more occurrences of any character within the set.
//the plus pretty much takes out the empty array elements in the case a double condition happening back to back creating an empty value array

if you want to seperate by digits do /\d+/
*/  
console.log(word_Array);
//[""]

console.log(word_Array.join(" "));//this will combine each array elemnt with the value in the paranthesis being whats in between 
//Secretarybirds. specialize. in. stomping