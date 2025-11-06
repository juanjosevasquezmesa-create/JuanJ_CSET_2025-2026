function toSwapCase(char) {
  const charCode = char.charCodeAt(0);

  // Check if the character is a lowercase letter (a-z)
  if (charCode >= 97 && charCode <= 122) {
    // Subtract 32 to get the uppercase ASCII code
    return String.fromCharCode(charCode - 32);
  } else {
    if (charCode >= 65 && charCode <= 90) {
        // add 32 to get the lowercase ASCII code
        return String.fromCharCode(charCode + 32);
      } else {
        // If it's not a lowercase or uppercase letter, return the original character
        return char;
      }
  }
}

function functionStart(str) {
    let strArray = str.split("");
    let element = [];
    for (let i = 0; i < strArray.length; i++) {
        element[i] = toSwapCase(strArray[i]);
        
    } 
    console.log(element.join(""));   
} 

functionStart("Hi Guys its Ode");
