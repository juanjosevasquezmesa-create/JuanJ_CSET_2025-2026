function allCaps(char) {
    const charCode = char.charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
        // subtract 32 to get the uppercase ASCII code
        return String.fromCharCode(charCode - 32);
      } else {
        // If it's not uppercase letter, return the original character
        return char;
      }
}
function functionStart(str) {
    let strArray = str.split("");
    let element = [];
    for (let i = 0; i < strArray.length; i++) {
        element[i] = allCaps(strArray[i]);
        
    } 
    console.log(element.join(""));   
} 

functionStart("Hi Guys its Ode");


