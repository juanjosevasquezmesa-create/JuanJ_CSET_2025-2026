

function printHello() {
    let x = window.prompt("Give an Input");// html side prompt function
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = x;

}