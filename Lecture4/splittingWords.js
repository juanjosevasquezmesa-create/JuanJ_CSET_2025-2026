let sentence = `According to all known laws of aviation, 
there is no way a bee should be able to fly.`;

//backtic allows a multiline string
//if you enter in a multiline strign it will also enter when ran (like \n)

let word_Array = sentence.split(" "); //this will take the variable (sentance) and make spit the string into arrays with each element being a word seperated by a a space (or whatever is in the paranthesis)
console.log(word_Array);
//[""]

console.log(word_Array.join(". "));//this will combine each array elemnt with the value in the paranthesis being whats in between 
//Secretarybirds. specialize. in. stomping