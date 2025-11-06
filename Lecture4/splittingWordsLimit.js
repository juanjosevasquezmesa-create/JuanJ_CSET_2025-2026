let sentence = `According to all known laws of aviation, 
there is no way a bee should be able to fly.`;


let word_Array = sentence.split(" ", 3); //the second parameter is the amount of elements kept after the splitting (ie 3 in this case)
console.log(word_Array);
//['According', 'to', 'all']

console.log(word_Array.join(". "));//this will combine each array elemnt with the value in the paranthesis being whats in between 
//Secretarybirds. specialize. in. stomping